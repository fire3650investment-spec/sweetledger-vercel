// src/components/SettlementModal.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { X, Calendar, ArrowRight, Wallet, AlertCircle, Coins } from 'lucide-react';
import { getLocalISODate, formatCurrency, calculateTwdValue } from '../utils/helpers';

export default function SettlementModal({
    isOpen,
    onClose,
    ledgerData,
    currentUser,
    currentProjectId,
    onConfirm
}) {
    if (!isOpen || !ledgerData) return null;

    const [cutoffDate, setCutoffDate] = useState(getLocalISODate());
    const [paymentDate, setPaymentDate] = useState(getLocalISODate());
    const [note, setNote] = useState('');

    // [Critical Fix] Calculation logic MUST match DashboardView.jsx exactly
    const settlementInfo = useMemo(() => {
        const users = ledgerData.users || {};
        const allTxs = ledgerData.transactions || [];
        const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
        const isPrivateProject = currentProject?.type === 'private';
        const rates = currentProject?.rates || {};

        // Identity
        const myUid = currentUser?.uid;
        if (!myUid) return { amount: 0, payerId: '', payeeName: '', isCreditor: false };

        const partnerUid = Object.keys(users).find(uid => uid !== myUid);
        const partnerName = users[partnerUid]?.name || '對方';
        const myName = users[myUid]?.name || '我';

        // [Fix 1] Filter by current project
        const projectTxs = allTxs.filter(t => (t.projectId || 'daily') === currentProjectId);

        // Filter by cutoff date
        const cutoffTime = new Date(cutoffDate).setHours(23, 59, 59, 999);
        const periodTxs = projectTxs.filter(t => new Date(t.date).getTime() <= cutoffTime);

        // Calculate using SAME logic as DashboardView
        let myPaid = 0;
        let myLiability = 0;

        periodTxs.forEach(tx => {
            if (tx.isSettlement) return; // Skip settlement txs in main calc

            // [Fix 2] Use currency conversion
            const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (isNaN(amountTwd)) return;

            // [Fix 3] Handle ALL splitTypes like Dashboard
            if (tx.splitType === 'multi_payer') {
                let myActualPaid = 0;
                if (tx.customSplit && typeof tx.customSplit === 'object') {
                    const raw = tx.customSplit[myUid];
                    const val = parseFloat(raw);
                    if (!isNaN(val)) myActualPaid = calculateTwdValue(val, tx.currency || 'TWD', rates);
                }
                const myResponsibility = amountTwd / 2;
                myPaid += myActualPaid;
                myLiability += myResponsibility;
            } else {
                if (tx.payer === myUid) myPaid += amountTwd;
                let liability = 0;

                // Logic for liability - EXACT copy from Dashboard
                if (tx.splitType === 'even') {
                    liability = amountTwd / 2;
                } else if (tx.splitType === 'custom') {
                    if (tx.customSplit && typeof tx.customSplit === 'object') {
                        const myShareRaw = tx.customSplit[myUid];
                        const myShare = parseFloat(myShareRaw);
                        if (!isNaN(myShare)) liability = calculateTwdValue(myShare, tx.currency || 'TWD', rates);
                    }
                } else if (tx.splitType === 'host_all') {
                    liability = users[myUid]?.role === 'host' ? amountTwd : 0;
                } else if (tx.splitType === 'guest_all') {
                    liability = users[myUid]?.role === 'guest' ? amountTwd : 0;
                } else if (tx.splitType === 'self') {
                    // Payer paid for themselves, liability = full amount for payer, 0 for others
                    liability = tx.payer === myUid ? amountTwd : 0;
                } else if (tx.splitType === 'partner') {
                    // Payer paid for partner, liability = 0 for payer, full amount for partner
                    liability = tx.payer === myUid ? 0 : amountTwd;
                }

                // [Fix 4] Private project logic
                if (isPrivateProject) liability = amountTwd;

                if (!isNaN(liability)) myLiability += liability;
            }
        });

        // Handle settlement transactions
        const settlements = periodTxs.filter(tx => tx.isSettlement);
        let settledAmount = 0;
        settlements.forEach(tx => {
            const amount = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (!isNaN(amount)) {
                if (tx.payer === myUid) settledAmount += amount;
                else settledAmount -= amount;
            }
        });

        const periodBalance = (myPaid - myLiability) + settledAmount;

        // Also calculate current total (without date filter) for comparison
        let currentMyPaid = 0;
        let currentMyLiability = 0;

        projectTxs.forEach(tx => {
            if (tx.isSettlement) return;
            const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (isNaN(amountTwd)) return;

            if (tx.splitType === 'multi_payer') {
                let myActualPaid = 0;
                if (tx.customSplit && typeof tx.customSplit === 'object') {
                    const raw = tx.customSplit[myUid];
                    const val = parseFloat(raw);
                    if (!isNaN(val)) myActualPaid = calculateTwdValue(val, tx.currency || 'TWD', rates);
                }
                currentMyPaid += myActualPaid;
                currentMyLiability += amountTwd / 2;
            } else {
                if (tx.payer === myUid) currentMyPaid += amountTwd;
                let liability = 0;
                if (tx.splitType === 'even') liability = amountTwd / 2;
                else if (tx.splitType === 'custom') {
                    if (tx.customSplit && typeof tx.customSplit === 'object') {
                        const myShare = parseFloat(tx.customSplit[myUid]);
                        if (!isNaN(myShare)) liability = calculateTwdValue(myShare, tx.currency || 'TWD', rates);
                    }
                } else if (tx.splitType === 'host_all') liability = users[myUid]?.role === 'host' ? amountTwd : 0;
                else if (tx.splitType === 'guest_all') liability = users[myUid]?.role === 'guest' ? amountTwd : 0;
                else if (tx.splitType === 'self') liability = tx.payer === myUid ? amountTwd : 0;
                else if (tx.splitType === 'partner') liability = tx.payer === myUid ? 0 : amountTwd;
                if (isPrivateProject) liability = amountTwd;
                if (!isNaN(liability)) currentMyLiability += liability;
            }
        });

        const allSettlements = projectTxs.filter(tx => tx.isSettlement);
        let totalSettled = 0;
        allSettlements.forEach(tx => {
            const amount = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (!isNaN(amount)) {
                if (tx.payer === myUid) totalSettled += amount;
                else totalSettled -= amount;
            }
        });

        const currentTotalBalance = (currentMyPaid - currentMyLiability) + totalSettled;

        // Result
        const amount = Math.abs(periodBalance);
        const isCreditor = periodBalance > 0; // Positive = I am owed
        const currentAmount = Math.abs(currentTotalBalance);

        // Warning: If period debt > current debt, user may have already paid some
        const showWarning = !isCreditor && (amount > currentAmount + 1);
        const safeAmount = showWarning ? currentAmount : amount;

        return {
            amount: safeAmount,
            rawPeriodAmount: amount,
            currentTotalAmount: currentAmount,
            payerId: isCreditor ? partnerUid : myUid,
            payeeName: isCreditor ? myName : partnerName,
            payerName: isCreditor ? partnerName : myName,
            isCreditor,
            partnerName,
            showWarning
        };

    }, [ledgerData, currentUser, currentProjectId, cutoffDate]);

    // Effect to update note
    useEffect(() => {
        if (settlementInfo.amount > 0) {
            setNote(`還款結清 (截至 ${cutoffDate.replace(/-/g, '/')})`);
        }
    }, [cutoffDate, settlementInfo.amount]);

    const handleConfirm = () => {
        onConfirm({
            amount: settlementInfo.amount,
            payerId: settlementInfo.payerId,
            payeeName: settlementInfo.payeeName,
            date: paymentDate,
            note
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-slide-up">

                {/* Header */}
                <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100 rounded-t-3xl">
                    <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                        <Coins className="text-emerald-500" size={20} />
                        結算債務
                    </h3>
                    <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600"><X size={20} /></button>
                </div>

                <div className="p-6 space-y-6">

                    {/* 1. Cutoff Date Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2">
                            <Calendar size={12} /> 設定結算截止日
                        </label>
                        <input
                            type="date"
                            value={cutoffDate}
                            onChange={(e) => setCutoffDate(e.target.value)}
                            max={getLocalISODate()}
                            className="w-full bg-gray-50 text-gray-900 font-bold py-3 px-4 rounded-xl outline-none border-2 border-transparent focus:border-emerald-500 transition-colors"
                        />
                        <p className="text-[10px] text-gray-400 mt-1 pl-1">系統將計算截至此日期的所有未結清款項</p>
                    </div>

                    {/* 2. Calculation Result & Visual */}
                    <div className={`p-4 rounded-2xl border-2 ${settlementInfo.isCreditor ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-gray-500">{settlementInfo.payerName} 應付給 {settlementInfo.payeeName}</span>
                            <span className="text-xs bg-white px-2 py-1 rounded font-bold text-gray-400 border">截至 {cutoffDate.slice(5).replace('-', '/')}</span>
                        </div>
                        <div className={`text-3xl font-bold ${settlementInfo.isCreditor ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {formatCurrency(settlementInfo.amount)}
                        </div>

                        {/* Warning Message */}
                        {settlementInfo.showWarning && (
                            <div className="mt-3 flex items-start gap-2 bg-white/60 p-2 rounded-lg border border-rose-200">
                                <AlertCircle size={14} className="text-rose-500 shrink-0 mt-0.5" />
                                <div className="text-xs text-rose-600">
                                    <span className="font-bold">注意：</span> 截止算出的欠款為 {formatCurrency(settlementInfo.rawPeriodAmount)}，但在那之後您似乎已經還了部分款項。系統建議僅支付剩餘的 {formatCurrency(settlementInfo.currentTotalAmount)} 以免多付。
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center text-gray-300">
                        <ArrowRight size={20} className="transform rotate-90" />
                    </div>

                    {/* 3. Payment Details */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2">
                            <Wallet size={12} /> 實際還款詳情
                        </label>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
                                <span className="text-sm font-bold text-gray-500 w-16 text-center">日期</span>
                                <input
                                    type="date"
                                    value={paymentDate}
                                    onChange={(e) => setPaymentDate(e.target.value)}
                                    className="flex-1 bg-transparent font-bold text-gray-700 outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
                                <span className="text-sm font-bold text-gray-500 w-16 text-center">備註</span>
                                <input
                                    type="text"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="flex-1 bg-transparent font-bold text-gray-700 outline-none placeholder-gray-300"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 flex gap-3 bg-white pb-[calc(env(safe-area-inset-bottom)+1rem)] rounded-b-3xl">
                    <button
                        onClick={handleConfirm}
                        disabled={settlementInfo.amount <= 0}
                        className="w-full bg-gray-900 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:shadow-none"
                    >
                        確認結清 {formatCurrency(settlementInfo.amount)}
                    </button>
                </div>

            </div>
        </div>
    );
}
