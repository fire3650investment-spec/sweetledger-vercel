import { useEffect } from 'react';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const usePushNotifications = (user) => {
    useEffect(() => {
        // 僅在原生平台執行，且用戶已登入
        if (!Capacitor.isNativePlatform() || !user?.uid) {
            return;
        }

        const registerPush = async () => {
            try {
                // 1. 檢查並請求權限
                let permStatus = await PushNotifications.checkPermissions();

                if (permStatus.receive === 'prompt') {
                    permStatus = await PushNotifications.requestPermissions();
                }

                if (permStatus.receive !== 'granted') {
                    console.log('User denied push permissions');
                    return;
                }

                // 2. 註冊取得 Token (會觸發 'registration' 事件)
                await PushNotifications.register();
            } catch (e) {
                console.error('Push Registration Error:', e);
            }
        };

        // --- Event Listeners ---

        // 成功取得 Token
        const onRegistration = async (token) => {
            console.log('Push Token (FCM):', token.value);
            if (!user.uid || !db) return;

            try {
                const userRef = doc(db, 'users', user.uid);
                // 使用 arrayUnion 避免覆蓋其他裝置的 Token
                // 並更新 lastTokenUpdate 時間戳記
                await setDoc(userRef, {
                    fcmTokens: arrayUnion(token.value),
                    lastTokenUpdate: new Date().toISOString()
                }, { merge: true });
            } catch (e) {
                console.error('Error saving push token to Firestore:', e);
            }
        };

        const onRegistrationError = (error) => {
            console.error('Push Registration FAILED:', error);
        };

        const onPushReceived = (notification) => {
            console.log('Push Received:', notification);
            // 可以在這裡觸發一個 App 內部的 Toast 或 Badge 更新
        };

        const onPushActionPerformed = (notification) => {
            console.log('Push Action Performed:', notification);
            // 處理點擊通知後的跳轉邏輯
            // notification.notification.data.url
            if (notification.notification.data?.url) {
                window.location.hash = notification.notification.data.url;
            }
        };

        // Add Listeners
        PushNotifications.addListener('registration', onRegistration);
        PushNotifications.addListener('registrationError', onRegistrationError);
        PushNotifications.addListener('pushNotificationReceived', onPushReceived);
        PushNotifications.addListener('pushNotificationActionPerformed', onPushActionPerformed);

        // Start Registration Flow
        registerPush();

        // Cleanup
        return () => {
            try {
                PushNotifications.removeAllListeners();
            } catch (e) { }
        };

    }, [user]); // 當使用者改變 (登入/登出) 時重新執行
};

export default usePushNotifications;
