;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ac96aa48-6325-448a-bf98-ae18a240626a",e._sentryDebugIdIdentifier="sentry-dbid-ac96aa48-6325-448a-bf98-ae18a240626a")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import './astro/server_bjkJ-nhl.mjs';

const logger = createBuildSafeLogger("multidimensional-emotion-mapper");
class MultidimensionalEmotionMapper {
  config;
  constructor(config) {
    this.config = {
      timeWindow: 30,
      samplingRate: 2,
      smoothingFactor: 0.3,
      dimensions: ["valence", "arousal", "dominance"],
      ...config
    };
  }
  /**
   * Map emotions to dimensional space using Russell's Circumplex Model
   * and additional dominance dimension
   */
  mapEmotionsToDimensions(emotion) {
    const { emotions, timestamp, confidence } = emotion;
    const valence = this.calculateValence(emotions);
    const arousal = this.calculateArousal(emotions);
    const dominance = this.calculateDominance(emotions);
    const dimensions = { valence, arousal, dominance };
    const primaryEmotion = this.findPrimaryEmotion(emotions) ?? "joy";
    const intensity = this.calculateIntensity(emotions);
    logger.debug("Mapped emotion to dimensions", {
      timestamp,
      dimensions,
      primaryEmotion,
      intensity
    });
    return {
      timestamp,
      dimensions,
      primaryEmotion,
      intensity,
      confidence
    };
  }
  /**
   * Calculate valence dimension (-1 to 1)
   * Positive emotions contribute positively, negative emotions negatively
   */
  calculateValence(emotions) {
    const positive = emotions.joy + emotions.trust + emotions.surprise * 0.5;
    const negative = emotions.sadness + emotions.anger + emotions.fear + emotions.disgust;
    return Math.tanh((positive - negative) / 2);
  }
  /**
   * Calculate arousal dimension (0 to 1)
   * High-energy emotions contribute to higher arousal
   */
  calculateArousal(emotions) {
    const highArousal = emotions.anger + emotions.fear + emotions.surprise + emotions.joy * 0.7;
    const lowArousal = emotions.sadness + emotions.trust + emotions.disgust * 0.5;
    const arousal = (highArousal - lowArousal * 0.3) / 2;
    return Math.max(0, Math.min(1, arousal));
  }
  /**
   * Calculate dominance dimension (-1 to 1)
   * Emotions associated with control vs helplessness
   */
  calculateDominance(emotions) {
    const dominant = emotions.anger + emotions.trust + emotions.anticipation;
    const submissive = emotions.fear + emotions.sadness + emotions.surprise * 0.5;
    return Math.tanh((dominant - submissive) / 2);
  }
  /**
   * Find the primary (strongest) emotion
   */
  findPrimaryEmotion(emotions) {
    let maxEmotion = null;
    let maxValue = -Infinity;
    if (Object.keys(emotions).length === 0) {
      const firstKey = Object.keys(this.getDummyEmotionVector())[0];
      return firstKey || null;
    }
    const emotionKeys = Object.keys(emotions);
    if (emotionKeys.length > 0 && emotionKeys[0]) {
      maxEmotion = emotionKeys[0];
      maxValue = emotions[emotionKeys[0]] ?? -Infinity;
    }
    for (const [emotionStr, value] of Object.entries(emotions)) {
      const emotion = emotionStr;
      if (value > maxValue) {
        maxValue = value;
        maxEmotion = emotion;
      }
    }
    if (maxEmotion === null && emotionKeys.length > 0 && emotionKeys[0]) {
      return emotionKeys[0];
    }
    return maxEmotion;
  }
  /**
   * Calculate overall emotional intensity
   */
  calculateIntensity(emotions) {
    const sum = Object.values(emotions).reduce((acc, val) => acc + val, 0);
    return Math.min(1, sum / 4);
  }
  /**
   * Cluster emotions in dimensional space
   */
  clusterEmotions(maps, numClusters = 3) {
    const clusters = [];
    if (numClusters <= 0 || maps.length === 0) {
      return clusters;
    }
    for (let i = 0; i < numClusters; i++) {
      clusters.push({
        id: `cluster-${i}`,
        centroid: {
          valence: Math.random() * 2 - 1,
          arousal: Math.random(),
          dominance: Math.random() * 2 - 1
        },
        members: [],
        radius: 0,
        significance: 0
      });
    }
    const maxIterations = 10;
    for (let iter = 0; iter < maxIterations; iter++) {
      clusters.forEach((cluster) => {
        cluster.members = [];
      });
      maps.forEach((map) => {
        let minDistance = Infinity;
        let nearestClusterIndex = -1;
        clusters.forEach((cluster, index) => {
          const distance = this.calculateDistance(
            map.dimensions,
            cluster.centroid
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearestClusterIndex = index;
          }
        });
        if (nearestClusterIndex >= 0) {
          const nearestCluster = clusters[nearestClusterIndex];
          if (nearestCluster) {
            const emotionAnalysis = {
              id: `emotion-${map.timestamp}`,
              sessionId: "unknown",
              timestamp: map.timestamp,
              emotions: this.getDummyEmotionVector(),
              // Placeholder
              dimensions: map.dimensions,
              confidence: map.confidence
            };
            nearestCluster.members.push(emotionAnalysis);
          }
        }
      });
      clusters.forEach((cluster) => {
        if (cluster.members.length > 0) {
          const avgValence = cluster.members.reduce((sum, m) => sum + m.dimensions.valence, 0) / cluster.members.length;
          const avgArousal = cluster.members.reduce((sum, m) => sum + m.dimensions.arousal, 0) / cluster.members.length;
          const avgDominance = cluster.members.reduce(
            (sum, m) => sum + m.dimensions.dominance,
            0
          ) / cluster.members.length;
          cluster.centroid = {
            valence: avgValence,
            arousal: avgArousal,
            dominance: avgDominance
          };
        }
      });
    }
    clusters.forEach((cluster) => {
      if (cluster.members.length > 0) {
        cluster.radius = Math.max(
          ...cluster.members.map(
            (m) => this.calculateDistance(m.dimensions, cluster.centroid)
          )
        );
        cluster.significance = cluster.members.length / maps.length;
      }
    });
    return clusters.filter((cluster) => cluster.members.length > 0);
  }
  /**
   * Detect emotion transitions between dimensional maps
   */
  detectTransitions(maps, threshold = 0.3) {
    const transitions = [];
    if (maps.length < 2) {
      return transitions;
    }
    for (let i = 1; i < maps.length; i++) {
      const prev = maps[i - 1];
      const curr = maps[i];
      if (!prev || !curr) {
        continue;
      }
      const distance = this.calculateDistance(prev.dimensions, curr.dimensions);
      if (distance > threshold) {
        const duration = new Date(curr.timestamp).getTime() - new Date(prev.timestamp).getTime();
        transitions.push({
          from: prev.dimensions,
          to: curr.dimensions,
          duration,
          intensity: distance,
          timestamp: curr.timestamp
        });
      }
    }
    return transitions;
  }
  /**
   * Calculate Euclidean distance between two dimensional points
   */
  calculateDistance(dim1, dim2) {
    const valenceDiff = dim1.valence - dim2.valence;
    const arousalDiff = dim1.arousal - dim2.arousal;
    const dominanceDiff = dim1.dominance - dim2.dominance;
    return Math.sqrt(valenceDiff ** 2 + arousalDiff ** 2 + dominanceDiff ** 2);
  }
  /**
   * Helper method to create dummy emotion vector (for clustering)
   */
  getDummyEmotionVector() {
    return {
      joy: 0,
      sadness: 0,
      anger: 0,
      fear: 0,
      surprise: 0,
      disgust: 0,
      trust: 0,
      anticipation: 0
    };
  }
  /**
   * Apply smoothing to dimensional data
   */
  smoothDimensions(maps) {
    if (maps.length < 2) {
      return maps;
    }
    const smoothed = [...maps];
    const alpha = this.config.smoothingFactor;
    for (let i = 1; i < smoothed.length; i++) {
      const current = smoothed[i];
      const previous = smoothed[i - 1];
      if (!current || !previous) {
        continue;
      }
      smoothed[i] = {
        timestamp: current.timestamp,
        primaryEmotion: current.primaryEmotion,
        intensity: current.intensity,
        confidence: current.confidence,
        dimensions: {
          valence: alpha * previous.dimensions.valence + (1 - alpha) * current.dimensions.valence,
          arousal: alpha * previous.dimensions.arousal + (1 - alpha) * current.dimensions.arousal,
          dominance: alpha * previous.dimensions.dominance + (1 - alpha) * current.dimensions.dominance
        }
      };
    }
    return smoothed;
  }
}

export { MultidimensionalEmotionMapper as M };
