import"./_sentry-release-injection-file.3sYSCMGY.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="01e9e56c-8397-43e2-99d0-6a3d0eb3f69f",t._sentryDebugIdIdentifier="sentry-dbid-01e9e56c-8397-43e2-99d0-6a3d0eb3f69f")}catch{}})();function r(t){const s=o();s.push({...t,id:Date.now()}),localStorage.setItem("compatibility-issues",JSON.stringify(s)),n()}function a(t){const e=o().filter(i=>i.id!==t);localStorage.setItem("compatibility-issues",JSON.stringify(e)),n()}function n(){const t=o(),s=document.getElementById("issues-container");if(s){if(t.length===0){s.innerHTML="<p>No issues reported yet.</p>";return}s.innerHTML=t.map(e=>`
    <div class="issue-item">
      <div class="issue-header">
        <span class="issue-title">${e.component} - ${e.browser}</span>
        <span class="issue-severity ${e.severity}">${e.severity}</span>
      </div>
      <p class="issue-description">${e.description}</p>
      <button
        class="btn btn-danger btn-sm"
        onclick="window.compatibilityTesting.removeIssue(${e.id})"
        aria-label="Remove issue for ${e.component} in ${e.browser}"
      >
        Remove
      </button>
    </div>
  `).join("")}}function o(){return JSON.parse(localStorage.getItem("compatibility-issues")||"[]")}window.compatibilityTesting={removeIssue:a};localStorage.getItem("compatibility-issues")||localStorage.setItem("compatibility-issues","[]");const c=document.getElementById("compatibility-form");c?.addEventListener("submit",t=>{t.preventDefault();const s=t.target,e=new FormData(s),i={browser:e.get("browser"),component:e.get("component"),description:e.get("issue"),severity:e.get("severity"),timestamp:new Date().toISOString()};r(i),s.reset()});n();
