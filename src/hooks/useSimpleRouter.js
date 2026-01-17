import { useState, useEffect, useCallback } from 'react';
import { App } from '@capacitor/app';

/**
 * 簡易路由 Hook (Simple Router)
 * 整合 window.history API 以支援 iOS 原生手勢 (Swipe Back) 與 Android 返回鍵
 * 
 * @param {string} initialView - 初始頁面
 * @returns {Array} [currentView, navigateTo, canGoBack]
 */
export const useSimpleRouter = (initialView = 'dashboard') => {
    // 優先從 Hash 讀取狀態，支援直接連結跳轉 (Deep Linking 基礎)
    const getHashView = () => {
        const hash = window.location.hash.replace('#', '');
        return hash || initialView;
    };

    const [view, setView] = useState(getHashView);

    // 監聽瀏覽器上一頁 (PopState) - 處理 iOS Swipe Back & Android Back Button
    useEffect(() => {
        const handlePopState = (event) => {
            const newView = getHashView();
            console.log(`[Router] PopState detected. View: ${view} -> ${newView}`);
            setView(newView);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [view]);

    // 監聽 Capacitor App Back Button (Android 實體鍵)
    useEffect(() => {
        const handleAndroidBack = async () => {
            if (view !== 'dashboard' && view !== 'onboarding') {
                // 如果不是首頁，就後退
                window.history.back();
            } else {
                // 首頁再按一次退出
                App.exitApp();
            }
        };

        const listener = App.addListener('backButton', handleAndroidBack);
        return () => {
            listener.then(l => l.remove());
        };
    }, [view]);

    // 導航函式 (取代 setView)
    const navigateTo = useCallback((newView, replace = false) => {
        if (newView === view) return;

        if (replace) {
            window.history.replaceState({ view: newView }, '', `#${newView}`);
        } else {
            window.history.pushState({ view: newView }, '', `#${newView}`);
        }
        setView(newView);
    }, [view]);

    return [view, navigateTo];
};
