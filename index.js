(()=>{var C1=Object.create;var t0=Object.defineProperty;var R1=Object.getOwnPropertyDescriptor;var I1=Object.getOwnPropertyNames;var P1=Object.getPrototypeOf,L1=Object.prototype.hasOwnProperty;var nt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var D1=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of I1(e))!L1.call(t,r)&&r!==n&&t0(t,r,{get:()=>e[r],enumerable:!(i=R1(e,r))||i.enumerable});return t};var zt=(t,e,n)=>(n=t!=null?C1(P1(t)):{},D1(e||!t||!t.__esModule?t0(n,"default",{value:t,enumerable:!0}):n,t));var f0=nt(Ye=>{"use strict";var ta=Symbol.for("react.element"),N1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),F1=Symbol.for("react.strict_mode"),O1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),k1=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),V1=Symbol.for("react.suspense"),H1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),n0=Symbol.iterator;function W1(t){return t===null||typeof t!="object"?null:(t=n0&&t[n0]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,a0={};function Os(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=Os.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}var Pd=Id.prototype=new l0;Pd.constructor=Id;o0(Pd,Os.prototype);Pd.isPureReactComponent=!0;var i0=Array.isArray,c0=Object.prototype.hasOwnProperty,Ld={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c0.call(e,i)&&!u0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:Ld.current}}function X1(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function Y1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var r0=/\/+/g;function Rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y1(""+t.key):e.toString(36)}function ql(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case N1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rd(o,0):i,i0(r)?(n="",t!=null&&(n=t.replace(r0,"$&/")+"/"),ql(r,e,n,"",function(c){return c})):r!=null&&(Dd(r)&&(r=X1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(r0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",i0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rd(s,a);o+=ql(s,e,n,l,r)}else if(l=W1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rd(s,a++),o+=ql(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(t,e,n){if(t==null)return t;var i=[],r=0;return ql(t,i,"","",function(s){return e.call(n,s,r++)}),i}function q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},$l={transition:null},$1={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Ld};function d0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Yl,forEach:function(t,e,n){Yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yl(t,function(){e++}),e},toArray:function(t){return Yl(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Os;Ye.Fragment=U1;Ye.Profiler=O1;Ye.PureComponent=Id;Ye.StrictMode=F1;Ye.Suspense=V1;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Ye.act=d0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c0.call(e,l)&&!u0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:k1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B1,_context:t},t.Consumer=t};Ye.createElement=h0;Ye.createFactory=function(t){var e=h0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:z1,render:t}};Ye.isValidElement=Dd;Ye.lazy=function(t){return{$$typeof:G1,_payload:{_status:-1,_result:t},_init:q1}};Ye.memo=function(t,e){return{$$typeof:H1,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Ye.unstable_act=d0;Ye.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ye.useContext=function(t){return cn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ye.useId=function(){return cn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ye.useRef=function(t){return cn.current.useRef(t)};Ye.useState=function(t){return cn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return cn.current.useTransition()};Ye.version="18.3.1"});var un=nt((kL,p0)=>{"use strict";p0.exports=f0()});var w0=nt(dt=>{"use strict";function Od(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Zl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function ri(t){return t.length===0?null:t[0]}function Kl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Zl(a,n))l<r&&0>Zl(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Zl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Zl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(m0=performance,dt.unstable_now=function(){return m0.now()}):(Nd=Date,g0=Nd.now(),dt.unstable_now=function(){return Nd.now()-g0});var m0,Nd,g0,_i=[],sr=[],Z1=1,Gn=null,Jt=3,jl=!1,Xr=!1,ia=!1,y0=typeof setTimeout=="function"?setTimeout:null,x0=typeof clearTimeout=="function"?clearTimeout:null,v0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Bd(t){for(var e=ri(sr);e!==null;){if(e.callback===null)Kl(sr);else if(e.startTime<=t)Kl(sr),e.sortIndex=e.expirationTime,Od(_i,e);else break;e=ri(sr)}}function kd(t){if(ia=!1,Bd(t),!Xr)if(ri(_i)!==null)Xr=!0,Vd(zd);else{var e=ri(sr);e!==null&&Hd(kd,e.startTime-t)}}function zd(t,e){Xr=!1,ia&&(ia=!1,x0(ra),ra=-1),jl=!0;var n=Jt;try{for(Bd(e),Gn=ri(_i);Gn!==null&&(!(Gn.expirationTime>e)||t&&!E0());){var i=Gn.callback;if(typeof i=="function"){Gn.callback=null,Jt=Gn.priorityLevel;var r=i(Gn.expirationTime<=e);e=dt.unstable_now(),typeof r=="function"?Gn.callback=r:Gn===ri(_i)&&Kl(_i),Bd(e)}else Kl(_i);Gn=ri(_i)}if(Gn!==null)var s=!0;else{var o=ri(sr);o!==null&&Hd(kd,o.startTime-e),s=!1}return s}finally{Gn=null,Jt=n,jl=!1}}var Ql=!1,Jl=null,ra=-1,S0=5,M0=-1;function E0(){return!(dt.unstable_now()-M0<S0)}function Ud(){if(Jl!==null){var t=dt.unstable_now();M0=t;var e=!0;try{e=Jl(!0,t)}finally{e?na():(Ql=!1,Jl=null)}}else Ql=!1}var na;typeof v0=="function"?na=function(){v0(Ud)}:typeof MessageChannel<"u"?(Fd=new MessageChannel,_0=Fd.port2,Fd.port1.onmessage=Ud,na=function(){_0.postMessage(null)}):na=function(){y0(Ud,0)};var Fd,_0;function Vd(t){Jl=t,Ql||(Ql=!0,na())}function Hd(t,e){ra=y0(function(){t(dt.unstable_now())},e)}dt.unstable_IdlePriority=5;dt.unstable_ImmediatePriority=1;dt.unstable_LowPriority=4;dt.unstable_NormalPriority=3;dt.unstable_Profiling=null;dt.unstable_UserBlockingPriority=2;dt.unstable_cancelCallback=function(t){t.callback=null};dt.unstable_continueExecution=function(){Xr||jl||(Xr=!0,Vd(zd))};dt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S0=0<t?Math.floor(1e3/t):5};dt.unstable_getCurrentPriorityLevel=function(){return Jt};dt.unstable_getFirstCallbackNode=function(){return ri(_i)};dt.unstable_next=function(t){switch(Jt){case 1:case 2:case 3:var e=3;break;default:e=Jt}var n=Jt;Jt=e;try{return t()}finally{Jt=n}};dt.unstable_pauseExecution=function(){};dt.unstable_requestPaint=function(){};dt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Jt;Jt=t;try{return e()}finally{Jt=n}};dt.unstable_scheduleCallback=function(t,e,n){var i=dt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Z1++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Od(sr,t),ri(_i)===null&&t===ri(sr)&&(ia?(x0(ra),ra=-1):ia=!0,Hd(kd,n-i))):(t.sortIndex=r,Od(_i,t),Xr||jl||(Xr=!0,Vd(zd))),t};dt.unstable_shouldYield=E0;dt.unstable_wrapCallback=function(t){var e=Jt;return function(){var n=Jt;Jt=e;try{return t.apply(this,arguments)}finally{Jt=n}}}});var A0=nt((VL,T0)=>{"use strict";T0.exports=w0()});var Iy=nt(Nn=>{"use strict";var J1=un(),Ln=A0();function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dv=new Set,Aa={};function rs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(Aa[t]=e,t=0;t<e.length;t++)Dv.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b0={},C0={};function j1(t){return df.call(C0,t)?!0:df.call(b0,t)?!1:K1.test(t)?C0[t]=!0:(b0[t]=!0,!1)}function Q1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eE(t,e,n,i){if(e===null||typeof e>"u"||Q1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,sp);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,sp);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,sp);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function op(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eE(e,n,r,i)&&(n=null),i||r===null?j1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),cp=Symbol.for("react.memo"),ar=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Fv=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var R0=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Gd;function fa(t){if(Gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gd=e&&e[1]||""}return`
`+Gd+t}var Wd=!1;function Xd(t,e){if(!t||Wd)return"";Wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function tE(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Xd(t.type,!1),t;case 11:return t=Xd(t.type.render,!1),t;case 1:return t=Xd(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case zs:return"Portal";case ff:return"Profiler";case ap:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uv:return(t.displayName||"Context")+".Consumer";case Nv:return(t._context.displayName||"Context")+".Provider";case lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cp:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function nE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iE(t){var e=Ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tc(t){t._valueTracker||(t._valueTracker=iE(t))}function Bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function I0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kv(t,e){e=e.checked,e!=null&&op(t,"checked",e,!1)}function _f(t,e){kv(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&yf(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function P0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yf(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(pa(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function zv(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function D0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nc,Hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rE=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){rE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function Gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function Wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sE=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(sE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tf=null,Qs=null,eo=null;function N0(t){if(t=Xa(t)){if(typeof Tf!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=iu(e),Tf(t.stateNode,t.type,e))}}function Xv(t){Qs?eo?eo.push(t):eo=[t]:Qs=t}function Yv(){if(Qs){var t=Qs,e=eo;if(eo=Qs=null,N0(t),e)for(t=0;t<e.length;t++)N0(e[t])}}function qv(t,e){return t(e)}function $v(){}var Yd=!1;function Zv(t,e,n){if(Yd)return t(e,n);Yd=!0;try{return qv(t,e,n)}finally{Yd=!1,(Qs!==null||eo!==null)&&($v(),Yv())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Af=!1;if(Bi)try{Bs={},Object.defineProperty(Bs,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Af=!1}var Bs;function oE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var _a=!1,Ic=null,Pc=!1,bf=null,aE={onError:function(t){_a=!0,Ic=t}};function lE(t,e,n,i,r,s,o,a,l){_a=!1,Ic=null,oE.apply(aE,arguments)}function cE(t,e,n,i,r,s,o,a,l){if(lE.apply(this,arguments),_a){if(_a){var c=Ic;_a=!1,Ic=null}else throw Error(ee(198));Pc||(Pc=!0,bf=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U0(t){if(ss(t)!==t)throw Error(ee(188))}function uE(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return U0(r),t;if(s===i)return U0(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Kv(t){return t=uE(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Qv=Ln.unstable_scheduleCallback,F0=Ln.unstable_cancelCallback,hE=Ln.unstable_shouldYield,dE=Ln.unstable_requestPaint,Ct=Ln.unstable_now,fE=Ln.unstable_getCurrentPriorityLevel,hp=Ln.unstable_ImmediatePriority,e_=Ln.unstable_UserBlockingPriority,Lc=Ln.unstable_NormalPriority,pE=Ln.unstable_LowPriority,t_=Ln.unstable_IdlePriority,Qc=null,Mi=null;function mE(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:_E,gE=Math.log,vE=Math.LN2;function _E(t){return t>>>=0,t===0?32:31-(gE(t)/vE|0)|0}var ic=64,rc=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=n&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function yE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=yE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n_(){var t=ic;return ic<<=1,!(ic&4194240)&&(ic=64),t}function qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function SE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function i_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r_,fp,s_,o_,a_,Rf=!1,sc=[],fr=null,pr=null,mr=null,Ra=new Map,Ia=new Map,cr=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O0(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&fp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function EE(t,e,n,i,r){switch(e){case"focusin":return fr=oa(fr,t,e,n,i,r),!0;case"dragenter":return pr=oa(pr,t,e,n,i,r),!0;case"mouseover":return mr=oa(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,oa(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,oa(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function l_(t){var e=$r(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Jv(n),e!==null){t.blockedOn=e,a_(t.priority,function(){s_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wf=i,n.target.dispatchEvent(i),wf=null}else return e=Xa(n),e!==null&&fp(e),t.blockedOn=n,!1;e.shift()}return!0}function B0(t,e,n){yc(t)&&n.delete(e)}function wE(){Rf=!1,fr!==null&&yc(fr)&&(fr=null),pr!==null&&yc(pr)&&(pr=null),mr!==null&&yc(mr)&&(mr=null),Ra.forEach(B0),Ia.forEach(B0)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,wE)))}function Pa(t){function e(r){return aa(r,t)}if(0<sc.length){aa(sc[0],t);for(var n=1;n<sc.length;n++){var i=sc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&aa(fr,t),pr!==null&&aa(pr,t),mr!==null&&aa(mr,t),Ra.forEach(e),Ia.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)l_(n),n.blockedOn===null&&cr.shift()}var to=Hi.ReactCurrentBatchConfig,Nc=!0;function TE(t,e,n,i){var r=ct,s=to.transition;to.transition=null;try{ct=1,pp(t,e,n,i)}finally{ct=r,to.transition=s}}function AE(t,e,n,i){var r=ct,s=to.transition;to.transition=null;try{ct=4,pp(t,e,n,i)}finally{ct=r,to.transition=s}}function pp(t,e,n,i){if(Nc){var r=If(t,e,n,i);if(r===null)ef(t,e,i,Uc,n),O0(t,i);else if(EE(r,t,e,n,i))i.stopPropagation();else if(O0(t,i),e&4&&-1<ME.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&r_(s),s=If(t,e,n,i),s===null&&ef(t,e,i,Uc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ef(t,e,i,null,n)}}var Uc=null;function If(t,e,n,i){if(Uc=null,t=up(i),t=$r(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uc=t,null}function c_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fE()){case hp:return 1;case e_:return 4;case Lc:case pE:return 16;case t_:return 536870912;default:return 16}default:return 16}}var hr=null,mp=null,xc=null;function u_(){if(xc)return xc;var t,e=mp,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return xc=r.slice(t,1<i?1-i:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function k0(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oc:k0,this.isPropagationStopped=k0,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gp=Dn(ho),Wa=St({},ho,{view:0,detail:0}),bE=Dn(Wa),$d,Zd,la,eu=St({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?($d=t.screenX-la.screenX,Zd=t.screenY-la.screenY):Zd=$d=0,la=t),$d)},movementY:function(t){return"movementY"in t?t.movementY:Zd}}),z0=Dn(eu),CE=St({},eu,{dataTransfer:0}),RE=Dn(CE),IE=St({},Wa,{relatedTarget:0}),Jd=Dn(IE),PE=St({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),LE=Dn(PE),DE=St({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NE=Dn(DE),UE=St({},ho,{data:0}),V0=Dn(UE),FE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BE[t])?!!e[t]:!1}function vp(){return kE}var zE=St({},Wa,{key:function(t){if(t.key){var e=FE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VE=Dn(zE),HE=St({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H0=Dn(HE),GE=St({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),WE=Dn(GE),XE=St({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),YE=Dn(XE),qE=St({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$E=Dn(qE),ZE=[9,13,27,32],_p=Bi&&"CompositionEvent"in window,ya=null;Bi&&"documentMode"in document&&(ya=document.documentMode);var JE=Bi&&"TextEvent"in window&&!ya,h_=Bi&&(!_p||ya&&8<ya&&11>=ya),G0=String.fromCharCode(32),W0=!1;function d_(t,e){switch(t){case"keyup":return ZE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function KE(t,e){switch(t){case"compositionend":return f_(e);case"keypress":return e.which!==32?null:(W0=!0,G0);case"textInput":return t=e.data,t===G0&&W0?null:t;default:return null}}function jE(t,e){if(Hs)return t==="compositionend"||!_p&&d_(t,e)?(t=u_(),xc=mp=hr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h_&&e.locale!=="ko"?null:e.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QE[t.type]:e==="textarea"}function p_(t,e,n,i){Xv(i),e=Fc(e,"onChange"),0<e.length&&(n=new gp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,La=null;function ew(t){T_(t,0)}function tu(t){var e=Xs(t);if(Bv(e))return t}function tw(t,e){if(t==="change")return e}var m_=!1;Bi&&(Bi?(lc="oninput"in document,lc||(Kd=document.createElement("div"),Kd.setAttribute("oninput","return;"),lc=typeof Kd.oninput=="function"),ac=lc):ac=!1,m_=ac&&(!document.documentMode||9<document.documentMode));var ac,lc,Kd;function Y0(){xa&&(xa.detachEvent("onpropertychange",g_),La=xa=null)}function g_(t){if(t.propertyName==="value"&&tu(La)){var e=[];p_(e,La,t,up(t)),Zv(ew,e)}}function nw(t,e,n){t==="focusin"?(Y0(),xa=e,La=n,xa.attachEvent("onpropertychange",g_)):t==="focusout"&&Y0()}function iw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(La)}function rw(t,e){if(t==="click")return tu(e)}function sw(t,e){if(t==="input"||t==="change")return tu(e)}function ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:ow;function Da(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!df.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function q0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $0(t,e){var n=q0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=q0(n)}}function v_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function __(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aw(t){var e=__(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v_(n.ownerDocument.documentElement,n)){if(i!==null&&yp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$0(n,s);var o=$0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lw=Bi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Pf=null,Sa=null,Lf=!1;function Z0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||Gs==null||Gs!==Rc(i)||(i=Gs,"selectionStart"in i&&yp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Da(Sa,i)||(Sa=i,i=Fc(Pf,"onSelect"),0<i.length&&(e=new gp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function cc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:cc("Animation","AnimationEnd"),animationiteration:cc("Animation","AnimationIteration"),animationstart:cc("Animation","AnimationStart"),transitionend:cc("Transition","TransitionEnd")},jd={},y_={};Bi&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function nu(t){if(jd[t])return jd[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y_)return jd[t]=e[n];return t}var x_=nu("animationend"),S_=nu("animationiteration"),M_=nu("animationstart"),E_=nu("transitionend"),w_=new Map,J0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){w_.set(t,e),rs(e,[t])}for(uc=0;uc<J0.length;uc++)hc=J0[uc],K0=hc.toLowerCase(),j0=hc[0].toUpperCase()+hc.slice(1),Er(K0,"on"+j0);var hc,K0,j0,uc;Er(x_,"onAnimationEnd");Er(S_,"onAnimationIteration");Er(M_,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(E_,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Q0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cE(i,e,void 0,t),t.currentTarget=null}function T_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Q0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Q0(r,a,c),s=l}}}if(Pc)throw t=bf,Pc=!1,bf=null,t}function pt(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var i=t+"__bubble";n.has(i)||(A_(e,t,2,!1),n.add(i))}function Qd(t,e,n){var i=0;e&&(i|=4),A_(n,t,i,e)}var dc="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[dc]){t[dc]=!0,Dv.forEach(function(n){n!=="selectionchange"&&(cw.has(n)||Qd(n,!1,t),Qd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dc]||(e[dc]=!0,Qd("selectionchange",!1,e))}}function A_(t,e,n,i){switch(c_(e)){case 1:var r=TE;break;case 4:r=AE;break;default:r=pp}n=r.bind(null,e,n,t),r=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ef(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zv(function(){var c=s,u=up(n),d=[];e:{var f=w_.get(t);if(f!==void 0){var p=gp,m=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":p=VE;break;case"focusin":m="focus",p=Jd;break;case"focusout":m="blur",p=Jd;break;case"beforeblur":case"afterblur":p=Jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WE;break;case x_:case S_:case M_:p=LE;break;case E_:p=YE;break;case"scroll":p=bE;break;case"wheel":p=$E;break;case"copy":case"cut":case"paste":p=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=H0}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,h!==null&&(y=Ca(v,h),y!=null&&x.push(Ua(v,y,_)))),g)break;v=v.return}0<x.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==wf&&(m=n.relatedTarget||n.fromElement)&&($r(m)||m[ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?$r(m):null,m!==null&&(g=ss(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=z0,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=H0,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:Xs(p),_=m==null?f:Xs(m),f=new x(y,v+"leave",p,n,u),f.target=g,f.relatedTarget=_,y=null,$r(u)===c&&(x=new x(h,v+"enter",m,n,u),x.target=_,x.relatedTarget=g,y=x),g=y,p&&m)t:{for(x=p,h=m,v=0,_=x;_;_=ks(_))v++;for(_=0,y=h;y;y=ks(y))_++;for(;0<v-_;)x=ks(x),v--;for(;0<_-v;)h=ks(h),_--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=ks(x),h=ks(h)}x=null}else x=null;p!==null&&ev(d,f,p,x,!1),m!==null&&g!==null&&ev(d,g,m,x,!0)}}e:{if(f=c?Xs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=tw;else if(X0(f))if(m_)C=sw;else{C=iw;var T=nw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=rw);if(C&&(C=C(t,c))){p_(d,C,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&yf(f,"number",f.value)}switch(T=c?Xs(c):window,t){case"focusin":(X0(T)||T.contentEditable==="true")&&(Gs=T,Pf=c,Sa=null);break;case"focusout":Sa=Pf=Gs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Z0(d,n,u);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Z0(d,n,u)}var A;if(_p)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hs?d_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(h_&&n.locale!=="ko"&&(Hs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Hs&&(A=u_()):(hr=u,mp="value"in hr?hr.value:hr.textContent,Hs=!0)),T=Fc(c,b),0<T.length&&(b=new V0(b,t,null,n,u),d.push({event:b,listeners:T}),A?b.data=A:(A=f_(n),A!==null&&(b.data=A)))),(A=JE?KE(t,n):jE(t,n))&&(c=Fc(c,"onBeforeInput"),0<c.length&&(u=new V0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}T_(d,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Ua(t,s,r)),s=Ca(t,e),s!=null&&i.push(Ua(t,s,r))),t=t.return}return i}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ev(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ca(n,s),l!=null&&o.unshift(Ua(n,l,a))):r||(l=Ca(n,s),l!=null&&o.push(Ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function tv(t){return(typeof t=="string"?t:""+t).replace(uw,`
`).replace(hw,"")}function fc(t,e,n){if(e=tv(e),tv(t)!==e&&n)throw Error(ee(425))}function Oc(){}var Df=null,Nf=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(pw)}:Ff;function pw(t){setTimeout(function(){throw t})}function tf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Si="__reactFiber$"+fo,Fa="__reactProps$"+fo,ki="__reactContainer$"+fo,Of="__reactEvents$"+fo,mw="__reactListeners$"+fo,gw="__reactHandles$"+fo;function $r(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iv(t);t!==null;){if(n=t[Si])return n;t=iv(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[Si]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function iu(t){return t[Fa]||null}var Bf=[],Ys=-1;function wr(t){return{current:t}}function mt(t){0>Ys||(t.current=Bf[Ys],Bf[Ys]=null,Ys--)}function ft(t,e){Ys++,Bf[Ys]=t.current,t.current=e}var Mr={},en=wr(Mr),Mn=wr(!1),Qr=Mr;function so(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Bc(){mt(Mn),mt(en)}function rv(t,e,n){if(en.current!==Mr)throw Error(ee(168));ft(en,e),ft(Mn,n)}function b_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,nE(t)||"Unknown",r));return St({},n,i)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Qr=en.current,ft(en,t),ft(Mn,Mn.current),!0}function sv(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=b_(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,mt(Mn),mt(en),ft(en,t)):mt(Mn),ft(Mn,n)}var Ni=null,ru=!1,nf=!1;function C_(t){Ni===null?Ni=[t]:Ni.push(t)}function vw(t){ru=!0,C_(t)}function Tr(){if(!nf&&Ni!==null){nf=!0;var t=0,e=ct;try{var n=Ni;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,ru=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),Qv(hp,Tr),r}finally{ct=e,nf=!1}}return null}var qs=[],$s=0,zc=null,Vc=0,Wn=[],Xn=0,es=null,Ui=1,Fi="";function Yr(t,e){qs[$s++]=Vc,qs[$s++]=zc,zc=t,Vc=e}function R_(t,e,n){Wn[Xn++]=Ui,Wn[Xn++]=Fi,Wn[Xn++]=es,es=t;var i=Ui;t=Fi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-ci(e)+r|n<<r|i,Fi=s+t}else Ui=1<<s|n<<r|i,Fi=t}function xp(t){t.return!==null&&(Yr(t,1),R_(t,1,0))}function Sp(t){for(;t===zc;)zc=qs[--$s],qs[$s]=null,Vc=qs[--$s],qs[$s]=null;for(;t===es;)es=Wn[--Xn],Wn[Xn]=null,Fi=Wn[--Xn],Wn[Xn]=null,Ui=Wn[--Xn],Wn[Xn]=null}var Pn=null,In=null,_t=!1,li=null;function I_(t,e){var n=Yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,In=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,In=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(_t){var e=In;if(e){var n=e;if(!ov(t,e)){if(kf(t))throw Error(ee(418));e=gr(n.nextSibling);var i=Pn;e&&ov(t,e)?I_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(kf(t))throw Error(ee(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function pc(t){if(t!==Pn)return!1;if(!_t)return av(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=In)){if(kf(t))throw P_(),Error(ee(418));for(;e;)I_(t,e),e=gr(e.nextSibling)}if(av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Pn?gr(t.stateNode.nextSibling):null;return!0}function P_(){for(var t=In;t;)t=gr(t.nextSibling)}function oo(){In=Pn=null,_t=!1}function Mp(t){li===null?li=[t]:li.push(t)}var _w=Hi.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function mc(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lv(t){var e=t._init;return e(t._payload)}function L_(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=xr(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,y){return v===null||v.tag!==6?(v=uf(_,h.mode,y),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,y){var C=_.type;return C===Vs?u(h,v,_.props.children,y,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&lv(C)===v.type)?(y=r(v,_.props),y.ref=ca(h,v,_),y.return=h,y):(y=Cc(_.type,_.key,_.props,null,h.mode,y),y.ref=ca(h,v,_),y.return=h,y)}function c(h,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=hf(_,h.mode,y),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,y,C){return v===null||v.tag!==7?(v=jr(_,h.mode,y,C),v.return=h,v):(v=r(v,_),v.return=h,v)}function d(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uf(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ec:return _=Cc(v.type,v.key,v.props,null,h.mode,_),_.ref=ca(h,null,v),_.return=h,_;case zs:return v=hf(v,h.mode,_),v.return=h,v;case ar:var y=v._init;return d(h,y(v._payload),_)}if(pa(v)||sa(v))return v=jr(v,h.mode,_,null),v.return=h,v;mc(h,v)}return null}function f(h,v,_,y){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(h,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ec:return _.key===C?l(h,v,_,y):null;case zs:return _.key===C?c(h,v,_,y):null;case ar:return C=_._init,f(h,v,C(_._payload),y)}if(pa(_)||sa(_))return C!==null?null:u(h,v,_,y,null);mc(h,_)}return null}function p(h,v,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(_)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:return h=h.get(y.key===null?_:y.key)||null,l(v,h,y,C);case zs:return h=h.get(y.key===null?_:y.key)||null,c(v,h,y,C);case ar:var T=y._init;return p(h,v,_,T(y._payload),C)}if(pa(y)||sa(y))return h=h.get(_)||null,u(v,h,y,C,null);mc(v,y)}return null}function m(h,v,_,y){for(var C=null,T=null,A=v,b=v=0,M=null;A!==null&&b<_.length;b++){A.index>b?(M=A,A=null):M=A.sibling;var S=f(h,A,_[b],y);if(S===null){A===null&&(A=M);break}t&&A&&S.alternate===null&&e(h,A),v=s(S,v,b),T===null?C=S:T.sibling=S,T=S,A=M}if(b===_.length)return n(h,A),_t&&Yr(h,b),C;if(A===null){for(;b<_.length;b++)A=d(h,_[b],y),A!==null&&(v=s(A,v,b),T===null?C=A:T.sibling=A,T=A);return _t&&Yr(h,b),C}for(A=i(h,A);b<_.length;b++)M=p(A,h,b,_[b],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?b:M.key),v=s(M,v,b),T===null?C=M:T.sibling=M,T=M);return t&&A.forEach(function(P){return e(h,P)}),_t&&Yr(h,b),C}function x(h,v,_,y){var C=sa(_);if(typeof C!="function")throw Error(ee(150));if(_=C.call(_),_==null)throw Error(ee(151));for(var T=C=null,A=v,b=v=0,M=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(M=A,A=null):M=A.sibling;var P=f(h,A,S.value,y);if(P===null){A===null&&(A=M);break}t&&A&&P.alternate===null&&e(h,A),v=s(P,v,b),T===null?C=P:T.sibling=P,T=P,A=M}if(S.done)return n(h,A),_t&&Yr(h,b),C;if(A===null){for(;!S.done;b++,S=_.next())S=d(h,S.value,y),S!==null&&(v=s(S,v,b),T===null?C=S:T.sibling=S,T=S);return _t&&Yr(h,b),C}for(A=i(h,A);!S.done;b++,S=_.next())S=p(A,h,b,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),v=s(S,v,b),T===null?C=S:T.sibling=S,T=S);return t&&A.forEach(function(k){return e(h,k)}),_t&&Yr(h,b),C}function g(h,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ec:e:{for(var C=_.key,T=v;T!==null;){if(T.key===C){if(C=_.type,C===Vs){if(T.tag===7){n(h,T.sibling),v=r(T,_.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&lv(C)===T.type){n(h,T.sibling),v=r(T,_.props),v.ref=ca(h,T,_),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===Vs?(v=jr(_.props.children,h.mode,y,_.key),v.return=h,h=v):(y=Cc(_.type,_.key,_.props,null,h.mode,y),y.ref=ca(h,v,_),y.return=h,h=y)}return o(h);case zs:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=hf(_,h.mode,y),v.return=h,h=v}return o(h);case ar:return T=_._init,g(h,v,T(_._payload),y)}if(pa(_))return m(h,v,_,y);if(sa(_))return x(h,v,_,y);mc(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=uf(_,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return g}var ao=L_(!0),D_=L_(!1),Hc=wr(null),Gc=null,Zs=null,Ep=null;function wp(){Ep=Zs=Gc=null}function Tp(t){var e=Hc.current;mt(Hc),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function no(t,e){Gc=t,Ep=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(Gc===null)throw Error(ee(308));Zs=t,Gc.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var Zr=null;function Ap(t){Zr===null?Zr=[t]:Zr.push(t)}function N_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function Mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}function cv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(f=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=St({},d,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=d}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ya={},Ei=wr(Ya),Oa=wr(Ya),Ba=wr(Ya);function Jr(t){if(t===Ya)throw Error(ee(174));return t}function Cp(t,e){switch(ft(Ba,e),ft(Oa,t),ft(Ei,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}mt(Ei),ft(Ei,e)}function lo(){mt(Ei),mt(Oa),mt(Ba)}function F_(t){Jr(Ba.current);var e=Jr(Ei.current),n=Sf(e,t.type);e!==n&&(ft(Oa,t),ft(Ei,n))}function Rp(t){Oa.current===t&&(mt(Ei),mt(Oa))}var yt=wr(0);function Xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rf=[];function Ip(){for(var t=0;t<rf.length;t++)rf[t]._workInProgressVersionPrimary=null;rf.length=0}var Ec=Hi.ReactCurrentDispatcher,sf=Hi.ReactCurrentBatchConfig,ts=0,xt=null,Ut=null,Vt=null,Yc=!1,Ma=!1,ka=0,yw=0;function Kt(){throw Error(ee(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Lp(t,e,n,i,r,s){if(ts=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?Ew:ww,t=n(i,r),Ma){s=0;do{if(Ma=!1,ka=0,25<=s)throw Error(ee(301));s+=1,Vt=Ut=null,e.updateQueue=null,Ec.current=Tw,t=n(i,r)}while(Ma)}if(Ec.current=qc,e=Ut!==null&&Ut.next!==null,ts=0,Vt=Ut=xt=null,Yc=!1,e)throw Error(ee(300));return t}function Dp(){var t=ka!==0;return ka=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?xt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Zn(){if(Ut===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?xt.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(ee(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?xt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function za(t,e){return typeof e=="function"?e(t):e}function of(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,xt.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function af(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O_(){}function B_(t,e){var n=xt,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Np(V_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Va(9,z_.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ee(349));ts&30||k_(n,e,r)}return r}function k_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z_(t,e,n,i){e.value=n,e.getSnapshot=i,H_(e)&&G_(t)}function V_(t,e,n){return n(function(){H_(e)&&G_(t)})}function H_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function G_(t){var e=zi(t,1);e!==null&&ui(e,t,1,-1)}function hv(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=Mw.bind(null,xt,t),[e.memoizedState,t]}function Va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function W_(){return Zn().memoizedState}function wc(t,e,n,i){var r=xi();xt.flags|=t,r.memoizedState=Va(1|e,n,void 0,i===void 0?null:i)}function su(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&Pp(i,o.deps)){r.memoizedState=Va(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Va(1|e,n,s,i)}function dv(t,e){return wc(8390656,8,t,e)}function Np(t,e){return su(2048,8,t,e)}function X_(t,e){return su(4,2,t,e)}function Y_(t,e){return su(4,4,t,e)}function q_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $_(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,q_.bind(null,e,t),n)}function Up(){}function Z_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function J_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return ts&21?(hi(n,e)||(n=n_(),xt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function xw(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=sf.transition;sf.transition={};try{t(!1),e()}finally{ct=n,sf.transition=i}}function j_(){return Zn().memoizedState}function Sw(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q_(t))ey(e,n);else if(n=N_(t,e,n,i),n!==null){var r=dn();ui(n,t,i,r),ty(n,e,i)}}function Mw(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q_(t))ey(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=N_(t,e,r,i),n!==null&&(r=dn(),ui(n,t,i,r),ty(n,e,i))}}function Q_(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function ey(t,e){Ma=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ty(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}var qc={readContext:$n,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Ew={readContext:$n,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:dv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,q_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sw.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:hv,useDebugValue:Up,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=hv(!1),e=t[0];return t=xw.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=xi();if(_t){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ht===null)throw Error(ee(349));ts&30||k_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dv(V_.bind(null,i,s,t),[t]),i.flags|=2048,Va(9,z_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Ht.identifierPrefix;if(_t){var n=Fi,i=Ui;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ww={readContext:$n,useCallback:Z_,useContext:$n,useEffect:Np,useImperativeHandle:$_,useInsertionEffect:X_,useLayoutEffect:Y_,useMemo:J_,useReducer:of,useRef:W_,useState:function(){return of(za)},useDebugValue:Up,useDeferredValue:function(t){var e=Zn();return K_(e,Ut.memoizedState,t)},useTransition:function(){var t=of(za)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:B_,useId:j_,unstable_isNewReconciler:!1},Tw={readContext:$n,useCallback:Z_,useContext:$n,useEffect:Np,useImperativeHandle:$_,useInsertionEffect:X_,useLayoutEffect:Y_,useMemo:J_,useReducer:af,useRef:W_,useState:function(){return af(za)},useDebugValue:Up,useDeferredValue:function(t){var e=Zn();return Ut===null?e.memoizedState=t:K_(e,Ut.memoizedState,t)},useTransition:function(){var t=af(za)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:B_,useId:j_,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=yr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),Mc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=yr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),Mc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=yr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(ui(e,t,i,n),Mc(e,t,i))}};function fv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function ny(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=En(e)?Qr:en.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=En(e)?Qr:en.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ou.enqueueReplaceState(r,r.state,null),Wc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=tE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Aw=typeof WeakMap=="function"?WeakMap:Map;function iy(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,ep=i),Wf(t,e)},n}function ry(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Aw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zw.bind(null,t,e,n),e.then(t,t))}function gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var bw=Hi.ReactCurrentOwner,Sn=!1;function hn(t,e,n,i){e.child=t===null?D_(e,null,n,i):ao(e,t.child,n,i)}function _v(t,e,n,i,r){n=n.render;var s=e.ref;return no(e,r),i=Lp(t,e,n,i,s,r),n=Dp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(_t&&n&&xp(e),e.flags|=1,hn(t,e,i,r),e.child)}function yv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sy(t,e,s,i,r)):(t=Cc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function sy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return Xf(t,e,n,i,r)}function oy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ks,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ks,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ks,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ks,Rn),Rn|=i;return hn(t,e,r,n),e.child}function ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,i,r){var s=En(n)?Qr:en.current;return s=so(e,s),no(e,r),n=Lp(t,e,n,i,s,r),i=Dp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(_t&&i&&xp(e),e.flags|=1,hn(t,e,n,r),e.child)}function xv(t,e,n,i,r){if(En(n)){var s=!0;kc(e)}else s=!1;if(no(e,r),e.stateNode===null)Tc(t,e),ny(e,n,i),Gf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=En(n)?Qr:en.current,c=so(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&pv(e,o,i,c),lr=!1;var f=e.memoizedState;o.state=f,Wc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Mn.current||lr?(typeof u=="function"&&(Hf(e,n,u,i),l=e.memoizedState),(a=lr||fv(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,U_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=En(n)?Qr:en.current,l=so(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pv(e,o,i,l),lr=!1,f=e.memoizedState,o.state=f,Wc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Mn.current||lr?(typeof p=="function"&&(Hf(e,n,p,i),m=e.memoizedState),(c=lr||fv(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Yf(t,e,n,i,s,r)}function Yf(t,e,n,i,r,s){ay(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sv(e,n,!1),Vi(t,e,s);i=e.stateNode,bw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&sv(e,n,!0),e.child}function ly(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),Cp(t,e.containerInfo)}function Sv(t,e,n,i,r){return oo(),Mp(r),e.flags|=256,hn(t,e,n,i),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function $f(t){return{baseLanes:t,cachePool:null,transitions:null}}function cy(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$f(n),e.memoizedState=qf,t):Fp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Cw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?$f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qf,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gc(t,e,n,i){return i!==null&&Mp(i),ao(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lf(Error(ee(422))),gc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cu({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=$f(o),e.memoizedState=qf,s);if(!(e.mode&1))return gc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=lf(s,i,void 0),gc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),ui(i,t,r,-1))}return Hp(),i=lf(Error(ee(421))),gc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Vw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=gr(r.nextSibling),Pn=e,_t=!0,li=null,t!==null&&(Wn[Xn++]=Ui,Wn[Xn++]=Fi,Wn[Xn++]=es,Ui=t.id,Fi=t.overflow,es=e),e=Fp(e,i.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vf(t.return,e,n)}function cf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cf(e,!0,n,null,s);break;case"together":cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rw(t,e,n){switch(e.tag){case 3:ly(e),oo();break;case 5:F_(e);break;case 1:En(e.type)&&kc(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?cy(t,e,n):(ft(yt,yt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,oy(t,e,n)}return Vi(t,e,n)}var hy,Zf,dy,fy;hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};dy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Ei.current);var s=null;switch(n){case"input":r=vf(t,r),i=vf(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=xf(t,r),i=xf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oc)}Mf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fy=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Iw(t,e,n){var i=e.pendingProps;switch(Sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return En(e.type)&&Bc(),jt(e),null;case 3:return i=e.stateNode,lo(),mt(Mn),mt(en),Ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(ip(li),li=null))),Zf(t,e),jt(e),null;case 5:Rp(e);var r=Jr(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)dy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return jt(e),null}if(t=Jr(Ei.current),pc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)pt(ga[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":I0(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":L0(i,s),pt("invalid",i)}Mf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fc(i.textContent,a,t),r=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":tc(i),P0(i,s,!0);break;case"textarea":tc(i),D0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Fa]=i,hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)pt(ga[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":I0(t,i),r=vf(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),pt("invalid",t);break;case"textarea":L0(t,i),r=xf(t,i),pt("invalid",t);break;default:r=i}Mf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&op(t,s,l,o))}switch(n){case"input":tc(t),P0(t,i,!1);break;case"textarea":tc(t),D0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)fy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Jr(Ba.current),Jr(Ei.current),pc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:fc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return jt(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&In!==null&&e.mode&1&&!(e.flags&128))P_(),oo(),e.flags|=98560,s=!1;else if(s=pc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Si]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else li!==null&&(ip(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ft===0&&(Ft=3):Hp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return lo(),Zf(t,e),t===null&&Na(e.stateNode.containerInfo),jt(e),null;case 10:return Tp(e.type._context),jt(e),null;case 17:return En(e.type)&&Bc(),jt(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xc(t),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>uo&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return jt(e),null}else 2*Ct()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Vp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Pw(t,e){switch(Sp(e),e.tag){case 1:return En(e.type)&&Bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),mt(Mn),mt(en),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return lo(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var vc=!1,Qt=!1,Lw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Jf(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Ev=!1;function Dw(t,e){if(Df=Nc,t=__(),yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Nc=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:oi(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return m=Ev,Ev=!1,m}function Ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jf(e,n,s)}r=r.next}while(r!==i)}}function au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function py(t){var e=t.alternate;e!==null&&(t.alternate=null,py(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Fa],delete e[Of],delete e[mw],delete e[gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function my(t){return t.tag===5||t.tag===3||t.tag===4}function wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||my(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function Qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var Xt=null,ai=!1;function or(t,e,n){for(n=n.child;n!==null;)gy(t,e,n),n=n.sibling}function gy(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:Qt||Js(n,e);case 6:var i=Xt,r=ai;Xt=null,or(t,e,n),Xt=i,ai=r,Xt!==null&&(ai?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ai?(t=Xt,n=n.stateNode,t.nodeType===8?tf(t.parentNode,n):t.nodeType===1&&tf(t,n),Pa(t)):tf(Xt,n.stateNode));break;case 4:i=Xt,r=ai,Xt=n.stateNode.containerInfo,ai=!0,or(t,e,n),Xt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!Qt&&(Js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,or(t,e,n),Qt=i):or(t,e,n);break;default:or(t,e,n)}}function Tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lw),e.forEach(function(i){var r=Hw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ai=!1;break e;case 3:Xt=a.stateNode.containerInfo,ai=!0;break e;case 4:Xt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Xt===null)throw Error(ee(160));gy(s,o,r),Xt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vy(e,t),e=e.sibling}function vy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),yi(t),i&4){try{Ea(3,t,t.return),au(3,t)}catch(x){Tt(t,t.return,x)}try{Ea(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:si(e,t),yi(t),i&512&&n!==null&&Js(n,n.return);break;case 5:if(si(e,t),yi(t),i&512&&n!==null&&Js(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kv(r,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Wv(r,d):u==="dangerouslySetInnerHTML"?Hv(r,d):u==="children"?ba(r,d):op(r,u,d,c)}switch(a){case"input":_f(r,s);break;case"textarea":zv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(si(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(si(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:si(e,t),yi(t);break;case 13:si(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kp=Ct())),i&4&&Tv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,si(e,t),Qt=c):si(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ea(4,f,f.return);break;case 1:Js(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Js(f,f.return);break;case 22:if(f.memoizedState!==null){bv(d);continue}}p!==null?(p.return=f,ve=p):bv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:si(e,t),yi(t),i&4&&Tv(t);break;case 21:break;default:si(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(my(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=wv(t);Qf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wv(t);jf(t,a,o);break;default:throw Error(ee(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nw(t,e,n){ve=t,_y(t,e,n)}function _y(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=vc;var c=Qt;if(vc=o,(Qt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Cv(r):l!==null?(l.return=o,ve=l):Cv(r);for(;s!==null;)ve=s,_y(s,e,n),s=s.sibling;ve=r,vc=a,Qt=c}Av(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Av(t,e,n)}}function Av(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Qt||e.flags&512&&Kf(e)}catch(f){Tt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function bv(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Cv(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{au(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Kf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Uw=Math.ceil,$c=Hi.ReactCurrentDispatcher,Op=Hi.ReactCurrentOwner,qn=Hi.ReactCurrentBatchConfig,je=0,Ht=null,Pt=null,Yt=0,Rn=0,Ks=wr(0),Ft=0,Ha=null,ns=0,lu=0,Bp=0,wa=null,xn=null,kp=0,uo=1/0,Di=null,Zc=!1,ep=null,_r=null,_c=!1,dr=null,Jc=0,Ta=0,tp=null,Ac=-1,bc=0;function dn(){return je&6?Ct():Ac!==-1?Ac:Ac=Ct()}function yr(t){return t.mode&1?je&2&&Yt!==0?Yt&-Yt:_w.transition!==null?(bc===0&&(bc=n_()),bc):(t=ct,t!==0||(t=window.event,t=t===void 0?16:c_(t.type)),t):1}function ui(t,e,n,i){if(50<Ta)throw Ta=0,tp=null,Error(ee(185));Ga(t,n,i),(!(je&2)||t!==Ht)&&(t===Ht&&(!(je&2)&&(lu|=n),Ft===4&&ur(t,Yt)),wn(t,i),n===1&&je===0&&!(e.mode&1)&&(uo=Ct()+500,ru&&Tr()))}function wn(t,e){var n=t.callbackNode;xE(t,e);var i=Dc(t,t===Ht?Yt:0);if(i===0)n!==null&&F0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&F0(n),e===1)t.tag===0?vw(Rv.bind(null,t)):C_(Rv.bind(null,t)),fw(function(){!(je&6)&&Tr()}),n=null;else{switch(i_(i)){case 1:n=hp;break;case 4:n=e_;break;case 16:n=Lc;break;case 536870912:n=t_;break;default:n=Lc}n=Ay(n,yy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yy(t,e){if(Ac=-1,bc=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var i=Dc(t,t===Ht?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kc(t,i);else{e=i;var r=je;je|=2;var s=Sy();(Ht!==t||Yt!==e)&&(Di=null,uo=Ct()+500,Kr(t,e));do try{Bw();break}catch(a){xy(t,a)}while(1);wp(),$c.current=s,je=r,Pt!==null?e=0:(Ht=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=Cf(t),r!==0&&(i=r,e=np(t,r))),e===1)throw n=Ha,Kr(t,0),ur(t,i),wn(t,Ct()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fw(r)&&(e=Kc(t,i),e===2&&(s=Cf(t),s!==0&&(i=s,e=np(t,s))),e===1))throw n=Ha,Kr(t,0),ur(t,i),wn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:qr(t,xn,Di);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=kp+500-Ct(),10<e)){if(Dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ff(qr.bind(null,t,xn,Di),e);break}qr(t,xn,Di);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uw(i/1960))-i,10<i){t.timeoutHandle=Ff(qr.bind(null,t,xn,Di),i);break}qr(t,xn,Di);break;case 5:qr(t,xn,Di);break;default:throw Error(ee(329))}}}return wn(t,Ct()),t.callbackNode===n?yy.bind(null,t):null}function np(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=xn,xn=n,e!==null&&ip(e)),t}function ip(t){xn===null?xn=t:xn.push.apply(xn,t)}function Fw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Bp,e&=~lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function Rv(t){if(je&6)throw Error(ee(327));io();var e=Dc(t,0);if(!(e&1))return wn(t,Ct()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var i=Cf(t);i!==0&&(e=i,n=np(t,i))}if(n===1)throw n=Ha,Kr(t,0),ur(t,e),wn(t,Ct()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,xn,Di),wn(t,Ct()),null}function zp(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(uo=Ct()+500,ru&&Tr())}}function is(t){dr!==null&&dr.tag===0&&!(je&6)&&io();var e=je;je|=1;var n=qn.transition,i=ct;try{if(qn.transition=null,ct=1,t)return t()}finally{ct=i,qn.transition=n,je=e,!(je&6)&&Tr()}}function Vp(){Rn=Ks.current,mt(Ks)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dw(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bc();break;case 3:lo(),mt(Mn),mt(en),Ip();break;case 5:Rp(i);break;case 4:lo();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:Tp(i.type._context);break;case 22:case 23:Vp()}n=n.return}if(Ht=t,Pt=t=xr(t.current,null),Yt=Rn=e,Ft=0,Ha=null,Bp=lu=ns=0,xn=wa=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function xy(t,e){do{var n=Pt;try{if(wp(),Ec.current=qc,Yc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yc=!1}if(ts=0,Vt=Ut=xt=null,Ma=!1,ka=0,Op.current=null,n===null||n.return===null){Ft=1,Ha=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=gv(o);if(p!==null){p.flags&=-257,vv(p,o,a,s,e),p.mode&1&&mv(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){mv(s,c,e),Hp();break e}l=Error(ee(426))}}else if(_t&&a.mode&1){var g=gv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vv(g,o,a,s,e),Mp(co(l,a));break e}}s=l=co(l,a),Ft!==4&&(Ft=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=iy(s,l,e);cv(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(_r===null||!_r.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ry(s,a,e);cv(s,y);break e}}s=s.return}while(s!==null)}Ey(n)}catch(C){e=C,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(1)}function Sy(){var t=$c.current;return $c.current=qc,t===null?qc:t}function Hp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(ns&268435455)&&!(lu&268435455)||ur(Ht,Yt)}function Kc(t,e){var n=je;je|=2;var i=Sy();(Ht!==t||Yt!==e)&&(Di=null,Kr(t,e));do try{Ow();break}catch(r){xy(t,r)}while(1);if(wp(),je=n,$c.current=i,Pt!==null)throw Error(ee(261));return Ht=null,Yt=0,Ft}function Ow(){for(;Pt!==null;)My(Pt)}function Bw(){for(;Pt!==null&&!hE();)My(Pt)}function My(t){var e=Ty(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Ey(t):Pt=e,Op.current=null}function Ey(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Pw(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Pt=null;return}}else if(n=Iw(n,e,Rn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ft===0&&(Ft=5)}function qr(t,e,n){var i=ct,r=qn.transition;try{qn.transition=null,ct=1,kw(t,e,n,i)}finally{qn.transition=r,ct=i}return null}function kw(t,e,n,i){do io();while(dr!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(SE(t,s),t===Ht&&(Pt=Ht=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,Ay(Lc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=ct;ct=1;var a=je;je|=4,Op.current=null,Dw(t,n),vy(n,t),aw(Nf),Nc=!!Df,Nf=Df=null,t.current=n,Nw(n,t,r),dE(),je=a,ct=o,qn.transition=s}else t.current=n;if(_c&&(_c=!1,dr=t,Jc=r),s=t.pendingLanes,s===0&&(_r=null),mE(n.stateNode,i),wn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zc)throw Zc=!1,t=ep,ep=null,t;return Jc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===tp?Ta++:(Ta=0,tp=t):Ta=0,Tr(),null}function io(){if(dr!==null){var t=i_(Jc),e=qn.transition,n=ct;try{if(qn.transition=null,ct=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,Jc=0,je&6)throw Error(ee(331));var r=je;for(je|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Ea(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var f=u.sibling,p=u.return;if(py(u),u===c){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:au(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){ve=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ve=y;break e}ve=a.return}}if(je=r,Tr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(Qc,t)}catch{}i=!0}return i}finally{ct=n,qn.transition=e}}return!1}function Iv(t,e,n){e=co(n,e),e=iy(t,e,1),t=vr(t,e,1),e=dn(),t!==null&&(Ga(t,1,e),wn(t,e))}function Tt(t,e,n){if(t.tag===3)Iv(t,t,n);else for(;e!==null;){if(e.tag===3){Iv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=co(n,t),t=ry(e,t,1),e=vr(e,t,1),t=dn(),e!==null&&(Ga(e,1,t),wn(e,t));break}}e=e.return}}function zw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>Ct()-kp?Kr(t,0):Bp|=n),wn(t,e)}function wy(t,e){e===0&&(t.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var n=dn();t=zi(t,e),t!==null&&(Ga(t,e,n),wn(t,n))}function Vw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wy(t,n)}function Hw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),wy(t,n)}var Ty;Ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,Rw(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,_t&&e.flags&1048576&&R_(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tc(t,e),t=e.pendingProps;var r=so(e,en.current);no(e,n),r=Lp(null,e,i,t,r,n);var s=Dp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bp(e),r.updater=ou,e.stateNode=r,r._reactInternals=e,Gf(e,i,t,n),e=Yf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&xp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ww(i),t=oi(i,t),r){case 0:e=Xf(null,e,i,t,n);break e;case 1:e=xv(null,e,i,t,n);break e;case 11:e=_v(null,e,i,t,n);break e;case 14:e=yv(null,e,i,oi(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),xv(t,e,i,r,n);case 3:e:{if(ly(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,U_(t,e),Wc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(ee(423)),e),e=Sv(t,e,i,n,r);break e}else if(i!==r){r=co(Error(ee(424)),e),e=Sv(t,e,i,n,r);break e}else for(In=gr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,li=null,n=D_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Vi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return F_(e),t===null&&zf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uf(i,r)?o=null:s!==null&&Uf(i,s)&&(e.flags|=32),ay(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return cy(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),_v(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Hc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Mn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,no(e,n),r=$n(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),yv(t,e,i,r,n);case 15:return sy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Tc(t,e),e.tag=1,En(i)?(t=!0,kc(e)):t=!1,no(e,n),ny(e,i,r),Gf(e,i,r,n),Yf(null,e,i,!0,t,n);case 19:return uy(t,e,n);case 22:return oy(t,e,n)}throw Error(ee(156,e.tag))};function Ay(t,e){return Qv(t,e)}function Gw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,e,n,i){return new Gw(t,e,n,i)}function Gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return Gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lp)return 11;if(t===cp)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return jr(n.children,r,s,e);case ap:o=8,r|=8;break;case ff:return t=Yn(12,n,e,r|2),t.elementType=ff,t.lanes=s,t;case pf:return t=Yn(13,n,e,r),t.elementType=pf,t.lanes=s,t;case mf:return t=Yn(19,n,e,r),t.elementType=mf,t.lanes=s,t;case Fv:return cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nv:o=10;break e;case Uv:o=9;break e;case lp:o=11;break e;case cp:o=14;break e;case ar:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Yn(7,t,i,e),t.lanes=n,t}function cu(t,e,n,i){return t=Yn(22,t,i,e),t.elementType=Fv,t.lanes=n,t.stateNode={isHidden:!1},t}function uf(t,e,n){return t=Yn(6,t,null,e),t.lanes=n,t}function hf(t,e,n){return e=Yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wp(t,e,n,i,r,s,o,a,l){return t=new Xw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function Yw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Mr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(En(n))return b_(t,n,e)}return e}function Cy(t,e,n,i,r,s,o,a,l){return t=Wp(n,i,!0,t,r,s,o,a,l),t.context=by(null),n=t.current,i=dn(),r=yr(n),s=Oi(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,Ga(t,r,i),wn(t,i),t}function uu(t,e,n,i){var r=e.current,s=dn(),o=yr(r);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,o),t!==null&&(ui(t,r,o,s),Mc(t,r,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function qw(){return null}var Ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}hu.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));uu(t,e,null,null)};hu.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){uu(null,t,null,null)}),e[ki]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=o_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&l_(t)}};function qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lv(){}function $w(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=jc(o);s.call(c)}}var o=Cy(e,i,t,0,null,!1,!1,"",Lv);return t._reactRootContainer=o,t[ki]=o.current,Na(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=jc(l);a.call(c)}}var l=Wp(t,0,!1,null,null,!1,!1,"",Lv);return t._reactRootContainer=l,t[ki]=l.current,Na(t.nodeType===8?t.parentNode:t),is(function(){uu(e,l,n,i)}),l}function fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jc(o);a.call(l)}}uu(e,o,t,r)}else o=$w(n,e,t,r,i);return jc(o)}r_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(dp(e,n|1),wn(e,Ct()),!(je&6)&&(uo=Ct()+500,Tr()))}break;case 13:is(function(){var i=zi(t,1);if(i!==null){var r=dn();ui(i,t,1,r)}}),Xp(t,1)}};fp=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=dn();ui(e,t,134217728,n)}Xp(t,134217728)}};s_=function(t){if(t.tag===13){var e=yr(t),n=zi(t,e);if(n!==null){var i=dn();ui(n,t,e,i)}Xp(t,e)}};o_=function(){return ct};a_=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Tf=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=iu(i);if(!r)throw Error(ee(90));Bv(i),_f(i,r)}}}break;case"textarea":zv(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};qv=zp;$v=is;var Zw={usingClientEntryPoint:!1,Events:[Xa,Xs,iu,Xv,Yv,zp]},ha={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jw={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kv(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(da=__REACT_DEVTOOLS_GLOBAL_HOOK__,!da.isDisabled&&da.supportsFiber))try{Qc=da.inject(Jw),Mi=da}catch{}var da;Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(e))throw Error(ee(200));return Yw(t,e,null,n)};Nn.createRoot=function(t,e){if(!qp(t))throw Error(ee(299));var n=!1,i="",r=Ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wp(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Na(t.nodeType===8?t.parentNode:t),new Yp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Kv(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return is(t)};Nn.hydrate=function(t,e,n){if(!du(e))throw Error(ee(200));return fu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!qp(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ry;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cy(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hu(e)};Nn.render=function(t,e,n){if(!du(e))throw Error(ee(200));return fu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!du(t))throw Error(ee(40));return t._reactRootContainer?(is(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=zp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!du(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return fu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426"});var Dy=nt((GL,Ly)=>{"use strict";function Py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Py)}catch(t){console.error(t)}}Py(),Ly.exports=Iy()});var Uy=nt($p=>{"use strict";var Ny=Dy();$p.createRoot=Ny.createRoot,$p.hydrateRoot=Ny.hydrateRoot;var WL});var Ar=nt(Zp=>{function Fy(){return Oy(arguments,{},0)}Zp.cs=Fy;Zp.cs1=Fy;var Oy=(t,e,n)=>{let i=t[n],r,s;return Array.isArray(i)?(r=i[0],s=i[1]):typeof i=="object"?(r=i.name,s=i.load):s=i,s(e,t.length<=n+1?null:o=>{let a;return r!=null&&r!==""?(a=Object.assign({},e),a[r]=o):a=e,Oy(t,a,n+1)})}});var po=nt(pu=>{var{createElement:By,Fragment:ky}=un(),zy=(...t)=>By(ky,{},...t);pu.fragments=zy;pu.fragments1=zy;var Kw=t=>By(ky,{},...t);pu.fragments2=Kw});var Hy=nt(qa=>{var Vy=function(){let t=arguments[0];for(let e=1;e<arguments.length;e++){let n=arguments[e];t=n?n(t):t}return t};qa.chain=Vy;qa.chain1=Vy;var jw=(t,e)=>{if(!e)return t;for(let n of e)t=n?n(t):t;return t};qa.chain2=jw;var Qw=(...t)=>(...e)=>{for(let n of t)if(!n(...e))return!1;return!0};qa.and=Qw});var Wy=nt(mo=>{var Gy=t=>e=>{let n={};for(let i of e)n[i[t]]=i;return n};mo.createIndex=Gy;var eT=(t,e)=>{if(t==null)return()=>null;let n=Gy(e)(t);return i=>n[i]};mo.cIndexedGetter=eT;var tT=(t,e)=>{let n={};for(let i of t){let r=e(i);for(let s of r){let o=n[s];o==null&&(o=[],n[s]=o),o.push(i)}}return n};mo.createIndexMulti=tT;var nT=(t,e,n)=>{if(t==null)return{};let i={};for(let r=0;r<t.length;r++){let s=t[r];if(i.hasOwnProperty(e(s)))throw new Error(`[createIndex1] Property existed [${e(s)}]`);i[e(s)]=n?n(s):s}return i};mo.createIndex1=nT;function iT(t,{keyAttr:e="id",valueAttr:n,keepFirst:i=!0,keepLast:r}){if(t==null)return{};let s={};for(let o=0;o<t.length;o++){let a=t[o];if(s.hasOwnProperty(a[e])){if(i)continue;if(!r)throw new Error(`[indexBy] Property existed [${a[e]}]`)}s[a[e]]=n?a[n]:a}return s}mo.indexBy=iT});var Yy=nt(Jp=>{var Xy=(t,e)=>{let n=0,i=t.length;for(;;){if(n===i)return-1-n;let r=Math.floor((n+i)/2),s=e(t[r]);if(s===0)return r;s>0?n=r+1:i=r}};Jp.binarySearch=Xy;var rT=(t,e)=>{let n=Xy(t,e);return n<0?-n-1:n};Jp.binarySearch1=rT});var $y=nt(qy=>{var sT=(t,e)=>n=>{let i=e?e(n):n;return t===i?0:t>i?1:-1};qy.compareNum=sT});var Zy=nt(gu=>{function mu(t,e,{ignoreNullUndefined:n=!1}={}){if(t===e)return!0;if(t==null&&e==null)return n;if(t==null||e==null)return!1;if(typeof t=="object"&&typeof e=="object"){for(let i in t)if(!mu(t[i],e[i],{ignoreNullUndefined:n}))return!1;for(let i in e)if(t[i]===void 0&&e[i]!==void 0)return!1;return!0}return!1}gu.equalDeep=mu;gu.equalDeep1=mu;function oT(t,e){return mu(t,e,{ignoreNullUndefined:!0})}gu.equalDeep2=oT});var tm=nt(j=>{var{chain:aT}=Hy(),{createIndex1:lT}=Wy(),{binarySearch:Jy}=Yy(),{compareNum:Ky}=$y(),cT=Object.freeze([]);j.EMPTY_ARR=cT;var uT=()=>{};j.findMinKeep=uT;var hT=(t,e=n=>n)=>{if(t==null)return null;let n,i;for(let r=0;r<t.length;r++){let s=t[r],o=e(s,r);o!=null&&o!=null&&(n===void 0||n>o)&&(n=o,i=s)}return i};j.findMinE=hT;var dT=(t,e=n=>n)=>{if(t==null)return{length:0};let n,i,r,s;for(let o=0;o<t.length;o++){let a=t[o],l=e(a,o);l!=null&&(n===void 0||l<n?(r=n,s=i,n=l,i=a):(r===void 0||l<r)&&(r=l,s=a))}return[i,s]};j.findTwoMinE=dT;var fT=(t,e)=>{let n;for(let i=0;i<t.length;i++){let r=t[i];for(let s of e){let o=n&&s(n),a=s(r);if(a==null)break;a!=null&&(o===void 0||o>a)&&(n=r)}}return n};j.findMinE_multi=fT;var pT=(t,e=i=>i,n)=>t[jy(t,e,n)];j.findMaxE=pT;var jy=(t,e=i=>i,n)=>{let i,r;for(let s=0;s<t.length;s++){let o=t[s],a=e(o,s);if(n!==void 0&&n===a)return o;a!=null&&(i===void 0||i<a)&&(i=a,r=s)}return r};j.findMaxIndex=jy;var mT=(t,e)=>{let n;for(let i of t)(n===void 0||e(n,i)>0)&&(n=i);return n};j.findMinECompare=mT;var gT=t=>t?.[t.length-1];j.last=gT;var vT=(t,e,n,i)=>{for(let r=(n??t.length)-1;r>(i??-1);r--)if(e(t[r]))return r;return-1};j.findLastIndex=vT;var _T=(t,e,n,i)=>{for(let r=n??0;r<(i??t.length);r++)if(e(t[r],r))return r;return-1};j.findIndex=_T;var yT=(t,e,n)=>{for(let i=(n??t.length)-1;i>-1;i--){let r=t[i];if(e(r))return r}};j.findLast=yT;var xT=(t,e=r=>r,{gt:n=Qy.gt,quickStop:i}={})=>{if(t==null)return null;let r;for(let s of t){if(s==null)continue;let o=e(s);if(!(o==null||o===!1)){if(i!=null&&i===o)return o;(r===void 0||n(r,o))&&(r=o)}}return r===void 0?null:r};j.findMinValue=xT;var Qy={le:(t,e)=>t<=e,lt:(t,e)=>t<e,ge:(t,e)=>t>=e,gt:(t,e)=>t>e},ST=(t,e=(i,r)=>i,{lt:n=Qy.lt}={})=>{if(t==null)return null;let i;for(let r=0;r<t.length;r++){let s=t[r];if(s==null)continue;let o=e(s,r);o!=null&&(i===void 0||n(i,o))&&(i=o)}return i===void 0?null:i};j.findMaxValue=ST;var MT=(t,e=i=>i,n)=>{let i,r;for(let s=0;s<t.length;s++){let o=t[s],a=e(o);if(a===n)return s;a!=null&&(i===void 0||i>a)&&(i=a,r=s)}return r};j.findMinIndex=MT;function ET(t,e,n){return[...t.slice(0,n),e,...t.slice(n)]}j.insertAt=ET;function wT(t,e){return[...t.slice(0,e),...t.slice(e+1)]}j.removeAt=wT;function TT(t){return e=>(t.push(e),()=>tx(t,e))}j.addRemove=TT;function ex(t,e){return t.filter(n=>!~e.indexOf(n))}j.withoutAll=ex;j.removeAll=ex;function tx(t,e){if(t==null)return;let n=t.indexOf(e);if(n!==-1)return t.splice(n,1),!0}j.remove1Mutate=tx;function AT(t,e){if(t==null)return;let n=t.findIndex(e);if(n!==-1)return t.splice(n,1)[0]}j.findRemove1Mutate=AT;function bT(t,e){if(e!=null)return e.filter(n=>n!==t)}j.without=bT;function Kp(t,e=n=>n){if(!t)return t;let n=[],i=[];for(let r of t){let s=e(r);i.includes(s)||(n.push(r),i.push(s))}return n}j.unique=Kp;j.unique1=Kp;function CT(t,e=n=>n){if(!t)return t;let n=[];for(let i of t){let r=e(i),s=Jy(n,Ky(r,e));s<0&&n.splice(-s-1,0,i)}return n}j.uniqueB=CT;function RT(t,e=n=>n){if(!t)return t;let{equalDeep1:n}=Zy(),i=[],r=[];for(let s of t){let o=e(s);~r.findIndex(a=>n(a,o))||(i.push(s),r.push(o))}return i}j.uniqueDeep=RT;function IT(t,e="id",n){if(t==null)return{};let i={};for(let r=0;r<t.length;r++){let s=t[r];if(i.hasOwnProperty(s[e]))throw new Error(`[indexAttr] Property existed [${s[e]}]`);i[s[e]]=n?s[n]:s}return i}j.indexAttr=IT;function PT(t,e="id",n){if(t==null)return{};let i={};for(let r=0;r<t.length;r++){let s=t[r];i.hasOwnProperty(s[e])||(i[s[e]]=n?s[n]:s)}return i}j.indexAttr1=PT;j["createIndex"]=lT;var LT=(t,e,n)=>{if(!t?.length)return[];let i=[];for(let r of t){let s=e?e(r):r,o=Jy(i,Ky(s,l=>l.key)),a;o<0?(a={key:s,values:[]},i.splice(-o-1,0,a)):a=i[o],a.values.push(n?n(r):r)}return i};j.createIndexMulti2=LT;function DT(t,e,n){if(t==null)return{};let i={};for(let r=0;r<t.length;r++){let s=t[r],o=i[e?s[e]:s];o==null&&(o=[],i[e?s[e]:s]=o),o.push(n?s[n]:s)}return i}j.indexAttrMulti=DT;function nx(t,e=i=>i,n=(i,r)=>i>r?1:-1){if(t==null||t.length<2)return t;let i=t.slice();return i.sort((r,s)=>{let o=e(r),a=e(s);return o===a?0:o==null?-1:a==null?1:n(o,a)}),i}j.sort=nx;j.sort1=nx;function NT(t,e){if(t==null)return null;let n=t.slice(0);return n.sort((i,r)=>{for(let s of e){let o=s(i),a=s(r);if(o>a)return 1;if(o<a)return-1}return 0}),n}j.sortMulti=NT;function UT(t,e){if(t==null)return null;let n=t.slice(0);return n.sort((i,r)=>{let s=e(i),o=e(r);for(;s&&o;){if(s.value>o.value)return 1;if(s.value<o.value)return-1;s=s.next?.(),o=o.next?.()}return s&&!o?-1:!s&&o?1:0}),n}j.sortMulti2=UT;function FT(t){if(t==null)return null;let e=t.slice(0);return e.reverse(),e}j.reverse=FT;function ix(t){if(isNaN(t))throw new Error("[createArray] Length is not a number: "+t);let e=new Array(t);for(let n=0;n<e.length;n++)e[n]=n;return e}j.createArray=ix;j.createArray1=ix;var OT=(t,e)=>{if(isNaN(e))throw new Error("[multiplyArray] times is not a number: "+e);let n=[];for(let i=0;i<e;i++)n.push(...t);return n};j.multiplyArray=OT;function BT(t,e){let n=[];for(let i=t;i<e;i++)n.push(i);return n}j.createArray2=BT;function kT(t,e){e=e.slice(0);for(let n of t)~e.indexOf(n)||e.push(n);return e}j.addListToSet=kT;function zT(t,e){return~e.indexOf(t)||e.push(t),e}j.addToSetMutate=zT;function VT(t,e,n){let i=t[e];i==null&&(i=[],t[e]=i),i.push(n)}j.addToListMap=VT;function HT(t,e,n){t[e]=[...t[e]||[],...n]}j.concatToListMap=HT;var GT=(t,e,n)=>{t=t.slice(0);let i=[];for(let r=0;r<t.length;r++){let s=t[r],o=e(s);for(let a=r+1;a<t.length;a++){let l=t[a];e(l)===o&&(s=n(s,l),t.splice(a,1),a--)}i.push(s)}return i};j.merge=GT;function WT(...t){let e={};for(let n of t)if(n)for(let i in n)e.hasOwnProperty(i)?e[i]=[...e[i],...n[i]]:e[i]=n[i];return e}j.mergeListMap=WT;function XT(t){let e={};for(let n of t)if(n)for(let i in n)(e[i]=e[i]??[]).push(n[i]);return e}j.mergeMaps=XT;function YT(t,e,n){return t.map(i=>{let r=e.indexOf(i);return r>-1?n[r]:i})}j.replace=YT;function qT(t,e,n){if(t==null)return null;let i=t.findIndex(n);return i===-1?t:jp(i,t,e)}j.replaceFind=qT;function $T(t,e,n){if(t==null)return null;let i=t.findIndex(n);return i===-1?t:jp(i,t,e(t[i]))}j.replaceFind_f=$T;var ZT=(t,e,n)=>{let i=t.findIndex(e);return i===-1?[...t,n]:[...t.slice(0,i),n,...t.slice(i+1)]};j.upsert=ZT;function JT(t,e,n){if(t==null)return null;let i=t.findIndex(e);return i===-1?t:sx(i,t,n)}j.changeFind=JT;var KT=(t,e,n=0)=>{for(let i=n;i<t.length;i++){let r=t[i],s=e(r,i);if(s!=null)return s}return null};j.findValue=KT;function jT(t,e,n){return t==null?null:t.map(i=>e(i)?n(i):i)}j.replaceBy=jT;function QT(t,e,n){return t.map(i=>i===e?n:i)}j.replace1=QT;function eA(t,e){if(t==null)return[];let n=[],i=[];for(let r of t)(e(r)?n:i).push(r);return[n,i]}j.split=eA;function tA(t,e){if(t==null)return[];let n=[];for(let i=0;i<t.length;i++){let r=t[i];e(r)&&(n.push(r),t.splice(i,1),i--)}return n}j.extract=tA;function rx(t,e){if(t==null)return[];let n=[];for(let i of t)i&&e&&(i=e(i)),i&&(n=n.concat(i));return n}j.flatten1=rx;j.flatten11=rx;var nA=(t,e)=>e.filter((n,i)=>i!==t);j.removeIndex=nA;var jp=(t,e,n)=>e.map((i,r)=>r!==t?i:n);j.replaceIndex=jp;var iA=(t,e,n)=>[...e.slice(0,t),...n,...e.slice(t+1)];j.replaceIndex2=iA;var sx=(t,e,n)=>e.map((i,r)=>r!==t?i:n(i));j.changeIndex=sx;function rA(t,e){let n={};for(let i=0;i<t.length;i++)n[e(i)]=t[i];return n}j.toMap=rA;function Qp(t,e=(n,i)=>n){return t==null?0:t.reduce((n,i,r)=>n+(e(i,r)||0),0)}j.sum=Qp;j.sum1=Qp;var sA=(t,e=n=>n)=>Qp(t,e)/t.length;j.avg=sA;function ox(t,e){if(t==null)return 0;let n=0;for(let i=0;i<t.length;i++){let r=t[i];e(r,i)&&n++}return n}j.count=ox;j.count1=ox;var oA=t=>{let e=typeof t=="function"?t:()=>t,n=0;return()=>{n++;let i=e();return n>=i.length&&(n=0),i[n]}};j.switchAmong=oA;var aA=(t,e)=>{let n=[],i=0;return e.forEach((r,s)=>{let o=s===e.length-1?t.length:i+Math.floor(r*t.length);n.push(t.slice(i,o)),i=o}),n};j.divide=aA;var lA=({get:t,set:e},n,i)=>{let r=t(i),s=t(n);e(r,n),e(s,i)};j.swap=lA;var ax=(t,e)=>{if(t==null||t.length===0)return[];if(t.length===1)return t[0].map(s=>e([s]));let[n,...i]=t,r=[];for(let s of n)r=[...r,...ax(i,o=>e([s,...o]))];return r};j.crossMap=ax;var cA=t=>{let e=[];for(let n=0;n<t.length;n++){let i=t[n];if(!(e.indexOf(i)>-1)){for(let r=n+1;r<t.length;r++)if(t[r]===i){e.push(i);break}}}return e};j.findDuplicateds=cA;var uA=(t,{by:e=i=>i,compare:n=(i,r)=>i===r})=>{if(!t||t.length<2)return[];let i=[];for(let r=0;r<t.length;r++){let s=t[r];if(i.some(l=>l.dups.includes(s)))continue;let o=e(s),a;for(let l=r+1;l<t.length;l++){let c=t[l],u=e(c);n(o,u)&&(a||(a=[s]),a.push(c))}a&&i.push({by:o,dups:a})}return i};j.findDuplicateds2=uA;var hA=t=>aT(t.map(e=>JSON.stringify(e)),Kp,e=>e.map(n=>JSON.parse(n)));j.jsonUnique=hA;var dA=(t,e)=>{if(t==null||t.length<2)return t;let n=[];for(let i=0;i<t.length;i++){let r=t[i];i>0&&n.push(e),n.push(r)}return n};j.joinArr=dA;var fA=(t,e,n=(i,r)=>i===r)=>{e==null&&(e=[]),t==null&&(t=[]);let i=[],r=[];for(let s of e)t.some(o=>n(o,s))||r.push(s);for(let s of t)e.some(o=>n(s,o))||i.push(s);return{added:i,removed:r}};j.compareCol=fA;var pA=t=>{t=t.slice(0);let e=t.length,n=(i,r)=>{let s=t[i];t[i]=t[r],t[r]=s};for(;e!==0;){let i=Math.floor(Math.random()*e);e--,n(e,i)}return t};j.shuffle=pA;var lx=t=>t==null||t.length===0;j.isEmpty=lx;var mA=t=>!lx(t);j.isNotEmpty=mA;var em=(t,e)=>{if(t.length!==e.length)return!1;for(let n of t)if(e.indexOf(n)===-1)return!1;return!0};j.setEqual=em;j.equalSet=em;j.sameSet=em;var gA=t=>{if(t===null)return null;for(let e of t)if(e!==null)return!1;return!0};j.isAllNull=gA;var vA=(t,e)=>e==null?t==null:t==null||t.length>e.length?!0:cx(e.slice(0,t.length),t);j.arrStartsWith=vA;var cx=(t,e,{compare:n=(i,r)=>i===r}={})=>{if(t===e)return!0;if(t==null)return e==null;if(e==null||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!n(t[i],e[i]))return!1;return!0};j.arrEquals=cx;function _A(t,e,n){return n.map((i,r)=>r===t?n[e]:r===e?n[t]:i)}j.flip=_A;var yA=(t,e)=>{let n=t.findIndex(e);if(n===0)return t;if(n===-1)throw 2365342;return[t[n],...t.slice(0,n),...t.slice(n+1)]};j.toFirst=yA;var xA=(t,{compare:e})=>{for(let n=0;n<t.length;n++){let i=t[n];for(let r=n+1;r<t.length;r++){let s=t[r],o=e(i,s);o!=null&&(o<=0?(t.splice(r,1),r--):(t.splice(n,1),n--,r--))}}return t};j.removeDuplicates=xA;var SA=(t,e)=>ux(t,(n,i)=>{for(let r=0;r<n.length;r++){let s=n[r];for(let o=0;o<i.length;o++){let a=i[o];if(e(s,a))return!0}}return!1});j.crossCheckMulti=SA;var ux=(t,e)=>{for(let n=0;n<t.length;n++){let i=t[n];for(let r=n+1;r<t.length;r++){let s=t[r];if(e(i,s))return!0}}return!1};j.crossCheck=ux;var MA=(t,e,n)=>{for(let i=0;i<t.length;i++){let r=t[i];for(let s=0;s<e.length;s++){let o=e[s];n(r,o)}}};j.crossCheck2=MA;var hx=function*(t,e){if(t.length!==0)if(t.length===1)for(let n of t[0])yield e?[...e,n]:[n];else for(let n of t[0])yield*hx(t.slice(1),e?[...e,n]:[n])};j.mixMatchArr2=hx;var EA=(t,e)=>{let n=[],i=[];for(let r of t)e(r)?n.push(r):i.push(r);return[n,i]};j.separate=EA;var wA=(t,e)=>{let n=e.map(()=>[]),i=[];for(let r of t){let s=!1;for(let o=0;o<e.length;o++){let a=e[o];if(a?.(r)){n[o].push(r),s=!0;break}}s||i.push(r)}return[...n,i]};j.separateMulti=wA;var dx=(t,e)=>{for(let n=0;n<(t?.length??0);n++){let i=t[n],r=e(i,n);if(r)return r}};j.findKeep=dx;j.findSelect=dx;var TA=(t,e)=>{if(!t)return null;let n=[];for(let i=0;i<t.length;i++){let r=t[i],s=e(r,i);s&&n.push(s)}return n};j.filterKeep=TA;var AA=(t,e,n)=>{e===void 0&&n===void 0?(e=t,t=0,n=1):n===void 0&&(n=1);let i=[];for(let r=t;r<e;r+=n)i.push(r);return i};j.range=AA;var bA=(t,e)=>{for(let n=0;n<t.length-1;n++)for(let i=n+1;i<t.length;i++)e(t[n],t[i])&&(t.splice(i,1),i--);return t};j.removeConflicts=bA;var CA=t=>(e,n)=>{let i=t(e),r=t(n);return i<r?-1:i>r?1:0};j.sortBy=CA});var px=nt(fx=>{var RA=un(),{addRemove:nm}=tm(),im=class extends RA.Component{constructor(e,n,i){super(e,n,i),this.onUnmounts=[],this.onChangeds=[],this.onMounts=[],this.mounted=!1,this.onMount=nm(this.onMounts),this.onUnmount=nm(this.onUnmounts),this.onChanged=nm(this.onChangeds)}componentDidMount(){this.mounted=!0,this.onMounts.forEach(e=>e())}componentWillUnmount(){this.mounted=!1,this.onUnmounts.forEach(e=>e())}componentDidUpdate(e){this.onChangeds.forEach(n=>n(e))}setState(e,n){this.mounted?super.setState(e,n):(this.state=Object.assign(this.state,e),n&&n())}forceUpdate(){this.mounted&&super.forceUpdate()}onChanged1(e){if(e())return;let i=this.onChanged(()=>{e()&&i()})}};fx.FComponent=im});var _u=nt(rm=>{var{createElement:IA}=un(),{FComponent:PA}=px(),LA=({fn:t,action:e,props:n,onMounted:i,next:r})=>IA(vu,{action:e??t,props:n,onMounted:i,next:r});rm.Invoke=LA;var vu=class extends PA{constructor(e,n){super(e,n),e.action&&e.action({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted}),e.onMounted&&(console.log("[Quan warning] Invoke onMounted is deprecated"),this.onMount(()=>{setTimeout(()=>{this.props.onMounted({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted})},0)}))}render(){let{next:e}=this.props;return e?e():null}};rm.Invoke1=vu});var gx=nt(mx=>{var{cs:DA}=Ar(),{fragments:NA}=po(),{Invoke:UA}=_u(),FA=({createRoot:t,next:e})=>DA(["root",({},n)=>{let i=t(document.getElementById("root"));return i.render(n(i))}],({root:n})=>NA(UA({action:()=>{window.disposeScript=()=>{n.unmount(),console.clear(),document.getElementById("root").remove();let i=document.createElement("div");i.id="root",document.body.appendChild(i)}}}),e()));mx.EsbuildRoot=FA});var om=nt(vx=>{var OA=un(),{createElement:BA}=un(),kA=({action:t,props:e,next:n})=>BA(sm,{action:t,props:e,next:n});vx.OnUnmounted=kA;var sm=class extends OA.Component{componentWillUnmount(){this.props.action({getLatestProps:()=>this.props.props})}render(){let{next:e}=this.props;return e?e():null}}});var yx=nt(_x=>{var{createElement:zA,Component:VA}=un(),HA=({getInitValue:t,initValue:e,props:n,next:i})=>zA(am,{getInitValue:t,initValue:e,props:n,next:i});_x.Static=HA;var am=class extends VA{constructor(e,n){super(e,n),this.value=e.getInitValue?e.getInitValue({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted}):e.initValue!==void 0?e.initValue:e.value}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){let{next:e}=this.props;return e(this.value)??null}}});var yu=nt(xx=>{var{Static:GA}=yx(),WA=({props:t,getInitValue:e,initValue:n,next:i})=>GA({props:t,getInitValue:r=>{let s=e?e(r):n;return{get:()=>s,set:o=>s=o}},next:i});xx.Static2=WA});var Mx=nt(Sx=>{var{cs:XA}=Ar(),{OnUnmounted:YA}=om(),{Static2:qA}=yu(),{fragments:$A}=po(),{Invoke:ZA}=_u(),JA=typeof window>"u"?null:window,KA=({eventName:t,fn:e,action:n,useCapture:i=!1,passive:r=!1,target:s=JA,next:o=void 0})=>XA(["listener",(a,l)=>qA({next:l})],({listener:a})=>$A(s&&ZA({props:{action:n??e},action:({getLatestProps:l})=>{let c=u=>{let{action:d}=l();d(u)};s.addEventListener(t,c,{capture:i,passive:r}),a.set(c)}}),YA({action:()=>{let l=a.get();l&&s.removeEventListener(t,l,{capture:i,passive:r})}}),o?.()));Sx.GlobalEvent=KA});var wx=nt(Ex=>{var{GlobalEvent:jA}=Mx(),QA=({action:t,check:e,useCapture:n})=>jA({eventName:"keydown",useCapture:n,action:i=>e(i)&&t(i)});Ex.GlobalKeyDown2=QA});var Ax=nt(go=>{var Tx=t=>lm(cm(t));go.keyCombo=Tx;go.keyCombo1=Tx;var eb=(t,e)=>lm(e)(t);go.matchEvent=eb;var lm=t=>{let{masks:e=[],key:n,keyCode:i}=t,r=e.reduce((s,o)=>({...s,[o]:!0}),{shift:!1,alt:!1,meta:!1,ctrl:!1});return s=>Object.keys(r).find(o=>s[o+"Key"]!==r[o])?!1:i!=null?i===s.keyCode:n===s.key.toLowerCase()};go.eventMatcher=lm;var cm=t=>{t=t.toLowerCase();let e=/(\^|ctrl\+|control\+|shift\+|alt\+|meta\+)(.+)/i.exec(t);if(e){let n=cm(e[2]);return{masks:[nb[e[1]],...n.masks],key:n.key,keyCode:n.keyCode}}else return{masks:[],key:t==="space"?" ":t.toLowerCase(),keyCode:tb(t.toLowerCase())}};go.parsePattern=cm;var tb=t=>{if(t==="space")return 32;if(t==="comma"||t===",")return 188;if(isNaN(t)){if(t.length===1)return t.toUpperCase().charCodeAt(0)}else return 48+ +t},nb={"^":"ctrl","ctrl+":"ctrl","control+":"ctrl","shift+":"shift","alt+":"alt","meta+":"meta"}});var Cx=nt(um=>{var{Component:ib,createElement:rb}=un(),bx=({next:t,getInitValue:e,initValue:n})=>rb(xu,{next:t,getInitValue:e,initValue:n});um.State=bx;um.State1=bx;var xu=class extends ib{constructor(e,n){super(e,n),this.state={value:e.getInitValue?e.getInitValue():e.initValue}}componentWillUnmount(){this.unmounted=Date.now()}setState(e,n){this.unmounted||super.setState(e,n)}render(){let{next:e}=this.props,{value:n}=this.state;return e?.({value:n,onChange:(i,r)=>{this.setState({value:i},r)},change:(i,r)=>{this.setState(s=>({...s,value:i(s.value)}),r)}})??null}};xu.$_r2_state=!0});var Ix=nt(Rx=>{var{State:sb}=Cx();Rx.UseState=sb});var Lx=nt(Px=>{var ob=t=>{let e=t.match(/^([WE])(\d+)([NS])(\d+)$/);if(!e)return null;let[,n,i,r,s]=e;return i=parseInt(i,10),s=parseInt(s,10),{we:n,wx:i,ns:r,ny:s}};Px.parseRoomName=ob});var Dx=nt(Su=>{var{parseRoomName:ab}=Lx();function hm(t){let{we:e,wx:n,ns:i,ny:r}=ab(t),s=e==="W"?-n-1:n,o=i==="N"?-r-1:r;return{x:s,y:o}}Su.roomNameToWorldXY=hm;function lb(t,e){let n,i,r,s;return t<0?(n="W",r=-t-1):(n="E",r=t),e<0?(i="N",s=-e-1):(i="S",s=e),`${n}${r}${i}${s}`}Su.worldXYToRoomName=lb;function cb(t,e){t==null&&console.log("pos1==null"),e==null&&console.log("pos2==null");let n=hm(t.roomName),i=hm(e.roomName),r=n.x*50+t.x,s=n.y*50+t.y,o=i.x*50+e.x,a=i.y*50+e.y;return Math.max(Math.abs(r-o),Math.abs(s-a))}Su.crossRoomDistance=cb});var e1=nt(QM=>{var EL=(...t)=>t.map(e=>{if(e==null)return null;if(typeof e=="string")return e;if(typeof e=="boolean")return null;if(typeof e=="object")return Object.keys(e).filter(n=>e[n]).join(" ");throw"5t43543 "+e}).filter(e=>e).join(" ");QM.cx1=EL});var n1=nt(t1=>{var wL=un(),{createElement:TL}=un(),AL=({action:t,props:e,timeout:n=!0,next:i})=>TL(Gg,{action:t,props:e,timeout:n,next:i});t1.OnMounted=AL;var Gg=class extends wL.Component{componentDidMount(){this.mounted=!0,this.props.timeout?setTimeout(()=>{this.props.action({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted})},0):this.props.action({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted})}componentWillUnmount(){this.mounted=!1}render(){let{next:e}=this.props;return e?e():null}}});var s1=nt(r1=>{var i1=un(),bL=({fn:t,action:e,props:n,next:i})=>i1.createElement(Wg,{action:e??t,props:n,next:i});r1.OnUpdate=bL;var Wg=class extends i1.Component{componentDidUpdate(e){this.props.action({prevProps:e.props,getLatestProps:()=>this.props.props,isMounted:()=>!0})}render(){let{next:e}=this.props;return e?.()??null}}});var a1=nt(o1=>{var{arrEquals:CL}=tm(),{cs:RL}=Ar(),{fragments:IL}=po(),{Invoke:PL}=_u(),{OnMounted:LL}=n1(),{OnUnmounted:DL}=om(),{OnUpdate:NL}=s1(),{Static2:UL}=yu(),FL=({action:t,props:e,watches:n,runInstantly:i})=>RL(["cleanup",(r,s)=>UL({next:s})],({cleanup:r})=>IL((i?PL:LL)({props:e,action:s=>{r.set(t(s))}}),n&&NL({props:{watches:n,props:e},action:({prevProps:s,getLatestProps:o,isMounted:a})=>{let{watches:l}=o();CL(s,l)||(r.get()?.(),r.set(t({getLatestProps:()=>o().props,isMounted:a})))}}),DL({action:()=>{r.get()?.()}})));o1.Effect=FL});var y1=zt(Uy());var x1=zt(Ar()),S1=zt(gx());var p1=zt(un());var m1=zt(Ar()),g1=zt(po()),Yg=zt(wx()),qg=zt(Ax()),v1=zt(Ix());var Pe=zt(un());var KM=zt(Ar());var Un=zt(Dx()),Lt=["shard0","shard1","shard2","shard3","shardX"],os=["#5aa9e6","#7bd389","#f2a65a","#c77dff","#ff6b8b"],pe=50,$e={x0:-51,y0:18,size:21},Tn=$e.size*pe,Mu=9,ub={shard0:["W41S29","W38S33","W47S27","W33S25"],shard1:["W38S33","W36S29","W43S22"],shard2:["W41S29","W46S33","W37S21"],shard3:["W42S24","W39S24","W43S25","W38S25","W32S26"],shardX:["W41S29","W36S29","W44S27","W38S22"]},Ux="Quan Le",Gi=(t,e,n)=>{let i=Math.imul(t|0,374761393)^Math.imul(e|0,668265263)^Math.imul(n|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},vo=(t,e,n)=>{let i=Math.floor(t),r=Math.floor(e),s=t-i,o=e-r,a=s*s*(3-2*s),l=o*o*(3-2*o),c=Gi(i,r,n),u=Gi(i+1,r,n),d=Gi(i,r+1,n),f=Gi(i+1,r+1,n);return c+(u-c)*a+(d-c)*l+(c-u-d+f)*a*l},mm=t=>Lt.indexOf(t)*7919+17,hb=(t,e)=>({wx:t<0?-t-1:t,ny:e<0?-e-1:e}),gm=(t,e)=>{let{wx:n,ny:i}=hb(t,e),r=n%10,s=i%10;return r===0||s===0?"highway":r>=4&&r<=6&&s>=4&&s<=6?r===5&&s===5?"center":"keeper":"normal"},dm={},Fx=t=>{if(dm[t])return dm[t];let e=new Set(ub[t]),n=new Set;for(let i of e){let{x:r,y:s}=(0,Un.roomNameToWorldXY)(i);[[1,0],[-1,0],[0,1],[0,-1]].map(([a,l])=>({x:r+a,y:s+l})).filter(a=>gm(a.x,a.y)==="normal"&&!e.has((0,Un.worldXYToRoomName)(a.x,a.y))).sort((a,l)=>Gi(a.x,a.y,mm(t))-Gi(l.x,l.y,mm(t))).slice(0,2).forEach(a=>n.add((0,Un.worldXYToRoomName)(a.x,a.y)))}return dm[t]={owned:e,remote:n}},Za=(t,e,n)=>{let i=(0,Un.worldXYToRoomName)(e,n),{owned:r,remote:s}=Fx(t);if(r.has(i))return"owned";if(s.has(i))return"remote";let o=gm(e,n);return o==="normal"?"neutral":o},vm=t=>[...Fx(t).owned];var fm=0,_o=1,Eu=2,$a=6,pm={},Ox=t=>{if(pm[t])return pm[t];let e=mm(t),n=new Uint8Array(Tn*Tn),i=new Uint8Array(Tn*Tn),r={},s=(c,u,d)=>(r[c]??=[]).push([u,d]),o=$e.x0*pe,a=$e.y0*pe,l=(c,u)=>(u-a)*Tn+(c-o);for(let c=0;c<$e.size;c++)for(let u=0;u<$e.size;u++){let d=$e.x0+u,f=$e.y0+c,p=gm(d,f),m=Za(t,d,f),x=p==="highway"?.74:.6,g=p==="highway"?.8:.45;for(let T=0;T<pe;T++)for(let A=0;A<pe;A++){let b=d*pe+A,M=f*pe+T,S=A===0||A===pe-1,P=T===0||T===pe-1,k;if(S&&P)k=_o;else if(S||P){let z=S?(d+(A===0?0:1))*13.7:(f+(T===0?0:1))*13.7+500;k=vo((S?M:b)/5,z,e+7)<g?fm:_o}else{let z=.55*vo(b/14,M/14,e)+.3*vo(b/7,M/7,e+1)+.15*vo(b/3.5,M/3.5,e+2),W=.6*vo(b/9,M/9,e+101)+.4*vo(b/4.5,M/4.5,e+102);k=z>x?_o:W>.64&&p!=="highway"?Eu:fm,m==="owned"&&Math.max(Math.abs(A-25),Math.abs(T-25))<=$a+1&&(k=fm)}n[l(b,M)]=k}if(p==="highway")continue;let h=new Set,v=(T,A)=>{for(let b=0;b<300;b++){let M=3+Math.floor(Gi(d*31+b,f*17+T,e+3)*44),S=3+Math.floor(Gi(d*19+T,f*23+b,e+4)*44),P=d*pe+M,k=f*pe+S,z=M+","+S;if(!(n[l(P,k)]===_o||h.has(z))&&!(Math.max(Math.abs(M-25),Math.abs(S-25))<A))return h.add(z),{lx:M,ly:S,X:P,Y:k}}return null},_=m==="owned"?$a+3:0,y=[];if(p==="keeper"||p==="center")for(let T=0;T<3;T++){let A=v(10+T,_);if(A&&(s("source",A.X,A.Y),p==="keeper")){let b=v(20+T,0);b&&s("keeperLair",b.X,b.Y)}}else{let T=v(1,_);T&&(s(m==="owned"?"controllerOwned":m==="remote"?"controllerReserved":"controller",T.X,T.Y),y.push(T));let A=Gi(d,f,e+9)<.35?1:2;for(let b=0;b<A;b++){let M=v(10+b,_);M&&(s("source",M.X,M.Y),y.push(M))}}let C=v(30,_);C&&s("mineral",C.X,C.Y),m==="owned"&&db({roomX:d,roomY:f,addStructure:s,setRoad:(T,A)=>i[l(T,A)]=1,targets:y})}return pm[t]={terrain:n,roads:i,structures:r}},Nx={spawn:[[0,0],[-4,0],[4,0]],storage:[[0,2]],terminal:[[2,2]],tower:[[-2,-2],[2,-2],[0,-4],[-2,2],[0,4],[-4,-2]]},db=({roomX:t,roomY:e,addStructure:n,setRoad:i,targets:r})=>{let s=t*pe+25,o=e*pe+25,a=new Set;for(let c in Nx)for(let[u,d]of Nx[c])n(c,s+u,o+d),a.add(u+","+d);let l=0;for(let c=1;c<=$a;c++)for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++)Math.max(Math.abs(d),Math.abs(u))===c&&((d+u)%2!==0?i(s+d,o+u):!a.has(d+","+u)&&l<60&&(n("extension",s+d,o+u),l++));for(let{X:c,Y:u}of r){let d=Math.abs(c-s)>=Math.abs(u-o),f=d?s+Math.sign(c-s)*($a+1):s,p=d?o:o+Math.sign(u-o)*($a+1),m=()=>{for(;f!==c;)i(f,p),f+=Math.sign(c-f)},x=()=>{for(;p!==u;)i(f,p),p+=Math.sign(u-p)};d?(m(),x()):(x(),m())}};var Rh="174";var vS=0,ng=1,_S=2;var ig=1,yS=2,Ci=3,Ji=0,_n=1,Ri=2,tr=0,fs=1,Nl=2,rg=3,sg=4,xS=5,Ur=100,SS=101,MS=102,ES=103,wS=104,TS=200,AS=201,bS=202,CS=203,ju=204,Qu=205,RS=206,IS=207,PS=208,LS=209,DS=210,NS=211,US=212,FS=213,OS=214,Ih=0,Ph=1,Lh=2,ps=3,Dh=4,Nh=5,Uh=6,Fh=7,og=0,BS=1,kS=2,nr=0,zS=1,VS=2,HS=3,GS=4,WS=5,XS=6,YS=7;var ag=300,bs=301,Cs=302,Oh=303,Bh=304,Ul=306,eh=1e3,Dr=1001,th=1002,sn=1003,qS=1004;var Fl=1005;var mi=1006,kh=1007;var Br=1008;var Ii=1009,lg=1010,cg=1011,Yo=1012,zh=1013,kr=1014,vi=1015,qo=1016,Vh=1017,Hh=1018,Rs=1020,ug=35902,hg=1021,dg=1022,ti=1023,fg=1024,pg=1025,ds=1026,ms=1027,Gh=1028,Wh=1029,mg=1030,Xh=1031;var Yh=1033,Ol=33776,Bl=33777,kl=33778,zl=33779,qh=35840,$h=35841,Zh=35842,Jh=35843,Kh=36196,jh=37492,Qh=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,hd=37819,dd=37820,fd=37821,Vl=36492,pd=36494,md=36495,gg=36283,gd=36284,vd=36285,_d=36286;var ol=2300,nh=2301,Ku=2302,Wm=2400,Xm=2401,Ym=2402;var $S=3200,ZS=3201;var vg=0,JS=1,ir="",$t="srgb",gs="srgb-linear",al="linear",ut="srgb";var hs=7680;var qm=519,KS=512,jS=513,QS=514,_g=515,eM=516,tM=517,nM=518,iM=519,$m=35044;var yg="300 es",wi=2e3,ll=2001;var Ki=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bx=1234567,No=Math.PI/180,Fo=180/Math.PI;function Is(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ve(t,e,n){return Math.max(e,Math.min(n,t))}function xg(t,e){return(t%e+e)%e}function fb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function pb(t,e,n){return t!==e?(n-t)/(e-t):0}function il(t,e,n){return(1-n)*t+n*e}function mb(t,e,n,i){return il(t,e,1-Math.exp(-n*i))}function gb(t,e=1){return e-Math.abs(xg(t,e*2)-e)}function vb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _b(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function yb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function xb(t,e){return t+Math.random()*(e-t)}function Sb(t){return t*(.5-Math.random())}function Mb(t){t!==void 0&&(Bx=t);let e=Bx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eb(t){return t*No}function wb(t){return t*Fo}function Tb(t){return(t&t-1)===0&&t!==0}function Ab(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Cb(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var zn={DEG2RAD:No,RAD2DEG:Fo,generateUUID:Is,clamp:Ve,euclideanModulo:xg,mapLinear:fb,inverseLerp:pb,lerp:il,damp:mb,pingpong:gb,smoothstep:vb,smootherstep:_b,randInt:yb,randFloat:xb,randFloatSpread:Sb,seededRandom:Mb,degToRad:Eb,radToDeg:wb,isPowerOfTwo:Tb,ceilPowerOfTwo:Ab,floorPowerOfTwo:bb,setQuaternionFromProperEuler:Cb,normalize:pn,denormalize:Lo},ue=class{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],x=r[0],g=r[3],h=r[6],v=r[1],_=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*x+a*v+l*C,s[3]=o*g+a*_+l*T,s[6]=o*h+a*y+l*A,s[1]=c*x+u*v+d*C,s[4]=c*g+u*_+d*T,s[7]=c*h+u*y+d*A,s[2]=f*x+p*v+m*C,s[5]=f*g+p*_+m*T,s[8]=f*h+p*y+m*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_m.makeScale(e,n)),this}rotate(e){return this.premultiply(_m.makeRotation(-e)),this}translate(e,n){return this.premultiply(_m.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_m=new Fe;function Sg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rM(){let t=cl("canvas");return t.style.display="block",t}var kx={};function zr(t){t in kx||(kx[t]=!0,console.warn(t))}function sM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function oM(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aM(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var zx=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vx=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rb(){let t={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Uo(r.r),r.g=Uo(r.g),r.b=Uo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?al:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gs]:{primaries:e,whitePoint:i,transfer:al,toXYZ:zx,fromXYZ:Vx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:zx,fromXYZ:Vx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),t}var Qe=Rb();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var yo,ih=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yo===void 0&&(yo=cl("canvas")),yo.width=e.width,yo.height=e.height;let i=yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yo}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=cl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ib=0,Oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ym(r[o].image)):s.push(ym(r[o]))}else s=ym(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function ym(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ih.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pb=0,Ot=class extends Ki{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Dr,r=Dr,s=mi,o=Br,a=ti,l=Ii,c=Ot.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Is(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ag;Ot.DEFAULT_ANISOTROPY=1;var gt=class{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,C=(h+1)/2,T=(u+f)/4,A=(d+x)/4,b=(m+g)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this.w=Ve(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this.w=Ve(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rh=class extends Ki{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Oo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends rh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ul=class extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sh=class extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==m){let g=1-a,h=l*f+c*p+u*m+d*x,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,h*v);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let y=a*v;if(l=l*g+f*y,c=c*g+p*y,u=u*g+m*y,d=d*g+x*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*f,e[n+1]=l*m+u*f+c*d-a*p,e[n+2]=c*m+u*p+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hx.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xm.copy(this).projectOnVector(e),this.sub(xm)}reflect(e){return this.sub(xm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xm=new L,Hx=new ji,Ai=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wu.copy(i.boundingBox)),wu.applyMatrix4(e.matrixWorld),this.union(wu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Tu.subVectors(this.max,Ja),xo.subVectors(e.a,Ja),So.subVectors(e.b,Ja),Mo.subVectors(e.c,Ja),br.subVectors(So,xo),Cr.subVectors(Mo,So),as.subVectors(xo,Mo);let n=[0,-br.z,br.y,0,-Cr.z,Cr.y,0,-as.z,as.y,br.z,0,-br.x,Cr.z,0,-Cr.x,as.z,0,-as.x,-br.y,br.x,0,-Cr.y,Cr.x,0,-as.y,as.x,0];return!Sm(n,xo,So,Mo,Tu)||(n=[1,0,0,0,1,0,0,0,1],!Sm(n,xo,So,Mo,Tu))?!1:(Au.crossVectors(br,Cr),n=[Au.x,Au.y,Au.z],Sm(n,xo,So,Mo,Tu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wi=[new L,new L,new L,new L,new L,new L,new L,new L],di=new L,wu=new Ai,xo=new L,So=new L,Mo=new L,br=new L,Cr=new L,as=new L,Ja=new L,Tu=new L,Au=new L,ls=new L;function Sm(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ls.fromArray(t,s);let a=r.x*Math.abs(ls.x)+r.y*Math.abs(ls.y)+r.z*Math.abs(ls.z),l=e.dot(ls),c=n.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Lb=new Ai,Ka=new L,Mm=new L,Qi=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Lb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);let n=Ka.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(Mm)),this.expandByPoint(Ka.copy(e.center).sub(Mm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new L,Em=new L,bu=new L,Rr=new L,wm=new L,Cu=new L,Tm=new L,Bo=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Em.copy(e).add(n).multiplyScalar(.5),bu.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Em);let s=e.distanceTo(n)*.5,o=-this.direction.dot(bu),a=Rr.dot(this.direction),l=-Rr.dot(bu),c=Rr.lengthSq(),u=Math.abs(1-o*o),d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){let x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Em).addScaledVector(bu,f),p}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);let i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){wm.subVectors(n,e),Cu.subVectors(i,e),Tm.crossVectors(wm,Cu);let o=this.direction.dot(Tm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rr.subVectors(this.origin,e);let l=a*this.direction.dot(Cu.crossVectors(Rr,Cu));if(l<0)return null;let c=a*this.direction.dot(wm.cross(Rr));if(c<0||l+c>o)return null;let u=-a*Rr.dot(Tm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Eo.setFromMatrixColumn(e,0).length(),s=1/Eo.setFromMatrixColumn(e,1).length(),o=1/Eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,m=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,m=c*u,x=c*d;n[0]=f+x*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,m=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*d,m=a*u,x=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Db,e,Nb)}lookAt(e,n,i){let r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ir.crossVectors(i,Fn),Ir.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ir.crossVectors(i,Fn)),Ir.normalize(),Ru.crossVectors(Fn,Ir),r[0]=Ir.x,r[4]=Ru.x,r[8]=Fn.x,r[1]=Ir.y,r[5]=Ru.y,r[9]=Fn.y,r[2]=Ir.z,r[6]=Ru.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],x=i[6],g=i[10],h=i[14],v=i[3],_=i[7],y=i[11],C=i[15],T=r[0],A=r[4],b=r[8],M=r[12],S=r[1],P=r[5],k=r[9],z=r[13],W=r[2],Z=r[6],Y=r[10],K=r[14],X=r[3],oe=r[7],Q=r[11],Me=r[15];return s[0]=o*T+a*S+l*W+c*X,s[4]=o*A+a*P+l*Z+c*oe,s[8]=o*b+a*k+l*Y+c*Q,s[12]=o*M+a*z+l*K+c*Me,s[1]=u*T+d*S+f*W+p*X,s[5]=u*A+d*P+f*Z+p*oe,s[9]=u*b+d*k+f*Y+p*Q,s[13]=u*M+d*z+f*K+p*Me,s[2]=m*T+x*S+g*W+h*X,s[6]=m*A+x*P+g*Z+h*oe,s[10]=m*b+x*k+g*Y+h*Q,s[14]=m*M+x*z+g*K+h*Me,s[3]=v*T+_*S+y*W+C*X,s[7]=v*A+_*P+y*Z+C*oe,s[11]=v*b+_*k+y*Y+C*Q,s[15]=v*M+_*z+y*K+C*Me,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],h=e[15];return m*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],h=e[15],v=d*g*c-x*f*c+x*l*p-a*g*p-d*l*h+a*f*h,_=m*f*c-u*g*c-m*l*p+o*g*p+u*l*h-o*f*h,y=u*x*c-m*d*c+m*a*p-o*x*p-u*a*h+o*d*h,C=m*d*l-u*x*l-m*a*f+o*x*f+u*a*g-o*d*g,T=n*v+i*_+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=v*A,e[1]=(x*f*s-d*g*s-x*r*p+i*g*p+d*r*h-i*f*h)*A,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*g*s-m*f*s+m*r*p-n*g*p-u*r*h+n*f*h)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*h-n*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(m*d*s-u*x*s-m*i*p+n*x*p+u*i*h-n*d*h)*A,e[10]=(o*x*s-m*a*s+m*i*c-n*x*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*x*r-m*d*r+m*i*f-n*x*f-u*i*g+n*d*g)*A,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,x=o*u,g=o*d,h=a*d,v=l*c,_=l*u,y=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+y)*C,r[2]=(m-_)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+h))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(m+_)*A,r[9]=(g-v)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Eo.set(r[0],r[1],r[2]).length(),o=Eo.set(r[4],r[5],r[6]).length(),a=Eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);let c=1/s,u=1/o,d=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,n.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),p,m;if(a===wi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ll)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){let l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u,m,x;if(a===wi)m=(o+s)*d,x=-2*d;else if(a===ll)m=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Eo=new L,fi=new et,Db=new L(0,0,0),Nb=new L(1,1,1),Ir=new L,Ru=new L,Fn=new L,Gx=new et,Wx=new ji,Bn=class{constructor(e=0,n=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wx.setFromEuler(this),this.setFromQuaternion(Wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ub=0,Xx=new L,wo=new ji,Yi=new et,Iu=new L,ja=new L,Fb=new L,Ob=new ji,Yx=new L(1,0,0),qx=new L(0,1,0),$x=new L(0,0,1),Zx={type:"added"},Bb={type:"removed"},To={type:"childadded",child:null},Am={type:"childremoved",child:null},Rt=class extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();let e=new L,n=new Bn,i=new ji,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new Fe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Yx,e)}rotateY(e){return this.rotateOnAxis(qx,e)}rotateZ(e){return this.rotateOnAxis($x,e)}translateOnAxis(e,n){return Xx.copy(e).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yx,e)}translateY(e){return this.translateOnAxis(qx,e)}translateZ(e){return this.translateOnAxis($x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Iu.copy(e):Iu.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ja,Iu,this.up):Yi.lookAt(Iu,ja,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(Yi),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zx),To.child=e,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Bb),Am.child=e,this.dispatchEvent(Am),Am.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zx),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,Fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,Ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new L(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new L,qi=new L,bm=new L,$i=new L,Ao=new L,bo=new L,Jx=new L,Cm=new L,Rm=new L,Im=new L,Pm=new gt,Lm=new gt,Dm=new gt,mn=class{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pi.subVectors(e,n),r.cross(pi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pi.subVectors(r,n),qi.subVectors(i,n),bm.subVectors(e,n);let o=pi.dot(pi),a=pi.dot(qi),l=pi.dot(bm),c=qi.dot(qi),u=qi.dot(bm),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pm.setScalar(0),Lm.setScalar(0),Dm.setScalar(0),Pm.fromBufferAttribute(e,n),Lm.fromBufferAttribute(e,i),Dm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pm,s.x),o.addScaledVector(Lm,s.y),o.addScaledVector(Dm,s.z),o}static isFrontFacing(e,n,i,r){return pi.subVectors(i,n),qi.subVectors(e,n),pi.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Ao.subVectors(r,i),bo.subVectors(s,i),Cm.subVectors(e,i);let l=Ao.dot(Cm),c=bo.dot(Cm);if(l<=0&&c<=0)return n.copy(i);Rm.subVectors(e,r);let u=Ao.dot(Rm),d=bo.dot(Rm);if(u>=0&&d<=u)return n.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ao,o);Im.subVectors(e,s);let p=Ao.dot(Im),m=bo.dot(Im);if(m>=0&&p<=m)return n.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(bo,a);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Jx.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(Jx,a);let h=1/(g+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(Ao,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function Nm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Xe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=xg(e,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nm(o,s,e+1/3),this.g=Nm(o,s,e),this.b=Nm(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){let i=lM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Qe.fromWorkingColorSpace(nn.copy(this),e),Math.round(Ve(nn.r*255,0,255))*65536+Math.round(Ve(nn.g*255,0,255))*256+Math.round(Ve(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(nn.copy(this),n);let i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){Qe.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+n,Pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pr),e.getHSL(Pu);let i=il(Pr.h,Pu.h,n),r=il(Pr.s,Pu.s,n),s=il(Pr.l,Pu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Xe;Xe.NAMES=lM;var kb=0,er=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=fs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Qu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kn=class extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new L,Lu=new ue,zb=0,bn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$m,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lu.fromBufferAttribute(this,n),Lu.applyMatrix3(e),this.setXY(n,Lu.x,Lu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}};var hl=class extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var dl=class extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var At=class extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}},Vb=0,Jn=new et,Um=new Rt,Co=new L,On=new Ai,Qa=new Ai,Gt=new L,Nt=class extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?dl:hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return Um.lookAt(e),Um.updateMatrix(),this.applyMatrix4(Um.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(On.min,Qa.min),On.expandByPoint(Gt),Gt.addVectors(On.max,Qa.max),On.expandByPoint(Gt)):(On.expandByPoint(Qa.min),On.expandByPoint(Qa.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),Gt.add(Co)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new L,l[b]=new L;let c=new L,u=new L,d=new L,f=new ue,p=new ue,m=new ue,x=new L,g=new L;function h(b,M,S){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),m.sub(f);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),a[b].add(x),a[M].add(x),a[S].add(x),l[b].add(g),l[M].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,M=v.length;b<M;++b){let S=v[b],P=S.start,k=S.count;for(let z=P,W=P+k;z<W;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new L,y=new L,C=new L,T=new L;function A(b){C.fromBufferAttribute(r,b),T.copy(C);let M=a[b];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(T,M);let P=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,M=v.length;b<M;++b){let S=v[b],P=S.start,k=S.count;for(let z=P,W=P+k;z<W;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new bn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new Nt,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kx=new et,cs=new Bo,Du=new Qi,jx=new L,Nu=new L,Uu=new L,Fu=new L,Fm=new L,Ou=new L,Qx=new L,Bu=new L,bt=class extends Rt{constructor(e=new Nt,n=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ou.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Fm.fromBufferAttribute(d,e),o?Ou.addScaledVector(Fm,u):Ou.addScaledVector(Fm.sub(n),u))}n.add(Ou)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Du.copy(i.boundingSphere),Du.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(Du.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Du,jx)===null||cs.origin.distanceToSquared(jx)>(e.far-e.near)**2))&&(Kx.copy(s).invert(),cs.copy(e.ray).applyMatrix4(Kx),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cs)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,C=_;y<C;y+=3){let T=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=ku(this,h,e,i,c,u,d,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=ku(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,C=_;y<C;y+=3){let T=y,A=y+1,b=y+2;r=ku(this,h,e,i,c,u,d,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){let v=g,_=g+1,y=g+2;r=ku(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function Hb(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;Bu.copy(a),Bu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Bu);return c<n.near||c>n.far?null:{distance:c,point:Bu.clone(),object:t}}function ku(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Nu),t.getVertexPosition(l,Uu),t.getVertexPosition(c,Fu);let u=Hb(t,e,n,i,Nu,Uu,Fu,Qx);if(u){let d=new L;mn.getBarycoord(Qx,Nu,Uu,Fu,d),r&&(u.uv=mn.getInterpolatedAttribute(r,a,l,c,d,new ue)),s&&(u.uv1=mn.getInterpolatedAttribute(s,a,l,c,d,new ue)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};mn.getNormal(Nu,Uu,Fu,f.normal),u.face=f,u.barycoord=d}return u}var vn=class extends Nt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function m(x,g,h,v,_,y,C,T,A,b,M){let S=y/A,P=C/b,k=y/2,z=C/2,W=T/2,Z=A+1,Y=b+1,K=0,X=0,oe=new L;for(let Q=0;Q<Y;Q++){let Me=Q*P-z;for(let De=0;De<Z;De++){let Ze=De*S-k;oe[x]=Ze*v,oe[g]=Me*_,oe[h]=W,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[h]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(De/A),d.push(1-Q/b),K+=1}}for(let Q=0;Q<b;Q++)for(let Me=0;Me<A;Me++){let De=f+Me+Z*Q,Ze=f+Me+Z*(Q+1),$=f+(Me+1)+Z*(Q+1),te=f+(Me+1)+Z*Q;l.push(De,Ze,te),l.push(Ze,$,te),X+=6}a.addGroup(p,X,M),p+=X,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){let e={};for(let n=0;n<t.length;n++){let i=Ps(t[n]);for(let r in i)e[r]=i[r]}return e}function Gb(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var cM={clone:Ps,merge:on},Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},fl=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lr=new L,eS=new ue,tS=new ue,rn=class extends fl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,n){return this.getViewBounds(e,eS,tS),n.subVectors(tS,eS)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Ro=-90,Io=1,oh=class extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(Ro,Io,e,n);r.layers=this.layers,this.add(r);let s=new rn(Ro,Io,e,n);s.layers=this.layers,this.add(s);let o=new rn(Ro,Io,e,n);o.layers=this.layers,this.add(o);let a=new rn(Ro,Io,e,n);a.layers=this.layers,this.add(a);let l=new rn(Ro,Io,e,n);l.layers=this.layers,this.add(l);let c=new rn(Ro,Io,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},pl=class extends Ot{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ah=class extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pl(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:tr});s.uniforms.tEquirect.value=n;let o=new bt(r,s),a=n.minFilter;return n.minFilter===Br&&(n.minFilter=mi),new oh(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},gn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yb={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var ml=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var lh=class extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,c=sn,u=sn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gl=class extends bn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Po=new et,nS=new et,zu=[],iS=new Ai,qb=new et,el=new bt,tl=new Qi,vl=class extends bt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,qb)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Po),iS.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(iS)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Po),tl.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(tl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Po),nS.multiplyMatrices(i,Po),el.matrixWorld=nS,el.raycast(e,zu);for(let o=0,a=zu.length;o<a;o++){let l=zu[o];l.instanceId=s,l.object=this,n.push(l)}zu.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(r*this.count),r,this.count,Gh,vi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Om=new L,$b=new L,Zb=new Fe,An=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Om.subVectors(i,n).cross($b.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Om),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Zb.getNormalMatrix(e),r=this.coplanarPoint(Om).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Qi,Vu=new L,Vo=class{constructor(e=new An,n=new An,i=new An,r=new An,s=new An,o=new An){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],m=r[9],x=r[10],g=r[11],h=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,g-p,y-h).normalize(),i[1].setComponents(l+s,f+c,g+p,y+h).normalize(),i[2].setComponents(l+o,f+u,g+m,y+v).normalize(),i[3].setComponents(l-o,f-u,g-m,y-v).normalize(),i[4].setComponents(l-a,f-d,g-x,y-_).normalize(),n===wi)i[5].setComponents(l+a,f+d,g+x,y+_).normalize();else if(n===ll)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Vu.x=r.normal.x>0?e.max.x:e.min.x,Vu.y=r.normal.y>0?e.max.y:e.min.y,Vu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bi=class extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ch=new L,uh=new L,rS=new et,nl=new Bo,Hu=new Qi,Bm=new L,sS=new L,vs=class extends Rt{constructor(e=new Nt,n=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ch.fromBufferAttribute(n,r-1),uh.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ch.distanceTo(uh);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hu.copy(i.boundingSphere),Hu.applyMatrix4(r),Hu.radius+=s,e.ray.intersectsSphere(Hu)===!1)return;rS.copy(r).invert(),nl.copy(e.ray).applyMatrix4(rS);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let h=u.getX(x),v=u.getX(x+1),_=Gu(this,e,nl,l,h,v,x);_&&n.push(_)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(p),h=Gu(this,e,nl,l,x,g,m-1);h&&n.push(h)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let h=Gu(this,e,nl,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){let x=Gu(this,e,nl,l,m-1,p,m-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Gu(t,e,n,i,r,s,o){let a=t.geometry.attributes.position;if(ch.fromBufferAttribute(a,r),uh.fromBufferAttribute(a,s),n.distanceSqToSegment(ch,uh,Bm,sS)>i)return;Bm.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Bm);if(!(c<e.near||c>e.far))return{distance:c,point:sS.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var oS=new L,aS=new L,Ho=class extends vs{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)oS.fromBufferAttribute(n,r),aS.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+oS.distanceTo(aS);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Go=class extends vs{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}};var _s=class extends Ot{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_l=class extends Ot{constructor(e,n,i,r,s,o,a,l,c,u=ds){if(u!==ds&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ds&&(i=kr),i===void 0&&u===ms&&(i=Rs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ue:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new L,r=[],s=[],o=[],a=new L,l=new et;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ve(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ve(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wo=class extends kn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ue){let i=n,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hh=class extends Wo{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eg(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Wu=new L,km=new Eg,zm=new Eg,Vm=new Eg,dh=class extends kn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Wu.subVectors(r[0],r[1]).add(r[0]),c=Wu);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Wu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Wu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),km.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,x,g),zm.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,x,g),Vm.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(km.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),zm.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Vm.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(km.calc(l),zm.calc(l),Vm.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lS(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Jb(t,e){let n=1-t;return n*n*e}function Kb(t,e){return 2*(1-t)*t*e}function jb(t,e){return t*t*e}function rl(t,e,n,i){return Jb(t,e)+Kb(t,n)+jb(t,i)}function Qb(t,e){let n=1-t;return n*n*n*e}function eC(t,e){let n=1-t;return 3*n*n*t*e}function tC(t,e){return 3*(1-t)*t*t*e}function nC(t,e){return t*t*t*e}function sl(t,e,n,i,r){return Qb(t,e)+eC(t,n)+tC(t,i)+nC(t,r)}var yl=class extends kn{constructor(e=new ue,n=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ue){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sl(e,r.x,s.x,o.x,a.x),sl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fh=class extends kn{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sl(e,r.x,s.x,o.x,a.x),sl(e,r.y,s.y,o.y,a.y),sl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends kn{constructor(e=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ue){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ph=class extends kn{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends kn{constructor(e=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ue){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(rl(e,r.x,s.x,o.x),rl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mh=class extends kn{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(rl(e,r.x,s.x,o.x),rl(e,r.y,s.y,o.y),rl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ue){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(lS(a,l.x,c.x,u.x,d.x),lS(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new ue().fromArray(r))}return this}},cS=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:dh,CubicBezierCurve:yl,CubicBezierCurve3:fh,EllipseCurve:Wo,LineCurve:xl,LineCurve3:ph,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:mh,SplineCurve:Ml}),gh=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cS[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new cS[r.type]().fromJSON(r))}return this}},ys=class extends gh{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new xl(this.currentPoint.clone(),new ue(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new Sl(this.currentPoint.clone(),new ue(e,n),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new yl(this.currentPoint.clone(),new ue(e,n),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Ml(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Wo(e,n,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var jn=class extends Nt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],p=[],m=0,x=[],g=i/2,h=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function v(){let y=new L,C=new L,T=0,A=(n-e)/i;for(let b=0;b<=s;b++){let M=[],S=b/s,P=S*(n-e)+e;for(let k=0;k<=r;k++){let z=k/r,W=z*l+a,Z=Math.sin(W),Y=Math.cos(W);C.x=P*Z,C.y=-S*i+g,C.z=P*Y,d.push(C.x,C.y,C.z),y.set(Z,A,Y).normalize(),f.push(y.x,y.y,y.z),p.push(z,1-S),M.push(m++)}x.push(M)}for(let b=0;b<r;b++)for(let M=0;M<s;M++){let S=x[M][b],P=x[M+1][b],k=x[M+1][b+1],z=x[M][b+1];(e>0||M!==0)&&(u.push(S,P,z),T+=3),(n>0||M!==s-1)&&(u.push(P,k,z),T+=3)}c.addGroup(h,T,0),h+=T}function _(y){let C=m,T=new ue,A=new L,b=0,M=y===!0?e:n,S=y===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,g*S,0),f.push(0,S,0),p.push(.5,.5),m++;let P=m;for(let k=0;k<=r;k++){let W=k/r*l+a,Z=Math.cos(W),Y=Math.sin(W);A.x=M*Y,A.y=g*S,A.z=M*Z,d.push(A.x,A.y,A.z),f.push(0,S,0),T.x=Z*.5+.5,T.y=Y*.5*S+.5,p.push(T.x,T.y),m++}for(let k=0;k<r;k++){let z=C+k,W=P+k;y===!0?u.push(W,W+1,z):u.push(W+1,W,z),b+=3}c.addGroup(h,b,y===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xs=class extends Nt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new L,y=new L,C=new L;for(let T=0;T<n.length;T+=3)p(n[T+0],_),p(n[T+1],y),p(n[T+2],C),l(_,y,C,v)}function l(v,_,y,C){let T=C+1,A=[];for(let b=0;b<=T;b++){A[b]=[];let M=v.clone().lerp(y,b/T),S=_.clone().lerp(y,b/T),P=T-b;for(let k=0;k<=P;k++)k===0&&b===T?A[b][k]=M:A[b][k]=M.clone().lerp(S,k/P)}for(let b=0;b<T;b++)for(let M=0;M<2*(T-b)-1;M++){let S=Math.floor(M/2);M%2===0?(f(A[b][S+1]),f(A[b+1][S]),f(A[b][S])):(f(A[b][S+1]),f(A[b+1][S+1]),f(A[b+1][S]))}}function c(v){let _=new L;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){let v=new L;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];let y=g(v)/2/Math.PI+.5,C=h(v)/Math.PI+.5;o.push(y,1-C)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],C=o[v+4],T=Math.max(_,y,C),A=Math.min(_,y,C);T>.9&&A<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new L,_=new L,y=new L,C=new L,T=new ue,A=new ue,b=new ue;for(let M=0,S=0;M<s.length;M+=9,S+=6){v.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),C.copy(v).add(_).add(y).divideScalar(3);let P=g(C);x(T,S+0,v,P),x(A,S+2,_,P),x(b,S+4,y,P)}}function x(v,_,y,C){C<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.vertices,e.indices,e.radius,e.details)}};var Xu=new L,Yu=new L,Hm=new L,qu=new mn,El=class extends Nt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let r=Math.pow(10,4),s=Math.cos(No*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:h}=qu;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),qu.getNormal(Hm),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let _=(v+1)%3,y=d[v],C=d[_],T=qu[u[v]],A=qu[u[_]],b=`${y}_${C}`,M=`${C}_${y}`;M in f&&f[M]?(Hm.dot(f[M].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),f[M]=null):b in f||(f[b]={index0:c[v],index1:c[_],normal:Hm.clone()})}}for(let m in f)if(f[m]){let{index0:x,index1:g}=f[m];Xu.fromBufferAttribute(a,x),Yu.fromBufferAttribute(a,g),p.push(Xu.x,Xu.y,Xu.z),p.push(Yu.x,Yu.y,Yu.z)}this.setAttribute("position",new At(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xo=class extends ys{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new ys().fromJSON(r))}return this}},Zm=class{static triangulate(e,n,i=2){let r=n&&n.length,s=r?n[0]*i:e.length,o=uM(e,0,s,i,!0),a=[];if(!o||o.next===o.prev)return a;let l,c,u,d,f,p,m;if(r&&(o=aC(e,n,o,i)),e.length>80*i){l=u=e[0],c=d=e[1];for(let x=i;x<s;x+=i)f=e[x],p=e[x+1],f<l&&(l=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p);m=Math.max(u-l,d-c),m=m!==0?32767/m:0}return wl(o,a,i,l,c,m,0),a}};function uM(t,e,n,i,r){let s,o;if(r===_C(t,e,n,i)>0)for(s=e;s<n;s+=i)o=uS(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=uS(s,t[s],t[s+1],o);return o&&yd(o,o.next)&&(Al(o),o=o.next),o}function Ss(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(yd(n,n.next)||Mt(n.prev,n,n.next)===0)){if(Al(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function wl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&dC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?rC(t,i,r,s):iC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Al(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=sC(Ss(t),e,n),wl(t,e,n,i,r,s,2)):o===2&&oC(t,e,n,i,r,s):wl(Ss(t),e,n,i,r,s,1);break}}}function iC(t){let e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Do(r,a,s,l,o,c,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rC(t,e,n,i){let r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<d?u<f?u:f:d<f?d:f,x=a>l?a>c?a:c:l>c?l:c,g=u>d?u>f?u:f:d>f?d:f,h=Jm(p,m,e,n,i),v=Jm(x,g,e,n,i),_=t.prevZ,y=t.nextZ;for(;_&&_.z>=h&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Do(a,u,l,d,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Do(a,u,l,d,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=h;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Do(a,u,l,d,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Do(a,u,l,d,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sC(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!yd(r,s)&&hM(r,i,i.next,s)&&Tl(r,s)&&Tl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Al(i),Al(i.next),i=t=s),i=i.next}while(i!==t);return Ss(i)}function oC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mC(o,a)){let l=dM(o,a);o=Ss(o,o.next),l=Ss(l,l.next),wl(o,e,n,i,r,s,0),wl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function aC(t,e,n,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=uM(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(pC(c));for(r.sort(lC),s=0;s<r.length;s++)n=cC(r[s],n);return n}function lC(t,e){return t.x-e.x}function cC(t,e){let n=uC(t,e);if(!n)return e;let i=dM(n,t);return Ss(i,i.next),Ss(n,n.next)}function uC(t,e){let n=e,i=-1/0,r,s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Do(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Tl(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&hC(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function hC(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function dC(t,e,n,i){let r=t;do r.z===0&&(r.z=Jm(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,fC(r)}function fC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Jm(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function pC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Do(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function mC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!gC(t,e)&&(Tl(t,e)&&Tl(e,t)&&vC(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||yd(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function yd(t,e){return t.x===e.x&&t.y===e.y}function hM(t,e,n,i){let r=Zu(Mt(t,e,n)),s=Zu(Mt(t,e,i)),o=Zu(Mt(n,i,t)),a=Zu(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&$u(t,n,e)||s===0&&$u(t,i,e)||o===0&&$u(n,t,i)||a===0&&$u(n,e,i))}function $u(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Zu(t){return t>0?1:t<0?-1:0}function gC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&hM(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Tl(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function vC(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function dM(t,e){let n=new Km(t.i,t.x,t.y),i=new Km(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function uS(t,e,n,i){let r=new Km(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Al(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Km(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _C(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Nr=class{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Nr.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];hS(e),dS(i,e);let o=e.length;n.forEach(hS);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,dS(i,n[l]);let a=Zm.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function hS(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function dS(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Ms=class extends xs{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ms(e.radius,e.detail)}},Es=class extends xs{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Es(e.radius,e.detail)}},Qn=class extends Nt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],m=[],x=[],g=[];for(let h=0;h<u;h++){let v=h*f-o;for(let _=0;_<c;_++){let y=_*d-s;m.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){let _=v+c*h,y=v+c*(h+1),C=v+1+c*(h+1),T=v+1+c*h;p.push(_,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new At(m,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}};var ws=class extends Nt{constructor(e=new Xo([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(s,3)),this.setAttribute("uv",new At(o,2));function c(u){let d=r.length/3,f=u.extractPoints(n),p=f.shape,m=f.holes;Nr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,h=m.length;g<h;g++){let v=m[g];Nr.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=Nr.triangulateShape(p,m);for(let g=0,h=m.length;g<h;g++){let v=m[g];p=p.concat(v)}for(let g=0,h=p.length;g<h;g++){let v=p[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,h=x.length;g<h;g++){let v=x[g],_=v[0]+d,y=v[1]+d,C=v[2]+d;i.push(_,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes;return yC(n,e)}static fromJSON(e,n){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=n[e.shapes[r]];i.push(o)}return new ws(i,e.curveSegments)}};function yC(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Ts=class extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vh=class extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_h=class extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ju(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function xC(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var As=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends As{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wm,endingEnd:Wm}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xm:s=e,a=2*n-i;break;case Ym:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xm:o=e,l=2*i-n;break;case Ym:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-n)/(r-n),x=m*m,g=x*m,h=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-p)*g+(1.5+p)*x+.5*m,y=p*g-p*x;for(let C=0;C!==a;++C)s[C]=h*o[u+C]+v*o[c+C]+_*o[l+C]+y*o[d+C];return s}},xh=class extends As{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Sh=class extends As{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ju(n,this.TimeBufferType),this.values=Ju(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Ju(e.times,Array),values:Ju(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case ol:n=this.InterpolantFactoryMethodDiscrete;break;case nh:n=this.InterpolantFactoryMethodLinear;break;case Ku:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ol;case this.InterpolantFactoryMethodLinear:return nh;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&xC(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ku,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){let x=n[d+m];if(x!==n[f+m]||x!==n[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=nh;var Fr=class extends ei{constructor(e,n,i){super(e,n,i)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=ol;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mh=class extends ei{};Mh.prototype.ValueTypeName="color";var Eh=class extends ei{};Eh.prototype.ValueTypeName="number";var wh=class extends As{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},bl=class extends ei{InterpolantFactoryMethodLinear(e){return new wh(this.times,this.values,this.getValueSize(),e)}};bl.prototype.ValueTypeName="quaternion";bl.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends ei{constructor(e,n,i){super(e,n,i)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=ol;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends ei{};Th.prototype.ValueTypeName="vector";var Ah=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},fM=new Ah,bh=class{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cl=class extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Rl=class extends Cl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}},Gm=new et,fS=new L,pS=new L,jm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;fS.setFromMatrixPosition(e.matrixWorld),n.position.copy(fS),pS.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pS),n.updateMatrixWorld(),Gm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Il=class extends fl{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Qm=class extends jm{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pl=class extends Cl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ch=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var wg="\\[\\]\\.:\\/",SC=new RegExp("["+wg+"]","g"),Tg="[^"+wg+"]",MC="[^"+wg.replace("\\.","")+"]",EC=/((?:WC+[\/:])*)/.source.replace("WC",Tg),wC=/(WCOD+)?/.source.replace("WCOD",MC),TC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tg),AC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tg),bC=new RegExp("^"+EC+wC+TC+AC+"$"),CC=["material","materials","bones","map"],eg=class{constructor(e,n,i){let r=i||it.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},it=class{constructor(e,n,i){this.path=n,this.parsedPath=i||it.parseTrackName(n),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,n,i):new it(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SC,"")}static parseTrackName(e){let n=bC.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);CC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=it.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=eg;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x3=new Float32Array(1);var mS=new et,Ll=class{constructor(e,n,i=0,r=1/0){this.ray=new Bo(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mS.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mS),this}intersectObject(e,n=!0,i=[]){return tg(e,this,i,n),i.sort(gS),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)tg(e[r],this,i,n);return i.sort(gS),i}};function gS(t,e){return t.distance-e.distance}function tg(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)tg(s[o],e,n,!0)}}var Dl=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function Ag(t,e,n,i){let r=RC(i);switch(n){case hg:return t*e;case fg:return t*e;case pg:return t*e*2;case Gh:return t*e/r.components*r.byteLength;case Wh:return t*e/r.components*r.byteLength;case mg:return t*e*2/r.components*r.byteLength;case Xh:return t*e*2/r.components*r.byteLength;case dg:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case Yh:return t*e*4/r.components*r.byteLength;case Ol:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $h:case Jh:return Math.max(t,16)*Math.max(e,8)/4;case qh:case Zh:return Math.max(t,8)*Math.max(e,8)/2;case Kh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vl:case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gg:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RC(t){switch(t){case Ii:case lg:return{byteLength:1,components:1};case Yo:case cg:case qo:return{byteLength:2,components:1};case Vh:case Hh:return{byteLength:2,components:4};case kr:case zh:case vi:return{byteLength:4,components:1};case ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);function OM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IC(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var PC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aR="gl_FragColor = linearToOutputTexel( gl_FragColor );",lR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_R=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ER=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:PC,alphahash_pars_fragment:LC,alphamap_fragment:DC,alphamap_pars_fragment:NC,alphatest_fragment:UC,alphatest_pars_fragment:FC,aomap_fragment:OC,aomap_pars_fragment:BC,batching_pars_vertex:kC,batching_vertex:zC,begin_vertex:VC,beginnormal_vertex:HC,bsdfs:GC,iridescence_fragment:WC,bumpmap_pars_fragment:XC,clipping_planes_fragment:YC,clipping_planes_pars_fragment:qC,clipping_planes_pars_vertex:$C,clipping_planes_vertex:ZC,color_fragment:JC,color_pars_fragment:KC,color_pars_vertex:jC,color_vertex:QC,common:eR,cube_uv_reflection_fragment:tR,defaultnormal_vertex:nR,displacementmap_pars_vertex:iR,displacementmap_vertex:rR,emissivemap_fragment:sR,emissivemap_pars_fragment:oR,colorspace_fragment:aR,colorspace_pars_fragment:lR,envmap_fragment:cR,envmap_common_pars_fragment:uR,envmap_pars_fragment:hR,envmap_pars_vertex:dR,envmap_physical_pars_fragment:ER,envmap_vertex:fR,fog_vertex:pR,fog_pars_vertex:mR,fog_fragment:gR,fog_pars_fragment:vR,gradientmap_pars_fragment:_R,lightmap_pars_fragment:yR,lights_lambert_fragment:xR,lights_lambert_pars_fragment:SR,lights_pars_begin:MR,lights_toon_fragment:wR,lights_toon_pars_fragment:TR,lights_phong_fragment:AR,lights_phong_pars_fragment:bR,lights_physical_fragment:CR,lights_physical_pars_fragment:RR,lights_fragment_begin:IR,lights_fragment_maps:PR,lights_fragment_end:LR,logdepthbuf_fragment:DR,logdepthbuf_pars_fragment:NR,logdepthbuf_pars_vertex:UR,logdepthbuf_vertex:FR,map_fragment:OR,map_pars_fragment:BR,map_particle_fragment:kR,map_particle_pars_fragment:zR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:HR,morphinstance_vertex:GR,morphcolor_vertex:WR,morphnormal_vertex:XR,morphtarget_pars_vertex:YR,morphtarget_vertex:qR,normal_fragment_begin:$R,normal_fragment_maps:ZR,normal_pars_fragment:JR,normal_pars_vertex:KR,normal_vertex:jR,normalmap_pars_fragment:QR,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:o2,project_vertex:a2,dithering_fragment:l2,dithering_pars_fragment:c2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:d2,shadowmap_pars_vertex:f2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:v2,skinning_vertex:_2,skinnormal_vertex:y2,specularmap_fragment:x2,specularmap_pars_fragment:S2,tonemapping_fragment:M2,tonemapping_pars_fragment:E2,transmission_fragment:w2,transmission_pars_fragment:T2,uv_pars_fragment:A2,uv_pars_vertex:b2,uv_vertex:C2,worldpos_vertex:R2,background_vert:I2,background_frag:P2,backgroundCube_vert:L2,backgroundCube_frag:D2,cube_vert:N2,cube_frag:U2,depth_vert:F2,depth_frag:O2,distanceRGBA_vert:B2,distanceRGBA_frag:k2,equirect_vert:z2,equirect_frag:V2,linedashed_vert:H2,linedashed_frag:G2,meshbasic_vert:W2,meshbasic_frag:X2,meshlambert_vert:Y2,meshlambert_frag:q2,meshmatcap_vert:$2,meshmatcap_frag:Z2,meshnormal_vert:J2,meshnormal_frag:K2,meshphong_vert:j2,meshphong_frag:Q2,meshphysical_vert:eI,meshphysical_frag:tI,meshtoon_vert:nI,meshtoon_frag:iI,points_vert:rI,points_frag:sI,shadow_vert:oI,shadow_frag:aI,sprite_vert:lI,sprite_frag:cI},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Pi={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Pi.physical={uniforms:on([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var xd={r:0,b:0,g:0},Ls=new Bn,uI=new et;function hI(t,e,n,i,r,s,o){let a=new Xe(0),l=s===!0?0:1,c,u,d=null,f=0,p=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1,C=m(_);C===null?h(a,l):C&&C.isColor&&(h(C,1),y=!0);let T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,y){let C=m(y);C&&(C.isCubeTexture||C.mapping===Ul)?(u===void 0&&(u=new bt(new vn(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ps(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uI.makeRotationFromEuler(Ls)),u.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ut,(d!==C||f!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new bt(new Qn(2,2),new gi({name:"BackgroundMaterial",uniforms:Ps(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(xd,Mg(t)),i.buffers.color.setClear(xd.r,xd.g,xd.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:g,dispose:v}}function dI(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(S,P,k,z,W){let Z=!1,Y=d(z,k,P);s!==Y&&(s=Y,c(s.object)),Z=p(S,z,k,W),Z&&m(S,z,k,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(S,P,k,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,P,k){let z=k.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Z=W[P.id];Z===void 0&&(Z={},W[P.id]=Z);let Y=Z[z];return Y===void 0&&(Y=f(l()),Z[z]=Y),Y}function f(S){let P=[],k=[],z=[];for(let W=0;W<n;W++)P[W]=0,k[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,k,z){let W=s.attributes,Z=P.attributes,Y=0,K=k.getAttributes();for(let X in K)if(K[X].location>=0){let Q=W[X],Me=Z[X];if(Me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),Q===void 0||Q.attribute!==Me||Me&&Q.data!==Me.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function m(S,P,k,z){let W={},Z=P.attributes,Y=0,K=k.getAttributes();for(let X in K)if(K[X].location>=0){let Q=Z[X];Q===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));let Me={};Me.attribute=Q,Q&&Q.data&&(Me.data=Q.data),W[X]=Me,Y++}s.attributes=W,s.attributesNum=Y,s.index=z}function x(){let S=s.newAttributes;for(let P=0,k=S.length;P<k;P++)S[P]=0}function g(S){h(S,0)}function h(S,P){let k=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;k[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),W[S]!==P&&(t.vertexAttribDivisor(S,P),W[S]=P)}function v(){let S=s.newAttributes,P=s.enabledAttributes;for(let k=0,z=P.length;k<z;k++)P[k]!==S[k]&&(t.disableVertexAttribArray(k),P[k]=0)}function _(S,P,k,z,W,Z,Y){Y===!0?t.vertexAttribIPointer(S,P,k,W,Z):t.vertexAttribPointer(S,P,k,z,W,Z)}function y(S,P,k,z){x();let W=z.attributes,Z=k.getAttributes(),Y=P.defaultAttributeValues;for(let K in Z){let X=Z[K];if(X.location>=0){let oe=W[K];if(oe===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let Q=oe.normalized,Me=oe.itemSize,De=e.get(oe);if(De===void 0)continue;let Ze=De.buffer,$=De.type,te=De.bytesPerElement,ge=$===t.INT||$===t.UNSIGNED_INT||oe.gpuType===zh;if(oe.isInterleavedBufferAttribute){let se=oe.data,Te=se.stride,Le=oe.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)h(X.location+be,se.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<X.locationSize;be++)g(X.location+be);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let be=0;be<X.locationSize;be++)_(X.location+be,Me/X.locationSize,$,Q,Te*te,(Le+Me/X.locationSize*be)*te,ge)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)h(X.location+se,oe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<X.locationSize;se++)g(X.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let se=0;se<X.locationSize;se++)_(X.location+se,Me/X.locationSize,$,Q,Me*te,Me/X.locationSize*se*te,ge)}}else if(Y!==void 0){let Q=Y[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(X.location,Q);break;case 3:t.vertexAttrib3fv(X.location,Q);break;case 4:t.vertexAttrib4fv(X.location,Q);break;default:t.vertexAttrib1fv(X.location,Q)}}}}v()}function C(){b();for(let S in i){let P=i[S];for(let k in P){let z=P[k];for(let W in z)u(z[W].object),delete z[W];delete P[k]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let P=i[S.id];for(let k in P){let z=P[k];for(let W in z)u(z[W].object),delete z[W];delete P[k]}delete i[S.id]}function A(S){for(let P in i){let k=i[P];if(k[S.id]===void 0)continue;let z=k[S.id];for(let W in z)u(z[W].object),delete z[W];delete k[S.id]}}function b(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function fI(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x]*f[x];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ii&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function mI(t){let e=this,n=null,i=0,r=!1,s=!1,o=new An,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let v=s?0:i,_=v*4,y=h.clippingState||null;l.value=y,y=u(m,f,_,p);for(let C=0;C!==_;++C)y[C]=n[C];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let h=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function gI(t){let e=new WeakMap;function n(o,a){return a===Oh?o.mapping=bs:a===Bh&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Oh||a===Bh)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ah(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Zo=4,pM=[.125,.215,.35,.446,.526,.582],Us=20,bg=new Il,mM=new Xe,Cg=null,Rg=0,Ig=0,Pg=!1,Ns=(1+Math.sqrt(5))/2,$o=1/Ns,gM=[new L(-Ns,$o,0),new L(Ns,$o,0),new L(-$o,0,Ns),new L($o,0,Ns),new L(0,Ns,-$o),new L(0,Ns,$o),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],vI=new L,Ed=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){let{size:o=256,position:a=vI}=s;Cg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Ig=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_M(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cg,Rg,Ig),this._renderer.xr.enabled=Pg,e.scissorTest=!1,Sd(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Ig=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:qo,format:ti,colorSpace:gs,depthBuffer:!1},r=vM(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vM(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_I(s)),this._blurMaterial=yI(s,e,n)}return r}_compileMaterial(e){let n=new bt(this._lodPlanes[0],e);this._renderer.compile(n,bg)}_sceneToCubeUV(e,n,i,r,s){let l=new rn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mM),d.toneMapping=nr,d.autoClear=!1;let m=new Kn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new bt(new vn,m),g=!1,h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,g=!0):(m.color.copy(mM),g=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let y=this._cubeSize;Sd(r,_*y,v>2?y:0,y,y),d.setRenderTarget(r),g&&d.render(x,l),d.render(e,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===bs||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_M());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Sd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bg)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gM[(r-s-1)%gM.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new bt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Us-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Us;g>Us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);let h=[],v=0;for(let A=0;A<Us;++A){let b=A/x,M=Math.exp(-b*b/2);h.push(M),A===0?v+=M:A<g&&(v+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;let y=this._sizeLods[r],C=3*y*(r>_-Zo?r-_+Zo:0),T=4*(this._cubeSize-y);Sd(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(d,bg)}};function _I(t){let e=[],n=[],i=[],r=t,s=t-Zo+1+pM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zo?l=pM[o-t+Zo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,x=3,g=2,h=1,v=new Float32Array(x*m*p),_=new Float32Array(g*m*p),y=new Float32Array(h*m*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,b=T>2?0:-1,M=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(M,x*m*T),_.set(f,g*m*T);let S=[T,T,T,T,T,T];y.set(S,h*m*T)}let C=new Nt;C.setAttribute("position",new bn(v,x)),C.setAttribute("uv",new bn(_,g)),C.setAttribute("faceIndex",new bn(y,h)),e.push(C),r>Zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vM(t,e,n){let i=new Ti(t,e,n);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sd(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yI(t,e,n){let i=new Float32Array(Us),r=new L(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function _M(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function yM(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Vg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xI(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Oh||l===Bh,u=l===bs||l===Cs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Ed(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ed(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SI(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MI(t,e,n,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,m=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let C=v[_+0],T=v[_+1],A=v[_+2];f.push(C,T,T,A,A,C)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let C=_+0,T=_+1,A=_+2;f.push(C,T,T,A,A,C)}}else return;let g=new(Sg(f)?dl:hl)(f,1);g.version=x;let h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function EI(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*o,m),n.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,m);let h=0;for(let v=0;v<m;v++)h+=p[v]*x[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function wI(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TI(t,e,n){let i=new WeakMap,r=new gt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*C*4*d),A=new ul(T,y,C,d);A.type=vi,A.needsUpdate=!0;let b=_*4;for(let S=0;S<d;S++){let P=g[S],k=h[S],z=v[S],W=y*C*4*S;for(let Z=0;Z<P.count;Z++){let Y=Z*b;p===!0&&(r.fromBufferAttribute(P,Z),T[W+Y+0]=r.x,T[W+Y+1]=r.y,T[W+Y+2]=r.z,T[W+Y+3]=0),m===!0&&(r.fromBufferAttribute(k,Z),T[W+Y+4]=r.x,T[W+Y+5]=r.y,T[W+Y+6]=r.z,T[W+Y+7]=0),x===!0&&(r.fromBufferAttribute(z,Z),T[W+Y+8]=r.x,T[W+Y+9]=r.y,T[W+Y+10]=r.z,T[W+Y+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new ue(y,C)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function AI(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var BM=new Ot,xM=new _l(1,1),kM=new ul,zM=new sh,VM=new pl,SM=[],MM=[],EM=new Float32Array(16),wM=new Float32Array(9),TM=new Float32Array(4);function Ko(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=SM[r];if(s===void 0&&(s=new Float32Array(r),SM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Td(t,e){let n=MM[e];n===void 0&&(n=new Int32Array(e),MM[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bI(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function RI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function II(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function PI(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;TM.set(i),t.uniformMatrix2fv(this.addr,!1,TM),kt(n,i)}}function LI(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;wM.set(i),t.uniformMatrix3fv(this.addr,!1,wM),kt(n,i)}}function DI(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;EM.set(i),t.uniformMatrix4fv(this.addr,!1,EM),kt(n,i)}}function NI(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function FI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function OI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function BI(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function zI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function VI(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function HI(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xM.compareFunction=_g,s=xM):s=BM,n.setTexture2D(e||s,r)}function GI(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zM,r)}function WI(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||VM,r)}function XI(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kM,r)}function YI(t){switch(t){case 5126:return bI;case 35664:return CI;case 35665:return RI;case 35666:return II;case 35674:return PI;case 35675:return LI;case 35676:return DI;case 5124:case 35670:return NI;case 35667:case 35671:return UI;case 35668:case 35672:return FI;case 35669:case 35673:return OI;case 5125:return BI;case 36294:return kI;case 36295:return zI;case 36296:return VI;case 35678:case 36198:case 36298:case 36306:case 35682:return HI;case 35679:case 36299:case 36307:return GI;case 35680:case 36300:case 36308:case 36293:return WI;case 36289:case 36303:case 36311:case 36292:return XI}}function qI(t,e){t.uniform1fv(this.addr,e)}function $I(t,e){let n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function ZI(t,e){let n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function JI(t,e){let n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function KI(t,e){let n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jI(t,e){let n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QI(t,e){let n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eP(t,e){t.uniform1iv(this.addr,e)}function tP(t,e){t.uniform2iv(this.addr,e)}function nP(t,e){t.uniform3iv(this.addr,e)}function iP(t,e){t.uniform4iv(this.addr,e)}function rP(t,e){t.uniform1uiv(this.addr,e)}function sP(t,e){t.uniform2uiv(this.addr,e)}function oP(t,e){t.uniform3uiv(this.addr,e)}function aP(t,e){t.uniform4uiv(this.addr,e)}function lP(t,e,n){let i=this.cache,r=e.length,s=Td(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||BM,s[o])}function cP(t,e,n){let i=this.cache,r=e.length,s=Td(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zM,s[o])}function uP(t,e,n){let i=this.cache,r=e.length,s=Td(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||VM,s[o])}function hP(t,e,n){let i=this.cache,r=e.length,s=Td(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kM,s[o])}function dP(t){switch(t){case 5126:return qI;case 35664:return $I;case 35665:return ZI;case 35666:return JI;case 35674:return KI;case 35675:return jI;case 35676:return QI;case 5124:case 35670:return eP;case 35667:case 35671:return tP;case 35668:case 35672:return nP;case 35669:case 35673:return iP;case 5125:return rP;case 36294:return sP;case 36295:return oP;case 36296:return aP;case 35678:case 36198:case 36298:case 36306:case 35682:return lP;case 35679:case 36299:case 36307:return cP;case 35680:case 36300:case 36308:case 36293:return uP;case 36289:case 36303:case 36311:case 36292:return hP}}var Dg=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YI(n.type)}},Ng=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dP(n.type)}},Ug=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Lg=/(\w+)(\])?(\[|\.)?/g;function AM(t,e){t.seq.push(e),t.map[e.id]=e}function fP(t,e,n){let i=t.name,r=i.length;for(Lg.lastIndex=0;;){let s=Lg.exec(i),o=Lg.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){AM(n,c===void 0?new Dg(a,t,e):new Ng(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Ug(a),AM(n,d)),n=d}}}var Jo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);fP(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function bM(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var pP=37297,mP=0;function gP(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var CM=new Fe;function vP(t){Qe._getMatrix(CM,Qe.workingColorSpace,t);let e=`mat3( ${CM.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case al:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function RM(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gP(t.getShaderSource(e),o)}else return r}function _P(t,e){let n=vP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yP(t,e){let n;switch(e){case zS:n="Linear";break;case VS:n="Reinhard";break;case HS:n="Cineon";break;case GS:n="ACESFilmic";break;case XS:n="AgX";break;case YS:n="Neutral";break;case WS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Md=new L;function xP(){Qe.getLuminanceCoefficients(Md);let t=Md.x.toFixed(4),e=Md.y.toFixed(4),n=Md.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function MP(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EP(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Hl(t){return t!==""}function IM(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function PM(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fg(t){return t.replace(wP,AP)}var TP=new Map;function AP(t,e){let n=He[e];if(n===void 0){let i=TP.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fg(n)}var bP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function LM(t){return t.replace(bP,CP)}function CP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function DM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function IP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function LP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case og:e="ENVMAP_BLENDING_MULTIPLY";break;case BS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function DP(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NP(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=RP(n),c=IP(n),u=PP(n),d=LP(n),f=DP(n),p=SP(n),m=MP(s),x=r.createProgram(),g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Hl).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Hl).join(`
`),h.length>0&&(h+=`
`)):(g=[DM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),h=[DM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?He.tonemapping_pars_fragment:"",n.toneMapping!==nr?yP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,_P("linearToOutputTexel",n.outputColorSpace),xP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),o=Fg(o),o=IM(o,n),o=PM(o,n),a=Fg(a),a=IM(a,n),a=PM(a,n),o=LM(o),a=LM(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let _=v+g+o,y=v+h+a,C=bM(r,r.VERTEX_SHADER,_),T=bM(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(t.debug.checkShaderErrors){let k=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(T).trim(),Z=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,T);else{let K=RM(r,C,"vertex"),X=RM(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+K+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:h}})}r.deleteShader(C),r.deleteShader(T),b=new Jo(r,x),M=EP(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,pP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var UP=0,Og=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Bg(e),n.set(e,i)),i}},Bg=class{constructor(e){this.id=UP++,this.code=e,this.usedTimes=0}};function FP(t,e,n,i,r,s,o){let a=new ko,l=new Og,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,P,k,z){let W=k.fog,Z=z.geometry,Y=M.isMeshStandardMaterial?k.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),X=K&&K.mapping===Ul?K.image.height:null,oe=m[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=Q!==void 0?Q.length:0,De=0;Z.morphAttributes.position!==void 0&&(De=1),Z.morphAttributes.normal!==void 0&&(De=2),Z.morphAttributes.color!==void 0&&(De=3);let Ze,$,te,ge;if(oe){let lt=Pi[oe];Ze=lt.vertexShader,$=lt.fragmentShader}else Ze=M.vertexShader,$=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);let se=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,ht=!!M.map,Je=!!M.matcap,qe=!!K,D=!!M.aoMap,an=!!M.lightMap,Ge=!!M.bumpMap,We=!!M.normalMap,Ce=!!M.displacementMap,ot=!!M.emissiveMap,Ae=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,I=M.clearcoat>0,N=M.dispersion>0,B=M.iridescence>0,V=M.sheen>0,le=M.transmission>0,ae=E&&!!M.anisotropyMap,ne=I&&!!M.clearcoatMap,Oe=I&&!!M.clearcoatNormalMap,ie=I&&!!M.clearcoatRoughnessMap,_e=B&&!!M.iridescenceMap,we=B&&!!M.iridescenceThicknessMap,ye=V&&!!M.sheenColorMap,xe=V&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Be=!!M.specularColorMap,at=!!M.specularIntensityMap,U=le&&!!M.transmissionMap,ce=le&&!!M.thicknessMap,q=!!M.gradientMap,J=!!M.alphaMap,me=M.alphaTest>0,fe=!!M.alphaHash,ke=!!M.extensions,Et=nr;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Et=t.toneMapping);let Zt={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:$,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:gs,alphaToCoverage:!!M.alphaToCoverage,map:ht,matcap:Je,envMap:qe,envMapMode:qe&&K.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:an,bumpMap:Ge,normalMap:We,displacementMap:f&&Ce,emissiveMap:ot,normalMapObjectSpace:We&&M.normalMapType===JS,normalMapTangentSpace:We&&M.normalMapType===vg,metalnessMap:Ae,roughnessMap:R,anisotropy:E,anisotropyMap:ae,clearcoat:I,clearcoatMap:ne,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ie,dispersion:N,iridescence:B,iridescenceMap:_e,iridescenceThicknessMap:we,sheen:V,sheenColorMap:ye,sheenRoughnessMap:xe,specularMap:ze,specularColorMap:Be,specularIntensityMap:at,transmission:le,transmissionMap:U,thicknessMap:ce,gradientMap:q,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:fe,combine:M.combine,mapUv:ht&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:an&&x(M.lightMap.channel),bumpMapUv:Ge&&x(M.bumpMap.channel),normalMapUv:We&&x(M.normalMap.channel),displacementMapUv:Ce&&x(M.displacementMap.channel),emissiveMapUv:ot&&x(M.emissiveMap.channel),metalnessMapUv:Ae&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:ae&&x(M.anisotropyMap.channel),clearcoatMapUv:ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(M.sheenRoughnessMap.channel),specularMapUv:ze&&x(M.specularMap.channel),specularColorMapUv:Be&&x(M.specularColorMap.channel),specularIntensityMapUv:at&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:J&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(We||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ht||J),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:ot&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ri,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function h(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let S=m[M.type],P;if(S){let k=Pi[S];P=cM.clone(k.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let k=0,z=u.length;k<z;k++){let W=u[k];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new NP(t,S,M,s),u.push(P)),P}function T(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:b}}function OP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function BP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function NM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function UM(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,m,x,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=x,h.group=g),e++,h}function a(d,f,p,m,x,g){let h=o(d,f,p,m,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,m,x,g){let h=o(d,f,p,m,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||BP),i.length>1&&i.sort(f||NM),r.length>1&&r.sort(f||NM)}function u(){for(let d=e,f=t.length;d<f;d++){let p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kP(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new UM,t.set(i,[o])):r>=s.length?(o=new UM,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zP(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Xe};break;case"SpotLight":n={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function VP(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var HP=0;function GP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WP(t){let e=new zP,n=VP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new et,o=new et;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,m=0,x=0,g=0,h=0,v=0,_=0,y=0,C=0,T=0,A=0;c.sort(GP);for(let M=0,S=c.length;M<S;M++){let P=c[M],k=P.color,z=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*z,d+=k.g*z,f+=k.b*z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],z);A++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,X=n.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;let K=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=K.matrix,P.castShadow){let X=n.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=Z,y++}x++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=Y,g++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let K=P.shadow,X=n.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(z),Y.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[h]=Y,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let b=i.hash;(b.directionalLength!==p||b.pointLength!==m||b.spotLength!==x||b.rectAreaLength!==g||b.hemiLength!==h||b.numDirectionalShadows!==v||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,b.directionalLength=p,b.pointLength=m,b.spotLength=x,b.rectAreaLength=g,b.hemiLength=h,b.numDirectionalShadows=v,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=A,i.version=HP++)}function l(c,u){let d=0,f=0,p=0,m=0,x=0,g=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){let _=c[h];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function FM(t){let e=new WP(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XP(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new FM(t),e.set(r,[a])):s>=o.length?(a=new FM(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var YP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $P(t,e,n){let i=new Vo,r=new ue,s=new ue,o=new gt,a=new vh({depthPacking:ZS}),l=new _h,c={},u=n.maxTextureSize,d={[Ji]:_n,[_n]:Ji,[Ri]:Ri},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:YP,fragmentShader:qP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Nt;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new bt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let h=this.type;this.render=function(T,A,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(tr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=h!==Ci&&this.type===Ci,W=h===Ci&&this.type!==Ci;for(let Z=0,Y=T.length;Z<Y;Z++){let K=T[Z],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||z===!0||W===!0){let Me=this.type!==Ci?{minFilter:sn,magFilter:sn}:{};X.map!==null&&X.map.dispose(),X.map=new Ti(r.x,r.y,Me),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();let Q=X.getViewportCount();for(let Me=0;Me<Q;Me++){let De=X.getViewport(Me);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),k.viewport(o),X.updateMatrices(K,Me),i=X.getFrustum(),y(A,b,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Ci&&v(X,b),X.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(M,S,P)};function v(T,A){let b=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,b,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,b,p,x,null)}function _(T,A,b,M){let S=null,P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=S.uuid,z=A.uuid,W=c[k];W===void 0&&(W={},c[k]=W);let Z=W[z];Z===void 0&&(Z=S.clone(),W[z]=Z,A.addEventListener("dispose",C)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Ci?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=t.properties.get(S);k.light=b}return S}function y(T,A,b,M,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let z=e.update(T),W=T.material;if(Array.isArray(W)){let Z=z.groups;for(let Y=0,K=Z.length;Y<K;Y++){let X=Z[Y],oe=W[X.materialIndex];if(oe&&oe.visible){let Q=_(T,oe,M,S);T.onBeforeShadow(t,T,A,b,z,Q,X),t.renderBufferDirect(b,null,z,Q,T,X),T.onAfterShadow(t,T,A,b,z,Q,X)}}}else if(W.visible){let Z=_(T,W,M,S);T.onBeforeShadow(t,T,A,b,z,Z,null),t.renderBufferDirect(b,null,z,Z,T,null),T.onAfterShadow(t,T,A,b,z,Z,null)}}let k=T.children;for(let z=0,W=k.length;z<W;z++)y(k[z],A,b,M,S)}function C(T){T.target.removeEventListener("dispose",C);for(let b in c){let M=c[b],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var ZP={[Ih]:Ph,[Lh]:Uh,[Dh]:Fh,[ps]:Nh,[Ph]:Ih,[Uh]:Lh,[Fh]:Dh,[Nh]:ps};function JP(t,e){function n(){let U=!1,ce=new gt,q=null,J=new gt(0,0,0,0);return{setMask:function(me){q!==me&&!U&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){U=me},setClear:function(me,fe,ke,Et,Zt){Zt===!0&&(me*=Et,fe*=Et,ke*=Et),ce.set(me,fe,ke,Et),J.equals(ce)===!1&&(t.clearColor(me,fe,ke,Et),J.copy(ce))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,q=null,J=null,me=null;return{setReversed:function(fe){if(ce!==fe){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);let Et=me;me=null,this.setClear(Et)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?se(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(fe){q!==fe&&!U&&(t.depthMask(fe),q=fe)},setFunc:function(fe){if(ce&&(fe=ZP[fe]),J!==fe){switch(fe){case Ih:t.depthFunc(t.NEVER);break;case Ph:t.depthFunc(t.ALWAYS);break;case Lh:t.depthFunc(t.LESS);break;case ps:t.depthFunc(t.LEQUAL);break;case Dh:t.depthFunc(t.EQUAL);break;case Nh:t.depthFunc(t.GEQUAL);break;case Uh:t.depthFunc(t.GREATER);break;case Fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=fe}},setLocked:function(fe){U=fe},setClear:function(fe){me!==fe&&(ce&&(fe=1-fe),t.clearDepth(fe),me=fe)},reset:function(){U=!1,q=null,J=null,me=null,ce=!1}}}function r(){let U=!1,ce=null,q=null,J=null,me=null,fe=null,ke=null,Et=null,Zt=null;return{setTest:function(lt){U||(lt?se(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!U&&(t.stencilMask(lt),ce=lt)},setFunc:function(lt,ni,Li){(q!==lt||J!==ni||me!==Li)&&(t.stencilFunc(lt,ni,Li),q=lt,J=ni,me=Li)},setOp:function(lt,ni,Li){(fe!==lt||ke!==ni||Et!==Li)&&(t.stencilOp(lt,ni,Li),fe=lt,ke=ni,Et=Li)},setLocked:function(lt){U=lt},setClear:function(lt){Zt!==lt&&(t.clearStencil(lt),Zt=lt)},reset:function(){U=!1,ce=null,q=null,J=null,me=null,fe=null,ke=null,Et=null,Zt=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,x=!1,g=null,h=null,v=null,_=null,y=null,C=null,T=null,A=new Xe(0,0,0),b=0,M=!1,S=null,P=null,k=null,z=null,W=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,K=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=K>=2);let oe=null,Q={},Me=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),Ze=new gt().fromArray(Me),$=new gt().fromArray(De);function te(U,ce,q,J){let me=new Uint8Array(4),fe=t.createTexture();t.bindTexture(U,fe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<q;ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ce+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return fe}let ge={};ge[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(ps),Ge(!1),We(ng),se(t.CULL_FACE),D(tr);function se(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function Te(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Le(U,ce){return d[U]!==ce?(t.bindFramebuffer(U,ce),d[U]=ce,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(U,ce){let q=p,J=!1;if(U){q=f.get(ce),q===void 0&&(q=[],f.set(ce,q));let me=U.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,ke=me.length;fe<ke;fe++)q[fe]=t.COLOR_ATTACHMENT0+fe;q.length=me.length,J=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,J=!0);J&&t.drawBuffers(q)}function ht(U){return m!==U?(t.useProgram(U),m=U,!0):!1}let Je={[Ur]:t.FUNC_ADD,[SS]:t.FUNC_SUBTRACT,[MS]:t.FUNC_REVERSE_SUBTRACT};Je[ES]=t.MIN,Je[wS]=t.MAX;let qe={[TS]:t.ZERO,[AS]:t.ONE,[bS]:t.SRC_COLOR,[ju]:t.SRC_ALPHA,[DS]:t.SRC_ALPHA_SATURATE,[PS]:t.DST_COLOR,[RS]:t.DST_ALPHA,[CS]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[LS]:t.ONE_MINUS_DST_COLOR,[IS]:t.ONE_MINUS_DST_ALPHA,[NS]:t.CONSTANT_COLOR,[US]:t.ONE_MINUS_CONSTANT_COLOR,[FS]:t.CONSTANT_ALPHA,[OS]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,ce,q,J,me,fe,ke,Et,Zt,lt){if(U===tr){x===!0&&(Te(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),U!==xS){if(U!==g||lt!==M){if((h!==Ur||y!==Ur)&&(t.blendEquation(t.FUNC_ADD),h=Ur,y=Ur),lt)switch(U){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nl:t.blendFunc(t.ONE,t.ONE);break;case rg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,C=null,T=null,A.set(0,0,0),b=0,g=U,M=lt}return}me=me||ce,fe=fe||q,ke=ke||J,(ce!==h||me!==y)&&(t.blendEquationSeparate(Je[ce],Je[me]),h=ce,y=me),(q!==v||J!==_||fe!==C||ke!==T)&&(t.blendFuncSeparate(qe[q],qe[J],qe[fe],qe[ke]),v=q,_=J,C=fe,T=ke),(Et.equals(A)===!1||Zt!==b)&&(t.blendColor(Et.r,Et.g,Et.b,Zt),A.copy(Et),b=Zt),g=U,M=!1}function an(U,ce){U.side===Ri?Te(t.CULL_FACE):se(t.CULL_FACE);let q=U.side===_n;ce&&(q=!q),Ge(q),U.blending===fs&&U.transparent===!1?D(tr):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function We(U){U!==vS?(se(t.CULL_FACE),U!==P&&(U===ng?t.cullFace(t.BACK):U===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),P=U}function Ce(U){U!==k&&(Y&&t.lineWidth(U),k=U)}function ot(U,ce,q){U?(se(t.POLYGON_OFFSET_FILL),(z!==ce||W!==q)&&(t.polygonOffset(ce,q),z=ce,W=q)):Te(t.POLYGON_OFFSET_FILL)}function Ae(U){U?se(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+Z-1),oe!==U&&(t.activeTexture(U),oe=U)}function E(U,ce,q){q===void 0&&(oe===null?q=t.TEXTURE0+Z-1:q=oe);let J=Q[q];J===void 0&&(J={type:void 0,texture:void 0},Q[q]=J),(J.type!==U||J.texture!==ce)&&(oe!==q&&(t.activeTexture(q),oe=q),t.bindTexture(U,ce||ge[U]),J.type=U,J.texture=ce)}function I(){let U=Q[oe];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function N(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){Ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function xe(U){$.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function ze(U,ce){let q=c.get(ce);q===void 0&&(q=new WeakMap,c.set(ce,q));let J=q.get(U);J===void 0&&(J=t.getUniformBlockIndex(ce,U.name),q.set(U,J))}function Be(U,ce){let J=c.get(ce).get(U);l.get(ce)!==J&&(t.uniformBlockBinding(ce,J,U.__bindingPointIndex),l.set(ce,J))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},oe=null,Q={},d={},f=new WeakMap,p=[],m=null,x=!1,g=null,h=null,v=null,_=null,y=null,C=null,T=null,A=new Xe(0,0,0),b=0,M=!1,S=null,P=null,k=null,z=null,W=null,Ze.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Te,bindFramebuffer:Le,drawBuffers:be,useProgram:ht,setBlending:D,setMaterial:an,setFlipSided:Ge,setCullFace:We,setLineWidth:Ce,setPolygonOffset:ot,setScissorTest:Ae,activeTexture:R,bindTexture:E,unbindTexture:I,compressedTexImage2D:N,compressedTexImage3D:B,texImage2D:_e,texImage3D:we,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:Oe,texStorage3D:ie,texSubImage2D:V,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:ne,scissor:ye,viewport:xe,reset:at}}function KP(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):cl("canvas")}function x(R,E,I){let N=1,B=Ae(R);if((B.width>I||B.height>I)&&(N=I/Math.max(B.width,B.height)),N<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let V=Math.floor(N*B.width),le=Math.floor(N*B.height);d===void 0&&(d=m(V,le));let ae=E?m(V,le):d;return ae.width=V,ae.height=le,ae.getContext("2d").drawImage(R,0,0,V,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+V+"x"+le+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),R;return R}function g(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,E,I,N,B=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=E;if(E===t.RED&&(I===t.FLOAT&&(V=t.R32F),I===t.HALF_FLOAT&&(V=t.R16F),I===t.UNSIGNED_BYTE&&(V=t.R8)),E===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.R8UI),I===t.UNSIGNED_SHORT&&(V=t.R16UI),I===t.UNSIGNED_INT&&(V=t.R32UI),I===t.BYTE&&(V=t.R8I),I===t.SHORT&&(V=t.R16I),I===t.INT&&(V=t.R32I)),E===t.RG&&(I===t.FLOAT&&(V=t.RG32F),I===t.HALF_FLOAT&&(V=t.RG16F),I===t.UNSIGNED_BYTE&&(V=t.RG8)),E===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RG8UI),I===t.UNSIGNED_SHORT&&(V=t.RG16UI),I===t.UNSIGNED_INT&&(V=t.RG32UI),I===t.BYTE&&(V=t.RG8I),I===t.SHORT&&(V=t.RG16I),I===t.INT&&(V=t.RG32I)),E===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGB8UI),I===t.UNSIGNED_SHORT&&(V=t.RGB16UI),I===t.UNSIGNED_INT&&(V=t.RGB32UI),I===t.BYTE&&(V=t.RGB8I),I===t.SHORT&&(V=t.RGB16I),I===t.INT&&(V=t.RGB32I)),E===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),I===t.UNSIGNED_INT&&(V=t.RGBA32UI),I===t.BYTE&&(V=t.RGBA8I),I===t.SHORT&&(V=t.RGBA16I),I===t.INT&&(V=t.RGBA32I)),E===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),E===t.RGBA){let le=B?al:Qe.getTransfer(N);I===t.FLOAT&&(V=t.RGBA32F),I===t.HALF_FLOAT&&(V=t.RGBA16F),I===t.UNSIGNED_BYTE&&(V=le===ut?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(R,E){let I;return R?E===null||E===kr||E===Rs?I=t.DEPTH24_STENCIL8:E===vi?I=t.DEPTH32F_STENCIL8:E===Yo&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===kr||E===Rs?I=t.DEPTH_COMPONENT24:E===vi?I=t.DEPTH_COMPONENT32F:E===Yo&&(I=t.DEPTH_COMPONENT16),I}function C(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){let E=R.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&u.delete(E)}function A(R){let E=R.target;E.removeEventListener("dispose",A),S(E)}function b(R){let E=i.get(R);if(E.__webglInit===void 0)return;let I=R.source,N=f.get(I);if(N){let B=N[E.__cacheKey];B.usedTimes--,B.usedTimes===0&&M(R),Object.keys(N).length===0&&f.delete(I)}i.remove(R)}function M(R){let E=i.get(R);t.deleteTexture(E.__webglTexture);let I=R.source,N=f.get(I);delete N[E.__cacheKey],o.memory.textures--}function S(R){let E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(E.__webglFramebuffer[N]))for(let B=0;B<E.__webglFramebuffer[N].length;B++)t.deleteFramebuffer(E.__webglFramebuffer[N][B]);else t.deleteFramebuffer(E.__webglFramebuffer[N]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[N])}else{if(Array.isArray(E.__webglFramebuffer))for(let N=0;N<E.__webglFramebuffer.length;N++)t.deleteFramebuffer(E.__webglFramebuffer[N]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let N=0;N<E.__webglColorRenderbuffer.length;N++)E.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[N]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let I=R.textures;for(let N=0,B=I.length;N<B;N++){let V=i.get(I[N]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(I[N])}i.remove(R)}let P=0;function k(){P=0}function z(){let R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function W(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){let I=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){let N=R.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,R,E);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+E)}function Y(R,E){let I=i.get(R);if(R.version>0&&I.__version!==R.version){$(I,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+E)}function K(R,E){let I=i.get(R);if(R.version>0&&I.__version!==R.version){$(I,R,E);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+E)}function X(R,E){let I=i.get(R);if(R.version>0&&I.__version!==R.version){te(I,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+E)}let oe={[eh]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[th]:t.MIRRORED_REPEAT},Q={[sn]:t.NEAREST,[qS]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[mi]:t.LINEAR,[kh]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},Me={[KS]:t.NEVER,[iM]:t.ALWAYS,[jS]:t.LESS,[_g]:t.LEQUAL,[QS]:t.EQUAL,[nM]:t.GEQUAL,[eM]:t.GREATER,[tM]:t.NOTEQUAL};function De(R,E){if(E.type===vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===kh||E.magFilter===Fl||E.magFilter===Br||E.minFilter===mi||E.minFilter===kh||E.minFilter===Fl||E.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Fl&&E.minFilter!==Br||E.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(R,E){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",T));let N=E.source,B=f.get(N);B===void 0&&(B={},f.set(N,B));let V=W(E);if(V!==R.__cacheKey){B[V]===void 0&&(B[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),B[V].usedTimes++;let le=B[R.__cacheKey];le!==void 0&&(B[R.__cacheKey].usedTimes--,le.usedTimes===0&&M(E)),R.__cacheKey=V,R.__webglTexture=B[V].texture}return I}function $(R,E,I){let N=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=t.TEXTURE_3D);let B=Ze(R,E),V=E.source;n.bindTexture(N,R.__webglTexture,t.TEXTURE0+I);let le=i.get(V);if(V.version!==le.__version||B===!0){n.activeTexture(t.TEXTURE0+I);let ae=Qe.getPrimaries(Qe.workingColorSpace),ne=E.colorSpace===ir?null:Qe.getPrimaries(E.colorSpace),Oe=E.colorSpace===ir||ae===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ie=x(E.image,!1,r.maxTextureSize);ie=ot(E,ie);let _e=s.convert(E.format,E.colorSpace),we=s.convert(E.type),ye=_(E.internalFormat,_e,we,E.colorSpace,E.isVideoTexture);De(N,E);let xe,ze=E.mipmaps,Be=E.isVideoTexture!==!0,at=le.__version===void 0||B===!0,U=V.dataReady,ce=C(E,ie);if(E.isDepthTexture)ye=y(E.format===ms,E.type),at&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ye,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ye,ie.width,ie.height,0,_e,we,null));else if(E.isDataTexture)if(ze.length>0){Be&&at&&n.texStorage2D(t.TEXTURE_2D,ce,ye,ze[0].width,ze[0].height);for(let q=0,J=ze.length;q<J;q++)xe=ze[q],Be?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,we,xe.data):n.texImage2D(t.TEXTURE_2D,q,ye,xe.width,xe.height,0,_e,we,xe.data);E.generateMipmaps=!1}else Be?(at&&n.texStorage2D(t.TEXTURE_2D,ce,ye,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,we,ie.data)):n.texImage2D(t.TEXTURE_2D,0,ye,ie.width,ie.height,0,_e,we,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ye,ze[0].width,ze[0].height,ie.depth);for(let q=0,J=ze.length;q<J;q++)if(xe=ze[q],E.format!==ti)if(_e!==null)if(Be){if(U)if(E.layerUpdates.size>0){let me=Ag(xe.width,xe.height,E.format,E.type);for(let fe of E.layerUpdates){let ke=xe.data.subarray(fe*me/xe.data.BYTES_PER_ELEMENT,(fe+1)*me/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,fe,xe.width,xe.height,1,_e,ke)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ye,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,_e,we,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,ye,xe.width,xe.height,ie.depth,0,_e,we,xe.data)}else{Be&&at&&n.texStorage2D(t.TEXTURE_2D,ce,ye,ze[0].width,ze[0].height);for(let q=0,J=ze.length;q<J;q++)xe=ze[q],E.format!==ti?_e!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,q,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,we,xe.data):n.texImage2D(t.TEXTURE_2D,q,ye,xe.width,xe.height,0,_e,we,xe.data)}else if(E.isDataArrayTexture)if(Be){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ye,ie.width,ie.height,ie.depth),U)if(E.layerUpdates.size>0){let q=Ag(ie.width,ie.height,E.format,E.type);for(let J of E.layerUpdates){let me=ie.data.subarray(J*q/ie.data.BYTES_PER_ELEMENT,(J+1)*q/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,_e,we,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,we,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,_e,we,ie.data);else if(E.isData3DTexture)Be?(at&&n.texStorage3D(t.TEXTURE_3D,ce,ye,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,we,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,_e,we,ie.data);else if(E.isFramebufferTexture){if(at)if(Be)n.texStorage2D(t.TEXTURE_2D,ce,ye,ie.width,ie.height);else{let q=ie.width,J=ie.height;for(let me=0;me<ce;me++)n.texImage2D(t.TEXTURE_2D,me,ye,q,J,0,_e,we,null),q>>=1,J>>=1}}else if(ze.length>0){if(Be&&at){let q=Ae(ze[0]);n.texStorage2D(t.TEXTURE_2D,ce,ye,q.width,q.height)}for(let q=0,J=ze.length;q<J;q++)xe=ze[q],Be?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,_e,we,xe):n.texImage2D(t.TEXTURE_2D,q,ye,_e,we,xe);E.generateMipmaps=!1}else if(Be){if(at){let q=Ae(ie);n.texStorage2D(t.TEXTURE_2D,ce,ye,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,we,ie)}else n.texImage2D(t.TEXTURE_2D,0,ye,_e,we,ie);g(E)&&h(N),le.__version=V.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function te(R,E,I){if(E.image.length!==6)return;let N=Ze(R,E),B=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);let V=i.get(B);if(B.version!==V.__version||N===!0){n.activeTexture(t.TEXTURE0+I);let le=Qe.getPrimaries(Qe.workingColorSpace),ae=E.colorSpace===ir?null:Qe.getPrimaries(E.colorSpace),ne=E.colorSpace===ir||le===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Oe&&!ie?_e[J]=x(E.image[J],!0,r.maxCubemapSize):_e[J]=ie?E.image[J].image:E.image[J],_e[J]=ot(E,_e[J]);let we=_e[0],ye=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),ze=_(E.internalFormat,ye,xe,E.colorSpace),Be=E.isVideoTexture!==!0,at=V.__version===void 0||N===!0,U=B.dataReady,ce=C(E,we);De(t.TEXTURE_CUBE_MAP,E);let q;if(Oe){Be&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,we.width,we.height);for(let J=0;J<6;J++){q=_e[J].mipmaps;for(let me=0;me<q.length;me++){let fe=q[me];E.format!==ti?ye!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,ze,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,ye,xe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,ze,fe.width,fe.height,0,ye,xe,fe.data)}}}else{if(q=E.mipmaps,Be&&at){q.length>0&&ce++;let J=Ae(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,ye,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,_e[J].width,_e[J].height,0,ye,xe,_e[J].data);for(let me=0;me<q.length;me++){let ke=q[me].image[J].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,ke.width,ke.height,ye,xe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,ze,ke.width,ke.height,0,ye,xe,ke.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,ye,xe,_e[J]);for(let me=0;me<q.length;me++){let fe=q[me];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,ye,xe,fe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,ze,ye,xe,fe.image[J])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),V.__version=B.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,I,N,B,V){let le=s.convert(I.format,I.colorSpace),ae=s.convert(I.type),ne=_(I.internalFormat,le,ae,I.colorSpace),Oe=i.get(E),ie=i.get(I);if(ie.__renderTarget=E,!Oe.__hasExternalTextures){let _e=Math.max(1,E.width>>V),we=Math.max(1,E.height>>V);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?n.texImage3D(B,V,ne,_e,we,E.depth,0,le,ae,null):n.texImage2D(B,V,ne,_e,we,0,le,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,N,B,ie.__webglTexture,0,Ge(E)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,N,B,ie.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,E,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){let N=E.depthTexture,B=N&&N.isDepthTexture?N.type:null,V=y(E.stencilBuffer,B),le=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Ge(E);We(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,V,E.width,E.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,V,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,V,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{let N=E.textures;for(let B=0;B<N.length;B++){let V=N[B],le=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),ne=_(V.internalFormat,le,ae,V.colorSpace),Oe=Ge(E);I&&We(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ne,E.width,E.height):We(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,ne,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(E.depthTexture);N.__renderTarget=E,(!N.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);let B=N.__webglTexture,V=Ge(E);if(E.depthTexture.format===ds)We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0);else if(E.depthTexture.format===ms)We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Le(R){let E=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let N=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),N){let B=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,N.removeEventListener("dispose",B)};N.addEventListener("dispose",B),E.__depthDisposeCallback=B}E.__boundDepthTexture=N}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,R)}else if(I){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]===void 0)E.__webglDepthbuffer[N]=t.createRenderbuffer(),se(E.__webglDepthbuffer[N],R,!1);else{let B=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer[N];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),se(E.__webglDepthbuffer,R,!1);else{let N=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,B)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,E,I){let N=i.get(R);E!==void 0&&ge(N.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Le(R)}function ht(R){let E=R.texture,I=i.get(R),N=i.get(E);R.addEventListener("dispose",A);let B=R.textures,V=R.isWebGLCubeRenderTarget===!0,le=B.length>1;if(le||(N.__webglTexture===void 0&&(N.__webglTexture=t.createTexture()),N.__version=E.version,o.memory.textures++),V){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let ne=0;ne<E.mipmaps.length;ne++)I.__webglFramebuffer[ae][ne]=t.createFramebuffer()}else I.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)I.__webglFramebuffer[ae]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(le)for(let ae=0,ne=B.length;ae<ne;ae++){let Oe=i.get(B[ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&We(R)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<B.length;ae++){let ne=B[ae];I.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);let Oe=s.convert(ne.format,ne.colorSpace),ie=s.convert(ne.type),_e=_(ne.internalFormat,Oe,ie,ne.colorSpace,R.isXRRenderTarget===!0),we=Ge(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),se(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),De(t.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ge(I.__webglFramebuffer[ae][ne],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ne);else ge(I.__webglFramebuffer[ae],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let ae=0,ne=B.length;ae<ne;ae++){let Oe=B[ae],ie=i.get(Oe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),De(t.TEXTURE_2D,Oe),ge(I.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),g(Oe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,N.__webglTexture),De(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ge(I.__webglFramebuffer[ne],R,E,t.COLOR_ATTACHMENT0,ae,ne);else ge(I.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ae,0);g(E)&&h(ae),n.unbindTexture()}R.depthBuffer&&Le(R)}function Je(R){let E=R.textures;for(let I=0,N=E.length;I<N;I++){let B=E[I];if(g(B)){let V=v(R),le=i.get(B).__webglTexture;n.bindTexture(V,le),h(V),n.unbindTexture()}}}let qe=[],D=[];function an(R){if(R.samples>0){if(We(R)===!1){let E=R.textures,I=R.width,N=R.height,B=t.COLOR_BUFFER_BIT,V=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),ae=E.length>1;if(ae)for(let ne=0;ne<E.length;ne++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ne]);let Oe=i.get(E[ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Oe,0)}t.blitFramebuffer(0,0,I,N,0,0,I,N,B,t.NEAREST),l===!0&&(qe.length=0,D.length=0,qe.push(t.COLOR_ATTACHMENT0+ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(qe.push(V),D.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ne=0;ne<E.length;ne++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,le.__webglColorRenderbuffer[ne]);let Oe=i.get(E[ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ge(R){return Math.min(r.maxSamples,R.samples)}function We(R){let E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ot(R,E){let I=R.colorSpace,N=R.format,B=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==gs&&I!==ir&&(Qe.getTransfer(I)===ut?(N!==ti||B!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),E}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=be,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=We}function jP(t,e){function n(i,r=ir){let s,o=Qe.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Vh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ug)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lg)return t.BYTE;if(i===cg)return t.SHORT;if(i===Yo)return t.UNSIGNED_SHORT;if(i===zh)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===qo)return t.HALF_FLOAT;if(i===hg)return t.ALPHA;if(i===dg)return t.RGB;if(i===ti)return t.RGBA;if(i===fg)return t.LUMINANCE;if(i===pg)return t.LUMINANCE_ALPHA;if(i===ds)return t.DEPTH_COMPONENT;if(i===ms)return t.DEPTH_STENCIL;if(i===Gh)return t.RED;if(i===Wh)return t.RED_INTEGER;if(i===mg)return t.RG;if(i===Xh)return t.RG_INTEGER;if(i===Yh)return t.RGBA_INTEGER;if(i===Ol||i===Bl||i===kl||i===zl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===$h||i===Zh||i===Jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===jh||i===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kh||i===jh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===dd||i===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===td)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===pd||i===md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gg||i===gd||i===vd||i===_d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var QP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new gi({vertexShader:QP,fragmentShader:eL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new Qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zg=class extends Ki{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null,x=new kg,g=n.getContextAttributes(),h=null,v=null,_=[],y=[],C=new ue,T=null,A=new rn;A.viewport=new gt;let b=new rn;b.viewport=new gt;let M=[A,b],S=new Ch,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=_[$];return te===void 0&&(te=new zo,_[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=_[$];return te===void 0&&(te=new zo,_[$]=te),te.getGripSpace()},this.getHand=function($){let te=_[$];return te===void 0&&(te=new zo,_[$]=te),te.getHandSpace()};function z($){let te=y.indexOf($.inputSource);if(te===-1)return;let ge=_[te];ge!==void 0&&(ge.update($.inputSource,$.frame,c||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<_.length;$++){let te=y[$];te!==null&&(y[$]=null,_[$].disconnect(te))}P=null,k=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,se=null,Te=null;g.depth&&(Te=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=g.stencil?ms:ds,se=g.stencil?Rs:kr);let Le={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ti(f.textureWidth,f.textureHeight,{format:ti,type:Ii,depthTexture:new _l(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ti(p.framebufferWidth,p.framebufferHeight,{format:ti,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z($){for(let te=0;te<$.removed.length;te++){let ge=$.removed[te],se=y.indexOf(ge);se>=0&&(y[se]=null,_[se].disconnect(ge))}for(let te=0;te<$.added.length;te++){let ge=$.added[te],se=y.indexOf(ge);if(se===-1){for(let Le=0;Le<_.length;Le++)if(Le>=y.length){y.push(ge),se=Le;break}else if(y[Le]===null){y[Le]=ge,se=Le;break}if(se===-1)break}let Te=_[se];Te&&Te.connect(ge)}}let Y=new L,K=new L;function X($,te,ge){Y.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);let se=Y.distanceTo(K),Te=te.projectionMatrix.elements,Le=ge.projectionMatrix.elements,be=Te[14]/(Te[10]-1),ht=Te[14]/(Te[10]+1),Je=(Te[9]+1)/Te[5],qe=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],an=(Le[8]+1)/Le[0],Ge=be*D,We=be*an,Ce=se/(-D+an),ot=Ce*-D;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ae=be+Ce,R=ht+Ce,E=Ge-ot,I=We+(se-ot),N=Je*ht/R*Ae,B=qe*ht/R*Ae;$.projectionMatrix.makePerspective(E,I,N,B,Ae,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,ge=$.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),S.near=b.near=A.near=te,S.far=b.far=A.far=ge,(P!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,k=S.far),A.layers.mask=$.layers.mask|2,b.layers.mask=$.layers.mask|4,S.layers.mask=A.layers.mask|b.layers.mask;let se=$.parent,Te=S.cameras;oe(S,se);for(let Le=0;Le<Te.length;Le++)oe(Te[Le],se);Te.length===2?X(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),Q($,S,se)};function Q($,te,ge){ge===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Me=null;function De($,te){if(u=te.getViewerPose(c||o),m=te,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let se=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let be=0;be<ge.length;be++){let ht=ge[be],Je=null;if(p!==null)Je=p.getViewport(ht);else{let D=d.getViewSubImage(f,ht);Je=D.viewport,be===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let qe=M[be];qe===void 0&&(qe=new rn,qe.layers.enable(be),qe.viewport=new gt,M[be]=qe),qe.matrix.fromArray(ht.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ht.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(qe)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let be=d.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let ge=0;ge<_.length;ge++){let se=y[ge],Te=_[ge];se!==null&&Te!==void 0&&Te.update(se,te,c||o)}Me&&Me($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}let Ze=new OM;Ze.setAnimationLoop(De),this.setAnimationLoop=function($){Me=$},this.dispose=function(){}}},Ds=new Bn,tL=new et;function nL(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Mg(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===_n&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===_n&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let v=e.get(h),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(tL.makeRotationFromEuler(Ds)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){let v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iL(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(m(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));let C=_.program;i.updateUBOMapping(v,C);let T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function u(v){let _=d();v.__bindingPointIndex=_;let y=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){let b=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,S=b.length;M<S;M++){let P=b[M];if(p(P,T,M,C)===!0){let k=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Z=0;Z<z.length;Z++){let Y=z[Z],K=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,k+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,C){let T=v.value,A=_+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let b=C[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return C[A]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function m(v){let _=v.uniforms,y=0,C=16;for(let A=0,b=_.length;A<b;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,P=M.length;S<P;S++){let k=M[S],z=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Z=z.length;W<Z;W++){let Y=z[W],K=x(Y),X=y%C,oe=X%K.boundary,Q=X+oe;y+=oe,Q!==0&&C-Q<K.storage&&(y+=C-Q),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}let T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(let v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var wd=class{constructor(e={}){let{canvas:n=rM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,h=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=nr,this.toneMappingExposure=1;let y=this,C=!1,T=0,A=0,b=null,M=-1,S=null,P=new gt,k=new gt,z=null,W=new Xe(0),Z=0,Y=n.width,K=n.height,X=1,oe=null,Q=null,Me=new gt(0,0,Y,K),De=new gt(0,0,Y,K),Ze=!1,$=new Vo,te=!1,ge=!1;this.transmissionResolutionScale=1;let se=new et,Te=new et,Le=new L,be=new gt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function qe(){return b===null?X:1}let D=i;function an(w,F){return n.getContext(w,F)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",fe,!1),D===null){let F="webgl2";if(D=an(F,w),D===null)throw an(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,We,Ce,ot,Ae,R,E,I,N,B,V,le,ae,ne,Oe,ie,_e,we,ye,xe,ze,Be,at,U;function ce(){Ge=new SI(D),Ge.init(),Be=new jP(D,Ge),We=new pI(D,Ge,e,Be),Ce=new JP(D,Ge),We.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ot=new wI(D),Ae=new OP,R=new KP(D,Ge,Ce,Ae,We,Be,ot),E=new gI(y),I=new xI(y),N=new IC(D),at=new dI(D,N),B=new MI(D,N,ot,at),V=new AI(D,B,N,ot),ye=new TI(D,We,R),ie=new mI(Ae),le=new FP(y,E,I,Ge,We,at,ie),ae=new nL(y,Ae),ne=new kP,Oe=new XP(Ge),we=new hI(y,E,I,Ce,V,p,l),_e=new $P(y,V,We),U=new iL(D,ot,We,Ce),xe=new fI(D,Ge,ot),ze=new EI(D,Ge,ot),ot.programs=le.programs,y.capabilities=We,y.extensions=Ge,y.properties=Ae,y.renderLists=ne,y.shadowMap=_e,y.state=Ce,y.info=ot}ce();let q=new zg(y,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Y,K,!1))},this.getSize=function(w){return w.set(Y,K)},this.setSize=function(w,F,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,K=F,n.width=Math.floor(w*X),n.height=Math.floor(F*X),H===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*X,K*X).floor()},this.setDrawingBufferSize=function(w,F,H){Y=w,K=F,X=H,n.width=Math.floor(w*H),n.height=Math.floor(F*H),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,F,H,G){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,F,H,G),Ce.viewport(P.copy(Me).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,F,H,G){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,F,H,G),Ce.scissor(k.copy(De).multiplyScalar(X).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){Ce.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,H=!0){let G=0;if(w){let O=!1;if(b!==null){let re=b.texture.format;O=re===Yh||re===Xh||re===Wh}if(O){let re=b.texture.type,de=re===Ii||re===kr||re===Yo||re===Rs||re===Vh||re===Hh,Se=we.getClearColor(),Ee=we.getClearAlpha(),Ne=Se.r,Ue=Se.g,Re=Se.b;de?(m[0]=Ne,m[1]=Ue,m[2]=Re,m[3]=Ee,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ne,x[1]=Ue,x[2]=Re,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),we.dispose(),ne.dispose(),Oe.dispose(),Ae.dispose(),E.dispose(),I.dispose(),V.dispose(),at.dispose(),U.dispose(),le.dispose(),q.dispose(),q.removeEventListener("sessionstart",$g),q.removeEventListener("sessionend",Zg),Gr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ot.autoReset,F=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,O=_e.type;ce(),ot.autoReset=w,_e.enabled=F,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=O}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ke(w){let F=w.target;F.removeEventListener("dispose",ke),Et(F)}function Et(w){Zt(w),Ae.remove(w)}function Zt(w){let F=Ae.get(w).programs;F!==void 0&&(F.forEach(function(H){le.releaseProgram(H)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,H,G,O,re){F===null&&(F=ht);let de=O.isMesh&&O.matrixWorld.determinant()<0,Se=M1(w,F,H,G,O);Ce.setMaterial(G,de);let Ee=H.index,Ne=1;if(G.wireframe===!0){if(Ee=B.getWireframeAttribute(H),Ee===void 0)return;Ne=2}let Ue=H.drawRange,Re=H.attributes.position,Ke=Ue.start*Ne,rt=(Ue.start+Ue.count)*Ne;re!==null&&(Ke=Math.max(Ke,re.start*Ne),rt=Math.min(rt,(re.start+re.count)*Ne)),Ee!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Ee.count)):Re!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Re.count));let It=rt-Ke;if(It<0||It===1/0)return;at.setup(O,G,Se,H,Ee);let wt,tt=xe;if(Ee!==null&&(wt=N.get(Ee),tt=ze,tt.setIndex(wt)),O.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*qe()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(O.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Ce.setLineWidth(Ie*qe()),O.isLineSegments?tt.setMode(D.LINES):O.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else O.isPoints?tt.setMode(D.POINTS):O.isSprite&&tt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,Wt=O._multiDrawCounts,st=O._multiDrawCount,ii=Ee?N.get(Ee).bytesPerElement:1,Fs=Ae.get(G).currentProgram.getUniforms();for(let Cn=0;Cn<st;Cn++)Fs.setValue(D,"_gl_DrawID",Cn),tt.render(Ie[Cn]/ii,Wt[Cn])}else if(O.isInstancedMesh)tt.renderInstances(Ke,It,O.count);else if(H.isInstancedBufferGeometry){let Ie=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Wt=Math.min(H.instanceCount,Ie);tt.renderInstances(Ke,It,Wt)}else tt.render(Ke,It)};function lt(w,F,H){w.transparent===!0&&w.side===Ri&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,Xl(w,F,H),w.side=Ji,w.needsUpdate=!0,Xl(w,F,H),w.side=Ri):Xl(w,F,H)}this.compile=function(w,F,H=null){H===null&&(H=w),h=Oe.get(H),h.init(F),_.push(h),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let Se=re[de];lt(Se,H,O),G.add(Se)}else lt(re,H,O),G.add(re)}),h=_.pop(),G},this.compileAsync=function(w,F,H=null){let G=this.compile(w,F,H);return new Promise(O=>{function re(){if(G.forEach(function(de){Ae.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){O(w);return}setTimeout(re,10)}Ge.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ni=null;function Li(w){ni&&ni(w)}function $g(){Gr.stop()}function Zg(){Gr.start()}let Gr=new OM;Gr.setAnimationLoop(Li),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(w){ni=w,q.setAnimationLoop(w),w===null?Gr.stop():Gr.start()},q.addEventListener("sessionstart",$g),q.addEventListener("sessionend",Zg),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,b),h=Oe.get(w,_.length),h.init(F),_.push(h),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Te),ge=this.localClippingEnabled,te=ie.init(this.clippingPlanes,ge),g=ne.get(w,v.length),g.init(),v.push(g),q.enabled===!0&&q.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&bd(re,F,-1/0,y.sortObjects)}bd(w,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(oe,Q),Je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Je&&we.addToRenderList(g,w),this.info.render.frame++,te===!0&&ie.beginShadows();let H=h.state.shadowsArray;_e.render(H,w,F),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,O=g.transmissive;if(h.setupLights(),F.isArrayCamera){let re=F.cameras;if(O.length>0)for(let de=0,Se=re.length;de<Se;de++){let Ee=re[de];Kg(G,O,w,Ee)}Je&&we.render(w);for(let de=0,Se=re.length;de<Se;de++){let Ee=re[de];Jg(g,w,Ee,Ee.viewport)}}else O.length>0&&Kg(G,O,w,F),Je&&we.render(w),Jg(g,w,F);b!==null&&A===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,F),at.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(h=_[_.length-1],te===!0&&ie.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function bd(w,F,H,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){G&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);let de=V.update(w),Se=w.material;Se.visible&&g.push(w,de,Se,H,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){let de=V.update(w),Se=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),be.copy(de.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Se)){let Ee=de.groups;for(let Ne=0,Ue=Ee.length;Ne<Ue;Ne++){let Re=Ee[Ne],Ke=Se[Re.materialIndex];Ke&&Ke.visible&&g.push(w,de,Ke,H,be.z,Re)}}else Se.visible&&g.push(w,de,Se,H,be.z,null)}}let re=w.children;for(let de=0,Se=re.length;de<Se;de++)bd(re[de],F,H,G)}function Jg(w,F,H,G){let O=w.opaque,re=w.transmissive,de=w.transparent;h.setupLightsView(H),te===!0&&ie.setGlobalState(y.clippingPlanes,H),G&&Ce.viewport(P.copy(G)),O.length>0&&Wl(O,F,H),re.length>0&&Wl(re,F,H),de.length>0&&Wl(de,F,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Kg(w,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Ti(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?qo:Ii,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let re=h.state.transmissionRenderTarget[G.id],de=G.viewport||P;re.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);let Se=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Je&&we.render(H);let Ee=y.toneMapping;y.toneMapping=nr;let Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),te===!0&&ie.setGlobalState(y.clippingPlanes,G),Wl(w,H,G),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,Ke=F.length;Re<Ke;Re++){let rt=F[Re],It=rt.object,wt=rt.geometry,tt=rt.material,Ie=rt.group;if(tt.side===Ri&&It.layers.test(G.layers)){let Wt=tt.side;tt.side=_n,tt.needsUpdate=!0,jg(It,H,G,wt,tt,Ie),tt.side=Wt,tt.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(Se),y.setClearColor(W,Z),Ne!==void 0&&(G.viewport=Ne),y.toneMapping=Ee}function Wl(w,F,H){let G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=w.length;O<re;O++){let de=w[O],Se=de.object,Ee=de.geometry,Ne=G===null?de.material:G,Ue=de.group;Se.layers.test(H.layers)&&jg(Se,F,H,Ee,Ne,Ue)}}function jg(w,F,H,G,O,re){w.onBeforeRender(y,F,H,G,O,re),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,H,G,w,re),O.transparent===!0&&O.side===Ri&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,y.renderBufferDirect(H,F,G,O,w,re),O.side=Ji,O.needsUpdate=!0,y.renderBufferDirect(H,F,G,O,w,re),O.side=Ri):y.renderBufferDirect(H,F,G,O,w,re),w.onAfterRender(y,F,H,G,O,re)}function Xl(w,F,H){F.isScene!==!0&&(F=ht);let G=Ae.get(w),O=h.state.lights,re=h.state.shadowsArray,de=O.state.version,Se=le.getParameters(w,O.state,re,F,H),Ee=le.getProgramCacheKey(Se),Ne=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?I:E).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",ke),Ne=new Map,G.programs=Ne);let Ue=Ne.get(Ee);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===de)return e0(w,Se),Ue}else Se.uniforms=le.getUniforms(w),w.onBeforeCompile(Se,y),Ue=le.acquireProgram(Se,Ee),Ne.set(Ee,Ue),G.uniforms=Se.uniforms;let Re=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=ie.uniform),e0(w,Se),G.needsLights=w1(w),G.lightsStateVersion=de,G.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Qg(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Jo.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function e0(w,F){let H=Ae.get(w);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function M1(w,F,H,G,O){F.isScene!==!0&&(F=ht),R.resetTextureUnits();let re=F.fog,de=G.isMeshStandardMaterial?F.environment:null,Se=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gs,Ee=(G.isMeshStandardMaterial?I:E).get(G.envMap||de),Ne=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color,It=nr;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=y.toneMapping);let wt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=wt!==void 0?wt.length:0,Ie=Ae.get(G),Wt=h.state.lights;if(te===!0&&(ge===!0||w!==S)){let ln=w===S&&G.id===M;ie.setState(G,w,ln)}let st=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Wt.state.version||Ie.outputColorSpace!==Se||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==Ee||G.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ie.numPlanes||Ie.numIntersection!==ie.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Ue||Ie.morphTargets!==Re||Ie.morphNormals!==Ke||Ie.morphColors!==rt||Ie.toneMapping!==It||Ie.morphTargetsCount!==tt)&&(st=!0):(st=!0,Ie.__version=G.version);let ii=Ie.currentProgram;st===!0&&(ii=Xl(G,F,O));let Fs=!1,Cn=!1,ea=!1,vt=ii.getUniforms(),Vn=Ie.uniforms;if(Ce.useProgram(ii.program)&&(Fs=!0,Cn=!0,ea=!0),G.id!==M&&(M=G.id,Cn=!0),Fs||S!==w){Ce.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),oM(se),aM(se),vt.setValue(D,"projectionMatrix",se)):vt.setValue(D,"projectionMatrix",w.projectionMatrix),vt.setValue(D,"viewMatrix",w.matrixWorldInverse);let yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue(D,Le.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Cn=!0,ea=!0)}if(O.isSkinnedMesh){vt.setOptional(D,O,"bindMatrix"),vt.setOptional(D,O,"bindMatrixInverse");let ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),vt.setValue(D,"boneTexture",ln.boneTexture,R))}O.isBatchedMesh&&(vt.setOptional(D,O,"batchingTexture"),vt.setValue(D,"batchingTexture",O._matricesTexture,R),vt.setOptional(D,O,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",O._indirectTexture,R),vt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",O._colorsTexture,R));let Hn=H.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ye.update(O,H,ii),(Cn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,vt.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vn.envMap.value=Ee,Vn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Vn.envMapIntensity.value=F.environmentIntensity),Cn&&(vt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&E1(Vn,ea),re&&G.fog===!0&&ae.refreshFogUniforms(Vn,re),ae.refreshMaterialUniforms(Vn,G,X,K,h.state.transmissionRenderTarget[w.id]),Jo.upload(D,Qg(Ie),Vn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Jo.upload(D,Qg(Ie),Vn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(D,"center",O.center),vt.setValue(D,"modelViewMatrix",O.modelViewMatrix),vt.setValue(D,"normalMatrix",O.normalMatrix),vt.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ln=G.uniformsGroups;for(let yn=0,Cd=ln.length;yn<Cd;yn++){let Wr=ln[yn];U.update(Wr,ii),U.bind(Wr,ii)}}return ii}function E1(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function w1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,F,H){Ae.get(w.texture).__webglTexture=F,Ae.get(w.depthTexture).__webglTexture=H;let G=Ae.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let H=Ae.get(w);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};let T1=D.createFramebuffer();this.setRenderTarget=function(w,F=0,H=0){b=w,T=F,A=H;let G=!0,O=null,re=!1,de=!1;if(w){let Ee=Ae.get(w);if(Ee.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ee.__hasExternalTextures)R.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Re=w.depthTexture;if(Ee.__boundDepthTexture!==Re){if(Re!==null&&Ae.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);let Ue=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?O=Ue[F][H]:O=Ue[F],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[H]:O=Ue,P.copy(w.viewport),k.copy(w.scissor),z=w.scissorTest}else P.copy(Me).multiplyScalar(X).floor(),k.copy(De).multiplyScalar(X).floor(),z=Ze;if(H!==0&&(O=T1),Ce.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&Ce.drawBuffers(w,O),Ce.viewport(P),Ce.scissor(k),Ce.setScissorTest(z),re){let Ee=Ae.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,H)}else if(de){let Ee=Ae.get(w.texture),Ne=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,H,Ne)}else if(w!==null&&H!==0){let Ee=Ae.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(w,F,H,G,O,re,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){Ce.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Ee=w.texture,Ne=Ee.format,Ue=Ee.type;if(!We.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&H>=0&&H<=w.height-O&&D.readPixels(F,H,G,O,Be.convert(Ne),Be.convert(Ue),re)}finally{let Ee=b!==null?Ae.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,F,H,G,O,re,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){let Ee=w.texture,Ne=Ee.format,Ue=Ee.type;if(!We.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&H>=0&&H<=w.height-O){Ce.bindFramebuffer(D.FRAMEBUFFER,Se);let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(F,H,G,O,Be.convert(Ne),Be.convert(Ue),0);let Ke=b!==null?Ae.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Ke);let rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sM(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Re),D.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,H=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-H),O=Math.floor(w.image.width*G),re=Math.floor(w.image.height*G),de=F!==null?F.x:0,Se=F!==null?F.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,de,Se,O,re),Ce.unbindTexture()};let A1=D.createFramebuffer(),b1=D.createFramebuffer();this.copyTextureToTexture=function(w,F,H=null,G=null,O=0,re=null){w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],re=arguments[3]||0,H=null),re===null&&(O!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let de,Se,Ee,Ne,Ue,Re,Ke,rt,It,wt=w.isCompressedTexture?w.mipmaps[re]:w.image;if(H!==null)de=H.max.x-H.min.x,Se=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,Ue=H.min.y,Re=H.isBox3?H.min.z:0;else{let Hn=Math.pow(2,-O);de=Math.floor(wt.width*Hn),Se=Math.floor(wt.height*Hn),w.isDataArrayTexture?Ee=wt.depth:w.isData3DTexture?Ee=Math.floor(wt.depth*Hn):Ee=1,Ne=0,Ue=0,Re=0}G!==null?(Ke=G.x,rt=G.y,It=G.z):(Ke=0,rt=0,It=0);let tt=Be.convert(F.format),Ie=Be.convert(F.type),Wt;F.isData3DTexture?(R.setTexture3D(F,0),Wt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Wt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let st=D.getParameter(D.UNPACK_ROW_LENGTH),ii=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fs=D.getParameter(D.UNPACK_SKIP_PIXELS),Cn=D.getParameter(D.UNPACK_SKIP_ROWS),ea=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);let vt=w.isDataArrayTexture||w.isData3DTexture,Vn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Hn=Ae.get(w),ln=Ae.get(F),yn=Ae.get(Hn.__renderTarget),Cd=Ae.get(ln.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cd.__webglFramebuffer);for(let Wr=0;Wr<Ee;Wr++)vt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(w).__webglTexture,O,Re+Wr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(F).__webglTexture,re,It+Wr)),D.blitFramebuffer(Ne,Ue,de,Se,Ke,rt,de,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||Ae.has(w)){let Hn=Ae.get(w),ln=Ae.get(F);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,A1),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,b1);for(let yn=0;yn<Ee;yn++)vt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,O,Re+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,O),Vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,re,It+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,re),O!==0?D.blitFramebuffer(Ne,Ue,de,Se,Ke,rt,de,Se,D.COLOR_BUFFER_BIT,D.NEAREST):Vn?D.copyTexSubImage3D(Wt,re,Ke,rt,It+yn,Ne,Ue,de,Se):D.copyTexSubImage2D(Wt,re,Ke,rt,Ne,Ue,de,Se);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Wt,re,Ke,rt,It,de,Se,Ee,tt,Ie,wt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Wt,re,Ke,rt,It,de,Se,Ee,tt,wt.data):D.texSubImage3D(Wt,re,Ke,rt,It,de,Se,Ee,tt,Ie,wt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,Ke,rt,de,Se,tt,Ie,wt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,Ke,rt,wt.width,wt.height,tt,wt.data):D.texSubImage2D(D.TEXTURE_2D,re,Ke,rt,de,Se,tt,Ie,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ii),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ea),re===0&&F.generateMipmaps&&D.generateMipmap(Wt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,F,H=null,G=null,O=0){return w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,H,G,O)},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){T=0,A=0,b=null,Ce.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}};var rL={spawn:{geo:()=>new jn(.62,.7,1.6,16),color:"#f0f0f0",emissive:"#3a3a3a"},extension:{geo:()=>new jn(.34,.38,.9,10),color:"#d9cf8f"},tower:{geo:()=>new jn(.4,.55,2.8,8),color:"#9bb7d4"},storage:{geo:()=>new vn(.9,1.9,.9),color:"#c9a35c"},terminal:{geo:()=>new Es(.62).translate(0,.35,0),color:"#8fd0c8",emissive:"#14403b"},controllerOwned:{geo:()=>new jn(.55,.8,1.2,12),color:"#4fc36a",emissive:"#123d1d"},controllerReserved:{geo:()=>new jn(.55,.8,1,12),color:"#4f8fc3"},controller:{geo:()=>new jn(.55,.8,.9,12),color:"#666b73"},source:{geo:()=>new vn(.8,.55,.8),color:"#f2c94c",emissive:"#6b5310"},mineral:{geo:()=>new Ms(.45).translate(0,.1,0),color:"#b080e0",emissive:"#2a1640"},keeperLair:{geo:()=>new vn(.9,.9,.9),color:"#b3363f",emissive:"#3a0d10"}},GM=t=>{let e=new gn,n=new et;for(let i in t){let r=rL[i],s=t[i];if(!r||!s.length)continue;let o=r.geo();o.computeBoundingBox(),o.translate(0,-o.boundingBox.min.y,0);let a=new Ts({color:r.color,emissive:r.emissive??"#000000",roughness:.55,metalness:.1}),l=new vl(o,a,s.length);s.forEach(([c,u],d)=>{n.makeTranslation(c+.5,0,u+.5),l.setMatrixAt(d,n)}),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere(),e.add(l)}return e};var Vr=210,WM=1100,rr=Mu*pe,Ad=1.6,Qo=rr*Ad,sL=.45,oL=.001,aL=1.02,lL=0,cL=1550,XM={min:.45,max:1.3},uL=.002,hL=3,dL=61,YM=1024,fL=128,pL=950,mL={owned:"#3fae5a",remote:"#2f7fa8",neutral:"#39414e",highway:"#23272f",keeper:"#5a3340",center:"#4d4256"},jo=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,qM=(t,e,n)=>{let i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},Gl=(t,e,n)=>t+(e-t)*n,$M="https://screeps.com/a",gL=({shard:t,roomName:e,roomX:n,roomY:i,overview:r})=>window.open(r?`${$M}/#!/map/${t}?pos=${n+.5},${i+.5}`:`${$M}/#!/room/${t}/${e}`),Hr=(t,e,n,i)=>t+(e-t)*(1-Math.exp(-n/i)),vL=({center:t,rooms:e})=>{let n=rr/e;return{center:t,rooms:e,unit:n,toWorldX:i=>t.x*pe+(i-t.x)*n,toWorldZ:i=>t.y*pe+(i-t.y)*n,toRoomX:i=>t.x+(i-t.x*pe)/n,toRoomY:i=>t.y+(i-t.y*pe)/n,contains:(i,r)=>Math.abs(i+.5-t.x)<e*Ad/2+.5&&Math.abs(r+.5-t.y)<e/2+.5}},ZM=(t,e,{left:n,top:i,roomsX:r,roomsY:s,widthPx:o,heightPx:a})=>{let l=o/r,c=Math.max(1,l*.035),u=Math.min(40,l/4.3);t.fillStyle="#0b0e13",t.fillRect(0,0,o,a),t.textAlign="center",t.textBaseline="middle";for(let d=Math.floor(i);d<i+s;d++)for(let f=Math.floor(n);f<n+r;f++){let p=(f-n)*l,m=(d-i)*l,x=Za(e,f,d);t.fillStyle=mL[x],t.fillRect(p+c/2,m+c/2,l-c,l-c);let g=x==="owned"||x==="remote";u>=(g?6:8)&&(t.fillStyle=g?"rgba(255,255,255,0.95)":"rgba(255,255,255,0.4)",t.font=`${g?"bold ":""}${u}px sans-serif`,t.fillText((0,Un.worldXYToRoomName)(f,d),p+l/2,m+l/2))}},JM=({host:t,onUiChange:e})=>{let n=new wd({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(n.domElement);let i=document.createElement("div");i.className="label-layer",t.appendChild(i);let r=new ml;r.background=new Xe("#07090d");let s=new rn(45,1,1,2e4);r.add(new Rl("#cfe3ff","#1a1f28",1.6));let o=new Pl("#ffffff",2.2);o.position.set(-.6,1,.4),r.add(o);let a=n.capabilities.getMaxAnisotropy(),l={goal:"single",t:0,activeShard:0,activeAnim:0,visibility:Lt.map((I,N)=>N===0?1:0),othersFade:0,detailMix:1,overviewMix:0,planeDim:Lt.map(()=>1),single:{target:new L,radius:380},multi:{center:{x:0,y:0},rooms:Mu,phi:aL,focusY:0,panX:0},hover:null,selected:null,centering:!1},c=(0,Un.roomNameToWorldXY)(vm(Lt[0])[0]);l.single.target.set((c.x+.5)*pe,0,(c.y+.5)*pe);let u=(I,N)=>(l.activeAnim+(I-l.activeAnim)*Gl(.12,1,N))*Vr,d=Lt.map((I,N)=>_L({shard:I,index:N,scene:r,maxAnisotropy:a})),f=(Lt.length-1)*Vr+80,p=new vn(pe,f,pe),m=new gn;m.add(new bt(p,new Kn({color:"#9be7ff",transparent:!0,opacity:.07,depthWrite:!1}))),m.add(new Ho(new El(p),new bi({color:"#9be7ff",transparent:!0,opacity:.55}))),m.add(new vs(new Nt().setFromPoints([new L(0,-f/2,0),new L(0,f/2,0)]),new bi({color:"#ffffff"}))),m.visible=!1,r.add(m);let x=Lt.map((I,N)=>{let B=document.createElement("div");return B.className="shard-label",B.style.setProperty("--shard-color",os[N]),B.innerHTML=`<b>${I}</b><span>${vm(I).length} owned rooms</span>`,i.appendChild(B),B}),g=Lt.map((I,N)=>{let B=document.createElement("div");return B.className="hover-tag",B.style.setProperty("--shard-color",os[N]),i.appendChild(B),B}),h=()=>{l.multi.center={x:l.single.target.x/pe,y:l.single.target.z/pe}};h();let v=()=>vL({center:l.multi.center,rooms:Gl(Mu,l.multi.rooms,jo(l.t))}),_=(Lt.length-1)/2*Vr,y=(Lt.length-1)*Vr;l.multi.focusY=_;let C=()=>new L(l.multi.center.x*pe+l.multi.panX,l.multi.focusY,l.multi.center.y*pe),T=I=>{let B=l.single.target.clone().setY(l.activeAnim*Vr).lerp(C(),I),V=Math.exp(Gl(Math.log(l.single.radius),Math.log(cL),I)),le=new Dl(V,Gl(oL,l.multi.phi,I),Gl(0,lL,I));s.position.setFromSpherical(le).add(B),s.up.set(0,1,0),s.lookAt(B),s.updateMatrixWorld()},A=new Ll,b=new ue,M=I=>{let N=n.domElement.getBoundingClientRect();b.set((I.clientX-N.left)/N.width*2-1,-((I.clientY-N.top)/N.height)*2+1),A.setFromCamera(b,s)},S=I=>{M(I);let N=new An(new L(0,1,0),-l.activeAnim*Vr);return A.ray.intersectPlane(N,new L)},P=I=>{M(I);let N=A.intersectObjects(d.map(V=>V.lowMesh),!1)[0];if(N)return{point:N.point,shardIndex:N.object.userData.shardIndex};let B=A.ray.intersectPlane(new An(new L(0,1,0),-l.multi.focusY),new L);return B&&{point:B,shardIndex:null}},k=()=>l.goal==="multi"&&l.t>=.999,z=()=>l.goal==="single"&&l.t<=.001,W=()=>{let I=l.single.target;I.x=zn.clamp(I.x,$e.x0*pe,($e.x0+$e.size)*pe),I.z=zn.clamp(I.z,$e.y0*pe,($e.y0+$e.size)*pe)},Z=I=>{let N=null;if(k()){let B=P(I);if(B?.shardIndex!=null){let V=v();N={shardIndex:B.shardIndex,roomX:Math.floor(V.toRoomX(B.point.x)),roomY:Math.floor(V.toRoomY(B.point.z))}}}else if(z()){let B=S(I);if(B){let V=Math.floor(B.x),le=Math.floor(B.z),ae=Math.floor(V/pe),ne=Math.floor(le/pe);ae>=$e.x0&&ae<$e.x0+$e.size&&ne>=$e.y0&&ne<$e.y0+$e.size&&(N={shardIndex:l.activeShard,roomX:ae,roomY:ne,tileX:V-ae*pe,tileY:le-ne*pe})}}l.hover=N,Je()},Y=I=>I==null?l.multi.focusY:d[I].group.position.y,K=(I,N)=>(M(I),A.ray.intersectPlane(new An(new L(0,1,0),-N),new L)),X=(I,N,B)=>{l.multi.center={x:zn.clamp(I.x-(N.x-B.center.x*pe)/B.unit,-90,90),y:zn.clamp(I.y-(N.z-B.center.y*pe)/B.unit,-90,90)}},oe=()=>{let{x:I,y:N}=l.multi.center,B=new L(I*pe-rr/2,l.multi.focusY,N*pe).project(s),V=new L(I*pe+rr/2,l.multi.focusY,N*pe).project(s);return Math.max(1,Math.abs(V.x-B.x)/2*se.clientWidth)},Q=null,Me=I=>{if(l.centering=!1,n.domElement.setPointerCapture(I.pointerId),Q={startX:I.clientX,startY:I.clientY,lastX:I.clientX,lastY:I.clientY,moved:!1},l.goal==="single")Q.anchor=S(I);else{let N=P(I);if(I.altKey||N?.shardIndex==null)Q.moveStack=!0;else{let B=v();Q.planeY=Y(N.shardIndex),Q.roomAnchor={x:B.toRoomX(N.point.x),y:B.toRoomY(N.point.z)}}}},De=I=>{if(!Q){Z(I);return}if(Math.hypot(I.clientX-Q.startX,I.clientY-Q.startY)>4&&(Q.moved=!0),l.goal==="single"){let N=S(I);Q.anchor&&N&&(l.single.target.add(Q.anchor.clone().sub(N)),W()),l.hover&&(l.hover=null,Je())}else{if(Q.moveStack){let N=I.clientX-Q.lastX,B=I.clientY-Q.lastY,V=rr/oe();l.multi.panX=zn.clamp(l.multi.panX-N*V,-Qo,Qo),l.multi.focusY=zn.clamp(l.multi.focusY+B*V/Math.sin(l.multi.phi),0,y)}else{let N=Q.roomAnchor&&K(I,Q.planeY);N&&X(Q.roomAnchor,N,v())}Q.lastX=I.clientX,Q.lastY=I.clientY,T(jo(l.t)),Z(I)}},Ze=I=>{let N=Q&&!Q.moved;if(Q=null,Z(I),N&&I.metaKey&&l.hover){let{shardIndex:B,roomX:V,roomY:le}=l.hover;gL({shard:Lt[B],roomName:(0,Un.worldXYToRoomName)(V,le),roomX:V,roomY:le,overview:I.shiftKey});return}if(N&&(k()||z())&&l.hover){let{shardIndex:B,roomX:V,roomY:le}=l.hover;l.selected={shardIndex:B,roomX:V,roomY:le},l.activeShard=B,Je()}},$=I=>{if(I.metaKey||!k()||!l.hover)return;let{shardIndex:N,roomX:B,roomY:V}=l.hover;Le(N,{roomX:B,roomY:V})},te=I=>{l.centering=!1,I.preventDefault();let N=Math.exp(I.deltaY*.0015);if(l.goal==="single"){let B=S(I);l.single.radius=zn.clamp(l.single.radius*N,40,1800),T(jo(l.t));let V=S(I);B&&V&&(l.single.target.add(B.sub(V)),W())}else{let B=P(I);if(I.altKey||B?.shardIndex==null){l.multi.phi=zn.clamp(l.multi.phi+I.deltaY*uL,XM.min,XM.max),T(jo(l.t)),Z(I);return}let V=v(),le={x:V.toRoomX(B.point.x),y:V.toRoomY(B.point.z)};l.multi.rooms=zn.clamp(l.multi.rooms*N,hL,dL);let ae=v();l.multi.center={x:le.x-(B.point.x-V.center.x*pe)/ae.unit,y:le.y-(B.point.z-V.center.y*pe)/ae.unit},T(jo(l.t)),Z(I)}},ge=()=>{!Q&&l.hover&&(l.hover=null,Je())},se=n.domElement;se.addEventListener("pointerdown",Me),se.addEventListener("pointermove",De),se.addEventListener("pointerup",Ze),se.addEventListener("pointerleave",ge),se.addEventListener("wheel",te,{passive:!1}),se.addEventListener("dblclick",$);let Te=I=>{l.activeShard=I,d[I].ensureDetail()},Le=(I,N)=>{Te(I),N?(l.single.target.set((N.roomX+.5)*pe,0,(N.roomY+.5)*pe),l.single.radius=Math.min(l.single.radius,420)):l.single.target.set(l.multi.center.x*pe,0,l.multi.center.y*pe),W(),be("single")},be=I=>{I!==l.goal&&(I==="multi"&&l.t<=.001&&(h(),l.multi.focusY=l.activeShard*Vr,l.multi.panX=0),l.goal=I,l.centering=!1,l.hover=null,Je())},ht=null,Je=()=>{let I=l.hover&&{...l.hover,roomName:(0,Un.worldXYToRoomName)(l.hover.roomX,l.hover.roomY),perShard:Lt.map(le=>Za(le,l.hover.roomX,l.hover.roomY))},N=l.selected&&{...l.selected,roomName:(0,Un.worldXYToRoomName)(l.selected.roomX,l.selected.roomY)},B={goal:l.goal,activeShard:l.activeShard,hover:I,selected:N},V=JSON.stringify(B);V!==ht&&(ht=V,e?.(B))},qe=90,D=I=>{let{shardIndex:N,roomX:B,roomY:V}=l.selected,le=(ne,Oe)=>Hr(ne,Oe,I,qe),ae;if(l.goal==="single"){let ne=l.single.target,Oe=zn.clamp((B+.5)*pe,$e.x0*pe,($e.x0+$e.size)*pe),ie=zn.clamp((V+.5)*pe,$e.y0*pe,($e.y0+$e.size)*pe);ne.x=le(ne.x,Oe),ne.z=le(ne.z,ie),ae=Math.hypot(Oe-ne.x,ie-ne.z)/pe}else{let ne=l.multi,Oe=N*Vr;ne.center={x:le(ne.center.x,B+.5),y:le(ne.center.y,V+.5)},ne.panX=le(ne.panX,0),ne.focusY=le(ne.focusY,Oe),ae=Math.hypot(ne.center.x-B-.5,ne.center.y-V-.5)+(Math.abs(ne.panX)+Math.abs(ne.focusY-Oe))/pe}ae<.002&&(l.centering=!1)},an=(I,N)=>{let B=I.clone().project(s);return{x:(B.x+1)/2*N.x,y:(1-B.y)/2*N.y,visible:B.z<1}},Ge=(I,N,B)=>{I.style.opacity=B,I.style.display=B>.01&&N.visible?"":"none",I.style.transform=`translate(${N.x}px, ${N.y}px)`},We=new ue,Ce=performance.now(),ot,Ae=I=>{ot=requestAnimationFrame(Ae);let N=Math.min(64,I-Ce);Ce=I,l.goal==="multi"?(l.detailMix=Hr(l.detailMix,0,N,35),l.detailMix<.05&&(l.t=Math.min(1,l.t+N/WM))):(l.t=Math.max(0,l.t-N/WM),l.detailMix=Hr(l.detailMix,l.t<=.001?1:0,N,35));let B=jo(l.t),V=v();l.activeAnim=Hr(l.activeAnim,l.activeShard,N,110),l.visibility=l.visibility.map((we,ye)=>Hr(we,ye===l.activeShard?1:0,N,90)),l.othersFade=Hr(l.othersFade,l.goal==="multi"?1:0,N,l.goal==="multi"?60:110),l.centering&&D(N),l.overviewMix=Hr(l.overviewMix,l.single.radius>pL?1:0,N,70);let le=qM(.2,.85,B)*l.othersFade,ae=(k()?l.hover?.shardIndex:null)??l.activeShard;l.planeDim=l.planeDim.map((we,ye)=>Hr(we,ye===ae?1:sL,N,90));let ne=we=>we===l.activeShard?1:l.othersFade,Oe=we=>we===l.activeShard?1-l.detailMix:le;d.forEach((we,ye)=>we.update({y:u(ye,B),detailOpacity:l.visibility[ye]*l.detailMix*(1-l.overviewMix),overviewOpacity:l.visibility[ye]*l.detailMix*l.overviewMix,structureScale:l.visibility[ye]*l.detailMix*(1-l.overviewMix),lowOpacity:Oe(ye)*l.planeDim[ye],layout:V,hover:l.hover,selected:l.selected?.shardIndex===ye?l.selected:null,hoverStrong:l.hover?.shardIndex===ye,multiMode:k()}));let ie=!!l.hover&&k()&&V.contains(l.hover.roomX,l.hover.roomY);m.visible=ie,m.visible&&(m.position.set(V.toWorldX(l.hover.roomX+.5),_,V.toWorldZ(l.hover.roomY+.5)),m.scale.set(V.unit/pe,1,V.unit/pe)),T(B),n.getSize(We);let _e=qM(.7,1,B);d.forEach((we,ye)=>{let xe=new L(l.multi.center.x*pe-Qo/2,we.group.position.y,l.multi.center.y*pe+rr/2);Ge(x[ye],an(xe,We),_e*ne(ye));let ze=g[ye];if(ie){let{roomX:Be,roomY:at}=l.hover,U=Za(Lt[ye],Be,at),ce=`${Lt[ye]} \xB7 ${Hg[U]}`;ze.textContent!==ce&&(ze.textContent=ce),ze.classList.toggle("strong",l.hover.shardIndex===ye);let q=new L(V.toWorldX(Be+1),we.group.position.y+2,V.toWorldZ(at));Ge(ze,an(q,We),1)}else Ge(ze,{x:0,y:0,visible:!1},0)}),n.render(r,s)},R=()=>{let{clientWidth:I,clientHeight:N}=t;n.setSize(I,N,!1),s.aspect=I/Math.max(1,N),s.updateProjectionMatrix()},E=new ResizeObserver(R);return E.observe(t),R(),Te(0),Je(),ot=requestAnimationFrame(Ae),{toggleMode:()=>be(l.goal==="multi"?"single":"multi"),centerActiveRoom:()=>{l.selected&&(l.goal==="single"&&l.activeShard!==l.selected.shardIndex&&(Te(l.selected.shardIndex),Je()),l.centering=!0)},setActiveShard:I=>{l.goal==="multi"?Le(I,null):(Te(I),Je())},dispose:()=>{cancelAnimationFrame(ot),E.disconnect(),se.removeEventListener("pointerdown",Me),se.removeEventListener("pointermove",De),se.removeEventListener("pointerup",Ze),se.removeEventListener("pointerleave",ge),se.removeEventListener("wheel",te),se.removeEventListener("dblclick",$),r.traverse(I=>{I.geometry?.dispose(),[].concat(I.material??[]).forEach(N=>{N.map?.dispose(),N.dispose()})}),n.dispose(),se.remove(),i.remove()}}},_L=({shard:t,index:e,scene:n,maxAnisotropy:i})=>{let r=new gn;n.add(r);let s=os[e],o=document.createElement("canvas");o.width=Math.round(YM*Ad),o.height=YM;let a=new _s(o);a.colorSpace=$t,a.anisotropy=i;let l=new gn;r.add(l);let c=new Kn({map:a,transparent:!0,opacity:0}),u=new bt(new Qn(Qo,rr).rotateX(-Math.PI/2),c);u.userData.shardIndex=e,l.add(u);let d=new Ts({color:"#0f131a",transparent:!0,opacity:0,roughness:.9}),f=new bt(new vn(Qo+12,6,rr+12),d);f.position.y=-3.3,l.add(f);let p=new bi({color:s,transparent:!0,opacity:0}),m=Qo/2+6,x=rr/2+6,g=new Go(new Nt().setFromPoints([new L(-m,.3,-x),new L(m,.3,-x),new L(m,.3,x),new L(-m,.3,x)]),p);l.add(g);let h=null,v=({center:k,rooms:z})=>{let W=`${k.x.toFixed(4)},${k.y.toFixed(4)},${z.toFixed(4)}`;if(W===h)return;h=W;let Z=z*Ad;ZM(o.getContext("2d"),t,{left:k.x-Z/2,top:k.y-z/2,roomsX:Z,roomsY:z,widthPx:o.width,heightPx:o.height}),a.needsUpdate=!0},_=new gn,y=new bt(new Qn(pe,pe).rotateX(-Math.PI/2),new Kn({color:"#9be7ff",transparent:!0,opacity:.45,depthWrite:!1,depthTest:!1,blending:Nl})),C=new Go(new Nt().setFromPoints([new L(-25,0,-25),new L(25,0,-25),new L(25,0,25),new L(-25,0,25)]),new bi({color:"#ffffff",transparent:!0,depthTest:!1}));y.renderOrder=C.renderOrder=10,_.add(y,C),_.position.y=1.2,_.visible=!1,r.add(_);let T=4,A=new Xo([new ue(-25,-25),new ue(25,-25),new ue(25,25),new ue(-25,25)]),b=25-T;A.holes.push(new ys([new ue(-b,-b),new ue(b,-b),new ue(b,b),new ue(-b,b)]));let M=new bt(new ws(A).rotateX(-Math.PI/2),new Kn({color:"#ffd166",transparent:!0,depthWrite:!1,depthTest:!1}));M.renderOrder=11,M.position.y=1.4,M.visible=!1,r.add(M);let S=null;return{group:r,lowMesh:u,ensureDetail:()=>{if(S)return;let{terrain:k,roads:z,structures:W}=Ox(t),Z=document.createElement("canvas");Z.width=Z.height=Tn;let Y=Z.getContext("2d"),K=Y.createImageData(Tn,Tn);for(let Le=0;Le<k.length;Le++){let[be,ht,Je]=z[Le]?k[Le]===Eu?[74,84,58]:[88,88,88]:k[Le]===_o?[17,17,17]:k[Le]===Eu?[35,47,18]:[43,43,43];K.data[Le*4]=be,K.data[Le*4+1]=ht,K.data[Le*4+2]=Je,K.data[Le*4+3]=255}Y.putImageData(K,0,0);let X=new _s(Z);X.colorSpace=$t,X.magFilter=sn,X.anisotropy=i;let oe=new gn;oe.position.set(($e.x0+$e.size/2)*pe,0,($e.y0+$e.size/2)*pe);let Q=new Kn({map:X,transparent:!0});oe.add(new bt(new Qn(Tn,Tn).rotateX(-Math.PI/2),Q));let Me=[],De=Tn/2;for(let Le=0;Le<=$e.size;Le++){let be=-De+Le*pe;Me.push(new L(be,.1,-De),new L(be,.1,De),new L(-De,.1,be),new L(De,.1,be))}let Ze=new bi({color:"#7d8ca3",transparent:!0,opacity:.35});oe.add(new Ho(new Nt().setFromPoints(Me),Ze));let $=GM(W),te=document.createElement("canvas");te.width=te.height=$e.size*fL,ZM(te.getContext("2d"),t,{left:$e.x0,top:$e.y0,roomsX:$e.size,roomsY:$e.size,widthPx:te.width,heightPx:te.height});let ge=new _s(te);ge.colorSpace=$t,ge.anisotropy=i;let se=new Kn({map:ge,transparent:!0,opacity:0,depthWrite:!1}),Te=new bt(new Qn(Tn,Tn).rotateX(-Math.PI/2),se);Te.position.set(oe.position.x,.2,oe.position.z),r.add(oe,$,Te),S={root:oe,terrainMaterial:Q,gridMaterial:Ze,structureGroup:$,overview:Te,overviewMaterial:se}},update:({y:k,detailOpacity:z,overviewOpacity:W,structureScale:Z,lowOpacity:Y,layout:K,hover:X,hoverStrong:oe,selected:Q,multiMode:Me})=>{r.position.y=k,S&&(S.root.visible=z>.005,S.terrainMaterial.opacity=z,S.gridMaterial.opacity=.35*z,S.structureGroup.visible=Z>.01,S.structureGroup.scale.y=Math.max(.001,Z),S.overview.visible=W>.005,S.overviewMaterial.opacity=W),l.visible=Y>.005,l.visible&&(l.position.set(K.center.x*pe,.4,K.center.y*pe),v(K)),c.opacity=Y,d.opacity=Y,p.opacity=Y;let De=!Me&&oe&&z+W>.95,Ze=z+W,$=K.contains(Q?.roomX,Q?.roomY)?Y:0,te=Math.min(1,Math.max(Ze,$)*1.6);M.visible=!!Q&&te>.02,M.visible&&(M.position.x=K.toWorldX(Q.roomX+.5),M.position.z=K.toWorldZ(Q.roomY+.5),M.scale.set(K.unit/pe,1,K.unit/pe),M.material.opacity=te),_.visible=!!X&&(Me&&K.contains(X.roomX,X.roomY)||De),_.visible&&(_.position.x=K.toWorldX(X.roomX+.5),_.position.z=K.toWorldZ(X.roomY+.5),_.scale.set(K.unit/pe,1,K.unit/pe),y.visible=Me,y.material.opacity=oe?.6:.32,y.material.color.set(oe?"#ffffff":s))}}},Hg={owned:"owned",remote:"remote",neutral:"neutral",highway:"highway",keeper:"source keeper",center:"sector center"};var jM=({ui:t,shardScene:e})=>(0,KM.cs)(["multi",({},n)=>n(t.goal==="multi")],({multi:n})=>Pe.createElement("div",{className:"hud-7kq"},yL({ui:t,multi:n}),xL({multi:n,shardScene:e}),SL({ui:t,multi:n,shardScene:e}),t.hover&&ML({hover:t.hover}))),yL=({ui:t,multi:e})=>Pe.createElement("div",{className:"panel info-panel"},Pe.createElement("div",{className:"title"},"Screeps Planning 3D ",Pe.createElement("span",{className:"badge"},"mock data")),Pe.createElement("div",{className:"mode"},e?"Multi-shard mode":`Single shard: ${Lt[t.activeShard]}`),t.selected&&Pe.createElement("div",{className:"selected-room"},"Active room: ",Pe.createElement("b",null,Lt[t.selected.shardIndex]," \xB7 ",t.selected.roomName)),Pe.createElement("div",{className:"hints"},Pe.createElement("div",null,Pe.createElement("kbd",null,"Z")," toggle multi-shard"),t.selected&&Pe.createElement("div",null,Pe.createElement("kbd",null,"C")," center the active room"),e?Pe.createElement(Pe.Fragment,null,Pe.createElement("div",null,Pe.createElement("kbd",null,"drag")," move rooms (all shards)"),Pe.createElement("div",null,Pe.createElement("kbd",null,"alt + drag")," move the stack (also: drag off the planes)"),Pe.createElement("div",null,Pe.createElement("kbd",null,"wheel")," rooms per plane"),Pe.createElement("div",null,Pe.createElement("kbd",null,"alt + wheel")," tilt (also: wheel off the planes)"),Pe.createElement("div",null,Pe.createElement("kbd",null,"click")," set active shard + room"),Pe.createElement("div",null,Pe.createElement("kbd",null,"double-click")," open that shard at that room")):Pe.createElement(Pe.Fragment,null,Pe.createElement("div",null,Pe.createElement("kbd",null,"drag")," pan"),Pe.createElement("div",null,Pe.createElement("kbd",null,"click")," set active room"),Pe.createElement("div",null,Pe.createElement("kbd",null,"wheel")," zoom")),Pe.createElement("div",null,Pe.createElement("kbd",null,"\u2318 + click")," open room in game (+ shift: world map)"))),xL=({multi:t,shardScene:e})=>Pe.createElement("button",{className:`mode-toggle ${t?"active":""}`,onClick:()=>e.toggleMode()},t?"Single shard":"All shards"," ",Pe.createElement("kbd",null,"Z")),SL=({ui:t,multi:e,shardScene:n})=>Pe.createElement("div",{className:"panel shard-buttons"},Lt.map((i,r)=>Pe.createElement("button",{key:i,className:!e&&t.activeShard===r?"active":"",style:{"--shard-color":os[r]},onClick:()=>n.setActiveShard(r)},Pe.createElement("span",{className:"dot"}),i))),ML=({hover:t})=>Pe.createElement("div",{className:"panel hover-info"},Pe.createElement("div",{className:"room-name"},t.roomName,t.tileX!=null&&Pe.createElement("span",{className:"tile"}," (",t.tileX,", ",t.tileY,")")),Lt.map((e,n)=>Pe.createElement("div",{key:e,className:`shard-row ${t.shardIndex===n?"current":""}`,style:{"--shard-color":os[n]}},Pe.createElement("span",{className:"dot"}),Pe.createElement("span",{className:"shard"},e),Pe.createElement("span",{className:`status ${t.perShard[n]}`},Hg[t.perShard[n]],t.perShard[n]==="owned"&&` \xB7 ${Ux}`))));var l1=zt(un());var c1=zt(Ar()),u1=zt(e1()),h1=zt(a1()),d1=zt(po()),Xg=zt(yu());var f1=({setUi:t,next:e})=>(0,c1.cs)(["hostRef",({},n)=>(0,Xg.Static2)({next:n})],["sceneRef",({},n)=>(0,Xg.Static2)({next:n})],({hostRef:n,sceneRef:i},r)=>(0,d1.fragments)((0,h1.Effect)({action:()=>{let s=JM({host:n.get(),onUiChange:t});return i.set(s),()=>{s.dispose()}}}),r()),({hostRef:n,sceneRef:i})=>e({renderViewport:({className:r})=>l1.createElement("div",{className:(0,u1.cx1)("shard-scene-9e4",r),ref:n.set}),toggleMode:()=>i.get()?.toggleMode(),centerActiveRoom:()=>i.get()?.centerActiveRoom(),setActiveShard:r=>i.get()?.setActiveShard(r)}));var _1=()=>(0,m1.cs)(["ui",({},t)=>(0,v1.UseState)({initValue:{goal:"single",activeShard:0,hover:null,selected:null},next:t})],["shardScene",({ui:t},e)=>f1({setUi:t.onChange,next:e})],({shardScene:t},e)=>(0,g1.fragments)(e(),(0,Yg.GlobalKeyDown2)({check:(0,qg.keyCombo)("Z"),action:()=>t.toggleMode()}),(0,Yg.GlobalKeyDown2)({check:(0,qg.keyCombo)("C"),action:()=>t.centerActiveRoom()})),({shardScene:t,ui:e})=>p1.createElement("div",{className:"planning-3d-app-3wr"},t.renderViewport({className:"viewport"}),jM({ui:e.value,shardScene:t})));(0,x1.cs)(({},t)=>(0,S1.EsbuildRoot)({createRoot:y1.createRoot,next:t}),()=>_1({}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
