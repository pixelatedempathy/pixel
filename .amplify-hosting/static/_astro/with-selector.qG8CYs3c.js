import{g as M}from"./_commonjsHelpers.BWppomEC.js";import"./_sentry-release-injection-file.3sYSCMGY.js";import{a as z}from"./index.BfFcDxnX.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new r.Error().stack;s&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[s]="3a6d33d9-816b-48a6-94a2-69cd11d2d382",r._sentryDebugIdIdentifier="sentry-dbid-3a6d33d9-816b-48a6-94a2-69cd11d2d382")}catch{}})();var w={exports:{}},g={},_={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V;function U(){if(V)return R;V=1;var r=z();function s(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var v=typeof Object.is=="function"?Object.is:s,y=r.useState,p=r.useEffect,h=r.useLayoutEffect,b=r.useDebugValue;function E(e,t){var n=t(),o=y({inst:{value:n,getSnapshot:t}}),u=o[0].inst,c=o[1];return h(function(){u.value=n,u.getSnapshot=t,l(u)&&c({inst:u})},[e,n,t]),p(function(){return l(u)&&c({inst:u}),e(function(){l(u)&&c({inst:u})})},[e]),b(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!v(e,n)}catch{return!0}}function i(e,t){return t()}var a=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:E;return R.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:a,R}var q;function k(){return q||(q=1,_.exports=U()),_.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function C(){if(W)return g;W=1;var r=z(),s=k();function v(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var y=typeof Object.is=="function"?Object.is:v,p=s.useSyncExternalStore,h=r.useRef,b=r.useEffect,E=r.useMemo,l=r.useDebugValue;return g.useSyncExternalStoreWithSelector=function(i,a,e,t,n){var o=h(null);if(o.current===null){var u={hasValue:!1,value:null};o.current=u}else u=o.current;o=E(function(){function x(f){if(!D){if(D=!0,S=f,f=t(f),n!==void 0&&u.hasValue){var d=u.value;if(n(d,f))return m=d}return m=f}if(d=m,y(S,f))return d;var j=t(f);return n!==void 0&&n(d,j)?(S=f,d):(S=f,m=j)}var D=!1,S,m,I=e===void 0?null:e;return[function(){return x(a())},I===null?void 0:function(){return x(I())}]},[a,e,t,n]);var c=p(i,o[0],o[1]);return b(function(){u.hasValue=!0,u.value=c},[c]),l(c),c},g}var O;function G(){return O||(O=1,w.exports=C()),w.exports}var L=G();const A=M(L);export{A as u,L as w};
