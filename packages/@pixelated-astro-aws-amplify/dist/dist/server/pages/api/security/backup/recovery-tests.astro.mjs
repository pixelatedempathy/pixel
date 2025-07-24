;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71251ec0-771b-43be-9cf2-749d91a2de81",e._sentryDebugIdIdentifier="sentry-dbid-71251ec0-771b-43be-9cf2-749d91a2de81")}catch(e){}}();import { p as protectRoute } from '../../../../chunks/serverAuth_4gmt5n21.mjs';
import { B as BackupSecurityManager } from '../../../../chunks/index_DtlWi8VM.mjs';
import { T as TestEnvironmentType, R as RecoveryTestStatus, B as BackupType } from '../../../../chunks/backup-types_Cb1FnCkU.mjs';
import { c as createBuildSafeLogger } from '../../../../chunks/build-safe-logger_0J2m2aGD.mjs';
import '../../../../chunks/astro/server_Ck5BzePu.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const logger = createBuildSafeLogger("recovery-test-api");
const backupManager = new BackupSecurityManager();
backupManager.initialize().catch((error) => {
  logger.error(
    `Failed to initialize backup manager for recovery tests: ${error instanceof Error ? error.message : String(error)}`
  );
});
const GET = protectRoute({
  requiredRole: "admin"
})(async ({ request, _locals }) => {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get("action");
    const testId = url.searchParams.get("id");
    if (action === "list") {
      const tests = await getRecoveryTests();
      return new Response(JSON.stringify({ tests }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "get" && testId) {
      const test = await getRecoveryTestById(testId);
      if (!test) {
        return new Response(JSON.stringify({ error: "Test not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
      return new Response(JSON.stringify({ test }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "config") {
      const config = await getRecoveryTestConfig();
      return new Response(JSON.stringify({ config }), {
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
      `Error handling recovery test GET request: ${error instanceof Error ? error.message : String(error)}`
    );
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});
const POST = protectRoute({
  requiredRole: "admin"
})(async ({ request, _locals }) => {
  try {
    const requestData = await request.json();
    const { action, backupId, environmentType, config } = requestData;
    if (action === "run" && backupId) {
      const environment = environmentType || TestEnvironmentType.SANDBOX;
      const testResult = simulateRecoveryTest(backupId, environment);
      return new Response(JSON.stringify({ success: true, test: testResult }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "updateConfig" && config) {
      logger.info("Updating recovery test configuration", { config });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "schedule") {
      logger.info("Scheduling automated recovery tests");
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
      `Error handling recovery test POST request: ${error instanceof Error ? error.message : String(error)}`
    );
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});
async function getRecoveryTests() {
  return [
    {
      id: "test-1",
      backupId: "123e4567-e89b-12d3-a456-426614174000",
      testDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3).toISOString(),
      // 3 days ago
      status: RecoveryTestStatus.PASSED,
      timeTaken: 12e4,
      // 2 minutes
      environment: TestEnvironmentType.SANDBOX,
      verificationResults: [
        {
          testCase: "Full Backup Basic Verification",
          passed: true,
          details: {
            description: "Verifies core system functionality after full backup restoration",
            stepResults: [
              {
                step: "hash-verification",
                passed: true,
                actual: "123abc",
                expected: "123abc"
              },
              {
                step: "query-verification",
                passed: true,
                actual: 1250,
                details: { query: "SELECT COUNT(*) FROM users" }
              }
            ]
          }
        }
      ]
    },
    {
      id: "test-2",
      backupId: "223e4567-e89b-12d3-a456-426614174001",
      testDate: new Date(Date.now() - 20 * 60 * 60 * 1e3).toISOString(),
      // 20 hours ago
      status: RecoveryTestStatus.FAILED,
      timeTaken: 18e4,
      // 3 minutes
      environment: TestEnvironmentType.SANDBOX,
      verificationResults: [
        {
          testCase: "Differential Backup Verification",
          passed: false,
          details: {
            description: "Verifies changes since last full backup",
            stepResults: [
              {
                step: "query-verification",
                passed: false,
                actual: null,
                details: { error: "Database connection timeout" }
              }
            ]
          }
        }
      ],
      issues: [
        {
          type: "verification_failed",
          description: "Verification failed for test case: Differential Backup Verification",
          severity: "high"
        }
      ]
    }
  ];
}
async function getRecoveryTestById(testId) {
  const tests = await getRecoveryTests();
  return tests.find((test) => test.id === testId);
}
async function getRecoveryTestConfig() {
  return {
    enabled: true,
    schedule: "0 2 * * 1",
    // Every Monday at 2 AM
    environment: {
      type: TestEnvironmentType.SANDBOX,
      config: {
        timeout: 1800,
        // 30 minutes
        resourceLimits: {
          cpu: 2,
          memory: "4Gi"
        }
      }
    },
    testCases: [
      {
        name: "Full Backup Basic Verification",
        description: "Verifies core system functionality after full backup restoration",
        backupType: BackupType.FULL,
        dataVerification: [
          {
            type: "hash",
            target: "system-files"
          },
          {
            type: "query",
            target: "database",
            query: "SELECT COUNT(*) FROM users"
          }
        ]
      },
      {
        name: "Differential Backup Verification",
        description: "Verifies changes since last full backup",
        backupType: BackupType.DIFFERENTIAL,
        dataVerification: [
          {
            type: "query",
            target: "database",
            query: "SELECT MAX(modified_date) FROM data_records"
          }
        ]
      }
    ],
    notifyOnFailure: true,
    generateReport: true
  };
}
function simulateRecoveryTest(backupId, environmentType) {
  const testId = `test-${Date.now()}`;
  const status = Math.random() > 0.2 ? RecoveryTestStatus.PASSED : RecoveryTestStatus.FAILED;
  const result = {
    id: testId,
    backupId,
    testDate: (/* @__PURE__ */ new Date()).toISOString(),
    status,
    timeTaken: Math.floor(Math.random() * 18e4) + 6e4,
    // 1-3 minutes
    environment: environmentType,
    verificationResults: []
  };
  if (status === RecoveryTestStatus.PASSED) {
    result.verificationResults = [
      {
        testCase: "Full Backup Basic Verification",
        passed: true,
        details: {
          description: "Verifies core system functionality after full backup restoration",
          stepResults: [
            {
              step: "hash-verification",
              passed: true,
              actual: "789xyz",
              expected: "789xyz"
            },
            {
              step: "query-verification",
              passed: true,
              actual: 1300,
              details: { query: "SELECT COUNT(*) FROM users" }
            }
          ]
        }
      }
    ];
  } else {
    result.verificationResults = [
      {
        testCase: "Full Backup Basic Verification",
        passed: false,
        details: {
          description: "Verifies core system functionality after full backup restoration",
          stepResults: [
            {
              step: "hash-verification",
              passed: true,
              actual: "789xyz",
              expected: "789xyz"
            },
            {
              step: "query-verification",
              passed: false,
              actual: null,
              details: { error: "Database restore failed" }
            }
          ]
        }
      }
    ];
    result.issues = [
      {
        type: "verification_failed",
        description: "Verification failed for test case: Full Backup Basic Verification",
        severity: "high"
      }
    ];
  }
  return result;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
