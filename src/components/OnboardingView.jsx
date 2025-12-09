import React from 'react';
import { renderAvatar } from '../utils/helpers';

export default function OnboardingView({ 
  user, 
  handleGoogleLogin, 
  createLedger, 
  joinLedger, 
  ledgerCode, 
  setLedgerCode, 
  loading 
}) {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
        <div className="text-6xl mb-4">🍰</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">情侶記帳</h1>
        <p className="text-gray-500 mb-8">讓記帳成為情侶間的小樂趣</p>
        
        {/* Google Login Button */}
        {!user ? (
           <button 
             onClick={handleGoogleLogin}
             className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg mb-4 shadow-sm flex items-center justify-center gap-3 active:scale-95 transition-transform"
           >
             <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google"/>
             使用 Google 登入
           </button>
        ) : (
           <div className="w-full space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                   {renderAvatar(user.photoURL, "w-8 h-8")}
                   <span className="text-sm font-bold text-gray-600">嗨，{user.displayName}</span>
               </div>
               <button onClick={createLedger} className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-200 active:scale-95 transition-transform">{loading ? "建立中..." : "建立新帳本"}</button>
           </div>
        )}

        <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">或</span></div></div>
        <div className="flex gap-2 w-full">
            <input type="text" placeholder="輸入邀請碼" className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500" onChange={(e) => setLedgerCode(e.target.value.toUpperCase())} />
            <button onClick={() => { if(!user) { alert("請先登入 Google 帳號"); return; } joinLedger(ledgerCode); }} className="bg-gray-800 text-white px-6 rounded-xl font-bold active:scale-95 transition-transform whitespace-nowrap flex-shrink-0">加入</button>
        </div>
        </div>
    </div>
  );
}