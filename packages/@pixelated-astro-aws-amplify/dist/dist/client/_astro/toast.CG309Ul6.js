import{j as f}from"./jsx-runtime.D_F4X22H.js";import{r as c}from"./index.Ng8CGsn5.js";import{c as N}from"./utils.DThlx8sR.js";import"./_sentry-release-injection-file.BbQmYuOF.js";import"./_commonjsHelpers.DpM2ndY6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cefc38a4-3201-48eb-b613-38b11b58d6b4",e._sentryDebugIdIdentifier="sentry-dbid-cefc38a4-3201-48eb-b613-38b11b58d6b4")}catch{}})();let F={data:""},H=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||F,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,v=(e,t)=>{let r="",s="",n="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":s+=a[1]=="f"?v(i,a):a+"{"+v(i,a[1]=="k"?"":t)+"}":typeof i=="object"?s+=v(i,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=v.p?v.p(a,i):a+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+s},y={},_=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+_(e[r]);return t}return e},U=(e,t,r,s,n)=>{let a=_(e),i=y[a]||(y[a]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(a));if(!y[i]){let l=a!==e?e:(d=>{let p,g,m=[{}];for(;p=L.exec(d.replace(B,""));)p[4]?m.shift():p[3]?(g=p[3].replace(A," ").trim(),m.unshift(m[0][g]=m[0][g]||{})):m[0][p[1]]=p[2].replace(A," ").trim();return m[0]})(e);y[i]=v(n?{["@keyframes "+i]:l}:l,r?"":"."+i)}let o=r&&y.g?y.g:null;return r&&(y.g=y[i]),((l,d,p,g)=>{g?d.data=d.data.replace(g,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(y[i],t,s,o),i},q=(e,t,r)=>e.reduce((s,n,a)=>{let i=t[a];if(i&&i.call){let o=i(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=l?"."+l:o&&typeof o=="object"?o.props?"":v(o,""):o===!1?"":o}return s+n+(i??"")},"");function C(e){let t=this||{},r=e.call?e(t.p):e;return U(r.unshift?r.raw?q(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,H(t.target),t.g,t.o,t.k)}let P,M,T;C.bind({g:1});let b=C.bind({k:1});function V(e,t,r,s){v.p=t,P=e,M=r,T=s}function x(e,t){let r=this||{};return function(){let s=arguments;function n(a,i){let o=Object.assign({},a),l=o.className||n.className;r.p=Object.assign({theme:M&&M()},o),r.o=/ *go\d+/.test(l),o.className=C.apply(r,s)+(l?" "+l:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),T&&d[0]&&T(o),P(d,o)}return n}}var W=e=>typeof e=="function",z=(e,t)=>W(e)?e(t):e,Y=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Z=20,S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Z)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},O=[],k={toasts:[],pausedAt:void 0},E=e=>{k=S(k,e),O.forEach(t=>{t(k)})},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=(e={})=>{let[t,r]=c.useState(k),s=c.useRef(k);c.useEffect(()=>(s.current!==k&&r(k),O.push(r),()=>{let a=O.indexOf(r);a>-1&&O.splice(a,1)}),[]);let n=t.toasts.map(a=>{var i,o,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((i=e[a.type])==null?void 0:i.removeDelay)||e?.removeDelay,duration:a.duration||((o=e[a.type])==null?void 0:o.duration)||e?.duration||J[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},X=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Y()}),$=e=>(t,r)=>{let s=X(t,e,r);return E({type:2,toast:s}),s.id},u=(e,t)=>$("blank")(e,t);u.error=$("error");u.success=$("success");u.loading=$("loading");u.custom=$("custom");u.dismiss=e=>{E({type:3,toastId:e})};u.remove=e=>E({type:4,toastId:e});u.promise=(e,t,r)=>{let s=u.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?z(t.success,n):void 0;return a?u.success(a,{id:s,...r,...r?.success}):u.dismiss(s),n}).catch(n=>{let a=t.error?z(t.error,n):void 0;a?u.error(a,{id:s,...r,...r?.error}):u.dismiss(s)}),e};var G=(e,t)=>{E({type:1,toast:{id:e,height:t}})},Q=()=>{E({type:5,time:Date.now()})},j=new Map,ee=1e3,te=(e,t=ee)=>{if(j.has(e))return;let r=setTimeout(()=>{j.delete(e),E({type:4,toastId:e})},t);j.set(e,r)},re=e=>{let{toasts:t,pausedAt:r}=K(e);c.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(l<0){o.visible&&u.dismiss(o.id);return}return setTimeout(()=>u.dismiss(o.id),l)});return()=>{i.forEach(o=>o&&clearTimeout(o))}},[t,r]);let s=c.useCallback(()=>{r&&E({type:6,time:Date.now()})},[r]),n=c.useCallback((a,i)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:d}=i||{},p=t.filter(h=>(h.position||d)===(a.position||d)&&h.height),g=p.findIndex(h=>h.id===a.id),m=p.filter((h,I)=>I<g&&h.visible).length;return p.filter(h=>h.visible).slice(...o?[m+1]:[0,m]).reduce((h,I)=>h+(I.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(a=>{if(a.dismissed)te(a.id,a.removeDelay);else{let i=j.get(a.id);i&&(clearTimeout(i),j.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:G,startPause:Q,endPause:s,calculateOffset:n}}},ae=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,se=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,de=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ue=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pe=x("div")`
  position: absolute;
`,me=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,he=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(ge,null,t):t:r==="blank"?null:c.createElement(me,null,c.createElement(le,{...s}),r!=="loading"&&c.createElement(pe,null,r==="error"?c.createElement(ie,{...s}):c.createElement(ue,{...s})))},ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,be=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ve="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",we=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ke=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ee=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=R()?[ve,xe]:[ye(r),be(r)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},je=c.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?Ee(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(he,{toast:e}),i=c.createElement(ke,{...e.ariaProps},z(e.message,e));return c.createElement(we,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:a,message:i}):c.createElement(c.Fragment,null,a,i))});V(c.createElement);var $e=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let a=c.useCallback(i=>{if(i){let o=()=>{let l=i.getBoundingClientRect().height;s(e,l)};o(),new MutationObserver(o).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:a,className:t,style:r},n)},De=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},Ne=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=16,Oe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,containerStyle:a,containerClassName:i})=>{let{toasts:o,handlers:l}=re(r);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none",...a},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(d=>{let p=d.position||t,g=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),m=De(p,g);return c.createElement($e,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ne:"",style:m},d.type==="custom"?z(d.message,d):n?n(d):c.createElement(je,{toast:d,position:p}))}))};const w={duration:3e3,position:"bottom-right"};function Ae({position:e="bottom-right",toastOptions:t,className:r}){return f.jsx(Oe,{position:e,toastOptions:{className:N("bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-md",r),success:{className:N("bg-white dark:bg-gray-800 border-l-4 border-green-500",r),iconTheme:{primary:"#10B981",secondary:"white"}},error:{className:N("bg-white dark:bg-gray-800 border-l-4 border-red-500",r),iconTheme:{primary:"#EF4444",secondary:"white"}},...t}})}const _e={custom:({message:e,icon:t,...r})=>u.custom(s=>f.jsxs("div",{className:N("flex items-center p-4 bg-white dark:bg-gray-800 rounded-md shadow-md","max-w-md w-full",s.visible?"animate-enter":"animate-leave"),children:[t&&f.jsx("div",{className:"flex-shrink-0 mr-3",children:t}),f.jsx("div",{className:"flex-1",children:e}),f.jsx("button",{onClick:()=>u.dismiss(s.id),className:"ml-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none",children:f.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),{...w,...r}),success:(e,t)=>u.success(e,{...w,...t}),error:(e,t)=>u.error(e,{...w,...t}),info:(e,t)=>u(e,{...w,...t,icon:f.jsx("svg",{className:"w-5 h-5 text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),warning:(e,t)=>u(e,{...w,...t,icon:f.jsx("svg",{className:"w-5 h-5 text-yellow-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),loading:(e,t)=>u.loading(e,{...w,...t}),promise:function(t,r,s){return u.promise(t,{loading:r.loading,success:r.success,error:r.error},{...w,...s})},dismiss:e=>{u.dismiss(e)}};export{Ae as Toast,Ae as default,_e as toast};
//# sourceMappingURL=toast.CG309Ul6.js.map
