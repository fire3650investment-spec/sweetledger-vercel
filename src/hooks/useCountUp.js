import { useState, useEffect } from 'react';

/**
 * A lightweight hook to animate a number from 0 to a target value.
 * @param {number} end - The target value to animate to.
 * @param {number} duration - Animation duration in milliseconds (default: 1000ms).
 * @param {boolean} start - Whether to start the animation immediately (default: true).
 * @returns {number} - The current animated value.
 */
export const useCountUp = (end, duration = 1000, start = true) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime = null;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Calculate percentage (0 to 1)
            const percentage = Math.min(progress / duration, 1);

            // Easing function: easeOutExpo
            // 1 - Math.pow(2, -10 * t)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = Math.floor(ease * end);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure final value is exact
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration, start]);

    return count;
};
