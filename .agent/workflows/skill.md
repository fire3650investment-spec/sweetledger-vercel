---
description: SweetLedger 開發原則與 AI 助手行為規範
---

# SweetLedger 開發原則 (AI 助手必讀)

> ⚠️ **重要**：這份文件定義了本專案的核心原則與開發規範。
> 每次協助開發前，請先閱讀並遵循這些原則。

---

## 🌐 語言規範

- **所有解說、討論、Task 名稱一律使用繁體中文**
- 程式碼中的註解建議以繁體中文為主
- Git commit message 可中英混用

---

## 🎯 產品核心原則 (不可違背)

本專案的每一個決策都必須符合以下三大核心原則：

### 1. 極簡的使用體驗 — 減法思維
- 功能不是越多越好，而是越精準越好
- 每增加一個功能前，先問：「這真的必要嗎？」
- 優先移除複雜度，而非增加選項
- 使用者應該「不需要學習」就能上手

### 2. 極佳的使用體驗
- 操作要直覺、流暢、無阻力
- 錯誤處理要優雅，不讓使用者感到困惑
- Loading 狀態要明確，等待時間要最小化
- 跨裝置體驗一致 (PWA + iOS)

### 3. 極佳的設計感
- 視覺風格要現代、精緻、有質感
- 動畫過場要自然、不突兀
- 色彩搭配要和諧，符合 Morandi 色系或莫蘭迪風格
- 留白是設計的一部分

> [!CAUTION]
> 若任何提案與這三個核心原則產生衝突，AI 助手必須**主動告知使用者**，
> 說明衝突點並提供替代方案。

---

## 🔄 開發工作流程

### 程式碼變更流程
```
1. 提案 (Proposal)  →  2. 使用者確認  →  3. 動工 (Implementation)
```

- **任何程式碼修改前，必須先以繁體中文說明提案內容**
- 提案應包含：
  - 要改什麼（What）
  - 為什麼改（Why）
  - 怎麼改（How）
  - 可能的影響範圍
- 使用者確認後才能開始修改程式碼

### 例外情況
- 純粹的 typo 修正
- 使用者明確說「直接改」或「快速修」
- 顯而易見的 bug 修復（需說明）

---

## 🏗️ 架構原則

### 分層架構
```
src/
├── contexts/        → 全域狀態管理 (Auth, Ledger)
├── hooks/           → 可重用邏輯
│   ├── use*Sync.js      → 資料同步層 (Firestore Realtime)
│   ├── use*Actions.js   → 動作層 (CRUD)
│   └── use*.js          → 衍生計算/邏輯層
├── components/      → UI 元件
├── utils/           → 純函式、常數、Helper
└── api/             → Serverless Functions
```

### 設計決策
- React 18 + Vite 作為核心框架
- Tailwind CSS 作為樣式系統
- Firebase (Firestore + Auth) 作為後端
- Capacitor 作為 iOS 封裝層

---

## 🛡️ 防禦性編程原則

### 數值處理
```javascript
// ❌ 危險：可能是字串
const total = a + b;

// ✅ 安全：確保為數字
const total = parseFloat(a) + parseFloat(b);
```

### 空值防禦
```javascript
// ❌ 可能炸裂
const items = data.transactions.map(...);

// ✅ 安全
const items = (data?.transactions ?? []).map(...);
```

### 日期處理
```javascript
// ❌ 有時區問題
const today = new Date().toISOString().slice(0, 10);

// ✅ 使用專案 helper
const today = getLocalISODate();
```

---

## 🔬 測試原則

### 必須測試的邏輯
- 金流計算（分帳、結算、匯率轉換）
- 聯動刪除（刪專案 → 刪交易 + 訂閱）
- 訂閱週期計算

### 測試命名風格
```javascript
describe('結算計算邏輯', () => {
  it('應正確計算多幣別的結算金額', () => {
    // ...
  });
});
```

---

## 🚦 安全與效能

### API 呼叫
- 需有 Rate Limiting（參考 `helpers.jsx` 的 `rateLimitMap`）
- 圖片上傳需壓縮（參考 `compressImage()`）

### Firestore
- 讀取需有 pagination 考量
- 寫入需遵守 `firestore.rules` 的驗證規則

### 跨平台
- Capacitor API 使用前檢查 `Capacitor.isNativePlatform()`
- PWA 功能需有 Web fallback

---

## 📝 程式碼風格

- 使用 ES6+ 語法
- React 元件使用 functional component + hooks
- 變數命名：camelCase
- 常數命名：UPPER_SNAKE_CASE
- 元件檔名：PascalCase.jsx

---

## 🎨 設計系統參考

### 色彩
- 主色系：Morandi 色盤（柔和、低飽和度）
- 參考 `utils/constants.js` 的 `MORANDI_PALETTE`

### 動畫
- 使用 CSS transitions，時長 150-300ms
- 避免過於花俏的動效

### 字型
- 優先系統字型
- 中文優先考慮可讀性

---

## ⚠️ 已知的技術債 / 注意事項

1. `App.jsx` 檔案過大（~28KB），未來可考慮拆分
2. 部分元件超過 20KB，可評估組件拆分
3. 舊版交易資料可能存在內嵌格式，需向下相容

---

## 📚 相關文件

- `/firestore.rules` — 資料庫安全規則
- `/src/utils/constants.js` — 常數與預設值
- `/src/utils/helpers.jsx` — 共用工具函式
- `/src/utils/logic.test.js` — 核心邏輯測試

---

*最後更新：2026-01-16*
