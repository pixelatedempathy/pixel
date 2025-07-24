;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="88983fdd-12fc-47de-a338-c92ffab0cfbc",e._sentryDebugIdIdentifier="sentry-dbid-88983fdd-12fc-47de-a338-c92ffab0cfbc")}catch(e){}}();import { p as protectRoute } from '../../../chunks/serverAuth_DACuVCIs.mjs';
import { B as BackupSecurityManager } from '../../../chunks/index_C1LTAoUt.mjs';
import { c as createBuildSafeLogger } from '../../../chunks/build-safe-logger_AsZljXJu.mjs';
import { B as BackupType } from '../../../chunks/backup-types_CGe17-3P.mjs';
import '../../../chunks/astro/server_DBAAVvAL.mjs';
export { renderers } from '../../../renderers.mjs';

const logger = createBuildSafeLogger("backup-api");
const backupManager = new BackupSecurityManager();
backupManager.initialize().catch((error) => {
  logger.error(
    `Failed to initialize backup manager: ${error instanceof Error ? error.message : String(error)}`
  );
});
const GET = async ({ request, locals }) => {
  try {
    const user = await protectRoute(request, locals, { role: "admin" });
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const url = new URL(request.url);
    const action = url.searchParams.get("action");
    const backupId = url.searchParams.get("id");
    if (action === "list") {
      const backups = await getBackups();
      return new Response(JSON.stringify({ backups }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "verify" && backupId) {
      const result = await backupManager.verifyBackup(backupId);
      return new Response(JSON.stringify({ verified: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "config") {
      return new Response(JSON.stringify({ config: getBackupConfig() }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ error: "Invalid action" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    logger.error(
      `Error handling backup GET request: ${error instanceof Error ? error.message : String(error)}`
    );
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request, locals }) => {
  try {
    const user = await protectRoute(request, locals, { role: "admin" });
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const requestData = await request.json();
    const { action, backupType, config } = requestData;
    if (action === "create" && backupType) {
      const metadata = await backupManager.createBackup(
        backupType
      );
      return new Response(JSON.stringify({ success: true, backup: metadata }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "updateConfig" && config) {
      await backupManager.updateConfig(config);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ error: "Invalid action" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    logger.error(
      `Error handling backup POST request: ${error instanceof Error ? error.message : String(error)}`
    );
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function getBackups() {
  return [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      type: BackupType.FULL,
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3).toISOString(),
      // 4 days ago
      size: 1024 * 1024 * 50,
      // 50 MB
      location: "primary",
      status: "verified",
      retentionDate: new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1e3
      ).toISOString(),
      // 1 year from now
      contentHash: "abc123"
    },
    {
      id: "223e4567-e89b-12d3-a456-426614174001",
      type: BackupType.DIFFERENTIAL,
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString(),
      // 1 day ago
      size: 1024 * 1024 * 10,
      // 10 MB
      location: "primary",
      status: "pending",
      retentionDate: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1e3
      ).toISOString(),
      // 30 days from now
      contentHash: "def456"
    },
    {
      id: "323e4567-e89b-12d3-a456-426614174002",
      type: BackupType.TRANSACTION,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1e3).toISOString(),
      // 2 hours ago
      size: 1024 * 1024 * 1,
      // 1 MB
      location: "primary",
      status: "completed",
      retentionDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1e3
      ).toISOString(),
      // 7 days from now
      contentHash: "ghi789"
    }
  ];
}
function getBackupConfig() {
  return {
    backupTypes: {
      [BackupType.FULL]: {
        schedule: "0 0 * * 0",
        // Weekly on Sunday at midnight
        retention: 365
        // 1 year
      },
      [BackupType.DIFFERENTIAL]: {
        schedule: "0 0 * * 1-6",
        // Daily at midnight except Sunday
        retention: 30
        // 1 month
      },
      [BackupType.TRANSACTION]: {
        schedule: "0 * * * *",
        // Hourly
        retention: 7
        // 1 week
      }
    },
    storageLocations: {
      primary: {
        provider: "aws-s3",
        bucket: "primary-backup-bucket",
        region: "us-west-2"
      },
      secondary: {
        provider: "google-cloud-storage",
        bucket: "secondary-backup-bucket"
      }
    },
    recoveryTesting: {
      enabled: true,
      schedule: "0 2 * * 1"
      // Every Monday at 2 AM
    }
  };
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
