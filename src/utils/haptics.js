import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';

// 檢查是否為原生平台 (iOS/Android)
const isNative = Capacitor.isNativePlatform();

/**
 * 輕微震動 (Light Impact)
 * 適用場景：
 * - 點擊按鈕
 * - 聚焦輸入框
 * - 切換 Tab
 */
export const hapticLight = async () => {
    if (!isNative) return;
    try {
        await Haptics.impact({ style: ImpactStyle.Light });
    } catch (e) {
        // Ignore errors on unsupported devices
    }
};

/**
 * 中度震動 (Medium Impact)
 * 適用場景：
 * - 開關切換 (Toggle)
 * - 清單項目滑動
 * - 重要按鈕點擊
 */
export const hapticMedium = async () => {
    if (!isNative) return;
    try {
        await Haptics.impact({ style: ImpactStyle.Medium });
    } catch (e) { }
};

/**
 * 重度震動 (Heavy Impact)
 * 適用場景：
 * - 長按操作
 * - 刪除確認
 */
export const hapticHeavy = async () => {
    if (!isNative) return;
    try {
        await Haptics.impact({ style: ImpactStyle.Heavy });
    } catch (e) { }
};

/**
 * 成功回饋 (Success Notification)
 * 適用場景：
 * - 儲存成功
 * - 完成結算
 */
export const hapticSuccess = async () => {
    if (!isNative) return;
    try {
        await Haptics.notification({ type: NotificationType.Success });
    } catch (e) { }
};

/**
 * 警告回饋 (Warning Notification)
 * 適用場景：
 * - 驗證失敗
 * - 餘額不足提醒
 */
export const hapticWarning = async () => {
    if (!isNative) return;
    try {
        await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) { }
};

/**
 * 錯誤回饋 (Error Notification)
 * 適用場景：
 * - 操作失敗
 * - 刪除失敗
 * - 網路錯誤
 */
export const hapticError = async () => {
    if (!isNative) return;
    try {
        await Haptics.notification({ type: NotificationType.Error });
    } catch (e) { }
};

/**
 * 選擇器回饋 (Selection Changed)
 * 適用場景：
 * - 滾動日期選擇器
 * - 拖曳排序
 */
export const hapticSelection = async () => {
    if (!isNative) return;
    try {
        await Haptics.selectionStart();
        await Haptics.selectionChanged();
        await Haptics.selectionEnd();
    } catch (e) { }
};
