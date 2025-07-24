;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="988c1532-1eab-4701-8371-ac2261148411",e._sentryDebugIdIdentifier="sentry-dbid-988c1532-1eab-4701-8371-ac2261148411")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bujh6RVI.mjs';
import 'clsx';
/* empty css                                                */
import { r as requirePageAuth } from '../../chunks/serverAuth_DpRotyBD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pixelatedempathy.com");
const $$SecuritySettingsPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SecuritySettingsPanel;
  const securityConfig = {
    suspiciousAuthAlerts: true,
    failedLoginThreshold: 5,
    lockAccountAfterFailures: 10,
    notifyOnNewDevices: true,
    notifyOnPasswordChanges: true,
    securityTeamEmail: "security-team@example.com"
  };
  const { title = "Security Alert Settings" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="security-settings-panel" data-astro-cid-teyws445> <div class="panel-header" data-astro-cid-teyws445> <h2 data-astro-cid-teyws445>${title}</h2> <p class="description" data-astro-cid-teyws445>
Configure security alerts and notifications for suspicious authentication
      events.
</p> </div> <form id="security-settings-form" class="settings-form" data-astro-cid-teyws445> <div class="form-section" data-astro-cid-teyws445> <h3 data-astro-cid-teyws445>Email Notifications</h3> <div class="form-group" data-astro-cid-teyws445> <label for="securityTeamEmail" data-astro-cid-teyws445>Security Team Email</label> <input type="email" id="securityTeamEmail" name="securityTeamEmail"${addAttribute(securityConfig.securityTeamEmail, "value")} class="form-control" data-astro-cid-teyws445> <p class="input-help" data-astro-cid-teyws445>
Security alerts will be sent to this email address
</p> </div> <div class="form-group checkbox" data-astro-cid-teyws445> <input type="checkbox" id="suspiciousAuthAlerts" name="suspiciousAuthAlerts"${addAttribute(securityConfig.suspiciousAuthAlerts, "checked")} data-astro-cid-teyws445> <label for="suspiciousAuthAlerts" data-astro-cid-teyws445>Enable Suspicious Authentication Alerts</label> </div> <div class="form-group checkbox" data-astro-cid-teyws445> <input type="checkbox" id="notifyOnNewDevices" name="notifyOnNewDevices"${addAttribute(securityConfig.notifyOnNewDevices, "checked")} data-astro-cid-teyws445> <label for="notifyOnNewDevices" data-astro-cid-teyws445>Notify on Logins from New Devices</label> </div> <div class="form-group checkbox" data-astro-cid-teyws445> <input type="checkbox" id="notifyOnPasswordChanges" name="notifyOnPasswordChanges"${addAttribute(securityConfig.notifyOnPasswordChanges, "checked")} data-astro-cid-teyws445> <label for="notifyOnPasswordChanges" data-astro-cid-teyws445>Notify on Password Changes</label> </div> </div> <div class="form-section" data-astro-cid-teyws445> <h3 data-astro-cid-teyws445>Authentication Security</h3> <div class="form-group" data-astro-cid-teyws445> <label for="failedLoginThreshold" data-astro-cid-teyws445>Failed Login Alert Threshold</label> <input type="number" id="failedLoginThreshold" name="failedLoginThreshold"${addAttribute(securityConfig.failedLoginThreshold, "value")} min="1" max="20" class="form-control" data-astro-cid-teyws445> <p class="input-help" data-astro-cid-teyws445>
Number of failed login attempts before sending an alert
</p> </div> <div class="form-group" data-astro-cid-teyws445> <label for="lockAccountAfterFailures" data-astro-cid-teyws445>Account Lockout Threshold</label> <input type="number" id="lockAccountAfterFailures" name="lockAccountAfterFailures"${addAttribute(securityConfig.lockAccountAfterFailures, "value")} min="1" max="50" class="form-control" data-astro-cid-teyws445> <p class="input-help" data-astro-cid-teyws445>
Number of failed login attempts before temporarily locking the account
</p> </div> </div> <div class="form-actions" data-astro-cid-teyws445> <button type="submit" id="save-settings" class="btn btn-primary" data-astro-cid-teyws445>Save Settings</button> <button type="button" id="test-alerts" class="btn btn-secondary" data-astro-cid-teyws445>Test Alerts</button> </div> </form> <div id="alert-container" class="alert-container" data-astro-cid-teyws445></div> </div> ${renderScript($$result, "/root/pixel/src/components/admin/SecuritySettingsPanel.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/components/admin/SecuritySettingsPanel.astro", void 0);

const $$Astro = createAstro("https://pixelatedempathy.com");
const prerender = false;
const $$SecuritySettings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecuritySettings;
  const authResponse = await requirePageAuth(Astro2, "admin");
  if (authResponse) {
    return authResponse;
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Security Settings | Admin Dashboard", "data-astro-cid-gcmitmbn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-gcmitmbn> <header class="page-header" data-astro-cid-gcmitmbn> <h1 data-astro-cid-gcmitmbn>Security Settings</h1> <p class="subtitle" data-astro-cid-gcmitmbn>
Manage authentication security and suspicious activity notifications
</p> </header> <div class="dashboard-content" data-astro-cid-gcmitmbn> ${renderComponent($$result2, "SecuritySettingsPanel", $$SecuritySettingsPanel, { "title": "Email Security Alerts", "data-astro-cid-gcmitmbn": true })} <div class="security-stats" data-astro-cid-gcmitmbn> <div class="stat-card" data-astro-cid-gcmitmbn> <h3 data-astro-cid-gcmitmbn>Failed Login Attempts</h3> <div class="stat-value" data-astro-cid-gcmitmbn>147</div> <p class="stat-description" data-astro-cid-gcmitmbn>Last 7 days</p> </div> <div class="stat-card" data-astro-cid-gcmitmbn> <h3 data-astro-cid-gcmitmbn>Suspicious Activities</h3> <div class="stat-value" data-astro-cid-gcmitmbn>12</div> <p class="stat-description" data-astro-cid-gcmitmbn>Last 7 days</p> </div> <div class="stat-card" data-astro-cid-gcmitmbn> <h3 data-astro-cid-gcmitmbn>Account Lockouts</h3> <div class="stat-value" data-astro-cid-gcmitmbn>3</div> <p class="stat-description" data-astro-cid-gcmitmbn>Last 7 days</p> </div> <div class="stat-card" data-astro-cid-gcmitmbn> <h3 data-astro-cid-gcmitmbn>Security Alerts Sent</h3> <div class="stat-value" data-astro-cid-gcmitmbn>15</div> <p class="stat-description" data-astro-cid-gcmitmbn>Last 7 days</p> </div> </div> <div class="security-actions" data-astro-cid-gcmitmbn> <h2 data-astro-cid-gcmitmbn>Security Actions</h2> <div class="action-buttons" data-astro-cid-gcmitmbn> <button id="test-supabase-alerts" class="action-button" data-astro-cid-gcmitmbn> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gcmitmbn><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" data-astro-cid-gcmitmbn></path></svg>
Test Supabase Alerts
</button> <button id="sync-security-settings" class="action-button" data-astro-cid-gcmitmbn> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gcmitmbn><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-2.5 0-4.5-2-4.5-4.5S9.5 12 12 12s4.5 2 4.5 4.5S14.5 21 12 21z" data-astro-cid-gcmitmbn></path></svg>
Sync Security Settings
</button> <button id="clear-lockouts" class="action-button" data-astro-cid-gcmitmbn> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gcmitmbn><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-gcmitmbn></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-gcmitmbn></path></svg>
Clear Account Lockouts
</button> <button id="view-security-logs" class="action-button" data-astro-cid-gcmitmbn> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gcmitmbn><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-gcmitmbn></path><polyline points="14 2 14 8 20 8" data-astro-cid-gcmitmbn></polyline><line x1="16" y1="13" x2="8" y2="13" data-astro-cid-gcmitmbn></line><line x1="16" y1="17" x2="8" y2="17" data-astro-cid-gcmitmbn></line><polyline points="10 9 9 9 8 9" data-astro-cid-gcmitmbn></polyline></svg>
View Security Logs
</button> </div> </div> </div> </div> ` })} ${renderScript($$result, "/root/pixel/src/pages/admin/security-settings.astro?astro&type=script&index=0&lang.ts")} `;
}, "/root/pixel/src/pages/admin/security-settings.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/security-settings.astro";
const $$url = "/admin/security-settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecuritySettings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
