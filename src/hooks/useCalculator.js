import { useState, useCallback, useRef, useEffect } from 'react';

export default function useCalculator(onSubmit) {
    const [localAmount, setLocalAmount] = useState('');

    // [Performance] Use Ref to keep track of latest value without triggering re-creation of callbacks
    const localAmountRef = useRef(localAmount);
    useEffect(() => { localAmountRef.current = localAmount; }, [localAmount]);

    // Derived state (still causes re-render when changed, which is expected for UI updates)
    const isMathPending = /[+\-×÷]/.test(localAmount) && !/[+\-×÷]$/.test(localAmount);
    const isMathPendingRef = useRef(isMathPending);
    useEffect(() => { isMathPendingRef.current = isMathPending; }, [isMathPending]);

    const handleKeypadSubmit = useCallback(() => {
        const currentAmount = localAmountRef.current;
        const currentIsMathPending = isMathPendingRef.current;

        if (currentIsMathPending) {
            try {
                const safeExpr = currentAmount.replace(/×/g, '*').replace(/÷/g, '/');
                const result = new Function('return ' + safeExpr)();
                // Round to 2 decimal places to avoid floating point errors
                let finalVal = Math.round(result * 100) / 100;

                // [Validation] Max Limit Check (1億)
                if (finalVal > 100000000) finalVal = 100000000;

                setLocalAmount(finalVal.toString());
            } catch (e) {
                console.error("Calculation error", e);
            }
            return;
        }
        if (!currentAmount || parseFloat(currentAmount) <= 0) return;

        // [Validation] Simple Amount Check
        if (parseFloat(currentAmount) > 100000000) {
            setLocalAmount('100000000');
            return;
        }

        // Trigger the external submit callback (usually to switch overlay)
        if (onSubmit) onSubmit();
    }, [onSubmit]); // Dependency on onSubmit is unavoidable, but onSubmit should be stable from parent

    const handleKeyPress = useCallback((key) => {
        if (navigator.vibrate) try { navigator.vibrate(10); } catch (e) { }

        const operators = ['+', '-', '×', '÷'];

        if (key === 'AC') { setLocalAmount(''); return; }
        if (key === 'DEL') { setLocalAmount(prev => prev.slice(0, -1)); return; }
        if (key === 'DONE') { handleKeypadSubmit(); return; }

        // [Validation] Check for max amount (1億) BEFORE updating state
        const PREDICT_LIMIT = 100000000;

        if (key === '.') {
            setLocalAmount(prev => {
                const lastChar = prev.slice(-1);
                // If empty or last char is operator, add '0.'
                if (!prev || operators.includes(lastChar)) return prev + '0.';
                // Prevent multiple dots in the same number segment
                if (prev.includes('.') && !operators.some(op => prev.lastIndexOf(op) > prev.lastIndexOf('.'))) return prev;
                return prev + key;
            });
            return;
        }

        setLocalAmount(prev => {
            const lastChar = prev.slice(-1);
            if (operators.includes(key)) {
                // Replace operator if last char is already an operator
                if (operators.includes(lastChar)) return prev.slice(0, -1) + key;
                if (!prev) return prev;
            }

            // [Validation] Simulate next value to check limit
            const nextValStr = prev + key;
            if (!/[+\-×÷]/.test(nextValStr)) {
                if (parseFloat(nextValStr) > PREDICT_LIMIT) return prev; // Ignore input if exceeding limit
            }

            return prev + key;
        });
    }, [handleKeypadSubmit]); // Stable dependency

    return {
        localAmount,
        setLocalAmount,
        handleKeyPress,
        isMathPending,
        handleKeypadSubmit
    };
}
