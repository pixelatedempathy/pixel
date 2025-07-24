;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4729b208-2fbc-4405-9c4c-3406a1cf22a6",e._sentryDebugIdIdentifier="sentry-dbid-4729b208-2fbc-4405-9c4c-3406a1cf22a6")}catch(e){}}();import { z } from 'zod';
import './astro/server_bjkJ-nhl.mjs';

z.object({
  "Major Depressive Disorder": z.array(z.string())
});
z.object({
  "Personality Patterns": z.array(z.string())
});
z.object({
  Traits: z.array(z.string())
});
const ScenarioGenerationRequestSchema = z.object({
  patientInfo: z.object({
    age: z.number(),
    gender: z.string(),
    occupation: z.string(),
    background: z.string()
  }),
  presentingProblem: z.string(),
  presentingProblemDevelopment: z.array(
    z.object({
      time: z.string(),
      description: z.string()
    })
  ),
  complexity: z.enum(["low", "medium", "high"]),
  therapeuticApproach: z.array(z.string()),
  culturalFactors: z.array(z.string()).optional()
});
const ScenarioGenerationResponseSchema = z.object({
  caseId: z.string(),
  patientInfo: z.object({
    age: z.number(),
    gender: z.string(),
    occupation: z.string(),
    background: z.string()
  }),
  presentingProblem: z.string(),
  presentingProblemDevelopment: z.array(
    z.object({
      time: z.string(),
      description: z.string()
    })
  ),
  clinicalFormulation: z.object({
    provisionalDiagnosis: z.array(z.string()),
    contributingFactors: z.object({
      biological: z.array(z.string()),
      psychological: z.array(z.string()),
      social: z.array(z.string())
    }),
    summary: z.string()
  }),
  treatmentPlan: z.object({
    goals: z.object({
      shortTerm: z.array(z.string()),
      longTerm: z.array(z.string())
    }),
    interventions: z.array(z.string()),
    modalities: z.array(z.string()),
    outcomeMeasures: z.array(z.string())
  }),
  generationMetadata: z.object({
    timestamp: z.string(),
    processingTime: z.number(),
    qualityScore: z.number(),
    balanceScore: z.number()
  })
});
const generateClientScenario = async (requestData) => {
  const validatedRequest = ScenarioGenerationRequestSchema.parse(requestData);
  const startTime = Date.now();
  await new Promise(
    (resolve) => setTimeout(resolve, 1500 + Math.random() * 1e3)
  );
  const processingTime = Date.now() - startTime;
  const generatedCase = {
    caseId: `CASE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    patientInfo: validatedRequest.patientInfo,
    presentingProblem: validatedRequest.presentingProblem,
    presentingProblemDevelopment: validatedRequest.presentingProblemDevelopment,
    clinicalFormulation: generateClinicalFormulation(validatedRequest),
    treatmentPlan: generateTreatmentPlan(validatedRequest),
    generationMetadata: {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      processingTime,
      qualityScore: 85 + Math.random() * 10,
      // Simulate quality score 85-95%
      balanceScore: 78 + Math.random() * 15
      // Simulate balance score 78-93%
    }
  };
  return ScenarioGenerationResponseSchema.parse(generatedCase);
};
function generateClinicalFormulation(request) {
  const { patientInfo, presentingProblem, complexity } = request;
  const problemLower = presentingProblem.toLowerCase();
  const diagnoses = [];
  if (problemLower.includes("anxiety")) {
    diagnoses.push("Generalized Anxiety Disorder (300.02)");
    if (problemLower.includes("work") || problemLower.includes("stress")) {
      diagnoses.push("Adjustment Disorder with Anxiety (309.24)");
    }
  } else if (problemLower.includes("depression")) {
    diagnoses.push("Major Depressive Disorder (296.23)");
  } else if (problemLower.includes("trauma")) {
    diagnoses.push("Post-Traumatic Stress Disorder (309.81)");
  } else {
    diagnoses.push(
      "Adjustment Disorder with Mixed Anxiety and Depressed Mood (309.28)"
    );
  }
  if (complexity === "high") {
    diagnoses.push("Personality Disorder NOS (301.9)");
  }
  const contributingFactors = {
    biological: [
      "Possible genetic predisposition",
      ...patientInfo.age > 50 ? ["Age-related hormonal changes"] : [],
      ...problemLower.includes("sleep") ? ["Sleep disruption affecting neurotransmitter balance"] : []
    ],
    psychological: [
      ...problemLower.includes("anxiety") ? ["Catastrophic thinking patterns", "Low distress tolerance"] : [],
      ...problemLower.includes("work") ? ["Perfectionist tendencies", "Fear of failure"] : [],
      ...complexity !== "low" ? ["Maladaptive coping strategies"] : []
    ],
    social: [
      ...patientInfo.occupation.toLowerCase().includes("manager") ? ["High-pressure work environment"] : [],
      ...patientInfo.background.toLowerCase().includes("urban") ? ["Urban stressors"] : [],
      ...complexity === "high" ? ["Limited social support"] : ["Generally supportive social network"]
    ]
  };
  const summary = `${patientInfo.age}-year-old ${patientInfo.gender} ${patientInfo.occupation.toLowerCase()} presenting with ${presentingProblem.toLowerCase()}. ${complexity === "low" ? "Symptoms appear situational with good functioning. Favorable prognosis." : complexity === "medium" ? "Moderate impact on functioning with multiple contributing factors." : "Complex presentation with significant functional impairment requiring intensive treatment."}`;
  return {
    provisionalDiagnosis: diagnoses,
    contributingFactors,
    summary
  };
}
function generateTreatmentPlan(request) {
  const { presentingProblem, complexity, therapeuticApproach } = request;
  const problemLower = presentingProblem.toLowerCase();
  const shortTermGoals = [];
  const longTermGoals = [];
  if (problemLower.includes("anxiety")) {
    shortTermGoals.push("Reduce anxiety symptoms by 40% within 8 weeks");
    shortTermGoals.push("Develop coping strategies for anxiety triggers");
  } else if (problemLower.includes("depression")) {
    shortTermGoals.push("Improve mood stability within 6-8 weeks");
    shortTermGoals.push("Increase daily activity engagement");
  }
  shortTermGoals.push("Establish therapeutic rapport and treatment engagement");
  longTermGoals.push("Maintain stable mood and symptom management");
  longTermGoals.push("Develop resilience for future stressors");
  longTermGoals.push("Improve overall quality of life and functioning");
  const interventions = [];
  therapeuticApproach.forEach((approach) => {
    switch (approach) {
      case "CBT":
        interventions.push(
          "Cognitive restructuring for negative thought patterns"
        );
        interventions.push("Behavioral activation and exposure exercises");
        break;
      case "DBT":
        interventions.push("Distress tolerance skills training");
        interventions.push("Emotion regulation techniques");
        break;
      case "Mindfulness":
        interventions.push("Mindfulness-based stress reduction");
        interventions.push("Present-moment awareness exercises");
        break;
      case "EMDR":
        interventions.push("Trauma processing through bilateral stimulation");
        break;
      default:
        interventions.push(`${approach}-based therapeutic interventions`);
    }
  });
  if (complexity === "high") {
    interventions.push("Crisis intervention and safety planning");
  }
  const outcomeMeasures = [];
  if (problemLower.includes("anxiety")) {
    outcomeMeasures.push("GAD-7 (Generalized Anxiety Disorder Scale)");
    outcomeMeasures.push("Beck Anxiety Inventory");
  } else if (problemLower.includes("depression")) {
    outcomeMeasures.push("PHQ-9 (Patient Health Questionnaire)");
    outcomeMeasures.push("Beck Depression Inventory");
  }
  outcomeMeasures.push("Work and Social Adjustment Scale");
  outcomeMeasures.push("Quality of Life Scale");
  return {
    goals: {
      shortTerm: shortTermGoals,
      longTerm: longTermGoals
    },
    interventions,
    modalities: therapeuticApproach,
    outcomeMeasures
  };
}
z.object({
  knowledgeBase: z.object({
    dsm5Criteria: z.array(z.string()),
    therapeuticTechniques: z.array(z.string()),
    clinicalGuidelines: z.array(z.string())
  }),
  clientProfile: z.object({
    demographics: z.object({
      age: z.number(),
      gender: z.string(),
      background: z.string()
    }),
    presentingProblem: z.string(),
    severity: z.enum(["low", "medium", "high"]),
    riskFactors: z.array(z.string())
  }),
  conversationParameters: z.object({
    therapeuticApproach: z.string(),
    sessionLength: z.number(),
    targetTechniques: z.array(z.string()),
    qualityThreshold: z.number().min(0).max(100)
  })
});
z.object({
  conversationId: z.string(),
  generatedDialogue: z.array(
    z.object({
      speaker: z.enum(["therapist", "client"]),
      content: z.string(),
      timestamp: z.string(),
      techniques: z.array(z.string()),
      emotionalState: z.string().optional(),
      interventionType: z.string().optional(),
      knowledgeSource: z.object({
        type: z.string(),
        reference: z.string(),
        confidence: z.number()
      })
    })
  ),
  qualityMetrics: z.object({
    overallScore: z.number(),
    authenticity: z.number(),
    therapeuticAccuracy: z.number(),
    knowledgeIntegration: z.number(),
    conversationFlow: z.number()
  }),
  knowledgeMapping: z.array(
    z.object({
      dialogueTurn: z.number(),
      appliedKnowledge: z.array(
        z.object({
          source: z.string(),
          content: z.string(),
          application: z.string(),
          confidence: z.number()
        })
      )
    })
  ),
  conversionMetadata: z.object({
    processingTime: z.number(),
    knowledgeSourcesUsed: z.number(),
    techniquesCovered: z.array(z.string()),
    qualityValidated: z.boolean(),
    timestamp: z.string()
  })
});

export { generateClientScenario };
