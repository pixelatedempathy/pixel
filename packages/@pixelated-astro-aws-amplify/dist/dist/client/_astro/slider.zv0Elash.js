import{j as c}from"./jsx-runtime.49P_DVFQ.js";import{R as h}from"./index.BCc9JDCY.js";import"./_sentry-release-injection-file.CgPhol5v.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="caf0fbce-4ccd-4a11-9d05-78a320d76784",e._sentryDebugIdIdentifier="sentry-dbid-caf0fbce-4ccd-4a11-9d05-78a320d76784")}catch{}})();const v=({value:e,defaultValue:r=[0],min:t=0,max:n=100,step:i=1,disabled:l=!1,orientation:d="horizontal",onValueChange:u,className:f=""})=>{const[p,b]=h.useState(e||r),a=(e||p)[0]||0,g=y=>{const o=[Number(y.target.value)];e||b(o),u?.(o)},s=d==="vertical";return c.jsx("div",{className:`relative ${s?"h-32 w-6":"w-full h-6"} ${f}`,children:c.jsx("input",{type:"range",min:t,max:n,step:i,value:a,disabled:l,onChange:g,className:`
          appearance-none bg-transparent cursor-pointer slider-input
          ${s?"slider-vertical":"w-full h-2"}
          ${l?"opacity-50 cursor-not-allowed":""}
        `,style:{background:`linear-gradient(to ${s?"top":"right"}, 
            #3b82f6 0%, #3b82f6 ${(a-t)/(n-t)*100}%, 
            #e5e7eb ${(a-t)/(n-t)*100}%, #e5e7eb 100%)`}})})};export{v as S};
