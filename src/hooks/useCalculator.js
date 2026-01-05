
import { useState, useCallback } from 'react';

export default function useCalculator(onSubmit) {
    const [localAmount, setLocalAmount] = useState('');

    const isMathPending = /[+\-×÷]/.test(localAmount) && !/[+\-×÷]$/.test(localAmount);

    const handleKeypadSubmit = () => {
        if (isMathPending) {
            try {
                const safeExpr = localAmount.replace(/×/g, '*').replace(/÷/g, '/');
                const result = new Function('return ' + safeExpr)();
                // Round to 2 decimal places to avoid floating point errors
                const finalVal = Math.round(result * 100) / 100;
                setLocalAmount(finalVal.toString());
            } catch (e) {
                console.error("Calculation error", e);
            }
            return;
        }
        if (!localAmount || parseFloat(localAmount) <= 0) return;

        // Trigger the external submit callback (usually to switch overlay)
        if (onSubmit) onSubmit();
    };

    const handleKeyPress = useCallback((key) => {
        if (navigator.vibrate) try { navigator.vibrate(10); } catch (e) { }

        const operators = ['+', '-', '×', '÷'];

        if (key === 'AC') { setLocalAmount(''); return; }
        if (key === 'DEL') { setLocalAmount(prev => prev.slice(0, -1)); return; }
        if (key === 'DONE') { handleKeypadSubmit(); return; }

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
            return prev + key;
        });
    }, [localAmount, isMathPending]); // Added isMathPending to dependency although not strictly used inside, but good practice if logic changes

    return {
        localAmount,
        setLocalAmount,
        handleKeyPress,
        isMathPending,
        handleKeypadSubmit
    };
}
