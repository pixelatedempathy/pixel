;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fe9933b5-a9d9-45f1-8d59-08b6c8f8b97d",e._sentryDebugIdIdentifier="sentry-dbid-fe9933b5-a9d9-45f1-8d59-08b6c8f8b97d")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { create } from 'zustand';
import { M as MentalHealthService } from '../chunks/service_DsfUD04Y.mjs';
import { C as ClinicalKnowledgeBase, c as createMentalLLaMAFromEnv } from '../chunks/index_OwgUltKM.mjs';
import { c as getClinicalAnalysisLogger } from '../chunks/standardized-logger_CFC_ud1c.mjs';
import { c as createBuildSafeLogger } from '../chunks/build-safe-logger_tzJzO24i.mjs';
import { devtools, subscribeWithSelector, persist } from 'zustand/middleware';
import { l as logger$2 } from '../chunks/logger_HhuSs5BQ.mjs';
import { c as cn } from '../chunks/utils_C7j64O8V.mjs';
import { useCallback as useCallback$1, useState, useEffect, lazy, Suspense } from 'react';
import { C as ChatContainer } from '../chunks/ChatContainer_3EcnjvLV.mjs';
import { B as Badge } from '../chunks/badge_B70Yne-r.mjs';
import { Brain, Heart, AlertTriangle, Zap, Shield, BarChart } from 'lucide-react';
import { i as IconMental, j as IconMinimize, k as IconMaximize, h as IconChevronDown } from '../chunks/icons_a4dAsrIy.mjs';
import { S as Switch } from '../chunks/switch_DGEtwNxv.mjs';
import { L as Label } from '../chunks/label_C9ZUWvx2.mjs';
import { c as createTogetherAIService } from '../chunks/together_DLoWi1ME.mjs';
import { B as Button } from '../chunks/button_QWh7Abi4.mjs';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from '../chunks/card_BfnhUXNW.mjs';
export { renderers } from '../renderers.mjs';

const clientScenarios = [
  {
    id: "resistant_client",
    name: "Resistant Client",
    description: "Client who is resistant to therapy and challenges the process",
    tags: ["resistance", "skepticism", "challenge"],
    difficulty: "intermediate",
    category: "other",
    systemMessage: "You are a resistant client who challenges the therapy process."
  },
  {
    id: "trauma_survivor",
    name: "Trauma Survivor",
    description: "Client dealing with complex trauma requiring careful handling",
    tags: ["trauma", "ptsd", "sensitivity"],
    difficulty: "advanced",
    category: "trauma",
    systemMessage: "You are a trauma survivor requiring sensitive handling."
  },
  {
    id: "crisis_situation",
    name: "Crisis Situation",
    description: "Client in acute distress requiring immediate stabilization",
    tags: ["crisis", "emergency", "stabilization"],
    difficulty: "advanced",
    category: "other",
    systemMessage: "You are in acute crisis and need immediate stabilization."
  },
  {
    id: "boundary_testing",
    name: "Boundary Testing",
    description: "Client who consistently tests professional boundaries",
    tags: ["boundaries", "challenge", "professional"],
    difficulty: "intermediate",
    category: "other",
    systemMessage: "You test professional boundaries during therapy."
  },
  {
    id: "depression_management",
    name: "Depression Management",
    description: "Client experiencing severe depression and low motivation",
    tags: ["depression", "mood", "motivation"],
    difficulty: "intermediate",
    category: "depression",
    systemMessage: "You are experiencing severe depression and low motivation."
  },
  {
    id: "anxiety_support",
    name: "Anxiety Support",
    description: "Client dealing with generalized anxiety and panic attacks",
    tags: ["anxiety", "panic", "stress"],
    difficulty: "beginner",
    category: "anxiety",
    systemMessage: "You are dealing with generalized anxiety and panic attacks."
  }
];

const logger$1 = getClinicalAnalysisLogger("general");
class RecommendationService {
  knowledgeBase;
  DEFAULT_VALID_DURATION = 14 * 24 * 60 * 60 * 1e3;
  // 14 days in milliseconds
  constructor() {
    this.knowledgeBase = new ClinicalKnowledgeBase();
    logger$1.info("RecommendationService initialized");
  }
  /**
   * Main method to get comprehensive treatment recommendations for a client
   */
  async getRecommendations(clientId, context, options = {}) {
    logger$1.info("Generating treatment recommendations", {
      clientId,
      contextKeys: Object.keys(context),
      options
    });
    try {
      this.validateRecommendationRequest(clientId, context);
      const currentState = await this.analyzeClientState(context);
      const baseRecommendations = await this.generateBaseRecommendations(currentState);
      const personalizedRecommendations = await this.personalizeRecommendations(
        baseRecommendations,
        context,
        currentState
      );
      const prioritizedRecommendations = this.prioritizeRecommendations(
        personalizedRecommendations,
        options
      );
      const adaptedRecommendations = await this.addAdaptations(
        prioritizedRecommendations,
        context
      );
      const finalRecommendations = this.addProgressMetrics(
        adaptedRecommendations,
        context
      );
      const filteredRecommendations = this.applyFilters(
        finalRecommendations,
        options
      );
      logger$1.info("Recommendations generated successfully", {
        clientId,
        recommendationCount: filteredRecommendations.length,
        priorities: filteredRecommendations.map((r) => r.priority)
      });
      return filteredRecommendations;
    } catch (error) {
      logger$1.error("Error generating recommendations", { clientId, error });
      return this.getFallbackRecommendations(context);
    }
  }
  /**
   * Get recommendations based on specific mental health analysis result
   */
  async getRecommendationsFromAnalysis(clientId, analysis, clientProfile) {
    logger$1.info("Generating recommendations from analysis", {
      clientId,
      category: analysis.mentalHealthCategory,
      isCrisis: analysis.isCrisis
    });
    try {
      const context = {
        clientProfile: this.createMinimalProfile(clientId, clientProfile),
        recentSessions: [],
        mentalHealthAnalyses: [],
        conversationHistory: [],
        treatmentGoals: ["symptom reduction", "functional improvement"],
        ..."expertGuided" in analysis && analysis.expertGuidance ? { expertGuidance: analysis.expertGuidance } : {}
      };
      const categoryRecommendations = this.knowledgeBase.getInterventionSuggestions(
        analysis.mentalHealthCategory,
        analysis
      );
      const recommendations = [];
      for (const intervention of categoryRecommendations) {
        const recommendation = await this.createRecommendationFromIntervention(
          intervention,
          analysis
        );
        recommendations.push(recommendation);
      }
      if (analysis.isCrisis) {
        const crisisRecommendations = await this.generateCrisisRecommendations(
          analysis,
          context
        );
        recommendations.unshift(...crisisRecommendations);
      }
      return recommendations.slice(0, 5);
    } catch (error) {
      logger$1.error("Error generating recommendations from analysis", {
        clientId,
        error
      });
      return this.getFallbackRecommendations({
        clientProfile: this.createMinimalProfile(clientId, clientProfile),
        recentSessions: [],
        mentalHealthAnalyses: [],
        conversationHistory: [],
        treatmentGoals: []
      });
    }
  }
  /**
   * Get quick recommendations for crisis situations
   */
  async getCrisisRecommendations(clientId, crisisContext) {
    logger$1.warn("Generating crisis recommendations", {
      clientId,
      crisisContext
    });
    const recommendations = [];
    const now = /* @__PURE__ */ new Date();
    const validUntil = new Date(now.getTime() + 24 * 60 * 60 * 1e3);
    recommendations.push({
      id: `crisis-safety-${Date.now()}`,
      title: "Immediate Safety Assessment and Planning",
      description: "Comprehensive safety evaluation and intervention to address immediate risk factors",
      priority: "critical",
      techniques: [
        {
          id: "safety-planning",
          name: "Safety Planning",
          description: "Collaborative development of a personalized safety plan",
          category: "behavioral",
          difficultyLevel: "beginner",
          timeCommitment: "30-60 minutes",
          evidenceLevel: "strong"
        }
      ],
      evidenceStrength: 0.95,
      supportingPatterns: [
        {
          type: "risk_factor",
          category: "crisis",
          description: "Immediate risk indicators detected",
          severity: crisisContext.riskLevel,
          confidence: 0.9
        }
      ],
      personalizedDescription: "Given the current crisis situation, immediate safety planning and professional intervention are essential.",
      validUntil: validUntil.toISOString(),
      timeframe: "Immediate (within 1 hour)",
      rationale: "Crisis situations require immediate professional intervention to ensure safety and prevent harm",
      expectedOutcomes: [
        "Immediate safety",
        "Risk reduction",
        "Professional support connection"
      ],
      riskConsiderations: [
        "Requires immediate professional oversight",
        "May need emergency services"
      ],
      progressMetrics: {
        measurementTools: ["Safety plan completion", "Risk assessment scores"],
        checkpointIntervals: ["Immediate", "2 hours", "24 hours"],
        successCriteria: [
          "Safety plan in place",
          "Professional support engaged",
          "Risk level reduced"
        ]
      },
      metadata: {
        generatedAt: now.toISOString(),
        basedOnSessions: [],
        clinicalContext: "Crisis intervention",
        reviewRequired: true,
        lastUpdated: now.toISOString()
      }
    });
    if (crisisContext.immediateSupport) {
      recommendations.push({
        id: `crisis-support-${Date.now()}`,
        title: "Emergency Professional Support",
        description: "Immediate connection with qualified mental health crisis professionals",
        priority: "critical",
        techniques: [
          {
            id: "crisis-intervention",
            name: "Crisis Intervention",
            description: "Professional crisis intervention and support",
            category: "interpersonal",
            difficultyLevel: "advanced",
            timeCommitment: "As needed",
            evidenceLevel: "strong"
          }
        ],
        evidenceStrength: 0.98,
        supportingPatterns: [
          {
            type: "risk_factor",
            category: "crisis",
            description: "High-risk crisis situation requiring professional intervention",
            severity: "critical",
            confidence: 0.95
          }
        ],
        personalizedDescription: "Professional crisis support is recommended to address the immediate situation and ensure safety.",
        validUntil: validUntil.toISOString(),
        timeframe: "Immediate",
        rationale: "Professional crisis intervention provides essential expertise and resources for high-risk situations",
        expectedOutcomes: [
          "Immediate professional support",
          "Crisis de-escalation",
          "Safety planning"
        ],
        riskConsiderations: [
          "Requires qualified professional",
          "May involve emergency services"
        ],
        progressMetrics: {
          measurementTools: [
            "Professional contact established",
            "Crisis resolution status"
          ],
          checkpointIntervals: ["Immediate", "1 hour", "4 hours"],
          successCriteria: [
            "Professional support engaged",
            "Crisis stabilized",
            "Follow-up planned"
          ]
        },
        metadata: {
          generatedAt: now.toISOString(),
          basedOnSessions: [],
          clinicalContext: "Crisis intervention - professional support",
          reviewRequired: true,
          lastUpdated: now.toISOString()
        }
      });
    }
    return recommendations;
  }
  /**
   * Validate recommendation request
   */
  validateRecommendationRequest(clientId, context) {
    if (!clientId || typeof clientId !== "string") {
      throw new Error("Valid clientId is required");
    }
    if (!context || typeof context !== "object") {
      throw new Error("Valid context is required");
    }
    if (!context.clientProfile) {
      throw new Error("Client profile is required in context");
    }
    if (!Array.isArray(context.treatmentGoals)) {
      throw new Error("Treatment goals must be provided as an array");
    }
  }
  /**
   * Analyze current client state based on context
   */
  async analyzeClientState(context) {
    const latestAnalysis = context.mentalHealthAnalyses?.[0];
    const riskIndicators = context.recentSessions.length > 0 ? await this.extractRiskIndicators(context.recentSessions) : [];
    return {
      primaryConcerns: this.identifyPrimaryConcerns(context),
      riskLevel: latestAnalysis?.riskLevel || context.clientProfile.currentStatus.riskLevel || "moderate",
      functionalImpairment: this.assessFunctionalImpairment(context),
      readinessForChange: context.clientProfile.currentStatus.treatmentMotivation,
      supportSystemStrength: context.clientProfile.currentStatus.supportSystem,
      riskIndicators,
      emergentIssues: context.emergentIssues || []
    };
  }
  /**
   * Generate base recommendations from clinical knowledge
   */
  async generateBaseRecommendations(currentState) {
    const recommendations = [];
    for (const concern of currentState.primaryConcerns) {
      const categoryRecommendations = this.knowledgeBase.getInterventionSuggestions(concern, {
        hasMentalHealthIssue: true,
        mentalHealthCategory: concern,
        confidence: 0.8,
        explanation: "",
        isCrisis: currentState.riskLevel === "critical",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      for (const intervention of categoryRecommendations) {
        recommendations.push({
          title: intervention.intervention,
          priority: this.mapUrgencyToPriority(intervention.urgency),
          rationale: intervention.rationale,
          timeframe: this.mapUrgencyToTimeframe(intervention.urgency)
        });
      }
    }
    return recommendations;
  }
  /**
   * Personalize recommendations based on client profile and history
   */
  async personalizeRecommendations(baseRecommendations, context, currentState) {
    const personalized = [];
    for (let i = 0; i < baseRecommendations.length; i++) {
      const base = baseRecommendations[i];
      if (!base) {
        continue;
      }
      const id = `rec-${context.clientProfile.id}-${Date.now()}-${i}`;
      const recommendation = {
        id,
        title: base.title || "Therapeutic Intervention",
        description: await this.generatePersonalizedDescription(
          base,
          context,
          currentState
        ),
        priority: base.priority || "medium",
        techniques: await this.selectAppropriateTechniques(base, context),
        evidenceStrength: this.calculateEvidenceStrength(base, context),
        supportingPatterns: this.identifySupportingPatterns(
          context,
          currentState
        ),
        personalizedDescription: await this.generatePersonalizedNarrative(
          base,
          context
        ),
        validUntil: new Date(
          Date.now() + this.DEFAULT_VALID_DURATION
        ).toISOString(),
        timeframe: base.timeframe || "Within 2-4 weeks",
        rationale: base.rationale || "Evidence-based intervention for presenting concerns",
        expectedOutcomes: this.generateExpectedOutcomes(base, context),
        riskConsiderations: this.identifyRiskConsiderations(base, context),
        progressMetrics: this.generateProgressMetrics(base, context),
        metadata: {
          generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          basedOnSessions: context.recentSessions.map((s) => s.sessionId || ""),
          clinicalContext: currentState.primaryConcerns.join(", "),
          reviewRequired: currentState.riskLevel === "critical" || currentState.riskLevel === "high",
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      personalized.push(recommendation);
    }
    return personalized;
  }
  /**
   * Prioritize recommendations based on clinical urgency and client needs
   */
  prioritizeRecommendations(recommendations, options) {
    const prioritized = recommendations.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) {
        return priorityDiff;
      }
      return b.evidenceStrength - a.evidenceStrength;
    });
    const maxRecs = options.maxRecommendations || 10;
    return prioritized.slice(0, maxRecs);
  }
  /**
   * Add cultural and individual adaptations
   */
  async addAdaptations(recommendations, context) {
    return recommendations.map((rec) => ({
      ...rec,
      adaptations: {
        culturalFactors: this.identifyCulturalAdaptations(
          context.clientProfile
        ),
        individualNeeds: this.identifyIndividualAdaptations(context),
        contraindications: this.identifyContraindications(rec, context)
      }
    }));
  }
  /**
   * Add progress metrics and tracking
   */
  addProgressMetrics(recommendations, context) {
    return recommendations.map((rec) => ({
      ...rec,
      progressMetrics: {
        measurementTools: this.selectMeasurementTools(rec, context),
        checkpointIntervals: this.determineCheckpointIntervals(rec),
        successCriteria: this.defineSuccessCriteria(rec, context)
      }
    }));
  }
  /**
   * Apply final filters based on options
   */
  applyFilters(recommendations, options) {
    let filtered = recommendations;
    if (options.priorityFilter) {
      filtered = filtered.filter(
        (rec) => options.priorityFilter?.includes(rec.priority) ?? false
      );
    }
    if (options.techniqueFilter) {
      filtered = filtered.filter(
        (rec) => rec.techniques.some(
          (tech) => options.techniqueFilter?.includes(tech.category) ?? false
        )
      );
    }
    if (options.evidenceThreshold) {
      filtered = filtered.filter(
        (rec) => rec.evidenceStrength >= (options.evidenceThreshold ?? 0)
      );
    }
    return filtered;
  }
  /**
   * Generate fallback recommendations for error cases
   */
  getFallbackRecommendations(_context) {
    logger$1.warn("Generating fallback recommendations");
    const now = /* @__PURE__ */ new Date();
    return [
      {
        id: `fallback-${Date.now()}`,
        title: "Comprehensive Assessment",
        description: "Initial comprehensive mental health assessment to establish treatment direction",
        priority: "high",
        techniques: [
          {
            id: "assessment",
            name: "Clinical Assessment",
            description: "Structured clinical interview and assessment",
            category: "interpersonal",
            difficultyLevel: "beginner",
            timeCommitment: "60-90 minutes",
            evidenceLevel: "strong"
          }
        ],
        evidenceStrength: 0.9,
        supportingPatterns: [
          {
            type: "behavior",
            category: "assessment_needed",
            description: "Comprehensive assessment required for treatment planning",
            confidence: 0.8
          }
        ],
        personalizedDescription: "A comprehensive assessment will help establish the best treatment approach for your specific needs.",
        validUntil: new Date(
          now.getTime() + this.DEFAULT_VALID_DURATION
        ).toISOString(),
        timeframe: "Within 1-2 weeks",
        rationale: "Comprehensive assessment provides foundation for evidence-based treatment planning",
        expectedOutcomes: [
          "Clear treatment plan",
          "Identified goals",
          "Appropriate interventions"
        ],
        riskConsiderations: ["Requires professional evaluation"],
        progressMetrics: {
          measurementTools: ["Clinical interview", "Standardized assessments"],
          checkpointIntervals: ["Initial assessment", "2 weeks"],
          successCriteria: ["Assessment completed", "Treatment plan developed"]
        },
        metadata: {
          generatedAt: now.toISOString(),
          basedOnSessions: [],
          clinicalContext: "Fallback recommendation",
          reviewRequired: true,
          lastUpdated: now.toISOString()
        }
      }
    ];
  }
  // Helper methods for recommendation generation
  createMinimalProfile(clientId, partialProfile) {
    return {
      id: clientId,
      demographics: partialProfile?.demographics || {},
      clinicalHistory: partialProfile?.clinicalHistory || {},
      treatmentHistory: partialProfile?.treatmentHistory || {
        previousTherapies: [],
        effectiveInterventions: [],
        ineffectiveInterventions: []
      },
      currentStatus: partialProfile?.currentStatus || {
        riskLevel: "moderate",
        functionalStatus: "unknown",
        supportSystem: "moderate",
        treatmentMotivation: "moderate"
      },
      preferences: partialProfile?.preferences || {
        preferredModalities: []
      }
    };
  }
  async createRecommendationFromIntervention(intervention, analysis) {
    const now = /* @__PURE__ */ new Date();
    return {
      id: `rec-${analysis.mentalHealthCategory}-${Date.now()}`,
      title: intervention.intervention,
      description: `Evidence-based intervention for ${analysis.mentalHealthCategory}`,
      priority: this.mapUrgencyToPriority(intervention.urgency),
      techniques: await this.selectTechniquesForIntervention(intervention),
      evidenceStrength: this.calculateInterventionEvidenceStrength(intervention),
      supportingPatterns: [
        {
          type: "symptom",
          category: analysis.mentalHealthCategory,
          description: analysis.explanation,
          confidence: analysis.confidence
        }
      ],
      personalizedDescription: `Based on your ${analysis.mentalHealthCategory} symptoms, ${intervention.intervention.toLowerCase()} is recommended.`,
      validUntil: new Date(
        now.getTime() + this.DEFAULT_VALID_DURATION
      ).toISOString(),
      timeframe: this.mapUrgencyToTimeframe(intervention.urgency),
      rationale: intervention.rationale,
      expectedOutcomes: this.generateOutcomesForCategory(
        analysis.mentalHealthCategory
      ),
      riskConsiderations: this.getRiskConsiderationsForCategory(
        analysis.mentalHealthCategory
      ),
      progressMetrics: {
        measurementTools: this.getAssessmentToolsForCategory(
          analysis.mentalHealthCategory
        ),
        checkpointIntervals: ["1 week", "2 weeks", "4 weeks"],
        successCriteria: [
          "Symptom reduction",
          "Improved functioning",
          "Goal achievement"
        ]
      },
      metadata: {
        generatedAt: now.toISOString(),
        basedOnSessions: [],
        clinicalContext: analysis.mentalHealthCategory,
        reviewRequired: analysis.isCrisis,
        lastUpdated: now.toISOString()
      }
    };
  }
  // Additional helper methods (implementation continues...)
  mapUrgencyToPriority(urgency) {
    switch (urgency) {
      case "immediate":
        return "critical";
      case "urgent":
        return "high";
      case "routine":
        return "medium";
      default:
        return "medium";
    }
  }
  mapUrgencyToTimeframe(urgency) {
    switch (urgency) {
      case "immediate":
        return "Within 24 hours";
      case "urgent":
        return "Within 1 week";
      case "routine":
        return "Within 2-4 weeks";
      default:
        return "Within 2-4 weeks";
    }
  }
  identifyPrimaryConcerns(context) {
    const concerns = [];
    if (context.mentalHealthAnalyses.length > 0) {
      context.mentalHealthAnalyses.forEach((analysis) => {
        if (analysis.category && !concerns.includes(analysis.category)) {
          concerns.push(analysis.category);
        }
      });
    }
    if (context.clientProfile.clinicalHistory.primaryDiagnosis) {
      const diagnosis = context.clientProfile.clinicalHistory.primaryDiagnosis.toLowerCase();
      if (!concerns.some((c) => diagnosis.includes(c))) {
        concerns.push(diagnosis);
      }
    }
    return concerns.length > 0 ? concerns : ["general_mental_health"];
  }
  async extractRiskIndicators(sessions) {
    const indicators = [];
    sessions.forEach((session) => {
      if (session.aiAnalysis?.riskAssessment === "high") {
        indicators.push("high_risk_session");
      }
      if (session.notes?.toLowerCase().includes("crisis")) {
        indicators.push("crisis_mention");
      }
    });
    return indicators;
  }
  assessFunctionalImpairment(context) {
    return context.clientProfile.currentStatus.functionalStatus || "moderate";
  }
  async generatePersonalizedDescription(_base, _context, currentState) {
    const concerns = currentState.primaryConcerns.join(" and ");
    return `This intervention addresses your ${concerns} and is tailored to your current situation and treatment goals.`;
  }
  async selectAppropriateTechniques(_base, _context) {
    const techniques = [];
    techniques.push({
      id: "cognitive-restructuring",
      name: "Cognitive Restructuring",
      description: "Identifying and changing negative thought patterns",
      category: "cognitive",
      difficultyLevel: "intermediate",
      timeCommitment: "15-30 minutes daily",
      evidenceLevel: "strong"
    });
    return techniques;
  }
  calculateEvidenceStrength(_base, context) {
    let strength = 0.7;
    if (context.clientProfile.treatmentHistory.effectiveInterventions.length > 0) {
      strength += 0.1;
    }
    return Math.min(strength, 1);
  }
  identifySupportingPatterns(_context, currentState) {
    const patterns = [];
    currentState.primaryConcerns.forEach((concern) => {
      patterns.push({
        type: "symptom",
        category: concern,
        description: `${concern} symptoms identified`,
        confidence: 0.8
      });
    });
    return patterns;
  }
  async generatePersonalizedNarrative(_base, _context) {
    return `Based on your individual profile and current needs, this recommendation has been specifically tailored for you.`;
  }
  generateExpectedOutcomes(_base, _context) {
    return [
      "Reduction in symptoms",
      "Improved daily functioning",
      "Enhanced coping skills",
      "Better emotional regulation"
    ];
  }
  identifyRiskConsiderations(_base, context) {
    const considerations = [];
    if (context.clientProfile.currentStatus.riskLevel === "high") {
      considerations.push(
        "Requires careful monitoring due to elevated risk level"
      );
    }
    return considerations;
  }
  generateProgressMetrics(_base, _context) {
    return {
      measurementTools: ["Standardized assessment scales", "Session ratings"],
      checkpointIntervals: ["Weekly", "Bi-weekly", "Monthly"],
      successCriteria: [
        "Symptom improvement",
        "Functional gains",
        "Goal achievement"
      ]
    };
  }
  identifyCulturalAdaptations(profile) {
    return profile.demographics.culturalBackground || [];
  }
  identifyIndividualAdaptations(context) {
    return context.clientProfile.preferences.preferredModalities || [];
  }
  identifyContraindications(_recommendation, context) {
    const contraindications = [];
    context.clientProfile.treatmentHistory.ineffectiveInterventions.forEach(
      (intervention) => {
        contraindications.push(`Previously ineffective: ${intervention}`);
      }
    );
    return contraindications;
  }
  selectMeasurementTools(_recommendation, _context) {
    return ["PHQ-9", "GAD-7", "Session rating scales", "Functional assessment"];
  }
  determineCheckpointIntervals(recommendation) {
    switch (recommendation.priority) {
      case "critical":
        return ["24 hours", "1 week", "2 weeks"];
      case "high":
        return ["1 week", "2 weeks", "4 weeks"];
      case "medium":
        return ["2 weeks", "4 weeks", "8 weeks"];
      default:
        return ["4 weeks", "8 weeks", "12 weeks"];
    }
  }
  defineSuccessCriteria(_recommendation, _context) {
    return [
      "Measurable symptom reduction",
      "Improved functioning in daily activities",
      "Achievement of identified treatment goals",
      "Enhanced quality of life measures"
    ];
  }
  async generateCrisisRecommendations(_analysis, _context) {
    return [
      {
        id: `crisis-${Date.now()}`,
        title: "Immediate Crisis Intervention",
        description: "Emergency intervention for crisis situation",
        priority: "critical",
        techniques: [
          {
            id: "crisis-intervention",
            name: "Crisis Intervention",
            description: "Immediate crisis support and safety planning",
            category: "behavioral",
            difficultyLevel: "advanced",
            timeCommitment: "Immediate",
            evidenceLevel: "strong"
          }
        ],
        evidenceStrength: 0.95,
        supportingPatterns: [
          {
            type: "risk_factor",
            category: "crisis",
            description: "Crisis indicators detected",
            severity: "critical",
            confidence: 0.9
          }
        ],
        personalizedDescription: "Immediate professional intervention is recommended due to crisis indicators.",
        validUntil: new Date(Date.now() + 24 * 60 * 60 * 1e3).toISOString(),
        timeframe: "Immediate",
        rationale: "Crisis situation requires immediate professional attention",
        expectedOutcomes: ["Immediate safety", "Crisis stabilization"],
        riskConsiderations: ["Requires immediate professional oversight"],
        progressMetrics: {
          measurementTools: ["Safety assessment", "Risk evaluation"],
          checkpointIntervals: ["Immediate", "2 hours", "24 hours"],
          successCriteria: ["Safety established", "Crisis resolved"]
        },
        metadata: {
          generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          basedOnSessions: [],
          clinicalContext: "Crisis intervention",
          reviewRequired: true,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    ];
  }
  async selectTechniquesForIntervention(intervention) {
    return [
      {
        id: "intervention-technique",
        name: intervention.intervention,
        description: "Evidence-based therapeutic technique",
        category: "cognitive",
        difficultyLevel: "intermediate",
        timeCommitment: "30-60 minutes",
        evidenceLevel: "high"
      }
    ];
  }
  calculateInterventionEvidenceStrength(intervention) {
    switch (intervention.urgency) {
      case "immediate":
        return 0.95;
      case "urgent":
        return 0.85;
      case "routine":
        return 0.75;
      default:
        return 0.7;
    }
  }
  generateOutcomesForCategory(category) {
    const outcomeMap = {
      depression: [
        "Improved mood",
        "Increased energy",
        "Better sleep",
        "Enhanced motivation"
      ],
      anxiety: [
        "Reduced worry",
        "Improved relaxation",
        "Better stress management",
        "Increased confidence"
      ],
      trauma: [
        "Reduced flashbacks",
        "Improved emotional regulation",
        "Better relationships",
        "Increased safety"
      ]
    };
    return outcomeMap[category] || [
      "Symptom improvement",
      "Better functioning",
      "Enhanced well-being"
    ];
  }
  getRiskConsiderationsForCategory(category) {
    const riskMap = {
      depression: [
        "Monitor for suicidal ideation",
        "Watch for worsening symptoms"
      ],
      anxiety: ["Monitor for panic attacks", "Avoid overexposure"],
      trauma: [
        "Risk of re-traumatization",
        "Requires trauma-informed approach"
      ]
    };
    return riskMap[category] || ["Requires professional monitoring"];
  }
  getAssessmentToolsForCategory(category) {
    const toolMap = {
      depression: [
        "PHQ-9",
        "Beck Depression Inventory",
        "Hamilton Depression Rating Scale"
      ],
      anxiety: [
        "GAD-7",
        "Beck Anxiety Inventory",
        "State-Trait Anxiety Inventory"
      ],
      trauma: ["PCL-5", "CAPS-5", "Trauma Symptom Inventory"]
    };
    return toolMap[category] || [
      "Standardized assessment scales",
      "Clinical interview"
    ];
  }
}

const logger = createBuildSafeLogger("MentalHealthChat");
function convertAnalysisToLegacyFormat(analysis) {
  const now = Date.now();
  if ("indicators" in analysis) {
    const mhAnalysis = analysis;
    const scores = {};
    const evidence = {};
    mhAnalysis.indicators.forEach((indicator) => {
      scores[indicator.type] = indicator.severity;
      evidence[indicator.type] = indicator.evidence;
    });
    return {
      id: mhAnalysis.id,
      timestamp: mhAnalysis.timestamp,
      category: mhAnalysis.categories[0]?.name || "general",
      explanation: mhAnalysis.indicators.map((i) => i.description).join("; "),
      expertGuided: false,
      scores: {
        depression: scores["depression"] || 0,
        anxiety: scores["anxiety"] || 0,
        stress: scores["stress"] || 0,
        anger: scores["anger"] || 0,
        socialIsolation: scores["isolation"] || 0,
        ...scores
      },
      evidence: {
        depression: evidence["depression"] || [],
        anxiety: evidence["anxiety"] || [],
        stress: evidence["stress"] || [],
        anger: evidence["anger"] || [],
        socialIsolation: evidence["isolation"] || [],
        ...evidence
      },
      summary: mhAnalysis.recommendations.join(". "),
      riskLevel: mhAnalysis.riskLevel === "critical" ? "high" : mhAnalysis.riskLevel === "medium" ? "moderate" : "low"
    };
  } else {
    const llmAnalysis = analysis;
    const isExpertGuided = "expertGuidance" in llmAnalysis;
    return {
      id: `analysis-${now}`,
      timestamp: now,
      category: llmAnalysis.mentalHealthCategory || "general",
      explanation: llmAnalysis.explanation || "Analysis completed",
      expertGuided: isExpertGuided,
      scores: {
        depression: llmAnalysis.mentalHealthCategory === "depression" ? llmAnalysis.confidence : 0,
        anxiety: llmAnalysis.mentalHealthCategory === "anxiety" ? llmAnalysis.confidence : 0,
        stress: llmAnalysis.mentalHealthCategory === "stress" ? llmAnalysis.confidence : 0,
        anger: llmAnalysis.mentalHealthCategory === "anger" ? llmAnalysis.confidence : 0,
        socialIsolation: llmAnalysis.mentalHealthCategory === "social_isolation" ? llmAnalysis.confidence : 0
      },
      evidence: {
        depression: llmAnalysis.mentalHealthCategory === "depression" ? llmAnalysis.supportingEvidence || [] : [],
        anxiety: llmAnalysis.mentalHealthCategory === "anxiety" ? llmAnalysis.supportingEvidence || [] : [],
        stress: llmAnalysis.mentalHealthCategory === "stress" ? llmAnalysis.supportingEvidence || [] : [],
        anger: llmAnalysis.mentalHealthCategory === "anger" ? llmAnalysis.supportingEvidence || [] : [],
        socialIsolation: llmAnalysis.mentalHealthCategory === "social_isolation" ? llmAnalysis.supportingEvidence || [] : []
      },
      summary: llmAnalysis.explanation || "Mental health analysis completed",
      riskLevel: llmAnalysis.isCrisis ? "high" : llmAnalysis.confidence > 0.7 ? "moderate" : "low"
    };
  }
}
function createMentalHealthChat(_fheService = null, options = {}) {
  let mentalHealthService = null;
  let mentalLLaMAAdapter = null;
  let recommendationService = null;
  let isInitialized = false;
  const config = {
    enableAnalysis: options.enableAnalysis ?? true,
    useExpertGuidance: options.useExpertGuidance ?? true,
    triggerInterventionThreshold: options.triggerInterventionThreshold ?? 0.7,
    analysisMinimumLength: options.analysisMinimumLength ?? 20,
    userId: options.userId ?? "anonymous",
    sessionId: options.sessionId ?? `session-${Date.now()}`,
    enableCrisisDetection: options.enableCrisisDetection ?? true,
    confidenceThreshold: options.confidenceThreshold ?? 0.6
  };
  const ensureInitialized = async () => {
    if (isInitialized) {
      return;
    }
    try {
      logger.info("Initializing MentalHealthChat services...");
      mentalHealthService = new MentalHealthService({
        enableAnalysis: config.enableAnalysis,
        confidenceThreshold: config.confidenceThreshold,
        interventionThreshold: config.triggerInterventionThreshold,
        analysisMinLength: config.analysisMinimumLength,
        enableCrisisDetection: config.enableCrisisDetection
      });
      try {
        const mentalLLaMAFactory = await createMentalLLaMAFromEnv();
        mentalLLaMAAdapter = mentalLLaMAFactory.adapter;
        logger.info("MentalLLaMA adapter initialized successfully");
      } catch (error) {
        logger.warn(
          "MentalLLaMA not available, falling back to basic analysis",
          { error }
        );
      }
      try {
        recommendationService = new RecommendationService();
        logger.info("RecommendationService initialized successfully");
      } catch (error) {
        logger.warn("RecommendationService not available", { error });
      }
      isInitialized = true;
      logger.info("MentalHealthChat initialized successfully");
    } catch (error) {
      logger.error("Failed to initialize MentalHealthChat", { error });
      throw new Error("MentalHealthChat initialization failed");
    }
  };
  return {
    /**
     * Process a message and return analysis results
     */
    processMessage: async (message) => {
      await ensureInitialized();
      if (!config.enableAnalysis || message.content.length < config.analysisMinimumLength) {
        return {
          ...message,
          mentalHealthAnalysis: null
        };
      }
      try {
        let analysis = null;
        if (mentalLLaMAAdapter && config.useExpertGuidance) {
          const routingContext = {
            userId: config.userId,
            sessionId: config.sessionId,
            sessionType: "therapeutic_chat"
          };
          const adapter = mentalLLaMAAdapter;
          const llmResult = await adapter.analyzeMentalHealthWithExpertGuidance(
            message.content,
            true,
            routingContext
          );
          analysis = convertAnalysisToLegacyFormat(llmResult);
        } else if (mentalHealthService) {
          const processedMessage = await mentalHealthService.processMessage(
            config.sessionId,
            {
              id: message.id,
              role: "user",
              content: message.content,
              timestamp: message.timestamp
            }
          );
          if (processedMessage.analysis) {
            analysis = convertAnalysisToLegacyFormat(processedMessage.analysis);
          }
        }
        return {
          ...message,
          mentalHealthAnalysis: analysis
        };
      } catch (error) {
        logger.error("Error processing message", { error });
        return {
          ...message,
          mentalHealthAnalysis: null
        };
      }
    },
    /**
     * Check if intervention is needed based on recent analyses
     */
    needsIntervention: async () => {
      await ensureInitialized();
      if (!mentalHealthService) {
        return false;
      }
      try {
        return mentalHealthService.needsIntervention(config.sessionId);
      } catch (error) {
        logger.error("Error checking intervention need", { error });
        return false;
      }
    },
    /**
     * Generate therapeutic intervention message
     */
    generateIntervention: async () => {
      await ensureInitialized();
      try {
        if (mentalHealthService) {
          const response = await mentalHealthService.generateTherapeuticResponse(
            config.sessionId
          );
          return response.content;
        }
        const interventions = [
          "I notice you might be going through a difficult time. Would you like to talk about what's on your mind?",
          "It sounds like you're experiencing some challenges. Remember that it's okay to seek support when you need it.",
          "I'm here to listen. Sometimes sharing what we're feeling can help us process difficult emotions.",
          "Would you like to explore some coping strategies that might help you feel better?"
        ];
        return interventions[Math.floor(Math.random() * interventions.length)] || "I'm here to support you.";
      } catch (error) {
        logger.error("Error generating intervention", { error });
        return "I'm here to support you. How are you feeling right now?";
      }
    },
    /**
     * Configure chat options dynamically
     */
    configure: (newOptions) => {
      Object.assign(config, newOptions);
      logger.info("Chat configuration updated", { newOptions });
    },
    /**
     * Get conversation history and analysis trends
     */
    getAnalysisHistory: async () => {
      await ensureInitialized();
      if (!mentalHealthService) {
        return [];
      }
      try {
        return mentalHealthService.getAnalysisHistory(config.sessionId);
      } catch (error) {
        logger.error("Error retrieving analysis history", { error });
        return [];
      }
    },
    /**
     * Get personalized recommendations based on analysis
     */
    getRecommendations: async () => {
      await ensureInitialized();
      if (!recommendationService || !mentalHealthService) {
        return [];
      }
      try {
        const latestAnalysis = mentalHealthService.getLatestAnalysis(
          config.sessionId
        );
        if (!latestAnalysis) {
          return [];
        }
        return await recommendationService.getRecommendationsFromAnalysis(
          config.userId,
          latestAnalysis
          // Type conversion needed for compatibility
        );
      } catch (error) {
        logger.error("Error generating recommendations", { error });
        return [];
      }
    },
    /**
     * Check system status and capabilities
     */
    getStatus: () => ({
      isInitialized,
      hasAdvancedAnalysis: !!mentalLLaMAAdapter,
      hasRecommendations: !!recommendationService,
      hasBasicAnalysis: !!mentalHealthService,
      configuration: config
    })
  };
}

const defaultPreferences = {
  theme: "dark",
  language: "en",
  notifications: {
    email: true,
    push: true,
    sms: false
  },
  accessibility: {
    reducedMotion: false,
    highContrast: false,
    fontSize: "medium"
  },
  privacy: {
    analytics: true,
    crashReporting: true,
    personalization: true
  }
};
const defaultUIState = {
  sidebarOpen: true,
  activeTab: "dashboard",
  layout: "default",
  viewMode: "list",
  filters: {},
  sortBy: "date",
  sortOrder: "desc"
};
const defaultSessionState = {
  lastRoute: "/",
  currentWorkspace: null,
  openTabs: [],
  recentItems: [],
  searchHistory: [],
  lastActivity: Date.now()
};
const defaultUsageStats = {
  sessionCount: 0,
  totalTimeSpent: 0,
  featureUsage: {},
  lastSessionEnd: null,
  performanceMetrics: {
    averageLoadTime: 0,
    errorCount: 0,
    crashCount: 0
  }
};
const useStore = create()(
  devtools(
    subscribeWithSelector(
      persist(
        (set, get) => ({
          // Original state
          securityLevel: "hipaa",
          encryptionEnabled: true,
          fheInitialized: false,
          aiService: null,
          fheService: null,
          mentalHealthChat: null,
          mentalHealthAnalysisEnabled: true,
          expertGuidanceEnabled: true,
          // Enhanced state
          preferences: defaultPreferences,
          uiState: defaultUIState,
          sessionState: defaultSessionState,
          offlineQueue: [],
          formDrafts: {},
          usageStats: defaultUsageStats,
          // Original actions
          setSecurityLevel: (level) => set({ securityLevel: level }),
          setEncryptionEnabled: (enabled) => set({ encryptionEnabled: enabled }),
          setFHEInitialized: (initialized) => set({ fheInitialized: initialized }),
          setAIService: (service) => set({ aiService: service }),
          initializeMentalHealthChat: () => {
            if (get().fheService) {
              const mentalHealthChat = createMentalHealthChat(
                get().fheService,
                {
                  enableAnalysis: get().mentalHealthAnalysisEnabled,
                  useExpertGuidance: get().expertGuidanceEnabled
                }
              );
              set({ mentalHealthChat });
              return mentalHealthChat;
            }
            return null;
          },
          configureMentalHealthAnalysis: (enableAnalysis, useExpertGuidance) => {
            set({
              mentalHealthAnalysisEnabled: enableAnalysis,
              expertGuidanceEnabled: useExpertGuidance
            });
            const { mentalHealthChat } = get();
            if (mentalHealthChat) {
              mentalHealthChat.configure({
                enableAnalysis,
                useExpertGuidance
              });
            }
          },
          // Enhanced actions - User Preferences
          updatePreferences: (preferences) => set((state) => ({
            preferences: { ...state.preferences, ...preferences }
          })),
          setTheme: (theme) => set((state) => ({
            preferences: { ...state.preferences, theme }
          })),
          setLanguage: (language) => set((state) => ({
            preferences: { ...state.preferences, language }
          })),
          updateNotificationSettings: (notifications) => set((state) => ({
            preferences: {
              ...state.preferences,
              notifications: {
                ...state.preferences.notifications,
                ...notifications
              }
            }
          })),
          updateAccessibilitySettings: (accessibility) => set((state) => ({
            preferences: {
              ...state.preferences,
              accessibility: {
                ...state.preferences.accessibility,
                ...accessibility
              }
            }
          })),
          updatePrivacySettings: (privacy) => set((state) => ({
            preferences: {
              ...state.preferences,
              privacy: { ...state.preferences.privacy, ...privacy }
            }
          })),
          // Enhanced actions - UI State
          updateUIState: (uiState) => set((state) => ({
            uiState: { ...state.uiState, ...uiState }
          })),
          toggleSidebar: () => set((state) => ({
            uiState: {
              ...state.uiState,
              sidebarOpen: !state.uiState.sidebarOpen
            }
          })),
          setActiveTab: (tab) => set((state) => ({
            uiState: { ...state.uiState, activeTab: tab }
          })),
          setLayout: (layout) => set((state) => ({
            uiState: { ...state.uiState, layout }
          })),
          setViewMode: (viewMode) => set((state) => ({
            uiState: { ...state.uiState, viewMode }
          })),
          updateFilters: (filters) => set((state) => ({
            uiState: {
              ...state.uiState,
              filters: { ...state.uiState.filters, ...filters }
            }
          })),
          setSortBy: (sortBy, sortOrder = "desc") => set((state) => ({
            uiState: { ...state.uiState, sortBy, sortOrder }
          })),
          // Enhanced actions - Session State
          updateSessionState: (sessionState) => set((state) => ({
            sessionState: { ...state.sessionState, ...sessionState }
          })),
          setCurrentRoute: (route) => set((state) => ({
            sessionState: {
              ...state.sessionState,
              lastRoute: route,
              lastActivity: Date.now()
            }
          })),
          setCurrentWorkspace: (workspace) => set((state) => ({
            sessionState: {
              ...state.sessionState,
              currentWorkspace: workspace
            }
          })),
          addOpenTab: (tab) => set((state) => {
            const openTabs = [...state.sessionState.openTabs];
            if (!openTabs.includes(tab)) {
              openTabs.push(tab);
              if (openTabs.length > 10) {
                openTabs.shift();
              }
            }
            return {
              sessionState: { ...state.sessionState, openTabs }
            };
          }),
          removeOpenTab: (tab) => set((state) => ({
            sessionState: {
              ...state.sessionState,
              openTabs: state.sessionState.openTabs.filter((t) => t !== tab)
            }
          })),
          addRecentItem: (item) => set((state) => {
            const recentItems = [
              item,
              ...state.sessionState.recentItems.filter((i) => i !== item)
            ];
            if (recentItems.length > 20) {
              recentItems.splice(20);
            }
            return {
              sessionState: { ...state.sessionState, recentItems }
            };
          }),
          addSearchHistory: (query) => set((state) => {
            const searchHistory = [
              query,
              ...state.sessionState.searchHistory.filter((q) => q !== query)
            ];
            if (searchHistory.length > 50) {
              searchHistory.splice(50);
            }
            return {
              sessionState: { ...state.sessionState, searchHistory }
            };
          }),
          updateLastActivity: () => set((state) => ({
            sessionState: { ...state.sessionState, lastActivity: Date.now() }
          })),
          // Enhanced actions - Offline Queue
          queueOfflineAction: (type, payload) => set((state) => ({
            offlineQueue: [
              ...state.offlineQueue,
              {
                id: `${Date.now()}_${Math.random().toString(36).substring(2)}`,
                type,
                payload,
                timestamp: Date.now(),
                retryCount: 0
              }
            ]
          })),
          removeOfflineAction: (id) => set((state) => ({
            offlineQueue: state.offlineQueue.filter(
              (action) => action.id !== id
            )
          })),
          clearOfflineQueue: () => set({ offlineQueue: [] }),
          // Enhanced actions - Form Drafts
          saveDraft: (formId, data) => set((state) => ({
            formDrafts: {
              ...state.formDrafts,
              [formId]: { data, timestamp: Date.now() }
            }
          })),
          getDraft: (formId) => {
            const draft = get().formDrafts[formId];
            return draft?.data || null;
          },
          clearDraft: (formId) => set((state) => {
            const { [formId]: _, ...rest } = state.formDrafts;
            return { formDrafts: rest };
          }),
          clearAllDrafts: () => set({ formDrafts: {} }),
          // Enhanced actions - Usage Analytics
          trackFeatureUsage: (featureName) => set((state) => ({
            usageStats: {
              ...state.usageStats,
              featureUsage: {
                ...state.usageStats.featureUsage,
                [featureName]: (state.usageStats.featureUsage[featureName] || 0) + 1
              }
            }
          })),
          incrementSessionCount: () => set((state) => ({
            usageStats: {
              ...state.usageStats,
              sessionCount: state.usageStats.sessionCount + 1
            }
          })),
          recordSessionEnd: () => set((state) => {
            const now = Date.now();
            const sessionDuration = state.usageStats.lastSessionEnd ? now - state.usageStats.lastSessionEnd : 0;
            return {
              usageStats: {
                ...state.usageStats,
                lastSessionEnd: now,
                totalTimeSpent: state.usageStats.totalTimeSpent + sessionDuration
              }
            };
          }),
          updatePerformanceMetric: (metric, value) => set((state) => ({
            usageStats: {
              ...state.usageStats,
              performanceMetrics: {
                ...state.usageStats.performanceMetrics,
                [metric]: value
              }
            }
          }))
        }),
        {
          name: "therapy-state-enhanced",
          partialize: (state) => ({
            // Security settings (persisted)
            securityLevel: state.securityLevel,
            encryptionEnabled: state.encryptionEnabled,
            mentalHealthAnalysisEnabled: state.mentalHealthAnalysisEnabled,
            expertGuidanceEnabled: state.expertGuidanceEnabled,
            // User preferences (persisted)
            preferences: state.preferences,
            // UI state (persisted)
            uiState: state.uiState,
            // Session state (persisted but with cleanup)
            sessionState: {
              ...state.sessionState,
              lastActivity: Date.now()
              // Update on save
            },
            // Form drafts (persisted)
            formDrafts: state.formDrafts,
            // Usage stats (persisted)
            usageStats: state.usageStats
          }),
          version: 2,
          migrate: (persistedState, version) => {
            if (version < 2) {
              logger$2.info("Migrating store state to version 2");
              return {
                ...persistedState,
                preferences: defaultPreferences,
                uiState: defaultUIState,
                sessionState: defaultSessionState,
                formDrafts: {},
                usageStats: defaultUsageStats
              };
            }
            return persistedState;
          }
        }
      )
    )
  )
);
useStore.subscribe(
  (state) => state.preferences.theme,
  (theme) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      if (theme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.classList.add(prefersDark ? "dark" : "light");
      } else {
        root.classList.add(theme);
      }
    }
  }
);
useStore.subscribe(
  (state) => state.preferences.accessibility,
  (accessibility) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (accessibility.reducedMotion) {
        root.style.setProperty("--motion-reduce", "1");
      } else {
        root.style.removeProperty("--motion-reduce");
      }
      if (accessibility.highContrast) {
        root.classList.add("high-contrast");
      } else {
        root.classList.remove("high-contrast");
      }
      root.classList.remove("font-small", "font-medium", "font-large");
      root.classList.add(`font-${accessibility.fontSize}`);
    }
  }
);
if (typeof window !== "undefined") {
  useStore.getState().incrementSessionCount();
  window.addEventListener("beforeunload", () => {
    useStore.getState().recordSessionEnd();
    useStore.getState().updateLastActivity();
  });
  const updateActivity = () => useStore.getState().updateLastActivity();
  window.addEventListener("mousedown", updateActivity);
  window.addEventListener("keydown", updateActivity);
  window.addEventListener("scroll", updateActivity);
  window.addEventListener("touchstart", updateActivity);
}

const MentalHealthInsights = ({
  analysis
}) => {
  const getRiskIcon = () => {
    switch (analysis.riskLevel) {
      case "high":
        return /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-500" });
      case "medium":
        return /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-yellow-500" });
      case "low":
      default:
        return /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-green-500" });
    }
  };
  const getRiskBadgeVariant = () => {
    switch (analysis.riskLevel) {
      case "high":
        return "destructive";
      case "medium":
        return "outline";
      case "low":
      default:
        return "secondary";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        getRiskIcon(),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-300", children: "Risk Assessment" })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: getRiskBadgeVariant(), children: analysis.riskLevel.toUpperCase() })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-green-900/20 p-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-green-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-300", children: "Analysis" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-green-200 mb-2", children: analysis.explanation }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-300", children: [
        "Confidence: ",
        Math.round(analysis.confidence * 100),
        "%"
      ] })
    ] }),
    analysis.emotions && analysis.emotions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-blue-900/20 p-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-blue-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-300", children: "Detected Emotions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: analysis.emotions.map((emotion) => /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "text-xs border-blue-400 text-blue-300",
          children: emotion
        },
        emotion
      )) })
    ] }),
    analysis.riskFactors && analysis.riskFactors.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-yellow-900/20 p-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-300", children: "Risk Factors" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "text-xs text-yellow-200 space-y-1", children: analysis.riskFactors.map((factor) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "•" }),
        factor
      ] }, factor)) })
    ] }),
    analysis.supportingEvidence.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-purple-900/20 p-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-purple-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-purple-300", children: "Supporting Evidence" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "text-xs text-purple-200 space-y-1", children: analysis.supportingEvidence.map((evidence) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "•" }),
        evidence
      ] }, evidence)) })
    ] }),
    analysis.expertGuided && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-red-900/20 p-3 border border-red-500/30", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-300", children: "Expert Guidance Recommended" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-red-200 mt-1", children: "This case may require professional mental health intervention." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 pt-2 border-t border-green-700/30", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Category: ",
        analysis.category
      ] }),
      /* @__PURE__ */ jsx("span", { children: new Date(analysis.timestamp).toLocaleTimeString() })
    ] }) })
  ] });
};

function useAIService() {
  const getAIResponse = useCallback$1(
    async (prompt, options) => {
      try {
        const aiService = createTogetherAIService({
          togetherApiKey: process.env["TOGETHER_API_KEY"] || "",
          apiKey: process.env["TOGETHER_API_KEY"] || ""
        });
        const messages = [
          {
            role: "user",
            content: prompt
          }
        ];
        const response = await aiService.createChatCompletion(messages, {
          model: "emotion-llama-2",
          ...options
        });
        aiService.dispose();
        return response.content;
      } catch (error) {
        console.error("Error getting AI response:", error);
        throw error;
      }
    },
    []
  );
  return {
    getAIResponse
  };
}

const useMentalHealthAnalysis = () => {
  const analyzeMessage = useCallback$1(
    async (message) => {
      const anxietyKeywords = [
        "anxiety",
        "anxious",
        "worried",
        "stress",
        "nervous",
        "panic"
      ];
      const depressionKeywords = [
        "sad",
        "depressed",
        "hopeless",
        "worthless",
        "suicide",
        "death"
      ];
      const riskKeywords = [
        "hurt",
        "harm",
        "kill",
        "end it all",
        "suicide",
        "die"
      ];
      const lowerMessage = message.toLowerCase();
      const anxietyScore = anxietyKeywords.filter(
        (keyword) => lowerMessage.includes(keyword)
      ).length;
      const depressionScore = depressionKeywords.filter(
        (keyword) => lowerMessage.includes(keyword)
      ).length;
      const riskScore = riskKeywords.filter(
        (keyword) => lowerMessage.includes(keyword)
      ).length;
      const totalScore = anxietyScore + depressionScore + riskScore * 2;
      let category = "low";
      let confidence = 0.1;
      if (riskScore > 0) {
        category = "critical";
        confidence = 0.9;
      } else if (totalScore >= 3) {
        category = "high";
        confidence = 0.8;
      } else if (totalScore >= 2) {
        category = "medium";
        confidence = 0.6;
      } else if (totalScore >= 1) {
        category = "medium";
        confidence = 0.4;
      }
      const supportingEvidence = [];
      if (anxietyScore > 0) {
        supportingEvidence.push(
          `Detected ${anxietyScore} anxiety-related term(s)`
        );
      }
      if (depressionScore > 0) {
        supportingEvidence.push(
          `Detected ${depressionScore} depression-related term(s)`
        );
      }
      if (riskScore > 0) {
        supportingEvidence.push(`Detected ${riskScore} high-risk term(s)`);
      }
      return {
        scores: {
          anxiety: anxietyScore,
          depression: depressionScore,
          risk: riskScore,
          total: totalScore
        },
        confidence,
        category,
        hasMentalHealthIssue: totalScore > 0,
        explanation: totalScore > 0 ? `Analysis detected potential mental health indicators based on language patterns.` : "No significant mental health indicators detected.",
        supportingEvidence,
        timestamp: Date.now()
      };
    },
    []
  );
  return {
    analyzeMessage
  };
};

const useEmotionDetection = () => {
  const { getAIResponse } = useAIService();
  const detectEmotions = useCallback$1(
    async (content) => {
      try {
        const prompt = `Analyze the emotional content of this message. Consider both obvious and subtle emotional indicators. Provide analysis in JSON format with:
      - primaryEmotion: The dominant emotion
      - secondaryEmotions: Array of other detected emotions
      - intensity: Number from 0-1 indicating emotional intensity
      - confidence: Number from 0-1 indicating confidence in analysis

      Message: "${content}"`;
        const response = await getAIResponse(prompt);
        let analysisText = "";
        if (response && typeof response === "object" && "getReader" in response) {
          const reader = response.getReader();
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            analysisText += new TextDecoder().decode(value);
          }
        } else {
          analysisText = typeof response === "string" ? response : response.content;
        }
        const analysis = JSON.parse(analysisText);
        return {
          primaryEmotion: analysis.primaryEmotion || "neutral",
          secondaryEmotions: analysis.secondaryEmotions || [],
          intensity: analysis.intensity || 0.5,
          confidence: analysis.confidence || 0.8
        };
      } catch (error) {
        console.error("Error detecting emotions:", error);
        return {
          primaryEmotion: "neutral",
          secondaryEmotions: [],
          intensity: 0.5,
          confidence: 0.5
        };
      }
    },
    [getAIResponse]
  );
  return { detectEmotions };
};

const useRiskAssessment = () => {
  const { getAIResponse } = useAIService();
  const assessRisk = useCallback$1(
    async (content, emotions) => {
      try {
        const prompt = `Assess the risk factors in this message from a mental health perspective. Consider both explicit and implicit indicators of potential harm or concerning mental states. Provide analysis in JSON format with:
      - category: "low", "medium", or "high" risk level
      - factors: Array of identified risk factors or concerns
      - requiresExpert: Boolean indicating if professional intervention is recommended
      - confidence: Number from 0-1 indicating confidence in assessment

      ${emotions ? `Detected emotions: Primary emotion is ${emotions.primaryEmotion} with intensity ${emotions.intensity}. Secondary emotions include: ${emotions.secondaryEmotions.join(", ")}.` : ""}

      Message: "${content}"`;
        const response = await getAIResponse(prompt);
        let analysisText = "";
        if (response instanceof ReadableStream) {
          const reader = response.getReader();
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            analysisText += new TextDecoder().decode(value);
          }
        } else {
          analysisText = response;
        }
        const analysis = JSON.parse(analysisText);
        return {
          category: analysis.category || "low",
          factors: analysis.factors || [],
          requiresExpert: analysis.requiresExpert || false,
          confidence: analysis.confidence || 0.5
        };
      } catch (error) {
        console.error("Error assessing risk:", error);
        return {
          category: "low",
          factors: [],
          requiresExpert: false,
          confidence: 0.5
        };
      }
    },
    [getAIResponse]
  );
  return { assessRisk };
};

class KVStore {
  storagePrefix;
  cache = /* @__PURE__ */ new Map();
  useLocalStorage;
  /**
   * Create a new KV Store instance
   * @param storagePrefix Prefix for all keys stored by this instance
   * @param useLocalStorage Whether to use localStorage as fallback (for client-side usage)
   */
  constructor(storagePrefix = "gradiant_", useLocalStorage = false) {
    this.storagePrefix = storagePrefix;
    this.useLocalStorage = useLocalStorage;
  }
  /**
   * Prepend the storage prefix to a key
   */
  prefixKey(key) {
    return `${this.storagePrefix}${key}`;
  }
  /**
   * Store a value with the given key
   */
  async set(key, value) {
    const prefixedKey = this.prefixKey(key);
    try {
      this.cache.set(prefixedKey, value);
      if (this.useLocalStorage && typeof window !== "undefined") {
        try {
          localStorage.setItem(prefixedKey, JSON.stringify(value));
        } catch (error) {
          console.warn("Failed to store in localStorage:", error);
        }
      }
      if (process.env["NODE_ENV"] === "development") {
        console.log(`[KVStore] Would store value for key: ${key}`);
      }
    } catch (error) {
      console.error(`Failed to store value for key ${key}:`, error);
      throw error;
    }
  }
  /**
   * Retrieve a value by key
   */
  async get(key) {
    const prefixedKey = this.prefixKey(key);
    try {
      if (this.cache.has(prefixedKey)) {
        return this.cache.get(prefixedKey);
      }
      if (this.useLocalStorage && typeof window !== "undefined") {
        const storedValue = localStorage.getItem(prefixedKey);
        if (storedValue) {
          try {
            const parsedValue = JSON.parse(storedValue);
            this.cache.set(prefixedKey, parsedValue);
            return parsedValue;
          } catch (error) {
            console.warn("Failed to parse value from localStorage:", error);
          }
        }
      }
      if (process.env["NODE_ENV"] === "development") {
        console.log(`[KVStore] Would retrieve value for key: ${key}`);
      }
      return null;
    } catch (error) {
      console.error(`Failed to retrieve value for key ${key}:`, error);
      return null;
    }
  }
  /**
   * Delete a value by key
   */
  async delete(key) {
    const prefixedKey = this.prefixKey(key);
    try {
      this.cache.delete(prefixedKey);
      if (this.useLocalStorage && typeof window !== "undefined") {
        try {
          localStorage.removeItem(prefixedKey);
        } catch (error) {
          console.warn("Failed to remove from localStorage:", error);
        }
      }
      if (process.env["NODE_ENV"] === "development") {
        console.log(`[KVStore] Would delete value for key: ${key}`);
      }
      return true;
    } catch (error) {
      console.error(`Failed to delete value for key ${key}:`, error);
      return false;
    }
  }
  /**
   * Check if a key exists
   */
  async exists(key) {
    const prefixedKey = this.prefixKey(key);
    if (this.cache.has(prefixedKey)) {
      return true;
    }
    if (this.useLocalStorage && typeof window !== "undefined") {
      try {
        return localStorage.getItem(prefixedKey) !== null;
      } catch (error) {
        console.warn("Failed to check localStorage:", error);
      }
    }
    return false;
  }
  /**
   * List all keys with a given prefix
   */
  async keys(prefix = "") {
    const fullPrefix = this.prefixKey(prefix);
    const keys = [];
    for (const key of this.cache.keys()) {
      if (key.startsWith(fullPrefix)) {
        keys.push(key.substring(this.storagePrefix.length));
      }
    }
    if (this.useLocalStorage && typeof window !== "undefined") {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(fullPrefix)) {
            const normalizedKey = key.substring(this.storagePrefix.length);
            if (!keys.includes(normalizedKey)) {
              keys.push(normalizedKey);
            }
          }
        }
      } catch (error) {
        console.warn("Failed to list keys from localStorage:", error);
      }
    }
    return keys;
  }
  /**
   * Clear all values in this store
   */
  async clear() {
    try {
      this.cache.clear();
      if (this.useLocalStorage && typeof window !== "undefined") {
        try {
          const keysToRemove = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.storagePrefix)) {
              keysToRemove.push(key);
            }
          }
          keysToRemove.forEach((key) => localStorage.removeItem(key));
        } catch (error) {
          console.warn("Failed to clear localStorage:", error);
        }
      }
      if (process.env["NODE_ENV"] === "development") {
        console.log(
          `[KVStore] Would clear all values with prefix: ${this.storagePrefix}`
        );
      }
    } catch (error) {
      console.error("Failed to clear KV store:", error);
      throw error;
    }
  }
}

function CognitiveModelSelector({
  selectedModelId,
  onSelectModel,
  onStyleConfigChange,
  className
}) {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentModelDetails, setCurrentModelDetails] = useState(null);
  const [styleConfig, setStyleConfig] = useState({
    openness: 5,
    coherence: 7,
    defenseLevel: 5,
    disclosureStyle: "selective",
    challengeResponses: "curious"
  });
  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      setError(null);
      try {
        const kvStore = new KVStore("cognitive_models_", true);
        const modelList = await kvStore.get(
          "patient_models_list"
        );
        if (modelList && modelList.length > 0) {
          setModels(modelList);
          if (!selectedModelId && onSelectModel) {
            onSelectModel(modelList[0].id);
          }
          if (selectedModelId) {
            loadModelDetails(selectedModelId);
          }
        } else {
          setModels([
            {
              id: "example-depression",
              name: "Sarah - Depression",
              presentingIssues: [
                "Depression",
                "Low self-esteem",
                "Work stress"
              ],
              diagnosisSummary: "Major Depressive Disorder"
            },
            {
              id: "example-anxiety",
              name: "Mark - Anxiety",
              presentingIssues: [
                "Generalized anxiety",
                "Panic attacks",
                "Social avoidance"
              ],
              diagnosisSummary: "Generalized Anxiety Disorder"
            },
            {
              id: "example-trauma",
              name: "Elena - Trauma",
              presentingIssues: [
                "PTSD symptoms",
                "Nightmares",
                "Hypervigilance"
              ],
              diagnosisSummary: "Post-Traumatic Stress Disorder"
            }
          ]);
          if (!selectedModelId && onSelectModel) {
            onSelectModel("example-depression");
          }
        }
      } catch (err) {
        console.error("Failed to fetch cognitive models:", err);
        setError("Failed to load patient models. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, [selectedModelId, onSelectModel]);
  const loadModelDetails = async (modelId) => {
    if (!modelId) {
      return;
    }
    try {
      const kvStore = new KVStore("cognitive_models_", true);
      const modelDetails = await kvStore.get(
        `patient_model_${modelId}`
      );
      if (modelDetails) {
        setCurrentModelDetails(modelDetails);
      } else if (modelId === "example-depression") {
        setCurrentModelDetails({
          id: "example-depression",
          name: "Sarah",
          demographicInfo: {
            age: 34,
            gender: "Female",
            occupation: "Marketing Manager",
            familyStatus: "Single",
            culturalFactors: []
          },
          presentingIssues: ["Depression", "Low self-esteem", "Work stress"],
          diagnosisInfo: {
            primaryDiagnosis: "Major Depressive Disorder",
            secondaryDiagnoses: [],
            durationOfSymptoms: "6 months",
            severity: "moderate"
          },
          coreBeliefs: [
            {
              belief: "I'm not good enough",
              strength: 8,
              evidence: [],
              formationContext: "Childhood criticism",
              relatedDomains: ["work", "relationships"]
            },
            {
              belief: "I'm going to fail",
              strength: 7,
              evidence: [],
              formationContext: "Past work setbacks",
              relatedDomains: ["career", "future"]
            }
          ],
          distortionPatterns: [],
          behavioralPatterns: [],
          emotionalPatterns: [],
          relationshipPatterns: [],
          formativeExperiences: [],
          therapyHistory: {
            previousApproaches: [],
            helpfulInterventions: [],
            unhelpfulInterventions: [],
            insights: [],
            progressMade: "",
            remainingChallenges: []
          },
          conversationalStyle: {
            verbosity: 5,
            emotionalExpressiveness: 5,
            insightLevel: 3,
            preferredCommunicationModes: []
          },
          goalsForTherapy: [],
          therapeuticProgress: {
            insights: [],
            skillsAcquired: [],
            resistanceLevel: 5,
            changeReadiness: "contemplation",
            sessionProgressLog: [],
            trustLevel: 5,
            rapportScore: 5,
            therapistPerception: "neutral",
            transferenceState: "none"
          }
        });
      } else if (modelId === "example-anxiety") {
        setCurrentModelDetails({
          id: "example-anxiety",
          name: "Mark",
          demographicInfo: {
            age: 29,
            gender: "Male",
            occupation: "Software Developer",
            familyStatus: "Married",
            culturalFactors: []
          },
          presentingIssues: [
            "Generalized anxiety",
            "Panic attacks",
            "Social avoidance"
          ],
          diagnosisInfo: {
            primaryDiagnosis: "Generalized Anxiety Disorder",
            secondaryDiagnoses: [],
            durationOfSymptoms: "2 years",
            severity: "severe"
          },
          coreBeliefs: [
            {
              belief: "I'm always in danger",
              strength: 8,
              evidence: [],
              formationContext: "Childhood trauma",
              relatedDomains: ["safety", "health"]
            },
            {
              belief: "I can't handle uncertainty",
              strength: 9,
              evidence: [],
              formationContext: "Unpredictable family environment",
              relatedDomains: ["control", "future"]
            }
          ],
          distortionPatterns: [],
          behavioralPatterns: [],
          emotionalPatterns: [],
          relationshipPatterns: [],
          formativeExperiences: [],
          therapyHistory: {
            previousApproaches: [],
            helpfulInterventions: [],
            unhelpfulInterventions: [],
            insights: [],
            progressMade: "",
            remainingChallenges: []
          },
          conversationalStyle: {
            verbosity: 5,
            emotionalExpressiveness: 5,
            insightLevel: 3,
            preferredCommunicationModes: []
          },
          goalsForTherapy: [],
          therapeuticProgress: {
            insights: [],
            skillsAcquired: [],
            resistanceLevel: 5,
            changeReadiness: "contemplation",
            sessionProgressLog: [],
            trustLevel: 5,
            rapportScore: 5,
            therapistPerception: "neutral",
            transferenceState: "none"
          }
        });
      } else if (modelId === "example-trauma") {
        setCurrentModelDetails({
          id: "example-trauma",
          name: "Elena",
          demographicInfo: {
            age: 42,
            gender: "Female",
            occupation: "Teacher",
            familyStatus: "Divorced",
            culturalFactors: []
          },
          presentingIssues: ["PTSD symptoms", "Nightmares", "Hypervigilance"],
          diagnosisInfo: {
            primaryDiagnosis: "Post-Traumatic Stress Disorder",
            secondaryDiagnoses: [],
            durationOfSymptoms: "1 year",
            severity: "moderate"
          },
          coreBeliefs: [
            {
              belief: "The world is dangerous",
              strength: 9,
              evidence: [],
              formationContext: "Traumatic incident",
              relatedDomains: ["safety", "trust"]
            },
            {
              belief: "I have to be on guard at all times",
              strength: 8,
              evidence: [],
              formationContext: "Post-trauma hypervigilance",
              relatedDomains: ["safety", "control"]
            }
          ],
          distortionPatterns: [],
          behavioralPatterns: [],
          emotionalPatterns: [],
          relationshipPatterns: [],
          formativeExperiences: [],
          therapyHistory: {
            previousApproaches: [],
            helpfulInterventions: [],
            unhelpfulInterventions: [],
            insights: [],
            progressMade: "",
            remainingChallenges: []
          },
          conversationalStyle: {
            verbosity: 5,
            emotionalExpressiveness: 5,
            insightLevel: 3,
            preferredCommunicationModes: []
          },
          goalsForTherapy: [],
          therapeuticProgress: {
            insights: [],
            skillsAcquired: [],
            resistanceLevel: 5,
            changeReadiness: "contemplation",
            sessionProgressLog: [],
            trustLevel: 5,
            rapportScore: 5,
            therapistPerception: "neutral",
            transferenceState: "none"
          }
        });
      }
    } catch (err) {
      console.error(`Failed to load model details for ${modelId}:`, err);
    }
  };
  const handleModelSelect = (modelId) => {
    onSelectModel(modelId);
    loadModelDetails(modelId);
  };
  const handleStyleChange = (field, value) => {
    const updatedConfig = {
      ...styleConfig,
      [field]: value
    };
    setStyleConfig(updatedConfig);
    if (onStyleConfigChange) {
      onStyleConfigChange(updatedConfig);
    }
  };
  const handleDisclosureStyleChange = (style) => {
    handleStyleChange("disclosureStyle", style);
  };
  const handleChallengeResponseChange = (response) => {
    handleStyleChange("challengeResponses", response);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center p-4", children: "Loading patient models..." });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "text-red-500 p-4", children: error });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "patient-model-selector bg-gray-50 border rounded-lg p-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-4", children: "Select Patient Profile" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium mb-2", children: "Available Profiles" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: models.map((model) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: cn(
                  "w-full text-left p-3 rounded-md border transition-colors",
                  selectedModelId === model.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-100"
                ),
                onClick: () => handleModelSelect(model.id),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium", children: model.name }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: model.presentingIssues.join(", ") }),
                  model.diagnosisSummary && /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-1", children: model.diagnosisSummary })
                ]
              },
              model.id
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            currentModelDetails && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium mb-2", children: "Patient Details" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-md p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Name" }),
                    /* @__PURE__ */ jsx("div", { children: currentModelDetails.name })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Age" }),
                    /* @__PURE__ */ jsx("div", { children: currentModelDetails.demographicInfo?.age })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Gender" }),
                    /* @__PURE__ */ jsx("div", { children: currentModelDetails.demographicInfo?.gender })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Occupation" }),
                    /* @__PURE__ */ jsx("div", { children: currentModelDetails.demographicInfo?.occupation })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Presenting Issues" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: currentModelDetails.presentingIssues?.map(
                    (issue, index) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded",
                        children: issue
                      },
                      `issue-${issue}-${index}`
                    )
                  ) })
                ] }),
                currentModelDetails.coreBeliefs?.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Core Beliefs" }),
                  /* @__PURE__ */ jsx("ul", { className: "mt-1 text-sm", children: currentModelDetails.coreBeliefs.map(
                    (belief, index) => /* @__PURE__ */ jsxs(
                      "li",
                      {
                        className: "mb-1",
                        children: [
                          "“",
                          belief.belief,
                          "” (Strength:",
                          " ",
                          belief.strength,
                          "/10)"
                        ]
                      },
                      `belief-${belief.belief}-${index}`
                    )
                  ) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium mb-2", children: "Response Style Configuration" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-md p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "openness-slider",
                      className: "text-xs text-gray-500 block mb-1",
                      children: "Openness (1 = Closed, 10 = Very Open)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "openness-slider",
                      type: "range",
                      min: "1",
                      max: "10",
                      value: styleConfig.openness,
                      onChange: (e) => handleStyleChange("openness", parseInt(e.target.value)),
                      className: "w-full",
                      "aria-label": "Openness level from 1 to 10"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
                    /* @__PURE__ */ jsx("span", { children: "Closed" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Value: ",
                      styleConfig.openness
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "Open" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "coherence-slider",
                      className: "text-xs text-gray-500 block mb-1",
                      children: "Coherence (1 = Disorganized, 10 = Very Organized)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "coherence-slider",
                      type: "range",
                      min: "1",
                      max: "10",
                      value: styleConfig.coherence,
                      onChange: (e) => handleStyleChange("coherence", parseInt(e.target.value)),
                      className: "w-full",
                      "aria-label": "Coherence level from 1 to 10"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
                    /* @__PURE__ */ jsx("span", { children: "Disorganized" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Value: ",
                      styleConfig.coherence
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "Organized" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "defense-slider",
                      className: "text-xs text-gray-500 block mb-1",
                      children: "Defense Level (1 = Low Defenses, 10 = High Defenses)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "defense-slider",
                      type: "range",
                      min: "1",
                      max: "10",
                      value: styleConfig.defenseLevel,
                      onChange: (e) => handleStyleChange("defenseLevel", parseInt(e.target.value)),
                      className: "w-full",
                      "aria-label": "Defense level from 1 to 10"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
                    /* @__PURE__ */ jsx("span", { children: "Low" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Value: ",
                      styleConfig.defenseLevel
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "High" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "disclosure-style",
                      className: "text-xs text-gray-500 block mb-1",
                      children: "Disclosure Style"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-1", children: ["guarded", "selective", "reflective", "open"].map((style) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: cn(
                        "text-xs py-1 px-2 rounded",
                        styleConfig.disclosureStyle === style ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"
                      ),
                      onClick: () => handleDisclosureStyleChange(style),
                      children: style.charAt(0).toUpperCase() + style.slice(1)
                    },
                    style
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "challenge-response",
                      className: "text-xs text-gray-500 block mb-1",
                      children: "Response to Challenges"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-1", children: ["defensive", "curious", "dismissive", "receptive"].map((response) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: cn(
                        "text-xs py-1 px-2 rounded",
                        styleConfig.challengeResponses === response ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"
                      ),
                      onClick: () => handleChallengeResponseChange(response),
                      children: response.charAt(0).toUpperCase() + response.slice(1)
                    },
                    response
                  )) })
                ] })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}

class PatientModelService {
  constructor(kvStore) {
    this.kvStore = kvStore;
  }
  /**
   * Get all available cognitive models
   */
  async getAvailableModels() {
    try {
      const keys = await this.kvStore.keys();
      const models = [];
      for (const key of keys) {
        const model = await this.kvStore.get(key);
        if (model) {
          models.push(model);
        }
      }
      return models;
    } catch (error) {
      console.error("Failed to get available models:", error);
      return [];
    }
  }
  /**
   * Save a cognitive model
   */
  async saveModel(model) {
    try {
      await this.kvStore.set(model.id, model);
    } catch (error) {
      console.error("Failed to save model:", error);
      throw error;
    }
  }
  /**
   * Get a specific model by ID
   */
  async getModel(id) {
    try {
      return await this.kvStore.get(id);
    } catch (error) {
      console.error("Failed to get model:", error);
      return null;
    }
  }
  /**
   * Delete a model by ID
   */
  async deleteModel(id) {
    try {
      await this.kvStore.delete(id);
    } catch (error) {
      console.error("Failed to delete model:", error);
      throw error;
    }
  }
}

function usePatientModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patientService, setPatientService] = useState(null);
  const [availableModels, setAvailableModels] = useState([]);
  const [currentModelId, setCurrentModelId] = useState(null);
  const [currentModel, setCurrentModel] = useState(null);
  const [styleConfig, setStyleConfig] = useState({
    openness: 5,
    coherence: 7,
    defenseLevel: 5,
    disclosureStyle: "selective",
    challengeResponses: "curious"
  });
  useEffect(() => {
    const kvStore = new KVStore("cognitive_models_", true);
    const service = new PatientModelService(kvStore);
    setPatientService(service);
    const loadModels = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const models = await service.getAvailableModels();
        setAvailableModels(models);
        if (models.length > 0 && !currentModelId) {
          setCurrentModelId(models[0].id);
        }
      } catch (err) {
        console.error("Failed to load patient models:", err);
        setError("Failed to load available patient models");
      } finally {
        setIsLoading(false);
      }
    };
    loadModels();
  }, [currentModelId]);
  useEffect(() => {
    if (!patientService || !currentModelId) {
      return;
    }
    const loadModel = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const model = await patientService.getModelById(currentModelId);
        if (model) {
          setCurrentModel(model);
        } else {
          setError(`Could not load patient model with ID: ${currentModelId}`);
        }
      } catch (err) {
        console.error(`Failed to load patient model ${currentModelId}:`, err);
        setError(
          `Error loading patient model: ${err instanceof Error ? err.message : String(err)}`
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadModel();
  }, [patientService, currentModelId]);
  const selectModel = useCallback$1((modelId) => {
    setCurrentModelId(modelId);
  }, []);
  const updateStyleConfig = useCallback$1(
    (newConfig) => {
      setStyleConfig((prevConfig) => ({
        ...prevConfig,
        ...newConfig
      }));
    },
    []
  );
  const generatePatientResponse = useCallback$1(
    async (conversationHistory, currentTherapeuticFocus, sessionNumber = 1) => {
      if (!patientService || !currentModelId || !currentModel) {
        throw new Error(
          "Patient model service not initialized or no model selected"
        );
      }
      try {
        const responseContext = await patientService.createResponseContext(
          currentModelId,
          conversationHistory,
          styleConfig,
          currentTherapeuticFocus,
          sessionNumber
        );
        if (!responseContext) {
          throw new Error("Failed to create response context");
        }
        const prompt = patientService.generatePatientPrompt(responseContext);
        return {
          prompt,
          context: responseContext
        };
      } catch (err) {
        console.error("Failed to generate patient response:", err);
        throw err;
      }
    },
    [patientService, currentModelId, currentModel, styleConfig]
  );
  return {
    isLoading,
    error,
    availableModels,
    currentModelId,
    currentModel,
    styleConfig,
    selectModel,
    updateStyleConfig,
    generatePatientResponse
  };
}

const sampleCognitiveModels = [
  {
    id: "depression-model",
    name: "Sarah",
    demographicInfo: {
      age: 34,
      gender: "Female",
      occupation: "Marketing Manager",
      familyStatus: "Single",
      culturalFactors: ["Western", "Urban"]
    },
    presentingIssues: [
      "Depression",
      "Low self-esteem",
      "Work stress",
      "Insomnia"
    ],
    diagnosisInfo: {
      primaryDiagnosis: "Major Depressive Disorder",
      secondaryDiagnoses: ["Generalized Anxiety Disorder"],
      durationOfSymptoms: "8 months",
      severity: "moderate"
    },
    coreBeliefs: [
      {
        belief: "I'm not good enough",
        strength: 8,
        evidence: [
          "Got passed over for promotion last year",
          "Previous relationship ended after 2 years",
          "Parents frequently criticized academic performance"
        ],
        formationContext: "Developed during childhood from parental criticism and academic pressure",
        relatedDomains: ["work", "relationships", "self-worth"]
      },
      {
        belief: "I'm a burden to others",
        strength: 7,
        evidence: [
          "Friends seemed annoyed when I needed support",
          "Team members have to help with my work when I fall behind",
          "My sister had to drive me to appointments during difficult period"
        ],
        formationContext: "Reinforced during major depressive episode last year",
        relatedDomains: ["relationships", "social", "family"]
      },
      {
        belief: "I'll never succeed at anything important",
        strength: 9,
        evidence: [
          "Failed to complete MBA program",
          "Haven't received promotion in current role",
          "Failed at maintaining long-term relationship"
        ],
        formationContext: "College experiences of academic challenges",
        relatedDomains: ["career", "achievement", "future"]
      }
    ],
    distortionPatterns: [
      {
        type: "Catastrophizing",
        examples: [
          "If I make a mistake on this presentation, I'll definitely get fired",
          "If I show any weakness at work, everyone will lose respect for me immediately",
          "This headache probably means I have a serious illness"
        ],
        triggerThemes: [
          "work pressure",
          "evaluation",
          "health concerns",
          "mistakes"
        ],
        frequency: "frequent"
      },
      {
        type: "Mind Reading",
        examples: [
          "My boss thinks I'm incompetent",
          "My coworkers don't want me on their team",
          "My date didn't call because they thought I was boring"
        ],
        triggerThemes: [
          "social situations",
          "workplace interactions",
          "relationships"
        ],
        frequency: "frequent"
      },
      {
        type: "Disqualifying the Positive",
        examples: [
          "They only complimented my work to be nice",
          "I only got the project because no one else was available",
          "They're just saying that to make me feel better"
        ],
        triggerThemes: ["praise", "recognition", "success"],
        frequency: "pervasive"
      }
    ],
    behavioralPatterns: [
      {
        trigger: "Work deadlines approaching",
        response: "Procrastination followed by late nights, reducing sleep",
        reinforcers: [
          "Short-term anxiety reduction",
          "Avoiding facing potential failure"
        ],
        consequences: [
          "Increased stress",
          "Poor quality work",
          "Physical exhaustion"
        ],
        alternateTried: ["Setting earlier personal deadlines"]
      },
      {
        trigger: "Social invitations",
        response: "Making excuses to cancel at last minute",
        reinforcers: [
          "Avoiding potential social judgment",
          "Short-term anxiety relief"
        ],
        consequences: [
          "Increasing isolation",
          "Loss of friendships",
          "Reinforces belief of being unlikeable"
        ],
        alternateTried: ["Committed to shorter events"]
      },
      {
        trigger: "Criticism at work",
        response: "Overworking to prove worth, neglecting personal needs",
        reinforcers: ["Temporary sense of control", "Avoid rejection"],
        consequences: [
          "Burnout",
          "Reduced life satisfaction",
          "Reinforces worth tied to productivity"
        ],
        alternateTried: ["Asking for clarification on criticism"]
      }
    ],
    emotionalPatterns: [
      {
        emotion: "Sadness",
        intensity: 8,
        triggers: [
          "Being alone on weekends",
          "Seeing social media posts of friends",
          "Family gatherings"
        ],
        physicalManifestations: [
          "Tightness in chest",
          "Tearfulness",
          "Low energy"
        ],
        copingMechanisms: [
          "Sleeping",
          "Isolating further",
          "Binge watching TV"
        ]
      },
      {
        emotion: "Anxiety",
        intensity: 7,
        triggers: [
          "Performance reviews",
          "Deadlines",
          "Team meetings",
          "Dating"
        ],
        physicalManifestations: [
          "Racing heart",
          "Shallow breathing",
          "Tension headaches"
        ],
        copingMechanisms: ["Avoidance", "Procrastination", "Perfectionism"]
      },
      {
        emotion: "Shame",
        intensity: 9,
        triggers: [
          "Making mistakes",
          "Asking for help",
          "Talking about feelings"
        ],
        physicalManifestations: [
          "Flushing",
          "Avoiding eye contact",
          "Hunched posture"
        ],
        copingMechanisms: ["Self-criticism", "Withdrawing", "Overcompensation"]
      }
    ],
    relationshipPatterns: [
      {
        type: "Romantic",
        expectations: [
          "Partner will eventually find my flaws and leave",
          "I need to be perfect to be lovable"
        ],
        fears: ["Abandonment", "Being vulnerable", "Being controlled"],
        behaviors: [
          "Emotional distancing",
          "Testing relationship",
          "Difficulty expressing needs"
        ],
        historicalOutcomes: [
          "Series of relationships ending after 1-2 years",
          "Partners complaining about emotional walls"
        ]
      },
      {
        type: "Friendships",
        expectations: [
          "I'm a burden when I share problems",
          "Friends prefer others over me"
        ],
        fears: ["Rejection", "Being judged", "Being a burden"],
        behaviors: [
          "Providing support but rarely asking for it",
          "Cancelling plans often",
          "Difficulty with closeness"
        ],
        historicalOutcomes: [
          "Superficial friendships",
          "Decreasing social circle",
          "Friends eventually giving up"
        ]
      },
      {
        type: "Professional",
        expectations: [
          "Colleagues will find out I'm incompetent",
          "Authority figures will be critical"
        ],
        fears: ["Failure", "Criticism", "Exposure as inadequate"],
        behaviors: [
          "Overworking",
          "Reluctance to speak in meetings",
          "Difficulty delegating"
        ],
        historicalOutcomes: [
          "Burnout in previous positions",
          "Limited career advancement despite capabilities"
        ]
      }
    ],
    formativeExperiences: [
      {
        age: 9,
        event: "Parents' divorce",
        impact: "Lost stable home environment and frequent contact with father",
        beliefsFormed: [
          "Relationships don't last",
          "I wasn't important enough for dad to stay"
        ],
        emotionalResponse: "Abandonment and confusion"
      },
      {
        age: 13,
        event: "Academic struggles after changing to competitive school",
        impact: "Lost confidence in academic abilities, began defining worth through achievement",
        beliefsFormed: [
          "I'm not smart enough",
          "I have to work harder than others to be acceptable"
        ],
        emotionalResponse: "Shame and inadequacy"
      },
      {
        age: 24,
        event: "First serious relationship ended after partner cheated",
        impact: "Developed trust issues and fear of vulnerability in relationships",
        beliefsFormed: [
          "I'm not enough to keep someone faithful",
          "Getting close leads to pain"
        ],
        emotionalResponse: "Betrayal and worthlessness"
      }
    ],
    therapyHistory: {
      previousApproaches: [
        "CBT briefly in college",
        "Self-help books",
        "Medication (SSRIs)"
      ],
      helpfulInterventions: [
        "Medication reduced worst depressive symptoms",
        "Activity scheduling helped with isolation"
      ],
      unhelpfulInterventions: [
        "Generic positive affirmations",
        "Advice to 'just be more social'"
      ],
      insights: [
        "Recognize connection between perfectionism and family expectations",
        "Awareness of avoidance patterns"
      ],
      progressMade: "Some reduction in worst depressive episodes, better at recognizing negative thought patterns",
      remainingChallenges: [
        "Difficulty implementing cognitive strategies when stressed",
        "Self-worth still tied to achievement",
        "Avoidance patterns in relationships"
      ]
    },
    conversationalStyle: {
      verbosity: 6,
      emotionalExpressiveness: 4,
      resistance: 6,
      insightLevel: 7,
      preferredCommunicationModes: [
        "Intellectual discussion",
        "Metaphors",
        "Practical examples"
      ]
    },
    goalsForTherapy: [
      "Reduce depressive episodes",
      "Develop healthier work-life balance",
      "Improve ability to maintain close relationships",
      "Find sources of self-worth beyond achievement"
    ],
    therapeuticProgress: {
      insights: [
        {
          belief: "I'm not good enough",
          insight: "Recognizing this comes from childhood criticism",
          dateAchieved: "2024-08-15"
        }
      ],
      resistanceLevel: 6,
      changeReadiness: "contemplation",
      sessionProgressLog: [
        {
          sessionNumber: 1,
          keyInsights: ["Identified pattern of avoidance in social situations"],
          resistanceShift: 0
        },
        {
          sessionNumber: 2,
          keyInsights: ["Connected perfectionism to parental expectations"],
          resistanceShift: -1
        }
      ],
      trustLevel: 5,
      rapportScore: 5,
      therapistPerception: "neutral",
      transferenceState: "none"
    }
  },
  {
    id: "anxiety-model",
    name: "Mark",
    demographicInfo: {
      age: 29,
      gender: "Male",
      occupation: "Software Developer",
      familyStatus: "Married",
      culturalFactors: ["Asian American", "First-generation immigrant"]
    },
    presentingIssues: [
      "Generalized anxiety",
      "Panic attacks",
      "Social avoidance",
      "Perfectionism"
    ],
    diagnosisInfo: {
      primaryDiagnosis: "Generalized Anxiety Disorder",
      secondaryDiagnoses: ["Panic Disorder", "Social Anxiety Features"],
      durationOfSymptoms: "5 years, worsening last 18 months",
      severity: "severe"
    },
    coreBeliefs: [
      {
        belief: "I'm always in danger",
        strength: 8,
        evidence: [
          "Had a panic attack on the subway and thought I was dying",
          "Coworker was let go suddenly, could happen to me too",
          "News constantly showing terrible things happening to people"
        ],
        formationContext: "Father's frequent warnings about dangers in the world",
        relatedDomains: ["safety", "health", "uncertainty"]
      },
      {
        belief: "If I'm not perfect, I'm a failure",
        strength: 9,
        evidence: [
          "Parents always emphasized being the best in school",
          "Got feedback about minor bugs in code review",
          "Wife seemed disappointed when I couldn't fix household problem"
        ],
        formationContext: "High-achieving family with strong educational emphasis",
        relatedDomains: ["work", "competence", "family expectations"]
      },
      {
        belief: "I can't handle uncertainty",
        strength: 9,
        evidence: [
          "Became extremely anxious when project deadlines changed",
          "Panic when traveling without detailed itinerary",
          "Struggle with unexpected changes to routine"
        ],
        formationContext: "Highly structured childhood with emphasis on planning",
        relatedDomains: ["control", "future", "planning"]
      }
    ],
    distortionPatterns: [
      {
        type: "Catastrophizing",
        examples: [
          "This chest pain probably means I'm having a heart attack",
          "If I make a mistake on this code, the entire system will crash and I'll be fired",
          "If I'm late to this meeting, my career at this company is over"
        ],
        triggerThemes: [
          "physical sensations",
          "work responsibilities",
          "social obligations"
        ],
        frequency: "pervasive"
      },
      {
        type: "Fortune Telling",
        examples: [
          "This project is going to fail",
          "I'll definitely have a panic attack if I go to that party",
          "My manager will be disappointed with my performance review"
        ],
        triggerThemes: [
          "future events",
          "social gatherings",
          "performance evaluations"
        ],
        frequency: "frequent"
      },
      {
        type: "Black and White Thinking",
        examples: [
          "Either my code is perfect or it's worthless",
          "If I'm not the top performer, I'm failing",
          "People either completely accept me or completely reject me"
        ],
        triggerThemes: [
          "work performance",
          "social acceptance",
          "personal standards"
        ],
        frequency: "frequent"
      }
    ],
    behavioralPatterns: [
      {
        trigger: "Deadline approaching",
        response: "Excessive checking and rechecking work, staying extremely late",
        reinforcers: ["Temporary reduction in anxiety", "Feeling of control"],
        consequences: [
          "Exhaustion",
          "Reduced productivity",
          "Strain on marriage"
        ],
        alternateTried: ["Setting time limits for review"]
      },
      {
        trigger: "Social events",
        response: "Making excuses to avoid attending or leaving very early",
        reinforcers: [
          "Immediate anxiety relief",
          "Avoiding perceived judgment"
        ],
        consequences: [
          "Limited networking opportunities",
          "Reduced friendships",
          "Reputation as antisocial"
        ],
        alternateTried: ["Attending with supportive spouse"]
      },
      {
        trigger: "Physical sensations (rapid heartbeat, dizziness)",
        response: "Checking vitals, researching symptoms online, seeking medical reassurance",
        reinforcers: [
          "Temporary relief from health anxiety",
          "Feeling of taking action"
        ],
        consequences: [
          "Increased health focus",
          "Multiple unnecessary doctor visits",
          "Reinforced anxiety cycle"
        ],
        alternateTried: ["Deep breathing", "Distraction techniques"]
      }
    ],
    emotionalPatterns: [
      {
        emotion: "Anxiety",
        intensity: 9,
        triggers: [
          "Deadlines",
          "Meetings with leadership",
          "Health-related news",
          "Social invitations"
        ],
        physicalManifestations: [
          "Rapid heartbeat",
          "Sweating",
          "Shortness of breath",
          "Trembling"
        ],
        copingMechanisms: [
          "Avoidance",
          "Overpreparing",
          "Seeking reassurance",
          "Medication"
        ]
      },
      {
        emotion: "Guilt",
        intensity: 7,
        triggers: [
          "Taking time off work",
          "Saying no to requests",
          "Not meeting personal standards"
        ],
        physicalManifestations: [
          "Stomach tightness",
          "Hunched posture",
          "Difficulty sleeping"
        ],
        copingMechanisms: [
          "Overcompensating",
          "Apologizing excessively",
          "Working longer hours"
        ]
      },
      {
        emotion: "Frustration",
        intensity: 8,
        triggers: [
          "Technology not working",
          "Unclear instructions",
          "Changes to plans"
        ],
        physicalManifestations: [
          "Muscle tension",
          "Headaches",
          "Jaw clenching"
        ],
        copingMechanisms: [
          "Controlling environment",
          "Creating detailed plans",
          "Isolation"
        ]
      }
    ],
    relationshipPatterns: [
      {
        type: "Marital",
        expectations: [
          "My spouse should help reduce my anxiety",
          "I need to be the 'provider' and problem-solver"
        ],
        fears: [
          "Being a burden",
          "Not meeting wife's expectations",
          "Being seen as weak"
        ],
        behaviors: [
          "Hiding anxiety symptoms",
          "Withdrawing when stressed",
          "Working late to avoid discussions"
        ],
        historicalOutcomes: [
          "Wife feels shut out",
          "Communication problems",
          "Missing family events due to work"
        ]
      },
      {
        type: "Professional",
        expectations: [
          "Colleagues will lose respect if I show anxiety",
          "I must handle everything independently"
        ],
        fears: [
          "Being exposed as incompetent",
          "Rejection by team",
          "Being seen as unstable"
        ],
        behaviors: [
          "Not asking for help",
          "Overworking",
          "Minimal participation in team social events"
        ],
        historicalOutcomes: [
          "Limited career advancement despite technical skills",
          "Viewed as competent but distant"
        ]
      },
      {
        type: "Family",
        expectations: [
          "I should live up to family's academic/career expectations",
          "Showing anxiety disappoints parents"
        ],
        fears: [
          "Disappointing parents",
          "Being compared unfavorably to relatives",
          "Perceived as weak"
        ],
        behaviors: [
          "Discussing only achievements",
          "Avoiding family gatherings during high-stress periods"
        ],
        historicalOutcomes: [
          "Superficial relationships with extended family",
          "Parents unaware of anxiety struggles"
        ]
      }
    ],
    formativeExperiences: [
      {
        age: 10,
        event: "Moved to United States from overseas",
        impact: "Lost familiar environment and friend group, had to adapt to new language and culture",
        beliefsFormed: [
          "The world is unpredictable and unsafe",
          "I have to work harder than others to fit in"
        ],
        emotionalResponse: "Fear and isolation"
      },
      {
        age: 15,
        event: "Father lost job and family experienced financial instability",
        impact: "Family stress, pressure to succeed academically to ensure future stability",
        beliefsFormed: [
          "Financial and job security can disappear at any time",
          "My academic success is crucial to family wellbeing"
        ],
        emotionalResponse: "Anxiety and responsibility"
      },
      {
        age: 23,
        event: "Experienced first major panic attack during graduate school presentation",
        impact: "Developed fear of public speaking and social situations where escape might be difficult",
        beliefsFormed: [
          "My body will betray me in important moments",
          "Others will see my weakness and judge me"
        ],
        emotionalResponse: "Shame and fear"
      }
    ],
    therapyHistory: {
      previousApproaches: [
        "Medication (SSRIs, benzodiazepines)",
        "Brief counseling through EAP"
      ],
      helpfulInterventions: [
        "Medication reduced intensity of panic attacks",
        "Learning about anxiety physiology"
      ],
      unhelpfulInterventions: [
        "Being told to 'just relax'",
        "Meditation alone without other skills"
      ],
      insights: [
        "Recognition of perfectionism's role in maintaining anxiety",
        "Understanding of physical stress responses"
      ],
      progressMade: "Better management of panic attacks, some reduction in avoidance behaviors",
      remainingChallenges: [
        "Persistent worry",
        "Difficulty with work-life balance",
        "Social anxiety in professional settings"
      ]
    },
    conversationalStyle: {
      verbosity: 5,
      emotionalExpressiveness: 3,
      resistance: 7,
      insightLevel: 8,
      preferredCommunicationModes: [
        "Logical analysis",
        "Problem-solving",
        "Concrete examples"
      ]
    },
    goalsForTherapy: [
      "Reduce frequency and intensity of panic attacks",
      "Develop tools to manage worry thoughts",
      "Improve work-life balance",
      "Build comfort in social professional settings"
    ],
    therapeuticProgress: {
      insights: [
        {
          belief: "I'm always in danger",
          insight: "Recognizing anxiety creates danger-focused thinking",
          dateAchieved: "2024-09-02"
        }
      ],
      resistanceLevel: 7,
      changeReadiness: "contemplation",
      sessionProgressLog: [
        {
          sessionNumber: 1,
          keyInsights: [
            "Identified connection between perfectionism and anxiety"
          ],
          resistanceShift: 0
        },
        {
          sessionNumber: 2,
          keyInsights: ["Practiced basic breathing techniques"],
          resistanceShift: -1
        }
      ],
      trustLevel: 6,
      // Slightly higher start for someone actively seeking help for severe anxiety
      rapportScore: 5,
      therapistPerception: "neutral",
      transferenceState: "none"
    }
  },
  {
    id: "trauma-model",
    name: "Elena",
    demographicInfo: {
      age: 42,
      gender: "Female",
      occupation: "Elementary School Teacher",
      familyStatus: "Divorced, two children (ages 12 and 15)",
      culturalFactors: ["Hispanic", "Catholic background"]
    },
    presentingIssues: [
      "PTSD symptoms",
      "Nightmares",
      "Hypervigilance",
      "Emotional numbing",
      "Sleep disturbance"
    ],
    diagnosisInfo: {
      primaryDiagnosis: "Post-Traumatic Stress Disorder",
      secondaryDiagnoses: ["Major Depressive Disorder - Moderate"],
      durationOfSymptoms: "3 years since major trauma, lifelong adversity",
      severity: "moderate"
    },
    coreBeliefs: [
      {
        belief: "The world is dangerous",
        strength: 9,
        evidence: [
          "Home invasion 3 years ago",
          "Abusive marriage for 8 years",
          "Childhood neighborhood was high-crime",
          "News of school shootings"
        ],
        formationContext: "Traumatic experiences throughout life reinforced by recent trauma",
        relatedDomains: ["safety", "home", "trust"]
      },
      {
        belief: "I have to be on guard at all times",
        strength: 8,
        evidence: [
          "Didn't notice warning signs before ex-husband became abusive",
          "Didn't hear intruder enter home during invasion",
          "Childhood household was unpredictable"
        ],
        formationContext: "Learned in childhood that danger can appear suddenly",
        relatedDomains: ["safety", "control", "awareness"]
      },
      {
        belief: "I am damaged by what happened to me",
        strength: 7,
        evidence: [
          "Can't sleep without medication",
          "Relationships have suffered",
          "Children have seen me have panic attacks",
          "Can't enjoy things I used to"
        ],
        formationContext: "Developed after home invasion trauma when symptoms didn't improve with time",
        relatedDomains: ["self-concept", "future", "healing"]
      }
    ],
    distortionPatterns: [
      {
        type: "Hypervigilance",
        examples: [
          "Checking the locks multiple times every night",
          "Feeling startled by normal sounds in the house",
          "Constantly scanning for threats in public places"
        ],
        triggerThemes: [
          "safety concerns",
          "unexpected noises",
          "being alone",
          "nighttime"
        ],
        frequency: "pervasive"
      },
      {
        type: "Catastrophizing",
        examples: [
          "If I hear a noise at night, it must be an intruder",
          "My children aren't answering their phones because something terrible happened",
          "These physical symptoms probably mean I have a serious illness"
        ],
        triggerThemes: [
          "uncertainty",
          "children's safety",
          "physical sensations"
        ],
        frequency: "frequent"
      },
      {
        type: "Overgeneralization",
        examples: [
          "I'll never feel safe again",
          "No one can be trusted completely",
          "Danger is everywhere"
        ],
        triggerThemes: ["security", "trust", "future planning"],
        frequency: "frequent"
      }
    ],
    behavioralPatterns: [
      {
        trigger: "Being alone at home, especially at night",
        response: "Excessive checking of doors/windows, keeping lights on, having phone ready",
        reinforcers: ["Temporary reduction in anxiety", "Sense of control"],
        consequences: [
          "Sleep disruption",
          "Increased hypervigilance",
          "High utility bills"
        ],
        alternateTried: ["Getting a security system"]
      },
      {
        trigger: "Reminders of trauma (news stories, sounds similar to break-in)",
        response: "Emotional shutdown, distancing from others, keeping busy with tasks",
        reinforcers: ["Avoids overwhelming emotions", "Maintains functioning"],
        consequences: [
          "Emotional numbness",
          "Disconnection from children",
          "Exhaustion"
        ],
        alternateTried: ["Brief counseling after trauma"]
      },
      {
        trigger: "Children going out with friends or to school",
        response: "Excessive checking in, difficulty concentrating until they return",
        reinforcers: [
          "Momentary relief when children respond",
          "Feeling like a protective parent"
        ],
        consequences: [
          "Children feel smothered",
          "Inability to focus on work",
          "Reinforces hypervigilance"
        ],
        alternateTried: ["Using family location app"]
      }
    ],
    emotionalPatterns: [
      {
        emotion: "Fear",
        intensity: 9,
        triggers: [
          "Unexpected noises",
          "Being alone",
          "Children being away from home",
          "Darkness"
        ],
        physicalManifestations: [
          "Racing heart",
          "Sweating",
          "Muscle tension",
          "Shallow breathing"
        ],
        copingMechanisms: [
          "Checking behaviors",
          "Avoidance",
          "Distraction through work",
          "Prayer"
        ]
      },
      {
        emotion: "Numbness",
        intensity: 7,
        triggers: [
          "Overwhelming situations",
          "Direct questions about trauma",
          "Intimate relationships"
        ],
        physicalManifestations: [
          "Feeling disconnected from body",
          "Fatigue",
          "Blank facial expression"
        ],
        copingMechanisms: [
          "Keeping busy",
          "Focus on children's needs",
          "Isolation"
        ]
      },
      {
        emotion: "Anger",
        intensity: 8,
        triggers: [
          "Feeling vulnerable",
          "Reminders of ex-husband",
          "Perceived system failures"
        ],
        physicalManifestations: [
          "Tension headaches",
          "Jaw clenching",
          "Stomach problems"
        ],
        copingMechanisms: [
          "Suppression",
          "Redirecting to protective actions",
          "Physical activity"
        ]
      }
    ],
    relationshipPatterns: [
      {
        type: "Parental",
        expectations: [
          "I must protect my children from all dangers",
          "I should hide my struggles to avoid burdening them"
        ],
        fears: [
          "Failing to keep children safe",
          "Damaging children through my trauma responses",
          "Children experiencing trauma"
        ],
        behaviors: [
          "Overprotective restrictions",
          "Checking behaviors",
          "Difficulty with children's independence"
        ],
        historicalOutcomes: [
          "Growing tension with teenage children",
          "Children becoming secretive",
          "Difficulty balancing protection and autonomy"
        ]
      },
      {
        type: "Romantic",
        expectations: [
          "Potential partners will eventually become controlling like ex-husband",
          "Vulnerability leads to harm"
        ],
        fears: ["Being trapped again", "Being hurt", "Losing independence"],
        behaviors: [
          "Avoiding dating",
          "Ending relationships when they become serious",
          "Keeping emotional distance"
        ],
        historicalOutcomes: [
          "Few relationships since divorce",
          "Brief connections that end when closeness develops"
        ]
      },
      {
        type: "Professional/Collegial",
        expectations: [
          "I must appear completely composed and functional",
          "Colleagues wouldn't understand my struggles"
        ],
        fears: ["Being seen as unstable", "Loss of respect", "Pity"],
        behaviors: [
          "Maintaining professional facade despite struggles",
          "Limited personal sharing",
          "Focusing conversations on work or others"
        ],
        historicalOutcomes: [
          "Respected but not truly known by colleagues",
          "Support system limited to 1-2 trusted coworkers"
        ]
      }
    ],
    formativeExperiences: [
      {
        age: 7,
        event: "Witnessed domestic violence between parents",
        impact: "Learned home could be unsafe, developed hypervigilance to sense danger",
        beliefsFormed: [
          "Conflict can turn violent suddenly",
          "I need to stay alert for signs of danger"
        ],
        emotionalResponse: "Fear and helplessness"
      },
      {
        age: "Mid-20s to early 30s",
        event: "Progressively abusive marriage",
        impact: "Eroded self-confidence, reinforced belief in world's danger, developed coping through emotional suppression",
        beliefsFormed: [
          "I can't trust my judgment about people",
          "Showing vulnerability leads to being hurt"
        ],
        emotionalResponse: "Shame, fear, and eventual emotional numbing"
      },
      {
        age: 39,
        event: "Home invasion while children were present",
        impact: "Triggered acute PTSD symptoms, shattered sense of safety in own home",
        beliefsFormed: [
          "Nowhere is truly safe",
          "I failed to protect my children",
          "I am permanently damaged"
        ],
        emotionalResponse: "Terror, helplessness, and guilt"
      }
    ],
    therapyHistory: {
      previousApproaches: [
        "Crisis counseling after home invasion",
        "Brief trauma-focused therapy (discontinued)",
        "Medication (sleep aids and SSRIs)"
      ],
      helpfulInterventions: [
        "Medication for sleep",
        "Practical safety planning",
        "School counseling for children"
      ],
      unhelpfulInterventions: [
        "Exposure techniques attempted too early",
        "Group therapy felt overwhelming"
      ],
      insights: [
        "Recognition of hypervigilance pattern",
        "Understanding connection between past trauma and current responses"
      ],
      progressMade: "Improved functioning at work, better communication with children about safety concerns",
      remainingChallenges: [
        "Persistent nightmares",
        "Difficulty with trust",
        "Continued hypervigilance",
        "Limited emotional range"
      ]
    },
    conversationalStyle: {
      verbosity: 4,
      emotionalExpressiveness: 3,
      resistance: 6,
      insightLevel: 7,
      preferredCommunicationModes: [
        "Practical discussions",
        "Storytelling",
        "Value-oriented language"
      ]
    },
    goalsForTherapy: [
      "Reduce hypervigilance and checking behaviors",
      "Improve sleep without medication",
      "Develop healthier balance between safety and living fully",
      "Process trauma memories to reduce their power",
      "Rebuild capacity for joy and connection"
    ],
    therapeuticProgress: {
      insights: [
        {
          belief: "The world is dangerous",
          insight: "Differentiating between real and perceived dangers",
          dateAchieved: "2024-07-28"
        }
      ],
      resistanceLevel: 6,
      changeReadiness: "preparation",
      sessionProgressLog: [
        {
          sessionNumber: 1,
          keyInsights: ["Established safety in therapeutic relationship"],
          resistanceShift: 0
        },
        {
          sessionNumber: 2,
          keyInsights: ["Identified triggers for hypervigilance"],
          resistanceShift: -1
        },
        {
          sessionNumber: 3,
          keyInsights: ["Connected current responses to past experiences"],
          resistanceShift: -1
        }
      ],
      trustLevel: 4,
      // Lower start due to trauma history and trust issues
      rapportScore: 4,
      therapistPerception: "neutral",
      transferenceState: "none"
    }
  }
];

async function loadSampleModels() {
  try {
    console.log("Loading sample cognitive models into KV store...");
    const kvStore = new KVStore("cognitive_models_", true);
    const patientService = new PatientModelService(kvStore);
    const existingModels = await patientService.getAvailableModels();
    if (existingModels && existingModels.length > 0) {
      console.log(
        `Found ${existingModels.length} existing models. Skipping load.`
      );
      return true;
    }
    for (const model of sampleCognitiveModels) {
      console.log(`Loading model: ${model.name} (${model.id})`);
      await patientService.saveModel(model);
    }
    console.log(
      `Successfully loaded ${sampleCognitiveModels.length} sample cognitive models.`
    );
    return true;
  } catch (error) {
    console.error("Failed to load sample cognitive models:", error);
    return false;
  }
}

function analyzeTherapeuticTechniques(text) {
  const techniquePatterns = {
    reflection: [
      /it sounds like you(?:'re| are) feeling/i,
      /what I(?:'m| am) hearing is/i,
      /you(?:'re| are) saying that/i
    ],
    validation: [
      /that makes sense/i,
      /it's understandable/i,
      /many people would feel/i,
      /i can see why you/i
    ],
    open_question: [
      /\bwhat\b.+\?/i,
      /\bhow\b.+\?/i,
      /\bwhy\b.+\?/i,
      /\bcan you tell me\b.+\?/i
    ],
    empathy: [
      /that must be/i,
      /i can imagine/i,
      /that sounds/i,
      /it's tough/i,
      /it must feel/i
    ],
    summarizing: [
      /\bso\b.+\bsummary\b/i,
      /^let me summarize/i,
      /to summarize/i,
      /\bin summary\b/i
    ]
  };
  const detectedTechniques = {};
  for (const [technique, patterns] of Object.entries(techniquePatterns)) {
    let matchCount = 0;
    for (const pattern of patterns) {
      if (pattern.test(text)) {
        matchCount++;
      }
    }
    if (matchCount > 0) {
      const baseConfidence = 0.7;
      const patternBonus = matchCount / patterns.length * 0.3;
      detectedTechniques[technique] = baseConfidence + patternBonus;
    }
  }
  return detectedTechniques;
}

var TherapeuticTechnique = /* @__PURE__ */ ((TherapeuticTechnique2) => {
  TherapeuticTechnique2["ACTIVE_LISTENING"] = "active_listening";
  TherapeuticTechnique2["REFLECTIVE_STATEMENTS"] = "reflective_statements";
  TherapeuticTechnique2["OPEN_ENDED_QUESTIONS"] = "open_ended_questions";
  TherapeuticTechnique2["VALIDATION"] = "validation";
  TherapeuticTechnique2["MOTIVATIONAL_INTERVIEWING"] = "motivational_interviewing";
  TherapeuticTechnique2["COGNITIVE_RESTRUCTURING"] = "cognitive_restructuring";
  TherapeuticTechnique2["GOAL_SETTING"] = "goal_setting";
  TherapeuticTechnique2["MINDFULNESS"] = "mindfulness";
  TherapeuticTechnique2["BEHAVIORAL_ACTIVATION"] = "behavioral_activation";
  TherapeuticTechnique2["GROUNDING_TECHNIQUES"] = "grounding_techniques";
  TherapeuticTechnique2["STRENGTH_BASED"] = "strength_based";
  TherapeuticTechnique2["REFRAMING"] = "reframing";
  return TherapeuticTechnique2;
})(TherapeuticTechnique || {});

function SupervisorFeedback({
  sessionTranscript,
  patientModel: _patientModel,
  therapistResponses
}) {
  const [detectedTechniques, setDetectedTechniques] = useState([]);
  const [missedOpportunities, setMissedOpportunities] = useState([]);
  const [feedbackSummary, setFeedbackSummary] = useState(null);
  const [selectedTechnique, setSelectedTechnique] = useState(
    null
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("techniques");
  useEffect(() => {
    if (therapistResponses.length > 0) {
      analyzeTechniques();
      identifyMissedOpportunities();
      generateFeedbackSummary();
    }
  }, [
    therapistResponses,
    sessionTranscript,
    analyzeTechniques,
    identifyMissedOpportunities,
    generateFeedbackSummary
  ]);
  const analyzeTechniques = useCallback(() => {
    setIsGenerating(true);
    const allTechniques = {};
    therapistResponses.forEach((response) => {
      const detectedInResponse = analyzeTherapeuticTechniques(response);
      Object.entries(detectedInResponse).forEach(([technique, confidence]) => {
        if (!allTechniques[technique]) {
          allTechniques[technique] = { confidence, examples: [response] };
        } else {
          if (confidence > allTechniques[technique].confidence) {
            allTechniques[technique].confidence = confidence;
          }
          if (confidence > 0.8 && allTechniques[technique].examples.length < 3) {
            allTechniques[technique].examples.push(response);
          }
        }
      });
    });
    const techniquesArray = Object.entries(allTechniques).map(
      ([technique, data]) => ({
        technique,
        confidence: data.confidence,
        examples: data.examples
      })
    );
    techniquesArray.sort((a, b) => b.confidence - a.confidence);
    setDetectedTechniques(techniquesArray);
    setIsGenerating(false);
  }, [therapistResponses]);
  const identifyMissedOpportunities = useCallback(() => {
    const opportunities = [];
    const clientStatements = sessionTranscript.split("\n").filter((line) => line.startsWith("Client:")).map((line) => line.replace("Client:", "").trim());
    const emotionalKeywords = [
      "afraid",
      "angry",
      "sad",
      "overwhelmed",
      "anxious",
      "depressed",
      "worried",
      "scared"
    ];
    clientStatements.forEach((statement) => {
      const hasEmotionalContent = emotionalKeywords.some(
        (keyword) => statement.toLowerCase().includes(keyword)
      );
      if (hasEmotionalContent) {
        const validationDetected = therapistResponses.some(
          (response) => response.toLowerCase().includes("understand") || response.toLowerCase().includes("that must be") || response.toLowerCase().includes("makes sense")
        );
        if (!validationDetected) {
          opportunities.push({
            context: statement,
            suggestedTechnique: TherapeuticTechnique.VALIDATION,
            rationale: "Client expressed emotional content that could benefit from validation",
            exampleResponse: `I can understand why you would feel ${emotionalKeywords.find(
              (keyword) => statement.toLowerCase().includes(keyword)
            )} in that situation. That's a valid response to what you're experiencing.`
          });
        }
      }
      if (statement.includes("?") && !therapistResponses.some((r) => r.includes("?"))) {
        opportunities.push({
          context: statement,
          suggestedTechnique: TherapeuticTechnique.OPEN_ENDED_QUESTIONS,
          rationale: "Client is asking questions - opportunity to explore with open-ended questions",
          exampleResponse: "What do you think might help you in this situation? How have you dealt with similar challenges in the past?"
        });
      }
    });
    setMissedOpportunities(opportunities);
  }, [sessionTranscript, therapistResponses]);
  const generateFeedbackSummary = useCallback(() => {
    const techniquesCovered = detectedTechniques.map((t) => t.technique);
    const techniqueCount = techniquesCovered.length;
    const averageConfidence = detectedTechniques.reduce((sum, t) => sum + t.confidence, 0) / Math.max(techniqueCount, 1);
    const overallRating = Math.min(
      10,
      Math.max(
        1,
        5 + (techniqueCount > 3 ? 2 : techniqueCount > 1 ? 1 : 0) + (averageConfidence > 0.8 ? 2 : averageConfidence > 0.6 ? 1 : 0) - (missedOpportunities.length > 5 ? 2 : missedOpportunities.length > 2 ? 1 : 0)
      )
    );
    const keyStrengths = detectedTechniques.filter((t) => t.confidence > 0.7).map((t) => `Effective use of ${t.technique}`);
    const growthAreas = Array.from(
      new Set(
        missedOpportunities.map(
          (o) => `Increased use of ${o.suggestedTechnique}`
        )
      )
    );
    const positivePoints = [
      `Applied ${techniqueCount} distinct therapeutic techniques`,
      ...keyStrengths.slice(0, 3)
    ];
    const developmentalPoints = [
      ...growthAreas.slice(0, 3),
      missedOpportunities.length > 0 ? `Missed ${missedOpportunities.length} opportunities for therapeutic interventions` : "Consider expanding your therapeutic toolkit"
    ];
    setFeedbackSummary({
      positivePoints,
      developmentalPoints,
      overallRating,
      keyStrengths,
      growthAreas
    });
  }, [detectedTechniques, missedOpportunities]);
  const regenerateFeedback = () => {
    setIsGenerating(true);
    analyzeTechniques();
    identifyMissedOpportunities();
    generateFeedbackSummary();
  };
  return /* @__PURE__ */ jsxs(Card, { className: "supervisor-feedback shadow-md border-green-700/20 overflow-hidden", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "bg-green-900/10", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex justify-between items-center text-green-800", children: [
      /* @__PURE__ */ jsx("span", { children: "Clinical Supervisor Feedback" }),
      feedbackSummary && /* @__PURE__ */ jsxs(
        Badge,
        {
          variant: feedbackSummary.overallRating > 7 ? "default" : feedbackSummary.overallRating > 4 ? "secondary" : "destructive",
          children: [
            "Rating: ",
            feedbackSummary.overallRating,
            "/10"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-green-800/10 px-4 py-1 flex space-x-1", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeTab === "techniques" ? "default" : "ghost",
          size: "sm",
          onClick: () => setActiveTab("techniques"),
          children: "Techniques"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeTab === "opportunities" ? "default" : "ghost",
          size: "sm",
          onClick: () => setActiveTab("opportunities"),
          children: "Opportunities"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeTab === "summary" ? "default" : "ghost",
          size: "sm",
          onClick: () => setActiveTab("summary"),
          children: "Summary"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "p-4 h-[320px] overflow-y-auto", children: isGenerating ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-green-800", children: "Analyzing therapy session..." }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600", children: "Using therapeutic technique recognition" })
    ] }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      activeTab === "techniques" && /* @__PURE__ */ jsxs("div", { className: "techniques-analysis", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "Detected Therapeutic Techniques" }),
        detectedTechniques.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No therapeutic techniques detected in the session." }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: detectedTechniques.map((technique) => /* @__PURE__ */ jsxs(
            Badge,
            {
              variant: technique.confidence > 0.8 ? "default" : "outline",
              className: "cursor-pointer",
              onClick: () => setSelectedTechnique(
                technique.technique === selectedTechnique ? null : technique.technique
              ),
              children: [
                technique.technique,
                " (",
                (technique.confidence * 100).toFixed(0),
                "%)"
              ]
            },
            technique.technique
          )) }),
          selectedTechnique && /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-md", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-medium", children: [
              selectedTechnique,
              " Examples:"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-2", children: detectedTechniques.find((t) => t.technique === selectedTechnique)?.examples.map((example) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-sm text-gray-700 pl-2 border-l-2 border-green-300",
                children: [
                  "“",
                  example,
                  "”"
                ]
              },
              `${selectedTechnique}-${example.slice(0, 20)}`
            )) })
          ] })
        ] })
      ] }),
      activeTab === "opportunities" && /* @__PURE__ */ jsxs("div", { className: "missed-opportunities", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "Therapeutic Opportunities" }),
        missedOpportunities.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: "No significant missed opportunities detected." }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: missedOpportunities.map((opportunity) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-blue-50 p-3 rounded-md",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "font-medium flex justify-between", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "Opportunity for ",
                  opportunity.suggestedTechnique
                ] }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-normal", children: opportunity.suggestedTechnique })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-gray-700 italic mb-2", children: [
                  "Client: “",
                  opportunity.context,
                  "”"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2", children: opportunity.rationale }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border border-blue-100", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-800", children: "Example response:" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
                    "“",
                    opportunity.exampleResponse,
                    "”"
                  ] })
                ] })
              ] })
            ]
          },
          `${opportunity.suggestedTechnique}-${opportunity.context.slice(0, 20)}`
        )) })
      ] }),
      activeTab === "summary" && feedbackSummary && /* @__PURE__ */ jsxs("div", { className: "feedback-summary", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "Session Assessment" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-700", children: "Strengths" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-1 space-y-1", children: feedbackSummary.positivePoints.map((point) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-sm flex items-start gap-2",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: point })
                ]
              },
              point
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium text-amber-700", children: "Development Areas" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-1 space-y-1", children: feedbackSummary.developmentalPoints.map((point) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-sm flex items-start gap-2",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "→" }),
                  /* @__PURE__ */ jsx("span", { children: point })
                ]
              },
              point
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-md", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Supervisor Recommendations" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mt-1", children: feedbackSummary.overallRating > 7 ? "Excellent therapeutic presence. Continue to build on your strengths while incorporating a wider range of techniques." : feedbackSummary.overallRating > 4 ? "Good foundation of therapeutic skills. Focus on identifying emotional content and responding with appropriate techniques." : "Continue developing your therapeutic toolkit. Practice identifying opportunities for validation and reflection." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "bg-green-50 border-t border-green-100 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: regenerateFeedback,
          disabled: isGenerating,
          children: "Regenerate Feedback"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
        "Feedback generated based on ",
        therapistResponses.length,
        " therapist responses"
      ] })
    ] })
  ] });
}

const AnalyticsDashboardReact = lazy(() => import('../chunks/AnalyticsDashboardReact_plT2ZVg-.mjs'));
const useTherapeuticInterventions = () => {
  return {
    generateIntervention: async (_config) => {
      return "Consider using validation and reflection techniques to address the client's concerns.";
    }
  };
};
const LoadingAnalytics = () => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-green-700/30 bg-black bg-opacity-90 p-6 animate-pulse", children: [
  /* @__PURE__ */ jsx("div", { className: "h-6 w-1/3 bg-green-700/20 mb-4 rounded" }),
  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-40 bg-green-700/10 rounded" }),
    /* @__PURE__ */ jsx("div", { className: "h-40 bg-green-700/10 rounded" })
  ] })
] });
function ProfessionalTherapistWorkspace() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScenarios, setShowScenarios] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(
    () => {
      const defaultScenario = clientScenarios[0];
      if (!defaultScenario) {
        return {
          id: "default",
          name: "General Therapy Session",
          description: "A general therapy session with a client",
          tags: ["general"],
          difficulty: "beginner",
          category: "other",
          systemMessage: "You are a professional CBT therapist helping a client."
        };
      }
      return {
        id: defaultScenario.id || "default",
        name: defaultScenario.name,
        description: defaultScenario.description,
        tags: defaultScenario.tags,
        difficulty: defaultScenario.difficulty,
        category: defaultScenario.category,
        systemMessage: "You are a professional CBT therapist helping a client."
      };
    }
  );
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showMentalHealthPanel, setShowMentalHealthPanel] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState(null);
  const [showPatientModelSelector, setShowPatientModelSelector] = useState(false);
  const [usePatientSimulation, setUsePatientSimulation] = useState(false);
  const [showSupervisorFeedback, setShowSupervisorFeedback] = useState(false);
  const {
    isLoading: isPatientModelLoading,
    error: patientModelError,
    currentModelId,
    currentModel,
    selectModel,
    updateStyleConfig,
    generatePatientResponse
  } = usePatientModel();
  const { getAIResponse } = useAIService();
  const { analyzeMessage } = useMentalHealthAnalysis();
  const { generateIntervention } = useTherapeuticInterventions();
  const { detectEmotions } = useEmotionDetection();
  const { assessRisk } = useRiskAssessment();
  const storeState = useStore();
  useEffect(() => {
    if (!storeState.mentalHealthChat && storeState.fheService) {
      storeState.initializeMentalHealthChat();
    }
  }, [storeState, storeState.fheService, storeState.mentalHealthChat]);
  useEffect(() => {
    if (usePatientSimulation) {
      loadSampleModels().catch((err) => {
        console.error("Failed to load sample models:", err);
      });
    }
  }, [usePatientSimulation]);
  const changeScenario = (scenario) => {
    setSelectedScenario({
      ...scenario,
      systemMessage: `You are a professional CBT therapist helping a client with ${scenario.name}. ${scenario.description}`
    });
    setShowScenarios(false);
    setMessages([
      {
        role: "system",
        content: `New client case selected: ${scenario.name}. ${scenario.description}`,
        name: ""
      }
    ]);
  };
  const handleSubmit = async (e) => {
    setError(null);
    if (!input.trim() || isLoading) {
      return;
    }
    const userMessage = {
      role: "user",
      content: input,
      name: ""
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      if (storeState.mentalHealthChat && storeState.mentalHealthAnalysisEnabled) {
        const emotions = await detectEmotions(input);
        const analysis = await analyzeMessage(input);
        const riskAssessment = await assessRisk(input, emotions);
        const mentalHealthAnalysis = {
          category: riskAssessment.category,
          hasMentalHealthIssue: true,
          confidence: analysis.confidence,
          explanation: String(
            analysis.scores && typeof analysis.scores === "object" && analysis.scores !== null && "explanation" in analysis.scores ? analysis.scores["explanation"] : "No additional explanation available"
          ),
          supportingEvidence: analysis.scores && typeof analysis.scores === "object" && analysis.scores !== null && "supportingEvidence" in analysis.scores && Array.isArray(analysis.scores["supportingEvidence"]) ? analysis.scores["supportingEvidence"] : [],
          timestamp: Date.now(),
          expertGuided: riskAssessment.requiresExpert,
          emotions: emotions.primaryEmotion ? [emotions.primaryEmotion, ...emotions.secondaryEmotions] : [],
          riskFactors: riskAssessment.factors
        };
        userMessage.mentalHealthAnalysis = mentalHealthAnalysis;
        const interventionConfig = {
          scores: analysis.scores,
          type: riskAssessment.category === "high" ? "immediate" : riskAssessment.category === "medium" ? "preventive" : "supportive",
          requiresExpert: riskAssessment.requiresExpert,
          emotions,
          riskFactors: riskAssessment.factors
        };
        const intervention = await generateIntervention(interventionConfig);
        if (interventionConfig.type === "immediate") {
          setMessages((prev) => [
            ...prev,
            {
              role: "system",
              content: `🚨 High Risk Alert: This client may require immediate professional intervention. ${intervention}`,
              name: ""
            }
          ]);
        }
      }
      let aiResponse;
      if (usePatientSimulation && currentModelId) {
        const patientPrompt = await handlePatientSimulationResponse(input);
        if (patientPrompt) {
          aiResponse = await getAIResponse(patientPrompt);
        } else {
          aiResponse = await getAIResponse(
            JSON.stringify([...messages, userMessage])
          );
        }
      } else {
        aiResponse = await getAIResponse(
          JSON.stringify([...messages, userMessage])
        );
      }
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          name: ""
        }
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred while processing your message"
      );
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  const getLatestMentalHealthAnalysis = () => {
    const messagesWithAnalysis = messages.filter((m) => m.mentalHealthAnalysis);
    if (messagesWithAnalysis.length === 0) {
      return void 0;
    }
    const lastMessage = messagesWithAnalysis[messagesWithAnalysis.length - 1];
    return lastMessage?.mentalHealthAnalysis;
  };
  const toggleMentalHealthAnalysis = () => {
    storeState.configureMentalHealthAnalysis(
      !storeState.mentalHealthAnalysisEnabled,
      storeState.expertGuidanceEnabled
    );
  };
  const toggleExpertGuidance = () => {
    storeState.configureMentalHealthAnalysis(
      storeState.mentalHealthAnalysisEnabled,
      !storeState.expertGuidanceEnabled
    );
  };
  const handlePatientSimulationResponse = async (therapistMessage) => {
    if (!usePatientSimulation || !currentModelId || !currentModel) {
      return null;
    }
    try {
      const conversationMessages = messages.map((msg) => ({
        role: msg.role === "assistant" ? "patient" : "therapist",
        content: msg.content
      }));
      conversationMessages.push({
        role: "therapist",
        content: therapistMessage
      });
      const currentFocus = messages.filter(
        (msg) => msg.role === "system" && msg.content.includes("focus:")
      ).map((msg) => msg.content.replace("Current focus:", "").trim()).filter(
        (focus) => typeof focus === "string" && focus.length > 0
      );
      const typedConversationMessages = conversationMessages.map((msg) => ({
        role: msg.role === "therapist" || msg.role === "patient" ? msg.role : msg.role === "user" ? "patient" : "therapist",
        // Map other roles appropriately
        content: msg.content
      }));
      const { prompt } = await generatePatientResponse(
        typedConversationMessages,
        currentFocus.length > 0 ? currentFocus : void 0,
        1
        // Session number (could be tracked in state in a more advanced implementation)
      );
      return prompt;
    } catch (err) {
      console.error("Error generating patient response:", err);
      return null;
    }
  };
  const getTherapistResponses = useCallback$1(() => {
    return messages.filter((msg) => msg.role === "user").map((msg) => msg.content);
  }, [messages]);
  const getSessionTranscript = useCallback$1(() => {
    return messages.filter((msg) => msg.role !== "system").map(
      (msg) => `${msg.role === "user" ? "Therapist" : "Client"}: ${msg.content}`
    ).join("\n");
  }, [messages]);
  const toggleSupervisorFeedback = () => {
    setShowSupervisorFeedback(!showSupervisorFeedback);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col",
        isExpanded ? "fixed inset-0 z-10 bg-black p-4" : ""
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-green-300", children: "Therapy Training Environment" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowPatientModelSelector(true),
                className: cn(
                  "rounded-lg px-3 py-1.5 text-sm",
                  usePatientSimulation ? "bg-green-800/70 text-green-200" : "bg-green-900/30 text-green-400"
                ),
                children: usePatientSimulation ? `Patient Model: ${currentModel?.name || "Default"}` : "Enable Patient Simulation"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowAnalytics(!showAnalytics),
                className: cn(
                  "rounded-lg p-1.5",
                  showAnalytics ? "bg-green-800/70 text-green-200" : "bg-green-900/30 text-green-400"
                ),
                "aria-label": "Toggle analytics dashboard",
                children: /* @__PURE__ */ jsx(BarChart, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowMentalHealthPanel(!showMentalHealthPanel),
                className: cn(
                  "rounded-lg p-1.5",
                  showMentalHealthPanel ? "bg-green-800/70 text-green-200" : "bg-green-900/30 text-green-400"
                ),
                "aria-label": "Toggle mental health insights",
                children: /* @__PURE__ */ jsx(IconMental, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleSupervisorFeedback,
                className: cn(
                  "rounded-lg px-3 py-1.5 text-sm",
                  showSupervisorFeedback ? "bg-green-800/70 text-green-200" : "bg-green-900/30 text-green-400"
                ),
                children: "Supervisor Feedback"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsExpanded(!isExpanded),
                className: "rounded-lg bg-green-900/30 p-1.5 text-green-400",
                "aria-label": isExpanded ? "Minimize" : "Maximize",
                children: isExpanded ? /* @__PURE__ */ jsx(IconMinimize, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(IconMaximize, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "flex items-center gap-2 rounded-lg bg-green-900/30 px-3 py-2 text-green-300",
                "aria-pressed": showScenarios,
                onClick: () => setShowScenarios(!showScenarios),
                children: [
                  " ",
                  /* @__PURE__ */ jsxs("div", { className: "relative mb-4 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Client Case: ",
                      selectedScenario.name
                    ] }),
                    /* @__PURE__ */ jsx(IconChevronDown, { className: "h-4 w-4" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx(
                        Switch,
                        {
                          id: "mh-analysis",
                          checked: storeState.mentalHealthAnalysisEnabled,
                          onCheckedChange: toggleMentalHealthAnalysis
                        }
                      ),
                      /* @__PURE__ */ jsx(Label, { htmlFor: "mh-analysis", className: "text-sm text-green-300", children: "Cognitive Assessment" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx(
                        Switch,
                        {
                          id: "expert-guidance",
                          checked: storeState.expertGuidanceEnabled,
                          onCheckedChange: toggleExpertGuidance
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Label,
                        {
                          htmlFor: "expert-guidance",
                          className: "text-sm text-green-300",
                          children: "Clinical Guidance"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            ),
            showScenarios && /* @__PURE__ */ jsxs("div", { className: "absolute z-10 mt-1 w-64 rounded-lg border border-green-700/30 bg-black bg-opacity-95 p-2 shadow-lg", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-2 border-b border-green-700/30 pb-1 text-sm font-semibold text-green-300", children: "Select Client Case" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-1", children: clientScenarios.map((scenario) => /* @__PURE__ */ jsxs(
                "button",
                {
                  className: cn(
                    "rounded px-3 py-2 text-left text-sm transition-colors",
                    selectedScenario.id === scenario.id ? "bg-green-700/30 text-green-300" : "text-gray-300 hover:bg-green-700/20"
                  ),
                  onClick: () => changeScenario(scenario),
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: scenario.name }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: scenario.description }),
                    /* @__PURE__ */ jsx("div", { className: "mt-1 flex flex-wrap gap-1", children: scenario.tags.map((tag) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "rounded-full bg-green-900/30 px-2 py-0.5 text-xs text-green-300",
                        children: tag
                      },
                      tag
                    )) })
                  ]
                },
                scenario.id
              )) })
            ] }),
            /* @__PURE__ */ jsx(
              ChatContainer,
              {
                messages,
                onSendMessage: (msg) => {
                  setInput(msg);
                  handleSubmit();
                },
                isLoading,
                ...error ? { error } : {}
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-2 ml-2", children: [
              /* @__PURE__ */ jsx(
                Switch,
                {
                  id: "patient-simulation-toggle",
                  checked: usePatientSimulation,
                  onCheckedChange: setUsePatientSimulation
                }
              ),
              /* @__PURE__ */ jsx(Label, { htmlFor: "patient-simulation-toggle", children: "Use Patient Simulation" }),
              usePatientSimulation && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setShowPatientModelSelector(!showPatientModelSelector),
                  className: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-8 py-2 px-3",
                  children: [
                    showPatientModelSelector ? "Hide" : "Select",
                    " Patient Model"
                  ]
                }
              )
            ] }),
            usePatientSimulation && showPatientModelSelector && /* @__PURE__ */ jsxs("div", { className: "m-2", children: [
              /* @__PURE__ */ jsx(
                CognitiveModelSelector,
                {
                  selectedModelId: currentModelId,
                  onSelectModel: selectModel,
                  onStyleConfigChange: updateStyleConfig,
                  className: "mb-4"
                }
              ),
              isPatientModelLoading && /* @__PURE__ */ jsx("div", { className: "text-blue-500", children: "Loading patient models..." }),
              patientModelError && /* @__PURE__ */ jsx("div", { className: "text-red-500", children: patientModelError }),
              currentModel && /* @__PURE__ */ jsxs("div", { className: "text-gray-700 text-sm mb-2", children: [
                "Using patient model: ",
                /* @__PURE__ */ jsx("strong", { children: currentModel.name }),
                " -",
                " ",
                currentModel.diagnosisInfo?.primaryDiagnosis
              ] })
            ] })
          ] }),
          showMentalHealthPanel && /* @__PURE__ */ jsx("div", { className: "w-full lg:w-80", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-green-700/30 bg-black bg-opacity-90 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-green-300", children: "Cognitive Assessment" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setShowMentalHealthPanel(false),
                  className: "rounded-lg bg-green-900/30 p-1 text-green-300 hover:bg-green-800/30",
                  "aria-label": "Close cognitive assessment panel",
                  children: /* @__PURE__ */ jsx(IconMinimize, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              MentalHealthInsights,
              {
                analysis: {
                  ...getLatestMentalHealthAnalysis() || {
                    category: "low",
                    hasMentalHealthIssue: true,
                    confidence: 0,
                    explanation: "No data available",
                    supportingEvidence: [],
                    timestamp: Date.now(),
                    expertGuided: false,
                    emotions: [],
                    riskFactors: []
                  },
                  riskLevel: getLatestMentalHealthAnalysis()?.category === "critical" ? "high" : getLatestMentalHealthAnalysis()?.category || "low",
                  summary: "Analysis summary not available",
                  scores: {}
                }
              }
            )
          ] }) }),
          showSupervisorFeedback && /* @__PURE__ */ jsx("div", { className: "w-full lg:w-96", children: /* @__PURE__ */ jsx(
            SupervisorFeedback,
            {
              sessionTranscript: getSessionTranscript(),
              patientModel: {
                id: currentModel?.id || "default-model",
                name: currentModel?.name || selectedScenario.name,
                presentingIssues: currentModel?.presentingIssues || [
                  selectedScenario.description
                ],
                primaryDiagnosis: currentModel?.diagnosisInfo?.primaryDiagnosis || selectedScenario.name,
                responseStyle: {}
                // CognitiveModel doesn't have responseStyle, using empty object
              },
              therapistResponses: getTherapistResponses()
            }
          ) })
        ] }),
        showAnalytics && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingAnalytics, {}), children: /* @__PURE__ */ jsx(
          AnalyticsDashboardReact,
          {
            messages,
            securityLevel: "standard",
            encryptionEnabled: false,
            scenario: selectedScenario.name
          }
        ) }) }),
        showPatientModelSelector && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-lg bg-white p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: "Select Patient Model" }),
          /* @__PURE__ */ jsx(
            CognitiveModelSelector,
            {
              selectedModelId: currentModelId,
              onSelectModel: selectModel,
              onStyleConfigChange: updateStyleConfig,
              className: "mb-4"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-end space-x-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowPatientModelSelector(false),
                className: "rounded-md bg-gray-200 px-4 py-2 text-gray-800",
                children: "Close"
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setUsePatientSimulation(!usePatientSimulation),
                className: `rounded-md px-4 py-2 ${usePatientSimulation ? "bg-red-500 text-white" : "bg-green-500 text-white"}`,
                children: [
                  usePatientSimulation ? "Disable" : "Enable",
                  " Simulation"
                ]
              }
            )
          ] }),
          isPatientModelLoading && /* @__PURE__ */ jsx("div", { className: "mt-2 text-blue-500", children: "Loading patient models..." }),
          patientModelError && /* @__PURE__ */ jsx("div", { className: "mt-2 text-red-500", children: patientModelError })
        ] }) })
      ]
    }
  );
}

const $$TherapyChat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Therapy Chat System - Pixelated Empathy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full mx-auto"> ${renderComponent($$result2, "TherapyChatSystem", ProfessionalTherapistWorkspace, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/chat/TherapyChatSystem", "client:component-export": "default" })} </main> ` })}`;
}, "/root/pixel/src/pages/therapy-chat.astro", void 0);

const $$file = "/root/pixel/src/pages/therapy-chat.astro";
const $$url = "/therapy-chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TherapyChat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
