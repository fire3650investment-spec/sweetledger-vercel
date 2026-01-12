const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddExpenseView-DNZqyRWH.js","assets/trash-2-C0gc6D9G.js","assets/check-CMf78tNj.js","assets/users-DzLzjN0a.js","assets/x-0G0JG-_r.js","assets/refresh-cw-DyyttoL1.js","assets/circle-alert-Cz5mqoVF.js","assets/credit-card-DsofkdEP.js","assets/repeat-BEpljXh8.js","assets/search-BfE2aeZT.js","assets/StatsView-we4465lE.js","assets/chevron-right-wd1YcD69.js","assets/ProjectsView-CwMKQFzn.js","assets/pen-1piaLXMR.js","assets/SettingsView-Cn2i9h-X.js","assets/OnboardingView-B_fd_MtB.js","assets/arrow-right-C0cuOSLR.js","assets/DecisionView-AI3Yfqge.js","assets/EditTransactionModal-R1p-QUML.js","assets/SubscriptionsView-buhrAWmg.js"])))=>i.map(i=>d[i]);
function jE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},Mu={},A_={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),zE=Symbol.for("react.portal"),$E=Symbol.for("react.fragment"),BE=Symbol.for("react.strict_mode"),HE=Symbol.for("react.profiler"),WE=Symbol.for("react.provider"),qE=Symbol.for("react.context"),GE=Symbol.for("react.forward_ref"),KE=Symbol.for("react.suspense"),QE=Symbol.for("react.memo"),JE=Symbol.for("react.lazy"),Cm=Symbol.iterator;function XE(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,R_={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=R_,this.updater=n||k_}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P_(){}P_.prototype=Ns.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=R_,this.updater=n||k_}var Yd=Xd.prototype=new P_;Yd.constructor=Xd;C_(Yd,Ns.prototype);Yd.isPureReactComponent=!0;var Rm=Array.isArray,x_=Object.prototype.hasOwnProperty,Zd={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:Zd.current}}function YE(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function ZE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZE(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case zE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jc(o,0):r,Rm(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),El(i,e,n,"",function(h){return h})):i!=null&&(ef(i)&&(i=YE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+jc(s,l);o+=El(s,e,n,u,i)}else if(u=XE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+jc(s,l++),o+=El(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Tl={transition:null},tT={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Zd};function D_(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ns;se.Fragment=$E;se.Profiler=HE;se.PureComponent=Xd;se.StrictMode=BE;se.Suspense=KE;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;se.act=D_;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)x_.call(e,u)&&!N_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:qE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WE,_context:t},t.Consumer=t};se.createElement=b_;se.createFactory=function(t){var e=b_.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:GE,render:t}};se.isValidElement=ef;se.lazy=function(t){return{$$typeof:JE,_payload:{_status:-1,_result:t},_init:eT}};se.memo=function(t,e){return{$$typeof:QE,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};se.unstable_act=D_;se.useCallback=function(t,e){return kt.current.useCallback(t,e)};se.useContext=function(t){return kt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};se.useEffect=function(t,e){return kt.current.useEffect(t,e)};se.useId=function(){return kt.current.useId()};se.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return kt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};se.useRef=function(t){return kt.current.useRef(t)};se.useState=function(t){return kt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return kt.current.useTransition()};se.version="18.3.1";A_.exports=se;var B=A_.exports;const Ze=UE(B),c4=jE({__proto__:null,default:Ze},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nT=B,rT=Symbol.for("react.element"),iT=Symbol.for("react.fragment"),sT=Object.prototype.hasOwnProperty,oT=nT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aT={key:!0,ref:!0,__self:!0,__source:!0};function V_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sT.call(e,r)&&!aT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rT,type:t,key:s,ref:o,props:i,_owner:oT.current}}Mu.Fragment=iT;Mu.jsx=V_;Mu.jsxs=V_;S_.exports=Mu;var N=S_.exports,Ch={},O_={exports:{}},qt={},M_={exports:{}},L_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,H){var K=j.length;j.push(H);e:for(;0<K;){var ce=K-1>>>1,oe=j[ce];if(0<i(oe,H))j[ce]=H,j[K]=oe,K=ce;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var H=j[0],K=j.pop();if(K!==H){j[0]=K;e:for(var ce=0,oe=j.length,me=oe>>>1;ce<me;){var Me=2*(ce+1)-1,ht=j[Me],Se=Me+1,dt=j[Se];if(0>i(ht,K))Se<oe&&0>i(dt,ht)?(j[ce]=dt,j[Se]=K,ce=Se):(j[ce]=ht,j[Me]=K,ce=Me);else if(Se<oe&&0>i(dt,K))j[ce]=dt,j[Se]=K,ce=Se;else break e}}return H}function i(j,H){var K=j.sortIndex-H.sortIndex;return K!==0?K:j.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,S=!1,R=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(j){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=j)r(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(h)}}function b(j){if(P=!1,C(j),!R)if(n(u)!==null)R=!0,ve(U);else{var H=n(h);H!==null&&Pe(b,H.startTime-j)}}function U(j,H){R=!1,P&&(P=!1,k(g),g=-1),S=!0;var K=m;try{for(C(H),p=n(u);p!==null&&(!(p.expirationTime>H)||j&&!v());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var oe=ce(p.expirationTime<=H);H=t.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(u)&&r(u),C(H)}else r(u);p=n(u)}if(p!==null)var me=!0;else{var Me=n(h);Me!==null&&Pe(b,Me.startTime-H),me=!1}return me}finally{p=null,m=K,S=!1}}var L=!1,_=null,g=-1,w=5,I=-1;function v(){return!(t.unstable_now()-I<w)}function A(){if(_!==null){var j=t.unstable_now();I=j;var H=!0;try{H=_(!0,j)}finally{H?E():(L=!1,_=null)}}else L=!1}var E;if(typeof T=="function")E=function(){T(A)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,re=ue.port2;ue.port1.onmessage=A,E=function(){re.postMessage(null)}}else E=function(){V(A,0)};function ve(j){_=j,L||(L=!0,E())}function Pe(j,H){g=V(function(){j(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,ve(U))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var K=m;m=H;try{return j()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,H){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=m;m=j;try{return H()}finally{m=K}},t.unstable_scheduleCallback=function(j,H,K){var ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,j){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,j={id:f++,callback:H,priorityLevel:j,startTime:K,expirationTime:oe,sortIndex:-1},K>ce?(j.sortIndex=K,e(h,j),n(u)===null&&j===n(h)&&(P?(k(g),g=-1):P=!0,Pe(b,K-ce))):(j.sortIndex=oe,e(u,j),R||S||(R=!0,ve(U))),j},t.unstable_shouldYield=v,t.unstable_wrapCallback=function(j){var H=m;return function(){var K=m;m=H;try{return j.apply(this,arguments)}finally{m=K}}}})(L_);M_.exports=L_;var lT=M_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=B,Wt=lT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Oo={};function Ci(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Oo[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=Object.prototype.hasOwnProperty,cT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},Nm={};function hT(t){return Rh.call(Nm,t)?!0:Rh.call(xm,t)?!1:cT.test(t)?Nm[t]=!0:(xm[t]=!0,!1)}function dT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,r){if(e===null||typeof e>"u"||dT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);ut[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,i,r)&&(n=null),r||i===null?hT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Nh=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),bm=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Uc;function uo(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var zc=!1;function $c(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function pT(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function bh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ki:return"Fragment";case Gi:return"Portal";case Ph:return"Profiler";case sf:return"StrictMode";case xh:return"Suspense";case Nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case j_:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:bh(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return bh(t(e))}catch{}}return null}function mT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bh(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gT(t){var e=$_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=gT(t))}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dh(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Vh(t,e){H_(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oh(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oh(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(co(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function W_(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,G_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yT=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){yT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function K_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function Q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _T=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fh(t,e){if(e){if(_T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,os=null,as=null;function Lm(t){if(t=da(t)){if(typeof zh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=zu(e),zh(t.stateNode,t.type,e))}}function J_(t){os?as?as.push(t):as=[t]:os=t}function X_(){if(os){var t=os,e=as;if(as=os=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function Y_(t,e){return t(e)}function Z_(){}var Bc=!1;function ev(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return Y_(t,e,n)}finally{Bc=!1,(os!==null||as!==null)&&(Z_(),X_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var $h=!1;if(Jn)try{var no={};Object.defineProperty(no,"passive",{get:function(){$h=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{$h=!1}function vT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var vo=!1,Wl=null,ql=!1,Bh=null,wT={onError:function(t){vo=!0,Wl=t}};function ET(t,e,n,r,i,s,o,l,u){vo=!1,Wl=null,vT.apply(wT,arguments)}function TT(t,e,n,r,i,s,o,l,u){if(ET.apply(this,arguments),vo){if(vo){var h=Wl;vo=!1,Wl=null}else throw Error(F(198));ql||(ql=!0,Bh=h)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(Ri(t)!==t)throw Error(F(188))}function IT(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fm(i),t;if(s===r)return Fm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function nv(t){return t=IT(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var iv=Wt.unstable_scheduleCallback,jm=Wt.unstable_cancelCallback,ST=Wt.unstable_shouldYield,AT=Wt.unstable_requestPaint,ze=Wt.unstable_now,kT=Wt.unstable_getCurrentPriorityLevel,uf=Wt.unstable_ImmediatePriority,sv=Wt.unstable_UserBlockingPriority,Gl=Wt.unstable_NormalPriority,CT=Wt.unstable_LowPriority,ov=Wt.unstable_IdlePriority,Lu=null,An=null;function RT(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:NT,PT=Math.log,xT=Math.LN2;function NT(t){return t>>>=0,t===0?32:31-(PT(t)/xT|0)|0}var tl=64,nl=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function bT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=bT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function VT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,hf,cv,hv,dv,Wh=!1,rl=[],Sr=null,Ar=null,kr=null,Fo=new Map,jo=new Map,gr=[],OT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MT(t,e,n,r,i){switch(e){case"focusin":return Sr=ro(Sr,t,e,n,r,i),!0;case"dragenter":return Ar=ro(Ar,t,e,n,r,i),!0;case"mouseover":return kr=ro(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,ro(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,ro(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function fv(t){var e=ai(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uh=r,n.target.dispatchEvent(r),Uh=null}else return e=da(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){Il(t)&&n.delete(e)}function LT(){Wh=!1,Sr!==null&&Il(Sr)&&(Sr=null),Ar!==null&&Il(Ar)&&(Ar=null),kr!==null&&Il(kr)&&(kr=null),Fo.forEach(zm),jo.forEach(zm)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,LT)))}function Uo(t){function e(i){return io(i,t)}if(0<rl.length){io(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&io(Sr,t),Ar!==null&&io(Ar,t),kr!==null&&io(kr,t),Fo.forEach(e),jo.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&gr.shift()}var ls=sr.ReactCurrentBatchConfig,Ql=!0;function FT(t,e,n,r){var i=_e,s=ls.transition;ls.transition=null;try{_e=1,df(t,e,n,r)}finally{_e=i,ls.transition=s}}function jT(t,e,n,r){var i=_e,s=ls.transition;ls.transition=null;try{_e=4,df(t,e,n,r)}finally{_e=i,ls.transition=s}}function df(t,e,n,r){if(Ql){var i=qh(t,e,n,r);if(i===null)eh(t,e,r,Jl,n),Um(t,r);else if(MT(i,t,e,n,r))r.stopPropagation();else if(Um(t,r),e&4&&-1<OT.indexOf(t)){for(;i!==null;){var s=da(i);if(s!==null&&uv(s),s=qh(t,e,n,r),s===null&&eh(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else eh(t,e,r,null,n)}}var Jl=null;function qh(t,e,n,r){if(Jl=null,t=lf(r),t=ai(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kT()){case uf:return 1;case sv:return 4;case Gl:case CT:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Er=null,ff=null,Sl=null;function mv(){if(Sl)return Sl;var t,e=ff,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function $m(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:$m,this.isPropagationStopped=$m,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=Gt(bs),ha=Ve({},bs,{view:0,detail:0}),UT=Gt(ha),Wc,qc,so,Fu=Ve({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Wc=t.screenX-so.screenX,qc=t.screenY-so.screenY):qc=Wc=0,so=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Bm=Gt(Fu),zT=Ve({},Fu,{dataTransfer:0}),$T=Gt(zT),BT=Ve({},ha,{relatedTarget:0}),Gc=Gt(BT),HT=Ve({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),WT=Gt(HT),qT=Ve({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GT=Gt(qT),KT=Ve({},bs,{data:0}),Hm=Gt(KT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XT[t])?!!e[t]:!1}function mf(){return YT}var ZT=Ve({},ha,{key:function(t){if(t.key){var e=QT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eI=Gt(ZT),tI=Ve({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Gt(tI),nI=Ve({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),rI=Gt(nI),iI=Ve({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sI=Gt(iI),oI=Ve({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aI=Gt(oI),lI=[9,13,27,32],gf=Jn&&"CompositionEvent"in window,wo=null;Jn&&"documentMode"in document&&(wo=document.documentMode);var uI=Jn&&"TextEvent"in window&&!wo,gv=Jn&&(!gf||wo&&8<wo&&11>=wo),qm=" ",Gm=!1;function yv(t,e){switch(t){case"keyup":return lI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function cI(t,e){switch(t){case"compositionend":return _v(e);case"keypress":return e.which!==32?null:(Gm=!0,qm);case"textInput":return t=e.data,t===qm&&Gm?null:t;default:return null}}function hI(t,e){if(Qi)return t==="compositionend"||!gf&&yv(t,e)?(t=mv(),Sl=ff=Er=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var dI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dI[t.type]:e==="textarea"}function vv(t,e,n,r){J_(r),e=Xl(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,zo=null;function fI(t){xv(t,0)}function ju(t){var e=Yi(t);if(B_(e))return t}function pI(t,e){if(t==="change")return e}var wv=!1;if(Jn){var Kc;if(Jn){var Qc="oninput"in document;if(!Qc){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Qc=typeof Qm.oninput=="function"}Kc=Qc}else Kc=!1;wv=Kc&&(!document.documentMode||9<document.documentMode)}function Jm(){Eo&&(Eo.detachEvent("onpropertychange",Ev),zo=Eo=null)}function Ev(t){if(t.propertyName==="value"&&ju(zo)){var e=[];vv(e,zo,t,lf(t)),ev(fI,e)}}function mI(t,e,n){t==="focusin"?(Jm(),Eo=e,zo=n,Eo.attachEvent("onpropertychange",Ev)):t==="focusout"&&Jm()}function gI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(zo)}function yI(t,e){if(t==="click")return ju(e)}function _I(t,e){if(t==="input"||t==="change")return ju(e)}function vI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:vI;function $o(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rh.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iv(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wI(t){var e=Iv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ym(n,s);var o=Ym(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EI=Jn&&"documentMode"in document&&11>=document.documentMode,Ji=null,Gh=null,To=null,Kh=!1;function Zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||Ji==null||Ji!==Hl(r)||(r=Ji,"selectionStart"in r&&yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&$o(To,r)||(To=r,r=Xl(Gh,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Jc={},Sv={};Jn&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Uu(t){if(Jc[t])return Jc[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sv)return Jc[t]=e[n];return t}var Av=Uu("animationend"),kv=Uu("animationiteration"),Cv=Uu("animationstart"),Rv=Uu("transitionend"),Pv=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){Pv.set(t,e),Ci(e,[t])}for(var Xc=0;Xc<eg.length;Xc++){var Yc=eg[Xc],TI=Yc.toLowerCase(),II=Yc[0].toUpperCase()+Yc.slice(1);qr(TI,"on"+II)}qr(Av,"onAnimationEnd");qr(kv,"onAnimationIteration");qr(Cv,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(Rv,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SI=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TT(r,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,h),s=u}}}if(ql)throw t=Bh,ql=!1,Bh=null,t}function ke(t,e){var n=e[Zh];n===void 0&&(n=e[Zh]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function Zc(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[ol]){t[ol]=!0,F_.forEach(function(n){n!=="selectionchange"&&(SI.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,Zc("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(pv(e)){case 1:var i=FT;break;case 4:i=jT;break;default:i=df}n=i.bind(null,e,n,t),i=void 0,!$h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function eh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ai(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ev(function(){var h=s,f=lf(n),p=[];e:{var m=Pv.get(t);if(m!==void 0){var S=pf,R=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":S=eI;break;case"focusin":R="focus",S=Gc;break;case"focusout":R="blur",S=Gc;break;case"beforeblur":case"afterblur":S=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=$T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=rI;break;case Av:case kv:case Cv:S=WT;break;case Rv:S=sI;break;case"scroll":S=UT;break;case"wheel":S=aI;break;case"copy":case"cut":case"paste":S=GT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Wm}var P=(e&4)!==0,V=!P&&t==="scroll",k=P?m!==null?m+"Capture":null:m;P=[];for(var T=h,C;T!==null;){C=T;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,k!==null&&(b=Lo(T,k),b!=null&&P.push(Ho(T,b,C)))),V)break;T=T.return}0<P.length&&(m=new S(m,R,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Uh&&(R=n.relatedTarget||n.fromElement)&&(ai(R)||R[Xn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=h,R=R?ai(R):null,R!==null&&(V=Ri(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=h),S!==R)){if(P=Bm,b="onMouseLeave",k="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(P=Wm,b="onPointerLeave",k="onPointerEnter",T="pointer"),V=S==null?m:Yi(S),C=R==null?m:Yi(R),m=new P(b,T+"leave",S,n,f),m.target=V,m.relatedTarget=C,b=null,ai(f)===h&&(P=new P(k,T+"enter",R,n,f),P.target=C,P.relatedTarget=V,b=P),V=b,S&&R)t:{for(P=S,k=R,T=0,C=P;C;C=Ui(C))T++;for(C=0,b=k;b;b=Ui(b))C++;for(;0<T-C;)P=Ui(P),T--;for(;0<C-T;)k=Ui(k),C--;for(;T--;){if(P===k||k!==null&&P===k.alternate)break t;P=Ui(P),k=Ui(k)}P=null}else P=null;S!==null&&ng(p,m,S,P,!1),R!==null&&V!==null&&ng(p,V,R,P,!0)}}e:{if(m=h?Yi(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var U=pI;else if(Km(m))if(wv)U=_I;else{U=gI;var L=mI}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=yI);if(U&&(U=U(t,h))){vv(p,U,n,f);break e}L&&L(t,m,h),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Oh(m,"number",m.value)}switch(L=h?Yi(h):window,t){case"focusin":(Km(L)||L.contentEditable==="true")&&(Ji=L,Gh=h,To=null);break;case"focusout":To=Gh=Ji=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,Zm(p,n,f);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":Zm(p,n,f)}var _;if(gf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Qi?yv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(gv&&n.locale!=="ko"&&(Qi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Qi&&(_=mv()):(Er=f,ff="value"in Er?Er.value:Er.textContent,Qi=!0)),L=Xl(h,g),0<L.length&&(g=new Hm(g,t,null,n,f),p.push({event:g,listeners:L}),_?g.data=_:(_=_v(n),_!==null&&(g.data=_)))),(_=uI?cI(t,n):hI(t,n))&&(h=Xl(h,"onBeforeInput"),0<h.length&&(f=new Hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}xv(p,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=Lo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Lo(n,s),u!=null&&o.unshift(Ho(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push(Ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AI=/\r\n?/g,kI=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(AI,`
`).replace(kI,"")}function al(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(F(425))}function Yl(){}var Qh=null,Jh=null;function Xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,CI=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,RI=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(PI)}:Yh;function PI(t){setTimeout(function(){throw t})}function th(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ds,Wo="__reactProps$"+Ds,Xn="__reactContainer$"+Ds,Zh="__reactEvents$"+Ds,xI="__reactListeners$"+Ds,NI="__reactHandles$"+Ds;function ai(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sg(t);t!==null;){if(n=t[Sn])return n;t=sg(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[Sn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function zu(t){return t[Wo]||null}var ed=[],Zi=-1;function Gr(t){return{current:t}}function Re(t){0>Zi||(t.current=ed[Zi],ed[Zi]=null,Zi--)}function Ie(t,e){Zi++,ed[Zi]=t.current,t.current=e}var Fr={},Tt=Gr(Fr),Dt=Gr(!1),yi=Fr;function _s(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function Zl(){Re(Dt),Re(Tt)}function og(t,e,n){if(Tt.current!==Fr)throw Error(F(168));Ie(Tt,e),Ie(Dt,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,mT(t)||"Unknown",i));return Ve({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,yi=Tt.current,Ie(Tt,t),Ie(Dt,Dt.current),!0}function ag(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=bv(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,Re(Dt),Re(Tt),Ie(Tt,t)):Re(Dt),Ie(Dt,n)}var $n=null,$u=!1,nh=!1;function Dv(t){$n===null?$n=[t]:$n.push(t)}function bI(t){$u=!0,Dv(t)}function Kr(){if(!nh&&$n!==null){nh=!0;var t=0,e=_e;try{var n=$n;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,$u=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),iv(uf,Kr),i}finally{_e=e,nh=!1}}return null}var es=[],ts=0,tu=null,nu=0,Kt=[],Qt=0,_i=null,Hn=1,Wn="";function ii(t,e){es[ts++]=nu,es[ts++]=tu,tu=t,nu=e}function Vv(t,e,n){Kt[Qt++]=Hn,Kt[Qt++]=Wn,Kt[Qt++]=_i,_i=t;var r=Hn;t=Wn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-cn(e)+i|n<<i|r,Wn=s+t}else Hn=1<<s|n<<i|r,Wn=t}function _f(t){t.return!==null&&(ii(t,1),Vv(t,1,0))}function vf(t){for(;t===tu;)tu=es[--ts],es[ts]=null,nu=es[--ts],es[ts]=null;for(;t===_i;)_i=Kt[--Qt],Kt[Qt]=null,Wn=Kt[--Qt],Kt[Qt]=null,Hn=Kt[--Qt],Kt[Qt]=null}var Ht=null,$t=null,Ne=!1,an=null;function Ov(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,$t=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:Hn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,$t=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(Ne){var e=$t;if(e){var n=e;if(!lg(t,e)){if(td(t))throw Error(F(418));e=Cr(n.nextSibling);var r=Ht;e&&lg(t,e)?Ov(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Ht=t)}}else{if(td(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ne=!1,Ht=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function ll(t){if(t!==Ht)return!1;if(!Ne)return ug(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xh(t.type,t.memoizedProps)),e&&(e=$t)){if(td(t))throw Mv(),Error(F(418));for(;e;)Ov(t,e),e=Cr(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Ht?Cr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=$t;t;)t=Cr(t.nextSibling)}function vs(){$t=Ht=null,Ne=!1}function wf(t){an===null?an=[t]:an.push(t)}var DI=sr.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function Lv(t){function e(k,T){if(t){var C=k.deletions;C===null?(k.deletions=[T],k.flags|=16):C.push(T)}}function n(k,T){if(!t)return null;for(;T!==null;)e(k,T),T=T.sibling;return null}function r(k,T){for(k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function i(k,T){return k=Nr(k,T),k.index=0,k.sibling=null,k}function s(k,T,C){return k.index=C,t?(C=k.alternate,C!==null?(C=C.index,C<T?(k.flags|=2,T):C):(k.flags|=2,T)):(k.flags|=1048576,T)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,T,C,b){return T===null||T.tag!==6?(T=uh(C,k.mode,b),T.return=k,T):(T=i(T,C),T.return=k,T)}function u(k,T,C,b){var U=C.type;return U===Ki?f(k,T,C.props.children,b,C.key):T!==null&&(T.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===pr&&cg(U)===T.type)?(b=i(T,C.props),b.ref=oo(k,T,C),b.return=k,b):(b=bl(C.type,C.key,C.props,null,k.mode,b),b.ref=oo(k,T,C),b.return=k,b)}function h(k,T,C,b){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=ch(C,k.mode,b),T.return=k,T):(T=i(T,C.children||[]),T.return=k,T)}function f(k,T,C,b,U){return T===null||T.tag!==7?(T=fi(C,k.mode,b,U),T.return=k,T):(T=i(T,C),T.return=k,T)}function p(k,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=uh(""+T,k.mode,C),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ya:return C=bl(T.type,T.key,T.props,null,k.mode,C),C.ref=oo(k,null,T),C.return=k,C;case Gi:return T=ch(T,k.mode,C),T.return=k,T;case pr:var b=T._init;return p(k,b(T._payload),C)}if(co(T)||to(T))return T=fi(T,k.mode,C,null),T.return=k,T;ul(k,T)}return null}function m(k,T,C,b){var U=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:l(k,T,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ya:return C.key===U?u(k,T,C,b):null;case Gi:return C.key===U?h(k,T,C,b):null;case pr:return U=C._init,m(k,T,U(C._payload),b)}if(co(C)||to(C))return U!==null?null:f(k,T,C,b,null);ul(k,C)}return null}function S(k,T,C,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return k=k.get(C)||null,l(T,k,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ya:return k=k.get(b.key===null?C:b.key)||null,u(T,k,b,U);case Gi:return k=k.get(b.key===null?C:b.key)||null,h(T,k,b,U);case pr:var L=b._init;return S(k,T,C,L(b._payload),U)}if(co(b)||to(b))return k=k.get(C)||null,f(T,k,b,U,null);ul(T,b)}return null}function R(k,T,C,b){for(var U=null,L=null,_=T,g=T=0,w=null;_!==null&&g<C.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var I=m(k,_,C[g],b);if(I===null){_===null&&(_=w);break}t&&_&&I.alternate===null&&e(k,_),T=s(I,T,g),L===null?U=I:L.sibling=I,L=I,_=w}if(g===C.length)return n(k,_),Ne&&ii(k,g),U;if(_===null){for(;g<C.length;g++)_=p(k,C[g],b),_!==null&&(T=s(_,T,g),L===null?U=_:L.sibling=_,L=_);return Ne&&ii(k,g),U}for(_=r(k,_);g<C.length;g++)w=S(_,k,g,C[g],b),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),T=s(w,T,g),L===null?U=w:L.sibling=w,L=w);return t&&_.forEach(function(v){return e(k,v)}),Ne&&ii(k,g),U}function P(k,T,C,b){var U=to(C);if(typeof U!="function")throw Error(F(150));if(C=U.call(C),C==null)throw Error(F(151));for(var L=U=null,_=T,g=T=0,w=null,I=C.next();_!==null&&!I.done;g++,I=C.next()){_.index>g?(w=_,_=null):w=_.sibling;var v=m(k,_,I.value,b);if(v===null){_===null&&(_=w);break}t&&_&&v.alternate===null&&e(k,_),T=s(v,T,g),L===null?U=v:L.sibling=v,L=v,_=w}if(I.done)return n(k,_),Ne&&ii(k,g),U;if(_===null){for(;!I.done;g++,I=C.next())I=p(k,I.value,b),I!==null&&(T=s(I,T,g),L===null?U=I:L.sibling=I,L=I);return Ne&&ii(k,g),U}for(_=r(k,_);!I.done;g++,I=C.next())I=S(_,k,g,I.value,b),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?g:I.key),T=s(I,T,g),L===null?U=I:L.sibling=I,L=I);return t&&_.forEach(function(A){return e(k,A)}),Ne&&ii(k,g),U}function V(k,T,C,b){if(typeof C=="object"&&C!==null&&C.type===Ki&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Ya:e:{for(var U=C.key,L=T;L!==null;){if(L.key===U){if(U=C.type,U===Ki){if(L.tag===7){n(k,L.sibling),T=i(L,C.props.children),T.return=k,k=T;break e}}else if(L.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===pr&&cg(U)===L.type){n(k,L.sibling),T=i(L,C.props),T.ref=oo(k,L,C),T.return=k,k=T;break e}n(k,L);break}else e(k,L);L=L.sibling}C.type===Ki?(T=fi(C.props.children,k.mode,b,C.key),T.return=k,k=T):(b=bl(C.type,C.key,C.props,null,k.mode,b),b.ref=oo(k,T,C),b.return=k,k=b)}return o(k);case Gi:e:{for(L=C.key;T!==null;){if(T.key===L)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(k,T.sibling),T=i(T,C.children||[]),T.return=k,k=T;break e}else{n(k,T);break}else e(k,T);T=T.sibling}T=ch(C,k.mode,b),T.return=k,k=T}return o(k);case pr:return L=C._init,V(k,T,L(C._payload),b)}if(co(C))return R(k,T,C,b);if(to(C))return P(k,T,C,b);ul(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(k,T.sibling),T=i(T,C),T.return=k,k=T):(n(k,T),T=uh(C,k.mode,b),T.return=k,k=T),o(k)):n(k,T)}return V}var ws=Lv(!0),Fv=Lv(!1),ru=Gr(null),iu=null,ns=null,Ef=null;function Tf(){Ef=ns=iu=null}function If(t){var e=ru.current;Re(ru),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){iu=t,Ef=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(iu===null)throw Error(F(308));ns=t,iu.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var li=null;function Sf(t){li===null?li=[t]:li.push(t)}function jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Sf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var i=t.updateQueue;mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,S=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=Ve({},p,m);break e;case 2:mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=p}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fa={},kn=Gr(fa),qo=Gr(fa),Go=Gr(fa);function ui(t){if(t===fa)throw Error(F(174));return t}function kf(t,e){switch(Ie(Go,e),Ie(qo,t),Ie(kn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lh(e,t)}Re(kn),Ie(kn,e)}function Es(){Re(kn),Re(qo),Re(Go)}function zv(t){ui(Go.current);var e=ui(kn.current),n=Lh(e,t.type);e!==n&&(Ie(qo,t),Ie(kn,n))}function Cf(t){qo.current===t&&(Re(kn),Re(qo))}var be=Gr(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function Rf(){for(var t=0;t<rh.length;t++)rh[t]._workInProgressVersionPrimary=null;rh.length=0}var Cl=sr.ReactCurrentDispatcher,ih=sr.ReactCurrentBatchConfig,vi=0,De=null,Ke=null,et=null,au=!1,Io=!1,Ko=0,VI=0;function gt(){throw Error(F(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function xf(t,e,n,r,i,s){if(vi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?FI:jI,t=n(r,i),Io){s=0;do{if(Io=!1,Ko=0,25<=s)throw Error(F(301));s+=1,et=Ke=null,e.updateQueue=null,Cl.current=UI,t=n(r,i)}while(Io)}if(Cl.current=lu,e=Ke!==null&&Ke.next!==null,vi=0,et=Ke=De=null,au=!1,e)throw Error(F(300));return t}function Nf(){var t=Ko!==0;return Ko=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?De.memoizedState=et=t:et=et.next=t,et}function en(){if(Ke===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=et===null?De.memoizedState:et.next;if(e!==null)et=e,Ke=t;else{if(t===null)throw Error(F(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},et===null?De.memoizedState=et=t:et=et.next=t}return et}function Qo(t,e){return typeof e=="function"?e(t):e}function sh(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((vi&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,De.lanes|=f,wi|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,fn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oh(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $v(){}function Bv(t,e){var n=De,r=en(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,bf(qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Jo(9,Wv.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(F(349));vi&30||Hv(n,e,i)}return i}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Kv(t)}function qv(t,e,n){return n(function(){Gv(e)&&Kv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function Kv(t){var e=Yn(t,1);e!==null&&hn(e,t,1,-1)}function fg(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=LI.bind(null,De,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qv(){return en().memoizedState}function Rl(t,e,n,r){var i=En();De.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function Bu(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Pf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}De.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function pg(t,e){return Rl(8390656,8,t,e)}function bf(t,e){return Bu(2048,8,t,e)}function Jv(t,e){return Bu(4,2,t,e)}function Xv(t,e){return Bu(4,4,t,e)}function Yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4,4,Yv.bind(null,e,t),n)}function Df(){}function e0(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t0(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n0(t,e,n){return vi&21?(fn(n,e)||(n=av(),De.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function OI(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=ih.transition;ih.transition={};try{t(!1),e()}finally{_e=n,ih.transition=r}}function r0(){return en().memoizedState}function MI(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i0(t))s0(e,n);else if(n=jv(t,e,n,r),n!==null){var i=At();hn(n,t,r,i),o0(n,e,r)}}function LI(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i0(t))s0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,o)){var u=e.interleaved;u===null?(i.next=i,Sf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=jv(t,e,i,r),n!==null&&(i=At(),hn(n,t,r,i),o0(n,e,r))}}function i0(t){var e=t.alternate;return t===De||e!==null&&e===De}function s0(t,e){Io=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var lu={readContext:Zt,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},FI={readContext:Zt,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:Df,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=OI.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=En();if(Ne){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),tt===null)throw Error(F(349));vi&30||Hv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pg(qv.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,Wv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=tt.identifierPrefix;if(Ne){var n=Wn,r=Hn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jI={readContext:Zt,useCallback:e0,useContext:Zt,useEffect:bf,useImperativeHandle:Zv,useInsertionEffect:Jv,useLayoutEffect:Xv,useMemo:t0,useReducer:sh,useRef:Qv,useState:function(){return sh(Qo)},useDebugValue:Df,useDeferredValue:function(t){var e=en();return n0(e,Ke.memoizedState,t)},useTransition:function(){var t=sh(Qo)[0],e=en().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Bv,useId:r0,unstable_isNewReconciler:!1},UI={readContext:Zt,useCallback:e0,useContext:Zt,useEffect:bf,useImperativeHandle:Zv,useInsertionEffect:Jv,useLayoutEffect:Xv,useMemo:t0,useReducer:oh,useRef:Qv,useState:function(){return oh(Qo)},useDebugValue:Df,useDeferredValue:function(t){var e=en();return Ke===null?e.memoizedState=t:n0(e,Ke.memoizedState,t)},useTransition:function(){var t=oh(Qo)[0],e=en().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Bv,useId:r0,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function id(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=xr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(hn(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=xr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(hn(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=xr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(hn(e,t,r,n),kl(e,t,r))}};function mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function a0(t,e,n){var r=!1,i=Fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Vt(e)?yi:Tt.current,r=e.contextTypes,s=(r=r!=null)?_s(t,i):Fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Af(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Vt(e)?yi:Tt.current,i.context=_s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hu.enqueueReplaceState(i,i.state,null),su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=pT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ah(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zI=typeof WeakMap=="function"?WeakMap:Map;function l0(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cu||(cu=!0,gd=r),od(t,e)},n}function u0(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var $I=sr.ReactCurrentOwner,bt=!1;function St(t,e,n,r){e.child=t===null?Fv(e,null,n,r):ws(e,t.child,n,r)}function wg(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=xf(t,e,n,r,s,i),n=Nf(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ne&&n&&_f(e),e.flags|=1,St(t,e,r,i),e.child)}function Eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c0(t,e,s,r,i)):(t=bl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function c0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return ad(t,e,n,r,i)}function h0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(is,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(is,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(is,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(is,Ut),Ut|=r;return St(t,e,i,n),e.child}function d0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,r,i){var s=Vt(n)?yi:Tt.current;return s=_s(e,s),us(e,i),n=xf(t,e,n,r,s,i),r=Nf(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ne&&r&&_f(e),e.flags|=1,St(t,e,n,i),e.child)}function Tg(t,e,n,r,i){if(Vt(n)){var s=!0;eu(e)}else s=!1;if(us(e,i),e.stateNode===null)Pl(t,e),a0(e,n,r),sd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Zt(h):(h=Vt(n)?yi:Tt.current,h=_s(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gg(e,o,r,h),mr=!1;var m=e.memoizedState;o.state=m,su(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Dt.current||mr?(typeof f=="function"&&(id(e,n,f,r),u=e.memoizedState),(l=mr||mg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:sn(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Vt(n)?yi:Tt.current,u=_s(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&gg(e,o,r,u),mr=!1,m=e.memoizedState,o.state=m,su(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||Dt.current||mr?(typeof S=="function"&&(id(e,n,S,r),R=e.memoizedState),(h=mr||mg(e,n,h,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ld(t,e,n,r,s,i)}function ld(t,e,n,r,i,s){d0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ag(e,n,!1),Zn(t,e,s);r=e.stateNode,$I.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,l,s)):St(t,e,l,s),e.memoizedState=r.state,i&&ag(e,n,!0),e.child}function f0(t){var e=t.stateNode;e.pendingContext?og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&og(t,e.context,!1),kf(t,e.containerInfo)}function Ig(t,e,n,r,i){return vs(),wf(i),e.flags|=256,St(t,e,n,r),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function p0(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(be,i&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ud,t):Vf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return BI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nr(l,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ud,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vf(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&wf(r),ws(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ah(Error(F(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gu({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ud,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=ah(s,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,bt||l){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),hn(r,t,i,-1))}return Uf(),r=ah(Error(F(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=Cr(i.nextSibling),Ht=e,Ne=!0,an=null,t!==null&&(Kt[Qt++]=Hn,Kt[Qt++]=Wn,Kt[Qt++]=_i,Hn=t.id,Wn=t.overflow,_i=e),e=Vf(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rd(t.return,e,n)}function lh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lh(e,!0,n,null,s);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HI(t,e,n){switch(e.tag){case 3:f0(e),vs();break;case 5:zv(e);break;case 1:Vt(e.type)&&eu(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?p0(t,e,n):(Ie(be,be.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);Ie(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,h0(t,e,n)}return Zn(t,e,n)}var g0,hd,y0,_0;g0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(kn.current);var s=null;switch(n){case"input":i=Dh(t,i),r=Dh(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Mh(t,i),r=Mh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Fh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WI(t,e,n){var r=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Vt(e.type)&&Zl(),yt(e),null;case 3:return r=e.stateNode,Es(),Re(Dt),Re(Tt),Rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(vd(an),an=null))),hd(t,e),yt(e),null;case 5:Cf(e);var i=ui(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return yt(e),null}if(t=ui(kn.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)ke(fo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Dm(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":Om(r,s),ke("invalid",r)}Fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Za(r),Vm(r,s,!0);break;case"textarea":Za(r),Mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Wo]=r,g0(t,e,!1,!1),e.stateNode=t;e:{switch(o=jh(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)ke(fo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":Dm(t,r),i=Dh(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),ke("invalid",t);break;case"textarea":Om(t,r),i=Mh(t,r),ke("invalid",t);break;default:i=r}Fh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Q_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&G_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mo(t,u):typeof u=="number"&&Mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ke("scroll",t):u!=null&&rf(t,s,u,o))}switch(n){case"input":Za(t),Vm(t,r,!1);break;case"textarea":Za(t),Mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ui(Go.current),ui(kn.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return yt(e),null;case 13:if(Re(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&$t!==null&&e.mode&1&&!(e.flags&128))Mv(),vs(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Sn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else an!==null&&(vd(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Qe===0&&(Qe=3):Uf())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Es(),hd(t,e),t===null&&Bo(e.stateNode.containerInfo),yt(e),null;case 10:return If(e.type._context),yt(e),null;case 17:return Vt(e.type)&&Zl(),yt(e),null;case 19:if(Re(be),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ao(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Is&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return yt(e),null}else 2*ze()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=be.current,Ie(be,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function qI(t,e){switch(vf(e),e.tag){case 1:return Vt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),Re(Dt),Re(Tt),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(Re(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(be),null;case 4:return Es(),null;case 10:return If(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var hl=!1,wt=!1,GI=typeof WeakSet=="function"?WeakSet:Set,q=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Ag=!1;function KI(t,e){if(Qh=Ql,t=Iv(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jh={focusedElem:t,selectionRange:n},Ql=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,V=R.memoizedState,k=e.stateNode,T=k.getSnapshotBeforeUpdate(e.elementType===e.type?P:sn(e.type,P),V);k.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Fe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=Ag,Ag=!1,R}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Wo],delete e[Zh],delete e[xI],delete e[NI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w0(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var it=null,on=!1;function dr(t,e,n){for(n=n.child;n!==null;)E0(t,e,n),n=n.sibling}function E0(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:wt||rs(n,e);case 6:var r=it,i=on;it=null,dr(t,e,n),it=r,on=i,it!==null&&(on?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(on?(t=it,n=n.stateNode,t.nodeType===8?th(t.parentNode,n):t.nodeType===1&&th(t,n),Uo(t)):th(it,n.stateNode));break;case 4:r=it,i=on,it=n.stateNode.containerInfo,on=!0,dr(t,e,n),it=r,on=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!wt&&(rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,dr(t,e,n),wt=r):dr(t,e,n);break;default:dr(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GI),e.forEach(function(r){var i=rS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,on=!1;break e;case 3:it=l.stateNode.containerInfo,on=!0;break e;case 4:it=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(it===null)throw Error(F(160));E0(s,o,i),it=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Fe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),vn(t),r&4){try{So(3,t,t.return),Wu(3,t)}catch(P){Fe(t,t.return,P)}try{So(5,t,t.return)}catch(P){Fe(t,t.return,P)}}break;case 1:rn(e,t),vn(t),r&512&&n!==null&&rs(n,n.return);break;case 5:if(rn(e,t),vn(t),r&512&&n!==null&&rs(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(P){Fe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&H_(i,s),jh(l,o);var h=jh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Q_(i,p):f==="dangerouslySetInnerHTML"?G_(i,p):f==="children"?Mo(i,p):rf(i,f,p,h)}switch(l){case"input":Vh(i,s);break;case"textarea":W_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?ss(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(P){Fe(t,t.return,P)}}break;case 6:if(rn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Fe(t,t.return,P)}}break;case 3:if(rn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(P){Fe(t,t.return,P)}break;case 4:rn(e,t),vn(t);break;case 13:rn(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lf=ze())),r&4&&Cg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(h=wt)||f,rn(e,t),wt=h):rn(e,t),vn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(m=q,S=m.child,m.tag){case 0:case 11:case 14:case 15:So(4,m,m.return);break;case 1:rs(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Fe(r,n,P)}}break;case 5:rs(m,m.return);break;case 22:if(m.memoizedState!==null){Pg(p);continue}}S!==null?(S.return=m,q=S):Pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=K_("display",o))}catch(P){Fe(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(P){Fe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:rn(e,t),vn(t),r&4&&Cg(t);break;case 21:break;default:rn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=kg(t);md(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=kg(t);pd(t,l,o);break;default:throw Error(F(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QI(t,e,n){q=t,I0(t)}function I0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||wt;l=hl;var h=wt;if(hl=o,(wt=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?xg(i):u!==null?(u.return=o,q=u):xg(i);for(;s!==null;)q=s,I0(s),s=s.sibling;q=i,hl=l,wt=h}Rg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Rg(t)}}function Rg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}wt||e.flags&512&&fd(e)}catch(m){Fe(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Pg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function xg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Fe(e,i,u)}}var s=e.return;try{fd(e)}catch(u){Fe(e,s,u)}break;case 5:var o=e.return;try{fd(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var JI=Math.ceil,uu=sr.ReactCurrentDispatcher,Of=sr.ReactCurrentOwner,Yt=sr.ReactCurrentBatchConfig,de=0,tt=null,He=null,lt=0,Ut=0,is=Gr(0),Qe=0,Xo=null,wi=0,qu=0,Mf=0,Ao=null,xt=null,Lf=0,Is=1/0,zn=null,cu=!1,gd=null,Pr=null,dl=!1,Tr=null,hu=0,ko=0,yd=null,xl=-1,Nl=0;function At(){return de&6?ze():xl!==-1?xl:xl=ze()}function xr(t){return t.mode&1?de&2&&lt!==0?lt&-lt:DI.transition!==null?(Nl===0&&(Nl=av()),Nl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function hn(t,e,n,r){if(50<ko)throw ko=0,yd=null,Error(F(185));ca(t,n,r),(!(de&2)||t!==tt)&&(t===tt&&(!(de&2)&&(qu|=n),Qe===4&&yr(t,lt)),Ot(t,r),n===1&&de===0&&!(e.mode&1)&&(Is=ze()+500,$u&&Kr()))}function Ot(t,e){var n=t.callbackNode;DT(t,e);var r=Kl(t,t===tt?lt:0);if(r===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?bI(Ng.bind(null,t)):Dv(Ng.bind(null,t)),RI(function(){!(de&6)&&Kr()}),n=null;else{switch(lv(r)){case 1:n=uf;break;case 4:n=sv;break;case 16:n=Gl;break;case 536870912:n=ov;break;default:n=Gl}n=N0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(xl=-1,Nl=0,de&6)throw Error(F(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=Kl(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=de;de|=2;var s=k0();(tt!==t||lt!==e)&&(zn=null,Is=ze()+500,di(t,e));do try{ZI();break}catch(l){A0(t,l)}while(!0);Tf(),uu.current=s,de=i,He!==null?e=0:(tt=null,lt=0,e=Qe)}if(e!==0){if(e===2&&(i=Hh(t),i!==0&&(r=i,e=_d(t,i))),e===1)throw n=Xo,di(t,0),yr(t,r),Ot(t,ze()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!XI(i)&&(e=du(t,r),e===2&&(s=Hh(t),s!==0&&(r=s,e=_d(t,s))),e===1))throw n=Xo,di(t,0),yr(t,r),Ot(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:si(t,xt,zn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=Lf+500-ze(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yh(si.bind(null,t,xt,zn),e);break}si(t,xt,zn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JI(r/1960))-r,10<r){t.timeoutHandle=Yh(si.bind(null,t,xt,zn),r);break}si(t,xt,zn);break;case 5:si(t,xt,zn);break;default:throw Error(F(329))}}}return Ot(t,ze()),t.callbackNode===n?S0.bind(null,t):null}function _d(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=du(t,e),t!==2&&(e=xt,xt=n,e!==null&&vd(e)),t}function vd(t){xt===null?xt=t:xt.push.apply(xt,t)}function XI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Mf,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Ng(t){if(de&6)throw Error(F(327));cs();var e=Kl(t,0);if(!(e&1))return Ot(t,ze()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=Xo,di(t,0),yr(t,e),Ot(t,ze()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,xt,zn),Ot(t,ze()),null}function Ff(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Is=ze()+500,$u&&Kr())}}function Ei(t){Tr!==null&&Tr.tag===0&&!(de&6)&&cs();var e=de;de|=1;var n=Yt.transition,r=_e;try{if(Yt.transition=null,_e=1,t)return t()}finally{_e=r,Yt.transition=n,de=e,!(de&6)&&Kr()}}function jf(){Ut=is.current,Re(is)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CI(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:Es(),Re(Dt),Re(Tt),Rf();break;case 5:Cf(r);break;case 4:Es();break;case 13:Re(be);break;case 19:Re(be);break;case 10:If(r.type._context);break;case 22:case 23:jf()}n=n.return}if(tt=t,He=t=Nr(t.current,null),lt=Ut=e,Qe=0,Xo=null,Mf=qu=wi=0,xt=Ao=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function A0(t,e){do{var n=He;try{if(Tf(),Cl.current=lu,au){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(vi=0,et=Ke=De=null,Io=!1,Ko=0,Of.current=null,n===null||n.return===null){Qe=1,Xo=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=lt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=_g(o);if(S!==null){S.flags&=-257,vg(S,o,l,s,e),S.mode&1&&yg(s,h,e),e=S,u=h;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){yg(s,h,e),Uf();break e}u=Error(F(426))}}else if(Ne&&l.mode&1){var V=_g(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),vg(V,o,l,s,e),wf(Ts(u,l));break e}}s=u=Ts(u,l),Qe!==4&&(Qe=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=l0(s,u,e);hg(s,k);break e;case 1:l=u;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Pr===null||!Pr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=u0(s,l,e);hg(s,b);break e}}s=s.return}while(s!==null)}R0(n)}catch(U){e=U,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function k0(){var t=uu.current;return uu.current=lu,t===null?lu:t}function Uf(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(wi&268435455)&&!(qu&268435455)||yr(tt,lt)}function du(t,e){var n=de;de|=2;var r=k0();(tt!==t||lt!==e)&&(zn=null,di(t,e));do try{YI();break}catch(i){A0(t,i)}while(!0);if(Tf(),de=n,uu.current=r,He!==null)throw Error(F(261));return tt=null,lt=0,Qe}function YI(){for(;He!==null;)C0(He)}function ZI(){for(;He!==null&&!ST();)C0(He)}function C0(t){var e=x0(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?R0(t):He=e,Of.current=null}function R0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qI(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}else if(n=WI(n,e,Ut),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function si(t,e,n){var r=_e,i=Yt.transition;try{Yt.transition=null,_e=1,eS(t,e,n,r)}finally{Yt.transition=i,_e=r}return null}function eS(t,e,n,r){do cs();while(Tr!==null);if(de&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VT(t,s),t===tt&&(He=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,N0(Gl,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=_e;_e=1;var l=de;de|=4,Of.current=null,KI(t,n),T0(n,t),wI(Jh),Ql=!!Qh,Jh=Qh=null,t.current=n,QI(n),AT(),de=l,_e=o,Yt.transition=s}else t.current=n;if(dl&&(dl=!1,Tr=t,hu=i),s=t.pendingLanes,s===0&&(Pr=null),RT(n.stateNode),Ot(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cu)throw cu=!1,t=gd,gd=null,t;return hu&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===yd?ko++:(ko=0,yd=t):ko=0,Kr(),null}function cs(){if(Tr!==null){var t=lv(hu),e=Yt.transition,n=_e;try{if(Yt.transition=null,_e=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,hu=0,de&6)throw Error(F(331));var i=de;for(de|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:So(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var m=f.sibling,S=f.return;if(v0(f),f===h){q=null;break}if(m!==null){m.return=S,q=m;break}q=S}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,q=k;break e}q=s.return}}var T=t.current;for(q=T;q!==null;){o=q;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,q=C;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(U){Fe(l,l.return,U)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(de=i,Kr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{_e=n,Yt.transition=e}}return!1}function bg(t,e,n){e=Ts(n,e),e=l0(t,e,1),t=Rr(t,e,1),e=At(),t!==null&&(ca(t,1,e),Ot(t,e))}function Fe(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ts(n,t),t=u0(e,t,1),e=Rr(e,t,1),t=At(),e!==null&&(ca(e,1,t),Ot(e,t));break}}e=e.return}}function tS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>ze()-Lf?di(t,0):Mf|=n),Ot(t,e)}function P0(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=At();t=Yn(t,e),t!==null&&(ca(t,e,n),Ot(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P0(t,n)}function rS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),P0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,HI(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Ne&&e.flags&1048576&&Vv(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=_s(e,Tt.current);us(e,n),i=xf(null,e,r,t,i,n);var s=Nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Af(e),i.updater=Hu,e.stateNode=i,i._reactInternals=e,sd(e,r,t,n),e=ld(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&_f(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sS(r),t=sn(r,t),i){case 0:e=ad(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,sn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),ad(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Tg(t,e,r,i,n);case 3:e:{if(f0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Uv(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(F(423)),e),e=Ig(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(F(424)),e),e=Ig(t,e,r,n,i);break e}else for($t=Cr(e.stateNode.containerInfo.firstChild),Ht=e,Ne=!0,an=null,n=Fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Zn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return zv(e),t===null&&nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xh(r,i)?o=null:s!==null&&Xh(r,s)&&(e.flags|=32),d0(t,e),St(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return p0(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),wg(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(ru,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Dt.current){e=Zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=Zt(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),Eg(t,e,r,i,n);case 15:return c0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Pl(t,e),e.tag=1,Vt(r)?(t=!0,eu(e)):t=!1,us(e,n),a0(e,r,i),sd(e,r,i,n),ld(null,e,r,!0,t,n);case 19:return m0(t,e,n);case 22:return h0(t,e,n)}throw Error(F(156,e.tag))};function N0(t,e){return iv(t,e)}function iS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new iS(t,e,n,r)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ki:return fi(n.children,i,s,e);case sf:o=8,i|=8;break;case Ph:return t=Xt(12,n,e,i|2),t.elementType=Ph,t.lanes=s,t;case xh:return t=Xt(13,n,e,i),t.elementType=xh,t.lanes=s,t;case Nh:return t=Xt(19,n,e,i),t.elementType=Nh,t.lanes=s,t;case z_:return Gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j_:o=10;break e;case U_:o=9;break e;case of:o=11;break e;case af:o=14;break e;case pr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function uh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function ch(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,i,s,o,l,u){return t=new oS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(s),t}function aS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return Fr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Vt(n))return bv(t,n,e)}return e}function D0(t,e,n,r,i,s,o,l,u){return t=$f(n,r,!0,t,i,s,o,l,u),t.context=b0(null),n=t.current,r=At(),i=xr(n),s=Kn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,ca(t,i,r),Ot(t,r),t}function Ku(t,e,n,r){var i=e.current,s=At(),o=xr(i);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(hn(t,i,o,s),kl(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function lS(){return null}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Qu.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ku(t,e,null,null)};Qu.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){Ku(null,t,null,null)}),e[Xn]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&fv(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function uS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=fu(o);s.call(h)}}var o=D0(e,r,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Xn]=o.current,Bo(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=fu(u);l.call(h)}}var u=$f(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=u,t[Xn]=u.current,Bo(t.nodeType===8?t.parentNode:t),Ei(function(){Ku(e,u,n,r)}),u}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fu(o);l.call(u)}}Ku(e,o,t,i)}else o=uS(n,e,t,i,r);return fu(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(cf(e,n|1),Ot(e,ze()),!(de&6)&&(Is=ze()+500,Kr()))}break;case 13:Ei(function(){var r=Yn(t,1);if(r!==null){var i=At();hn(r,t,1,i)}}),Bf(t,1)}};hf=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=At();hn(e,t,134217728,n)}Bf(t,134217728)}};cv=function(t){if(t.tag===13){var e=xr(t),n=Yn(t,e);if(n!==null){var r=At();hn(n,t,e,r)}Bf(t,e)}};hv=function(){return _e};dv=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};zh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(F(90));B_(r),Vh(r,i)}}}break;case"textarea":W_(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Y_=Ff;Z_=Ei;var cS={usingClientEntryPoint:!1,Events:[da,Yi,zu,J_,X_,Ff]},lo={findFiberByHostInstance:ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Lu=fl.inject(hS),An=fl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(F(200));return aS(t,e,null,n)};qt.createRoot=function(t,e){if(!Wf(t))throw Error(F(299));var n=!1,r="",i=V0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Hf(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Ei(t)};qt.hydrate=function(t,e,n){if(!Ju(e))throw Error(F(200));return Xu(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D0(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qu(e)};qt.render=function(t,e,n){if(!Ju(e))throw Error(F(200));return Xu(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(F(40));return t._reactRootContainer?(Ei(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};qt.unstable_batchedUpdates=Ff;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Xu(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),O_.exports=qt;var dS=O_.exports,Og=dS;Ch.createRoot=Og.createRoot,Ch.hydrateRoot=Og.hydrateRoot;const fS="modulepreload",pS=function(t){return"/"+t},Mg={},or=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=pS(u),u in Mg)return;Mg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":fS,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Lg=t=>{const e=gS(t);return e.charAt(0).toUpperCase()+e.slice(1)},M0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),yS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=B.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>B.createElement("svg",{ref:u,..._S,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:M0("lucide",i),...!s&&!yS(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>B.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(t,e)=>{const n=B.forwardRef(({className:r,...i},s)=>B.createElement(vS,{ref:s,iconNode:e,className:M0(`lucide-${mS(Lg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Lg(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],ES=X("arrow-right-left",wS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],IS=X("baby",TS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],Fg=X("bed-double",SS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],kS=X("bird",AS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],RS=X("book-open",CS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],L0=X("briefcase",PS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],NS=X("bus",xS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],DS=X("calendar",bS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],OS=X("cat",VS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],LS=X("chart-pie",MS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jS=X("chevron-down",FS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],zS=X("circle-dollar-sign",US);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],jg=X("circle-question-mark",$S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],F0=X("coffee",BS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],pu=X("coins",HS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],qS=X("dog",WS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],KS=X("ellipsis",GS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],JS=X("eye-off",QS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],YS=X("eye",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],eA=X("fish",ZS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],nA=X("gamepad-2",tA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],iA=X("gamepad",rA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],j0=X("gift",sA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],aA=X("graduation-cap",oA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],U0=X("heart",lA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ug=X("history",uA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Co=X("house",cA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],dA=X("lock",hA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],zg=X("message-circle",fA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],z0=X("music",pA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],$0=X("plane",mA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],yA=X("plus",gA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]],vA=X("rabbit",_A);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],EA=X("refresh-ccw",wA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],IA=X("settings",TA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$g=X("shield-check",SA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],wd=X("shopping-bag",AA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ed=X("smartphone",kA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],RA=X("sparkles",CA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Bg=X("sun",PA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],NA=X("ticket",xA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],Hg=X("tram-front",bA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]],VA=X("turtle",DA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],MA=X("tv",OA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],FA=X("user",LA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Td=X("utensils",jA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],B0=X("wallet",UA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],$A=X("wrench",zA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],H0=X("zap",BA),HA=()=>{};var Wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new qA;const m=s<<2|l>>4;if(r.push(m),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GA=function(t){const e=W0(t);return q0.encodeByteArray(e,!0)},mu=function(t){return GA(t).replace(/\./g,"")},G0=function(t){try{return q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=()=>KA().__FIREBASE_DEFAULTS__,JA=()=>{if(typeof process>"u"||typeof Wg>"u")return;const t=Wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&G0(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return HA()||QA()||JA()||XA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},K0=t=>{var e,n;return(n=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YA=t=>{const e=K0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Q0=()=>{var t;return(t=Yu())===null||t===void 0?void 0:t.config},J0=t=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}const Ro={};function t2(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ro))Ro[e]?t.emulator.push(e):t.prod.push(e);return t}function n2(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qg=!1;function Y0(t,e){if(typeof window>"u"||typeof document>"u"||!Vs(window.location.host)||Ro[t]===e||Ro[t]||qg)return;Ro[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=t2().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{qg=!0,o()},m}function f(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=n2(r),S=n("text"),R=document.getElementById(S)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),k=n("preprendIcon"),T=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;l(C),f(V,P);const b=h();u(T,k),C.append(T,R,V,b),document.body.appendChild(C)}s?(R.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function i2(){var t;const e=(t=Yu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l2(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u2(){return!i2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c2(){try{return typeof indexedDB=="object"}catch{return!1}}function h2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d2,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f2(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ar(i,l,r)}}function f2(t,e){return t.replace(p2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p2=/\{\$([^}]+)}/g;function m2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gg(s)&&Gg(o)){if(!Ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function g2(t,e){const n=new y2(t,e);return n.subscribe.bind(n)}class y2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E2(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w2(t){return t===oi?void 0:t}function E2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const I2={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},S2=ae.INFO,A2={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},k2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=S2,this._logHandler=k2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const C2=(t,e)=>e.some(n=>t instanceof n);let Kg,Qg;function R2(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P2(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z0=new WeakMap,Id=new WeakMap,e1=new WeakMap,dh=new WeakMap,Gf=new WeakMap;function x2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z0.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function N2(t){if(Id.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Id.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||e1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b2(t){Sd=t(Sd)}function D2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fh(this),e,...n);return e1.set(r,e.sort?e.sort():[e]),br(r)}:P2().includes(t)?function(...e){return t.apply(fh(this),e),br(Z0.get(this))}:function(...e){return br(t.apply(fh(this),e))}}function V2(t){return typeof t=="function"?D2(t):(t instanceof IDBTransaction&&N2(t),C2(t,R2())?new Proxy(t,Sd):t)}function br(t){if(t instanceof IDBRequest)return x2(t);if(dh.has(t))return dh.get(t);const e=V2(t);return e!==t&&(dh.set(t,e),Gf.set(e,t)),e}const fh=t=>Gf.get(t);function O2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const M2=["get","getKey","getAll","getAllKeys","count"],L2=["put","add","delete","clear"],ph=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ph.get(e))return ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M2.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ph.set(e,s),s}b2(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",Xg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new qf("@firebase/app"),U2="@firebase/app-compat",z2="@firebase/analytics-compat",$2="@firebase/analytics",B2="@firebase/app-check-compat",H2="@firebase/app-check",W2="@firebase/auth",q2="@firebase/auth-compat",G2="@firebase/database",K2="@firebase/data-connect",Q2="@firebase/database-compat",J2="@firebase/functions",X2="@firebase/functions-compat",Y2="@firebase/installations",Z2="@firebase/installations-compat",ek="@firebase/messaging",tk="@firebase/messaging-compat",nk="@firebase/performance",rk="@firebase/performance-compat",ik="@firebase/remote-config",sk="@firebase/remote-config-compat",ok="@firebase/storage",ak="@firebase/storage-compat",lk="@firebase/firestore",uk="@firebase/ai",ck="@firebase/firestore-compat",hk="firebase",dk="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="[DEFAULT]",fk={[Ad]:"fire-core",[U2]:"fire-core-compat",[$2]:"fire-analytics",[z2]:"fire-analytics-compat",[H2]:"fire-app-check",[B2]:"fire-app-check-compat",[W2]:"fire-auth",[q2]:"fire-auth-compat",[G2]:"fire-rtdb",[K2]:"fire-data-connect",[Q2]:"fire-rtdb-compat",[J2]:"fire-fn",[X2]:"fire-fn-compat",[Y2]:"fire-iid",[Z2]:"fire-iid-compat",[ek]:"fire-fcm",[tk]:"fire-fcm-compat",[nk]:"fire-perf",[rk]:"fire-perf-compat",[ik]:"fire-rc",[sk]:"fire-rc-compat",[ok]:"fire-gcs",[ak]:"fire-gcs-compat",[lk]:"fire-fst",[ck]:"fire-fst-compat",[uk]:"fire-vertex","fire-js":"fire-js",[hk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,pk=new Map,Cd=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(Cd.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of gu.values())Yg(n,t);for(const n of pk.values())Yg(n,t);return!0}function Kf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new pa("app","Firebase",mk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=dk;function t1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=Q0()),!n)throw Dr.create("no-options");const s=gu.get(i);if(s){if(Ti(n,s.options)&&Ti(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new T2(i);for(const u of Cd.values())o.addComponent(u);const l=new gk(n,r,o);return gu.set(i,l),l}function n1(t=kd){const e=gu.get(t);if(!e&&t===kd&&Q0())return t1();if(!e)throw Dr.create("no-app",{appName:t});return e}function Vr(t,e,n){var r;let i=(r=fk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}Ss(new Ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="firebase-heartbeat-database",_k=1,Yo="firebase-heartbeat-store";let mh=null;function r1(){return mh||(mh=O2(yk,_k,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),mh}async function vk(t){try{const n=(await r1()).transaction(Yo),r=await n.objectStore(Yo).get(i1(t));return await n.done,r}catch(e){if(e instanceof ar)er.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Zg(t,e){try{const r=(await r1()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,i1(t)),await r.done}catch(n){if(n instanceof ar)er.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function i1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=1024,Ek=30;class Tk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ey();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ek){const o=Ak(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ey(),{heartbeatsToSend:r,unsentEntries:i}=Ik(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function ey(){return new Date().toISOString().substring(0,10)}function Ik(t,e=wk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c2()?h2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ty(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}function Ak(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){Ss(new Ii("platform-logger",e=>new F2(e),"PRIVATE")),Ss(new Ii("heartbeat",e=>new Tk(e),"PRIVATE")),Vr(Ad,Xg,t),Vr(Ad,Xg,"esm2017"),Vr("fire-js","")}kk("");function Qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function s1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ck=s1,o1=new pa("auth","Firebase",s1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new qf("@firebase/auth");function Rk(t,...e){yu.logLevel<=ae.WARN&&yu.warn(`Auth (${Os}): ${t}`,...e)}function Dl(t,...e){yu.logLevel<=ae.ERROR&&yu.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Xf(t,...e)}function dn(t,...e){return Xf(t,...e)}function Jf(t,e,n){const r=Object.assign(Object.assign({},Ck()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function pi(t){return Jf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bn(t,"argument-error"),Jf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o1.create(t,...e)}function ee(t,e,...n){if(!t)throw Xf(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function tr(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xk(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||o2()||"connection"in navigator)?navigator.onLine:!0}function bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=r2()||a2()}get(){return Nk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ok=new ga(3e4,6e4);function Zf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,r,i={}){return l1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return s2()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(h.credentials="include"),a1.fetch()(await u1(t,t.config.apiHost,n,l),h)})}async function l1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dk),e);try{const i=new Lk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jf(t,f,h);bn(t,f)}}catch(i){if(i instanceof ar)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function Mk(t,e,n,r,i={}){const s=await Ms(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function u1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Yf(t.config,i):`${t.config.apiScheme}://${i}`;return Vk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),Ok.get())})}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function _u(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jk(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=ep(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(gh(i.auth_time)),issuedAtTime:Po(gh(i.iat)),expirationTime:Po(gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=G0(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ry(t){const e=ep(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&Uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zo(t,_u(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?c1(s.providerUserInfo):[],l=Bk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Pd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function $k(t){const e=$e(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function c1(t){return t.map(e=>{var{providerId:n}=e,r=Qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){const n=await l1(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await u1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(u.credentials="include"),a1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Wk(t,e){return Ms(t,"POST","/v2/accounts:revokeToken",Zf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jk(this,e)}reload(){return $k(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(pi(this.auth));const e=await this.getIdToken();return await Zo(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:b,isAnonymous:U,providerData:L,stsTokenManager:_}=n;ee(C&&_,e,"internal-error");const g=hs.fromJSON(this.name,_);ee(typeof C=="string",e,"internal-error"),fr(p,e.name),fr(m,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof U=="boolean",e,"internal-error"),fr(S,e.name),fr(R,e.name),fr(P,e.name),fr(V,e.name),fr(k,e.name),fr(T,e.name);const w=new un({uid:C,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:U,photoURL:R,phoneNumber:S,tenantId:P,stsTokenManager:g,createdAt:k,lastLoginAt:T});return L&&Array.isArray(L)&&(w.providerData=L.map(I=>Object.assign({},I))),V&&(w._redirectEventId=V),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?c1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new un({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;function Gn(t){tr(t instanceof Function,"Expected a class definition");let e=iy.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}h1.type="NONE";const sy=h1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _u(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Gn(sy),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Gn(sy);const o=Vl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await _u(e,{idToken:f}).catch(()=>{});if(!m)break;p=await un._fromGetAccountInfoResponse(e,m,f)}else p=un._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ds(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y1(e))return"Blackberry";if(_1(e))return"Webos";if(f1(e))return"Safari";if((e.includes("chrome/")||p1(e))&&!e.includes("edge/"))return"Chrome";if(g1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d1(t=It()){return/firefox\//i.test(t)}function f1(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p1(t=It()){return/crios\//i.test(t)}function m1(t=It()){return/iemobile/i.test(t)}function g1(t=It()){return/android/i.test(t)}function y1(t=It()){return/blackberry/i.test(t)}function _1(t=It()){return/webos/i.test(t)}function tp(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qk(t=It()){var e;return tp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gk(){return l2()&&document.documentMode===10}function v1(t=It()){return tp(t)||g1(t)||_1(t)||y1(t)||/windows phone/i.test(t)||m1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e=[]){let n;switch(t){case"Browser":n=oy(It());break;case"Worker":n=`${oy(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e={}){return Ms(t,"GET","/v2/passwordPolicy",Zf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=6;class Xk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ay(this),this.idTokenSubscription=new ay(this),this.beforeStateQueue=new Kk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _u(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(pi(this));const n=e?$e(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qk(this),n=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Rk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zu(t){return $e(t)}class ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=g2(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zk(t){np=t}function eC(t){return np.loadJS(t)}function tC(){return np.gapiScript}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e){const n=Kf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ti(s,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function iC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const r=Zu(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=E1(e),{host:o,port:l}=oC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Ti(h,r.config.emulator)&&Ti(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vs(o)?(X0(`${s}//${o}${u}`),Y0("Auth",!0)):aC()}function E1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oC(t){const e=E1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ly(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ly(o)}}}function ly(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Mk(t,"POST","/v1/accounts:signInWithIdp",Zf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="http://localhost";class Si extends T1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends ya{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ya{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ya{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await un._fromIdTokenResponse(e,r,i),o=uy(r);return new As({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uy(r);return new As({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function I1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function uC(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(pi(r));const i="reauthenticate";try{const s=await Zo(t,I1(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=ep(s.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),As._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e,n=!1){if(ln(t.app))return Promise.reject(pi(t));const r="signIn",i=await I1(t,r,e),s=await As._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dC(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function fC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function pC(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function mC(t){return $e(t).signOut()}async function gC(t){return $e(t).delete()}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=1e3,_C=10;class A1 extends S1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Gk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_C):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A1.type="LOCAL";const vC=A1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1 extends S1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k1.type="SESSION";const C1=k1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await wC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=ip("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function TC(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function IC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AC(){return R1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="firebaseLocalStorageDb",kC=1,Tu="firebaseLocalStorage",x1="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function CC(){const t=indexedDB.deleteDatabase(P1);return new _a(t).toPromise()}function xd(){const t=indexedDB.open(P1,kC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:x1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await CC(),e(await xd()))})})}async function cy(t,e,n){const r=tc(t,!0).put({[x1]:e,value:n});return new _a(r).toPromise()}async function RC(t,e){const n=tc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function hy(t,e){const n=tc(t,!0).delete(e);return new _a(n).toPromise()}const PC=800,xC=3;class N1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(AC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IC(),!this.activeServiceWorker)return;this.sender=new EC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xd();return await cy(e,Eu,"1"),await hy(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tc(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N1.type="LOCAL";const NC=N1;new ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e){return e?Gn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends T1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bC(t){return hC(t.auth,new sp(t),t.bypassAuthState)}function DC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),cC(n,new sp(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),uC(n,new sp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return DC;default:bn(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=new ga(2e3,1e4);async function MC(t,e,n){if(ln(t.app))return Promise.reject(dn(t,"operation-not-supported-in-this-environment"));const r=Zu(t);Pk(t,e,rp);const i=b1(r,n);return new ci(r,"signInViaPopup",e,i).executeNotNull()}class ci extends D1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OC.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="pendingRedirect",Ol=new Map;class FC extends D1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await jC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jC(t,e){const n=$C(e),r=zC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UC(t,e){Ol.set(t._key(),e)}function zC(t){return Gn(t._redirectPersistence)}function $C(t){return Vl(LC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){if(ln(t.app))return Promise.reject(pi(t));const r=Zu(t),i=b1(r,e),o=await new FC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=10*60*1e3;class WC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HC&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(XC(n))return}catch{}bn(t,"unauthorized-domain")}function XC(t){const e=Rd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QC.test(n))return!1;if(KC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new ga(3e4,6e4);function fy(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZC(t){return new Promise((e,n)=>{var r,i,s;function o(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),n(dn(t,"network-request-failed"))},timeout:YC.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const l=nC("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},eC(`${tC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function eR(t){return Ml=Ml||ZC(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new ga(5e3,15e3),nR="__/auth/iframe",rR="emulator/auth/iframe",iR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yf(e,rR):`https://${t.config.authDomain}/${nR}`,r={apiKey:e.apiKey,appName:t.name,v:Os},i=sR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function aR(t){const e=await eR(t),n=Cn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:oR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(o)},tR.get());function u(){Cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uR=500,cR=600,hR="_blank",dR="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fR(t,e,n,r=uR,i=cR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},lR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=It().toLowerCase();n&&(l=p1(h)?hR:n),d1(h)&&(e=e||dR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(qk(h)&&l!=="_self")return pR(e||"",l),new py(null);const p=window.open(e||"",l,f);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new py(p)}function pR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="__/auth/handler",gR="emulator/auth/handler",yR=encodeURIComponent("fac");async function my(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:i};if(e instanceof rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ya){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${yR}=${encodeURIComponent(u)}`:"";return`${_R(t)}?${ma(l).slice(1)}${h}`}function _R({config:t}){return t.emulator?Yf(t,gR):`https://${t.authDomain}/${mR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="webStorageSupport";class vR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C1,this._completeRedirectFn=BC,this._overrideRedirectResult=UC}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await my(e,n,r,Rd(),i);return fR(e,o,ip())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await my(e,n,r,Rd(),i);return TC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aR(e),r=new WC(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yh,{type:yh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yh];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v1()||f1()||tp()}}const wR=vR;var gy="@firebase/auth",yy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IR(t){Ss(new Ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w1(t)},h=new Yk(r,i,s,u);return iC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new Ii("auth-internal",e=>{const n=Zu(e.getProvider("auth").getImmediate());return(r=>new ER(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(gy,yy,TR(t)),Vr(gy,yy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=5*60,AR=J0("authIdTokenMaxAge")||SR;let _y=null;const kR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const i=n==null?void 0:n.token;_y!==i&&(_y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function O1(t=n1()){const e=Kf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rC(t,{popupRedirectResolver:wR,persistence:[NC,vC,C1]}),r=J0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=kR(s.toString());fC(n,o,()=>o(n.currentUser)),dC(n,l=>o(l))}}const i=K0("auth");return i&&sC(n,`http://${i}`),n}function CR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IR("Browser");var RR="firebase",PR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr(RR,PR,"app");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,M1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(I,v,A){for(var E=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)E[ue-2]=arguments[ue];return g.prototype[v].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var I=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)I[v]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(v=0;16>v;++v)I[v]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],v=_.g[2];var A=_.g[3],E=g+(A^w&(v^A))+I[0]+3614090360&4294967295;g=w+(E<<7&4294967295|E>>>25),E=A+(v^g&(w^v))+I[1]+3905402710&4294967295,A=g+(E<<12&4294967295|E>>>20),E=v+(w^A&(g^w))+I[2]+606105819&4294967295,v=A+(E<<17&4294967295|E>>>15),E=w+(g^v&(A^g))+I[3]+3250441966&4294967295,w=v+(E<<22&4294967295|E>>>10),E=g+(A^w&(v^A))+I[4]+4118548399&4294967295,g=w+(E<<7&4294967295|E>>>25),E=A+(v^g&(w^v))+I[5]+1200080426&4294967295,A=g+(E<<12&4294967295|E>>>20),E=v+(w^A&(g^w))+I[6]+2821735955&4294967295,v=A+(E<<17&4294967295|E>>>15),E=w+(g^v&(A^g))+I[7]+4249261313&4294967295,w=v+(E<<22&4294967295|E>>>10),E=g+(A^w&(v^A))+I[8]+1770035416&4294967295,g=w+(E<<7&4294967295|E>>>25),E=A+(v^g&(w^v))+I[9]+2336552879&4294967295,A=g+(E<<12&4294967295|E>>>20),E=v+(w^A&(g^w))+I[10]+4294925233&4294967295,v=A+(E<<17&4294967295|E>>>15),E=w+(g^v&(A^g))+I[11]+2304563134&4294967295,w=v+(E<<22&4294967295|E>>>10),E=g+(A^w&(v^A))+I[12]+1804603682&4294967295,g=w+(E<<7&4294967295|E>>>25),E=A+(v^g&(w^v))+I[13]+4254626195&4294967295,A=g+(E<<12&4294967295|E>>>20),E=v+(w^A&(g^w))+I[14]+2792965006&4294967295,v=A+(E<<17&4294967295|E>>>15),E=w+(g^v&(A^g))+I[15]+1236535329&4294967295,w=v+(E<<22&4294967295|E>>>10),E=g+(v^A&(w^v))+I[1]+4129170786&4294967295,g=w+(E<<5&4294967295|E>>>27),E=A+(w^v&(g^w))+I[6]+3225465664&4294967295,A=g+(E<<9&4294967295|E>>>23),E=v+(g^w&(A^g))+I[11]+643717713&4294967295,v=A+(E<<14&4294967295|E>>>18),E=w+(A^g&(v^A))+I[0]+3921069994&4294967295,w=v+(E<<20&4294967295|E>>>12),E=g+(v^A&(w^v))+I[5]+3593408605&4294967295,g=w+(E<<5&4294967295|E>>>27),E=A+(w^v&(g^w))+I[10]+38016083&4294967295,A=g+(E<<9&4294967295|E>>>23),E=v+(g^w&(A^g))+I[15]+3634488961&4294967295,v=A+(E<<14&4294967295|E>>>18),E=w+(A^g&(v^A))+I[4]+3889429448&4294967295,w=v+(E<<20&4294967295|E>>>12),E=g+(v^A&(w^v))+I[9]+568446438&4294967295,g=w+(E<<5&4294967295|E>>>27),E=A+(w^v&(g^w))+I[14]+3275163606&4294967295,A=g+(E<<9&4294967295|E>>>23),E=v+(g^w&(A^g))+I[3]+4107603335&4294967295,v=A+(E<<14&4294967295|E>>>18),E=w+(A^g&(v^A))+I[8]+1163531501&4294967295,w=v+(E<<20&4294967295|E>>>12),E=g+(v^A&(w^v))+I[13]+2850285829&4294967295,g=w+(E<<5&4294967295|E>>>27),E=A+(w^v&(g^w))+I[2]+4243563512&4294967295,A=g+(E<<9&4294967295|E>>>23),E=v+(g^w&(A^g))+I[7]+1735328473&4294967295,v=A+(E<<14&4294967295|E>>>18),E=w+(A^g&(v^A))+I[12]+2368359562&4294967295,w=v+(E<<20&4294967295|E>>>12),E=g+(w^v^A)+I[5]+4294588738&4294967295,g=w+(E<<4&4294967295|E>>>28),E=A+(g^w^v)+I[8]+2272392833&4294967295,A=g+(E<<11&4294967295|E>>>21),E=v+(A^g^w)+I[11]+1839030562&4294967295,v=A+(E<<16&4294967295|E>>>16),E=w+(v^A^g)+I[14]+4259657740&4294967295,w=v+(E<<23&4294967295|E>>>9),E=g+(w^v^A)+I[1]+2763975236&4294967295,g=w+(E<<4&4294967295|E>>>28),E=A+(g^w^v)+I[4]+1272893353&4294967295,A=g+(E<<11&4294967295|E>>>21),E=v+(A^g^w)+I[7]+4139469664&4294967295,v=A+(E<<16&4294967295|E>>>16),E=w+(v^A^g)+I[10]+3200236656&4294967295,w=v+(E<<23&4294967295|E>>>9),E=g+(w^v^A)+I[13]+681279174&4294967295,g=w+(E<<4&4294967295|E>>>28),E=A+(g^w^v)+I[0]+3936430074&4294967295,A=g+(E<<11&4294967295|E>>>21),E=v+(A^g^w)+I[3]+3572445317&4294967295,v=A+(E<<16&4294967295|E>>>16),E=w+(v^A^g)+I[6]+76029189&4294967295,w=v+(E<<23&4294967295|E>>>9),E=g+(w^v^A)+I[9]+3654602809&4294967295,g=w+(E<<4&4294967295|E>>>28),E=A+(g^w^v)+I[12]+3873151461&4294967295,A=g+(E<<11&4294967295|E>>>21),E=v+(A^g^w)+I[15]+530742520&4294967295,v=A+(E<<16&4294967295|E>>>16),E=w+(v^A^g)+I[2]+3299628645&4294967295,w=v+(E<<23&4294967295|E>>>9),E=g+(v^(w|~A))+I[0]+4096336452&4294967295,g=w+(E<<6&4294967295|E>>>26),E=A+(w^(g|~v))+I[7]+1126891415&4294967295,A=g+(E<<10&4294967295|E>>>22),E=v+(g^(A|~w))+I[14]+2878612391&4294967295,v=A+(E<<15&4294967295|E>>>17),E=w+(A^(v|~g))+I[5]+4237533241&4294967295,w=v+(E<<21&4294967295|E>>>11),E=g+(v^(w|~A))+I[12]+1700485571&4294967295,g=w+(E<<6&4294967295|E>>>26),E=A+(w^(g|~v))+I[3]+2399980690&4294967295,A=g+(E<<10&4294967295|E>>>22),E=v+(g^(A|~w))+I[10]+4293915773&4294967295,v=A+(E<<15&4294967295|E>>>17),E=w+(A^(v|~g))+I[1]+2240044497&4294967295,w=v+(E<<21&4294967295|E>>>11),E=g+(v^(w|~A))+I[8]+1873313359&4294967295,g=w+(E<<6&4294967295|E>>>26),E=A+(w^(g|~v))+I[15]+4264355552&4294967295,A=g+(E<<10&4294967295|E>>>22),E=v+(g^(A|~w))+I[6]+2734768916&4294967295,v=A+(E<<15&4294967295|E>>>17),E=w+(A^(v|~g))+I[13]+1309151649&4294967295,w=v+(E<<21&4294967295|E>>>11),E=g+(v^(w|~A))+I[4]+4149444226&4294967295,g=w+(E<<6&4294967295|E>>>26),E=A+(w^(g|~v))+I[11]+3174756917&4294967295,A=g+(E<<10&4294967295|E>>>22),E=v+(g^(A|~w))+I[2]+718787259&4294967295,v=A+(E<<15&4294967295|E>>>17),E=w+(A^(v|~g))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(v+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+v&4294967295,_.g[3]=_.g[3]+A&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,I=this.B,v=this.h,A=0;A<g;){if(v==0)for(;A<=w;)i(this,_,A),A+=this.blockSize;if(typeof _=="string"){for(;A<g;)if(I[v++]=_.charCodeAt(A++),v==this.blockSize){i(this,I),v=0;break}}else for(;A<g;)if(I[v++]=_[A++],v==this.blockSize){i(this,I),v=0;break}}this.h=v,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var I=0;32>I;I+=8)_[w++]=this.g[g]>>>I&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],I=!0,v=_.length-1;0<=v;v--){var A=_[v]|0;I&&A==g||(w[v]=A,I=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return V(h(-_));for(var g=[],w=1,I=0;_>=w;I++)g[I]=_/w|0,w*=4294967296;return new o(g,0)}function f(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return V(f(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),I=p,v=0;v<_.length;v+=8){var A=Math.min(8,_.length-v),E=parseInt(_.substring(v,v+A),g);8>A?(A=h(Math.pow(g,A)),I=I.j(A).add(h(E))):(I=I.j(w),I=I.add(h(E)))}return I}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var I=this.i(w);_+=(0<=I?I:4294967296+I)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(P(this))return"-"+V(this).toString(_);for(var g=h(Math.pow(_,6)),w=this,I="";;){var v=b(w,g).g;w=k(w,v.j(g));var A=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=v,R(w))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=k(this,_),P(_)?-1:R(_)?0:1};function V(_){for(var g=_.g.length,w=[],I=0;I<g;I++)w[I]=~_.g[I];return new o(w,~_.h).add(m)}t.abs=function(){return P(this)?V(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0,v=0;v<=g;v++){var A=I+(this.i(v)&65535)+(_.i(v)&65535),E=(A>>>16)+(this.i(v)>>>16)+(_.i(v)>>>16);I=E>>>16,A&=65535,E&=65535,w[v]=E<<16|A}return new o(w,w[w.length-1]&-2147483648?-1:0)};function k(_,g){return _.add(V(g))}t.j=function(_){if(R(this)||R(_))return p;if(P(this))return P(_)?V(this).j(V(_)):V(V(this).j(_));if(P(_))return V(this.j(V(_)));if(0>this.l(S)&&0>_.l(S))return h(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var v=0;v<_.g.length;v++){var A=this.i(I)>>>16,E=this.i(I)&65535,ue=_.i(v)>>>16,re=_.i(v)&65535;w[2*I+2*v]+=E*re,T(w,2*I+2*v),w[2*I+2*v+1]+=A*re,T(w,2*I+2*v+1),w[2*I+2*v+1]+=E*ue,T(w,2*I+2*v+1),w[2*I+2*v+2]+=A*ue,T(w,2*I+2*v+2)}for(I=0;I<g;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=g;I<2*g;I++)w[I]=0;return new o(w,0)};function T(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function C(_,g){this.g=_,this.h=g}function b(_,g){if(R(g))throw Error("division by zero");if(R(_))return new C(p,p);if(P(_))return g=b(V(_),g),new C(V(g.g),V(g.h));if(P(g))return g=b(_,V(g)),new C(V(g.g),g.h);if(30<_.g.length){if(P(_)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=g;0>=I.l(_);)w=U(w),I=U(I);var v=L(w,1),A=L(I,1);for(I=L(I,2),w=L(w,2);!R(I);){var E=A.add(I);0>=E.l(_)&&(v=v.add(w),A=E),I=L(I,1),w=L(w,1)}return g=k(_,v.j(g)),new C(v,g)}for(v=p;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(w),E=A.j(g);P(E)||0<E.l(_);)w-=I,A=h(w),E=A.j(g);R(A)&&(A=m),v=v.add(A),_=k(_,E)}return new C(v,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)&_.i(I);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)|_.i(I);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)^_.i(I);return new o(w,this.h^_.h)};function U(_){for(var g=_.g.length+1,w=[],I=0;I<g;I++)w[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(w,_.h)}function L(_,g){var w=g>>5;g%=32;for(var I=_.g.length-w,v=[],A=0;A<I;A++)v[A]=0<g?_.i(A+w)>>>g|_.i(A+w+1)<<32-g:_.i(A+w);return new o(v,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,M1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Or=o}).apply(typeof vy<"u"?vy:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L1,po,F1,Ll,Nd,j1,U1,z1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in d))break e;d=d[x]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,y=!1,x={next:function(){if(!y&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,x,D){for(var z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)z[Ee-2]=arguments[Ee];return c.prototype[x].apply(y,z)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const x=a.length||0,D=y.length||0;a.length=x+D;for(let z=0;z<D;z++)a[x+z]=y[z]}else a.push(y)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var U=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function L(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(d in y)a[d]=y[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function v(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=H;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ue{constructor(){this.h=this.g=null}add(c,d){const y=re.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var re=new k(()=>new ve,a=>a.reset());class ve{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,j=!1,H=new ue,K=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(ce)}};var ce=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){A(d)}var c=re;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Me=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function ht(a,c){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{b(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Se[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ht.aa.h.call(this)}}R(ht,me);var Se={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),Vn=0;function Xr(a,c,d,y,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=x,this.key=++Vn,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a){this.src=a,this.g={},this.h=0}we.prototype.add=function(a,c,d,y,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=mn(a,c,y,x);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Xr(c,this.src,D,!!y,x),c.fa=d,a.push(c)),c};function Ft(a,c){var d=c.type;if(d in a.g){var y=a.g[d],x=Array.prototype.indexOf.call(y,c,void 0),D;(D=0<=x)&&Array.prototype.splice.call(y,x,1),D&&(Z(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mn(a,c,d,y){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==y)return x}return-1}var ft="closure_lm_"+(1e6*Math.random()|0),tn={};function gn(a,c,d,y,x){if(Array.isArray(c)){for(var D=0;D<c.length;D++)gn(a,c[D],d,y,x);return null}return d=zs(d),a&&a[dt]?a.K(c,d,h(y)?!!y.capture:!1,x):bi(a,c,d,!1,y,x)}function bi(a,c,d,y,x,D){if(!c)throw Error("Invalid event type");var z=h(x)?!!x.capture:!!x,Ee=Rt(a);if(Ee||(a[ft]=Ee=new we(a)),d=Ee.add(c,d,y,z,D),d.proxy)return d;if(y=Pa(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)Me||(x=z),x===void 0&&(x=!1),a.addEventListener(c.toString(),y,x);else if(a.attachEvent)a.attachEvent(xa(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pa(){function a(d){return c.call(a.src,a.listener,d)}const c=wc;return a}function Di(a,c,d,y,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)Di(a,c[D],d,y,x);else y=h(y)?!!y.capture:!!y,d=zs(d),a&&a[dt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=mn(D,d,y,x),-1<d&&(Z(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Rt(a))&&(c=a.g[c.toString()],a=-1,c&&(a=mn(c,d,y,x)),(d=-1<a?c[a]:null)&&Vi(d))}function Vi(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[dt])Ft(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(xa(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Rt(c))?(Ft(d,a),d.h==0&&(d.src=null,c[ft]=null)):Z(a)}}}function xa(a){return a in tn?tn[a]:tn[a]="on"+a}function wc(a,c){if(a.da)a=!0;else{c=new ht(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&Vi(a),a=d.call(y,c)}return a}function Rt(a){return a=a[ft],a instanceof we?a:null}var On="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(a){return typeof a=="function"?a:(a[On]||(a[On]=function(c){return a.handleEvent(c)}),a[On])}function Xe(){oe.call(this),this.i=new we(this),this.M=this,this.F=null}R(Xe,oe),Xe.prototype[dt]=!0,Xe.prototype.removeEventListener=function(a,c,d,y){Di(this,a,c,d,y)};function nt(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new me(c,a);else if(c instanceof me)c.target=c.target||a;else{var x=c;c=new me(y,a),I(c,x)}if(x=!0,d)for(var D=d.length-1;0<=D;D--){var z=c.g=d[D];x=Oi(z,y,!0,c)&&x}if(z=c.g=a,x=Oi(z,y,!0,c)&&x,x=Oi(z,y,!1,c)&&x,d)for(D=0;D<d.length;D++)z=c.g=d[D],x=Oi(z,y,!1,c)&&x}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)Z(d[y]);delete a.g[c],a.h--}}this.F=null},Xe.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Xe.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function Oi(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==d){var Ee=z.listener,rt=z.ha||z.src;z.fa&&Ft(a.i,z),x=Ee.call(rt,y)!==!1&&x}}return x&&!y.defaultPrevented}function Na(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function $s(a){a.g=Na(()=>{a.g=null,a.i&&(a.i=!1,$s(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ec extends oe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$s(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(a){oe.call(this),this.h=a,this.g={}}R(Yr,oe);var ba=[];function Da(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Vi(c)},a),a.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),Da(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bs=l.JSON.stringify,Tc=l.JSON.parse,Ic=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Hs(){}Hs.prototype.h=null;function Va(a){return a.h||(a.h=a.i())}function Oa(){}var Zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){me.call(this,"d")}R(Ma,me);function Ws(){me.call(this,"c")}R(Ws,me);var Mn={},La=null;function Q(){return La=La||new Xe}Mn.La="serverreachability";function xe(a){me.call(this,Mn.La,a)}R(xe,me);function yn(a){const c=Q();nt(c,new xe(c))}Mn.STAT_EVENT="statevent";function Ln(a,c){me.call(this,Mn.STAT_EVENT,a),this.stat=c}R(Ln,me);function ye(a){const c=Q();nt(c,new Ln(c,a))}Mn.Ma="timingevent";function _n(a,c){me.call(this,Mn.Ma,a),this.size=c}R(_n,me);function lr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Sc(a,c,d,y,x,D){a.info(function(){if(a.g)if(D)for(var z="",Ee=D.split("&"),rt=0;rt<Ee.length;rt++){var fe=Ee[rt].split("=");if(1<fe.length){var pt=fe[0];fe=fe[1];var mt=pt.split("_");z=2<=mt.length&&mt[1]=="type"?z+(pt+"="+fe+"&"):z+(pt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+c+`
`+d+`
`+z})}function Ac(a,c,d,y,x,D,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+z})}function Fn(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+kc(a,d)+(y?" "+y:"")})}function qs(a,c){a.info(function(){return"TIMEOUT: "+c})}Mi.prototype.info=function(){};function kc(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return Bs(d)}catch{return c}}var ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$p={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cc;function Fa(){}R(Fa,Hs),Fa.prototype.g=function(){return new XMLHttpRequest},Fa.prototype.i=function(){return{}},Cc=new Fa;function ur(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var Hp={},Rc={};function Pc(a,c,d){a.L=1,a.v=$a(jn(c)),a.m=d,a.P=!0,Wp(a,null)}function Wp(a,c){a.F=Date.now(),ja(a),a.A=jn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),sm(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Bp,a.g=Im(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Ec(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(ba[0]=x.toString()),x=ba);for(var D=0;D<x.length;D++){var z=gn(d,x[D],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),yn(),Sc(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const c=this.M;c&&Un(a)==3?c.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Un(this.g);var c=this.g.Ba();const ji=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||dm(this.g)))){this.J||mt!=4||c==7||(c==8||0>=ji?yn(3):yn(2)),xc(this);var d=this.g.Z();this.X=d;t:if(qp(this)){var y=dm(this.g);a="";var x=y.length,D=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ti(this),Gs(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(D&&c==x-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Ac(this.i,this.u,this.A,this.l,this.R,mt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,rt=this.g;if((Ee=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Ee)){var fe=Ee;break t}}fe=null}if(d=fe)Fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,d);else{this.o=!1,this.s=3,ye(12),ti(this),Gs(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<z.length;)if(nn=wE(this,z),nn==Rc){mt==4&&(this.s=4,ye(14),d=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Hp){this.s=4,ye(15),Fn(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Fn(this.i,this.l,nn,null),Nc(this,nn);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,ye(16),d=!1),this.o=this.o&&d,!d)Fn(this.i,this.l,z,"[Invalid Chunked Response]"),ti(this),Gs(this);else if(0<z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Lc(pt),pt.M=!0,ye(11))}}else Fn(this.i,this.l,z,null),Nc(this,z);mt==4&&ti(this),this.o&&!this.J&&(mt==4?vm(this.j,this):(this.o=!1,ja(this)))}else LE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ye(12)):(this.s=0,ye(13)),ti(this),Gs(this)}}}catch{}finally{}};function qp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Rc:(d=Number(c.substring(d,y)),isNaN(d)?Hp:(y+=1,y+d>c.length?Rc:(c=c.slice(y,y+d),a.C=y+d,c)))}ur.prototype.cancel=function(){this.J=!0,ti(this)};function ja(a){a.S=Date.now()+a.I,Gp(a,a.I)}function Gp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=lr(m(a.ba,a),c)}function xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qs(this.i,this.A),this.L!=2&&(yn(),ye(17)),ti(this),this.s=2,Gs(this)):Gp(this,this.S-a)};function Gs(a){a.j.G==0||a.J||vm(a.j,a)}function ti(a){xc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Da(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Nc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||bc(d.h,a))){if(!a.K&&bc(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ka(d),qa(d);else break e;Mc(d),ye(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=lr(m(d.Za,d),6e3));if(1>=Jp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ri(d,11)}else if((a.K||d.g==a)&&Ka(d),!T(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let fe=x[c];if(d.T=fe[0],fe=fe[1],d.G==2)if(fe[0]=="c"){d.K=fe[1],d.ia=fe[2];const pt=fe[3];pt!=null&&(d.la=pt,d.j.info("VER="+d.la));const mt=fe[4];mt!=null&&(d.Aa=mt,d.j.info("SVER="+d.Aa));const ji=fe[5];ji!=null&&typeof ji=="number"&&0<ji&&(y=1.5*ji,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const nn=a.g;if(nn){const Ja=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var D=y.h;D.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Dc(D,D.h),D.h=null))}if(y.D){const Fc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(y.ya=Fc,Ae(y.I,y.D,Fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var z=a;if(y.qa=Tm(y,y.J?y.ia:null,y.W),z.K){Xp(y.h,z);var Ee=z,rt=y.L;rt&&(Ee.I=rt),Ee.B&&(xc(Ee),ja(Ee)),y.g=z}else ym(y);0<d.i.length&&Ga(d)}else fe[0]!="stop"&&fe[0]!="close"||ri(d,7);else d.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ri(d,7):Oc(d):fe[0]!="noop"&&d.l&&d.l.ta(fe),d.v=0)}}yn(4)}catch{}}var EE=class{constructor(a,c){this.g=a,this.map=c}};function Kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jp(a){return a.h?1:a.g?a.g.size:0}function bc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Dc(a,c){a.g?a.g.add(c):a.h=c}function Xp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Kp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function TE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function IE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function Zp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=IE(a),y=TE(a),x=y.length,D=0;D<x;D++)c.call(void 0,y[D],d&&d[D],a)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),x=null;if(0<=y){var D=a[d].substring(0,y);x=a[d].substring(y+1)}else D=a[d];c(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ni(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ni){this.h=a.h,Ua(this,a.j),this.o=a.o,this.g=a.g,za(this,a.s),this.l=a.l;var c=a.i,d=new Js;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tm(this,d),this.m=a.m}else a&&(c=String(a).match(em))?(this.h=!1,Ua(this,c[1]||"",!0),this.o=Ks(c[2]||""),this.g=Ks(c[3]||"",!0),za(this,c[4]),this.l=Ks(c[5]||"",!0),tm(this,c[6]||"",!0),this.m=Ks(c[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}ni.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Qs(c,nm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Qs(c,nm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qs(d,d.charAt(0)=="/"?CE:kE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qs(d,PE)),a.join("")};function jn(a){return new ni(a)}function Ua(a,c,d){a.j=d?Ks(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function za(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tm(a,c,d){c instanceof Js?(a.i=c,xE(a.i,a.h)):(d||(c=Qs(c,RE)),a.i=new Js(c,a.h))}function Ae(a,c,d){a.i.set(c,d)}function $a(a){return Ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ks(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,AE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function AE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nm=/[#\/\?@]/g,kE=/[#\?:]/g,CE=/[#\?]/g,RE=/[#\?@]/g,PE=/#/g;function Js(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&SE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Js.prototype,t.add=function(a,c){cr(this),this.i=null,a=Li(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rm(a,c){cr(a),c=Li(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function im(a,c){return cr(a),c=Li(a,c),a.g.has(c)}t.forEach=function(a,c){cr(this),this.g.forEach(function(d,y){d.forEach(function(x){a.call(c,x,y,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const x=a[y];for(let D=0;D<x.length;D++)d.push(c[y])}return d},t.V=function(a){cr(this);let c=[];if(typeof a=="string")im(this,a)&&(c=c.concat(this.g.get(Li(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return cr(this),this.i=null,a=Li(this,a),im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sm(a,c,d){rm(a,c),0<d.length&&(a.i=null,a.g.set(Li(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const D=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var x=D;z[y]!==""&&(x+="="+encodeURIComponent(String(z[y]))),a.push(x)}}return this.i=a.join("&")};function Li(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function xE(a,c){c&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(d,y){var x=y.toLowerCase();y!=x&&(rm(this,y),sm(this,x,d))},a)),a.j=c}function NE(a,c){const d=new Mi;if(l.Image){const y=new Image;y.onload=S(hr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=S(hr,d,"TestLoadImage: error",!1,c,y),y.onabort=S(hr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=S(hr,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function bE(a,c){const d=new Mi,y=new AbortController,x=setTimeout(()=>{y.abort(),hr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(x),D.ok?hr(d,"TestPingServer: ok",!0,c):hr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),hr(d,"TestPingServer: error",!1,c)})}function hr(a,c,d,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(d)}catch{}}function DE(){this.g=new Ic}function VE(a,c,d){const y=d||"";try{Zp(a,function(x,D){let z=x;h(x)&&(z=Bs(x)),c.push(y+D+"="+encodeURIComponent(z))})}catch(x){throw c.push(y+"type="+encodeURIComponent("_badmap")),x}}function Ba(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ba,Hs),Ba.prototype.g=function(){return new Ha(this.l,this.j)},Ba.prototype.i=function(a){return function(){return a}}({});function Ha(a,c){Xe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ha,Xe),t=Ha.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;om(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function om(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Xs(this):Ys(this),this.readyState==3&&om(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Xs(this))},t.Qa=function(a){this.g&&(this.response=a,Xs(this))},t.ga=function(){this.g&&Xs(this)};function Xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function am(a){let c="";return L(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Vc(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=am(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ae(a,c,d))}function Le(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Le,Xe);var OE=/^https?$/i,ME=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cc.g(),this.v=this.o?Va(this.o):Va(Cc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){lm(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)d.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ME,c,void 0))||y||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){lm(this,D)}};function lm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,um(a),Wa(a)}function um(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cm(this):this.bb())},t.bb=function(){cm(this)};function cm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)Na(a.Ea,0,a);else if(nt(a,"readystatechange"),Un(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=z===0){var x=String(a.D).match(em)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),y=!OE.test(x?x.toLowerCase():"")}d=y}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<Un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",um(a)}}finally{Wa(a)}}}}function Wa(a,c){if(a.g){hm(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=y}catch{}}}function hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Tc(c)}};function dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LE(a){const c={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var d=v(a[y]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}_(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fm(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kp(a&&a.concurrentRequestLimit),this.Da=new DE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){ye(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Tm(this,null,this.W),Ga(this)};function Oc(a){if(pm(a),a.G==3){var c=a.U++,d=jn(a.I);if(Ae(d,"SID",a.K),Ae(d,"RID",c),Ae(d,"TYPE","terminate"),eo(a,d),c=new ur(a,a.j,c),c.L=2,c.v=$a(jn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ja(c)}Em(a)}function qa(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function pm(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!Qp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Pe||K(),j||(Pe(),j=!0),H.add(c,a),a.B=0}}function FE(a,c){return Jp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=lr(m(a.Ga,a,c),wm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new ur(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gm(this,x,c),d=jn(this.I),Ae(d,"RID",a),Ae(d,"CVER",22),this.D&&Ae(d,"X-HTTP-Session-Id",this.D),eo(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(am(D)))+"&"+c:this.m&&Vc(d,this.m,D)),Dc(this.h,x),this.Ua&&Ae(d,"TYPE","init"),this.P?(Ae(d,"$req",c),Ae(d,"SID","null"),x.T=!0,Pc(x,d,null)):Pc(x,d,c),this.G=2}}else this.G==3&&(a?mm(this,a):this.i.length==0||Qp(this.h)||mm(this))};function mm(a,c){var d;c?d=c.l:d=a.U++;const y=jn(a.I);Ae(y,"SID",a.K),Ae(y,"RID",d),Ae(y,"AID",a.T),eo(a,y),a.m&&a.o&&Vc(y,a.m,a.o),d=new ur(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Dc(a.h,d),Pc(d,y,c)}function eo(a,c){a.H&&L(a.H,function(d,y){Ae(c,y,d)}),a.l&&Zp({},function(d,y){Ae(c,y,d)})}function gm(a,c,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=x[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Ee=!0;for(let rt=0;rt<d;rt++){let fe=x[rt].g;const pt=x[rt].map;if(fe-=D,0>fe)D=Math.max(0,x[rt].g-100),Ee=!1;else try{VE(pt,z,"req"+fe+"_")}catch{y&&y(pt)}}if(Ee){y=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function ym(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Pe||K(),j||(Pe(),j=!0),H.add(c,a),a.v=0}}function Mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=lr(m(a.Fa,a),wm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_m(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=lr(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ye(10),qa(this),_m(this))};function Lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _m(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=jn(a.qa);Ae(c,"RID","rpc"),Ae(c,"SID",a.K),Ae(c,"AID",a.T),Ae(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ae(c,"TO",a.ja),Ae(c,"TYPE","xmlhttp"),eo(a,c),a.m&&a.o&&Vc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=$a(jn(c)),d.m=null,d.P=!0,Wp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),Mc(this),ye(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vm(a,c){var d=null;if(a.g==c){Ka(a),Lc(a),a.g=null;var y=2}else if(bc(a.h,c))d=c.D,Xp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;y=Q(),nt(y,new _n(y,d)),Ga(a)}else ym(a);else if(x=c.s,x==3||x==0&&0<c.X||!(y==1&&FE(a,c)||y==2&&Mc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:ri(a,5);break;case 4:ri(a,10);break;case 3:ri(a,6);break;default:ri(a,2)}}}function wm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function ri(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),y=a.Xa;const x=!y;y=new ni(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ua(y,"https"),$a(y),x?NE(y.toString(),d):bE(y.toString(),d)}else ye(2);a.G=0,a.l&&a.l.sa(c),Em(a),pm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Em(a){if(a.G=0,a.ka=[],a.l){const c=Yp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Tm(a,c,d){var y=d instanceof ni?jn(d):new ni(d);if(y.g!="")c&&(y.g=c+"."+y.g),za(y,y.s);else{var x=l.location;y=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var D=new ni(null);y&&Ua(D,y),c&&(D.g=c),x&&za(D,x),d&&(D.l=d),y=D}return d=a.D,c=a.ya,d&&c&&Ae(y,d,c),Ae(y,"VER",a.la),eo(a,y),y}function Im(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Le(new Ba({eb:d})):new Le(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qa(){}Qa.prototype.g=function(a,c){return new jt(a,c)};function jt(a,c){Xe.call(this),this.g=new fm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Fi(this)}R(jt,Xe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Oc(this.g)},jt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Bs(a),a=d);c.i.push(new EE(c.Ya++,a)),c.G==3&&Ga(c)},jt.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,jt.aa.N.call(this)};function Am(a){Ma.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Am,Ma);function km(){Ws.call(this),this.status=1}R(km,Ws);function Fi(a){this.g=a}R(Fi,Sm),Fi.prototype.ua=function(){nt(this.g,"a")},Fi.prototype.ta=function(a){nt(this.g,new Am(a))},Fi.prototype.sa=function(a){nt(this.g,new km)},Fi.prototype.ra=function(){nt(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,z1=function(){return new Qa},U1=function(){return Q()},j1=Mn,Nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,Ll=ei,$p.COMPLETE="complete",F1=$p,Oa.EventType=Zr,Zr.OPEN="a",Zr.CLOSE="b",Zr.ERROR="c",Zr.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,po=Oa,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,L1=Le}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});const wy="@firebase/firestore",Ey="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new qf("@firebase/firestore");function Bi(){return Ai.logLevel}function W(t,...e){if(Ai.logLevel<=ae.DEBUG){const n=e.map(op);Ai.debug(`Firestore (${Ls}): ${t}`,...n)}}function nr(t,...e){if(Ai.logLevel<=ae.ERROR){const n=e.map(op);Ai.error(`Firestore (${Ls}): ${t}`,...n)}}function jr(t,...e){if(Ai.logLevel<=ae.WARN){const n=e.map(op);Ai.warn(`Firestore (${Ls}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$1(t,r,n)}function $1(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw nr(r),new Error(r)}function ge(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||$1(e,i,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bR{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string",31837,{l:r}),new B1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class DR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class VR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new DR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ge(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ty(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ty(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=MR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function bd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ie(r,i);{const s=H1(),o=LR(s.encode(Iy(t,n)),s.encode(Iy(e,n)));return o!==0?o:ie(r,i)}}n+=r>65535?2:1}return ie(t.length,e.length)}function Iy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function LR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ie(t[n],e[n]);return ie(t.length,e.length)}function ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),i=Tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):bd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class Te extends Tn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const FR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Tn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return FR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sy}static keyField(){return new at([Sy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Te.fromString(e))}static fromName(e){return new G(Te.fromString(e).popFirst(5))}static empty(){return new G(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jR(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ay(t){if(!G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ky(t){if(G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function q1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function va(t,e){if(!q1(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=-62135596800,Ry=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ry);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cy)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ry}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(va(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:qe("string",Ce._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ce(0,0))}static max(){return new te(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=-1;function UR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Ur(i,G.empty(),e)}function zR(t){return new Ur(t.readTime,t.key,ea)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(te.min(),G.empty(),ea)}static max(){return new Ur(te.max(),G.empty(),ea)}}function $R(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==BR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function WR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}rc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=-1;function ic(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function qR(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="";function GR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Py(e)),e=KR(t.get(n),e);return Py(e)}function KR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case G1:n+="";break;default:n+=s}}return n}function Py(t){return t+G1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Je(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Q1("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const QR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(ge(!!t,39018),typeof t=="string"){let e=0;const n=QR.exec(t);if(ge(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="server_timestamp",X1="__type__",Y1="__previous_value__",Z1="__local_write_time__";function up(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[X1])===null||n===void 0?void 0:n.stringValue)===J1}function sc(t){const e=t.mapValue.fields[Y1];return up(e)?sc(e):e}function ta(t){const e=zr(t.mapValue.fields[Z1].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Su="(default)";class na{constructor(e,n){this.projectId=e,this.database=n||Su}static empty(){return new na("","")}get isDefaultDatabase(){return this.database===Su}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="__type__",XR="__max__",yl={mapValue:{}},tw="__vector__",Au="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?up(t)?4:ZR(t)?9007199254740991:YR(t)?10:11:J(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),l=zr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $r(i.bytesValue).isEqual($r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),l=Ue(s.doubleValue);return o===l?Iu(o)===Iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xy(o)!==xy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Dn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function ra(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return by(t.timestampValue,e.timestampValue);case 4:return by(ta(t),ta(e));case 5:return bd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=$r(s),u=$r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ue(s.latitude),Ue(o.latitude));return l!==0?l:ie(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},S=(l=p[Au])===null||l===void 0?void 0:l.arrayValue,R=(u=m[Au])===null||u===void 0?void 0:u.arrayValue,P=ie(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Dy(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===yl.mapValue&&o===yl.mapValue)return 0;if(s===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=bd(u[p],f[p]);if(m!==0)return m;const S=Cs(l[u[p]],h[f[p]]);if(S!==0)return S}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{le:n})}}function by(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=zr(t),r=zr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function Dy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Rs(t){return Dd(t)}function Dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dd(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Fl(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(t);return e?16+Fl(e):16;case 5:return 2*t.stringValue.length;case 6:return $r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Qr(r.fields,(s,o)=>{i+=s.length+Fl(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vd(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function Oy(t){return!!t&&"nullValue"in t}function My(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function YR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ew])===null||n===void 0?void 0:n.stringValue)===tw}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===XR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=xo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(xo(this.value))}}function nw(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new at([n]);if(jl(r)){const s=nw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,te.min(),te.min(),te.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,te.min(),te.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,te.min(),te.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.position=e,this.inclusive=n}}function Ly(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n="asc"){this.field=e,this.dir=n}}function eP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{}class We extends rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nP(e,n,r):n==="array-contains"?new sP(e,r):n==="in"?new oP(e,r):n==="not-in"?new aP(e,r):n==="array-contains-any"?new lP(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rP(e,r):new iP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends rw{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new pn(e,n)}matches(e){return iw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function iw(t){return t.op==="and"}function sw(t){return tP(t)&&iw(t)}function tP(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Od(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(sw(t))return t.filters.map(e=>Od(e)).join(",");{const e=t.filters.map(n=>Od(n)).join(",");return`${t.op}(${e})`}}function ow(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ow(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function aw(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(aw).join(" ,")+"}"}(t):"Filter"}class nP extends We{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class rP extends We{constructor(e,n){super(e,"in",n),this.keys=lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iP extends We{constructor(e,n){super(e,"not-in",n),this.keys=lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class sP extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&ra(n.arrayValue,this.value)}}class oP extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class aP extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ra(this.value.arrayValue,n)}}class lP extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function jy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uP(t,e,n,r,i,s,o)}function hp(t){const e=ne(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.Pe=n}return e.Pe}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fy(t.startAt,e.startAt)&&Fy(t.endAt,e.endAt)}function Md(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function cP(t,e,n,r,i,s,o,l){return new wa(t,e,n,r,i,s,o,l)}function oc(t){return new wa(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uw(t){return t.collectionGroup!==null}function No(t){const e=ne(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Cu(s,r))}),n.has(at.keyField().canonicalString())||e.Te.push(new Cu(at.keyField(),r))}return e.Te}function Rn(t){const e=ne(t);return e.Ie||(e.Ie=hP(e,No(t))),e.Ie}function hP(t,e){if(t.limitType==="F")return jy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cu(i.field,s)});const n=t.endAt?new ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ku(t.startAt.position,t.startAt.inclusive):null;return jy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ld(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fd(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return dp(Rn(t),Rn(e))&&t.limitType===e.limitType}function cw(t){return`${hp(Rn(t))}|lt:${t.limitType}`}function Hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aw(i)).join(", ")}]`),ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of No(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ly(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,No(r),i)||r.endAt&&!function(o,l,u){const h=Ly(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,No(r),i))}(t,e)}function dP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hw(t){return(e,n)=>{let r=!1;for(const i of No(t)){const s=fP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fP(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Cs(u,h):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return K1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new Oe(G.comparator);function rr(){return pP}const dw=new Oe(G.comparator);function mo(...t){let e=dw;for(const n of t)e=e.insert(n.key,n);return e}function fw(t){let e=dw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return bo()}function pw(){return bo()}function bo(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const mP=new Oe(G.comparator),gP=new Je(G.comparator);function le(...t){let e=gP;for(const n of t)e=e.add(n);return e}const yP=new Je(ie);function _P(){return yP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function mw(t){return{integerValue:""+t}}function vP(t,e){return qR(e)?mw(e):fp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function wP(t,e,n){return t instanceof Ru?function(i,s){const o={fields:{[X1]:{stringValue:J1},[Z1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&up(s)&&(s=sc(s)),s&&(o.fields[Y1]=s),{mapValue:o}}(n,e):t instanceof ia?yw(t,e):t instanceof sa?_w(t,e):function(i,s){const o=gw(i,s),l=zy(o)+zy(i.Ee);return Vd(o)&&Vd(i.Ee)?mw(l):fp(i.serializer,l)}(t,e)}function EP(t,e,n){return t instanceof ia?yw(t,e):t instanceof sa?_w(t,e):n}function gw(t,e){return t instanceof Pu?function(r){return Vd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ru extends uc{}class ia extends uc{constructor(e){super(),this.elements=e}}function yw(t,e){const n=vw(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends uc{constructor(e){super(),this.elements=e}}function _w(t,e){let n=vw(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Pu extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function zy(t){return Ue(t.integerValue||t.doubleValue)}function vw(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ia&&i instanceof ia||r instanceof sa&&i instanceof sa?ks(r.elements,i.elements,Dn):r instanceof Pu&&i instanceof Pu?Dn(r.Ee,i.Ee):r instanceof Ru&&i instanceof Ru}(t.transform,e.transform)}class IP{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function ww(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,Lt.none()):new Ea(t.key,t.data,Lt.none());{const n=t.data,r=Nt.empty();let i=new Je(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new Bt(i.toArray()),Lt.none())}}function SP(t,e,n){t instanceof Ea?function(i,s,o){const l=i.value.clone(),u=By(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!Ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=By(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ew(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Ea?function(s,o,l,u){if(!Ul(s.precondition,o))return l;const h=s.value.clone(),f=Hy(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,l,u){if(!Ul(s.precondition,o))return l;const h=Hy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Ew(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gw(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function $y(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ks(r,i,(s,o)=>TP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ew(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function By(t,e,n){const r=new Map;ge(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,EP(o,l,n[i]))}return r}function Hy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wP(s,o,e))}return r}class hc extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kP extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ww(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>$y(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>$y(n,r))}}class pp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return mP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,he;function xP(t){switch(t){case O.OK:return J(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function Tw(t){if(t===void 0)return nr("GRPC error has no .code"),O.UNKNOWN;switch(t){case Be.OK:return O.OK;case Be.CANCELLED:return O.CANCELLED;case Be.UNKNOWN:return O.UNKNOWN;case Be.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Be.INTERNAL:return O.INTERNAL;case Be.UNAVAILABLE:return O.UNAVAILABLE;case Be.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Be.NOT_FOUND:return O.NOT_FOUND;case Be.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Be.ABORTED:return O.ABORTED;case Be.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Be.DATA_LOSS:return O.DATA_LOSS;default:return J(39323,{code:t})}}(he=Be||(Be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Or([4294967295,4294967295],0);function Wy(t){const e=H1().encode(t),n=new M1;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Or([n,r],0),new Or([i,s],0)]}class mp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Or.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Or.fromNumber(r)));return i.compare(NP)===1&&(i=new Or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Wy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Wy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(te.min(),i,new Oe(ie),rr(),le())}}class Ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class Iw{constructor(e,n){this.targetId=e,this.De=n}}class Sw{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gy{constructor(){this.ve=0,this.Ce=Ky(),this.Fe=ct.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=le(),n=le(),r=le();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new Ta(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Ky()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bP{constructor(e){this.We=e,this.Ge=new Map,this.ze=rr(),this.je=_l(),this.Je=_l(),this.He=new Oe(ie)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Md(s))if(r===0){const o=new G(s.path);this.Xe(n,o,Et.newNoDocument(o,te.min()))}else ge(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=$r(r).toUint8Array()}catch(u){if(u instanceof Q1)return jr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mp(o,i,s)}catch(u){return jr(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Md(l.target)){const u=new G(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Et.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=le();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new dc(e,n,this.He,this.ze,r);return this.ze=rr(),this.je=_l(),this.Je=_l(),this.He=new Oe(ie),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Gy,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Je(ie),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Je(ie),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Gy),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function _l(){return new Oe(G.comparator)}function Ky(){return new Oe(G.comparator)}const DP={asc:"ASCENDING",desc:"DESCENDING"},VP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OP={and:"AND",or:"OR"};class MP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jd(t,e){return t.useProto3Json||ic(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LP(t,e){return xu(t,e.toTimestamp())}function Pn(t){return ge(!!t,49232),te.fromTimestamp(function(n){const r=zr(n);return new Ce(r.seconds,r.nanos)}(t))}function gp(t,e){return Ud(t,e).canonicalString()}function Ud(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kw(t){const e=Te.fromString(t);return ge(Nw(e),10190,{key:e.toString()}),e}function zd(t,e){return gp(t.databaseId,e.path)}function _h(t,e){const n=kw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Rw(n))}function Cw(t,e){return gp(t.databaseId,e)}function FP(t){const e=kw(t);return e.length===4?Te.emptyPath():Rw(e)}function $d(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rw(t){return ge(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qy(t,e,n){return{name:zd(t,e),fields:n.value.mapValue.fields}}function jP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ge(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Tw(h.code);return new $(f,h.message||"")}(o);n=new Sw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_h(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):te.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new zl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_h(t,r.document),s=r.readTime?Pn(r.readTime):te.min(),o=Et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new zl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_h(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return J(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PP(i,s),l=r.targetId;n=new Iw(l,o)}}return n}function UP(t,e){let n;if(e instanceof Ea)n={update:Qy(t,e.key,e.value)};else if(e instanceof hc)n={delete:zd(t,e.key)};else if(e instanceof Jr)n={update:Qy(t,e.key,e.data),updateMask:QP(e.fieldMask)};else{if(!(e instanceof kP))return J(16599,{Rt:e.type});n={verify:zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ru)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:LP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function zP(t,e){return t&&t.length>0?(ge(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(te.min())&&(o=Pn(s)),new IP(o,i.transformResults||[])}(n,e))):[]}function $P(t,e){return{documents:[Cw(t,e.path)]}}function BP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cw(t,i);const s=function(h){if(h.length!==0)return xw(pn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Wi(m.field),direction:qP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function HP(t){let e=FP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=Pw(p);return m instanceof pn&&sw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Cu(qi(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ic(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new ku(S,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,S=p.values||[];return new ku(S,m)}(n.endAt)),cP(e,i,o,s,l,"F",u,h)}function WP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qi(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qi(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qi(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>Pw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function qP(t){return DP[t]}function GP(t){return VP[t]}function KP(t){return OP[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function qi(t){return at.fromServerFormat(t.fieldPath)}function xw(t){return t instanceof We?function(n){if(n.op==="=="){if(My(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NAN"}};if(Oy(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(My(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NAN"}};if(Oy(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(n.field),op:GP(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>xw(i));return r.length===1?r[0]:{compositeFilter:{op:KP(n.op),filters:r}}}(t):J(54877,{filter:t})}function QP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,i,s=te.min(),o=te.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.gt=e}}function XP(t){const e=HP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.Dn=new ZP}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ur.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class ZP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bw=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(bw,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ps(0)}static ur(){return new Ps(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="LruGarbageCollector",ex=1048576;function Yy([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class tx{constructor(e){this.Tr=e,this.buffer=new Je(Yy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Xy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?W(Xy,"Ignoring IndexedDB error during garbage collection: ",n):await Fs(n)}await this.Rr(3e5)})}}class rx{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(rc.ue);const r=new tx(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Jy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Bi()<=ae.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function ix(t,e){return new rx(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,Bt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=rr();const o=bo(),l=function(){return bo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Do(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new ox(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=bo();let i=new Oe((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=pw();f.forEach(m=>{if(!s.has(m)){const S=ww(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(hi());let l=ea,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:fw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new wa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))});let l=mo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Do(f.mutation,h,Bt.empty(),Ce.now()),lc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:XP(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.overlays=new Oe(G.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=hi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=hi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RP(n,r));let s=this.kr.get(n);s===void 0&&(s=le(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.qr=new Je(Ye.Qr),this.$r=new Je(Ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ye(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new G(new Te([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new G(new Te([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=le();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return G.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Je(Ye.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?lp:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ie);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new G(s),0);let l=new Je(ie);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ye(n,0),i=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.ni=e,this.docs=function(){return new Oe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rr();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||$R(zR(f),r)<=0||(i.has(f.key)||lc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fx(this)}getSize(e){return M.resolve(this.size)}}class fx extends sx{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.persistence=e,this.ii=new Pi(n=>hp(n),dp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.si=0,this.oi=new yp,this.targetCount=0,this._i=Ps.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.ai={},this.overlays={},this.ui=new rc(0),this.ci=!1,this.ci=!0,this.li=new cx,this.referenceDelegate=e(this),this.hi=new px(this),this.indexManager=new YP,this.remoteDocumentCache=function(i){return new dx(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new JP(n),this.Ti=new lx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ux,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new hx(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new mx(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class mx extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Ai=new yp,this.Ri=null}static Vi(e){return new _p(e)}get mi(){if(this.Ri)return this.Ri;throw J(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const i=G.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Nu{constructor(e,n){this.persistence=e,this.gi=new Pi(r=>GR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ix(this,n)}static Vi(e,n){return new Nu(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fl(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return u2()?8:WR(It())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gx;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Bi()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Bi()<=ae.DEBUG&&W("QueryEngine","Query:",Hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Bi()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):M.resolve())}ps(e,n){if(Uy(n))return M.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fd(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Fd(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Uy(n)||i.isEqual(te.min())?M.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?M.resolve(null):(Bi()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hi(n)),this.vs(e,o,n,UR(i,ea)).next(l=>l))})}bs(e,n){let r=new Je(hw(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Bi()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Hi(n)),this.gs.getDocumentsMatchingQuery(e,n,Ur.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="LocalStore",_x=3e8;class vx{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Oe(ie),this.Ms=new Pi(s=>hp(s),dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ax(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function wx(t,e,n,r){return new vx(t,e,n,r)}async function Vw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Ex(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let S=M.resolve();return m.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(P=>{const V=h.docVersions.get(R);ge(V!==null,48541),P.version.compareTo(V)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ow(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Tx(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(P,V,k){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=_x?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,S,f)&&l.push(n.hi.updateTargetData(s,S))});let u=rr(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Ix(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(te.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function Ix(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(wp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function Sx(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ax(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Bd(t,e,n){const r=ne(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;W(wp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Zy(t,e,n){const r=ne(t);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ne(u),m=p.Ms.get(f);return m!==void 0?M.resolve(p.Fs.get(m)):p.hi.getTargetData(h,f)}(r,o,Rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:le())).next(l=>(kx(r,dP(e),l),{documents:l,qs:s})))}function kx(t,e,n){let r=t.xs.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class e_{constructor(){this.activeTargetIds=_P()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cx{constructor(){this.Fo=new e_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new e_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="ConnectivityMonitor";class n_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(t_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(t_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl=null;function Hd(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="RestConnection",Px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Su?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Hd(),l=this.Go(e,n.toUriEncodedString());W(vh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Vs(h);return this.jo(e,l,u,r,f).then(p=>(W(vh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw jr(vh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=Px[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class bx extends xx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Hd();return new Promise((l,u)=>{const h=new L1;h.setWithCredentials(!0),h.listenOnce(F1.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ll.NO_ERROR:const p=h.getResponseJson();W(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ll.TIMEOUT:W(_t,`RPC '${e}' ${o} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const m=h.getStatus();if(W(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const P=function(k){const T=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(T)>=0?T:O.UNKNOWN}(R.status);u(new $(P,R.message))}else u(new $(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:J(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(_t,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);W(_t,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Hd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=z1(),l=U1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(_t,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let m=!1,S=!1;const R=new Nx({Ho:V=>{S?W(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(W(_t,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(_t,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},Yo:()=>p.close()}),P=(V,k,T)=>{V.listen(k,C=>{try{T(C)}catch(b){setTimeout(()=>{throw b},0)}})};return P(p,po.EventType.OPEN,()=>{S||(W(_t,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),P(p,po.EventType.CLOSE,()=>{S||(S=!0,W(_t,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(p))}),P(p,po.EventType.ERROR,V=>{S||(S=!0,jr(_t,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),R.__(new $(O.UNAVAILABLE,"The operation could not be completed")))}),P(p,po.EventType.MESSAGE,V=>{var k;if(!S){const T=V.data[0];ge(!!T,16349);const C=T,b=(C==null?void 0:C.error)||((k=C[0])===null||k===void 0?void 0:k.error);if(b){W(_t,`RPC '${e}' stream ${i} received error:`,b);const U=b.status;let L=function(w){const I=Be[w];if(I!==void 0)return Tw(I)}(U),_=b.message;L===void 0&&(L=O.INTERNAL,_="Unknown error status: "+U+" with message "+b.message),S=!0,R.__(new $(L,_)),p.close()}else W(_t,`RPC '${e}' stream ${i} received:`,T),R.a_(T)}}),P(l,j1.STAT_EVENT,V=>{V.stat===Nd.PROXY?W(_t,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Nd.NOPROXY&&W(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new MP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="PersistentStream";class Lw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Mw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return W(r_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(W(r_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dx extends Lw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=jP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Pn(o.readTime):te.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=$d(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Md(u)?{documents:$P(s,u)}:{query:BP(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Aw(s,o.resumeToken);const h=jd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=xu(s,o.snapshotVersion.toTimestamp());const h=jd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=WP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=$d(this.serializer),n.removeTarget=e,this.k_(n)}}class Vx extends Lw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=zP(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=$d(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UP(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{}class Mx extends Ox{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ud(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Ud(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Lx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(nr(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="RemoteStore";class Fx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{xi(this)&&(W(ki,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.Ia.add(4),await Ia(h),h.Aa.set("Unknown"),h.Ia.delete(4),await pc(h)}(this))})}),this.Aa=new Lx(r,i)}}async function pc(t){if(xi(t))for(const e of t.da)await e(!0)}async function Ia(t){for(const e of t.da)await e(!1)}function Fw(t,e){const n=ne(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Sp(n)?Ip(n):Us(n).x_()&&Tp(n,e))}function Ep(t,e){const n=ne(t),r=Us(n);n.Ta.delete(e),r.x_()&&jw(n,e),n.Ta.size===0&&(r.x_()?r.B_():xi(n)&&n.Aa.set("Unknown"))}function Tp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).H_(e)}function jw(t,e){t.Ra.$e(e),Us(t).Y_(e)}function Ip(t){t.Ra=new bP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.Aa.aa()}function Sp(t){return xi(t)&&!Us(t).M_()&&t.Ta.size>0}function xi(t){return ne(t).Ia.size===0}function Uw(t){t.Ra=void 0}async function jx(t){t.Aa.set("Online")}async function Ux(t){t.Ta.forEach((e,n)=>{Tp(t,e)})}async function zx(t,e){Uw(t),Sp(t)?(t.Aa.la(e),Ip(t)):t.Aa.set("Unknown")}async function $x(t,e,n){if(t.Aa.set("Online"),e instanceof Sw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){W(ki,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bu(t,r)}else if(e instanceof zl?t.Ra.Ye(e):e instanceof Iw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(te.min()))try{const r=await Ow(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),jw(s,u);const p=new Ir(f.target,u,h,f.sequenceNumber);Tp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ki,"Failed to raise snapshot:",r),await bu(t,r)}}async function bu(t,e,n){if(!js(e))throw e;t.Ia.add(1),await Ia(t),t.Aa.set("Offline"),n||(n=()=>Ow(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ki,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await pc(t)})}function zw(t,e){return e().catch(n=>bu(t,n,e))}async function mc(t){const e=ne(t),n=Hr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lp;for(;Bx(e);)try{const i=await Sx(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,Hx(e,i)}catch(i){await bu(e,i)}$w(e)&&Bw(e)}function Bx(t){return xi(t)&&t.Pa.length<10}function Hx(t,e){t.Pa.push(e);const n=Hr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function $w(t){return xi(t)&&!Hr(t).M_()&&t.Pa.length>0}function Bw(t){Hr(t).start()}async function Wx(t){Hr(t).na()}async function qx(t){const e=Hr(t);for(const n of t.Pa)e.X_(n.mutations)}async function Gx(t,e,n){const r=t.Pa.shift(),i=pp.from(r,e,n);await zw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function Kx(t,e){e&&Hr(t).Z_&&await async function(r,i){if(function(o){return xP(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();Hr(r).N_(),await zw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),$w(t)&&Bw(t)}async function i_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),W(ki,"RemoteStore received new credentials");const r=xi(n);n.Ia.add(3),await Ia(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await pc(n)}async function Qx(t,e){const n=ne(t);e?(n.Ia.delete(2),await pc(n)):e||(n.Ia.add(2),await Ia(n),n.Aa.set("Unknown"))}function Us(t){return t.Va||(t.Va=function(n,r,i){const s=ne(n);return s.ia(),new Dx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:jx.bind(null,t),e_:Ux.bind(null,t),n_:zx.bind(null,t),J_:$x.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Sp(t)?Ip(t):t.Aa.set("Unknown")):(await t.Va.stop(),Uw(t))})),t.Va}function Hr(t){return t.ma||(t.ma=function(n,r,i){const s=ne(n);return s.ia(),new Vx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:Wx.bind(null,t),n_:Kx.bind(null,t),ea:qx.bind(null,t),ta:Gx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await mc(t)):(await t.ma.stop(),t.Pa.length>0&&(W(ki,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ap(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(t,e){if(nr("AsyncQueue",`${e}: ${t}`),js(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.fa=new Oe(G.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):J(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xs(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Xx{constructor(){this.queries=o_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=o_(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function o_(){return new Pi(t=>cw(t),ac)}async function Cp(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Jx,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=kp(o,`Initialization of query '${Hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Pp(n)}async function Rp(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yx(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Pp(n)}function Zx(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Pp(t){t.Da.forEach(e=>{e.next()})}var Wd,a_;(a_=Wd||(Wd={})).Fa="default",a_.Cache="cache";class xp{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.key=e}}class Ww{constructor(e){this.key=e}}class eN{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=le(),this.mutatedKeys=le(),this.Xa=hw(e),this.eu=new ps(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new s_,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=lc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;m&&S?m.data.isEqual(S.data)?R!==P&&(r.track({type:3,doc:S}),V=!0):this.iu(m,S)||(r.track({type:2,doc:S}),V=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),V=!0):m&&!S&&(r.track({type:1,doc:m}),V=!0,(u||h)&&(l=!0)),V&&(S?(o=o.add(S),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(S,R){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{At:V})}};return P(S)-P(R)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new xs(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new s_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=le(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Ww(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Hw(r))}),n}uu(e){this.Ha=e.qs,this.Za=le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return xs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Np="SyncEngine";class tN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nN{constructor(e){this.key=e,this.lu=!1}}class rN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Pi(l=>cw(l),ac),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(G.comparator),this.Eu=new Map,this.Au=new yp,this.Ru={},this.Vu=new Map,this.mu=Ps.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function iN(t,e,n=!0){const r=Xw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await qw(r,e,n,!0),i}async function sN(t,e){const n=Xw(t);await qw(n,e,!0,!1)}async function qw(t,e,n,r){const i=await Ax(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await oN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fw(t.remoteStore,i),l}async function oN(t,e,n,r,i){t.gu=(p,m,S)=>async function(P,V,k,T){let C=V.view.nu(k);C.Ds&&(C=await Zy(P.localStore,V.query,!1).then(({documents:_})=>V.view.nu(_,C)));const b=T&&T.targetChanges.get(V.targetId),U=T&&T.targetMismatches.get(V.targetId)!=null,L=V.view.applyChanges(C,P.isPrimaryClient,b,U);return u_(P,V.targetId,L._u),L.snapshot}(t,p,m,S);const s=await Zy(t.localStore,e,!0),o=new eN(e,s.qs),l=o.nu(s.documents),u=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);u_(t,n,h._u);const f=new tN(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function aN(t,e,n){const r=ne(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!ac(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ep(r.remoteStore,i.targetId),qd(r,i.targetId)}).catch(Fs)):(qd(r,i.targetId),await Bd(r.localStore,i.targetId,!0))}async function lN(t,e){const n=ne(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ep(n.remoteStore,r.targetId))}async function uN(t,e,n){const r=gN(t);try{const i=await function(o,l){const u=ne(o),h=Ce.now(),f=l.reduce((S,R)=>S.add(R.key),le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=rr(),P=le();return u.Os.getEntries(S,f).next(V=>{R=V,R.forEach((k,T)=>{T.isValidDocument()||(P=P.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(V=>{p=V;const k=[];for(const T of l){const C=AP(T,p.get(T.key).overlayedDocument);C!=null&&k.push(new Jr(T.key,C,nw(C.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,k,l)}).next(V=>{m=V;const k=V.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(S,V.batchId,k)})}).then(()=>({batchId:m.batchId,changes:fw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Oe(ie)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await Sa(r,i.changes),await mc(r.remoteStore)}catch(i){const s=kp(i,"Failed to persist write");n.reject(s)}}async function Gw(t,e){const n=ne(t);try{const r=await Tx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ge(o.lu,14607):i.removedDocuments.size>0&&(ge(o.lu,42227),o.lu=!1))}),await Sa(n,r,e)}catch(r){await Fs(r)}}function l_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.wa)m.va(l)&&(h=!0)}),h&&Pp(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Oe(G.comparator);o=o.insert(s,Et.newNoDocument(s,te.min()));const l=le().add(s),u=new dc(te.min(),new Map,new Oe(ie),o,l);await Gw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),bp(r)}else await Bd(r.localStore,e,!1).then(()=>qd(r,e,n)).catch(Fs)}async function hN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await Ex(n.localStore,e);Qw(n,r,null),Kw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,i)}catch(i){await Fs(i)}}async function dN(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ge(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Qw(r,e,n),Kw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,i)}catch(i){await Fs(i)}}function Kw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Qw(t,e,n){const r=ne(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Jw(t,r)})}function Jw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ep(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),bp(t))}function u_(t,e,n){for(const r of n)r instanceof Hw?(t.Au.addReference(r.key,e),fN(t,r)):r instanceof Ww?(W(Np,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Jw(t,r.key)):J(19791,{yu:r})}function fN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(Np,"New document in limbo: "+n),t.Iu.add(r),bp(t))}function bp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new G(Te.fromString(e)),r=t.mu.next();t.Eu.set(r,new nN(n)),t.du=t.du.insert(n,r),Fw(t.remoteStore,new Ir(Rn(oc(n.path)),r,"TargetPurposeLimboResolution",rc.ue))}}async function Sa(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=vp.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Is,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.ds,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!js(p))throw p;W(wp,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const S=f.Fs.get(m),R=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(m,P)}}}(r.localStore,s))}async function pN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){W(Np,"User change. New user:",e.toKey());const r=await Vw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Bs)}}function mN(t,e){const n=ne(t),r=n.Eu.get(e);if(r&&r.lu)return le().add(r.key);{let i=le();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Xw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cN.bind(null,e),e.hu.J_=Yx.bind(null,e.eventManager),e.hu.pu=Zx.bind(null,e.eventManager),e}function gN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dN.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return wx(this.persistence,new yx,e.initialUser,this.serializer)}Du(e){return new Dw(_p.Vi,this.serializer)}bu(e){return new Cx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class yN extends Du{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ge(this.persistence.referenceDelegate instanceof Nu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nx(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Dw(r=>Nu.Vi(r,n),this.serializer)}}class Gd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pN.bind(null,this.syncEngine),await Qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xx}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new bx(s)}(e.databaseInfo);return function(s,o,l,u){return new Mx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Fx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>l_(this.syncEngine,n,0),function(){return n_.C()?new n_:new Rx}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new rN(i,s,o,l,u,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);W(ki,"RemoteStore shutting down."),s.Ia.add(5),await Ia(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gd.provider={build:()=>new Gd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class _N{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Eh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{jr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{jr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function c_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vN(t);W(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>i_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>i_(e.remoteStore,i)),t._onlineComponents=e}async function vN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Wr,"Using user provided OfflineComponentProvider");try{await Eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await Eh(t,new Du)}}else W(Wr,"Using default OfflineComponentProvider"),await Eh(t,new yN(void 0));return t._offlineComponents}async function Yw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Wr,"Using user provided OnlineComponentProvider"),await c_(t,t._uninitializedComponentsProvider._online)):(W(Wr,"Using default OnlineComponentProvider"),await c_(t,new Gd))),t._onlineComponents}function wN(t){return Yw(t).then(e=>e.syncEngine)}async function Vu(t){const e=await Yw(t),n=e.eventManager;return n.onListen=iN.bind(null,e.syncEngine),n.onUnlisten=aN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lN.bind(null,e.syncEngine),n}function EN(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Dp({next:m=>{f.Ou(),o.enqueueAndForget(()=>Rp(s,p));const S=m.docs.has(l);!S&&m.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new xp(oc(l.path),f,{includeMetadataChanges:!0,ka:!0});return Cp(s,p)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}function TN(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Dp({next:m=>{f.Ou(),o.enqueueAndForget(()=>Rp(s,p)),m.fromCache&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new xp(l,f,{includeMetadataChanges:!0,ka:!0});return Cp(s,p)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="firestore.googleapis.com",d_=!0;class f_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eE,this.ssl=d_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:d_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ex)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xR;switch(r.type){case"firstParty":return new VR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=h_.get(n);r&&(W("ComponentProvider","Removing Datastore"),h_.delete(n),r.terminate())}(this),Promise.resolve()}}function IN(t,e,n,r={}){var i;t=Mt(t,gc);const s=Vs(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(X0(`https://${u}`),Y0("Firestore",!0)),o.host!==eE&&o.host!==u&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Ti(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=vt.MOCK_USER;else{f=e2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(m)}t._authCredentials=new NR(new B1(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(va(n,je._jsonSchema))return new je(e,r||null,new G(Te.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:qe("string",je._jsonSchemaVersion),referencePath:qe("string")};class Mr extends Ni{constructor(e,n,r){super(e,n,oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new G(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function In(t,e,...n){if(t=$e(t),W1("collection","path",e),t instanceof gc){const r=Te.fromString(e,...n);return ky(r),new Mr(t,null,r)}{if(!(t instanceof je||t instanceof Mr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return ky(r),new Mr(t.firestore,null,r)}}function pe(t,e,...n){if(t=$e(t),arguments.length===1&&(e=ap.newId()),W1("doc","path",e),t instanceof gc){const r=Te.fromString(e,...n);return Ay(r),new je(t,null,new G(r))}{if(!(t instanceof je||t instanceof Mr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ay(r),new je(t.firestore,t instanceof Mr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="AsyncQueue";class m_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Mw(this,"async_queue_retry"),this.oc=()=>{const r=wh();r&&W(p_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Qn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!js(e))throw e;W(p_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,nr("INTERNAL UNHANDLED ERROR: ",g_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Ap.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&J(47125,{hc:g_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function g_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ir extends gc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new m_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new m_(e),this._firestoreClient=void 0,await e}}}function SN(t,e){const n=typeof t=="object"?t:n1(),r=typeof t=="string"?t:Su,i=Kf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YA("firestore");s&&IN(i,...s)}return i}function Aa(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AN(t),t._firestoreClient}function AN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new JR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Zw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _N(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(ct.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(va(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:qe("string",Jt._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(va(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:qe("string",xn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(va(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Nn(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:qe("string",Nn._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;class CN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class tE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ec:t})}}class Op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ou(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(nE(this.Ec)&&kN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class RN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Dc(e,n,r,i=!1){return new Op({Ec:e,methodName:n,bc:r,path:at.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new RN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rE(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Mp("Data must be an object, but it was:",o,r);const l=oE(r,o);let u,h;if(s.merge)u=new Bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Kd(e,p,n);if(!o.contains(m))throw new $(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lE(f,m)||f.push(m)}u=new Bt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new CN(new Nt(l),u,h)}class Ca extends Vp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}function iE(t,e,n,r){const i=t.Dc(1,e,n);Mp("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Qr(r,(u,h)=>{const f=Lp(e,u,n);h=$e(h);const p=i.gc(f);if(h instanceof Ca)s.push(f);else{const m=Ra(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Bt(s);return new tE(o,l,i.fieldTransforms)}function sE(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[Kd(e,r,n)],u=[i];if(s.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Kd(e,s[m])),u.push(s[m+1]);const h=[],f=Nt.empty();for(let m=l.length-1;m>=0;--m)if(!lE(h,l[m])){const S=l[m];let R=u[m];R=$e(R);const P=o.gc(S);if(R instanceof Ca)h.push(S);else{const V=Ra(R,P);V!=null&&(h.push(S),f.set(S,V))}}const p=new Bt(h);return new tE(f,p,o.fieldTransforms)}function PN(t,e,n,r=!1){return Ra(n,t.Dc(r?4:3,e))}function Ra(t,e){if(aE(t=$e(t)))return Mp("Unsupported field value:",e,t),oE(t,e);if(t instanceof Vp)return function(r,i){if(!nE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ra(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:xu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(i.serializer,s)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:Aw(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nn)return function(o,l){return{mapValue:{fields:{[ew]:{stringValue:tw},[Au]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return fp(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${nc(r)}`)}(t,e)}function oE(t,e){const n={};return K1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=Ra(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof xn||t instanceof Jt||t instanceof je||t instanceof Vp||t instanceof Nn)}function Mp(t,e,n){if(!aE(n)||!q1(n)){const r=nc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Kd(t,e,n){if((e=$e(e))instanceof ka)return e._internalPath;if(typeof e=="string")return Lp(t,e);throw Ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const xN=new RegExp("[~\\*/\\[\\]]");function Lp(t,e,n){if(e.search(xN)>=0)throw Ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function lE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NN extends uE{data(){return super.data()}}function Fp(t,e){return typeof e=="string"?Lp(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}class bN extends jp{}function __(t,e,...n){let r=[];e instanceof jp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Up).length,l=s.filter(u=>u instanceof _c).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _c extends bN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _c(e,n,r)}_apply(e){const n=this._parse(e);return hE(e._query,n),new Ni(e.firestore,e.converter,Ld(e._query,n))}_parse(e){const n=yc(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){w_(p,f);const R=[];for(const P of p)R.push(v_(u,s,P));m={arrayValue:{values:R}}}else m=v_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||w_(p,f),m=PN(l,o,p,f==="in"||f==="not-in");return We.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function DN(t,e,n){const r=e,i=Fp("where",t);return _c._create(i,r,n)}class Up extends jp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Up(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)hE(o,u),o=Ld(o,u)}(e._query,n),new Ni(e.firestore,e.converter,Ld(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function v_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uw(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!G.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vy(t,new G(r))}if(n instanceof je)return Vy(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function w_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VN{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Au].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new Nn(s)}convertGeoPoint(e){return new xn(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=zr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ge(Nw(r),9688,{name:e});const i=new na(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mi extends uE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",mi._jsonSchema={type:qe("string",mi._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class $l extends mi{data(e={}){return super.data(e)}}class gi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ON(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ON(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){t=Mt(t,je);const e=Mt(t.firestore,ir);return EN(Aa(e),t._key).then(n=>fE(e,t,n))}gi._jsonSchemaVersion="firestore/querySnapshot/1.0",gi._jsonSchema={type:qe("string",gi._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class zp extends VN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function E_(t){t=Mt(t,Ni);const e=Mt(t.firestore,ir),n=Aa(e),r=new zp(e);return cE(t._query),TN(n,t._query).then(i=>new gi(e,r,t,i))}function Bl(t,e,n){t=Mt(t,je);const r=Mt(t.firestore,ir),i=dE(t.converter,e,n);return vc(r,[rE(yc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function zt(t,e,n,...r){t=Mt(t,je);const i=Mt(t.firestore,ir),s=yc(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof ka?sE(s,"updateDoc",t._key,e,n,r):iE(s,"updateDoc",t._key,e),vc(i,[o.toMutation(t._key,Lt.exists(!0))])}function Qd(t){return vc(Mt(t.firestore,ir),[new hc(t._key,Lt.none())])}function T_(t,...e){var n,r,i;t=$e(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||y_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(y_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof je)h=Mt(t.firestore,ir),f=oc(t._key.path),u={next:p=>{e[o]&&e[o](fE(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Mt(t,Ni);h=Mt(p.firestore,ir),f=p._query;const m=new zp(h);u={next:S=>{e[o]&&e[o](new gi(h,m,p,S))},error:e[o+1],complete:e[o+2]},cE(t._query)}return function(m,S,R,P){const V=new Dp(P),k=new xp(S,V,R);return m.asyncQueue.enqueueAndForget(async()=>Cp(await Vu(m),k)),()=>{V.Ou(),m.asyncQueue.enqueueAndForget(async()=>Rp(await Vu(m),k))}}(Aa(h),f,l,u)}function vc(t,e){return function(r,i){const s=new Qn;return r.asyncQueue.enqueueAndForget(async()=>uN(await wN(r),i,s)),s.promise}(Aa(t),e)}function fE(t,e,n){const r=n.docs.get(e._key),i=new zp(t);return new mi(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=yc(e)}set(e,n,r){this._verifyNotCommitted();const i=Ih(e,this._firestore),s=dE(i.converter,n,r),o=rE(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Lt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ih(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof ka?sE(this._dataReader,"WriteBatch.update",s._key,n,r,i):iE(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Lt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ih(e,this._firestore);return this._mutations=this._mutations.concat(new hc(n._key,Lt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ih(t,e){if((t=$e(t)).firestore!==e)throw new $(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){return new Ca("deleteField")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return Aa(t=Mt(t,ir)),new MN(t,e=>vc(t,e))}(function(e,n=!0){(function(i){Ls=i})(Os),Ss(new Ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ir(new bR(r.getProvider("auth-internal")),new OR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Vr(wy,Ey,e),Vr(wy,Ey,"esm2017")})();let Jd='{"apiKey":"AIzaSyA6DTgVIegbDehKCenFHhVzAMmXLXTHbys","authDomain":"couples-budgeting-e4dfb.firebaseapp.com","projectId":"couples-budgeting-e4dfb","storageBucket":"couples-budgeting-e4dfb.firebasestorage.app","messagingSenderId":"195620381910","appId":"1:195620381910:web:57a7953f3642f506ecd577"}';console.log("✅ VITE_FIREBASE_CONFIG found (Length: "+Jd.length+")");let aa=null;try{const t=Jd?JSON.parse(Jd):{};Object.keys(t).length>0?(aa=t1(t),console.log("🔥 Firebase App Initialized Successfully")):console.warn("⚠️ Firebase config is empty. Check Vercel settings.")}catch(t){console.error("❌ Firebase Config Parse/Init Error:",t),console.log("💡 HINT: Ensure your Vercel Environment Variable value is a pure JSON string without wrapping quotes.")}const wl=aa?O1(aa):null,Y=aa?SN(aa):null,Ge="sweet-ledger-beta",pE=B.createContext(),mE=()=>B.useContext(pE),LN=({children:t})=>{const[e,n]=B.useState(()=>{try{const u=localStorage.getItem("sweet_user_cache");return u?JSON.parse(u):null}catch(u){return console.warn("User cache parse failed:",u),null}}),[r,i]=B.useState(!0);B.useEffect(()=>{if(!wl){i(!1);return}(async()=>{})();const h=pC(wl,f=>{if(f){const p={uid:f.uid,displayName:f.displayName,email:f.email,photoURL:f.photoURL,isCached:!1};localStorage.setItem("sweet_user_cache",JSON.stringify(p)),n(f)}else localStorage.removeItem("sweet_user_cache"),n(null);i(!1)});return()=>h()},[]);const l={user:e,loading:r,loginWithGoogle:async()=>{i(!0);const u=new Bn;try{console.log("🔐 Starting Google Login via Popup...");const h=await MC(wl,u);h!=null&&h.user&&console.log("🎉 Popup Login Success:",h.user.uid),i(!1)}catch(h){console.error("Login Error:",h),i(!1),alert(`登入失敗，請確認您的瀏覽器沒有封鎖彈跳視窗。
或是嘗試使用其他瀏覽器 (如 Chrome)。`)}},logout:async()=>(localStorage.removeItem("sweet_user_cache"),n(null),mC(wl))};return N.jsx(pE.Provider,{value:l,children:t})},FN=t=>{const[e,n]=B.useState(()=>localStorage.getItem("sweet_ledger_code")||""),[r,i]=B.useState(()=>{try{const f=localStorage.getItem(`sweet_ledger_data_${e}`);return f?JSON.parse(f):null}catch{return null}}),[s,o]=B.useState(()=>{try{const f=localStorage.getItem(`sweet_ledger_txs_${e}`);return f?JSON.parse(f):[]}catch{return[]}}),[l,u]=B.useState(()=>!localStorage.getItem(`sweet_ledger_data_${e}`));B.useEffect(()=>{e?localStorage.setItem("sweet_ledger_code",e):localStorage.removeItem("sweet_ledger_code")},[e]);const h=B.useMemo(()=>{if(!r)return null;const f=Array.isArray(r.transactions)?r.transactions:[],p=s,m=new Set(p.map(P=>P.id)),S=f.filter(P=>!m.has(P.id)),R=[...p,...S];return R.sort((P,V)=>new Date(V.date)-new Date(P.date)),{...r,transactions:R}},[r,s]);return B.useEffect(()=>{if(!Y||!e){localStorage.getItem("sweet_ledger_code")||(i(null),o([]),u(!1));return}const f=pe(Y,"artifacts",Ge,"public","data","ledgers",e),p=T_(f,async R=>{if(R.exists()){const P=R.data();if(t&&(!P.users||!P.users[t.uid])){console.warn("User removed from ledger. Disconnecting...");try{await zt(pe(Y,"users",t.uid),{ledgerCode:ms()})}catch{}n("");return}i(P)}else{if(console.warn("Ghost Ledger Detected"),t)try{await zt(pe(Y,"users",t.uid),{ledgerCode:ms()})}catch{}n(""),i(null)}u(!1)},R=>{console.error("Ledger snapshot error:",R),u(!1)}),m=In(f,"transactions"),S=T_(m,R=>{const P=R.docs.map(V=>({...V.data(),id:V.id}));P.sort((V,k)=>new Date(k.date)-new Date(V.date)),o(P)},R=>{console.log("Tx sub-collection issue:",R.message)});return()=>{p(),S()}},[e,t]),B.useEffect(()=>{e&&r&&localStorage.setItem(`sweet_ledger_data_${e}`,JSON.stringify(r))},[e,r]),B.useEffect(()=>{e&&s.length>0&&localStorage.setItem(`sweet_ledger_txs_${e}`,JSON.stringify(s))},[e,s]),{ledgerCode:e,setLedgerCode:n,ledgerData:h,ledgerDocData:r,isLedgerInitializing:l}},jN=[{code:"TWD",name:"新台幣",symbol:"NT$",flag:"🇹🇼"},{code:"JPY",name:"日圓",symbol:"¥",flag:"🇯🇵"},{code:"USD",name:"美元",symbol:"$",flag:"🇺🇸"},{code:"THB",name:"泰銖",symbol:"฿",flag:"🇹🇭"},{code:"KRW",name:"韓元",symbol:"₩",flag:"🇰🇷"},{code:"EUR",name:"歐元",symbol:"€",flag:"🇪🇺"},{code:"CNY",name:"人民幣",symbol:"¥",flag:"🇨🇳"},{code:"GBP",name:"英鎊",symbol:"£",flag:"🇬🇧"},{code:"AUD",name:"澳幣",symbol:"A$",flag:"🇦🇺"},{code:"SGD",name:"新幣",symbol:"S$",flag:"🇸🇬"},{code:"HKD",name:"港幣",symbol:"HK$",flag:"🇭🇰"},{code:"CAD",name:"加幣",symbol:"C$",flag:"🇨🇦"},{code:"VND",name:"越南盾",symbol:"₫",flag:"🇻🇳"},{code:"PHP",name:"菲律賓披索",symbol:"₱",flag:"🇵🇭"},{code:"MYR",name:"馬來西亞令吉",symbol:"RM",flag:"🇲🇾"}],d4=["JPY","THB","USD"],st={orange:{id:"orange",bg:null,text:null,hex:"#d6a2a2",name:"Orange"},blue:{id:"blue",bg:null,text:null,hex:"#8fbcd4",name:"Blue"},pink:{id:"pink",bg:null,text:null,hex:"#eeccdf",name:"Pink"},indigo:{id:"indigo",bg:null,text:null,hex:"#a3a7bf",name:"Indigo"},purple:{id:"purple",bg:null,text:null,hex:"#c7b3e5",name:"Purple"},yellow:{id:"yellow",bg:null,text:null,hex:"#e6c9a8",name:"Yellow"},gray:{id:"gray",bg:"bg-gray-100",text:"text-gray-600",hex:"#d1d5db",name:"Gray"},red:{id:"red",bg:null,text:null,hex:"#e09f9f",name:"Red"},green:{id:"green",bg:null,text:null,hex:"#a8cebb",name:"Green"},slate:{id:"slate",bg:null,text:null,hex:"#94a3b8",name:"Slate"},emerald:{id:"emerald",bg:null,text:null,hex:"#88bfac",name:"Emerald"},rose:{id:"rose",bg:"bg-rose-100",text:"text-rose-600",hex:"#e11d48",name:"Rose"},cyan:{id:"cyan",bg:null,text:null,hex:"#a5d6d9",name:"Cyan"},amber:{id:"amber",bg:null,text:null,hex:"#d9b891",name:"Amber"},fuchsia:{id:"fuchsia",bg:null,text:null,hex:"#d8a7d1",name:"Fuchsia"}},Sh={orange:"#d6a2a2",blue:"#8fbcd4",pink:"#eeccdf",indigo:"#a3a7bf",purple:"#c7b3e5",yellow:"#e6c9a8",gray:"#d1d5db",red:"#e09f9f",green:"#a8cebb",slate:"#94a3b8",emerald:"#88bfac",rose:"#f43f5e",cyan:"#a5d6d9",amber:"#d9b891",fuchsia:"#d8a7d1",host:"#8fbcd4",guest:"#eeccdf"},I_=Object.values(st).map(t=>({name:t.name,class:`${t.bg} ${t.text}`,hex:t.hex})),Vo={food:Td,transport:Hg,shopping:wd,housing:Co,hotel:Fg,ticket:NA,telecom:Ed,insurance:$g,life:Bg,other:zg,cat:OS,dog:qS,rabbit:vA,bird:kS,fish:eA,turtle:VA,default:RA,project_daily:DS,project_travel:$0,project_house:Co,project_private:B0,coffee:F0,music:z0,game:iA,heart:U0,gift:j0,zap:H0,book:RS,settlement:pu,utensils:Td,train:Hg,"shopping-bag":wd,house:Co,"bed-double":Fg,smartphone:Ed,"shield-check":$g,sun:Bg,"message-circle":zg},UN=[{...st.orange,id:"food",name:"餐飲",icon:"food"},{...st.blue,id:"transport",name:"交通",icon:"transport"},{...st.pink,id:"shopping",name:"購物",icon:"shopping"},{...st.indigo,id:"housing",name:"房租",icon:"housing"},{...st.purple,id:"hotel",name:"旅館",icon:"hotel"},{...st.yellow,id:"ticket",name:"門票",icon:"ticket"},{...st.gray,id:"telecom",name:"電信",icon:"telecom"},{...st.red,id:"insurance",name:"保險",icon:"insurance"},{...st.green,id:"life",name:"生活",icon:"life"},{...st.slate,id:"other",name:"其他",icon:"other"},{...st.emerald,id:"settlement",name:"還款結清",icon:"settlement"}],la=UN.filter(t=>t.id!=="settlement"),f4=["food","transport","shopping","housing","hotel","ticket","telecom","insurance","life","other","coffee","music","game","heart","gift","zap","book","cat","dog","rabbit","bird","fish","turtle"],Ah={cat:{id:"cat",name:"貓咪",icon:"cat",prompt:"你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。",greeting:"人類，今天有亂花錢嗎？喵 🐱"},dog:{id:"dog",name:"狗狗",icon:"dog",prompt:"你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。",greeting:"又是美好的一天！我們來記帳吧！汪 🐶"},rabbit:{id:"rabbit",name:"兔兔",icon:"rabbit",prompt:"你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。",greeting:"那個...今天也要好好理財喔 (///▽///) 🐰"},bird:{id:"bird",name:"啾啾",icon:"bird",prompt:"你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。",greeting:"啾啾！我好像看到錢包變瘦了？🐦"},fish:{id:"fish",name:"魚魚",icon:"fish",prompt:"你是一隻只有7秒記憶的金魚，常常忘記上一筆花了什麼，說話呆萌，句尾加「啵」。",greeting:"啵...我們剛剛是要記帳嗎？🐟"},turtle:{id:"turtle",name:"龜龜",icon:"turtle",prompt:"你是一隻講話非常慢、崇尚長期投資的烏龜，句尾加「...🐢」。",greeting:"慢慢來...錢要...慢慢存...🐢"}},zN={users:{},transactions:[],subscriptions:[],customCategories:la,projects:[{id:"daily",name:"日常開銷",icon:"project_daily",rates:{},type:"public"},{id:"travel",name:"日本旅遊專案",icon:"project_travel",rates:{},type:"public"},{id:"house",name:"夢想置產專案",icon:"project_house",rates:{},type:"public"},{id:"private",name:"私人帳本",icon:"project_private",rates:{},type:"private"}],settings:{character:"cat",selectedCategories:la.map(t=>t.id)}},gs=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),gE=(t=new Date)=>{const e=new Date(t),n=e.getTimezoneOffset()*6e4;return new Date(e.getTime()-n).toISOString().slice(0,10)},wn=(t,e="TWD",n=!1)=>n?"****":new Intl.NumberFormat("zh-TW",{style:"currency",currency:e,minimumFractionDigits:0,maximumFractionDigits:2}).format(t),zi=(t,e,n)=>{if(!t)return 0;const r=parseFloat(t);if(isNaN(r))return 0;if(e==="TWD")return r;const i=(n==null?void 0:n[e])||1;return r*i},yE=async()=>{const e=O1().currentUser;return e?await e.getIdToken():null},p4=async t=>{if(!t||t==="TWD")return 1;const e=`sweet_rate_${t}`,n=localStorage.getItem(e),r=24*60*60*1e3;if(n)try{const{rate:i,timestamp:s}=JSON.parse(n);if(Date.now()-s<r)return i}catch(i){console.warn("Cache parse error",i),localStorage.removeItem(e)}try{const i=await yE(),s=i?{Authorization:`Bearer ${i}`}:{},l=await(await fetch(`/api/exchange-rates?currency=${t}`,{headers:s})).json();if(l&&l.rate){const u=JSON.stringify({rate:l.rate,timestamp:Date.now()});return localStorage.setItem(e,u),l.rate}return console.warn(`Exchange Rate API: No rate returned for ${t}`),null}catch(i){return console.error("Exchange Rate API Error:",i),null}},_E=t=>{const e={food:Td,drink:F0,transport:NS,shopping:wd,housing:Co,entertainment:nA,gift:j0,utilities:$A,health:U0,travel:$0,education:aA,salary:zS,investment:L0,subscriptions:H0,digital:Ed,music:z0,streaming:MA,baby:IS,other:KS,"help-circle":jg,settlement:pu};return Vo&&Vo[t]||e[t]||jg},$N=(t,e="display",n="vibrant")=>{if(!t)return{containerClass:"bg-gray-100",iconClass:"text-gray-500",hex:"#94a3b8"};if(e==="input")return{containerClass:"bg-gray-50 border border-gray-100",iconClass:"text-gray-400",activeClass:"bg-rose-500 text-white shadow-md shadow-rose-200 border-transparent",hex:"#64748b"};let r=null,i=t.colorId;if(!i){if(t.bg){const s=Object.values(st).find(o=>o.bg===t.bg);s&&(i=s.id)}else if(t.hex){const s=Object.values(st).find(o=>o.hex===t.hex);s&&(i=s.id)}}if(i&&st&&st[i]){if(n==="morandi"&&Sh&&Sh[i]){const s=Sh[i];return{containerClass:"",iconClass:"",containerStyle:{backgroundColor:`${s}26`,color:s},iconStyle:{color:s},hex:s}}r=st[i]}else if(t.bg&&t.text)return{containerClass:t.bg,iconClass:t.text,hex:t.hex||"#475569"};return r?r.bg&&r.text?{containerClass:`${r.bg} ${r.text}`,iconClass:r.text,hex:r.hex}:{containerClass:"",iconClass:"",containerStyle:{backgroundColor:`${r.hex}26`,color:r.hex},iconStyle:{color:r.hex},hex:r.hex}:{containerClass:"bg-slate-100 text-slate-600",iconClass:"",hex:t.hex||"#475569"}},m4=(t,e="w-10 h-10")=>{if(t&&typeof t=="string"&&t.includes("http"))return N.jsx("img",{src:t,className:`${e} rounded-full object-cover border border-gray-200`,alt:"avatar"});let n=FA;if(Ah&&Ah[t]){const r=Ah[t].icon;n=_E(r)}else Vo&&Vo[t]&&(n=Vo[t]);return N.jsx("div",{className:`${e} flex items-center justify-center bg-gray-100 rounded-full text-gray-600 border border-gray-200`,children:N.jsx(n,{className:"w-[60%] h-[60%]",strokeWidth:2})})},BN=async(t,e=null)=>{try{const n=await yE(),r=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify({prompt:t,imageBase64:e})}),i=await r.json();return r.ok?i.text:(console.error("Gemini API Error:",i.error),null)}catch(n){return console.error("Gemini Fetch Error:",n),null}},g4=async t=>{const n=await BN(`你是一個專業的收據識別助手。請分析這張發票或收據圖片，並提取所有「收費項目」。
  
  重要規則：
  1. 請列出所有菜色、商品或服務項目。
  2. 如果看到「服務費」、「清潔費」、「Service Charge」、「SVC」或「10%」等額外費用，請務必將其視為一個獨立的品項列出。
  3. 忽略日期、地址、統編等資訊。
  4. 數量 (quantity) 若無法辨識預設為 1。
  5. 價格 (price) 請轉換為純數字。
  
  請直接回傳一個 JSON 陣列，不要包含 Markdown 格式。
  範例：[{"name": "牛肉麵", "price": 180, "quantity": 1}]`,t);if(!n)return null;try{const r=n.replace(/```json/g,"").replace(/```/g,"").trim();return JSON.parse(r)}catch(r){return console.error("Receipt Parse JSON Error:",r),null}},HN=(t,e,n)=>{const r=B.useCallback(async u=>{if(!t||!e||!Y)throw new Error("無效的帳本狀態");const{amount:h,currency:f,category:p,payer:m,splitType:S,customSplit:R,note:P,projectId:V,date:k,isSubscription:T,subCycle:C,subPayDay:b,paymentMethod:U}=u,L=parseFloat(h);if(isNaN(L))throw new Error("金額無效");let _=S,g=null;if(S==="self")_="custom",g={[m]:L};else if(S==="partner"){_="custom";const ue=Object.keys((n==null?void 0:n.users)||{}).filter(re=>re!==m);if(ue.length===1)g={[ue[0]]:L};else if(ue.length>1){const re=L/ue.length;g={},ue.forEach(ve=>g[ve]=re)}else g={[m]:L}}else R&&(g={},Object.keys(R).forEach(E=>{const ue=parseFloat(R[E]);g[E]=isNaN(ue)?0:ue}));const w={id:gs(),amount:L,currency:f,category:p,payer:m||e.uid,splitType:_,customSplit:g,note:P||p.name,projectId:V,paymentMethod:U||null},I=new Date(k).toISOString(),v=pe(Y,"artifacts",Ge,"public","data","ledgers",t),A=oa(Y);if(T){let E=new Date(I);C==="monthly"?(E.setMonth(E.getMonth()+1),b&&E.setDate(parseInt(b))):C==="weekly"&&E.setDate(E.getDate()+7);const ue={...w,name:P||p.name,cycle:C,payDay:parseInt(b)||1,mode:"infinite",nextPaymentDate:E.toISOString()},re=[...n.subscriptions||[],ue];A.update(v,{subscriptions:re});const ve=pe(In(v,"transactions"),w.id);A.set(ve,{...w,date:I,isSettlement:!1})}else{const E=pe(In(v,"transactions"),w.id);A.set(E,{...w,date:I,isSettlement:!1})}await A.commit()},[t,e,n]),i=B.useCallback(async u=>{if(!t||!Y)return;const h={...u,amount:parseFloat(u.amount)},f=pe(Y,"artifacts",Ge,"public","data","ledgers",t),p=pe(In(f,"transactions"),h.id),m=JSON.parse(JSON.stringify(h));await zt(p,m)},[t]),s=B.useCallback(async u=>{if(!t||!Y)return;const h=pe(Y,"artifacts",Ge,"public","data","ledgers",t),f=pe(In(h,"transactions"),u);await Qd(f)},[t]),o=B.useCallback(async(u,h,f,p)=>{if(!t||!Y)return;const m=pe(Y,"artifacts",Ge,"public","data","ledgers",t),S=gs(),R=pe(In(m,"transactions"),S),P={id:"settlement",name:"還款結清",icon:"settlement",color:"bg-emerald-100 text-emerald-600",hex:"#059669"};await Bl(R,{id:S,amount:parseFloat(u),currency:"TWD",category:P,payer:h,splitType:"settlement",note:`還款給 ${f}`,projectId:p,date:new Date().toISOString(),isSettlement:!0})},[t]),l=B.useCallback(async()=>{if(!(!n||!t||!Y))if(Array.isArray(n.transactions)&&n.transactions.length>0){console.log("⚠️ Starting Migration to Sub-collection...");const u=n.transactions,h=400;for(let p=0;p<u.length;p+=h){const m=u.slice(p,p+h),S=oa(Y),R=pe(Y,"artifacts",Ge,"public","data","ledgers",t);m.forEach(P=>{const V=P.id||gs(),k=pe(In(R,"transactions"),V);S.set(k,{...P,id:V})}),await S.commit(),console.log(`Saved batch ${p} - ${p+m.length}`)}const f=pe(Y,"artifacts",Ge,"public","data","ledgers",t);await zt(f,{transactions:ms()}),console.log("✅ Migration Complete."),alert("資料庫升級完成！您的帳本現在支援無限筆數交易。")}else alert("無需升級：目前沒有舊版交易資料。")},[n,t]);return{addTransaction:r,updateTransaction:i,deleteTransaction:s,settleUp:o,migrateToSubCollection:l}},WN=(t,e)=>(B.useEffect(()=>{if(!e||!e.subscriptions||!t||!Y)return;const r=gE();if(e.lastSubscriptionCheck===r)return;const s=`temp_subs_lock_${t}_${r}`;if(sessionStorage.getItem(s))return;const o=setTimeout(async()=>{sessionStorage.setItem(s,"true");let l=!1,u=[],h=[...e.subscriptions];const f=new Date;f.setHours(0,0,0,0),h=h.map(m=>{let S=new Date(m.nextPaymentDate),R=!1,P=0;for(;S<=f&&P<12;){R=!0,l=!0;const{nextPaymentDate:V,cycle:k,payDay:T,mode:C,...b}=m,U={...b,id:gs(),date:S.toISOString(),note:`[自動扣款] ${m.name}`,isSettlement:!1,amount:parseFloat(b.amount)||0};if(u.push(U),m.cycle==="monthly"){const L=S.getMonth();if(S.setMonth(L+1),m.payDay){const _=new Date(S.getFullYear(),S.getMonth()+1,0).getDate();S.setDate(Math.min(parseInt(m.payDay),_))}}else m.cycle==="weekly"?S.setDate(S.getDate()+7):S.setMonth(S.getMonth()+1);P++}return R?{...m,nextPaymentDate:S.toISOString()}:m});const p=pe(Y,"artifacts",Ge,"public","data","ledgers",t);if(l){const m=oa(Y);m.update(p,{subscriptions:h,lastSubscriptionCheck:r}),u.forEach(S=>{const R=pe(In(p,"transactions"),S.id);m.set(R,S)}),await m.commit(),console.log(`✅ 已執行自動扣款: ${u.length} 筆`)}else await zt(p,{lastSubscriptionCheck:r})},5e3);return()=>clearTimeout(o)},[e,t]),{deleteSubscription:B.useCallback(async r=>{if(!t||!e||!Y)return;const i=pe(Y,"artifacts",Ge,"public","data","ledgers",t),s=(e.subscriptions||[]).filter(o=>o.id!==r);await zt(i,{subscriptions:s})},[e,t])}),qN=(t,e,n,r,i)=>{const s=async(_,g)=>{!t||!Y||await zt(pe(Y,"artifacts",Ge,"public","data","ledgers",t),{[_]:g})},o=B.useCallback(async _=>{if(!_)throw new Error("請先登入");if(!Y)throw new Error("資料庫未連線");const g=Math.random().toString(36).substring(2,8).toUpperCase(),w=_.displayName||"Host";return await Bl(pe(Y,"artifacts",Ge,"public","data","ledgers",g),{...zN,users:{[_.uid]:{name:w,avatar:"cat",role:"host"}},lastSubscriptionCheck:gE()}),await Bl(pe(Y,"users",_.uid),{email:_.email,ledgerCode:g,role:"host",updatedAt:new Date().toISOString()},{merge:!0}),localStorage.setItem("sweet_ledger_code",g),e(g),g},[e]),l=B.useCallback(async(_,g)=>{if(!g)throw new Error("請先登入");if(!Y)throw new Error("資料庫未連線");const w=pe(Y,"artifacts",Ge,"public","data","ledgers",_),I=await Th(w);if(I.exists()){const v=I.data();if(!v.users||!v.users[g.uid]){const A=g.displayName||"Guest";await zt(w,{[`users.${g.uid}`]:{name:A,avatar:"dog",role:"guest"}})}return await Bl(pe(Y,"users",g.uid),{email:g.email,ledgerCode:_,role:"guest",updatedAt:new Date().toISOString()},{merge:!0}),localStorage.setItem("sweet_ledger_code",_),e(_),!0}else throw new Error("找不到這個帳本代碼！")},[e]),u=B.useCallback(async()=>{if(!(!t||!n||!Y)&&window.confirm("確定要退出此帳本嗎？"))try{await zt(pe(Y,"artifacts",Ge,"public","data","ledgers",t),{[`users.${n.uid}`]:ms()}),i(),alert("您已成功退出帳本。")}catch{alert("退出失敗")}},[t,n,i]),h=B.useCallback(async _=>{var g;if(!(!t||!n||!Y||!r)){if(((g=r.users[n.uid])==null?void 0:g.role)!=="host"){alert("權限不足");return}if(_!==n.uid&&window.confirm("確定要移除這位成員嗎？"))try{await zt(pe(Y,"artifacts",Ge,"public","data","ledgers",t),{[`users.${_}`]:ms()}),alert("成員已成功移除。")}catch{alert("移除失敗")}}},[t,n,r]),f=B.useCallback(async _=>{if(!Y)return null;try{const g=await Th(pe(Y,"users",_));if(g.exists())return g.data().ledgerCode}catch{}return null},[]),p=B.useCallback(async _=>{if(!t||!r||!Y)return;const g=pe(Y,"artifacts",Ge,"public","data","ledgers",t);let w=[...r.projects||[]],I=_.id;const v={..._,rates:_.rates||{},type:_.type||"public"};return I?w=w.map(A=>A.id===I?{...A,...v}:A):(I=gs(),w.push({...v,id:I})),await zt(g,{projects:w}),I},[t,r]),m=B.useCallback(async _=>{if(!t||!r||!Y)return;const g=pe(Y,"artifacts",Ge,"public","data","ledgers",t),w=r.projects.filter(re=>re.id!==_),I=(r.subscriptions||[]).filter(re=>re.projectId!==_),v=__(In(g,"transactions"),DN("projectId","==",_)),A=await E_(v),E=oa(Y);let ue=0;A.forEach(re=>{ue<450&&(E.delete(re.ref),ue++)}),E.update(g,{projects:w,subscriptions:I}),await E.commit(),A.size>450&&alert("專案交易過多，部分交易可能未完全刪除。")},[t,r]),S=_=>s("projects",_),R=_=>s("customCategories",_),P=async _=>{const g=(r.customCategories||la).filter(w=>w.id!==_);await s("customCategories",g)},V=async _=>{let g=[...r.customCategories||la];_.id?g=g.map(w=>w.id===_.id?_:w):g.push({..._,id:gs()}),await s("customCategories",g)},k=async(_,g,w)=>{const I=r.projects.map(v=>v.id===_?{...v,rates:{...v.rates,[g]:parseFloat(w)}}:v);await s("projects",I)},T=async(_,g)=>{!t||!n||await zt(pe(Y,"artifacts",Ge,"public","data","ledgers",t),{[`users.${n.uid}.${_}`]:g})},C=async _=>s("paymentMethods",_),b=B.useCallback(async()=>{var v;if(!t||!Y||!n)return;if(((v=r.users[n.uid])==null?void 0:v.role)!=="host"){alert("權限不足");return}if(!window.confirm("確定要清空所有交易嗎？"))return;const _=pe(Y,"artifacts",Ge,"public","data","ledgers",t),g=oa(Y);g.update(_,{access_token_revoked:!0,subscriptions:[]});const w=__(In(_,"transactions"));(await E_(w)).forEach(A=>g.delete(A.ref)),await g.commit(),alert("帳本已重置")},[t,r,n]),U=B.useCallback(async()=>{if(!(!n||!Y))try{if(t){const _=pe(Y,"artifacts",Ge,"public","data","ledgers",t),g=await Th(_);if(g.exists()){const w=g.data();Object.keys(w.users||{}).length<=1?await Qd(_):await zt(_,{[`users.${n.uid}`]:ms()})}}await Qd(pe(Y,"users",n.uid)),await gC(n),i()}catch(_){throw _.code==="auth/requires-recent-login"?new Error("REQ_RELOGIN"):_}},[n,t,i]);return{createLedger:o,joinLedger:l,leaveLedger:u,kickMember:h,checkUserBinding:f,saveProject:p,deleteProject:m,reorderProjects:S,reorderCategories:R,deleteCategory:P,saveCategory:V,updateProjectRates:k,updateUserSetting:T,updatePaymentMethods:C,resetAccount:b,deleteAccount:U,fixIdentity:()=>{}}},vE=B.createContext(),GN=()=>B.useContext(vE),KN=({children:t})=>{const{user:e}=mE(),{ledgerCode:n,setLedgerCode:r,ledgerData:i,ledgerDocData:s,isLedgerInitializing:o}=FN(e),l=B.useCallback(()=>{r(""),localStorage.removeItem("sweet_ledger_code"),Object.keys(localStorage).forEach(m=>{m.startsWith("sweet_ledger_data_")&&localStorage.removeItem(m)})},[r]),u=qN(n,r,e,s,l),h=HN(n,e,s),f=WN(n,s),p=B.useMemo(()=>({ledgerCode:n,setLedgerCode:r,ledgerData:i,isLedgerInitializing:o,disconnectLedger:l,...u,...h,...f}),[n,r,i,o,l,u,h,f]);return N.jsx(vE.Provider,{value:p,children:t})};function QN({ledgerData:t,currentProjectId:e,setCurrentProjectId:n,privacyMode:r,setPrivacyMode:i,setIsEditTxModalOpen:s,setEditingTx:o,user:l,handleSettleUp:u,handleOpenAddExpense:h,setView:f}){var I;if(!t||!l)return null;const p=(t.projects||[]).filter(v=>v.type!=="private"||v.owner===l.uid),m=((I=t.projects)==null?void 0:I.find(v=>v.id===e))||{name:"日常",type:"public"},S=m.type==="private",{allTxs:R,safeUsers:P}=B.useMemo(()=>{const v=t.transactions||[],A=t.users||{},E=t.customCategories||la;return{allTxs:v.filter(re=>re&&re.id&&re.amount!==void 0).map(re=>{var H;const ve=["income","expense"].includes(re.type)?re.type:"expense";let Pe=re.category||{name:"未分類",icon:"help-circle"};if((H=re.category)!=null&&H.id){const K=E.find(ce=>ce.id===re.category.id);K&&(Pe=K)}const j=re.date||new Date().toISOString();return{...re,amount:parseFloat(re.amount)||0,type:ve,category:Pe,date:j}}),safeUsers:A}},[t.transactions,t.users,t.customCategories]),{displayTxs:V,projectAllTxs:k,groupedTransactions:T,monthlyTotal:C,settlement:b,currentProjectName:U,partnerName:L,otherUserId:_,dailyAverage:g}=B.useMemo(()=>{const v=R.filter(Z=>(Z.projectId||"daily")===e),A=new Date;A.setDate(A.getDate()-7),A.setHours(0,0,0,0);const E=v.filter(Z=>new Date(Z.date)>=A),ue=new Date().toISOString().slice(0,7),re=v.filter(Z=>Z.date.startsWith(ue)),ve={};[...E].sort((Z,we)=>new Date(we.date)-new Date(Z.date)).forEach(Z=>{try{const we=new Date(Z.date).toLocaleDateString("zh-TW");ve[we]||(ve[we]=[]),ve[we].push(Z)}catch{}});const j=m.rates||{},H=re.reduce((Z,we)=>{const Ft=zi(we.amount||0,we.currency||"TWD",j);return Z+(isNaN(Ft)?0:Ft)},0),ce=new Date().getDate(),oe=ce>0?H/ce:H;let me=0,Me=0;v.forEach(Z=>{var Ft,mn;if(Z.isSettlement)return;const we=zi(Z.amount,Z.currency||"TWD",j);if(!isNaN(we))if(Z.splitType==="multi_payer"){let ft=0;if(Z.customSplit&&typeof Z.customSplit=="object"){const gn=Z.customSplit[l.uid],bi=parseFloat(gn);isNaN(bi)||(ft=zi(bi,Z.currency||"TWD",j))}const tn=we/2;me+=ft,Me+=tn}else{Z.payer===l.uid&&(me+=we);let ft=0;if(Z.splitType==="even")ft=we/2;else if(Z.splitType==="custom"){if(Z.customSplit&&typeof Z.customSplit=="object"){const tn=Z.customSplit[l.uid],gn=parseFloat(tn);isNaN(gn)||(ft=zi(gn,Z.currency||"TWD",j))}}else Z.splitType==="host_all"?ft=((Ft=P[l.uid])==null?void 0:Ft.role)==="host"?we:0:Z.splitType==="guest_all"&&(ft=((mn=P[l.uid])==null?void 0:mn.role)==="guest"?we:0);S&&(ft=we),isNaN(ft)||(Me+=ft)}});const ht=R.filter(Z=>Z.isSettlement&&(Z.projectId||"daily")===e);let Se=0;ht.forEach(Z=>{const we=zi(Z.amount,Z.currency||"TWD",j);isNaN(we)||(Z.payer===l.uid?Se+=we:Se-=we)});const dt=me-Me+Se,Vn=Object.keys(P).find(Z=>Z!==l.uid),Xr=Vn&&P[Vn]&&P[Vn].name||"對方";return{displayTxs:E,projectAllTxs:v,groupedTransactions:ve,monthlyTotal:isNaN(H)?0:H,settlement:isNaN(dt)?0:dt,currentProjectName:m.name||"日常開銷",partnerName:Xr,otherUserId:Vn,dailyAverage:oe}},[R,P,e,l,m,S]),w=v=>{var re;if(S)return[];const A=[];if(v.isSettlement){const ve=((re=P[v.payer])==null?void 0:re.name)||"未知";return A.push({label:`${ve} 轉帳`,color:"gray"}),A}if(v.splitType==="multi_payer")return A.push({label:"混合出資",color:"blue"}),A;const E=P[v.payer],ue=(E==null?void 0:E.name)||"未知";if(A.push({label:ue,color:"gray"}),v.splitType==="custom"&&v.customSplit){const ve=parseFloat(v.customSplit[v.payer]||0),Pe=parseFloat(v.amount||0);Math.abs(ve-Pe)<.1?A.push({label:"私人",color:"gray"}):ve<.1?A.push({label:"代墊",color:"gray"}):A.push({label:"自訂分攤",color:"gray"})}else if(v.splitType==="even")A.push({label:"平均分攤",color:"gray"});else{const ve=E==null?void 0:E.role;ve==="host"?v.splitType==="host_all"?A.push({label:"私人",color:"gray"}):v.splitType==="guest_all"&&A.push({label:"代墊",color:"gray"}):ve==="guest"&&(v.splitType==="guest_all"?A.push({label:"私人",color:"gray"}):v.splitType==="host_all"&&A.push({label:"代墊",color:"gray"}))}return v.isSettled&&A.push({label:"已結清",color:"green"}),A};return N.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative",children:[N.jsxs("div",{className:"flex justify-between items-center mb-4",children:[N.jsxs("div",{className:"relative",children:[N.jsx("select",{value:e,onChange:v=>n(v.target.value),className:`appearance-none text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200 transition-colors ${S?"bg-gray-800":"bg-gray-900"}`,children:p.map(v=>N.jsx("option",{value:v.id,children:v.name},v.id))}),N.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white",children:N.jsx(jS,{size:14})})]}),N.jsxs("div",{className:"flex gap-2",children:[S&&N.jsx("div",{className:"p-2 bg-gray-100 rounded-full text-gray-400",children:N.jsx(dA,{size:16})}),N.jsx("button",{onClick:()=>i(!r),className:"p-2 bg-white rounded-full shadow-sm border border-gray-100 active:scale-95 transition-transform",children:r?N.jsx(JS,{size:16,className:"text-gray-400"}):N.jsx(YS,{size:16,className:"text-rose-500"})})]})]}),S?N.jsxs("div",{className:"rounded-3xl p-6 text-white shadow-lg shadow-gray-200 mb-8 relative overflow-hidden bg-gradient-to-br from-slate-700 to-gray-900",children:[N.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"}),N.jsxs("p",{className:"text-white/60 mb-1 font-bold text-xs flex items-center gap-2 uppercase tracking-wider",children:[N.jsx(B0,{size:12})," 個人支出概況"]}),N.jsx("div",{className:"flex justify-between items-end mb-4",children:N.jsx("h1",{className:"text-4xl font-bold tracking-tight truncate",title:wn(C,"TWD",r),children:wn(C,"TWD",r)})}),N.jsxs("div",{className:"flex gap-4 border-t border-white/10 pt-3",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-white/40 text-[10px] font-bold uppercase",children:"本月累計"}),N.jsx("p",{className:"text-sm font-medium",children:wn(C,"TWD",r)})]}),N.jsx("div",{className:"w-[1px] h-8 bg-white/10"}),N.jsxs("div",{children:[N.jsx("p",{className:"text-white/40 text-[10px] font-bold uppercase",children:"平均日花費"}),N.jsx("p",{className:"text-sm font-medium truncate",children:wn(g,"TWD",r)})]})]})]}):N.jsxs("div",{className:`rounded-3xl p-6 text-white shadow-lg mb-8 relative overflow-hidden transition-colors ${b>=0?"bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-200":"bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-200"}`,children:[N.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"}),N.jsxs("p",{className:"text-white/80 mb-1 font-medium text-sm flex items-center gap-2",children:[N.jsx(ES,{size:14})," 總結算狀態 (",U,")"]}),N.jsx("div",{className:"flex justify-between items-end mb-2",children:N.jsx("h1",{className:"text-3xl font-bold tracking-tight flex items-center gap-2 flex-wrap",children:b>=0?N.jsxs(N.Fragment,{children:[N.jsx("span",{children:L})," ",N.jsx("span",{children:"欠你"})," ",N.jsx("span",{className:"truncate",children:wn(Math.abs(b),"TWD",r)})]}):N.jsxs(N.Fragment,{children:[N.jsx("span",{children:"你欠"})," ",N.jsx("span",{children:L})," ",N.jsx("span",{className:"truncate",children:wn(Math.abs(b),"TWD",r)})]})})}),N.jsxs("p",{className:"text-white/70 text-xs font-medium truncate",children:["本月總支出: ",wn(C,"TWD",r)]}),Math.abs(b)>0&&N.jsxs("button",{onClick:()=>u(Math.abs(b),b<0?L:"你",b<0?l.uid:_),className:"bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors mt-4",children:[N.jsx(pu,{size:14})," 結清債務"]})]}),N.jsxs("div",{className:"space-y-6",children:[Object.entries(T).map(([v,A])=>N.jsxs("div",{children:[N.jsx("h3",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1",children:v}),N.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden",children:A.map((E,ue)=>{var ce,oe,me,Me,ht;const re=_E((ce=E.category)==null?void 0:ce.icon)||pu,ve=w(E),Pe=$N(E.category,"display",(l==null?void 0:l.theme)||((me=(oe=t.users)==null?void 0:oe[l==null?void 0:l.uid])==null?void 0:me.theme)||"vibrant"),j=E.currency||"TWD",H=j!=="TWD",K=jN.find(Se=>Se.code===j);return N.jsxs("div",{onClick:()=>{o(E),s(!0)},className:`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${ue!==A.length-1?"border-b border-gray-50":""}`,children:[N.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[N.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${Pe.containerClass}`,style:Pe.containerStyle,children:N.jsx(re,{size:16,className:Pe.iconClass,style:Pe.iconStyle})}),N.jsxs("div",{className:"flex-1 min-w-0",children:[N.jsx("p",{className:"font-medium text-gray-800 truncate text-sm",children:E.note||((Me=E.category)==null?void 0:Me.name)}),N.jsxs("div",{className:"flex items-center flex-wrap gap-1.5 mt-1",children:[N.jsx("p",{className:"text-xs text-gray-400 mr-1 shrink-0",children:(ht=E.category)==null?void 0:ht.name}),ve.map((Se,dt)=>N.jsx("span",{className:`text-[10px] font-medium px-1.5 py-0.5 rounded border ${Se.color==="green"?"bg-emerald-50 text-emerald-600 border-emerald-100":Se.color==="blue"?"bg-blue-50 text-blue-600 border-blue-100":"bg-gray-100 text-gray-500 border-gray-100"}`,children:Se.label},dt))]})]})]}),N.jsxs("div",{className:"flex flex-col items-end ml-4",children:[N.jsxs("span",{className:`font-bold whitespace-nowrap flex items-center gap-1 max-w-[120px] justify-end ${E.isSettlement?"text-emerald-500":"text-gray-800"}`,children:[H&&N.jsx("span",{className:"text-[10px] saturate-50 opacity-80 mr-0.5 shrink-0",children:(K==null?void 0:K.flag)||j}),N.jsx("span",{className:"truncate",children:wn(E.amount||0,j,r)})]}),H&&!r&&!E.isSettlement&&N.jsxs("span",{className:"text-[10px] text-gray-300 font-medium",children:["≈ ",wn(zi(E.amount,j,m.rates),"TWD")]})]})]},E.id)})})]},v)),k.length===0?N.jsxs("div",{className:"text-center py-10 text-gray-400",children:[N.jsx("p",{children:"這個專案還沒有記帳紀錄喔 🍃"}),N.jsx("p",{className:"text-sm mt-2",children:"點擊下方「+」開始第一筆吧！"})]}):V.length===0?N.jsxs("div",{className:"text-center py-8",children:[N.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"最近 7 天沒有支出 🎉"}),N.jsxs("button",{onClick:()=>f("stats"),className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors",children:[N.jsx(Ug,{size:14})," 查看歷史紀錄"]})]}):k.length>V.length?N.jsxs("div",{className:"text-center py-4 pb-8",children:[N.jsxs("button",{onClick:()=>f("stats"),className:"inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-500 rounded-full text-sm font-bold border border-gray-100 hover:bg-white hover:border-gray-200 hover:text-rose-500 hover:shadow-sm transition-all",children:[N.jsx(Ug,{size:16})," 查看更多歷史紀錄"]}),N.jsx("p",{className:"text-[10px] text-gray-300 mt-2",children:"首頁僅顯示最近 7 天的交易"})]}):null]})]})}const JN=Ze.lazy(()=>or(()=>import("./AddExpenseView-DNZqyRWH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),XN=Ze.lazy(()=>or(()=>import("./StatsView-we4465lE.js"),__vite__mapDeps([10,11]))),YN=Ze.lazy(()=>or(()=>import("./ProjectsView-CwMKQFzn.js"),__vite__mapDeps([12,2,13,1]))),ZN=Ze.lazy(()=>or(()=>import("./SettingsView-Cn2i9h-X.js"),__vite__mapDeps([14,1,4,2,7,13,11,8]))),e4=Ze.lazy(()=>or(()=>import("./OnboardingView-B_fd_MtB.js"),__vite__mapDeps([15,16]))),t4=Ze.lazy(()=>or(()=>import("./DecisionView-AI3Yfqge.js"),__vite__mapDeps([17,16,3]))),n4=Ze.lazy(()=>or(()=>import("./EditTransactionModal-R1p-QUML.js"),__vite__mapDeps([18,4,3,7,1,5,2,9]))),r4=Ze.lazy(()=>or(()=>import("./SubscriptionsView-buhrAWmg.js"),__vite__mapDeps([19,4,5,1,6]))),$i=()=>N.jsx("div",{className:"flex h-full items-center justify-center p-10",children:N.jsx("div",{className:"w-8 h-8 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin"})});function i4(){const{user:t,loading:e,loginWithGoogle:n,logout:r}=mE(),{ledgerCode:i,ledgerData:s,isLedgerInitializing:o,createLedger:l,joinLedger:u,disconnectLedger:h,setLedgerCode:f,checkUserBinding:p,addTransaction:m,updateTransaction:S,deleteTransaction:R,deleteSubscription:P,settleUp:V,saveProject:k,deleteProject:T,reorderProjects:C,updateProjectRates:b,saveCategory:U,deleteCategory:L,reorderCategories:_,updateUserSetting:g,resetAccount:w,fixIdentity:I}=GN(),[v,A]=B.useState(()=>localStorage.getItem("sweet_ledger_code")?"dashboard":"onboarding"),[E,ue]=B.useState(0),[re,ve]=B.useState(!1),[Pe,j]=B.useState(!1),[H,K]=B.useState(()=>localStorage.getItem("sweet_last_project_id")||"daily"),[ce,oe]=B.useState(()=>new URLSearchParams(window.location.search).get("invite")||""),[me,Me]=B.useState(!1),[ht,Se]=B.useState(null),[dt,Vn]=B.useState(!1),[Xr,Z]=B.useState({id:"",name:"",icon:"project_daily"}),[we,Ft]=B.useState(!1),[mn,ft]=B.useState({id:"",name:"",icon:"food",color:I_[0].class,hex:I_[0].hex}),[tn,gn]=B.useState(""),[bi,Pa]=B.useState(!1),[Di,Vi]=B.useState(""),[xa,wc]=B.useState(new Date().toISOString().slice(0,7)),[Rt,On]=B.useState({stats:!1,projects:!1,settings:!1,add:!1,subscriptions:!1});B.useEffect(()=>{v==="stats"&&!Rt.stats&&On(Q=>({...Q,stats:!0})),v==="projects"&&!Rt.projects&&On(Q=>({...Q,projects:!0})),v==="settings"&&!Rt.settings&&On(Q=>({...Q,settings:!0})),v==="add"&&!Rt.add&&On(Q=>({...Q,add:!0})),v==="subscriptions"&&!Rt.subscriptions&&On(Q=>({...Q,subscriptions:!0}))},[v]),B.useEffect(()=>{window.scrollTo(0,0)},[v]),B.useEffect(()=>{H&&localStorage.setItem("sweet_last_project_id",H)},[H]),B.useEffect(()=>{s&&s.projects&&(s.projects.some(xe=>xe.id===H)||K("daily"))},[s,H]),B.useEffect(()=>{(async()=>{if(i&&t&&s){v==="onboarding"&&A("dashboard");return}if(t&&!i&&!o){if(j(!0),ce)try{await u(ce,t),oe("")}catch(xe){alert(`加入失敗: ${xe.message}`),oe(""),A("decision")}else{const xe=await p(t.uid);xe?(f(xe),localStorage.setItem("sweet_ledger_code",xe)):A("decision")}j(!1);return}!t&&!i&&!e&&A("onboarding")})()},[i,o,e,t,ce,s]),B.useEffect(()=>{s&&t&&s.users&&s.users[t.uid]&&gn(s.users[t.uid].name)},[s,t]);const zs=async()=>{try{await n()}catch(Q){alert(`登入失敗: ${Q.message}`)}},Xe=async Q=>{oe(Q),await zs()},nt=async()=>{j(!0);try{await l(t)}catch(Q){alert(Q.message)}j(!1)},Oi=async Q=>{j(!0);try{await u(Q,t)}catch(xe){alert(xe.message)}j(!1)},Na=async()=>{confirm("確定要登出嗎？")&&(h(),localStorage.removeItem("sweet_last_currency"),localStorage.removeItem("sweet_last_project_id"),await r(),A("onboarding"))},$s=Q=>{ue(xe=>xe+1),A("add")},Ec=async()=>{!i||!Di||(Pa(!1),await g("avatar",Di),Vi(""))},Yr=async(Q,xe)=>{!i||!H||await b(H,Q,xe)},ba=async()=>{!i||!tn||await g("name",tn)},Da=async()=>{prompt(`警告：此操作將刪除所有交易紀錄且無法復原！
請輸入 RESET 確認重置：`)==="RESET"&&await w()},Bs=async()=>{if(alert(`【功能說明】此功能僅供「原戶長 (Host)」使用。

當您因為「更換手機」或「重新安裝 App」導致身份變成訪客，無法管理帳本時，此功能可以協助您找回戶長權限。`),!confirm(`⚠️嚴重警告⚠️

若您只是普通的「成員 (Guest)」，請絕對不要執行此操作！

這將會強制將原戶長的資料覆蓋到您身上，導致帳本權限錯亂與資料損毀。

您確定您是「原戶長」且目前「遺失權限」嗎？`))return;const Q=prompt(`最後確認：

若您確定要執行救援，請輸入「我是戶長」四個字：`);if(Q==="我是戶長")try{await I(),alert("權限修復成功！您已取回戶長身份。")}catch{alert("修復失敗，請稍後再試。")}else Q!==null&&alert("輸入錯誤，取消操作。")},Tc=async()=>{if(!Xr.name)return;Vn(!1);const Q={...Xr};Q.type==="private"&&!Q.owner&&(Q.owner=t.uid),Z({id:"",name:"",icon:"project_daily"});const xe=await k(Q);xe&&K(xe)},Ic=async Q=>{confirm("確定要刪除這個專案嗎？")&&(H===Q&&K("daily"),await T(Q))},Hs=async()=>{mn.name&&(Ft(!1),await U({...mn}))},Va=async Q=>{confirm("確定要刪除這個分類嗎？")&&(Ft(!1),await L(Q))},Oa=async(Q,xe,yn)=>{if(!(!Q||Q<=0)&&confirm(`確定要結清 ${wn(Q,"TWD")} 給 ${xe} 嗎？`))try{await V(Q,yn,xe,H)}catch{alert("結清失敗")}},Zr=(Q=[])=>{if(!s)return;let yn="data:text/csv;charset=utf-8,"+"\uFEFF"+`Date,Project,Category,Note,Amount,Currency,Payer,SplitType
`;s.transactions.forEach(ye=>{var Fn;if(Q.length>0&&!Q.includes(ye.projectId))return;const _n=s.projects.find(qs=>qs.id===ye.projectId);if((_n==null?void 0:_n.type)==="private"&&_n.owner!==t.uid)return;let lr=((Fn=s.users[ye.payer])==null?void 0:Fn.name)||"Unknown";ye.splitType==="multi_payer"&&ye.customSplit&&(lr=Object.entries(ye.customSplit).map(([qs,kc])=>{var ei;return`${((ei=s.users[qs])==null?void 0:ei.name)||"Unknown"}:${kc}`}).join(" | "));const Sc={even:"平均分攤",self:"自付 (不分攤)",partner:"代墊 (對方全額)",multi_payer:"混合出資"}[ye.splitType]||ye.splitType,Ac=[new Date(ye.date).toLocaleDateString(),(_n==null?void 0:_n.name)||"Unknown",ye.category.name,`"${(ye.note||"").replace(/"/g,'""')}"`,ye.amount,ye.currency||"TWD",lr,Sc].join(",");yn+=Ac+`
`});const Ln=document.createElement("a");Ln.setAttribute("href",encodeURI(yn)),Ln.setAttribute("download",`sweetledger_exp_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(Ln),Ln.click(),document.body.removeChild(Ln)},Ws=!(i&&s&&t)&&e,Mn=t&&i&&!s&&o,La=t&&i&&!s&&!o;return Ws||Mn||Pe&&!s?N.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 z-[200] relative",children:[N.jsx("div",{style:{fontSize:"4rem",animation:"sweet-bounce 1s infinite"},children:"🍰"}),N.jsx("p",{style:{marginTop:"1rem",color:"#db2777",fontWeight:"bold",fontSize:"0.875rem",animation:"sweet-fade 1.5s infinite alternate"},children:Pe?"正在同步資料...":"SweetLedger Loading..."})]}):La?N.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center animate-in fade-in duration-300",children:[N.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:N.jsx(EA,{className:"text-gray-400",size:32})}),N.jsx("h2",{className:"text-lg font-bold text-gray-900 mb-2",children:"無法讀取帳本"}),N.jsx("p",{className:"text-gray-500 text-sm mb-6 max-w-xs",children:"我們找不到您的帳本資料，可能是網路連線不穩或帳本已被刪除。"}),N.jsx("button",{onClick:()=>h(),className:"px-6 py-3 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-transform",children:"重回首頁 (Reset)"})]}):N.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans pb-[env(safe-area-inset-bottom)] animate-in fade-in duration-500 relative",children:[N.jsxs(Ze.Suspense,{fallback:N.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-white",children:N.jsx("div",{className:"text-4xl animate-bounce",children:"🍰"})}),children:[v==="onboarding"&&N.jsx(e4,{handleGoogleLogin:zs,loading:Pe,onJoinWithCode:Xe}),v==="decision"&&N.jsx(t4,{user:t,onCreate:nt,onJoin:Oi})]}),v!=="onboarding"&&v!=="decision"&&s&&t&&N.jsxs(N.Fragment,{children:[N.jsxs(Ze.Suspense,{fallback:N.jsx($i,{}),children:[N.jsx("div",{className:v==="add"?"block h-full":"hidden",children:Rt.add&&N.jsx(Ze.Suspense,{fallback:N.jsx($i,{}),children:N.jsx(JN,{ledgerData:s,user:t,currentProjectId:H,setView:A,addTransaction:m,updateProjectRates:b},E)})}),N.jsx("div",{className:v==="subscriptions"?"block h-full":"hidden",children:Rt.subscriptions&&N.jsx(Ze.Suspense,{fallback:N.jsx($i,{}),children:N.jsx(r4,{ledgerData:s,user:t,setView:A,handleDeleteSubscription:P})})}),N.jsx("div",{className:v==="dashboard"?"block":"hidden",children:N.jsx(QN,{ledgerData:s,currentProjectId:H,setCurrentProjectId:K,privacyMode:re,setPrivacyMode:ve,setIsEditTxModalOpen:Me,setEditingTx:Se,user:t,handleSettleUp:Oa,handleOpenAddExpense:$s,setView:A})}),N.jsx("div",{className:v==="stats"?"block":"hidden",children:Rt.stats&&N.jsx(Ze.Suspense,{fallback:N.jsx($i,{}),children:N.jsx(XN,{ledgerData:s,currentProjectId:H,statsMonth:xa,setStatsMonth:wc,privacyMode:re,setEditingTx:Se,setIsEditTxModalOpen:Me})})}),N.jsx("div",{className:v==="projects"?"block":"hidden",children:Rt.projects&&N.jsx(Ze.Suspense,{fallback:N.jsx($i,{}),children:N.jsx(YN,{ledgerData:s,user:t,isEditingProject:dt,setIsEditingProject:Vn,editingProjectData:Xr,setEditingProjectData:Z,handleSaveProject:Tc,handleDeleteProject:Ic,handleReorderProjects:C,updateProjectRates:b})})}),N.jsx("div",{className:v==="settings"?"block":"hidden",children:Rt.settings&&N.jsx(Ze.Suspense,{fallback:N.jsx($i,{}),children:N.jsx(ZN,{ledgerData:s,user:t,setView:A,isEditingCategory:we,setIsEditingCategory:Ft,editingCategoryData:mn,setEditingCategoryData:ft,handleSaveCategory:Hs,handleDeleteCategory:Va,handleExport:Zr,handleResetAccount:Da,handleLogout:Na,isAvatarModalOpen:bi,setIsAvatarModalOpen:Pa,myNickname:tn,setMyNickname:gn,updateNickname:ba,tempAvatar:Di,handleAvatarSelect:Vi,confirmAvatarUpdate:Ec,handleFixIdentity:Bs,ledgerCode:i,updateLedgerCurrency:Yr,currentProjectId:H,handleReorderCategories:_,updateUserSetting:g})})}),["dashboard","stats","projects","settings"].includes(v)&&N.jsx("div",{className:"fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]",children:N.jsxs("div",{className:"flex justify-between items-center max-w-md mx-auto",children:[N.jsxs("button",{onClick:()=>A("dashboard"),className:`flex flex-col items-center gap-1 p-2 ${v==="dashboard"?"text-rose-500":"text-gray-400"}`,children:[N.jsx(Co,{size:24,strokeWidth:v==="dashboard"?2.5:2}),N.jsx("span",{className:"text-[10px] font-medium",children:"首頁"})]}),N.jsxs("button",{onClick:()=>A("stats"),className:`flex flex-col items-center gap-1 p-2 ${v==="stats"?"text-rose-500":"text-gray-400"}`,children:[N.jsx(LS,{size:24,strokeWidth:v==="stats"?2.5:2}),N.jsx("span",{className:"text-[10px] font-medium",children:"分析"})]}),N.jsx("div",{className:"relative -top-6",children:N.jsx("button",{onClick:()=>$s(),className:"w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform",children:N.jsx(yA,{size:32})})}),N.jsxs("button",{onClick:()=>A("projects"),className:`flex flex-col items-center gap-1 p-2 ${v==="projects"?"text-rose-500":"text-gray-400"}`,children:[N.jsx(L0,{size:24,strokeWidth:v==="projects"?2.5:2}),N.jsx("span",{className:"text-[10px] font-medium",children:"專案"})]}),N.jsxs("button",{onClick:()=>A("settings"),className:`flex flex-col items-center gap-1 p-2 ${v==="settings"?"text-rose-500":"text-gray-400"}`,children:[N.jsx(IA,{size:24,strokeWidth:v==="settings"?2.5:2}),N.jsx("span",{className:"text-[10px] font-medium",children:"設定"})]})]})})]}),N.jsx(Ze.Suspense,{fallback:null,children:N.jsx(n4,{isOpen:me,onClose:()=>{Me(!1),Se(null)},editingTx:ht,ledgerData:s,user:t,currentProjectId:H,updateTransaction:async Q=>{Me(!1),Se(null),await S(Q)},deleteTransaction:async Q=>{Me(!1),Se(null),await R(Q)},updateProjectRates:b})})]})]})}function s4(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let l,u;const h=async(p=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(l=await or(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/sw.js",{scope:"/",type:"classic"})).catch(p=>{o==null||o(p)}),!l)return;l.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),l.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),l.register({immediate:e}).then(p=>{s?s("/sw.js",p):i==null||i(p)}).catch(p=>{o==null||o(p)})}}return u=f(),h}const o4=B.createContext(null),kh={didCatch:!1,error:null};class a4 extends B.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=kh}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(kh)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&l4(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(kh)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let l=e;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")l=n(u);else if(r)l=B.createElement(r,u);else if(i!==void 0)l=i;else throw o}return B.createElement(o4.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},l)}}function l4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}s4({onNeedRefresh(){},onOfflineReady(){console.log("App ready to work offline")}});function u4({error:t,resetErrorBoundary:e}){return N.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center animate-in fade-in",children:[N.jsx("div",{className:"w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4",children:N.jsx("span",{className:"text-3xl",children:"🤕"})}),N.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"發生了一點小問題"}),N.jsx("p",{className:"text-gray-500 text-sm mb-6 max-w-xs mx-auto",children:"系統偵測到異常錯誤，為了保護您的資料，我們暫停了運作。"}),N.jsx("div",{className:"w-full max-w-sm bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 overflow-x-auto text-left",children:N.jsx("p",{className:"text-xs font-mono text-red-500 break-all",children:t.message||"Unknown Error"})}),N.jsxs("div",{className:"flex gap-3 w-full max-w-xs",children:[N.jsx("button",{onClick:()=>window.location.reload(),className:"flex-1 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl active:scale-95 transition-transform",children:"重新整理"}),N.jsx("button",{onClick:e,className:"flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-300 active:scale-95 transition-transform",children:"嘗試恢復"})]}),N.jsx("p",{className:"mt-8 text-[10px] text-gray-400",children:"SweetLedger PWA Protection"})]})}Ch.createRoot(document.getElementById("root")).render(N.jsx(Ze.StrictMode,{children:N.jsx(a4,{FallbackComponent:u4,children:N.jsx(LN,{children:N.jsx(KN,{children:N.jsx(i4,{})})})})}));export{f4 as A,jN as C,la as D,U0 as H,zN as I,dA as L,Sh as M,yA as P,c4 as R,RA as S,FA as U,$N as a,BN as b,X as c,gE as d,d4 as e,wn as f,_E as g,jS as h,DS as i,N as j,p4 as k,UE as l,dS as m,zi as n,pu as o,g4 as p,m4 as q,B as r,Ze as s,I_ as t,gs as u,GN as v,Ah as w};
