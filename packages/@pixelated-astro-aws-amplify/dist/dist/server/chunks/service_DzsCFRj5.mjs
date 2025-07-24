;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5687e8c3-f2cc-4109-9b6c-b29c57add81f",e._sentryDebugIdIdentifier="sentry-dbid-5687e8c3-f2cc-4109-9b6c-b29c57add81f")}catch(e){}}();import './astro/server_DzSu7Vuv.mjs';

class MentalHealthAnalyzer {
  crisisKeywords = [
    "suicide",
    "kill myself",
    "end it all",
    "not worth living",
    "better off dead",
    "hurt myself",
    "self harm",
    "cut myself",
    "overdose"
  ];
  depressionKeywords = [
    "depressed",
    "hopeless",
    "worthless",
    "empty",
    "numb",
    "sad",
    "crying",
    "no energy",
    "tired",
    "exhausted",
    "sleep all day",
    "can't get up"
  ];
  anxietyKeywords = [
    "anxious",
    "worried",
    "panic",
    "scared",
    "nervous",
    "overwhelmed",
    "racing thoughts",
    "can't breathe",
    "heart racing",
    "shaking"
  ];
  stressKeywords = [
    "stressed",
    "pressure",
    "overwhelmed",
    "too much",
    "can't cope",
    "breaking point",
    "burned out",
    "exhausted"
  ];
  angerKeywords = [
    "angry",
    "furious",
    "rage",
    "hate",
    "frustrated",
    "irritated",
    "want to scream",
    "losing it",
    "can't control"
  ];
  isolationKeywords = [
    "alone",
    "lonely",
    "isolated",
    "no friends",
    "nobody cares",
    "abandoned",
    "disconnected",
    "withdrawn"
  ];
  async analyze(text) {
    const normalizedText = text.toLowerCase();
    const words = normalizedText.split(/\s+/);
    const indicators = this.detectIndicators(normalizedText);
    const sentiment = this.analyzeSentiment(normalizedText, words);
    const categories = this.categorizeIssues(indicators);
    const riskLevel = this.calculateRiskLevel(indicators);
    const confidence = this.calculateConfidence(indicators, words.length);
    const requiresIntervention = riskLevel === "high" || riskLevel === "critical";
    return {
      id: `analysis_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      confidence,
      riskLevel,
      categories,
      sentiment,
      indicators,
      recommendations: this.generateRecommendations(indicators, riskLevel),
      requiresIntervention
    };
  }
  detectIndicators(text) {
    const indicators = [];
    const crisisMatches = this.findMatches(text, this.crisisKeywords);
    if (crisisMatches.length > 0) {
      indicators.push({
        type: "crisis",
        severity: Math.min(1, crisisMatches.length * 0.4),
        evidence: crisisMatches,
        description: "Crisis indicators detected requiring immediate attention"
      });
    }
    const depressionMatches = this.findMatches(text, this.depressionKeywords);
    if (depressionMatches.length > 0) {
      indicators.push({
        type: "depression",
        severity: Math.min(1, depressionMatches.length * 0.2),
        evidence: depressionMatches,
        description: "Signs of depression detected"
      });
    }
    const anxietyMatches = this.findMatches(text, this.anxietyKeywords);
    if (anxietyMatches.length > 0) {
      indicators.push({
        type: "anxiety",
        severity: Math.min(1, anxietyMatches.length * 0.25),
        evidence: anxietyMatches,
        description: "Anxiety symptoms identified"
      });
    }
    const stressMatches = this.findMatches(text, this.stressKeywords);
    if (stressMatches.length > 0) {
      indicators.push({
        type: "stress",
        severity: Math.min(1, stressMatches.length * 0.2),
        evidence: stressMatches,
        description: "High stress levels indicated"
      });
    }
    const angerMatches = this.findMatches(text, this.angerKeywords);
    if (angerMatches.length > 0) {
      indicators.push({
        type: "anger",
        severity: Math.min(1, angerMatches.length * 0.3),
        evidence: angerMatches,
        description: "Anger and frustration detected"
      });
    }
    const isolationMatches = this.findMatches(text, this.isolationKeywords);
    if (isolationMatches.length > 0) {
      indicators.push({
        type: "isolation",
        severity: Math.min(1, isolationMatches.length * 0.25),
        evidence: isolationMatches,
        description: "Social isolation indicators present"
      });
    }
    return indicators;
  }
  findMatches(text, keywords) {
    return keywords.filter((keyword) => text.includes(keyword));
  }
  analyzeSentiment(text, words) {
    const positiveWords = [
      "happy",
      "good",
      "great",
      "better",
      "hope",
      "love",
      "joy",
      "excited",
      "grateful"
    ];
    const negativeWords = [
      "bad",
      "terrible",
      "awful",
      "hate",
      "sad",
      "angry",
      "frustrated",
      "hopeless"
    ];
    const positiveCount = positiveWords.filter(
      (word) => text.includes(word)
    ).length;
    const negativeCount = negativeWords.filter(
      (word) => text.includes(word)
    ).length;
    const totalWords = words.length;
    const positive = totalWords > 0 ? positiveCount / totalWords : 0;
    const negative = totalWords > 0 ? negativeCount / totalWords : 0;
    const neutral = Math.max(0, 1 - positive - negative);
    const overall = positive - negative;
    return { overall, positive, negative, neutral };
  }
  categorizeIssues(indicators) {
    const categories = [];
    indicators.forEach((indicator) => {
      categories.push({
        name: indicator.type,
        score: indicator.severity,
        confidence: Math.min(1, indicator.evidence.length * 0.2 + 0.5),
        keywords: indicator.evidence
      });
    });
    return categories;
  }
  calculateRiskLevel(indicators) {
    const crisisIndicator = indicators.find((i) => i.type === "crisis");
    if (crisisIndicator && crisisIndicator.severity > 0.3) {
      return "critical";
    }
    const maxSeverity = Math.max(...indicators.map((i) => i.severity), 0);
    const avgSeverity = indicators.length > 0 ? indicators.reduce((sum, i) => sum + i.severity, 0) / indicators.length : 0;
    if (maxSeverity > 0.7 || avgSeverity > 0.5) {
      return "high";
    }
    if (maxSeverity > 0.4 || avgSeverity > 0.3) {
      return "medium";
    }
    return "low";
  }
  calculateConfidence(indicators, textLength) {
    if (indicators.length === 0) {
      return 0.8;
    }
    const evidenceCount = indicators.reduce(
      (sum, i) => sum + i.evidence.length,
      0
    );
    const lengthFactor = Math.min(1, textLength / 50);
    const evidenceFactor = Math.min(1, evidenceCount * 0.1);
    return Math.min(0.95, 0.6 + lengthFactor * 0.2 + evidenceFactor * 0.2);
  }
  generateRecommendations(indicators, riskLevel) {
    const recommendations = [];
    if (riskLevel === "critical") {
      recommendations.push(
        "Seek immediate professional help or contact a crisis hotline"
      );
      recommendations.push(
        "Consider contacting emergency services if in immediate danger"
      );
    }
    if (riskLevel === "high") {
      recommendations.push(
        "Schedule an appointment with a mental health professional"
      );
      recommendations.push("Reach out to trusted friends or family members");
    }
    indicators.forEach((indicator) => {
      switch (indicator.type) {
        case "depression":
          recommendations.push("Consider therapy or counseling for depression");
          recommendations.push("Maintain regular sleep and exercise routines");
          break;
        case "anxiety":
          recommendations.push("Practice breathing exercises and mindfulness");
          recommendations.push("Consider anxiety management techniques");
          break;
        case "stress":
          recommendations.push("Identify and address sources of stress");
          recommendations.push("Practice stress reduction techniques");
          break;
        case "isolation":
          recommendations.push("Try to connect with others, even in small ways");
          recommendations.push("Consider joining support groups or communities");
          break;
      }
    });
    return [...new Set(recommendations)];
  }
}

class TherapeuticResponseGenerator {
  crisisResponses = [
    "I'm very concerned about what you've shared. Your safety is the most important thing right now.",
    "It sounds like you're going through an extremely difficult time. Please know that help is available.",
    "I want you to know that you're not alone, and there are people who want to help you through this."
  ];
  supportiveResponses = [
    "Thank you for sharing that with me. It takes courage to open up about difficult feelings.",
    "I hear that you're struggling right now, and I want you to know that your feelings are valid.",
    "It sounds like you're dealing with a lot. How long have you been feeling this way?"
  ];
  cognitiveResponses = [
    "I notice you mentioned some thoughts about yourself. Can you tell me more about what's behind those thoughts?",
    "Sometimes our minds can convince us of things that aren't entirely accurate. What evidence do you have for and against that thought?",
    "It sounds like you're having some difficult thoughts. Have you noticed any patterns in when these thoughts occur?"
  ];
  behavioralResponses = [
    "What activities or routines have been helpful for you in the past when you've felt this way?",
    "Are there small steps you could take today that might help you feel a bit better?",
    "What does a typical day look like for you right now? Are there any changes you'd like to make?"
  ];
  async generateResponse(analysis) {
    const approach = this.selectApproach(analysis);
    const content = this.generateContent(analysis, approach);
    const techniques = this.selectTechniques(analysis, approach);
    const followUp = this.generateFollowUp(analysis, approach);
    return {
      content,
      approach,
      techniques,
      followUp
    };
  }
  selectApproach(analysis) {
    if (analysis.riskLevel === "critical" || analysis.requiresIntervention) {
      return "crisis";
    }
    const hasThoughtPatterns = analysis.indicators.some(
      (i) => i.type === "depression" && i.evidence.some(
        (e) => e.includes("worthless") || e.includes("hopeless") || e.includes("failure")
      )
    );
    const hasBehavioralIssues = analysis.indicators.some(
      (i) => i.type === "isolation" || i.type === "depression" && i.evidence.some(
        (e) => e.includes("sleep") || e.includes("energy") || e.includes("tired")
      )
    );
    if (hasThoughtPatterns) {
      return "cognitive";
    }
    if (hasBehavioralIssues) {
      return "behavioral";
    }
    return "supportive";
  }
  generateContent(analysis, approach) {
    const primaryIndicator = this.getPrimaryIndicator(analysis);
    switch (approach) {
      case "crisis":
        return this.generateCrisisResponse(analysis);
      case "cognitive":
        return this.generateCognitiveResponse(primaryIndicator);
      case "behavioral":
        return this.generateBehavioralResponse(primaryIndicator);
      default:
        return this.generateSupportiveResponse(primaryIndicator);
    }
  }
  generateCrisisResponse(analysis) {
    const baseResponse = this.crisisResponses[Math.floor(Math.random() * this.crisisResponses.length)];
    const crisisIndicator = analysis.indicators.find((i) => i.type === "crisis");
    if (crisisIndicator && crisisIndicator.evidence.some(
      (e) => e.includes("suicide") || e.includes("kill") || e.includes("hurt")
    )) {
      return `I'm very concerned about what you've shared. If you're having thoughts of suicide, please reach out to the National Suicide Prevention Lifeline at 988 or text HOME to 741741. You can also go to your nearest emergency room.`;
    }
    return `${baseResponse} Please consider reaching out to a mental health professional or a trusted person in your life right away.`;
  }
  generateSupportiveResponse(indicator) {
    const baseResponse = this.supportiveResponses.length > 0 ? this.supportiveResponses[Math.floor(Math.random() * this.supportiveResponses.length)] ?? "Thank you for sharing. I'm here to listen." : "Thank you for sharing. I'm here to listen.";
    if (!indicator) {
      return baseResponse;
    }
    switch (indicator.type) {
      case "depression":
        return `${baseResponse} Depression can make everything feel overwhelming, but you don't have to face this alone.`;
      case "anxiety":
        return `${baseResponse} Anxiety can be really challenging to deal with. What tends to trigger these feelings for you?`;
      case "stress":
        return `${baseResponse} It sounds like you're under a lot of pressure right now. What's been the most stressful part?`;
      case "isolation":
        return `${baseResponse} Feeling disconnected from others can be really painful. When did you start feeling this way?`;
      default:
        return baseResponse;
    }
  }
  generateCognitiveResponse(indicator) {
    const baseResponse = this.cognitiveResponses.length > 0 ? this.cognitiveResponses[Math.floor(Math.random() * this.cognitiveResponses.length)] ?? "Let's explore your thoughts together." : "Let's explore your thoughts together.";
    if (!indicator) {
      return baseResponse;
    }
    switch (indicator.type) {
      case "depression":
        return `I notice you're having some difficult thoughts about yourself. Sometimes depression can make us see things in a more negative light than they really are. ${baseResponse}`;
      case "anxiety":
        return `It sounds like your mind might be racing with worries. ${baseResponse} What's the worst thing you imagine happening?`;
      default:
        return baseResponse;
    }
  }
  generateBehavioralResponse(indicator) {
    const baseResponse = this.behavioralResponses[Math.floor(Math.random() * this.behavioralResponses.length)] ?? "Taking small steps can help. What is one thing you could try today?";
    if (!indicator) {
      return baseResponse;
    }
    switch (indicator.type) {
      case "depression":
        return `Depression can make it hard to do even basic things. ${baseResponse}`;
      case "isolation":
        return `When we isolate ourselves, it can make things feel worse. ${baseResponse} Is there one person you might feel comfortable reaching out to?`;
      default:
        return baseResponse;
    }
  }
  selectTechniques(analysis, approach) {
    const techniques = [];
    switch (approach) {
      case "crisis":
        techniques.push(
          "Safety planning",
          "Crisis intervention",
          "Resource connection"
        );
        break;
      case "cognitive":
        techniques.push(
          "Thought challenging",
          "Cognitive restructuring",
          "Evidence examination"
        );
        break;
      case "behavioral":
        techniques.push(
          "Activity scheduling",
          "Behavioral activation",
          "Goal setting"
        );
        break;
      default:
        techniques.push("Active listening", "Validation", "Empathic responding");
    }
    analysis.indicators.forEach((indicator) => {
      switch (indicator.type) {
        case "anxiety":
          techniques.push("Breathing exercises", "Grounding techniques");
          break;
        case "stress":
          techniques.push("Stress management", "Relaxation techniques");
          break;
        case "isolation":
          techniques.push(
            "Social connection planning",
            "Support system building"
          );
          break;
      }
    });
    return [...new Set(techniques)];
  }
  generateFollowUp(analysis, approach) {
    const followUp = [];
    if (approach === "crisis") {
      followUp.push("How are you feeling right now in this moment?");
      followUp.push("Do you have someone you can stay with tonight?");
      followUp.push(
        "Can you commit to staying safe until we can get you more help?"
      );
      return followUp;
    }
    const primaryIndicator = this.getPrimaryIndicator(analysis);
    switch (primaryIndicator?.type) {
      case "depression":
        followUp.push("How has your sleep been lately?");
        followUp.push("What used to bring you joy that you might try again?");
        followUp.push(
          "Have you been able to talk to anyone else about how you're feeling?"
        );
        break;
      case "anxiety":
        followUp.push(
          "What physical sensations do you notice when you feel anxious?"
        );
        followUp.push(
          "Are there specific situations that tend to trigger your anxiety?"
        );
        followUp.push("What helps you feel calmer when anxiety hits?");
        break;
      case "stress":
        followUp.push(
          "What are the main sources of stress in your life right now?"
        );
        followUp.push("How do you typically handle stress?");
        followUp.push(
          "What would need to change for you to feel less overwhelmed?"
        );
        break;
      case "isolation":
        followUp.push("When did you start feeling disconnected from others?");
        followUp.push("What makes it difficult to reach out to people?");
        followUp.push("Who in your life has been supportive in the past?");
        break;
      default:
        followUp.push("How long have you been feeling this way?");
        followUp.push("What brought you to share this today?");
        followUp.push("What would be most helpful for you right now?");
    }
    return followUp;
  }
  getPrimaryIndicator(analysis) {
    if (analysis.indicators.length === 0) {
      return void 0;
    }
    const crisisIndicator = analysis.indicators.find((i) => i.type === "crisis");
    if (crisisIndicator) {
      return crisisIndicator;
    }
    return analysis.indicators.reduce(
      (prev, current) => current.severity > prev.severity ? current : prev
    );
  }
}

class MentalHealthService {
  analyzer;
  therapist;
  config;
  conversationHistory = /* @__PURE__ */ new Map();
  analysisHistory = /* @__PURE__ */ new Map();
  constructor(config = {}) {
    this.analyzer = new MentalHealthAnalyzer();
    this.therapist = new TherapeuticResponseGenerator();
    this.config = {
      enableAnalysis: true,
      confidenceThreshold: 0.6,
      interventionThreshold: 0.7,
      analysisMinLength: 10,
      enableCrisisDetection: true,
      ...config
    };
  }
  async processMessage(conversationId, message) {
    const history = this.conversationHistory.get(conversationId) || [];
    let processedMessage = { ...message };
    if (this.config.enableAnalysis && message.role === "user" && message.content.length >= this.config.analysisMinLength) {
      try {
        const analysis = await this.analyzer.analyze(message.content);
        if (analysis.confidence >= this.config.confidenceThreshold) {
          processedMessage.analysis = analysis;
          const analysisHistory = this.analysisHistory.get(conversationId) || [];
          analysisHistory.push(analysis);
          this.analysisHistory.set(conversationId, analysisHistory.slice(-20));
        }
      } catch (error) {
        console.error("Analysis failed:", error);
      }
    }
    history.push(processedMessage);
    this.conversationHistory.set(conversationId, history.slice(-50));
    return processedMessage;
  }
  async generateTherapeuticResponse(conversationId, analysis) {
    const targetAnalysis = analysis || this.getLatestAnalysis(conversationId);
    if (!targetAnalysis) {
      return {
        content: "I'm here to listen and support you. How are you feeling today?",
        approach: "supportive",
        techniques: ["Active listening", "Empathic responding"],
        followUp: [
          "What would be most helpful for you right now?",
          "How long have you been feeling this way?"
        ]
      };
    }
    return await this.therapist.generateResponse(targetAnalysis);
  }
  needsIntervention(conversationId) {
    const analysisHistory = this.analysisHistory.get(conversationId) || [];
    if (analysisHistory.length === 0) {
      return false;
    }
    const recentAnalyses = analysisHistory.slice(-3);
    return recentAnalyses.some(
      (analysis) => analysis.requiresIntervention || analysis.riskLevel === "critical" || analysis.riskLevel === "high" && analysis.confidence >= this.config.interventionThreshold
    );
  }
  getAnalysisHistory(conversationId) {
    return this.analysisHistory.get(conversationId) || [];
  }
  getConversationHistory(conversationId) {
    return this.conversationHistory.get(conversationId) || [];
  }
  getLatestAnalysis(conversationId) {
    const history = this.analysisHistory.get(conversationId) || [];
    return history[history.length - 1];
  }
  getRiskTrend(conversationId) {
    const history = this.analysisHistory.get(conversationId) || [];
    if (history.length < 2) {
      return "insufficient_data";
    }
    const recent = history.slice(-3);
    const riskScores = recent.map((a) => this.riskLevelToScore(a.riskLevel));
    if (riskScores.length < 2) {
      return "insufficient_data";
    }
    const lastScore = riskScores[riskScores.length - 1];
    const firstScore = riskScores[0];
    if (lastScore === void 0 || firstScore === void 0) {
      return "insufficient_data";
    }
    const trend = lastScore - firstScore;
    if (trend > 0.1) {
      return "worsening";
    }
    if (trend < -0.1) {
      return "improving";
    }
    return "stable";
  }
  riskLevelToScore(riskLevel) {
    switch (riskLevel) {
      case "low":
        return 0.25;
      case "medium":
        return 0.5;
      case "high":
        return 0.75;
      case "critical":
        return 1;
      default:
        return 0;
    }
  }
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }
  clearHistory(conversationId) {
    this.conversationHistory.delete(conversationId);
    this.analysisHistory.delete(conversationId);
  }
  getStats(conversationId) {
    const messages = this.conversationHistory.get(conversationId) || [];
    const analyses = this.analysisHistory.get(conversationId) || [];
    const userMessages = messages.filter((m) => m.role === "user");
    const analyzedMessages = userMessages.filter((m) => m.analysis);
    const riskLevels = analyses.map((a) => a.riskLevel);
    const avgConfidence = analyses.length > 0 ? analyses.reduce((sum, a) => sum + a.confidence, 0) / analyses.length : 0;
    return {
      totalMessages: messages.length,
      userMessages: userMessages.length,
      analyzedMessages: analyzedMessages.length,
      analysisRate: userMessages.length > 0 ? analyzedMessages.length / userMessages.length : 0,
      avgConfidence,
      riskDistribution: {
        low: riskLevels.filter((r) => r === "low").length,
        medium: riskLevels.filter((r) => r === "medium").length,
        high: riskLevels.filter((r) => r === "high").length,
        critical: riskLevels.filter((r) => r === "critical").length
      },
      currentRiskTrend: this.getRiskTrend(conversationId)
    };
  }
}

export { MentalHealthService as M };
//# sourceMappingURL=service_DzsCFRj5.mjs.map
