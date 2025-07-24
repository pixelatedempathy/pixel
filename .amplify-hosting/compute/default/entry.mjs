;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ee84aac9-60e8-4a38-a1a2-956984f35739",e._sentryDebugIdIdentifier="sentry-dbid-ee84aac9-60e8-4a38-a1a2-956984f35739")}catch(e){}}();import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B5Pncz1v.mjs';
import { manifest } from './manifest_CECHgxaS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/accessibility.astro.mjs');
const _page5 = () => import('./pages/admin/ai/high-risk-crises.astro.mjs');
const _page6 = () => import('./pages/admin/ai/model-performance.astro.mjs');
const _page7 = () => import('./pages/admin/ai/performance.astro.mjs');
const _page8 = () => import('./pages/admin/ai/usage.astro.mjs');
const _page9 = () => import('./pages/admin/ai/validation-pipeline.astro.mjs');
const _page10 = () => import('./pages/admin/ai-performance.astro.mjs');
const _page11 = () => import('./pages/admin/all-demos-analytics.astro.mjs');
const _page12 = () => import('./pages/admin/audit-logs.astro.mjs');
const _page13 = () => import('./pages/admin/backup-security.astro.mjs');
const _page14 = () => import('./pages/admin/backups.astro.mjs');
const _page15 = () => import('./pages/admin/bias-detection.astro.mjs');
const _page16 = () => import('./pages/admin/compatibility-dashboard.astro.mjs');
const _page17 = () => import('./pages/admin/consent.astro.mjs');
const _page18 = () => import('./pages/admin/data-retention.astro.mjs');
const _page19 = () => import('./pages/admin/data-transfer.astro.mjs');
const _page20 = () => import('./pages/admin/demo-analytics.astro.mjs');
const _page21 = () => import('./pages/admin/dlp.astro.mjs');
const _page22 = () => import('./pages/admin/fhe-dashboard.astro.mjs');
const _page23 = () => import('./pages/admin/flagged-messages.astro.mjs');
const _page24 = () => import('./pages/admin/patient-rights.astro.mjs');
const _page25 = () => import('./pages/admin/performance-dashboard.astro.mjs');
const _page26 = () => import('./pages/admin/real-user-monitoring.astro.mjs');
const _page27 = () => import('./pages/admin/security/baa/management.astro.mjs');
const _page28 = () => import('./pages/admin/security/baa/templates/new.astro.mjs');
const _page29 = () => import('./pages/admin/security/baa/templates.astro.mjs');
const _page30 = () => import('./pages/admin/security/baa/vendors/requirements.astro.mjs');
const _page31 = () => import('./pages/admin/security/baa/vendors/_id_/verify.astro.mjs');
const _page32 = () => import('./pages/admin/security/baa/vendors.astro.mjs');
const _page33 = () => import('./pages/admin/security/disaster-recovery.astro.mjs');
const _page34 = () => import('./pages/admin/security/risk-assessment.astro.mjs');
const _page35 = () => import('./pages/admin/security.astro.mjs');
const _page36 = () => import('./pages/admin/security-dashboard.astro.mjs');
const _page37 = () => import('./pages/admin/security-settings.astro.mjs');
const _page38 = () => import('./pages/admin/system-health.astro.mjs');
const _page39 = () => import('./pages/admin/users.astro.mjs');
const _page40 = () => import('./pages/admin-test.astro.mjs');
const _page41 = () => import('./pages/ai-chat.astro.mjs');
const _page42 = () => import('./pages/analytics/comparative-progress.astro.mjs');
const _page43 = () => import('./pages/analytics/conversions.astro.mjs');
const _page44 = () => import('./pages/analytics/engagement.astro.mjs');
const _page45 = () => import('./pages/analytics/treatment-forecast.astro.mjs');
const _page46 = () => import('./pages/analytics.astro.mjs');
const _page47 = () => import('./pages/api/admin/backup/recovery-test.astro.mjs');
const _page48 = () => import('./pages/api/admin/metrics.astro.mjs');
const _page49 = () => import('./pages/api/admin/patient-rights/delete-request.astro.mjs');
const _page50 = () => import('./pages/api/admin/patient-rights/update-deletion-request.astro.mjs');
const _page51 = () => import('./pages/api/admin/sessions.astro.mjs');
const _page52 = () => import('./pages/api/admin/test-security-alert.astro.mjs');
const _page53 = () => import('./pages/api/admin/users.astro.mjs');
const _page54 = () => import('./pages/api/ai/completion.astro.mjs');
const _page55 = () => import('./pages/api/ai/crisis-detection.astro.mjs');
const _page56 = () => import('./pages/api/ai/datasets/merge.astro.mjs');
const _page57 = () => import('./pages/api/ai/datasets/prepare.astro.mjs');
const _page58 = () => import('./pages/api/ai/high-risk-detections.astro.mjs');
const _page59 = () => import('./pages/api/ai/intervention-analysis.astro.mjs');
const _page60 = () => import('./pages/api/ai/mental-health/analyze.astro.mjs');
const _page61 = () => import('./pages/api/ai/mental-health/status.astro.mjs');
const _page62 = () => import('./pages/api/ai/models.astro.mjs');
const _page63 = () => import('./pages/api/ai/performance-metrics.astro.mjs');
const _page64 = () => import('./pages/api/ai/recommendations/enhanced.astro.mjs');
const _page65 = () => import('./pages/api/ai/response.astro.mjs');
const _page66 = () => import('./pages/api/ai/usage.astro.mjs');
const _page67 = () => import('./pages/api/ai/usage-stats.astro.mjs');
const _page68 = () => import('./pages/api/ai/validation/history.astro.mjs');
const _page69 = () => import('./pages/api/ai/validation/results.astro.mjs');
const _page70 = () => import('./pages/api/ai/validation/run.astro.mjs');
const _page71 = () => import('./pages/api/ai/validation/schedule.astro.mjs');
const _page72 = () => import('./pages/api/ai/validation/start.astro.mjs');
const _page73 = () => import('./pages/api/ai/validation/stop.astro.mjs');
const _page74 = () => import('./pages/api/ai/validation/webhook.astro.mjs');
const _page75 = () => import('./pages/api/analytics/comparative-progress.astro.mjs');
const _page76 = () => import('./pages/api/analytics/dashboard.astro.mjs');
const _page77 = () => import('./pages/api/analytics/demo-tracking.astro.mjs');
const _page78 = () => import('./pages/api/analytics/engagement.astro.mjs');
const _page79 = () => import('./pages/api/analytics/treatment-forecast.astro.mjs');
const _page80 = () => import('./pages/api/analytics/types.astro.mjs');
const _page81 = () => import('./pages/api/audit/metrics.astro.mjs');
const _page82 = () => import('./pages/api/auth/callback.astro.mjs');
const _page83 = () => import('./pages/api/auth/login.astro.mjs');
const _page84 = () => import('./pages/api/auth/register.astro.mjs');
const _page85 = () => import('./pages/api/auth/signin.astro.mjs');
const _page86 = () => import('./pages/api/auth/signout.astro.mjs');
const _page87 = () => import('./pages/api/auth/update-password.astro.mjs');
const _page88 = () => import('./pages/api/bias-detection/analyze.astro.mjs');
const _page89 = () => import('./pages/api/bias-detection/dashboard.astro.mjs');
const _page90 = () => import('./pages/api/bias-detection/dashboard.test.astro.mjs');
const _page91 = () => import('./pages/api/bias-detection/export.astro.mjs');
const _page92 = () => import('./pages/api/bias-detection/export.test.astro.mjs');
const _page93 = () => import('./pages/api/bias-detection/export.test.new.astro.mjs');
const _page94 = () => import('./pages/api/bias-detection/metrics.astro.mjs');
const _page95 = () => import('./pages/api/browser-compatibility/data.astro.mjs');
const _page96 = () => import('./pages/api/chat/send.astro.mjs');
const _page97 = () => import('./pages/api/contact.astro.mjs');
const _page98 = () => import('./pages/api/crisis/session-flags.astro.mjs');
const _page99 = () => import('./pages/api/dashboard.astro.mjs');
const _page100 = () => import('./pages/api/demos/bias-detection/analyze.astro.mjs');
const _page101 = () => import('./pages/api/demos/bias-detection/export.astro.mjs');
const _page102 = () => import('./pages/api/demos/bias-detection/presets.astro.mjs');
const _page103 = () => import('./pages/api/demos/bias-detection/websocket.astro.mjs');
const _page104 = () => import('./pages/api/emotions/dimensional.astro.mjs');
const _page105 = () => import('./pages/api/emotions/multidimensional-map.astro.mjs');
const _page106 = () => import('./pages/api/emotions/real-time-analysis.astro.mjs');
const _page107 = () => import('./pages/api/emotions/session-analysis.astro.mjs');
const _page108 = () => import('./pages/api/examples/profiling-demo.astro.mjs');
const _page109 = () => import('./pages/api/export/conversation.astro.mjs');
const _page110 = () => import('./pages/api/export/download/_id_.astro.mjs');
const _page111 = () => import('./pages/api/fhe/process.astro.mjs');
const _page112 = () => import('./pages/api/fhe/rotate-keys.astro.mjs');
const _page113 = () => import('./pages/api/goals/_id_.astro.mjs');
const _page114 = () => import('./pages/api/goals.astro.mjs');
const _page115 = () => import('./pages/api/health/simple.astro.mjs');
const _page116 = () => import('./pages/api/health.astro.mjs');
const _page117 = () => import('./pages/api/patient-rights/cancel-export.astro.mjs');
const _page118 = () => import('./pages/api/patient-rights/create-export.astro.mjs');
const _page119 = () => import('./pages/api/patient-rights/download-export.astro.mjs');
const _page120 = () => import('./pages/api/patient-rights/export-request.astro.mjs');
const _page121 = () => import('./pages/api/patient-rights/export-status.astro.mjs');
const _page122 = () => import('./pages/api/patient-rights/get-export-status.astro.mjs');
const _page123 = () => import('./pages/api/patient-rights/initiate-export.astro.mjs');
const _page124 = () => import('./pages/api/patient-rights/request-export.astro.mjs');
const _page125 = () => import('./pages/api/patient-rights/update-export.astro.mjs');
const _page126 = () => import('./pages/api/pattern-analysis/cross-session.astro.mjs');
const _page127 = () => import('./pages/api/pattern-analysis/risk-correlations.astro.mjs');
const _page128 = () => import('./pages/api/pattern-analysis/trends.astro.mjs');
const _page129 = () => import('./pages/api/search.astro.mjs');
const _page130 = () => import('./pages/api/security/backup/recovery-tests.astro.mjs');
const _page131 = () => import('./pages/api/security/backup.astro.mjs');
const _page132 = () => import('./pages/api/security/events.astro.mjs');
const _page133 = () => import('./pages/api/sessions/_sessionid_/temporal-emotions.astro.mjs');
const _page134 = () => import('./pages/api/sessions.astro.mjs');
const _page135 = () => import('./pages/api/techniques.astro.mjs');
const _page136 = () => import('./pages/api/treatment-plans/_planid_.astro.mjs');
const _page137 = () => import('./pages/api/treatment-plans.astro.mjs');
const _page138 = () => import('./pages/api/v1/admin/users.astro.mjs');
const _page139 = () => import('./pages/api/v1/health.astro.mjs');
const _page140 = () => import('./pages/api/v1/preferences.astro.mjs');
const _page141 = () => import('./pages/api/v1/profile.astro.mjs');
const _page142 = () => import('./pages/api/v1/search.astro.mjs');
const _page143 = () => import('./pages/api/websocket/bias-alerts.astro.mjs');
const _page144 = () => import('./pages/api-docs/ai/mental-health/analyze.astro.mjs');
const _page145 = () => import('./pages/app.astro.mjs');
const _page146 = () => import('./pages/auth-callback.astro.mjs');
const _page147 = () => import('./pages/blog/page/_---page_.astro.mjs');
const _page148 = () => import('./pages/blog/series/_name_.astro.mjs');
const _page149 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page150 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page151 = () => import('./pages/blog/tags.astro.mjs');
const _page152 = () => import('./pages/blog.astro.mjs');
const _page153 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page154 = () => import('./pages/book.astro.mjs');
const _page155 = () => import('./pages/browser-compatibility/dashboard.astro.mjs');
const _page156 = () => import('./pages/browser-compatibility/visual-regression.astro.mjs');
const _page157 = () => import('./pages/changelog/_slug_.astro.mjs');
const _page158 = () => import('./pages/changelog.astro.mjs');
const _page159 = () => import('./pages/client/_clientid_/temporal-analysis.astro.mjs');
const _page160 = () => import('./pages/contact.astro.mjs');
const _page161 = () => import('./pages/custom-404.astro.mjs');
const _page162 = () => import('./pages/dashboard/emotions/dimensional-analysis.astro.mjs');
const _page163 = () => import('./pages/dashboard/treatment-plans.astro.mjs');
const _page164 = () => import('./pages/dashboard.astro.mjs');
const _page165 = () => import('./pages/debounce-demo.astro.mjs');
const _page166 = () => import('./pages/demo/bias-detection.astro.mjs');
const _page167 = () => import('./pages/demo/chat.astro.mjs');
const _page168 = () => import('./pages/demo/clinical-vault-trainer.astro.mjs');
const _page169 = () => import('./pages/demo/emotion-progress.astro.mjs');
const _page170 = () => import('./pages/demo/emotion-visualization.astro.mjs');
const _page171 = () => import('./pages/demo/enhanced-bias-detection.astro.mjs');
const _page172 = () => import('./pages/demo/fhe.astro.mjs');
const _page173 = () => import('./pages/demo/psychology-pipeline.astro.mjs');
const _page174 = () => import('./pages/demo/psychology-pipeline-processor.astro.mjs');
const _page175 = () => import('./pages/demo/security-bias-detection-engine.astro.mjs');
const _page176 = () => import('./pages/demo/synthetic-training-generator.astro.mjs');
const _page177 = () => import('./pages/demo.astro.mjs');
const _page178 = () => import('./pages/demo-hub.astro.mjs');
const _page179 = () => import('./pages/dev/accessibility-test.astro.mjs');
const _page180 = () => import('./pages/dev/browser-compatibility-test.astro.mjs');
const _page181 = () => import('./pages/dev/live-region-demo.astro.mjs');
const _page182 = () => import('./pages/docs/api/swagger.astro.mjs');
const _page183 = () => import('./pages/docs/api.astro.mjs');
const _page184 = () => import('./pages/docs/getting-started.astro.mjs');
const _page185 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page186 = () => import('./pages/egg.astro.mjs');
const _page187 = () => import('./pages/emotion-visualization.astro.mjs');
const _page188 = () => import('./pages/features.astro.mjs');
const _page189 = () => import('./pages/feeds.astro.mjs');
const _page190 = () => import('./pages/gradient-demo.astro.mjs');
const _page191 = () => import('./pages/highlights.astro.mjs');
const _page192 = () => import('./pages/login.astro.mjs');
const _page193 = () => import('./pages/mental-health-chat/synthetic-demo.astro.mjs');
const _page194 = () => import('./pages/mental-health-chat.astro.mjs');
const _page195 = () => import('./pages/mental-health-demo.astro.mjs');
const _page196 = () => import('./pages/mental-health-demo-v2.astro.mjs');
const _page197 = () => import('./pages/privacy.astro.mjs');
const _page198 = () => import('./pages/profile.astro.mjs');
const _page199 = () => import('./pages/projects.astro.mjs');
const _page200 = () => import('./pages/prs.astro.mjs');
const _page201 = () => import('./pages/register.astro.mjs');
const _page202 = () => import('./pages/releases.astro.mjs');
const _page203 = () => import('./pages/reset-password.astro.mjs');
const _page204 = () => import('./pages/reset-password-confirm.astro.mjs');
const _page205 = () => import('./pages/rss.xml.astro.mjs');
const _page206 = () => import('./pages/search-demo.astro.mjs');
const _page207 = () => import('./pages/security/fhe-demo.astro.mjs');
const _page208 = () => import('./pages/settings/ai-preferences.astro.mjs');
const _page209 = () => import('./pages/signin.astro.mjs');
const _page210 = () => import('./pages/signup.astro.mjs');
const _page211 = () => import('./pages/simulator.astro.mjs');
const _page212 = () => import('./pages/style-guide.astro.mjs');
const _page213 = () => import('./pages/terms.astro.mjs');
const _page214 = () => import('./pages/therapists.astro.mjs');
const _page215 = () => import('./pages/therapy-chat.astro.mjs');
const _page216 = () => import('./pages/therapy-chat-plan.astro.mjs');
const _page217 = () => import('./pages/todo.astro.mjs');
const _page218 = () => import('./pages/todo-demo.astro.mjs');
const _page219 = () => import('./pages/treatment-planning.astro.mjs');
const _page220 = () => import('./pages/try-demo.astro.mjs');
const _page221 = () => import('./pages/unauthorized.astro.mjs');
const _page222 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.2_@capacitor+preferences@7.0.1_@capacitor+core@7.4.2__@types+node@24.1.0_@up_5f2fbcce5a20cc518cfbd064456f8e4b/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/accessibility.astro", _page4],
    ["src/pages/admin/ai/high-risk-crises.astro", _page5],
    ["src/pages/admin/ai/model-performance.astro", _page6],
    ["src/pages/admin/ai/performance.astro", _page7],
    ["src/pages/admin/ai/usage.astro", _page8],
    ["src/pages/admin/ai/validation-pipeline.astro", _page9],
    ["src/pages/admin/ai-performance.astro", _page10],
    ["src/pages/admin/all-demos-analytics.astro", _page11],
    ["src/pages/admin/audit-logs.astro", _page12],
    ["src/pages/admin/backup-security.astro", _page13],
    ["src/pages/admin/backups/index.astro", _page14],
    ["src/pages/admin/bias-detection.astro", _page15],
    ["src/pages/admin/compatibility-dashboard.astro", _page16],
    ["src/pages/admin/consent/index.astro", _page17],
    ["src/pages/admin/data-retention.astro", _page18],
    ["src/pages/admin/data-transfer.astro", _page19],
    ["src/pages/admin/demo-analytics.astro", _page20],
    ["src/pages/admin/dlp.astro", _page21],
    ["src/pages/admin/fhe-dashboard.astro", _page22],
    ["src/pages/admin/flagged-messages.astro", _page23],
    ["src/pages/admin/patient-rights.astro", _page24],
    ["src/pages/admin/performance-dashboard.astro", _page25],
    ["src/pages/admin/real-user-monitoring.astro", _page26],
    ["src/pages/admin/security/baa/management.astro", _page27],
    ["src/pages/admin/security/baa/templates/new.astro", _page28],
    ["src/pages/admin/security/baa/templates.astro", _page29],
    ["src/pages/admin/security/baa/vendors/requirements.astro", _page30],
    ["src/pages/admin/security/baa/vendors/[id]/verify.astro", _page31],
    ["src/pages/admin/security/baa/vendors.astro", _page32],
    ["src/pages/admin/security/disaster-recovery/index.astro", _page33],
    ["src/pages/admin/security/risk-assessment/index.astro", _page34],
    ["src/pages/admin/security/index.astro", _page35],
    ["src/pages/admin/security-dashboard.astro", _page36],
    ["src/pages/admin/security-settings.astro", _page37],
    ["src/pages/admin/system-health.astro", _page38],
    ["src/pages/admin/users.astro", _page39],
    ["src/pages/admin-test.astro", _page40],
    ["src/pages/ai-chat.astro", _page41],
    ["src/pages/analytics/comparative-progress.astro", _page42],
    ["src/pages/analytics/conversions.astro", _page43],
    ["src/pages/analytics/engagement.astro", _page44],
    ["src/pages/analytics/treatment-forecast.astro", _page45],
    ["src/pages/analytics/index.astro", _page46],
    ["src/pages/api/admin/backup/recovery-test.ts", _page47],
    ["src/pages/api/admin/metrics.ts", _page48],
    ["src/pages/api/admin/patient-rights/delete-request.ts", _page49],
    ["src/pages/api/admin/patient-rights/update-deletion-request.ts", _page50],
    ["src/pages/api/admin/sessions.ts", _page51],
    ["src/pages/api/admin/test-security-alert.ts", _page52],
    ["src/pages/api/admin/users.ts", _page53],
    ["src/pages/api/ai/completion.ts", _page54],
    ["src/pages/api/ai/crisis-detection.ts", _page55],
    ["src/pages/api/ai/datasets/merge.ts", _page56],
    ["src/pages/api/ai/datasets/prepare.ts", _page57],
    ["src/pages/api/ai/high-risk-detections.ts", _page58],
    ["src/pages/api/ai/intervention-analysis.ts", _page59],
    ["src/pages/api/ai/mental-health/analyze.ts", _page60],
    ["src/pages/api/ai/mental-health/status.ts", _page61],
    ["src/pages/api/ai/models.ts", _page62],
    ["src/pages/api/ai/performance-metrics.ts", _page63],
    ["src/pages/api/ai/recommendations/enhanced.ts", _page64],
    ["src/pages/api/ai/response.ts", _page65],
    ["src/pages/api/ai/usage.ts", _page66],
    ["src/pages/api/ai/usage-stats.ts", _page67],
    ["src/pages/api/ai/validation/history.ts", _page68],
    ["src/pages/api/ai/validation/results.ts", _page69],
    ["src/pages/api/ai/validation/run.ts", _page70],
    ["src/pages/api/ai/validation/schedule.ts", _page71],
    ["src/pages/api/ai/validation/start.ts", _page72],
    ["src/pages/api/ai/validation/stop.ts", _page73],
    ["src/pages/api/ai/validation/webhook.ts", _page74],
    ["src/pages/api/analytics/comparative-progress.ts", _page75],
    ["src/pages/api/analytics/dashboard.ts", _page76],
    ["src/pages/api/analytics/demo-tracking.ts", _page77],
    ["src/pages/api/analytics/engagement.ts", _page78],
    ["src/pages/api/analytics/treatment-forecast.ts", _page79],
    ["src/pages/api/analytics/types.ts", _page80],
    ["src/pages/api/audit/metrics.ts", _page81],
    ["src/pages/api/auth/callback.ts", _page82],
    ["src/pages/api/auth/login.ts", _page83],
    ["src/pages/api/auth/register.ts", _page84],
    ["src/pages/api/auth/signin.ts", _page85],
    ["src/pages/api/auth/signout.ts", _page86],
    ["src/pages/api/auth/update-password.ts", _page87],
    ["src/pages/api/bias-detection/analyze.ts", _page88],
    ["src/pages/api/bias-detection/dashboard.ts", _page89],
    ["src/pages/api/bias-detection/dashboard.test.ts", _page90],
    ["src/pages/api/bias-detection/export.ts", _page91],
    ["src/pages/api/bias-detection/export.test.ts", _page92],
    ["src/pages/api/bias-detection/export.test.new.ts", _page93],
    ["src/pages/api/bias-detection/metrics.ts", _page94],
    ["src/pages/api/browser-compatibility/data.ts", _page95],
    ["src/pages/api/chat/send.ts", _page96],
    ["src/pages/api/contact.ts", _page97],
    ["src/pages/api/crisis/session-flags.ts", _page98],
    ["src/pages/api/dashboard.ts", _page99],
    ["src/pages/api/demos/bias-detection/analyze.ts", _page100],
    ["src/pages/api/demos/bias-detection/export.ts", _page101],
    ["src/pages/api/demos/bias-detection/presets.ts", _page102],
    ["src/pages/api/demos/bias-detection/websocket.ts", _page103],
    ["src/pages/api/emotions/dimensional.ts", _page104],
    ["src/pages/api/emotions/multidimensional-map.ts", _page105],
    ["src/pages/api/emotions/real-time-analysis.ts", _page106],
    ["src/pages/api/emotions/session-analysis.ts", _page107],
    ["src/pages/api/examples/profiling-demo.ts", _page108],
    ["src/pages/api/export/conversation.ts", _page109],
    ["src/pages/api/export/download/[id].ts", _page110],
    ["src/pages/api/fhe/process.ts", _page111],
    ["src/pages/api/fhe/rotate-keys.ts", _page112],
    ["src/pages/api/goals/[id].ts", _page113],
    ["src/pages/api/goals/index.ts", _page114],
    ["src/pages/api/health/simple.ts", _page115],
    ["src/pages/api/health.ts", _page116],
    ["src/pages/api/patient-rights/cancel-export.ts", _page117],
    ["src/pages/api/patient-rights/create-export.ts", _page118],
    ["src/pages/api/patient-rights/download-export.ts", _page119],
    ["src/pages/api/patient-rights/export-request.ts", _page120],
    ["src/pages/api/patient-rights/export-status.ts", _page121],
    ["src/pages/api/patient-rights/get-export-status.ts", _page122],
    ["src/pages/api/patient-rights/initiate-export.ts", _page123],
    ["src/pages/api/patient-rights/request-export.ts", _page124],
    ["src/pages/api/patient-rights/update-export.ts", _page125],
    ["src/pages/api/pattern-analysis/cross-session.ts", _page126],
    ["src/pages/api/pattern-analysis/risk-correlations.ts", _page127],
    ["src/pages/api/pattern-analysis/trends.ts", _page128],
    ["src/pages/api/search.ts", _page129],
    ["src/pages/api/security/backup/recovery-tests.ts", _page130],
    ["src/pages/api/security/backup/index.ts", _page131],
    ["src/pages/api/security/events.ts", _page132],
    ["src/pages/api/sessions/[sessionId]/temporal-emotions.ts", _page133],
    ["src/pages/api/sessions/index.ts", _page134],
    ["src/pages/api/techniques.ts", _page135],
    ["src/pages/api/treatment-plans/[planId].ts", _page136],
    ["src/pages/api/treatment-plans/index.ts", _page137],
    ["src/pages/api/v1/admin/users.ts", _page138],
    ["src/pages/api/v1/health.ts", _page139],
    ["src/pages/api/v1/preferences/index.ts", _page140],
    ["src/pages/api/v1/profile/index.ts", _page141],
    ["src/pages/api/v1/search.ts", _page142],
    ["src/pages/api/websocket/bias-alerts.ts", _page143],
    ["src/pages/api-docs/ai/mental-health/analyze.ts", _page144],
    ["src/pages/app.astro", _page145],
    ["src/pages/auth-callback.astro", _page146],
    ["src/pages/blog/page/[...page].astro", _page147],
    ["src/pages/blog/series/[name].astro", _page148],
    ["src/pages/blog/tag/[tag].astro", _page149],
    ["src/pages/blog/tags/[tag].astro", _page150],
    ["src/pages/blog/tags/index.astro", _page151],
    ["src/pages/blog/index.astro", _page152],
    ["src/pages/blog/[...slug].astro", _page153],
    ["src/pages/book.astro", _page154],
    ["src/pages/browser-compatibility/dashboard.astro", _page155],
    ["src/pages/browser-compatibility/visual-regression.astro", _page156],
    ["src/pages/changelog/[slug].astro", _page157],
    ["src/pages/changelog/index.md", _page158],
    ["src/pages/client/[clientId]/temporal-analysis.astro", _page159],
    ["src/pages/contact.astro", _page160],
    ["src/pages/custom-404.astro", _page161],
    ["src/pages/dashboard/emotions/dimensional-analysis.astro", _page162],
    ["src/pages/dashboard/treatment-plans.astro", _page163],
    ["src/pages/dashboard/index.astro", _page164],
    ["src/pages/debounce-demo.astro", _page165],
    ["src/pages/demo/bias-detection.astro", _page166],
    ["src/pages/demo/chat.astro", _page167],
    ["src/pages/demo/clinical-vault-trainer.astro", _page168],
    ["src/pages/demo/emotion-progress.astro", _page169],
    ["src/pages/demo/emotion-visualization.astro", _page170],
    ["src/pages/demo/enhanced-bias-detection.astro", _page171],
    ["src/pages/demo/fhe.astro", _page172],
    ["src/pages/demo/psychology-pipeline.astro", _page173],
    ["src/pages/demo/psychology-pipeline-processor.astro", _page174],
    ["src/pages/demo/security-bias-detection-engine.astro", _page175],
    ["src/pages/demo/synthetic-training-generator.astro", _page176],
    ["src/pages/demo.astro", _page177],
    ["src/pages/demo-hub.astro", _page178],
    ["src/pages/dev/accessibility-test.astro", _page179],
    ["src/pages/dev/browser-compatibility-test.astro", _page180],
    ["src/pages/dev/live-region-demo.astro", _page181],
    ["src/pages/docs/api/swagger.astro", _page182],
    ["src/pages/docs/api/index.astro", _page183],
    ["src/pages/docs/getting-started.astro", _page184],
    ["src/pages/docs/[...slug].astro", _page185],
    ["src/pages/egg.astro", _page186],
    ["src/pages/emotion-visualization.astro", _page187],
    ["src/pages/features.astro", _page188],
    ["src/pages/feeds.astro", _page189],
    ["src/pages/gradient-demo.astro", _page190],
    ["src/pages/highlights.astro", _page191],
    ["src/pages/login.astro", _page192],
    ["src/pages/mental-health-chat/synthetic-demo/index.astro", _page193],
    ["src/pages/mental-health-chat/index.astro", _page194],
    ["src/pages/mental-health-demo.astro", _page195],
    ["src/pages/mental-health-demo-v2.astro", _page196],
    ["src/pages/privacy.astro", _page197],
    ["src/pages/profile/index.astro", _page198],
    ["src/pages/projects.astro", _page199],
    ["src/pages/prs.astro", _page200],
    ["src/pages/register.astro", _page201],
    ["src/pages/releases.astro", _page202],
    ["src/pages/reset-password.astro", _page203],
    ["src/pages/reset-password-confirm.astro", _page204],
    ["src/pages/rss.xml.js", _page205],
    ["src/pages/search-demo.astro", _page206],
    ["src/pages/security/fhe-demo.astro", _page207],
    ["src/pages/settings/ai-preferences.astro", _page208],
    ["src/pages/signin.astro", _page209],
    ["src/pages/signup.astro", _page210],
    ["src/pages/simulator/index.astro", _page211],
    ["src/pages/style-guide.astro", _page212],
    ["src/pages/terms.astro", _page213],
    ["src/pages/therapists.astro", _page214],
    ["src/pages/therapy-chat.astro", _page215],
    ["src/pages/therapy-chat-plan.astro", _page216],
    ["src/pages/todo.astro", _page217],
    ["src/pages/todo-demo.astro", _page218],
    ["src/pages/treatment-planning.astro", _page219],
    ["src/pages/try-demo.astro", _page220],
    ["src/pages/unauthorized.astro", _page221],
    ["src/pages/index.astro", _page222]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "client": "file:///root/pixel/.amplify-hosting/static/",
    "server": "file:///root/pixel/.amplify-hosting/compute/default/",
    "host": true,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
