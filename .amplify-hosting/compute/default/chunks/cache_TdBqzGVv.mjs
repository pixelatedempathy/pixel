;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9c9767be-a08f-48d8-b7ff-55f6c5a2a6c4",e._sentryDebugIdIdentifier="sentry-dbid-9c9767be-a08f-48d8-b7ff-55f6c5a2a6c4")}catch(e){}}();import { z } from 'zod';
import './astro/server_DBAAVvAL.mjs';
import { c as createBuildSafeLogger } from './build-safe-logger_AsZljXJu.mjs';
import './cacheService_D8rWkByh.mjs';
import * as zlib from 'zlib';
import { promisify } from 'util';

z.object({
  sessionId: z.string(),
  timestamp: z.instanceof(Date),
  participantDemographics: z.object({
    age: z.string(),
    gender: z.string(),
    ethnicity: z.string(),
    primaryLanguage: z.string(),
    socioeconomicStatus: z.string().optional(),
    education: z.string().optional(),
    region: z.string().optional(),
    culturalBackground: z.array(z.string()).optional(),
    disabilityStatus: z.string().optional()
  }),
  scenario: z.object({
    scenarioId: z.string(),
    type: z.enum([
      "depression",
      "anxiety",
      "trauma",
      "substance-abuse",
      "grief",
      "other"
    ]),
    complexity: z.enum(["beginner", "intermediate", "advanced"]),
    tags: z.array(z.string()),
    description: z.string(),
    learningObjectives: z.array(z.string())
  }),
  content: z.object({
    patientPresentation: z.string(),
    therapeuticInterventions: z.array(z.string()),
    patientResponses: z.array(z.string()),
    sessionNotes: z.string(),
    assessmentResults: z.record(z.unknown()).optional()
  }),
  aiResponses: z.array(
    z.object({
      responseId: z.string(),
      timestamp: z.instanceof(Date),
      type: z.enum([
        "diagnostic",
        "intervention",
        "risk-assessment",
        "recommendation"
      ]),
      content: z.string(),
      confidence: z.number(),
      modelUsed: z.string(),
      reasoning: z.string().optional()
    })
  ),
  transcripts: z.array(
    z.object({
      speakerId: z.string(),
      timestamp: z.instanceof(Date),
      content: z.string(),
      emotionalTone: z.string().optional(),
      confidenceLevel: z.number().optional()
    })
  ),
  metadata: z.object({
    trainingInstitution: z.string(),
    supervisorId: z.string().optional(),
    traineeId: z.string(),
    sessionDuration: z.number(),
    completionStatus: z.enum(["completed", "partial", "abandoned"]),
    technicalIssues: z.array(z.string()).optional()
  })
});

promisify(zlib.deflate);
promisify(zlib.inflate);
createBuildSafeLogger("BiasDetectionCache");
