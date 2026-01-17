const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

/**
 * 當 transactions 子集合有新文件建立時觸發
 * 監聽路徑: ledgers/{ledgerId}/transactions/{txId}
 */
exports.onTransactionCreated = functions.firestore
    .document("ledgers/{ledgerId}/transactions/{txId}")
    .onCreate(async (snap, context) => {
        const tx = snap.data();
        const ledgerId = context.params.ledgerId;

        // 基本資料驗證
        if (!tx || !tx.payer) {
            console.log("Transaction data invalid or missing payer.");
            return null;
        }

        try {
            // 1. 取得帳本資訊，找出還有哪些使用者
            const ledgerDoc = await db.collection("ledgers").doc(ledgerId).get();
            if (!ledgerDoc.exists) {
                console.log(`Ledger ${ledgerId} not found.`);
                return null;
            }

            const ledgerData = ledgerDoc.data();
            const usersMap = ledgerData.users || {};
            const userIds = Object.keys(usersMap);

            // 2. 找出「接收者」：排除記帳者自己
            // 這裡假設所有參與者都需要收到通知（除了記帳者）
            const recipientIds = userIds.filter((uid) => uid !== tx.payer);

            if (recipientIds.length === 0) {
                console.log("No recipients found.");
                return null;
            }

            // 3. 取得接收者的 FCM Tokens
            const tokens = [];
            for (const uid of recipientIds) {
                const userDoc = await db.collection("users").doc(uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    if (userData.fcmTokens && Array.isArray(userData.fcmTokens)) {
                        // 過濾無效或空的 token
                        const validTokens = userData.fcmTokens.filter((t) => t);
                        tokens.push(...validTokens);
                    }
                }
            }

            if (tokens.length === 0) {
                console.log("No valid FCM tokens found for recipients.");
                return null;
            }

            // 4. 準備通知內容
            const payerName = usersMap[tx.payer]?.name || "成員";
            const categoryName = tx.category?.name || "消費";
            const amount = tx.amount || 0;
            const currency = tx.currency || "TWD";

            // 格式化金額 (簡單版)
            const formattedAmount = `${currency} ${amount}`;

            const payload = {
                notification: {
                    title: "SweetLedger 新記帳",
                    body: `${payerName} 新增了一筆 ${categoryName} ${formattedAmount}`,
                },
                data: {
                    url: "/dashboard", // 點擊通知跳轉路徑
                    ledgerId: ledgerId,
                    txId: context.params.txId,
                },
            };

            // 5. 發送通知 (Multicast)
            const response = await admin.messaging().sendMulticast({
                tokens: tokens,
                ...payload,
            });

            console.log(`${response.successCount} messages were sent successfully.`);

            // 6. 清理失效的 Tokens (Optional but recommended)
            if (response.failureCount > 0) {
                const failedTokens = [];
                response.responses.forEach((resp, idx) => {
                    if (!resp.success) {
                        failedTokens.push(tokens[idx]);
                    }
                });
                console.log("List of tokens that caused failures: " + failedTokens);
                // 進階：可以在這裡實作從 fetch users 移除失效 token 的邏輯
            }

            return { success: true, sentCount: response.successCount };

        } catch (error) {
            console.error("Error sending notification:", error);
            return null;
        }
    });
