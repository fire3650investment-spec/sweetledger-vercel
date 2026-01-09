const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddExpenseView-B8mIYOn_.js","assets/circle-alert-DNjucB9M.js","assets/repeat-CbvpoIwN.js","assets/StatsView-ArpLkl8m.js","assets/chevron-right-DQz0l8b9.js","assets/ProjectsView-CizEPR9U.js","assets/pen-CbPMssN-.js","assets/SettingsView-C7U7bBZD.js","assets/OnboardingView-SUvq9rIE.js","assets/arrow-right-Cp7dwl91.js","assets/DecisionView-CaeNEo5-.js","assets/SubscriptionsView-CPmd7fde.js"])))=>i.map(i=>d[i]);
function jE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w_={exports:{}},Ou={},E_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),zE=Symbol.for("react.portal"),$E=Symbol.for("react.fragment"),BE=Symbol.for("react.strict_mode"),HE=Symbol.for("react.profiler"),WE=Symbol.for("react.provider"),qE=Symbol.for("react.context"),GE=Symbol.for("react.forward_ref"),KE=Symbol.for("react.suspense"),QE=Symbol.for("react.memo"),JE=Symbol.for("react.lazy"),Tm=Symbol.iterator;function XE(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var T_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I_=Object.assign,S_={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||T_}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=Ds.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||T_}var Gd=qd.prototype=new k_;Gd.constructor=qd;I_(Gd,Ds.prototype);Gd.isPureReactComponent=!0;var Im=Array.isArray,A_=Object.prototype.hasOwnProperty,Kd={current:null},C_={key:!0,ref:!0,__self:!0,__source:!0};function R_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A_.call(e,r)&&!C_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:la,type:t,key:s,ref:o,props:i,_owner:Kd.current}}function YE(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function ZE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sm=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZE(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case zE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,Im(i)?(n="",t!=null&&(n=t.replace(Sm,"$&/")+"/"),wl(i,e,n,"",function(h){return h})):i!=null&&(Qd(i)&&(i=YE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Im(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Oc(s,l);o+=wl(s,e,n,u,i)}else if(u=XE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Oc(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},El={transition:null},tT={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:El,ReactCurrentOwner:Kd};function P_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Ds;oe.Fragment=$E;oe.Profiler=HE;oe.PureComponent=qd;oe.StrictMode=BE;oe.Suspense=KE;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;oe.act=P_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)A_.call(e,u)&&!C_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:la,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:qE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WE,_context:t},t.Consumer=t};oe.createElement=R_;oe.createFactory=function(t){var e=R_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:GE,render:t}};oe.isValidElement=Qd;oe.lazy=function(t){return{$$typeof:JE,_payload:{_status:-1,_result:t},_init:eT}};oe.memo=function(t,e){return{$$typeof:QE,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};oe.unstable_act=P_;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";E_.exports=oe;var z=E_.exports;const It=UE(z),y4=jE({__proto__:null,default:It},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nT=z,rT=Symbol.for("react.element"),iT=Symbol.for("react.fragment"),sT=Object.prototype.hasOwnProperty,oT=nT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aT={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sT.call(e,r)&&!aT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rT,type:t,key:s,ref:o,props:i,_owner:oT.current}}Ou.Fragment=iT;Ou.jsx=x_;Ou.jsxs=x_;w_.exports=Ou;var P=w_.exports,Th={},N_={exports:{}},Wt={},b_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var K=B.length;B.push(G);e:for(;0<K;){var ie=K-1>>>1,re=B[ie];if(0<i(re,G))B[ie]=G,B[K]=re,K=ie;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],K=B.pop();if(K!==G){B[0]=K;e:for(var ie=0,re=B.length,fe=re>>>1;ie<fe;){var $e=2*(ie+1)-1,ut=B[$e],ct=$e+1,Mt=B[ct];if(0>i(ut,K))ct<re&&0>i(Mt,ut)?(B[ie]=Mt,B[ct]=K,ie=ct):(B[ie]=ut,B[$e]=K,ie=$e);else if(ct<re&&0>i(Mt,K))B[ie]=Mt,B[ct]=K,ie=ct;else break e}}return G}function i(B,G){var K=B.sortIndex-G.sortIndex;return K!==0?K:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,S=!1,R=!1,x=!1,V=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function b(B){if(x=!1,A(B),!R)if(n(u)!==null)R=!0,lt(j);else{var G=n(h);G!==null&&Ge(b,G.startTime-B)}}function j(B,G){R=!1,x&&(x=!1,k(g),g=-1),S=!0;var K=m;try{for(A(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!I());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,m=p.priorityLevel;var re=ie(p.expirationTime<=G);G=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),A(G)}else r(u);p=n(u)}if(p!==null)var fe=!0;else{var $e=n(h);$e!==null&&Ge(b,$e.startTime-G),fe=!1}return fe}finally{p=null,m=K,S=!1}}var L=!1,_=null,g=-1,v=5,E=-1;function I(){return!(t.unstable_now()-E<v)}function C(){if(_!==null){var B=t.unstable_now();E=B;var G=!0;try{G=_(!0,B)}finally{G?T():(L=!1,_=null)}}else L=!1}var T;if(typeof w=="function")T=function(){w(C)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Re=ge.port2;ge.port1.onmessage=C,T=function(){Re.postMessage(null)}}else T=function(){V(C,0)};function lt(B){_=B,L||(L=!0,T())}function Ge(B,G){g=V(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,lt(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var K=m;m=G;try{return B()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=m;m=B;try{return G()}finally{m=K}},t.unstable_scheduleCallback=function(B,G,K){var ie=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ie+K:ie):K=ie,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,B={id:f++,callback:G,priorityLevel:B,startTime:K,expirationTime:re,sortIndex:-1},K>ie?(B.sortIndex=K,e(h,B),n(u)===null&&B===n(h)&&(x?(k(g),g=-1):x=!0,Ge(b,K-ie))):(B.sortIndex=re,e(u,B),R||S||(R=!0,lt(j))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var G=m;return function(){var K=m;m=G;try{return B.apply(this,arguments)}finally{m=K}}}})(D_);b_.exports=D_;var lT=b_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=z,Ht=lT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V_=new Set,Oo={};function Ni(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(Oo[t]=e,t=0;t<e.length;t++)V_.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,cT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Am={};function hT(t){return Ih.call(Am,t)?!0:Ih.call(km,t)?!1:cT.test(t)?Am[t]=!0:(km[t]=!0,!1)}function dT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,r){if(e===null||typeof e>"u"||dT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,Xd);ot[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,Xd);ot[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,Xd);ot[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,i,r)&&(n=null),r||i===null?hT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),O_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),L_=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Mc;function uo(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Lc=!1;function Fc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function pT(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Qi:return"Portal";case Sh:return"Profiler";case Zd:return"StrictMode";case kh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case O_:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function mT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gT(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=gT(t))}function j_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U_(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function Ph(t,e){U_(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&xh(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xh(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(co(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function z_(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,B_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yT=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){yT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function W_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _T=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(_T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mh=null,ls=null,us=null;function bm(t){if(t=ha(t)){if(typeof Mh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Uu(e),Mh(t.stateNode,t.type,e))}}function q_(t){ls?us?us.push(t):us=[t]:ls=t}function G_(){if(ls){var t=ls,e=us;if(us=ls=null,bm(t),e)for(t=0;t<e.length;t++)bm(e[t])}}function K_(t,e){return t(e)}function Q_(){}var jc=!1;function J_(t,e,n){if(jc)return t(e,n);jc=!0;try{return K_(t,e,n)}finally{jc=!1,(ls!==null||us!==null)&&(Q_(),G_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Lh=!1;if(Qn)try{var no={};Object.defineProperty(no,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Lh=!1}function vT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var vo=!1,Hl=null,Wl=!1,Fh=null,wT={onError:function(t){vo=!0,Hl=t}};function ET(t,e,n,r,i,s,o,l,u){vo=!1,Hl=null,vT.apply(wT,arguments)}function TT(t,e,n,r,i,s,o,l,u){if(ET.apply(this,arguments),vo){if(vo){var h=Hl;vo=!1,Hl=null}else throw Error(F(198));Wl||(Wl=!0,Fh=h)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(bi(t)!==t)throw Error(F(188))}function IT(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dm(i),t;if(s===r)return Dm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Y_(t){return t=IT(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var ev=Ht.unstable_scheduleCallback,Vm=Ht.unstable_cancelCallback,ST=Ht.unstable_shouldYield,kT=Ht.unstable_requestPaint,Ue=Ht.unstable_now,AT=Ht.unstable_getCurrentPriorityLevel,rf=Ht.unstable_ImmediatePriority,tv=Ht.unstable_UserBlockingPriority,ql=Ht.unstable_NormalPriority,CT=Ht.unstable_LowPriority,nv=Ht.unstable_IdlePriority,Mu=null,In=null;function RT(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:NT,PT=Math.log,xT=Math.LN2;function NT(t){return t>>>=0,t===0?32:31-(PT(t)/xT|0)|0}var Ya=64,Za=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function bT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=bT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function VT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,of,ov,av,lv,Uh=!1,el=[],Sr=null,kr=null,Ar=null,Fo=new Map,jo=new Map,gr=[],OT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&of(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MT(t,e,n,r,i){switch(e){case"focusin":return Sr=ro(Sr,t,e,n,r,i),!0;case"dragenter":return kr=ro(kr,t,e,n,r,i),!0;case"mouseover":return Ar=ro(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,ro(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,ro(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=ci(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=X_(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=ha(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){Tl(t)&&n.delete(e)}function LT(){Uh=!1,Sr!==null&&Tl(Sr)&&(Sr=null),kr!==null&&Tl(kr)&&(kr=null),Ar!==null&&Tl(Ar)&&(Ar=null),Fo.forEach(Mm),jo.forEach(Mm)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,LT)))}function Uo(t){function e(i){return io(i,t)}if(0<el.length){io(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&io(Sr,t),kr!==null&&io(kr,t),Ar!==null&&io(Ar,t),Fo.forEach(e),jo.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&gr.shift()}var cs=ir.ReactCurrentBatchConfig,Kl=!0;function FT(t,e,n,r){var i=_e,s=cs.transition;cs.transition=null;try{_e=1,af(t,e,n,r)}finally{_e=i,cs.transition=s}}function jT(t,e,n,r){var i=_e,s=cs.transition;cs.transition=null;try{_e=4,af(t,e,n,r)}finally{_e=i,cs.transition=s}}function af(t,e,n,r){if(Kl){var i=zh(t,e,n,r);if(i===null)Jc(t,e,r,Ql,n),Om(t,r);else if(MT(i,t,e,n,r))r.stopPropagation();else if(Om(t,r),e&4&&-1<OT.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&sv(s),s=zh(t,e,n,r),s===null&&Jc(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var Ql=null;function zh(t,e,n,r){if(Ql=null,t=nf(r),t=ci(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AT()){case rf:return 1;case tv:return 4;case ql:case CT:return 16;case nv:return 536870912;default:return 16}default:return 16}}var Er=null,lf=null,Il=null;function hv(){if(Il)return Il;var t,e=lf,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Lm(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Lm,this.isPropagationStopped=Lm,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=qt(Vs),ca=De({},Vs,{view:0,detail:0}),UT=qt(ca),zc,$c,so,Lu=De({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(zc=t.screenX-so.screenX,$c=t.screenY-so.screenY):$c=zc=0,so=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Fm=qt(Lu),zT=De({},Lu,{dataTransfer:0}),$T=qt(zT),BT=De({},ca,{relatedTarget:0}),Bc=qt(BT),HT=De({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),WT=qt(HT),qT=De({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GT=qt(qT),KT=De({},Vs,{data:0}),jm=qt(KT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XT[t])?!!e[t]:!1}function cf(){return YT}var ZT=De({},ca,{key:function(t){if(t.key){var e=QT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eI=qt(ZT),tI=De({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=qt(tI),nI=De({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),rI=qt(nI),iI=De({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sI=qt(iI),oI=De({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aI=qt(oI),lI=[9,13,27,32],hf=Qn&&"CompositionEvent"in window,wo=null;Qn&&"documentMode"in document&&(wo=document.documentMode);var uI=Qn&&"TextEvent"in window&&!wo,dv=Qn&&(!hf||wo&&8<wo&&11>=wo),zm=" ",$m=!1;function fv(t,e){switch(t){case"keyup":return lI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function cI(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:($m=!0,zm);case"textInput":return t=e.data,t===zm&&$m?null:t;default:return null}}function hI(t,e){if(Xi)return t==="compositionend"||!hf&&fv(t,e)?(t=hv(),Il=lf=Er=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var dI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dI[t.type]:e==="textarea"}function mv(t,e,n,r){q_(r),e=Jl(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,zo=null;function fI(t){Av(t,0)}function Fu(t){var e=es(t);if(j_(e))return t}function pI(t,e){if(t==="change")return e}var gv=!1;if(Qn){var Hc;if(Qn){var Wc="oninput"in document;if(!Wc){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Wc=typeof Hm.oninput=="function"}Hc=Wc}else Hc=!1;gv=Hc&&(!document.documentMode||9<document.documentMode)}function Wm(){Eo&&(Eo.detachEvent("onpropertychange",yv),zo=Eo=null)}function yv(t){if(t.propertyName==="value"&&Fu(zo)){var e=[];mv(e,zo,t,nf(t)),J_(fI,e)}}function mI(t,e,n){t==="focusin"?(Wm(),Eo=e,zo=n,Eo.attachEvent("onpropertychange",yv)):t==="focusout"&&Wm()}function gI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(zo)}function yI(t,e){if(t==="click")return Fu(e)}function _I(t,e){if(t==="input"||t==="change")return Fu(e)}function vI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:vI;function $o(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ih.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function _v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vv(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wI(t){var e=vv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_v(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gm(n,s);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EI=Qn&&"documentMode"in document&&11>=document.documentMode,Yi=null,$h=null,To=null,Bh=!1;function Km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Yi==null||Yi!==Bl(r)||(r=Yi,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&$o(To,r)||(To=r,r=Jl($h,"onSelect"),0<r.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},qc={},wv={};Qn&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function ju(t){if(qc[t])return qc[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return qc[t]=e[n];return t}var Ev=ju("animationend"),Tv=ju("animationiteration"),Iv=ju("animationstart"),Sv=ju("transitionend"),kv=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){kv.set(t,e),Ni(e,[t])}for(var Gc=0;Gc<Qm.length;Gc++){var Kc=Qm[Gc],TI=Kc.toLowerCase(),II=Kc[0].toUpperCase()+Kc.slice(1);qr(TI,"on"+II)}qr(Ev,"onAnimationEnd");qr(Tv,"onAnimationIteration");qr(Iv,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(Sv,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SI=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TT(r,e,void 0,t),t.currentTarget=null}function Av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,l,h),s=u}}}if(Wl)throw t=Fh,Wl=!1,Fh=null,t}function ke(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(Cv(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),Cv(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[rl]){t[rl]=!0,V_.forEach(function(n){n!=="selectionchange"&&(SI.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Qc("selectionchange",!1,e))}}function Cv(t,e,n,r){switch(cv(e)){case 1:var i=FT;break;case 4:i=jT;break;default:i=af}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ci(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}J_(function(){var h=s,f=nf(n),p=[];e:{var m=kv.get(t);if(m!==void 0){var S=uf,R=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":S=eI;break;case"focusin":R="focus",S=Bc;break;case"focusout":R="blur",S=Bc;break;case"beforeblur":case"afterblur":S=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=$T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=rI;break;case Ev:case Tv:case Iv:S=WT;break;case Sv:S=sI;break;case"scroll":S=UT;break;case"wheel":S=aI;break;case"copy":case"cut":case"paste":S=GT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Um}var x=(e&4)!==0,V=!x&&t==="scroll",k=x?m!==null?m+"Capture":null:m;x=[];for(var w=h,A;w!==null;){A=w;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,k!==null&&(b=Lo(w,k),b!=null&&x.push(Ho(w,b,A)))),V)break;w=w.return}0<x.length&&(m=new S(m,R,null,n,f),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Oh&&(R=n.relatedTarget||n.fromElement)&&(ci(R)||R[Jn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=h,R=R?ci(R):null,R!==null&&(V=bi(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=h),S!==R)){if(x=Fm,b="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=Um,b="onPointerLeave",k="onPointerEnter",w="pointer"),V=S==null?m:es(S),A=R==null?m:es(R),m=new x(b,w+"leave",S,n,f),m.target=V,m.relatedTarget=A,b=null,ci(f)===h&&(x=new x(k,w+"enter",R,n,f),x.target=A,x.relatedTarget=V,b=x),V=b,S&&R)t:{for(x=S,k=R,w=0,A=x;A;A=Hi(A))w++;for(A=0,b=k;b;b=Hi(b))A++;for(;0<w-A;)x=Hi(x),w--;for(;0<A-w;)k=Hi(k),A--;for(;w--;){if(x===k||k!==null&&x===k.alternate)break t;x=Hi(x),k=Hi(k)}x=null}else x=null;S!==null&&Xm(p,m,S,x,!1),R!==null&&V!==null&&Xm(p,V,R,x,!0)}}e:{if(m=h?es(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var j=pI;else if(Bm(m))if(gv)j=_I;else{j=gI;var L=mI}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=yI);if(j&&(j=j(t,h))){mv(p,j,n,f);break e}L&&L(t,m,h),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&xh(m,"number",m.value)}switch(L=h?es(h):window,t){case"focusin":(Bm(L)||L.contentEditable==="true")&&(Yi=L,$h=h,To=null);break;case"focusout":To=$h=Yi=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Km(p,n,f);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":Km(p,n,f)}var _;if(hf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Xi?fv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(dv&&n.locale!=="ko"&&(Xi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Xi&&(_=hv()):(Er=f,lf="value"in Er?Er.value:Er.textContent,Xi=!0)),L=Jl(h,g),0<L.length&&(g=new jm(g,t,null,n,f),p.push({event:g,listeners:L}),_?g.data=_:(_=pv(n),_!==null&&(g.data=_)))),(_=uI?cI(t,n):hI(t,n))&&(h=Jl(h,"onBeforeInput"),0<h.length&&(f=new jm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}Av(p,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=Lo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Lo(n,s),u!=null&&o.unshift(Ho(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push(Ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kI=/\r\n?/g,AI=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(kI,`
`).replace(AI,"")}function il(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(F(425))}function Xl(){}var Hh=null,Wh=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,CI=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,RI=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(PI)}:Gh;function PI(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Os,Wo="__reactProps$"+Os,Jn="__reactContainer$"+Os,Kh="__reactEvents$"+Os,xI="__reactListeners$"+Os,NI="__reactHandles$"+Os;function ci(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[Tn])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[Tn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Uu(t){return t[Wo]||null}var Qh=[],ts=-1;function Gr(t){return{current:t}}function Ce(t){0>ts||(t.current=Qh[ts],Qh[ts]=null,ts--)}function Te(t,e){ts++,Qh[ts]=t.current,t.current=e}var Fr={},vt=Gr(Fr),Nt=Gr(!1),Ei=Fr;function ws(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Yl(){Ce(Nt),Ce(vt)}function tg(t,e,n){if(vt.current!==Fr)throw Error(F(168));Te(vt,e),Te(Nt,n)}function Rv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,mT(t)||"Unknown",i));return De({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,Ei=vt.current,Te(vt,t),Te(Nt,Nt.current),!0}function ng(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Rv(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,Ce(Nt),Ce(vt),Te(vt,t)):Ce(Nt),Te(Nt,n)}var zn=null,zu=!1,Yc=!1;function Pv(t){zn===null?zn=[t]:zn.push(t)}function bI(t){zu=!0,Pv(t)}function Kr(){if(!Yc&&zn!==null){Yc=!0;var t=0,e=_e;try{var n=zn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,zu=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),ev(rf,Kr),i}finally{_e=e,Yc=!1}}return null}var ns=[],rs=0,eu=null,tu=0,Gt=[],Kt=0,Ti=null,Bn=1,Hn="";function ai(t,e){ns[rs++]=tu,ns[rs++]=eu,eu=t,tu=e}function xv(t,e,n){Gt[Kt++]=Bn,Gt[Kt++]=Hn,Gt[Kt++]=Ti,Ti=t;var r=Bn;t=Hn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-un(e)+i|n<<i|r,Hn=s+t}else Bn=1<<s|n<<i|r,Hn=t}function ff(t){t.return!==null&&(ai(t,1),xv(t,1,0))}function pf(t){for(;t===eu;)eu=ns[--rs],ns[rs]=null,tu=ns[--rs],ns[rs]=null;for(;t===Ti;)Ti=Gt[--Kt],Gt[Kt]=null,Hn=Gt[--Kt],Gt[Kt]=null,Bn=Gt[--Kt],Gt[Kt]=null}var Bt=null,zt=null,xe=!1,on=null;function Nv(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,zt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:Bn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,zt=null,!0):!1;default:return!1}}function Jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xh(t){if(xe){var e=zt;if(e){var n=e;if(!rg(t,e)){if(Jh(t))throw Error(F(418));e=Cr(n.nextSibling);var r=Bt;e&&rg(t,e)?Nv(r,n):(t.flags=t.flags&-4097|2,xe=!1,Bt=t)}}else{if(Jh(t))throw Error(F(418));t.flags=t.flags&-4097|2,xe=!1,Bt=t}}}function ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function sl(t){if(t!==Bt)return!1;if(!xe)return ig(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=zt)){if(Jh(t))throw bv(),Error(F(418));for(;e;)Nv(t,e),e=Cr(e.nextSibling)}if(ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Bt?Cr(t.stateNode.nextSibling):null;return!0}function bv(){for(var t=zt;t;)t=Cr(t.nextSibling)}function Es(){zt=Bt=null,xe=!1}function mf(t){on===null?on=[t]:on.push(t)}var DI=ir.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sg(t){var e=t._init;return e(t._payload)}function Dv(t){function e(k,w){if(t){var A=k.deletions;A===null?(k.deletions=[w],k.flags|=16):A.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)e(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function i(k,w){return k=Nr(k,w),k.index=0,k.sibling=null,k}function s(k,w,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<w?(k.flags|=2,w):A):(k.flags|=2,w)):(k.flags|=1048576,w)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,w,A,b){return w===null||w.tag!==6?(w=sh(A,k.mode,b),w.return=k,w):(w=i(w,A),w.return=k,w)}function u(k,w,A,b){var j=A.type;return j===Ji?f(k,w,A.props.children,b,A.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===pr&&sg(j)===w.type)?(b=i(w,A.props),b.ref=oo(k,w,A),b.return=k,b):(b=Nl(A.type,A.key,A.props,null,k.mode,b),b.ref=oo(k,w,A),b.return=k,b)}function h(k,w,A,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=oh(A,k.mode,b),w.return=k,w):(w=i(w,A.children||[]),w.return=k,w)}function f(k,w,A,b,j){return w===null||w.tag!==7?(w=gi(A,k.mode,b,j),w.return=k,w):(w=i(w,A),w.return=k,w)}function p(k,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=sh(""+w,k.mode,A),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:return A=Nl(w.type,w.key,w.props,null,k.mode,A),A.ref=oo(k,null,w),A.return=k,A;case Qi:return w=oh(w,k.mode,A),w.return=k,w;case pr:var b=w._init;return p(k,b(w._payload),A)}if(co(w)||to(w))return w=gi(w,k.mode,A,null),w.return=k,w;ol(k,w)}return null}function m(k,w,A,b){var j=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(k,w,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Qa:return A.key===j?u(k,w,A,b):null;case Qi:return A.key===j?h(k,w,A,b):null;case pr:return j=A._init,m(k,w,j(A._payload),b)}if(co(A)||to(A))return j!==null?null:f(k,w,A,b,null);ol(k,A)}return null}function S(k,w,A,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return k=k.get(A)||null,l(w,k,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Qa:return k=k.get(b.key===null?A:b.key)||null,u(w,k,b,j);case Qi:return k=k.get(b.key===null?A:b.key)||null,h(w,k,b,j);case pr:var L=b._init;return S(k,w,A,L(b._payload),j)}if(co(b)||to(b))return k=k.get(A)||null,f(w,k,b,j,null);ol(w,b)}return null}function R(k,w,A,b){for(var j=null,L=null,_=w,g=w=0,v=null;_!==null&&g<A.length;g++){_.index>g?(v=_,_=null):v=_.sibling;var E=m(k,_,A[g],b);if(E===null){_===null&&(_=v);break}t&&_&&E.alternate===null&&e(k,_),w=s(E,w,g),L===null?j=E:L.sibling=E,L=E,_=v}if(g===A.length)return n(k,_),xe&&ai(k,g),j;if(_===null){for(;g<A.length;g++)_=p(k,A[g],b),_!==null&&(w=s(_,w,g),L===null?j=_:L.sibling=_,L=_);return xe&&ai(k,g),j}for(_=r(k,_);g<A.length;g++)v=S(_,k,g,A[g],b),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?g:v.key),w=s(v,w,g),L===null?j=v:L.sibling=v,L=v);return t&&_.forEach(function(I){return e(k,I)}),xe&&ai(k,g),j}function x(k,w,A,b){var j=to(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var L=j=null,_=w,g=w=0,v=null,E=A.next();_!==null&&!E.done;g++,E=A.next()){_.index>g?(v=_,_=null):v=_.sibling;var I=m(k,_,E.value,b);if(I===null){_===null&&(_=v);break}t&&_&&I.alternate===null&&e(k,_),w=s(I,w,g),L===null?j=I:L.sibling=I,L=I,_=v}if(E.done)return n(k,_),xe&&ai(k,g),j;if(_===null){for(;!E.done;g++,E=A.next())E=p(k,E.value,b),E!==null&&(w=s(E,w,g),L===null?j=E:L.sibling=E,L=E);return xe&&ai(k,g),j}for(_=r(k,_);!E.done;g++,E=A.next())E=S(_,k,g,E.value,b),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?g:E.key),w=s(E,w,g),L===null?j=E:L.sibling=E,L=E);return t&&_.forEach(function(C){return e(k,C)}),xe&&ai(k,g),j}function V(k,w,A,b){if(typeof A=="object"&&A!==null&&A.type===Ji&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Qa:e:{for(var j=A.key,L=w;L!==null;){if(L.key===j){if(j=A.type,j===Ji){if(L.tag===7){n(k,L.sibling),w=i(L,A.props.children),w.return=k,k=w;break e}}else if(L.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===pr&&sg(j)===L.type){n(k,L.sibling),w=i(L,A.props),w.ref=oo(k,L,A),w.return=k,k=w;break e}n(k,L);break}else e(k,L);L=L.sibling}A.type===Ji?(w=gi(A.props.children,k.mode,b,A.key),w.return=k,k=w):(b=Nl(A.type,A.key,A.props,null,k.mode,b),b.ref=oo(k,w,A),b.return=k,k=b)}return o(k);case Qi:e:{for(L=A.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(k,w.sibling),w=i(w,A.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else e(k,w);w=w.sibling}w=oh(A,k.mode,b),w.return=k,k=w}return o(k);case pr:return L=A._init,V(k,w,L(A._payload),b)}if(co(A))return R(k,w,A,b);if(to(A))return x(k,w,A,b);ol(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(k,w.sibling),w=i(w,A),w.return=k,k=w):(n(k,w),w=sh(A,k.mode,b),w.return=k,k=w),o(k)):n(k,w)}return V}var Ts=Dv(!0),Vv=Dv(!1),nu=Gr(null),ru=null,is=null,gf=null;function yf(){gf=is=ru=null}function _f(t){var e=nu.current;Ce(nu),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ru=t,gf=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(ru===null)throw Error(F(308));is=t,ru.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var hi=null;function vf(t){hi===null?hi=[t]:hi.push(t)}function Ov(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(t,n)}return i=r.interleaved,i===null?(e.next=e,vf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sf(t,n)}}function og(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,x=l;switch(m=e,S=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=De({},p,m);break e;case 2:mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Si|=o,t.lanes=o,t.memoizedState=p}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var da={},Sn=Gr(da),qo=Gr(da),Go=Gr(da);function di(t){if(t===da)throw Error(F(174));return t}function Ef(t,e){switch(Te(Go,e),Te(qo,t),Te(Sn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}Ce(Sn),Te(Sn,e)}function Is(){Ce(Sn),Ce(qo),Ce(Go)}function Lv(t){di(Go.current);var e=di(Sn.current),n=bh(e,t.type);e!==n&&(Te(qo,t),Te(Sn,n))}function Tf(t){qo.current===t&&(Ce(Sn),Ce(qo))}var Ne=Gr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function If(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var Al=ir.ReactCurrentDispatcher,eh=ir.ReactCurrentBatchConfig,Ii=0,be=null,Qe=null,Ze=null,ou=!1,Io=!1,Ko=0,VI=0;function ft(){throw Error(F(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function kf(t,e,n,r,i,s){if(Ii=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?FI:jI,t=n(r,i),Io){s=0;do{if(Io=!1,Ko=0,25<=s)throw Error(F(301));s+=1,Ze=Qe=null,e.updateQueue=null,Al.current=UI,t=n(r,i)}while(Io)}if(Al.current=au,e=Qe!==null&&Qe.next!==null,Ii=0,Ze=Qe=be=null,ou=!1,e)throw Error(F(300));return t}function Af(){var t=Ko!==0;return Ko=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?be.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Zt(){if(Qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=Ze===null?be.memoizedState:Ze.next;if(e!==null)Ze=e,Qe=t;else{if(t===null)throw Error(F(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?be.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Qo(t,e){return typeof e=="function"?e(t):e}function th(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ii&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,be.lanes|=f,Si|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,dn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function jv(t,e){var n=be,r=Zt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Cf($v.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Jo(9,zv.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));Ii&30||Uv(n,e,i)}return i}function Uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zv(t,e,n,r){e.value=n,e.getSnapshot=r,Bv(e)&&Hv(t)}function $v(t,e,n){return n(function(){Bv(e)&&Hv(t)})}function Bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function Hv(t){var e=Xn(t,1);e!==null&&cn(e,t,1,-1)}function lg(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=LI.bind(null,be,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wv(){return Zt().memoizedState}function Cl(t,e,n,r){var i=vn();be.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Sf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}be.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function ug(t,e){return Cl(8390656,8,t,e)}function Cf(t,e){return $u(2048,8,t,e)}function qv(t,e){return $u(4,2,t,e)}function Gv(t,e){return $u(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,Kv.bind(null,e,t),n)}function Rf(){}function Jv(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xv(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yv(t,e,n){return Ii&21?(dn(n,e)||(n=rv(),be.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function OI(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{_e=n,eh.transition=r}}function Zv(){return Zt().memoizedState}function MI(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Ov(t,e,n,r),n!==null){var i=St();cn(n,t,r,i),n0(n,e,r)}}function LI(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var u=e.interleaved;u===null?(i.next=i,vf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ov(t,e,i,r),n!==null&&(i=St(),cn(n,t,r,i),n0(n,e,r))}}function e0(t){var e=t.alternate;return t===be||e!==null&&e===be}function t0(t,e){Io=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sf(t,n)}}var au={readContext:Yt,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},FI={readContext:Yt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:lg,useDebugValue:Rf,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=lg(!1),e=t[0];return t=OI.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=vn();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Ii&30||Uv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ug($v.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=et.identifierPrefix;if(xe){var n=Hn,r=Bn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jI={readContext:Yt,useCallback:Jv,useContext:Yt,useEffect:Cf,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Gv,useMemo:Xv,useReducer:th,useRef:Wv,useState:function(){return th(Qo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Zt();return Yv(e,Qe.memoizedState,t)},useTransition:function(){var t=th(Qo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:jv,useId:Zv,unstable_isNewReconciler:!1},UI={readContext:Yt,useCallback:Jv,useContext:Yt,useEffect:Cf,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Gv,useMemo:Xv,useReducer:nh,useRef:Wv,useState:function(){return nh(Qo)},useDebugValue:Rf,useDeferredValue:function(t){var e=Zt();return Qe===null?e.memoizedState=t:Yv(e,Qe.memoizedState,t)},useTransition:function(){var t=nh(Qo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:jv,useId:Zv,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=xr(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(cn(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=xr(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(cn(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=xr(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(cn(e,t,r,n),kl(e,t,r))}};function cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function r0(t,e,n){var r=!1,i=Fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=bt(e)?Ei:vt.current,r=e.contextTypes,s=(r=r!=null)?ws(t,i):Fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=bt(e)?Ei:vt.current,i.context=ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bu.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",r=e;do n+=pT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zI=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,hd=r),td(t,e)},n}function s0(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var $I=ir.ReactCurrentOwner,xt=!1;function Tt(t,e,n,r){e.child=t===null?Vv(e,null,n,r):Ts(e,t.child,n,r)}function mg(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=kf(t,e,n,r,s,i),n=Af(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(xe&&n&&ff(e),e.flags|=1,Tt(t,e,r,i),e.child)}function gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Yn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Yn(t,e,i)}return nd(t,e,n,r,i)}function a0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(os,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(os,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(os,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(os,jt),jt|=r;return Tt(t,e,i,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,i){var s=bt(n)?Ei:vt.current;return s=ws(e,s),hs(e,i),n=kf(t,e,n,r,s,i),r=Af(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(xe&&r&&ff(e),e.flags|=1,Tt(t,e,n,i),e.child)}function yg(t,e,n,r,i){if(bt(n)){var s=!0;Zl(e)}else s=!1;if(hs(e,i),e.stateNode===null)Rl(t,e),r0(e,n,r),ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Yt(h):(h=bt(n)?Ei:vt.current,h=ws(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&hg(e,o,r,h),mr=!1;var m=e.memoizedState;o.state=m,iu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||mr?(typeof f=="function"&&(Zh(e,n,f,r),u=e.memoizedState),(l=mr||cg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:rn(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=bt(n)?Ei:vt.current,u=ws(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&hg(e,o,r,u),mr=!1,m=e.memoizedState,o.state=m,iu(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||Nt.current||mr?(typeof S=="function"&&(Zh(e,n,S,r),R=e.memoizedState),(h=mr||cg(e,n,h,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,s,i)}function rd(t,e,n,r,i,s){l0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ng(e,n,!1),Yn(t,e,s);r=e.stateNode,$I.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,l,s)):Tt(t,e,l,s),e.memoizedState=r.state,i&&ng(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),Ef(t,e.containerInfo)}function _g(t,e,n,r,i){return Es(),mf(i),e.flags|=256,Tt(t,e,n,r),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ne,i&1),t===null)return Xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qu(o,r,0,null),t=gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=id,t):Pf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return BI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nr(l,s):(s=gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pf(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&mf(r),Ts(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(F(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qu({mode:"visible",children:r.children},i,0,null),s=gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=id,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=rh(s,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(t,i),cn(r,t,i,-1))}return Of(),r=rh(Error(F(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Cr(i.nextSibling),Bt=e,xe=!0,on=null,t!==null&&(Gt[Kt++]=Bn,Gt[Kt++]=Hn,Gt[Kt++]=Ti,Bn=t.id,Hn=t.overflow,Ti=e),e=Pf(e,r.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ih(e,!0,n,null,s);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HI(t,e,n){switch(e.tag){case 3:u0(e),Es();break;case 5:Lv(e);break;case 1:bt(e.type)&&Zl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(Te(Ne,Ne.current&1),t=Yn(t,e,n),t!==null?t.sibling:null);Te(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return Yn(t,e,n)}var d0,od,f0,p0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};f0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(Sn.current);var s=null;switch(n){case"input":i=Rh(t,i),r=Rh(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Nh(t,i),r=Nh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}Dh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};p0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WI(t,e,n){var r=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return bt(e.type)&&Yl(),pt(e),null;case 3:return r=e.stateNode,Is(),Ce(Nt),Ce(vt),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(pd(on),on=null))),od(t,e),pt(e),null;case 5:Tf(e);var i=di(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return pt(e),null}if(t=di(Sn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)ke(fo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Rm(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":xm(r,s),ke("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Ja(r),Pm(r,s,!0);break;case"textarea":Ja(r),Nm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[Wo]=r,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)ke(fo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":Rm(t,r),i=Rh(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),ke("invalid",t);break;case"textarea":xm(t,r),i=Nh(t,r),ke("invalid",t);break;default:i=r}Dh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?W_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mo(t,u):typeof u=="number"&&Mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ke("scroll",t):u!=null&&Yd(t,s,u,o))}switch(n){case"input":Ja(t),Pm(t,r,!1);break;case"textarea":Ja(t),Nm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=di(Go.current),di(Sn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return pt(e),null;case 13:if(Ce(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&zt!==null&&e.mode&1&&!(e.flags&128))bv(),Es(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Tn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else on!==null&&(pd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Je===0&&(Je=3):Of())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Is(),od(t,e),t===null&&Bo(e.stateNode.containerInfo),pt(e),null;case 10:return _f(e.type._context),pt(e),null;case 17:return bt(e.type)&&Yl(),pt(e),null;case 19:if(Ce(Ne),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ao(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>ks&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return pt(e),null}else 2*Ue()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ne.current,Te(Ne,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function qI(t,e){switch(pf(e),e.tag){case 1:return bt(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),Ce(Nt),Ce(vt),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(Ce(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Ne),null;case 4:return Is(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var ll=!1,yt=!1,GI=typeof WeakSet=="function"?WeakSet:Set,q=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){Me(t,e,r)}}var wg=!1;function KI(t,e){if(Hh=Kl,t=vv(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},Kl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,V=R.memoizedState,k=e.stateNode,w=k.getSnapshotBeforeUpdate(e.elementType===e.type?x:rn(e.type,x),V);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Me(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=wg,wg=!1,R}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ad(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[Wo],delete e[Kh],delete e[xI],delete e[NI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function Eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var nt=null,sn=!1;function dr(t,e,n){for(n=n.child;n!==null;)y0(t,e,n),n=n.sibling}function y0(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:yt||ss(n,e);case 6:var r=nt,i=sn;nt=null,dr(t,e,n),nt=r,sn=i,nt!==null&&(sn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(sn?(t=nt,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Uo(t)):Xc(nt,n.stateNode));break;case 4:r=nt,i=sn,nt=n.stateNode.containerInfo,sn=!0,dr(t,e,n),nt=r,sn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!yt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,dr(t,e,n),yt=r):dr(t,e,n);break;default:dr(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GI),e.forEach(function(r){var i=rS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,sn=!1;break e;case 3:nt=l.stateNode.containerInfo,sn=!0;break e;case 4:nt=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(nt===null)throw Error(F(160));y0(s,o,i),nt=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Me(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),_n(t),r&4){try{So(3,t,t.return),Hu(3,t)}catch(x){Me(t,t.return,x)}try{So(5,t,t.return)}catch(x){Me(t,t.return,x)}}break;case 1:nn(e,t),_n(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(nn(e,t),_n(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(x){Me(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&U_(i,s),Vh(l,o);var h=Vh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?W_(i,p):f==="dangerouslySetInnerHTML"?B_(i,p):f==="children"?Mo(i,p):Yd(i,f,p,h)}switch(l){case"input":Ph(i,s);break;case"textarea":z_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?as(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?as(i,!!s.multiple,s.defaultValue,!0):as(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(x){Me(t,t.return,x)}}break;case 6:if(nn(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Me(t,t.return,x)}}break;case 3:if(nn(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(x){Me(t,t.return,x)}break;case 4:nn(e,t),_n(t);break;case 13:nn(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bf=Ue())),r&4&&Tg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(h=yt)||f,nn(e,t),yt=h):nn(e,t),_n(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(m=q,S=m.child,m.tag){case 0:case 11:case 14:case 15:So(4,m,m.return);break;case 1:ss(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Me(r,n,x)}}break;case 5:ss(m,m.return);break;case 22:if(m.memoizedState!==null){Sg(p);continue}}S!==null?(S.return=m,q=S):Sg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=H_("display",o))}catch(x){Me(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Me(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),_n(t),r&4&&Tg(t);break;case 21:break;default:nn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=Eg(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Eg(t);ud(t,l,o);break;default:throw Error(F(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QI(t,e,n){q=t,v0(t)}function v0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||yt;l=ll;var h=yt;if(ll=o,(yt=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?kg(i):u!==null?(u.return=o,q=u):kg(i);for(;s!==null;)q=s,v0(s),s=s.sibling;q=i,ll=l,yt=h}Ig(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ig(t)}}function Ig(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}yt||e.flags&512&&ld(e)}catch(m){Me(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Sg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function kg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{ld(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{ld(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var JI=Math.ceil,lu=ir.ReactCurrentDispatcher,xf=ir.ReactCurrentOwner,Xt=ir.ReactCurrentBatchConfig,de=0,et=null,He=null,st=0,jt=0,os=Gr(0),Je=0,Xo=null,Si=0,Wu=0,Nf=0,ko=null,Rt=null,bf=0,ks=1/0,Un=null,uu=!1,hd=null,Pr=null,ul=!1,Tr=null,cu=0,Ao=0,dd=null,Pl=-1,xl=0;function St(){return de&6?Ue():Pl!==-1?Pl:Pl=Ue()}function xr(t){return t.mode&1?de&2&&st!==0?st&-st:DI.transition!==null?(xl===0&&(xl=rv()),xl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function cn(t,e,n,r){if(50<Ao)throw Ao=0,dd=null,Error(F(185));ua(t,n,r),(!(de&2)||t!==et)&&(t===et&&(!(de&2)&&(Wu|=n),Je===4&&yr(t,st)),Dt(t,r),n===1&&de===0&&!(e.mode&1)&&(ks=Ue()+500,zu&&Kr()))}function Dt(t,e){var n=t.callbackNode;DT(t,e);var r=Gl(t,t===et?st:0);if(r===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?bI(Ag.bind(null,t)):Pv(Ag.bind(null,t)),RI(function(){!(de&6)&&Kr()}),n=null;else{switch(iv(r)){case 1:n=rf;break;case 4:n=tv;break;case 16:n=ql;break;case 536870912:n=nv;break;default:n=ql}n=C0(n,w0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w0(t,e){if(Pl=-1,xl=0,de&6)throw Error(F(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Gl(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var i=de;de|=2;var s=T0();(et!==t||st!==e)&&(Un=null,ks=Ue()+500,mi(t,e));do try{ZI();break}catch(l){E0(t,l)}while(!0);yf(),lu.current=s,de=i,He!==null?e=0:(et=null,st=0,e=Je)}if(e!==0){if(e===2&&(i=jh(t),i!==0&&(r=i,e=fd(t,i))),e===1)throw n=Xo,mi(t,0),yr(t,r),Dt(t,Ue()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!XI(i)&&(e=hu(t,r),e===2&&(s=jh(t),s!==0&&(r=s,e=fd(t,s))),e===1))throw n=Xo,mi(t,0),yr(t,r),Dt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:li(t,Rt,Un);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=bf+500-Ue(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gh(li.bind(null,t,Rt,Un),e);break}li(t,Rt,Un);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JI(r/1960))-r,10<r){t.timeoutHandle=Gh(li.bind(null,t,Rt,Un),r);break}li(t,Rt,Un);break;case 5:li(t,Rt,Un);break;default:throw Error(F(329))}}}return Dt(t,Ue()),t.callbackNode===n?w0.bind(null,t):null}function fd(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(mi(t,e).flags|=256),t=hu(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&pd(e)),t}function pd(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function XI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Nf,e&=~Wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function Ag(t){if(de&6)throw Error(F(327));ds();var e=Gl(t,0);if(!(e&1))return Dt(t,Ue()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=fd(t,r))}if(n===1)throw n=Xo,mi(t,0),yr(t,e),Dt(t,Ue()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Rt,Un),Dt(t,Ue()),null}function Df(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ks=Ue()+500,zu&&Kr())}}function ki(t){Tr!==null&&Tr.tag===0&&!(de&6)&&ds();var e=de;de|=1;var n=Xt.transition,r=_e;try{if(Xt.transition=null,_e=1,t)return t()}finally{_e=r,Xt.transition=n,de=e,!(de&6)&&Kr()}}function Vf(){jt=os.current,Ce(os)}function mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CI(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:Is(),Ce(Nt),Ce(vt),If();break;case 5:Tf(r);break;case 4:Is();break;case 13:Ce(Ne);break;case 19:Ce(Ne);break;case 10:_f(r.type._context);break;case 22:case 23:Vf()}n=n.return}if(et=t,He=t=Nr(t.current,null),st=jt=e,Je=0,Xo=null,Nf=Wu=Si=0,Rt=ko=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function E0(t,e){do{var n=He;try{if(yf(),Al.current=au,ou){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(Ii=0,Ze=Qe=be=null,Io=!1,Ko=0,xf.current=null,n===null||n.return===null){Je=1,Xo=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=fg(o);if(S!==null){S.flags&=-257,pg(S,o,l,s,e),S.mode&1&&dg(s,h,e),e=S,u=h;var R=e.updateQueue;if(R===null){var x=new Set;x.add(u),e.updateQueue=x}else R.add(u);break e}else{if(!(e&1)){dg(s,h,e),Of();break e}u=Error(F(426))}}else if(xe&&l.mode&1){var V=fg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),pg(V,o,l,s,e),mf(Ss(u,l));break e}}s=u=Ss(u,l),Je!==4&&(Je=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=i0(s,u,e);og(s,k);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Pr===null||!Pr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=s0(s,l,e);og(s,b);break e}}s=s.return}while(s!==null)}S0(n)}catch(j){e=j,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function T0(){var t=lu.current;return lu.current=au,t===null?au:t}function Of(){(Je===0||Je===3||Je===2)&&(Je=4),et===null||!(Si&268435455)&&!(Wu&268435455)||yr(et,st)}function hu(t,e){var n=de;de|=2;var r=T0();(et!==t||st!==e)&&(Un=null,mi(t,e));do try{YI();break}catch(i){E0(t,i)}while(!0);if(yf(),de=n,lu.current=r,He!==null)throw Error(F(261));return et=null,st=0,Je}function YI(){for(;He!==null;)I0(He)}function ZI(){for(;He!==null&&!ST();)I0(He)}function I0(t){var e=A0(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?S0(t):He=e,xf.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qI(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,He=null;return}}else if(n=WI(n,e,jt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Je===0&&(Je=5)}function li(t,e,n){var r=_e,i=Xt.transition;try{Xt.transition=null,_e=1,eS(t,e,n,r)}finally{Xt.transition=i,_e=r}return null}function eS(t,e,n,r){do ds();while(Tr!==null);if(de&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VT(t,s),t===et&&(He=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,C0(ql,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=_e;_e=1;var l=de;de|=4,xf.current=null,KI(t,n),_0(n,t),wI(Wh),Kl=!!Hh,Wh=Hh=null,t.current=n,QI(n),kT(),de=l,_e=o,Xt.transition=s}else t.current=n;if(ul&&(ul=!1,Tr=t,cu=i),s=t.pendingLanes,s===0&&(Pr=null),RT(n.stateNode),Dt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=hd,hd=null,t;return cu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===dd?Ao++:(Ao=0,dd=t):Ao=0,Kr(),null}function ds(){if(Tr!==null){var t=iv(cu),e=Xt.transition,n=_e;try{if(Xt.transition=null,_e=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,cu=0,de&6)throw Error(F(331));var i=de;for(de|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:So(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var m=f.sibling,S=f.return;if(m0(f),f===h){q=null;break}if(m!==null){m.return=S,q=m;break}q=S}}}var R=s.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var V=x.sibling;x.sibling=null,x=V}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,q=k;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(j){Me(l,l.return,j)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(de=i,Kr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Mu,t)}catch{}r=!0}return r}finally{_e=n,Xt.transition=e}}return!1}function Cg(t,e,n){e=Ss(n,e),e=i0(t,e,1),t=Rr(t,e,1),e=St(),t!==null&&(ua(t,1,e),Dt(t,e))}function Me(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ss(n,t),t=s0(e,t,1),e=Rr(e,t,1),t=St(),e!==null&&(ua(e,1,t),Dt(e,t));break}}e=e.return}}function tS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Je===4||Je===3&&(st&130023424)===st&&500>Ue()-bf?mi(t,0):Nf|=n),Dt(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=St();t=Xn(t,e),t!==null&&(ua(t,e,n),Dt(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function rS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),k0(t,n)}var A0;A0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,HI(t,e,n);xt=!!(t.flags&131072)}else xt=!1,xe&&e.flags&1048576&&xv(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=ws(e,vt.current);hs(e,n),i=kf(null,e,r,t,i,n);var s=Af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wf(e),i.updater=Bu,e.stateNode=i,i._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&ff(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sS(r),t=rn(r,t),i){case 0:e=nd(null,e,r,t,n);break e;case 1:e=yg(null,e,r,t,n);break e;case 11:e=mg(null,e,r,t,n);break e;case 14:e=gg(null,e,r,rn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),yg(t,e,r,i,n);case 3:e:{if(u0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mv(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ss(Error(F(423)),e),e=_g(t,e,r,n,i);break e}else if(r!==i){i=Ss(Error(F(424)),e),e=_g(t,e,r,n,i);break e}else for(zt=Cr(e.stateNode.containerInfo.firstChild),Bt=e,xe=!0,on=null,n=Vv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){e=Yn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Lv(e),t===null&&Xh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qh(r,i)?o=null:s!==null&&qh(r,s)&&(e.flags|=32),l0(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Xh(e),null;case 13:return c0(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),mg(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(nu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Gn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Yh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=Yt(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),gg(t,e,r,i,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Rl(t,e),e.tag=1,bt(r)?(t=!0,Zl(e)):t=!1,hs(e,n),r0(e,r,i),ed(e,r,i,n),rd(null,e,r,!0,t,n);case 19:return h0(t,e,n);case 22:return a0(t,e,n)}throw Error(F(156,e.tag))};function C0(t,e){return ev(t,e)}function iS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new iS(t,e,n,r)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ji:return gi(n.children,i,s,e);case Zd:o=8,i|=8;break;case Sh:return t=Jt(12,n,e,i|2),t.elementType=Sh,t.lanes=s,t;case kh:return t=Jt(13,n,e,i),t.elementType=kh,t.lanes=s,t;case Ah:return t=Jt(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case L_:return qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O_:o=10;break e;case M_:o=9;break e;case ef:o=11;break e;case tf:o=14;break e;case pr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function qu(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=L_,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,r,i,s,o,l,u){return t=new oS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function aS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function R0(t){if(!t)return Fr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(bt(n))return Rv(t,n,e)}return e}function P0(t,e,n,r,i,s,o,l,u){return t=Lf(n,r,!0,t,i,s,o,l,u),t.context=R0(null),n=t.current,r=St(),i=xr(n),s=Gn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,ua(t,i,r),Dt(t,r),t}function Gu(t,e,n,r){var i=e.current,s=St(),o=xr(i);return n=R0(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(cn(t,i,o,s),kl(t,i,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){Rg(t,e),(t=t.alternate)&&Rg(t,e)}function lS(){return null}var x0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Ku.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Gu(t,e,null,null)};Ku.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Gu(null,t,null,null)}),e[Jn]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&uv(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function uS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=du(o);s.call(h)}}var o=P0(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Jn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=du(u);l.call(h)}}var u=Lf(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=u,t[Jn]=u.current,Bo(t.nodeType===8?t.parentNode:t),ki(function(){Gu(e,u,n,r)}),u}function Ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=du(o);l.call(u)}}Gu(e,o,t,i)}else o=uS(n,e,t,i,r);return du(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(sf(e,n|1),Dt(e,Ue()),!(de&6)&&(ks=Ue()+500,Kr()))}break;case 13:ki(function(){var r=Xn(t,1);if(r!==null){var i=St();cn(r,t,1,i)}}),Ff(t,1)}};of=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=St();cn(e,t,134217728,n)}Ff(t,134217728)}};ov=function(t){if(t.tag===13){var e=xr(t),n=Xn(t,e);if(n!==null){var r=St();cn(n,t,e,r)}Ff(t,e)}};av=function(){return _e};lv=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Mh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uu(r);if(!i)throw Error(F(90));j_(r),Ph(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};K_=Df;Q_=ki;var cS={usingClientEntryPoint:!1,Events:[ha,es,Uu,q_,G_,Df]},lo={findFiberByHostInstance:ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y_(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Mu=cl.inject(hS),In=cl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(F(200));return aS(t,e,null,n)};Wt.createRoot=function(t,e){if(!Uf(t))throw Error(F(299));var n=!1,r="",i=x0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new jf(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Y_(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return ki(t)};Wt.hydrate=function(t,e,n){if(!Qu(e))throw Error(F(200));return Ju(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=x0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ku(e)};Wt.render=function(t,e,n){if(!Qu(e))throw Error(F(200));return Ju(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(F(40));return t._reactRootContainer?(ki(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Df;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ju(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function N0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N0)}catch(t){console.error(t)}}N0(),N_.exports=Wt;var dS=N_.exports,xg=dS;Th.createRoot=xg.createRoot,Th.hydrateRoot=xg.hydrateRoot;const fS="modulepreload",pS=function(t){return"/"+t},Ng={},sr=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=pS(u),u in Ng)return;Ng[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":fS,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),bg=t=>{const e=gS(t);return e.charAt(0).toUpperCase()+e.slice(1)},b0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),yS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>z.createElement("svg",{ref:u,..._S,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:b0("lucide",i),...!s&&!yS(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>z.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const n=z.forwardRef(({className:r,...i},s)=>z.createElement(vS,{ref:s,iconNode:e,className:b0(`lucide-${mS(bg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=bg(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],ES=J("baby",wS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],Dg=J("bed-double",TS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],SS=J("bird",IS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],AS=J("book-open",kS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],D0=J("briefcase",CS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],PS=J("bus",RS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],V0=J("calendar",xS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],bS=J("cat",NS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],VS=J("chart-pie",DS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],MS=J("check",OS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Vg=J("chevron-down",LS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],jS=J("circle-check-big",FS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],zS=J("circle-dollar-sign",US);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Og=J("circle-question-mark",$S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],O0=J("coffee",BS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],M0=J("coins",HS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],qS=J("credit-card",WS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],KS=J("dog",GS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],JS=J("ellipsis",QS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],YS=J("fish",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],e2=J("gamepad-2",ZS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],n2=J("gamepad",t2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],L0=J("gift",r2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],s2=J("graduation-cap",i2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],F0=J("heart",o2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Co=J("house",a2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],u2=J("lock",l2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Mg=J("message-circle",c2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],j0=J("music",h2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],U0=J("plane",d2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],p2=J("plus",f2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]],g2=J("rabbit",m2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],_2=J("refresh-ccw",y2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],w2=J("refresh-cw",v2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],T2=J("search",E2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],S2=J("settings",I2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Lg=J("shield-check",k2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],md=J("shopping-bag",A2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],gd=J("smartphone",C2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],P2=J("sparkles",R2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Fg=J("sun",x2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],b2=J("ticket",N2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],jg=J("tram-front",D2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],O2=J("trash-2",V2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]],L2=J("turtle",M2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],j2=J("tv",F2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z0=J("user",U2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$2=J("users",z2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],yd=J("utensils",B2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],W2=J("wallet",H2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],G2=J("wrench",q2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=J("x",K2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$0=J("zap",Q2),J2=()=>{};var zg={};/**
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
 */const B0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},X2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new Y2;const m=s<<2|l>>4;if(r.push(m),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z2=function(t){const e=B0(t);return H0.encodeByteArray(e,!0)},fu=function(t){return Z2(t).replace(/\./g,"")},W0=function(t){try{return H0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tk=()=>ek().__FIREBASE_DEFAULTS__,nk=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},Xu=()=>{try{return J2()||tk()||nk()||rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q0=t=>{var e,n;return(n=(e=Xu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ik=t=>{const e=q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G0=()=>{var t;return(t=Xu())===null||t===void 0?void 0:t.config},K0=t=>{var e;return(e=Xu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Q0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ok(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}const Ro={};function ak(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ro))Ro[e]?t.emulator.push(e):t.prod.push(e);return t}function lk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $g=!1;function J0(t,e){if(typeof window>"u"||typeof document>"u"||!Ms(window.location.host)||Ro[t]===e||Ro[t]||$g)return;Ro[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=ak().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{$g=!0,o()},m}function f(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=lk(r),S=n("text"),R=document.getElementById(S)||document.createElement("span"),x=n("learnmore"),V=document.getElementById(x)||document.createElement("a"),k=n("preprendIcon"),w=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(V,x);const b=h();u(w,k),A.append(w,R,V,b),document.body.appendChild(A)}s?(R.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function ck(){var t;const e=(t=Xu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pk(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mk(){return!ck()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gk(){try{return typeof indexedDB=="object"}catch{return!1}}function yk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _k="FirebaseError";class or extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_k,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new or(i,l,r)}}function vk(t,e){return t.replace(wk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wk=/\{\$([^}]+)}/g;function Ek(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ai(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!Ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tk(t,e){const n=new Ik(t,e);return n.subscribe.bind(n)}class Ik{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Ci{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class kk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ck(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ak(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ak(t){return t===ui?void 0:t}function Ck(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Pk={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},xk=ae.INFO,Nk={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=xk,this._logHandler=bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Dk=(t,e)=>e.some(n=>t instanceof n);let Hg,Wg;function Vk(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ok(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X0=new WeakMap,_d=new WeakMap,Y0=new WeakMap,lh=new WeakMap,$f=new WeakMap;function Mk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X0.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function Lk(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fk(t){vd=t(vd)}function jk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return Y0.set(r,e.sort?e.sort():[e]),br(r)}:Ok().includes(t)?function(...e){return t.apply(uh(this),e),br(X0.get(this))}:function(...e){return br(t.apply(uh(this),e))}}function Uk(t){return typeof t=="function"?jk(t):(t instanceof IDBTransaction&&Lk(t),Dk(t,Vk())?new Proxy(t,vd):t)}function br(t){if(t instanceof IDBRequest)return Mk(t);if(lh.has(t))return lh.get(t);const e=Uk(t);return e!==t&&(lh.set(t,e),$f.set(e,t)),e}const uh=t=>$f.get(t);function zk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $k=["get","getKey","getAll","getAllKeys","count"],Bk=["put","add","delete","clear"],ch=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Bk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$k.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ch.set(e,s),s}Fk(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
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
 */class Hk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",Gg="0.13.2";/**
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
 */const Zn=new zf("@firebase/app"),qk="@firebase/app-compat",Gk="@firebase/analytics-compat",Kk="@firebase/analytics",Qk="@firebase/app-check-compat",Jk="@firebase/app-check",Xk="@firebase/auth",Yk="@firebase/auth-compat",Zk="@firebase/database",eA="@firebase/data-connect",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",iA="@firebase/installations",sA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",uA="@firebase/performance-compat",cA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/ai",gA="@firebase/firestore-compat",yA="firebase",_A="11.10.0";/**
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
 */const Ed="[DEFAULT]",vA={[wd]:"fire-core",[qk]:"fire-core-compat",[Kk]:"fire-analytics",[Gk]:"fire-analytics-compat",[Jk]:"fire-app-check",[Qk]:"fire-app-check-compat",[Xk]:"fire-auth",[Yk]:"fire-auth-compat",[Zk]:"fire-rtdb",[eA]:"fire-data-connect",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[iA]:"fire-iid",[sA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[uA]:"fire-perf-compat",[cA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
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
 */const pu=new Map,wA=new Map,Td=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Td.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,t);for(const n of pu.values())Kg(n,t);for(const n of wA.values())Kg(n,t);return!0}function Bf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t==null?!1:t.settings!==void 0}/**
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
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new fa("app","Firebase",EA);/**
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
 */class TA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=_A;function Z0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=G0()),!n)throw Dr.create("no-options");const s=pu.get(i);if(s){if(Ai(n,s.options)&&Ai(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new Rk(i);for(const u of Td.values())o.addComponent(u);const l=new TA(n,r,o);return pu.set(i,l),l}function e1(t=Ed){const e=pu.get(t);if(!e&&t===Ed&&G0())return Z0();if(!e)throw Dr.create("no-app",{appName:t});return e}function Vr(t,e,n){var r;let i=(r=vA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}As(new Ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IA="firebase-heartbeat-database",SA=1,Yo="firebase-heartbeat-store";let hh=null;function t1(){return hh||(hh=zk(IA,SA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),hh}async function kA(t){try{const n=(await t1()).transaction(Yo),r=await n.objectStore(Yo).get(n1(t));return await n.done,r}catch(e){if(e instanceof or)Zn.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Qg(t,e){try{const r=(await t1()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,n1(t)),await r.done}catch(n){if(n instanceof or)Zn.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function n1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AA=1024,CA=30;class RA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>CA){const o=NA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jg(),{heartbeatsToSend:r,unsentEntries:i}=PA(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function Jg(){return new Date().toISOString().substring(0,10)}function PA(t,e=AA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gk()?yk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xg(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}function NA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function bA(t){As(new Ci("platform-logger",e=>new Hk(e),"PRIVATE")),As(new Ci("heartbeat",e=>new RA(e),"PRIVATE")),Vr(wd,Gg,t),Vr(wd,Gg,"esm2017"),Vr("fire-js","")}bA("");function Hf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function r1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DA=r1,i1=new fa("auth","Firebase",r1());/**
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
 */const mu=new zf("@firebase/auth");function VA(t,...e){mu.logLevel<=ae.WARN&&mu.warn(`Auth (${Ls}): ${t}`,...e)}function bl(t,...e){mu.logLevel<=ae.ERROR&&mu.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw qf(t,...e)}function hn(t,...e){return qf(t,...e)}function Wf(t,e,n){const r=Object.assign(Object.assign({},DA()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function yi(t){return Wf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xn(t,"argument-error"),Wf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i1.create(t,...e)}function ee(t,e,...n){if(!t)throw qf(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function er(t,e){t||Wn(e)}/**
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
 */function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MA(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MA()||dk()||"connection"in navigator)?navigator.onLine:!0}function FA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=uk()||fk()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gf(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class s1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zA=new ma(3e4,6e4);function Kf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,i={}){return o1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return hk()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(h.credentials="include"),s1.fetch()(await a1(t,t.config.apiHost,n,l),h)})}async function o1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jA),e);try{const i=new BA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wf(t,f,h);xn(t,f)}}catch(i){if(i instanceof or)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function $A(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function a1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Gf(t.config,i):`${t.config.apiScheme}://${i}`;return UA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class BA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),zA.get())})}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function HA(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function gu(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Qf(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(dh(i.auth_time)),issuedAtTime:Po(dh(i.iat)),expirationTime:Po(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zg(t){const e=Qf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof or&&qA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zo(t,gu(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?l1(s.providerUserInfo):[],l=QA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function KA(t){const e=ze(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function l1(t){return t.map(e=>{var{providerId:n}=e,r=Hf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JA(t,e){const n=await o1(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await a1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(u.credentials="include"),s1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XA(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",Kf(t,e))}/**
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
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function fr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WA(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await Zo(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:b,isAnonymous:j,providerData:L,stsTokenManager:_}=n;ee(A&&_,e,"internal-error");const g=fs.fromJSON(this.name,_);ee(typeof A=="string",e,"internal-error"),fr(p,e.name),fr(m,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),fr(S,e.name),fr(R,e.name),fr(x,e.name),fr(V,e.name),fr(k,e.name),fr(w,e.name);const v=new ln({uid:A,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:j,photoURL:R,phoneNumber:S,tenantId:x,stsTokenManager:g,createdAt:k,lastLoginAt:w});return L&&Array.isArray(L)&&(v.providerData=L.map(E=>Object.assign({},E))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?l1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new fs;l.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const ey=new Map;function qn(t){er(t instanceof Function,"Expected a class definition");let e=ey.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ey.set(t,e),e)}/**
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
 */class u1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u1.type="NONE";const ty=u1;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gu(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(qn(ty),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||qn(ty);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await gu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await ln._fromGetAccountInfoResponse(e,m,f)}else p=ln._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ps(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ps(s,e,r))}}/**
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
 */function ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m1(e))return"Blackberry";if(g1(e))return"Webos";if(h1(e))return"Safari";if((e.includes("chrome/")||d1(e))&&!e.includes("edge/"))return"Chrome";if(p1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c1(t=wt()){return/firefox\//i.test(t)}function h1(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d1(t=wt()){return/crios\//i.test(t)}function f1(t=wt()){return/iemobile/i.test(t)}function p1(t=wt()){return/android/i.test(t)}function m1(t=wt()){return/blackberry/i.test(t)}function g1(t=wt()){return/webos/i.test(t)}function Jf(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YA(t=wt()){var e;return Jf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZA(){return pk()&&document.documentMode===10}function y1(t=wt()){return Jf(t)||p1(t)||g1(t)||m1(t)||/windows phone/i.test(t)||f1(t)}/**
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
 */function _1(t,e=[]){let n;switch(t){case"Browser":n=ny(wt());break;case"Worker":n=`${ny(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class eC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tC(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",Kf(t,e))}/**
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
 */const nC=6;class rC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class iC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new eC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gu(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(yi(this));const n=e?ze(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tC(this),n=new rC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yu(t){return ze(t)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tk(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sC(t){Xf=t}function oC(t){return Xf.loadJS(t)}function aC(){return Xf.gapiScript}function lC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function uC(t,e){const n=Bf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ai(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function cC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hC(t,e,n){const r=Yu(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=v1(e),{host:o,port:l}=dC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Ai(h,r.config.emulator)&&Ai(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ms(o)?(Q0(`${s}//${o}${u}`),J0("Auth",!0)):fC()}function v1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dC(t){const e=v1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iy(o)}}}function iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class w1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}/**
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
 */async function ms(t,e){return $A(t,"POST","/v1/accounts:signInWithIdp",Kf(t,e))}/**
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
 */const pC="http://localhost";class Ri extends w1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */class Yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends Yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _r extends ga{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
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
 */class $n extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class vr extends ga{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class wr extends ga{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=sy(r);return new Cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sy(r);return new Cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _u extends or{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _u(e,n,r,i)}}function E1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,s,e,r):s})}async function mC(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function gC(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(yi(r));const i="reauthenticate";try{const s=await Zo(t,E1(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Qf(s.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),Cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
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
 */async function yC(t,e,n=!1){if(an(t.app))return Promise.reject(yi(t));const r="signIn",i=await E1(t,r,e),s=await Cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function _C(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function vC(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function wC(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function EC(t){return ze(t).signOut()}async function TC(t){return ze(t).delete()}const vu="__sak";/**
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
 */class T1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,SC=10;class I1 extends T1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I1.type="LOCAL";const kC=I1;/**
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
 */class S1 extends T1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S1.type="SESSION";const k1=S1;/**
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
 */function AC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await AC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
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
 */function Zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Zf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function RC(t){kn().location.href=t}/**
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
 */function A1(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NC(){return A1()?self:null}/**
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
 */const C1="firebaseLocalStorageDb",bC=1,wu="firebaseLocalStorage",R1="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function DC(){const t=indexedDB.deleteDatabase(C1);return new ya(t).toPromise()}function kd(){const t=indexedDB.open(C1,bC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:R1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await DC(),e(await kd()))})})}async function oy(t,e,n){const r=ec(t,!0).put({[R1]:e,value:n});return new ya(r).toPromise()}async function VC(t,e){const n=ec(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function ay(t,e){const n=ec(t,!0).delete(e);return new ya(n).toPromise()}const OC=800,MC=3;class P1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(NC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await oy(e,vu,"1"),await ay(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ec(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P1.type="LOCAL";const LC=P1;new ma(3e4,6e4);/**
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
 */function x1(t,e){return e?qn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ep extends w1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FC(t){return yC(t.auth,new ep(t),t.bypassAuthState)}function jC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),gC(n,new ep(t),t.bypassAuthState)}async function UC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),mC(n,new ep(t),t.bypassAuthState)}/**
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
 */class N1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return UC;case"reauthViaPopup":case"reauthViaRedirect":return jC;default:xn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zC=new ma(2e3,1e4);async function $C(t,e,n){if(an(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const r=Yu(t);OA(t,e,Yf);const i=x1(r,n);return new fi(r,"signInViaPopup",e,i).executeNotNull()}class fi extends N1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zC.get())};e()}}fi.currentPopupAction=null;/**
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
 */const BC="pendingRedirect",Vl=new Map;class HC extends N1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await WC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(t,e){const n=KC(e),r=GC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qC(t,e){Vl.set(t._key(),e)}function GC(t){return qn(t._redirectPersistence)}function KC(t){return Dl(BC,t.config.apiKey,t.name)}async function QC(t,e,n=!1){if(an(t.app))return Promise.reject(yi(t));const r=Yu(t),i=x1(r,e),o=await new HC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const JC=10*60*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b1(t);default:return!1}}/**
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
 */async function ZC(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
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
 */const eR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function nR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZC(t);for(const n of e)try{if(rR(n))return}catch{}xn(t,"unauthorized-domain")}function rR(t){const e=Id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tR.test(n))return!1;if(eR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iR=new ma(3e4,6e4);function uy(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sR(t){return new Promise((e,n)=>{var r,i,s;function o(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),n(hn(t,"network-request-failed"))},timeout:iR.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const l=lC("iframefcb");return kn()[l]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},oC(`${aC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function oR(t){return Ol=Ol||sR(t),Ol}/**
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
 */const aR=new ma(5e3,15e3),lR="__/auth/iframe",uR="emulator/auth/iframe",cR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gf(e,uR):`https://${t.config.authDomain}/${lR}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=hR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function fR(t){const e=await oR(t),n=kn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:dR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=kn().setTimeout(()=>{s(o)},aR.get());function u(){kn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mR=500,gR=600,yR="_blank",_R="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vR(t,e,n,r=mR,i=gR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=wt().toLowerCase();n&&(l=d1(h)?yR:n),c1(h)&&(e=e||_R,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(YA(h)&&l!=="_self")return wR(e||"",l),new cy(null);const p=window.open(e||"",l,f);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new cy(p)}function wR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ER="__/auth/handler",TR="emulator/auth/handler",IR=encodeURIComponent("fac");async function hy(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof Yf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ek(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ga){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${IR}=${encodeURIComponent(u)}`:"";return`${SR(t)}?${pa(l).slice(1)}${h}`}function SR({config:t}){return t.emulator?Gf(t,TR):`https://${t.authDomain}/${ER}`}/**
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
 */const fh="webStorageSupport";class kR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k1,this._completeRedirectFn=QC,this._overrideRedirectResult=qC}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hy(e,n,r,Id(),i);return vR(e,o,Zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hy(e,n,r,Id(),i);return RC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fR(e),r=new XC(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fh];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y1()||h1()||Jf()}}const AR=kR;var dy="@firebase/auth",fy="1.10.8";/**
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
 */class CR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PR(t){As(new Ci("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_1(t)},h=new iC(r,i,s,u);return cC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Ci("auth-internal",e=>{const n=Yu(e.getProvider("auth").getImmediate());return(r=>new CR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(dy,fy,RR(t)),Vr(dy,fy,"esm2017")}/**
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
 */const xR=5*60,NR=K0("authIdTokenMaxAge")||xR;let py=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NR)return;const i=n==null?void 0:n.token;py!==i&&(py=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D1(t=e1()){const e=Bf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uC(t,{popupRedirectResolver:AR,persistence:[LC,kC,k1]}),r=K0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bR(s.toString());vC(n,o,()=>o(n.currentUser)),_C(n,l=>o(l))}}const i=q0("auth");return i&&hC(n,`http://${i}`),n}function DR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PR("Browser");var VR="firebase",OR="11.10.0";/**
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
 */Vr(VR,OR,"app");var my=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,V1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function v(){}v.prototype=g.prototype,_.D=g.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(E,I,C){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return g.prototype[I].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=_.g[0],v=_.g[1],I=_.g[2];var C=_.g[3],T=g+(C^v&(I^C))+E[0]+3614090360&4294967295;g=v+(T<<7&4294967295|T>>>25),T=C+(I^g&(v^I))+E[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=I+(v^C&(g^v))+E[2]+606105819&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(g^I&(C^g))+E[3]+3250441966&4294967295,v=I+(T<<22&4294967295|T>>>10),T=g+(C^v&(I^C))+E[4]+4118548399&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(I^g&(v^I))+E[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=I+(v^C&(g^v))+E[6]+2821735955&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(g^I&(C^g))+E[7]+4249261313&4294967295,v=I+(T<<22&4294967295|T>>>10),T=g+(C^v&(I^C))+E[8]+1770035416&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(I^g&(v^I))+E[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=I+(v^C&(g^v))+E[10]+4294925233&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(g^I&(C^g))+E[11]+2304563134&4294967295,v=I+(T<<22&4294967295|T>>>10),T=g+(C^v&(I^C))+E[12]+1804603682&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(I^g&(v^I))+E[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=I+(v^C&(g^v))+E[14]+2792965006&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(g^I&(C^g))+E[15]+1236535329&4294967295,v=I+(T<<22&4294967295|T>>>10),T=g+(I^C&(v^I))+E[1]+4129170786&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(g^v))+E[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=I+(g^v&(C^g))+E[11]+643717713&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(I^C))+E[0]+3921069994&4294967295,v=I+(T<<20&4294967295|T>>>12),T=g+(I^C&(v^I))+E[5]+3593408605&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(g^v))+E[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=I+(g^v&(C^g))+E[15]+3634488961&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(I^C))+E[4]+3889429448&4294967295,v=I+(T<<20&4294967295|T>>>12),T=g+(I^C&(v^I))+E[9]+568446438&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(g^v))+E[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=I+(g^v&(C^g))+E[3]+4107603335&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(I^C))+E[8]+1163531501&4294967295,v=I+(T<<20&4294967295|T>>>12),T=g+(I^C&(v^I))+E[13]+2850285829&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(g^v))+E[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=I+(g^v&(C^g))+E[7]+1735328473&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(I^C))+E[12]+2368359562&4294967295,v=I+(T<<20&4294967295|T>>>12),T=g+(v^I^C)+E[5]+4294588738&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^I)+E[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=I+(C^g^v)+E[11]+1839030562&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^g)+E[14]+4259657740&4294967295,v=I+(T<<23&4294967295|T>>>9),T=g+(v^I^C)+E[1]+2763975236&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^I)+E[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=I+(C^g^v)+E[7]+4139469664&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^g)+E[10]+3200236656&4294967295,v=I+(T<<23&4294967295|T>>>9),T=g+(v^I^C)+E[13]+681279174&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^I)+E[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=I+(C^g^v)+E[3]+3572445317&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^g)+E[6]+76029189&4294967295,v=I+(T<<23&4294967295|T>>>9),T=g+(v^I^C)+E[9]+3654602809&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^I)+E[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=I+(C^g^v)+E[15]+530742520&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^g)+E[2]+3299628645&4294967295,v=I+(T<<23&4294967295|T>>>9),T=g+(I^(v|~C))+E[0]+4096336452&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~I))+E[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=I+(g^(C|~v))+E[14]+2878612391&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~g))+E[5]+4237533241&4294967295,v=I+(T<<21&4294967295|T>>>11),T=g+(I^(v|~C))+E[12]+1700485571&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~I))+E[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=I+(g^(C|~v))+E[10]+4293915773&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~g))+E[1]+2240044497&4294967295,v=I+(T<<21&4294967295|T>>>11),T=g+(I^(v|~C))+E[8]+1873313359&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~I))+E[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=I+(g^(C|~v))+E[6]+2734768916&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~g))+E[13]+1309151649&4294967295,v=I+(T<<21&4294967295|T>>>11),T=g+(I^(v|~C))+E[4]+4149444226&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~I))+E[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=I+(g^(C|~v))+E[2]+718787259&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~g))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var v=g-this.blockSize,E=this.B,I=this.h,C=0;C<g;){if(I==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<g;)if(E[I++]=_.charCodeAt(C++),I==this.blockSize){i(this,E),I=0;break}}else for(;C<g;)if(E[I++]=_[C++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var v=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=v&255,v/=256;for(this.u(_),_=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)_[v++]=this.g[g]>>>E&255;return _};function s(_,g){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=g(_)}function o(_,g){this.h=g;for(var v=[],E=!0,I=_.length-1;0<=I;I--){var C=_[I]|0;E&&C==g||(v[I]=C,E=!1)}this.g=v}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return V(h(-_));for(var g=[],v=1,E=0;_>=v;E++)g[E]=_/v|0,v*=4294967296;return new o(g,0)}function f(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return V(f(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=p,I=0;I<_.length;I+=8){var C=Math.min(8,_.length-I),T=parseInt(_.substring(I,I+C),g);8>C?(C=h(Math.pow(g,C)),E=E.j(C).add(h(T))):(E=E.j(v),E=E.add(h(T)))}return E}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-V(this).m();for(var _=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);_+=(0<=E?E:4294967296+E)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(x(this))return"-"+V(this).toString(_);for(var g=h(Math.pow(_,6)),v=this,E="";;){var I=b(v,g).g;v=k(v,I.j(g));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=I,R(v))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=k(this,_),x(_)?-1:R(_)?0:1};function V(_){for(var g=_.g.length,v=[],E=0;E<g;E++)v[E]=~_.g[E];return new o(v,~_.h).add(m)}t.abs=function(){return x(this)?V(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],E=0,I=0;I<=g;I++){var C=E+(this.i(I)&65535)+(_.i(I)&65535),T=(C>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);E=T>>>16,C&=65535,T&=65535,v[I]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(_,g){return _.add(V(g))}t.j=function(_){if(R(this)||R(_))return p;if(x(this))return x(_)?V(this).j(V(_)):V(V(this).j(_));if(x(_))return V(this.j(V(_)));if(0>this.l(S)&&0>_.l(S))return h(this.m()*_.m());for(var g=this.g.length+_.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<_.g.length;I++){var C=this.i(E)>>>16,T=this.i(E)&65535,ge=_.i(I)>>>16,Re=_.i(I)&65535;v[2*E+2*I]+=T*Re,w(v,2*E+2*I),v[2*E+2*I+1]+=C*Re,w(v,2*E+2*I+1),v[2*E+2*I+1]+=T*ge,w(v,2*E+2*I+1),v[2*E+2*I+2]+=C*ge,w(v,2*E+2*I+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function w(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function A(_,g){this.g=_,this.h=g}function b(_,g){if(R(g))throw Error("division by zero");if(R(_))return new A(p,p);if(x(_))return g=b(V(_),g),new A(V(g.g),V(g.h));if(x(g))return g=b(_,V(g)),new A(V(g.g),g.h);if(30<_.g.length){if(x(_)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(_);)v=j(v),E=j(E);var I=L(v,1),C=L(E,1);for(E=L(E,2),v=L(v,2);!R(E);){var T=C.add(E);0>=T.l(_)&&(I=I.add(v),C=T),E=L(E,1),v=L(v,1)}return g=k(_,I.j(g)),new A(I,g)}for(I=p;0<=_.l(g);){for(v=Math.max(1,Math.floor(_.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(v),T=C.j(g);x(T)||0<T.l(_);)v-=E,C=h(v),T=C.j(g);R(C)&&(C=m),I=I.add(C),_=k(_,T)}return new A(I,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&_.i(E);return new o(v,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|_.i(E);return new o(v,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^_.i(E);return new o(v,this.h^_.h)};function j(_){for(var g=_.g.length+1,v=[],E=0;E<g;E++)v[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(v,_.h)}function L(_,g){var v=g>>5;g%=32;for(var E=_.g.length-v,I=[],C=0;C<E;C++)I[C]=0<g?_.i(C+v)>>>g|_.i(C+v+1)<<32-g:_.i(C+v);return new o(I,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,V1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Or=o}).apply(typeof my<"u"?my:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O1,po,M1,Ml,Ad,L1,F1,j1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,D){for(var $=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)$[ve-2]=arguments[ve];return c.prototype[N].apply(y,$)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const N=a.length||0,D=y.length||0;a.length=N+D;for(let $=0;$<D;$++)a[N+$]=y[$]}else a.push(y)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function I(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ge{constructor(){this.h=this.g=null}add(c,d){const y=Re.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var Re=new k(()=>new lt,a=>a.reset());class lt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,B=!1,G=new ge,K=()=>{const a=l.Promise.resolve(void 0);Ge=()=>{a.then(ie)}};var ie=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var c=Re;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var $e=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function ut(a,c){if(fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{b(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ut.aa.h.call(this)}}R(ut,fe);var ct={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),Mi=0;function Xr(a,c,d,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=N,this.key=++Mi,this.da=this.fa=!1}function pn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function en(a){this.src=a,this.g={},this.h=0}en.prototype.add=function(a,c,d,y,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=mn(a,c,y,N);return-1<$?(c=a[$],d||(c.fa=!1)):(c=new Xr(c,this.src,D,!!y,N),c.fa=d,a.push(c)),c};function bn(a,c){var d=c.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,c,void 0),D;(D=0<=N)&&Array.prototype.splice.call(y,N,1),D&&(pn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mn(a,c,d,y){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==y)return N}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),Dn={};function Yr(a,c,d,y,N){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Yr(a,c[D],d,y,N);return null}return d=ue(d),a&&a[Mt]?a.K(c,d,h(y)?!!y.capture:!1,N):Li(a,c,d,!1,y,N)}function Li(a,c,d,y,N,D){if(!c)throw Error("Invalid event type");var $=h(N)?!!N.capture:!!N,ve=Lt(a);if(ve||(a[ar]=ve=new en(a)),d=ve.add(c,d,y,$,D),d.proxy)return d;if(y=Zr(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)$e||(N=$),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(ei(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Zr(){function a(d){return c.call(a.src,a.listener,d)}const c=Fi;return a}function Vn(a,c,d,y,N){if(Array.isArray(c))for(var D=0;D<c.length;D++)Vn(a,c[D],d,y,N);else y=h(y)?!!y.capture:!!y,d=ue(d),a&&a[Mt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=mn(D,d,y,N),-1<d&&(pn(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Lt(a))&&(c=a.g[c.toString()],a=-1,c&&(a=mn(c,d,y,N)),(d=-1<a?c[a]:null)&&On(d))}function On(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Mt])bn(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(ei(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Lt(c))?(bn(d,a),d.h==0&&(d.src=null,c[ar]=null)):pn(a)}}}function ei(a){return a in Dn?Dn[a]:Dn[a]="on"+a}function Fi(a,c){if(a.da)a=!0;else{c=new ut(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&On(a),a=d.call(y,c)}return a}function Lt(a){return a=a[ar],a instanceof en?a:null}var U="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[U]||(a[U]=function(c){return a.handleEvent(c)}),a[U])}function ce(){re.call(this),this.i=new en(this),this.M=this,this.F=null}R(ce,re),ce.prototype[Mt]=!0,ce.prototype.removeEventListener=function(a,c,d,y){Vn(this,a,c,d,y)};function we(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new fe(c,a);else if(c instanceof fe)c.target=c.target||a;else{var N=c;c=new fe(y,a),E(c,N)}if(N=!0,d)for(var D=d.length-1;0<=D;D--){var $=c.g=d[D];N=Fe($,y,!0,c)&&N}if($=c.g=a,N=Fe($,y,!0,c)&&N,N=Fe($,y,!1,c)&&N,d)for(D=0;D<d.length;D++)$=c.g=d[D],N=Fe($,y,!1,c)&&N}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)pn(d[y]);delete a.g[c],a.h--}}this.F=null},ce.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},ce.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function Fe(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,D=0;D<c.length;++D){var $=c[D];if($&&!$.da&&$.capture==d){var ve=$.listener,tt=$.ha||$.src;$.fa&&bn(a.i,$),N=ve.call(tt,y)!==!1&&N}}return N&&!y.defaultPrevented}function ji(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Bs(a){a.g=ji(()=>{a.g=null,a.i&&(a.i=!1,Bs(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class vc extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(a){re.call(this),this.h=a,this.g={}}R(ti,re);var Ra=[];function Pa(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&On(c)},a),a.g={}}ti.prototype.N=function(){ti.aa.N.call(this),Pa(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=l.JSON.stringify,wc=l.JSON.parse,Ec=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ws(){}Ws.prototype.h=null;function xa(a){return a.h||(a.h=a.i())}function Na(){}var ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ba(){fe.call(this,"d")}R(ba,fe);function qs(){fe.call(this,"c")}R(qs,fe);var Mn={},Da=null;function X(){return Da=Da||new ce}Mn.La="serverreachability";function Pe(a){fe.call(this,Mn.La,a)}R(Pe,fe);function gn(a){const c=X();we(c,new Pe(c))}Mn.STAT_EVENT="statevent";function Ln(a,c){fe.call(this,Mn.STAT_EVENT,a),this.stat=c}R(Ln,fe);function Ie(a){const c=X();we(c,new Ln(c,a))}Mn.Ma="timingevent";function yn(a,c){fe.call(this,Mn.Ma,a),this.size=c}R(yn,fe);function ri(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function Tc(a,c,d,y,N,D){a.info(function(){if(a.g)if(D)for(var $="",ve=D.split("&"),tt=0;tt<ve.length;tt++){var pe=ve[tt].split("=");if(1<pe.length){var ht=pe[0];pe=pe[1];var dt=ht.split("_");$=2<=dt.length&&dt[1]=="type"?$+(ht+"="+pe+"&"):$+(ht+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+d+`
`+$})}function yE(a,c,d,y,N,D,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+d+`
`+D+" "+$})}function Ui(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+vE(a,d)+(y?" "+y:"")})}function _E(a,c){a.info(function(){return"TIMEOUT: "+c})}lr.prototype.info=function(){};function vE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return Hs(d)}catch{return c}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ic;function Oa(){}R(Oa,Ws),Oa.prototype.g=function(){return new XMLHttpRequest},Oa.prototype.i=function(){return{}},Ic=new Oa;function ur(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fp}function Fp(){this.i=null,this.g="",this.h=!1}var jp={},Sc={};function kc(a,c,d){a.L=1,a.v=ja(Fn(c)),a.m=d,a.P=!0,Up(a,null)}function Up(a,c){a.F=Date.now(),Ma(a),a.A=Fn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),em(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Fp,a.g=_m(a.j,d?c:null,!a.m),0<a.O&&(a.M=new vc(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ra[0]=N.toString()),N=Ra);for(var D=0;D<N.length;D++){var $=Yr(d,N[D],y||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),gn(),Tc(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const c=this.M;c&&jn(a)==3?c.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const dt=jn(this.g);var c=this.g.Ba();const Bi=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||am(this.g)))){this.J||dt!=4||c==7||(c==8||0>=Bi?gn(3):gn(2)),Ac(this);var d=this.g.Z();this.X=d;t:if(zp(this)){var y=am(this.g);a="";var N=y.length,D=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Gs(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(D&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,yE(this.i,this.u,this.A,this.l,this.R,dt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,tt=this.g;if((ve=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ve)){var pe=ve;break t}}pe=null}if(d=pe)Ui(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cc(this,d);else{this.o=!1,this.s=3,Ie(12),ii(this),Gs(this);break e}}if(this.P){d=!0;let tn;for(;!this.J&&this.C<$.length;)if(tn=wE(this,$),tn==Sc){dt==4&&(this.s=4,Ie(14),d=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==jp){this.s=4,Ie(15),Ui(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Ui(this.i,this.l,tn,null),Cc(this,tn);if(zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||$.length!=0||this.h.h||(this.s=1,Ie(16),d=!1),this.o=this.o&&d,!d)Ui(this.i,this.l,$,"[Invalid Chunked Response]"),ii(this),Gs(this);else if(0<$.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Dc(ht),ht.M=!0,Ie(11))}}else Ui(this.i,this.l,$,null),Cc(this,$);dt==4&&ii(this),this.o&&!this.J&&(dt==4?pm(this.j,this):(this.o=!1,Ma(this)))}else LE(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),ii(this),Gs(this)}}}catch{}finally{}};function zp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Sc:(d=Number(c.substring(d,y)),isNaN(d)?jp:(y+=1,y+d>c.length?Sc:(c=c.slice(y,y+d),a.C=y+d,c)))}ur.prototype.cancel=function(){this.J=!0,ii(this)};function Ma(a){a.S=Date.now()+a.I,$p(a,a.I)}function $p(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ri(m(a.ba,a),c)}function Ac(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_E(this.i,this.A),this.L!=2&&(gn(),Ie(17)),ii(this),this.s=2,Gs(this)):$p(this,this.S-a)};function Gs(a){a.j.G==0||a.J||pm(a.j,a)}function ii(a){Ac(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Pa(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Cc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Rc(d.h,a))){if(!a.K&&Rc(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wa(d),Ba(d);else break e;bc(d),Ie(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=ri(m(d.Za,d),6e3));if(1>=Wp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else oi(d,11)}else if((a.K||d.g==a)&&Wa(d),!w(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let pe=N[c];if(d.T=pe[0],pe=pe[1],d.G==2)if(pe[0]=="c"){d.K=pe[1],d.ia=pe[2];const ht=pe[3];ht!=null&&(d.la=ht,d.j.info("VER="+d.la));const dt=pe[4];dt!=null&&(d.Aa=dt,d.j.info("SVER="+d.Aa));const Bi=pe[5];Bi!=null&&typeof Bi=="number"&&0<Bi&&(y=1.5*Bi,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const tn=a.g;if(tn){const Ga=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var D=y.h;D.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pc(D,D.h),D.h=null))}if(y.D){const Vc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vc&&(y.ya=Vc,Se(y.I,y.D,Vc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var $=a;if(y.qa=ym(y,y.J?y.ia:null,y.W),$.K){qp(y.h,$);var ve=$,tt=y.L;tt&&(ve.I=tt),ve.B&&(Ac(ve),Ma(ve)),y.g=$}else dm(y);0<d.i.length&&Ha(d)}else pe[0]!="stop"&&pe[0]!="close"||oi(d,7);else d.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?oi(d,7):Nc(d):pe[0]!="noop"&&d.l&&d.l.ta(pe),d.v=0)}}gn(4)}catch{}}var EE=class{constructor(a,c){this.g=a,this.map=c}};function Bp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wp(a){return a.h?1:a.g?a.g.size:0}function Rc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Pc(a,c){a.g?a.g.add(c):a.h=c}function qp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Bp.prototype.cancel=function(){if(this.i=Gp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function TE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function IE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function Kp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=IE(a),y=TE(a),N=y.length,D=0;D<N;D++)c.call(void 0,y[D],d&&d[D],a)}var Qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var D=a[d].substring(0,y);N=a[d].substring(y+1)}else D=a[d];c(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function si(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof si){this.h=a.h,La(this,a.j),this.o=a.o,this.g=a.g,Fa(this,a.s),this.l=a.l;var c=a.i,d=new Js;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Jp(this,d),this.m=a.m}else a&&(c=String(a).match(Qp))?(this.h=!1,La(this,c[1]||"",!0),this.o=Ks(c[2]||""),this.g=Ks(c[3]||"",!0),Fa(this,c[4]),this.l=Ks(c[5]||"",!0),Jp(this,c[6]||"",!0),this.m=Ks(c[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}si.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Qs(c,Xp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Qs(c,Xp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qs(d,d.charAt(0)=="/"?CE:AE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qs(d,PE)),a.join("")};function Fn(a){return new si(a)}function La(a,c,d){a.j=d?Ks(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Fa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Jp(a,c,d){c instanceof Js?(a.i=c,xE(a.i,a.h)):(d||(c=Qs(c,RE)),a.i=new Js(c,a.h))}function Se(a,c,d){a.i.set(c,d)}function ja(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ks(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,kE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xp=/[#\/\?@]/g,AE=/[#\?:]/g,CE=/[#\?]/g,RE=/[#\?@]/g,PE=/#/g;function Js(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&SE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Js.prototype,t.add=function(a,c){cr(this),this.i=null,a=zi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Yp(a,c){cr(a),c=zi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zp(a,c){return cr(a),c=zi(a,c),a.g.has(c)}t.forEach=function(a,c){cr(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const N=a[y];for(let D=0;D<N.length;D++)d.push(c[y])}return d},t.V=function(a){cr(this);let c=[];if(typeof a=="string")Zp(this,a)&&(c=c.concat(this.g.get(zi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return cr(this),this.i=null,a=zi(this,a),Zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function em(a,c,d){Yp(a,c),0<d.length&&(a.i=null,a.g.set(zi(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const D=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var N=D;$[y]!==""&&(N+="="+encodeURIComponent(String($[y]))),a.push(N)}}return this.i=a.join("&")};function zi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function xE(a,c){c&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(Yp(this,y),em(this,N,d))},a)),a.j=c}function NE(a,c){const d=new lr;if(l.Image){const y=new Image;y.onload=S(hr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=S(hr,d,"TestLoadImage: error",!1,c,y),y.onabort=S(hr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=S(hr,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function bE(a,c){const d=new lr,y=new AbortController,N=setTimeout(()=>{y.abort(),hr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(N),D.ok?hr(d,"TestPingServer: ok",!0,c):hr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),hr(d,"TestPingServer: error",!1,c)})}function hr(a,c,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function DE(){this.g=new Ec}function VE(a,c,d){const y=d||"";try{Kp(a,function(N,D){let $=N;h(N)&&($=Hs(N)),c.push(y+D+"="+encodeURIComponent($))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ua,Ws),Ua.prototype.g=function(){return new za(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function za(a,c){ce.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(za,ce),t=za.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Xs(this):Ys(this),this.readyState==3&&tm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Xs(this))},t.Qa=function(a){this.g&&(this.response=a,Xs(this))},t.ga=function(){this.g&&Xs(this)};function Xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function nm(a){let c="";return L(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function xc(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=nm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Se(a,c,d))}function Oe(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Oe,ce);var OE=/^https?$/i,ME=["POST","PUT"];t=Oe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ic.g(),this.v=this.o?xa(this.o):xa(Ic),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){rm(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ME,c,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of d)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{om(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){rm(this,D)}};function rm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,im(a),$a(a)}function im(a){a.A||(a.A=!0,we(a,"complete"),we(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,we(this,"complete"),we(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sm(this):this.bb())},t.bb=function(){sm(this)};function sm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)ji(a.Ea,0,a);else if(we(a,"readystatechange"),jn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=$===0){var N=String(a.D).match(Qp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!OE.test(N?N.toLowerCase():"")}d=y}if(d)we(a,"complete"),we(a,"success");else{a.m=6;try{var D=2<jn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",im(a)}}finally{$a(a)}}}}function $a(a,c){if(a.g){om(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||we(a,"ready");try{d.onreadystatechange=y}catch{}}}function om(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),wc(c)}};function am(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LE(a){const c={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var d=I(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[N]||[];c[N]=D,D.push(d)}_(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function lm(a){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bp(a&&a.concurrentRequestLimit),this.Da=new DE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){Ie(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=ym(this,null,this.W),Ha(this)};function Nc(a){if(um(a),a.G==3){var c=a.U++,d=Fn(a.I);if(Se(d,"SID",a.K),Se(d,"RID",c),Se(d,"TYPE","terminate"),eo(a,d),c=new ur(a,a.j,c),c.L=2,c.v=ja(Fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=_m(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ma(c)}gm(a)}function Ba(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function um(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ha(a){if(!Hp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ge||K(),B||(Ge(),B=!0),G.add(c,a),a.B=0}}function FE(a,c){return Wp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ri(m(a.Ga,a,c),mm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new ur(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hm(this,N,c),d=Fn(this.I),Se(d,"RID",a),Se(d,"CVER",22),this.D&&Se(d,"X-HTTP-Session-Id",this.D),eo(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(nm(D)))+"&"+c:this.m&&xc(d,this.m,D)),Pc(this.h,N),this.Ua&&Se(d,"TYPE","init"),this.P?(Se(d,"$req",c),Se(d,"SID","null"),N.T=!0,kc(N,d,null)):kc(N,d,c),this.G=2}}else this.G==3&&(a?cm(this,a):this.i.length==0||Hp(this.h)||cm(this))};function cm(a,c){var d;c?d=c.l:d=a.U++;const y=Fn(a.I);Se(y,"SID",a.K),Se(y,"RID",d),Se(y,"AID",a.T),eo(a,y),a.m&&a.o&&xc(y,a.m,a.o),d=new ur(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=hm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pc(a.h,d),kc(d,y,c)}function eo(a,c){a.H&&L(a.H,function(d,y){Se(c,y,d)}),a.l&&Kp({},function(d,y){Se(c,y,d)})}function hm(a,c,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const $=["count="+d];D==-1?0<d?(D=N[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let ve=!0;for(let tt=0;tt<d;tt++){let pe=N[tt].g;const ht=N[tt].map;if(pe-=D,0>pe)D=Math.max(0,N[tt].g-100),ve=!1;else try{VE(ht,$,"req"+pe+"_")}catch{y&&y(ht)}}if(ve){y=$.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function dm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ge||K(),B||(Ge(),B=!0),G.add(c,a),a.v=0}}function bc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ri(m(a.Fa,a),mm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ri(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),Ba(this),fm(this))};function Dc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fm(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Fn(a.qa);Se(c,"RID","rpc"),Se(c,"SID",a.K),Se(c,"AID",a.T),Se(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(c,"TO",a.ja),Se(c,"TYPE","xmlhttp"),eo(a,c),a.m&&a.o&&xc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ja(Fn(c)),d.m=null,d.P=!0,Up(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),bc(this),Ie(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pm(a,c){var d=null;if(a.g==c){Wa(a),Dc(a),a.g=null;var y=2}else if(Rc(a.h,c))d=c.D,qp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=X(),we(y,new yn(y,d)),Ha(a)}else dm(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&FE(a,c)||y==2&&bc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function mm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function oi(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),y=a.Xa;const N=!y;y=new si(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||La(y,"https"),ja(y),N?NE(y.toString(),d):bE(y.toString(),d)}else Ie(2);a.G=0,a.l&&a.l.sa(c),gm(a),um(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function gm(a){if(a.G=0,a.ka=[],a.l){const c=Gp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ym(a,c,d){var y=d instanceof si?Fn(d):new si(d);if(y.g!="")c&&(y.g=c+"."+y.g),Fa(y,y.s);else{var N=l.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var D=new si(null);y&&La(D,y),c&&(D.g=c),N&&Fa(D,N),d&&(D.l=d),y=D}return d=a.D,c=a.ya,d&&c&&Se(y,d,c),Se(y,"VER",a.la),eo(a,y),y}function _m(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Oe(new Ua({eb:d})):new Oe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vm(){}t=vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qa(){}qa.prototype.g=function(a,c){return new Ft(a,c)};function Ft(a,c){ce.call(this),this.g=new lm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $i(this)}R(Ft,ce),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Nc(this.g)},Ft.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Hs(a),a=d);c.i.push(new EE(c.Ya++,a)),c.G==3&&Ha(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Nc(this.g),delete this.g,Ft.aa.N.call(this)};function wm(a){ba.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(wm,ba);function Em(){qs.call(this),this.status=1}R(Em,qs);function $i(a){this.g=a}R($i,vm),$i.prototype.ua=function(){we(this.g,"a")},$i.prototype.ta=function(a){we(this.g,new wm(a))},$i.prototype.sa=function(a){we(this.g,new Em)},$i.prototype.ra=function(){we(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,j1=function(){return new qa},F1=function(){return X()},L1=Mn,Ad={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,Ml=Va,Lp.COMPLETE="complete",M1=Lp,Na.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",ce.prototype.listen=ce.prototype.K,po=Na,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,O1=Oe}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});const gy="@firebase/firestore",yy="4.8.0";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let js="11.10.0";/**
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
 */const Pi=new zf("@firebase/firestore");function Wi(){return Pi.logLevel}function W(t,...e){if(Pi.logLevel<=ae.DEBUG){const n=e.map(tp);Pi.debug(`Firestore (${js}): ${t}`,...n)}}function tr(t,...e){if(Pi.logLevel<=ae.ERROR){const n=e.map(tp);Pi.error(`Firestore (${js}): ${t}`,...n)}}function jr(t,...e){if(Pi.logLevel<=ae.WARN){const n=e.map(tp);Pi.warn(`Firestore (${js}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,U1(t,r,n)}function U1(t,e,n){let r=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||U1(e,i,r)}function ne(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class LR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FR{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class jR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,an(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _y(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $R(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function $1(){return new TextEncoder}/**
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
 */class np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=$R(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Cd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return se(r,i);{const s=$1(),o=BR(s.encode(vy(t,n)),s.encode(vy(e,n)));return o!==0?o:se(r,i)}}n+=r>65535?2:1}return se(t.length,e.length)}function vy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function BR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return se(t[n],e[n]);return se(t.length,e.length)}function Rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const wy="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Cd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class Ee extends wn{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const HR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends wn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return HR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wy}static keyField(){return new it([wy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ee.fromString(e))}static fromName(e){return new Q(Ee.fromString(e).popFirst(5))}static empty(){return new Q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ee(e.slice()))}}/**
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
 */function B1(t,e,n){if(!n)throw new H(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WR(t,e,n,r){if(e===!0&&r===!0)throw new H(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ey(t){if(!Q.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ty(t){if(Q.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function H1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function _a(t,e){if(!H1(t))throw new H(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const Iy=-62135596800,Sy=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Sy);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Iy)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sy}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_a(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:qe("string",Ae._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ae(0,0))}static max(){return new te(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ea=-1;function qR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Ur(i,Q.empty(),e)}function GR(t){return new Ur(t.readTime,t.key,ea)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(te.min(),Q.empty(),ea)}static max(){return new Ur(te.max(),Q.empty(),ea)}}function KR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const QR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Us(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==QR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function XR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nc.ue=-1;/**
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
 */const rp=-1;function rc(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function YR(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const W1="";function ZR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ky(e)),e=eP(t.get(n),e);return ky(e)}function eP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case W1:n+="";break;default:n+=s}}return n}function ky(t){return t+W1+""}/**
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
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Xe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class G1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new G1("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const tP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=tP.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */const K1="server_timestamp",Q1="__type__",J1="__previous_value__",X1="__local_write_time__";function ip(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Q1])===null||n===void 0?void 0:n.stringValue)===K1}function ic(t){const e=t.mapValue.fields[J1];return ip(e)?ic(e):e}function ta(t){const e=zr(t.mapValue.fields[X1].timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class nP{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Tu="(default)";class na{constructor(e,n){this.projectId=e,this.database=n||Tu}static empty(){return new na("","")}get isDefaultDatabase(){return this.database===Tu}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Y1="__type__",rP="__max__",pl={mapValue:{}},Z1="__vector__",Iu="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ip(t)?4:sP(t)?9007199254740991:iP(t)?10:11:Y(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),l=zr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $r(i.bytesValue).isEqual($r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?Eu(o)===Eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ay(o)!==Ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Nn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ra(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ry(t.timestampValue,e.timestampValue);case 4:return Ry(ta(t),ta(e));case 5:return Cd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=$r(s),u=$r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(je(s.latitude),je(o.latitude));return l!==0?l:se(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Py(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},S=(l=p[Iu])===null||l===void 0?void 0:l.arrayValue,R=(u=m[Iu])===null||u===void 0?void 0:u.arrayValue,x=se(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Py(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Cd(u[p],f[p]);if(m!==0)return m;const S=Ps(l[u[p]],h[f[p]]);if(S!==0)return S}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{le:n})}}function Ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=zr(t),r=zr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Py(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ps(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function xs(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rd(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Ll(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+Ll(e):16;case 5:return 2*t.stringValue.length;case 6:return $r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ll(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Qr(r.fields,(s,o)=>{i+=s.length+Ll(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function xy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pd(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function Ny(t){return!!t&&"nullValue"in t}function by(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function iP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Y1])===null||n===void 0?void 0:n.stringValue)===Z1}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rP}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=xo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(xo(this.value))}}function ew(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new it([n]);if(Fl(r)){const s=ew(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,te.min(),te.min(),te.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,te.min(),te.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,te.min(),te.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Su{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ku{constructor(e,n="asc"){this.field=e,this.dir=n}}function oP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tw{}class We extends tw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lP(e,n,r):n==="array-contains"?new hP(e,r):n==="in"?new dP(e,r):n==="not-in"?new fP(e,r):n==="array-contains-any"?new pP(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uP(e,r):new cP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ps(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends tw{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new fn(e,n)}matches(e){return nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function nw(t){return t.op==="and"}function rw(t){return aP(t)&&nw(t)}function aP(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function xd(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(rw(t))return t.filters.map(e=>xd(e)).join(",");{const e=t.filters.map(n=>xd(n)).join(",");return`${t.op}(${e})`}}function iw(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&iw(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function sw(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(sw).join(" ,")+"}"}(t):"Filter"}class lP extends We{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class uP extends We{constructor(e,n){super(e,"in",n),this.keys=ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cP extends We{constructor(e,n){super(e,"not-in",n),this.keys=ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class hP extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&ra(n.arrayValue,this.value)}}class dP extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class fP extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ra(this.value.arrayValue,n)}}class pP extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
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
 */class mP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Oy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mP(t,e,n,r,i,s,o)}function op(t){const e=ne(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.Pe=n}return e.Pe}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function Nd(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class va{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function gP(t,e,n,r,i,s,o,l){return new va(t,e,n,r,i,s,o,l)}function sc(t){return new va(t)}function My(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aw(t){return t.collectionGroup!==null}function No(t){const e=ne(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ku(s,r))}),n.has(it.keyField().canonicalString())||e.Te.push(new ku(it.keyField(),r))}return e.Te}function An(t){const e=ne(t);return e.Ie||(e.Ie=yP(e,No(t))),e.Ie}function yP(t,e){if(t.limitType==="F")return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ku(i.field,s)});const n=t.endAt?new Su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Su(t.startAt.position,t.startAt.inclusive):null;return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bd(t,e){const n=t.filters.concat([e]);return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dd(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return ap(An(t),An(e))&&t.limitType===e.limitType}function lw(t){return`${op(An(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sw(i)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of No(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Dy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,No(r),i)||r.endAt&&!function(o,l,u){const h=Dy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,No(r),i))}(t,e)}function _P(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uw(t){return(e,n)=>{let r=!1;for(const i of No(t)){const s=vP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vP(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ps(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return q1(this.inner)}size(){return this.innerSize}}/**
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
 */const wP=new Ve(Q.comparator);function nr(){return wP}const cw=new Ve(Q.comparator);function mo(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function hw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pi(){return bo()}function dw(){return bo()}function bo(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const EP=new Ve(Q.comparator),TP=new Xe(Q.comparator);function le(...t){let e=TP;for(const n of t)e=e.add(n);return e}const IP=new Xe(se);function SP(){return IP}/**
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
 */function lp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function fw(t){return{integerValue:""+t}}function kP(t,e){return YR(e)?fw(e):lp(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function AP(t,e,n){return t instanceof Au?function(i,s){const o={fields:{[Q1]:{stringValue:K1},[X1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ip(s)&&(s=ic(s)),s&&(o.fields[J1]=s),{mapValue:o}}(n,e):t instanceof ia?mw(t,e):t instanceof sa?gw(t,e):function(i,s){const o=pw(i,s),l=Ly(o)+Ly(i.Ee);return Pd(o)&&Pd(i.Ee)?fw(l):lp(i.serializer,l)}(t,e)}function CP(t,e,n){return t instanceof ia?mw(t,e):t instanceof sa?gw(t,e):n}function pw(t,e){return t instanceof Cu?function(r){return Pd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Au extends lc{}class ia extends lc{constructor(e){super(),this.elements=e}}function mw(t,e){const n=yw(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends lc{constructor(e){super(),this.elements=e}}function gw(t,e){let n=yw(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class Cu extends lc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ly(t){return je(t.integerValue||t.doubleValue)}function yw(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ia&&i instanceof ia||r instanceof sa&&i instanceof sa?Rs(r.elements,i.elements,Nn):r instanceof Cu&&i instanceof Cu?Nn(r.Ee,i.Ee):r instanceof Au&&i instanceof Au}(t.transform,e.transform)}class PP{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function _w(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cc(t.key,Ot.none()):new wa(t.key,t.data,Ot.none());{const n=t.data,r=Pt.empty();let i=new Xe(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new $t(i.toArray()),Ot.none())}}function xP(t,e,n){t instanceof wa?function(i,s,o){const l=i.value.clone(),u=jy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=jy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(vw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof wa?function(s,o,l,u){if(!jl(s.precondition,o))return l;const h=s.value.clone(),f=Uy(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,l,u){if(!jl(s.precondition,o))return l;const h=Uy(s.fieldTransforms,u,o),f=o.data;return f.setAll(vw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function NP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pw(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Rs(r,i,(s,o)=>RP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends uc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends uc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;ye(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,CP(o,l,n[i]))}return r}function Uy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AP(s,o,e))}return r}class cc extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bP extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=_w(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>Fy(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>Fy(n,r))}}class up{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return EP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new up(e,n,r,i)}}/**
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
 */class VP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,he;function MP(t){switch(t){case O.OK:return Y(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function ww(t){if(t===void 0)return tr("GRPC error has no .code"),O.UNKNOWN;switch(t){case Be.OK:return O.OK;case Be.CANCELLED:return O.CANCELLED;case Be.UNKNOWN:return O.UNKNOWN;case Be.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Be.INTERNAL:return O.INTERNAL;case Be.UNAVAILABLE:return O.UNAVAILABLE;case Be.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Be.NOT_FOUND:return O.NOT_FOUND;case Be.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Be.ABORTED:return O.ABORTED;case Be.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Be.DATA_LOSS:return O.DATA_LOSS;default:return Y(39323,{code:t})}}(he=Be||(Be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const LP=new Or([4294967295,4294967295],0);function zy(t){const e=$1().encode(t),n=new V1;return n.update(e),new Uint8Array(n.digest())}function $y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Or([n,r],0),new Or([i,s],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Or.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Or.fromNumber(r)));return i.compare(LP)===1&&(i=new Or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=zy(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=zy(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(te.min(),i,new Ve(se),nr(),le())}}class Ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,le(),le(),le())}}/**
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
 */class Ul{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class Ew{constructor(e,n){this.targetId=e,this.De=n}}class Tw{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class By{constructor(){this.ve=0,this.Ce=Hy(),this.Fe=at.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=le(),n=le(),r=le();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new Ea(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Hy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class FP{constructor(e){this.We=e,this.Ge=new Map,this.ze=nr(),this.je=ml(),this.Je=ml(),this.He=new Ve(se)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Nd(s))if(r===0){const o=new Q(s.path);this.Xe(n,o,_t.newNoDocument(o,te.min()))}else ye(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=$r(r).toUint8Array()}catch(u){if(u instanceof G1)return jr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cp(o,i,s)}catch(u){return jr(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Nd(l.target)){const u=new Q(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,_t.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=le();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.He,this.ze,r);return this.ze=nr(),this.je=ml(),this.Je=ml(),this.He=new Ve(se),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new By,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Xe(se),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Xe(se),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new By),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ml(){return new Ve(Q.comparator)}function Hy(){return new Ve(Q.comparator)}const jP={asc:"ASCENDING",desc:"DESCENDING"},UP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zP={and:"AND",or:"OR"};class $P{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vd(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function Ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BP(t,e){return Ru(t,e.toTimestamp())}function Cn(t){return ye(!!t,49232),te.fromTimestamp(function(n){const r=zr(n);return new Ae(r.seconds,r.nanos)}(t))}function hp(t,e){return Od(t,e).canonicalString()}function Od(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sw(t){const e=Ee.fromString(t);return ye(Pw(e),10190,{key:e.toString()}),e}function Md(t,e){return hp(t.databaseId,e.path)}function ph(t,e){const n=Sw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Aw(n))}function kw(t,e){return hp(t.databaseId,e)}function HP(t){const e=Sw(t);return e.length===4?Ee.emptyPath():Aw(e)}function Ld(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Aw(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wy(t,e,n){return{name:Md(t,e),fields:n.value.mapValue.fields}}function WP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),at.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:ww(h.code);return new H(f,h.message||"")}(o);n=new Tw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ph(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):te.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ul(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ph(t,r.document),s=r.readTime?Cn(r.readTime):te.min(),o=_t.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ph(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return Y(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OP(i,s),l=r.targetId;n=new Ew(l,o)}}return n}function qP(t,e){let n;if(e instanceof wa)n={update:Wy(t,e.key,e.value)};else if(e instanceof cc)n={delete:Md(t,e.key)};else if(e instanceof Jr)n={update:Wy(t,e.key,e.data),updateMask:tx(e.fieldMask)};else{if(!(e instanceof bP))return Y(16599,{Rt:e.type});n={verify:Md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Au)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function GP(t,e){return t&&t.length>0?(ye(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(te.min())&&(o=Cn(s)),new PP(o,i.transformResults||[])}(n,e))):[]}function KP(t,e){return{documents:[kw(t,e.path)]}}function QP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kw(t,i);const s=function(h){if(h.length!==0)return Rw(fn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Gi(m.field),direction:YP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function JP(t){let e=HP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=Cw(p);return m instanceof fn&&rw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new ku(Ki(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,rc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Su(S,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,S=p.values||[];return new Su(S,m)}(n.endAt)),gP(e,i,o,s,l,"F",u,h)}function XP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>Cw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function YP(t){return jP[t]}function ZP(t){return UP[t]}function ex(t){return zP[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return it.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof We?function(n){if(n.op==="=="){if(by(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NAN"}};if(Ny(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(by(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NAN"}};if(Ny(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(n.field),op:ZP(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>Rw(i));return r.length===1?r[0]:{compositeFilter:{op:ex(n.op),filters:r}}}(t):Y(54877,{filter:t})}function tx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,i,s=te.min(),o=te.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nx{constructor(e){this.gt=e}}function rx(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class ix{constructor(){this.Dn=new sx}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ur.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class sx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Ee.comparator)).toArray()}}/**
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
 */const qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xw=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(xw,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Ns{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ns(0)}static ur(){return new Ns(-1)}}/**
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
 */const Gy="LruGarbageCollector",ox=1048576;function Ky([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class ax{constructor(e){this.Tr=e,this.buffer=new Xe(Ky),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ky(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Gy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?W(Gy,"Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Rr(3e5)})}}class ux{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(nc.ue);const r=new ax(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(qy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Wi()<=ae.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function cx(t,e){return new ux(t,e)}/**
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
 */class hx{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,$t.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=bo(),l=function(){return bo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Do(f.mutation,h,f.mutation.getFieldMask(),Ae.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new dx(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=bo();let i=new Ve((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||$t.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=dw();f.forEach(m=>{if(!s.has(m)){const S=_w(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(pi());let l=ea,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:hw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new va(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let l=mo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Do(f.mutation,h,$t.empty(),Ae.now()),ac(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class px{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:rx(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class mx{constructor(){this.overlays=new Ve(Q.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=pi(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=pi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=pi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VP(n,r));let s=this.kr.get(n);s===void 0&&(s=le(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class gx{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class dp{constructor(){this.qr=new Xe(Ye.Qr),this.$r=new Xe(Ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ye(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new Q(new Ee([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Q(new Ee([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=le();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Q.comparator(e.key,n.key)||se(e.Hr,n.Hr)}static Ur(e,n){return se(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
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
 */class yx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Xe(Ye.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?rp:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(se);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new Q(s),0);let l=new Xe(se);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ye(n,0),i=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _x{constructor(e){this.ni=e,this.docs=function(){return new Ve(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||KR(GR(f),r)<=0||(i.has(f.key)||ac(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vx(this)}getSize(e){return M.resolve(this.size)}}class vx extends hx{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class wx{constructor(e){this.persistence=e,this.ii=new Di(n=>op(n),ap),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.si=0,this.oi=new dp,this.targetCount=0,this._i=Ns.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
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
 */class Nw{constructor(e,n){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new gx,this.referenceDelegate=e(this),this.hi=new wx(this),this.indexManager=new ix,this.remoteDocumentCache=function(i){return new _x(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new nx(n),this.Ti=new px(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new yx(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new Ex(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class Ex extends JR{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Ai=new dp,this.Ri=null}static Vi(e){return new fp(e)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const i=Q.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Pu{constructor(e,n){this.persistence=e,this.gi=new Di(r=>ZR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=cx(this,n)}static Vi(e,n){return new Pu(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ll(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pp(e,n.fromCache,r,i)}}/**
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
 */class Tx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ix{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return mk()?8:XR(wt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Tx;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Wi()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Wi()<=ae.DEBUG&&W("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Wi()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):M.resolve())}ps(e,n){if(My(n))return M.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dd(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Dd(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return My(n)||i.isEqual(te.min())?M.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?M.resolve(null):(Wi()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.vs(e,o,n,qR(i,ea)).next(l=>l))})}bs(e,n){let r=new Xe(uw(e));return n.forEach((i,s)=>{ac(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Wi()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",qi(n)),this.gs.getDocumentsMatchingQuery(e,n,Ur.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const mp="LocalStore",Sx=3e8;class kx{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ve(se),this.Ms=new Di(s=>op(s),ap),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function Ax(t,e,n,r){return new kx(t,e,n,r)}async function bw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Cx(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let S=M.resolve();return m.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(x=>{const V=h.docVersions.get(R);ye(V!==null,48541),x.version.compareTo(V)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Rx(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(at.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(x,V,k){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Sx?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,S,f)&&l.push(n.hi.updateTargetData(s,S))});let u=nr(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Px(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(te.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function Px(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(mp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function xx(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Nx(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=ne(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;W(mp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Qy(t,e,n){const r=ne(t);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ne(u),m=p.Ms.get(f);return m!==void 0?M.resolve(p.Fs.get(m)):p.hi.getTargetData(h,f)}(r,o,An(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:le())).next(l=>(bx(r,_P(e),l),{documents:l,qs:s})))}function bx(t,e,n){let r=t.xs.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Jy{constructor(){this.activeTargetIds=SP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dx{constructor(){this.Fo=new Jy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vx{xo(e){}shutdown(){}}/**
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
 */const Xy="ConnectivityMonitor";class Yy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Xy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Xy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function jd(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const mh="RestConnection",Ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Mx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Tu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=jd(),l=this.Go(e,n.toUriEncodedString());W(mh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Ms(h);return this.jo(e,l,u,r,f).then(p=>(W(mh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw jr(mh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=Ox[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Lx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const mt="WebChannelConnection";class Fx extends Mx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=jd();return new Promise((l,u)=>{const h=new O1;h.setWithCredentials(!0),h.listenOnce(M1.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ml.NO_ERROR:const p=h.getResponseJson();W(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ml.TIMEOUT:W(mt,`RPC '${e}' ${o} timed out`),u(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const m=h.getStatus();if(W(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const x=function(k){const w=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(R.status);u(new H(x,R.message))}else u(new H(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(O.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(mt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);W(mt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=jd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=j1(),l=F1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(mt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let m=!1,S=!1;const R=new Lx({Ho:V=>{S?W(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(W(mt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(mt,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},Yo:()=>p.close()}),x=(V,k,w)=>{V.listen(k,A=>{try{w(A)}catch(b){setTimeout(()=>{throw b},0)}})};return x(p,po.EventType.OPEN,()=>{S||(W(mt,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),x(p,po.EventType.CLOSE,()=>{S||(S=!0,W(mt,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(p))}),x(p,po.EventType.ERROR,V=>{S||(S=!0,jr(mt,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),R.__(new H(O.UNAVAILABLE,"The operation could not be completed")))}),x(p,po.EventType.MESSAGE,V=>{var k;if(!S){const w=V.data[0];ye(!!w,16349);const A=w,b=(A==null?void 0:A.error)||((k=A[0])===null||k===void 0?void 0:k.error);if(b){W(mt,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let L=function(v){const E=Be[v];if(E!==void 0)return ww(E)}(j),_=b.message;L===void 0&&(L=O.INTERNAL,_="Unknown error status: "+j+" with message "+b.message),S=!0,R.__(new H(L,_)),p.close()}else W(mt,`RPC '${e}' stream ${i} received:`,w),R.a_(w)}}),x(l,L1.STAT_EVENT,V=>{V.stat===Ad.PROXY?W(mt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Ad.NOPROXY&&W(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function gh(){return typeof document<"u"?document:null}/**
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
 */function dc(t){return new $P(t,!0)}/**
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
 */class Vw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zy="PersistentStream";class Ow{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return W(Zy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(W(Zy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jx extends Ow{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=WP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Cn(o.readTime):te.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Nd(u)?{documents:KP(s,u)}:{query:QP(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Iw(s,o.resumeToken);const h=Vd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Ru(s,o.snapshotVersion.toTimestamp());const h=Vd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=XP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.k_(n)}}class Ux extends Ow{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=GP(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Ld(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qP(this.serializer,r))};this.k_(n)}}/**
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
 */class zx{}class $x extends zx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Bx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tr(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const xi="RemoteStore";class Hx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(W(xi,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.Ia.add(4),await Ta(h),h.Aa.set("Unknown"),h.Ia.delete(4),await fc(h)}(this))})}),this.Aa=new Bx(r,i)}}async function fc(t){if(Vi(t))for(const e of t.da)await e(!0)}async function Ta(t){for(const e of t.da)await e(!1)}function Mw(t,e){const n=ne(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),vp(n)?_p(n):$s(n).x_()&&yp(n,e))}function gp(t,e){const n=ne(t),r=$s(n);n.Ta.delete(e),r.x_()&&Lw(n,e),n.Ta.size===0&&(r.x_()?r.B_():Vi(n)&&n.Aa.set("Unknown"))}function yp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).H_(e)}function Lw(t,e){t.Ra.$e(e),$s(t).Y_(e)}function _p(t){t.Ra=new FP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.Aa.aa()}function vp(t){return Vi(t)&&!$s(t).M_()&&t.Ta.size>0}function Vi(t){return ne(t).Ia.size===0}function Fw(t){t.Ra=void 0}async function Wx(t){t.Aa.set("Online")}async function qx(t){t.Ta.forEach((e,n)=>{yp(t,e)})}async function Gx(t,e){Fw(t),vp(t)?(t.Aa.la(e),_p(t)):t.Aa.set("Unknown")}async function Kx(t,e,n){if(t.Aa.set("Online"),e instanceof Tw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){W(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xu(t,r)}else if(e instanceof Ul?t.Ra.Ye(e):e instanceof Ew?t.Ra.it(e):t.Ra.et(e),!n.isEqual(te.min()))try{const r=await Dw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),Lw(s,u);const p=new Ir(f.target,u,h,f.sequenceNumber);yp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(xi,"Failed to raise snapshot:",r),await xu(t,r)}}async function xu(t,e,n){if(!zs(e))throw e;t.Ia.add(1),await Ta(t),t.Aa.set("Offline"),n||(n=()=>Dw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(xi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await fc(t)})}function jw(t,e){return e().catch(n=>xu(t,n,e))}async function pc(t){const e=ne(t),n=Hr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:rp;for(;Qx(e);)try{const i=await xx(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,Jx(e,i)}catch(i){await xu(e,i)}Uw(e)&&zw(e)}function Qx(t){return Vi(t)&&t.Pa.length<10}function Jx(t,e){t.Pa.push(e);const n=Hr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Uw(t){return Vi(t)&&!Hr(t).M_()&&t.Pa.length>0}function zw(t){Hr(t).start()}async function Xx(t){Hr(t).na()}async function Yx(t){const e=Hr(t);for(const n of t.Pa)e.X_(n.mutations)}async function Zx(t,e,n){const r=t.Pa.shift(),i=up.from(r,e,n);await jw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pc(t)}async function eN(t,e){e&&Hr(t).Z_&&await async function(r,i){if(function(o){return MP(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();Hr(r).N_(),await jw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pc(r)}}(t,e),Uw(t)&&zw(t)}async function e_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),W(xi,"RemoteStore received new credentials");const r=Vi(n);n.Ia.add(3),await Ta(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await fc(n)}async function tN(t,e){const n=ne(t);e?(n.Ia.delete(2),await fc(n)):e||(n.Ia.add(2),await Ta(n),n.Aa.set("Unknown"))}function $s(t){return t.Va||(t.Va=function(n,r,i){const s=ne(n);return s.ia(),new jx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Wx.bind(null,t),e_:qx.bind(null,t),n_:Gx.bind(null,t),J_:Kx.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),vp(t)?_p(t):t.Aa.set("Unknown")):(await t.Va.stop(),Fw(t))})),t.Va}function Hr(t){return t.ma||(t.ma=function(n,r,i){const s=ne(n);return s.ia(),new Ux(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:Xx.bind(null,t),n_:eN.bind(null,t),ea:Yx.bind(null,t),ta:Zx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await pc(t)):(await t.ma.stop(),t.Pa.length>0&&(W(xi,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new wp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(t,e){if(tr("AsyncQueue",`${e}: ${t}`),zs(t))return new H(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class t_{constructor(){this.fa=new Ve(Q.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Y(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class nN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class rN{constructor(){this.queries=n_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=n_(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new H(O.ABORTED,"Firestore shutting down"))}}function n_(){return new Di(t=>lw(t),oc)}async function Tp(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new nN,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ep(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Sp(n)}async function Ip(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function iN(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Sp(n)}function sN(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Sp(t){t.Da.forEach(e=>{e.next()})}var Ud,r_;(r_=Ud||(Ud={})).Fa="default",r_.Cache="cache";class kp{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ud.Cache}}/**
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
 */class $w{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class oN{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=le(),this.mutatedKeys=le(),this.Xa=uw(e),this.eu=new gs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new t_,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=ac(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;m&&S?m.data.isEqual(S.data)?R!==x&&(r.track({type:3,doc:S}),V=!0):this.iu(m,S)||(r.track({type:2,doc:S}),V=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),V=!0):m&&!S&&(r.track({type:1,doc:m}),V=!0,(u||h)&&(l=!0)),V&&(S?(o=o.add(S),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(S,R){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:V})}};return x(S)-x(R)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new bs(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new t_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=le(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Bw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new $w(r))}),n}uu(e){this.Ha=e.qs,this.Za=le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return bs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ap="SyncEngine";class aN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lN{constructor(e){this.key=e,this.lu=!1}}class uN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Di(l=>lw(l),oc),this.Tu=new Map,this.Iu=new Set,this.du=new Ve(Q.comparator),this.Eu=new Map,this.Au=new dp,this.Ru={},this.Vu=new Map,this.mu=Ns.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function cN(t,e,n=!0){const r=Qw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Hw(r,e,n,!0),i}async function hN(t,e){const n=Qw(t);await Hw(n,e,!0,!1)}async function Hw(t,e,n,r){const i=await Nx(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await dN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Mw(t.remoteStore,i),l}async function dN(t,e,n,r,i){t.gu=(p,m,S)=>async function(x,V,k,w){let A=V.view.nu(k);A.Ds&&(A=await Qy(x.localStore,V.query,!1).then(({documents:_})=>V.view.nu(_,A)));const b=w&&w.targetChanges.get(V.targetId),j=w&&w.targetMismatches.get(V.targetId)!=null,L=V.view.applyChanges(A,x.isPrimaryClient,b,j);return s_(x,V.targetId,L._u),L.snapshot}(t,p,m,S);const s=await Qy(t.localStore,e,!0),o=new oN(e,s.qs),l=o.nu(s.documents),u=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);s_(t,n,h._u);const f=new aN(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function fN(t,e,n){const r=ne(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!oc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gp(r.remoteStore,i.targetId),zd(r,i.targetId)}).catch(Us)):(zd(r,i.targetId),await Fd(r.localStore,i.targetId,!0))}async function pN(t,e){const n=ne(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gp(n.remoteStore,r.targetId))}async function mN(t,e,n){const r=TN(t);try{const i=await function(o,l){const u=ne(o),h=Ae.now(),f=l.reduce((S,R)=>S.add(R.key),le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=nr(),x=le();return u.Os.getEntries(S,f).next(V=>{R=V,R.forEach((k,w)=>{w.isValidDocument()||(x=x.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(V=>{p=V;const k=[];for(const w of l){const A=NP(w,p.get(w.key).overlayedDocument);A!=null&&k.push(new Jr(w.key,A,ew(A.value.mapValue),Ot.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,k,l)}).next(V=>{m=V;const k=V.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(S,V.batchId,k)})}).then(()=>({batchId:m.batchId,changes:hw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Ve(se)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ia(r,i.changes),await pc(r.remoteStore)}catch(i){const s=Ep(i,"Failed to persist write");n.reject(s)}}async function Ww(t,e){const n=ne(t);try{const r=await Rx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ye(o.lu,14607):i.removedDocuments.size>0&&(ye(o.lu,42227),o.lu=!1))}),await Ia(n,r,e)}catch(r){await Us(r)}}function i_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.wa)m.va(l)&&(h=!0)}),h&&Sp(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ve(Q.comparator);o=o.insert(s,_t.newNoDocument(s,te.min()));const l=le().add(s),u=new hc(te.min(),new Map,new Ve(se),o,l);await Ww(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Cp(r)}else await Fd(r.localStore,e,!1).then(()=>zd(r,e,n)).catch(Us)}async function yN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await Cx(n.localStore,e);Gw(n,r,null),qw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,i)}catch(i){await Us(i)}}async function _N(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ye(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Gw(r,e,n),qw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,i)}catch(i){await Us(i)}}function qw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Gw(t,e,n){const r=ne(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function zd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Kw(t,r)})}function Kw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(gp(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Cp(t))}function s_(t,e,n){for(const r of n)r instanceof $w?(t.Au.addReference(r.key,e),vN(t,r)):r instanceof Bw?(W(Ap,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Kw(t,r.key)):Y(19791,{yu:r})}function vN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(Ap,"New document in limbo: "+n),t.Iu.add(r),Cp(t))}function Cp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Q(Ee.fromString(e)),r=t.mu.next();t.Eu.set(r,new lN(n)),t.du=t.du.insert(n,r),Mw(t.remoteStore,new Ir(An(sc(n.path)),r,"TargetPurposeLimboResolution",nc.ue))}}async function Ia(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=pp.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Is,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.ds,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!zs(p))throw p;W(mp,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const S=f.Fs.get(m),R=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(m,x)}}}(r.localStore,s))}async function wN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){W(Ap,"User change. New user:",e.toKey());const r=await bw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new H(O.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.Bs)}}function EN(t,e){const n=ne(t),r=n.Eu.get(e);if(r&&r.lu)return le().add(r.key);{let i=le();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Qw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gN.bind(null,e),e.hu.J_=iN.bind(null,e.eventManager),e.hu.pu=sN.bind(null,e.eventManager),e}function TN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_N.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Ax(this.persistence,new Ix,e.initialUser,this.serializer)}Du(e){return new Nw(fp.Vi,this.serializer)}bu(e){return new Dx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class IN extends Nu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ye(this.persistence.referenceDelegate instanceof Pu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lx(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Nw(r=>Pu.Vi(r,n),this.serializer)}}class $d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>i_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wN.bind(null,this.syncEngine),await tN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rN}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(s){return new Fx(s)}(e.databaseInfo);return function(s,o,l,u){return new $x(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Hx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>i_(this.syncEngine,n,0),function(){return Yy.C()?new Yy:new Vx}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new uN(i,s,o,l,u,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);W(xi,"RemoteStore shutting down."),s.Ia.add(5),await Ta(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$d.provider={build:()=>new $d};/**
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
 */class Rp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Wr="FirestoreClient";class SN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{jr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{jr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kN(t);W(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>e_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>e_(e.remoteStore,i)),t._onlineComponents=e}async function kN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Wr,"Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new Nu)}}else W(Wr,"Using default OfflineComponentProvider"),await yh(t,new IN(void 0));return t._offlineComponents}async function Jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Wr,"Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(W(Wr,"Using default OnlineComponentProvider"),await o_(t,new $d))),t._onlineComponents}function AN(t){return Jw(t).then(e=>e.syncEngine)}async function bu(t){const e=await Jw(t),n=e.eventManager;return n.onListen=cN.bind(null,e.syncEngine),n.onUnlisten=fN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pN.bind(null,e.syncEngine),n}function CN(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Rp({next:m=>{f.Ou(),o.enqueueAndForget(()=>Ip(s,p));const S=m.docs.has(l);!S&&m.fromCache?h.reject(new H(O.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new kp(sc(l.path),f,{includeMetadataChanges:!0,ka:!0});return Tp(s,p)}(await bu(t),t.asyncQueue,e,n,r)),r.promise}function RN(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Rp({next:m=>{f.Ou(),o.enqueueAndForget(()=>Ip(s,p)),m.fromCache&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new kp(l,f,{includeMetadataChanges:!0,ka:!0});return Tp(s,p)}(await bu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const a_=new Map;/**
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
 */const Yw="firestore.googleapis.com",l_=!0;class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yw,this.ssl=l_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:l_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ox)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MR;switch(r.type){case"firstParty":return new UR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a_.get(n);r&&(W("ComponentProvider","Removing Datastore"),a_.delete(n),r.terminate())}(this),Promise.resolve()}}function PN(t,e,n,r={}){var i;t=Vt(t,mc);const s=Ms(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(Q0(`https://${u}`),J0("Firestore",!0)),o.host!==Yw&&o.host!==u&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Ai(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=gt.MOCK_USER;else{f=ok(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new gt(m)}t._authCredentials=new LR(new z1(f,p))}}/**
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
 */class Oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(_a(n,Le._jsonSchema))return new Le(e,r||null,new Q(Ee.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:qe("string",Le._jsonSchemaVersion),referencePath:qe("string")};class Mr extends Oi{constructor(e,n,r){super(e,n,sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new Q(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function En(t,e,...n){if(t=ze(t),B1("collection","path",e),t instanceof mc){const r=Ee.fromString(e,...n);return Ty(r),new Mr(t,null,r)}{if(!(t instanceof Le||t instanceof Mr))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Ty(r),new Mr(t.firestore,null,r)}}function me(t,e,...n){if(t=ze(t),arguments.length===1&&(e=np.newId()),B1("doc","path",e),t instanceof mc){const r=Ee.fromString(e,...n);return Ey(r),new Le(t,null,new Q(r))}{if(!(t instanceof Le||t instanceof Mr))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Ey(r),new Le(t.firestore,t instanceof Mr?t.converter:null,new Q(r))}}/**
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
 */const c_="AsyncQueue";class h_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vw(this,"async_queue_retry"),this.oc=()=>{const r=gh();r&&W(c_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Kn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zs(e))throw e;W(c_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,tr("INTERNAL UNHANDLED ERROR: ",d_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=wp.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Y(47125,{hc:d_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function d_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function f_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class rr extends mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new h_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new h_(e),this._firestoreClient=void 0,await e}}}function xN(t,e){const n=typeof t=="object"?t:e1(),r=typeof t=="string"?t:Tu,i=Bf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ik("firestore");s&&PN(i,...s)}return i}function Sa(t){if(t._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NN(t),t._firestoreClient}function NN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new nP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new SN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(at.fromBase64String(e))}catch(n){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_a(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:qe("string",Qt._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pp{constructor(e){this._methodName=e}}/**
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(_a(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:qe("string",Rn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class Pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_a(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Pn(e.vectorValues);throw new H(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:qe("string",Pn._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const bN=/^__.*__$/;class DN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class Zw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:t})}}class xp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Du(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(eE(this.Ec)&&bN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class VN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Dc(e,n,r,i=!1){return new xp({Ec:e,methodName:n,bc:r,path:it.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gc(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new VN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tE(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Np("Data must be an object, but it was:",o,r);const l=iE(r,o);let u,h;if(s.merge)u=new $t(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Bd(e,p,n);if(!o.contains(m))throw new H(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oE(f,m)||f.push(m)}u=new $t(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new DN(new Pt(l),u,h)}class Aa extends Pp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}function nE(t,e,n,r){const i=t.Dc(1,e,n);Np("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Qr(r,(u,h)=>{const f=bp(e,u,n);h=ze(h);const p=i.gc(f);if(h instanceof Aa)s.push(f);else{const m=Ca(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new $t(s);return new Zw(o,l,i.fieldTransforms)}function rE(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[Bd(e,r,n)],u=[i];if(s.length%2!=0)throw new H(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Bd(e,s[m])),u.push(s[m+1]);const h=[],f=Pt.empty();for(let m=l.length-1;m>=0;--m)if(!oE(h,l[m])){const S=l[m];let R=u[m];R=ze(R);const x=o.gc(S);if(R instanceof Aa)h.push(S);else{const V=Ca(R,x);V!=null&&(h.push(S),f.set(S,V))}}const p=new $t(h);return new Zw(f,p,o.fieldTransforms)}function ON(t,e,n,r=!1){return Ca(n,t.Dc(r?4:3,e))}function Ca(t,e){if(sE(t=ze(t)))return Np("Unsupported field value:",e,t),iE(t,e);if(t instanceof Pp)return function(r,i){if(!eE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ca(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:Ru(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ru(i.serializer,s)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:Iw(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pn)return function(o,l){return{mapValue:{fields:{[Y1]:{stringValue:Z1},[Iu]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return lp(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${tc(r)}`)}(t,e)}function iE(t,e){const n={};return q1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=Ca(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Rn||t instanceof Qt||t instanceof Le||t instanceof Pp||t instanceof Pn)}function Np(t,e,n){if(!sE(n)||!H1(n)){const r=tc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Bd(t,e,n){if((e=ze(e))instanceof ka)return e._internalPath;if(typeof e=="string")return bp(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const MN=new RegExp("[~\\*/\\[\\]]");function bp(t,e,n){if(e.search(MN)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(O.INVALID_ARGUMENT,l+t+u)}function oE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class aE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LN extends aE{data(){return super.data()}}function Dp(t,e){return typeof e=="string"?bp(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
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
 */function lE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vp{}class FN extends Vp{}function p_(t,e,...n){let r=[];e instanceof Vp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Op).length,l=s.filter(u=>u instanceof yc).length;if(o>1||o>0&&l>0)throw new H(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yc extends FN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return uE(e._query,n),new Oi(e.firestore,e.converter,bd(e._query,n))}_parse(e){const n=gc(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){g_(p,f);const R=[];for(const x of p)R.push(m_(u,s,x));m={arrayValue:{values:R}}}else m=m_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||g_(p,f),m=ON(l,o,p,f==="in"||f==="not-in");return We.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jN(t,e,n){const r=e,i=Dp("where",t);return yc._create(i,r,n)}class Op extends Vp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)uE(o,u),o=bd(o,u)}(e._query,n),new Oi(e.firestore,e.converter,bd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function m_(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new H(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aw(e)&&n.indexOf("/")!==-1)throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!Q.isDocumentKey(r))throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xy(t,new Q(r))}if(n instanceof Le)return xy(t,n._key);throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function g_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class UN{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Iu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>je(o.doubleValue));return new Pn(s)}convertGeoPoint(e){return new Rn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=zr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ye(Pw(r),9688,{name:e});const i=new na(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function cE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _i extends aE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=_i._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}_i._jsonSchemaVersion="firestore/documentSnapshot/1.0",_i._jsonSchema={type:qe("string",_i._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class zl extends _i{data(e={}){return super.data(e)}}class vi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:zN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function _h(t){t=Vt(t,Le);const e=Vt(t.firestore,rr);return CN(Sa(e),t._key).then(n=>hE(e,t,n))}vi._jsonSchemaVersion="firestore/querySnapshot/1.0",vi._jsonSchema={type:qe("string",vi._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class Mp extends UN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function y_(t){t=Vt(t,Oi);const e=Vt(t.firestore,rr),n=Sa(e),r=new Mp(e);return lE(t._query),RN(n,t._query).then(i=>new vi(e,r,t,i))}function $l(t,e,n){t=Vt(t,Le);const r=Vt(t.firestore,rr),i=cE(t.converter,e,n);return _c(r,[tE(gc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ot.none())])}function Ut(t,e,n,...r){t=Vt(t,Le);const i=Vt(t.firestore,rr),s=gc(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof ka?rE(s,"updateDoc",t._key,e,n,r):nE(s,"updateDoc",t._key,e),_c(i,[o.toMutation(t._key,Ot.exists(!0))])}function Hd(t){return _c(Vt(t.firestore,rr),[new cc(t._key,Ot.none())])}function __(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||f_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(f_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Le)h=Vt(t.firestore,rr),f=sc(t._key.path),u={next:p=>{e[o]&&e[o](hE(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Vt(t,Oi);h=Vt(p.firestore,rr),f=p._query;const m=new Mp(h);u={next:S=>{e[o]&&e[o](new vi(h,m,p,S))},error:e[o+1],complete:e[o+2]},lE(t._query)}return function(m,S,R,x){const V=new Rp(x),k=new kp(S,V,R);return m.asyncQueue.enqueueAndForget(async()=>Tp(await bu(m),k)),()=>{V.Ou(),m.asyncQueue.enqueueAndForget(async()=>Ip(await bu(m),k))}}(Sa(h),f,l,u)}function _c(t,e){return function(r,i){const s=new Kn;return r.asyncQueue.enqueueAndForget(async()=>mN(await AN(r),i,s)),s.promise}(Sa(t),e)}function hE(t,e,n){const r=n.docs.get(e._key),i=new Mp(t);return new _i(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class $N{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=gc(e)}set(e,n,r){this._verifyNotCommitted();const i=vh(e,this._firestore),s=cE(i.converter,n,r),o=tE(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ot.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=vh(e,this._firestore);let o;return o=typeof(n=ze(n))=="string"||n instanceof ka?rE(this._dataReader,"WriteBatch.update",s._key,n,r,i):nE(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ot.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=vh(e,this._firestore);return this._mutations=this._mutations.concat(new cc(n._key,Ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vh(t,e){if((t=ze(t)).firestore!==e)throw new H(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function ys(){return new Aa("deleteField")}/**
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
 */function oa(t){return Sa(t=Vt(t,rr)),new $N(t,e=>_c(t,e))}(function(e,n=!0){(function(i){js=i})(Ls),As(new Ci("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new rr(new FR(r.getProvider("auth-internal")),new zR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Vr(gy,yy,e),Vr(gy,yy,"esm2017")})();let Wd='{"apiKey":"AIzaSyA6DTgVIegbDehKCenFHhVzAMmXLXTHbys","authDomain":"couples-budgeting-e4dfb.firebaseapp.com","projectId":"couples-budgeting-e4dfb","storageBucket":"couples-budgeting-e4dfb.firebasestorage.app","messagingSenderId":"195620381910","appId":"1:195620381910:web:57a7953f3642f506ecd577"}';console.log("✅ VITE_FIREBASE_CONFIG found (Length: "+Wd.length+")");let aa=null;try{const t=Wd?JSON.parse(Wd):{};Object.keys(t).length>0?(aa=Z0(t),console.log("🔥 Firebase App Initialized Successfully")):console.warn("⚠️ Firebase config is empty. Check Vercel settings.")}catch(t){console.error("❌ Firebase Config Parse/Init Error:",t),console.log("💡 HINT: Ensure your Vercel Environment Variable value is a pure JSON string without wrapping quotes.")}const yl=aa?D1(aa):null,Z=aa?xN(aa):null,Ke="sweet-ledger-beta",dE=z.createContext(),fE=()=>z.useContext(dE),BN=({children:t})=>{const[e,n]=z.useState(()=>{try{const u=localStorage.getItem("sweet_user_cache");return u?JSON.parse(u):null}catch(u){return console.warn("User cache parse failed:",u),null}}),[r,i]=z.useState(!0);z.useEffect(()=>{if(!yl){i(!1);return}(async()=>{})();const h=wC(yl,f=>{if(f){const p={uid:f.uid,displayName:f.displayName,email:f.email,photoURL:f.photoURL,isCached:!1};localStorage.setItem("sweet_user_cache",JSON.stringify(p)),n(f)}else localStorage.removeItem("sweet_user_cache"),n(null);i(!1)});return()=>h()},[]);const l={user:e,loading:r,loginWithGoogle:async()=>{i(!0);const u=new $n;try{console.log("🔐 Starting Google Login via Popup...");const h=await $C(yl,u);h!=null&&h.user&&console.log("🎉 Popup Login Success:",h.user.uid),i(!1)}catch(h){console.error("Login Error:",h),i(!1),alert(`登入失敗，請確認您的瀏覽器沒有封鎖彈跳視窗。
或是嘗試使用其他瀏覽器 (如 Chrome)。`)}},logout:async()=>(localStorage.removeItem("sweet_user_cache"),n(null),EC(yl))};return P.jsx(dE.Provider,{value:l,children:t})},HN=t=>{const[e,n]=z.useState(()=>localStorage.getItem("sweet_ledger_code")||""),[r,i]=z.useState(null),[s,o]=z.useState([]),[l,u]=z.useState(!0);z.useEffect(()=>{e?localStorage.setItem("sweet_ledger_code",e):localStorage.removeItem("sweet_ledger_code")},[e]);const h=z.useMemo(()=>{if(!r)return null;let f=s;return s.length===0&&Array.isArray(r.transactions)&&r.transactions.length>0&&(f=r.transactions),{...r,transactions:f}},[r,s]);return z.useEffect(()=>{if(!Z||!e){localStorage.getItem("sweet_ledger_code")||(i(null),o([]),u(!1));return}const f=me(Z,"artifacts",Ke,"public","data","ledgers",e),p=__(f,async R=>{if(R.exists()){const x=R.data();if(t&&(!x.users||!x.users[t.uid])){console.warn("User removed from ledger. Disconnecting...");try{await Ut(me(Z,"users",t.uid),{ledgerCode:ys()})}catch{}n("");return}i(x)}else{if(console.warn("Ghost Ledger Detected"),t)try{await Ut(me(Z,"users",t.uid),{ledgerCode:ys()})}catch{}n(""),i(null)}u(!1)},R=>{console.error("Ledger snapshot error:",R),u(!1)}),m=En(f,"transactions"),S=__(m,R=>{const x=R.docs.map(V=>({...V.data(),id:V.id}));x.sort((V,k)=>new Date(k.date)-new Date(V.date)),o(x)},R=>{console.log("Tx sub-collection issue:",R.message)});return()=>{p(),S()}},[e,t]),{ledgerCode:e,setLedgerCode:n,ledgerData:h,ledgerDocData:r,isLedgerInitializing:l}},_l=[{code:"TWD",name:"新台幣",symbol:"NT$",flag:"🇹🇼"},{code:"JPY",name:"日圓",symbol:"¥",flag:"🇯🇵"},{code:"USD",name:"美元",symbol:"$",flag:"🇺🇸"},{code:"THB",name:"泰銖",symbol:"฿",flag:"🇹🇭"},{code:"KRW",name:"韓元",symbol:"₩",flag:"🇰🇷"},{code:"EUR",name:"歐元",symbol:"€",flag:"🇪🇺"},{code:"CNY",name:"人民幣",symbol:"¥",flag:"🇨🇳"},{code:"GBP",name:"英鎊",symbol:"£",flag:"🇬🇧"},{code:"AUD",name:"澳幣",symbol:"A$",flag:"🇦🇺"},{code:"SGD",name:"新幣",symbol:"S$",flag:"🇸🇬"},{code:"HKD",name:"港幣",symbol:"HK$",flag:"🇭🇰"},{code:"CAD",name:"加幣",symbol:"C$",flag:"🇨🇦"},{code:"VND",name:"越南盾",symbol:"₫",flag:"🇻🇳"},{code:"PHP",name:"菲律賓披索",symbol:"₱",flag:"🇵🇭"},{code:"MYR",name:"馬來西亞令吉",symbol:"RM",flag:"🇲🇾"}],WN=["JPY","THB","USD"],Et={orange:{id:"orange",bg:null,text:null,hex:"#d6a2a2",name:"Orange"},blue:{id:"blue",bg:null,text:null,hex:"#8fbcd4",name:"Blue"},pink:{id:"pink",bg:null,text:null,hex:"#eeccdf",name:"Pink"},indigo:{id:"indigo",bg:null,text:null,hex:"#a3a7bf",name:"Indigo"},purple:{id:"purple",bg:null,text:null,hex:"#c7b3e5",name:"Purple"},yellow:{id:"yellow",bg:null,text:null,hex:"#e6c9a8",name:"Yellow"},gray:{id:"gray",bg:"bg-gray-100",text:"text-gray-600",hex:"#d1d5db",name:"Gray"},red:{id:"red",bg:null,text:null,hex:"#e09f9f",name:"Red"},green:{id:"green",bg:null,text:null,hex:"#a8cebb",name:"Green"},slate:{id:"slate",bg:null,text:null,hex:"#94a3b8",name:"Slate"},emerald:{id:"emerald",bg:null,text:null,hex:"#88bfac",name:"Emerald"},rose:{id:"rose",bg:"bg-rose-100",text:"text-rose-600",hex:"#e11d48",name:"Rose"},cyan:{id:"cyan",bg:null,text:null,hex:"#a5d6d9",name:"Cyan"},amber:{id:"amber",bg:null,text:null,hex:"#d9b891",name:"Amber"},fuchsia:{id:"fuchsia",bg:null,text:null,hex:"#d8a7d1",name:"Fuchsia"}},v4={orange:"#d6a2a2",blue:"#8fbcd4",pink:"#eeccdf",indigo:"#a3a7bf",purple:"#c7b3e5",yellow:"#e6c9a8",gray:"#d1d5db",red:"#e09f9f",green:"#a8cebb",slate:"#94a3b8",emerald:"#88bfac",rose:"#f43f5e",cyan:"#a5d6d9",amber:"#d9b891",fuchsia:"#d8a7d1",host:"#8fbcd4",guest:"#eeccdf"},v_=Object.values(Et).map(t=>({name:t.name,class:`${t.bg} ${t.text}`,hex:t.hex})),Vo={food:yd,transport:jg,shopping:md,housing:Co,hotel:Dg,ticket:b2,telecom:gd,insurance:Lg,life:Fg,other:Mg,cat:bS,dog:KS,rabbit:g2,bird:SS,fish:YS,turtle:L2,default:P2,project_daily:V0,project_travel:U0,project_house:Co,project_private:W2,coffee:O0,music:j0,game:n2,heart:F0,gift:L0,zap:$0,book:AS,settlement:M0,utensils:yd,train:jg,"shopping-bag":md,house:Co,"bed-double":Dg,smartphone:gd,"shield-check":Lg,sun:Fg,"message-circle":Mg},qN=[{...Et.orange,id:"food",name:"餐飲",icon:"food"},{...Et.blue,id:"transport",name:"交通",icon:"transport"},{...Et.pink,id:"shopping",name:"購物",icon:"shopping"},{...Et.indigo,id:"housing",name:"房租",icon:"housing"},{...Et.purple,id:"hotel",name:"旅館",icon:"hotel"},{...Et.yellow,id:"ticket",name:"門票",icon:"ticket"},{...Et.gray,id:"telecom",name:"電信",icon:"telecom"},{...Et.red,id:"insurance",name:"保險",icon:"insurance"},{...Et.green,id:"life",name:"生活",icon:"life"},{...Et.slate,id:"other",name:"其他",icon:"other"},{...Et.emerald,id:"settlement",name:"還款結清",icon:"settlement"}],wi=qN.filter(t=>t.id!=="settlement"),w4=["food","transport","shopping","housing","hotel","ticket","telecom","insurance","life","other","coffee","music","game","heart","gift","zap","book","cat","dog","rabbit","bird","fish","turtle"],wh={cat:{id:"cat",name:"貓咪",icon:"cat",prompt:"你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。",greeting:"人類，今天有亂花錢嗎？喵 🐱"},dog:{id:"dog",name:"狗狗",icon:"dog",prompt:"你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。",greeting:"又是美好的一天！我們來記帳吧！汪 🐶"},rabbit:{id:"rabbit",name:"兔兔",icon:"rabbit",prompt:"你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。",greeting:"那個...今天也要好好理財喔 (///▽///) 🐰"},bird:{id:"bird",name:"啾啾",icon:"bird",prompt:"你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。",greeting:"啾啾！我好像看到錢包變瘦了？🐦"},fish:{id:"fish",name:"魚魚",icon:"fish",prompt:"你是一隻只有7秒記憶的金魚，常常忘記上一筆花了什麼，說話呆萌，句尾加「啵」。",greeting:"啵...我們剛剛是要記帳嗎？🐟"},turtle:{id:"turtle",name:"龜龜",icon:"turtle",prompt:"你是一隻講話非常慢、崇尚長期投資的烏龜，句尾加「...🐢」。",greeting:"慢慢來...錢要...慢慢存...🐢"}},GN={users:{},transactions:[],subscriptions:[],customCategories:wi,projects:[{id:"daily",name:"日常開銷",icon:"project_daily",rates:{},type:"public"},{id:"travel",name:"日本旅遊專案",icon:"project_travel",rates:{},type:"public"},{id:"house",name:"夢想置產專案",icon:"project_house",rates:{},type:"public"},{id:"private",name:"私人帳本",icon:"project_private",rates:{},type:"private"}],settings:{character:"cat",selectedCategories:wi.map(t=>t.id)}},_s=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),Vu=(t=new Date)=>{const e=new Date(t),n=e.getTimezoneOffset()*6e4;return new Date(e.getTime()-n).toISOString().slice(0,10)},KN=(t,e="TWD",n=!1)=>n?"****":new Intl.NumberFormat("zh-TW",{style:"currency",currency:e,minimumFractionDigits:0,maximumFractionDigits:2}).format(t),E4=(t,e,n)=>{if(!t)return 0;const r=parseFloat(t);if(isNaN(r))return 0;if(e==="TWD")return r;const i=(n==null?void 0:n[e])||1;return r*i},pE=async()=>{const e=D1().currentUser;return e?await e.getIdToken():null},T4=async t=>{if(!t||t==="TWD")return 1;const e=`sweet_rate_${t}`,n=localStorage.getItem(e),r=24*60*60*1e3;if(n)try{const{rate:i,timestamp:s}=JSON.parse(n);if(Date.now()-s<r)return i}catch(i){console.warn("Cache parse error",i),localStorage.removeItem(e)}try{const i=await pE(),s=i?{Authorization:`Bearer ${i}`}:{},l=await(await fetch(`/api/exchange-rates?currency=${t}`,{headers:s})).json();if(l&&l.rate){const u=JSON.stringify({rate:l.rate,timestamp:Date.now()});return localStorage.setItem(e,u),l.rate}return console.warn(`Exchange Rate API: No rate returned for ${t}`),null}catch(i){return console.error("Exchange Rate API Error:",i),null}},mE=t=>{const e={food:yd,drink:O0,transport:PS,shopping:md,housing:Co,entertainment:e2,gift:L0,utilities:G2,health:F0,travel:U0,education:s2,salary:zS,investment:D0,subscriptions:$0,digital:gd,music:j0,streaming:j2,baby:ES,other:JS,"help-circle":Og,settlement:M0};return Vo&&Vo[t]||e[t]||Og},QN=(t,e="display")=>{if(!t)return{containerClass:"bg-gray-100",iconClass:"text-gray-500",hex:"#94a3b8"};if(e==="input")return{containerClass:"bg-gray-50 border border-gray-100",iconClass:"text-gray-400",activeClass:"bg-rose-500 text-white shadow-md shadow-rose-200 border-transparent",hex:"#64748b"};let n=null;if(t.colorId&&Et&&Et[t.colorId])n=Et[t.colorId];else if(t.bg&&t.text)return{containerClass:t.bg,iconClass:t.text,hex:t.hex||"#475569"};return n?n.bg&&n.text?{containerClass:`${n.bg} ${n.text}`,iconClass:n.text,hex:n.hex}:{containerClass:"",iconClass:"",containerStyle:{backgroundColor:`${n.hex}26`,color:n.hex},iconStyle:{color:n.hex},hex:n.hex}:{containerClass:"bg-slate-100 text-slate-600",iconClass:"",hex:t.hex||"#475569"}},I4=(t,e="w-10 h-10")=>{if(t&&typeof t=="string"&&t.includes("http"))return P.jsx("img",{src:t,className:`${e} rounded-full object-cover border border-gray-200`,alt:"avatar"});let n=z0;if(wh&&wh[t]){const r=wh[t].icon;n=mE(r)}else Vo&&Vo[t]&&(n=Vo[t]);return P.jsx("div",{className:`${e} flex items-center justify-center bg-gray-100 rounded-full text-gray-600 border border-gray-200`,children:P.jsx(n,{className:"w-[60%] h-[60%]",strokeWidth:2})})},JN=async(t,e=null)=>{try{const n=await pE(),r=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify({prompt:t,imageBase64:e})}),i=await r.json();return r.ok?i.text:(console.error("Gemini API Error:",i.error),null)}catch(n){return console.error("Gemini Fetch Error:",n),null}},S4=async t=>{const n=await JN(`你是一個專業的收據識別助手。請分析這張發票或收據圖片，並提取所有「收費項目」。
  
  重要規則：
  1. 請列出所有菜色、商品或服務項目。
  2. 如果看到「服務費」、「清潔費」、「Service Charge」、「SVC」或「10%」等額外費用，請務必將其視為一個獨立的品項列出。
  3. 忽略日期、地址、統編等資訊。
  4. 數量 (quantity) 若無法辨識預設為 1。
  5. 價格 (price) 請轉換為純數字。
  
  請直接回傳一個 JSON 陣列，不要包含 Markdown 格式。
  範例：[{"name": "牛肉麵", "price": 180, "quantity": 1}]`,t);if(!n)return null;try{const r=n.replace(/```json/g,"").replace(/```/g,"").trim();return JSON.parse(r)}catch(r){return console.error("Receipt Parse JSON Error:",r),null}},XN=(t,e,n)=>{const r=z.useCallback(async u=>{if(!t||!e||!Z)throw new Error("無效的帳本狀態");const{amount:h,currency:f,category:p,payer:m,splitType:S,customSplit:R,note:x,projectId:V,date:k,isSubscription:w,subCycle:A,subPayDay:b,paymentMethod:j}=u,L=parseFloat(h);if(isNaN(L))throw new Error("金額無效");let _=S,g=null;if(S==="self")_="custom",g={[m]:L};else if(S==="partner"){_="custom";const ge=Object.keys((n==null?void 0:n.users)||{}).filter(Re=>Re!==m);if(ge.length===1)g={[ge[0]]:L};else if(ge.length>1){const Re=L/ge.length;g={},ge.forEach(lt=>g[lt]=Re)}else g={[m]:L}}else R&&(g={},Object.keys(R).forEach(T=>{const ge=parseFloat(R[T]);g[T]=isNaN(ge)?0:ge}));const v={id:_s(),amount:L,currency:f,category:p,payer:m||e.uid,splitType:_,customSplit:g,note:x||p.name,projectId:V,paymentMethod:j||null},E=new Date(k).toISOString(),I=me(Z,"artifacts",Ke,"public","data","ledgers",t),C=oa(Z);if(w){let T=new Date(E);A==="monthly"?(T.setMonth(T.getMonth()+1),b&&T.setDate(parseInt(b))):A==="weekly"&&T.setDate(T.getDate()+7);const ge={...v,name:x||p.name,cycle:A,payDay:parseInt(b)||1,mode:"infinite",nextPaymentDate:T.toISOString()},Re=[...n.subscriptions||[],ge];C.update(I,{subscriptions:Re});const lt=me(En(I,"transactions"),v.id);C.set(lt,{...v,date:E,isSettlement:!1})}else{const T=me(En(I,"transactions"),v.id);C.set(T,{...v,date:E,isSettlement:!1})}await C.commit()},[t,e,n]),i=z.useCallback(async u=>{if(!t||!Z)return;const h={...u,amount:parseFloat(u.amount)},f=me(Z,"artifacts",Ke,"public","data","ledgers",t),p=me(En(f,"transactions"),h.id),m=JSON.parse(JSON.stringify(h));await Ut(p,m)},[t]),s=z.useCallback(async u=>{if(!t||!Z)return;const h=me(Z,"artifacts",Ke,"public","data","ledgers",t),f=me(En(h,"transactions"),u);await Hd(f)},[t]),o=z.useCallback(async(u,h,f,p)=>{if(!t||!Z)return;const m=me(Z,"artifacts",Ke,"public","data","ledgers",t),S=_s(),R=me(En(m,"transactions"),S),x={id:"settlement",name:"還款結清",icon:"settlement",color:"bg-emerald-100 text-emerald-600",hex:"#059669"};await $l(R,{id:S,amount:parseFloat(u),currency:"TWD",category:x,payer:h,splitType:"settlement",note:`還款給 ${f}`,projectId:p,date:new Date().toISOString(),isSettlement:!0})},[t]),l=z.useCallback(async()=>{if(!(!n||!t||!Z))if(Array.isArray(n.transactions)&&n.transactions.length>0){console.log("⚠️ Starting Migration to Sub-collection...");const u=n.transactions,h=400;for(let p=0;p<u.length;p+=h){const m=u.slice(p,p+h),S=oa(Z),R=me(Z,"artifacts",Ke,"public","data","ledgers",t);m.forEach(x=>{const V=x.id||_s(),k=me(En(R,"transactions"),V);S.set(k,{...x,id:V})}),await S.commit(),console.log(`Saved batch ${p} - ${p+m.length}`)}const f=me(Z,"artifacts",Ke,"public","data","ledgers",t);await Ut(f,{transactions:ys()}),console.log("✅ Migration Complete."),alert("資料庫升級完成！您的帳本現在支援無限筆數交易。")}else alert("無需升級：目前沒有舊版交易資料。")},[n,t]);return{addTransaction:r,updateTransaction:i,deleteTransaction:s,settleUp:o,migrateToSubCollection:l}},YN=(t,e)=>(z.useEffect(()=>{if(!e||!e.subscriptions||!t||!Z)return;const r=Vu();if(e.lastSubscriptionCheck===r)return;const s=`temp_subs_lock_${t}_${r}`;if(sessionStorage.getItem(s))return;const o=setTimeout(async()=>{sessionStorage.setItem(s,"true");let l=!1,u=[],h=[...e.subscriptions];const f=new Date;f.setHours(0,0,0,0),h=h.map(m=>{let S=new Date(m.nextPaymentDate),R=!1,x=0;for(;S<=f&&x<12;){R=!0,l=!0;const{nextPaymentDate:V,cycle:k,payDay:w,mode:A,...b}=m,j={...b,id:_s(),date:S.toISOString(),note:`[自動扣款] ${m.name}`,isSettlement:!1,amount:parseFloat(b.amount)||0};if(u.push(j),m.cycle==="monthly"){const L=S.getMonth();if(S.setMonth(L+1),m.payDay){const _=new Date(S.getFullYear(),S.getMonth()+1,0).getDate();S.setDate(Math.min(parseInt(m.payDay),_))}}else m.cycle==="weekly"?S.setDate(S.getDate()+7):S.setMonth(S.getMonth()+1);x++}return R?{...m,nextPaymentDate:S.toISOString()}:m});const p=me(Z,"artifacts",Ke,"public","data","ledgers",t);if(l){const m=oa(Z);m.update(p,{subscriptions:h,lastSubscriptionCheck:r}),u.forEach(S=>{const R=me(En(p,"transactions"),S.id);m.set(R,S)}),await m.commit(),console.log(`✅ 已執行自動扣款: ${u.length} 筆`)}else await Ut(p,{lastSubscriptionCheck:r})},5e3);return()=>clearTimeout(o)},[e,t]),{deleteSubscription:z.useCallback(async r=>{if(!t||!e||!Z)return;const i=me(Z,"artifacts",Ke,"public","data","ledgers",t),s=(e.subscriptions||[]).filter(o=>o.id!==r);await Ut(i,{subscriptions:s})},[e,t])}),ZN=(t,e,n,r,i)=>{const s=async(_,g)=>{!t||!Z||await Ut(me(Z,"artifacts",Ke,"public","data","ledgers",t),{[_]:g})},o=z.useCallback(async _=>{if(!_)throw new Error("請先登入");if(!Z)throw new Error("資料庫未連線");const g=Math.random().toString(36).substring(2,8).toUpperCase(),v=_.displayName||"Host";return await $l(me(Z,"artifacts",Ke,"public","data","ledgers",g),{...GN,users:{[_.uid]:{name:v,avatar:"cat",role:"host"}},lastSubscriptionCheck:Vu()}),await $l(me(Z,"users",_.uid),{email:_.email,ledgerCode:g,role:"host",updatedAt:new Date().toISOString()},{merge:!0}),localStorage.setItem("sweet_ledger_code",g),e(g),g},[e]),l=z.useCallback(async(_,g)=>{if(!g)throw new Error("請先登入");if(!Z)throw new Error("資料庫未連線");const v=me(Z,"artifacts",Ke,"public","data","ledgers",_),E=await _h(v);if(E.exists()){const I=E.data();if(!I.users||!I.users[g.uid]){const C=g.displayName||"Guest";await Ut(v,{[`users.${g.uid}`]:{name:C,avatar:"dog",role:"guest"}})}return await $l(me(Z,"users",g.uid),{email:g.email,ledgerCode:_,role:"guest",updatedAt:new Date().toISOString()},{merge:!0}),localStorage.setItem("sweet_ledger_code",_),e(_),!0}else throw new Error("找不到這個帳本代碼！")},[e]),u=z.useCallback(async()=>{if(!(!t||!n||!Z)&&window.confirm("確定要退出此帳本嗎？"))try{await Ut(me(Z,"artifacts",Ke,"public","data","ledgers",t),{[`users.${n.uid}`]:ys()}),i(),alert("您已成功退出帳本。")}catch{alert("退出失敗")}},[t,n,i]),h=z.useCallback(async _=>{var g;if(!(!t||!n||!Z||!r)){if(((g=r.users[n.uid])==null?void 0:g.role)!=="host"){alert("權限不足");return}if(_!==n.uid&&window.confirm("確定要移除這位成員嗎？"))try{await Ut(me(Z,"artifacts",Ke,"public","data","ledgers",t),{[`users.${_}`]:ys()}),alert("成員已成功移除。")}catch{alert("移除失敗")}}},[t,n,r]),f=z.useCallback(async _=>{if(!Z)return null;try{const g=await _h(me(Z,"users",_));if(g.exists())return g.data().ledgerCode}catch{}return null},[]),p=z.useCallback(async _=>{if(!t||!r||!Z)return;const g=me(Z,"artifacts",Ke,"public","data","ledgers",t);let v=[...r.projects||[]],E=_.id;const I={..._,rates:_.rates||{},type:_.type||"public"};return E?v=v.map(C=>C.id===E?{...C,...I}:C):(E=_s(),v.push({...I,id:E})),await Ut(g,{projects:v}),E},[t,r]),m=z.useCallback(async _=>{if(!t||!r||!Z)return;const g=me(Z,"artifacts",Ke,"public","data","ledgers",t),v=r.projects.filter(Re=>Re.id!==_),E=(r.subscriptions||[]).filter(Re=>Re.projectId!==_),I=p_(En(g,"transactions"),jN("projectId","==",_)),C=await y_(I),T=oa(Z);let ge=0;C.forEach(Re=>{ge<450&&(T.delete(Re.ref),ge++)}),T.update(g,{projects:v,subscriptions:E}),await T.commit(),C.size>450&&alert("專案交易過多，部分交易可能未完全刪除。")},[t,r]),S=_=>s("projects",_),R=_=>s("customCategories",_),x=async _=>{const g=(r.customCategories||wi).filter(v=>v.id!==_);await s("customCategories",g)},V=async _=>{let g=[...r.customCategories||wi];_.id?g=g.map(v=>v.id===_.id?_:v):g.push({..._,id:_s()}),await s("customCategories",g)},k=async(_,g,v)=>{const E=r.projects.map(I=>I.id===_?{...I,rates:{...I.rates,[g]:parseFloat(v)}}:I);await s("projects",E)},w=async(_,g)=>{!t||!n||await Ut(me(Z,"artifacts",Ke,"public","data","ledgers",t),{[`users.${n.uid}.${_}`]:g})},A=async _=>s("paymentMethods",_),b=z.useCallback(async()=>{var I;if(!t||!Z||!n)return;if(((I=r.users[n.uid])==null?void 0:I.role)!=="host"){alert("權限不足");return}if(!window.confirm("確定要清空所有交易嗎？"))return;const _=me(Z,"artifacts",Ke,"public","data","ledgers",t),g=oa(Z);g.update(_,{access_token_revoked:!0,subscriptions:[]});const v=p_(En(_,"transactions"));(await y_(v)).forEach(C=>g.delete(C.ref)),await g.commit(),alert("帳本已重置")},[t,r,n]),j=z.useCallback(async()=>{if(!(!n||!Z))try{if(t){const _=me(Z,"artifacts",Ke,"public","data","ledgers",t),g=await _h(_);if(g.exists()){const v=g.data();Object.keys(v.users||{}).length<=1?await Hd(_):await Ut(_,{[`users.${n.uid}`]:ys()})}}await Hd(me(Z,"users",n.uid)),await TC(n),i()}catch(_){throw _.code==="auth/requires-recent-login"?new Error("REQ_RELOGIN"):_}},[n,t,i]);return{createLedger:o,joinLedger:l,leaveLedger:u,kickMember:h,checkUserBinding:f,saveProject:p,deleteProject:m,reorderProjects:S,reorderCategories:R,deleteCategory:x,saveCategory:V,updateProjectRates:k,updateUserSetting:w,updatePaymentMethods:A,resetAccount:b,deleteAccount:j,fixIdentity:()=>{}}},gE=z.createContext(),e4=()=>z.useContext(gE),t4=({children:t})=>{const{user:e}=fE(),{ledgerCode:n,setLedgerCode:r,ledgerData:i,ledgerDocData:s,isLedgerInitializing:o}=HN(e),l=z.useCallback(()=>{r(""),localStorage.removeItem("sweet_ledger_code"),Object.keys(localStorage).forEach(m=>{m.startsWith("sweet_ledger_data_")&&localStorage.removeItem(m)})},[r]),u=ZN(n,r,e,s,l),h=XN(n,e,s),f=YN(n,s),p=z.useMemo(()=>({ledgerCode:n,setLedgerCode:r,ledgerData:i,isLedgerInitializing:o,disconnectLedger:l,...u,...h,...f}),[n,r,i,o,l,u,h,f]);return P.jsx(gE.Provider,{value:p,children:t})};function n4({isOpen:t,onClose:e,editingTx:n,ledgerData:r,user:i,updateTransaction:s,deleteTransaction:o,currentProjectId:l,updateProjectRates:u}){var Li,Zr,Vn,On,ei,Fi,Lt;if(!t||!n||!r)return null;const[h,f]=z.useState(""),[p,m]=z.useState(""),[S,R]=z.useState(""),[x,V]=z.useState(null),[k,w]=z.useState(""),[A,b]=z.useState("even"),[j,L]=z.useState(""),[_,g]=z.useState(""),[v,E]=z.useState(!1),[I,C]=z.useState("TWD"),[T,ge]=z.useState(""),[Re,lt]=z.useState(!1),[Ge,B]=z.useState(""),G=(Li=r.projects)==null?void 0:Li.find(U=>U.id===l),K=(G==null?void 0:G.type)==="private",ie=r.users||{},re=Object.keys(ie).find(U=>ie[U].role==="host"),fe=Object.keys(ie).find(U=>ie[U].role==="guest"),$e=re&&((Zr=ie[re])==null?void 0:Zr.name)||"戶長",ut=fe&&((Vn=ie[fe])==null?void 0:Vn.name)||"成員",Mt=(((On=r.users)==null?void 0:On[i==null?void 0:i.uid])||{}).favoriteCurrencies||WN;z.useEffect(()=>{var U;if(n){f(n.amount.toString()),m(n.note||""),C(n.currency||"TWD");try{const Fe=n.date?new Date(n.date):new Date;R(Vu(Fe))}catch{R(Vu())}w(n.payer);let ue=n.splitType||"even";if(ue==="custom"&&n.customSplit){const Fe=Object.keys(n.customSplit),ji=n.payer;Fe.length===1?Fe[0]===ji?ue="self":ue="partner":Fe.length>1&&(ue="multi_payer")}b(ue);const ce=(U=n.category)==null?void 0:U.id,we=(r.customCategories||wi).find(Fe=>Fe.id===ce)||n.category||wi[0];V(we),n.customSplit?(re&&n.customSplit[re]&&L(n.customSplit[re].toString()),fe&&n.customSplit[fe]&&g(n.customSplit[fe].toString())):(L(""),g("")),L(""),g("")}ge(n.paymentMethod||"")},[n,re,fe,r.customCategories]),z.useEffect(()=>{K&&i&&(b("self"),w(i.uid))},[K,i]);const Mi=async()=>{if(!(!h||parseFloat(h)<=0||v)){E(!0);try{const U=parseFloat(h);let ue=null;if(!K&&(A==="custom"||A==="multi_payer")){const ce=parseFloat(j)||0,we=parseFloat(_)||0;if(Math.abs(ce+we-U)>.1){alert(`金額不符：分攤總和 (${ce+we}) 必須等於總金額 (${U})`),E(!1);return}ue={},re&&(ue[re]=ce),fe&&(ue[fe]=we)}await s({...n,amount:U,currency:I,category:x,note:p||x.name,date:new Date(S).toISOString(),payer:K?i.uid:k,splitType:K?"self":A,customSplit:K?null:ue,paymentMethod:T}),e()}catch(U){console.error("Update failed",U),alert("更新失敗")}finally{E(!1)}}},Xr=async()=>{if(window.confirm("確定要刪除這筆紀錄嗎？"))try{await o(n.id),e()}catch(U){console.error(U)}},pn=(U,ue)=>{const ce=parseFloat(h)||0,we=parseFloat(ue)||0;if(A==="multi_payer")if(U==="host"){L(ue);const Fe=ce-we;g(Fe>=0?Fe.toString():"0")}else{g(ue);const Fe=ce-we;L(Fe>=0?Fe.toString():"0")}else U==="host"?L(ue):g(ue)},en=U=>{var ce;const ue=(ce=ie[k])==null?void 0:ce.role;return U==="host"?ue==="host"?`私人 (${$e})`:ue==="guest"?`代墊 (幫${$e}付)`:`${$e} 全額`:ue==="guest"?`私人 (${ut})`:ue==="host"?`代墊 (幫${ut}付)`:`${ut} 全額`},bn=Ge?_l.filter(U=>U.code.includes(Ge.toUpperCase())||U.name.includes(Ge)):_l,mn=U=>{C(U),lt(!1),B("")},ar=r.customCategories||wi,Dn=mE((x==null?void 0:x.icon)||"food"),Yr=QN(x,"input");return P.jsxs("div",{className:"fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:px-4",children:[P.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",onClick:e}),P.jsxs("div",{className:"bg-white w-full sm:w-[400px] sm:rounded-2xl rounded-t-3xl p-5 pb-8 max-h-[90vh] overflow-y-auto relative z-10 animate-slide-up",children:[P.jsxs("div",{className:"flex justify-between items-center mb-6",children:[P.jsx("h3",{className:"text-xl font-bold text-gray-800",children:"編輯紀錄"}),P.jsx("button",{onClick:e,className:"p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200",children:P.jsx(Ug,{size:20})})]}),P.jsx("div",{className:"flex justify-center mb-6 overflow-x-auto no-scrollbar",children:P.jsxs("div",{className:"text-4xl font-bold text-gray-900 flex items-center gap-2 px-4 mx-auto",children:[P.jsx("span",{className:"text-2xl text-gray-300 whitespace-nowrap",children:((ei=_l.find(U=>U.code===I))==null?void 0:ei.symbol)||"$"}),P.jsx("input",{type:"number",value:h,onChange:U=>{parseFloat(U.target.value)>1e8||f(U.target.value)},className:"w-32 text-center outline-none bg-transparent placeholder-gray-200 min-w-[120px]",placeholder:"0"}),P.jsxs("button",{onClick:()=>lt(!0),className:"flex items-center gap-1 text-sm font-bold bg-gray-100 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap shrink-0",children:[I," ",P.jsx(Vg,{size:14})]})]})}),P.jsxs("div",{className:"space-y-4",children:[P.jsxs("div",{className:"flex gap-3",children:[P.jsxs("div",{className:"relative",children:[P.jsx("select",{value:x==null?void 0:x.id,onChange:U=>{const ue=ar.find(ce=>ce.id===U.target.value);ue&&V(ue)},className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10",children:ar.map(U=>P.jsx("option",{value:U.id,children:U.name},U.id))}),P.jsxs("div",{className:`flex items-center gap-2 px-3 py-3 rounded-xl border ${Yr.activeClass} border-transparent flex-none min-w-[100px]`,children:[P.jsx(Dn,{size:20}),P.jsx("span",{className:"font-bold text-sm truncate max-w-[60px]",children:x==null?void 0:x.name})]})]}),P.jsx("input",{type:"text",value:p,onChange:U=>m(U.target.value),placeholder:"備註...",className:"flex-1 bg-gray-50 px-4 rounded-xl border border-gray-100 outline-none text-sm font-medium focus:border-rose-200"})]}),P.jsxs("div",{className:"flex items-center bg-gray-50 px-4 py-3 rounded-xl border border-gray-100",children:[P.jsx(V0,{size:18,className:"text-gray-400 mr-3"}),P.jsx("input",{type:"date",value:S,onChange:U=>R(U.target.value),className:"bg-transparent font-bold text-gray-700 outline-none w-full text-sm"})]}),!K&&P.jsxs("div",{className:"bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-3",children:[P.jsxs("div",{className:"flex justify-between items-center",children:[P.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[P.jsx($2,{size:16}),P.jsx("span",{className:"text-xs font-bold",children:"分攤模式"})]}),P.jsxs("select",{value:A,onChange:U=>b(U.target.value),className:"bg-white border border-gray-200 text-xs font-bold py-1 px-2 rounded-lg outline-none",children:[P.jsx("option",{value:"even",children:"平均分攤"}),P.jsx("option",{value:"multi_payer",children:"混合出資"}),P.jsx("option",{value:"self",children:((Fi=ie[k])==null?void 0:Fi.role)==="host"?en("host"):en("guest")}),P.jsx("option",{value:"partner",children:((Lt=ie[k])==null?void 0:Lt.role)==="host"?en("guest"):en("host")})]})]}),(A==="multi_payer"||A==="custom")&&P.jsxs("div",{className:"flex gap-2 animate-fade-in",children:[P.jsxs("div",{className:"relative flex-1",children:[P.jsx("span",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400",children:$e}),P.jsx("input",{type:"number",value:j,onChange:U=>pn("host",U.target.value),className:"w-full pl-10 pr-2 py-2 text-xs rounded border border-gray-200 text-right outline-none"})]}),P.jsxs("div",{className:"relative flex-1",children:[P.jsx("span",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400",children:ut}),P.jsx("input",{type:"number",value:_,onChange:U=>pn("guest",U.target.value),className:"w-full pl-10 pr-2 py-2 text-xs rounded border border-gray-200 text-right outline-none"})]})]}),P.jsx("div",{className:"h-[1px] bg-gray-200 w-full"}),P.jsxs("div",{className:"flex justify-between items-center",children:[P.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[P.jsx(z0,{size:16}),P.jsx("span",{className:"text-xs font-bold",children:"付款人"})]}),P.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar max-w-[200px]",children:Object.keys(ie).map(U=>P.jsx("button",{onClick:()=>w(U),className:`text-[10px] font-bold px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${k===U?"bg-gray-800 text-white border-gray-800":"bg-white text-gray-500 border-gray-200"}`,children:ie[U].name},U))})]}),A!=="multi_payer"&&P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"h-[1px] bg-gray-200 w-full"}),P.jsxs("div",{className:"flex justify-between items-center",children:[P.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[P.jsx(qS,{size:16}),P.jsx("span",{className:"text-xs font-bold",children:"支付方式"})]}),P.jsxs("div",{className:"relative w-40",children:[P.jsxs("select",{value:T,onChange:U=>ge(U.target.value),className:`w-full appearance-none bg-white border border-gray-200 text-xs font-bold py-1 pl-2 pr-8 rounded-lg outline-none text-right ${T?"text-gray-700":"text-gray-400"}`,children:[P.jsx("option",{value:"",children:"未指定"}),(r.paymentMethods||[]).map(U=>P.jsx("option",{value:U.id,children:U.name},U.id))]}),P.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",children:P.jsx(Vg,{size:14})})]})]})]})]}),K&&P.jsxs("div",{className:"flex items-center justify-center gap-2 p-3 bg-slate-50 rounded-xl text-slate-400 border border-slate-100",children:[P.jsx(u2,{size:12}),P.jsx("span",{className:"text-xs font-bold",children:"私人帳本模式 (不進行分攤)"})]})]}),P.jsxs("div",{className:"flex gap-3 mt-8",children:[P.jsx("button",{onClick:Xr,className:"p-4 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors",children:P.jsx(O2,{size:24})}),P.jsxs("button",{onClick:Mi,disabled:v,className:"flex-1 bg-gray-900 text-white font-bold rounded-2xl py-4 flex items-center justify-center gap-2 active:scale-95 transition-transform disabled:opacity-50",children:[v?P.jsx(w2,{className:"animate-spin"}):P.jsx(MS,{size:24}),"儲存變更"]})]}),Re&&P.jsxs("div",{className:"absolute inset-0 z-[70] flex flex-col justify-end",children:[P.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",onClick:()=>lt(!1)}),P.jsxs("div",{className:"bg-white rounded-t-3xl p-6 relative z-10 max-h-[80vh] flex flex-col animate-slide-up shadow-2xl",children:[P.jsxs("div",{className:"flex justify-between items-center mb-4",children:[P.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"選擇幣別"}),P.jsx("button",{onClick:()=>lt(!1),className:"p-2 bg-gray-50 rounded-full",children:P.jsx(Ug,{size:20})})]}),P.jsxs("div",{className:"relative mb-4",children:[P.jsx(T2,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),P.jsx("input",{type:"text",placeholder:"搜尋貨幣...",value:Ge,onChange:U=>B(U.target.value),className:"w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none border border-transparent focus:bg-white focus:border-rose-200 transition-all"})]}),P.jsxs("div",{className:"overflow-y-auto space-y-6 flex-1",children:[!Ge&&P.jsxs("div",{children:[P.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase mb-2",children:"常用貨幣"}),P.jsx("div",{className:"grid grid-cols-3 gap-3",children:["TWD",...Mt.filter(U=>U!=="TWD")].map(U=>{const ue=_l.find(ce=>ce.code===U);return ue?P.jsxs("button",{onClick:()=>mn(U),className:`flex flex-col items-center justify-center gap-1 p-4 rounded-2xl border transition-all ${I===U?"bg-rose-50 border-rose-500 text-rose-600 ring-1 ring-rose-500":"bg-white border-gray-100 hover:border-gray-300"}`,children:[P.jsx("span",{className:"text-2xl",children:ue.flag}),P.jsx("span",{className:"font-bold text-sm",children:U})]},U):null})})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase mb-2",children:"所有貨幣"}),P.jsx("div",{className:"space-y-2",children:bn.map(U=>P.jsxs("button",{onClick:()=>mn(U.code),className:"w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left",children:[P.jsx("span",{className:"text-2xl w-8 text-center",children:U.flag}),P.jsxs("div",{className:"flex-1",children:[P.jsx("div",{className:"font-bold text-gray-800",children:U.code}),P.jsx("div",{className:"text-xs text-gray-400",children:U.name})]}),I===U.code&&P.jsx(jS,{size:18,className:"text-rose-500"})]},U.code))})]})]})]})]})]})]})}const r4=It.lazy(()=>sr(()=>import("./DashboardView-CUv3DIAg.js"),[])),i4=It.lazy(()=>sr(()=>import("./AddExpenseView-B8mIYOn_.js"),__vite__mapDeps([0,1,2]))),s4=It.lazy(()=>sr(()=>import("./StatsView-ArpLkl8m.js"),__vite__mapDeps([3,4]))),o4=It.lazy(()=>sr(()=>import("./ProjectsView-CizEPR9U.js"),__vite__mapDeps([5,6]))),a4=It.lazy(()=>sr(()=>import("./SettingsView-C7U7bBZD.js"),__vite__mapDeps([7,6,4,2]))),l4=It.lazy(()=>sr(()=>import("./OnboardingView-SUvq9rIE.js"),__vite__mapDeps([8,9]))),u4=It.lazy(()=>sr(()=>import("./DecisionView-CaeNEo5-.js"),__vite__mapDeps([10,9]))),c4=It.lazy(()=>sr(()=>import("./SubscriptionsView-CPmd7fde.js"),__vite__mapDeps([11,1]))),vl=()=>P.jsx("div",{className:"flex h-full items-center justify-center p-10",children:P.jsx("div",{className:"w-8 h-8 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin"})});function h4(){const{user:t,loading:e,loginWithGoogle:n,logout:r}=fE(),{ledgerCode:i,ledgerData:s,isLedgerInitializing:o,createLedger:l,joinLedger:u,disconnectLedger:h,setLedgerCode:f,checkUserBinding:p,addTransaction:m,updateTransaction:S,deleteTransaction:R,deleteSubscription:x,settleUp:V,saveProject:k,deleteProject:w,reorderProjects:A,updateProjectRates:b,saveCategory:j,deleteCategory:L,reorderCategories:_,updateUserSetting:g,resetAccount:v,fixIdentity:E}=e4(),[I,C]=z.useState(()=>localStorage.getItem("sweet_ledger_code")?"dashboard":"onboarding"),[T,ge]=z.useState(0),[Re,lt]=z.useState(!1),[Ge,B]=z.useState(!1),[G,K]=z.useState(()=>localStorage.getItem("sweet_last_project_id")||"daily"),[ie,re]=z.useState(()=>new URLSearchParams(window.location.search).get("invite")||""),[fe,$e]=z.useState(!1),[ut,ct]=z.useState(null),[Mt,Mi]=z.useState(!1),[Xr,pn]=z.useState({id:"",name:"",icon:"project_daily"}),[en,bn]=z.useState(!1),[mn,ar]=z.useState({id:"",name:"",icon:"food",color:v_[0].class,hex:v_[0].hex}),[Dn,Yr]=z.useState(""),[Li,Zr]=z.useState(!1),[Vn,On]=z.useState(""),[ei,Fi]=z.useState(new Date().toISOString().slice(0,7)),[Lt,U]=z.useState({stats:!1,projects:!1,settings:!1});z.useEffect(()=>{I==="stats"&&!Lt.stats&&U(X=>({...X,stats:!0})),I==="projects"&&!Lt.projects&&U(X=>({...X,projects:!0})),I==="settings"&&!Lt.settings&&U(X=>({...X,settings:!0}))},[I]),z.useEffect(()=>{window.scrollTo(0,0)},[I]),z.useEffect(()=>{G&&localStorage.setItem("sweet_last_project_id",G)},[G]),z.useEffect(()=>{s&&s.projects&&(s.projects.some(Pe=>Pe.id===G)||K("daily"))},[s,G]),z.useEffect(()=>{(async()=>{if(i&&t&&s){I==="onboarding"&&C("dashboard");return}if(t&&!i&&!o){if(B(!0),ie)try{await u(ie,t),re("")}catch(Pe){alert(`加入失敗: ${Pe.message}`),re(""),C("decision")}else{const Pe=await p(t.uid);Pe?(f(Pe),localStorage.setItem("sweet_ledger_code",Pe)):C("decision")}B(!1);return}!t&&!i&&!e&&C("onboarding")})()},[i,o,e,t,ie,s]),z.useEffect(()=>{s&&t&&s.users&&s.users[t.uid]&&Yr(s.users[t.uid].name)},[s,t]);const ue=async()=>{try{await n()}catch(X){alert(`登入失敗: ${X.message}`)}},ce=async X=>{re(X),await ue()},we=async()=>{B(!0);try{await l(t)}catch(X){alert(X.message)}B(!1)},Fe=async X=>{B(!0);try{await u(X,t)}catch(Pe){alert(Pe.message)}B(!1)},ji=async()=>{confirm("確定要登出嗎？")&&(h(),localStorage.removeItem("sweet_last_currency"),localStorage.removeItem("sweet_last_project_id"),await r(),C("onboarding"))},Bs=X=>{ge(Pe=>Pe+1),C("add")},vc=async()=>{!i||!Vn||(Zr(!1),await g("avatar",Vn),On(""))},ti=async(X,Pe)=>{!i||!G||await b(G,X,Pe)},Ra=async()=>{!i||!Dn||await g("name",Dn)},Pa=async()=>{prompt(`警告：此操作將刪除所有交易紀錄且無法復原！
請輸入 RESET 確認重置：`)==="RESET"&&await v()},Hs=async()=>{if(alert(`【功能說明】此功能僅供「原戶長 (Host)」使用。

當您因為「更換手機」或「重新安裝 App」導致身份變成訪客，無法管理帳本時，此功能可以協助您找回戶長權限。`),!confirm(`⚠️嚴重警告⚠️

若您只是普通的「成員 (Guest)」，請絕對不要執行此操作！

這將會強制將原戶長的資料覆蓋到您身上，導致帳本權限錯亂與資料損毀。

您確定您是「原戶長」且目前「遺失權限」嗎？`))return;const X=prompt(`最後確認：

若您確定要執行救援，請輸入「我是戶長」四個字：`);if(X==="我是戶長")try{await E(),alert("權限修復成功！您已取回戶長身份。")}catch{alert("修復失敗，請稍後再試。")}else X!==null&&alert("輸入錯誤，取消操作。")},wc=async()=>{if(!Xr.name)return;Mi(!1);const X={...Xr};X.type==="private"&&!X.owner&&(X.owner=t.uid),pn({id:"",name:"",icon:"project_daily"});const Pe=await k(X);Pe&&K(Pe)},Ec=async X=>{confirm("確定要刪除這個專案嗎？")&&(G===X&&K("daily"),await w(X))},Ws=async()=>{mn.name&&(bn(!1),await j({...mn}))},xa=async X=>{confirm("確定要刪除這個分類嗎？")&&(bn(!1),await L(X))},Na=async(X,Pe,gn)=>{if(!(!X||X<=0)&&confirm(`確定要結清 ${KN(X,"TWD")} 給 ${Pe} 嗎？`))try{await V(X,gn,Pe,G)}catch{alert("結清失敗")}},ni=(X=[])=>{if(!s)return;let gn="data:text/csv;charset=utf-8,"+"\uFEFF"+`Date,Project,Category,Note,Amount,Currency,Payer,SplitType
`;s.transactions.forEach(Ie=>{var lr;if(X.length>0&&!X.includes(Ie.projectId))return;const yn=s.projects.find(Tc=>Tc.id===Ie.projectId);if((yn==null?void 0:yn.type)==="private"&&yn.owner!==t.uid)return;const ri=[new Date(Ie.date).toLocaleDateString(),(yn==null?void 0:yn.name)||"Unknown",Ie.category.name,`"${(Ie.note||"").replace(/"/g,'""')}"`,Ie.amount,Ie.currency||"TWD",((lr=s.users[Ie.payer])==null?void 0:lr.name)||"Unknown",Ie.splitType].join(",");gn+=ri+`
`});const Ln=document.createElement("a");Ln.setAttribute("href",encodeURI(gn)),Ln.setAttribute("download",`sweetledger_exp_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(Ln),Ln.click(),document.body.removeChild(Ln)},qs=!(i&&s&&t)&&e,Mn=t&&i&&!s&&o,Da=t&&i&&!s&&!o;return qs||Mn||Ge&&!s?P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 z-[200] relative",children:[P.jsx("div",{style:{fontSize:"4rem",animation:"sweet-bounce 1s infinite"},children:"🍰"}),P.jsx("p",{style:{marginTop:"1rem",color:"#db2777",fontWeight:"bold",fontSize:"0.875rem",animation:"sweet-fade 1.5s infinite alternate"},children:Ge?"正在同步資料...":"SweetLedger Loading..."})]}):Da?P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center animate-in fade-in duration-300",children:[P.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:P.jsx(_2,{className:"text-gray-400",size:32})}),P.jsx("h2",{className:"text-lg font-bold text-gray-900 mb-2",children:"無法讀取帳本"}),P.jsx("p",{className:"text-gray-500 text-sm mb-6 max-w-xs",children:"我們找不到您的帳本資料，可能是網路連線不穩或帳本已被刪除。"}),P.jsx("button",{onClick:()=>h(),className:"px-6 py-3 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-transform",children:"重回首頁 (Reset)"})]}):P.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans pb-[env(safe-area-inset-bottom)] animate-in fade-in duration-500 relative",children:[P.jsxs(It.Suspense,{fallback:P.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-white",children:P.jsx("div",{className:"text-4xl animate-bounce",children:"🍰"})}),children:[I==="onboarding"&&P.jsx(l4,{handleGoogleLogin:ue,loading:Ge,onJoinWithCode:ce}),I==="decision"&&P.jsx(u4,{user:t,onCreate:we,onJoin:Fe})]}),I!=="onboarding"&&I!=="decision"&&s&&t&&P.jsxs(P.Fragment,{children:[P.jsxs(It.Suspense,{fallback:P.jsx(vl,{}),children:[P.jsx("div",{className:I==="add"?"block h-full":"hidden",children:P.jsx(i4,{ledgerData:s,user:t,currentProjectId:G,setView:C,addTransaction:m,updateProjectRates:b},T)}),P.jsx("div",{className:I==="subscriptions"?"block h-full":"hidden",children:P.jsx(c4,{ledgerData:s,user:t,setView:C,handleDeleteSubscription:x})}),P.jsx("div",{className:I==="dashboard"?"block":"hidden",children:P.jsx(r4,{ledgerData:s,currentProjectId:G,setCurrentProjectId:K,privacyMode:Re,setPrivacyMode:lt,setIsEditTxModalOpen:$e,setEditingTx:ct,user:t,handleSettleUp:Na,handleOpenAddExpense:Bs,setView:C})}),P.jsx("div",{className:I==="stats"?"block":"hidden",children:Lt.stats&&P.jsx(It.Suspense,{fallback:P.jsx(vl,{}),children:P.jsx(s4,{ledgerData:s,currentProjectId:G,statsMonth:ei,setStatsMonth:Fi,privacyMode:Re,setEditingTx:ct,setIsEditTxModalOpen:$e})})}),P.jsx("div",{className:I==="projects"?"block":"hidden",children:Lt.projects&&P.jsx(It.Suspense,{fallback:P.jsx(vl,{}),children:P.jsx(o4,{ledgerData:s,user:t,isEditingProject:Mt,setIsEditingProject:Mi,editingProjectData:Xr,setEditingProjectData:pn,handleSaveProject:wc,handleDeleteProject:Ec,handleReorderProjects:A,updateProjectRates:b})})}),P.jsx("div",{className:I==="settings"?"block":"hidden",children:Lt.settings&&P.jsx(It.Suspense,{fallback:P.jsx(vl,{}),children:P.jsx(a4,{ledgerData:s,user:t,setView:C,isEditingCategory:en,setIsEditingCategory:bn,editingCategoryData:mn,setEditingCategoryData:ar,handleSaveCategory:Ws,handleDeleteCategory:xa,handleExport:ni,handleResetAccount:Pa,handleLogout:ji,isAvatarModalOpen:Li,setIsAvatarModalOpen:Zr,myNickname:Dn,setMyNickname:Yr,updateNickname:Ra,tempAvatar:Vn,handleAvatarSelect:On,confirmAvatarUpdate:vc,handleFixIdentity:Hs,ledgerCode:i,updateLedgerCurrency:ti,currentProjectId:G,handleReorderCategories:_,updateUserSetting:g})})}),P.jsx("div",{className:"fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]",children:P.jsxs("div",{className:"flex justify-between items-center max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>C("dashboard"),className:`flex flex-col items-center gap-1 p-2 ${I==="dashboard"?"text-rose-500":"text-gray-400"}`,children:[P.jsx(Co,{size:24,strokeWidth:I==="dashboard"?2.5:2}),P.jsx("span",{className:"text-[10px] font-medium",children:"首頁"})]}),P.jsxs("button",{onClick:()=>C("stats"),className:`flex flex-col items-center gap-1 p-2 ${I==="stats"?"text-rose-500":"text-gray-400"}`,children:[P.jsx(VS,{size:24,strokeWidth:I==="stats"?2.5:2}),P.jsx("span",{className:"text-[10px] font-medium",children:"分析"})]}),P.jsx("div",{className:"relative -top-6",children:P.jsx("button",{onClick:()=>Bs(),className:"w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform",children:P.jsx(p2,{size:32})})}),P.jsxs("button",{onClick:()=>C("projects"),className:`flex flex-col items-center gap-1 p-2 ${I==="projects"?"text-rose-500":"text-gray-400"}`,children:[P.jsx(D0,{size:24,strokeWidth:I==="projects"?2.5:2}),P.jsx("span",{className:"text-[10px] font-medium",children:"專案"})]}),P.jsxs("button",{onClick:()=>C("settings"),className:`flex flex-col items-center gap-1 p-2 ${I==="settings"?"text-rose-500":"text-gray-400"}`,children:[P.jsx(S2,{size:24,strokeWidth:I==="settings"?2.5:2}),P.jsx("span",{className:"text-[10px] font-medium",children:"設定"})]})]})})]}),P.jsx(n4,{isOpen:fe,onClose:()=>{$e(!1),ct(null)},editingTx:ut,ledgerData:s,user:t,currentProjectId:G,updateTransaction:async X=>{$e(!1),ct(null),await S(X)},deleteTransaction:async X=>{$e(!1),ct(null),await R(X)},updateProjectRates:b})]})]})}function d4(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let l,u;const h=async(p=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(l=await sr(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/sw.js",{scope:"/",type:"classic"})).catch(p=>{o==null||o(p)}),!l)return;l.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),l.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),l.register({immediate:e}).then(p=>{s?s("/sw.js",p):i==null||i(p)}).catch(p=>{o==null||o(p)})}}return u=f(),h}const f4=z.createContext(null),Eh={didCatch:!1,error:null};class p4 extends z.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Eh}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(Eh)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&m4(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(Eh)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let l=e;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")l=n(u);else if(r)l=z.createElement(r,u);else if(i!==void 0)l=i;else throw o}return z.createElement(f4.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},l)}}function m4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}d4({onNeedRefresh(){},onOfflineReady(){console.log("App ready to work offline")}});function g4({error:t,resetErrorBoundary:e}){return P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center animate-in fade-in",children:[P.jsx("div",{className:"w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4",children:P.jsx("span",{className:"text-3xl",children:"🤕"})}),P.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"發生了一點小問題"}),P.jsx("p",{className:"text-gray-500 text-sm mb-6 max-w-xs mx-auto",children:"系統偵測到異常錯誤，為了保護您的資料，我們暫停了運作。"}),P.jsx("div",{className:"w-full max-w-sm bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 overflow-x-auto text-left",children:P.jsx("p",{className:"text-xs font-mono text-red-500 break-all",children:t.message||"Unknown Error"})}),P.jsxs("div",{className:"flex gap-3 w-full max-w-xs",children:[P.jsx("button",{onClick:()=>window.location.reload(),className:"flex-1 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl active:scale-95 transition-transform",children:"重新整理"}),P.jsx("button",{onClick:e,className:"flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-300 active:scale-95 transition-transform",children:"嘗試恢復"})]}),P.jsx("p",{className:"mt-8 text-[10px] text-gray-400",children:"SweetLedger PWA Protection"})]})}Th.createRoot(document.getElementById("root")).render(P.jsx(It.StrictMode,{children:P.jsx(p4,{FallbackComponent:g4,children:P.jsx(BN,{children:P.jsx(t4,{children:P.jsx(h4,{})})})})}));export{w4 as A,_s as B,Vg as C,wi as D,e4 as E,wh as F,F0 as H,GN as I,u2 as L,v4 as M,p2 as P,w2 as R,P2 as S,O2 as T,z0 as U,W2 as W,Ug as X,E4 as a,M0 as b,J as c,QN as d,_l as e,KN as f,mE as g,MS as h,$2 as i,P as j,JN as k,Vu as l,WN as m,V0 as n,qS as o,S4 as p,T2 as q,z as r,jS as s,T4 as t,UE as u,dS as v,y4 as w,I4 as x,It as y,v_ as z};
