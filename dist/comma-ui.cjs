"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const ye=require("react"),Tr=require("./tailwind-config.cjs");var Te={exports:{}},oe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be;function Pr(){if(Be)return oe;Be=1;var r=ye,n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(d,p,w){var g,x={},T=null,O=null;w!==void 0&&(T=""+w),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(O=p.ref);for(g in p)a.call(p,g)&&!l.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:n,type:d,key:T,ref:O,props:x,_owner:u.current}}return oe.Fragment=i,oe.jsx=s,oe.jsxs=s,oe}var ie={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze;function jr(){return Ze||(Ze=1,process.env.NODE_ENV!=="production"&&function(){var r=ye,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),F=Symbol.iterator,_="@@iterator";function P(e){if(e===null||typeof e!="object")return null;var t=F&&e[F]||e[_];return typeof t=="function"?t:null}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function C(e){{for(var t=arguments.length,o=new Array(t>1?t-1:0),c=1;c<t;c++)o[c-1]=arguments[c];le("error",e,o)}}function le(e,t,o){{var c=j.ReactDebugCurrentFrame,v=c.getStackAddendum();v!==""&&(t+="%s",o=o.concat([v]));var y=o.map(function(m){return String(m)});y.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,y)}}var X=!1,ce=!1,ue=!1,de=!1,fe=!1,Z;Z=Symbol.for("react.module.reference");function Q(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===l||fe||e===u||e===w||e===g||de||e===O||X||ce||ue||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===x||e.$$typeof===s||e.$$typeof===d||e.$$typeof===p||e.$$typeof===Z||e.getModuleId!==void 0))}function ee(e,t,o){var c=e.displayName;if(c)return c;var v=t.displayName||t.name||"";return v!==""?o+"("+v+")":o}function h(e){return e.displayName||"Context"}function M(e){if(e==null)return null;if(typeof e.tag=="number"&&C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case i:return"Portal";case l:return"Profiler";case u:return"StrictMode";case w:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var t=e;return h(t)+".Consumer";case s:var o=e;return h(o._context)+".Provider";case p:return ee(e,e.render,"ForwardRef");case x:var c=e.displayName||null;return c!==null?c:M(e.type)||"Memo";case T:{var v=e,y=v._payload,m=v._init;try{return M(m(y))}catch{return null}}}return null}var I=Object.assign,$=0,Y,re,q,W,te,N,U;function Ae(){}Ae.__reactDisabledLog=!0;function nr(){{if($===0){Y=console.log,re=console.info,q=console.warn,W=console.error,te=console.group,N=console.groupCollapsed,U=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ae,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function or(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:Y}),info:I({},e,{value:re}),warn:I({},e,{value:q}),error:I({},e,{value:W}),group:I({},e,{value:te}),groupCollapsed:I({},e,{value:N}),groupEnd:I({},e,{value:U})})}$<0&&C("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var we=j.ReactCurrentDispatcher,xe;function pe(e,t,o){{if(xe===void 0)try{throw Error()}catch(v){var c=v.stack.trim().match(/\n( *(at )?)/);xe=c&&c[1]||""}return`
`+xe+e}}var Ce=!1,be;{var ir=typeof WeakMap=="function"?WeakMap:Map;be=new ir}function Oe(e,t){if(!e||Ce)return"";{var o=be.get(e);if(o!==void 0)return o}var c;Ce=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=we.current,we.current=null,nr();try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(V){c=V}Reflect.construct(e,[],m)}else{try{m.call()}catch(V){c=V}e.call(m.prototype)}}else{try{throw Error()}catch(V){c=V}e()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var b=V.stack.split(`
`),A=c.stack.split(`
`),E=b.length-1,S=A.length-1;E>=1&&S>=0&&b[E]!==A[S];)S--;for(;E>=1&&S>=0;E--,S--)if(b[E]!==A[S]){if(E!==1||S!==1)do if(E--,S--,S<0||b[E]!==A[S]){var z=`
`+b[E].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),typeof e=="function"&&be.set(e,z),z}while(E>=1&&S>=0);break}}}finally{Ce=!1,we.current=y,or(),Error.prepareStackTrace=v}var J=e?e.displayName||e.name:"",Ue=J?pe(J):"";return typeof e=="function"&&be.set(e,Ue),Ue}function ar(e,t,o){return Oe(e,!1)}function sr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ge(e,t,o){if(e==null)return"";if(typeof e=="function")return Oe(e,sr(e));if(typeof e=="string")return pe(e);switch(e){case w:return pe("Suspense");case g:return pe("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return ar(e.render);case x:return ge(e.type,t,o);case T:{var c=e,v=c._payload,y=c._init;try{return ge(y(v),t,o)}catch{}}}return""}var me=Object.prototype.hasOwnProperty,Me={},Ie=j.ReactDebugCurrentFrame;function ve(e){if(e){var t=e._owner,o=ge(e.type,e._source,t?t.type:null);Ie.setExtraStackFrame(o)}else Ie.setExtraStackFrame(null)}function lr(e,t,o,c,v){{var y=Function.call.bind(me);for(var m in e)if(y(e,m)){var b=void 0;try{if(typeof e[m]!="function"){var A=Error((c||"React class")+": "+o+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}b=e[m](t,m,c,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(E){b=E}b&&!(b instanceof Error)&&(ve(v),C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",o,m,typeof b),ve(null)),b instanceof Error&&!(b.message in Me)&&(Me[b.message]=!0,ve(v),C("Failed %s type: %s",o,b.message),ve(null))}}}var cr=Array.isArray;function Re(e){return cr(e)}function ur(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,o=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function dr(e){try{return ze(e),!1}catch{return!0}}function ze(e){return""+e}function Le(e){if(dr(e))return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ur(e)),ze(e)}var ne=j.ReactCurrentOwner,fr={key:!0,ref:!0,__self:!0,__source:!0},Fe,Ve,Ee;Ee={};function pr(e){if(me.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function br(e){if(me.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function gr(e,t){if(typeof e.ref=="string"&&ne.current&&t&&ne.current.stateNode!==t){var o=M(ne.current.type);Ee[o]||(C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',M(ne.current.type),e.ref),Ee[o]=!0)}}function mr(e,t){{var o=function(){Fe||(Fe=!0,C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function vr(e,t){{var o=function(){Ve||(Ve=!0,C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var hr=function(e,t,o,c,v,y,m){var b={$$typeof:n,type:e,key:t,ref:o,props:m,_owner:y};return b._store={},Object.defineProperty(b._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(b,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(b,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(b.props),Object.freeze(b)),b};function yr(e,t,o,c,v){{var y,m={},b=null,A=null;o!==void 0&&(Le(o),b=""+o),br(t)&&(Le(t.key),b=""+t.key),pr(t)&&(A=t.ref,gr(t,v));for(y in t)me.call(t,y)&&!fr.hasOwnProperty(y)&&(m[y]=t[y]);if(e&&e.defaultProps){var E=e.defaultProps;for(y in E)m[y]===void 0&&(m[y]=E[y])}if(b||A){var S=typeof e=="function"?e.displayName||e.name||"Unknown":e;b&&mr(m,S),A&&vr(m,S)}return hr(e,b,A,v,c,ne.current,m)}}var _e=j.ReactCurrentOwner,$e=j.ReactDebugCurrentFrame;function H(e){if(e){var t=e._owner,o=ge(e.type,e._source,t?t.type:null);$e.setExtraStackFrame(o)}else $e.setExtraStackFrame(null)}var Se;Se=!1;function ke(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function We(){{if(_e.current){var e=M(_e.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function wr(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),o=e.lineNumber;return`

Check your code at `+t+":"+o+"."}return""}}var Ne={};function xr(e){{var t=We();if(!t){var o=typeof e=="string"?e:e.displayName||e.name;o&&(t=`

Check the top-level render call using <`+o+">.")}return t}}function De(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=xr(t);if(Ne[o])return;Ne[o]=!0;var c="";e&&e._owner&&e._owner!==_e.current&&(c=" It was passed a child from "+M(e._owner.type)+"."),H(e),C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,c),H(null)}}function Ge(e,t){{if(typeof e!="object")return;if(Re(e))for(var o=0;o<e.length;o++){var c=e[o];ke(c)&&De(c,t)}else if(ke(e))e._store&&(e._store.validated=!0);else if(e){var v=P(e);if(typeof v=="function"&&v!==e.entries)for(var y=v.call(e),m;!(m=y.next()).done;)ke(m.value)&&De(m.value,t)}}}function Cr(e){{var t=e.type;if(t==null||typeof t=="string")return;var o;if(typeof t=="function")o=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===p||t.$$typeof===x))o=t.propTypes;else return;if(o){var c=M(t);lr(o,e.props,"prop",c,e)}else if(t.PropTypes!==void 0&&!Se){Se=!0;var v=M(t);C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Rr(e){{for(var t=Object.keys(e.props),o=0;o<t.length;o++){var c=t[o];if(c!=="children"&&c!=="key"){H(e),C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),H(null);break}}e.ref!==null&&(H(e),C("Invalid attribute `ref` supplied to `React.Fragment`."),H(null))}}function Ye(e,t,o,c,v,y){{var m=Q(e);if(!m){var b="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var A=wr(v);A?b+=A:b+=We();var E;e===null?E="null":Re(e)?E="array":e!==void 0&&e.$$typeof===n?(E="<"+(M(e.type)||"Unknown")+" />",b=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,b)}var S=yr(e,t,o,v,y);if(S==null)return S;if(m){var z=t.children;if(z!==void 0)if(c)if(Re(z)){for(var J=0;J<z.length;J++)Ge(z[J],e);Object.freeze&&Object.freeze(z)}else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ge(z,e)}return e===a?Rr(S):Cr(S),S}}function Er(e,t,o){return Ye(e,t,o,!0)}function _r(e,t,o){return Ye(e,t,o,!1)}var Sr=_r,kr=Er;ie.Fragment=a,ie.jsx=Sr,ie.jsxs=kr}()),ie}process.env.NODE_ENV==="production"?Te.exports=Pr():Te.exports=jr();var k=Te.exports;const Ar={small:"w-4 h-4 border-2",medium:"w-8 h-8 border-4",large:"w-16 h-16 border-8"},Or={default:"border-cui-astral-primary/30 border-t-cui-astral-primary",invert:"border-[#c4c4c2]/30 border-t-white"},Mr=({size:r="medium",appearance:n="default"})=>{const a=`rounded-full animate-spin ${Ar[r]} ${Or[n]}`;return k.jsx("div",{className:a})},je="-";function Ir(r){const n=Lr(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=r;function u(s){const d=s.split(je);return d[0]===""&&d.length!==1&&d.shift(),Je(d,n)||zr(s)}function l(s,d){const p=i[s]||[];return d&&a[s]?[...p,...a[s]]:p}return{getClassGroupId:u,getConflictingClassGroupIds:l}}function Je(r,n){var s;if(r.length===0)return n.classGroupId;const i=r[0],a=n.nextPart.get(i),u=a?Je(r.slice(1),a):void 0;if(u)return u;if(n.validators.length===0)return;const l=r.join(je);return(s=n.validators.find(({validator:d})=>d(l)))==null?void 0:s.classGroupId}const qe=/^\[(.+)\]$/;function zr(r){if(qe.test(r)){const n=qe.exec(r)[1],i=n==null?void 0:n.substring(0,n.indexOf(":"));if(i)return"arbitrary.."+i}}function Lr(r){const{theme:n,prefix:i}=r,a={nextPart:new Map,validators:[]};return Vr(Object.entries(r.classGroups),i).forEach(([l,s])=>{Pe(s,a,l,n)}),a}function Pe(r,n,i,a){r.forEach(u=>{if(typeof u=="string"){const l=u===""?n:He(n,u);l.classGroupId=i;return}if(typeof u=="function"){if(Fr(u)){Pe(u(a),n,i,a);return}n.validators.push({validator:u,classGroupId:i});return}Object.entries(u).forEach(([l,s])=>{Pe(s,He(n,l),i,a)})})}function He(r,n){let i=r;return n.split(je).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i}function Fr(r){return r.isThemeGetter}function Vr(r,n){return n?r.map(([i,a])=>{const u=a.map(l=>typeof l=="string"?n+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([s,d])=>[n+s,d])):l);return[i,u]}):r}function $r(r){if(r<1)return{get:()=>{},set:()=>{}};let n=0,i=new Map,a=new Map;function u(l,s){i.set(l,s),n++,n>r&&(n=0,a=i,i=new Map)}return{get(l){let s=i.get(l);if(s!==void 0)return s;if((s=a.get(l))!==void 0)return u(l,s),s},set(l,s){i.has(l)?i.set(l,s):u(l,s)}}}const Ke="!";function Wr(r){const n=r.separator,i=n.length===1,a=n[0],u=n.length;return function(s){const d=[];let p=0,w=0,g;for(let _=0;_<s.length;_++){let P=s[_];if(p===0){if(P===a&&(i||s.slice(_,_+u)===n)){d.push(s.slice(w,_)),w=_+u;continue}if(P==="/"){g=_;continue}}P==="["?p++:P==="]"&&p--}const x=d.length===0?s:s.substring(w),T=x.startsWith(Ke),O=T?x.substring(1):x,F=g&&g>w?g-w:void 0;return{modifiers:d,hasImportantModifier:T,baseClassName:O,maybePostfixModifierPosition:F}}}function Nr(r){if(r.length<=1)return r;const n=[];let i=[];return r.forEach(a=>{a[0]==="["?(n.push(...i.sort(),a),i=[]):i.push(a)}),n.push(...i.sort()),n}function Dr(r){return{cache:$r(r.cacheSize),splitModifiers:Wr(r),...Ir(r)}}const Gr=/\s+/;function Yr(r,n){const{splitModifiers:i,getClassGroupId:a,getConflictingClassGroupIds:u}=n,l=new Set;return r.trim().split(Gr).map(s=>{const{modifiers:d,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:g}=i(s);let x=a(g?w.substring(0,g):w),T=!!g;if(!x){if(!g)return{isTailwindClass:!1,originalClassName:s};if(x=a(w),!x)return{isTailwindClass:!1,originalClassName:s};T=!1}const O=Nr(d).join(":");return{isTailwindClass:!0,modifierId:p?O+Ke:O,classGroupId:x,originalClassName:s,hasPostfixModifier:T}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:d,classGroupId:p,hasPostfixModifier:w}=s,g=d+p;return l.has(g)?!1:(l.add(g),u(p,w).forEach(x=>l.add(d+x)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ur(){let r=0,n,i,a="";for(;r<arguments.length;)(n=arguments[r++])&&(i=Xe(n))&&(a&&(a+=" "),a+=i);return a}function Xe(r){if(typeof r=="string")return r;let n,i="";for(let a=0;a<r.length;a++)r[a]&&(n=Xe(r[a]))&&(i&&(i+=" "),i+=n);return i}function Br(r,...n){let i,a,u,l=s;function s(p){const w=n.reduce((g,x)=>x(g),r());return i=Dr(w),a=i.cache.get,u=i.cache.set,l=d,d(p)}function d(p){const w=a(p);if(w)return w;const g=Yr(p,i);return u(p,g),g}return function(){return l(Ur.apply(null,arguments))}}function R(r){const n=i=>i[r]||[];return n.isThemeGetter=!0,n}const Qe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Zr=/^\d+\/\d+$/,qr=new Set(["px","full","screen"]),Hr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Kr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function L(r){return B(r)||qr.has(r)||Zr.test(r)}function D(r){return K(r,"length",at)}function B(r){return!!r&&!Number.isNaN(Number(r))}function he(r){return K(r,"number",B)}function ae(r){return!!r&&Number.isInteger(Number(r))}function Qr(r){return r.endsWith("%")&&B(r.slice(0,-1))}function f(r){return Qe.test(r)}function G(r){return Hr.test(r)}const et=new Set(["length","size","percentage"]);function rt(r){return K(r,et,er)}function tt(r){return K(r,"position",er)}const nt=new Set(["image","url"]);function ot(r){return K(r,nt,lt)}function it(r){return K(r,"",st)}function se(){return!0}function K(r,n,i){const a=Qe.exec(r);return a?a[1]?typeof n=="string"?a[1]===n:n.has(a[1]):i(a[2]):!1}function at(r){return Jr.test(r)}function er(){return!1}function st(r){return Kr.test(r)}function lt(r){return Xr.test(r)}function ct(){const r=R("colors"),n=R("spacing"),i=R("blur"),a=R("brightness"),u=R("borderColor"),l=R("borderRadius"),s=R("borderSpacing"),d=R("borderWidth"),p=R("contrast"),w=R("grayscale"),g=R("hueRotate"),x=R("invert"),T=R("gap"),O=R("gradientColorStops"),F=R("gradientColorStopPositions"),_=R("inset"),P=R("margin"),j=R("opacity"),C=R("padding"),le=R("saturate"),X=R("scale"),ce=R("sepia"),ue=R("skew"),de=R("space"),fe=R("translate"),Z=()=>["auto","contain","none"],Q=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto",f,n],h=()=>[f,n],M=()=>["",L,D],I=()=>["auto",B,f],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Y=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],q=()=>["start","end","center","between","around","evenly","stretch"],W=()=>["","0",f],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[B,he],U=()=>[B,f];return{cacheSize:500,separator:":",theme:{colors:[se],spacing:[L,D],blur:["none","",G,f],brightness:N(),borderColor:[r],borderRadius:["none","","full",G,f],borderSpacing:h(),borderWidth:M(),contrast:N(),grayscale:W(),hueRotate:U(),invert:W(),gap:h(),gradientColorStops:[r],gradientColorStopPositions:[Qr,D],inset:ee(),margin:ee(),opacity:N(),padding:h(),saturate:N(),scale:N(),sepia:W(),skew:U(),space:h(),translate:h()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),f]}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ae,f]}],basis:[{basis:ee()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",ae,f]}],"grid-cols":[{"grid-cols":[se]}],"col-start-end":[{col:["auto",{span:["full",ae,f]},f]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[se]}],"row-start-end":[{row:["auto",{span:[ae,f]},f]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[T]}],"gap-x":[{"gap-x":[T]}],"gap-y":[{"gap-y":[T]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[de]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[de]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",f,n]}],"min-w":[{"min-w":["min","max","fit",f,L]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[G]},G,f]}],h:[{h:[f,n,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",L,f]}],"max-h":[{"max-h":[f,n,"min","max","fit"]}],"font-size":[{text:["base",G,D]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",he]}],"font-family":[{font:[se]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",B,he]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",L,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[j]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",L,D]}],"underline-offset":[{"underline-offset":["auto",L,f]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[j]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),tt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",rt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ot]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[F]}],"gradient-via-pos":[{via:[F]}],"gradient-to-pos":[{to:[F]}],"gradient-from":[{from:[O]}],"gradient-via":[{via:[O]}],"gradient-to":[{to:[O]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[j]}],"border-style":[{border:[...Y(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[j]}],"divide-style":[{divide:Y()}],"border-color":[{border:[u]}],"border-color-x":[{"border-x":[u]}],"border-color-y":[{"border-y":[u]}],"border-color-t":[{"border-t":[u]}],"border-color-r":[{"border-r":[u]}],"border-color-b":[{"border-b":[u]}],"border-color-l":[{"border-l":[u]}],"divide-color":[{divide:[u]}],"outline-style":[{outline:["",...Y()]}],"outline-offset":[{"outline-offset":[L,f]}],"outline-w":[{outline:[L,D]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:M()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[j]}],"ring-offset-w":[{"ring-offset":[L,D]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",G,it]}],"shadow-color":[{shadow:[se]}],opacity:[{opacity:[j]}],"mix-blend":[{"mix-blend":re()}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[a]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",G,f]}],grayscale:[{grayscale:[w]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[x]}],saturate:[{saturate:[le]}],sepia:[{sepia:[ce]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[w]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[j]}],"backdrop-saturate":[{"backdrop-saturate":[le]}],"backdrop-sepia":[{"backdrop-sepia":[ce]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[X]}],"scale-x":[{"scale-x":[X]}],"scale-y":[{"scale-y":[X]}],rotate:[{rotate:[ae,f]}],"translate-x":[{"translate-x":[fe]}],"translate-y":[{"translate-y":[fe]}],"skew-x":[{"skew-x":[ue]}],"skew-y":[{"skew-y":[ue]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[L,D,he]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ut=Br(ct);function dt(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0006 2.25C11.6058 2.25 11.2181 2.35429 10.8766 2.55233C10.5357 2.75 10.253 3.03408 10.0569 3.37589L10.0559 3.37772L1.80731 17.6252C1.61017 17.9667 1.50621 18.354 1.50586 18.7483C1.50551 19.1425 1.60878 19.53 1.80532 19.8718C2.00186 20.2136 2.28477 20.4978 2.62571 20.6958C2.96665 20.8939 3.35365 20.9988 3.74794 21.0002L3.75058 21.0002H20.2506L20.2532 21.0002C20.6475 20.9988 21.0345 20.8939 21.3754 20.6958C21.7164 20.4978 21.9993 20.2136 22.1958 19.8718C22.3924 19.53 22.4956 19.1425 22.4953 18.7483C22.4949 18.354 22.3905 17.9659 22.1934 17.6245L13.9453 3.37772L13.9443 3.37598C13.7482 3.03413 13.4655 2.75002 13.1246 2.55233C12.7831 2.35429 12.3953 2.25 12.0006 2.25ZM12.0006 9.00024C12.4148 9.00024 12.7506 9.33603 12.7506 9.75024V13.5002C12.7506 13.9145 12.4148 14.2502 12.0006 14.2502C11.5864 14.2502 11.2506 13.9145 11.2506 13.5002V9.75024C11.2506 9.33603 11.5864 9.00024 12.0006 9.00024ZM12.0006 18.0002C12.6219 18.0002 13.1256 17.4966 13.1256 16.8752C13.1256 16.2539 12.6219 15.7502 12.0006 15.7502C11.3793 15.7502 10.8756 16.2539 10.8756 16.8752C10.8756 17.4966 11.3793 18.0002 12.0006 18.0002Z",fill:"#CF182E"})})}function ft(){return k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:"fill-inherit",children:[k.jsx("path",{d:"M17.3183 2.68439C17.3771 2.74352 17.4216 2.81149 17.4518 2.884C17.4829 2.95817 17.5 3.03958 17.5 3.125V7.8125C17.5 8.15768 17.2202 8.4375 16.875 8.4375C16.5298 8.4375 16.25 8.15768 16.25 7.8125V4.63388L11.6919 9.19194C11.4479 9.43602 11.0521 9.43602 10.8081 9.19194C10.564 8.94786 10.564 8.55214 10.8081 8.30806L15.3661 3.75H12.1875C11.8423 3.75 11.5625 3.47018 11.5625 3.125C11.5625 2.77982 11.8423 2.5 12.1875 2.5H16.875C17.0469 2.5 17.2026 2.56941 17.3156 2.68173L17.3169 2.68306L17.3183 2.68439Z"}),k.jsx("path",{d:"M3.75 5C3.41848 5 3.10054 5.1317 2.86612 5.36612C2.6317 5.60054 2.5 5.91848 2.5 6.25V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H13.75C14.0815 17.5 14.3995 17.3683 14.6339 17.1339C14.8683 16.8995 15 16.5815 15 16.25V11.25C15 10.9048 14.7202 10.625 14.375 10.625C14.0298 10.625 13.75 10.9048 13.75 11.25V16.25H3.75L3.75 6.25H8.75C9.09518 6.25 9.375 5.97018 9.375 5.625C9.375 5.27982 9.09518 5 8.75 5H3.75Z"})]})}function pt(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9ZM10.5 11.25C10.5 10.8358 10.8358 10.5 11.25 10.5H12C12.4142 10.5 12.75 10.8358 12.75 11.25V15.75C13.1642 15.75 13.5 16.0858 13.5 16.5C13.5 16.9142 13.1642 17.25 12.75 17.25H12C11.5858 17.25 11.25 16.9142 11.25 16.5V12C10.8358 12 10.5 11.6642 10.5 11.25Z",fill:"#3950AD"})})}function bt(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM16.6677 9.2323C16.9536 9.532 16.9424 10.0067 16.6427 10.2927L11.1396 15.5427C10.8496 15.8193 10.3934 15.8191 10.1037 15.5422L7.35684 12.9172C7.05737 12.631 7.0466 12.1563 7.33278 11.8568C7.61895 11.5574 8.0937 11.5466 8.39317 11.8328L10.6223 13.963L15.6073 9.20734C15.907 8.92142 16.3817 8.93259 16.6677 9.2323Z",fill:"#208560"})})}function gt(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V12.75C11.25 13.1642 11.5858 13.5 12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75V7.5ZM13.125 16.125C13.125 16.7463 12.6213 17.25 12 17.25C11.3787 17.25 10.875 16.7463 10.875 16.125C10.875 15.5037 11.3787 15 12 15C12.6213 15 13.125 15.5037 13.125 16.125Z",fill:"#AD7410"})})}function mt(){}let rr=mt;process.env.NODE_ENV!=="production"&&(rr=(r,n)=>{console.warn(`[commaUI: ${r}] ${n}`)});const vt=rr,ht=({name:r})=>{const n=ye.useMemo(()=>{switch(r){case"success":return k.jsx(bt,{});case"info":return k.jsx(pt,{});case"warning":return k.jsx(gt,{});case"error":return k.jsx(dt,{});case"external-link":return k.jsx(ft,{});default:return null}},[r]);return n||vt("Icon","Unknown icon name."),n},yt={success:"bg-cui-success-100 border-cui-success-200",info:"bg-cui-info-100 border-cui-info-200",error:"bg-cui-error-100 border-cui-error-200",warning:"bg-orange-100 border-orange-200"},tr=ye.forwardRef(({type:r,children:n,className:i,...a},u)=>{const s=ut("alert flex items-start gap-2 p-4 border rounded-sm text-cui-text-primary",yt[r],i);return k.jsxs("div",{role:"alert",ref:u,className:s,...a,children:[k.jsx("div",{className:"flex-shrink-0",children:k.jsx(ht,{name:r})}),n]})});tr.displayName="Alert";exports.tailwindConfig=Tr;exports.Alert=tr;exports.Spinner=Mr;
