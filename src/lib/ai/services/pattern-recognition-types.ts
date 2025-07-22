export interface SessionFeatures {
  duration: number;
  riskLevel: string;
  emotionalStates: string[];
  techniques: string[];
  transcriptLength: number;
}

export interface EmotionalTransition {
  confidence: number;
  intensity: number;
}

export interface NetworkAnalysisResult {
  centrality: number[];
  communities: number[][];
  centralitySessions: string[];
  connectionStrength: number;
  communityDetection: boolean;
}

export interface TimeSeriesDecomposition {
  trend: number[];
  seasonal: number[];
  residual: number[];
}

export interface ChangePoint {
  index: number;
  confidence: number;
}

export interface CorrelatedFactor {
  factor: string;
  correlation: number;
  confidence: number;
  pValue: number;
  effectSize: 'small' | 'medium' | 'large';
}

export interface TemporalPattern {
  pattern: string;
  support: number;
}
