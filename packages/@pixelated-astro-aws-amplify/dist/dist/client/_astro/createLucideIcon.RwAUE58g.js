import{r as s}from"./index.Ng8CGsn5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c8d9c152-c95f-48ff-ab1a-d3d2374cd084",e._sentryDebugIdIdentifier="sentry-dbid-c8d9c152-c95f-48ff-ab1a-d3d2374cd084")}catch{}})();/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),d=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),g=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:l,...c},f)=>s.createElement("svg",{ref:f,...m,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:i("lucide",n),...!a&&!g(c)&&{"aria-hidden":"true"},...c},[...l.map(([u,p])=>s.createElement(u,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const r=s.forwardRef(({className:o,...n},a)=>s.createElement(y,{ref:a,iconNode:t,className:i(`lucide-${w(d(e))}`,`lucide-${e}`,o),...n}));return r.displayName=d(e),r};export{C as c};
//# sourceMappingURL=createLucideIcon.RwAUE58g.js.map
