(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Qp={},Oy=typeof import.meta<"u"&&Qp?Qp:{};window.__firebase_config=Oy.VITE_FIREBASE_CONFIG||"{}";window.__initial_auth_token=Oy.VITE_AUTH_TOKEN||"";window.__app_id="sweet-ledger-beta";function j1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var My={exports:{}},wu={},Ly={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),F1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),z1=Symbol.for("react.strict_mode"),B1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),H1=Symbol.for("react.context"),W1=Symbol.for("react.forward_ref"),q1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),K1=Symbol.for("react.lazy"),Xp=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,Uy={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||jy}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=Ps.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||jy}var Rd=Cd.prototype=new zy;Rd.constructor=Cd;Fy(Rd,Ps.prototype);Rd.isPureReactComponent=!0;var Jp=Array.isArray,By=Object.prototype.hasOwnProperty,xd={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)By.call(e,r)&&!$y.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:t,key:s,ref:o,props:i,_owner:xd.current}}function X1(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function J1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J1(""+t.key):e.toString(36)}function ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case F1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wc(o,0):r,Jp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),ll(i,e,n,"",function(h){return h})):i!=null&&(Pd(i)&&(i=X1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+wc(s,l);o+=ll(s,e,n,u,i)}else if(u=Q1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+wc(s,l++),o+=ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},ul={transition:null},Z1={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:xd};function Wy(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ps;le.Fragment=U1;le.Profiler=B1;le.PureComponent=Cd;le.StrictMode=z1;le.Suspense=q1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;le.act=Wy;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)By.call(e,u)&&!$y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:na,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:H1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};le.createElement=Hy;le.createFactory=function(t){var e=Hy.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:W1,render:t}};le.isValidElement=Pd;le.lazy=function(t){return{$$typeof:K1,_payload:{_status:-1,_result:t},_init:Y1}};le.memo=function(t,e){return{$$typeof:G1,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};le.unstable_act=Wy;le.useCallback=function(t,e){return xt.current.useCallback(t,e)};le.useContext=function(t){return xt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};le.useEffect=function(t,e){return xt.current.useEffect(t,e)};le.useId=function(){return xt.current.useId()};le.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return xt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};le.useRef=function(t){return xt.current.useRef(t)};le.useState=function(t){return xt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return xt.current.useTransition()};le.version="18.3.1";Ly.exports=le;var oe=Ly.exports;const eE=j1(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE=oe,nE=Symbol.for("react.element"),rE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,sE=tE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oE={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iE.call(e,r)&&!oE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nE,type:t,key:s,ref:o,props:i,_owner:sE.current}}wu.Fragment=rE;wu.jsx=qy;wu.jsxs=qy;My.exports=wu;var _=My.exports,ah={},Gy={exports:{}},Gt={},Ky={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Z){var re=z.length;z.push(Z);e:for(;0<re;){var Te=re-1>>>1,ge=z[Te];if(0<i(ge,Z))z[Te]=Z,z[re]=ge,re=Te;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],re=z.pop();if(re!==Z){z[0]=re;e:for(var Te=0,ge=z.length,Ve=ge>>>1;Te<Ve;){var Xt=2*(Te+1)-1,Jt=z[Xt],Nt=Xt+1,un=z[Nt];if(0>i(Jt,re))Nt<ge&&0>i(un,Jt)?(z[Te]=un,z[Nt]=re,Te=Nt):(z[Te]=Jt,z[Xt]=re,Te=Xt);else if(Nt<ge&&0>i(un,re))z[Te]=un,z[Nt]=re,Te=Nt;else break e}}return Z}function i(z,Z){var re=z.sortIndex-Z.sortIndex;return re!==0?re:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,p=3,k=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=z)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function b(z){if(N=!1,A(z),!P)if(n(u)!==null)P=!0,hr(U);else{var Z=n(h);Z!==null&&Qt(b,Z.startTime-z)}}function U(z,Z){P=!1,N&&(N=!1,S(y),y=-1),k=!0;var re=p;try{for(A(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||z&&!C());){var Te=m.callback;if(typeof Te=="function"){m.callback=null,p=m.priorityLevel;var ge=Te(m.expirationTime<=Z);Z=t.unstable_now(),typeof ge=="function"?m.callback=ge:m===n(u)&&r(u),A(Z)}else r(u);m=n(u)}if(m!==null)var Ve=!0;else{var Xt=n(h);Xt!==null&&Qt(b,Xt.startTime-Z),Ve=!1}return Ve}finally{m=null,p=re,k=!1}}var j=!1,E=null,y=-1,w=5,T=-1;function C(){return!(t.unstable_now()-T<w)}function R(){if(E!==null){var z=t.unstable_now();T=z;var Z=!0;try{Z=E(!0,z)}finally{Z?I():(j=!1,E=null)}}else j=!1}var I;if(typeof v=="function")I=function(){v(R)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,_n=St.port2;St.port1.onmessage=R,I=function(){_n.postMessage(null)}}else I=function(){O(R,0)};function hr(z){E=z,j||(j=!0,I())}function Qt(z,Z){y=O(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,hr(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var re=p;p=Z;try{return z()}finally{p=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=p;p=z;try{return Z()}finally{p=re}},t.unstable_scheduleCallback=function(z,Z,re){var Te=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Te+re:Te):re=Te,z){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=re+ge,z={id:f++,callback:Z,priorityLevel:z,startTime:re,expirationTime:ge,sortIndex:-1},re>Te?(z.sortIndex=re,e(h,z),n(u)===null&&z===n(h)&&(N?(S(y),y=-1):N=!0,Qt(b,re-Te))):(z.sortIndex=ge,e(u,z),P||k||(P=!0,hr(U))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Z=p;return function(){var re=p;p=Z;try{return z.apply(this,arguments)}finally{p=re}}}})(Qy);Ky.exports=Qy;var aE=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lE=oe,qt=aE;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xy=new Set,No={};function Ri(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(No[t]=e,t=0;t<e.length;t++)Xy.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,uE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zp={},em={};function cE(t){return lh.call(em,t)?!0:lh.call(Zp,t)?!1:uE.test(t)?em[t]=!0:(Zp[t]=!0,!1)}function hE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dE(t,e,n,r){if(e===null||typeof e>"u"||hE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nd,Dd);ht[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nd,Dd);ht[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nd,Dd);ht[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dE(e,n,i,r)&&(n=null),r||i===null?cE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=lE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Wi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),tm=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Ec;function ao(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Tc=!1;function Ic(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function fE(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Wi:return"Portal";case uh:return"Profiler";case Vd:return"StrictMode";case ch:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yy:return(t.displayName||"Context")+".Consumer";case Jy:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function pE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mE(t){var e=ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=mE(t))}function tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fh(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nv(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function ph(t,e){nv(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(lo(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function rv(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gE=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){gE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ov(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yE=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(t,e){if(e){if(yE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,ss=null,os=null;function om(t){if(t=sa(t)){if(typeof Eh!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Au(e),Eh(t.stateNode,t.type,e))}}function lv(t){ss?os?os.push(t):os=[t]:ss=t}function uv(){if(ss){var t=ss,e=os;if(os=ss=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function cv(t,e){return t(e)}function hv(){}var Sc=!1;function dv(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return cv(t,e,n)}finally{Sc=!1,(ss!==null||os!==null)&&(hv(),uv())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Th=!1;if(Zn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Th=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Th=!1}function vE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var yo=!1,Nl=null,Dl=!1,Ih=null,_E={onError:function(t){yo=!0,Nl=t}};function wE(t,e,n,r,i,s,o,l,u){yo=!1,Nl=null,vE.apply(_E,arguments)}function EE(t,e,n,r,i,s,o,l,u){if(wE.apply(this,arguments),yo){if(yo){var h=Nl;yo=!1,Nl=null}else throw Error(L(198));Dl||(Dl=!0,Ih=h)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(xi(t)!==t)throw Error(L(188))}function TE(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return am(i),t;if(s===r)return am(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function pv(t){return t=TE(t),t!==null?mv(t):null}function mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mv(t);if(e!==null)return e;t=t.sibling}return null}var gv=qt.unstable_scheduleCallback,lm=qt.unstable_cancelCallback,IE=qt.unstable_shouldYield,SE=qt.unstable_requestPaint,$e=qt.unstable_now,AE=qt.unstable_getCurrentPriorityLevel,jd=qt.unstable_ImmediatePriority,yv=qt.unstable_UserBlockingPriority,bl=qt.unstable_NormalPriority,kE=qt.unstable_LowPriority,vv=qt.unstable_IdlePriority,Eu=null,kn=null;function CE(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:PE,RE=Math.log,xE=Math.LN2;function PE(t){return t>>>=0,t===0?32:31-(RE(t)/xE|0)|0}var $a=64,Ha=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=uo(l):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function NE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _v(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function bE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ev,Ud,Tv,Iv,Sv,Ah=!1,Wa=[],Pr=null,Nr=null,Dr=null,Vo=new Map,Oo=new Map,Er=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OE(t,e,n,r,i){switch(e){case"focusin":return Pr=to(Pr,t,e,n,r,i),!0;case"dragenter":return Nr=to(Nr,t,e,n,r,i),!0;case"mouseover":return Dr=to(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,to(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,to(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=di(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=fv(n),e!==null){t.blockedOn=e,Sv(t.priority,function(){Tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=sa(n),e!==null&&Ud(e),t.blockedOn=n,!1;e.shift()}return!0}function cm(t,e,n){cl(t)&&n.delete(e)}function ME(){Ah=!1,Pr!==null&&cl(Pr)&&(Pr=null),Nr!==null&&cl(Nr)&&(Nr=null),Dr!==null&&cl(Dr)&&(Dr=null),Vo.forEach(cm),Oo.forEach(cm)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,ME)))}function Mo(t){function e(i){return no(i,t)}if(0<Wa.length){no(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&no(Pr,t),Nr!==null&&no(Nr,t),Dr!==null&&no(Dr,t),Vo.forEach(e),Oo.forEach(e),n=0;n<Er.length;n++)r=Er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Er.shift()}var as=ur.ReactCurrentBatchConfig,Ol=!0;function LE(t,e,n,r){var i=ve,s=as.transition;as.transition=null;try{ve=1,zd(t,e,n,r)}finally{ve=i,as.transition=s}}function jE(t,e,n,r){var i=ve,s=as.transition;as.transition=null;try{ve=4,zd(t,e,n,r)}finally{ve=i,as.transition=s}}function zd(t,e,n,r){if(Ol){var i=kh(t,e,n,r);if(i===null)Oc(t,e,r,Ml,n),um(t,r);else if(OE(i,t,e,n,r))r.stopPropagation();else if(um(t,r),e&4&&-1<VE.indexOf(t)){for(;i!==null;){var s=sa(i);if(s!==null&&Ev(s),s=kh(t,e,n,r),s===null&&Oc(t,e,r,Ml,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var Ml=null;function kh(t,e,n,r){if(Ml=null,t=Ld(r),t=di(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AE()){case jd:return 1;case yv:return 4;case bl:case kE:return 16;case vv:return 536870912;default:return 16}default:return 16}}var Cr=null,Bd=null,hl=null;function Cv(){if(hl)return hl;var t,e=Bd,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hl=i.slice(t,1<r?1-r:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function hm(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:hm,this.isPropagationStopped=hm,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=Kt(Ns),ia=je({},Ns,{view:0,detail:0}),FE=Kt(ia),kc,Cc,ro,Tu=je({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(kc=t.screenX-ro.screenX,Cc=t.screenY-ro.screenY):Cc=kc=0,ro=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),dm=Kt(Tu),UE=je({},Tu,{dataTransfer:0}),zE=Kt(UE),BE=je({},ia,{relatedTarget:0}),Rc=Kt(BE),$E=je({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),HE=Kt($E),WE=je({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qE=Kt(WE),GE=je({},Ns,{data:0}),fm=Kt(GE),KE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XE[t])?!!e[t]:!1}function Hd(){return JE}var YE=je({},ia,{key:function(t){if(t.key){var e=KE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZE=Kt(YE),eT=je({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Kt(eT),tT=je({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),nT=Kt(tT),rT=je({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=Kt(rT),sT=je({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=Kt(sT),aT=[9,13,27,32],Wd=Zn&&"CompositionEvent"in window,vo=null;Zn&&"documentMode"in document&&(vo=document.documentMode);var lT=Zn&&"TextEvent"in window&&!vo,Rv=Zn&&(!Wd||vo&&8<vo&&11>=vo),mm=" ",gm=!1;function xv(t,e){switch(t){case"keyup":return aT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function uT(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function cT(t,e){if(Gi)return t==="compositionend"||!Wd&&xv(t,e)?(t=Cv(),hl=Bd=Cr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var hT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hT[t.type]:e==="textarea"}function Nv(t,e,n,r){lv(r),e=Ll(e,"onChange"),0<e.length&&(n=new $d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Lo=null;function dT(t){Bv(t,0)}function Iu(t){var e=Xi(t);if(tv(e))return t}function fT(t,e){if(t==="change")return e}var Dv=!1;if(Zn){var xc;if(Zn){var Pc="oninput"in document;if(!Pc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Pc=typeof vm.oninput=="function"}xc=Pc}else xc=!1;Dv=xc&&(!document.documentMode||9<document.documentMode)}function _m(){_o&&(_o.detachEvent("onpropertychange",bv),Lo=_o=null)}function bv(t){if(t.propertyName==="value"&&Iu(Lo)){var e=[];Nv(e,Lo,t,Ld(t)),dv(dT,e)}}function pT(t,e,n){t==="focusin"?(_m(),_o=e,Lo=n,_o.attachEvent("onpropertychange",bv)):t==="focusout"&&_m()}function mT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(Lo)}function gT(t,e){if(t==="click")return Iu(e)}function yT(t,e){if(t==="input"||t==="change")return Iu(e)}function vT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:vT;function jo(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,e){var n=wm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wm(n)}}function Vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _T(t){var e=Ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vv(n.ownerDocument.documentElement,n)){if(r!==null&&qd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Em(n,s);var o=Em(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wT=Zn&&"documentMode"in document&&11>=document.documentMode,Ki=null,Ch=null,wo=null,Rh=!1;function Tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||Ki==null||Ki!==Pl(r)||(r=Ki,"selectionStart"in r&&qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&jo(wo,r)||(wo=r,r=Ll(Ch,"onSelect"),0<r.length&&(e=new $d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Nc={},Mv={};Zn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function Su(t){if(Nc[t])return Nc[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return Nc[t]=e[n];return t}var Lv=Su("animationend"),jv=Su("animationiteration"),Fv=Su("animationstart"),Uv=Su("transitionend"),zv=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){zv.set(t,e),Ri(e,[t])}for(var Dc=0;Dc<Im.length;Dc++){var bc=Im[Dc],ET=bc.toLowerCase(),TT=bc[0].toUpperCase()+bc.slice(1);Zr(ET,"on"+TT)}Zr(Lv,"onAnimationEnd");Zr(jv,"onAnimationIteration");Zr(Fv,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Uv,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IT=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EE(r,e,void 0,t),t.currentTarget=null}function Bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Sm(i,l,h),s=u}}}if(Dl)throw t=Ih,Dl=!1,Ih=null,t}function xe(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||($v(e,t,2,!1),n.add(r))}function Vc(t,e,n){var r=0;e&&(r|=4),$v(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Ka]){t[Ka]=!0,Xy.forEach(function(n){n!=="selectionchange"&&(IT.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Vc("selectionchange",!1,e))}}function $v(t,e,n,r){switch(kv(e)){case 1:var i=LE;break;case 4:i=jE;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=di(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}dv(function(){var h=s,f=Ld(n),m=[];e:{var p=zv.get(t);if(p!==void 0){var k=$d,P=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":k=ZE;break;case"focusin":P="focus",k=Rc;break;case"focusout":P="blur",k=Rc;break;case"beforeblur":case"afterblur":k=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=nT;break;case Lv:case jv:case Fv:k=HE;break;case Uv:k=iT;break;case"scroll":k=FE;break;case"wheel":k=oT;break;case"copy":case"cut":case"paste":k=qE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=pm}var N=(e&4)!==0,O=!N&&t==="scroll",S=N?p!==null?p+"Capture":null:p;N=[];for(var v=h,A;v!==null;){A=v;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,S!==null&&(b=bo(v,S),b!=null&&N.push(Uo(v,b,A)))),O)break;v=v.return}0<N.length&&(p=new k(p,P,null,n,f),m.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&n!==wh&&(P=n.relatedTarget||n.fromElement)&&(di(P)||P[er]))break e;if((k||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?di(P):null,P!==null&&(O=xi(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(N=dm,b="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=pm,b="onPointerLeave",S="onPointerEnter",v="pointer"),O=k==null?p:Xi(k),A=P==null?p:Xi(P),p=new N(b,v+"leave",k,n,f),p.target=O,p.relatedTarget=A,b=null,di(f)===h&&(N=new N(S,v+"enter",P,n,f),N.target=A,N.relatedTarget=O,b=N),O=b,k&&P)t:{for(N=k,S=P,v=0,A=N;A;A=Ui(A))v++;for(A=0,b=S;b;b=Ui(b))A++;for(;0<v-A;)N=Ui(N),v--;for(;0<A-v;)S=Ui(S),A--;for(;v--;){if(N===S||S!==null&&N===S.alternate)break t;N=Ui(N),S=Ui(S)}N=null}else N=null;k!==null&&Am(m,p,k,N,!1),P!==null&&O!==null&&Am(m,O,P,N,!0)}}e:{if(p=h?Xi(h):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var U=fT;else if(ym(p))if(Dv)U=yT;else{U=mT;var j=pT}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=gT);if(U&&(U=U(t,h))){Nv(m,U,n,f);break e}j&&j(t,p,h),t==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&mh(p,"number",p.value)}switch(j=h?Xi(h):window,t){case"focusin":(ym(j)||j.contentEditable==="true")&&(Ki=j,Ch=h,wo=null);break;case"focusout":wo=Ch=Ki=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,Tm(m,n,f);break;case"selectionchange":if(wT)break;case"keydown":case"keyup":Tm(m,n,f)}var E;if(Wd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Gi?xv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Rv&&n.locale!=="ko"&&(Gi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Gi&&(E=Cv()):(Cr=f,Bd="value"in Cr?Cr.value:Cr.textContent,Gi=!0)),j=Ll(h,y),0<j.length&&(y=new fm(y,t,null,n,f),m.push({event:y,listeners:j}),E?y.data=E:(E=Pv(n),E!==null&&(y.data=E)))),(E=lT?uT(t,n):cT(t,n))&&(h=Ll(h,"onBeforeInput"),0<h.length&&(f=new fm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}Bv(m,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bo(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=bo(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=bo(n,s),u!=null&&o.unshift(Uo(n,u,l))):i||(u=bo(n,s),u!=null&&o.push(Uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ST=/\r\n?/g,AT=/\u0000|\uFFFD/g;function km(t){return(typeof t=="string"?t:""+t).replace(ST,`
`).replace(AT,"")}function Qa(t,e,n){if(e=km(e),km(t)!==e&&n)throw Error(L(425))}function jl(){}var xh=null,Ph=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,kT=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(t){return Cm.resolve(null).then(t).catch(RT)}:Dh;function RT(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),An="__reactFiber$"+Ds,zo="__reactProps$"+Ds,er="__reactContainer$"+Ds,bh="__reactEvents$"+Ds,xT="__reactListeners$"+Ds,PT="__reactHandles$"+Ds;function di(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rm(t);t!==null;){if(n=t[An])return n;t=Rm(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[An]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Au(t){return t[zo]||null}var Vh=[],Ji=-1;function ei(t){return{current:t}}function Ne(t){0>Ji||(t.current=Vh[Ji],Vh[Ji]=null,Ji--)}function Ae(t,e){Ji++,Vh[Ji]=t.current,t.current=e}var Hr={},Tt=ei(Hr),Lt=ei(!1),_i=Hr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Fl(){Ne(Lt),Ne(Tt)}function xm(t,e,n){if(Tt.current!==Hr)throw Error(L(168));Ae(Tt,e),Ae(Lt,n)}function Hv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,pE(t)||"Unknown",i));return je({},n,r)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,_i=Tt.current,Ae(Tt,t),Ae(Lt,Lt.current),!0}function Pm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Hv(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,Ne(Lt),Ne(Tt),Ae(Tt,t)):Ne(Lt),Ae(Lt,n)}var qn=null,ku=!1,Lc=!1;function Wv(t){qn===null?qn=[t]:qn.push(t)}function NT(t){ku=!0,Wv(t)}function ti(){if(!Lc&&qn!==null){Lc=!0;var t=0,e=ve;try{var n=qn;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,ku=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),gv(jd,ti),i}finally{ve=e,Lc=!1}}return null}var Yi=[],Zi=0,zl=null,Bl=0,en=[],tn=0,wi=null,Gn=1,Kn="";function ui(t,e){Yi[Zi++]=Bl,Yi[Zi++]=zl,zl=t,Bl=e}function qv(t,e,n){en[tn++]=Gn,en[tn++]=Kn,en[tn++]=wi,wi=t;var r=Gn;t=Kn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var s=32-gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-gn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function Gd(t){t.return!==null&&(ui(t,1),qv(t,1,0))}function Kd(t){for(;t===zl;)zl=Yi[--Zi],Yi[Zi]=null,Bl=Yi[--Zi],Yi[Zi]=null;for(;t===wi;)wi=en[--tn],en[tn]=null,Kn=en[--tn],en[tn]=null,Gn=en[--tn],en[tn]=null}var Wt=null,$t=null,be=!1,pn=null;function Gv(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,$t=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,$t=null,!0):!1;default:return!1}}function Oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(be){var e=$t;if(e){var n=e;if(!Nm(t,e)){if(Oh(t))throw Error(L(418));e=br(n.nextSibling);var r=Wt;e&&Nm(t,e)?Gv(r,n):(t.flags=t.flags&-4097|2,be=!1,Wt=t)}}else{if(Oh(t))throw Error(L(418));t.flags=t.flags&-4097|2,be=!1,Wt=t}}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Xa(t){if(t!==Wt)return!1;if(!be)return Dm(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=$t)){if(Oh(t))throw Kv(),Error(L(418));for(;e;)Gv(t,e),e=br(e.nextSibling)}if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Wt?br(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=$t;t;)t=br(t.nextSibling)}function ys(){$t=Wt=null,be=!1}function Qd(t){pn===null?pn=[t]:pn.push(t)}var DT=ur.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function Qv(t){function e(S,v){if(t){var A=S.deletions;A===null?(S.deletions=[v],S.flags|=16):A.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Lr(S,v),S.index=0,S.sibling=null,S}function s(S,v,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<v?(S.flags|=2,v):A):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,v,A,b){return v===null||v.tag!==6?(v=Hc(A,S.mode,b),v.return=S,v):(v=i(v,A),v.return=S,v)}function u(S,v,A,b){var U=A.type;return U===qi?f(S,v,A.props.children,b,A.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===_r&&bm(U)===v.type)?(b=i(v,A.props),b.ref=io(S,v,A),b.return=S,b):(b=_l(A.type,A.key,A.props,null,S.mode,b),b.ref=io(S,v,A),b.return=S,b)}function h(S,v,A,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Wc(A,S.mode,b),v.return=S,v):(v=i(v,A.children||[]),v.return=S,v)}function f(S,v,A,b,U){return v===null||v.tag!==7?(v=yi(A,S.mode,b,U),v.return=S,v):(v=i(v,A),v.return=S,v)}function m(S,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hc(""+v,S.mode,A),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return A=_l(v.type,v.key,v.props,null,S.mode,A),A.ref=io(S,null,v),A.return=S,A;case Wi:return v=Wc(v,S.mode,A),v.return=S,v;case _r:var b=v._init;return m(S,b(v._payload),A)}if(lo(v)||Zs(v))return v=yi(v,S.mode,A,null),v.return=S,v;Ja(S,v)}return null}function p(S,v,A,b){var U=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:l(S,v,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ua:return A.key===U?u(S,v,A,b):null;case Wi:return A.key===U?h(S,v,A,b):null;case _r:return U=A._init,p(S,v,U(A._payload),b)}if(lo(A)||Zs(A))return U!==null?null:f(S,v,A,b,null);Ja(S,A)}return null}function k(S,v,A,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(A)||null,l(v,S,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ua:return S=S.get(b.key===null?A:b.key)||null,u(v,S,b,U);case Wi:return S=S.get(b.key===null?A:b.key)||null,h(v,S,b,U);case _r:var j=b._init;return k(S,v,A,j(b._payload),U)}if(lo(b)||Zs(b))return S=S.get(A)||null,f(v,S,b,U,null);Ja(v,b)}return null}function P(S,v,A,b){for(var U=null,j=null,E=v,y=v=0,w=null;E!==null&&y<A.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var T=p(S,E,A[y],b);if(T===null){E===null&&(E=w);break}t&&E&&T.alternate===null&&e(S,E),v=s(T,v,y),j===null?U=T:j.sibling=T,j=T,E=w}if(y===A.length)return n(S,E),be&&ui(S,y),U;if(E===null){for(;y<A.length;y++)E=m(S,A[y],b),E!==null&&(v=s(E,v,y),j===null?U=E:j.sibling=E,j=E);return be&&ui(S,y),U}for(E=r(S,E);y<A.length;y++)w=k(E,S,y,A[y],b),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=s(w,v,y),j===null?U=w:j.sibling=w,j=w);return t&&E.forEach(function(C){return e(S,C)}),be&&ui(S,y),U}function N(S,v,A,b){var U=Zs(A);if(typeof U!="function")throw Error(L(150));if(A=U.call(A),A==null)throw Error(L(151));for(var j=U=null,E=v,y=v=0,w=null,T=A.next();E!==null&&!T.done;y++,T=A.next()){E.index>y?(w=E,E=null):w=E.sibling;var C=p(S,E,T.value,b);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(S,E),v=s(C,v,y),j===null?U=C:j.sibling=C,j=C,E=w}if(T.done)return n(S,E),be&&ui(S,y),U;if(E===null){for(;!T.done;y++,T=A.next())T=m(S,T.value,b),T!==null&&(v=s(T,v,y),j===null?U=T:j.sibling=T,j=T);return be&&ui(S,y),U}for(E=r(S,E);!T.done;y++,T=A.next())T=k(E,S,y,T.value,b),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),j===null?U=T:j.sibling=T,j=T);return t&&E.forEach(function(R){return e(S,R)}),be&&ui(S,y),U}function O(S,v,A,b){if(typeof A=="object"&&A!==null&&A.type===qi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ua:e:{for(var U=A.key,j=v;j!==null;){if(j.key===U){if(U=A.type,U===qi){if(j.tag===7){n(S,j.sibling),v=i(j,A.props.children),v.return=S,S=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===_r&&bm(U)===j.type){n(S,j.sibling),v=i(j,A.props),v.ref=io(S,j,A),v.return=S,S=v;break e}n(S,j);break}else e(S,j);j=j.sibling}A.type===qi?(v=yi(A.props.children,S.mode,b,A.key),v.return=S,S=v):(b=_l(A.type,A.key,A.props,null,S.mode,b),b.ref=io(S,v,A),b.return=S,S=b)}return o(S);case Wi:e:{for(j=A.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(S,v.sibling),v=i(v,A.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=Wc(A,S.mode,b),v.return=S,S=v}return o(S);case _r:return j=A._init,O(S,v,j(A._payload),b)}if(lo(A))return P(S,v,A,b);if(Zs(A))return N(S,v,A,b);Ja(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,A),v.return=S,S=v):(n(S,v),v=Hc(A,S.mode,b),v.return=S,S=v),o(S)):n(S,v)}return O}var vs=Qv(!0),Xv=Qv(!1),$l=ei(null),Hl=null,es=null,Xd=null;function Jd(){Xd=es=Hl=null}function Yd(t){var e=$l.current;Ne($l),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Hl=t,Xd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(Hl===null)throw Error(L(308));es=t,Hl.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var fi=null;function Zd(t){fi===null?fi=[t]:fi.push(t)}function Jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}function Vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,r){var i=t.updateQueue;wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var p=l.lane,k=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(p=e,k=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(k,m,p);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,p=typeof P=="function"?P.call(k,m,p):P,p==null)break e;m=je({},m,p);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=m):f=f.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=m}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var oa={},Cn=ei(oa),Bo=ei(oa),$o=ei(oa);function pi(t){if(t===oa)throw Error(L(174));return t}function tf(t,e){switch(Ae($o,e),Ae(Bo,t),Ae(Cn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}Ne(Cn),Ae(Cn,e)}function _s(){Ne(Cn),Ne(Bo),Ne($o)}function Zv(t){pi($o.current);var e=pi(Cn.current),n=yh(e,t.type);e!==n&&(Ae(Bo,t),Ae(Cn,n))}function nf(t){Bo.current===t&&(Ne(Cn),Ne(Bo))}var Oe=ei(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function rf(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var pl=ur.ReactCurrentDispatcher,Fc=ur.ReactCurrentBatchConfig,Ei=0,Le=null,Xe=null,nt=null,Gl=!1,Eo=!1,Ho=0,bT=0;function gt(){throw Error(L(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function of(t,e,n,r,i,s){if(Ei=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?LT:jT,t=n(r,i),Eo){s=0;do{if(Eo=!1,Ho=0,25<=s)throw Error(L(301));s+=1,nt=Xe=null,e.updateQueue=null,pl.current=FT,t=n(r,i)}while(Eo)}if(pl.current=Kl,e=Xe!==null&&Xe.next!==null,Ei=0,nt=Xe=Le=null,Gl=!1,e)throw Error(L(300));return t}function af(){var t=Ho!==0;return Ho=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Le.memoizedState=nt=t:nt=nt.next=t,nt}function ln(){if(Xe===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=nt===null?Le.memoizedState:nt.next;if(e!==null)nt=e,Xe=t;else{if(t===null)throw Error(L(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?Le.memoizedState=nt=t:nt=nt.next=t}return nt}function Wo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=ln(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ei&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Le.lanes|=f,Ti|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,vn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=ln(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function e_(){}function t_(t,e){var n=Le,r=ln(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,lf(i_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,qo(9,r_.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(L(349));Ei&30||n_(n,e,i)}return i}function n_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r_(t,e,n,r){e.value=n,e.getSnapshot=r,s_(e)&&o_(t)}function i_(t,e,n){return n(function(){s_(e)&&o_(t)})}function s_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function o_(t){var e=tr(t,1);e!==null&&yn(e,t,1,-1)}function Mm(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=MT.bind(null,Le,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function a_(){return ln().memoizedState}function ml(t,e,n,r){var i=In();Le.flags|=t,i.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Cu(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&sf(r,o.deps)){i.memoizedState=qo(e,n,s,r);return}}Le.flags|=t,i.memoizedState=qo(1|e,n,s,r)}function Lm(t,e){return ml(8390656,8,t,e)}function lf(t,e){return Cu(2048,8,t,e)}function l_(t,e){return Cu(4,2,t,e)}function u_(t,e){return Cu(4,4,t,e)}function c_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h_(t,e,n){return n=n!=null?n.concat([t]):null,Cu(4,4,c_.bind(null,e,t),n)}function uf(){}function d_(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function f_(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function p_(t,e,n){return Ei&21?(vn(n,e)||(n=_v(),Le.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function VT(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{ve=n,Fc.transition=r}}function m_(){return ln().memoizedState}function OT(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},g_(t))y_(e,n);else if(n=Jv(t,e,n,r),n!==null){var i=Ct();yn(n,t,r,i),v_(n,e,r)}}function MT(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(g_(t))y_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vn(l,o)){var u=e.interleaved;u===null?(i.next=i,Zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jv(t,e,i,r),n!==null&&(i=Ct(),yn(n,t,r,i),v_(n,e,r))}}function g_(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function y_(t,e){Eo=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}var Kl={readContext:an,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},LT={readContext:an,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,c_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OT.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:Mm,useDebugValue:uf,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=Mm(!1),e=t[0];return t=VT.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=In();if(be){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),rt===null)throw Error(L(349));Ei&30||n_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lm(i_.bind(null,r,s,t),[t]),r.flags|=2048,qo(9,r_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=rt.identifierPrefix;if(be){var n=Kn,r=Gn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jT={readContext:an,useCallback:d_,useContext:an,useEffect:lf,useImperativeHandle:h_,useInsertionEffect:l_,useLayoutEffect:u_,useMemo:f_,useReducer:Uc,useRef:a_,useState:function(){return Uc(Wo)},useDebugValue:uf,useDeferredValue:function(t){var e=ln();return p_(e,Xe.memoizedState,t)},useTransition:function(){var t=Uc(Wo)[0],e=ln().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1},FT={readContext:an,useCallback:d_,useContext:an,useEffect:lf,useImperativeHandle:h_,useInsertionEffect:l_,useLayoutEffect:u_,useMemo:f_,useReducer:zc,useRef:a_,useState:function(){return zc(Wo)},useDebugValue:uf,useDeferredValue:function(t){var e=ln();return Xe===null?e.memoizedState=t:p_(e,Xe.memoizedState,t)},useTransition:function(){var t=zc(Wo)[0],e=ln().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ru={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Mr(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(yn(e,t,i,r),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Mr(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(yn(e,t,i,r),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Mr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(yn(e,t,r,n),fl(e,t,r))}};function jm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function __(t,e,n){var r=!1,i=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=jt(e)?_i:Tt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=jt(e)?_i:Tt.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ru.enqueueReplaceState(i,i.state,null),Wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=fE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function w_(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,Xh=r),Uh(t,e)},n}function E_(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eI.bind(null,t,e,n),e.then(t,t))}function zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var zT=ur.ReactCurrentOwner,Mt=!1;function kt(t,e,n,r){e.child=t===null?Xv(e,null,n,r):vs(e,t.child,n,r)}function $m(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=of(t,e,n,r,s,i),n=af(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(be&&n&&Gd(e),e.flags|=1,kt(t,e,r,i),e.child)}function Hm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T_(t,e,s,r,i)):(t=_l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return zh(t,e,n,r,i)}function I_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ns,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(ns,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(ns,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(ns,Bt),Bt|=r;return kt(t,e,i,n),e.child}function S_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zh(t,e,n,r,i){var s=jt(n)?_i:Tt.current;return s=gs(e,s),ls(e,i),n=of(t,e,n,r,s,i),r=af(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(be&&r&&Gd(e),e.flags|=1,kt(t,e,n,i),e.child)}function Wm(t,e,n,r,i){if(jt(n)){var s=!0;Ul(e)}else s=!1;if(ls(e,i),e.stateNode===null)gl(t,e),__(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=an(h):(h=jt(n)?_i:Tt.current,h=gs(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Fm(e,o,r,h),wr=!1;var p=e.memoizedState;o.state=p,Wl(e,r,o,i),u=e.memoizedState,l!==r||p!==u||Lt.current||wr?(typeof f=="function"&&(jh(e,n,f,r),u=e.memoizedState),(l=wr||jm(e,n,l,r,p,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:dn(e.type,l),o.props=h,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=jt(n)?_i:Tt.current,u=gs(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&Fm(e,o,r,u),wr=!1,p=e.memoizedState,o.state=p,Wl(e,r,o,i);var P=e.memoizedState;l!==m||p!==P||Lt.current||wr?(typeof k=="function"&&(jh(e,n,k,r),P=e.memoizedState),(h=wr||jm(e,n,h,r,p,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){S_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pm(e,n,!1),nr(t,e,s);r=e.stateNode,zT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,l,s)):kt(t,e,l,s),e.memoizedState=r.state,i&&Pm(e,n,!0),e.child}function A_(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),tf(t,e.containerInfo)}function qm(t,e,n,r,i){return ys(),Qd(i),e.flags|=256,kt(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Oe,i&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nu(o,r,0,null),t=yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hh(n),e.memoizedState=$h,t):cf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return BT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Lr(l,s):(s=yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cf(t,e){return e=Nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,r){return r!==null&&Qd(r),vs(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(L(422))),Ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nu({mode:"visible",children:r.children},i,0,null),s=yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=$h,s);if(!(e.mode&1))return Ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Bc(s,r,void 0),Ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,Mt||l){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),yn(r,t,i,-1))}return gf(),r=Bc(Error(L(421))),Ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=br(i.nextSibling),Wt=e,be=!0,pn=null,t!==null&&(en[tn++]=Gn,en[tn++]=Kn,en[tn++]=wi,Gn=t.id,Kn=t.overflow,wi=e),e=cf(e,r.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lh(t.return,e,n)}function $c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $T(t,e,n){switch(e.tag){case 3:A_(e),ys();break;case 5:Zv(e);break;case 1:jt(e.type)&&Ul(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae($l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(Ae(Oe,Oe.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ae(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,I_(t,e,n)}return nr(t,e,n)}var R_,Wh,x_,P_;R_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};x_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(Cn.current);var s=null;switch(n){case"input":i=fh(t,i),r=fh(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=gh(t,i),r=gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}vh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(No.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(No.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&xe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};P_=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HT(t,e,n){var r=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return jt(e.type)&&Fl(),yt(e),null;case 3:return r=e.stateNode,_s(),Ne(Lt),Ne(Tt),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Zh(pn),pn=null))),Wh(t,e),yt(e),null;case 5:nf(e);var i=pi($o.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return yt(e),null}if(t=pi(Cn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)xe(co[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":nm(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":im(r,s),xe("invalid",r)}vh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),i=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":za(r),rm(r,s,!0);break;case"textarea":za(r),sm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[zo]=r,R_(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)xe(co[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":nm(t,r),i=fh(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),xe("invalid",t);break;case"textarea":im(t,r),i=gh(t,r),xe("invalid",t);break;default:i=r}vh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?av(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Do(t,u):typeof u=="number"&&Do(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&xe("scroll",t):u!=null&&bd(t,s,u,o))}switch(n){case"input":za(t),rm(t,r,!1);break;case"textarea":za(t),sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=pi($o.current),pi(Cn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return yt(e),null;case 13:if(Ne(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&$t!==null&&e.mode&1&&!(e.flags&128))Kv(),ys(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[An]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else pn!==null&&(Zh(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Ye===0&&(Ye=3):gf())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return _s(),Wh(t,e),t===null&&Fo(e.stateNode.containerInfo),yt(e),null;case 10:return Yd(e.type._context),yt(e),null;case 17:return jt(e.type)&&Fl(),yt(e),null;case 19:if(Ne(Oe),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Es&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return yt(e),null}else 2*$e()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Oe.current,Ae(Oe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function WT(t,e){switch(Kd(e),e.tag){case 1:return jt(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ne(Lt),Ne(Tt),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(Ne(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Oe),null;case 4:return _s(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var Za=!1,wt=!1,qT=typeof WeakSet=="function"?WeakSet:Set,$=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function qh(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Km=!1;function GT(t,e){if(xh=Ol,t=Ov(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,p=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)p=m,m=k;for(;;){if(m===t)break t;if(p===n&&++h===i&&(l=o),p===s&&++f===r&&(u=o),(k=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},Ol=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:dn(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){ze(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Km,Km=!1,P}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qh(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N_(t){var e=t.alternate;e!==null&&(t.alternate=null,N_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[zo],delete e[bh],delete e[xT],delete e[PT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D_(t){return t.tag===5||t.tag===3||t.tag===4}function Qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var at=null,fn=!1;function mr(t,e,n){for(n=n.child;n!==null;)b_(t,e,n),n=n.sibling}function b_(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:wt||ts(n,e);case 6:var r=at,i=fn;at=null,mr(t,e,n),at=r,fn=i,at!==null&&(fn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(fn?(t=at,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),Mo(t)):Mc(at,n.stateNode));break;case 4:r=at,i=fn,at=n.stateNode.containerInfo,fn=!0,mr(t,e,n),at=r,fn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!wt&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,e,l)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,mr(t,e,n),wt=r):mr(t,e,n);break;default:mr(t,e,n)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qT),e.forEach(function(r){var i=nI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,fn=!1;break e;case 3:at=l.stateNode.containerInfo,fn=!0;break e;case 4:at=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(at===null)throw Error(L(160));b_(s,o,i),at=null,fn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ze(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V_(e,t),e=e.sibling}function V_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Tn(t),r&4){try{To(3,t,t.return),xu(3,t)}catch(N){ze(t,t.return,N)}try{To(5,t,t.return)}catch(N){ze(t,t.return,N)}}break;case 1:hn(e,t),Tn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(hn(e,t),Tn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(N){ze(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&nv(i,s),_h(l,o);var h=_h(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?av(i,m):f==="dangerouslySetInnerHTML"?sv(i,m):f==="children"?Do(i,m):bd(i,f,m,h)}switch(l){case"input":ph(i,s);break;case"textarea":rv(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?is(i,!!s.multiple,k,!1):p!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(N){ze(t,t.return,N)}}break;case 6:if(hn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){ze(t,t.return,N)}}break;case 3:if(hn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(N){ze(t,t.return,N)}break;case 4:hn(e,t),Tn(t);break;case 13:hn(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=$e())),r&4&&Xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(h=wt)||f,hn(e,t),wt=h):hn(e,t),Tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(p=$,k=p.child,p.tag){case 0:case 11:case 14:case 15:To(4,p,p.return);break;case 1:ts(p,p.return);var P=p.stateNode;if(typeof P.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){ze(r,n,N)}}break;case 5:ts(p,p.return);break;case 22:if(p.memoizedState!==null){Ym(m);continue}}k!==null?(k.return=p,$=k):Ym(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ov("display",o))}catch(N){ze(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){ze(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:hn(e,t),Tn(t),r&4&&Xm(t);break;case 21:break;default:hn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var s=Qm(t);Qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qm(t);Kh(t,l,o);break;default:throw Error(L(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KT(t,e,n){$=t,O_(t)}function O_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||wt;l=Za;var h=wt;if(Za=o,(wt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Zm(i):u!==null?(u.return=o,$=u):Zm(i);for(;s!==null;)$=s,O_(s),s=s.sibling;$=i,Za=l,wt=h}Jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Jm(t)}}function Jm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}wt||e.flags&512&&Gh(e)}catch(p){ze(e,e.return,p)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ym(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Zm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ze(e,i,u)}}var s=e.return;try{Gh(e)}catch(u){ze(e,s,u)}break;case 5:var o=e.return;try{Gh(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var QT=Math.ceil,Ql=ur.ReactCurrentDispatcher,hf=ur.ReactCurrentOwner,on=ur.ReactCurrentBatchConfig,fe=0,rt=null,qe=null,ct=0,Bt=0,ns=ei(0),Ye=0,Go=null,Ti=0,Pu=0,df=0,Io=null,Vt=null,ff=0,Es=1/0,Wn=null,Xl=!1,Xh=null,Or=null,el=!1,Rr=null,Jl=0,So=0,Jh=null,yl=-1,vl=0;function Ct(){return fe&6?$e():yl!==-1?yl:yl=$e()}function Mr(t){return t.mode&1?fe&2&&ct!==0?ct&-ct:DT.transition!==null?(vl===0&&(vl=_v()),vl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function yn(t,e,n,r){if(50<So)throw So=0,Jh=null,Error(L(185));ra(t,n,r),(!(fe&2)||t!==rt)&&(t===rt&&(!(fe&2)&&(Pu|=n),Ye===4&&Tr(t,ct)),Ft(t,r),n===1&&fe===0&&!(e.mode&1)&&(Es=$e()+500,ku&&ti()))}function Ft(t,e){var n=t.callbackNode;DE(t,e);var r=Vl(t,t===rt?ct:0);if(r===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?NT(eg.bind(null,t)):Wv(eg.bind(null,t)),CT(function(){!(fe&6)&&ti()}),n=null;else{switch(wv(r)){case 1:n=jd;break;case 4:n=yv;break;case 16:n=bl;break;case 536870912:n=vv;break;default:n=bl}n=$_(n,M_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M_(t,e){if(yl=-1,vl=0,fe&6)throw Error(L(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=Vl(t,t===rt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yl(t,r);else{e=r;var i=fe;fe|=2;var s=j_();(rt!==t||ct!==e)&&(Wn=null,Es=$e()+500,gi(t,e));do try{YT();break}catch(l){L_(t,l)}while(!0);Jd(),Ql.current=s,fe=i,qe!==null?e=0:(rt=null,ct=0,e=Ye)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Yh(t,i))),e===1)throw n=Go,gi(t,0),Tr(t,r),Ft(t,$e()),n;if(e===6)Tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!XT(i)&&(e=Yl(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Yh(t,s))),e===1))throw n=Go,gi(t,0),Tr(t,r),Ft(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:ci(t,Vt,Wn);break;case 3:if(Tr(t,r),(r&130023424)===r&&(e=ff+500-$e(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dh(ci.bind(null,t,Vt,Wn),e);break}ci(t,Vt,Wn);break;case 4:if(Tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QT(r/1960))-r,10<r){t.timeoutHandle=Dh(ci.bind(null,t,Vt,Wn),r);break}ci(t,Vt,Wn);break;case 5:ci(t,Vt,Wn);break;default:throw Error(L(329))}}}return Ft(t,$e()),t.callbackNode===n?M_.bind(null,t):null}function Yh(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Zh(e)),t}function Zh(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function XT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(t,e){for(e&=~df,e&=~Pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function eg(t){if(fe&6)throw Error(L(327));us();var e=Vl(t,0);if(!(e&1))return Ft(t,$e()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Yh(t,r))}if(n===1)throw n=Go,gi(t,0),Tr(t,e),Ft(t,$e()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,Vt,Wn),Ft(t,$e()),null}function pf(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Es=$e()+500,ku&&ti())}}function Ii(t){Rr!==null&&Rr.tag===0&&!(fe&6)&&us();var e=fe;fe|=1;var n=on.transition,r=ve;try{if(on.transition=null,ve=1,t)return t()}finally{ve=r,on.transition=n,fe=e,!(fe&6)&&ti()}}function mf(){Bt=ns.current,Ne(ns)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kT(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:_s(),Ne(Lt),Ne(Tt),rf();break;case 5:nf(r);break;case 4:_s();break;case 13:Ne(Oe);break;case 19:Ne(Oe);break;case 10:Yd(r.type._context);break;case 22:case 23:mf()}n=n.return}if(rt=t,qe=t=Lr(t.current,null),ct=Bt=e,Ye=0,Go=null,df=Pu=Ti=0,Vt=Io=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function L_(t,e){do{var n=qe;try{if(Jd(),pl.current=Kl,Gl){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Ei=0,nt=Xe=Le=null,Eo=!1,Ho=0,hf.current=null,n===null||n.return===null){Ye=1,Go=e,qe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ct,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=zm(o);if(k!==null){k.flags&=-257,Bm(k,o,l,s,e),k.mode&1&&Um(s,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Um(s,h,e),gf();break e}u=Error(L(426))}}else if(be&&l.mode&1){var O=zm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Bm(O,o,l,s,e),Qd(ws(u,l));break e}}s=u=ws(u,l),Ye!==4&&(Ye=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=w_(s,u,e);Vm(s,S);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Or===null||!Or.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=E_(s,l,e);Vm(s,b);break e}}s=s.return}while(s!==null)}U_(n)}catch(U){e=U,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function j_(){var t=Ql.current;return Ql.current=Kl,t===null?Kl:t}function gf(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),rt===null||!(Ti&268435455)&&!(Pu&268435455)||Tr(rt,ct)}function Yl(t,e){var n=fe;fe|=2;var r=j_();(rt!==t||ct!==e)&&(Wn=null,gi(t,e));do try{JT();break}catch(i){L_(t,i)}while(!0);if(Jd(),fe=n,Ql.current=r,qe!==null)throw Error(L(261));return rt=null,ct=0,Ye}function JT(){for(;qe!==null;)F_(qe)}function YT(){for(;qe!==null&&!IE();)F_(qe)}function F_(t){var e=B_(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?U_(t):qe=e,hf.current=null}function U_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WT(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,qe=null;return}}else if(n=HT(n,e,Bt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ye===0&&(Ye=5)}function ci(t,e,n){var r=ve,i=on.transition;try{on.transition=null,ve=1,ZT(t,e,n,r)}finally{on.transition=i,ve=r}return null}function ZT(t,e,n,r){do us();while(Rr!==null);if(fe&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bE(t,s),t===rt&&(qe=rt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,$_(bl,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=ve;ve=1;var l=fe;fe|=4,hf.current=null,GT(t,n),V_(n,t),_T(Ph),Ol=!!xh,Ph=xh=null,t.current=n,KT(n),SE(),fe=l,ve=o,on.transition=s}else t.current=n;if(el&&(el=!1,Rr=t,Jl=i),s=t.pendingLanes,s===0&&(Or=null),CE(n.stateNode),Ft(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=Xh,Xh=null,t;return Jl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Jh?So++:(So=0,Jh=t):So=0,ti(),null}function us(){if(Rr!==null){var t=wv(Jl),e=on.transition,n=ve;try{if(on.transition=null,ve=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Jl=0,fe&6)throw Error(L(331));var i=fe;for(fe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:To(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var p=f.sibling,k=f.return;if(N_(f),f===h){$=null;break}if(p!==null){p.return=k,$=p;break}$=k}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xu(9,l)}}catch(U){ze(l,l.return,U)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(fe=i,ti(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Eu,t)}catch{}r=!0}return r}finally{ve=n,on.transition=e}}return!1}function tg(t,e,n){e=ws(n,e),e=w_(t,e,1),t=Vr(t,e,1),e=Ct(),t!==null&&(ra(t,1,e),Ft(t,e))}function ze(t,e,n){if(t.tag===3)tg(t,t,n);else for(;e!==null;){if(e.tag===3){tg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=ws(n,t),t=E_(e,t,1),e=Vr(e,t,1),t=Ct(),e!==null&&(ra(e,1,t),Ft(e,t));break}}e=e.return}}function eI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ct&n)===n&&(Ye===4||Ye===3&&(ct&130023424)===ct&&500>$e()-ff?gi(t,0):df|=n),Ft(t,e)}function z_(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=Ct();t=tr(t,e),t!==null&&(ra(t,e,n),Ft(t,n))}function tI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z_(t,n)}function nI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),z_(t,n)}var B_;B_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,$T(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,be&&e.flags&1048576&&qv(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var i=gs(e,Tt.current);ls(e,n),i=of(null,e,r,t,i,n);var s=af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(e),i.updater=Ru,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Gd(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iI(r),t=dn(r,t),i){case 0:e=zh(null,e,r,t,n);break e;case 1:e=Wm(null,e,r,t,n);break e;case 11:e=$m(null,e,r,t,n);break e;case 14:e=Hm(null,e,r,dn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Wm(t,e,r,i,n);case 3:e:{if(A_(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yv(t,e),Wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(L(423)),e),e=qm(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(L(424)),e),e=qm(t,e,r,n,i);break e}else for($t=br(e.stateNode.containerInfo.firstChild),Wt=e,be=!0,pn=null,n=Xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=nr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return Zv(e),t===null&&Mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nh(r,i)?o=null:s!==null&&Nh(r,s)&&(e.flags|=32),S_(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return k_(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),$m(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae($l,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Lt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Jn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=an(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),Hm(t,e,r,i,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),gl(t,e),e.tag=1,jt(r)?(t=!0,Ul(e)):t=!1,ls(e,n),__(e,r,i),Fh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return C_(t,e,n);case 22:return I_(t,e,n)}throw Error(L(156,e.tag))};function $_(t,e){return gv(t,e)}function rI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new rI(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iI(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===Md)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return yi(n.children,i,s,e);case Vd:o=8,i|=8;break;case uh:return t=sn(12,n,e,i|2),t.elementType=uh,t.lanes=s,t;case ch:return t=sn(13,n,e,i),t.elementType=ch,t.lanes=s,t;case hh:return t=sn(19,n,e,i),t.elementType=hh,t.lanes=s,t;case Zy:return Nu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jy:o=10;break e;case Yy:o=9;break e;case Od:o=11;break e;case Md:o=14;break e;case _r:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yi(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function Nu(t,e,n,r){return t=sn(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,i,s,o,l,u){return t=new sI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function oI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H_(t){if(!t)return Hr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(jt(n))return Hv(t,n,e)}return e}function W_(t,e,n,r,i,s,o,l,u){return t=vf(n,r,!0,t,i,s,o,l,u),t.context=H_(null),n=t.current,r=Ct(),i=Mr(n),s=Jn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,ra(t,i,r),Ft(t,r),t}function Du(t,e,n,r){var i=e.current,s=Ct(),o=Mr(i);return n=H_(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(yn(t,i,o,s),fl(t,i,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){ng(t,e),(t=t.alternate)&&ng(t,e)}function aI(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}bu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Du(t,e,null,null)};bu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ii(function(){Du(null,t,null,null)}),e[er]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Er.length&&e!==0&&e<Er[n].priority;n++);Er.splice(n,0,t),n===0&&Av(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rg(){}function lI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Zl(o);s.call(h)}}var o=W_(e,r,t,0,null,!1,!1,"",rg);return t._reactRootContainer=o,t[er]=o.current,Fo(t.nodeType===8?t.parentNode:t),Ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Zl(u);l.call(h)}}var u=vf(t,0,!1,null,null,!1,!1,"",rg);return t._reactRootContainer=u,t[er]=u.current,Fo(t.nodeType===8?t.parentNode:t),Ii(function(){Du(e,u,n,r)}),u}function Ou(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Zl(o);l.call(u)}}Du(e,o,t,i)}else o=lI(n,e,t,i,r);return Zl(o)}Ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Fd(e,n|1),Ft(e,$e()),!(fe&6)&&(Es=$e()+500,ti()))}break;case 13:Ii(function(){var r=tr(t,1);if(r!==null){var i=Ct();yn(r,t,1,i)}}),_f(t,1)}};Ud=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=Ct();yn(e,t,134217728,n)}_f(t,134217728)}};Tv=function(t){if(t.tag===13){var e=Mr(t),n=tr(t,e);if(n!==null){var r=Ct();yn(n,t,e,r)}_f(t,e)}};Iv=function(){return ve};Sv=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Eh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Au(r);if(!i)throw Error(L(90));tv(r),ph(r,i)}}}break;case"textarea":rv(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};cv=pf;hv=Ii;var uI={usingClientEntryPoint:!1,Events:[sa,Xi,Au,lv,uv,pf]},oo={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cI={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pv(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||aI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Eu=tl.inject(cI),kn=tl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(L(200));return oI(t,e,null,n)};Gt.createRoot=function(t,e){if(!Ef(t))throw Error(L(299));var n=!1,r="",i=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,Fo(t.nodeType===8?t.parentNode:t),new wf(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=pv(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ii(t)};Gt.hydrate=function(t,e,n){if(!Vu(e))throw Error(L(200));return Ou(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=q_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W_(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,Fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bu(e)};Gt.render=function(t,e,n){if(!Vu(e))throw Error(L(200));return Ou(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(L(40));return t._reactRootContainer?(Ii(function(){Ou(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Gt.unstable_batchedUpdates=pf;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vu(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Ou(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),Gy.exports=Gt;var hI=Gy.exports,ig=hI;ah.createRoot=ig.createRoot,ah.hydrateRoot=ig.hydrateRoot;const dI=()=>{};var sg={};/**
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
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(p=64)),r.push(n[f],n[m],n[p],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new pI;const p=s<<2|l>>4;if(r.push(p),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=K_(t);return Q_.encodeByteArray(e,!0)},eu=function(t){return mI(t).replace(/\./g,"")},X_=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof sg>"u")return;const t=sg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X_(t[1]);return e&&JSON.parse(e)},Mu=()=>{try{return dI()||yI()||vI()||_I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=t=>{var e,n;return(n=(e=Mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wI=t=>{const e=J_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y_=()=>{var t;return(t=Mu())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=Mu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function e0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[eu(JSON.stringify(n)),eu(JSON.stringify(o)),""].join(".")}const Ao={};function II(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ao))Ao[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let og=!1;function t0(t,e){if(typeof window>"u"||typeof document>"u"||!bs(window.location.host)||Ao[t]===e||Ao[t]||og)return;Ao[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=II().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,k){p.setAttribute("width","24"),p.setAttribute("id",k),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{og=!0,o()},p}function f(p,k){p.setAttribute("id",k),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=SI(r),k=n("text"),P=document.getElementById(k)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),S=n("preprendIcon"),v=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const A=p.element;l(A),f(O,N);const b=h();u(v,S),A.append(v,P,O,b),document.body.appendChild(A)}s?(P.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function kI(){var t;const e=(t=Mu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NI(){return!kI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const VI="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cr(i,l,r)}}function OI(t,e){return t.replace(MI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MI=/\{\$([^}]+)}/g;function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ag(s)&&ag(o)){if(!Wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ag(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new FI(t,e);return n.subscribe.bind(n)}class FI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===hi?void 0:t}function $I(t){return t.instantiationMode==="EAGER"}/**
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
 */class HI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const WI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},qI=ce.INFO,GI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=qI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const QI=(t,e)=>e.some(n=>t instanceof n);let lg,ug;function XI(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JI(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,ed=new WeakMap,r0=new WeakMap,Gc=new WeakMap,If=new WeakMap;function YI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),If.set(e,t),e}function ZI(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eS(t){td=t(td)}function tS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return r0.set(r,e.sort?e.sort():[e]),jr(r)}:JI().includes(t)?function(...e){return t.apply(Kc(this),e),jr(n0.get(this))}:function(...e){return jr(t.apply(Kc(this),e))}}function nS(t){return typeof t=="function"?tS(t):(t instanceof IDBTransaction&&ZI(t),QI(t,XI())?new Proxy(t,td):t)}function jr(t){if(t instanceof IDBRequest)return YI(t);if(Gc.has(t))return Gc.get(t);const e=nS(t);return e!==t&&(Gc.set(t,e),If.set(e,t)),e}const Kc=t=>If.get(t);function rS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=jr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(jr(o.result),u.oldVersion,u.newVersion,jr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const iS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],Qc=new Map;function cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Qc.set(e,s),s}eS(t=>({...t,get:(e,n,r)=>cg(e,n)||t.get(e,n,r),has:(e,n)=>!!cg(e,n)||t.has(e,n)}));/**
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
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",hg="0.13.2";/**
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
 */const rr=new Tf("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",hS="@firebase/app-check-compat",dS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/data-connect",yS="@firebase/database-compat",vS="@firebase/functions",_S="@firebase/functions-compat",wS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",IS="@firebase/messaging-compat",SS="@firebase/performance",AS="@firebase/performance-compat",kS="@firebase/remote-config",CS="@firebase/remote-config-compat",RS="@firebase/storage",xS="@firebase/storage-compat",PS="@firebase/firestore",NS="@firebase/ai",DS="@firebase/firestore-compat",bS="firebase",VS="11.10.0";/**
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
 */const rd="[DEFAULT]",OS={[nd]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[dS]:"fire-app-check",[hS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-data-connect",[yS]:"fire-rtdb-compat",[vS]:"fire-fn",[_S]:"fire-fn-compat",[wS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[IS]:"fire-fcm-compat",[SS]:"fire-perf",[AS]:"fire-perf-compat",[kS]:"fire-rc",[CS]:"fire-rc-compat",[RS]:"fire-gcs",[xS]:"fire-gcs-compat",[PS]:"fire-fst",[DS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const tu=new Map,MS=new Map,id=new Map;function dg(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(id.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of tu.values())dg(n,t);for(const n of MS.values())dg(n,t);return!0}function Sf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new aa("app","Firebase",LS);/**
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
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=VS;function i0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=Y_()),!n)throw Fr.create("no-options");const s=tu.get(i);if(s){if(Wr(n,s.options)&&Wr(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new HI(i);for(const u of id.values())o.addComponent(u);const l=new jS(n,r,o);return tu.set(i,l),l}function s0(t=rd){const e=tu.get(t);if(!e&&t===rd&&Y_())return i0();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let i=(r=OS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(l.join(" "));return}Ts(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FS="firebase-heartbeat-database",US=1,Ko="firebase-heartbeat-store";let Xc=null;function o0(){return Xc||(Xc=rS(FS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function zS(t){try{const n=(await o0()).transaction(Ko),r=await n.objectStore(Ko).get(a0(t));return await n.done,r}catch(e){if(e instanceof cr)rr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function fg(t,e){try{const r=(await o0()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,a0(t)),await r.done}catch(n){if(n instanceof cr)rr.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function a0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BS=1024,$S=30;class HS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>$S){const o=GS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pg(),{heartbeatsToSend:r,unsentEntries:i}=WS(this._heartbeatsCache.heartbeats),s=eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function pg(){return new Date().toISOString().substring(0,10)}function WS(t,e=BS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mg(t){return eu(JSON.stringify({version:2,heartbeats:t})).length}function GS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function KS(t){Ts(new Si("platform-logger",e=>new oS(e),"PRIVATE")),Ts(new Si("heartbeat",e=>new HS(e),"PRIVATE")),Ur(nd,hg,t),Ur(nd,hg,"esm2017"),Ur("fire-js","")}KS("");var QS="firebase",XS="11.10.0";/**
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
 */Ur(QS,XS,"app");function Af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function l0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=l0,u0=new aa("auth","Firebase",l0());/**
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
 */const nu=new Tf("@firebase/auth");function YS(t,...e){nu.logLevel<=ce.WARN&&nu.warn(`Auth (${Vs}): ${t}`,...e)}function wl(t,...e){nu.logLevel<=ce.ERROR&&nu.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function ir(t,...e){throw kf(t,...e)}function Rn(t,...e){return kf(t,...e)}function c0(t,e,n){const r=Object.assign(Object.assign({},JS()),{[e]:n});return new aa("auth","Firebase",r).create(e,{appName:t.name})}function Yn(t){return c0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u0.create(t,...e)}function ee(t,e,...n){if(!t)throw kf(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function sr(t,e){t||Qn(e)}/**
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
 */function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZS(){return gg()==="http:"||gg()==="https:"}function gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function e2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||RI()||"connection"in navigator)?navigator.onLine:!0}function t2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=AI()||xI()}get(){return e2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cf(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i2=new ua(3e4,6e4);function ca(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Os(t,e,n,r,i={}){return d0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=la(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return CI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&bs(t.emulatorConfig.host)&&(h.credentials="include"),h0.fetch()(await f0(t,t.config.apiHost,n,l),h)})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n2),e);try{const i=new s2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw nl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw c0(t,f,h);ir(t,f)}}catch(i){if(i instanceof cr)throw i;ir(t,"network-request-failed",{message:String(i)})}}async function Rf(t,e,n,r,i={}){const s=await Os(t,e,n,r,i);return"mfaPendingCredential"in s&&ir(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function f0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`;return r2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class s2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),i2.get())})}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function o2(t,e){return Os(t,"POST","/v1/accounts:delete",e)}async function ru(t,e){return Os(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=xf(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(Jc(i.auth_time)),issuedAtTime:ko(Jc(i.iat)),expirationTime:ko(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function xf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=X_(n);return i?JSON.parse(i):(wl("Failed to decode base64 JWT payload"),null)}catch(i){return wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yg(t){const e=xf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&l2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class u2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qo(t,ru(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?p0(s.providerUserInfo):[],l=h2(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new od(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function c2(t){const e=Rt(t);await iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,r=Af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function d2(t,e){const n=await d0(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await f0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&bs(t.emulatorConfig.host)&&(u.credentials="include"),h0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return Os(t,"POST","/v2/accounts:revokeToken",ca(t,e))}/**
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
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function gr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new od(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return c2(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Qo(this,o2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:b,isAnonymous:U,providerData:j,stsTokenManager:E}=n;ee(A&&E,e,"internal-error");const y=cs.fromJSON(this.name,E);ee(typeof A=="string",e,"internal-error"),gr(m,e.name),gr(p,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof U=="boolean",e,"internal-error"),gr(k,e.name),gr(P,e.name),gr(N,e.name),gr(O,e.name),gr(S,e.name),gr(v,e.name);const w=new mn({uid:A,auth:e,email:p,emailVerified:b,displayName:m,isAnonymous:U,photoURL:P,phoneNumber:k,tenantId:N,stsTokenManager:y,createdAt:S,lastLoginAt:v});return j&&Array.isArray(j)&&(w.providerData=j.map(T=>Object.assign({},T))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?p0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new cs;l.updateFromIdToken(r);const u=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const vg=new Map;function Xn(t){sr(t instanceof Function,"Expected a class definition");let e=vg.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vg.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const _g=m0;/**
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
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=El(this.userKey,i.apiKey,s),this.fullPersistenceKey=El("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ru(this.auth,{idToken:e}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Xn(_g),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Xn(_g);const o=El(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const p=await ru(e,{idToken:f}).catch(()=>{});if(!p)break;m=await mn._fromGetAccountInfoResponse(e,p,f)}else m=mn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new hs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new hs(s,e,r))}}/**
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
 */function wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(T0(e))return"Webos";if(y0(e))return"Safari";if((e.includes("chrome/")||v0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=It()){return/firefox\//i.test(t)}function y0(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v0(t=It()){return/crios\//i.test(t)}function _0(t=It()){return/iemobile/i.test(t)}function w0(t=It()){return/android/i.test(t)}function E0(t=It()){return/blackberry/i.test(t)}function T0(t=It()){return/webos/i.test(t)}function Pf(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p2(t=It()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m2(){return PI()&&document.documentMode===10}function I0(t=It()){return Pf(t)||w0(t)||T0(t)||E0(t)||/windows phone/i.test(t)||_0(t)}/**
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
 */function S0(t,e=[]){let n;switch(t){case"Browser":n=wg(It());break;case"Worker":n=`${wg(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class g2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function y2(t,e={}){return Os(t,"GET","/v2/passwordPolicy",ca(t,e))}/**
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
 */const v2=6;class _2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:v2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class w2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eg(this),this.idTokenSubscription=new Eg(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ru(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Yn(this));const n=e?Rt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y2(this),n=new _2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ha(t){return Rt(t)}class Eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E2(t){Nf=t}function T2(t){return Nf.loadJS(t)}function I2(){return Nf.gapiScript}function S2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function A2(t,e){const n=Sf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wr(s,e??{}))return i;ir(i,"already-initialized")}return n.initialize({options:e})}function k2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C2(t,e,n){const r=ha(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=A0(e),{host:o,port:l}=R2(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Wr(h,r.config.emulator)&&Wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bs(o)?(e0(`${s}//${o}${u}`),t0("Auth",!0)):x2()}function A0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R2(t){const e=A0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tg(o)}}}function Tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class k0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function ds(t,e){return Rf(t,"POST","/v1/accounts:signInWithIdp",ca(t,e))}/**
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
 */const P2="http://localhost";class Ai extends k0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */class C0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ir extends da{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
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
 */class Sr extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
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
 */class Ar extends da{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
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
 */class kr extends da{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */async function N2(t,e){return Rf(t,"POST","/v1/accounts:signUp",ca(t,e))}/**
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
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=Ig(r);return new or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ig(r);return new or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function D2(t){var e;if(nn(t.app))return Promise.reject(Yn(t));const n=ha(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new or({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await N2(n,{returnSecureToken:!0}),i=await or._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class su extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,su.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new su(e,n,r,i)}}function R0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?su._fromErrorAndOperation(t,s,e,r):s})}async function b2(t,e,n=!1){const r=await Qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
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
 */async function V2(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Yn(r));const i="reauthenticate";try{const s=await Qo(t,R0(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=xf(s.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ir(r,"user-mismatch"),s}}/**
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
 */async function O2(t,e,n=!1){if(nn(t.app))return Promise.reject(Yn(t));const r="signIn",i=await R0(t,r,e),s=await or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function M2(t,e){return Rf(t,"POST","/v1/accounts:signInWithCustomToken",ca(t,e))}/**
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
 */async function L2(t,e){if(nn(t.app))return Promise.reject(Yn(t));const n=ha(t),r=await M2(n,{token:e,returnSecureToken:!0}),i=await or._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function j2(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function F2(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function U2(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}const ou="__sak";/**
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
 */class x0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ou,"1"),this.storage.removeItem(ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const z2=1e3,B2=10;class P0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);m2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,B2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const $2=P0;/**
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
 */class N0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N0.type="SESSION";const D0=N0;/**
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
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await H2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
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
 */function Df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class W2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Df("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xn(){return window}function q2(t){xn().location.href=t}/**
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
 */function b0(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function G2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q2(){return b0()?self:null}/**
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
 */const V0="firebaseLocalStorageDb",X2=1,au="firebaseLocalStorage",O0="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([au],e?"readwrite":"readonly").objectStore(au)}function J2(){const t=indexedDB.deleteDatabase(V0);return new fa(t).toPromise()}function ad(){const t=indexedDB.open(V0,X2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(au,{keyPath:O0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(au)?e(r):(r.close(),await J2(),e(await ad()))})})}async function Sg(t,e,n){const r=ju(t,!0).put({[O0]:e,value:n});return new fa(r).toPromise()}async function Y2(t,e){const n=ju(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function Ag(t,e){const n=ju(t,!0).delete(e);return new fa(n).toPromise()}const Z2=800,eA=3;class M0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(Q2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G2(),!this.activeServiceWorker)return;this.sender=new W2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Sg(e,ou,"1"),await Ag(e,ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M0.type="LOCAL";const tA=M0;new ua(3e4,6e4);/**
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
 */function nA(t,e){return e?Xn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bf extends k0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rA(t){return O2(t.auth,new bf(t),t.bypassAuthState)}function iA(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),V2(n,new bf(t),t.bypassAuthState)}async function sA(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),b2(n,new bf(t),t.bypassAuthState)}/**
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
 */class L0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rA;case"linkViaPopup":case"linkViaRedirect":return sA;case"reauthViaPopup":case"reauthViaRedirect":return iA;default:ir(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oA=new ua(2e3,1e4);class rs extends L0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oA.get())};e()}}rs.currentPopupAction=null;/**
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
 */const aA="pendingRedirect",Tl=new Map;class lA extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const r=await uA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uA(t,e){const n=dA(e),r=hA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cA(t,e){Tl.set(t._key(),e)}function hA(t){return Xn(t._redirectPersistence)}function dA(t){return El(aA,t.config.apiKey,t.name)}async function fA(t,e,n=!1){if(nn(t.app))return Promise.reject(Yn(t));const r=ha(t),i=nA(r,e),o=await new lA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pA=10*60*1e3;class mA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pA&&this.cachedEventUids.clear(),this.cachedEventUids.has(kg(e))}saveEventToCache(e){this.cachedEventUids.add(kg(e)),this.lastProcessedEventTime=Date.now()}}function kg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j0(t);default:return!1}}/**
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
 */async function yA(t,e={}){return Os(t,"GET","/v1/projects",e)}/**
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
 */const vA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_A=/^https?/;async function wA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yA(t);for(const n of e)try{if(EA(n))return}catch{}ir(t,"unauthorized-domain")}function EA(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_A.test(n))return!1;if(vA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TA=new ua(3e4,6e4);function Cg(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IA(t){return new Promise((e,n)=>{var r,i,s;function o(){Cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cg(),n(Rn(t,"network-request-failed"))},timeout:TA.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const l=S2("iframefcb");return xn()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},T2(`${I2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Il=null,e})}let Il=null;function SA(t){return Il=Il||IA(t),Il}/**
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
 */const AA=new ua(5e3,15e3),kA="__/auth/iframe",CA="emulator/auth/iframe",RA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PA(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,CA):`https://${t.config.authDomain}/${kA}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=xA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function NA(t){const e=await SA(t),n=xn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:PA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=xn().setTimeout(()=>{s(o)},AA.get());function u(){xn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const DA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bA=500,VA=600,OA="_blank",MA="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LA(t,e,n,r=bA,i=VA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},DA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=It().toLowerCase();n&&(l=v0(h)?OA:n),g0(h)&&(e=e||MA,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[k,P])=>`${p}${k}=${P},`,"");if(p2(h)&&l!=="_self")return jA(e||"",l),new Rg(null);const m=window.open(e||"",l,f);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new Rg(m)}function jA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const FA="__/auth/handler",UA="emulator/auth/handler",zA=encodeURIComponent("fac");async function xg(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof C0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof da){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${zA}=${encodeURIComponent(u)}`:"";return`${BA(t)}?${la(l).slice(1)}${h}`}function BA({config:t}){return t.emulator?Cf(t,UA):`https://${t.authDomain}/${FA}`}/**
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
 */const Yc="webStorageSupport";class $A{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=fA,this._overrideRedirectResult=cA}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xg(e,n,r,sd(),i);return LA(e,o,Df())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xg(e,n,r,sd(),i);return q2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NA(e),r=new mA(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yc];o!==void 0&&n(!!o),ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I0()||y0()||Pf()}}const HA=$A;var Pg="@firebase/auth",Ng="1.10.8";/**
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
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GA(t){Ts(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(t)},h=new w2(r,i,s,u);return k2(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new Si("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(r=>new WA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Pg,Ng,qA(t)),Ur(Pg,Ng,"esm2017")}/**
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
 */const KA=5*60,QA=Z_("authIdTokenMaxAge")||KA;let Dg=null;const XA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QA)return;const i=n==null?void 0:n.token;Dg!==i&&(Dg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JA(t=s0()){const e=Sf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:HA,persistence:[tA,$2,D0]}),r=Z_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=XA(s.toString());F2(n,o,()=>o(n.currentUser)),j2(n,l=>o(l))}}const i=J_("auth");return i&&C2(n,`http://${i}`),n}function YA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}E2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GA("Browser");var bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,F0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,C,R){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return y.prototype[C].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)T[C]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(C=0;16>C;++C)T[C]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],C=E.g[2];var R=E.g[3],I=y+(R^w&(C^R))+T[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=R+(C^y&(w^C))+T[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=C+(w^R&(y^w))+T[2]+606105819&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(y^C&(R^y))+T[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=y+(R^w&(C^R))+T[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(C^y&(w^C))+T[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=C+(w^R&(y^w))+T[6]+2821735955&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(y^C&(R^y))+T[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=y+(R^w&(C^R))+T[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(C^y&(w^C))+T[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=C+(w^R&(y^w))+T[10]+4294925233&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(y^C&(R^y))+T[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=y+(R^w&(C^R))+T[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(C^y&(w^C))+T[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=C+(w^R&(y^w))+T[14]+2792965006&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(y^C&(R^y))+T[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=y+(C^R&(w^C))+T[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(y^w))+T[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=C+(y^w&(R^y))+T[11]+643717713&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(C^R))+T[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=y+(C^R&(w^C))+T[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(y^w))+T[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=C+(y^w&(R^y))+T[15]+3634488961&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(C^R))+T[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=y+(C^R&(w^C))+T[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(y^w))+T[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=C+(y^w&(R^y))+T[3]+4107603335&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(C^R))+T[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=y+(C^R&(w^C))+T[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(y^w))+T[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=C+(y^w&(R^y))+T[7]+1735328473&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(C^R))+T[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=y+(w^C^R)+T[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^C)+T[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=C+(R^y^w)+T[11]+1839030562&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^y)+T[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=y+(w^C^R)+T[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^C)+T[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=C+(R^y^w)+T[7]+4139469664&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^y)+T[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=y+(w^C^R)+T[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^C)+T[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=C+(R^y^w)+T[3]+3572445317&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^y)+T[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=y+(w^C^R)+T[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^C)+T[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=C+(R^y^w)+T[15]+530742520&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^y)+T[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=y+(C^(w|~R))+T[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~C))+T[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=C+(y^(R|~w))+T[14]+2878612391&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~y))+T[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=y+(C^(w|~R))+T[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~C))+T[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=C+(y^(R|~w))+T[10]+4293915773&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~y))+T[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=y+(C^(w|~R))+T[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~C))+T[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=C+(y^(R|~w))+T[6]+2734768916&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~y))+T[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=y+(C^(w|~R))+T[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~C))+T[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=C+(y^(R|~w))+T[2]+718787259&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,T=this.B,C=this.h,R=0;R<y;){if(C==0)for(;R<=w;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(T[C++]=E.charCodeAt(R++),C==this.blockSize){i(this,T),C=0;break}}else for(;R<y;)if(T[C++]=E[R++],C==this.blockSize){i(this,T),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)E[w++]=this.g[y]>>>T&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],T=!0,C=E.length-1;0<=C;C--){var R=E[C]|0;T&&R==y||(w[C]=R,T=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(h(-E));for(var y=[],w=1,T=0;E>=w;T++)y[T]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),T=m,C=0;C<E.length;C+=8){var R=Math.min(8,E.length-C),I=parseInt(E.substring(C,C+R),y);8>R?(R=h(Math.pow(y,R)),T=T.j(R).add(h(I))):(T=T.j(w),T=T.add(h(I)))}return T}var m=u(0),p=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var y=h(Math.pow(E,6)),w=this,T="";;){var C=b(w,y).g;w=S(w,C.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=C,P(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=S(this,E),N(E)?-1:P(E)?0:1};function O(E){for(var y=E.g.length,w=[],T=0;T<y;T++)w[T]=~E.g[T];return new o(w,~E.h).add(p)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0,C=0;C<=y;C++){var R=T+(this.i(C)&65535)+(E.i(C)&65535),I=(R>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);T=I>>>16,R&=65535,I&=65535,w[C]=I<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(E,y){return E.add(O(y))}t.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(k)&&0>E.l(k))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<E.g.length;C++){var R=this.i(T)>>>16,I=this.i(T)&65535,St=E.i(C)>>>16,_n=E.i(C)&65535;w[2*T+2*C]+=I*_n,v(w,2*T+2*C),w[2*T+2*C+1]+=R*_n,v(w,2*T+2*C+1),w[2*T+2*C+1]+=I*St,v(w,2*T+2*C+1),w[2*T+2*C+2]+=R*St,v(w,2*T+2*C+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function b(E,y){if(P(y))throw Error("division by zero");if(P(E))return new A(m,m);if(N(E))return y=b(O(E),y),new A(O(y.g),O(y.h));if(N(y))return y=b(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=p,T=y;0>=T.l(E);)w=U(w),T=U(T);var C=j(w,1),R=j(T,1);for(T=j(T,2),w=j(w,2);!P(T);){var I=R.add(T);0>=I.l(E)&&(C=C.add(w),R=I),T=j(T,1),w=j(w,1)}return y=S(E,C.j(y)),new A(C,y)}for(C=m;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(w),I=R.j(y);N(I)||0<I.l(E);)w-=T,R=h(w),I=R.j(y);P(R)&&(R=p),C=C.add(R),E=S(E,I)}return new A(C,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function U(E){for(var y=E.g.length+1,w=[],T=0;T<y;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function j(E,y){var w=y>>5;y%=32;for(var T=E.g.length-w,C=[],R=0;R<T;R++)C[R]=0<y?E.i(R+w)>>>y|E.i(R+w+1)<<32-y:E.i(R+w);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,F0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,zr=o}).apply(typeof bg<"u"?bg:typeof self<"u"?self:typeof window<"u"?window:{});var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U0,ho,z0,Sl,ld,B0,$0,H0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rl=="object"&&rl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,x={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function p(a,c,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,p.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,x,D){for(var F=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)F[Ee-2]=arguments[Ee];return c.prototype[x].apply(g,F)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const x=a.length||0,D=g.length||0;a.length=x+D;for(let F=0;F<D;F++)a[x+F]=g[F]}else a.push(g)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,d){const g=_n.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var _n=new S(()=>new hr,a=>a.reset());class hr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,z=!1,Z=new St,re=()=>{const a=l.Promise.resolve(void 0);Qt=()=>{a.then(Te)}};var Te=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var c=_n;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Jt(a,c){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{b(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}P(Jt,Ve);var Nt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),rc=0;function Di(a,c,d,g,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=x,this.key=++rc,this.da=this.fa=!1}function At(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wn(a){this.src=a,this.g={},this.h=0}wn.prototype.add=function(a,c,d,g,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var F=Vi(a,c,g,x);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new Di(c,this.src,D,!!g,x),c.fa=d,a.push(c)),c};function bi(a,c){var d=c.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=x)&&Array.prototype.splice.call(g,x,1),D&&(At(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Vi(a,c,d,g){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return x}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Us={};function wa(a,c,d,g,x){if(Array.isArray(c)){for(var D=0;D<c.length;D++)wa(a,c[D],d,g,x);return null}return d=Ia(d),a&&a[un]?a.K(c,d,h(g)?!!g.capture:!1,x):ic(a,c,d,!1,g,x)}function ic(a,c,d,g,x,D){if(!c)throw Error("Invalid event type");var F=h(x)?!!x.capture:!!x,Ee=zs(a);if(Ee||(a[Oi]=Ee=new wn(a)),d=Ee.add(c,d,g,F,D),d.proxy)return d;if(g=sc(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Xt||(x=F),x===void 0&&(x=!1),a.addEventListener(c.toString(),g,x);else if(a.attachEvent)a.attachEvent(Ta(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function sc(){function a(d){return c.call(a.src,a.listener,d)}const c=oc;return a}function Ea(a,c,d,g,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)Ea(a,c[D],d,g,x);else g=h(g)?!!g.capture:!!g,d=Ia(d),a&&a[un]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Vi(D,d,g,x),-1<d&&(At(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=zs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Vi(c,d,g,x)),(d=-1<a?c[a]:null)&&Mi(d))}function Mi(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[un])bi(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Ta(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=zs(c))?(bi(d,a),d.h==0&&(d.src=null,c[Oi]=null)):At(a)}}}function Ta(a){return a in Us?Us[a]:Us[a]="on"+a}function oc(a,c){if(a.da)a=!0;else{c=new Jt(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Mi(a),a=d.call(g,c)}return a}function zs(a){return a=a[Oi],a instanceof wn?a:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ia(a){return typeof a=="function"?a:(a[Bs]||(a[Bs]=function(c){return a.handleEvent(c)}),a[Bs])}function et(){ge.call(this),this.i=new wn(this),this.M=this,this.F=null}P(et,ge),et.prototype[un]=!0,et.prototype.removeEventListener=function(a,c,d,g){Ea(this,a,c,d,g)};function it(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ve(c,a);else if(c instanceof Ve)c.target=c.target||a;else{var x=c;c=new Ve(g,a),T(c,x)}if(x=!0,d)for(var D=d.length-1;0<=D;D--){var F=c.g=d[D];x=K(F,g,!0,c)&&x}if(F=c.g=a,x=K(F,g,!0,c)&&x,x=K(F,g,!1,c)&&x,d)for(D=0;D<d.length;D++)F=c.g=d[D],x=K(F,g,!1,c)&&x}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)At(d[g]);delete a.g[c],a.h--}}this.F=null},et.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},et.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function K(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,D=0;D<c.length;++D){var F=c[D];if(F&&!F.da&&F.capture==d){var Ee=F.listener,ot=F.ha||F.src;F.fa&&bi(a.i,F),x=Ee.call(ot,g)!==!1&&x}}return x&&!g.defaultPrevented}function H(a,c,d){if(typeof a=="function")d&&(a=p(a,d));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function J(a){a.g=H(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class _e extends ge{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(a){ge.call(this),this.h=a,this.g={}}P(we,ge);var He=[];function ke(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Mi(c)},a),a.g={}}we.prototype.N=function(){we.aa.N.call(this),ke(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var G=l.JSON.stringify,Ce=l.JSON.parse,Dt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function st(){}st.prototype.h=null;function Ut(a){return a.h||(a.h=a.i())}function jn(){}var te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function De(){Ve.call(this,"d")}P(De,Ve);function Ie(){Ve.call(this,"c")}P(Ie,Ve);var q={},Q=null;function se(){return Q=Q||new et}q.La="serverreachability";function me(a){Ve.call(this,q.La,a)}P(me,Ve);function Qe(a){const c=se();it(c,new me(c))}q.STAT_EVENT="statevent";function Yt(a,c){Ve.call(this,q.STAT_EVENT,a),this.stat=c}P(Yt,Ve);function Se(a){const c=se();it(c,new Yt(c,a))}q.Ma="timingevent";function Zt(a,c){Ve.call(this,q.Ma,a),this.size=c}P(Zt,Ve);function ft(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function $s(a,c,d,g,x,D){a.info(function(){if(a.g)if(D)for(var F="",Ee=D.split("&"),ot=0;ot<Ee.length;ot++){var pe=Ee[ot].split("=");if(1<pe.length){var pt=pe[0];pe=pe[1];var mt=pt.split("_");F=2<=mt.length&&mt[1]=="type"?F+(pt+"="+pe+"&"):F+(pt+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+d+`
`+F})}function ac(a,c,d,g,x,D,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+F})}function Fn(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Hs(a,d)+(g?" "+g:"")})}function Sa(a,c){a.info(function(){return"TIMEOUT: "+c})}En.prototype.info=function(){};function Hs(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<x.length;F++)x[F]=""}}}}return G(d)}catch{return c}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function ka(){}P(ka,st),ka.prototype.g=function(){return new XMLHttpRequest},ka.prototype.i=function(){return{}},lc=new ka;function dr(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var dp={},uc={};function cc(a,c,d){a.L=1,a.v=Pa(Un(c)),a.m=d,a.P=!0,fp(a,null)}function fp(a,c){a.F=Date.now(),Ca(a),a.A=Un(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Cp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new hp,a.g=Wp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new _e(p(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(He[0]=x.toString()),x=He);for(var D=0;D<x.length;D++){var F=wa(d,x[D],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qe(),$s(a.i,a.u,a.A,a.l,a.R,a.m)}dr.prototype.ca=function(a){a=a.target;const c=this.M;c&&zn(a)==3?c.j():this.Y(a)},dr.prototype.Y=function(a){try{if(a==this.g)e:{const mt=zn(this.g);var c=this.g.Ba();const Fi=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Vp(this.g)))){this.J||mt!=4||c==7||(c==8||0>=Fi?Qe(3):Qe(2)),hc(this);var d=this.g.Z();this.X=d;t:if(pp(this)){var g=Vp(this.g);a="";var x=g.length,D=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Ws(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==x-1)});g.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,ac(this.i,this.u,this.A,this.l,this.R,mt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,ot=this.g;if((Ee=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ee)){var pe=Ee;break t}}pe=null}if(d=pe)Fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,d);else{this.o=!1,this.s=3,Se(12),ii(this),Ws(this);break e}}if(this.P){d=!0;let cn;for(;!this.J&&this.C<F.length;)if(cn=_1(this,F),cn==uc){mt==4&&(this.s=4,Se(14),d=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==dp){this.s=4,Se(15),Fn(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Fn(this.i,this.l,cn,null),dc(this,cn);if(pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||F.length!=0||this.h.h||(this.s=1,Se(16),d=!1),this.o=this.o&&d,!d)Fn(this.i,this.l,F,"[Invalid Chunked Response]"),ii(this),Ws(this);else if(0<F.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),vc(pt),pt.M=!0,Se(11))}}else Fn(this.i,this.l,F,null),dc(this,F);mt==4&&ii(this),this.o&&!this.J&&(mt==4?zp(this.j,this):(this.o=!1,Ca(this)))}else M1(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),ii(this),Ws(this)}}}catch{}finally{}};function pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _1(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?uc:(d=Number(c.substring(d,g)),isNaN(d)?dp:(g+=1,g+d>c.length?uc:(c=c.slice(g,g+d),a.C=g+d,c)))}dr.prototype.cancel=function(){this.J=!0,ii(this)};function Ca(a){a.S=Date.now()+a.I,mp(a,a.I)}function mp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ft(p(a.ba,a),c)}function hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}dr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Sa(this.i,this.A),this.L!=2&&(Qe(),Se(17)),ii(this),this.s=2,Ws(this)):mp(this,this.S-a)};function Ws(a){a.j.G==0||a.J||zp(a.j,a)}function ii(a){hc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ke(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function dc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||fc(d.h,a))){if(!a.K&&fc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ma(d),Va(d);else break e;yc(d),Se(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ft(p(d.Za,d),6e3));if(1>=vp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else oi(d,11)}else if((a.K||d.g==a)&&Ma(d),!v(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let pe=x[c];if(d.T=pe[0],pe=pe[1],d.G==2)if(pe[0]=="c"){d.K=pe[1],d.ia=pe[2];const pt=pe[3];pt!=null&&(d.la=pt,d.j.info("VER="+d.la));const mt=pe[4];mt!=null&&(d.Aa=mt,d.j.info("SVER="+d.Aa));const Fi=pe[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(g=1.5*Fi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const cn=a.g;if(cn){const ja=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ja){var D=g.h;D.g||ja.indexOf("spdy")==-1&&ja.indexOf("quic")==-1&&ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(pc(D,D.h),D.h=null))}if(g.D){const _c=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(g.ya=_c,Re(g.I,g.D,_c))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var F=a;if(g.qa=Hp(g,g.J?g.ia:null,g.W),F.K){_p(g.h,F);var Ee=F,ot=g.L;ot&&(Ee.I=ot),Ee.B&&(hc(Ee),Ca(Ee)),g.g=F}else Fp(g);0<d.i.length&&Oa(d)}else pe[0]!="stop"&&pe[0]!="close"||oi(d,7);else d.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?oi(d,7):gc(d):pe[0]!="noop"&&d.l&&d.l.ta(pe),d.v=0)}}Qe(4)}catch{}}var w1=class{constructor(a,c){this.g=a,this.map=c}};function gp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vp(a){return a.h?1:a.g?a.g.size:0}function fc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function pc(a,c){a.g?a.g.add(c):a.h=c}function _p(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}gp.prototype.cancel=function(){if(this.i=wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function E1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function T1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=T1(a),g=E1(a),x=g.length,D=0;D<x;D++)c.call(void 0,g[D],d&&d[D],a)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I1(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),x=null;if(0<=g){var D=a[d].substring(0,g);x=a[d].substring(g+1)}else D=a[d];c(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function si(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof si){this.h=a.h,Ra(this,a.j),this.o=a.o,this.g=a.g,xa(this,a.s),this.l=a.l;var c=a.i,d=new Ks;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ip(this,d),this.m=a.m}else a&&(c=String(a).match(Tp))?(this.h=!1,Ra(this,c[1]||"",!0),this.o=qs(c[2]||""),this.g=qs(c[3]||"",!0),xa(this,c[4]),this.l=qs(c[5]||"",!0),Ip(this,c[6]||"",!0),this.m=qs(c[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}si.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Gs(c,Sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Gs(c,Sp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Gs(d,d.charAt(0)=="/"?k1:A1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Gs(d,R1)),a.join("")};function Un(a){return new si(a)}function Ra(a,c,d){a.j=d?qs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function xa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Ip(a,c,d){c instanceof Ks?(a.i=c,x1(a.i,a.h)):(d||(c=Gs(c,C1)),a.i=new Ks(c,a.h))}function Re(a,c,d){a.i.set(c,d)}function Pa(a){return Re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,S1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function S1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sp=/[#\/\?@]/g,A1=/[#\?:]/g,k1=/[#\?]/g,C1=/[#\?@]/g,R1=/#/g;function Ks(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function fr(a){a.g||(a.g=new Map,a.h=0,a.i&&I1(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ks.prototype,t.add=function(a,c){fr(this),this.i=null,a=Li(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Ap(a,c){fr(a),c=Li(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function kp(a,c){return fr(a),c=Li(a,c),a.g.has(c)}t.forEach=function(a,c){fr(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(c,x,g,this)},this)},this)},t.na=function(){fr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const x=a[g];for(let D=0;D<x.length;D++)d.push(c[g])}return d},t.V=function(a){fr(this);let c=[];if(typeof a=="string")kp(this,a)&&(c=c.concat(this.g.get(Li(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return fr(this),this.i=null,a=Li(this,a),kp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Cp(a,c,d){Ap(a,c),0<d.length&&(a.i=null,a.g.set(Li(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var x=D;F[g]!==""&&(x+="="+encodeURIComponent(String(F[g]))),a.push(x)}}return this.i=a.join("&")};function Li(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function x1(a,c){c&&!a.j&&(fr(a),a.i=null,a.g.forEach(function(d,g){var x=g.toLowerCase();g!=x&&(Ap(this,g),Cp(this,x,d))},a)),a.j=c}function P1(a,c){const d=new En;if(l.Image){const g=new Image;g.onload=k(pr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=k(pr,d,"TestLoadImage: error",!1,c,g),g.onabort=k(pr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=k(pr,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function N1(a,c){const d=new En,g=new AbortController,x=setTimeout(()=>{g.abort(),pr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?pr(d,"TestPingServer: ok",!0,c):pr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),pr(d,"TestPingServer: error",!1,c)})}function pr(a,c,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function D1(){this.g=new Dt}function b1(a,c,d){const g=d||"";try{Ep(a,function(x,D){let F=x;h(x)&&(F=G(x)),c.push(g+D+"="+encodeURIComponent(F))})}catch(x){throw c.push(g+"type="+encodeURIComponent("_badmap")),x}}function Na(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Na,st),Na.prototype.g=function(){return new Da(this.l,this.j)},Na.prototype.i=function(a){return function(){return a}}({});function Da(a,c){et.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Da,et),t=Da.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Qs(this):Xs(this),this.readyState==3&&Rp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xp(a){let c="";return j(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function mc(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=xp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Re(a,c,d))}function Ue(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ue,et);var V1=/^https?$/i,O1=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Ut(this.o):Ut(lc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Pp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(O1,c,void 0))||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of d)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Pp(this,D)}};function Pp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Np(a),ba(a)}function Np(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dp(this):this.bb())},t.bb=function(){Dp(this)};function Dp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||zn(a)!=4||a.Z()!=2)){if(a.u&&zn(a)==4)H(a.Ea,0,a);else if(it(a,"readystatechange"),zn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=F===0){var x=String(a.D).match(Tp)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!V1.test(x?x.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var D=2<zn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Np(a)}}finally{ba(a)}}}}function ba(a,c){if(a.g){bp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function bp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ce(c)}};function Vp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function M1(a){const c={};a=(a.g&&2<=zn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=C(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Op(a){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,a),this.cb=Js("retryDelaySeedMs",1e4,a),this.Wa=Js("forwardChannelMaxRetries",2,a),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new gp(a&&a.concurrentRequestLimit),this.Da=new D1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Op.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){Se(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Hp(this,null,this.W),Oa(this)};function gc(a){if(Mp(a),a.G==3){var c=a.U++,d=Un(a.I);if(Re(d,"SID",a.K),Re(d,"RID",c),Re(d,"TYPE","terminate"),Ys(a,d),c=new dr(a,a.j,c),c.L=2,c.v=Pa(Un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Wp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ca(c)}$p(a)}function Va(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function Mp(a){Va(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Oa(a){if(!yp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Qt||re(),z||(Qt(),z=!0),Z.add(c,a),a.B=0}}function L1(a,c){return vp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ft(p(a.Ga,a,c),Bp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new dr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=jp(this,x,c),d=Un(this.I),Re(d,"RID",a),Re(d,"CVER",22),this.D&&Re(d,"X-HTTP-Session-Id",this.D),Ys(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(xp(D)))+"&"+c:this.m&&mc(d,this.m,D)),pc(this.h,x),this.Ua&&Re(d,"TYPE","init"),this.P?(Re(d,"$req",c),Re(d,"SID","null"),x.T=!0,cc(x,d,null)):cc(x,d,c),this.G=2}}else this.G==3&&(a?Lp(this,a):this.i.length==0||yp(this.h)||Lp(this))};function Lp(a,c){var d;c?d=c.l:d=a.U++;const g=Un(a.I);Re(g,"SID",a.K),Re(g,"RID",d),Re(g,"AID",a.T),Ys(a,g),a.m&&a.o&&mc(g,a.m,a.o),d=new dr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=jp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pc(a.h,d),cc(d,g,c)}function Ys(a,c){a.H&&j(a.H,function(d,g){Re(c,g,d)}),a.l&&Ep({},function(d,g){Re(c,g,d)})}function jp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?p(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const F=["count="+d];D==-1?0<d?(D=x[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let Ee=!0;for(let ot=0;ot<d;ot++){let pe=x[ot].g;const pt=x[ot].map;if(pe-=D,0>pe)D=Math.max(0,x[ot].g-100),Ee=!1;else try{b1(pt,F,"req"+pe+"_")}catch{g&&g(pt)}}if(Ee){g=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function Fp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Qt||re(),z||(Qt(),z=!0),Z.add(c,a),a.v=0}}function yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ft(p(a.Fa,a),Bp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Up(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ft(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Va(this),Up(this))};function vc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Up(a){a.g=new dr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Un(a.qa);Re(c,"RID","rpc"),Re(c,"SID",a.K),Re(c,"AID",a.T),Re(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Re(c,"TO",a.ja),Re(c,"TYPE","xmlhttp"),Ys(a,c),a.m&&a.o&&mc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Pa(Un(c)),d.m=null,d.P=!0,fp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Va(this),yc(this),Se(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function zp(a,c){var d=null;if(a.g==c){Ma(a),vc(a),a.g=null;var g=2}else if(fc(a.h,c))d=c.D,_p(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;g=se(),it(g,new Zt(g,d)),Oa(a)}else Fp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(g==1&&L1(a,c)||g==2&&yc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function Bp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function oi(a,c){if(a.j.info("Error code "+c),c==2){var d=p(a.fb,a),g=a.Xa;const x=!g;g=new si(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ra(g,"https"),Pa(g),x?P1(g.toString(),d):N1(g.toString(),d)}else Se(2);a.G=0,a.l&&a.l.sa(c),$p(a),Mp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function $p(a){if(a.G=0,a.ka=[],a.l){const c=wp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Hp(a,c,d){var g=d instanceof si?Un(d):new si(d);if(g.g!="")c&&(g.g=c+"."+g.g),xa(g,g.s);else{var x=l.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var D=new si(null);g&&Ra(D,g),c&&(D.g=c),x&&xa(D,x),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&Re(g,d,c),Re(g,"VER",a.la),Ys(a,g),g}function Wp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ue(new Na({eb:d})):new Ue(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}t=qp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function La(){}La.prototype.g=function(a,c){return new zt(a,c)};function zt(a,c){et.call(this),this.g=new Op(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ji(this)}P(zt,et),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){gc(this.g)},zt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=G(a),a=d);c.i.push(new w1(c.Ya++,a)),c.G==3&&Oa(c)},zt.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,zt.aa.N.call(this)};function Gp(a){De.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Gp,De);function Kp(){Ie.call(this),this.status=1}P(Kp,Ie);function ji(a){this.g=a}P(ji,qp),ji.prototype.ua=function(){it(this.g,"a")},ji.prototype.ta=function(a){it(this.g,new Gp(a))},ji.prototype.sa=function(a){it(this.g,new Kp)},ji.prototype.ra=function(){it(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,H0=function(){return new La},$0=function(){return se()},B0=q,ld={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Sl=Aa,cp.COMPLETE="complete",z0=cp,jn.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",et.prototype.listen=et.prototype.K,ho=jn,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,U0=Ue}).apply(typeof rl<"u"?rl:typeof self<"u"?self:typeof window<"u"?window:{});const Vg="@firebase/firestore",Og="4.8.0";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Ms="11.10.0";/**
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
 */const ki=new Tf("@firebase/firestore");function zi(){return ki.logLevel}function B(t,...e){if(ki.logLevel<=ce.DEBUG){const n=e.map(Vf);ki.debug(`Firestore (${Ms}): ${t}`,...n)}}function ar(t,...e){if(ki.logLevel<=ce.ERROR){const n=e.map(Vf);ki.error(`Firestore (${Ms}): ${t}`,...n)}}function qr(t,...e){if(ki.logLevel<=ce.WARN){const n=e.map(Vf);ki.warn(`Firestore (${Ms}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,W0(t,r,n)}function W0(t,e,n){let r=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ar(r),new Error(r)}function ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||W0(e,i,r)}function ie(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tk{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ik{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Mg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Mg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function G0(){return new TextEncoder}/**
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
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ud(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ae(r,i);{const s=G0(),o=ok(s.encode(Lg(t,n)),s.encode(Lg(e,n)));return o!==0?o:ae(r,i)}}n+=r>65535?2:1}return ae(t.length,e.length)}function Lg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function ok(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ae(t[n],e[n]);return ae(t.length,e.length)}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const jg="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):ud(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zr.fromString(e.substring(4,e.length-2))}}class Me extends Sn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const ak=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Sn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return ak.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jg}static keyField(){return new ut([jg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Me.fromString(e))}static fromName(e){return new X(Me.fromString(e).popFirst(5))}static empty(){return new X(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Me(e.slice()))}}/**
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
 */function lk(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uk(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fg(t){if(!X.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function pa(t,e){if(!K0(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ug=-62135596800,zg=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zg);return new Pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ug)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zg}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pa(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:Ge("string",Pe._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Pe(0,0))}static max(){return new ne(new Pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xo=-1;function ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new Gr(i,X.empty(),e)}function hk(t){return new Gr(t.readTime,t.key,Xo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ne.min(),X.empty(),Xo)}static max(){return new Gr(ne.max(),X.empty(),Xo)}}function dk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const fk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ls(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==fk)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Fu.ue=-1;/**
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
 */const Lf=-1;function Uu(t){return t==null}function lu(t){return t===0&&1/t==-1/0}function gk(t){return typeof t=="number"&&Number.isInteger(t)&&!lu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q0="";function yk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bg(e)),e=vk(t.get(n),e);return Bg(e)}function vk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Q0:n+="";break;default:n+=s}}return n}function Bg(t){return t+Q0+""}/**
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
 */function $g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new il(this.root,e,this.comparator,!1)}getReverseIterator(){return new il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new il(this.root,e,this.comparator,!0)}}class il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ze(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new J0("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const _k=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=_k.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */const Y0="server_timestamp",Z0="__type__",ew="__previous_value__",tw="__local_write_time__";function jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Z0])===null||n===void 0?void 0:n.stringValue)===Y0}function zu(t){const e=t.mapValue.fields[ew];return jf(e)?zu(e):e}function Jo(t){const e=Kr(t.mapValue.fields[tw].timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class wk{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const uu="(default)";class Yo{constructor(e,n){this.projectId=e,this.database=n||uu}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database===uu}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nw="__type__",Ek="__max__",sl={mapValue:{}},rw="__vector__",cu="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jf(t)?4:Ik(t)?9007199254740991:Tk(t)?10:11:Y(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),l=Kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?lu(o)===lu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($g(o)!==$g(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Zo(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Wg(t.timestampValue,e.timestampValue);case 4:return Wg(Jo(t),Jo(e));case 5:return ud(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Qr(s),u=Qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Be(s.latitude),Be(o.latitude));return l!==0?l:ae(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},p=o.fields||{},k=(l=m[cu])===null||l===void 0?void 0:l.arrayValue,P=(u=p[cu])===null||u===void 0?void 0:u.arrayValue,N=ae(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:qg(k,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===sl.mapValue&&o===sl.mapValue)return 0;if(s===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=ud(u[m],f[m]);if(p!==0)return p;const k=Ss(l[u[m]],h[f[m]]);if(k!==0)return k}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{le:n})}}function Wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Kr(t),r=Kr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function qg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ss(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function As(t){return cd(t)}function cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cd(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Al(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+Al(e):16;case 5:return 2*t.stringValue.length;case 6:return Qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Al(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ni(r.fields,(s,o)=>{i+=s.length+Al(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function hd(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function Gg(t){return!!t&&"nullValue"in t}function Kg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kl(t){return!!t&&"mapValue"in t}function Tk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[nw])===null||n===void 0?void 0:n.stringValue)===rw}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ik(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ek}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Co(this.value))}}function iw(t){const e=[];return ni(t.fields,(n,r)=>{const i=new ut([n]);if(kl(r)){const s=iw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class Et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,ne.min(),ne.min(),ne.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,ne.min(),ne.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ne.min(),ne.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hu{constructor(e,n){this.position=e,this.inclusive=n}}function Qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class du{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sw{}class Je extends sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kk(e,n,r):n==="array-contains"?new xk(e,r):n==="in"?new Pk(e,r):n==="not-in"?new Nk(e,r):n==="array-contains-any"?new Dk(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ck(e,r):new Rk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ss(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends sw{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Ln(e,n)}matches(e){return ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ow(t){return t.op==="and"}function aw(t){return Ak(t)&&ow(t)}function Ak(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function dd(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+As(t.value);if(aw(t))return t.filters.map(e=>dd(e)).join(",");{const e=t.filters.map(n=>dd(n)).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lw(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function uw(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"}(t):"Filter"}class kk extends Je{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ck extends Je{constructor(e,n){super(e,"in",n),this.keys=cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rk extends Je{constructor(e,n){super(e,"not-in",n),this.keys=cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class xk extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&Zo(n.arrayValue,this.value)}}class Pk extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class Nk extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zo(this.value.arrayValue,n)}}class Dk extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zo(this.value.arrayValue,r))}}/**
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
 */class bk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bk(t,e,n,r,i,s,o)}function Uf(t){const e=ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.Pe=n}return e.Pe}function zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xg(t.startAt,e.startAt)&&Xg(t.endAt,e.endAt)}function fd(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Vk(t,e,n,r,i,s,o,l){return new Bu(t,e,n,r,i,s,o,l)}function $u(t){return new Bu(t)}function Yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ok(t){return t.collectionGroup!==null}function Ro(t){const e=ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new du(s,r))}),n.has(ut.keyField().canonicalString())||e.Te.push(new du(ut.keyField(),r))}return e.Te}function Nn(t){const e=ie(t);return e.Ie||(e.Ie=Mk(e,Ro(t))),e.Ie}function Mk(t,e){if(t.limitType==="F")return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new du(i.field,s)});const n=t.endAt?new hu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hu(t.startAt.position,t.startAt.inclusive):null;return Jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pd(t,e,n){return new Bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return zf(Nn(t),Nn(e))&&t.limitType===e.limitType}function hw(t){return`${Uf(Nn(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uw(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Qg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const h=Qg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ro(r),i))}(t,e)}function Lk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dw(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jk(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ss(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
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
 */const Fk=new Fe(X.comparator);function lr(){return Fk}const fw=new Fe(X.comparator);function fo(...t){let e=fw;for(const n of t)e=e.insert(n.key,n);return e}function pw(t){let e=fw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return xo()}function mw(){return xo()}function xo(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Uk=new Fe(X.comparator),zk=new Ze(X.comparator);function he(...t){let e=zk;for(const n of t)e=e.add(n);return e}const Bk=new Ze(ae);function $k(){return Bk}/**
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
 */function Bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lu(e)?"-0":e}}function gw(t){return{integerValue:""+t}}function Hk(t,e){return gk(e)?gw(e):Bf(t,e)}/**
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
 */class qu{constructor(){this._=void 0}}function Wk(t,e,n){return t instanceof fu?function(i,s){const o={fields:{[Z0]:{stringValue:Y0},[tw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jf(s)&&(s=zu(s)),s&&(o.fields[ew]=s),{mapValue:o}}(n,e):t instanceof ks?vw(t,e):t instanceof ea?_w(t,e):function(i,s){const o=yw(i,s),l=Zg(o)+Zg(i.Ee);return hd(o)&&hd(i.Ee)?gw(l):Bf(i.serializer,l)}(t,e)}function qk(t,e,n){return t instanceof ks?vw(t,e):t instanceof ea?_w(t,e):n}function yw(t,e){return t instanceof pu?function(r){return hd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fu extends qu{}class ks extends qu{constructor(e){super(),this.elements=e}}function vw(t,e){const n=ww(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends qu{constructor(e){super(),this.elements=e}}function _w(t,e){let n=ww(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class pu extends qu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Zg(t){return Be(t.integerValue||t.doubleValue)}function ww(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Gk{constructor(e,n){this.field=e,this.transform=n}}function Kk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ks&&i instanceof ks||r instanceof ea&&i instanceof ea?Is(r.elements,i.elements,Mn):r instanceof pu&&i instanceof pu?Mn(r.Ee,i.Ee):r instanceof fu&&i instanceof fu}(t.transform,e.transform)}class Qk{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function Ew(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iw(t.key,Dn.none()):new ma(t.key,t.data,Dn.none());{const n=t.data,r=Ot.empty();let i=new Ze(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new Ht(i.toArray()),Dn.none())}}function Xk(t,e,n){t instanceof ma?function(i,s,o){const l=i.value.clone(),u=ty(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(i,s,o){if(!Cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ty(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Tw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof ma?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const h=s.value.clone(),f=ny(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const h=ny(s.fieldTransforms,u,o),f=o.data;return f.setAll(Tw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yw(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>Kk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends Gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends Gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ty(t,e,n){const r=new Map;ye(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,qk(o,l,n[i]))}return r}function ny(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Wk(s,o,e))}return r}class Iw extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yk extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Xk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Ew(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>ey(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>ey(n,r))}}class $f{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return Uk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $f(e,n,r,i)}}/**
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
 */class eC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,de;function nC(t){switch(t){case M.OK:return Y(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function Sw(t){if(t===void 0)return ar("GRPC error has no .code"),M.UNKNOWN;switch(t){case We.OK:return M.OK;case We.CANCELLED:return M.CANCELLED;case We.UNKNOWN:return M.UNKNOWN;case We.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case We.INTERNAL:return M.INTERNAL;case We.UNAVAILABLE:return M.UNAVAILABLE;case We.UNAUTHENTICATED:return M.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case We.NOT_FOUND:return M.NOT_FOUND;case We.ALREADY_EXISTS:return M.ALREADY_EXISTS;case We.PERMISSION_DENIED:return M.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case We.ABORTED:return M.ABORTED;case We.OUT_OF_RANGE:return M.OUT_OF_RANGE;case We.UNIMPLEMENTED:return M.UNIMPLEMENTED;case We.DATA_LOSS:return M.DATA_LOSS;default:return Y(39323,{code:t})}}(de=We||(We={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rC=new zr([4294967295,4294967295],0);function ry(t){const e=G0().encode(t),n=new F0;return n.update(e),new Uint8Array(n.digest())}function iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zr([n,r],0),new zr([i,s],0)]}class Hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=zr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(zr.fromNumber(r)));return i.compare(rC)===1&&(i=new zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=ry(e),[r,i]=iy(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=ry(e),[r,i]=iy(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ku(ne.min(),i,new Fe(ae),lr(),he())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,he(),he(),he())}}/**
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
 */class Rl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class Aw{constructor(e,n){this.targetId=e,this.De=n}}class kw{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sy{constructor(){this.ve=0,this.Ce=oy(),this.Fe=dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=he(),n=he(),r=he();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new ga(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=oy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class iC{constructor(e){this.We=e,this.Ge=new Map,this.ze=lr(),this.je=ol(),this.Je=ol(),this.He=new Fe(ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(fd(s))if(r===0){const o=new X(s.path);this.Xe(n,o,Et.newNoDocument(o,ne.min()))}else ye(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(u){if(u instanceof J0)return qr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Hf(o,i,s)}catch(u){return qr(u instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&fd(l.target)){const u=new X(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Et.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=he();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Ku(e,n,this.He,this.ze,r);return this.ze=lr(),this.je=ol(),this.Je=ol(),this.He=new Fe(ae),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sy,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ze(ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ze(ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sy),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ol(){return new Fe(X.comparator)}function oy(){return new Fe(X.comparator)}const sC={asc:"ASCENDING",desc:"DESCENDING"},oC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aC={and:"AND",or:"OR"};class lC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function md(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uC(t,e){return mu(t,e.toTimestamp())}function bn(t){return ye(!!t,49232),ne.fromTimestamp(function(n){const r=Kr(n);return new Pe(r.seconds,r.nanos)}(t))}function Wf(t,e){return gd(t,e).canonicalString()}function gd(t,e){const n=function(i){return new Me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Rw(t){const e=Me.fromString(t);return ye(bw(e),10190,{key:e.toString()}),e}function yd(t,e){return Wf(t.databaseId,e.path)}function Zc(t,e){const n=Rw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Pw(n))}function xw(t,e){return Wf(t.databaseId,e)}function cC(t){const e=Rw(t);return e.length===4?Me.emptyPath():Pw(e)}function vd(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pw(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ay(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function hC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:Sw(h.code);return new W(f,h.message||"")}(o);n=new kw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zc(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ne.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Rl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Zc(t,r.document),s=r.readTime?bn(r.readTime):ne.min(),o=Et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Zc(t,r.document),s=r.removedTargetIds||[];n=new Rl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tC(i,s),l=r.targetId;n=new Aw(l,o)}}return n}function dC(t,e){let n;if(e instanceof ma)n={update:ay(t,e.key,e.value)};else if(e instanceof Iw)n={delete:yd(t,e.key)};else if(e instanceof ri)n={update:ay(t,e.key,e.data),updateMask:EC(e.fieldMask)};else{if(!(e instanceof Yk))return Y(16599,{Rt:e.type});n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:uC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function fC(t,e){return t&&t.length>0?(ye(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ne.min())&&(o=bn(s)),new Qk(o,i.transformResults||[])}(n,e))):[]}function pC(t,e){return{documents:[xw(t,e.path)]}}function mC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xw(t,i);const s=function(h){if(h.length!==0)return Dw(Ln.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:$i(p.field),direction:vC(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=md(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function gC(t){let e=cC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const p=Nw(m);return p instanceof Ln&&aw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(P){return new du(Hi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,Uu(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,k=m.values||[];return new hu(k,p)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const p=!m.before,k=m.values||[];return new hu(k,p)}(n.endAt)),Vk(e,i,o,s,l,"F",u,h)}function yC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>Nw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function vC(t){return sC[t]}function _C(t){return oC[t]}function wC(t){return aC[t]}function $i(t){return{fieldPath:t.canonicalString()}}function Hi(t){return ut.fromServerFormat(t.fieldPath)}function Dw(t){return t instanceof Je?function(n){if(n.op==="=="){if(Kg(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NAN"}};if(Gg(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kg(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NAN"}};if(Gg(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(n.field),op:_C(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(i=>Dw(i));return r.length===1?r[0]:{compositeFilter:{op:wC(n.op),filters:r}}}(t):Y(54877,{filter:t})}function EC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),l=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TC{constructor(e){this.gt=e}}function IC(t){const e=gC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
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
 */class SC{constructor(){this.Dn=new AC}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Gr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class AC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Me.comparator)).toArray()}}/**
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
 */const ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vw=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Vw,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class Cs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Cs(0)}static ur(){return new Cs(-1)}}/**
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
 */const uy="LruGarbageCollector",kC=1048576;function cy([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class CC{constructor(e){this.Tr=e,this.buffer=new Ze(cy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){B(uy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?B(uy,"Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.Rr(3e5)})}}class xC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Fu.ue);const r=new CC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ly):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),zi()<=ce.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function PC(t,e){return new xC(t,e)}/**
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
 */class NC{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Po(r.mutation,i,Ht.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=lr();const o=xo(),l=function(){return xo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ri)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Po(f.mutation,h,f.mutation.getFieldMask(),Pe.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new DC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=xo();let i=new Fe((o,l)=>o-l),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ht.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||he()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=mw();f.forEach(p=>{if(!s.has(p)){const k=Ew(n.get(p),r.get(p));k!==null&&m.set(p,k),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ok(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(mi());let l=Xo,u=s;return o.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,he())).next(f=>({batchId:l,changes:pw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,p){return new Bu(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))});let l=fo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Po(f.mutation,h,Ht.empty(),Pe.now()),Wu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class VC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:IC(i.bundledQuery),readTime:bn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class OC{constructor(){this.overlays=new Fe(X.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=mi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=mi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eC(n,r));let s=this.kr.get(n);s===void 0&&(s=he(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class MC{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class qf{constructor(){this.qr=new Ze(tt.Qr),this.$r=new Ze(tt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new tt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new X(new Me([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new X(new Me([])),r=new tt(n,e),i=new tt(n,e+1);let s=he();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return X.comparator(e.key,n.key)||ae(e.Hr,n.Hr)}static Ur(e,n){return ae(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
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
 */class LC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ze(tt.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new tt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Lf:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ae);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new tt(new X(s),0);let l=new Ze(ae);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new tt(n,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jC{constructor(e){this.ni=e,this.docs=function(){return new Fe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=lr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dk(hk(f),r)<=0||(i.has(f.key)||Wu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FC(this)}getSize(e){return V.resolve(this.size)}}class FC extends NC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class UC{constructor(e){this.persistence=e,this.ii=new Pi(n=>Uf(n),zf),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.si=0,this.oi=new qf,this.targetCount=0,this._i=Cs.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
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
 */class Ow{constructor(e,n){this.ai={},this.overlays={},this.ui=new Fu(0),this.ci=!1,this.ci=!0,this.li=new MC,this.referenceDelegate=e(this),this.hi=new UC(this),this.indexManager=new SC,this.remoteDocumentCache=function(i){return new jC(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new TC(n),this.Ti=new VC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new LC(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new zC(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class zC extends pk{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Ai=new qf,this.Ri=null}static Vi(e){return new Gf(e)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const i=X.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class gu{constructor(e,n){this.persistence=e,this.gi=new Pi(r=>yk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=PC(this,n)}static Vi(e,n){return new gu(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Al(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kf(e,n.fromCache,r,i)}}/**
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
 */class BC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $C{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return NI()?8:mk(It())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new BC;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(zi()<=ce.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(zi()<=ce.DEBUG&&B("QueryEngine","Query:",Bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(zi()<=ce.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):V.resolve())}ps(e,n){if(Yg(n))return V.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pd(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,pd(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Yg(n)||i.isEqual(ne.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?V.resolve(null):(zi()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.vs(e,o,n,ck(i,Xo)).next(l=>l))})}bs(e,n){let r=new Ze(dw(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return zi()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Qf="LocalStore",HC=3e8;class WC{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Fe(ae),this.Ms=new Pi(s=>Uf(s),zf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function qC(t,e,n,r){return new WC(t,e,n,r)}async function Mw(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=he();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function GC(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,p=m.keys();let k=V.resolve();return p.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);ye(O!==null,48541),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Lw(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function KC(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const p=i.get(m);if(!p)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,m)));let k=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(dt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=HC?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,k,f)&&l.push(n.hi.updateTargetData(s,k))});let u=lr(),h=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(QC(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(ne.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function QC(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Qf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function XC(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JC(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function _d(t,e,n){const r=ie(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;B(Qf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function hy(t,e,n){const r=ie(t);let i=ne.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ie(u),p=m.Ms.get(f);return p!==void 0?V.resolve(m.Fs.get(p)):m.hi.getTargetData(h,f)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:he())).next(l=>(YC(r,Lk(e),l),{documents:l,qs:s})))}function YC(t,e,n){let r=t.xs.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class dy{constructor(){this.activeTargetIds=$k()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZC{constructor(){this.Fo=new dy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eR{xo(e){}shutdown(){}}/**
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
 */const fy="ConnectivityMonitor";class py{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){B(fy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){B(fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let al=null;function wd(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
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
 */const eh="RestConnection",tR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===uu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=wd(),l=this.Go(e,n.toUriEncodedString());B(eh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=bs(h);return this.jo(e,l,u,r,f).then(m=>(B(eh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw qr(eh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=tR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class rR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const vt="WebChannelConnection";class iR extends nR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=wd();return new Promise((l,u)=>{const h=new U0;h.setWithCredentials(!0),h.listenOnce(z0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Sl.NO_ERROR:const m=h.getResponseJson();B(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Sl.TIMEOUT:B(vt,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Sl.HTTP_ERROR:const p=h.getStatus();if(B(vt,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const P=k==null?void 0:k.error;if(P&&P.status&&P.message){const N=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(P.status);u(new W(N,P.message))}else u(new W(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{B(vt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(vt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=wd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H0(),l=$0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(vt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let p=!1,k=!1;const P=new rR({Ho:O=>{k?B(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(p||(B(vt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),B(vt,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},Yo:()=>m.close()}),N=(O,S,v)=>{O.listen(S,A=>{try{v(A)}catch(b){setTimeout(()=>{throw b},0)}})};return N(m,ho.EventType.OPEN,()=>{k||(B(vt,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),N(m,ho.EventType.CLOSE,()=>{k||(k=!0,B(vt,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(m))}),N(m,ho.EventType.ERROR,O=>{k||(k=!0,qr(vt,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),P.__(new W(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,ho.EventType.MESSAGE,O=>{var S;if(!k){const v=O.data[0];ye(!!v,16349);const A=v,b=(A==null?void 0:A.error)||((S=A[0])===null||S===void 0?void 0:S.error);if(b){B(vt,`RPC '${e}' stream ${i} received error:`,b);const U=b.status;let j=function(w){const T=We[w];if(T!==void 0)return Sw(T)}(U),E=b.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+U+" with message "+b.message),k=!0,P.__(new W(j,E)),m.close()}else B(vt,`RPC '${e}' stream ${i} received:`,v),P.a_(v)}}),N(l,B0.STAT_EVENT,O=>{O.stat===ld.PROXY?B(vt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===ld.NOPROXY&&B(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function th(){return typeof document<"u"?document:null}/**
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
 */function Qu(t){return new lC(t,!0)}/**
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
 */class jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const my="PersistentStream";class Fw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new jw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return B(my,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(B(my,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sR extends Fw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=hC(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?bn(o.readTime):ne.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=vd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=fd(u)?{documents:pC(s,u)}:{query:mC(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cw(s,o.resumeToken);const h=md(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=mu(s,o.snapshotVersion.toTimestamp());const h=md(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=vd(this.serializer),n.removeTarget=e,this.k_(n)}}class oR extends Fw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=fC(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=vd(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dC(this.serializer,r))};this.k_(n)}}/**
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
 */class aR{}class lR extends aR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,gd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,gd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class uR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ar(n),this._a=!1):B("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ci="RemoteStore";class cR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(B(Ci,"Restarting streams for network reachability change."),await async function(u){const h=ie(u);h.Ia.add(4),await ya(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Xu(h)}(this))})}),this.Aa=new uR(r,i)}}async function Xu(t){if(Ni(t))for(const e of t.da)await e(!0)}async function ya(t){for(const e of t.da)await e(!1)}function Uw(t,e){const n=ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Zf(n)?Yf(n):Fs(n).x_()&&Jf(n,e))}function Xf(t,e){const n=ie(t),r=Fs(n);n.Ta.delete(e),r.x_()&&zw(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ni(n)&&n.Aa.set("Unknown"))}function Jf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).H_(e)}function zw(t,e){t.Ra.$e(e),Fs(t).Y_(e)}function Yf(t){t.Ra=new iC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.Aa.aa()}function Zf(t){return Ni(t)&&!Fs(t).M_()&&t.Ta.size>0}function Ni(t){return ie(t).Ia.size===0}function Bw(t){t.Ra=void 0}async function hR(t){t.Aa.set("Online")}async function dR(t){t.Ta.forEach((e,n)=>{Jf(t,e)})}async function fR(t,e){Bw(t),Zf(t)?(t.Aa.la(e),Yf(t)):t.Aa.set("Unknown")}async function pR(t,e,n){if(t.Aa.set("Online"),e instanceof kw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){B(Ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yu(t,r)}else if(e instanceof Rl?t.Ra.Ye(e):e instanceof Aw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ne.min()))try{const r=await Lw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),zw(s,u);const m=new xr(f.target,u,h,f.sequenceNumber);Jf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(Ci,"Failed to raise snapshot:",r),await yu(t,r)}}async function yu(t,e,n){if(!js(e))throw e;t.Ia.add(1),await ya(t),t.Aa.set("Offline"),n||(n=()=>Lw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Ci,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Xu(t)})}function $w(t,e){return e().catch(n=>yu(t,n,e))}async function Ju(t){const e=ie(t),n=Jr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Lf;for(;mR(e);)try{const i=await XC(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,gR(e,i)}catch(i){await yu(e,i)}Hw(e)&&Ww(e)}function mR(t){return Ni(t)&&t.Pa.length<10}function gR(t,e){t.Pa.push(e);const n=Jr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Hw(t){return Ni(t)&&!Jr(t).M_()&&t.Pa.length>0}function Ww(t){Jr(t).start()}async function yR(t){Jr(t).na()}async function vR(t){const e=Jr(t);for(const n of t.Pa)e.X_(n.mutations)}async function _R(t,e,n){const r=t.Pa.shift(),i=$f.from(r,e,n);await $w(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ju(t)}async function wR(t,e){e&&Jr(t).Z_&&await async function(r,i){if(function(o){return nC(o)&&o!==M.ABORTED}(i.code)){const s=r.Pa.shift();Jr(r).N_(),await $w(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ju(r)}}(t,e),Hw(t)&&Ww(t)}async function gy(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),B(Ci,"RemoteStore received new credentials");const r=Ni(n);n.Ia.add(3),await ya(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Xu(n)}async function ER(t,e){const n=ie(t);e?(n.Ia.delete(2),await Xu(n)):e||(n.Ia.add(2),await ya(n),n.Aa.set("Unknown"))}function Fs(t){return t.Va||(t.Va=function(n,r,i){const s=ie(n);return s.ia(),new sR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:hR.bind(null,t),e_:dR.bind(null,t),n_:fR.bind(null,t),J_:pR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Zf(t)?Yf(t):t.Aa.set("Unknown")):(await t.Va.stop(),Bw(t))})),t.Va}function Jr(t){return t.ma||(t.ma=function(n,r,i){const s=ie(n);return s.ia(),new oR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:yR.bind(null,t),n_:wR.bind(null,t),ea:vR.bind(null,t),ta:_R.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Ju(t)):(await t.ma.stop(),t.Pa.length>0&&(B(Ci,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(ar("AsyncQueue",`${e}: ${t}`),js(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{static emptySet(e){return new fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class yy{constructor(){this.fa=new Fe(X.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Y(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Rs(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class TR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class IR{constructor(){this.queries=vy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=vy(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function vy(){return new Pi(t=>hw(t),Hu)}async function qw(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new TR,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=tp(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&np(n)}async function Gw(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SR(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&np(n)}function AR(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function np(t){t.Da.forEach(e=>{e.next()})}var Ed,_y;(_y=Ed||(Ed={})).Fa="default",_y.Cache="cache";class Kw{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ed.Cache}}/**
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
 */class Qw{constructor(e){this.key=e}}class Xw{constructor(e){this.key=e}}class kR{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=he(),this.mutatedKeys=he(),this.Xa=dw(e),this.eu=new fs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new yy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const p=i.get(f),k=Wu(this.query,m)?m:null,P=!!p&&this.mutatedKeys.has(p.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;p&&k?p.data.isEqual(k.data)?P!==N&&(r.track({type:3,doc:k}),O=!0):this.iu(p,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Xa(k,u)>0||h&&this.Xa(k,h)<0)&&(l=!0)):!p&&k?(r.track({type:0,doc:k}),O=!0):p&&!k&&(r.track({type:1,doc:p}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(k,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:O})}};return N(k)-N(P)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Rs(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new yy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=he(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Xw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Qw(r))}),n}uu(e){this.Ha=e.qs,this.Za=he();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Rs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const rp="SyncEngine";class CR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RR{constructor(e){this.key=e,this.lu=!1}}class xR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Pi(l=>hw(l),Hu),this.Tu=new Map,this.Iu=new Set,this.du=new Fe(X.comparator),this.Eu=new Map,this.Au=new qf,this.Ru={},this.Vu=new Map,this.mu=Cs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function PR(t,e,n=!0){const r=n1(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Jw(r,e,n,!0),i}async function NR(t,e){const n=n1(t);await Jw(n,e,!0,!1)}async function Jw(t,e,n,r){const i=await JC(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await DR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Uw(t.remoteStore,i),l}async function DR(t,e,n,r,i){t.gu=(m,p,k)=>async function(N,O,S,v){let A=O.view.nu(S);A.Ds&&(A=await hy(N.localStore,O.query,!1).then(({documents:E})=>O.view.nu(E,A)));const b=v&&v.targetChanges.get(O.targetId),U=v&&v.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(A,N.isPrimaryClient,b,U);return Ey(N,O.targetId,j._u),j.snapshot}(t,m,p,k);const s=await hy(t.localStore,e,!0),o=new kR(e,s.qs),l=o.nu(s.documents),u=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ey(t,n,h._u);const f=new CR(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function bR(t,e,n){const r=ie(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _d(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xf(r.remoteStore,i.targetId),Td(r,i.targetId)}).catch(Ls)):(Td(r,i.targetId),await _d(r.localStore,i.targetId,!0))}async function VR(t,e){const n=ie(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xf(n.remoteStore,r.targetId))}async function OR(t,e,n){const r=BR(t);try{const i=await function(o,l){const u=ie(o),h=Pe.now(),f=l.reduce((k,P)=>k.add(P.key),he());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=lr(),N=he();return u.Os.getEntries(k,f).next(O=>{P=O,P.forEach((S,v)=>{v.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{m=O;const S=[];for(const v of l){const A=Jk(v,m.get(v.key).overlayedDocument);A!=null&&S.push(new ri(v.key,A,iw(A.value.mapValue),Dn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(O=>{p=O;const S=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:p.batchId,changes:pw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Fe(ae)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await va(r,i.changes),await Ju(r.remoteStore)}catch(i){const s=tp(i,"Failed to persist write");n.reject(s)}}async function Yw(t,e){const n=ie(t);try{const r=await KC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ye(o.lu,14607):i.removedDocuments.size>0&&(ye(o.lu,42227),o.lu=!1))}),await va(n,r,e)}catch(r){await Ls(r)}}function wy(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const p of m.wa)p.va(l)&&(h=!0)}),h&&np(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MR(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Fe(X.comparator);o=o.insert(s,Et.newNoDocument(s,ne.min()));const l=he().add(s),u=new Ku(ne.min(),new Map,new Fe(ae),o,l);await Yw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),ip(r)}else await _d(r.localStore,e,!1).then(()=>Td(r,e,n)).catch(Ls)}async function LR(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await GC(n.localStore,e);e1(n,r,null),Zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await Ls(i)}}async function jR(t,e,n){const r=ie(t);try{const i=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ye(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);e1(r,e,n),Zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await Ls(i)}}function Zw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function e1(t,e,n){const r=ie(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||t1(t,r)})}function t1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Xf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ip(t))}function Ey(t,e,n){for(const r of n)r instanceof Qw?(t.Au.addReference(r.key,e),FR(t,r)):r instanceof Xw?(B(rp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||t1(t,r.key)):Y(19791,{yu:r})}function FR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(B(rp,"New document in limbo: "+n),t.Iu.add(r),ip(t))}function ip(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Me.fromString(e)),r=t.mu.next();t.Eu.set(r,new RR(n)),t.du=t.du.insert(n,r),Uw(t.remoteStore,new xr(Nn($u(n.path)),r,"TargetPurposeLimboResolution",Fu.ue))}}async function va(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Kf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,p=>V.forEach(p.Is,k=>f.persistence.referenceDelegate.addReference(m,p.targetId,k)).next(()=>V.forEach(p.ds,k=>f.persistence.referenceDelegate.removeReference(m,p.targetId,k)))))}catch(m){if(!js(m))throw m;B(Qf,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const k=f.Fs.get(p),P=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(p,N)}}}(r.localStore,s))}async function UR(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){B(rp,"User change. New user:",e.toKey());const r=await Mw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.Bs)}}function zR(t,e){const n=ie(t),r=n.Eu.get(e);if(r&&r.lu)return he().add(r.key);{let i=he();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function n1(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MR.bind(null,e),e.hu.J_=SR.bind(null,e.eventManager),e.hu.pu=AR.bind(null,e.eventManager),e}function BR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return qC(this.persistence,new $C,e.initialUser,this.serializer)}Du(e){return new Ow(Gf.Vi,this.serializer)}bu(e){return new ZC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class $R extends vu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ye(this.persistence.referenceDelegate instanceof gu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Ow(r=>gu.Vi(r,n),this.serializer)}}class Id{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UR.bind(null,this.syncEngine),await ER(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IR}()}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=function(s){return new iR(s)}(e.databaseInfo);return function(s,o,l,u){return new lR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new cR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wy(this.syncEngine,n,0),function(){return py.C()?new py:new eR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new xR(i,s,o,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);B(Ci,"RemoteStore shutting down."),s.Ia.add(5),await ya(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Id.provider={build:()=>new Id};/**
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
 */class r1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Yr="FirestoreClient";class HR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),B(Yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{qr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{B("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{qr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Ty(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WR(t);B(Yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gy(e.remoteStore,i)),t._onlineComponents=e}async function WR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Yr,"Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await nh(t,new vu)}}else B(Yr,"Using default OfflineComponentProvider"),await nh(t,new $R(void 0));return t._offlineComponents}async function i1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Yr,"Using user provided OnlineComponentProvider"),await Ty(t,t._uninitializedComponentsProvider._online)):(B(Yr,"Using default OnlineComponentProvider"),await Ty(t,new Id))),t._onlineComponents}function qR(t){return i1(t).then(e=>e.syncEngine)}async function Sd(t){const e=await i1(t),n=e.eventManager;return n.onListen=PR.bind(null,e.syncEngine),n.onUnlisten=bR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VR.bind(null,e.syncEngine),n}function GR(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new r1({next:p=>{f.Ou(),o.enqueueAndForget(()=>Gw(s,m));const k=p.docs.has(l);!k&&p.fromCache?h.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&p.fromCache&&u&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Kw($u(l.path),f,{includeMetadataChanges:!0,ka:!0});return qw(s,m)}(await Sd(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function s1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Iy=new Map;/**
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
 */const o1="firestore.googleapis.com",Sy=!0;class Ay{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o1,this.ssl=Sy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kC)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZA;switch(r.type){case"firstParty":return new rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iy.get(n);r&&(B("ComponentProvider","Removing Datastore"),Iy.delete(n),r.terminate())}(this),Promise.resolve()}}function KR(t,e,n,r={}){var i;t=Pn(t,sp);const s=bs(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(e0(`https://${u}`),t0("Firestore",!0)),o.host!==o1&&o.host!==u&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Wr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=_t.MOCK_USER;else{f=TI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new _t(p)}t._authCredentials=new ek(new q0(f,m))}}/**
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
 */class Yu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yu(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(pa(n,Ke._jsonSchema))return new Ke(e,r||null,new X(Me.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Ge("string",Ke._jsonSchemaVersion),referencePath:Ge("string")};class ta extends Yu{constructor(e,n,r){super(e,n,$u(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new X(e))}withConverter(e){return new ta(this.firestore,e,this._path)}}function Bn(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=Of.newId()),lk("doc","path",e),t instanceof sp){const r=Me.fromString(e,...n);return Fg(r),new Ke(t,null,new X(r))}{if(!(t instanceof Ke||t instanceof ta))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Fg(r),new Ke(t.firestore,t instanceof ta?t.converter:null,new X(r))}}/**
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
 */const ky="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new jw(this,"async_queue_retry"),this.oc=()=>{const r=th();r&&B(ky,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Br;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!js(e))throw e;B(ky,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ar("INTERNAL UNHANDLED ERROR: ",Ry(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=ep.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Y(47125,{hc:Ry(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ry(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function xy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xs extends sp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function QR(t,e){const n=typeof t=="object"?t:s0(),r=typeof t=="string"?t:uu,i=Sf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wI("firestore");s&&KR(i,...s)}return i}function op(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XR(t),t._firestoreClient}function XR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new wk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,s1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new HR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(dt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pa(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Ge("string",rn._jsonSchemaVersion),bytes:Ge("string")};/**
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
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ec{constructor(e){this._methodName=e}}/**
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
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(pa(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:Ge("string",Vn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pa(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Ge("string",On._jsonSchemaVersion),vectorValues:Ge("object")};/**
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
 */const JR=/^__.*__$/;class YR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}class a1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function l1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:t})}}class tc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _u(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(l1(this.Ec)&&JR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ZR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}Dc(e,n,r,i=!1){return new tc({Ec:e,methodName:n,bc:r,path:ut.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u1(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new ZR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ex(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);lp("Data must be an object, but it was:",o,r);const l=c1(r,o);let u,h;if(s.merge)u=new Ht(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const p=Ad(e,m,n);if(!o.contains(p))throw new W(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);d1(f,p)||f.push(p)}u=new Ht(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new YR(new Ot(l),u,h)}class nc extends ec{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function tx(t,e,n){return new tc({Ec:3,bc:e.settings.bc,methodName:t._methodName,mc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ap extends ec{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=tx(this,e,!0),r=this.vc.map(s=>_a(s,n)),i=new ks(r);return new Gk(e.path,i)}isEqual(e){return e instanceof ap&&Wr(this.vc,e.vc)}}function nx(t,e,n,r){const i=t.Dc(1,e,n);lp("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();ni(r,(u,h)=>{const f=up(e,u,n);h=Rt(h);const m=i.gc(f);if(h instanceof nc)s.push(f);else{const p=_a(h,m);p!=null&&(s.push(f),o.set(f,p))}});const l=new Ht(s);return new a1(o,l,i.fieldTransforms)}function rx(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[Ad(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(Ad(e,s[p])),u.push(s[p+1]);const h=[],f=Ot.empty();for(let p=l.length-1;p>=0;--p)if(!d1(h,l[p])){const k=l[p];let P=u[p];P=Rt(P);const N=o.gc(k);if(P instanceof nc)h.push(k);else{const O=_a(P,N);O!=null&&(h.push(k),f.set(k,O))}}const m=new Ht(h);return new a1(f,m,o.fieldTransforms)}function _a(t,e){if(h1(t=Rt(t)))return lp("Unsupported field value:",e,t),c1(t,e);if(t instanceof ec)return function(r,i){if(!l1(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_a(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pe.fromDate(r);return{timestampValue:mu(i.serializer,s)}}if(r instanceof Pe){const s=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(i.serializer,s)}}if(r instanceof Vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Cw(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){return{mapValue:{fields:{[nw]:{stringValue:rw},[cu]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Bf(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Mf(r)}`)}(t,e)}function c1(t,e){const n={};return X0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,i)=>{const s=_a(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Vn||t instanceof rn||t instanceof Ke||t instanceof ec||t instanceof On)}function lp(t,e,n){if(!h1(n)||!K0(n)){const r=Mf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Ad(t,e,n){if((e=Rt(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return up(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const ix=new RegExp("[~\\*/\\[\\]]");function up(t,e,n){if(e.search(ix)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function d1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class f1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(p1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sx extends f1{data(){return super.data()}}function p1(t,e){return typeof e=="string"?up(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}/**
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
 */function ox(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ax{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[cu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Be(o.doubleValue));return new On(s)}convertGeoPoint(e){return new Vn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);ye(bw(r),9688,{name:e});const i=new Yo(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vi extends f1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(p1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vi._jsonSchemaVersion="firestore/documentSnapshot/1.0",vi._jsonSchema={type:Ge("string",vi._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class xl extends vi{data(e={}){return super.data(e)}}class ps{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ux(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ux(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function cx(t){t=Pn(t,Ke);const e=Pn(t.firestore,xs);return GR(op(e),t._key).then(n=>y1(e,t,n))}ps._jsonSchemaVersion="firestore/querySnapshot/1.0",ps._jsonSchema={type:Ge("string",ps._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class m1 extends ax{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function hx(t,e,n){t=Pn(t,Ke);const r=Pn(t.firestore,xs),i=lx(t.converter,e);return g1(r,[ex(u1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Dn.none())])}function yr(t,e,n,...r){t=Pn(t,Ke);const i=Pn(t.firestore,xs),s=u1(i);let o;return o=typeof(e=Rt(e))=="string"||e instanceof Zu?rx(s,"updateDoc",t._key,e,n,r):nx(s,"updateDoc",t._key,e),g1(i,[o.toMutation(t._key,Dn.exists(!0))])}function dx(t,...e){var n,r,i;t=Rt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xy(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof Ke)h=Pn(t.firestore,xs),f=$u(t._key.path),u={next:m=>{e[o]&&e[o](y1(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Pn(t,Yu);h=Pn(m.firestore,xs),f=m._query;const p=new m1(h);u={next:k=>{e[o]&&e[o](new ps(h,p,m,k))},error:e[o+1],complete:e[o+2]},ox(t._query)}return function(p,k,P,N){const O=new r1(N),S=new Kw(k,O,P);return p.asyncQueue.enqueueAndForget(async()=>qw(await Sd(p),S)),()=>{O.Ou(),p.asyncQueue.enqueueAndForget(async()=>Gw(await Sd(p),S))}}(op(h),f,l,u)}function g1(t,e){return function(r,i){const s=new Br;return r.asyncQueue.enqueueAndForget(async()=>OR(await qR(r),i,s)),s.promise}(op(t),e)}function y1(t,e,n){const r=n.docs.get(e._key),i=new m1(t);return new vi(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function Py(...t){return new ap("arrayUnion",t)}(function(e,n=!0){(function(i){Ms=i})(Vs),Ts(new Si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xs(new tk(r.getProvider("auth-internal")),new ik(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ur(Vg,Og,e),Ur(Vg,Og,"esm2017")})();/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ue=(t,e)=>{const n=oe.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>oe.createElement("svg",{ref:f,...fx,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${px(t)}`,l].join(" "),...h},[...e.map(([m,p])=>oe.createElement(m,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=ue("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=ue("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=ue("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ue("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ue("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=ue("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=ue("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=ue("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=ue("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=ue("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=ue("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=ue("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=ue("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ue("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=ue("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ue("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ue("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ue("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ue("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=ue("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=ue("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=ue("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ue("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=ue("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ue("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ue("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ue("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qx=JSON.parse(window.__firebase_config||"{}"),v1=i0(Qx),rh=JA(v1),$n=QR(v1),Hn="sweet-ledger-beta",Xx="AIzaSyBWgsEEY_guFAZL-8aHD-d9q5d1gfdbBRc",by={food:qx,transport:$x,shopping:jx,housing:kd,hotel:mx,ticket:Bx,telecom:Fx,insurance:Lx,life:zx,other:Px,cat:wx,dog:Ax,rabbit:Ox,bird:gx,default:Ux,project_daily:vx,project_travel:Vx,project_house:kd,project_private:Gx},vr=[{id:"food",name:"餐飲",icon:"food",color:"bg-orange-100 text-orange-600",hex:"#ea580c"},{id:"transport",name:"交通",icon:"transport",color:"bg-blue-100 text-blue-600",hex:"#2563eb"},{id:"shopping",name:"購物",icon:"shopping",color:"bg-pink-100 text-pink-600",hex:"#db2777"},{id:"housing",name:"房租",icon:"housing",color:"bg-indigo-100 text-indigo-600",hex:"#4f46e5"},{id:"hotel",name:"旅館",icon:"hotel",color:"bg-purple-100 text-purple-600",hex:"#9333ea"},{id:"ticket",name:"門票",icon:"ticket",color:"bg-yellow-100 text-yellow-600",hex:"#ca8a04"},{id:"telecom",name:"電信",icon:"telecom",color:"bg-gray-100 text-gray-600",hex:"#4b5563"},{id:"insurance",name:"保險",icon:"insurance",color:"bg-red-100 text-red-600",hex:"#dc2626"},{id:"life",name:"生活",icon:"life",color:"bg-green-100 text-green-600",hex:"#16a34a"},{id:"other",name:"其他",icon:"other",color:"bg-slate-100 text-slate-600",hex:"#475569"}],ih={cat:{id:"cat",name:"貓咪",icon:"cat",prompt:"你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。"},dog:{id:"dog",name:"狗狗",icon:"dog",prompt:"你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。"},rabbit:{id:"rabbit",name:"兔兔",icon:"rabbit",prompt:"你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。"},bird:{id:"bird",name:"啾啾",icon:"bird",prompt:"你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。"}},sh={users:{},transactions:[],subscriptions:[],projects:[{id:"daily",name:"日常開銷",icon:"project_daily"},{id:"travel",name:"日本旅遊專案",icon:"project_travel"},{id:"house",name:"夢想置產專案",icon:"project_house"},{id:"private",name:"私人帳本",icon:"project_private"}],rates:{JPY:.23},gamification:{xp:0,level:1,streak:1,houseType:"tent"},currency:"TWD",settings:{character:"cat",selectedCategories:["food","transport","shopping","housing","hotel","ticket","life","other"]}},ai=(t,e="TWD",n=!1)=>n?"****":new Intl.NumberFormat("zh-TW",{style:"currency",currency:e,minimumFractionDigits:0}).format(t),oh=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),li=t=>by[t]||by.default,Vy=async(t,e=null)=>{var n,r,i,s,o;try{const l={contents:[{parts:[{text:t},...e?[{inlineData:{mimeType:"image/jpeg",data:e}}]:[]]}]};return((o=(s=(i=(r=(n=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${Xx}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json()).candidates)==null?void 0:n[0])==null?void 0:r.content)==null?void 0:i.parts)==null?void 0:s[0])==null?void 0:o.text)||""}catch(l){return console.error("Gemini Error:",l),null}};function Jx(){const[t,e]=oe.useState(null),[n,r]=oe.useState("onboarding"),[i,s]=oe.useState(""),[o,l]=oe.useState(null),[u,h]=oe.useState(!1),[f,m]=oe.useState(!1),[p,k]=oe.useState("daily"),[P,N]=oe.useState(""),[O,S]=oe.useState(""),[v,A]=oe.useState(vr[0]),[b,U]=oe.useState(""),[j,E]=oe.useState(!1),[y,w]=oe.useState(null),[T,C]=oe.useState("TWD"),[R,I]=oe.useState("even"),[St,_n]=oe.useState(""),[hr,Qt]=oe.useState(""),[z,Z]=oe.useState(!1),[re,Te]=oe.useState(""),[ge,Ve]=oe.useState("monthly"),[Xt,Jt]=oe.useState(""),[Nt,un]=oe.useState(new Date().toISOString().slice(0,7)),[rc,Di]=oe.useState(!1),[At,wn]=oe.useState({id:"",name:"",icon:"project_daily"}),bi=oe.useRef(null),Vi=oe.useRef(null);oe.useEffect(()=>((async()=>{const H=window.__initial_auth_token;H?await L2(rh,H):await D2(rh)})(),U2(rh,H=>{e(H);const J=localStorage.getItem("sweet_ledger_code");J&&(s(J),r("dashboard"))})),[]),oe.useEffect(()=>{if(!t||!i)return;const K=Bn($n,"artifacts",Hn,"public","data","ledgers",i),H=dx(K,J=>{if(J.exists()){const _e=J.data();l(_e),_e.currency&&C(_e.currency)}});return()=>H()},[t,i]);const Oi=async(K,H)=>{if(!i)return;const J=Bn($n,"artifacts",Hn,"public","data","ledgers",i);await yr(J,{[`settings.${K}`]:H})},Us=async()=>{if(!At.name)return;const K=Bn($n,"artifacts",Hn,"public","data","ledgers",i);let H=[...(o==null?void 0:o.projects)||[]];At.id?H=H.map(J=>J.id===At.id?At:J):H.push({...At,id:oh()}),await yr(K,{projects:H}),Di(!1),wn({id:"",name:"",icon:"project_daily"})},wa=async K=>{if(confirm("確定要刪除這個專案嗎？")){const H=Bn($n,"artifacts",Hn,"public","data","ledgers",i),J=o.projects.filter(_e=>_e.id!==K);await yr(H,{projects:J}),p===K&&k("daily")}},ic=async()=>{if(!t)return;m(!0);const K=Math.random().toString(36).substring(2,8).toUpperCase(),H={...sh,users:{[t.uid]:{name:"Host",avatar:"🐱",role:"host"}}};await hx(Bn($n,"artifacts",Hn,"public","data","ledgers",K),H),localStorage.setItem("sweet_ledger_code",K),s(K),r("dashboard"),m(!1)},sc=async K=>{if(!t)return;m(!0);const H=Bn($n,"artifacts",Hn,"public","data","ledgers",K),J=await cx(H);if(J.exists()){const we={...J.data().users,[t.uid]:{name:"Guest",avatar:"🐶",role:"guest"}};await yr(H,{users:we}),localStorage.setItem("sweet_ledger_code",K),s(K),r("dashboard")}else console.error("找不到這個帳本代碼！");m(!1)},Ea=async()=>{var ke;if(!P||!o)return;const K=parseFloat(P),H=Object.keys(o.users).find(G=>G!==t.uid);let J=null,_e=R;if(R==="custom"){const G=parseFloat(St)||0,Ce=parseFloat(hr)||0;if(Math.round((G+Ce)*100)/100!==Math.round(K*100)/100){console.error("自定義分攤金額必須等於總金額！");return}const Dt=Object.keys(o.users).find(Ut=>o.users[Ut].role==="host"),st=Object.keys(o.users).find(Ut=>o.users[Ut].role==="guest");J={},Dt&&(J[Dt]=G),st&&(J[st]=Ce)}else R==="even"&&(H||(_e="host_all"));const we=Bn($n,"artifacts",Hn,"public","data","ledgers",i),He={id:oh(),amount:K,currency:T,category:v,payer:t.uid,splitType:_e,customSplit:J,note:O||v.name,projectId:p};if(z)await yr(we,{subscriptions:Py({...He,name:re||v.name,cycle:ge,payDay:parseInt(Xt)||1,mode:"infinite",nextPaymentDate:new Date().toISOString()})});else{const G=Math.floor(K/10),Ce=(((ke=o.gamification)==null?void 0:ke.xp)||0)+G;await yr(we,{transactions:Py({...He,date:new Date().toISOString(),isSettlement:!1}),"gamification.xp":Ce,"gamification.level":Math.floor(Ce/1e3)+1})}N(""),S(""),U(""),w(null),Z(!1),Te(""),Jt(""),I("even"),_n(""),Qt(""),r("dashboard")},Mi=async()=>{if(!b&&!y)return;E(!0);let K=`你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
    目前的日期是：${new Date().toISOString()}。
    
    請解析以下資訊：
    1. 金額 (amount, number)
    2. 類別 ID (categoryId, 從以下選擇: ${vr.map(J=>J.id).join(", ")})
    3. 備註 (note, string)
    4. 幣別 (currency, 預設 TWD)
    
    只回傳 JSON，不要 markdown 格式。例如: {"amount": 100, "categoryId": "food", "note": "午餐", "currency": "TWD"}`;b&&(K+=`
使用者文字: "${b}"`),y&&(K+=`
這是一張收據或發票的照片，請辨識總金額與可能的類別。`);const H=await Vy(K,y?y.split(",")[1]:null);E(!1);try{const J=H.replace(/```json/g,"").replace(/```/g,"").trim(),_e=JSON.parse(J);if(_e.amount&&N(_e.amount.toString()),_e.note&&S(_e.note),_e.categoryId){const we=vr.find(He=>He.id===_e.categoryId);we&&A(we)}}catch(J){console.error("AI Parse Error",J)}},Ta=K=>{const H=K.target.files[0];if(H){const J=new FileReader;J.onloadend=()=>{w(J.result)},J.readAsDataURL(H)}},oc=async()=>{var we;const K=((we=o==null?void 0:o.settings)==null?void 0:we.character)||"cat",H=ih[K],J=(o==null?void 0:o.transactions.reduce((He,ke)=>He+ke.amount,0))||0,_e=`${H.prompt} 
    目前這個月的總支出是 ${J} ${o.currency}。
    請根據你的個性給出一句短評（30字以內）。`;return await Vy(_e)},zs=()=>{var Ce,Dt,st,Ut,jn;if(!o)return null;const K=o.transactions.filter(te=>(te.projectId||"daily")===p),H=new Date().toISOString().slice(0,7),J=K.filter(te=>te.date.startsWith(H)),_e=oe.useMemo(()=>{const te={};return[...K].sort((Ie,q)=>new Date(q.date)-new Date(Ie.date)).forEach(Ie=>{const q=new Date(Ie.date).toLocaleDateString("zh-TW");te[q]||(te[q]=[]),te[q].push(Ie)}),te},[K]),we=J.reduce((te,De)=>te+De.amount,0),He=J.reduce((te,De)=>{var Ie,q;return o.users[t==null?void 0:t.uid]?De.splitType==="even"?te+De.amount/2:De.splitType==="host_all"?((Ie=o.users[t.uid])==null?void 0:Ie.role)==="host"?te+De.amount:te:De.splitType==="guest_all"?((q=o.users[t.uid])==null?void 0:q.role)==="guest"?te+De.amount:te:De.splitType==="custom"&&De.customSplit?te+(De.customSplit[t.uid]||0):te:te},0),ke=((Dt=(Ce=o.projects)==null?void 0:Ce.find(te=>te.id===p))==null?void 0:Dt.name)||"日常開銷",G=te=>te<5?"⛺️":te<15?"🏠":te<30?"🏡":"🏰";return _.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsxs("div",{className:"relative",children:[_.jsx("select",{value:p,onChange:te=>k(te.target.value),className:"appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200",children:(st=o.projects)==null?void 0:st.map(te=>_.jsx("option",{value:te.id,children:te.name},te.id))}),_.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white",children:_.jsx(Tx,{size:14})})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsxs("div",{className:"bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-2",children:[_.jsx("span",{className:"text-lg",children:G(((Ut=o.gamification)==null?void 0:Ut.level)||1)}),_.jsxs("span",{className:"text-xs font-bold text-rose-600",children:["Lv.",((jn=o.gamification)==null?void 0:jn.level)||1]})]}),_.jsx("button",{onClick:()=>h(!u),className:"p-2 bg-white rounded-full shadow-sm border border-gray-100",children:u?_.jsx(Cx,{size:16,className:"text-gray-400"}):_.jsx(Rx,{size:16,className:"text-rose-500"})})]})]}),_.jsxs("div",{className:"bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-8 relative overflow-hidden",children:[_.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"}),_.jsxs("p",{className:"text-pink-100 mb-1 font-medium text-sm",children:["我的本月分攤 (",ke,")"]}),_.jsx("h1",{className:"text-4xl font-bold tracking-tight mb-2",children:ai(He,o.currency,u)}),_.jsx("div",{className:"flex items-center gap-2 text-sm text-pink-200",children:_.jsxs("span",{children:["專案總支出: ",ai(we,o.currency,u)]})})]}),_.jsxs("div",{className:"space-y-6",children:[Object.entries(_e).map(([te,De])=>_.jsxs("div",{children:[_.jsx("h3",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1",children:te}),_.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden",children:De.map((Ie,q)=>{var se,me,Qe,Yt,Se,Zt;const Q=li((se=Ie.category)==null?void 0:se.icon);return _.jsxs("div",{className:`flex items-center justify-between p-4 ${q!==De.length-1?"border-b border-gray-50":""}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-lg ${(Qe=(me=Ie.category)==null?void 0:me.color)==null?void 0:Qe.replace("text-","bg-").split(" ")[0]} bg-opacity-20 text-${(Se=(Yt=Ie.category)==null?void 0:Yt.color)==null?void 0:Se.split("text-")[1]}`,children:_.jsx(Q,{size:20})}),_.jsxs("div",{children:[_.jsx("p",{className:"font-medium text-gray-800",children:Ie.note}),_.jsx("div",{className:"flex items-center gap-2",children:_.jsx("p",{className:"text-xs text-gray-400",children:(Zt=Ie.category)==null?void 0:Zt.name})})]})]}),_.jsx("span",{className:"font-bold text-gray-800",children:ai(Ie.amount,Ie.currency,u)})]},Ie.id)})})]},te)),K.length===0&&_.jsxs("div",{className:"text-center py-10 text-gray-400",children:[_.jsx("p",{children:"這個專案還沒有記帳紀錄喔 🍃"}),_.jsx("p",{className:"text-sm mt-2",children:"點擊下方「+」開始第一筆吧！"})]})]})]})},Bs=()=>{var we,He,ke;if(!o)return null;const K=((we=o.settings)==null?void 0:we.selectedCategories)||sh.settings.selectedCategories,H=vr.filter(G=>K.includes(G.id)),J=oe.useMemo(()=>{if(!o.transactions)return[];const G=o.transactions.filter(Ce=>Ce.category.id===v.id).map(Ce=>Ce.note).filter(Ce=>Ce);return[...new Set(G)].slice(0,10)},[v,o.transactions]),_e=G=>{N(G.target.value)};return _.jsxs("div",{className:"h-full flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] bg-white",children:[_.jsxs("div",{className:"px-4 flex justify-between items-center mb-4",children:[_.jsx("button",{onClick:()=>r("dashboard"),className:"p-2 bg-gray-100 rounded-full",children:_.jsx(Kx,{size:20,className:"text-gray-600"})}),_.jsx("div",{className:"flex-1 flex justify-center",children:_.jsx("div",{className:"bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full text-sm flex items-center gap-2",children:(ke=(He=o.projects)==null?void 0:He.find(G=>G.id===p))==null?void 0:ke.name})}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("button",{onClick:()=>{var G;return(G=bi.current)==null?void 0:G.click()},className:"p-2 bg-blue-50 text-blue-600 rounded-full",children:_.jsx(_x,{size:20})}),_.jsx("button",{onClick:()=>j?null:b?Mi():U("listening..."),className:`p-2 rounded-full ${b?"bg-purple-600 text-white":"bg-purple-50 text-purple-600"}`,children:j?_.jsx(Dy,{className:"animate-spin",size:20}):_.jsx(Nx,{size:20})})]})]}),_.jsx("input",{type:"file",ref:bi,className:"hidden",accept:"image/*",onChange:G=>{Ta(G),Mi()}}),(b||y)&&_.jsx("div",{className:"mx-4 mb-4 p-3 bg-purple-50 rounded-xl flex items-center justify-between",children:_.jsx("div",{className:"text-sm text-purple-800 truncate flex-1 mr-2",children:y?"🖼️ 已選取圖片":b})}),_.jsxs("div",{className:"px-6 py-2 text-center",children:[_.jsx("div",{className:"text-gray-400 text-sm mb-1",children:T}),_.jsx("input",{type:"number",value:P,onChange:_e,placeholder:"0",className:"w-full text-6xl font-bold text-gray-800 text-center outline-none placeholder-gray-200 bg-transparent",inputMode:"decimal"})]}),_.jsx("div",{className:"mx-4 bg-gray-50 p-4 rounded-xl shadow-sm mb-2 border border-gray-100",children:_.jsx("input",{type:"text",value:O,onChange:G=>S(G.target.value),placeholder:`輸入備註 (例如: ${v.name})...`,className:"w-full outline-none text-gray-700 bg-transparent"})}),J.length>0&&_.jsx("div",{className:"mx-4 mb-4 flex flex-wrap gap-2",children:J.map((G,Ce)=>_.jsx("button",{onClick:()=>S(G),className:"px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg hover:bg-gray-200 transition-colors",children:G},Ce))}),_.jsxs("div",{className:"flex-1 bg-gray-50 rounded-t-3xl p-6 overflow-y-auto",children:[_.jsx("div",{className:"grid grid-cols-4 gap-4 mb-6",children:H.map(G=>{const Ce=li(G.icon);return _.jsxs("button",{onClick:()=>A(G),className:`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${v.id===G.id?"bg-white shadow-md scale-105 ring-2 ring-rose-200":"hover:bg-gray-100"}`,children:[_.jsx("div",{className:`text-2xl ${v.id===G.id?"text-gray-800":"text-gray-400"}`,children:_.jsx(Ce,{size:28})}),_.jsx("span",{className:`text-xs font-medium ${v.id===G.id?"text-gray-800":"text-gray-500"}`,children:G.name})]},G.id)})}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm mb-20 space-y-4",children:[_.jsxs("div",{className:"flex justify-between items-center",children:[_.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium text-gray-600",children:[_.jsx(Dy,{size:16}),_.jsx("span",{children:"固定支出"})]}),_.jsx("button",{onClick:()=>Z(!z),className:`w-12 h-6 rounded-full transition-colors ${z?"bg-rose-500":"bg-gray-200"} relative`,children:_.jsx("div",{className:`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${z?"left-7":"left-1"}`})})]}),_.jsxs("div",{className:"border-t border-gray-100 pt-4",children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsx("span",{className:"text-sm font-medium text-gray-600",children:"分攤方式"}),_.jsxs("select",{value:R,onChange:G=>I(G.target.value),className:"text-sm bg-gray-100 p-1 px-2 rounded-lg outline-none",children:[_.jsx("option",{value:"even",children:"均攤 (50/50)"}),_.jsx("option",{value:"custom",children:"自定義"})]})]}),R==="custom"&&_.jsxs("div",{className:"flex gap-2 mt-2",children:[_.jsx("input",{type:"number",placeholder:"Host",value:St,onChange:G=>_n(G.target.value),className:"w-1/2 p-2 bg-gray-50 border rounded-lg text-sm text-center"}),_.jsx("input",{type:"number",placeholder:"Guest",value:hr,onChange:G=>Qt(G.target.value),className:"w-1/2 p-2 bg-gray-50 border rounded-lg text-sm text-center"})]})]}),z&&_.jsxs("div",{className:"border-t border-gray-100 pt-4 space-y-3",children:[_.jsx("input",{type:"text",placeholder:"訂閱名稱",value:re,onChange:G=>Te(G.target.value),className:"w-full p-2 border rounded-lg text-sm"}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("select",{value:ge,onChange:G=>Ve(G.target.value),className:"w-1/2 p-2 border rounded-lg text-sm",children:[_.jsx("option",{value:"monthly",children:"每月"}),_.jsx("option",{value:"weekly",children:"每週"})]}),_.jsx("input",{type:"number",placeholder:"日 (1-31)",value:Xt,onChange:G=>Jt(G.target.value),className:"w-1/2 p-2 border rounded-lg text-sm text-center"})]})]})]})]}),_.jsx("div",{className:"absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+1rem)]",children:_.jsxs("button",{onClick:Ea,disabled:!P,className:`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors ${P?"bg-gray-900 text-white shadow-lg":"bg-gray-200 text-gray-400"}`,children:[_.jsx(Ex,{size:20})," 完成記帳"]})})]})},Ia=()=>{var Ie,q;if(!o)return null;const K=Q=>{const se=new Date(Nt+"-01");se.setMonth(se.getMonth()+Q),un(se.toISOString().slice(0,7))},H=o.transactions.filter(Q=>Q.date.startsWith(Nt)&&(Q.projectId||"daily")===p),J=Object.keys(o.users).find(Q=>o.users[Q].role==="host"),_e=Object.keys(o.users).find(Q=>o.users[Q].role==="guest"),we=H.filter(Q=>Q.payer===J).reduce((Q,se)=>Q+se.amount,0),He=H.filter(Q=>Q.payer===_e).reduce((Q,se)=>Q+se.amount,0),ke=we+He,G=ke>0?we/ke*100:50,Ce=ke>0?He/ke*100:50,Dt=oe.useMemo(()=>{const Q={};return H.forEach(se=>{Q[se.category.id]||(Q[se.category.id]=0),Q[se.category.id]+=se.amount}),Object.entries(Q).map(([se,me])=>({id:se,total:me,...vr.find(Qe=>Qe.id===se)})).sort((se,me)=>me.total-se.total)},[H]),st=H.reduce((Q,se)=>Q+se.amount,0),Ut=oe.useMemo(()=>{if(st===0)return"gray 0% 100%";let Q="",se=0;return Dt.forEach(me=>{const Qe=me.total/st*100,Yt=se+Qe;Q+=`${me.hex||"#ccc"} ${se}% ${Yt}%, `,se=Yt}),`conic-gradient(${Q.slice(0,-2)})`},[Dt,st]),[jn,te]=oe.useState("");oe.useEffect(()=>{oc().then(te)},[Nt]);const De=li((q=ih[((Ie=o.settings)==null?void 0:Ie.character)||"cat"])==null?void 0:q.icon);return _.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4",children:[_.jsxs("div",{className:"flex justify-between items-center mb-6",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"消費分析"}),_.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 rounded-lg p-1",children:[_.jsx("button",{onClick:()=>K(-1),className:"p-1",children:_.jsx(Ix,{size:16})}),_.jsx("span",{className:"text-sm font-bold w-20 text-center",children:Nt}),_.jsx("button",{onClick:()=>K(1),className:"p-1",children:_.jsx(Sx,{size:16})})]})]}),_.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex gap-4",children:[_.jsx("div",{className:"text-gray-800",children:_.jsx(De,{size:40})}),_.jsx("div",{className:"flex-1",children:_.jsx("div",{className:"bg-gray-100 p-3 rounded-xl rounded-tl-none text-sm text-gray-700 leading-relaxed",children:jn||"分析中..."})})]}),_.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6",children:[_.jsx("h3",{className:"text-gray-600 font-bold mb-4",children:"消費貢獻度 (支付金額)"}),_.jsxs("div",{className:"flex justify-between items-center mb-2 text-sm",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500"}),_.jsx("span",{className:"text-gray-600",children:"Host"})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"font-bold text-gray-800",children:ai(we,o.currency)}),_.jsxs("span",{className:"text-xs text-gray-400",children:["(",Math.round(G),"%)"]})]})]}),_.jsxs("div",{className:"flex justify-between items-center mb-3 text-sm",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("div",{className:"w-2 h-2 rounded-full bg-pink-500"}),_.jsx("span",{className:"text-gray-600",children:"Guest"})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"font-bold text-gray-800",children:ai(He,o.currency)}),_.jsxs("span",{className:"text-xs text-gray-400",children:["(",Math.round(Ce),"%)"]})]})]}),_.jsxs("div",{className:"h-4 w-full bg-gray-100 rounded-full flex overflow-hidden",children:[_.jsx("div",{style:{width:`${G}%`},className:"bg-blue-500 transition-all duration-1000"}),_.jsx("div",{style:{width:`${Ce}%`},className:"bg-pink-500 transition-all duration-1000"})]})]}),_.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center",children:[_.jsx("h3",{className:"text-gray-600 font-bold mb-6 w-full text-left",children:"分類支出佔比"}),_.jsx("div",{className:"relative w-48 h-48 rounded-full mb-6",style:{background:Ut},children:_.jsxs("div",{className:"absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center",children:[_.jsx("span",{className:"text-sm text-gray-400",children:"總支出"}),_.jsx("span",{className:"text-xl font-bold text-gray-800",children:ai(st,o.currency)})]})}),_.jsx("div",{className:"w-full space-y-3",children:Dt.map(Q=>_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:Q.hex}}),_.jsx("span",{className:"text-sm text-gray-600 font-medium",children:Q.name})]}),_.jsxs("div",{className:"text-sm",children:[_.jsx("span",{className:"font-bold text-gray-800 mr-2",children:ai(Q.total,o.currency)}),_.jsxs("span",{className:"text-gray-400 text-xs",children:[Math.round(Q.total/st*100),"%"]})]})]},Q.id))})]})]})},et=()=>{var K;return o?rc?_.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:At.id?"編輯專案":"新增專案"}),_.jsxs("div",{className:"space-y-4",children:[_.jsx("input",{type:"text",value:At.name,onChange:H=>wn({...At,name:H.target.value}),placeholder:"專案名稱",className:"w-full p-4 bg-gray-50 rounded-xl outline-none"}),_.jsx("div",{className:"grid grid-cols-4 gap-2",children:["project_daily","project_travel","project_house","project_private"].map(H=>{const J=li(H);return _.jsx("button",{onClick:()=>wn({...At,icon:H}),className:`p-4 rounded-xl flex justify-center ${At.icon===H?"bg-rose-100 text-rose-600":"bg-gray-50"}`,children:_.jsx(J,{size:24})},H)})}),_.jsx("button",{onClick:Us,className:"w-full bg-gray-900 text-white py-4 rounded-xl font-bold",children:"儲存"}),_.jsx("button",{onClick:()=>Di(!1),className:"w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold",children:"取消"})]})]}):_.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4",children:[_.jsxs("div",{className:"flex justify-between items-center mb-6",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"專案管理"}),_.jsx("button",{onClick:()=>{Di(!0),wn({id:"",name:"",icon:"project_daily"})},className:"bg-gray-900 text-white p-2 rounded-lg",children:_.jsx(Ny,{size:20})})]}),_.jsx("div",{className:"grid grid-cols-1 gap-4",children:(K=o.projects)==null?void 0:K.map(H=>{const J=li(H.icon);return _.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600",children:_.jsx(J,{size:24})}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold text-gray-800",children:H.name}),_.jsx("div",{className:"text-xs text-gray-400",children:H.id==="daily"?"預設":"自訂專案"})]})]}),H.id!=="daily"&&_.jsxs("div",{className:"flex gap-2",children:[_.jsx("button",{onClick:()=>{wn(H),Di(!0)},className:"p-2 text-gray-400 hover:text-gray-600",children:_.jsx(Dx,{size:18})}),_.jsx("button",{onClick:()=>wa(H.id),className:"p-2 text-red-400 hover:text-red-600",children:_.jsx(Hx,{size:18})})]})]},H.id)})})]}):null},it=()=>{var te,De,Ie;if(!o)return null;const[K,H]=oe.useState(!1),[J,_e]=oe.useState("daily"),we=()=>{let q="data:text/csv;charset=utf-8,";q+=`Date,Project,Category,Note,Amount,Payer,SplitType
`,o.transactions.forEach(me=>{var Se,Zt,ft,En;let Qe=me.amount;K&&(me.splitType==="even"?Qe=me.amount/2:me.splitType==="custom"&&me.customSplit?Qe=me.customSplit[t.uid]||0:me.splitType==="host_all"?Qe=((Se=o.users[t.uid])==null?void 0:Se.role)==="host"?me.amount:0:me.splitType==="guest_all"&&(Qe=((Zt=o.users[t.uid])==null?void 0:Zt.role)==="guest"?me.amount:0));const Yt=[new Date(me.date).toLocaleDateString(),((ft=o.projects.find($s=>$s.id===me.projectId))==null?void 0:ft.name)||"Unknown",me.category.name,me.note,Qe,((En=o.users[me.payer])==null?void 0:En.name)||"Unknown",me.splitType].join(",");q+=Yt+`
`});const Q=encodeURI(q),se=document.createElement("a");se.setAttribute("href",Q),se.setAttribute("download",`sweet_ledger_export_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(se),se.click()},He=q=>{const Q=q.target.files[0];if(!Q)return;const se=new FileReader;se.onload=async me=>{const Yt=me.target.result.split(`
`).slice(1),Se=[];if(Yt.forEach(Zt=>{const ft=Zt.split(",");if(ft.length<5)return;const En=ft[0],$s=ft[2],ac=ft[3],Fn=parseFloat(ft[4]);if(!Fn)return;const Sa=vr.find(Hs=>Hs.name===$s)||vr.find(Hs=>Hs.id==="other");Se.push({id:oh(),date:new Date(En).toISOString(),amount:Fn,currency:o.currency,category:Sa,payer:t.uid,splitType:"even",note:ac||Sa.name,projectId:J,isSettlement:!1})}),Se.length>0){const Zt=Bn($n,"artifacts",Hn,"public","data","ledgers",i),ft=o.transactions;await yr(Zt,{transactions:[...ft,...Se]}),alert(`成功匯入 ${Se.length} 筆資料！`)}},se.readAsText(Q)},ke=((te=o.settings)==null?void 0:te.selectedCategories)||sh.settings.selectedCategories,G=((De=o.settings)==null?void 0:De.character)||"cat",Ce=((Ie=o.rates)==null?void 0:Ie.JPY)||.23,[Dt,st]=oe.useState(Ce.toString()),Ut=q=>{let Q=[...ke];ke.includes(q)?Q=ke.filter(se=>se!==q):ke.length<8&&(Q=[...ke,q]),Oi("selectedCategories",Q)},jn=async()=>{const q=parseFloat(Dt);if(isNaN(q)||q<=0)return;const Q=Bn($n,"artifacts",Hn,"public","data","ledgers",i);await yr(Q,{"rates.JPY":q})};return _.jsxs("div",{className:"pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 bg-gray-50 min-h-screen",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"帳本設定"}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm mb-6",children:[_.jsxs("h3",{className:"font-bold text-gray-700 mb-3 flex items-center gap-2",children:[_.jsx(xx,{size:18})," 資料備份與還原"]}),_.jsxs("div",{className:"mb-4 border-b border-gray-100 pb-4",children:[_.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"匯出 CSV"}),_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("button",{onClick:()=>H(!1),className:`px-3 py-1 text-xs rounded-full border ${K?"bg-white text-gray-500":"bg-gray-800 text-white"}`,children:"完整金額"}),_.jsx("button",{onClick:()=>H(!0),className:`px-3 py-1 text-xs rounded-full border ${K?"bg-gray-800 text-white":"bg-white text-gray-500"}`,children:"已分攤金額"})]}),_.jsxs("button",{onClick:we,className:"w-full py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50",children:[_.jsx(kx,{size:16})," 下載 .csv"]})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"匯入 CSV"}),_.jsx("div",{className:"flex gap-2 mb-2",children:_.jsx("select",{value:J,onChange:q=>_e(q.target.value),className:"text-xs bg-gray-100 rounded p-1 outline-none",children:o.projects.map(q=>_.jsx("option",{value:q.id,children:q.name},q.id))})}),_.jsx("input",{type:"file",ref:Vi,accept:".csv",className:"hidden",onChange:He}),_.jsxs("button",{onClick:()=>{var q;return(q=Vi.current)==null?void 0:q.click()},className:"w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50",children:[_.jsx(Wx,{size:16})," 選擇檔案匯入"]})]})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm mb-6",children:[_.jsx("h3",{className:"font-bold text-gray-700 mb-3",children:"AI 角色"}),_.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.values(ih).map(q=>{const Q=li(q.icon);return _.jsxs("button",{onClick:()=>Oi("character",q.id),className:`p-3 rounded-xl border-2 transition-colors flex items-center gap-2 ${G===q.id?"border-rose-500 bg-rose-50":"border-gray-200 bg-white"}`,children:[_.jsx(Q,{size:24}),_.jsx("p",{className:"text-sm font-medium",children:q.name})]},q.id)})})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm mb-6",children:[_.jsx("h3",{className:"font-bold text-gray-700 mb-3",children:"常用分類 (最多 8 個)"}),_.jsx("div",{className:"grid grid-cols-4 gap-2",children:vr.map(q=>{const Q=ke.includes(q.id),se=li(q.icon);return _.jsxs("button",{onClick:()=>Ut(q.id),disabled:!Q&&ke.length>=8,className:`flex flex-col items-center gap-1 p-2 rounded-xl border transition-colors ${Q?"border-rose-500 bg-rose-50 text-rose-600":"border-gray-200 text-gray-400"}`,children:[_.jsx(se,{size:20}),_.jsx("span",{className:"text-[10px] font-medium",children:q.name})]},q.id)})})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm mb-6",children:[_.jsx("h3",{className:"font-bold text-gray-700 mb-3",children:"匯率設定"}),o.currency==="TWD"&&_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-sm text-gray-500",children:"1 JPY ="}),_.jsx("input",{type:"number",value:Dt,onChange:q=>st(q.target.value),onBlur:jn,className:"w-20 bg-gray-100 rounded-lg p-2 text-center",step:"0.001"}),_.jsx("span",{className:"text-sm text-gray-500",children:"TWD"})]})]})]})};return _.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-100 pb-[env(safe-area-inset-bottom)]",children:[n==="onboarding"&&_.jsx("div",{className:"min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center",children:_.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full",children:[_.jsx("div",{className:"text-6xl mb-4",children:"🍰"}),_.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"情侶記帳"}),_.jsx("p",{className:"text-gray-500 mb-8",children:"讓記帳成為情侶間的小樂趣"}),_.jsx("button",{onClick:ic,className:"w-full bg-rose-500 text-white py-4 rounded-xl font-bold text-lg mb-4 shadow-lg shadow-rose-200 active:scale-95 transition-transform",children:"建立新帳本"}),_.jsxs("div",{className:"relative my-6",children:[_.jsx("div",{className:"absolute inset-0 flex items-center",children:_.jsx("div",{className:"w-full border-t border-gray-200"})}),_.jsx("div",{className:"relative flex justify-center text-sm",children:_.jsx("span",{className:"px-2 bg-white text-gray-500",children:"或"})})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("input",{type:"text",placeholder:"輸入邀請碼",className:"flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500",onChange:K=>s(K.target.value.toUpperCase())}),_.jsx("button",{onClick:()=>sc(i),className:"bg-gray-800 text-white px-6 rounded-xl font-bold active:scale-95 transition-transform",children:"加入"})]})]})}),n!=="onboarding"&&!o&&_.jsx("div",{className:"h-screen flex items-center justify-center bg-gray-50",children:_.jsx("span",{className:"animate-pulse text-2xl text-rose-500",children:"❤️ 載入中..."})}),n!=="onboarding"&&o&&_.jsx(_.Fragment,{children:n==="add"?_.jsx(Bs,{}):_.jsxs(_.Fragment,{children:[n==="dashboard"&&_.jsx(zs,{}),n==="stats"&&_.jsx(Ia,{}),n==="projects"&&_.jsx(et,{}),n==="settings"&&_.jsx(it,{}),_.jsx("div",{className:"fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6",children:_.jsxs("div",{className:"flex justify-between items-center max-w-md mx-auto",children:[_.jsxs("button",{onClick:()=>r("dashboard"),className:`flex flex-col items-center gap-1 p-2 ${n==="dashboard"?"text-rose-500":"text-gray-400"}`,children:[_.jsx(kd,{size:24,strokeWidth:n==="dashboard"?2.5:2}),_.jsx("span",{className:"text-[10px] font-medium",children:"首頁"})]}),_.jsxs("button",{onClick:()=>r("stats"),className:`flex flex-col items-center gap-1 p-2 ${n==="stats"?"text-rose-500":"text-gray-400"}`,children:[_.jsx(bx,{size:24,strokeWidth:n==="stats"?2.5:2}),_.jsx("span",{className:"text-[10px] font-medium",children:"分析"})]}),_.jsx("div",{className:"relative -top-6",children:_.jsx("button",{onClick:()=>r("add"),className:"w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform",children:_.jsx(Ny,{size:32})})}),_.jsxs("button",{onClick:()=>r("projects"),className:`flex flex-col items-center gap-1 p-2 ${n==="projects"?"text-rose-500":"text-gray-400"}`,children:[_.jsx(yx,{size:24,strokeWidth:n==="projects"?2.5:2}),_.jsx("span",{className:"text-[10px] font-medium",children:"專案"})]}),_.jsxs("button",{onClick:()=>r("settings"),className:`flex flex-col items-center gap-1 p-2 ${n==="settings"?"text-rose-500":"text-gray-400"}`,children:[_.jsx(Mx,{size:24,strokeWidth:n==="settings"?2.5:2}),_.jsx("span",{className:"text-[10px] font-medium",children:"設定"})]})]})})]})})]})}ah.createRoot(document.getElementById("root")).render(_.jsx(eE.StrictMode,{children:_.jsx(Jx,{})}));
