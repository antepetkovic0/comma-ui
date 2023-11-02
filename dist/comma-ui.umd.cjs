(function(W,N){typeof exports=="object"&&typeof module<"u"?N(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],N):(W=typeof globalThis<"u"?globalThis:W||self,N(W.CommaUI={},W.React))})(this,function(W,N){"use strict";var xe={exports:{}},ee={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function or(){if(Oe)return ee;Oe=1;var r=N,n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(d,p,w){var g,C={},T=null,O=null;w!==void 0&&(T=""+w),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(O=p.ref);for(g in p)a.call(p,g)&&!l.hasOwnProperty(g)&&(C[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)C[g]===void 0&&(C[g]=p[g]);return{$$typeof:n,type:d,key:T,ref:O,props:C,_owner:u.current}}return ee.Fragment=i,ee.jsx=s,ee.jsxs=s,ee}var re={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function ir(){return Me||(Me=1,process.env.NODE_ENV!=="production"&&function(){var r=N,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),F=Symbol.iterator,S="@@iterator";function j(e){if(e===null||typeof e!="object")return null;var t=F&&e[F]||e[S];return typeof t=="function"?t:null}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(e){{for(var t=arguments.length,o=new Array(t>1?t-1:0),c=1;c<t;c++)o[c-1]=arguments[c];de("error",e,o)}}function de(e,t,o){{var c=P.ReactDebugCurrentFrame,v=c.getStackAddendum();v!==""&&(t+="%s",o=o.concat([v]));var y=o.map(function(m){return String(m)});y.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,y)}}var oe=!1,fe=!1,pe=!1,be=!1,ge=!1,q;q=Symbol.for("react.module.reference");function ie(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===l||ge||e===u||e===w||e===g||be||e===O||oe||fe||pe||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===C||e.$$typeof===s||e.$$typeof===d||e.$$typeof===p||e.$$typeof===q||e.getModuleId!==void 0))}function ae(e,t,o){var c=e.displayName;if(c)return c;var v=t.displayName||t.name||"";return v!==""?o+"("+v+")":o}function h(e){return e.displayName||"Context"}function M(e){if(e==null)return null;if(typeof e.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case i:return"Portal";case l:return"Profiler";case u:return"StrictMode";case w:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var t=e;return h(t)+".Consumer";case s:var o=e;return h(o._context)+".Provider";case p:return ae(e,e.render,"ForwardRef");case C:var c=e.displayName||null;return c!==null?c:M(e.type)||"Memo";case T:{var v=e,y=v._payload,m=v._init;try{return M(m(y))}catch{return null}}}return null}var I=Object.assign,$=0,Z,se,K,U,le,Y,H;function $e(){}$e.__reactDisabledLog=!0;function Jr(){{if($===0){Z=console.log,se=console.info,K=console.warn,U=console.error,le=console.group,Y=console.groupCollapsed,H=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function qr(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:Z}),info:I({},e,{value:se}),warn:I({},e,{value:K}),error:I({},e,{value:U}),group:I({},e,{value:le}),groupCollapsed:I({},e,{value:Y}),groupEnd:I({},e,{value:H})})}$<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ee=P.ReactCurrentDispatcher,_e;function me(e,t,o){{if(_e===void 0)try{throw Error()}catch(v){var c=v.stack.trim().match(/\n( *(at )?)/);_e=c&&c[1]||""}return`
`+_e+e}}var Se=!1,ve;{var Kr=typeof WeakMap=="function"?WeakMap:Map;ve=new Kr}function Ue(e,t){if(!e||Se)return"";{var o=ve.get(e);if(o!==void 0)return o}var c;Se=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=Ee.current,Ee.current=null,Jr();try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(V){c=V}Reflect.construct(e,[],m)}else{try{m.call()}catch(V){c=V}e.call(m.prototype)}}else{try{throw Error()}catch(V){c=V}e()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var b=V.stack.split(`
`),A=c.stack.split(`
`),E=b.length-1,k=A.length-1;E>=1&&k>=0&&b[E]!==A[k];)k--;for(;E>=1&&k>=0;E--,k--)if(b[E]!==A[k]){if(E!==1||k!==1)do if(E--,k--,k<0||b[E]!==A[k]){var z=`
`+b[E].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),typeof e=="function"&&ve.set(e,z),z}while(E>=1&&k>=0);break}}}finally{Se=!1,Ee.current=y,qr(),Error.prepareStackTrace=v}var Q=e?e.displayName||e.name:"",nr=Q?me(Q):"";return typeof e=="function"&&ve.set(e,nr),nr}function Xr(e,t,o){return Ue(e,!1)}function Qr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function he(e,t,o){if(e==null)return"";if(typeof e=="function")return Ue(e,Qr(e));if(typeof e=="string")return me(e);switch(e){case w:return me("Suspense");case g:return me("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return Xr(e.render);case C:return he(e.type,t,o);case T:{var c=e,v=c._payload,y=c._init;try{return he(y(v),t,o)}catch{}}}return""}var ye=Object.prototype.hasOwnProperty,Ye={},Be=P.ReactDebugCurrentFrame;function we(e){if(e){var t=e._owner,o=he(e.type,e._source,t?t.type:null);Be.setExtraStackFrame(o)}else Be.setExtraStackFrame(null)}function et(e,t,o,c,v){{var y=Function.call.bind(ye);for(var m in e)if(y(e,m)){var b=void 0;try{if(typeof e[m]!="function"){var A=Error((c||"React class")+": "+o+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}b=e[m](t,m,c,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(E){b=E}b&&!(b instanceof Error)&&(we(v),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",o,m,typeof b),we(null)),b instanceof Error&&!(b.message in Ye)&&(Ye[b.message]=!0,we(v),R("Failed %s type: %s",o,b.message),we(null))}}}var rt=Array.isArray;function ke(e){return rt(e)}function tt(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,o=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function nt(e){try{return Ze(e),!1}catch{return!0}}function Ze(e){return""+e}function He(e){if(nt(e))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tt(e)),Ze(e)}var ce=P.ReactCurrentOwner,ot={key:!0,ref:!0,__self:!0,__source:!0},Je,qe,Te;Te={};function it(e){if(ye.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function at(e){if(ye.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function st(e,t){if(typeof e.ref=="string"&&ce.current&&t&&ce.current.stateNode!==t){var o=M(ce.current.type);Te[o]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',M(ce.current.type),e.ref),Te[o]=!0)}}function lt(e,t){{var o=function(){Je||(Je=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function ct(e,t){{var o=function(){qe||(qe=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var ut=function(e,t,o,c,v,y,m){var b={$$typeof:n,type:e,key:t,ref:o,props:m,_owner:y};return b._store={},Object.defineProperty(b._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(b,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(b,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(b.props),Object.freeze(b)),b};function dt(e,t,o,c,v){{var y,m={},b=null,A=null;o!==void 0&&(He(o),b=""+o),at(t)&&(He(t.key),b=""+t.key),it(t)&&(A=t.ref,st(t,v));for(y in t)ye.call(t,y)&&!ot.hasOwnProperty(y)&&(m[y]=t[y]);if(e&&e.defaultProps){var E=e.defaultProps;for(y in E)m[y]===void 0&&(m[y]=E[y])}if(b||A){var k=typeof e=="function"?e.displayName||e.name||"Unknown":e;b&&lt(m,k),A&&ct(m,k)}return ut(e,b,A,v,c,ce.current,m)}}var je=P.ReactCurrentOwner,Ke=P.ReactDebugCurrentFrame;function X(e){if(e){var t=e._owner,o=he(e.type,e._source,t?t.type:null);Ke.setExtraStackFrame(o)}else Ke.setExtraStackFrame(null)}var Pe;Pe=!1;function Ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function Xe(){{if(je.current){var e=M(je.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ft(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),o=e.lineNumber;return`

Check your code at `+t+":"+o+"."}return""}}var Qe={};function pt(e){{var t=Xe();if(!t){var o=typeof e=="string"?e:e.displayName||e.name;o&&(t=`

Check the top-level render call using <`+o+">.")}return t}}function er(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=pt(t);if(Qe[o])return;Qe[o]=!0;var c="";e&&e._owner&&e._owner!==je.current&&(c=" It was passed a child from "+M(e._owner.type)+"."),X(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,c),X(null)}}function rr(e,t){{if(typeof e!="object")return;if(ke(e))for(var o=0;o<e.length;o++){var c=e[o];Ae(c)&&er(c,t)}else if(Ae(e))e._store&&(e._store.validated=!0);else if(e){var v=j(e);if(typeof v=="function"&&v!==e.entries)for(var y=v.call(e),m;!(m=y.next()).done;)Ae(m.value)&&er(m.value,t)}}}function bt(e){{var t=e.type;if(t==null||typeof t=="string")return;var o;if(typeof t=="function")o=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===p||t.$$typeof===C))o=t.propTypes;else return;if(o){var c=M(t);et(o,e.props,"prop",c,e)}else if(t.PropTypes!==void 0&&!Pe){Pe=!0;var v=M(t);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gt(e){{for(var t=Object.keys(e.props),o=0;o<t.length;o++){var c=t[o];if(c!=="children"&&c!=="key"){X(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),X(null);break}}e.ref!==null&&(X(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),X(null))}}function tr(e,t,o,c,v,y){{var m=ie(e);if(!m){var b="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var A=ft(v);A?b+=A:b+=Xe();var E;e===null?E="null":ke(e)?E="array":e!==void 0&&e.$$typeof===n?(E="<"+(M(e.type)||"Unknown")+" />",b=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,b)}var k=dt(e,t,o,v,y);if(k==null)return k;if(m){var z=t.children;if(z!==void 0)if(c)if(ke(z)){for(var Q=0;Q<z.length;Q++)rr(z[Q],e);Object.freeze&&Object.freeze(z)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else rr(z,e)}return e===a?gt(k):bt(k),k}}function mt(e,t,o){return tr(e,t,o,!0)}function vt(e,t,o){return tr(e,t,o,!1)}var ht=vt,yt=mt;re.Fragment=a,re.jsx=ht,re.jsxs=yt}()),re}process.env.NODE_ENV==="production"?xe.exports=or():xe.exports=ir();var _=xe.exports;const ar={small:"w-4 h-4 border-2",medium:"w-8 h-8 border-4",large:"w-16 h-16 border-8"},sr={default:"border-cui-astral-primary/30 border-t-cui-astral-primary",invert:"border-[#c4c4c2]/30 border-t-white"},lr=({size:r="medium",appearance:n="default"})=>{const a=`rounded-full animate-spin ${ar[r]} ${sr[n]}`;return _.jsx("div",{className:a})},Ce="-";function cr(r){const n=dr(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=r;function u(s){const d=s.split(Ce);return d[0]===""&&d.length!==1&&d.shift(),Ie(d,n)||ur(s)}function l(s,d){const p=i[s]||[];return d&&a[s]?[...p,...a[s]]:p}return{getClassGroupId:u,getConflictingClassGroupIds:l}}function Ie(r,n){var s;if(r.length===0)return n.classGroupId;const i=r[0],a=n.nextPart.get(i),u=a?Ie(r.slice(1),a):void 0;if(u)return u;if(n.validators.length===0)return;const l=r.join(Ce);return(s=n.validators.find(({validator:d})=>d(l)))==null?void 0:s.classGroupId}const ze=/^\[(.+)\]$/;function ur(r){if(ze.test(r)){const n=ze.exec(r)[1],i=n==null?void 0:n.substring(0,n.indexOf(":"));if(i)return"arbitrary.."+i}}function dr(r){const{theme:n,prefix:i}=r,a={nextPart:new Map,validators:[]};return pr(Object.entries(r.classGroups),i).forEach(([l,s])=>{Re(s,a,l,n)}),a}function Re(r,n,i,a){r.forEach(u=>{if(typeof u=="string"){const l=u===""?n:Le(n,u);l.classGroupId=i;return}if(typeof u=="function"){if(fr(u)){Re(u(a),n,i,a);return}n.validators.push({validator:u,classGroupId:i});return}Object.entries(u).forEach(([l,s])=>{Re(s,Le(n,l),i,a)})})}function Le(r,n){let i=r;return n.split(Ce).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i}function fr(r){return r.isThemeGetter}function pr(r,n){return n?r.map(([i,a])=>{const u=a.map(l=>typeof l=="string"?n+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([s,d])=>[n+s,d])):l);return[i,u]}):r}function br(r){if(r<1)return{get:()=>{},set:()=>{}};let n=0,i=new Map,a=new Map;function u(l,s){i.set(l,s),n++,n>r&&(n=0,a=i,i=new Map)}return{get(l){let s=i.get(l);if(s!==void 0)return s;if((s=a.get(l))!==void 0)return u(l,s),s},set(l,s){i.has(l)?i.set(l,s):u(l,s)}}}const Fe="!";function gr(r){const n=r.separator,i=n.length===1,a=n[0],u=n.length;return function(s){const d=[];let p=0,w=0,g;for(let S=0;S<s.length;S++){let j=s[S];if(p===0){if(j===a&&(i||s.slice(S,S+u)===n)){d.push(s.slice(w,S)),w=S+u;continue}if(j==="/"){g=S;continue}}j==="["?p++:j==="]"&&p--}const C=d.length===0?s:s.substring(w),T=C.startsWith(Fe),O=T?C.substring(1):C,F=g&&g>w?g-w:void 0;return{modifiers:d,hasImportantModifier:T,baseClassName:O,maybePostfixModifierPosition:F}}}function mr(r){if(r.length<=1)return r;const n=[];let i=[];return r.forEach(a=>{a[0]==="["?(n.push(...i.sort(),a),i=[]):i.push(a)}),n.push(...i.sort()),n}function vr(r){return{cache:br(r.cacheSize),splitModifiers:gr(r),...cr(r)}}const hr=/\s+/;function yr(r,n){const{splitModifiers:i,getClassGroupId:a,getConflictingClassGroupIds:u}=n,l=new Set;return r.trim().split(hr).map(s=>{const{modifiers:d,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:g}=i(s);let C=a(g?w.substring(0,g):w),T=!!g;if(!C){if(!g)return{isTailwindClass:!1,originalClassName:s};if(C=a(w),!C)return{isTailwindClass:!1,originalClassName:s};T=!1}const O=mr(d).join(":");return{isTailwindClass:!0,modifierId:p?O+Fe:O,classGroupId:C,originalClassName:s,hasPostfixModifier:T}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:d,classGroupId:p,hasPostfixModifier:w}=s,g=d+p;return l.has(g)?!1:(l.add(g),u(p,w).forEach(C=>l.add(d+C)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function wr(){let r=0,n,i,a="";for(;r<arguments.length;)(n=arguments[r++])&&(i=Ve(n))&&(a&&(a+=" "),a+=i);return a}function Ve(r){if(typeof r=="string")return r;let n,i="";for(let a=0;a<r.length;a++)r[a]&&(n=Ve(r[a]))&&(i&&(i+=" "),i+=n);return i}function xr(r,...n){let i,a,u,l=s;function s(p){const w=n.reduce((g,C)=>C(g),r());return i=vr(w),a=i.cache.get,u=i.cache.set,l=d,d(p)}function d(p){const w=a(p);if(w)return w;const g=yr(p,i);return u(p,g),g}return function(){return l(wr.apply(null,arguments))}}function x(r){const n=i=>i[r]||[];return n.isThemeGetter=!0,n}const We=/^\[(?:([a-z-]+):)?(.+)\]$/i,Cr=/^\d+\/\d+$/,Rr=new Set(["px","full","screen"]),Er=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_r=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Sr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function L(r){return B(r)||Rr.has(r)||Cr.test(r)}function D(r){return J(r,"length",zr)}function B(r){return!!r&&!Number.isNaN(Number(r))}function ue(r){return J(r,"number",B)}function te(r){return!!r&&Number.isInteger(Number(r))}function Tr(r){return r.endsWith("%")&&B(r.slice(0,-1))}function f(r){return We.test(r)}function G(r){return Er.test(r)}const jr=new Set(["length","size","percentage"]);function Pr(r){return J(r,jr,Ne)}function Ar(r){return J(r,"position",Ne)}const Or=new Set(["image","url"]);function Mr(r){return J(r,Or,Fr)}function Ir(r){return J(r,"",Lr)}function ne(){return!0}function J(r,n,i){const a=We.exec(r);return a?a[1]?typeof n=="string"?a[1]===n:n.has(a[1]):i(a[2]):!1}function zr(r){return _r.test(r)}function Ne(){return!1}function Lr(r){return Sr.test(r)}function Fr(r){return kr.test(r)}function Vr(){const r=x("colors"),n=x("spacing"),i=x("blur"),a=x("brightness"),u=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),d=x("borderWidth"),p=x("contrast"),w=x("grayscale"),g=x("hueRotate"),C=x("invert"),T=x("gap"),O=x("gradientColorStops"),F=x("gradientColorStopPositions"),S=x("inset"),j=x("margin"),P=x("opacity"),R=x("padding"),de=x("saturate"),oe=x("scale"),fe=x("sepia"),pe=x("skew"),be=x("space"),ge=x("translate"),q=()=>["auto","contain","none"],ie=()=>["auto","hidden","clip","visible","scroll"],ae=()=>["auto",f,n],h=()=>[f,n],M=()=>["",L,D],I=()=>["auto",B,f],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],K=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",f],le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[B,ue],H=()=>[B,f];return{cacheSize:500,separator:":",theme:{colors:[ne],spacing:[L,D],blur:["none","",G,f],brightness:Y(),borderColor:[r],borderRadius:["none","","full",G,f],borderSpacing:h(),borderWidth:M(),contrast:Y(),grayscale:U(),hueRotate:H(),invert:U(),gap:h(),gradientColorStops:[r],gradientColorStopPositions:[Tr,D],inset:ae(),margin:ae(),opacity:Y(),padding:h(),saturate:Y(),scale:Y(),sepia:U(),skew:H(),space:h(),translate:h()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),f]}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",te,f]}],basis:[{basis:ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",te,f]}],"grid-cols":[{"grid-cols":[ne]}],"col-start-end":[{col:["auto",{span:["full",te,f]},f]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[ne]}],"row-start-end":[{row:["auto",{span:[te,f]},f]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[T]}],"gap-x":[{"gap-x":[T]}],"gap-y":[{"gap-y":[T]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[j]}],mx:[{mx:[j]}],my:[{my:[j]}],ms:[{ms:[j]}],me:[{me:[j]}],mt:[{mt:[j]}],mr:[{mr:[j]}],mb:[{mb:[j]}],ml:[{ml:[j]}],"space-x":[{"space-x":[be]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[be]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",f,n]}],"min-w":[{"min-w":["min","max","fit",f,L]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[G]},G,f]}],h:[{h:[f,n,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",L,f]}],"max-h":[{"max-h":[f,n,"min","max","fit"]}],"font-size":[{text:["base",G,D]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ue]}],"font-family":[{font:[ne]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",B,ue]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",L,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[P]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",L,D]}],"underline-offset":[{"underline-offset":["auto",L,f]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[P]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),Ar]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Pr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Mr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[F]}],"gradient-via-pos":[{via:[F]}],"gradient-to-pos":[{to:[F]}],"gradient-from":[{from:[O]}],"gradient-via":[{via:[O]}],"gradient-to":[{to:[O]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[P]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[P]}],"divide-style":[{divide:Z()}],"border-color":[{border:[u]}],"border-color-x":[{"border-x":[u]}],"border-color-y":[{"border-y":[u]}],"border-color-t":[{"border-t":[u]}],"border-color-r":[{"border-r":[u]}],"border-color-b":[{"border-b":[u]}],"border-color-l":[{"border-l":[u]}],"divide-color":[{divide:[u]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[L,f]}],"outline-w":[{outline:[L,D]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:M()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[P]}],"ring-offset-w":[{"ring-offset":[L,D]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",G,Ir]}],"shadow-color":[{shadow:[ne]}],opacity:[{opacity:[P]}],"mix-blend":[{"mix-blend":se()}],"bg-blend":[{"bg-blend":se()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[a]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",G,f]}],grayscale:[{grayscale:[w]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[C]}],saturate:[{saturate:[de]}],sepia:[{sepia:[fe]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[w]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[C]}],"backdrop-opacity":[{"backdrop-opacity":[P]}],"backdrop-saturate":[{"backdrop-saturate":[de]}],"backdrop-sepia":[{"backdrop-sepia":[fe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[oe]}],"scale-x":[{"scale-x":[oe]}],"scale-y":[{"scale-y":[oe]}],rotate:[{rotate:[te,f]}],"translate-x":[{"translate-x":[ge]}],"translate-y":[{"translate-y":[ge]}],"skew-x":[{"skew-x":[pe]}],"skew-y":[{"skew-y":[pe]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[L,D,ue]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Wr=xr(Vr);function Nr(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0006 2.25C11.6058 2.25 11.2181 2.35429 10.8766 2.55233C10.5357 2.75 10.253 3.03408 10.0569 3.37589L10.0559 3.37772L1.80731 17.6252C1.61017 17.9667 1.50621 18.354 1.50586 18.7483C1.50551 19.1425 1.60878 19.53 1.80532 19.8718C2.00186 20.2136 2.28477 20.4978 2.62571 20.6958C2.96665 20.8939 3.35365 20.9988 3.74794 21.0002L3.75058 21.0002H20.2506L20.2532 21.0002C20.6475 20.9988 21.0345 20.8939 21.3754 20.6958C21.7164 20.4978 21.9993 20.2136 22.1958 19.8718C22.3924 19.53 22.4956 19.1425 22.4953 18.7483C22.4949 18.354 22.3905 17.9659 22.1934 17.6245L13.9453 3.37772L13.9443 3.37598C13.7482 3.03413 13.4655 2.75002 13.1246 2.55233C12.7831 2.35429 12.3953 2.25 12.0006 2.25ZM12.0006 9.00024C12.4148 9.00024 12.7506 9.33603 12.7506 9.75024V13.5002C12.7506 13.9145 12.4148 14.2502 12.0006 14.2502C11.5864 14.2502 11.2506 13.9145 11.2506 13.5002V9.75024C11.2506 9.33603 11.5864 9.00024 12.0006 9.00024ZM12.0006 18.0002C12.6219 18.0002 13.1256 17.4966 13.1256 16.8752C13.1256 16.2539 12.6219 15.7502 12.0006 15.7502C11.3793 15.7502 10.8756 16.2539 10.8756 16.8752C10.8756 17.4966 11.3793 18.0002 12.0006 18.0002Z",fill:"#CF182E"})})}function Dr(){return _.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:"fill-inherit",children:[_.jsx("path",{d:"M17.3183 2.68439C17.3771 2.74352 17.4216 2.81149 17.4518 2.884C17.4829 2.95817 17.5 3.03958 17.5 3.125V7.8125C17.5 8.15768 17.2202 8.4375 16.875 8.4375C16.5298 8.4375 16.25 8.15768 16.25 7.8125V4.63388L11.6919 9.19194C11.4479 9.43602 11.0521 9.43602 10.8081 9.19194C10.564 8.94786 10.564 8.55214 10.8081 8.30806L15.3661 3.75H12.1875C11.8423 3.75 11.5625 3.47018 11.5625 3.125C11.5625 2.77982 11.8423 2.5 12.1875 2.5H16.875C17.0469 2.5 17.2026 2.56941 17.3156 2.68173L17.3169 2.68306L17.3183 2.68439Z"}),_.jsx("path",{d:"M3.75 5C3.41848 5 3.10054 5.1317 2.86612 5.36612C2.6317 5.60054 2.5 5.91848 2.5 6.25V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H13.75C14.0815 17.5 14.3995 17.3683 14.6339 17.1339C14.8683 16.8995 15 16.5815 15 16.25V11.25C15 10.9048 14.7202 10.625 14.375 10.625C14.0298 10.625 13.75 10.9048 13.75 11.25V16.25H3.75L3.75 6.25H8.75C9.09518 6.25 9.375 5.97018 9.375 5.625C9.375 5.27982 9.09518 5 8.75 5H3.75Z"})]})}function Gr(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9ZM10.5 11.25C10.5 10.8358 10.8358 10.5 11.25 10.5H12C12.4142 10.5 12.75 10.8358 12.75 11.25V15.75C13.1642 15.75 13.5 16.0858 13.5 16.5C13.5 16.9142 13.1642 17.25 12.75 17.25H12C11.5858 17.25 11.25 16.9142 11.25 16.5V12C10.8358 12 10.5 11.6642 10.5 11.25Z",fill:"#3950AD"})})}function $r(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM16.6677 9.2323C16.9536 9.532 16.9424 10.0067 16.6427 10.2927L11.1396 15.5427C10.8496 15.8193 10.3934 15.8191 10.1037 15.5422L7.35684 12.9172C7.05737 12.631 7.0466 12.1563 7.33278 11.8568C7.61895 11.5574 8.0937 11.5466 8.39317 11.8328L10.6223 13.963L15.6073 9.20734C15.907 8.92142 16.3817 8.93259 16.6677 9.2323Z",fill:"#208560"})})}function Ur(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V12.75C11.25 13.1642 11.5858 13.5 12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75V7.5ZM13.125 16.125C13.125 16.7463 12.6213 17.25 12 17.25C11.3787 17.25 10.875 16.7463 10.875 16.125C10.875 15.5037 11.3787 15 12 15C12.6213 15 13.125 15.5037 13.125 16.125Z",fill:"#AD7410"})})}function Yr(){}let De=Yr;process.env.NODE_ENV!=="production"&&(De=(r,n)=>{console.warn(`[commaUI: ${r}] ${n}`)});const Br=De,Zr=({name:r})=>{const n=N.useMemo(()=>{switch(r){case"success":return _.jsx($r,{});case"info":return _.jsx(Gr,{});case"warning":return _.jsx(Ur,{});case"error":return _.jsx(Nr,{});case"external-link":return _.jsx(Dr,{});default:return null}},[r]);return n||Br("Icon","Unknown icon name."),n},Hr={success:"bg-cui-success-100 border-cui-success-200",info:"bg-cui-info-100 border-cui-info-200",error:"bg-cui-error-100 border-cui-error-200",warning:"bg-cui-warning-100 border-cui-warning-200"},Ge=N.forwardRef(({type:r,children:n,className:i,...a},u)=>{const s=Wr("flex items-start gap-2 p-4 border rounded-sm text-cui-text-primary",Hr[r],i);return _.jsxs("div",{role:"alert",ref:u,className:s,...a,children:[_.jsx("div",{className:"flex-shrink-0",children:_.jsx(Zr,{name:r})}),n]})});Ge.displayName="Alert",W.Alert=Ge,W.Spinner=lr,Object.defineProperty(W,Symbol.toStringTag,{value:"Module"})});
