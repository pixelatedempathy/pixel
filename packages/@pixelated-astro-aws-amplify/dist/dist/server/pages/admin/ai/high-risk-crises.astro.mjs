;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="87f0ae29-a3b7-48fc-9374-dd828ee035f5",e._sentryDebugIdIdentifier="sentry-dbid-87f0ae29-a3b7-48fc-9374-dd828ee035f5")}catch(e){}}();/* empty css                                                */
/* empty css                                       */
import '../../../chunks/sentry.server.config_CxC0uPLd.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Ck5BzePu.mjs';
import { r as requirePermission } from '../../../chunks/access-control_D-d2-rFY.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BKh1dVJn.mjs';
/* empty css                                                  */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$HighRiskCrises = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HighRiskCrises;
  const checkPermission = requirePermission("read:admin");
  const permissionResponse = await checkPermission({
    cookies: Astro2.cookies,
    redirect: Astro2.redirect
  });
  if (permissionResponse) {
    return permissionResponse;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "High-Risk Crisis Detections", "data-astro-cid-7n7iy5di": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-container" data-astro-cid-7n7iy5di> <div class="admin-header" data-astro-cid-7n7iy5di> <h1 data-astro-cid-7n7iy5di>High-Risk Crisis Detections</h1> <p data-astro-cid-7n7iy5di>
Review and manage high-risk crisis detections identified by the AI
        system.
</p> </div> <div class="admin-actions" data-astro-cid-7n7iy5di> <a href="/admin" class="btn btn-secondary" data-astro-cid-7n7iy5di>Back to Admin Dashboard</a> <div class="action-buttons" data-astro-cid-7n7iy5di> <button id="refresh-btn" class="btn btn-primary" data-astro-cid-7n7iy5di>Refresh Data</button> </div> </div> <div class="alert alert-warning" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Important:</strong> High-risk detections require immediate attention.
      Review each case carefully and follow the crisis response protocol.
</div> <div class="data-table-container" data-astro-cid-7n7iy5di> <div class="table-header" data-astro-cid-7n7iy5di> <h2 data-astro-cid-7n7iy5di>Crisis Detections</h2> <div class="pagination" data-astro-cid-7n7iy5di> <button id="prev-page" class="btn btn-sm btn-outline" disabled data-astro-cid-7n7iy5di>Previous</button> <span id="page-info" data-astro-cid-7n7iy5di>Page 1</span> <button id="next-page" class="btn btn-sm btn-outline" data-astro-cid-7n7iy5di>Next</button> </div> </div> <table class="data-table" id="crisis-table" data-astro-cid-7n7iy5di> <thead data-astro-cid-7n7iy5di> <tr data-astro-cid-7n7iy5di> <th data-astro-cid-7n7iy5di>Date</th> <th data-astro-cid-7n7iy5di>User</th> <th data-astro-cid-7n7iy5di>Risk Level</th> <th data-astro-cid-7n7iy5di>Crisis Type</th> <th data-astro-cid-7n7iy5di>Confidence</th> <th data-astro-cid-7n7iy5di>Text</th> <th data-astro-cid-7n7iy5di>Actions</th> </tr> </thead> <tbody data-astro-cid-7n7iy5di> <tr data-astro-cid-7n7iy5di> <td colspan="7" class="loading-row" data-astro-cid-7n7iy5di>Loading data...</td> </tr> </tbody> </table> </div> <!-- Crisis Details Modal --> <div id="crisis-modal" class="modal" data-astro-cid-7n7iy5di> <div class="modal-content" data-astro-cid-7n7iy5di> <div class="modal-header" data-astro-cid-7n7iy5di> <h2 data-astro-cid-7n7iy5di>Crisis Detection Details</h2> <button class="close-btn" data-astro-cid-7n7iy5di>&times;</button> </div> <div class="modal-body" data-astro-cid-7n7iy5di> <div id="crisis-details" data-astro-cid-7n7iy5di> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Date:</strong> <span id="detail-date" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>User ID:</strong> <span id="detail-user" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Risk Level:</strong> <span id="detail-risk" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Crisis Type:</strong> <span id="detail-type" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Confidence:</strong> <span id="detail-confidence" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Model:</strong> <span id="detail-model" data-astro-cid-7n7iy5di></span> </div> <div class="detail-row full-width" data-astro-cid-7n7iy5di> <strong data-astro-cid-7n7iy5di>Text:</strong> <div id="detail-text" class="detail-text" data-astro-cid-7n7iy5di></div> </div> </div> <div class="modal-actions" data-astro-cid-7n7iy5di> <button id="mark-reviewed-btn" class="btn btn-primary" data-astro-cid-7n7iy5di>Mark as Reviewed</button> <button id="escalate-btn" class="btn btn-danger" data-astro-cid-7n7iy5di>Escalate</button> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/ai/high-risk-crises.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/admin/ai/high-risk-crises.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/ai/high-risk-crises.astro";
const $$url = "/admin/ai/high-risk-crises";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HighRiskCrises,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
