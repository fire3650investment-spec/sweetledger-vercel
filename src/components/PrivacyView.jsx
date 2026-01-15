import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyView({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pb-12 pt-[calc(env(safe-area-inset-top)+1rem)] px-6 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Shield size={20} className="text-rose-500" />
                    隱私權政策
                </h1>
            </div>

            <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-600">
                <p className="text-xs text-gray-400">最後更新日期：2026年1月15日</p>

                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1. 資料收集與使用</h3>
                    <p>
                        SweetLedger（以下簡稱「本應用程式」）極度重視您的隱私。我們僅收集運作本服務所需的最小限度資料：
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>帳戶資訊</strong>：透過第三方登入（Google/Apple）取得的電子郵件、顯示名稱與頭像，用於識別身分與建立共用帳本。</li>
                        <li><strong>記帳資料</strong>：您輸入的交易紀錄（金額、類別、備註、照片）。</li>
                        <li><strong>相機與相簿權限</strong>：僅在您主動使用「AI 掃描收據」功能時存取，用於辨識交易內容。我們不會私自上傳您的其他照片。</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2. 資料儲存與安全</h3>
                    <p>
                        您的所有資料皆儲存於 Google Firebase 安全雲端資料庫中。我們採用業界標準的傳輸層安全協議 (TLS/SSL) 進行加密傳輸。
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">3. 資料刪除權 (Right to deletion)</h3>
                    <p>
                        你可以隨時在「設定 &gt; 危險區域 &gt; 刪除帳號」中，永久刪除您的帳戶與所有相關資料。此操作不可逆，您的資料將從我們的伺服器中完全移除。
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">4. 第三方服務</h3>
                    <p>
                        本應用程式整合了 Google Gemini AI 進行收據辨識。上傳至 AI 模型的圖片僅用於一次性辨識，不會被用於訓練 AI 模型。
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">5. 聯絡我們</h3>
                    <p>
                        若您對本隱私權政策有任何疑問，請透過應用程式商店的支援頁面與我們聯繫。
                    </p>
                </section>
            </div>
        </div>
    );
}
