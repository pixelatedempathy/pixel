;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4a7ac5c-944a-42c7-8fe2-cb6da424fd92",e._sentryDebugIdIdentifier="sentry-dbid-d4a7ac5c-944a-42c7-8fe2-cb6da424fd92")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { r as requirePermission } from '../../chunks/access-control_BvpmOJeX.mjs';
import { a as adminGetFlaggedMessages } from '../../chunks/messages_D2nVa2RF.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$FlaggedMessages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FlaggedMessages;
  const checkPermission = requirePermission("read:admin");
  const permissionResponse = await checkPermission({
    cookies: Astro2.cookies,
    redirect: Astro2.redirect
  });
  if (permissionResponse) {
    return permissionResponse;
  }
  const flaggedMessages = await adminGetFlaggedMessages();
  function getFlagReason(metadata) {
    if (metadata && typeof metadata === "object") {
      const meta = metadata;
      return meta.reason || meta.flagged_reason || "Not specified";
    }
    return "Not specified";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Flagged Messages", "data-astro-cid-ikympi5l": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-container" data-astro-cid-ikympi5l> <div class="admin-header" data-astro-cid-ikympi5l> <h1 data-astro-cid-ikympi5l>Flagged Messages</h1> <p data-astro-cid-ikympi5l>Review and moderate messages that have been flagged for review.</p> </div> <div class="admin-actions" data-astro-cid-ikympi5l> <a href="/admin" class="btn btn-secondary" data-astro-cid-ikympi5l>Back to Admin Dashboard</a> </div> <div class="flagged-messages" data-astro-cid-ikympi5l> ${flaggedMessages.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-ikympi5l> <p data-astro-cid-ikympi5l>No flagged messages to review at this time.</p> </div>` : renderTemplate`<table class="messages-table" data-astro-cid-ikympi5l> <thead data-astro-cid-ikympi5l> <tr data-astro-cid-ikympi5l> <th data-astro-cid-ikympi5l>Date</th> <th data-astro-cid-ikympi5l>Conversation</th> <th data-astro-cid-ikympi5l>Content</th> <th data-astro-cid-ikympi5l>Reason</th> <th data-astro-cid-ikympi5l>Actions</th> </tr> </thead> <tbody data-astro-cid-ikympi5l> ${flaggedMessages.map((message) => renderTemplate`<tr data-astro-cid-ikympi5l> <td data-astro-cid-ikympi5l>${new Date(message.created_at).toLocaleString()}</td> <td data-astro-cid-ikympi5l> <a${addAttribute(`/admin/conversations/${message.conversation_id}`, "href")} data-astro-cid-ikympi5l> ${message.conversation_id} </a> </td> <td class="message-content" data-astro-cid-ikympi5l>${message.content}</td> <td data-astro-cid-ikympi5l>${getFlagReason(message.metadata)}</td> <td class="actions" data-astro-cid-ikympi5l> <form action="/api/admin/messages/approve" method="post" data-astro-cid-ikympi5l> <input type="hidden" name="messageId"${addAttribute(message.id, "value")} data-astro-cid-ikympi5l> <button type="submit" class="btn btn-small btn-success" data-astro-cid-ikympi5l>
Approve
</button> </form> <form action="/api/admin/messages/delete" method="post" data-astro-cid-ikympi5l> <input type="hidden" name="messageId"${addAttribute(message.id, "value")} data-astro-cid-ikympi5l> <button type="submit" class="btn btn-small btn-danger" data-astro-cid-ikympi5l>
Delete
</button> </form> </td> </tr>`)} </tbody> </table>`} </div> </main> ` })} `;
}, "/root/pixel/src/pages/admin/flagged-messages.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/flagged-messages.astro";
const $$url = "/admin/flagged-messages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FlaggedMessages,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
