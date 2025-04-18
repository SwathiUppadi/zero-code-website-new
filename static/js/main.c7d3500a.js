/*! For license information please see main.c7d3500a.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:j.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var z=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+_(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(z,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(z,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+_(l=e[c],c);s+=P(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,o,u=a+_(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function F(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},N={transition:null},O={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:N,ReactCurrentOwner:j};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,N(k);else{var t=r(u);null!==t&&O(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(E),E=-1),h=!0;var a=p;try{for(b(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&o(c),b(n)}else o(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&O(w,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,C=null,E=-1,z=5,_=-1;function P(){return!(t.unstable_now()-_<z)}function F(){if(null!==C){var e=t.unstable_now();_=e;var n=!0;try{n=C(!0,e)}finally{n?j():(S=!1,C=null)}}else S=!1}if("function"===typeof x)j=function(){x(F)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,D=T.port2;T.port1.onmessage=F,j=function(){D.postMessage(null)}}else j=function(){v(F,0)};function N(e){C=e,S||(S=!0,j())}function O(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(E),E=-1):g=!0,O(w,a-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,N(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var I,L=Object.assign;function M(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var B=!1;function A(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function U(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1);case 11:return e=A(e.type.render,!1);case 1:return e=A(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case D:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=$(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function X(e,t){G(e,t);var n=$(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,$(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function ae(e,t){var n=$(t.value),r=$(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ce(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ee(e){je?Se?Se.push(e):Se=[e]:je=e}function ze(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Fe=!1;function Te(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return _e(e,t,n)}finally{Fe=!1,(null!==je||null!==Se)&&(Pe(),ze())}}function De(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ne=!1;if(u)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ue){Ne=!1}function Re(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ie=!1,Le=null,Me=!1,Be=null,Ae={onError:function(e){Ie=!0,Le=e}};function Ue(e,t,n,r,o,a,i,l,s){Ie=!1,Le=null,Re.apply(Ae,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function $e(e){if(We(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $e(o),e;if(i===r)return $e(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var qe=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,Ye=o.unstable_requestPaint,Ge=o.unstable_now,Xe=o.unstable_getCurrentPriorityLevel,Je=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Ct,Et=!1,zt=[],_t=null,Pt=null,Ft=null,Tt=new Map,Dt=new Map,Nt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(t.pointerId)}}function It(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Lt(e){var t=xo(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,(function(){jt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Bt(e,t,n){Mt(e)&&n.delete(t)}function At(){Et=!1,null!==_t&&Mt(_t)&&(_t=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Ft&&Mt(Ft)&&(Ft=null),Tt.forEach(Bt),Dt.forEach(Bt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,At)))}function Wt(e){function t(t){return Ut(t,e)}if(0<zt.length){Ut(zt[0],e);for(var n=1;n<zt.length;n++){var r=zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Ut(_t,e),null!==Pt&&Ut(Pt,e),null!==Ft&&Ut(Ft,e),Tt.forEach(t),Dt.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)Lt(n),null===n.blockedOn&&Nt.shift()}var Ht=b.ReactCurrentBatchConfig,$t=!0;function Vt(e,t,n,r){var o=xt,a=Ht.transition;Ht.transition=null;try{xt=1,qt(e,t,n,r)}finally{xt=o,Ht.transition=a}}function Kt(e,t,n,r){var o=xt,a=Ht.transition;Ht.transition=null;try{xt=4,qt(e,t,n,r)}finally{xt=o,Ht.transition=a}}function qt(e,t,n,r){if($t){var o=Zt(e,t,n,r);if(null===o)$r(e,t,r,Qt,n),Rt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return _t=It(_t,e,t,n,r,o),!0;case"dragenter":return Pt=It(Pt,e,t,n,r,o),!0;case"mouseover":return Ft=It(Ft,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Tt.set(a,It(Tt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Dt.set(a,It(Dt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==o;){var a=bo(o);if(null!==a&&wt(a),null===(a=Zt(e,t,n,r))&&$r(e,t,r,Qt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else $r(e,t,r,null,n)}}var Qt=null;function Zt(e,t,n,r){if(Qt=null,null!==(e=xo(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,o="value"in Gt?Gt.value:Gt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Jt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=L({},cn,{view:0,detail:0}),fn=on(dn),pn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(L({},pn,{dataTransfer:0})),gn=on(L({},dn,{relatedTarget:0})),vn=on(L({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=L({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(L({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Cn(){return Sn}var En=L({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),zn=on(En),_n=on(L({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Fn=on(L({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=L({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dn=on(Tn),Nn=[9,13,27,32],On=u&&"CompositionEvent"in window,Rn=null;u&&"documentMode"in document&&(Rn=document.documentMode);var In=u&&"TextEvent"in window&&!Rn,Ln=u&&(!On||Rn&&8<Rn&&11>=Rn),Mn=String.fromCharCode(32),Bn=!1;function An(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ee(r),0<(t=Kr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Qn(e){Mr(e,0)}function Zn(e){if(q(wo(e)))return e}function Yn(e,t){if("change"===e)return t}var Gn=!1;if(u){var Xn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Xn=Jn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Zn(qn)){var t=[];Vn(t,qn,e,we(e)),Te(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Zn(qn)}function ar(e,t){if("click"===e)return Zn(t)}function ir(e,t){if("input"===e||"change"===e)return Zn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ur(n,a);var i=ur(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},jr={},Sr={};function Cr(e){if(jr[e])return jr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),zr=Cr("animationiteration"),_r=Cr("animationstart"),Pr=Cr("transitionend"),Fr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(e,t){Fr.set(e,t),s(t,[e])}for(var Nr=0;Nr<Tr.length;Nr++){var Or=Tr[Nr];Dr(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Dr(Er,"onAnimationEnd"),Dr(zr,"onAnimationIteration"),Dr(_r,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,c){if(Ue.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var u=Le;Ie=!1,Le=null,Me||(Me=!0,Be=u)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Lr(o,l,c),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Lr(o,l,c),a=s}}}if(Me)throw e=Be,Me=!1,Be=null,e}function Br(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Ar(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Ar(t,!1,e),Ar(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Ar("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Yt(t)){case 1:var o=Vt;break;case 4:o=Kt;break;default:o=qt}n=o.bind(null,t,n,e),o=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $r(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=xo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=a,o=we(n),i=[];e:{var l=Fr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=zn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Er:case zr:case _r:s=vn;break;case Pr:s=Fn;break;case"scroll":s=fn;break;case"wheel":s=Dn;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=De(h,f))&&u.push(Vr(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!xo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?xo(c):null)&&(c!==(d=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=_n,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==c?l:wo(c),(l=new u(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,xo(o)===r&&((u=new u(f,h+"enter",c,n,o)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)u=qr(u),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=qr(u),f=qr(f)}u=null}else u=null;null!==s&&Qr(i,l,s,u,!1),null!==c&&null!==d&&Qr(i,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Yn;else if($n(l))if(Gn)g=ir;else{g=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Vn(i,g,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":($n(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(i,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(i,n,o)}var y;if(On)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Wn?An(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Ln&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Wn&&(y=en()):(Xt="value"in(Gt=o)?Gt.value:Gt.textContent,Wn=!0)),0<(v=Kr(r,x)).length&&(x=new bn(x,e,null,n,o),i.push({event:x,listeners:v}),y?x.data=y:null!==(y=Un(n))&&(x.data=y))),(y=In?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Bn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!On&&An(e,t)?(e=en(),Jt=Xt=Gt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=y))}Mr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=De(e,n))&&r.unshift(Vr(e,a,o)),null!=(a=De(e,t))&&r.push(Vr(e,a,o))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=De(n,a))&&i.unshift(Vr(n,s,l)):o||null!=(s=De(n,a))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Zr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Zr,"\n").replace(Yr,"")}function Xr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(a(425))}function Jr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Wt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function xo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[po])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function ko(e){return e[ho]||null}var jo=[],So=-1;function Co(e){return{current:e}}function Eo(e){0>So||(e.current=jo[So],jo[So]=null,So--)}function zo(e,t){So++,jo[So]=e.current,e.current=t}var _o={},Po=Co(_o),Fo=Co(!1),To=_o;function Do(e,t){var n=e.type.contextTypes;if(!n)return _o;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function No(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oo(){Eo(Fo),Eo(Po)}function Ro(e,t,n){if(Po.current!==_o)throw Error(a(168));zo(Po,t),zo(Fo,n)}function Io(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,H(e)||"Unknown",o));return L({},n,r)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_o,To=Po.current,zo(Po,e),zo(Fo,Fo.current),!0}function Mo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Io(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,Eo(Fo),Eo(Po),zo(Po,e)):Eo(Fo),zo(Fo,n)}var Bo=null,Ao=!1,Uo=!1;function Wo(e){null===Bo?Bo=[e]:Bo.push(e)}function Ho(){if(!Uo&&null!==Bo){Uo=!0;var e=0,t=xt;try{var n=Bo;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Bo=null,Ao=!1}catch(o){throw null!==Bo&&(Bo=Bo.slice(e+1)),qe(Je,Ho),o}finally{xt=t,Uo=!1}}return null}var $o=[],Vo=0,Ko=null,qo=0,Qo=[],Zo=0,Yo=null,Go=1,Xo="";function Jo(e,t){$o[Vo++]=qo,$o[Vo++]=Ko,Ko=e,qo=t}function ea(e,t,n){Qo[Zo++]=Go,Qo[Zo++]=Xo,Qo[Zo++]=Yo,Yo=e;var r=Go;e=Xo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Go=1<<32-it(t)+o|n<<o|r,Xo=a+e}else Go=1<<a|n<<o|r,Xo=e}function ta(e){null!==e.return&&(Jo(e,1),ea(e,1,0))}function na(e){for(;e===Ko;)Ko=$o[--Vo],$o[Vo]=null,qo=$o[--Vo],$o[Vo]=null;for(;e===Yo;)Yo=Qo[--Zo],Qo[Zo]=null,Xo=Qo[--Zo],Qo[Zo]=null,Go=Qo[--Zo],Qo[Zo]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yo?{id:Go,overflow:Xo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw pa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?co(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=co(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=b.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xa(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===j?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===D&&xa(a)===t.type)?((r=o(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Rc(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case k:return(t=Mc(t,e.mode,n)).return=e,t;case D:return f(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Rc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case D:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||R(n))return null!==o?null:d(e,t,n,r,null);ya(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case D:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||R(r))return d(t,e=e.get(n)||null,r,o,null);ya(t,r)}return null}function m(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(o,d),aa&&Jo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return aa&&Jo(o,m),c}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),aa&&Jo(o,m),c}function g(o,l,s,c){var u=R(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=p(o,m,y.value,c);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(o,m),l=i(x,l,g),null===d?u=x:d.sibling=x,d=x,m=v}if(y.done)return n(o,m),aa&&Jo(o,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return aa&&Jo(o,g),u}for(m=r(o,m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),aa&&Jo(o,g),u}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===j&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===j){if(7===u.tag){n(r,u.sibling),(a=o(u,i.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===D&&xa(c)===u.type){n(r,u.sibling),(a=o(u,i.props)).ref=va(r,u,i),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===j?((a=Rc(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=Oc(i.type,i.key,i.props,null,r.mode,s)).ref=va(r,a,i),s.return=r,r=s)}return l(r);case k:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Mc(i,r.mode,s)).return=r,r=a}return l(r);case D:return e(r,a,(u=i._init)(i._payload),s)}if(te(i))return m(r,a,i,s);if(R(i))return g(r,a,i,s);ya(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Lc(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=ba(!0),ka=ba(!1),ja=Co(null),Sa=null,Ca=null,Ea=null;function za(){Ea=Ca=Sa=null}function _a(e){var t=ja.current;Eo(ja),e._currentValue=t}function Pa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fa(e,t){Sa=e,Ea=Ca=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function Ta(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===Ca){if(null===Sa)throw Error(a(308));Ca=e,Sa.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Da=null;function Na(e){null===Da?Da=[e]:Da.push(e)}function Oa(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Na(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ra(e,r)}function Ra(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ba(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_s)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ra(e,n)}return null===(o=r.interleaved)?(t.next=t,Na(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ra(e,n)}function Ua(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ha(e,t,n,r){var o=e.updateQueue;Ia=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=L({},d,f);break e;case 2:Ia=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Is|=i,e.lanes=i,e.memoizedState=d}}function $a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Va={},Ka=Co(Va),qa=Co(Va),Qa=Co(Va);function Za(e){if(e===Va)throw Error(a(174));return e}function Ya(e,t){switch(zo(Qa,t),zo(qa,e),zo(Ka,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Eo(Ka),zo(Ka,t)}function Ga(){Eo(Ka),Eo(qa),Eo(Qa)}function Xa(e){Za(Qa.current);var t=Za(Ka.current),n=se(t,e.type);t!==n&&(zo(qa,e),zo(Ka,n))}function Ja(e){qa.current===e&&(Eo(Ka),Eo(qa))}var ei=Co(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=b.ReactCurrentDispatcher,ai=b.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,fi=0,pi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Ji:el,e=n(r,o),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Xi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function xi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function bi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=xi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,li.lanes|=d,Is|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Is|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=xi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(xl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ji(){}function Si(e,t){var n=li,r=xi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,xl=!0),r=r.queue,Ii(zi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,Ti(9,Ei.bind(null,n,r,o,t),void 0,null),null===Ps)throw Error(a(349));0!==(30&ii)||Ci(n,t,o)}return o}function Ci(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ei(e,t,n,r){t.value=n,t.getSnapshot=r,_i(t)&&Pi(e)}function zi(e,t,n){return n((function(){_i(t)&&Pi(e)}))}function _i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=Ra(e,1);null!==t&&nc(t,e,1,-1)}function Fi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Di(){return xi().memoizedState}function Ni(e,t,n,r){var o=yi();li.flags|=e,o.memoizedState=Ti(1|t,n,void 0,void 0===r?null:r)}function Oi(e,t,n,r){var o=xi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&mi(r,i.deps))return void(o.memoizedState=Ti(t,n,a,r))}li.flags|=e,o.memoizedState=Ti(1|t,n,a,r)}function Ri(e,t){return Ni(8390656,8,e,t)}function Ii(e,t){return Oi(2048,8,e,t)}function Li(e,t){return Oi(4,2,e,t)}function Mi(e,t){return Oi(4,4,e,t)}function Bi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ai(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oi(4,4,Bi.bind(null,t,e),n)}function Ui(){}function Wi(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hi(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $i(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Is|=n,e.baseState=!0),t)}function Vi(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{xt=n,ai.transition=r}}function Ki(){return xi().memoizedState}function qi(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zi(e))Yi(t,n);else if(null!==(n=Oa(e,t,n,r))){nc(n,e,r,ec()),Gi(n,t,r)}}function Qi(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))Yi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,Na(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Oa(e,t,o,r))&&(nc(n,e,r,o=ec()),Gi(n,t,r))}}function Zi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Yi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xi={readContext:Ta,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:Ta,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:Ri,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ni(4194308,4,Bi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Fi,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Fi(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=yi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ps)throw Error(a(349));0!==(30&ii)||Ci(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ri(zi.bind(null,r,i,e),[e]),r.flags|=2048,Ti(9,Ei.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=Ps.identifierPrefix;if(aa){var n=Xo;t=":"+t+"R"+(n=(Go&~(1<<32-it(Go)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ta,useCallback:Wi,useContext:Ta,useEffect:Ii,useImperativeHandle:Ai,useInsertionEffect:Li,useLayoutEffect:Mi,useMemo:Hi,useReducer:wi,useRef:Di,useState:function(){return wi(bi)},useDebugValue:Ui,useDeferredValue:function(e){return $i(xi(),si.memoizedState,e)},useTransition:function(){return[wi(bi)[0],xi().memoizedState]},useMutableSource:ji,useSyncExternalStore:Si,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:Ta,useCallback:Wi,useContext:Ta,useEffect:Ii,useImperativeHandle:Ai,useInsertionEffect:Li,useLayoutEffect:Mi,useMemo:Hi,useReducer:ki,useRef:Di,useState:function(){return ki(bi)},useDebugValue:Ui,useDeferredValue:function(e){var t=xi();return null===si?t.memoizedState=e:$i(t,si.memoizedState,e)},useTransition:function(){return[ki(bi)[0],xi().memoizedState]},useMutableSource:ji,useSyncExternalStore:Si,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Ba(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Aa(e,a,o))&&(nc(t,e,o,r),Ua(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Ba(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Aa(e,a,o))&&(nc(t,e,o,r),Ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Ba(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Aa(e,o,r))&&(nc(t,e,r,n),Ua(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=_o,a=t.contextType;return"object"===typeof a&&null!==a?a=Ta(a):(o=No(t)?To:Po.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Do(e,o):_o),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},La(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Ta(a):(a=No(t)?To:Po.current,o.context=Do(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ha(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ba(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Ba(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ba(-1,1)).tag=2,Aa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return Fa(t,o),r=gi(e,t,n,r,a,o),n=vi(),null===e||xl?(aa&&n&&ta(t),t.flags|=1,bl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$l(e,t,o))}function kl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Dc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,jl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return $l(e,t,o)}return t.flags|=1,(e=Nc(a,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,$l(e,t,o);0!==(131072&e.flags)&&(xl=!0)}}return El(e,t,n,r,o)}function Sl(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zo(Ns,Ds),Ds|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zo(Ns,Ds),Ds|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,zo(Ns,Ds),Ds|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,zo(Ns,Ds),Ds|=r;return bl(e,t,o,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,o){var a=No(n)?To:Po.current;return a=Do(t,a),Fa(t,o),n=gi(e,t,n,r,a,o),r=vi(),null===e||xl?(aa&&r&&ta(t),t.flags|=1,bl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$l(e,t,o))}function zl(e,t,n,r,o){if(No(n)){var a=!0;Lo(t)}else a=!1;if(Fa(t,o),null===t.stateNode)Hl(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ta(c):c=Do(t,c=No(n)?To:Po.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),Ia=!1;var f=t.memoizedState;i.state=f,Ha(t,r,i,o),s=t.memoizedState,l!==r||f!==s||Fo.current||Ia?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ia||al(t,n,l,r,f,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ma(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ta(s):s=Do(t,s=No(n)?To:Po.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Ia=!1,f=t.memoizedState,i.state=f,Ha(t,r,i,o);var h=t.memoizedState;l!==d||f!==h||Fo.current||Ia?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Ia||al(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,a,o)}function _l(e,t,n,r,o,a){Cl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Mo(t,n,!1),$l(e,t,a);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):bl(e,t,l,a),t.memoizedState=r.state,o&&Mo(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ro(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ro(0,t.context,!1),Ya(e,t.containerInfo)}function Fl(e,t,n,r,o){return ha(),ma(o),t.flags|=256,bl(e,t,n,r),t.child}var Tl,Dl,Nl,Ol,Rl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ll(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),zo(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ic(s,o,0,null),e=Rc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Rl,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,Bl(e,t,l,r=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ic({mode:"visible",children:r.children},o,0,null),(i=Rc(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Rl,i);if(0===(1&t.mode))return Bl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Bl(e,t,l,r=ul(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Ps)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Ra(e,o),nc(r,e,o,-1))}return mc(),Bl(e,t,l,r=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=zc.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Qo[Zo++]=Go,Qo[Zo++]=Xo,Qo[Zo++]=Yo,Go=e.id,Xo=e.overflow,Yo=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Nc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Nc(r,l):(l=Rc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Rl,o}return e=(l=e.child).sibling,o=Nc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ml(e,t){return(t=Ic({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bl(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Al(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function Ul(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Wl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Al(e,n,t);else if(19===e.tag)Al(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zo(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,a);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Nc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return No(t.type)&&Oo(),Kl(t),null;case 3:return r=t.stateNode,Ga(),Eo(Fo),Eo(Po),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Dl(e,t),Kl(t),null;case 5:Ja(t);var o=Za(Qa.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Kl(t),null}if(e=Za(Ka.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ho]=i,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)Br(Rr[o],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Y(r,i),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Br("invalid",r);break;case"textarea":oe(r,i),Br("invalid",r)}for(var s in ye(n,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Br("scroll",r)}switch(n){case"input":K(r),J(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Br("cancel",e),Br("close",e),o=r;break;case"iframe":case"object":case"embed":Br("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)Br(Rr[o],e);o=r;break;case"source":Br("error",e),o=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),o=r;break;case"details":Br("toggle",e),o=r;break;case"input":Y(e,r),o=Z(e,r),Br("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=L({},r,{value:void 0}),Br("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Br("invalid",e)}for(i in ye(n,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Br("scroll",e):null!=u&&x(e,i,u,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ol(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Za(Qa.current),Za(Ka.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Kl(t),null;case 13:if(Eo(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,i=!1;else if(i=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Os&&(Os=3):mc())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Ga(),Dl(e,t),null===e&&Wr(t.stateNode.containerInfo),Kl(t),null;case 10:return _a(t.type._context),Kl(t),null;case 19:if(Eo(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Os||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zo(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ge()>Ws&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Kl(t),null}else 2*Ge()-i.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,n=ei.current,zo(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ds)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ql(e,t){switch(na(t),t.tag){case 1:return No(t.type)&&Oo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ga(),Eo(Fo),Eo(Po),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Eo(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Eo(ei),null;case 4:return Ga(),null;case 10:return _a(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Dl=function(){},Nl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Za(Ka.current);var a,i=null;switch(n){case"input":o=Z(e,o),r=Z(e,r),i=[];break;case"select":o=L({},o,{value:void 0}),r=L({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ye(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Br("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Ol=function(e,t,n,r){n!==r&&(t.flags|=4)};var Zl=!1,Yl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Yl||Jl(n,t);case 6:var r=us,o=ds;us=null,fs(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Wt(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Yl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Sc(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,fs(e,t,n),Yl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=_c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));ps(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Sc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Sc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Sc(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&G(o,i),xe(s,l);var u=xe(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):x(o,d,f,u)}switch(s){case"input":X(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){Sc(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Sc(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||d,ms(t,e),Yl=u):ms(t,e),vs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){Sc(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){Sc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Xl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var o=Xl,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||Zl;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Yl;l=Zl;var c=Yl;if(Zl=i,(Yl=s)&&!c)for(Xl=o;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?ks(o):null!==s?(s.return=i,Xl=s):ks(o);for(;null!==a;)Xl=a,xs(a,t,n),a=a.sibling;Xl=o,Zl=l,Yl=c}bs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Xl=a):bs(e)}}function bs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Yl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&$a(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$a(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(a(163))}Yl||512&t.flags&&os(t)}catch(p){Sc(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Sc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Sc(t,o,s)}}var a=t.return;try{os(t)}catch(s){Sc(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){Sc(t,i,s)}}}catch(s){Sc(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var js,Ss=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,zs=b.ReactCurrentBatchConfig,_s=0,Ps=null,Fs=null,Ts=0,Ds=0,Ns=Co(0),Os=0,Rs=null,Is=0,Ls=0,Ms=0,Bs=null,As=null,Us=0,Ws=1/0,Hs=null,$s=!1,Vs=null,Ks=null,qs=!1,Qs=null,Zs=0,Ys=0,Gs=null,Xs=-1,Js=0;function ec(){return 0!==(6&_s)?Ge():-1!==Xs?Xs:Xs=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==Ts?Ts&-Ts:null!==ga.transition?(0===Js&&(Js=mt()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Ys)throw Ys=0,Gs=null,Error(a(185));vt(e,n,r),0!==(2&_s)&&e===Ps||(e===Ps&&(0===(2&_s)&&(Ls|=n),4===Os&&lc(e,Ts)),rc(e,r),1===n&&0===_s&&0===(1&t.mode)&&(Ws=Ge()+500,Ao&&Ho()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ps?Ts:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Ao=!0,Wo(e)}(sc.bind(null,e)):Wo(sc.bind(null,e)),io((function(){0===(6&_s)&&Ho()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Xs=-1,Js=0,0!==(6&_s))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=_s;_s|=2;var i=hc();for(Ps===e&&Ts===t||(Hs=null,Ws=Ge()+500,fc(e,t));;)try{yc();break}catch(s){pc(e,s)}za(),Cs.current=i,_s=o,null!==Fs?t=0:(Ps=null,Ts=0,t=Os)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t)throw n=Rs,fc(e,0),lc(e,r),rc(e,Ge()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t))throw n=Rs,fc(e,0),lc(e,r),rc(e,Ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,As,Hs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,As,Hs),t);break}wc(e,As,Hs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,As,Hs),r);break}wc(e,As,Hs);break;default:throw Error(a(329))}}}return rc(e,Ge()),e.callbackNode===n?oc.bind(null,e):null}function ac(e,t){var n=Bs;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=As,As=n,null!==t&&ic(t)),e}function ic(e){null===As?As=e:As.push.apply(As,e)}function lc(e,t){for(t&=~Ms,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&_s))throw Error(a(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Ge()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Rs,fc(e,0),lc(e,t),rc(e,Ge()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,As,Hs),rc(e,Ge()),null}function cc(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&(Ws=Ge()+500,Ao&&Ho())}}function uc(e){null!==Qs&&0===Qs.tag&&0===(6&_s)&&kc();var t=_s;_s|=1;var n=zs.transition,r=xt;try{if(zs.transition=null,xt=1,e)return e()}finally{xt=r,zs.transition=n,0===(6&(_s=t))&&Ho()}}function dc(){Ds=Ns.current,Eo(Ns)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Fs)for(n=Fs.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oo();break;case 3:Ga(),Eo(Fo),Eo(Po),ri();break;case 5:Ja(r);break;case 4:Ga();break;case 13:case 19:Eo(ei);break;case 10:_a(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ps=e,Fs=e=Nc(e.current,null),Ts=Ds=t,Os=0,Rs=null,Ms=Ls=Is=0,As=Bs=null,null!==Da){for(t=0;t<Da.length;t++)if(null!==(r=(n=Da[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Da=null}return e}function pc(e,t){for(;;){var n=Fs;try{if(za(),oi.current=Xi,ui){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,fi=0,Es.current=null,null===n||null===n.return){Os=1,Rs=t,Fs=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Ts,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ma(cl(c,s));break e}}i=c=cl(c,s),4!==Os&&(Os=2),null===Bs?Bs=[i]:Bs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Wa(i,pl(0,c,t));break e;case 1:s=c;var y=i.type,x=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t,Wa(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}bc(n)}catch(b){t=b,Fs===n&&null!==n&&(Fs=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Xi,null===e?Xi:e}function mc(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===Ps||0===(268435455&Is)&&0===(268435455&Ls)||lc(Ps,Ts)}function gc(e,t){var n=_s;_s|=2;var r=hc();for(Ps===e&&Ts===t||(Hs=null,fc(e,t));;)try{vc();break}catch(o){pc(e,o)}if(za(),_s=n,Cs.current=r,null!==Fs)throw Error(a(261));return Ps=null,Ts=0,Os}function vc(){for(;null!==Fs;)xc(Fs)}function yc(){for(;null!==Fs&&!Ze();)xc(Fs)}function xc(e){var t=js(e.alternate,e,Ds);e.memoizedProps=e.pendingProps,null===t?bc(e):Fs=t,Es.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,Ds)))return void(Fs=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Fs=n);if(null===e)return Os=6,void(Fs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Fs=t);Fs=t=e}while(null!==t);0===Os&&(Os=5)}function wc(e,t,n){var r=xt,o=zs.transition;try{zs.transition=null,xt=1,function(e,t,n,r){do{kc()}while(null!==Qs);if(0!==(6&_s))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===Ps&&(Fs=Ps=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,Pc(tt,(function(){return kc(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=zs.transition,zs.transition=null;var l=xt;xt=1;var s=_s;_s|=4,Es.current=null,function(e,t){if(eo=$t,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},$t=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),$t=!!eo,to=eo=null,e.current=n,ys(n,e,o),Ye(),_s=s,xt=l,zs.transition=i}else e.current=n;if(qs&&(qs=!1,Qs=e,Zs=o),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if($s)throw $s=!1,e=Vs,Vs=null,e;0!==(1&Zs)&&0!==e.tag&&kc(),i=e.pendingLanes,0!==(1&i)?e===Gs?Ys++:(Ys=0,Gs=e):Ys=0,Ho()}(e,t,n,r)}finally{zs.transition=o,xt=r}return null}function kc(){if(null!==Qs){var e=bt(Zs),t=zs.transition,n=xt;try{if(zs.transition=null,xt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Zs=0,0!==(6&_s))throw Error(a(331));var o=_s;for(_s|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!==(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(as(d),d===u){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Xl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Xl=y;break e}Xl=i.return}}var x=e.current;for(Xl=x;null!==Xl;){var b=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Xl=b;else e:for(l=x;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Sc(s,s.return,k)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(_s=o,Ho(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{xt=n,zs.transition=t}}return!1}function jc(e,t,n){e=Aa(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Aa(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ts&n)===n&&(4===Os||3===Os&&(130023424&Ts)===Ts&&500>Ge()-Us?fc(e,0):Ms|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ra(e,t))&&(vt(e,t,n),rc(e,n))}function zc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function _c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ec(e,n)}function Pc(e,t){return qe(e,t)}function Fc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Fc(e,t,n,r)}function Dc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Dc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Rc(n.children,o,i,t);case S:l=8,o|=8;break;case C:return(e=Tc(12,n,t,2|o)).elementType=C,e.lanes=i,e;case P:return(e=Tc(13,n,t,o)).elementType=P,e.lanes=i,e;case F:return(e=Tc(19,n,t,o)).elementType=F,e.lanes=i,e;case N:return Ic(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case z:l=9;break e;case _:l=11;break e;case T:l=14;break e;case D:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Tc(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Rc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Ic(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ac(e,t,n,r,o,a,i,l,s){return e=new Bc(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Tc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Uc(e){if(!e)return _o;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(No(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(No(n))return Io(e,n,t)}return t}function Wc(e,t,n,r,o,a,i,l,s){return(e=Ac(n,r,!0,e,0,a,0,l,s)).context=Uc(null),n=e.current,(a=Ba(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Aa(n,a,o),e.current.lanes=o,vt(e,o,r),rc(e,r),e}function Hc(e,t,n,r){var o=t.current,a=ec(),i=tc(o);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ba(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Aa(o,t,i))&&(nc(e,o,i,a),Ua(e,o,i)),i}function $c(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Fo.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ha();break;case 5:Xa(t);break;case 1:No(t.type)&&Lo(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;zo(ja,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(zo(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ll(e,t,n):(zo(ei,1&ei.current),null!==(e=$l(e,t,n))?e.sibling:null);zo(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),zo(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return $l(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,aa&&0!==(1048576&t.flags)&&ea(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var o=Do(t,Po.current);Fa(t,n),o=gi(null,t,r,e,o,n);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,No(r)?(i=!0,Lo(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,La(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=_l(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),bl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Dc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),o){case 0:t=El(null,t,r,e,n);break e;case 1:t=zl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,El(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,zl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Pl(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,Ma(e,t),Ha(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Fl(e,t,r,n,o=cl(Error(a(423)),t));break e}if(r!==o){t=Fl(e,t,r,n,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=ka(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=$l(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ua(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),Cl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Ll(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,zo(ja,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!Fo.current){t=$l(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=Ba(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),Pa(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pa(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}bl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fa(t,n),r=r(o=Ta(o)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),kl(e,t,r,o=nl(r.type,o),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Hl(e,t),t.tag=1,No(r)?(e=!0,Lo(t)):e=!1,Fa(t,n),il(t,r,o),sl(t,r,o,n),_l(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return Sl(e,t,n)}throw Error(a(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Zc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Jc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=$c(i);l.call(e)}}Hc(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=$c(i);a.call(e)}}var i=Wc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=i,e[mo]=i.current,Wr(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=$c(s);l.call(e)}}var s=Ac(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[mo]=s.current,Wr(8===e.nodeType?e.parentNode:e),uc((function(){Hc(t,s,n,r)})),s}(n,t,e,o,r);return $c(i)}Zc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},Zc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Hc(null,e,null,null)})),t[mo]=null}},Zc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&Lt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ge()),0===(6&_s)&&(Ws=Ge()+500,Ho()))}break;case 13:uc((function(){var t=Ra(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},kt=function(e){if(13===e.tag){var t=Ra(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),n=Ra(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},St=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(a(90));q(r),X(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[bo,wo,ko,Ee,ze,cc]},tu={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(a(299));var n=!1,r="",o=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Ac(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(a(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,o,0,i,l),e[mo]=t.current,Wr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(a(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".5c31f8fc.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="zero-code:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/zero-code-website-new/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,i=r[0],l=r[1],s=r[2],c=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkzero_code=self.webpackChunkzero_code||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),o=n(391),a=n(950),i=n.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,u=a.history,h=e.Pop,m=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:b.location,delta:n})}function x(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let b={get action(){return h},get location(){return t(a,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(s,y),m=e,()=>{a.removeEventListener(s,y),m=null}},createHref:e=>n(a,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=f(b.location,t,n);r&&r(o,t),g=v()+1;let l=d(o,g),s=b.createHref(o);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(s)}i&&m&&m({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let o=f(b.location,t,n);r&&r(o,t),g=v();let a=d(o,g),l=b.createHref(o);u.replaceState(a,"",l),i&&m&&m({action:h,location:b.location,delta:0})},go:e=>u.go(e)};return b}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=D(("string"===typeof t?h(t):t).pathname||"/",n);if(null==o)return null;let a=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=T(o);i=P(a[l],e,r)}return i}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=L([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:_(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))o(e,t,r);else o(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,k=3,j=2,S=1,C=10,E=-2,z=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(z)&&(r+=E),t&&(r+=j),n.filter((e=>!z(e))).reduce(((e,t)=>e+(w.test(t)?k:""===t?S:C)),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:L([a,u.pathname]),pathnameBase:M(L([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=L([a,u.pathnameBase]))}return i}function F(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function D(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function N(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e,t){let n=O(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function I(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=h(e):(o=l({},e),c(!o.pathname||!o.pathname.includes("?"),N("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),N("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),N("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?h(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:B(r),hash:A(o)}}(o,a),d=s&&"/"!==s&&s.endsWith("/"),f=(i||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const L=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",A=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],H=(new Set(W),["get",...W]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}const V=t.createContext(null);const K=t.createContext(null);const q=t.createContext(null);const Q=t.createContext(null);const Z=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function G(){return null!=t.useContext(Q)}function X(){return G()||c(!1),t.useContext(Q).location}function J(e){t.useContext(q).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Z);return e?function(){let{router:e}=ue(se.UseNavigateStable),n=fe(ce.UseNavigateStable),r=t.useRef(!1);return J((()=>{r.current=!0})),t.useCallback((function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,$({fromRouteId:n},o)))}),[e,n])}():function(){G()||c(!1);let e=t.useContext(V),{basename:n,future:r,navigator:o}=t.useContext(q),{matches:a}=t.useContext(Z),{pathname:i}=X(),l=JSON.stringify(R(a,r.v7_relativeSplatPath)),s=t.useRef(!1);return J((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void o.go(t);let a=I(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:L([n,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)}),[n,o,l,i,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(q),{matches:a}=t.useContext(Z),{pathname:i}=X(),l=JSON.stringify(R(a,o.v7_relativeSplatPath));return t.useMemo((()=>I(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function ne(n,r,o,a){G()||c(!1);let{navigator:i,static:l}=t.useContext(q),{matches:s}=t.useContext(Z),u=s[s.length-1],d=u?u.params:{},f=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let p,m=X();if(r){var g;let e="string"===typeof r?h(r):r;"/"===f||(null==(g=e.pathname)?void 0:g.startsWith(f))||c(!1),p=e}else p=m;let y=p.pathname||"/",x=y;if("/"!==f){let e=f.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!l&&o&&o.matches&&o.matches.length>0?o.matches:v(n,{pathname:x});let w=le(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:L([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:L([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,o,a);return r&&w?t.createElement(Q.Provider,{value:{location:$({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},w):w}function re(){let e=function(){var e;let n=t.useContext(Y),r=de(ce.UseRouteError),o=fe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const oe=t.createElement(re,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Z.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:o}=e,a=t.useContext(V);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Z.Provider,{value:n},o)}function le(e,n,r,o){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(a=r)?void 0:a.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,o,a)=>{let i,c=!1,f=null,p=null;var h;r&&(i=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||oe,u&&(d<0&&0===a?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===a&&(c=!0,p=o.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,a+1)),g=()=>{let n;return n=i?f:c?p:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(ie,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(V);return n||c(!1),n}function de(e){let n=t.useContext(K);return n||c(!1),n}function fe(e){let n=function(){let e=t.useContext(Z);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){c(!1)}function ge(n){let{basename:r="/",children:o=null,location:a,navigationType:i=e.Pop,navigator:l,static:s=!1,future:u}=n;G()&&c(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:$({v7_relativeSplatPath:!1},u)})),[d,u,l,s]);"string"===typeof a&&(a=h(a));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=a,x=t.useMemo((()=>{let e=D(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:i}}),[d,p,m,g,v,y,i]);return null==x?null:t.createElement(q.Provider,{value:f},t.createElement(Q.Provider,{children:o,value:x}))}function ve(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise((()=>{}));t.Component;function ye(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,o)=>{if(!t.isValidElement(e))return;let a=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,a));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ye(e.props.children,a)),r.push(i)})),r}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(ac){}new Map;const ke=r.startTransition;i.flushSync,r.useId;function je(e){let{basename:n,children:r,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),m((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return f("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:p(t)}),null,l)));let s=i.current,[c,u]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},h=t.useCallback((e=>{d&&ke?ke((()=>u(e))):u(e)}),[u,d]);return t.useLayoutEffect((()=>s.listen(h)),[s,h]),t.useEffect((()=>he(o)),[o]),t.createElement(ge,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:o})}const Se="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=t.forwardRef((function(e,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,viewTransition:h}=e,m=be(e,we),{basename:g}=t.useContext(q),v=!1;if("string"===typeof d&&Ce.test(d)&&(r=d,Se))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=D(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(ac){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;G()||c(!1);let{basename:o,navigator:a}=t.useContext(q),{hash:i,pathname:l,search:s}=te(e,{relative:r}),u=l;return"/"!==o&&(u="/"===l?o:L([o,l])),a.createHref({pathname:u,search:s,hash:i})}(d,{relative:a}),x=function(e,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,c=ee(),u=X(),d=te(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:p(u)===p(d);c(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}}),[u,c,d,o,a,r,e,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:a,viewTransition:h});return t.createElement("a",xe({},m,{href:r||y,onClick:v||i?o:function(e){o&&o(e),e.defaultPrevented||x(e)},ref:n,target:u}))}));var ze,_e;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ze||(ze={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(_e||(_e={}));var Pe=function(){return Pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Pe.apply(this,arguments)};Object.create;function Fe(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Te=n(324),De=n.n(Te),Ne="-ms-",Oe="-moz-",Re="-webkit-",Ie="comm",Le="rule",Me="decl",Be="@keyframes",Ae=Math.abs,Ue=String.fromCharCode,We=Object.assign;function He(e){return e.trim()}function $e(e,t){return(e=t.exec(e))?e[0]:e}function Ve(e,t,n){return e.replace(t,n)}function Ke(e,t,n){return e.indexOf(t,n)}function qe(e,t){return 0|e.charCodeAt(t)}function Qe(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function Ye(e){return e.length}function Ge(e,t){return t.push(e),e}function Xe(e,t){return e.filter((function(e){return!$e(e,t)}))}var Je=1,et=1,tt=0,nt=0,rt=0,ot="";function at(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Je,column:et,length:i,return:"",siblings:l}}function it(e,t){return We(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=it(e.root,{children:[e]});Ge(e,e.siblings)}function st(){return rt=nt>0?qe(ot,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ct(){return rt=nt<tt?qe(ot,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ut(){return qe(ot,nt)}function dt(){return nt}function ft(e,t){return Qe(ot,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Je=et=1,tt=Ze(ot=e),nt=0,[]}function mt(e){return ot="",e}function gt(e){return He(ft(nt-1,xt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ut())&&rt<33;)ct();return pt(e)>2||pt(rt)>3?"":" "}function yt(e,t){for(;--t&&ct()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return ft(e,dt()+(t<6&&32==ut()&&32==ct()))}function xt(e){for(;ct();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&xt(rt);break;case 40:41===e&&xt(e);break;case 92:ct()}return nt}function bt(e,t){for(;ct()&&e+rt!==57&&(e+rt!==84||47!==ut()););return"/*"+ft(t,nt-1)+"*"+Ue(47===e?e:ct())}function wt(e){for(;!pt(ut());)ct();return ft(e,nt)}function kt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Me:return e.return=e.return||e.value;case Ie:return"";case Be:return e.return=e.value+"{"+kt(e.children,r)+"}";case Le:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=kt(e.children,r))?e.return=e.value+"{"+n+"}":""}function St(e,t,n){switch(function(e,t){return 45^qe(e,0)?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}(e,t)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+Oe+e+Ne+e+e;case 5936:switch(qe(e,t+11)){case 114:return Re+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Re+e+Ne+e+e;case 6165:return Re+e+Ne+"flex-"+e+e;case 5187:return Re+e+Ve(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return Re+e+Ne+"flex-item-"+Ve(e,/flex-|-self/g,"")+($e(e,/flex-|baseline/)?"":Ne+"grid-row-"+Ve(e,/flex-|-self/g,""))+e;case 4675:return Re+e+Ne+"flex-line-pack"+Ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Re+e+Ne+Ve(e,"shrink","negative")+e;case 5292:return Re+e+Ne+Ve(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+Ve(e,"-grow","")+Re+e+Ne+Ve(e,"grow","positive")+e;case 4554:return Re+Ve(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return Ve(Ve(Ve(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return Ve(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Ve(Ve(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4200:if(!$e(e,/flex-|baseline/))return Ne+"grid-column-align"+Qe(e,t)+e;break;case 2592:case 3360:return Ne+Ve(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,$e(e.props,/grid-\w+-end/)}))?~Ke(e+(n=n[t].value),"span",0)?e:Ne+Ve(e,"-start","")+e+Ne+"grid-row-span:"+(~Ke(n,"span",0)?$e(n,/\d+/):+$e(n,/\d+/)-+$e(e,/\d+/))+";":Ne+Ve(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return $e(e.props,/grid-\w+-start/)}))?e:Ne+Ve(Ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ve(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(qe(e,t+1)){case 109:if(45!==qe(e,t+4))break;case 102:return Ve(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Oe+(108==qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?St(Ve(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,i,l){return Ne+n+":"+r+l+(o?Ne+n+"-span:"+(a?i:+i-+r)+l:"")+e}));case 4949:if(121===qe(e,t+6))return Ve(e,":",":"+Re)+e;break;case 6444:switch(qe(e,45===qe(e,14)?18:11)){case 120:return Ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(45===qe(e,14)?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Ne+"$2box$3")+e;case 100:return Ve(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Me:return void(e.return=St(e.value,e.length,n));case Be:return kt([it(e,{value:Ve(e.value,"@","@"+Re)})],r);case Le:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch($e(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(it(e,{props:[Ve(t,/:(read-\w+)/,":-moz-$1")]})),lt(it(e,{props:[t]})),We(e,{props:Xe(n,r)});break;case"::placeholder":lt(it(e,{props:[Ve(t,/:(plac\w+)/,":"+Re+"input-$1")]})),lt(it(e,{props:[Ve(t,/:(plac\w+)/,":-moz-$1")]})),lt(it(e,{props:[Ve(t,/:(plac\w+)/,Ne+"input-$1")]})),lt(it(e,{props:[t]})),We(e,{props:Xe(n,r)})}return""}))}}function Et(e){return mt(zt("",null,null,null,[""],e=ht(e),0,[0],e))}function zt(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,x="",b=o,w=a,k=r,j=x;g;)switch(h=y,y=ct()){case 40:if(108!=h&&58==qe(j,d-1)){-1!=Ke(j+=Ve(gt(y),"&","&\f"),"&\f",Ae(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:j+=gt(y);break;case 9:case 10:case 13:case 32:j+=vt(h);break;case 92:j+=yt(dt()-1,7);continue;case 47:switch(ut()){case 42:case 47:Ge(Pt(bt(ct(),dt()),t,n,s),s);break;default:j+="/"}break;case 123*m:l[c++]=Ze(j)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(j=Ve(j,/\f/g,"")),p>0&&Ze(j)-d&&Ge(p>32?Ft(j+";",r,n,d-1,s):Ft(Ve(j," ","")+";",r,n,d-2,s),s);break;case 59:j+=";";default:if(Ge(k=_t(j,t,n,c,u,o,l,x,b=[],w=[],d,a),a),123===y)if(0===u)zt(j,t,k,k,b,a,d,l,w);else switch(99===f&&110===qe(j,3)?100:f){case 100:case 108:case 109:case 115:zt(e,k,k,r&&Ge(_t(e,k,k,0,0,o,l,x,o,b=[],d,w),w),o,w,d,l,r?b:w);break;default:zt(j,k,k,k,[""],w,0,l,w)}}c=u=p=0,m=v=1,x=j="",d=i;break;case 58:d=1+Ze(j),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==st())continue;switch(j+=Ue(y),y*m){case 38:v=u>0?1:(j+="\f",-1);break;case 44:l[c++]=(Ze(j)-1)*v,v=1;break;case 64:45===ut()&&(j+=gt(ct())),f=ut(),u=d=Ze(x=j+=wt(dt())),y++;break;case 45:45===h&&2==Ze(j)&&(m=0)}}return a}function _t(e,t,n,r,o,a,i,l,s,c,u,d){for(var f=o-1,p=0===o?a:[""],h=Ye(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=Qe(e,f+1,f=Ae(g=i[m])),b=e;y<h;++y)(b=He(g>0?p[y]+" "+x:Ve(x,/&\f/g,p[y])))&&(s[v++]=b);return at(e,t,n,0===o?Le:l,s,c,u,d)}function Pt(e,t,n,r){return at(e,t,n,Ie,Ue(rt),Qe(e,2,-2),0,r)}function Ft(e,t,n,r,o){return at(e,t,n,Me,Qe(e,0,r),Qe(e,r+1,-1),r,o)}var Tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Nt="active",Ot="data-styled-version",Rt="6.1.17",It="/*!sc*/\n",Lt="undefined"!=typeof window&&"HTMLElement"in window,Mt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/zero-code-website-new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Bt=(new Set,Object.freeze([])),At=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=At),e.theme!==n.theme&&e.theme||t||n.theme}var Wt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ht=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$t=/(^-|-$)/g;function Vt(e){return e.replace(Ht,"-").replace($t,"")}var Kt=/(a)(d)/gi,qt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=qt(t%52)+n;return(qt(t%52)+n).replace(Kt,"$1-$2")}var Zt,Yt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gt=function(e){return Yt(5381,e)};function Xt(e){return Qt(Gt(e)>>>0)}function Jt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((Zt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zt[nn]=ln,Zt);function cn(e){return("type"in(t=e)&&t.type.$$typeof)===nn?ln:"$$typeof"in e?sn[e.$$typeof]:on;var t}var un=Object.defineProperty,dn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,hn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=hn(t);r&&r!==mn&&gn(e,r,n)}var o=dn(t);fn&&(o=o.concat(fn(t)));for(var a=cn(e),i=cn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in an||n&&n[s]||i&&s in i||a&&s in a)){var c=pn(t,s);try{un(e,s,c)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kn(e,t,n){if(void 0===n&&(n=!1),!n&&!wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kn(e[r],t[r]);else if(wn(t))for(var r in t)e[r]=kn(e[r],t[r]);return e}function jn(e,t){Object.defineProperty(e,"toString",{value:t})}function Sn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Sn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(It);return t},e}(),En=new Map,zn=new Map,_n=1,Pn=function(e){if(En.has(e))return En.get(e);for(;zn.has(_n);)_n++;var t=_n++;return En.set(e,t),zn.set(t,e),t},Fn=function(e,t){_n=t+1,En.set(e,t),zn.set(t,e)},Tn="style[".concat(Dt,"][").concat(Ot,'="').concat(Rt,'"]'),Dn=new RegExp("^".concat(Dt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nn=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},On=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(It),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(Dn);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Fn(u,c),Nn(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Rn=function(e){for(var t=document.querySelectorAll(Tn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Dt)!==Nt&&(On(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function In(){return n.nc}var Ln=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Dt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(Dt,Nt),r.setAttribute(Ot,Rt);var i=In();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Mn=function(){function e(e){this.element=Ln(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Bn=function(){function e(e){this.element=Ln(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),An=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Un=Lt,Wn={isServer:!Lt,useCSSOMInjection:!Mt},Hn=function(){function e(e,t,n){void 0===e&&(e=At),void 0===t&&(t={});var r=this;this.options=Pe(Pe({},Wn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Lt&&Un&&(Un=!1,Rn(this)),jn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return zn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Dt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(It)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return Pn(e)},e.prototype.rehydrate=function(){!this.server&&Lt&&Rn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new An(n):t?new Mn(n):new Bn(n)}(this.options),new Cn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Pn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Pn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Pn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$n=/&/g,Vn=/^\s*\/\/.*$/gm;function Kn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kn(e.children,t)),e}))}function qn(e){var t,n,r,o=void 0===e?At:e,a=o.options,i=void 0===a?At:a,l=o.plugins,s=void 0===l?Bt:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===Le&&e.value.includes("&")&&(e.props[0]=e.props[0].replace($n,n).replace(r,c))})),i.prefix&&u.push(Ct),u.push(jt);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Vn,""),c=Et(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=Kn(c,i.namespace));var d,f=[];return kt(c,function(e){var t=Ye(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||Sn(15),Yt(e,t.name)}),5381).toString():"",d}var Qn=new Hn,Zn=qn(),Yn=t.createContext({shouldForwardProp:void 0,styleSheet:Qn,stylis:Zn}),Gn=(Yn.Consumer,t.createContext(void 0));function Xn(){return(0,t.useContext)(Yn)}function Jn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],a=Xn().styleSheet,i=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)((function(){return qn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){De()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Yn.Provider,{value:s},t.createElement(Gn.Provider,{value:l},e.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Zn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jn(this,(function(){throw Sn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Zn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},or=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!rr(a)&&(Array.isArray(a)&&a.isCss||vn(a)?r.push("".concat(nr(o),":"),a,";"):wn(a)?r.push.apply(r,Fe(Fe(["".concat(o," {")],or(a),!1),["}"],!1)):r.push("".concat(nr(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Tt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:ar(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:wn(e)?or(e):Array.isArray(e)?Array.prototype.concat.apply(Bt,e.map((function(e){return ar(e,t,n,r)}))):[e.toString()];var o}function ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var lr=Gt(Rt),sr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ir(e),this.componentId=t,this.baseHash=Yt(lr,t),this.baseStyle=n,Hn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=xn(r,this.staticRulesId);else{var o=bn(ar(this.rules,e,t,n)),a=Qt(Yt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=xn(r,a),this.staticRulesId=a}else{for(var l=Yt(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=bn(ar(u,e,t,n));l=Yt(l,d+c),s+=d}}if(s){var f=Qt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=xn(r,f)}}return r},e}(),cr=t.createContext(void 0);cr.Consumer;var ur={};new Set;function dr(e,n,r){var o=yn(e),a=e,i=!en(e),l=n.attrs,s=void 0===l?Bt:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Vt(e);ur[n]=(ur[n]||0)+1;var r="".concat(n,"-").concat(Xt(Rt+n+ur[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Jt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Vt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new sr(r,p,o?a.componentStyle:void 0);function x(e,n){return function(e,n,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(cr),d=Xn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Ut(n,u,i)||At,h=function(e,t,n){for(var r,o=Pe(Pe({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=vn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?xn(o[l],i[l]):"style"===l?Pe(Pe({},o[l]),i[l]):i[l]}return t.className&&(o.className=xn(o.className,t.className)),o}(o,n,p),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Xn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),x=xn(l,s);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[en(m)&&!Wt.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}x.displayName=f;var b=t.forwardRef(x);return b.attrs=h,b.componentStyle=y,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=o?xn(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=p,b.target=o?a.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)kn(e,o[r],!0);return e}({},a.defaultProps,e):e}}),jn(b,(function(){return".".concat(b.styledComponentId)})),i&&gn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function fr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||wn(e))return pr(ar(fr(Bt,Fe([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ar(r):pr(ar(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=At),!t)throw Sn(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,hr.apply(void 0,Fe([r],o,!1)))};return r.attrs=function(r){return mr(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Pe(Pe({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Wt.forEach((function(e){vr[e]=gr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ir(e),Hn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(bn(ar(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Hn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=In(),r=bn([n&&'nonce="'.concat(n,'"'),"".concat(Dt,'="true"'),"".concat(Ot,'="').concat(Rt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Sn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Sn(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Dt]="",n[Ot]=Rt,n.dangerouslySetInnerHTML={__html:r},n),a=In();return a&&(o.nonce=a),[t.createElement("style",Pe({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Hn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Sn(2);return t.createElement(Jn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Sn(3)}})(),"__sc-".concat(Dt,"__");var yr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xr=t.createContext&&t.createContext(yr),br=function(){return br=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},br.apply(this,arguments)},wr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function kr(e){return e&&e.map((function(e,n){return t.createElement(e.tag,br({key:n},e.attr),kr(e.child))}))}function jr(e){return function(n){return t.createElement(Sr,br({attr:br({},e.attr)},n),kr(e.child))}}function Sr(e){var n=function(n){var r,o=e.attr,a=e.size,i=e.title,l=wr(e,["attr","size","title"]),s=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:r,style:br(br({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==xr?t.createElement(xr.Consumer,null,(function(e){return n(e)})):n(yr)}function Cr(e){return jr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"}}]})(e)}function Er(e){return jr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"}}]})(e)}function zr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"}}]})(e)}function _r(e){return jr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Pr(e){return jr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}}]})(e)}function Fr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"}}]})(e)}function Tr(e){return jr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"}}]})(e)}function Dr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function Nr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Or(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function Rr(e){return jr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function Ir(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function Lr(e){return jr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"}}]})(e)}function Mr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function Br(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function Ar(e){return jr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function Ur(e){return jr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}}]})(e)}function Wr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(e)}function Hr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}}]})(e)}function $r(e){return jr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Vr(e){return jr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Kr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"}}]})(e)}function qr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function Qr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}}]})(e)}function Zr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function Yr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(e)}function Gr(e){return jr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"}}]})(e)}function Xr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function Jr(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(e)}function eo(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"}}]})(e)}function to(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"}}]})(e)}function no(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(e)}function ro(e){return jr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function oo(e){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"}}]})(e)}function ao(e){return jr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"}}]})(e)}function io(e){return jr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function lo(e){return jr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}function so(e){return jr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"}}]})(e)}function co(e){return jr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"}}]})(e)}var uo=n(579);const fo=vr.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,po=vr(Ee)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ho=vr.div`
  width: 32px;
  height: 32px;
  background-color: #6366F1;
  border-radius: 6px;
`,mo=vr.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`,go=vr.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,vo=vr(Ee)`
  font-size: 1rem;
  font-weight: 500;
  color: ${e=>e.active?"#6366F1":"#4B5563"};
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: #6366F1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #6366F1;
    transform: scaleX(${e=>e.active?"1":"0"});
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`,yo=vr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,xo=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #6366F1;
  }
`,bo=vr(Ee)`
  background-color: #6366F1;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4F46E5;
  }
`,wo=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,ko=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 101;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translateX(${e=>e.isOpen?"0":"100%"});
  transition: transform 0.3s ease;
`,jo=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,So=vr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Co=vr(Ee)`
  font-size: 1.25rem;
  font-weight: 500;
  color: #111827;
  padding: 0.5rem 0;
`,Eo=vr.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zo=()=>{const[e,n]=(0,t.useState)(!1),r=X(),o=()=>{n(!e)},a=()=>{n(!1)};return(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsxs)(fo,{children:[(0,uo.jsxs)(po,{to:"/",children:[(0,uo.jsx)(ho,{}),(0,uo.jsx)(mo,{children:"Zero Code"})]}),(0,uo.jsxs)(go,{children:[(0,uo.jsx)(vo,{to:"/problem",active:"/problem"===r.pathname?1:0,children:"Problem"}),(0,uo.jsx)(vo,{to:"/solution",active:"/solution"===r.pathname?1:0,children:"Solution"}),(0,uo.jsx)(vo,{to:"/features",active:"/features"===r.pathname?1:0,children:"Features"}),(0,uo.jsx)(vo,{to:"/mcp-tools",active:"/mcp-tools"===r.pathname?1:0,children:"MCP Tools"}),(0,uo.jsx)(vo,{to:"/how-it-works",active:"/how-it-works"===r.pathname?1:0,children:"How It Works"}),(0,uo.jsx)(vo,{to:"/download",active:"/download"===r.pathname?1:0,children:"Download"}),(0,uo.jsx)(vo,{to:"/chat",active:"/chat"===r.pathname?1:0,children:"AI Chat"}),(0,uo.jsx)(vo,{to:"/contact",active:"/contact"===r.pathname?1:0,children:"Contact"})]}),(0,uo.jsxs)(yo,{children:[(0,uo.jsx)(xo,{"aria-label":"Search",children:(0,uo.jsx)(Xr,{})}),(0,uo.jsx)(bo,{to:"/join-waitlist",children:"Join Waitlist"}),(0,uo.jsx)(wo,{onClick:o,"aria-label":"Menu",children:(0,uo.jsx)(_r,{})})]})]}),(0,uo.jsxs)(ko,{isOpen:e,children:[(0,uo.jsxs)(jo,{children:[(0,uo.jsxs)(po,{to:"/",onClick:a,children:[(0,uo.jsx)(ho,{}),(0,uo.jsx)(mo,{children:"Zero Code"})]}),(0,uo.jsx)(wo,{onClick:o,"aria-label":"Close menu",children:(0,uo.jsx)(ro,{})})]}),(0,uo.jsxs)(So,{children:[(0,uo.jsx)(Co,{to:"/problem",onClick:a,children:"Problem"}),(0,uo.jsx)(Co,{to:"/solution",onClick:a,children:"Solution"}),(0,uo.jsx)(Co,{to:"/features",onClick:a,children:"Features"}),(0,uo.jsx)(Co,{to:"/mcp-tools",onClick:a,children:"MCP Tools"}),(0,uo.jsx)(Co,{to:"/how-it-works",onClick:a,children:"How It Works"}),(0,uo.jsx)(Co,{to:"/download",onClick:a,children:"Download"}),(0,uo.jsx)(Co,{to:"/chat",onClick:a,children:"AI Chat"}),(0,uo.jsx)(Co,{to:"/contact",onClick:a,children:"Contact"})]}),(0,uo.jsx)(Eo,{children:(0,uo.jsx)(bo,{to:"/join-waitlist",onClick:a,style:{width:"100%",textAlign:"center"},children:"Join Waitlist"})})]})]})},_o=vr.div`
  background: ${e=>e.gradient?"linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%)":"white"};
  padding: 6rem 2rem;
  text-align: center;
`,Po=vr.div`
  max-width: 900px;
  margin: 0 auto;
`,Fo=vr.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`,To=vr.p`
  font-size: 1.25rem;
  color: #6B7280;
  margin-bottom: 2rem;
  line-height: 1.5;
`,Do=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,No=e=>{let{title:t,subtitle:n,children:r,gradient:o=!1}=e;return(0,uo.jsx)(_o,{gradient:o,children:(0,uo.jsxs)(Po,{children:[(0,uo.jsx)(Fo,{children:t}),n&&(0,uo.jsx)(To,{children:n}),r&&(0,uo.jsx)(Do,{children:r})]})})},Oo=vr.section`
  padding: 4rem 2rem;
  background-color: ${e=>e.bgColor||"white"};
`,Ro=vr.div`
  max-width: 1200px;
  margin: 0 auto;
`,Io=vr.div`
  text-align: center;
  margin-bottom: 3rem;
`,Lo=vr.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`,Mo=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
`,Bo=e=>{let{title:t,subtitle:n,children:r,bgColor:o,id:a}=e;return(0,uo.jsx)(Oo,{bgColor:o,id:a,children:(0,uo.jsxs)(Ro,{children:[(t||n)&&(0,uo.jsxs)(Io,{children:[t&&(0,uo.jsx)(Lo,{children:t}),n&&(0,uo.jsx)(Mo,{children:n})]}),r]})})},Ao=vr.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.align||"flex-start"};
  text-align: ${e=>"center"===e.align?"center":"left"};
  height: 100%;
`,Uo=vr.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${e=>e.bgColor||"#E0E7FF"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: ${e=>e.iconColor||"#6366F1"};
`,Wo=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
`,Ho=vr.p`
  font-size: 1rem;
  color: #6B7280;
  line-height: 1.5;
`,$o=vr.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: none;
`,Vo=vr.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:before {
    content: '✓';
    color: #10B981;
    margin-right: 0.5rem;
    margin-left: -1.5rem;
  }
`,Ko=e=>{let{icon:t,title:n,description:r,features:o,align:a="flex-start",iconBgColor:i,iconColor:l}=e;return(0,uo.jsxs)(Ao,{align:a,children:[t&&(0,uo.jsx)(Uo,{bgColor:i,iconColor:l,children:t}),(0,uo.jsx)(Wo,{children:n}),(0,uo.jsx)(Ho,{children:r}),o&&o.length>0&&(0,uo.jsx)($o,{children:o.map(((e,t)=>(0,uo.jsx)(Vo,{children:e},t)))})]})},qo=hr`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>"large"===e.size?"0.75rem 1.5rem":"0.5rem 1rem"};
  font-weight: 500;
  font-size: ${e=>"large"===e.size?"1rem":"0.875rem"};
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;

  ${e=>e.fullWidth&&hr`
    width: 100%;
  `}

  ${e=>{switch(e.variant){case"primary":default:return hr`
          background-color: #6366F1;
          color: white;
          &:hover {
            background-color: #4F46E5;
          }
        `;case"secondary":return hr`
          background-color: #F3F4F6;
          color: #111827;
          &:hover {
            background-color: #E5E7EB;
          }
        `;case"outline":return hr`
          background-color: transparent;
          border: 1px solid #6366F1;
          color: #6366F1;
          &:hover {
            background-color: #EEF2FF;
          }
        `;case"ghost":return hr`
          background-color: transparent;
          color: #6366F1;
          &:hover {
            background-color: #EEF2FF;
          }
        `}}}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Qo=vr.button`
  ${qo}
`,Zo=vr(Ee)`
  ${qo}
`,Yo=e=>{let{children:t,variant:n="primary",size:r="medium",fullWidth:o=!1,to:a,onClick:i,disabled:l=!1,type:s="button",...c}=e;return a?(0,uo.jsx)(Zo,{to:a,variant:n,size:r,fullWidth:o,...c,children:t}):(0,uo.jsx)(Qo,{variant:n,size:r,fullWidth:o,onClick:i,disabled:l,type:s,...c,children:t})},Go=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Xo=vr.div`
  text-align: center;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  padding: 4rem 2rem;
`,Jo=vr.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`,ea=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
`,ta=vr.div`
  text-align: center;
  padding: 4rem 2rem;
`,na=vr.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #F9FAFB;
  border-radius: 8px;
  padding: 2rem;
`,ra=vr.p`
  color: #9CA3AF;
  margin-bottom: 1.5rem;
`,oa=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,aa=()=>(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsxs)(No,{title:"Coding is powerful. But for most, it's inaccessible. For developers, it's slow and repetitive.",subtitle:"We're here to change that.",gradient:!0,children:[(0,uo.jsxs)(Yo,{to:"/download",variant:"primary",size:"large",children:[(0,uo.jsx)(Mr,{style:{marginRight:"0.5rem"}})," Download Now"]}),(0,uo.jsx)(Yo,{to:"/features",variant:"outline",size:"large",children:"View Features"})]}),(0,uo.jsx)(Bo,{children:(0,uo.jsxs)(Go,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Ar,{}),title:"For Non-Technical Users",description:"Technical barriers prevent turning ideas into reality. Learning to code takes months or years, and hiring developers is expensive and time-consuming.",iconBgColor:"#FECACA",iconColor:"#EF4444"}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Or,{}),title:"For Developers",description:"Hours lost to boilerplate code, environment setup, dependency fixes, and debugging trivial issues. The development experience is full of avoidable friction.",iconBgColor:"#FEF3C7",iconColor:"#F59E0B"})]})}),(0,uo.jsx)(Bo,{title:"Meet Codeflow",subtitle:"The AI-powered coding companion that's changing how we build software",children:(0,uo.jsxs)(Go,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(io,{}),title:"For Non-Tech Users",description:"Describe what you want, and Codeflow builds it. No coding knowledge required.",features:["Use natural language to describe features","Watch your app appear in real-time","Deploy with one click"],align:"center"}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Rr,{}),title:"For Tech Users",description:"Codeflow becomes your smartest coding partner inside your favorite IDE.",features:["Generates complex logic based on comments","Automates environment setup and debugging","Integrates with Git, CI/CD and cloud platforms"],align:"center"})]})}),(0,uo.jsx)(ta,{children:(0,uo.jsx)(Bo,{title:"What Our Users Say",subtitle:"Coming soon from our Beta testers!",children:(0,uo.jsxs)(na,{children:[(0,uo.jsx)(ra,{children:"We're currently collecting feedback from our early beta testers. Check back soon to hear their success stories!"}),(0,uo.jsxs)(oa,{children:[(0,uo.jsx)(Yo,{to:"/join-waitlist",variant:"primary",children:"Join the waitlist"}),(0,uo.jsx)(Yo,{to:"#",variant:"secondary",children:"Be one of our first testers"}),(0,uo.jsx)(Yo,{to:"#",variant:"secondary",children:"Share your feedback"})]})]})})}),(0,uo.jsx)(Bo,{title:"Try Our AI Chat",subtitle:"Experience the power of Zero Code's AI assistant",children:(0,uo.jsxs)("div",{style:{textAlign:"center",padding:"3rem 0",background:"linear-gradient(120deg, #EEF2FF 0%, #E0E7FF 100%)",borderRadius:"8px",marginBottom:"2rem"},children:[(0,uo.jsx)("h3",{style:{fontSize:"1.5rem",fontWeight:"600",marginBottom:"1rem"},children:"Build apps in minutes with our AI assistant"}),(0,uo.jsx)("p",{style:{maxWidth:"600px",margin:"0 auto 2rem",color:"#4B5563"},children:"Our AI chat interface helps you create applications without writing code. Just describe what you want to build, and our AI will help you make it a reality using our MCP servers."}),(0,uo.jsx)(Yo,{to:"/chat",variant:"primary",size:"large",children:"Try AI Chat Now"})]})}),(0,uo.jsx)(Bo,{children:(0,uo.jsxs)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[(0,uo.jsx)("h2",{style:{fontSize:"2rem",fontWeight:"700",marginBottom:"1rem"},children:"Download Zero Code Today"}),(0,uo.jsx)("p",{style:{color:"#6B7280",maxWidth:"700px",margin:"0 auto 2rem"},children:"Get our powerful desktop application for your platform and start building without code"}),(0,uo.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap"},children:[(0,uo.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem",borderRadius:"12px",backgroundColor:"white",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.05)",width:"220px"},children:[(0,uo.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#0078D7",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.75rem",marginBottom:"1rem"},children:(0,uo.jsx)(Er,{})}),(0,uo.jsx)("h3",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Windows"}),(0,uo.jsx)("p",{style:{color:"#6B7280",fontSize:"0.875rem",marginBottom:"1.5rem",textAlign:"center"},children:"For Windows 10/11"}),(0,uo.jsx)(Yo,{to:"/download",variant:"primary",children:"Download"})]}),(0,uo.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem",borderRadius:"12px",backgroundColor:"white",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.05)",width:"220px"},children:[(0,uo.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#000000",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.75rem",marginBottom:"1rem"},children:(0,uo.jsx)(Cr,{})}),(0,uo.jsx)("h3",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"macOS"}),(0,uo.jsx)("p",{style:{color:"#6B7280",fontSize:"0.875rem",marginBottom:"1.5rem",textAlign:"center"},children:"For macOS 11.0+"}),(0,uo.jsx)(Yo,{to:"/download",variant:"primary",children:"Download"})]})]})]})}),(0,uo.jsxs)(Xo,{children:[(0,uo.jsx)(Jo,{children:"Ready to transform how you build software?"}),(0,uo.jsx)(ea,{children:"Join the beta waitlist and be among the first to experience Zero Code's advanced features."}),(0,uo.jsx)(Yo,{to:"/join-waitlist",variant:"primary",size:"large",children:"Join the Beta \u2192"}),(0,uo.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"2rem",marginTop:"2rem",flexWrap:"wrap"},children:[(0,uo.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#374151"},children:[(0,uo.jsx)("span",{style:{color:"#10B981"},children:"\u2713"})," No credit card required"]}),(0,uo.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#374151"},children:[(0,uo.jsx)("span",{style:{color:"#10B981"},children:"\u2713"})," Limited beta spots available"]}),(0,uo.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#374151"},children:[(0,uo.jsx)("span",{style:{color:"#10B981"},children:"\u2713"})," Cancel anytime"]})]})]})]}),ia=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,la=vr.div`
  text-align: center;
  margin-top: 4rem;
`,sa=()=>(0,uo.jsx)(uo.Fragment,{children:(0,uo.jsxs)(Bo,{title:"The Problem",subtitle:"Even in 2025, building software remains challenging for most people",children:[(0,uo.jsxs)(ia,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Ar,{}),title:"For Non-Technical Users",description:"Technical barriers prevent turning ideas into reality. Learning to code takes months or years, and hiring developers is expensive and time-consuming.",iconBgColor:"#FECACA",iconColor:"#EF4444",features:["High barrier to entry for non-programmers","Long learning curve for basic proficiency","Expensive to hire specialized talent","Ideas often never make it to implementation","No-code tools often lack customization"]}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Or,{}),title:"For Developers",description:"Hours lost to boilerplate code, environment setup, dependency fixes, and debugging trivial issues. The development experience is full of avoidable friction.",iconBgColor:"#FEF3C7",iconColor:"#F59E0B",features:["Time wasted on repetitive tasks","Environment configuration challenges","Dependency hell and versioning issues","Context switching between tools","Difficult onboarding to new codebases"]})]}),(0,uo.jsx)(la,{children:(0,uo.jsx)(Yo,{to:"/solution",variant:"primary",size:"large",children:"Discover Our Solution"})})]})}),ca=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,ua=vr.div`
  margin-top: 4rem;
`,da=vr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`,fa=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`,pa=vr.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #F9FAFB;
  }
`,ha=vr.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #EEF2FF;
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ma=vr.div``,ga=vr.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,va=vr.p`
  font-size: 0.875rem;
  color: #6B7280;
`,ya=vr.div`
  text-align: center;
  margin-top: 4rem;
`,xa=()=>(0,uo.jsx)(uo.Fragment,{children:(0,uo.jsxs)(Bo,{title:"Our Solution: Codeflow",subtitle:"The AI-powered coding companion that's changing how we build software",children:[(0,uo.jsxs)(ca,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(io,{}),title:"For Non-Tech Users",description:"Describe what you want, and Codeflow builds it. No coding knowledge required.",features:["Use natural language to describe features","Watch your app appear in real-time","Deploy with one click"],align:"center"}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Rr,{}),title:"For Tech Users",description:"Codeflow becomes your smartest coding partner inside your favorite IDE.",features:["Generates complex logic based on comments","Automates environment setup and debugging","Integrates with Git, CI/CD and cloud platforms"],align:"center"})]}),(0,uo.jsxs)(ua,{children:[(0,uo.jsx)(da,{children:"Key Benefits"}),(0,uo.jsxs)(fa,{children:[(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"10x Faster Development"}),(0,uo.jsx)(va,{children:"Complete projects in hours instead of days or weeks."})]})]}),(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"No Technical Barriers"}),(0,uo.jsx)(va,{children:"Anyone can build software regardless of technical background."})]})]}),(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"Reduced Costs"}),(0,uo.jsx)(va,{children:"Lower development costs and faster time-to-market."})]})]}),(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"Always Up-to-Date"}),(0,uo.jsx)(va,{children:"Codeflow stays current with the latest frameworks and best practices."})]})]}),(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"Smart Error Prevention"}),(0,uo.jsx)(va,{children:"Proactively identifies and corrects potential issues before they occur."})]})]}),(0,uo.jsxs)(pa,{children:[(0,uo.jsx)(ha,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)(ma,{children:[(0,uo.jsx)(ga,{children:"Continuous Learning"}),(0,uo.jsx)(va,{children:"Improves with each interaction, adapting to your patterns and preferences."})]})]})]})]}),(0,uo.jsx)(ya,{children:(0,uo.jsx)(Yo,{to:"/features",variant:"primary",size:"large",children:"Explore Features"})})]})}),ba=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,wa=vr.div`
  text-align: center;
  margin-top: 4rem;
`,ka=()=>(0,uo.jsx)(uo.Fragment,{children:(0,uo.jsxs)(Bo,{title:"Key Features",subtitle:"Advanced capabilities that make Codeflow powerful for everyone",children:[(0,uo.jsxs)(ba,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Rr,{}),title:"Natural Language to Code",description:"Describe what you need in plain English and watch as Codeflow generates the right code instantly."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Pr,{}),title:"Auto-fix Blockers",description:"Codeflow automatically identifies and fixes errors, dependencies, and environment issues without slowing you down."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(lo,{}),title:"Multi-agent Task Handling",description:"Complex tasks are broken down and handled by specialized AI agents working together to solve your problems."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Tr,{}),title:"Smart Project Understanding",description:"Codeflow learns your codebase and can make contextually aware suggestions that align with your project structure and patterns."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Fr,{}),title:"Easy Package Management",description:"Automatically find, install, and configure the perfect packages for your project needs."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(eo,{}),title:"Continuous Improvement",description:"Codeflow learns from feedback to constantly improve its code generation and problem-solving capabilities."})]}),(0,uo.jsx)(wa,{children:(0,uo.jsx)(Yo,{to:"/how-it-works",variant:"primary",size:"large",children:"See How It Works"})})]})}),ja=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Sa=vr.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-top: 3rem;
`,Ca=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ea=vr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,za=vr.div`
  position: relative;
`,_a=vr.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4B5563;
`,Pa=vr.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  background-color: #F9FAFB;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
`,Fa=vr.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  background-color: #F9FAFB;
  font-size: 1rem;
`,Ta=vr(Yo)`
  width: 100%;
  margin-top: 1rem;
`,Da=vr.div`
  background-color: #1F2937;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1.5rem;
  font-family: monospace;
  color: #D1D5DB;
`,Na=vr.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`,Oa=vr.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,Ra=vr.div`
  font-size: 0.875rem;
  line-height: 1.5;
`,Ia=()=>{const[e,n]=(0,t.useState)("Terminal"),[r,o]=(0,t.useState)("1"),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1);return(0,uo.jsx)(uo.Fragment,{children:(0,uo.jsxs)(Bo,{title:"Powerful Filesystem Tools",subtitle:"Install and manage multiple MCP tools with a single click",children:[(0,uo.jsxs)(ja,{children:[(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Wr,{}),title:"Directory Management",description:"Create nested directory structures with a single command. Automatically organize your project files."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Ur,{}),title:"File Structure Visualization",description:"Get a clear JSON view of your entire project structure. Understand complex codebases at a glance."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Qr,{}),title:"Smart File Editing",description:"Make precise line-by-line edits with git-style diff tracking. Perfect for automated refactoring."}),(0,uo.jsx)(Ko,{icon:(0,uo.jsx)(Hr,{}),title:"File Metadata Analysis",description:"Access comprehensive file information without reading content. Optimize your workflow with file insights."})]}),(0,uo.jsxs)(Sa,{children:[(0,uo.jsxs)(Ca,{children:[(0,uo.jsx)(oo,{style:{color:"#6366F1"}}),"Install MCP Tools"]}),(0,uo.jsx)("p",{style:{marginBottom:"1.5rem",color:"#6B7280"},children:"Configure and deploy multiple MCP tools with a single click"}),(0,uo.jsxs)(Ea,{children:[(0,uo.jsxs)("div",{children:[(0,uo.jsx)(_a,{htmlFor:"tool-type",children:"Tool Type"}),(0,uo.jsx)(za,{children:(0,uo.jsxs)(Pa,{id:"tool-type",value:e,onChange:e=>n(e.target.value),children:[(0,uo.jsx)("option",{value:"Terminal",children:"Terminal"}),(0,uo.jsx)("option",{value:"FileManager",children:"File Manager"}),(0,uo.jsx)("option",{value:"CodeEditor",children:"Code Editor"})]})})]}),(0,uo.jsxs)("div",{children:[(0,uo.jsx)(_a,{htmlFor:"instances",children:"Number of Instances"}),(0,uo.jsx)(Fa,{id:"instances",type:"number",min:"1",max:"10",value:r,onChange:e=>o(e.target.value)})]})]}),(0,uo.jsx)(Ta,{variant:"primary",onClick:()=>{i(!0),setTimeout((()=>{i(!1),s(!0)}),2e3)},disabled:a||l,children:a?"Installing...":l?"MCP Tools Installed":"Install MCP Tools"}),l&&(0,uo.jsxs)(Da,{children:[(0,uo.jsxs)(Na,{children:[(0,uo.jsx)(Oa,{color:"#EF4444"}),(0,uo.jsx)(Oa,{color:"#F59E0B"}),(0,uo.jsx)(Oa,{color:"#10B981"}),(0,uo.jsx)("span",{style:{marginLeft:"0.5rem"},children:"Terminal"})]}),(0,uo.jsx)(Ra,{children:"Ready to install MCP tools..."})]})]})]})})},La=vr.div`
  max-width: 1000px;
  margin: 0 auto;
`,Ma=vr.div`
  display: flex;
  margin-bottom: 4rem;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: ${e=>e.reverse?"column-reverse":"column"};
    gap: 2rem;
  }
`,Ba=vr.div`
  flex: 1;
`,Aa=vr.div`
  font-size: 4rem;
  font-weight: 700;
  color: #818CF8;
  margin-bottom: 1rem;
`,Ua=vr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`,Wa=vr.p`
  font-size: 1rem;
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,Ha=vr.div`
  flex: 1;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`,$a=vr.div`
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  font-weight: 500;
`,Va=vr.div`
  text-align: center;
  margin-top: 2rem;
`,Ka=()=>(0,uo.jsxs)(Bo,{title:"How It Works",subtitle:"A simple three-step process to bring your ideas to life",children:[(0,uo.jsxs)(La,{children:[(0,uo.jsxs)(Ma,{children:[(0,uo.jsxs)(Ba,{children:[(0,uo.jsx)(Aa,{children:"01"}),(0,uo.jsx)(Ua,{children:"Tell Codeflow what you want to build"}),(0,uo.jsx)(Wa,{children:"Using natural language, describe your project, features, or the problem you're trying to solve. No technical jargon required."})]}),(0,uo.jsx)(Ha,{children:(0,uo.jsx)($a,{children:"Step 1 visualization"})})]}),(0,uo.jsxs)(Ma,{reverse:!0,children:[(0,uo.jsx)(Ha,{children:(0,uo.jsx)($a,{children:"Step 2 visualization"})}),(0,uo.jsxs)(Ba,{children:[(0,uo.jsx)(Aa,{children:"02"}),(0,uo.jsx)(Ua,{children:"Watch AI generate your project"}),(0,uo.jsx)(Wa,{children:"Codeflow breaks down your request, plans the architecture, and generates all necessary code, handling dependencies and integrations automatically."})]})]}),(0,uo.jsxs)(Ma,{children:[(0,uo.jsxs)(Ba,{children:[(0,uo.jsx)(Aa,{children:"03"}),(0,uo.jsx)(Ua,{children:"Customize, Debug, Deploy"}),(0,uo.jsx)(Wa,{children:"Fine-tune your application with additional instructions, test it in real-time, and deploy with a single click to your preferred platform."})]}),(0,uo.jsx)(Ha,{children:(0,uo.jsx)($a,{children:"Step 3 visualization"})})]})]}),(0,uo.jsx)(Va,{children:(0,uo.jsx)(Yo,{to:"/join-waitlist",variant:"primary",size:"large",children:"Join the Beta"})})]}),qa=vr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
`,Qa=vr.div`
  font-size: 4rem;
  color: #EF4444;
  margin-bottom: 2rem;
`,Za=vr.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`,Ya=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 600px;
`,Ga=vr.ul`
  text-align: left;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`,Xa=vr.li`
  margin-bottom: 0.5rem;
  color: #4B5563;
`,Ja=vr.div`
  font-family: monospace;
  padding: 0.5rem 1rem;
  background-color: #F3F4F6;
  border-radius: 4px;
  color: #4B5563;
  margin-bottom: 2rem;
`,ei=vr.div`
  display: flex;
  gap: 1rem;
`,ti=()=>(0,uo.jsxs)(qa,{children:[(0,uo.jsx)(Qa,{children:(0,uo.jsx)(Ar,{})}),(0,uo.jsx)(Za,{children:"This site can't be reached"}),(0,uo.jsx)(Ya,{children:"localhost refused to connect."}),(0,uo.jsxs)(Ga,{children:[(0,uo.jsx)(Xa,{children:"Checking the connection"}),(0,uo.jsx)(Xa,{children:"Checking the proxy and the firewall"})]}),(0,uo.jsx)(Ja,{children:"ERR_CONNECTION_REFUSED"}),(0,uo.jsxs)(ei,{children:[(0,uo.jsx)(Yo,{variant:"secondary",children:"Details"}),(0,uo.jsx)(Yo,{variant:"primary",children:"Reload"})]})]}),ni=vr.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,ri=vr.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  text-align: center;
`,oi=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  text-align: center;
`,ai=vr.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`,ii=vr.div`
  margin-bottom: 1.5rem;
`,li=vr.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4B5563;
`,si=vr.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  ${e=>e.error&&"\n    border-color: #EF4444;\n    \n    &:focus {\n      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n    }\n  "}
`,ci=vr.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,ui=vr.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,di=vr.div`
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,fi=vr(Yo)`
  width: 100%;
  margin-top: 1rem;
`,pi=vr.div`
  background-color: #ECFDF5;
  color: #065F46;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
`,hi=vr.span`
  background-color: #10B981;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  flex-shrink: 0;
`,mi=vr.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,gi=vr.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,vi=vr.span`
  color: #4B5563;
`,yi=()=>{const[e,n]=(0,t.useState)({name:"",email:"",role:"",interests:""}),[r,o]=(0,t.useState)({}),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1),c=e=>{const{name:t,value:a}=e.target;n((e=>({...e,[t]:a}))),r[t]&&o((e=>({...e,[t]:""})))};return(0,uo.jsxs)(ni,{children:[(0,uo.jsx)(ri,{children:"Join the Zero Code Waitlist"}),(0,uo.jsx)(oi,{children:"Be among the first to experience our AI-powered coding revolution"}),a?(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsxs)(pi,{children:[(0,uo.jsx)(hi,{children:(0,uo.jsx)(Nr,{size:12})}),(0,uo.jsxs)("div",{children:[(0,uo.jsx)("p",{children:(0,uo.jsx)("strong",{children:"Thank you for joining our waitlist!"})}),(0,uo.jsx)("p",{children:"We'll notify you when we're ready to welcome you to the beta."})]})]}),(0,uo.jsx)("div",{style:{textAlign:"center",marginTop:"2rem"},children:(0,uo.jsx)(Yo,{to:"/",variant:"secondary",children:"Return to Home"})})]}):(0,uo.jsxs)(ai,{onSubmit:t=>{t.preventDefault(),(()=>{const t={};return e.name.trim()||(t.name="Name is required"),e.email.trim()?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.role||(t.role="Please select your role"),o(t),0===Object.keys(t).length})()&&(s(!0),setTimeout((()=>{s(!1),i(!0)}),1500))},children:[(0,uo.jsxs)(ii,{children:[(0,uo.jsx)(li,{htmlFor:"name",children:"Full Name"}),(0,uo.jsx)(si,{id:"name",name:"name",type:"text",value:e.name,onChange:c,error:r.name,placeholder:"Your name"}),r.name&&(0,uo.jsx)(di,{children:r.name})]}),(0,uo.jsxs)(ii,{children:[(0,uo.jsx)(li,{htmlFor:"email",children:"Email"}),(0,uo.jsx)(si,{id:"email",name:"email",type:"email",value:e.email,onChange:c,error:r.email,placeholder:"you@example.com"}),r.email&&(0,uo.jsx)(di,{children:r.email})]}),(0,uo.jsxs)(ii,{children:[(0,uo.jsx)(li,{htmlFor:"role",children:"Your Role"}),(0,uo.jsxs)(ui,{id:"role",name:"role",value:e.role,onChange:c,error:r.role,children:[(0,uo.jsx)("option",{value:"",children:"Select your role"}),(0,uo.jsx)("option",{value:"developer",children:"Developer"}),(0,uo.jsx)("option",{value:"designer",children:"Designer"}),(0,uo.jsx)("option",{value:"product_manager",children:"Product Manager"}),(0,uo.jsx)("option",{value:"entrepreneur",children:"Entrepreneur"}),(0,uo.jsx)("option",{value:"student",children:"Student"}),(0,uo.jsx)("option",{value:"other",children:"Other"})]}),r.role&&(0,uo.jsx)(di,{children:r.role})]}),(0,uo.jsxs)(ii,{children:[(0,uo.jsx)(li,{htmlFor:"interests",children:"What are you most interested in building with Zero Code?"}),(0,uo.jsx)(ci,{id:"interests",name:"interests",value:e.interests,onChange:c,placeholder:"Tell us about your use case..."})]}),(0,uo.jsx)(fi,{type:"submit",variant:"primary",disabled:l,children:l?"Submitting...":"Join Waitlist"}),(0,uo.jsxs)(mi,{children:[(0,uo.jsxs)(gi,{children:[(0,uo.jsx)(Nr,{style:{color:"#10B981"}}),(0,uo.jsx)(vi,{children:"No credit card required"})]}),(0,uo.jsxs)(gi,{children:[(0,uo.jsx)(Nr,{style:{color:"#10B981"}}),(0,uo.jsx)(vi,{children:"Limited beta spots available"})]}),(0,uo.jsxs)(gi,{children:[(0,uo.jsx)(Nr,{style:{color:"#10B981"}}),(0,uo.jsx)(vi,{children:"Cancel anytime"})]})]})]})]})},xi=vr.div`
  position: fixed;
  top: ${e=>"top"===e.position?"1rem":"auto"};
  bottom: ${e=>"bottom"===e.position?"1rem":"auto"};
  left: 50%;
  transform: translateX(-50%);
  background-color: ${e=>{switch(e.type){case"error":return"#FEE2E2";case"warning":return"#FEF3C7";case"success":return"#D1FAE5";default:return"#E0F2FE"}}};
  color: ${e=>{switch(e.type){case"error":return"#B91C1C";case"warning":return"#92400E";case"success":return"#065F46";default:return"#0C4A6E"}}};
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 90%;
  width: 400px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  opacity: ${e=>e.isVisible?"1":"0"};
  transform: ${e=>e.isVisible?"translateX(-50%)":"translateX(-50%) translateY(-1rem)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: ${e=>e.isVisible?"all":"none"};
`,bi=vr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,wi=vr.div`
  flex: 1;
`,ki=vr.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,ji=vr.div`
  font-size: 0.875rem;
`,Si=vr.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  &:hover {
    opacity: 1;
  }
`,Ci=e=>{let{type:n="error",title:r,message:o,position:a="top",duration:i=5e3,isVisible:l=!1,onClose:s}=e;const[c,u]=(0,t.useState)(l);(0,t.useEffect)((()=>{if(u(l),l&&i>0){const e=setTimeout((()=>{u(!1),s&&s()}),i);return()=>clearTimeout(e)}}),[l,i,s]);return(0,uo.jsxs)(xi,{type:n,position:a,isVisible:c,children:[(0,uo.jsx)(bi,{children:(0,uo.jsx)(Ar,{})}),(0,uo.jsxs)(wi,{children:[r&&(0,uo.jsx)(ki,{children:r}),o&&(0,uo.jsx)(ji,{children:o})]}),(0,uo.jsx)(Si,{onClick:()=>{u(!1),s&&s()},"aria-label":"Close alert",children:(0,uo.jsx)(ro,{})})]})},Ei=vr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${e=>e.isOpen?"flex":"none"};
  justify-content: flex-end;
`,zi=vr.div`
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  overflow-y: auto;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`,_i=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #E5E7EB;
`,Pi=vr.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`,Fi=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  font-size: 1.25rem;
  
  &:hover {
    color: #111827;
  }
`,Ti=vr.div`
  padding: 1.5rem;
`,Di=vr.div`
  margin-bottom: 2rem;
`,Ni=vr.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Oi=vr.div`
  margin-bottom: 1.25rem;
`,Ri=vr.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4B5563;
  margin-bottom: 0.5rem;
`,Ii=vr.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  background-color: white;
  font-size: 0.875rem;
  color: #111827;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,Li=vr.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`,Mi=vr.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #6366F1;
  }
  
  &:checked + span:before {
    transform: translateX(24px);
  }
  
  &:focus + span {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,Bi=vr.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D1D5DB;
  transition: 0.4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`,Ai=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ui=vr.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4B5563;
`,Wi=e=>{let{isOpen:t,onClose:n}=e;return(0,uo.jsx)(Ei,{isOpen:t,children:(0,uo.jsxs)(zi,{children:[(0,uo.jsxs)(_i,{children:[(0,uo.jsx)(Pi,{children:"AI Chat Settings"}),(0,uo.jsx)(Fi,{onClick:n,children:(0,uo.jsx)(ro,{})})]}),(0,uo.jsxs)(Ti,{children:[(0,uo.jsxs)(Di,{children:[(0,uo.jsxs)(Ni,{children:[(0,uo.jsx)(ao,{}),"User Preferences"]}),(0,uo.jsxs)(Oi,{children:[(0,uo.jsx)(Ri,{htmlFor:"language",children:"Interface Language"}),(0,uo.jsxs)(Ii,{id:"language",children:[(0,uo.jsx)("option",{value:"en",children:"English"}),(0,uo.jsx)("option",{value:"es",children:"Spanish"}),(0,uo.jsx)("option",{value:"fr",children:"French"}),(0,uo.jsx)("option",{value:"de",children:"German"})]})]}),(0,uo.jsx)(Oi,{children:(0,uo.jsxs)(Ai,{children:[(0,uo.jsx)(Ui,{children:"Enable sound effects"}),(0,uo.jsxs)(Li,{children:[(0,uo.jsx)(Mi,{type:"checkbox",checked:!1}),(0,uo.jsx)(Bi,{})]})]})})]}),(0,uo.jsxs)(Di,{children:[(0,uo.jsxs)(Ni,{children:[(0,uo.jsx)(Jr,{}),"MCP Server Settings"]}),(0,uo.jsxs)(Oi,{children:[(0,uo.jsx)(Ri,{htmlFor:"server",children:"MCP Server Region"}),(0,uo.jsxs)(Ii,{id:"server",children:[(0,uo.jsx)("option",{value:"us-east",children:"US East (Default)"}),(0,uo.jsx)("option",{value:"us-west",children:"US West"}),(0,uo.jsx)("option",{value:"eu",children:"Europe"}),(0,uo.jsx)("option",{value:"asia",children:"Asia Pacific"})]})]}),(0,uo.jsx)(Oi,{children:(0,uo.jsxs)(Ai,{children:[(0,uo.jsx)(Ui,{children:"Auto-connect to MCP servers"}),(0,uo.jsxs)(Li,{children:[(0,uo.jsx)(Mi,{type:"checkbox",checked:!0}),(0,uo.jsx)(Bi,{})]})]})})]}),(0,uo.jsxs)(Di,{children:[(0,uo.jsxs)(Ni,{children:[(0,uo.jsx)(Lr,{}),"Display Settings"]}),(0,uo.jsxs)(Oi,{children:[(0,uo.jsx)(Ri,{htmlFor:"theme",children:"Color Theme"}),(0,uo.jsxs)(Ii,{id:"theme",children:[(0,uo.jsx)("option",{value:"light",children:"Light (Default)"}),(0,uo.jsx)("option",{value:"dark",children:"Dark"}),(0,uo.jsx)("option",{value:"system",children:"System Preference"})]})]}),(0,uo.jsxs)(Oi,{children:[(0,uo.jsx)(Ri,{htmlFor:"codeTheme",children:"Code Theme"}),(0,uo.jsxs)(Ii,{id:"codeTheme",children:[(0,uo.jsx)("option",{value:"default",children:"Default"}),(0,uo.jsx)("option",{value:"monokai",children:"Monokai"}),(0,uo.jsx)("option",{value:"github",children:"GitHub"}),(0,uo.jsx)("option",{value:"dracula",children:"Dracula"})]})]}),(0,uo.jsx)(Oi,{children:(0,uo.jsxs)(Ai,{children:[(0,uo.jsx)(Ui,{children:"Show timestamps on messages"}),(0,uo.jsxs)(Li,{children:[(0,uo.jsx)(Mi,{type:"checkbox",checked:!1}),(0,uo.jsx)(Bi,{})]})]})})]}),(0,uo.jsxs)(Di,{children:[(0,uo.jsxs)(Ni,{children:[(0,uo.jsx)(Kr,{}),"Customization"]}),(0,uo.jsxs)(Oi,{children:[(0,uo.jsx)(Ri,{htmlFor:"codeFont",children:"Code Font"}),(0,uo.jsxs)(Ii,{id:"codeFont",children:[(0,uo.jsx)("option",{value:"monospace",children:"Monospace (Default)"}),(0,uo.jsx)("option",{value:"fira",children:"Fira Code"}),(0,uo.jsx)("option",{value:"source",children:"Source Code Pro"}),(0,uo.jsx)("option",{value:"consolas",children:"Consolas"})]})]}),(0,uo.jsx)(Oi,{children:(0,uo.jsxs)(Ai,{children:[(0,uo.jsx)(Ui,{children:"Compact message view"}),(0,uo.jsxs)(Li,{children:[(0,uo.jsx)(Mi,{type:"checkbox",checked:!1}),(0,uo.jsx)(Bi,{})]})]})})]})]})]})})},Hi=vr.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
  background-color: #F9FAFB;
`,$i=vr.div`
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Vi=vr.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`,Ki=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #111827;
  }
`,qi=vr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.isConnected?"#10B981":"#EF4444"};
  font-size: 0.875rem;
`,Qi=vr.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.isConnected?"#10B981":"#EF4444"};
  animation: ${e=>e.isConnected?"none":"pulse 2s infinite"};
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`,Zi=vr.div`
  flex: 1;
  padding: 1rem 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Yi=vr.div`
  display: flex;
  gap: 1rem;
  max-width: 80%;
  
  ${e=>e.isUser?"\n    align-self: flex-end;\n    flex-direction: row-reverse;\n  ":"\n    align-self: flex-start;\n  "}
`,Gi=vr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.isUser?"#6366F1":"#10B981"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,Xi=vr.div`
  background-color: ${e=>e.isUser?"#EEF2FF":"white"};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  
  pre {
    background-color: #F3F4F6;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    position: relative;
    margin: 1rem 0;
  }
  
  code {
    font-family: monospace;
    font-size: 0.875rem;
  }
`,Ji=vr.div`
  position: relative;
  margin: 1rem 0;
`,el=vr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E5E7EB;
  padding: 0.5rem 1rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  font-size: 0.75rem;
  color: #4B5563;
`,tl=vr.span`
  font-weight: 500;
`,nl=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  
  &:hover {
    color: #111827;
  }
`,rl=vr.pre`
  background-color: #F3F4F6;
  padding: 1rem;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  overflow-x: auto;
  margin: 0;
  
  code {
    font-family: monospace;
    font-size: 0.875rem;
  }
`,ol=vr.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,al=vr.button`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  
  &:hover {
    color: ${e=>e.isPositive?"#10B981":"#EF4444"};
  }
  
  ${e=>e.isActive&&e.isPositive&&"\n    color: #10B981;\n  "}
  
  ${e=>e.isActive&&!e.isPositive&&"\n    color: #EF4444;\n  "}
`,il=vr.div`
  padding: 1rem 2rem;
  background-color: white;
  border-top: 1px solid #E5E7EB;
`,ll=vr.form`
  display: flex;
  gap: 0.5rem;
  position: relative;
`,sl=vr.textarea`
  flex: 1;
  padding: 0.75rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  resize: none;
  font-family: inherit;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,cl=vr.button`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  background-color: #6366F1;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #4F46E5;
  }
  
  &:disabled {
    background-color: #A5B4FC;
    cursor: not-allowed;
  }
`,ul=vr.div`
  text-align: center;
  color: #6B7280;
  font-size: 0.875rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
`,dl=()=>{const[e,n]=(0,t.useState)([{id:1,content:"Hello! I'm your AI coding companion. How can I help you build your application today?",isUser:!1,timestamp:new Date}]),[r,o]=(0,t.useState)(""),[a,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)({}),[c,u]=(0,t.useState)(null),[d,f]=(0,t.useState)({isVisible:!1,title:"",message:"",type:"error"}),[p,h]=(0,t.useState)({isConnected:!0,message:"MCP Servers Connected"}),[m,g]=(0,t.useState)(!1),v=(0,t.useRef)(null),y=(0,t.useRef)(null);(0,t.useEffect)((()=>{var e;null===(e=v.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[e]);const x=function(e,t){f({isVisible:!0,title:e,message:t,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error"})},b=()=>{g(!m)},w=(e,t)=>{s((n=>({...n,[e]:t})))},k=e=>{if(!e.includes("<code"))return(0,uo.jsx)("p",{children:e});const t=e.split(/(<code.*?>|<\/code>)/g);return t.map(((e,n)=>{if(e.startsWith("<code")){const r=e.match(/language="([^"]*)"/),o=r?r[1]:"plaintext",a=t[n+1];return(0,uo.jsxs)(Ji,{children:[(0,uo.jsxs)(el,{children:[(0,uo.jsx)(tl,{children:o}),(0,uo.jsx)(nl,{onClick:()=>{return e=a,navigator.clipboard.writeText(e),u(e),void setTimeout((()=>{u&&e===c&&u(null)}),2e3);var e},title:"Copy code",children:c===a?(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsx)(Nr,{size:12}),"Copied!"]}):(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsx)(co,{size:12}),"Copy"]})})]}),(0,uo.jsx)(rl,{children:(0,uo.jsx)("code",{children:a})})]},n)}return e.startsWith("</code>")||""===e?null:(0,uo.jsx)("p",{children:e},n)}))};return(0,uo.jsxs)(Hi,{children:[(0,uo.jsx)(Ci,{type:d.type,title:d.title,message:d.message,isVisible:d.isVisible,onClose:()=>{f((e=>({...e,isVisible:!1})))}}),(0,uo.jsx)(Wi,{isOpen:m,onClose:b}),(0,uo.jsxs)($i,{children:[(0,uo.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,uo.jsx)(Vi,{children:"Zero Code AI Chat"}),(0,uo.jsxs)(qi,{isConnected:p.isConnected,children:[(0,uo.jsx)(Qi,{isConnected:p.isConnected}),p.message]})]}),(0,uo.jsxs)(Ki,{onClick:b,children:[(0,uo.jsx)(Ir,{}),"Settings"]})]}),(0,uo.jsxs)(Zi,{children:[e.map((e=>(0,uo.jsxs)(Yi,{isUser:e.isUser,children:[(0,uo.jsx)(Gi,{isUser:e.isUser,children:e.isUser?(0,uo.jsx)(io,{}):(0,uo.jsx)(Gr,{})}),(0,uo.jsxs)("div",{children:[(0,uo.jsx)(Xi,{isUser:e.isUser,children:k(e.content)}),!e.isUser&&(0,uo.jsxs)(ol,{children:[(0,uo.jsx)(al,{isPositive:!0,isActive:!0===l[e.id],onClick:()=>w(e.id,!0),title:"Helpful",children:(0,uo.jsx)(no,{})}),(0,uo.jsx)(al,{isPositive:!1,isActive:!1===l[e.id],onClick:()=>w(e.id,!1),title:"Not helpful",children:(0,uo.jsx)(to,{})})]})]})]},e.id))),a&&(0,uo.jsx)(ul,{children:"Zero Code AI is thinking..."}),(0,uo.jsx)("div",{ref:v})]}),(0,uo.jsx)(il,{children:(0,uo.jsxs)(ll,{onSubmit:e=>{if(e.preventDefault(),!r.trim()||a)return;if(r.length>1e3)return void x("Message too long","Please keep your message under 1000 characters","warning");const t={id:Date.now(),content:r.trim(),isUser:!0,timestamp:new Date};n((e=>[...e,t])),o(""),y.current&&(y.current.style.height="auto"),i(!0),r.toLowerCase().includes("error test")?setTimeout((()=>{h({isConnected:!1,message:"MCP Servers Disconnected"}),x("Connection failed","Failed to connect to MCP servers. Please try again.","error"),i(!1),setTimeout((()=>{h({isConnected:!0,message:"MCP Servers Connected"})}),5e3)}),1500):r.toLowerCase().includes("invalid")?setTimeout((()=>{x("Invalid request","Your request contains invalid parameters. Please check your input and try again.","warning"),i(!1)}),1500):setTimeout((()=>{let e;e=r.toLowerCase().includes("create")||r.toLowerCase().includes("build")?{id:Date.now()+1,content:"I'd be happy to help you create that! Here's a starting point:\n          \n<code language=\"javascript\">\n// App.js\nimport React, { useState } from 'react';\n\nfunction App() {\n  const [data, setData] = useState([]);\n  \n  useEffect(() => {\n    // Fetch data from your MCP server\n    fetch('https://api.zerocode.ai/data')\n      .then(response => response.json())\n      .then(result => setData(result))\n      .catch(error => console.error(error));\n  }, []);\n  \n  return (\n    <div className=\"App\">\n      <header>\n        <h1>My Zero Code App</h1>\n      </header>\n      <main>\n        {data.map(item => (\n          <div key={item.id} className=\"item\">\n            <h2>{item.title}</h2>\n            <p>{item.description}</p>\n          </div>\n        ))}\n      </main>\n    </div>\n  );\n}\n\nexport default App;\n</code>\n\nIs there anything specific you'd like me to customize about this component?",isUser:!1,timestamp:new Date}:r.toLowerCase().includes("error")||r.toLowerCase().includes("fix")?{id:Date.now()+1,content:"I noticed the issue. You're missing the useEffect import. Let's fix that:\n          \n<code language=\"javascript\">\n// Corrected App.js\nimport React, { useState, useEffect } from 'react';\n\nfunction App() {\n  const [data, setData] = useState([]);\n  \n  useEffect(() => {\n    // Fetch data from your MCP server\n    fetch('https://api.zerocode.ai/data')\n      .then(response => response.json())\n      .then(result => setData(result))\n      .catch(error => console.error(error));\n  }, []);\n  \n  return (\n    <div className=\"App\">\n      <header>\n        <h1>My Zero Code App</h1>\n      </header>\n      <main>\n        {data.map(item => (\n          <div key={item.id} className=\"item\">\n            <h2>{item.title}</h2>\n            <p>{item.description}</p>\n          </div>\n        ))}\n      </main>\n    </div>\n  );\n}\n\nexport default App;\n</code>\n\nNow the code should work correctly. The useEffect hook needs to be imported from React.",isUser:!1,timestamp:new Date}:r.toLowerCase().includes("mcp")||r.toLowerCase().includes("server")?{id:Date.now()+1,content:"To connect to the Zero Code MCP servers, you'll need to use the following configuration:\n\n<code language=\"javascript\">\n// MCP Server Connection\nconst MCPConfig = {\n  apiKey: 'YOUR_API_KEY',\n  endpoint: 'https://api.zerocode.ai/mcp',\n  version: 'v1',\n  timeout: 30000 // 30 seconds\n};\n\nconst connectToMCP = async () => {\n  try {\n    const response = await fetch(MCPConfig.endpoint + '/' + MCPConfig.version + '/connect', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + MCPConfig.apiKey\n      },\n      body: JSON.stringify({\n        clientVersion: '1.0.0',\n        capabilities: ['webApp', 'dataStorage', 'authentication']\n      })\n    });\n    \n    if (!response.ok) {\n      throw new Error('Failed to connect to MCP servers');\n    }\n    \n    const data = await response.json();\n    console.log('Connected to MCP:', data);\n    return data;\n  } catch (error) {\n    console.error('MCP connection error:', error);\n    throw error;\n  }\n};\n\n// Usage\nconnectToMCP()\n  .then(connection => {\n    // Initialize your app with the MCP connection\n    initializeApp(connection);\n  })\n  .catch(error => {\n    // Handle connection error\n    showError('Failed to connect to MCP servers');\n  });\n</code>\n\nYou'll need to replace 'YOUR_API_KEY' with your actual API key from the Zero Code dashboard. Would you like me to explain how to obtain an API key?",isUser:!1,timestamp:new Date}:{id:Date.now()+1,content:"I'm here to help you build applications using Zero Code's MCP servers. You can ask me to:\n\n1. Create new components or features\n2. Debug existing code\n3. Explain how to implement specific functionality\n4. Connect your application to MCP servers\n5. Generate an entire application structure\n\nWhat would you like to build today?",isUser:!1,timestamp:new Date},n((t=>[...t,e])),i(!1)}),1500)},children:[(0,uo.jsx)(sl,{ref:y,value:r,onChange:e=>{o(e.target.value),e.target.style.height="auto",e.target.style.height=Math.min(e.target.scrollHeight,200)+"px"},placeholder:"Type your message here...",rows:1}),(0,uo.jsx)(cl,{type:"submit",disabled:!r.trim()||a,title:"Send message",children:(0,uo.jsx)(qr,{size:14})})]})})]})},fl=vr.div`
  background-color: #FEE2E2;
  border-left: 4px solid #DC2626;
  color: #7F1D1D;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
  display: ${e=>e.visible?"flex":"none"};
  align-items: flex-start;
  gap: 1rem;
`,pl=vr.div`
  color: #DC2626;
  font-size: 1.25rem;
  flex-shrink: 0;
  padding-top: 0.125rem;
`,hl=vr.div`
  flex: 1;
`,ml=vr.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`,gl=vr.div`
  color: #9B1C1C;
  font-size: 0.875rem;
`,vl=vr.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.75rem;
`,yl=vr.button`
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  background-color: ${e=>e.primary?"#DC2626":"transparent"};
  color: ${e=>e.primary?"white":"#DC2626"};
  border: 1px solid ${e=>(e.primary,"#DC2626")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.primary?"#B91C1C":"#FECACA"};
  }
`,xl=vr.button`
  background: none;
  border: none;
  color: #9B1C1C;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  &:hover {
    color: #7F1D1D;
  }
`,bl=e=>{let{errorType:n,message:r,onClose:o,onRetry:a,onHelp:i}=e;const[l,s]=(0,t.useState)(!0);let c="Download Error",u=(0,uo.jsx)(Ar,{});switch(n){case"network":c="Network Error",u=(0,uo.jsx)(so,{});break;case"permission":c="Permission Denied",u=(0,uo.jsx)($r,{});break;case"compatibility":c="Compatibility Issue",u=(0,uo.jsx)(zr,{})}return(0,uo.jsxs)(fl,{visible:l,children:[(0,uo.jsx)(pl,{children:u}),(0,uo.jsxs)(hl,{children:[(0,uo.jsx)(ml,{children:c}),(0,uo.jsx)(gl,{children:r||"An error occurred during download. Please try again later."}),(0,uo.jsxs)(vl,{children:[(0,uo.jsx)(yl,{primary:!0,onClick:a,children:"Try Again"}),(0,uo.jsx)(yl,{onClick:i,children:"Get Help"})]})]}),(0,uo.jsx)(xl,{onClick:()=>{s(!1),o&&o()},"aria-label":"Close error message",children:(0,uo.jsx)(ro,{})})]})},wl=vr.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(120deg, #EEF2FF 0%, #E0E7FF 100%);
  border-radius: 8px;
`,kl=vr.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`,jl=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,Sl=vr.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,Cl=vr.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  width: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,El=vr.div`
  width: 64px;
  height: 64px;
  background-color: ${e=>e.bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`,zl=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,_l=vr.p`
  color: #6B7280;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,Pl=vr.div`
  font-size: 0.75rem;
  color: #9CA3AF;
  margin-top: 1rem;
`,Fl=vr.div`
  margin-top: 3rem;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Tl=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,Dl=vr.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  text-align: left;
  flex-wrap: wrap;
`,Nl=vr.div`
  flex: 1;
  min-width: 300px;
`,Ol=vr.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Rl=vr.div`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #4B5563;
`,Il=()=>{const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(null),a=e=>{try{console.log(`Downloading for ${e}`);const t=Math.random();t>.75?(o("network"),n("Unable to connect to the download server. Please check your internet connection and try again.")):t>.5?(o("permission"),n("You do not have permission to download this file. Please try again or contact support.")):(n(null),o(null),alert(`Download started for ${e}. Check your downloads folder.`))}catch(t){o("unknown"),n(`Download failed: ${t.message}. Please try again later.`)}};return(0,uo.jsxs)(wl,{children:[(0,uo.jsx)(kl,{children:"Download Zero Code"}),(0,uo.jsx)(jl,{children:"Get the Zero Code desktop app for your platform and start building software without writing code. Available for Windows and macOS."}),e&&(0,uo.jsx)(bl,{errorType:r,message:e,onClose:()=>{n(null),o(null)},onRetry:()=>{n(null),o(null)},onHelp:()=>{window.open("/contact","_blank")}}),(0,uo.jsxs)(Sl,{children:[(0,uo.jsxs)(Cl,{children:[(0,uo.jsx)(El,{bgColor:"#0078D7",children:(0,uo.jsx)(Er,{})}),(0,uo.jsx)(zl,{children:"Windows"}),(0,uo.jsx)(_l,{children:"Download Zero Code for Windows 10 and Windows 11"}),(0,uo.jsxs)(Yo,{variant:"primary",fullWidth:!0,onClick:()=>a("windows"),children:[(0,uo.jsx)(Mr,{style:{marginRight:"0.5rem"}})," Download for Windows"]}),(0,uo.jsx)(Pl,{children:"Version 1.0.0 (64-bit)"})]}),(0,uo.jsxs)(Cl,{children:[(0,uo.jsx)(El,{bgColor:"#000000",children:(0,uo.jsx)(Cr,{})}),(0,uo.jsx)(zl,{children:"macOS"}),(0,uo.jsx)(_l,{children:"Download Zero Code for macOS 11.0 (Big Sur) and above"}),(0,uo.jsxs)(Yo,{variant:"primary",fullWidth:!0,onClick:()=>a("macos"),children:[(0,uo.jsx)(Mr,{style:{marginRight:"0.5rem"}})," Download for macOS"]}),(0,uo.jsx)(Pl,{children:"Version 1.0.0 (Universal)"})]})]}),(0,uo.jsxs)(Fl,{children:[(0,uo.jsx)(Tl,{children:"System Requirements"}),(0,uo.jsxs)(Dl,{children:[(0,uo.jsxs)(Nl,{children:[(0,uo.jsxs)(Ol,{children:[(0,uo.jsx)(Er,{style:{color:"#0078D7"}})," Windows"]}),(0,uo.jsx)(Rl,{children:"Windows 10 (64-bit) or Windows 11"}),(0,uo.jsx)(Rl,{children:"4 GB RAM minimum, 8 GB recommended"}),(0,uo.jsx)(Rl,{children:"2 GB available disk space"}),(0,uo.jsx)(Rl,{children:"Intel Core i3 / AMD Ryzen 3 or better"}),(0,uo.jsx)(Rl,{children:"Internet connection required"})]}),(0,uo.jsxs)(Nl,{children:[(0,uo.jsxs)(Ol,{children:[(0,uo.jsx)(Cr,{style:{color:"#000000"}})," macOS"]}),(0,uo.jsx)(Rl,{children:"macOS 11.0 (Big Sur) or later"}),(0,uo.jsx)(Rl,{children:"4 GB RAM minimum, 8 GB recommended"}),(0,uo.jsx)(Rl,{children:"2 GB available disk space"}),(0,uo.jsx)(Rl,{children:"Intel or Apple Silicon processor"}),(0,uo.jsx)(Rl,{children:"Internet connection required"})]})]})]})]})},Ll=vr.div`
  position: relative;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`,Ml=vr.div`
  background-color: #1E293B;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  width: 80%;
  max-width: 1000px;
`,Bl=vr.div`
  background-color: #0F172A;
  padding: 0.75rem;
  display: flex;
  align-items: center;
`,Al=vr.div`
  display: flex;
  gap: 0.5rem;
`,Ul=vr.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,Wl=vr.div`
  color: #CBD5E1;
  font-size: 0.875rem;
  margin-left: 1rem;
`,Hl=(vr.div`
  padding: 1.5rem;
  color: #E2E8F0;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  height: 400px;
  overflow-y: auto;
`,vr.div`
  background-color: #0F172A;
  width: 200px;
  border-right: 1px solid #334155;
  padding: 1rem;
  height: 100%;
`),$l=vr.div`
  flex: 1;
  padding: 1rem;
`,Vl=vr.div`
  display: flex;
  height: 400px;
`,Kl=vr.div`
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 4px;
  color: ${e=>e.active?"#E2E8F0":"#94A3B8"};
  background-color: ${e=>e.active?"#334155":"transparent"};
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${e=>e.active?"#334155":"#1E293B"};
  }
`,ql=vr.div`
  background-color: #1E293B;
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
`,Ql=vr.div`
  position: relative;
  display: flex;
`,Zl=vr.div`
  color: #64748B;
  width: 2rem;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.5rem;
`,Yl=vr.div`
  color: ${e=>{switch(e.type){case"keyword":return"#93C5FD";case"string":return"#86EFAC";case"comment":return"#64748B";case"function":return"#F9A8D4";default:return"#E2E8F0"}}};
`,Gl=[{number:1,content:'import React, { useState } from "react";',type:"keyword"},{number:2,content:"",type:"normal"},{number:3,content:"// Zero Code Generated Component",type:"comment"},{number:4,content:"function TaskManager() {",type:"function"},{number:5,content:"  const [tasks, setTasks] = useState([]);",type:"keyword"},{number:6,content:'  const [newTask, setNewTask] = useState("");',type:"keyword"},{number:7,content:"",type:"normal"},{number:8,content:"  const addTask = () => {",type:"function"},{number:9,content:'    if (newTask.trim() === "") return;',type:"normal"},{number:10,content:"    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);",type:"normal"},{number:11,content:'    setNewTask("");',type:"normal"},{number:12,content:"  };",type:"normal"},{number:13,content:"",type:"normal"},{number:14,content:"  const toggleTask = (id) => {",type:"function"},{number:15,content:"    setTasks(",type:"normal"},{number:16,content:"      tasks.map((task) =>",type:"normal"},{number:17,content:"        task.id === id ? { ...task, completed: !task.completed } : task",type:"normal"},{number:18,content:"      )",type:"normal"},{number:19,content:"    );",type:"normal"},{number:20,content:"  };",type:"normal"},{number:21,content:"",type:"normal"},{number:22,content:"  const deleteTask = (id) => {",type:"function"},{number:23,content:"    setTasks(tasks.filter((task) => task.id !== id));",type:"normal"},{number:24,content:"  };",type:"normal"},{number:25,content:"",type:"normal"},{number:26,content:"  return (",type:"keyword"},{number:27,content:'    <div className="task-manager">',type:"string"},{number:28,content:"      <h1>Task Manager</h1>",type:"string"},{number:29,content:'      <div className="add-task">',type:"string"},{number:30,content:"        <input",type:"normal"},{number:31,content:'          type="text"',type:"string"},{number:32,content:"          value={newTask}",type:"normal"},{number:33,content:"          onChange={(e) => setNewTask(e.target.value)}",type:"normal"},{number:34,content:'          placeholder="Add a new task..."',type:"string"},{number:35,content:"        />",type:"normal"},{number:36,content:"        <button onClick={addTask}>Add</button>",type:"string"},{number:37,content:"      </div>",type:"string"},{number:38,content:"      {/* Task list */}",type:"comment"},{number:39,content:'      <ul className="task-list">',type:"string"},{number:40,content:"        {tasks.map((task) => (",type:"normal"}],Xl=()=>(0,uo.jsx)(Ll,{children:(0,uo.jsxs)(Ml,{children:[(0,uo.jsxs)(Bl,{children:[(0,uo.jsxs)(Al,{children:[(0,uo.jsx)(Ul,{color:"#FF5F56"}),(0,uo.jsx)(Ul,{color:"#FFBD2E"}),(0,uo.jsx)(Ul,{color:"#27C93F"})]}),(0,uo.jsx)(Wl,{children:"Zero Code - Task Manager App"})]}),(0,uo.jsxs)(Vl,{children:[(0,uo.jsxs)(Hl,{children:[(0,uo.jsx)(Kl,{children:"Project Files"}),(0,uo.jsx)(Kl,{active:!0,children:"TaskManager.js"}),(0,uo.jsx)(Kl,{children:"styles.css"}),(0,uo.jsx)(Kl,{children:"index.js"}),(0,uo.jsx)(Kl,{children:"package.json"})]}),(0,uo.jsx)($l,{children:(0,uo.jsx)(ql,{children:Gl.map((e=>(0,uo.jsxs)(Ql,{children:[(0,uo.jsx)(Zl,{children:e.number}),(0,uo.jsx)(Yl,{type:e.type,children:e.content})]},e.number)))})})]})]})}),Jl=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,es=vr.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,ts=vr.div`
  color: #6366F1;
  font-size: 1.25rem;
  padding-top: 0.25rem;
`,ns=vr.div``,rs=vr.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,os=vr.p`
  color: #6B7280;
  font-size: 0.875rem;
`,as=vr.div`
  margin-top: 4rem;
`,is=vr.div`
  border-bottom: 1px solid #E5E7EB;
  padding: 1.5rem 0;
`,ls=vr.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,ss=vr.div`
  color: #4B5563;
  padding-left: 2rem;
`,cs=vr.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  border-radius: 8px;
`,us=vr.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,ds=vr.p`
  color: #4B5563;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,fs=()=>(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsxs)(No,{title:"Download Zero Code",subtitle:"Get started with our revolutionary AI-powered coding companion for Windows and macOS",gradient:!0,children:[(0,uo.jsxs)(Yo,{to:"#download",variant:"primary",size:"large",children:[(0,uo.jsx)(Mr,{style:{marginRight:"0.5rem"}})," Download Now"]}),(0,uo.jsx)(Yo,{to:"/features",variant:"outline",size:"large",children:"View Features"})]}),(0,uo.jsxs)(Bo,{children:[(0,uo.jsx)("h2",{style:{fontSize:"1.875rem",fontWeight:"700",marginBottom:"1.5rem",textAlign:"center"},children:"Transform How You Build Software"}),(0,uo.jsx)("p",{style:{color:"#6B7280",maxWidth:"800px",margin:"0 auto 3rem",textAlign:"center"},children:"Zero Code is a powerful desktop application that enables both technical and non-technical users to build software without writing code. Our AI-powered platform reduces development time and eliminates technical barriers."}),(0,uo.jsx)(Xl,{}),(0,uo.jsxs)(Jl,{children:[(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"For Non-Technical Users"}),(0,uo.jsx)(os,{children:"Describe what you want, and Zero Code builds it. No coding knowledge required."})]})]}),(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"For Developers"}),(0,uo.jsx)(os,{children:"Automate repetitive tasks, generate boilerplate code, and focus on solving unique problems."})]})]}),(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"Intuitive Interface"}),(0,uo.jsx)(os,{children:"Clean, modern design that makes complex development tasks simple and straightforward."})]})]}),(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"AI-Powered"}),(0,uo.jsx)(os,{children:"Advanced AI that understands your requirements and generates the right code every time."})]})]}),(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"MCP Server Integration"}),(0,uo.jsx)(os,{children:"Seamlessly integrates with our MCP servers for powerful backend functionality."})]})]}),(0,uo.jsxs)(es,{children:[(0,uo.jsx)(ts,{children:(0,uo.jsx)(Dr,{})}),(0,uo.jsxs)(ns,{children:[(0,uo.jsx)(rs,{children:"Multi-platform"}),(0,uo.jsx)(os,{children:"Available for both Windows and macOS, with the same powerful features across platforms."})]})]})]})]}),(0,uo.jsx)(Bo,{id:"download",children:(0,uo.jsx)(Il,{})}),(0,uo.jsx)(Bo,{children:(0,uo.jsxs)(as,{children:[(0,uo.jsx)("h2",{style:{fontSize:"1.875rem",fontWeight:"700",marginBottom:"2rem",textAlign:"center"},children:"Frequently Asked Questions"}),(0,uo.jsxs)(is,{children:[(0,uo.jsxs)(ls,{children:[(0,uo.jsx)(Yr,{style:{color:"#6366F1"}}),"Is Zero Code really free to download?"]}),(0,uo.jsx)(ss,{children:(0,uo.jsx)("p",{children:"Yes, Zero Code is free to download. We offer a basic free plan with limited features, and premium subscription plans for advanced features and professional use. You can start with the free plan and upgrade anytime as your needs grow."})})]}),(0,uo.jsxs)(is,{children:[(0,uo.jsxs)(ls,{children:[(0,uo.jsx)(Yr,{style:{color:"#6366F1"}}),"Do I need any technical knowledge to use Zero Code?"]}),(0,uo.jsx)(ss,{children:(0,uo.jsx)("p",{children:"Not at all! Zero Code is designed for both technical and non-technical users. Our AI assistant can translate your plain language descriptions into working software. Of course, if you do have technical knowledge, you'll find additional advanced features that can enhance your workflow."})})]}),(0,uo.jsxs)(is,{children:[(0,uo.jsxs)(ls,{children:[(0,uo.jsx)(Yr,{style:{color:"#6366F1"}}),"What kind of applications can I build with Zero Code?"]}),(0,uo.jsx)(ss,{children:(0,uo.jsx)("p",{children:"Zero Code supports a wide range of application types, including web applications, desktop tools, data analysis scripts, automation tools, and more. The AI can help build everything from simple CRUD applications to more complex software with custom business logic."})})]}),(0,uo.jsxs)(is,{children:[(0,uo.jsxs)(ls,{children:[(0,uo.jsx)(Yr,{style:{color:"#6366F1"}}),"How secure is the code generated by Zero Code?"]}),(0,uo.jsx)(ss,{children:(0,uo.jsx)("p",{children:"Security is our top priority. Zero Code follows industry best practices for code generation and includes built-in security checks. Our AI is trained to avoid common security vulnerabilities, and we regularly update our security patterns based on the latest standards."})})]}),(0,uo.jsxs)(is,{children:[(0,uo.jsxs)(ls,{children:[(0,uo.jsx)(Yr,{style:{color:"#6366F1"}}),"How do I get support if I run into issues?"]}),(0,uo.jsx)(ss,{children:(0,uo.jsxs)("p",{children:["We offer multiple support channels:",(0,uo.jsxs)("ul",{style:{paddingLeft:"1.5rem",marginTop:"0.5rem"},children:[(0,uo.jsx)("li",{children:"In-app help documentation and tutorials"}),(0,uo.jsx)("li",{children:"Community forums where users help each other"}),(0,uo.jsx)("li",{children:"Email support for all users"}),(0,uo.jsx)("li",{children:"Priority support with faster response times for premium subscribers"})]})]})})]})]})}),(0,uo.jsx)(Bo,{children:(0,uo.jsxs)(cs,{children:[(0,uo.jsx)(us,{children:"Ready to transform how you build software?"}),(0,uo.jsx)(ds,{children:"Download Zero Code today and experience the future of software development. No coding required, just your ideas."}),(0,uo.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[(0,uo.jsxs)(Yo,{to:"#download",variant:"primary",size:"large",children:[(0,uo.jsx)(Mr,{style:{marginRight:"0.5rem"}})," Download Now"]}),(0,uo.jsxs)(Yo,{to:"/how-it-works",variant:"secondary",size:"large",children:[(0,uo.jsx)(oo,{style:{marginRight:"0.5rem"}})," How It Works"]})]})]})})]}),ps=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,hs=vr.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`,ms=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`,gs=vr.div`
  margin-bottom: 1.5rem;
`,vs=vr.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
`,ys=vr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`,xs=vr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`,bs=vr.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`,ws=vr.div`
  background-color: #F3F4F6;
  padding: 2rem;
  border-radius: 8px;
`,ks=vr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`,js=vr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ss=vr.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,Cs=vr.div`
  width: 40px;
  height: 40px;
  background-color: #EEF2FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6366F1;
  flex-shrink: 0;
`,Es=vr.div``,zs=vr.h4`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,_s=vr.p`
  color: #6B7280;
  font-size: 0.875rem;
`,Ps=vr.div`
  margin-top: 4rem;
`,Fs=vr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`,Ts=vr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ds=vr.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,Ns=vr.h4`
  font-weight: 600;
  margin-bottom: 0.75rem;
`,Os=vr.p`
  color: #6B7280;
  font-size: 0.875rem;
`,Rs=vr.div`
  background-color: #D1FAE5;
  color: #065F46;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Is=vr.div`
  width: 40px;
  height: 40px;
  background-color: #059669;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,Ls=()=>{const[e,n]=(0,t.useState)({name:"",email:"",subject:"General Inquiry",message:""}),[r,o]=(0,t.useState)(!1),a=e=>{const{name:t,value:r}=e.target;n((e=>({...e,[t]:r})))};return(0,uo.jsxs)(uo.Fragment,{children:[(0,uo.jsx)(No,{title:"Contact Us",subtitle:"Have questions or need help? We're here for you.",gradient:!0}),(0,uo.jsxs)(Bo,{children:[(0,uo.jsxs)(ps,{children:[(0,uo.jsxs)("div",{children:[r&&(0,uo.jsxs)(Rs,{children:[(0,uo.jsx)(Is,{children:(0,uo.jsx)(Nr,{})}),(0,uo.jsxs)("div",{children:[(0,uo.jsx)("h4",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Message Sent!"}),(0,uo.jsx)("p",{style:{fontSize:"0.875rem"},children:"Thank you for contacting us. We'll get back to you shortly."})]})]}),(0,uo.jsxs)(hs,{onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e),o(!0),setTimeout((()=>{o(!1),n({name:"",email:"",subject:"General Inquiry",message:""})}),5e3)},children:[(0,uo.jsx)(ms,{children:"Send Us a Message"}),(0,uo.jsxs)(gs,{children:[(0,uo.jsx)(vs,{htmlFor:"name",children:"Your Name"}),(0,uo.jsx)(ys,{id:"name",name:"name",type:"text",value:e.name,onChange:a,required:!0,placeholder:"Enter your name"})]}),(0,uo.jsxs)(gs,{children:[(0,uo.jsx)(vs,{htmlFor:"email",children:"Your Email"}),(0,uo.jsx)(ys,{id:"email",name:"email",type:"email",value:e.email,onChange:a,required:!0,placeholder:"Enter your email address"})]}),(0,uo.jsxs)(gs,{children:[(0,uo.jsx)(vs,{htmlFor:"subject",children:"Subject"}),(0,uo.jsxs)(bs,{id:"subject",name:"subject",value:e.subject,onChange:a,required:!0,children:[(0,uo.jsx)("option",{value:"General Inquiry",children:"General Inquiry"}),(0,uo.jsx)("option",{value:"Technical Support",children:"Technical Support"}),(0,uo.jsx)("option",{value:"Billing Question",children:"Billing Question"}),(0,uo.jsx)("option",{value:"Feature Request",children:"Feature Request"}),(0,uo.jsx)("option",{value:"Download Issue",children:"Download Issue"}),(0,uo.jsx)("option",{value:"Bug Report",children:"Bug Report"})]})]}),(0,uo.jsxs)(gs,{children:[(0,uo.jsx)(vs,{htmlFor:"message",children:"Your Message"}),(0,uo.jsx)(xs,{id:"message",name:"message",value:e.message,onChange:a,required:!0,placeholder:"Type your message here..."})]}),(0,uo.jsx)(Yo,{type:"submit",variant:"primary",fullWidth:!0,children:"Send Message"})]})]}),(0,uo.jsxs)(ws,{children:[(0,uo.jsx)(ks,{children:"Get in Touch"}),(0,uo.jsxs)(js,{children:[(0,uo.jsxs)(Ss,{children:[(0,uo.jsx)(Cs,{children:(0,uo.jsx)(Br,{})}),(0,uo.jsxs)(Es,{children:[(0,uo.jsx)(zs,{children:"Email"}),(0,uo.jsx)(_s,{children:"support@zerocode.com"}),(0,uo.jsx)(_s,{children:"info@zerocode.com"})]})]}),(0,uo.jsxs)(Ss,{children:[(0,uo.jsx)(Cs,{children:(0,uo.jsx)(Zr,{})}),(0,uo.jsxs)(Es,{children:[(0,uo.jsx)(zs,{children:"Phone"}),(0,uo.jsx)(_s,{children:"+1 (800) 123-4567"}),(0,uo.jsx)(_s,{children:"Monday - Friday, 9AM - 6PM EST"})]})]}),(0,uo.jsxs)(Ss,{children:[(0,uo.jsx)(Cs,{children:(0,uo.jsx)(Vr,{})}),(0,uo.jsxs)(Es,{children:[(0,uo.jsx)(zs,{children:"Headquarters"}),(0,uo.jsx)(_s,{children:"123 Innovation Way"}),(0,uo.jsx)(_s,{children:"San Francisco, CA 94103"})]})]})]}),(0,uo.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,uo.jsx)(zs,{children:"Response Time"}),(0,uo.jsx)(_s,{style:{marginBottom:"1rem"},children:"We aim to respond to all inquiries within 24 hours during business days."}),(0,uo.jsx)(_s,{children:'For urgent technical issues, please select "Technical Support" in the subject field.'})]})]})]}),(0,uo.jsxs)(Ps,{children:[(0,uo.jsx)(Fs,{children:"Frequently Asked Questions"}),(0,uo.jsxs)(Ts,{children:[(0,uo.jsxs)(Ds,{children:[(0,uo.jsx)(Ns,{children:"How do I download Zero Code?"}),(0,uo.jsx)(Os,{children:"You can download Zero Code directly from our download page. We offer versions for both Windows and macOS. Simply select your platform and click the download button."})]}),(0,uo.jsxs)(Ds,{children:[(0,uo.jsx)(Ns,{children:"Is Zero Code free to use?"}),(0,uo.jsx)(Os,{children:"Zero Code offers a free tier with basic functionality. For advanced features and professional use, we offer premium subscription plans. Check our pricing page for more details."})]}),(0,uo.jsxs)(Ds,{children:[(0,uo.jsx)(Ns,{children:"I'm having trouble downloading Zero Code"}),(0,uo.jsx)(Os,{children:"If you're experiencing download issues, please ensure you have a stable internet connection. Try disabling your firewall temporarily or using a different browser. If problems persist, contact our support team."})]}),(0,uo.jsxs)(Ds,{children:[(0,uo.jsx)(Ns,{children:"Do you offer educational discounts?"}),(0,uo.jsx)(Os,{children:"Yes! We offer special discounts for students, educators, and educational institutions. Please contact our sales team with proof of your status to receive your discount code."})]})]})]})]})]})},Ms=vr.footer`
  background-color: #F9FAFB;
  padding: 4rem 2rem 2rem;
  font-size: 0.875rem;
`,Bs=vr.div`
  max-width: 1200px;
  margin: 0 auto;
`,As=vr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,Us=vr.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ws=vr.div`
  width: 24px;
  height: 24px;
  background-color: #6366F1;
  border-radius: 4px;
`,Hs=vr.span`
  font-weight: 600;
  font-size: 1rem;
`,$s=vr.p`
  color: #6B7280;
  max-width: 300px;
  margin-bottom: 1rem;
`,Vs=vr.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ks=vr.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,qs=vr(Ee)`
  color: #6B7280;
  transition: color 0.2s;
  
  &:hover {
    color: #111827;
  }
`,Qs=vr.div`
  border-top: 1px solid #E5E7EB;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  color: #9CA3AF;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`,Zs=()=>(0,uo.jsx)(Ms,{children:(0,uo.jsxs)(Bs,{children:[(0,uo.jsxs)(As,{children:[(0,uo.jsxs)("div",{children:[(0,uo.jsxs)(Us,{children:[(0,uo.jsx)(Ws,{}),(0,uo.jsx)(Hs,{children:"Zero Code"})]}),(0,uo.jsx)($s,{children:"The AI-powered coding companion that's changing how we build software."})]}),(0,uo.jsxs)(Vs,{children:[(0,uo.jsx)(Ks,{children:"PRODUCT"}),(0,uo.jsx)(qs,{to:"/features",children:"Features"}),(0,uo.jsx)(qs,{to:"/download",children:"Download"}),(0,uo.jsx)(qs,{to:"/pricing",children:"Pricing"}),(0,uo.jsx)(qs,{to:"/use-cases",children:"Use Cases"}),(0,uo.jsx)(qs,{to:"/roadmap",children:"Roadmap"})]}),(0,uo.jsxs)(Vs,{children:[(0,uo.jsx)(Ks,{children:"COMPANY"}),(0,uo.jsx)(qs,{to:"/about",children:"About"}),(0,uo.jsx)(qs,{to:"/blog",children:"Blog"}),(0,uo.jsx)(qs,{to:"/careers",children:"Careers"}),(0,uo.jsx)(qs,{to:"/contact",children:"Contact"}),(0,uo.jsx)(qs,{to:"/join-waitlist",children:"Join Waitlist"})]}),(0,uo.jsxs)(Vs,{children:[(0,uo.jsx)(Ks,{children:"LEGAL"}),(0,uo.jsx)(qs,{to:"/privacy-policy",children:"Privacy Policy"}),(0,uo.jsx)(qs,{to:"/terms-of-service",children:"Terms of Service"}),(0,uo.jsx)(qs,{to:"/cookie-policy",children:"Cookie Policy"})]})]}),(0,uo.jsx)(Qs,{children:(0,uo.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Zero Code. All rights reserved."]})})]})}),Ys=vr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
`,Gs=vr.div`
  font-size: 4rem;
  color: #EF4444;
  margin-bottom: 2rem;
`,Xs=vr.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`,Js=vr.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 600px;
`,ec=vr.pre`
  text-align: left;
  padding: 1rem;
  background-color: #F3F4F6;
  border-radius: 8px;
  overflow: auto;
  max-width: 100%;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #4B5563;
`;class tc extends t.Component{constructor(e){super(e),this.handleRefresh=()=>{window.location.reload()},this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),console.error("Uncaught error:",e,t)}render(){return this.state.hasError?(0,uo.jsxs)(Ys,{children:[(0,uo.jsx)(Gs,{children:(0,uo.jsx)(Ar,{})}),(0,uo.jsx)(Xs,{children:"Something went wrong"}),(0,uo.jsx)(Js,{children:"We're sorry, but an unexpected error has occurred. Please try refreshing the page."}),this.state.error&&(0,uo.jsxs)(ec,{children:[this.state.error.toString(),(0,uo.jsx)("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]}),(0,uo.jsx)(Yo,{variant:"primary",onClick:this.handleRefresh,children:"Refresh Page"})]}):this.props.children}}const nc=tc;const rc=function(){return(0,uo.jsx)(je,{basename:"/zero-code-website-new",children:(0,uo.jsx)(nc,{children:(0,uo.jsxs)("div",{className:"App",children:[(0,uo.jsx)(zo,{}),(0,uo.jsxs)(ve,{children:[(0,uo.jsx)(me,{path:"/",element:(0,uo.jsx)(aa,{})}),(0,uo.jsx)(me,{path:"/problem",element:(0,uo.jsx)(sa,{})}),(0,uo.jsx)(me,{path:"/solution",element:(0,uo.jsx)(xa,{})}),(0,uo.jsx)(me,{path:"/features",element:(0,uo.jsx)(ka,{})}),(0,uo.jsx)(me,{path:"/mcp-tools",element:(0,uo.jsx)(Ia,{})}),(0,uo.jsx)(me,{path:"/how-it-works",element:(0,uo.jsx)(Ka,{})}),(0,uo.jsx)(me,{path:"/chat",element:(0,uo.jsx)(dl,{})}),(0,uo.jsx)(me,{path:"/download",element:(0,uo.jsx)(fs,{})}),(0,uo.jsx)(me,{path:"/contact",element:(0,uo.jsx)(Ls,{})}),(0,uo.jsx)(me,{path:"/join-waitlist",element:(0,uo.jsx)(yi,{})}),(0,uo.jsx)(me,{path:"/error",element:(0,uo.jsx)(ti,{})}),(0,uo.jsx)(me,{path:"*",element:(0,uo.jsx)(ti,{})})]}),(0,uo.jsx)(Zs,{})]})})})},oc=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:a,getTTFB:i}=t;n(e),r(e),o(e),a(e),i(e)}))};o.createRoot(document.getElementById("root")).render((0,uo.jsx)(t.StrictMode,{children:(0,uo.jsx)(rc,{})})),oc()})()})();
//# sourceMappingURL=main.c7d3500a.js.map