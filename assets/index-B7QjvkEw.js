(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var by={exports:{}},Xl={},Dy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),i1=Symbol.for("react.portal"),s1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),a1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),d1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),Kp=Symbol.iterator;function p1(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var Vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Ly={};function ns(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Vy}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function My(){}My.prototype=ns.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Vy}var sd=id.prototype=new My;sd.constructor=id;Oy(sd,ns.prototype);sd.isPureReactComponent=!0;var Qp=Array.isArray,jy=Object.prototype.hasOwnProperty,od={current:null},Fy={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Lo,type:t,key:s,ref:o,props:i,_owner:od.current}}function m1(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function g1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g1(""+t.key):e.toString(36)}function Ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case i1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),Ma(i,e,n,"",function(c){return c})):i!=null&&(ad(i)&&(i=m1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=Ma(s,e,n,u,i)}else if(u=p1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=Ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return Ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},ja={transition:null},_1={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:od};function zy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ns;ee.Fragment=s1;ee.Profiler=a1;ee.PureComponent=id;ee.StrictMode=o1;ee.Suspense=h1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;ee.act=zy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jy.call(e,u)&&!Fy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Lo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:u1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l1,_context:t},t.Consumer=t};ee.createElement=Uy;ee.createFactory=function(t){var e=Uy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:c1,render:t}};ee.isValidElement=ad;ee.lazy=function(t){return{$$typeof:f1,_payload:{_status:-1,_result:t},_init:y1}};ee.memo=function(t,e){return{$$typeof:d1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};ee.unstable_act=zy;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";Dy.exports=ee;var W=Dy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=W,w1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,I1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x1={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T1.call(e,r)&&!x1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w1,type:t,key:s,ref:o,props:i,_owner:I1.current}}Xl.Fragment=E1;Xl.jsx=By;Xl.jsxs=By;by.exports=Xl;var p=by.exports,$y={exports:{}},xt={},qy={exports:{}},Hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var ye=J-1>>>1,Se=z[ye];if(0<i(Se,G))z[ye]=G,z[J]=Se,J=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var ye=0,Se=z.length,Cr=Se>>>1;ye<Cr;){var At=2*(ye+1)-1,Pr=z[At],Ot=At+1,Rn=z[Ot];if(0>i(Pr,J))Ot<Se&&0>i(Rn,Pr)?(z[ye]=Rn,z[Ot]=J,ye=Ot):(z[ye]=Pr,z[At]=J,ye=At);else if(Ot<Se&&0>i(Rn,J))z[ye]=Rn,z[Ot]=J,ye=Ot;else break e}}return G}function i(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,y=3,w=!1,k=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function N(z){if(b=!1,C(z),!k)if(n(u)!==null)k=!0,kr(M);else{var G=n(c);G!==null&&yt(N,G.startTime-z)}}function M(z,G){k=!1,b&&(b=!1,x(_),_=-1),w=!0;var J=y;try{for(C(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!A());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,y=m.priorityLevel;var Se=ye(m.expirationTime<=G);G=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(u)&&r(u),C(G)}else r(u);m=n(u)}if(m!==null)var Cr=!0;else{var At=n(c);At!==null&&yt(N,At.startTime-G),Cr=!1}return Cr}finally{m=null,y=J,w=!1}}var F=!1,v=null,_=-1,E=5,S=-1;function A(){return!(t.unstable_now()-S<E)}function P(){if(v!==null){var z=t.unstable_now();S=z;var G=!0;try{G=v(!0,z)}finally{G?I():(F=!1,v=null)}}else F=!1}var I;if(typeof T=="function")I=function(){T(P)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Vt=ue.port2;ue.port1.onmessage=P,I=function(){Vt.postMessage(null)}}else I=function(){V(P,0)};function kr(z){v=z,F||(F=!0,I())}function yt(z,G){_=V(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,kr(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var J=y;y=G;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return G()}finally{y=J}},t.unstable_scheduleCallback=function(z,G,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,z={id:f++,callback:G,priorityLevel:z,startTime:J,expirationTime:Se,sortIndex:-1},J>ye?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(b?(x(_),_=-1):b=!0,yt(N,J-ye))):(z.sortIndex=Se,e(u,z),k||w||(k=!0,kr(M))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=y;return function(){var J=y;y=G;try{return z.apply(this,arguments)}finally{y=J}}}})(Hy);qy.exports=Hy;var S1=qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=W,It=S1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,ao={};function ii(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Wy.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,k1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function C1(t){return Fc.call(Jp,t)?!0:Fc.call(Xp,t)?!1:k1.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function P1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R1(t,e,n,r){if(e===null||typeof e>"u"||P1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R1(e,n,i,r)&&(n=null),r||i===null?C1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),yi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Qy=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,tc;function Ms(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function N1(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function $c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case yi:return"Portal";case Uc:return"Profiler";case hd:return"StrictMode";case zc:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ky:return(t.displayName||"Context")+".Consumer";case Gy:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:$c(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return $c(t(e))}catch{}}return null}function b1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=Yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=D1(t))}function Xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jy(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Hc(t,e){Jy(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Ri(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(js(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Zy(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function e0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?e0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,t0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V1=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){V1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function n0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=n0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var O1=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(O1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,Ni=null,bi=null;function im(t){if(t=Fo(t)){if(typeof Jc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=nu(e),Jc(t.stateNode,t.type,e))}}function i0(t){Ni?bi?bi.push(t):bi=[t]:Ni=t}function s0(){if(Ni){var t=Ni,e=bi;if(bi=Ni=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function o0(t,e){return t(e)}function a0(){}var ic=!1;function l0(t,e,n){if(ic)return t(e,n);ic=!0;try{return o0(t,e,n)}finally{ic=!1,(Ni!==null||bi!==null)&&(a0(),s0())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Zc=!1;if(vn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Zc=!1}function L1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ks=!1,ol=null,al=!1,eh=null,M1={onError:function(t){Ks=!0,ol=t}};function j1(t,e,n,r,i,s,o,l,u){Ks=!1,ol=null,L1.apply(M1,arguments)}function F1(t,e,n,r,i,s,o,l,u){if(j1.apply(this,arguments),Ks){if(Ks){var c=ol;Ks=!1,ol=null}else throw Error(j(198));al||(al=!0,eh=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(si(t)!==t)throw Error(j(188))}function U1(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function c0(t){return t=U1(t),t!==null?h0(t):null}function h0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h0(t);if(e!==null)return e;t=t.sibling}return null}var d0=It.unstable_scheduleCallback,om=It.unstable_cancelCallback,z1=It.unstable_shouldYield,B1=It.unstable_requestPaint,ke=It.unstable_now,$1=It.unstable_getCurrentPriorityLevel,md=It.unstable_ImmediatePriority,f0=It.unstable_UserBlockingPriority,ll=It.unstable_NormalPriority,q1=It.unstable_LowPriority,p0=It.unstable_IdlePriority,Jl=null,nn=null;function H1(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:K1,W1=Math.log,G1=Math.LN2;function K1(t){return t>>>=0,t===0?32:31-(W1(t)/G1|0)|0}var ya=64,_a=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fs(l):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function Q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Q1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function m0(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function g0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,yd,_0,v0,w0,nh=!1,va=[],Xn=null,Jn=null,Zn=null,co=new Map,ho=new Map,Bn=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fo(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z1(t,e,n,r,i){switch(e){case"focusin":return Xn=Rs(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=Rs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=Rs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return co.set(s,Rs(co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ho.set(s,Rs(ho.get(s)||null,t,e,n,r,i)),!0}return!1}function E0(t){var e=jr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=u0(n),e!==null){t.blockedOn=e,w0(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return e=Fo(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Fa(t)&&n.delete(e)}function eT(){nh=!1,Xn!==null&&Fa(Xn)&&(Xn=null),Jn!==null&&Fa(Jn)&&(Jn=null),Zn!==null&&Fa(Zn)&&(Zn=null),co.forEach(lm),ho.forEach(lm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,eT)))}function fo(t){function e(i){return Ns(i,t)}if(0<va.length){Ns(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&Ns(Xn,t),Jn!==null&&Ns(Jn,t),Zn!==null&&Ns(Zn,t),co.forEach(e),ho.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&Bn.shift()}var Di=kn.ReactCurrentBatchConfig,cl=!0;function tT(t,e,n,r){var i=ae,s=Di.transition;Di.transition=null;try{ae=1,_d(t,e,n,r)}finally{ae=i,Di.transition=s}}function nT(t,e,n,r){var i=ae,s=Di.transition;Di.transition=null;try{ae=4,_d(t,e,n,r)}finally{ae=i,Di.transition=s}}function _d(t,e,n,r){if(cl){var i=rh(t,e,n,r);if(i===null)mc(t,e,r,hl,n),am(t,r);else if(Z1(i,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<J1.indexOf(t)){for(;i!==null;){var s=Fo(i);if(s!==null&&y0(s),s=rh(t,e,n,r),s===null&&mc(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var hl=null;function rh(t,e,n,r){if(hl=null,t=pd(r),t=jr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function T0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($1()){case md:return 1;case f0:return 4;case ll:case q1:return 16;case p0:return 536870912;default:return 16}default:return 16}}var Kn=null,vd=null,Ua=null;function I0(){if(Ua)return Ua;var t,e=vd,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ua=i.slice(t,1<r?1-r:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function um(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:um,this.isPropagationStopped=um,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=St(rs),jo=Ee({},rs,{view:0,detail:0}),rT=St(jo),oc,ac,bs,Zl=Ee({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(oc=t.screenX-bs.screenX,ac=t.screenY-bs.screenY):ac=oc=0,bs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),cm=St(Zl),iT=Ee({},Zl,{dataTransfer:0}),sT=St(iT),oT=Ee({},jo,{relatedTarget:0}),lc=St(oT),aT=Ee({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),lT=St(aT),uT=Ee({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cT=St(uT),hT=Ee({},rs,{data:0}),hm=St(hT),dT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pT[t])?!!e[t]:!1}function Ed(){return mT}var gT=Ee({},jo,{key:function(t){if(t.key){var e=dT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yT=St(gT),_T=Ee({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=St(_T),vT=Ee({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),wT=St(vT),ET=Ee({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=St(ET),IT=Ee({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xT=St(IT),ST=[9,13,27,32],Td=vn&&"CompositionEvent"in window,Qs=null;vn&&"documentMode"in document&&(Qs=document.documentMode);var AT=vn&&"TextEvent"in window&&!Qs,x0=vn&&(!Td||Qs&&8<Qs&&11>=Qs),fm=" ",pm=!1;function S0(t,e){switch(t){case"keyup":return ST.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function kT(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function CT(t,e){if(vi)return t==="compositionend"||!Td&&S0(t,e)?(t=I0(),Ua=vd=Kn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x0&&e.locale!=="ko"?null:e.data;default:return null}}var PT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PT[t.type]:e==="textarea"}function k0(t,e,n,r){i0(r),e=dl(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,po=null;function RT(t){j0(t,0)}function eu(t){var e=Ti(t);if(Xy(e))return t}function NT(t,e){if(t==="change")return e}var C0=!1;if(vn){var uc;if(vn){var cc="oninput"in document;if(!cc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),cc=typeof gm.oninput=="function"}uc=cc}else uc=!1;C0=uc&&(!document.documentMode||9<document.documentMode)}function ym(){Ys&&(Ys.detachEvent("onpropertychange",P0),po=Ys=null)}function P0(t){if(t.propertyName==="value"&&eu(po)){var e=[];k0(e,po,t,pd(t)),l0(RT,e)}}function bT(t,e,n){t==="focusin"?(ym(),Ys=e,po=n,Ys.attachEvent("onpropertychange",P0)):t==="focusout"&&ym()}function DT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(po)}function VT(t,e){if(t==="click")return eu(e)}function OT(t,e){if(t==="input"||t==="change")return eu(e)}function LT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:LT;function mo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=_m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MT(t){var e=N0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&Id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vm(n,s);var o=vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jT=vn&&"documentMode"in document&&11>=document.documentMode,wi=null,ih=null,Xs=null,sh=!1;function wm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||wi==null||wi!==sl(r)||(r=wi,"selectionStart"in r&&Id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&mo(Xs,r)||(Xs=r,r=dl(ih,"onSelect"),0<r.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},hc={},b0={};vn&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function tu(t){if(hc[t])return hc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return hc[t]=e[n];return t}var D0=tu("animationend"),V0=tu("animationiteration"),O0=tu("animationstart"),L0=tu("transitionend"),M0=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){M0.set(t,e),ii(e,[t])}for(var dc=0;dc<Em.length;dc++){var fc=Em[dc],FT=fc.toLowerCase(),UT=fc[0].toUpperCase()+fc.slice(1);wr(FT,"on"+UT)}wr(D0,"onAnimationEnd");wr(V0,"onAnimationIteration");wr(O0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(L0,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F1(r,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,c),s=u}}}if(al)throw t=eh,al=!1,eh=null,t}function me(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(F0(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),F0(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Ta]){t[Ta]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(zT.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,pc("selectionchange",!1,e))}}function F0(t,e,n,r){switch(T0(e)){case 1:var i=tT;break;case 4:i=nT;break;default:i=_d}n=i.bind(null,e,n,t),i=void 0,!Zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}l0(function(){var c=s,f=pd(n),m=[];e:{var y=M0.get(t);if(y!==void 0){var w=wd,k=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":w=yT;break;case"focusin":k="focus",w=lc;break;case"focusout":k="blur",w=lc;break;case"beforeblur":case"afterblur":w=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wT;break;case D0:case V0:case O0:w=lT;break;case L0:w=TT;break;case"scroll":w=rT;break;case"wheel":w=xT;break;case"copy":case"cut":case"paste":w=cT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dm}var b=(e&4)!==0,V=!b&&t==="scroll",x=b?y!==null?y+"Capture":null:y;b=[];for(var T=c,C;T!==null;){C=T;var N=C.stateNode;if(C.tag===5&&N!==null&&(C=N,x!==null&&(N=uo(T,x),N!=null&&b.push(yo(T,N,C)))),V)break;T=T.return}0<b.length&&(y=new w(y,k,null,n,f),m.push({event:y,listeners:b}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",y&&n!==Xc&&(k=n.relatedTarget||n.fromElement)&&(jr(k)||k[wn]))break e;if((w||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?jr(k):null,k!==null&&(V=si(k),k!==V||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(b=cm,N="onMouseLeave",x="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(b=dm,N="onPointerLeave",x="onPointerEnter",T="pointer"),V=w==null?y:Ti(w),C=k==null?y:Ti(k),y=new b(N,T+"leave",w,n,f),y.target=V,y.relatedTarget=C,N=null,jr(f)===c&&(b=new b(x,T+"enter",k,n,f),b.target=C,b.relatedTarget=V,N=b),V=N,w&&k)t:{for(b=w,x=k,T=0,C=b;C;C=di(C))T++;for(C=0,N=x;N;N=di(N))C++;for(;0<T-C;)b=di(b),T--;for(;0<C-T;)x=di(x),C--;for(;T--;){if(b===x||x!==null&&b===x.alternate)break t;b=di(b),x=di(x)}b=null}else b=null;w!==null&&Im(m,y,w,b,!1),k!==null&&V!==null&&Im(m,V,k,b,!0)}}e:{if(y=c?Ti(c):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var M=NT;else if(mm(y))if(C0)M=OT;else{M=DT;var F=bT}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=VT);if(M&&(M=M(t,c))){k0(m,M,n,f);break e}F&&F(t,y,c),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Wc(y,"number",y.value)}switch(F=c?Ti(c):window,t){case"focusin":(mm(F)||F.contentEditable==="true")&&(wi=F,ih=c,Xs=null);break;case"focusout":Xs=ih=wi=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,wm(m,n,f);break;case"selectionchange":if(jT)break;case"keydown":case"keyup":wm(m,n,f)}var v;if(Td)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vi?S0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(x0&&n.locale!=="ko"&&(vi||_!=="onCompositionStart"?_==="onCompositionEnd"&&vi&&(v=I0()):(Kn=f,vd="value"in Kn?Kn.value:Kn.textContent,vi=!0)),F=dl(c,_),0<F.length&&(_=new hm(_,t,null,n,f),m.push({event:_,listeners:F}),v?_.data=v:(v=A0(n),v!==null&&(_.data=v)))),(v=AT?kT(t,n):CT(t,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=v))}j0(m,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=uo(t,n),s!=null&&r.unshift(yo(t,s,i)),s=uo(t,e),s!=null&&r.push(yo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=uo(n,s),u!=null&&o.unshift(yo(n,u,l))):i||(u=uo(n,s),u!=null&&o.push(yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BT=/\r\n?/g,$T=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(BT,`
`).replace($T,"")}function Ia(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(j(425))}function fl(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,qT=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,HT=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(t){return Sm.resolve(null).then(t).catch(WT)}:uh;function WT(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),tn="__reactFiber$"+is,_o="__reactProps$"+is,wn="__reactContainer$"+is,ch="__reactEvents$"+is,GT="__reactListeners$"+is,KT="__reactHandles$"+is;function jr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Am(t);t!==null;){if(n=t[tn])return n;t=Am(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[tn]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function nu(t){return t[_o]||null}var hh=[],Ii=-1;function Er(t){return{current:t}}function ge(t){0>Ii||(t.current=hh[Ii],hh[Ii]=null,Ii--)}function fe(t,e){Ii++,hh[Ii]=t.current,t.current=e}var fr={},tt=Er(fr),pt=Er(!1),Wr=fr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function pl(){ge(pt),ge(tt)}function km(t,e,n){if(tt.current!==fr)throw Error(j(168));fe(tt,e),fe(pt,n)}function U0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,b1(t)||"Unknown",i));return Ee({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Wr=tt.current,fe(tt,t),fe(pt,pt.current),!0}function Cm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=U0(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ge(pt),ge(tt),fe(tt,t)):ge(pt),fe(pt,n)}var fn=null,ru=!1,yc=!1;function z0(t){fn===null?fn=[t]:fn.push(t)}function QT(t){ru=!0,z0(t)}function Tr(){if(!yc&&fn!==null){yc=!0;var t=0,e=ae;try{var n=fn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,ru=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),d0(md,Tr),i}finally{ae=e,yc=!1}}return null}var xi=[],Si=0,gl=null,yl=0,kt=[],Ct=0,Gr=null,pn=1,mn="";function Or(t,e){xi[Si++]=yl,xi[Si++]=gl,gl=t,yl=e}function B0(t,e,n){kt[Ct++]=pn,kt[Ct++]=mn,kt[Ct++]=Gr,Gr=t;var r=pn;t=mn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-$t(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function xd(t){t.return!==null&&(Or(t,1),B0(t,1,0))}function Sd(t){for(;t===gl;)gl=xi[--Si],xi[Si]=null,yl=xi[--Si],xi[Si]=null;for(;t===Gr;)Gr=kt[--Ct],kt[Ct]=null,mn=kt[--Ct],kt[Ct]=null,pn=kt[--Ct],kt[Ct]=null}var Tt=null,wt=null,_e=!1,Ft=null;function $0(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(_e){var e=wt;if(e){var n=e;if(!Pm(t,e)){if(dh(t))throw Error(j(418));e=er(n.nextSibling);var r=Tt;e&&Pm(t,e)?$0(r,n):(t.flags=t.flags&-4097|2,_e=!1,Tt=t)}}else{if(dh(t))throw Error(j(418));t.flags=t.flags&-4097|2,_e=!1,Tt=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function xa(t){if(t!==Tt)return!1;if(!_e)return Rm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=wt)){if(dh(t))throw q0(),Error(j(418));for(;e;)$0(t,e),e=er(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?er(t.stateNode.nextSibling):null;return!0}function q0(){for(var t=wt;t;)t=er(t.nextSibling)}function $i(){wt=Tt=null,_e=!1}function Ad(t){Ft===null?Ft=[t]:Ft.push(t)}var YT=kn.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function H0(t){function e(x,T){if(t){var C=x.deletions;C===null?(x.deletions=[T],x.flags|=16):C.push(T)}}function n(x,T){if(!t)return null;for(;T!==null;)e(x,T),T=T.sibling;return null}function r(x,T){for(x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function i(x,T){return x=ir(x,T),x.index=0,x.sibling=null,x}function s(x,T,C){return x.index=C,t?(C=x.alternate,C!==null?(C=C.index,C<T?(x.flags|=2,T):C):(x.flags|=2,T)):(x.flags|=1048576,T)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,T,C,N){return T===null||T.tag!==6?(T=xc(C,x.mode,N),T.return=x,T):(T=i(T,C),T.return=x,T)}function u(x,T,C,N){var M=C.type;return M===_i?f(x,T,C.props.children,N,C.key):T!==null&&(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Un&&Nm(M)===T.type)?(N=i(T,C.props),N.ref=Ds(x,T,C),N.return=x,N):(N=Ka(C.type,C.key,C.props,null,x.mode,N),N.ref=Ds(x,T,C),N.return=x,N)}function c(x,T,C,N){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Sc(C,x.mode,N),T.return=x,T):(T=i(T,C.children||[]),T.return=x,T)}function f(x,T,C,N,M){return T===null||T.tag!==7?(T=$r(C,x.mode,N,M),T.return=x,T):(T=i(T,C),T.return=x,T)}function m(x,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=xc(""+T,x.mode,C),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pa:return C=Ka(T.type,T.key,T.props,null,x.mode,C),C.ref=Ds(x,null,T),C.return=x,C;case yi:return T=Sc(T,x.mode,C),T.return=x,T;case Un:var N=T._init;return m(x,N(T._payload),C)}if(js(T)||Cs(T))return T=$r(T,x.mode,C,null),T.return=x,T;Sa(x,T)}return null}function y(x,T,C,N){var M=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:l(x,T,""+C,N);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:return C.key===M?u(x,T,C,N):null;case yi:return C.key===M?c(x,T,C,N):null;case Un:return M=C._init,y(x,T,M(C._payload),N)}if(js(C)||Cs(C))return M!==null?null:f(x,T,C,N,null);Sa(x,C)}return null}function w(x,T,C,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return x=x.get(C)||null,l(T,x,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case pa:return x=x.get(N.key===null?C:N.key)||null,u(T,x,N,M);case yi:return x=x.get(N.key===null?C:N.key)||null,c(T,x,N,M);case Un:var F=N._init;return w(x,T,C,F(N._payload),M)}if(js(N)||Cs(N))return x=x.get(C)||null,f(T,x,N,M,null);Sa(T,N)}return null}function k(x,T,C,N){for(var M=null,F=null,v=T,_=T=0,E=null;v!==null&&_<C.length;_++){v.index>_?(E=v,v=null):E=v.sibling;var S=y(x,v,C[_],N);if(S===null){v===null&&(v=E);break}t&&v&&S.alternate===null&&e(x,v),T=s(S,T,_),F===null?M=S:F.sibling=S,F=S,v=E}if(_===C.length)return n(x,v),_e&&Or(x,_),M;if(v===null){for(;_<C.length;_++)v=m(x,C[_],N),v!==null&&(T=s(v,T,_),F===null?M=v:F.sibling=v,F=v);return _e&&Or(x,_),M}for(v=r(x,v);_<C.length;_++)E=w(v,x,_,C[_],N),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?_:E.key),T=s(E,T,_),F===null?M=E:F.sibling=E,F=E);return t&&v.forEach(function(A){return e(x,A)}),_e&&Or(x,_),M}function b(x,T,C,N){var M=Cs(C);if(typeof M!="function")throw Error(j(150));if(C=M.call(C),C==null)throw Error(j(151));for(var F=M=null,v=T,_=T=0,E=null,S=C.next();v!==null&&!S.done;_++,S=C.next()){v.index>_?(E=v,v=null):E=v.sibling;var A=y(x,v,S.value,N);if(A===null){v===null&&(v=E);break}t&&v&&A.alternate===null&&e(x,v),T=s(A,T,_),F===null?M=A:F.sibling=A,F=A,v=E}if(S.done)return n(x,v),_e&&Or(x,_),M;if(v===null){for(;!S.done;_++,S=C.next())S=m(x,S.value,N),S!==null&&(T=s(S,T,_),F===null?M=S:F.sibling=S,F=S);return _e&&Or(x,_),M}for(v=r(x,v);!S.done;_++,S=C.next())S=w(v,x,_,S.value,N),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?_:S.key),T=s(S,T,_),F===null?M=S:F.sibling=S,F=S);return t&&v.forEach(function(P){return e(x,P)}),_e&&Or(x,_),M}function V(x,T,C,N){if(typeof C=="object"&&C!==null&&C.type===_i&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:e:{for(var M=C.key,F=T;F!==null;){if(F.key===M){if(M=C.type,M===_i){if(F.tag===7){n(x,F.sibling),T=i(F,C.props.children),T.return=x,x=T;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Un&&Nm(M)===F.type){n(x,F.sibling),T=i(F,C.props),T.ref=Ds(x,F,C),T.return=x,x=T;break e}n(x,F);break}else e(x,F);F=F.sibling}C.type===_i?(T=$r(C.props.children,x.mode,N,C.key),T.return=x,x=T):(N=Ka(C.type,C.key,C.props,null,x.mode,N),N.ref=Ds(x,T,C),N.return=x,x=N)}return o(x);case yi:e:{for(F=C.key;T!==null;){if(T.key===F)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(x,T.sibling),T=i(T,C.children||[]),T.return=x,x=T;break e}else{n(x,T);break}else e(x,T);T=T.sibling}T=Sc(C,x.mode,N),T.return=x,x=T}return o(x);case Un:return F=C._init,V(x,T,F(C._payload),N)}if(js(C))return k(x,T,C,N);if(Cs(C))return b(x,T,C,N);Sa(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(x,T.sibling),T=i(T,C),T.return=x,x=T):(n(x,T),T=xc(C,x.mode,N),T.return=x,x=T),o(x)):n(x,T)}return V}var qi=H0(!0),W0=H0(!1),_l=Er(null),vl=null,Ai=null,kd=null;function Cd(){kd=Ai=vl=null}function Pd(t){var e=_l.current;ge(_l),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){vl=t,kd=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(vl===null)throw Error(j(308));Ai=t,vl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Fr=null;function Rd(t){Fr===null?Fr=[t]:Fr.push(t)}function G0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,En(t,n)}return i=r.interleaved,i===null?(e.next=e,Rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,En(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var y=l.lane,w=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,b=l;switch(y=e,w=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){m=k.call(w,m,y);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,y=typeof k=="function"?k.call(w,m,y):k,y==null)break e;m=Ee({},m,y);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else w={eventTime:w,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=m):f=f.next=w,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=m}}function Dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Uo={},rn=Er(Uo),vo=Er(Uo),wo=Er(Uo);function Ur(t){if(t===Uo)throw Error(j(174));return t}function bd(t,e){switch(fe(wo,e),fe(vo,t),fe(rn,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}ge(rn),fe(rn,e)}function Hi(){ge(rn),ge(vo),ge(wo)}function Q0(t){Ur(wo.current);var e=Ur(rn.current),n=Kc(e,t.type);e!==n&&(fe(vo,t),fe(rn,n))}function Dd(t){vo.current===t&&(ge(rn),ge(vo))}var ve=Er(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Vd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var $a=kn.ReactCurrentDispatcher,vc=kn.ReactCurrentBatchConfig,Kr=0,we=null,Ve=null,Fe=null,Tl=!1,Js=!1,Eo=0,XT=0;function Qe(){throw Error(j(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Ld(t,e,n,r,i,s){if(Kr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?tI:nI,t=n(r,i),Js){s=0;do{if(Js=!1,Eo=0,25<=s)throw Error(j(301));s+=1,Fe=Ve=null,e.updateQueue=null,$a.current=rI,t=n(r,i)}while(Js)}if($a.current=Il,e=Ve!==null&&Ve.next!==null,Kr=0,Fe=Ve=we=null,Tl=!1,e)throw Error(j(300));return t}function Md(){var t=Eo!==0;return Eo=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Dt(){if(Ve===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Fe===null?we.memoizedState:Fe.next;if(e!==null)Fe=e,Ve=t;else{if(t===null)throw Error(j(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function To(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Kr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,we.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Dt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y0(){}function X0(t,e){var n=we,r=Dt(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,jd(e_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Io(9,Z0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Kr&30||J0(n,e,i)}return i}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,r){e.value=n,e.getSnapshot=r,t_(e)&&n_(t)}function e_(t,e,n){return n(function(){t_(e)&&n_(t)})}function t_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function n_(t){var e=En(t,1);e!==null&&qt(e,t,1,-1)}function Vm(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=eI.bind(null,we,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r_(){return Dt().memoizedState}function qa(t,e,n,r){var i=Zt();we.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function iu(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Od(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}we.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function Om(t,e){return qa(8390656,8,t,e)}function jd(t,e){return iu(2048,8,t,e)}function i_(t,e){return iu(4,2,t,e)}function s_(t,e){return iu(4,4,t,e)}function o_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a_(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,o_.bind(null,e,t),n)}function Fd(){}function l_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c_(t,e,n){return Kr&21?(Gt(n,e)||(n=m0(),we.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function JT(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{ae=n,vc.transition=r}}function h_(){return Dt().memoizedState}function ZT(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d_(t))f_(e,n);else if(n=G0(t,e,n,r),n!==null){var i=at();qt(n,t,r,i),p_(n,e,r)}}function eI(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d_(t))f_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,Rd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=G0(t,e,i,r),n!==null&&(i=at(),qt(n,t,r,i),p_(n,e,r))}}function d_(t){var e=t.alternate;return t===we||e!==null&&e===we}function f_(t,e){Js=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var Il={readContext:bt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},tI={readContext:bt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qa(4194308,4,o_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return qa(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZT.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:Fd,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=JT.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Zt();if(_e){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Kr&30||J0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Om(e_.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,Z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Ue.identifierPrefix;if(_e){var n=mn,r=pn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nI={readContext:bt,useCallback:l_,useContext:bt,useEffect:jd,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:s_,useMemo:u_,useReducer:wc,useRef:r_,useState:function(){return wc(To)},useDebugValue:Fd,useDeferredValue:function(t){var e=Dt();return c_(e,Ve.memoizedState,t)},useTransition:function(){var t=wc(To)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:X0,useId:h_,unstable_isNewReconciler:!1},rI={readContext:bt,useCallback:l_,useContext:bt,useEffect:jd,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:s_,useMemo:u_,useReducer:Ec,useRef:r_,useState:function(){return Ec(To)},useDebugValue:Fd,useDeferredValue:function(t){var e=Dt();return Ve===null?e.memoizedState=t:c_(e,Ve.memoizedState,t)},useTransition:function(){var t=Ec(To)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:X0,useId:h_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),Ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),Ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=rr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(qt(e,t,r,n),Ba(e,t,r))}};function Lm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,s):!0}function m_(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=mt(e)?Wr:tt.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=mt(e)?Wr:tt.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&su.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=N1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iI=typeof WeakMap=="function"?WeakMap:Map;function g_(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,kh=r),yh(t,e)},n}function y_(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_I.bind(null,t,e,n),e.then(t,t))}function Fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Um(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var sI=kn.ReactCurrentOwner,ft=!1;function st(t,e,n,r){e.child=t===null?W0(e,null,n,r):qi(e,t.child,n,r)}function zm(t,e,n,r,i){n=n.render;var s=e.ref;return Vi(e,i),r=Ld(t,e,n,r,s,i),n=Md(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(_e&&n&&xd(e),e.flags|=1,st(t,e,r,i),e.child)}function Bm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,__(t,e,s,r,i)):(t=Ka(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function __(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mo(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return _h(t,e,n,r,i)}function v_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ci,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ci,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ci,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ci,vt),vt|=r;return st(t,e,i,n),e.child}function w_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,r,i){var s=mt(n)?Wr:tt.current;return s=Bi(e,s),Vi(e,i),n=Ld(t,e,n,r,s,i),r=Md(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(_e&&r&&xd(e),e.flags|=1,st(t,e,n,i),e.child)}function $m(t,e,n,r,i){if(mt(n)){var s=!0;ml(e)}else s=!1;if(Vi(e,i),e.stateNode===null)Ha(t,e),m_(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=mt(n)?Wr:tt.current,c=Bi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Mm(e,o,r,c),zn=!1;var y=e.memoizedState;o.state=y,wl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||pt.current||zn?(typeof f=="function"&&(mh(e,n,f,r),u=e.memoizedState),(l=zn||Lm(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=mt(n)?Wr:tt.current,u=Bi(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Mm(e,o,r,u),zn=!1,y=e.memoizedState,o.state=y,wl(e,r,o,i);var k=e.memoizedState;l!==m||y!==k||pt.current||zn?(typeof w=="function"&&(mh(e,n,w,r),k=e.memoizedState),(c=zn||Lm(e,n,c,r,y,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return vh(t,e,n,r,s,i)}function vh(t,e,n,r,i,s){w_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cm(e,n,!1),Tn(t,e,s);r=e.stateNode,sI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Cm(e,n,!0),e.child}function E_(t){var e=t.stateNode;e.pendingContext?km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&km(t,e.context,!1),bd(t,e.containerInfo)}function qm(t,e,n,r,i){return $i(),Ad(i),e.flags|=256,st(t,e,n,r),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function T_(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(ve,i&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eh(n),e.memoizedState=wh,t):Ud(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ud(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&Ad(r),qi(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(j(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lu({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=wh,s);if(!(e.mode&1))return Aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Tc(s,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,En(t,i),qt(r,t,i,-1))}return Wd(),r=Tc(Error(j(421))),Aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=er(i.nextSibling),Tt=e,_e=!0,Ft=null,t!==null&&(kt[Ct++]=pn,kt[Ct++]=mn,kt[Ct++]=Gr,pn=t.id,mn=t.overflow,Gr=e),e=Ud(e,r.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aI(t,e,n){switch(e.tag){case 3:E_(e),$i();break;case 5:Q0(e);break;case 1:mt(e.type)&&ml(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?T_(t,e,n):(fe(ve,ve.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);fe(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,v_(t,e,n)}return Tn(t,e,n)}var x_,Th,S_,A_;x_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Th=function(){};S_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(rn.current);var s=null;switch(n){case"input":i=qc(t,i),r=qc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Gc(t,i),r=Gc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Qc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ao.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lI(t,e,n){var r=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&pl(),Ye(e),null;case 3:return r=e.stateNode,Hi(),ge(pt),ge(tt),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(Rh(Ft),Ft=null))),Th(t,e),Ye(e),null;case 5:Dd(e);var i=Ur(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)S_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ye(e),null}if(t=Ur(rn.current),xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[_o]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":em(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":nm(r,s),me("invalid",r)}Qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",""+l]):ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ma(r),tm(r,s,!0);break;case"textarea":ma(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=e0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[_o]=r,x_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":em(t,r),i=qc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":nm(t,r),i=Gc(t,r),me("invalid",t);break;default:i=r}Qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?r0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&t0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&cd(t,s,u,o))}switch(n){case"input":ma(t),tm(t,r,!1);break;case"textarea":ma(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ri(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Ur(wo.current),Ur(rn.current),xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Ye(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&wt!==null&&e.mode&1&&!(e.flags&128))q0(),$i(),e.flags|=98560,s=!1;else if(s=xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[tn]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ft!==null&&(Rh(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Oe===0&&(Oe=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Hi(),Th(t,e),t===null&&go(e.stateNode.containerInfo),Ye(e),null;case 10:return Pd(e.type._context),Ye(e),null;case 17:return mt(e.type)&&pl(),Ye(e),null;case 19:if(ge(ve),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Gi&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return Ye(e),null}else 2*ke()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ve.current,fe(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function uI(t,e){switch(Sd(e),e.tag){case 1:return mt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),ge(pt),ge(tt),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return Hi(),null;case 10:return Pd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var ka=!1,Ze=!1,cI=typeof WeakSet=="function"?WeakSet:Set,q=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Wm=!1;function hI(t,e){if(oh=cl,t=N0(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,y=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)y=m,m=w;for(;;){if(m===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++f===r&&(u=o),(w=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},cl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,V=k.memoizedState,x=e.stateNode,T=x.getSnapshotBeforeUpdate(e.elementType===e.type?b:Mt(e.type,b),V);x.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){xe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=Wm,Wm=!1,k}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k_(t){var e=t.alternate;e!==null&&(t.alternate=null,k_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[_o],delete e[ch],delete e[GT],delete e[KT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C_(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var ze=null,jt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Ze||ki(n,e);case 6:var r=ze,i=jt;ze=null,Mn(t,e,n),ze=r,jt=i,ze!==null&&(jt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(jt?(t=ze,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),fo(t)):gc(ze,n.stateNode));break;case 4:r=ze,i=jt,ze=n.stateNode.containerInfo,jt=!0,Mn(t,e,n),ze=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Ze&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Mn(t,e,n),Ze=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Km(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cI),e.forEach(function(r){var i=wI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,jt=!1;break e;case 3:ze=l.stateNode.containerInfo,jt=!0;break e;case 4:ze=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(ze===null)throw Error(j(160));P_(s,o,i),ze=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R_(e,t),e=e.sibling}function R_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Jt(t),r&4){try{Zs(3,t,t.return),ou(3,t)}catch(b){xe(t,t.return,b)}try{Zs(5,t,t.return)}catch(b){xe(t,t.return,b)}}break;case 1:Lt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Lt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(b){xe(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jy(i,s),Yc(l,o);var c=Yc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?r0(i,m):f==="dangerouslySetInnerHTML"?t0(i,m):f==="children"?lo(i,m):cd(i,f,m,c)}switch(l){case"input":Hc(i,s);break;case"textarea":Zy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ri(i,!!s.multiple,w,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ri(i,!!s.multiple,s.defaultValue,!0):Ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(b){xe(t,t.return,b)}}break;case 6:if(Lt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){xe(t,t.return,b)}}break;case 3:if(Lt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(b){xe(t,t.return,b)}break;case 4:Lt(e,t),Jt(t);break;case 13:Lt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($d=ke())),r&4&&Km(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,Lt(e,t),Ze=c):Lt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(y=q,w=y.child,y.tag){case 0:case 11:case 14:case 15:Zs(4,y,y.return);break;case 1:ki(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(b){xe(r,n,b)}}break;case 5:ki(y,y.return);break;case 22:if(y.memoizedState!==null){Ym(m);continue}}w!==null?(w.return=y,q=w):Ym(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=n0("display",o))}catch(b){xe(t,t.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){xe(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(e,t),Jt(t),r&4&&Km(t);break;case 21:break;default:Lt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Gm(t);Ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gm(t);Sh(t,l,o);break;default:throw Error(j(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dI(t,e,n){q=t,N_(t)}function N_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ka;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=ka;var c=Ze;if(ka=o,(Ze=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Xm(i):u!==null?(u.return=o,q=u):Xm(i);for(;s!==null;)q=s,N_(s),s=s.sibling;q=i,ka=l,Ze=c}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Qm(t)}}function Qm(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ze||e.flags&512&&xh(e)}catch(y){xe(e,e.return,y)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Ym(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Xm(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{xh(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{xh(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var fI=Math.ceil,xl=kn.ReactCurrentDispatcher,zd=kn.ReactCurrentOwner,Nt=kn.ReactCurrentBatchConfig,se=0,Ue=null,Pe=null,qe=0,vt=0,Ci=Er(0),Oe=0,xo=null,Qr=0,au=0,Bd=0,eo=null,ht=null,$d=0,Gi=1/0,dn=null,Sl=!1,kh=null,nr=null,Ca=!1,Qn=null,Al=0,to=0,Ch=null,Wa=-1,Ga=0;function at(){return se&6?ke():Wa!==-1?Wa:Wa=ke()}function rr(t){return t.mode&1?se&2&&qe!==0?qe&-qe:YT.transition!==null?(Ga===0&&(Ga=m0()),Ga):(t=ae,t!==0||(t=window.event,t=t===void 0?16:T0(t.type)),t):1}function qt(t,e,n,r){if(50<to)throw to=0,Ch=null,Error(j(185));Mo(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(au|=n),Oe===4&&$n(t,qe)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(Gi=ke()+500,ru&&Tr()))}function gt(t,e){var n=t.callbackNode;Y1(t,e);var r=ul(t,t===Ue?qe:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?QT(Jm.bind(null,t)):z0(Jm.bind(null,t)),HT(function(){!(se&6)&&Tr()}),n=null;else{switch(g0(r)){case 1:n=md;break;case 4:n=f0;break;case 16:n=ll;break;case 536870912:n=p0;break;default:n=ll}n=F_(n,b_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b_(t,e){if(Wa=-1,Ga=0,se&6)throw Error(j(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=ul(t,t===Ue?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kl(t,r);else{e=r;var i=se;se|=2;var s=V_();(Ue!==t||qe!==e)&&(dn=null,Gi=ke()+500,Br(t,e));do try{gI();break}catch(l){D_(t,l)}while(!0);Cd(),xl.current=s,se=i,Pe!==null?e=0:(Ue=null,qe=0,e=Oe)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=xo,Br(t,0),$n(t,r),gt(t,ke()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!pI(i)&&(e=kl(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=xo,Br(t,0),$n(t,r),gt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Lr(t,ht,dn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=$d+500-ke(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(Lr.bind(null,t,ht,dn),e);break}Lr(t,ht,dn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fI(r/1960))-r,10<r){t.timeoutHandle=uh(Lr.bind(null,t,ht,dn),r);break}Lr(t,ht,dn);break;case 5:Lr(t,ht,dn);break;default:throw Error(j(329))}}}return gt(t,ke()),t.callbackNode===n?b_.bind(null,t):null}function Ph(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=kl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Rh(e)),t}function Rh(t){ht===null?ht=t:ht.push.apply(ht,t)}function pI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~Bd,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(se&6)throw Error(j(327));Oi();var e=ul(t,0);if(!(e&1))return gt(t,ke()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=xo,Br(t,0),$n(t,e),gt(t,ke()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,ht,dn),gt(t,ke()),null}function qd(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Gi=ke()+500,ru&&Tr())}}function Yr(t){Qn!==null&&Qn.tag===0&&!(se&6)&&Oi();var e=se;se|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,se=e,!(se&6)&&Tr()}}function Hd(){vt=Ci.current,ge(Ci)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qT(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Hi(),ge(pt),ge(tt),Vd();break;case 5:Dd(r);break;case 4:Hi();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Pd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Ue=t,Pe=t=ir(t.current,null),qe=vt=e,Oe=0,xo=null,Bd=au=Qr=0,ht=eo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function D_(t,e){do{var n=Pe;try{if(Cd(),$a.current=Il,Tl){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(Kr=0,Fe=Ve=we=null,Js=!1,Eo=0,zd.current=null,n===null||n.return===null){Oe=1,xo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Fm(o);if(w!==null){w.flags&=-257,Um(w,o,l,s,e),w.mode&1&&jm(s,c,e),e=w,u=c;var k=e.updateQueue;if(k===null){var b=new Set;b.add(u),e.updateQueue=b}else k.add(u);break e}else{if(!(e&1)){jm(s,c,e),Wd();break e}u=Error(j(426))}}else if(_e&&l.mode&1){var V=Fm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Um(V,o,l,s,e),Ad(Wi(u,l));break e}}s=u=Wi(u,l),Oe!==4&&(Oe=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=g_(s,u,e);bm(s,x);break e;case 1:l=u;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(nr===null||!nr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=y_(s,l,e);bm(s,N);break e}}s=s.return}while(s!==null)}L_(n)}catch(M){e=M,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function V_(){var t=xl.current;return xl.current=Il,t===null?Il:t}function Wd(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(Qr&268435455)&&!(au&268435455)||$n(Ue,qe)}function kl(t,e){var n=se;se|=2;var r=V_();(Ue!==t||qe!==e)&&(dn=null,Br(t,e));do try{mI();break}catch(i){D_(t,i)}while(!0);if(Cd(),se=n,xl.current=r,Pe!==null)throw Error(j(261));return Ue=null,qe=0,Oe}function mI(){for(;Pe!==null;)O_(Pe)}function gI(){for(;Pe!==null&&!z1();)O_(Pe)}function O_(t){var e=j_(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?L_(t):Pe=e,zd.current=null}function L_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=lI(n,e,vt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Lr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,yI(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function yI(t,e,n,r){do Oi();while(Qn!==null);if(se&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X1(t,s),t===Ue&&(Pe=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,F_(ll,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=se;se|=4,zd.current=null,hI(t,n),R_(n,t),MT(ah),cl=!!oh,ah=oh=null,t.current=n,dI(n),B1(),se=l,ae=o,Nt.transition=s}else t.current=n;if(Ca&&(Ca=!1,Qn=t,Al=i),s=t.pendingLanes,s===0&&(nr=null),H1(n.stateNode),gt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,t=kh,kh=null,t;return Al&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Ch?to++:(to=0,Ch=t):to=0,Tr(),null}function Oi(){if(Qn!==null){var t=g0(Al),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,Al=0,se&6)throw Error(j(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var y=f.sibling,w=f.return;if(k_(f),f===c){q=null;break}if(y!==null){y.return=w,q=y;break}q=w}}}var k=s.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}var T=t.current;for(q=T;q!==null;){o=q;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,q=C;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(M){xe(l,l.return,M)}if(l===o){q=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,q=N;break e}q=l.return}}if(se=i,Tr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function Zm(t,e,n){e=Wi(n,e),e=g_(t,e,1),t=tr(t,e,1),e=at(),t!==null&&(Mo(t,1,e),gt(t,e))}function xe(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Wi(n,t),t=y_(e,t,1),e=tr(e,t,1),t=at(),e!==null&&(Mo(e,1,t),gt(e,t));break}}e=e.return}}function _I(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>ke()-$d?Br(t,0):Bd|=n),gt(t,e)}function M_(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=at();t=En(t,e),t!==null&&(Mo(t,e,n),gt(t,n))}function vI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M_(t,n)}function wI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),M_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,aI(t,e,n);ft=!!(t.flags&131072)}else ft=!1,_e&&e.flags&1048576&&B0(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ha(t,e),t=e.pendingProps;var i=Bi(e,tt.current);Vi(e,n),i=Ld(null,e,r,t,i,n);var s=Md();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nd(e),i.updater=su,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=vh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&xd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TI(r),t=Mt(r,t),i){case 0:e=_h(null,e,r,t,n);break e;case 1:e=$m(null,e,r,t,n);break e;case 11:e=zm(null,e,r,t,n);break e;case 14:e=Bm(null,e,r,Mt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),_h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),$m(t,e,r,i,n);case 3:e:{if(E_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K0(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(j(423)),e),e=qm(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(j(424)),e),e=qm(t,e,r,n,i);break e}else for(wt=er(e.stateNode.containerInfo.firstChild),Tt=e,_e=!0,Ft=null,n=W0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=Tn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Q0(e),t===null&&fh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),w_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&fh(e),null;case 13:return T_(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),zm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(_l,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!pt.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vi(e,n),i=bt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Bm(t,e,r,i,n);case 15:return __(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ha(t,e),e.tag=1,mt(r)?(t=!0,ml(e)):t=!1,Vi(e,n),m_(e,r,i),gh(e,r,i,n),vh(null,e,r,!0,t,n);case 19:return I_(t,e,n);case 22:return v_(t,e,n)}throw Error(j(156,e.tag))};function F_(t,e){return d0(t,e)}function EI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new EI(t,e,n,r)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TI(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return $r(n.children,i,s,e);case hd:o=8,i|=8;break;case Uc:return t=Rt(12,n,e,i|2),t.elementType=Uc,t.lanes=s,t;case zc:return t=Rt(13,n,e,i),t.elementType=zc,t.lanes=s,t;case Bc:return t=Rt(19,n,e,i),t.elementType=Bc,t.lanes=s,t;case Qy:return lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gy:o=10;break e;case Ky:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case Un:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=Qy,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function II(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,l,u){return t=new II(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function xI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U_(t){if(!t)return fr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(mt(n))return U0(t,n,e)}return e}function z_(t,e,n,r,i,s,o,l,u){return t=Kd(n,r,!0,t,i,s,o,l,u),t.context=U_(null),n=t.current,r=at(),i=rr(n),s=_n(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Mo(t,i,r),gt(t,r),t}function uu(t,e,n,r){var i=e.current,s=at(),o=rr(i);return n=U_(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(qt(t,i,o,s),Ba(t,i,o)),o}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function SI(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}cu.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));uu(t,e,null,null)};cu.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){uu(null,t,null,null)}),e[wn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&E0(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function AI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Cl(o);s.call(c)}}var o=z_(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[wn]=o.current,go(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Cl(u);l.call(c)}}var u=Kd(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=u,t[wn]=u.current,go(t.nodeType===8?t.parentNode:t),Yr(function(){uu(e,u,n,r)}),u}function du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Cl(o);l.call(u)}}uu(e,o,t,i)}else o=AI(n,e,t,i,r);return Cl(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(gd(e,n|1),gt(e,ke()),!(se&6)&&(Gi=ke()+500,Tr()))}break;case 13:Yr(function(){var r=En(t,1);if(r!==null){var i=at();qt(r,t,1,i)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=at();qt(e,t,134217728,n)}Qd(t,134217728)}};_0=function(t){if(t.tag===13){var e=rr(t),n=En(t,e);if(n!==null){var r=at();qt(n,t,e,r)}Qd(t,e)}};v0=function(){return ae};w0=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Jc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nu(r);if(!i)throw Error(j(90));Xy(r),Hc(r,i)}}}break;case"textarea":Zy(t,n);break;case"select":e=n.value,e!=null&&Ri(t,!!n.multiple,e,!1)}};o0=qd;a0=Yr;var kI={usingClientEntryPoint:!1,Events:[Fo,Ti,nu,i0,s0,qd]},Os={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CI={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c0(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||SI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Jl=Pa.inject(CI),nn=Pa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(j(200));return xI(t,e,null,n)};xt.createRoot=function(t,e){if(!Xd(t))throw Error(j(299));var n=!1,r="",i=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,go(t.nodeType===8?t.parentNode:t),new Yd(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=c0(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Yr(t)};xt.hydrate=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=z_(e,null,t,1,n??null,i,!1,s,o),t[wn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cu(e)};xt.render=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!hu(t))throw Error(j(40));return t._reactRootContainer?(Yr(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};xt.unstable_batchedUpdates=qd;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return du(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(t){console.error(t)}}$_(),$y.exports=xt;var PI=$y.exports,q_,ng=PI;q_=ng.createRoot,ng.hydrateRoot;const RI=({onComplete:t})=>{const[e,n]=W.useState(0);return W.useEffect(()=>{setTimeout(()=>n(1),100),setTimeout(()=>n(2),2e3),setTimeout(t,2500)},[t]),p.jsx("div",{className:`fixed inset-0 z-[60] bg-black flex items-center justify-center transition-opacity duration-700 ${e===2?"opacity-0 pointer-events-none":"opacity-100"}`,children:p.jsx("div",{className:`flex items-center gap-3 transition-all duration-1000 transform ${e>=1?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-10 scale-90"}`,children:p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("span",{className:"text-5xl font-black text-white tracking-tighter",style:{fontFamily:"sans-serif"},children:"ARCO"}),p.jsx("div",{className:"h-3 w-3 rounded-full bg-orange-500 mt-3 ml-1"})]})})})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),le=(t,e)=>{const n=W.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>W.createElement("svg",{ref:f,...NI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${bI(t)}`,l].join(" "),...c},[...e.map(([m,y])=>W.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=le("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=le("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=le("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=le("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=le("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=le("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=le("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=le("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=le("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=le("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=le("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=le("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=le("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=le("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=le("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=le("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ex=({loading:t,error:e,resetSent:n,onLogin:r,onForgotPassword:i})=>{const[s,o]=W.useState(""),[l,u]=W.useState(""),[c,f]=W.useState(!1),m=y=>{y.preventDefault(),!(!s||!l)&&r({email:s,password:l})};return p.jsxs("div",{className:"min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"}),p.jsx("div",{className:"absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px]"}),p.jsxs("div",{className:"w-full max-w-sm relative z-10",children:[p.jsxs("div",{className:"flex flex-col items-center gap-4 mb-10",children:[p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("span",{className:"text-4xl font-black text-white tracking-tighter",children:"ARCO"}),p.jsx("div",{className:"h-2 w-2 rounded-full bg-orange-500 mt-2"})]}),p.jsx("p",{className:"text-slate-400 text-xs tracking-widest uppercase",children:"Workflow Studio"})]}),p.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl",children:[p.jsx("h2",{className:"text-xl font-bold text-white mb-2 text-center",children:"Bem-vindo"}),p.jsx("p",{className:"text-xs text-slate-400 text-center mb-6",children:"Entre para aceder ao seu workspace."}),e&&p.jsxs("div",{className:"mb-4 text-xs bg-red-500/10 border border-red-500/20 text-red-200 px-3 py-2 rounded-xl flex gap-2",children:[p.jsx(Q_,{size:12,className:"mt-[2px] shrink-0"}),p.jsx("span",{children:e})]}),n&&p.jsx("div",{className:"mb-4 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 px-3 py-2 rounded-xl",children:"Email de recuperação enviado. Verifica a tua caixa de entrada."}),p.jsxs("form",{onSubmit:m,className:"space-y-4",children:[p.jsx("input",{type:"email",className:"w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all",placeholder:"seu@email.com",value:s,onChange:y=>o(y.target.value),required:!0}),p.jsxs("div",{className:"relative",children:[p.jsx("input",{type:c?"text":"password",className:"w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all pr-12",placeholder:"Password",value:l,onChange:y=>u(y.target.value),required:!0}),p.jsx("button",{type:"button",onClick:()=>f(!c),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors",children:c?p.jsx(MI,{size:16}):p.jsx(jI,{size:16})})]}),p.jsx("button",{type:"submit",disabled:t,className:"w-full bg-white text-black font-bold rounded-2xl py-4 text-xs uppercase tracking-wide hover:bg-slate-200 transition active:scale-[0.98] disabled:opacity-70 mt-2",children:t?"A entrar...":"Entrar"})]}),p.jsx("button",{type:"button",onClick:()=>i(s),className:"w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors mt-4",children:"Esqueci-me da password"})]})]})]})},tx=({currentUser:t,isAdmin:e,globalSearchTerm:n,setGlobalSearchTerm:r,isSearchExpanded:i,setIsSearchExpanded:s,handleLogoClick:o})=>{var u;const l=W.useRef(null);return W.useEffect(()=>{i&&l.current&&l.current.focus()},[i]),p.jsxs("div",{className:"bg-white px-6 py-4 sticky top-0 z-40 flex items-center justify-between h-[80px] border-b border-slate-50",children:[p.jsxs("div",{className:"flex items-center gap-1 md:hidden cursor-pointer active:scale-95 transition-transform",onClick:o,children:[p.jsx("span",{className:"text-2xl font-black text-slate-900 tracking-tighter",children:"ARCO"}),p.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5"})]}),p.jsxs("div",{className:`flex items-center justify-end transition-all duration-300 ${i?"flex-1 ml-4":""}`,children:[p.jsxs("div",{className:`relative flex items-center transition-all duration-300 origin-right ${i?"w-full opacity-100":"w-0 opacity-0 overflow-hidden"}`,children:[p.jsx("input",{ref:l,className:"w-full bg-slate-100 border-none outline-none rounded-full py-2 pl-4 pr-10 text-sm font-medium text-slate-900 placeholder:text-slate-400",placeholder:"Pesquisar...",value:n,onChange:c=>r(c.target.value),onBlur:()=>{n||s(!1)}}),p.jsx("button",{onClick:()=>{r(""),s(!1)},className:"absolute right-2 text-slate-400 hover:text-slate-700",children:p.jsx(Q_,{size:14})})]}),!i&&p.jsx("button",{onClick:()=>s(!0),className:"p-2 text-slate-400 hover:text-slate-900 transition-colors",children:p.jsx(KI,{size:22})})]}),p.jsxs("div",{className:"hidden md:flex items-center gap-3 ml-4",children:[p.jsxs("div",{className:"flex flex-col text-right",children:[p.jsx("span",{className:"text-xs font-bold text-slate-900",children:t==null?void 0:t.name}),p.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:e?"Admin":"User"})]}),p.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-900/20",children:((u=t==null?void 0:t.name)==null?void 0:u.charAt(0))||"U"})]})]})},nx=({view:t,setView:e,setGlobalSearchTerm:n,handleLogout:r,handleLogoClick:i})=>p.jsxs("div",{className:"hidden md:flex flex-col w-64 bg-[#1e293b] h-screen fixed left-0 top-0 z-50 shadow-2xl",children:[p.jsxs("div",{className:"p-8 flex items-center gap-2 h-[80px] cursor-pointer hover:opacity-90 transition-opacity",onClick:i,children:[p.jsx("span",{className:"text-3xl font-black text-white tracking-tighter font-sans",children:"ARCO"}),p.jsx("div",{className:"h-2 w-2 rounded-full bg-orange-500 mt-2"})]}),p.jsxs("div",{className:"flex-1 px-4 space-y-2 pt-4",children:[p.jsxs("button",{onClick:()=>{e("stats"),n("")},className:`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${t==="stats"?"bg-white/10 text-white":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[p.jsx(Jd,{size:20})," ",p.jsx("span",{className:"font-bold text-sm",children:"Dashboard"})]}),p.jsxs("button",{onClick:()=>{e("projects"),n("")},className:`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${t==="projects"||t==="project-detail"?"bg-white/10 text-white":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[p.jsx(K_,{size:20})," ",p.jsx("span",{className:"font-bold text-sm",children:"Projetos"})]}),p.jsxs("button",{onClick:()=>{e("create-project"),n("")},className:`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${t==="create-project"?"bg-white/10 text-white":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[p.jsx(H_,{size:20})," ",p.jsx("span",{className:"font-bold text-sm",children:"Novo Projeto"})]}),p.jsxs("button",{onClick:()=>{e("clients"),n("")},className:`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${t==="clients"?"bg-white/10 text-white":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[p.jsx(JI,{size:20})," ",p.jsx("span",{className:"font-bold text-sm",children:"Clientes"})]})]}),p.jsx("div",{className:"p-6 border-t border-white/10",children:p.jsxs("button",{onClick:r,className:"text-slate-400 hover:text-white text-xs font-bold flex items-center gap-2",children:[p.jsx(zI,{size:14})," Sair do Sistema"]})})]}),rx=({setView:t,setFilterStatus:e})=>p.jsx("div",{className:"p-6 flex flex-col h-full justify-between md:hidden pb-24",children:p.jsxs("div",{children:[p.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4 mt-4",children:[p.jsxs("button",{onClick:()=>t("create-project"),className:"aspect-square bg-[#1e293b] rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-xl shadow-blue-900/10 active:scale-95 transition-all group",children:[p.jsx("div",{className:"p-3 bg-white/10 rounded-2xl text-orange-500",children:p.jsx(H_,{size:24,strokeWidth:2})}),p.jsxs("div",{className:"text-left",children:[p.jsxs("span",{className:"text-white font-bold text-lg leading-tight block",children:["Novo",p.jsx("br",{}),"Projeto"]}),p.jsx("div",{className:"h-1 w-4 bg-orange-500 rounded-full mt-2"})]})]}),p.jsxs("button",{onClick:()=>t("stats"),className:"aspect-square bg-white rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-lg shadow-slate-200/50 border border-slate-100 active:scale-95 transition-all group",children:[p.jsx("div",{className:"p-3 bg-slate-50 rounded-2xl text-[#1e293b]",children:p.jsx(Jd,{size:24,strokeWidth:2})}),p.jsxs("div",{className:"text-left",children:[p.jsxs("span",{className:"text-[#1e293b] font-bold text-lg leading-tight block",children:["Esta-",p.jsx("br",{}),"tísticas"]}),p.jsx("div",{className:"h-1 w-4 bg-[#1e293b] rounded-full mt-2"})]})]}),p.jsxs("button",{onClick:()=>t("projects"),className:"aspect-square bg-[#1e293b] rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-xl shadow-blue-900/10 active:scale-95 transition-all group",children:[p.jsx("div",{className:"p-3 bg-white/10 rounded-2xl text-orange-500",children:p.jsx(K_,{size:24,strokeWidth:2})}),p.jsxs("div",{className:"text-left",children:[p.jsxs("span",{className:"text-white font-bold text-lg leading-tight block",children:["Work-",p.jsx("br",{}),"space"]}),p.jsx("div",{className:"h-1 w-4 bg-orange-500 rounded-full mt-2"})]})]}),p.jsxs("button",{onClick:()=>{e("orçamento"),t("projects")},className:"aspect-square bg-white rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-lg shadow-slate-200/50 border border-slate-100 active:scale-95 transition-all group",children:[p.jsx("div",{className:"p-3 bg-slate-50 rounded-2xl text-[#1e293b]",children:p.jsx(UI,{size:24,strokeWidth:2})}),p.jsxs("div",{className:"text-left",children:[p.jsxs("span",{className:"text-[#1e293b] font-bold text-lg leading-tight block",children:["Orça-",p.jsx("br",{}),"mento"]}),p.jsx("div",{className:"h-1 w-4 bg-[#1e293b] rounded-full mt-2"})]})]})]}),p.jsxs("button",{onClick:()=>t("clients"),className:"w-full bg-slate-100 rounded-[1.5rem] py-4 px-6 flex items-center justify-center gap-2 text-[#1e293b] font-bold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all min-h-[56px]",children:[p.jsx(XI,{size:18})," Adicionar Cliente"]})]})}),Ac=({label:t,value:e,helper:n,icon:r,trend:i})=>p.jsxs("div",{className:"bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-default",children:[p.jsxs("div",{className:"flex justify-between items-start",children:[p.jsx("span",{className:"p-3 rounded-2xl bg-slate-50 text-slate-600",children:r}),p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"text-2xl font-black text-slate-900 block",children:e}),i&&p.jsx("span",{className:"text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-md",children:i})]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-xs uppercase font-bold text-slate-400 block mb-1",children:t}),n&&p.jsx("span",{className:"text-[11px] text-slate-500 leading-tight block",children:n})]})]}),zt=t=>{if(!t||!t.items)return 0;const e=t.items.reduce((i,s)=>i+(Number(s.qty)||0)*(Number(s.price)||0),0),n=Number(t.discount)||0;return(e-e*n/100)*1.23},ot=t=>{try{return new Intl.NumberFormat("pt-PT",{style:"currency",currency:"EUR"}).format(t||0)}catch{return`${t||0} €`}},jn=t=>t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):"",ix=({projects:t,clients:e})=>{const[n,r]=W.useState(null),i=W.useMemo(()=>{const l=t.filter(m=>m.status==="pago"),u=l.reduce((m,y)=>m+zt(y),0),c=new Map;return l.forEach(m=>{const y=c.get(m.clientId)||0;c.set(m.clientId,y+zt(m))}),{chartData:Array.from(c.entries()).map(([m,y],w)=>{const k=e.find(b=>b.id===m);return{id:m,name:(k==null?void 0:k.name)||"Desconhecido",value:y,color:`hsl(${w*137.5%360}, 70%, 50%)`,percentage:u>0?y/u*100:0}}).sort((m,y)=>y.value-m.value),totalPaid:u}},[t,e]);let s=0;const o=i.chartData.map((l,u)=>{const{percentage:c}=l,f=25-s;return s+=c,{...l,dashArray:`${c} ${100-c}`,dashOffset:f}});return p.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full",children:[p.jsx("h3",{className:"text-sm font-bold text-slate-500 uppercase tracking-wider mb-4",children:"Faturação Paga"}),p.jsx("div",{className:"flex-1 flex flex-col items-center justify-center relative min-h-[200px]",children:p.jsxs("div",{className:"relative w-48 h-48",children:[p.jsxs("svg",{viewBox:"0 0 42 42",className:"w-full h-full",children:[p.jsx("circle",{cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"#f1f5f9",strokeWidth:"5"}),o.map((l,u)=>p.jsx("circle",{cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:l.color,strokeWidth:n===u?"8":"5",strokeDasharray:l.dashArray,strokeDashoffset:l.dashOffset,className:"transition-all duration-300 cursor-pointer hover:opacity-80",onMouseEnter:()=>r(u),onMouseLeave:()=>r(null),children:p.jsxs("title",{children:[l.name,": ",ot(l.value)]})},l.id))]}),p.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:n!==null?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"text-xs text-slate-400 font-bold max-w-[80%] text-center truncate px-2",children:o[n].name}),p.jsx("span",{className:"text-lg font-black text-slate-900",style:{color:o[n].color},children:ot(o[n].value)})]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"text-xs text-slate-400 font-bold",children:"Total"}),p.jsx("span",{className:"text-xl font-black text-slate-900",children:ot(i.totalPaid)})]})})]})}),p.jsxs("div",{className:"mt-4 flex flex-wrap gap-2 justify-center",children:[i.chartData.slice(0,4).map((l,u)=>p.jsxs("div",{className:`flex items-center gap-1 text-[10px] px-2 py-1 rounded-full border transition-opacity cursor-pointer ${n===u?"bg-slate-50 opacity-100 ring-2 ring-offset-1":"bg-white opacity-70"}`,style:{borderColor:l.color},onMouseEnter:()=>r(u),onMouseLeave:()=>r(null),children:[p.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:l.color}}),p.jsx("span",{className:"font-bold text-slate-600",children:l.name})]},l.id)),i.chartData.length>4&&p.jsxs("span",{className:"text-[10px] text-slate-400 self-center",children:["+",i.chartData.length-4]})]})]})},sx=({currentUser:t,projects:e,clients:n,setView:r})=>{const i=W.useMemo(()=>e.filter(c=>c.status==="pago").reduce((c,f)=>c+zt(f),0),[e]),s=W.useMemo(()=>e.filter(c=>c.status==="orçamento"||c.status==="agendado").reduce((c,f)=>c+zt(f),0),[e]),o=W.useMemo(()=>e.filter(c=>c.status==="faturar").reduce((c,f)=>c+zt(f),0),[e]),l=W.useMemo(()=>e.filter(c=>c.status==="work").length,[e]),u=W.useMemo(()=>{const c=new Map;for(const f of e)f.status==="pago"&&c.set(f.clientId,(c.get(f.clientId)||0)+zt(f));return n.map(f=>({...f,total:c.get(f.id)||0})).sort((f,m)=>m.total-f.total).slice(0,3)},[n,e]);return p.jsxs("div",{className:"p-4 md:p-10 space-y-6",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2 md:hidden",children:[p.jsx("button",{onClick:()=>r("menu"),className:"p-2 bg-white rounded-full shadow-sm border border-slate-100",children:p.jsx(zo,{size:16,className:"text-slate-700"})}),p.jsx("h1",{className:"text-xl font-black text-slate-900 tracking-tight",children:"Dashboard"})]}),p.jsx("div",{className:"flex justify-between items-end mb-8",children:p.jsxs("div",{children:[p.jsx("h1",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Visão Geral"}),p.jsxs("p",{className:"text-slate-400 text-sm",children:["Bem-vindo de volta, ",t==null?void 0:t.name,"."]})]})}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[p.jsx("div",{className:"lg:col-span-1",children:p.jsx(ix,{projects:e,clients:n})}),p.jsxs("div",{className:"lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4",children:[p.jsx(Ac,{label:"Pipeline",value:ot(s),icon:p.jsx(HI,{size:20,className:"text-blue-500"}),helper:"Orçamentos e Agendados"}),p.jsx(Ac,{label:"A Faturar",value:ot(o),icon:p.jsx(FI,{size:20,className:"text-purple-500"}),helper:"Projetos concluídos"}),p.jsx(Ac,{label:"Em Produção",value:l.toString(),icon:p.jsx(G_,{size:20,className:"text-amber-500"}),helper:"Projetos ativos"}),p.jsxs("div",{className:"sm:col-span-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mt-2",children:[p.jsx("h3",{className:"font-bold text-slate-900 mb-4",children:"Top Clientes (Pagos)"}),p.jsxs("div",{className:"space-y-4",children:[u.map(c=>{const f=i>0?c.total/i*100:0;return p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs font-bold mb-1",children:[p.jsx("span",{children:c.name}),p.jsxs("span",{children:[ot(c.total)," (",f.toFixed(1),"%)"]})]}),p.jsx("div",{className:"w-full bg-slate-100 h-3 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-[#1e293b]",style:{width:`${f}%`}})})]},c.id)}),i===0&&p.jsx("p",{className:"text-xs text-slate-400",children:"Ainda não existem pagamentos registados."})]})]})]})]}),p.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm min-h-[200px] flex flex-col items-center justify-center text-center",children:[p.jsx(Jd,{size:32,className:"text-slate-200 mb-2"}),p.jsx("p",{className:"text-sm text-slate-400 font-medium",children:"Gráfico de Faturação Mensal"}),p.jsx("span",{className:"text-xs text-slate-300",children:"Disponível brevemente"})]})]})},Pl=[{id:"orçamento",label:"Orçamento",color:"bg-slate-100 text-slate-600 border-slate-200"},{id:"agendado",label:"Agendado",color:"bg-blue-50 text-blue-600 border-blue-200"},{id:"work",label:"Em Curso",color:"bg-amber-50 text-amber-600 border-amber-200"},{id:"faturar",label:"A Faturar",color:"bg-purple-50 text-purple-600 border-purple-200"},{id:"pago",label:"Pago",color:"bg-emerald-50 text-emerald-600 border-emerald-200"},{id:"arquivado",label:"Arquivado",color:"bg-gray-100 text-gray-400 border-gray-200"},{id:"lixo",label:"Lixo",color:"bg-red-50 text-red-400 border-red-200 line-through"}],ox=[{id:"pack_video",title:"Pack Vídeo Institucional",icon:p.jsx(ZI,{size:16}),color:"bg-blue-50 text-blue-600",items:[{desc:"Captação de Imagem (1 dia)",qty:1,price:450},{desc:"Edição e Color Grading",qty:1,price:350},{desc:"Locução Profissional",qty:1,price:120}]},{id:"pack_foto",title:"Fotografia Corporate",icon:p.jsx(OI,{size:16}),color:"bg-purple-50 text-purple-600",items:[{desc:"Sessão Fotográfica (4h)",qty:1,price:300},{desc:"Edição de 50 Fotos",qty:1,price:150}]},{id:"pack_ai",title:"Consultoria AI & Auto",icon:p.jsx(DI,{size:16}),color:"bg-emerald-50 text-emerald-600",items:[{desc:"Análise de Workflow",qty:1,price:600},{desc:"Implementação de Agentes AI",qty:2,price:400}]}],ax="geral.arcodavelha@gmail.com",Y_=({status:t})=>{const e=Pl.find(n=>n.id===t)||Pl[0];return p.jsx("span",{className:`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border ${e.color}`,children:e.label})},lx=({projects:t,clients:e,filterStatus:n,setFilterStatus:r,setView:i,setSelectedProjectId:s})=>{const o=W.useMemo(()=>{let l=[...t];return n&&n!=="todos"?l=l.filter(u=>u.status===n):l=l.filter(u=>u.status!=="arquivado"&&u.status!=="lixo"),l.sort((u,c)=>(c.createdAt||0)-(u.createdAt||0))},[t,n]);return p.jsxs("div",{className:"p-4 md:p-10 space-y-6 h-full flex flex-col",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:()=>i("menu"),className:"p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden",children:p.jsx(zo,{size:16,className:"text-slate-700"})}),p.jsx("h1",{className:"text-xl md:text-3xl font-black text-slate-900 tracking-tight",children:"Workspace"})]}),p.jsxs("button",{onClick:()=>i("create-project"),className:"p-2 md:px-6 md:py-3 bg-[#1e293b] text-white rounded-full md:rounded-2xl shadow-lg shadow-blue-900/20 flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95",children:[p.jsx(WI,{size:20})," ",p.jsx("span",{className:"hidden md:inline font-bold text-sm",children:"Novo Projeto"})]})]}),p.jsx("div",{className:"flex flex-col md:flex-row gap-4 justify-between",children:p.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar",children:[{id:"todos",label:"Tudo"},...Pl].map(l=>p.jsx("button",{onClick:()=>r(l.id),className:`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${n===l.id?"bg-[#1e293b] text-white":"bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`,children:l.label},l.id))})}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20",children:[o.map(l=>{var u;return p.jsxs("button",{onClick:()=>{s(l.id),i("project-detail")},className:"bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full relative group active:scale-[0.99]",children:[p.jsxs("div",{className:"flex justify-between items-start mb-4",children:[p.jsx("div",{className:"p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors",children:p.jsx(G_,{size:20})}),p.jsx(Y_,{status:l.status})]}),p.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block",children:((u=e.find(c=>c.id===l.clientId))==null?void 0:u.name)||"Cliente Desconhecido"}),p.jsx("h3",{className:"text-base font-bold text-slate-900 leading-tight mb-4 line-clamp-2",children:l.title}),p.jsxs("div",{className:"mt-auto pt-4 border-t border-slate-50 flex justify-between items-end",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Total Estimado"}),p.jsx("span",{className:"text-sm font-black text-slate-900 block",children:ot(zt(l))})]}),p.jsx("span",{className:"text-[10px] text-slate-400",children:new Date(l.createdAt).toLocaleDateString("pt-PT")})]})]},l.id)}),o.length===0&&p.jsx("div",{className:"col-span-full text-center py-20 opacity-50",children:p.jsx("p",{children:"Sem projetos encontrados."})})]})]})},ux=({clients:t,createProject:e,setView:n,setSelectedProjectId:r})=>{const[i,s]=W.useState(""),[o,l]=W.useState(""),[u,c]=W.useState(!1),[f,m]=W.useState(new Date().toISOString().split("T")[0]),[y,w]=W.useState(""),k=W.useMemo(()=>[...t].sort((V,x)=>V.name.localeCompare(x.name)),[t]);W.useEffect(()=>{!o&&k.length>0&&l(k[0].id)},[k,o]);const b=async V=>{if(V.preventDefault(),!i||!o)return;const x=await e({clientId:o,title:i,urgent:u,startDate:new Date(f).toISOString(),endDate:y?new Date(y).toISOString():null});r(x.id),n("project-detail")};return p.jsxs("div",{className:"p-4 md:p-10 max-w-2xl mx-auto",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[p.jsx("button",{onClick:()=>n("menu"),className:"p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden",children:p.jsx(zo,{size:16,className:"text-slate-700"})}),p.jsx("h1",{className:"text-xl md:text-2xl font-black text-slate-900 tracking-tight",children:"Novo Projeto"})]}),p.jsxs("form",{onSubmit:b,className:"space-y-6",children:[p.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block",children:"Cliente"}),p.jsxs("div",{className:"relative",children:[p.jsx("select",{className:"w-full p-4 rounded-2xl bg-slate-50 border-none outline-none font-bold text-slate-700 appearance-none focus:ring-2 focus:ring-blue-100",value:o,onChange:V=>l(V.target.value),children:k.map(V=>p.jsx("option",{value:V.id,children:V.name},V.id))}),p.jsx(W_,{size:16,className:"absolute right-4 top-4 text-slate-400 rotate-90 pointer-events-none"})]}),t.length===0&&p.jsx("button",{type:"button",onClick:()=>n("clients"),className:"text-xs text-blue-500 font-bold mt-2 ml-1",children:"+ Criar novo cliente"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block",children:"Título do Projeto"}),p.jsx("input",{className:"w-full p-4 rounded-2xl bg-slate-50 border-none outline-none font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-100",placeholder:"Ex: Vídeo Institucional",value:i,onChange:V=>s(V.target.value)})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block",children:"Início"}),p.jsx("input",{type:"date",className:"w-full p-4 rounded-2xl bg-slate-50 font-bold text-slate-700 outline-none",value:f,onChange:V=>m(V.target.value)})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block",children:"Entrega (Opcional)"}),p.jsx("input",{type:"date",className:"w-full p-4 rounded-2xl bg-slate-50 font-bold text-slate-700 outline-none",value:y,onChange:V=>w(V.target.value)})]})]})]}),p.jsxs("div",{onClick:()=>c(!u),className:`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${u?"bg-orange-50 border-orange-200":"bg-white border-slate-100"}`,children:[p.jsx("div",{className:`w-12 h-7 rounded-full relative transition-colors ${u?"bg-orange-500":"bg-slate-200"}`,children:p.jsx("div",{className:`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${u?"left-6":"left-1"}`})}),p.jsx("span",{className:`font-bold text-sm ${u?"text-orange-700":"text-slate-500"}`,children:"Marcar como Urgente"})]}),p.jsx("button",{disabled:t.length===0,className:"w-full bg-[#ea580c] text-white font-bold text-sm py-4 rounded-2xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"CRIAR PROJETO"})]})]})},cx=({selectedProject:t,clients:e,currentUser:n,isAdmin:r,updateProject:i,deleteProject:s,setView:o})=>{const[l,u]=W.useState(""),[c,f]=W.useState(""),[m,y]=W.useState("1");if(!t)return null;const w=t,k=e.find(N=>N.id===w.clientId),b=async N=>{if(N.preventDefault(),!l||!c)return;const M={id:crypto.randomUUID(),desc:l,price:Number(c),qty:Number(m)};await i(w.id,{items:[...w.items,M]}),u(""),f(""),y("1")},V=async N=>{const M=N.items.map(F=>({...F,id:crypto.randomUUID()}));await i(w.id,{items:[...w.items,...M]})},x=async N=>{await i(w.id,{items:w.items.filter(M=>M.id!==N)})},T=async()=>{window.confirm(`Tens a certeza que queres apagar o projeto "${w.title}"? Esta ação não pode ser desfeita.`)&&(await s(w.id),o("projects"))},C=()=>p.jsxs("div",{className:"hidden print:block fixed inset-0 bg-white z-[100] p-10 font-serif text-black",children:[p.jsxs("div",{className:"flex justify-between items-end border-b-2 border-black pb-4 mb-8",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"text-4xl font-black uppercase tracking-widest mb-2",children:"ARCO"}),p.jsx("p",{className:"text-sm",children:"Workflow Studio"})]}),p.jsxs("div",{className:"text-right text-sm",children:[p.jsxs("p",{children:["Data: ",new Date().toLocaleDateString()]}),p.jsxs("p",{children:["Ref: ",w.id.split("-").pop()]})]})]}),p.jsxs("div",{className:"flex justify-between mb-10",children:[p.jsxs("div",{className:"w-1/2",children:[p.jsx("h3",{className:"font-bold border-b border-gray-300 mb-2 uppercase text-xs",children:"Cliente"}),p.jsx("p",{className:"font-bold text-lg",children:k==null?void 0:k.name}),p.jsx("p",{children:k==null?void 0:k.address}),p.jsxs("p",{children:[k==null?void 0:k.zip," ",k==null?void 0:k.city]}),p.jsxs("p",{children:["NIF: ",k==null?void 0:k.nif]})]}),p.jsxs("div",{className:"w-1/3",children:[p.jsx("h3",{className:"font-bold border-b border-gray-300 mb-2 uppercase text-xs",children:"Projeto"}),p.jsx("p",{className:"font-bold",children:w.title}),p.jsxs("p",{children:["Status: ",w.status.toUpperCase()]})]})]}),p.jsxs("table",{className:"w-full mb-10 text-sm",children:[p.jsx("thead",{className:"border-b-2 border-black",children:p.jsxs("tr",{children:[p.jsx("th",{className:"text-left py-2",children:"Descrição"}),p.jsx("th",{className:"text-right py-2",children:"Qtd"}),p.jsx("th",{className:"text-right py-2",children:"Preço Unit."}),p.jsx("th",{className:"text-right py-2",children:"Total"})]})}),p.jsx("tbody",{children:w.items.map(N=>p.jsxs("tr",{className:"border-b border-gray-200",children:[p.jsx("td",{className:"py-2",children:N.desc}),p.jsx("td",{className:"text-right py-2",children:N.qty}),p.jsx("td",{className:"text-right py-2",children:ot(N.price)}),p.jsx("td",{className:"text-right py-2 font-bold",children:ot(N.qty*N.price)})]},N.id))})]}),p.jsx("div",{className:"flex justify-end",children:p.jsxs("div",{className:"w-1/3 text-right space-y-2",children:[p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:"Subtotal:"}),p.jsx("span",{children:ot(w.items.reduce((N,M)=>N+M.qty*M.price,0))})]}),p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:"Desconto:"}),p.jsxs("span",{children:[w.discount,"%"]})]}),p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:"IVA (23%):"}),p.jsx("span",{children:ot(zt(w)-zt(w)/1.23)})]}),p.jsxs("div",{className:"flex justify-between text-xl font-black border-t-2 border-black pt-2",children:[p.jsx("span",{children:"Total:"}),p.jsx("span",{children:ot(zt(w))})]})]})})]});return p.jsxs("div",{className:"p-4 md:p-10 pb-20 max-w-4xl mx-auto",children:[p.jsx(C,{}),p.jsx("div",{className:"flex items-center justify-between mb-6",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:()=>o("projects"),className:"p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden",children:p.jsx(zo,{size:16,className:"text-slate-700"})}),p.jsxs("div",{className:"flex items-center gap-1 md:hidden",children:[p.jsx("span",{className:"text-xl font-black text-slate-900 tracking-tight",children:"ARCO"}),p.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-slate-900 mt-1"})]}),p.jsx("h1",{className:"hidden md:block text-2xl font-black text-slate-900",children:w.title})]})}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[p.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[p.jsxs("div",{className:"bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100",children:[p.jsxs("div",{className:"flex flex-wrap gap-4 justify-between items-start mb-6",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-lg font-bold text-slate-900",children:k==null?void 0:k.name}),p.jsx("p",{className:"text-xs text-slate-400",children:k==null?void 0:k.email})]}),p.jsxs("div",{className:"relative inline-block",children:[p.jsx("select",{className:"appearance-none bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold py-2 pl-4 pr-10 rounded-xl uppercase hover:bg-slate-100 transition-colors cursor-pointer",value:w.status,onChange:N=>i(w.id,{status:N.target.value}),children:Pl.map(N=>p.jsx("option",{value:N.id,children:N.label},N.id))}),p.jsx(W_,{size:14,className:"absolute right-3 top-2.5 text-slate-400 rotate-90 pointer-events-none"})]})]}),w.urgent&&p.jsx("div",{className:"bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center justify-between mb-4",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"p-1.5 bg-orange-100 rounded-full text-orange-600",children:p.jsx(VI,{size:14})}),p.jsx("span",{className:"text-xs font-bold text-orange-700",children:"Projeto Urgente"})]})}),p.jsxs("div",{className:"flex gap-4 text-xs text-slate-500 border-t border-slate-50 pt-4",children:[p.jsxs("div",{className:"bg-slate-50 px-3 py-2 rounded-lg",children:[p.jsx("span",{className:"block font-bold text-slate-400 text-[10px] uppercase",children:"Data Início"}),new Date(w.startDate).toLocaleDateString("pt-PT")]}),p.jsxs("div",{className:"bg-slate-50 px-3 py-2 rounded-lg",children:[p.jsx("span",{className:"block font-bold text-slate-400 text-[10px] uppercase",children:"Entrega"}),w.endDate?new Date(w.endDate).toLocaleDateString("pt-PT"):"--"]})]})]}),p.jsxs("div",{className:"bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx(QI,{size:16,className:"text-amber-500"}),p.jsx("h3",{className:"font-bold text-slate-900 text-sm",children:"Sugestões Rápidas"})]}),p.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2",children:ox.map(N=>p.jsxs("button",{onClick:()=>V(N),className:`flex-shrink-0 p-4 rounded-2xl border flex flex-col items-start gap-2 min-w-[140px] hover:shadow-md transition-all active:scale-95 ${N.color} border-slate-100`,children:[N.icon,p.jsx("span",{className:"font-bold text-xs text-left",children:N.title}),p.jsx("span",{className:"text-[10px] opacity-70",children:"Adicionar"})]},N.id))})]}),p.jsxs("div",{className:"bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100",children:[p.jsx("h3",{className:"font-bold text-slate-900 mb-4",children:"Itens & Orçamento"}),p.jsxs("form",{onSubmit:b,className:"bg-slate-50 p-3 rounded-2xl mb-4 flex flex-col md:flex-row gap-2",children:[p.jsx("input",{className:"flex-[2] bg-white rounded-xl px-4 py-3 text-sm font-medium outline-none placeholder:text-slate-400",placeholder:"Descrição do serviço...",value:l,onChange:N=>u(N.target.value)}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{type:"number",className:"w-16 bg-white rounded-xl px-3 py-3 text-sm outline-none",placeholder:"1",value:m,onChange:N=>y(N.target.value)}),p.jsx("input",{type:"number",className:"w-24 bg-white rounded-xl px-3 py-3 text-sm outline-none",placeholder:"€",value:c,onChange:N=>f(N.target.value)}),p.jsx("button",{type:"submit",className:"bg-[#1e293b] text-white rounded-xl px-4 py-3 text-sm font-bold hover:bg-slate-700 transition-colors",children:"+"})]})]}),p.jsx("div",{className:"space-y-4",children:w.items.map(N=>p.jsxs("div",{className:"flex justify-between items-start border-b border-slate-50 last:border-0 pb-3 last:pb-0",children:[p.jsxs("div",{children:[p.jsx("span",{className:"block text-sm font-bold text-slate-800",children:N.desc}),p.jsxs("span",{className:"text-xs text-slate-400",children:[N.qty," x ",ot(N.price)]})]}),p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("span",{className:"text-sm font-bold text-slate-900",children:ot(N.qty*N.price)}),p.jsx("button",{onClick:()=>x(N.id),className:"text-red-300 hover:text-red-500 text-[10px] uppercase font-bold mt-1",children:"Remover"})]})]},N.id))}),p.jsxs("div",{className:"mt-8 pt-4 border-t border-slate-100 flex flex-col items-end gap-2",children:[p.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[p.jsx("span",{className:"text-slate-400",children:"Desconto (%)"}),p.jsx("input",{type:"number",className:"w-12 text-right bg-slate-50 rounded px-1 font-bold",value:w.discount,onChange:N=>i(w.id,{discount:Number(N.target.value)})})]}),p.jsxs("div",{className:"flex items-center gap-4 text-2xl font-black text-slate-900",children:[p.jsx("span",{children:"Total"}),p.jsx("span",{className:"text-orange-600",children:ot(zt(w))})]})]})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("button",{onClick:()=>window.print(),className:"w-full bg-[#1e293b] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 hover:bg-slate-800 transition-all active:scale-[0.98]",children:[p.jsx(GI,{size:18})," Exportar PDF"]}),r&&p.jsxs("button",{onClick:T,className:"w-full bg-red-50 text-red-500 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-all active:scale-[0.98]",children:[p.jsx(YI,{size:18})," Apagar Projeto"]})]})]})]})},hx=({clients:t,createClient:e,setView:n})=>{const[r,i]=W.useState({name:"",email:"",phone:"",nif:"",address:"",zip:"",city:""}),[s,o]=W.useState(!1),l=async u=>{if(u.preventDefault(),!r.name){alert("O nome da empresa é obrigatório.");return}o(!0);try{await e(r),i({name:"",email:"",phone:"",nif:"",address:"",zip:"",city:""}),alert("Cliente criado com sucesso!")}catch(c){console.error(c),alert("Erro ao criar cliente.")}finally{o(!1)}};return p.jsxs("div",{className:"p-4 md:p-10 max-w-5xl mx-auto",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[p.jsx("button",{onClick:()=>n("menu"),className:"p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden",children:p.jsx(zo,{size:16,className:"text-slate-700"})}),p.jsx("h1",{className:"text-xl md:text-3xl font-black text-slate-900 tracking-tight",children:"Clientes"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[p.jsx("div",{className:"lg:col-span-1",children:p.jsxs("form",{onSubmit:l,className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3 sticky top-6",children:[p.jsx("h3",{className:"text-sm font-bold text-slate-900 mb-2",children:"Novo Cliente"}),p.jsx("input",{className:"w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"Nome da Empresa *",value:r.name,onChange:u=>i({...r,name:u.target.value}),required:!0}),p.jsx("input",{className:"w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"Email",value:r.email,onChange:u=>i({...r,email:u.target.value})}),p.jsx("input",{className:"w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"Telefone",value:r.phone,onChange:u=>i({...r,phone:u.target.value})}),p.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[p.jsx("input",{className:"bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"NIF",value:r.nif,onChange:u=>i({...r,nif:u.target.value})}),p.jsx("input",{className:"bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"Cidade",value:r.city,onChange:u=>i({...r,city:u.target.value})})]}),p.jsx("input",{className:"w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all",placeholder:"Morada",value:r.address,onChange:u=>i({...r,address:u.target.value})}),p.jsx("button",{disabled:s,className:"w-full bg-slate-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wide hover:bg-slate-800 transition-colors disabled:opacity-70 active:scale-[0.98]",children:s?"A Guardar...":"Adicionar Cliente"})]})}),p.jsxs("div",{className:"lg:col-span-2 space-y-2",children:[t.map(u=>p.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-50 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"font-bold text-slate-900 text-lg",children:u.name}),u.nif&&p.jsxs("span",{className:"text-[10px] bg-slate-100 px-2 rounded text-slate-500 font-mono",children:["NIF: ",u.nif]})]}),p.jsxs("div",{className:"text-xs text-slate-400 mt-1 flex flex-wrap gap-3",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(BI,{size:12})," ",u.email||"Sem email"]}),p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(qI,{size:12})," ",u.phone||"Sem telefone"]})]}),u.address&&p.jsxs("p",{className:"text-xs text-slate-400 mt-1 flex items-center gap-1",children:[p.jsx($I,{size:12})," ",u.address,", ",u.city]})]}),p.jsx("button",{className:"p-2 text-slate-300 hover:text-slate-500 self-end md:self-center bg-slate-50 rounded-lg",children:p.jsx(LI,{size:18})})]},u.id)),t.length===0&&p.jsx("div",{className:"text-center py-10 opacity-50",children:p.jsx("p",{children:"Sem clientes registados."})})]})]})]})},dx=({searchResults:t,clients:e,setSelectedProjectId:n,setView:r,setGlobalSearchTerm:i})=>p.jsxs("div",{className:"p-4 md:p-10 space-y-8",children:[p.jsx("h2",{className:"text-xl font-black text-slate-900",children:"Resultados da Pesquisa"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2",children:["Projetos (",t.projects.length,")"]}),t.projects.length>0?p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.projects.map(s=>{var o;return p.jsxs("button",{onClick:()=>{n(s.id),r("project-detail"),i("")},className:"bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left group",children:[p.jsx("h3",{className:"font-bold text-slate-900 mb-1",children:s.title}),p.jsx("span",{className:"text-xs text-slate-500 block mb-2",children:(o=e.find(l=>l.id===s.clientId))==null?void 0:o.name}),p.jsx(Y_,{status:s.status})]},s.id)})}):p.jsx("p",{className:"text-sm text-slate-400",children:"Nenhum projeto encontrado."})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2",children:["Clientes (",t.clients.length,")"]}),t.clients.length>0?p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.clients.map(s=>p.jsxs("div",{className:"bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1",children:[p.jsx("span",{className:"font-bold text-slate-900",children:s.name}),p.jsx("span",{className:"text-xs text-slate-500",children:s.email}),p.jsx("span",{className:"text-xs text-slate-400",children:s.phone})]},s.id))}):p.jsx("p",{className:"text-sm text-slate-400",children:"Nenhum cliente encontrado."})]})]}),fx=()=>{};var rg={};/**
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
 */const X_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},px=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},J_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(y=64)),r.push(n[f],n[m],n[y],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):px(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new mx;const y=s<<2|l>>4;if(r.push(y),c!==64){const w=l<<4&240|c>>2;if(r.push(w),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gx=function(t){const e=X_(t);return J_.encodeByteArray(e,!0)},Rl=function(t){return gx(t).replace(/\./g,"")},Z_=function(t){try{return J_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _x=()=>yx().__FIREBASE_DEFAULTS__,vx=()=>{if(typeof process>"u"||typeof rg>"u")return;const t=rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z_(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return fx()||_x()||vx()||wx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ev=t=>{var e,n;return(n=(e=fu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ex=t=>{const e=ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tv=()=>{var t;return(t=fu())==null?void 0:t.config},nv=t=>{var e;return(e=fu())==null?void 0:e[`_${t}`]};/**
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
 */class Tx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ix(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function Sx(){var e;const t=(e=fu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ax(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Px(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rx(){return!Sx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nx(){try{return typeof indexedDB=="object"}catch{return!1}}function bx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dx="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dx,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,l,r)}}function Vx(t,e){return t.replace(Ox,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ox=/\{\$([^}]+)}/g;function Lx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ig(s)&&ig(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ig(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mx(t,e){const n=new jx(t,e);return n.subscribe.bind(n)}class jx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kc),i.error===void 0&&(i.error=kc),i.complete===void 0&&(i.complete=kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}/**
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
 */function qo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rv(t){return(await fetch(t,{credentials:"include"})).ok}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class Ux{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bx(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zx(t){return t===Mr?void 0:t}function Bx(t){return t.instantiationMode==="EAGER"}/**
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
 */class $x{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ux(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const qx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Hx=te.INFO,Wx={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Gx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Wx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zd{constructor(e){this.name=e,this._logLevel=Hx,this._logHandler=Gx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Kx=(t,e)=>e.some(n=>t instanceof n);let sg,og;function Qx(){return sg||(sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yx(){return og||(og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iv=new WeakMap,Nh=new WeakMap,sv=new WeakMap,Cc=new WeakMap,ef=new WeakMap;function Xx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iv.set(n,t)}).catch(()=>{}),ef.set(e,t),e}function Jx(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zx(t){bh=t(bh)}function eS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return sv.set(r,e.sort?e.sort():[e]),sr(r)}:Yx().includes(t)?function(...e){return t.apply(Pc(this),e),sr(iv.get(this))}:function(...e){return sr(t.apply(Pc(this),e))}}function tS(t){return typeof t=="function"?eS(t):(t instanceof IDBTransaction&&Jx(t),Kx(t,Qx())?new Proxy(t,bh):t)}function sr(t){if(t instanceof IDBRequest)return Xx(t);if(Cc.has(t))return Cc.get(t);const e=tS(t);return e!==t&&(Cc.set(t,e),ef.set(e,t)),e}const Pc=t=>ef.get(t);function nS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],Rc=new Map;function ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Rc.set(e,s),s}Zx(t=>({...t,get:(e,n,r)=>ag(e,n)||t.get(e,n,r),has:(e,n)=>!!ag(e,n)||t.has(e,n)}));/**
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
 */class sS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",lg="0.14.10";/**
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
 */const In=new Zd("@firebase/app"),aS="@firebase/app-compat",lS="@firebase/analytics-compat",uS="@firebase/analytics",cS="@firebase/app-check-compat",hS="@firebase/app-check",dS="@firebase/auth",fS="@firebase/auth-compat",pS="@firebase/database",mS="@firebase/data-connect",gS="@firebase/database-compat",yS="@firebase/functions",_S="@firebase/functions-compat",vS="@firebase/installations",wS="@firebase/installations-compat",ES="@firebase/messaging",TS="@firebase/messaging-compat",IS="@firebase/performance",xS="@firebase/performance-compat",SS="@firebase/remote-config",AS="@firebase/remote-config-compat",kS="@firebase/storage",CS="@firebase/storage-compat",PS="@firebase/firestore",RS="@firebase/ai",NS="@firebase/firestore-compat",bS="firebase",DS="12.11.0";/**
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
 */const Vh="[DEFAULT]",VS={[Dh]:"fire-core",[aS]:"fire-core-compat",[uS]:"fire-analytics",[lS]:"fire-analytics-compat",[hS]:"fire-app-check",[cS]:"fire-app-check-compat",[dS]:"fire-auth",[fS]:"fire-auth-compat",[pS]:"fire-rtdb",[mS]:"fire-data-connect",[gS]:"fire-rtdb-compat",[yS]:"fire-fn",[_S]:"fire-fn-compat",[vS]:"fire-iid",[wS]:"fire-iid-compat",[ES]:"fire-fcm",[TS]:"fire-fcm-compat",[IS]:"fire-perf",[xS]:"fire-perf-compat",[SS]:"fire-rc",[AS]:"fire-rc-compat",[kS]:"fire-gcs",[CS]:"fire-gcs-compat",[PS]:"fire-fst",[NS]:"fire-fst-compat",[RS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const Nl=new Map,OS=new Map,Oh=new Map;function ug(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(Oh.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,t);for(const n of Nl.values())ug(n,t);for(const n of OS.values())ug(n,t);return!0}function tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Bo("app","Firebase",LS);/**
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
 */class MS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=DS;function ov(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Vh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=tv()),!n)throw or.create("no-options");const s=Nl.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new $x(i);for(const u of Oh.values())o.addComponent(u);const l=new MS(n,r,o);return Nl.set(i,l),l}function av(t=Vh){const e=Nl.get(t);if(!e&&t===Vh&&tv())return ov();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){let r=VS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(o.join(" "));return}Ki(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jS="firebase-heartbeat-database",FS=1,So="firebase-heartbeat-store";let Nc=null;function lv(){return Nc||(Nc=nS(jS,FS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function US(t){try{const n=(await lv()).transaction(So),r=await n.objectStore(So).get(uv(t));return await n.done,r}catch(e){if(e instanceof Cn)In.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function cg(t,e){try{const r=(await lv()).transaction(So,"readwrite");await r.objectStore(So).put(e,uv(t)),await r.done}catch(n){if(n instanceof Cn)In.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function uv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zS=1024,BS=30;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>BS){const o=WS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hg(),{heartbeatsToSend:r,unsentEntries:i}=qS(this._heartbeatsCache.heartbeats),s=Rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return In.warn(n),""}}}function hg(){return new Date().toISOString().substring(0,10)}function qS(t,e=zS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nx()?bx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await US(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dg(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}function WS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function GS(t){Ki(new Jr("platform-logger",e=>new sS(e),"PRIVATE")),Ki(new Jr("heartbeat",e=>new $S(e),"PRIVATE")),ar(Dh,lg,t),ar(Dh,lg,"esm2020"),ar("fire-js","")}GS("");var KS="firebase",QS="12.11.0";/**
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
 */ar(KS,QS,"app");function cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YS=cv,hv=new Bo("auth","Firebase",cv());/**
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
 */const bl=new Zd("@firebase/auth");function XS(t,...e){bl.logLevel<=te.WARN&&bl.warn(`Auth (${ss}): ${t}`,...e)}function Qa(t,...e){bl.logLevel<=te.ERROR&&bl.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw nf(t,...e)}function sn(t,...e){return nf(t,...e)}function dv(t,e,n){const r={...YS(),[e]:n};return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return dv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hv.create(t,...e)}function K(t,e,...n){if(!t)throw nf(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function xn(t,e){t||gn(e)}/**
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
 */function Lh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function JS(){return fg()==="http:"||fg()==="https:"}function fg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||kx()||"connection"in navigator)?navigator.onLine:!0}function eA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=xx()||Cx()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rf(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rA=new Ho(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pn(t,e,n,r,i={}){return pv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=$o({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return Ax()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&qo(t.emulatorConfig.host)&&(c.credentials="include"),fv.fetch()(await mv(t,t.config.apiHost,n,l),c)})}async function pv(t,e,n){t._canInitEmulator=!1;const r={...tA,...e};try{const i=new sA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ra(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dv(t,f,c);Kt(t,f)}}catch(i){if(i instanceof Cn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function pu(t,e,n,r,i={}){const s=await Pn(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function mv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?rf(t.config,i):`${t.config.apiScheme}://${i}`;return nA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function iA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),rA.get())})}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function pg(t){return t!==void 0&&t.enterprise!==void 0}class oA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aA(t,e){return Pn(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function lA(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function Dl(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=sf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(bc(i.auth_time)),issuedAtTime:no(bc(i.iat)),expirationTime:no(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Z_(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mg(t){const e=sf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&cA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ao(t,Dl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?gv(i.providerUserInfo):[],o=fA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function dA(t){const e=We(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function pA(t,e){const n=await pv(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await mv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&qo(t.emulatorConfig.host)&&(u.credentials="include"),fv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mA(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Fn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uA(this,e)}reload(){return dA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Ao(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:w,providerData:k,stsTokenManager:b}=n;K(m&&b,e,"internal-error");const V=Li.fromJSON(this.name,b);K(typeof m=="string",e,"internal-error"),Fn(r,e.name),Fn(i,e.name),K(typeof y=="boolean",e,"internal-error"),K(typeof w=="boolean",e,"internal-error"),Fn(s,e.name),Fn(o,e.name),Fn(l,e.name),Fn(u,e.name),Fn(c,e.name),Fn(f,e.name);const x=new Bt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return k&&Array.isArray(k)&&(x.providerData=k.map(T=>({...T}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const gg=new Map;function yn(t){xn(t instanceof Function,"Expected a class definition");let e=gg.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gg.set(t,e),e)}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const yg=yv;/**
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
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Dl(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(yn(yg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||yn(yg);const o=Ya(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const y=await Dl(e,{idToken:f}).catch(()=>{});if(!y)break;m=await Bt._fromGetAccountInfoResponse(e,y,f)}else m=Bt._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Mi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Mi(s,e,r))}}/**
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
 */function _g(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(xv(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||wv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _v(t=nt()){return/firefox\//i.test(t)}function vv(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wv(t=nt()){return/crios\//i.test(t)}function Ev(t=nt()){return/iemobile/i.test(t)}function Tv(t=nt()){return/android/i.test(t)}function Iv(t=nt()){return/blackberry/i.test(t)}function xv(t=nt()){return/webos/i.test(t)}function of(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gA(t=nt()){var e;return of(t)&&!!((e=window.navigator)!=null&&e.standalone)}function yA(){return Px()&&document.documentMode===10}function Sv(t=nt()){return of(t)||Tv(t)||xv(t)||Iv(t)||/windows phone/i.test(t)||Ev(t)}/**
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
 */function Av(t,e=[]){let n;switch(t){case"Browser":n=_g(nt());break;case"Worker":n=`${_g(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class _A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vA(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const wA=6;class EA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class TA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new _A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dl(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(lr(this));const n=e?We(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vA(this),n=new EA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oi(t){return We(t)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mx(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IA(t){mu=t}function kv(t){return mu.loadJS(t)}function xA(){return mu.recaptchaEnterpriseScript}function SA(){return mu.gapiScript}function AA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kA{constructor(){this.enterprise=new CA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PA="recaptcha-enterprise",Cv="NO_RECAPTCHA";class RA{constructor(e){this.type=PA,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{aA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new oA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;pg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Cv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&pg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xA();u.length!==0&&(u+=l),kv(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function wg(t,e,n,r=!1,i=!1){const s=new RA(t);let o;if(i)o=Cv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function jh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await wg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function NA(t,e){const n=tf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function bA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DA(t,e,n){const r=oi(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Pv(e),{host:o,port:l}=VA(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Xr(c,r.config.emulator)&&Xr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,qo(o)?rv(`${s}//${o}${u}`):OA()}function Pv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VA(t){const e=Pv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Eg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Eg(o)}}}function Eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function LA(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MA(t,e){return pu(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}async function jA(t,e){return Pn(t,"POST","/v1/accounts:sendOobCode",Ir(t,e))}async function FA(t,e){return jA(t,e)}/**
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
 */async function UA(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function zA(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class ko extends af{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jh(e,n,"signInWithPassword",MA);case"emailLink":return UA(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jh(e,r,"signUpPassword",LA);case"emailLink":return zA(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ji(t,e){return pu(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const BA="http://localhost";class Zr extends af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:BA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */function $A(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qA(t){const e=zs(Bs(t)).link,n=e?zs(Bs(e)).deep_link_id:null,r=zs(Bs(t)).deep_link_id;return(r?zs(Bs(r)).link:null)||r||n||e||t}class lf{constructor(e){const n=zs(Bs(e)),r=n.apiKey??null,i=n.oobCode??null,s=$A(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=qA(e);try{return new lf(n)}catch{return null}}}/**
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
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lf.parseLink(n);return K(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends Rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Wo{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class Wn extends Wo{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Gn extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=Tg(r);return new Qi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tg(r);return new Qi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ol extends Cn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ol(e,n,r,i)}}function Nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,s,e,r):s})}async function HA(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
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
 */async function WA(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await Ao(t,Nv(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=sf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Qi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function bv(t,e,n=!1){if(Ut(t.app))return Promise.reject(lr(t));const r="signIn",i=await Nv(t,r,e),s=await Qi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GA(t,e){return bv(oi(t),e)}/**
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
 */async function KA(t){const e=oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QA(t,e,n){const r=oi(t);await jh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",FA)}function YA(t,e,n){return Ut(t.app)?Promise.reject(lr(t)):GA(We(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&KA(t),r})}function XA(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function JA(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const Ll="__sak";/**
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
 */class Dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZA=1e3,ek=10;class Vv extends Dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ek):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vv.type="LOCAL";const tk=Vv;/**
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
 */class Ov extends Dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Lv=Ov;/**
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
 */function nk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await nk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
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
 */function uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=uf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function ik(t){on().location.href=t}/**
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
 */function Mv(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ok(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ak(){return Mv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",lk=1,Ml="firebaseLocalStorage",Fv="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function uk(){const t=indexedDB.deleteDatabase(jv);return new Go(t).toPromise()}function Fh(){const t=indexedDB.open(jv,lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:Fv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await uk(),e(await Fh()))})})}async function Ig(t,e,n){const r=yu(t,!0).put({[Fv]:e,value:n});return new Go(r).toPromise()}async function ck(t,e){const n=yu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function xg(t,e){const n=yu(t,!0).delete(e);return new Go(n).toPromise()}const hk=800,dk=3;class Uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance(ak()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await sk(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await Ig(e,Ll,"1"),await xg(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ck(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yu(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uv.type="LOCAL";const fk=Uv;new Ho(3e4,6e4);/**
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
 */function pk(t,e){return e?yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cf extends af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mk(t){return bv(t.auth,new cf(t),t.bypassAuthState)}function gk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),WA(n,new cf(t),t.bypassAuthState)}async function yk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),HA(n,new cf(t),t.bypassAuthState)}/**
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
 */class zv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return gk;default:Kt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _k=new Ho(2e3,1e4);class Pi extends zv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_k.get())};e()}}Pi.currentPopupAction=null;/**
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
 */const vk="pendingRedirect",Xa=new Map;class wk extends zv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await Ek(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ek(t,e){const n=xk(e),r=Ik(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Tk(t,e){Xa.set(t._key(),e)}function Ik(t){return yn(t._redirectPersistence)}function xk(t){return Ya(vk,t.config.apiKey,t.name)}async function Sk(t,e,n=!1){if(Ut(t.app))return Promise.reject(lr(t));const r=oi(t),i=pk(r,e),o=await new wk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ak=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ck(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ck(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bv(t);default:return!1}}/**
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
 */async function Pk(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
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
 */const Rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pk(t);for(const n of e)try{if(Dk(n))return}catch{}Kt(t,"unauthorized-domain")}function Dk(t){const e=Lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Nk.test(n))return!1;if(Rk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vk=new Ho(3e4,6e4);function Ag(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ok(t){return new Promise((e,n)=>{var i,s,o;function r(){Ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ag(),n(sn(t,"network-request-failed"))},timeout:Vk.get()})}if((s=(i=on().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=on().gapi)!=null&&o.load)r();else{const l=AA("iframefcb");return on()[l]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},kv(`${SA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function Lk(t){return Ja=Ja||Ok(t),Ja}/**
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
 */const Mk=new Ho(5e3,15e3),jk="__/auth/iframe",Fk="emulator/auth/iframe",Uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rf(e,Fk):`https://${t.config.authDomain}/${jk}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function $k(t){const e=await Lk(t),n=on().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Bk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},Mk.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hk=500,Wk=600,Gk="_blank",Kk="http://localhost";class kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qk(t,e,n,r=Hk,i=Wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...qk,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=wv(c)?Gk:n),_v(c)&&(e=e||Kk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[w,k])=>`${y}${w}=${k},`,"");if(gA(c)&&l!=="_self")return Yk(e||"",l),new kg(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new kg(m)}function Yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Xk="__/auth/handler",Jk="emulator/auth/handler",Zk=encodeURIComponent("fac");async function Cg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof Rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Wo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Zk}=${encodeURIComponent(u)}`:"";return`${eC(t)}?${$o(l).slice(1)}${c}`}function eC({config:t}){return t.emulator?rf(t,Jk):`https://${t.authDomain}/${Xk}`}/**
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
 */const Dc="webStorageSupport";class tC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=Sk,this._overrideRedirectResult=Tk}async _openPopup(e,n,r,i){var o;xn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Cg(e,n,r,Lh(),i);return Qk(e,s,uf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cg(e,n,r,Lh(),i);return ik(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $k(e),r=new kk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Dc];s!==void 0&&n(!!s),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sv()||vv()||of()}}const nC=tC;var Pg="@firebase/auth",Rg="1.12.2";/**
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
 */class rC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sC(t){Ki(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Av(t)},c=new TA(r,i,s,u);return bA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new Jr("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new rC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(Pg,Rg,iC(t)),ar(Pg,Rg,"esm2020")}/**
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
 */const oC=5*60,aC=nv("authIdTokenMaxAge")||oC;let Ng=null;const lC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aC)return;const i=n==null?void 0:n.token;Ng!==i&&(Ng=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uC(t=av()){const e=tf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NA(t,{popupRedirectResolver:nC,persistence:[fk,tk,Lv]}),r=nv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lC(s.toString());JA(n,o,()=>o(n.currentUser)),XA(n,l=>o(l))}}const i=ev("auth");return i&&DA(n,`http://${i}`),n}function cC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}IA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sC("Browser");var bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,$v;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.F=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(S,A,P){for(var I=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)I[ue-2]=arguments[ue];return _.prototype[A].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,E){E||(E=0);const S=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)S[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;A<16;++A)S[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],A=v.g[2];let P=v.g[3],I;I=_+(P^E&(A^P))+S[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(A^_&(E^A))+S[1]+3905402710&4294967295,P=_+(I<<12&4294967295|I>>>20),I=A+(E^P&(_^E))+S[2]+606105819&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(_^A&(P^_))+S[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(P^E&(A^P))+S[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(A^_&(E^A))+S[5]+1200080426&4294967295,P=_+(I<<12&4294967295|I>>>20),I=A+(E^P&(_^E))+S[6]+2821735955&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(_^A&(P^_))+S[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(P^E&(A^P))+S[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(A^_&(E^A))+S[9]+2336552879&4294967295,P=_+(I<<12&4294967295|I>>>20),I=A+(E^P&(_^E))+S[10]+4294925233&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(_^A&(P^_))+S[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(P^E&(A^P))+S[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(A^_&(E^A))+S[13]+4254626195&4294967295,P=_+(I<<12&4294967295|I>>>20),I=A+(E^P&(_^E))+S[14]+2792965006&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(_^A&(P^_))+S[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(A^P&(E^A))+S[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(_^E))+S[6]+3225465664&4294967295,P=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(P^_))+S[11]+643717713&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(A^P))+S[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^P&(E^A))+S[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(_^E))+S[10]+38016083&4294967295,P=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(P^_))+S[15]+3634488961&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(A^P))+S[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^P&(E^A))+S[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(_^E))+S[14]+3275163606&4294967295,P=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(P^_))+S[3]+4107603335&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(A^P))+S[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^P&(E^A))+S[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(_^E))+S[2]+4243563512&4294967295,P=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(P^_))+S[7]+1735328473&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(A^P))+S[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(E^A^P)+S[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^A)+S[8]+2272392833&4294967295,P=_+(I<<11&4294967295|I>>>21),I=A+(P^_^E)+S[11]+1839030562&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^_)+S[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^P)+S[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^A)+S[4]+1272893353&4294967295,P=_+(I<<11&4294967295|I>>>21),I=A+(P^_^E)+S[7]+4139469664&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^_)+S[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^P)+S[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^A)+S[0]+3936430074&4294967295,P=_+(I<<11&4294967295|I>>>21),I=A+(P^_^E)+S[3]+3572445317&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^_)+S[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^P)+S[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^A)+S[12]+3873151461&4294967295,P=_+(I<<11&4294967295|I>>>21),I=A+(P^_^E)+S[15]+530742520&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^_)+S[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(A^(E|~P))+S[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~A))+S[7]+1126891415&4294967295,P=_+(I<<10&4294967295|I>>>22),I=A+(_^(P|~E))+S[14]+2878612391&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~_))+S[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~P))+S[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~A))+S[3]+2399980690&4294967295,P=_+(I<<10&4294967295|I>>>22),I=A+(_^(P|~E))+S[10]+4293915773&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~_))+S[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~P))+S[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~A))+S[15]+4264355552&4294967295,P=_+(I<<10&4294967295|I>>>22),I=A+(_^(P|~E))+S[6]+2734768916&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~_))+S[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~P))+S[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~A))+S[11]+3174756917&4294967295,P=_+(I<<10&4294967295|I>>>22),I=A+(_^(P|~E))+S[2]+718787259&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~_))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const E=_-this.blockSize,S=this.C;let A=this.h,P=0;for(;P<_;){if(A==0)for(;P<=E;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<_;)if(S[A++]=v.charCodeAt(P++),A==this.blockSize){i(this,S),A=0;break}}else for(;P<_;)if(S[A++]=v[P++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,E=0;E<4;++E)for(let S=0;S<32;S+=8)v[_++]=this.g[E]>>>S&255;return v};function s(v,_){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function o(v,_){this.h=_;const E=[];let S=!0;for(let A=v.length-1;A>=0;A--){const P=v[A]|0;S&&P==_||(E[A]=P,S=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return V(c(-v));const _=[];let E=1;for(let S=0;v>=E;S++)_[S]=v/E|0,E*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return V(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(_,8));let S=m;for(let P=0;P<v.length;P+=8){var A=Math.min(8,v.length-P);const I=parseInt(v.substring(P,P+A),_);A<8?(A=c(Math.pow(_,A)),S=S.j(A).add(c(I))):(S=S.j(E),S=S.add(c(I)))}return S}var m=u(0),y=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-V(this).m();let v=0,_=1;for(let E=0;E<this.g.length;E++){const S=this.i(E);v+=(S>=0?S:4294967296+S)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(b(this))return"-"+V(this).toString(v);const _=c(Math.pow(v,6));var E=this;let S="";for(;;){const A=N(E,_).g;E=x(E,A.j(_));let P=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=A,k(E))return P+S;for(;P.length<6;)P="0"+P;S=P+S}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function b(v){return v.h==-1}t.l=function(v){return v=x(this,v),b(v)?-1:k(v)?0:1};function V(v){const _=v.g.length,E=[];for(let S=0;S<_;S++)E[S]=~v.g[S];return new o(E,~v.h).add(y)}t.abs=function(){return b(this)?V(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),E=[];let S=0;for(let A=0;A<=_;A++){let P=S+(this.i(A)&65535)+(v.i(A)&65535),I=(P>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);S=I>>>16,P&=65535,I&=65535,E[A]=I<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(v,_){return v.add(V(_))}t.j=function(v){if(k(this)||k(v))return m;if(b(this))return b(v)?V(this).j(V(v)):V(V(this).j(v));if(b(v))return V(this.j(V(v)));if(this.l(w)<0&&v.l(w)<0)return c(this.m()*v.m());const _=this.g.length+v.g.length,E=[];for(var S=0;S<2*_;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<v.g.length;A++){const P=this.i(S)>>>16,I=this.i(S)&65535,ue=v.i(A)>>>16,Vt=v.i(A)&65535;E[2*S+2*A]+=I*Vt,T(E,2*S+2*A),E[2*S+2*A+1]+=P*Vt,T(E,2*S+2*A+1),E[2*S+2*A+1]+=I*ue,T(E,2*S+2*A+1),E[2*S+2*A+2]+=P*ue,T(E,2*S+2*A+2)}for(v=0;v<_;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=_;v<2*_;v++)E[v]=0;return new o(E,0)};function T(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function C(v,_){this.g=v,this.h=_}function N(v,_){if(k(_))throw Error("division by zero");if(k(v))return new C(m,m);if(b(v))return _=N(V(v),_),new C(V(_.g),V(_.h));if(b(_))return _=N(v,V(_)),new C(V(_.g),_.h);if(v.g.length>30){if(b(v)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,S=_;S.l(v)<=0;)E=M(E),S=M(S);var A=F(E,1),P=F(S,1);for(S=F(S,2),E=F(E,2);!k(S);){var I=P.add(S);I.l(v)<=0&&(A=A.add(E),P=I),S=F(S,1),E=F(E,1)}return _=x(v,A.j(_)),new C(A,_)}for(A=m;v.l(_)>=0;){for(E=Math.max(1,Math.floor(v.m()/_.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),P=c(E),I=P.j(_);b(I)||I.l(v)>0;)E-=S,P=c(E),I=P.j(_);k(P)&&(P=y),A=A.add(P),v=x(v,I)}return new C(A,v)}t.B=function(v){return N(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)&v.i(S);return new o(E,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)|v.i(S);return new o(E,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)^v.i(S);return new o(E,this.h^v.h)};function M(v){const _=v.g.length+1,E=[];for(let S=0;S<_;S++)E[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(E,v.h)}function F(v,_){const E=_>>5;_%=32;const S=v.g.length-E,A=[];for(let P=0;P<S;P++)A[P]=_>0?v.i(P+E)>>>_|v.i(P+E+1)<<32-_:v.i(P+E);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$v=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ur=o}).apply(typeof bg<"u"?bg:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qv,$s,Hv,Za,Uh,Wv,Gv,Kv;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in d))break e;d=d[R]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,R,D){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return h.prototype[R].apply(g,U)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function k(a,h){for(let g=1;g<arguments.length;g++){const R=arguments[g];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const D=R.length||0;a.length=d+D;for(let U=0;U<D;U++)a[d+U]=R[U]}else a.push(R)}}class b{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function x(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class T{constructor(){this.h=this.g=null}add(h,d){const g=C.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new b(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,v=new T,_=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=x();){try{a.h.call(a.g)}catch(d){V(d)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function ue(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ue,A),ue.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(Math.random()*1e6|0),kr=0;function yt(a,h,d,g,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=R,this.key=++kr,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function J(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ye(a){const h={};for(const d in a)h[d]=a[d];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cr(a,h){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)a[d]=g[d];for(let D=0;D<Se.length;D++)d=Se[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,g,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const U=Ot(a,h,g,R);return U>-1?(h=a[U],d||(h.fa=!1)):(h=new yt(h,this.src,D,!!g,R),h.fa=d,a.push(h)),h};function Pr(a,h){const d=h.type;if(d in a.g){var g=a.g[d],R=Array.prototype.indexOf.call(g,h,void 0),D;(D=R>=0)&&Array.prototype.splice.call(g,R,1),D&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,h,d,g){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return R}return-1}var Rn="closure_lm_"+(Math.random()*1e6|0),Du={};function Yf(a,h,d,g,R){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Yf(a,h[D],d,g,R);return null}return d=Zf(d),a&&a[Vt]?a.J(h,d,l(g)?!!g.capture:!!g,R):PE(a,h,d,!1,g,R)}function PE(a,h,d,g,R,D){if(!h)throw Error("Invalid event type");const U=l(R)?!!R.capture:!!R;let Z=Ou(a);if(Z||(a[Rn]=Z=new At(a)),d=Z.add(h,d,g,U,D),d.proxy)return d;if(g=RE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)P||(R=U),R===void 0&&(R=!1),a.addEventListener(h.toString(),g,R);else if(a.attachEvent)a.attachEvent(Jf(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function RE(){function a(d){return h.call(a.src,a.listener,d)}const h=NE;return a}function Xf(a,h,d,g,R){if(Array.isArray(h))for(var D=0;D<h.length;D++)Xf(a,h[D],d,g,R);else g=l(g)?!!g.capture:!!g,d=Zf(d),a&&a[Vt]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=Ot(h,d,g,R),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Ou(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,d,g,R)),(d=a>-1?h[a]:null)&&Vu(d))}function Vu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Vt])Pr(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Jf(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Ou(h))?(Pr(d,a),d.h==0&&(d.src=null,h[Rn]=null)):z(a)}}}function Jf(a){return a in Du?Du[a]:Du[a]="on"+a}function NE(a,h){if(a.da)a=!0;else{h=new ue(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&Vu(a),a=d.call(g,h)}return a}function Ou(a){return a=a[Rn],a instanceof At?a:null}var Lu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zf(a){return typeof a=="function"?a:(a[Lu]||(a[Lu]=function(h){return a.handleEvent(h)}),a[Lu])}function Ke(){S.call(this),this.i=new At(this),this.M=this,this.G=null}m(Ke,S),Ke.prototype[Vt]=!0,Ke.prototype.removeEventListener=function(a,h,d,g){Xf(this,a,h,d,g)};function rt(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var R=h;h=new A(g,a),Cr(h,R)}R=!0;let D,U;if(d)for(U=d.length-1;U>=0;U--)D=h.g=d[U],R=ta(D,g,!0,h)&&R;if(D=h.g=a,R=ta(D,g,!0,h)&&R,R=ta(D,g,!1,h)&&R,d)for(U=0;U<d.length;U++)D=h.g=d[U],R=ta(D,g,!1,h)&&R}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)z(d[g]);delete a.g[h],a.h--}}this.G=null},Ke.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ke.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ta(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let D=0;D<h.length;++D){const U=h[D];if(U&&!U.da&&U.capture==d){const Z=U.listener,De=U.ha||U.src;U.fa&&Pr(a.i,U),R=Z.call(De,g)!==!1&&R}}return R&&!g.defaultPrevented}function bE(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ep(a){a.g=bE(()=>{a.g=null,a.i&&(a.i=!1,ep(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class DE extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(a){S.call(this),this.h=a,this.g={}}m(ds,S);var tp=[];function np(a){G(a.g,function(h,d){this.g.hasOwnProperty(d)&&Vu(h)},a),a.g={}}ds.prototype.N=function(){ds.Z.N.call(this),np(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mu=o.JSON.stringify,VE=o.JSON.parse,OE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function rp(){}function ip(){}var fs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ju(){A.call(this,"d")}m(ju,A);function Fu(){A.call(this,"c")}m(Fu,A);var Rr={},sp=null;function na(){return sp=sp||new Ke}Rr.Ia="serverreachability";function op(a){A.call(this,Rr.Ia,a)}m(op,A);function ps(a){const h=na();rt(h,new op(h))}Rr.STAT_EVENT="statevent";function ap(a,h){A.call(this,Rr.STAT_EVENT,a),this.stat=h}m(ap,A);function it(a){const h=na();rt(h,new ap(h,a))}Rr.Ja="timingevent";function lp(a,h){A.call(this,Rr.Ja,a),this.size=h}m(lp,A);function ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function gs(){this.g=!0}gs.prototype.ua=function(){this.g=!1};function LE(a,h,d,g,R,D){a.info(function(){if(a.g)if(D){var U="",Z=D.split("&");for(let ce=0;ce<Z.length;ce++){var De=Z[ce].split("=");if(De.length>1){const Me=De[0];De=De[1];const Xt=Me.split("_");U=Xt.length>=2&&Xt[1]=="type"?U+(Me+"="+De+"&"):U+(Me+"=redacted&")}}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+h+`
`+d+`
`+U})}function ME(a,h,d,g,R,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+h+`
`+d+`
`+D+" "+U})}function ui(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+FE(a,d)+(g?" "+g:"")})}function jE(a,h){a.info(function(){return"TIMEOUT: "+h})}gs.prototype.info=function(){};function FE(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<g.length;U++)g[U]=""}}}}return Mu(D)}catch{return h}}var ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},up={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cp;function Uu(){}m(Uu,rp),Uu.prototype.g=function(){return new XMLHttpRequest},cp=new Uu;function ys(a){return encodeURIComponent(String(a))}function UE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Nn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ds(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var dp={},zu={};function Bu(a,h,d){a.M=1,a.A=sa(Yt(h)),a.u=d,a.R=!0,fp(a,null)}function fp(a,h){a.F=Date.now(),ia(a),a.B=Yt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ap(d.i,"t",g),a.C=0,d=a.j.L,a.h=new hp,a.g=qp(a.j,d?h:null,!a.u),a.P>0&&(a.O=new DE(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(tp[0]=R.toString()),R=tp);for(let D=0;D<R.length;D++){const U=Yf(d,R[D],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ps(),LE(a.i,a.v,a.B,a.l,a.S,a.u)}Nn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Vn(a)==3?h.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Vn(this.g),De=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Dp(this.g)))){this.K||Z!=4||De==7||(De==8||ce<=0?ps(3):ps(2)),$u(this);var h=this.g.ca();this.X=h;var d=zE(this);if(this.o=h==200,ME(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var D=g;break t}}D=null}if(a=D)ui(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qu(this,a);else{this.o=!1,this.m=3,it(12),Nr(this),_s(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=BE(this,d),Me==zu){Z==4&&(this.m=4,it(14),a=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==dp){this.m=4,it(15),ui(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ui(this.i,this.l,Me,null),qu(this,Me);if(pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)ui(this.i,this.l,d,"[Invalid Chunked Response]"),Nr(this),_s(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ju(U),U.P=!0,it(11))}}else ui(this.i,this.l,d,null),qu(this,d);Z==4&&Nr(this),this.o&&!this.K&&(Z==4?Up(this.j,this):(this.o=!1,ia(this)))}else n1(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Nr(this),_s(this)}}}catch{}finally{}};function zE(a){if(!pp(a))return a.g.la();const h=Dp(a.g);if(h==="")return"";let d="";const g=h.length,R=Vn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),_s(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(R&&D==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function pp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function BE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?zu:(d=Number(h.substring(d,g)),isNaN(d)?dp:(g+=1,g+d>h.length?zu:(h=h.slice(g,g+d),a.C=g+d,h)))}Nn.prototype.cancel=function(){this.K=!0,Nr(this)};function ia(a){a.T=Date.now()+a.H,mp(a,a.H)}function mp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ms(c(a.aa,a),h)}function $u(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(jE(this.i,this.B),this.M!=2&&(ps(),it(17)),Nr(this),this.m=2,_s(this)):mp(this,this.T-a)};function _s(a){a.j.I==0||a.K||Up(a.j,a)}function Nr(a){$u(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,np(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function qu(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Hu(d.h,a))){if(!a.L&&Hu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ca(d),la(d);else break e;Xu(d),it(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ms(c(d.Va,d),6e3));_p(d.h)<=1&&d.ta&&(d.ta=void 0)}else Dr(d,11)}else if((a.L||d.g==a)&&ca(d),!I(h))for(R=d.Ba.g.parse(h),h=0;h<R.length;h++){let ce=R[h];const Me=ce[0];if(!(Me<=d.K))if(d.K=Me,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const Xt=ce[3];Xt!=null&&(d.ka=Xt,d.j.info("VER="+d.ka));const Vr=ce[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const On=ce[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ln=a.g;if(Ln){const da=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var D=g.h;D.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Wu(D,D.h),D.h=null))}if(g.G){const Zu=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(g.wa=Zu,pe(g.J,g.G,Zu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var U=a;if(g.na=$p(g,g.L?g.ba:null,g.W),U.L){vp(g.h,U);var Z=U,De=g.O;De&&(Z.H=De),Z.D&&($u(Z),ia(Z)),g.g=U}else jp(g);d.i.length>0&&ua(d)}else ce[0]!="stop"&&ce[0]!="close"||Dr(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Dr(d,7):Yu(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}ps(4)}catch{}}var $E=class{constructor(a,h){this.g=a,this.map=h}};function gp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _p(a){return a.h?1:a.g?a.g.size:0}function Hu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wu(a,h){a.g?a.g.add(h):a.h=h}function vp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gp.prototype.cancel=function(){if(this.i=wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return w(a.i)}var Ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let R,D=null;g>=0?(R=a[d].substring(0,g),D=a[d].substring(g+1)):R=a[d],h(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof bn?(this.l=a.l,vs(this,a.j),this.o=a.o,this.g=a.g,ws(this,a.u),this.h=a.h,Gu(this,kp(a.i)),this.m=a.m):a&&(h=String(a).match(Ep))?(this.l=!1,vs(this,h[1]||"",!0),this.o=Es(h[2]||""),this.g=Es(h[3]||"",!0),ws(this,h[4]),this.h=Es(h[5]||"",!0),Gu(this,h[6]||"",!0),this.m=Es(h[7]||"")):(this.l=!1,this.i=new Is(null,this.l))}bn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ts(h,Tp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ts(h,Tp,!0),"@"),a.push(ys(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ts(d,d.charAt(0)=="/"?GE:WE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ts(d,QE)),a.join("")},bn.prototype.resolve=function(a){const h=Yt(this);let d=!!a.j;d?vs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ws(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=h.h.lastIndexOf("/");R!=-1&&(g=h.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let U=0;U<R.length;){const Z=R[U++];Z=="."?g&&U==R.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&U==R.length&&D.push("")):(D.push(Z),g=!0)}g=D.join("/")}else g=R}return d?h.h=g:d=a.i.toString()!=="",d?Gu(h,kp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Yt(a){return new bn(a)}function vs(a,h,d){a.j=d?Es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ws(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Gu(a,h,d){h instanceof Is?(a.i=h,YE(a.i,a.l)):(d||(h=Ts(h,KE)),a.i=new Is(h,a.l))}function pe(a,h,d){a.i.set(h,d)}function sa(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,HE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tp=/[#\/\?@]/g,WE=/[#\?:]/g,GE=/[#\?]/g,KE=/[#\?@]/g,QE=/#/g;function Is(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&qE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(a,h){br(this),this.i=null,a=ci(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ip(a,h){br(a),h=ci(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xp(a,h){return br(a),h=ci(a,h),a.g.has(h)}t.forEach=function(a,h){br(this),this.g.forEach(function(d,g){d.forEach(function(R){a.call(h,R,g,this)},this)},this)};function Sp(a,h){br(a);let d=[];if(typeof h=="string")xp(a,h)&&(d=d.concat(a.g.get(ci(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return br(this),this.i=null,a=ci(this,a),xp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sp(this,a),a.length>0?String(a[0]):h):h};function Ap(a,h,d){Ip(a,h),d.length>0&&(a.i=null,a.g.set(ci(a,h),w(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const R=ys(d);d=Sp(this,d);for(let D=0;D<d.length;D++){let U=R;d[D]!==""&&(U+="="+ys(d[D])),a.push(U)}}return this.i=a.join("&")};function kp(a){const h=new Is;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ci(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function YE(a,h){h&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,g){const R=g.toLowerCase();g!=R&&(Ip(this,g),Ap(this,R,d))},a)),a.j=h}function XE(a,h){const d=new gs;if(o.Image){const g=new Image;g.onload=f(Dn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Dn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Dn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Dn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function JE(a,h){const d=new gs,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(R),D.ok?Dn(d,"TestPingServer: ok",!0,h):Dn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Dn(d,"TestPingServer: error",!1,h)})}function Dn(a,h,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function ZE(){this.g=new OE}function Ku(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ku,rp),Ku.prototype.g=function(){return new oa(this.i,this.h)};function oa(a,h){Ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(oa,Ke),t=oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xs(this):Ss(this),this.readyState==3&&Cp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Na=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ss(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pp(a){let h="";return G(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Qu(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Pp(d),typeof a=="string"?d!=null&&ys(d):pe(a,h,d))}function Ie(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ie,Ke);var e1=/^https?$/i,t1=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cp.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Rp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(t1,h,void 0)>=0)||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Rp(this,D)}};function Rp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Np(a),aa(a)}function Np(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?bp(this):this.Xa())},t.Xa=function(){bp(this)};function bp(a){if(a.h&&typeof s<"u"){if(a.v&&Vn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=D===0){let U=String(a.D).match(Ep)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),g=!e1.test(U?U.toLowerCase():"")}d=g}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var R=Vn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Np(a)}}finally{aa(a)}}}}function aa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),VE(h)}};function Dp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function n1(a){const h={};a=(a.g&&Vn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=UE(a[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[R]||[];h[R]=D,D.push(d)}J(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Vp(a){this.za=0,this.i=[],this.j=new gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gp(a&&a.concurrentRequestLimit),this.Ba=new ZE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){it(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=$p(this,null,this.W),ua(this)};function Yu(a){if(Op(a),a.I==3){var h=a.V++,d=Yt(a.J);if(pe(d,"SID",a.M),pe(d,"RID",h),pe(d,"TYPE","terminate"),ks(a,d),h=new Nn(a,a.j,h),h.M=2,h.A=sa(Yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=qp(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ia(h)}Bp(a)}function la(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function Op(a){la(a),a.v&&(o.clearTimeout(a.v),a.v=null),ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ua(a){if(!yp(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||_(),F||(M(),F=!0),v.add(h,a),a.D=0}}function r1(a,h){return _p(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ms(c(a.Ea,a,h),zp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Nn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ye(D),Cr(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mp(this,R,h),d=Yt(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),ks(this,d),D&&(this.R?h="headers="+ys(Pp(D))+"&"+h:this.u&&Qu(d,this.u,D)),Wu(this.h,R),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",h),pe(d,"SID","null"),R.U=!0,Bu(R,d,null)):Bu(R,d,h),this.I=2}}else this.I==3&&(a?Lp(this,a):this.i.length==0||yp(this.h)||Lp(this))};function Lp(a,h){var d;h?d=h.l:d=a.V++;const g=Yt(a.J);pe(g,"SID",a.M),pe(g,"RID",d),pe(g,"AID",a.K),ks(a,g),a.u&&a.o&&Qu(g,a.u,a.o),d=new Nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Mp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wu(a.h,d),Bu(d,g,h)}function ks(a,h){a.H&&G(a.H,function(d,g){pe(h,g,d)}),a.l&&G({},function(d,g){pe(h,g,d)})}function Mp(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=R[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let ce=!0;for(let Me=0;Me<d;Me++){var D=R[Me].g;const Xt=R[Me].map;if(D-=Z,D<0)Z=Math.max(0,R[Me].g-100),ce=!1;else try{D="req"+D+"_"||"";try{var U=Xt instanceof Map?Xt:Object.entries(Xt);for(const[Vr,On]of U){let Ln=On;l(On)&&(Ln=Mu(On)),De.push(D+Vr+"="+encodeURIComponent(Ln))}}catch(Vr){throw De.push(D+"type="+encodeURIComponent("_badmap")),Vr}}catch{g&&g(Xt)}}if(ce){U=De.join("&");break e}}U=void 0}return a=a.i.splice(0,d),h.G=a,U}function jp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||_(),F||(M(),F=!0),v.add(h,a),a.A=0}}function Xu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ms(c(a.Da,a),zp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Fp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ms(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),la(this),Fp(this))};function Ju(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Fp(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Yt(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),ks(a,h),a.u&&a.o&&Qu(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=sa(Yt(h)),d.u=null,d.R=!0,fp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,la(this),Xu(this),it(19))};function ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Up(a,h){var d=null;if(a.g==h){ca(a),Ju(a),a.g=null;var g=2}else if(Hu(a.h,h))d=h.G,vp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;g=na(),rt(g,new lp(g,d)),ua(a)}else jp(a);else if(R=h.m,R==3||R==0&&h.X>0||!(g==1&&r1(a,h)||g==2&&Xu(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),R){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function zp(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const R=!g;g=new bn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||vs(g,"https"),sa(g),R?XE(g.toString(),d):JE(g.toString(),d)}else it(2);a.I=0,a.l&&a.l.pa(h),Bp(a),Op(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Bp(a){if(a.I=0,a.ja=[],a.l){const h=wp(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function $p(a,h,d){var g=d instanceof bn?Yt(d):new bn(d);if(g.g!="")h&&(g.g=h+"."+g.g),ws(g,g.u);else{var R=o.location;g=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const D=new bn(null);g&&vs(D,g),h&&(D.g=h),R&&ws(D,R),d&&(D.h=d),g=D}return d=a.G,h=a.wa,d&&h&&pe(g,d,h),pe(g,"VER",a.ka),ks(a,g),g}function qp(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ie(new Ku({ab:d})):new Ie(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hp(){}t=Hp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ha(){}ha.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ke.call(this),this.g=new Vp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new hi(this)}m(_t,Ke),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Yu(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Mu(a),a=d);h.i.push(new $E(h.Ya++,a)),h.I==3&&ua(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Yu(this.g),delete this.g,_t.Z.N.call(this)};function Wp(a){ju.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Wp,ju);function Gp(){Fu.call(this),this.status=1}m(Gp,Fu);function hi(a){this.g=a}m(hi,Hp),hi.prototype.ra=function(){rt(this.g,"a")},hi.prototype.qa=function(a){rt(this.g,new Wp(a))},hi.prototype.pa=function(a){rt(this.g,new Gp)},hi.prototype.oa=function(){rt(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Kv=function(){return new ha},Gv=function(){return na()},Wv=Rr,Uh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,Za=ra,up.COMPLETE="complete",Hv=up,ip.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,$s=ip,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,qv=Ie}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let as="12.11.0";function hC(t){as=t}/**
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
 */const ei=new Zd("@firebase/firestore");function fi(){return ei.logLevel}function $(t,...e){if(ei.logLevel<=te.DEBUG){const n=e.map(hf);ei.debug(`Firestore (${as}): ${t}`,...n)}}function Sn(t,...e){if(ei.logLevel<=te.ERROR){const n=e.map(hf);ei.error(`Firestore (${as}): ${t}`,...n)}}function ti(t,...e){if(ei.logLevel<=te.WARN){const n=e.map(hf);ei.warn(`Firestore (${as}): ${t}`,...n)}}function hf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qv(t,r,n)}function Qv(t,e,n){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qv(e,i,r)}function X(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Yv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class fC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pC{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new Yv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class mC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _C(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_C(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function zh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Vc(i)===Vc(s)?ne(i,s):Vc(i)?1:-1}return ne(t.length,e.length)}const vC=55296,wC=57343;function Vc(t){const e=t.charCodeAt(0);return e>=vC&&e<=wC}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Vg="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=en.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),i=en.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?en.extractNumericId(e).compare(en.extractNumericId(n)):zh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ur.fromString(e.substring(4,e.length-2))}}class he extends en{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const EC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends en{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return EC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vg}static keyField(){return new $e([Vg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(he.fromString(e))}static fromName(e){return new H(he.fromString(e).popFirst(5))}static empty(){return new H(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new he(e.slice()))}}/**
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
 */function Xv(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TC(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Og(t){if(!H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lg(t){if(H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ko(t,e){if(!Jv(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const Mg=-62135596800,jg=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jg);return new de(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Mg)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ko(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Ne("string",de._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new de(0,0))}static max(){return new Y(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Co=-1;function IC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new pr(i,H.empty(),e)}function xC(t){return new pr(t.readTime,t.key,Co)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Y.min(),H.empty(),Co)}static max(){return new pr(Y.max(),H.empty(),Co)}}function SC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ls(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==AC)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vu.ce=-1;/**
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
 */const ff=-1;function wu(t){return t==null}function jl(t){return t===0&&1/t==-1/0}function PC(t){return typeof t=="number"&&Number.isInteger(t)&&!jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zv="";function RC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Fg(e)),e=NC(t.get(n),e);return Fg(e)}function NC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Zv:n+="";break;default:n+=s}}return n}function Fg(t){return t+Zv+""}/**
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
 */function Ug(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Le($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tw("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const bC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=bC.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */const nw="server_timestamp",rw="__type__",iw="__previous_value__",sw="__local_write_time__";function pf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[rw])==null?void 0:r.stringValue)===nw}function Eu(t){const e=t.mapValue.fields[iw];return pf(e)?Eu(e):e}function Po(t){const e=mr(t.mapValue.fields[sw].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class DC{constructor(e,n,r,i,s,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Fl="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||Fl}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===Fl}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}function VC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(t.options.projectId,e)}/**
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
 */const ow="__type__",aw="__max__",Da={mapValue:{fields:{__type__:{stringValue:aw}}}},lw="__vector__",Ul="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pf(t)?4:LC(t)?9007199254740991:OC(t)?10:11:Q(28295,{value:t})}function hn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gr(i.bytesValue).isEqual(gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?jl(o)===jl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ug(o)!==Ug(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function No(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Bg(t.timestampValue,e.timestampValue);case 4:return Bg(Po(t),Po(e));case 5:return zh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=gr(s),u=gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $g(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,w,k,b;const l=s.fields||{},u=o.fields||{},c=(y=l[Ul])==null?void 0:y.arrayValue,f=(w=u[Ul])==null?void 0:w.arrayValue,m=ne(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return m!==0?m:$g(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Da.mapValue&&o===Da.mapValue)return 0;if(s===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=zh(u[m],f[m]);if(y!==0)return y;const w=Xi(l[u[m]],c[f[m]]);if(w!==0)return w}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=mr(t),r=mr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function $g(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Ji(t){return Bh(t)}function Bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bh(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function el(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eu(t);return e?16+el(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+el(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xr(r.fields,(s,o)=>{i+=s.length+el(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function qg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $h(t){return!!t&&"integerValue"in t}function mf(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function Wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tl(t){return!!t&&"mapValue"in t}function OC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ow])==null?void 0:r.stringValue)===lw}function ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return{...t}}function LC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aw}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(ro(this.value))}}function uw(t){const e=[];return xr(t.fields,(n,r)=>{const i=new $e([n]);if(tl(r)){const s=uw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zl{constructor(e,n){this.position=e,this.inclusive=n}}function Gg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function MC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cw{}class Re extends cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FC(e,n,r):n==="array-contains"?new BC(e,r):n==="in"?new $C(e,r):n==="not-in"?new qC(e,r):n==="array-contains-any"?new HC(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UC(e,r):new zC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xi(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends cw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qt(e,n)}matches(e){return hw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hw(t){return t.op==="and"}function dw(t){return jC(t)&&hw(t)}function jC(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function qh(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(dw(t))return t.filters.map(e=>qh(e)).join(",");{const e=t.filters.map(n=>qh(n)).join(",");return`${t.op}(${e})`}}function fw(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&hn(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&fw(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function pw(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(pw).join(" ,")+"}"}(t):"Filter"}class FC extends Re{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class UC extends Re{constructor(e,n){super(e,"in",n),this.keys=mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zC extends Re{constructor(e,n){super(e,"not-in",n),this.keys=mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class BC extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mf(n)&&No(n.arrayValue,this.value)}}class $C extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class qC extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!No(this.value.arrayValue,n)}}class HC extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
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
 */class WC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Qg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WC(t,e,n,r,i,s,o)}function gf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.Te=n}return e.Te}function yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kg(t.startAt,e.startAt)&&Kg(t.endAt,e.endAt)}function Hh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function GC(t,e,n,r,i,s,o,l){return new cs(t,e,n,r,i,s,o,l)}function _f(t){return new cs(t)}function Yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KC(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function gw(t){return t.collectionGroup!==null}function io(t){const e=X(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new bo(s,r))}),n.has($e.keyField().canonicalString())||e.Ee.push(new bo($e.keyField(),r))}return e.Ee}function ln(t){const e=X(t);return e.Ie||(e.Ie=QC(e,io(t))),e.Ie}function QC(t,e){if(t.limitType==="F")return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bo(i.field,s)});const n=t.endAt?new zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zl(t.startAt.position,t.startAt.inclusive):null;return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e){const n=t.filters.concat([e]);return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function YC(t,e){const n=t.explicitOrderBy.concat([e]);return new cs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Gh(t,e,n){return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return yf(ln(t),ln(e))&&t.limitType===e.limitType}function yw(t){return`${gf(ln(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pw(i)).join(", ")}]`),wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Gg(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const c=Gg(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,io(r),i))}(t,e)}function XC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _w(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=JC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Xi(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ew(this.inner)}size(){return this.innerSize}}/**
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
 */const ZC=new Te(H.comparator);function An(){return ZC}const vw=new Te(H.comparator);function qs(...t){let e=vw;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=vw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return so()}function Ew(){return so()}function so(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const e2=new Te(H.comparator),t2=new Le(H.comparator);function re(...t){let e=t2;for(const n of t)e=e.add(n);return e}const n2=new Le(ne);function r2(){return n2}/**
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
 */function vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jl(e)?"-0":e}}function Tw(t){return{integerValue:""+t}}function i2(t,e){return PC(e)?Tw(e):vf(t,e)}/**
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
 */class xu{constructor(){this._=void 0}}function s2(t,e,n){return t instanceof Do?function(i,s){const o={fields:{[rw]:{stringValue:nw},[sw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pf(s)&&(s=Eu(s)),s&&(o.fields[iw]=s),{mapValue:o}}(n,e):t instanceof Vo?xw(t,e):t instanceof Oo?Sw(t,e):function(i,s){const o=Iw(i,s),l=Xg(o)+Xg(i.Ae);return $h(o)&&$h(i.Ae)?Tw(l):vf(i.serializer,l)}(t,e)}function o2(t,e,n){return t instanceof Vo?xw(t,e):t instanceof Oo?Sw(t,e):n}function Iw(t,e){return t instanceof Bl?function(r){return $h(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Do extends xu{}class Vo extends xu{constructor(e){super(),this.elements=e}}function xw(t,e){const n=Aw(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends xu{constructor(e){super(),this.elements=e}}function Sw(t,e){let n=Aw(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class Bl extends xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xg(t){return Ae(t.integerValue||t.doubleValue)}function Aw(t){return mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class a2{constructor(e,n){this.field=e,this.transform=n}}function l2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Vo&&i instanceof Vo||r instanceof Oo&&i instanceof Oo?Yi(r.elements,i.elements,hn):r instanceof Bl&&i instanceof Bl?hn(r.Ae,i.Ae):r instanceof Do&&i instanceof Do}(t.transform,e.transform)}class u2{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Su{}function kw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wf(t.key,Ht.none()):new Qo(t.key,t.data,Ht.none());{const n=t.data,r=dt.empty();let i=new Le($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new Et(i.toArray()),Ht.none())}}function c2(t,e,n){t instanceof Qo?function(i,s,o){const l=i.value.clone(),u=Zg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Cw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Qo?function(s,o,l,u){if(!nl(s.precondition,o))return l;const c=s.value.clone(),f=ey(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,l,u){if(!nl(s.precondition,o))return l;const c=ey(s.fieldTransforms,u,o),f=o.data;return f.setAll(Cw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function h2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Iw(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>l2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends Su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,o2(o,l,n[i]))}return r}function ey(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s2(s,o,e))}return r}class wf extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d2 extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class f2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ew();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=kw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>Jg(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>Jg(n,r))}}class Ef{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return e2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ef(e,n,r,i)}}/**
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
 */class p2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class m2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,ie;function g2(t){switch(t){case O.OK:return Q(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Pw(t){if(t===void 0)return Sn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ce.OK:return O.OK;case Ce.CANCELLED:return O.CANCELLED;case Ce.UNKNOWN:return O.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return O.INTERNAL;case Ce.UNAVAILABLE:return O.UNAVAILABLE;case Ce.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ce.NOT_FOUND:return O.NOT_FOUND;case Ce.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ce.ABORTED:return O.ABORTED;case Ce.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ce.DATA_LOSS:return O.DATA_LOSS;default:return Q(39323,{code:t})}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function y2(){return new TextEncoder}/**
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
 */const _2=new ur([4294967295,4294967295],0);function ty(t){const e=y2().encode(t),n=new $v;return n.update(e),new Uint8Array(n.digest())}function ny(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ur([n,r],0),new ur([i,s],0)]}class Tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ur.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ur.fromNumber(r)));return i.compare(_2)===1&&(i=new ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ty(e),[r,i]=ny(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=ty(e),[r,i]=ny(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Au{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(Y.min(),i,new Te(ne),An(),re())}}class Yo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yo(r,n,re(),re(),re())}}/**
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
 */class rl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Rw{constructor(e,n){this.targetId=e,this.Ce=n}}class Nw{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ry{constructor(){this.ve=0,this.Fe=iy(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Yo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=iy()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class v2{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=Va(),this.He=Va(),this.Ze=new Te(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Hh(s))if(r===0){const o=new H(s.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(u){if(u instanceof tw)return ti("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tf(o,i,s)}catch(u){return ti(u instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Hh(l.target)){const u=new H(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Au(e,n,this.Ze,this.je,r);return this.je=An(),this.Je=Va(),this.He=Va(),this.Ze=new Te(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ry,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ry),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Va(){return new Te(H.comparator)}function iy(){return new Te(H.comparator)}const w2={asc:"ASCENDING",desc:"DESCENDING"},E2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T2={and:"AND",or:"OR"};class I2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kh(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function $l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function x2(t,e){return $l(t,e.toTimestamp())}function un(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=mr(n);return new de(r.seconds,r.nanos)}(t))}function If(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dw(t){const e=he.fromString(t);return oe(jw(e),10190,{key:e.toString()}),e}function Yh(t,e){return If(t.databaseId,e.path)}function Oc(t,e){const n=Dw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Ow(n))}function Vw(t,e){return If(t.databaseId,e)}function S2(t){const e=Dw(t);return e.length===4?he.emptyPath():Ow(e)}function Xh(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ow(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sy(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function A2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ge.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:Pw(c.code);return new B(f,c.message||"")}(o);n=new Nw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new rl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?un(r.readTime):Y.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new rl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new m2(i,s),l=r.targetId;n=new Rw(l,o)}}return n}function k2(t,e){let n;if(e instanceof Qo)n={update:sy(t,e.key,e.value)};else if(e instanceof wf)n={delete:Yh(t,e.key)};else if(e instanceof Sr)n={update:sy(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof d2))return Q(16599,{dt:e.type});n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Do)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:x2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function C2(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(Y.min())&&(o=un(s)),new u2(o,i.transformResults||[])}(n,e))):[]}function P2(t,e){return{documents:[Vw(t,e.path)]}}function R2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vw(t,i);const s=function(c){if(c.length!==0)return Mw(Qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:mi(y.field),direction:D2(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function N2(t){let e=S2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=Lw(m);return y instanceof Qt&&dw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(k){return new bo(gi(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,wu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,w=m.values||[];return new zl(w,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,w=m.values||[];return new zl(w,y)}(n.endAt)),GC(e,i,o,s,l,"F",u,c)}function b2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gi(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gi(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Re.create(gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>Lw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function D2(t){return w2[t]}function V2(t){return E2[t]}function O2(t){return T2[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return $e.fromServerFormat(t.fieldPath)}function Mw(t){return t instanceof Re?function(n){if(n.op==="=="){if(Wg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:V2(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>Mw(i));return r.length===1?r[0]:{compositeFilter:{op:O2(n.op),filters:r}}}(t):Q(54877,{filter:t})}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Fw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Yn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class M2{constructor(e){this.yt=e}}function j2(t){const e=N2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
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
 */class F2{constructor(){this.bn=new U2}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(pr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class U2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(he.comparator)).toArray()}}/**
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
 */const oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uw=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(Uw,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
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
 */class Zi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Zi(0)}static ar(){return new Zi(-1)}}/**
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
 */const ay="LruGarbageCollector",z2=1048576;function ly([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class B2{constructor(e){this.Pr=e,this.buffer=new Le(ly),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ly(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){us(n)?$(ay,"Ignoring IndexedDB error during garbage collection: ",n):await ls(n)}await this.Ar(3e5)})}}class q2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(vu.ce);const r=new B2(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),fi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function H2(t,e){return new q2(t,e)}/**
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
 */class W2{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class K2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oo(r.mutation,i,Et.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=so(),l=function(){return so()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Sr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),oo(f.mutation,c,f.mutation.getFieldMask(),de.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new G2(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=so();let i=new Te((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=Ew();f.forEach(y=>{if(!s.has(y)){const w=kw(n.get(y),r.get(y));w!==null&&m.set(y,w),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return KC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(zr());let l=Co,u=s;return o.next(c=>L.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:ww(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(m,y){return new cs(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=qs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&oo(f.mutation,c,Et.empty(),de.now()),Iu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Q2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:j2(i.bundledQuery),readTime:un(i.readTime)}}(n)),L.resolve()}}/**
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
 */class Y2{constructor(){this.overlays=new Te(H.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=zr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p2(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class X2{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class xf{constructor(){this.kr=new Le(je.qr),this.Kr=new Le(je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new je(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new he([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new H(new he([])),r=new je(n,e),i=new je(n,e+1);let s=re();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return H.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
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
 */class J2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Le(je.qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new f2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?ff:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new je(new H(s),0);let l=new Le(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new je(n,0),i=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Z2{constructor(e){this.ti=e,this.docs=function(){return new Te(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||SC(xC(f),r)<=0||(i.has(f.key)||Iu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eP(this)}getSize(e){return L.resolve(this.size)}}class eP extends W2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class tP{constructor(e){this.persistence=e,this.ri=new ai(n=>gf(n),yf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new xf,this.targetCount=0,this.oi=Zi._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class zw{constructor(e,n){this._i={},this.overlays={},this.ai=new vu(0),this.ui=!1,this.ui=!0,this.ci=new X2,this.referenceDelegate=e(this),this.li=new tP(this),this.indexManager=new F2,this.remoteDocumentCache=function(i){return new Z2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new M2(n),this.Pi=new Q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new J2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new nP(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class nP extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class Sf{constructor(e){this.persistence=e,this.Ri=new xf,this.Ai=null}static Vi(e){return new Sf(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ql{constructor(e,n){this.persistence=e,this.fi=new ai(r=>RC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=H2(this,n)}static Vi(e,n){return new ql(e,n)}Ti(){}Ei(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=el(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Af{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Af(e,n.fromCache,r,i)}}/**
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
 */class rP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Rx()?8:CC(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rP;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(fi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(fi()<=te.DEBUG&&$("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(fi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):L.resolve())}gs(e,n){if(Yg(n))return L.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Gh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Yg(n)||i.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?L.resolve(null):(fi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.Ds(e,o,n,IC(i,Co)).next(l=>l))})}Ss(e,n){let r=new Le(_w(e));return n.forEach((i,s)=>{Iu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return fi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",pi(n)),this.fs.getDocumentsMatchingQuery(e,n,pr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const kf="LocalStore",sP=3e8;class oP{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Te(ne),this.Fs=new ai(s=>gf(s),yf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function aP(t,e,n,r){return new oP(t,e,n,r)}async function Bw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function lP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,y=m.keys();let w=L.resolve();return y.forEach(k=>{w=w.next(()=>f.getEntry(u,k)).next(b=>{const V=c.docVersions.get(k);oe(V!==null,48541),b.version.compareTo(V)<0&&(m.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),f.addEntry(b)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $w(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function uP(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,m)));let w=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(m,w),function(b,V,x){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=sP?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,w,f)&&l.push(n.li.updateTargetData(s,w))});let u=An(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(cP(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function cP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(kf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function hP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ff),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!us(o))throw o;$(kf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function uy(t,e,n){const r=X(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=X(u),y=m.Fs.get(f);return y!==void 0?L.resolve(m.vs.get(y)):m.li.getTargetData(c,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(fP(r,XC(e),l),{documents:l,ks:s})))}function fP(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class cy{constructor(){this.activeTargetIds=r2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pP{constructor(){this.vo=new cy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mP{Mo(e){}shutdown(){}}/**
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
 */const hy="ConnectivityMonitor";class dy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(hy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function Zh(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
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
 */const Lc="RestConnection",gP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class yP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Fl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Zh(),l=this.Qo(e,n.toUriEncodedString());$(Lc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=qo(c);return this.zo(e,l,u,r,f).then(m=>($(Lc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ti(Lc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=gP[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class _P{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Xe="WebChannelConnection",Ls=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Fi extends yP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fi.c_){const e=Gv();Ls(e,Wv.STAT_EVENT,n=>{n.stat===Uh.PROXY?$(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===Uh.NOPROXY&&$(Xe,"STAT_EVENT: detected no buffering proxy")}),Fi.c_=!0}}zo(e,n,r,i,s){const o=Zh();return new Promise((l,u)=>{const c=new qv;c.setWithCredentials(!0),c.listenOnce(Hv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Za.NO_ERROR:const m=c.getResponseJson();$(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Za.TIMEOUT:$(Xe,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const y=c.getStatus();if($(Xe,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const b=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(T)>=0?T:O.UNKNOWN}(k.status);u(new B(b,k.message))}else u(new B(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(Xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Xe,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Zh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.E_(f);let m=!1,y=!1;const w=new _P({Jo:k=>{y?$(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||($(Xe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),$(Xe,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ho:()=>f.close()});return Ls(f,$s.EventType.OPEN,()=>{y||($(Xe,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),Ls(f,$s.EventType.CLOSE,()=>{y||(y=!0,$(Xe,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(f))}),Ls(f,$s.EventType.ERROR,k=>{y||(y=!0,ti(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),w.o_(new B(O.UNAVAILABLE,"The operation could not be completed")))}),Ls(f,$s.EventType.MESSAGE,k=>{var b;if(!y){const V=k.data[0];oe(!!V,16349);const x=V,T=(x==null?void 0:x.error)||((b=x[0])==null?void 0:b.error);if(T){$(Xe,`RPC '${e}' stream ${i} received error:`,T);const C=T.status;let N=function(v){const _=Ce[v];if(_!==void 0)return Pw(_)}(C),M=T.message;C==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&ti(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=O.INTERNAL,M="Unknown error status: "+C+" with message "+T.message),y=!0,w.o_(new B(N,M)),f.close()}else $(Xe,`RPC '${e}' stream ${i} received:`,V),w.__(V)}}),Fi.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Kv()}}/**
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
 */function vP(t){return new Fi(t)}function Mc(){return typeof document<"u"?document:null}/**
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
 */function ku(t){return new I2(t,!0)}/**
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
 */Fi.c_=!1;class qw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const fy="PersistentStream";class Hw{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wP extends Hw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=A2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?un(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Hh(u)?{documents:P2(s,u)}:{query:R2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bw(s,o.resumeToken);const c=Kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=$l(s,o.snapshotVersion.toTimestamp());const c=Kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=b2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.q_(n)}}class EP extends Hw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=C2(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k2(this.serializer,r))};this.q_(n)}}/**
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
 */class TP{}class IP extends TP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function xP(t,e,n,r){return new IP(t,e,n,r)}class SP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ni="RemoteStore";class AP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{li(this)&&($(ni,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ia.add(4),await Xo(c),c.Va.set("Unknown"),c.Ia.delete(4),await Cu(c)}(this))})}),this.Va=new SP(r,i)}}async function Cu(t){if(li(t))for(const e of t.Ra)await e(!0)}async function Xo(t){for(const e of t.Ra)await e(!1)}function Ww(t,e){const n=X(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Nf(n)?Rf(n):hs(n).O_()&&Pf(n,e))}function Cf(t,e){const n=X(t),r=hs(n);n.Ea.delete(e),r.O_()&&Gw(n,e),n.Ea.size===0&&(r.O_()?r.L_():li(n)&&n.Va.set("Unknown"))}function Pf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).Z_(e)}function Gw(t,e){t.da.$e(e),hs(t).X_(e)}function Rf(t){t.da=new v2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.Va.ua()}function Nf(t){return li(t)&&!hs(t).x_()&&t.Ea.size>0}function li(t){return X(t).Ia.size===0}function Kw(t){t.da=void 0}async function kP(t){t.Va.set("Online")}async function CP(t){t.Ea.forEach((e,n)=>{Pf(t,e)})}async function PP(t,e){Kw(t),Nf(t)?(t.Va.ha(e),Rf(t)):t.Va.set("Unknown")}async function RP(t,e,n){if(t.Va.set("Online"),e instanceof Nw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){$(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(t,r)}else if(e instanceof rl?t.da.Xe(e):e instanceof Rw?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await $w(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(c);f&&s.Ea.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),Gw(s,u);const m=new Yn(f.target,u,c,f.sequenceNumber);Pf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ni,"Failed to raise snapshot:",r),await Hl(t,r)}}async function Hl(t,e,n){if(!us(e))throw e;t.Ia.add(1),await Xo(t),t.Va.set("Offline"),n||(n=()=>$w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ni,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Cu(t)})}function Qw(t,e){return e().catch(n=>Hl(t,n,e))}async function Pu(t){const e=X(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ff;for(;NP(e);)try{const i=await hP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,bP(e,i)}catch(i){await Hl(e,i)}Yw(e)&&Xw(e)}function NP(t){return li(t)&&t.Ta.length<10}function bP(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Yw(t){return li(t)&&!_r(t).x_()&&t.Ta.length>0}function Xw(t){_r(t).start()}async function DP(t){_r(t).ra()}async function VP(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function OP(t,e,n){const r=t.Ta.shift(),i=Ef.from(r,e,n);await Qw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Pu(t)}async function LP(t,e){e&&_r(t).Y_&&await async function(r,i){if(function(o){return g2(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();_r(r).B_(),await Qw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pu(r)}}(t,e),Yw(t)&&Xw(t)}async function py(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(ni,"RemoteStore received new credentials");const r=li(n);n.Ia.add(3),await Xo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Cu(n)}async function MP(t,e){const n=X(t);e?(n.Ia.delete(2),await Cu(n)):e||(n.Ia.add(2),await Xo(n),n.Va.set("Unknown"))}function hs(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new wP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:kP.bind(null,t),Yo:CP.bind(null,t),t_:PP.bind(null,t),H_:RP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Nf(t)?Rf(t):t.Va.set("Unknown")):(await t.ma.stop(),Kw(t))})),t.ma}function _r(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new EP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:DP.bind(null,t),t_:LP.bind(null,t),ta:VP.bind(null,t),na:OP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Pu(t)):(await t.fa.stop(),t.Ta.length>0&&($(ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new bf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Df(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),us(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ui{static emptySet(e){return new Ui(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class my{constructor(){this.ga=new Te(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new es(e,n,Ui.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class FP{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=gy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function gy(){return new ai(t=>yw(t),Tu)}async function Jw(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new jP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Df(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Vf(n)}async function Zw(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UP(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Vf(n)}function zP(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Vf(t){t.Ca.forEach(e=>{e.next()})}var ed,yy;(yy=ed||(ed={})).Ma="default",yy.Cache="cache";class eE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ed.Cache}}/**
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
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class BP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=_w(e),this.tu=new Ui(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new my,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),w=Iu(this.query,m)?m:null,k=!!y&&this.mutatedKeys.has(y.key),b=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;y&&w?y.data.isEqual(w.data)?k!==b&&(r.track({type:3,doc:w}),V=!0):this.su(y,w)||(r.track({type:2,doc:w}),V=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!y&&w?(r.track({type:0,doc:w}),V=!0):y&&!w&&(r.track({type:1,doc:y}),V=!0,(u||c)&&(l=!0)),V&&(w?(o=o.add(w),s=b?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(w,k){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:V})}};return b(w)-b(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new es(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new my,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new nE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Of="SyncEngine";class $P{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qP{constructor(e){this.key=e,this.hu=!1}}class HP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ai(l=>yw(l),Tu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Te(H.comparator),this.Au=new Map,this.Vu=new xf,this.du={},this.mu=new Map,this.fu=Zi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function WP(t,e,n=!0){const r=lE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await rE(r,e,n,!0),i}async function GP(t,e){const n=lE(t);await rE(n,e,!0,!1)}async function rE(t,e,n,r){const i=await dP(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ww(t.remoteStore,i),l}async function KP(t,e,n,r,i){t.pu=(m,y,w)=>async function(b,V,x,T){let C=V.view.ru(x);C.bs&&(C=await uy(b.localStore,V.query,!1).then(({documents:v})=>V.view.ru(v,C)));const N=T&&T.targetChanges.get(V.targetId),M=T&&T.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(C,b.isPrimaryClient,N,M);return vy(b,V.targetId,F.au),F.snapshot}(t,m,y,w);const s=await uy(t.localStore,e,!0),o=new BP(e,s.ks),l=o.ru(s.documents),u=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);vy(t,n,c.au);const f=new $P(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function QP(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Tu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Cf(r.remoteStore,i.targetId),td(r,i.targetId)}).catch(ls)):(td(r,i.targetId),await Jh(r.localStore,i.targetId,!0))}async function YP(t,e){const n=X(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Cf(n.remoteStore,r.targetId))}async function XP(t,e,n){const r=iR(t);try{const i=await function(o,l){const u=X(o),c=de.now(),f=l.reduce((w,k)=>w.add(k.key),re());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=An(),b=re();return u.xs.getEntries(w,f).next(V=>{k=V,k.forEach((x,T)=>{T.isValidDocument()||(b=b.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,k)).next(V=>{m=V;const x=[];for(const T of l){const C=h2(T,m.get(T.key).overlayedDocument);C!=null&&x.push(new Sr(T.key,C,uw(C.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,x,l)}).next(V=>{y=V;const x=V.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(w,V.batchId,x)})}).then(()=>({batchId:y.batchId,changes:ww(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Te(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await Jo(r,i.changes),await Pu(r.remoteStore)}catch(i){const s=Df(i,"Failed to persist write");n.reject(s)}}async function iE(t,e){const n=X(t);try{const r=await uP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await Jo(n,r,e)}catch(r){await ls(r)}}function _y(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(l)&&(c=!0)}),c&&Vf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te(H.comparator);o=o.insert(s,et.newNoDocument(s,Y.min()));const l=re().add(s),u=new Au(Y.min(),new Map,new Te(ne),o,l);await iE(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Lf(r)}else await Jh(r.localStore,e,!1).then(()=>td(r,e,n)).catch(ls)}async function ZP(t,e){const n=X(t),r=e.batch.batchId;try{const i=await lP(n.localStore,e);oE(n,r,null),sE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jo(n,i)}catch(i){await ls(i)}}async function eR(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);oE(r,e,n),sE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jo(r,i)}catch(i){await ls(i)}}function sE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function oE(t,e,n){const r=X(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||aE(t,r)})}function aE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Cf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Lf(t))}function vy(t,e,n){for(const r of n)r instanceof tE?(t.Vu.addReference(r.key,e),tR(t,r)):r instanceof nE?($(Of,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||aE(t,r.key)):Q(19791,{wu:r})}function tR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||($(Of,"New document in limbo: "+n),t.Iu.add(r),Lf(t))}function Lf(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new H(he.fromString(e)),r=t.fu.next();t.Au.set(r,new qP(n)),t.Ru=t.Ru.insert(n,r),Ww(t.remoteStore,new Yn(ln(_f(n.path)),r,"TargetPurposeLimboResolution",vu.ce))}}async function Jo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Af.Is(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(c,y=>L.forEach(y.Ts,w=>f.persistence.referenceDelegate.addReference(m,y.targetId,w)).next(()=>L.forEach(y.Es,w=>f.persistence.referenceDelegate.removeReference(m,y.targetId,w)))))}catch(m){if(!us(m))throw m;$(kf,"Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const w=f.vs.get(y),k=w.snapshotVersion,b=w.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(y,b)}}}(r.localStore,s))}async function nR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(Of,"User change. New user:",e.toKey());const r=await Bw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jo(n,r.Ns)}}function rR(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function lE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JP.bind(null,e),e.Pu.H_=UP.bind(null,e.eventManager),e.Pu.yu=zP.bind(null,e.eventManager),e}function iR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eR.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return aP(this.persistence,new iP,e.initialUser,this.serializer)}Cu(e){return new zw(Sf.Vi,this.serializer)}Du(e){return new pP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class sR extends Wl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof ql,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new zw(r=>ql.Vi(r,n),this.serializer)}}class nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nR.bind(null,this.syncEngine),await MP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FP}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=vP(e.databaseInfo);return xP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new AP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_y(this.syncEngine,n,0),function(){return dy.v()?new dy:new mP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new HP(i,s,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(ni,"RemoteStore shutting down."),s.Ia.add(5),await Xo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}nd.provider={build:()=>new nd};/**
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
 */class uE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const vr="FirestoreClient";class oR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),$(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);$(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>py(e.remoteStore,i)),t._onlineComponents=e}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(vr,"Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new Wl)}}else $(vr,"Using default OfflineComponentProvider"),await jc(t,new sR(void 0));return t._offlineComponents}async function cE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(vr,"Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):($(vr,"Using default OnlineComponentProvider"),await wy(t,new nd))),t._onlineComponents}function lR(t){return cE(t).then(e=>e.syncEngine)}async function rd(t){const e=await cE(t),n=e.eventManager;return n.onListen=WP.bind(null,e.syncEngine),n.onUnlisten=QP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YP.bind(null,e.syncEngine),n}function uR(t,e,n,r){const i=new uE(r),s=new eE(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Jw(await rd(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Zw(await rd(t),s))}}function cR(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new uE({next:y=>{f.Nu(),o.enqueueAndForget(()=>Zw(s,m)),y.fromCache&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new eE(l,f,{includeMetadataChanges:!0,qa:!0});return Jw(s,m)}(await rd(t),t.asyncQueue,e,n,r)),r.promise}function hR(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget(async()=>XP(await lR(t),e,n)),n.promise}/**
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
 */function hE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dR="ComponentProvider",Ey=new Map;function fR(t,e,n,r,i){return new DC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,hE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const dE="firestore.googleapis.com",Ty=!0;class Iy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dE,this.ssl=Ty}else this.host=e.host,this.ssl=e.ssl??Ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<z2)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dC;switch(r.type){case"firstParty":return new gC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ey.get(n);r&&($(dR,"Removing Datastore"),Ey.delete(n),r.terminate())}(this),Promise.resolve()}}function pR(t,e,n,r={}){var c;t=an(t,Ru);const i=qo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&rv(`https://${l}`),s.host!==dE&&s.host!==l&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Xr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Je.MOCK_USER;else{f=Ix(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Je(y)}t._authCredentials=new fC(new Yv(f,m))}}/**
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
 */class Ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ko(n,be._jsonSchema))return new be(e,r||null,new H(he.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Ne("string",be._jsonSchemaVersion),referencePath:Ne("string")};class hr extends Ar{constructor(e,n,r){super(e,n,_f(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new H(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function fE(t,e,...n){if(t=We(t),Xv("collection","path",e),t instanceof Ru){const r=he.fromString(e,...n);return Lg(r),new hr(t,null,r)}{if(!(t instanceof be||t instanceof hr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Lg(r),new hr(t.firestore,null,r)}}function Mf(t,e,...n){if(t=We(t),arguments.length===1&&(e=df.newId()),Xv("doc","path",e),t instanceof Ru){const r=he.fromString(e,...n);return Og(r),new be(t,null,new H(r))}{if(!(t instanceof be||t instanceof hr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Og(r),new be(t.firestore,t instanceof hr?t.converter:null,new H(r))}}/**
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
 */const xy="AsyncQueue";class Sy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qw(this,"async_queue_retry"),this._c=()=>{const r=Mc();r&&$(xy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!us(e))throw e;$(xy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sn("INTERNAL UNHANDLED ERROR: ",Ay(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=bf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:Ay(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ay(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ri extends Ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function mR(t,e){const n=typeof t=="object"?t:av(),r=typeof t=="string"?t:Fl,i=tf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ex("firestore");s&&pR(i,...s)}return i}function jf(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gR(t),t._firestoreClient}function gR(t){var r,i,s,o;const e=t._freezeSettings(),n=fR(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Ge.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ko(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Ne("string",Pt._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class Ff{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nu{constructor(e){this._methodName=e}}/**
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
 */class cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(e){if(Ko(e,cn._jsonSchema))return new cn(e.latitude,e.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:Ne("string",cn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Wt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ko(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wt(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Ne("string",Wt._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const yR=/^__.*__$/;class _R{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}class pE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Uf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Gl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(mE(this.dataSource)&&yR.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class vR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}A(e,n,r,i=!1){return new Uf({dataSource:e,methodName:n,targetDoc:r,path:$e.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zf(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new vR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wR(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);$f("Data must be an object, but it was:",o,r);const l=gE(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=ts(e,m,n);if(!o.contains(y))throw new B(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);vE(f,y)||f.push(y)}u=new Et(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new _R(new dt(l),u,c)}class bu extends Nu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}class Bf extends Nu{_toFieldTransform(e){return new a2(e.path,new Do)}isEqual(e){return e instanceof Bf}}function ER(t,e,n,r){const i=t.A(1,e,n);$f("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();xr(r,(u,c)=>{const f=_E(e,u,n);c=We(c);const m=i.fc(f);if(c instanceof bu)s.push(f);else{const y=Zo(c,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new Et(s);return new pE(o,l,i.fieldTransforms)}function TR(t,e,n,r,i,s){const o=t.A(1,e,n),l=[ts(e,r,n)],u=[i];if(s.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(ts(e,s[y])),u.push(s[y+1]);const c=[],f=dt.empty();for(let y=l.length-1;y>=0;--y)if(!vE(c,l[y])){const w=l[y];let k=u[y];k=We(k);const b=o.fc(w);if(k instanceof bu)c.push(w);else{const V=Zo(k,b);V!=null&&(c.push(w),f.set(w,V))}}const m=new Et(c);return new pE(f,m,o.fieldTransforms)}function IR(t,e,n,r=!1){return Zo(n,t.A(r?4:3,e))}function Zo(t,e){if(yE(t=We(t)))return $f("Unsupported field value:",e,t),gE(t,e);if(t instanceof Nu)return function(r,i){if(!mE(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Zo(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:$l(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$l(i.serializer,s)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:bw(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:If(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wt)return function(o,l){const u=o instanceof Wt?o.toArray():o;return{mapValue:{fields:{[ow]:{stringValue:lw},[Ul]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return vf(l.serializer,f)})}}}}}}(r,i);if(Fw(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${_u(r)}`)}(t,e)}function gE(t,e){const n={};return ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,i)=>{const s=Zo(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof cn||t instanceof Pt||t instanceof be||t instanceof Nu||t instanceof Wt||Fw(t))}function $f(t,e,n){if(!yE(n)||!Jv(n)){const r=_u(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ts(t,e,n){if((e=We(e))instanceof Ff)return e._internalPath;if(typeof e=="string")return _E(t,e);throw Gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const xR=new RegExp("[~\\*/\\[\\]]");function _E(t,e,n){if(e.search(xR)>=0)throw Gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ff(...e.split("."))._internalPath}catch{throw Gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function vE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SR{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ul].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new Wt(n)}convertGeoPoint(e){return new cn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Eu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=mr(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);oe(jw(r),9688,{name:e});const i=new Ro(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class qf extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function Kl(){return new Bf("serverTimestamp")}const ky="@firebase/firestore",Cy="4.13.0";/**
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
 */function Py(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class wE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ts("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AR extends wE{data(){return super.data()}}/**
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
 */function EE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hf{}class TE extends Hf{}function IE(t,e,...n){let r=[];e instanceof Hf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gf).length,l=s.filter(u=>u instanceof Wf).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Wf extends TE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wf(e,n,r)}_apply(e){const n=this._parse(e);return SE(e._query,n),new Ar(e.firestore,e.converter,Wh(e._query,n))}_parse(e){const n=zf(e.firestore);return function(s,o,l,u,c,f,m){let y;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ny(m,f);const k=[];for(const b of m)k.push(Ry(u,s,b));y={arrayValue:{values:k}}}else y=Ry(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ny(m,f),y=IR(l,o,m,f==="in"||f==="not-in");return Re.create(c,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Gf extends Hf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)SE(o,u),o=Wh(o,u)}(e._query,n),new Ar(e.firestore,e.converter,Wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kf extends TE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bo(s,o)}(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,YC(e._query,n))}}function xE(t,e="asc"){const n=e,r=ts("orderBy",t);return Kf._create(r,n)}function Ry(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!H.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qg(t,new H(r))}if(n instanceof be)return qg(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_u(n)}.`)}function Ny(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function kR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends wE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ts("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Ne("string",qr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class il extends qr{data(e={}){return super.data(e)}}class Hr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ws(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new il(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ws(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ws(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CR(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Hr._jsonSchemaVersion="firestore/querySnapshot/1.0",Hr._jsonSchema={type:Ne("string",Hr._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};function PR(t){t=an(t,Ar);const e=an(t.firestore,ri),n=jf(e),r=new qf(e);return EE(t._query),cR(n,t._query).then(i=>new Hr(e,r,t,i))}function RR(t,e,n,...r){t=an(t,be);const i=an(t.firestore,ri),s=zf(i);let o;return o=typeof(e=We(e))=="string"||e instanceof Ff?TR(s,"updateDoc",t._key,e,n,r):ER(s,"updateDoc",t._key,e),Qf(i,[o.toMutation(t._key,Ht.exists(!0))])}function NR(t){return Qf(an(t.firestore,ri),[new wf(t._key,Ht.none())])}function Ql(t,e){const n=an(t.firestore,ri),r=Mf(t),i=kR(t.converter,e),s=zf(t.firestore);return Qf(n,[wR(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function AE(t,...e){var c,f,m;t=We(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Py(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Py(e[r])){const y=e[r];e[r]=(c=y.next)==null?void 0:c.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let s,o,l;if(t instanceof be)o=an(t.firestore,ri),l=_f(t._key.path),s={next:y=>{e[r]&&e[r](bR(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=an(t,Ar);o=an(y.firestore,ri),l=y._query;const w=new qf(o);s={next:k=>{e[r]&&e[r](new Hr(o,w,y,k))},error:e[r+1],complete:e[r+2]},EE(t._query)}const u=jf(o);return uR(u,l,i,s)}function Qf(t,e){const n=jf(t);return hR(n,e)}function bR(t,e,n){const r=n.docs.get(e._key),i=new qf(t);return new qr(t,i,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){hC(ss),Ki(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ri(new pC(r.getProvider("auth-internal")),new yC(o,r.getProvider("app-check-internal")),VC(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ar(ky,Cy,e),ar(ky,Cy,"esm2020")})();const DR={apiKey:"AIzaSyAc_AA-eVoBy-8nOIiAd4jm5YPlZ6MM5HM",authDomain:"arcoworkflow-09203615-de0d1.firebaseapp.com",projectId:"arcoworkflow-09203615-de0d1",storageBucket:"arcoworkflow-09203615-de0d1.firebasestorage.app",messagingSenderId:"412018727946",appId:"1:412018727946:web:82a8db3d07074f8cfb13f3"},kE=ov(DR),La=uC(kE),CE=mR(kE),VR=()=>{const[t,e]=W.useState(!0),[n,r]=W.useState(""),[i,s]=W.useState(null),[o,l]=W.useState(!0),[u,c]=W.useState(!1),f=k=>{var V;const b=k.email===ax?"admin":"user";return{uid:k.uid,name:k.displayName||((V=k.email)==null?void 0:V.split("@")[0])||"Utilizador",email:k.email||"",role:b}};return W.useEffect(()=>{const k=La.onAuthStateChanged(b=>{b?(s(f(b)),l(!0)):s(null),e(!1)});return()=>k()},[]),{authLoading:t,authError:n,currentUser:i,showSplash:o,setShowSplash:l,resetSent:u,handleLogin:async k=>{e(!0),r("");try{await YA(La,k.email,k.password)}catch(b){const V=b;V.code==="auth/invalid-credential"||V.code==="auth/wrong-password"||V.code==="auth/user-not-found"?r("Email ou password incorretos."):V.code==="auth/too-many-requests"?r("Demasiadas tentativas. Tenta mais tarde ou repõe a password."):r("Erro ao entrar. Verifica os teus dados.")}finally{e(!1)}},handleForgotPassword:async k=>{if(!k){r("Introduz o teu email para repor a password.");return}try{await QA(La,k),c(!0),r("")}catch{r("Não foi possível enviar o email. Verifica o endereço.")}},handleLogout:async()=>{await La.signOut(),s(null),l(!1),c(!1)}}},OR=()=>{const t=[{id:"c1",name:"Politécnico de Leiria",email:"contact@ipleiria.pt",city:"Leiria",nif:"500000001",phone:"244 830 010",address:"Rua General Norton de Matos",zip:"2411-901"},{id:"c2",name:"Nerlei - Associação Empresarial",email:"geral@nerlei.pt",city:"Leiria",nif:"500000002",phone:"244 800 900",address:"Zona Industrial",zip:"2400-000"},{id:"c3",name:"Movicortes S.A.",email:"info@movicortes.pt",city:"Azoia",nif:"500000003",phone:"244 850 240",address:"Estrada Nacional",zip:"2445-000"},{id:"c4",name:"LeiriaMoldes",email:"comercial@leiriamoldes.pt",city:"Marinha Grande",nif:"500000004",phone:"244 500 600",address:"Zona Industrial",zip:"2430-000"},{id:"c5",name:"Restaurante O Matilde",email:"reservas@matilde.pt",city:"Leiria",nif:"500000005",phone:"244 000 000",address:"Praça Rodrigues Lobo",zip:"2400-180"},{id:"c6",name:"Câmara Municipal de Leiria",email:"cmleiria@cm-leiria.pt",city:"Leiria",nif:"500000006",phone:"244 839 500",address:"Largo da República",zip:"2414-006"},{id:"c7",name:"Grupo Lusiaves",email:"info@lusiaves.pt",city:"Leiria",nif:"500000007",phone:"244 800 000",address:"Zona Industrial",zip:"2410-000"},{id:"c8",name:"Void Software",email:"hello@void.pt",city:"Leiria",nif:"500000008",phone:"244 000 111",address:"Rua das Tecnologias",zip:"2400-000"},{id:"c9",name:"La Redoute Portugal",email:"info@laredoute.pt",city:"Leiria",nif:"500000009",phone:"244 000 222",address:"Centro Logístico",zip:"2400-000"},{id:"c10",name:"Jornal de Leiria",email:"redacao@jornaldeleiria.pt",city:"Leiria",nif:"500000010",phone:"244 000 333",address:"Rua da Imprensa",zip:"2400-000"}].map(r=>({...r,createdAt:Date.now()})),e=[],n=["orçamento","agendado","work","faturar","pago"];for(let r=0;r<20;r++){const i=t[Math.floor(Math.random()*t.length)],o=Math.random()>.6?"pago":n[Math.floor(Math.random()*n.length)];e.push({id:`p-${r}-${Date.now()}`,clientId:i.id,title:`Campanha ${Math.floor(Math.random()*2025)} - ${i.name}`,status:o,items:[{id:`item-${r}`,desc:"Serviços de Agência",qty:1,price:Math.floor(Math.random()*1500)+250}],discount:0,urgent:Math.random()>.8,startDate:new Date().toISOString(),endDate:null,createdAt:Date.now()-Math.floor(Math.random()*1e9)})}return{clients:t,projects:e}},Yl=fE(CE,"clients"),ea=fE(CE,"projects"),LR=t=>{const e=IE(Yl,xE("createdAt","asc"));return AE(e,n=>{const r=n.docs.map(i=>({id:i.id,...i.data()}));t(r)})},MR=async t=>({id:(await Ql(Yl,{...t,createdAt:Kl()})).id,...t}),jR=t=>{const e=IE(ea,xE("createdAt","asc"));return AE(e,n=>{const r=n.docs.map(i=>{const s=i.data(),o=s.createdAt instanceof de?s.createdAt.toMillis():s.createdAt??Date.now();return{id:i.id,...s,createdAt:o}});t(r)})},FR=async t=>({id:(await Ql(ea,{...t,createdAt:Kl()})).id,...t}),UR=async(t,e)=>{await RR(Mf(ea,t),e)},zR=async t=>{await NR(Mf(ea,t))},BR=async(t,e)=>{if((await PR(Yl)).empty){for(const r of t)await Ql(Yl,{...r,createdAt:Kl()});for(const r of e)await Ql(ea,{...r,createdAt:Kl()})}},$R=t=>{const[e,n]=W.useState([]),[r,i]=W.useState([]),[s,o]=W.useState(!1),[l,u]=W.useState(null);return W.useEffect(()=>{if(!t)return;o(!0),u(null);const{clients:w,projects:k}=OR();BR(w,k).catch(()=>u("Erro ao inicializar dados."));const b=LR(x=>{n(x),o(!1)}),V=jR(x=>{i(x)});return()=>{b(),V()}},[t]),{clients:e,projects:r,loadingData:s,dataError:l,createClient:async w=>{const k={name:jn(w.name||""),email:jn(w.email||""),phone:jn(w.phone||""),nif:jn(w.nif||""),address:jn(w.address||""),zip:jn(w.zip||""),city:jn(w.city||""),createdAt:Date.now()};return MR(k)},createProject:async w=>{const k={clientId:w.clientId||"",title:jn(w.title||""),status:w.status||"orçamento",items:w.items||[],discount:w.discount||0,urgent:!!w.urgent,startDate:w.startDate||new Date().toISOString(),endDate:w.endDate||null,createdAt:Date.now()};return FR(k)},updateProject:async(w,k)=>{await UR(w,k)},deleteProject:async w=>{await zR(w)}}};function qR(){const{authLoading:t,authError:e,currentUser:n,showSplash:r,setShowSplash:i,resetSent:s,handleLogin:o,handleForgotPassword:l,handleLogout:u}=VR(),{clients:c,projects:f,loadingData:m,createClient:y,createProject:w,updateProject:k,deleteProject:b}=$R(n),[V,x]=W.useState("menu"),[T,C]=W.useState(null),[N,M]=W.useState("todos"),[F,v]=W.useState(""),[_,E]=W.useState(!1),S=(n==null?void 0:n.role)==="admin",A=W.useMemo(()=>f.find(ue=>ue.id===T)||null,[f,T]),P=ue=>{ue.preventDefault(),v(""),window.innerWidth<768?x("menu"):x("stats")};W.useEffect(()=>{window.innerWidth>=768&&V==="menu"&&x("stats")},[V]);const I=W.useMemo(()=>{if(!F)return{projects:[],clients:[]};const ue=F.toLowerCase(),Vt=f.filter(yt=>{var G;const z=((G=c.find(J=>J.id===yt.clientId))==null?void 0:G.name)||"";return yt.title.toLowerCase().includes(ue)||z.toLowerCase().includes(ue)}),kr=c.filter(yt=>yt.name.toLowerCase().includes(ue)||yt.email.toLowerCase().includes(ue)||yt.nif&&yt.nif.includes(ue));return{projects:Vt,clients:kr}},[F,f,c]);return W.useEffect(()=>{F&&I.projects.length+I.clients.length>0&&x("search-results")},[F,I]),t?p.jsx("div",{className:"min-h-screen bg-black"}):n?r?p.jsx(RI,{onComplete:()=>i(!1)}):p.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex font-sans text-slate-900",children:[p.jsx(nx,{view:V,setView:x,setGlobalSearchTerm:v,handleLogout:u,handleLogoClick:P}),p.jsxs("main",{className:"flex-1 w-full bg-[#f8fafc] min-h-screen md:ml-64 transition-all flex flex-col",children:[p.jsx(tx,{currentUser:n,isAdmin:S,globalSearchTerm:F,setGlobalSearchTerm:v,isSearchExpanded:_,setIsSearchExpanded:E,setView:x,handleLogoClick:P}),p.jsxs("div",{className:"flex-1 relative",children:[m&&p.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-blue-500/20 overflow-hidden z-[100]",children:p.jsx("div",{className:"w-1/3 h-full bg-orange-500 animate-slide"})}),V==="menu"&&p.jsx(rx,{setView:x,setFilterStatus:M}),V==="stats"&&p.jsx(sx,{currentUser:n,projects:f,clients:c,setView:x}),V==="projects"&&p.jsx(lx,{projects:f,clients:c,filterStatus:N,setFilterStatus:M,setView:x,setSelectedProjectId:C}),V==="create-project"&&p.jsx(ux,{clients:c,createProject:w,setView:x,setSelectedProjectId:C}),V==="project-detail"&&p.jsx(cx,{selectedProject:A,clients:c,currentUser:n,isAdmin:S,updateProject:k,deleteProject:b,setView:x}),V==="clients"&&p.jsx(hx,{clients:c,createClient:y,setView:x}),V==="search-results"&&p.jsx(dx,{searchResults:I,clients:c,setSelectedProjectId:C,setView:x,setGlobalSearchTerm:v})]})]}),p.jsx("style",{children:`
        @keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
        .animate-slide { animation: slide 1.5s infinite linear; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media print {
          body * { visibility: hidden; }
          .print\\:block, .print\\:block * { visibility: visible; }
          .print\\:block { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `})]}):p.jsx(ex,{loading:t,error:e,resetSent:s,onLogin:o,onForgotPassword:l})}q_(document.getElementById("root")).render(p.jsx(W.StrictMode,{children:p.jsx(qR,{})}));
