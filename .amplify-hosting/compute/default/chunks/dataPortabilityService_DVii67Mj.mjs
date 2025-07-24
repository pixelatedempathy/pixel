;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3498b6de-dd66-471a-ad6e-5856179707ac",e._sentryDebugIdIdentifier="sentry-dbid-3498b6de-dd66-471a-ad6e-5856179707ac")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import { s as supabase } from './supabase_BQIKMD8j.mjs';
import { m as messagesDb, c as conversationsDb } from './messages_BtbgDuCV.mjs';
import { u as userSettingsDb } from './user-settings_DcqVFkSk.mjs';
import './astro/server_bjkJ-nhl.mjs';
import { v4 } from 'uuid';

const db = {
  conversations: conversationsDb,
  messages: messagesDb,
  userSettings: userSettingsDb
};

class AuditLoggingService {
  context;
  constructor(context) {
    this.context = context;
  }
  log(entry) {
    console.log(`[AUDIT:${this.context}]`, entry);
  }
}
function getAuditLogger(context) {
  return new AuditLoggingService(context);
}
const logger = createBuildSafeLogger("data-portability-service");
const auditLogger = getAuditLogger("data-transfer");
async function createDataExportRequest(input) {
  try {
    const patient = await mockDb.patient.findUnique({
      where: { id: input.patientId }
    });
    if (!patient) {
      logger.warn("Export request for non-existent patient", {
        patientId: input.patientId
      });
      return {
        success: false,
        error: "not_found",
        message: "Patient not found"
      };
    }
    const hasAccess = await verifyPatientDataAccess(
      input.patientId,
      input.requestedBy
    );
    if (!hasAccess) {
      logger.warn("Unauthorized export request", {
        patientId: input.patientId,
        requestedBy: input.requestedBy
      });
      return {
        success: false,
        error: "unauthorized",
        message: "Not authorized to export this patient's data"
      };
    }
    const exportId = v4();
    const now = /* @__PURE__ */ new Date();
    const exportRequest = {
      id: exportId,
      patientId: input.patientId,
      formats: input.formats,
      dataTypes: input.dataTypes,
      reason: input.reason,
      priority: input.priority,
      requestedBy: input.requestedBy,
      status: "pending",
      createdAt: now
    };
    await mockDb.dataExport.create({
      data: {
        id: exportRequest.id,
        patientId: exportRequest.patientId,
        requestedBy: exportRequest.requestedBy,
        formats: exportRequest.formats,
        dataTypes: exportRequest.dataTypes,
        reason: exportRequest.reason,
        priority: exportRequest.priority,
        status: exportRequest.status,
        createdAt: exportRequest.createdAt
      }
    });
    await queueExportJob(exportRequest);
    logger.info("Data export request created", {
      exportId,
      patientId: input.patientId,
      requestedBy: input.requestedBy
    });
    return {
      success: true,
      exportId,
      status: "pending",
      createdAt: now,
      message: "Export request created successfully"
    };
  } catch (error) {
    logger.error("Error creating export request", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      input
    });
    return {
      success: false,
      error: "internal_error",
      message: "Failed to create export request due to an internal error"
    };
  }
}
async function getDataExportDetails(exportId, userId) {
  try {
    const exportRequest = await getDataExportRequest(exportId);
    if (!exportRequest) {
      logger.warn("Export request not found for status check", { exportId });
      return {
        success: false,
        error: "not_found",
        message: `Export request with ID ${exportId} not found`
      };
    }
    const isInitiator = userId === exportRequest.requestedBy;
    const isAuthorized = isInitiator;
    if (!isAuthorized) {
      logger.warn("User not authorized to view export status", {
        userId,
        exportId,
        requestedBy: exportRequest.requestedBy
      });
      return {
        success: false,
        error: "unauthorized",
        message: "You are not authorized to view this export request"
      };
    }
    let progress = 0;
    switch (exportRequest.status) {
      case "pending":
        progress = 0;
        break;
      case "processing":
        progress = 50;
        break;
      case "completed":
        progress = 100;
        break;
      case "failed":
        progress = 100;
        break;
      default:
        progress = 0;
    }
    const createdAt = new Date(exportRequest.createdAt);
    const estimatedCompletionTime = new Date(
      createdAt.getTime() + 5 * 60 * 1e3
    );
    const completedAt = exportRequest.completedAt ? new Date(exportRequest.completedAt) : null;
    const expiresAt = completedAt ? new Date(completedAt.getTime() + 24 * 60 * 60 * 1e3) : null;
    logger.info("Export status retrieved successfully", {
      exportId,
      status: exportRequest.status
    });
    const typedExportRequest = exportRequest;
    return {
      success: true,
      exportId: exportRequest.id,
      status: exportRequest.status,
      progress,
      createdAt: exportRequest.createdAt.toISOString(),
      updatedAt: exportRequest.completedAt ? exportRequest.completedAt.toISOString() : exportRequest.createdAt.toISOString(),
      estimatedCompletionTime: estimatedCompletionTime.toISOString(),
      completedAt: exportRequest.completedAt ? exportRequest.completedAt.toISOString() : void 0,
      downloadUrl: exportRequest.files?.find(
        (f) => f.format === typedExportRequest.format
      )?.url,
      expiresAt: expiresAt?.toISOString(),
      formats: [typedExportRequest.format],
      dataTypes: exportRequest.dataTypes,
      patientId: exportRequest.patientId,
      requestedBy: exportRequest.requestedBy,
      priority: "normal"
    };
  } catch (error) {
    logger.error("Error getting export status", {
      error: error instanceof Error ? error.message : String(error),
      exportId,
      userId
    });
    return {
      success: false,
      message: `Failed to get export status: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
async function queueExportJob(exportRequest) {
  try {
    setTimeout(() => {
      processExportRequest(exportRequest.id).catch(
        (err) => logger.error("Error in export processing job", {
          error: err.message,
          stack: err.stack,
          exportId: exportRequest.id
        })
      );
    }, 100);
    logger.info("Export job queued", { exportId: exportRequest.id });
  } catch (error) {
    logger.error("Failed to queue export job", {
      error: error instanceof Error ? error.message : String(error),
      exportId: exportRequest.id
    });
    await mockDb.dataExport.update({
      where: { id: exportRequest.id },
      data: {
        status: "failed",
        error: "Failed to queue export job"
      }
    });
    throw error;
  }
}
async function processExportRequest(exportId) {
  logger.info("Starting export processing", { exportId });
  try {
    await mockDb.dataExport.update({
      where: { id: exportId },
      data: {
        status: "processing",
        startedAt: /* @__PURE__ */ new Date()
      }
    });
    const exportData = await mockDb.dataExport.findUnique({
      where: { id: exportId }
    });
    if (!exportData) {
      throw new Error(`Export request ${exportId} not found`);
    }
    const exportFiles = [];
    for (const dataType of exportData.dataTypes) {
      for (const format of exportData.formats) {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const fileId = v4();
        const fileName = `${dataType}-${exportData.patientId}.${format}`;
        const fileUrl = `https://storage.example.com/exports/${exportId}/${fileName}`;
        const file = {
          id: fileId,
          exportId,
          format,
          dataType,
          url: fileUrl,
          size: Math.floor(Math.random() * 1e7),
          // Random size for simulation
          createdAt: /* @__PURE__ */ new Date()
        };
        exportFiles.push(file);
        await mockDb.exportFile.create({
          data: file
        });
      }
    }
    await mockDb.dataExport.update({
      where: { id: exportId },
      data: {
        status: "completed",
        completedAt: /* @__PURE__ */ new Date()
      }
    });
    logger.info("Export processing completed", {
      exportId,
      fileCount: exportFiles.length
    });
  } catch (error) {
    logger.error("Error processing export", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : void 0,
      exportId
    });
    await mockDb.dataExport.update({
      where: { id: exportId },
      data: {
        status: "failed",
        error: error instanceof Error ? error.message : String(error)
      }
    });
  }
}
async function verifyPatientDataAccess(patientId, userId) {
  try {
    const patientUser = await mockDb.patientUser.findFirst({
      where: {
        patientId,
        userId
      }
    });
    if (patientUser) {
      return true;
    }
    const isAdmin = await isAdminUser(userId);
    if (isAdmin) {
      return true;
    }
    const providerAccess = await mockDb.providerPatientAccess.findFirst({
      where: {
        patientId,
        providerId: userId
      }
    });
    if (providerAccess) {
      return true;
    }
    return false;
  } catch (error) {
    logger.error("Error verifying patient data access", {
      error: error instanceof Error ? error.message : String(error),
      patientId,
      userId
    });
    return false;
  }
}
async function isAdminUser(userId) {
  try {
    const user = await mockDb.user.findUnique({
      where: { id: userId },
      include: { roles: true }
    });
    if (!user) {
      return false;
    }
    return user.roles.some((role) => role.name === "admin");
  } catch (error) {
    logger.error("Error checking admin status", {
      error: error instanceof Error ? error.message : String(error),
      userId
    });
    return false;
  }
}
async function getDataExportRequest(id) {
  try {
    const { data, error } = await supabase.from("data_export_requests").select("*").eq("id", id).single();
    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      logger.error("Failed to get data export request", { error, id });
      throw new Error(`Failed to get data export request: ${error.message}`);
    }
    return data;
  } catch (error) {
    logger.error("Error in getDataExportRequest", {
      error: error instanceof Error ? error.message : String(error),
      id
    });
    throw error;
  }
}
async function updateExportStatus(exportId, status, options) {
  try {
    await mockDb.dataExport.update({
      where: { id: exportId },
      data: {
        status,
        error: options?.errorMessage,
        ...status === "completed" ? { completedAt: /* @__PURE__ */ new Date() } : {},
        ...status === "processing" ? { startedAt: /* @__PURE__ */ new Date() } : {}
      }
    });
    logger.info(`Export status updated to ${status}`, { exportId });
  } catch (error) {
    logger.error("Error updating export status", {
      error: error instanceof Error ? error.message : String(error),
      exportId
    });
    throw error;
  }
}
async function cancelDataExportRequest(params) {
  try {
    const exportRequest = await getDataExportRequest(params.exportId);
    if (!exportRequest) {
      logger.warn("Export request not found for cancellation", {
        exportId: params.exportId
      });
      return {
        success: false,
        message: `Export request with ID ${params.exportId} not found`
      };
    }
    if (exportRequest.status === "completed") {
      logger.warn("Cannot cancel completed export request", {
        exportId: params.exportId,
        status: exportRequest.status
      });
      return {
        success: false,
        message: "Cannot cancel an export request that has already completed",
        status: exportRequest.status
      };
    }
    if (exportRequest.status === "failed") {
      logger.warn("Cannot cancel failed export request", {
        exportId: params.exportId,
        status: exportRequest.status
      });
      return {
        success: false,
        message: "Cannot cancel an export request that has already failed",
        status: exportRequest.status
      };
    }
    await updateExportStatus(params.exportId, "failed", {
      errorMessage: `Cancelled by user: ${params.reason || "No reason provided"}`
    });
    auditLogger.log({
      action: "export_cancelled",
      resource: "patient_data",
      resourceId: exportRequest.patientId,
      userId: params.cancelledBy,
      details: {
        exportId: params.exportId,
        reason: params.reason || "No reason provided"
      }
    });
    logger.info("Export request cancelled successfully", {
      exportId: params.exportId,
      cancelledBy: params.cancelledBy,
      reason: params.reason
    });
    return {
      success: true,
      message: "Export request cancelled successfully",
      status: "cancelled"
    };
  } catch (error) {
    logger.error("Error cancelling export request", {
      error: error instanceof Error ? error.message : String(error),
      exportId: params.exportId
    });
    return {
      success: false,
      message: `Failed to cancel export request: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
const mockDb = {
  ...db,
  // Add mock implementations for missing models
  patient: {
    findUnique: (_params) => {
      return Promise.resolve({
        id: _params.where.id,
        name: "Test Patient"
      });
    }
  },
  dataExport: {
    create: (_params) => {
      return Promise.resolve(_params.data);
    },
    update: (_params) => {
      return Promise.resolve({
        ..._params.data,
        id: _params.where.id
      });
    },
    findUnique: (_params) => {
      return Promise.resolve({
        id: _params.where.id,
        patientId: process.env.PATIENT_ID || "example-patient-id",
        requestedBy: "test-user-id",
        formats: ["json"],
        dataTypes: ["profile"],
        reason: "Test reason",
        priority: "normal",
        status: "pending",
        createdAt: /* @__PURE__ */ new Date(),
        files: _params.include?.files ? [
          {
            id: "file-1",
            exportId: _params.where.id,
            format: "json",
            dataType: "profile",
            url: "https://example.com/file.json",
            size: 1024,
            createdAt: /* @__PURE__ */ new Date()
          }
        ] : void 0
      });
    }
  },
  exportFile: {
    create: (_params) => {
      return Promise.resolve(_params.data);
    }
  },
  patientUser: {
    findFirst: (_params) => {
      return Promise.resolve(null);
    }
  },
  providerPatientAccess: {
    findFirst: (_params) => {
      return Promise.resolve(null);
    }
  },
  user: {
    findUnique: (_params) => {
      return Promise.resolve({
        id: _params.where.id,
        roles: [{ name: "user" }]
      });
    }
  }
};

export { createDataExportRequest as a, cancelDataExportRequest as c, getDataExportDetails as g };
