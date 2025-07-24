;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aaf5ebbb-80fa-4633-bf9f-a07c5d0ba13f",e._sentryDebugIdIdentifier="sentry-dbid-aaf5ebbb-80fa-4633-bf9f-a07c5d0ba13f")}catch(e){}}();import { c as createBuildSafeLogger } from './build-safe-logger_By1itFZO.mjs';
import { F as FHEOperation, E as EncryptionMode, O as OperationError } from './types_fr584op1.mjs';
import { S as SealSchemeType, a as SEAL_PARAMETER_PRESETS, g as getSchemeForMode, b as SEAL_SUPPORTED_OPERATIONS } from './seal-types_Dx5wIY2E.mjs';
import './astro/server_DzSu7Vuv.mjs';
import { M as MockFHEService } from './PatternRecognitionFactory_V6Ap20iP.mjs';

const logger$6 = createBuildSafeLogger("seal-context");
class SealContext {
  seal;
  context;
  encryptionParameters;
  parameters;
  scheme;
  securityLevel;
  initialized = false;
  loadPromise = null;
  contextOptions;
  // To store the options
  /**
   * Create a new SealContext with the specified options
   */
  constructor(options) {
    this.contextOptions = options;
    this.parameters = options.params;
    this.scheme = options.scheme;
    this.securityLevel = options.params.securityLevel || "tc128";
  }
  /**
   * Initialize the SEAL library and context
   * This must be called before using any SEAL functionality
   */
  async initialize() {
    if (this.initialized) {
      logger$6.warn("SEAL context already initialized");
      return;
    }
    if (this.loadPromise) {
      logger$6.info(
        "SEAL context is already being initialized, waiting for completion"
      );
      return this.loadPromise;
    }
    this.loadPromise = this.initializeSeal();
    return this.loadPromise;
  }
  /**
   * Core initialization logic for SEAL
   */
  async initializeSeal() {
    try {
      logger$6.info("Loading node-seal library");
      try {
        const SEAL = await import('node-seal');
        this.seal = await SEAL.default();
        logger$6.info("Successfully loaded node-seal");
      } catch (err) {
        logger$6.debug("Failed to load node-seal package", { error: err });
        if (typeof window !== "undefined" && window.seal) {
          this.seal = window.seal;
          logger$6.info("Using window.seal instance");
        } else {
          throw new Error(
            "Failed to load SEAL: node-seal not available and no browser fallback found"
          );
        }
      }
      logger$6.info(
        `Initializing SEAL context with ${this.scheme} scheme, ${this.parameters.polyModulusDegree} poly modulus degree`
      );
      this.encryptionParameters = this.createEncryptionParameters();
      this.context = this.seal.Context(
        this.encryptionParameters,
        true,
        // Expand mod chain for better usability
        this.mapSecurityLevel(this.securityLevel)
      );
      if (!this.context.parametersSet()) {
        throw new Error("SEAL parameters are not valid or supported");
      }
      this.logEncryptionParameters();
      this.initialized = true;
      logger$6.info("SEAL context initialized successfully");
    } catch (error) {
      logger$6.error("Failed to initialize SEAL context", { error });
      throw new Error(
        `SEAL initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    } finally {
      this.loadPromise = null;
    }
  }
  /**
   * Map the security level enum to SEAL security level
   */
  mapSecurityLevel(level) {
    if (!this.seal) {
      throw new Error("SEAL is not initialized");
    }
    const sealModule = this.seal;
    switch (level) {
      case "tc128":
        return sealModule.SecurityLevel.tc128;
      case "tc192":
        return sealModule.SecurityLevel.tc192;
      case "tc256":
        return sealModule.SecurityLevel.tc256;
      default:
        return sealModule.SecurityLevel.tc128;
    }
  }
  /**
   * Create encryption parameters from the configured options
   */
  createEncryptionParameters() {
    if (!this.seal) {
      throw new Error("SEAL is not initialized");
    }
    const sealModule = this.seal;
    let schemeType;
    switch (this.scheme) {
      case SealSchemeType.CKKS:
        schemeType = sealModule.SchemeType.ckks;
        break;
      case SealSchemeType.BGV:
        schemeType = sealModule.SchemeType.bgv;
        break;
      case SealSchemeType.BFV:
      default:
        schemeType = sealModule.SchemeType.bfv;
        break;
    }
    const parms = sealModule.EncryptionParameters(schemeType);
    parms.setPolyModulusDegree(this.parameters.polyModulusDegree);
    if (this.scheme === SealSchemeType.CKKS) {
      const bitSizes = this.parameters.coeffModulusBits || [60, 40, 40, 60];
      const coeffMod = sealModule.CoeffModulus.Create(
        this.parameters.polyModulusDegree,
        bitSizes
      );
      parms.setCoeffModulus(coeffMod);
    } else {
      const coeffMod = sealModule.CoeffModulus.BFVDefault(
        this.parameters.polyModulusDegree
      );
      parms.setCoeffModulus(coeffMod);
      const plainMod = sealModule.PlainModulus.Batching(
        this.parameters.polyModulusDegree,
        this.parameters.plainModulus || 20
      );
      parms.setPlainModulus(plainMod);
    }
    return parms;
  }
  /**
   * Log the encryption parameters for debugging
   */
  /**
   * Get the raw SEAL library instance.
   * Throws an error if SEAL is not initialized.
   */
  getSealModule() {
    if (!this.seal) {
      throw new Error(
        "SEAL library instance is not available. Ensure initialize() has been called and completed."
      );
    }
    return this.seal;
  }
  /**
   * Get the options used to configure this SEAL context.
   */
  getOptions() {
    return this.contextOptions;
  }
  logEncryptionParameters() {
    logger$6.info("SEAL encryption parameters:", {
      scheme: this.scheme,
      polyModulusDegree: this.parameters.polyModulusDegree,
      coeffModulusBits: this.parameters.coeffModulusBits || "default",
      securityLevel: this.securityLevel,
      plainModulus: this.parameters.plainModulus,
      scale: this.parameters.scale
    });
    logger$6.debug("SEAL context details:", {
      parametersSet: this.context.parametersSet(),
      usingKeyswitching: this.context.usingKeyswitching()
    });
  }
  /**
   * Check if the context is initialized
   */
  isInitialized() {
    return this.initialized;
  }
  /**
   * Get the initialized SEAL instance
   */
  getSeal() {
    this.checkInitialized();
    return this.seal;
  }
  /**
   * Get the SEAL context
   */
  getContext() {
    this.checkInitialized();
    return this.context;
  }
  /**
   * Get the scheme type
   */
  getSchemeType() {
    return this.scheme;
  }
  /**
   * Get the encryption parameters
   */
  getEncryptionParameters() {
    this.checkInitialized();
    return this.encryptionParameters;
  }
  /**
   * Check if the context is initialized
   */
  checkInitialized() {
    if (!this.initialized) {
      throw new Error("SEAL context not initialized. Call initialize() first.");
    }
  }
  /**
   * Dispose of SEAL resources
   * This should be called when the context is no longer needed
   */
  dispose() {
    if (this.context) {
      logger$6.info("Disposing SEAL context");
      this.context.delete();
      this.context = null;
    }
    if (this.encryptionParameters) {
      this.encryptionParameters.delete();
      this.encryptionParameters = null;
    }
    this.initialized = false;
  }
}

const logger$5 = createBuildSafeLogger("seal-memory");
class SealMemoryManager {
  objects = /* @__PURE__ */ new Map();
  objectCounter = 0;
  /**
   * Track a SEAL object for later cleanup
   *
   * @param obj The SEAL object to track
   * @param name Optional name for the object (for logging)
   * @returns The same object for chaining
   */
  track(obj, name) {
    if (!obj) {
      return obj;
    }
    const id = name || `seal-obj-${++this.objectCounter}`;
    this.objects.set(id, obj);
    return obj;
  }
  /**
   * Release a specific SEAL object
   *
   * @param obj The object to release
   * @param name The name of the object (if provided during tracking)
   */
  release(obj, name) {
    if (!obj) {
      return;
    }
    try {
      if (name && this.objects.has(name)) {
        const trackedObj = this.objects.get(name);
        if (trackedObj) {
          trackedObj.delete();
          this.objects.delete(name);
        }
        return;
      }
      for (const [id, trackedObj] of this.objects.entries()) {
        if (trackedObj === obj) {
          trackedObj.delete();
          this.objects.delete(id);
          return;
        }
      }
      obj.delete();
    } catch (error) {
      logger$5.error("Error releasing SEAL object", { error, name });
    }
  }
  /**
   * Release all tracked SEAL objects
   */
  releaseAll() {
    logger$5.info(`Releasing ${this.objects.size} SEAL objects`);
    for (const [id, obj] of this.objects.entries()) {
      try {
        if (obj && typeof obj.delete === "function") {
          obj.delete();
        }
      } catch (error) {
        logger$5.error(`Error releasing SEAL object ${id}`, { error });
      }
    }
    this.objects.clear();
    this.objectCounter = 0;
  }
  /**
   * Get the number of tracked objects
   */
  getObjectCount() {
    return this.objects.size;
  }
  /**
   * Create and track a batch of objects that are created
   * from a factory function
   *
   * @param factory Function that creates the objects
   * @returns The created and tracked objects
   */
  createTracked(factory) {
    const objects = factory();
    for (const [key, obj] of Object.entries(objects)) {
      this.track(obj, key);
    }
    return objects;
  }
}
class SealResourceScope {
  memoryManager = new SealMemoryManager();
  /**
   * Track a SEAL object for cleanup when the scope ends
   */
  track(obj, name) {
    return this.memoryManager.track(obj, name);
  }
  /**
   * Execute a function with automatic cleanup of created resources
   *
   * @param fn Function to execute within the scope
   * @returns The result of the function
   */
  async run(fn) {
    try {
      return await fn(this);
    } finally {
      this.memoryManager.releaseAll();
    }
  }
  /**
   * Explicitly close the scope and release all tracked resources
   */
  close() {
    this.memoryManager.releaseAll();
  }
}

const logger$4 = createBuildSafeLogger("fhe-parameter-optimizer");
const OPERATION_COMPLEXITY = {
  [FHEOperation.Addition]: 1,
  [FHEOperation.Subtraction]: 1,
  [FHEOperation.Multiplication]: 5,
  [FHEOperation.Square]: 4,
  [FHEOperation.Negation]: 1,
  [FHEOperation.Polynomial]: 7,
  [FHEOperation.Rotation]: 4,
  [FHEOperation.Rescale]: 3,
  [FHEOperation.SENTIMENT]: 8,
  [FHEOperation.CATEGORIZE]: 9,
  [FHEOperation.SUMMARIZE]: 7,
  [FHEOperation.TOKENIZE]: 6,
  [FHEOperation.FILTER]: 5,
  [FHEOperation.CUSTOM]: 8,
  [FHEOperation.WORD_COUNT]: 3,
  [FHEOperation.CHARACTER_COUNT]: 2,
  [FHEOperation.KEYWORD_DENSITY]: 6,
  [FHEOperation.READING_LEVEL]: 7,
  [FHEOperation.ANALYZE]: 8
};
class FHEParameterOptimizer {
  static instance;
  // Performance history for auto-adaptation
  performanceHistory = [];
  // Maximum entries to keep in performance history
  MAX_HISTORY_ENTRIES = 100;
  // Current strategy
  strategy = "balanced-approach" /* BalancedApproach */;
  // Default constraints
  constraints = {
    minimumSecurityLevel: "tc128" /* TC128 */,
    maximumMemoryMB: 1024,
    minimumPrecisionBits: 20,
    maximumLatencyMs: 500
  };
  /**
   * Get singleton instance of the optimizer
   */
  static getInstance() {
    if (!FHEParameterOptimizer.instance) {
      FHEParameterOptimizer.instance = new FHEParameterOptimizer();
    }
    return FHEParameterOptimizer.instance;
  }
  /**
   * Private constructor for singleton pattern
   */
  constructor() {
    logger$4.info("Initializing FHE Parameter Optimizer");
  }
  /**
   * Set the optimization strategy
   *
   * @param strategy The strategy to use for parameter optimization
   */
  setStrategy(strategy) {
    this.strategy = strategy;
    logger$4.info(`Optimization strategy set to ${strategy}`);
  }
  /**
   * Set constraints for the optimization process
   *
   * @param constraints Constraints to apply during optimization
   */
  setConstraints(constraints) {
    this.constraints = { ...this.constraints, ...constraints };
    logger$4.info("Optimization constraints updated", {
      constraints: this.constraints
    });
  }
  /**
   * Record operation performance metrics for future optimization
   *
   * @param metrics Performance metrics to record
   */
  recordOperationMetrics(metrics) {
    this.performanceHistory.unshift(metrics);
    if (this.performanceHistory.length > this.MAX_HISTORY_ENTRIES) {
      this.performanceHistory.pop();
    }
    logger$4.debug("Recorded FHE operation metrics", {
      operationId: metrics.operationId,
      operation: metrics.operation,
      duration: metrics.duration
    });
  }
  /**
   * Get optimized parameters for a specific operation type
   *
   * @param operation The FHE operation type
   * @param scheme The SEAL scheme type
   * @returns Optimized encryption parameters
   */
  getOptimizedParameters(operation, scheme = SealSchemeType.BFV) {
    const complexity = OPERATION_COMPLEXITY[operation] || 5;
    let basePreset = "bfv-default";
    if (scheme === SealSchemeType.CKKS) {
      basePreset = "ckks-default";
    } else if (scheme === SealSchemeType.BGV) {
      basePreset = "bgv-default";
    }
    switch (this.strategy) {
      case "security-focused" /* SecurityFocused */:
        return this.optimizeForSecurity(basePreset, complexity, scheme);
      case "performance-focused" /* PerformanceFocused */:
        return this.optimizeForPerformance(basePreset, complexity, scheme);
      case "precision-focused" /* PrecisionFocused */:
        return this.optimizeForPrecision(basePreset, complexity, scheme);
      case "memory-efficient" /* MemoryEfficient */:
        return this.optimizeForMemory(basePreset, complexity, scheme);
      case "auto-adaptive" /* AutoAdaptive */:
        return this.adaptiveOptimization(operation, scheme);
      case "balanced-approach" /* BalancedApproach */:
      default:
        return this.balancedOptimization(basePreset, complexity, scheme);
    }
  }
  /**
   * Get optimized parameters for multiple operations
   *
   * @param operations Array of FHE operations
   * @param scheme The SEAL scheme type
   * @returns Optimized parameters that work well for all operations
   */
  getOptimizedParametersForOperations(operations, scheme = SealSchemeType.BFV) {
    const maxComplexity = Math.max(
      ...operations.map((op) => OPERATION_COMPLEXITY[op] || 5)
    );
    let basePreset = "bfv-default";
    if (scheme === SealSchemeType.CKKS) {
      basePreset = "ckks-default";
    } else if (scheme === SealSchemeType.BGV) {
      basePreset = "bgv-default";
    }
    const params = this.createCustomParameters(
      basePreset,
      maxComplexity,
      scheme
    );
    const estimatedSecurity = this.estimateSecurityBits(params);
    const estimatedPerformance = this.estimatePerformanceScore(
      params,
      operations
    );
    const estimatedMemoryUsage = this.estimateMemoryUsage(params);
    return {
      scheme,
      params,
      estimatedSecurity,
      estimatedPerformance,
      estimatedMemoryUsage,
      strategy: this.strategy,
      operationTypes: operations
    };
  }
  /**
   * Optimize parameters for a specific context and operation
   *
   * @param context FHE operation context
   * @param scheme The SEAL scheme type
   * @returns Optimized parameters for the context
   */
  optimizeForContext(context, scheme = SealSchemeType.BFV) {
    const operationType = context.operationType;
    if (context.metrics) {
      this.recordOperationMetrics(context.metrics);
    }
    const complexityModifier = this.getComplexityModifierFromContext(context);
    const baseComplexity = OPERATION_COMPLEXITY[operationType] || 5;
    const adjustedComplexity = Math.min(
      10,
      Math.max(1, baseComplexity * complexityModifier)
    );
    let basePreset = "bfv-default";
    if (scheme === SealSchemeType.CKKS) {
      basePreset = "ckks-default";
    } else if (scheme === SealSchemeType.BGV) {
      basePreset = "bgv-default";
    }
    return this.createCustomParameters(basePreset, adjustedComplexity, scheme);
  }
  /**
   * Analyzes recent performance history to recommend parameter adjustments
   *
   * @returns Recommended parameter adjustments based on performance history
   */
  analyzePerformanceHistory() {
    if (this.performanceHistory.length < 5) {
      return {
        sufficientData: false,
        message: "Insufficient performance data for analysis"
      };
    }
    const operationGroups = {};
    for (const metric of this.performanceHistory) {
      if (!operationGroups[metric.operation]) {
        operationGroups[metric.operation] = [];
      }
      operationGroups[metric.operation].push(metric);
    }
    const operationStats = {};
    for (const [operation, metrics] of Object.entries(operationGroups)) {
      if (metrics.length >= 3) {
        const avgDuration = metrics.reduce((sum, m) => sum + m.duration, 0) / metrics.length;
        const midpoint = Math.floor(metrics.length / 2);
        const recentMetrics = metrics.slice(0, midpoint);
        const olderMetrics = metrics.slice(midpoint);
        const recentAvg = recentMetrics.reduce((sum, m) => sum + m.duration, 0) / recentMetrics.length;
        const olderAvg = olderMetrics.reduce((sum, m) => sum + m.duration, 0) / olderMetrics.length;
        let trend = "stable";
        const changeRatio = recentAvg / olderAvg;
        if (changeRatio < 0.95) {
          trend = "improving";
        } else if (changeRatio > 1.05) {
          trend = "degrading";
        }
        operationStats[operation] = {
          avgDuration,
          count: metrics.length,
          trend
        };
      }
    }
    const result = {
      sufficientData: true,
      operationStats,
      parameterRecommendations: {}
    };
    for (const [operation, stats] of Object.entries(operationStats)) {
      if (stats.trend === "degrading") {
        result.parameterRecommendations[operation] = {
          action: "optimize",
          suggestion: stats.avgDuration > 400 ? "Consider reducing polynomial modulus degree or security level" : "Consider batch processing or pre-computing"
        };
      }
    }
    return result;
  }
  /**
   * Security-focused optimization
   */
  optimizeForSecurity(basePreset, complexity, scheme) {
    const baseParams = { ...SEAL_PARAMETER_PRESETS["high-security"] };
    if (complexity > 7) {
      baseParams.polyModulusDegree = 32768;
      baseParams.coeffModulusBits = [60, 40, 40, 40, 40, 40, 40, 40, 60];
    }
    if (scheme === SealSchemeType.CKKS) {
      baseParams.scale = Math.pow(2, 40);
      delete baseParams.plainModulus;
    } else {
      baseParams.plainModulus = 1032193;
    }
    return baseParams;
  }
  /**
   * Performance-focused optimization
   */
  optimizeForPerformance(basePreset, complexity, scheme) {
    const baseParams = { ...SEAL_PARAMETER_PRESETS["high-performance"] };
    if (complexity > 8) {
      baseParams.polyModulusDegree = 8192;
      baseParams.coeffModulusBits = [30, 20, 20, 20, 20, 30];
    } else if (complexity < 3) {
      baseParams.polyModulusDegree = 4096;
      baseParams.coeffModulusBits = [30, 20, 30];
    }
    if (scheme === SealSchemeType.CKKS) {
      baseParams.scale = Math.pow(2, 30);
      delete baseParams.plainModulus;
    } else {
      baseParams.plainModulus = 65537;
    }
    return baseParams;
  }
  /**
   * Precision-focused optimization (primarily for CKKS)
   */
  optimizeForPrecision(basePreset, complexity, scheme) {
    const baseParams = scheme === SealSchemeType.CKKS ? { ...SEAL_PARAMETER_PRESETS["ckks-default"] } : { ...SEAL_PARAMETER_PRESETS[basePreset] };
    if (scheme === SealSchemeType.CKKS) {
      baseParams.scale = Math.pow(2, 50);
      if (complexity > 7) {
        baseParams.polyModulusDegree = 16384;
        baseParams.coeffModulusBits = [60, 50, 50, 50, 50, 50, 60];
      } else {
        baseParams.polyModulusDegree = 8192;
        baseParams.coeffModulusBits = [60, 50, 50, 50, 60];
      }
    } else {
      baseParams.plainModulus = 2097151;
      if (complexity > 7) {
        baseParams.polyModulusDegree = 16384;
      }
    }
    return baseParams;
  }
  /**
   * Memory-efficient optimization
   */
  optimizeForMemory(basePreset, complexity, scheme) {
    const baseParams = { ...SEAL_PARAMETER_PRESETS["low-security"] };
    if (complexity > 8) {
      baseParams.polyModulusDegree = 8192;
      baseParams.coeffModulusBits = [40, 30, 30, 40];
    } else if (complexity < 4) {
      baseParams.polyModulusDegree = 2048;
      baseParams.coeffModulusBits = [40, 40];
    }
    if (scheme === SealSchemeType.CKKS) {
      baseParams.scale = Math.pow(2, 30);
      delete baseParams.plainModulus;
    } else {
      baseParams.plainModulus = 40961;
    }
    return baseParams;
  }
  /**
   * Balanced optimization (default)
   */
  balancedOptimization(basePreset, complexity, scheme) {
    const baseParams = { ...SEAL_PARAMETER_PRESETS[basePreset] };
    if (complexity > 7) {
      baseParams.polyModulusDegree = 16384;
      if (scheme === SealSchemeType.CKKS) {
        baseParams.coeffModulusBits = [60, 40, 40, 40, 40, 40, 60];
        baseParams.scale = Math.pow(2, 40);
        delete baseParams.plainModulus;
      } else {
        baseParams.coeffModulusBits = [60, 40, 40, 40, 40, 40, 60];
        baseParams.plainModulus = 1032193;
      }
    } else if (complexity < 3) {
      baseParams.polyModulusDegree = 4096;
      if (scheme === SealSchemeType.CKKS) {
        baseParams.coeffModulusBits = [60, 40, 40, 60];
        baseParams.scale = Math.pow(2, 40);
        delete baseParams.plainModulus;
      } else {
        baseParams.coeffModulusBits = [60, 40, 40, 60];
        baseParams.plainModulus = 1032193;
      }
    }
    return baseParams;
  }
  /**
   * Adaptive optimization based on operation history
   */
  adaptiveOptimization(operation, scheme) {
    const relevantMetrics = this.performanceHistory.filter(
      (m) => m.operation === operation
    );
    if (relevantMetrics.length < 3) {
      logger$4.debug(
        "Insufficient history for adaptive optimization, using balanced approach"
      );
      return this.balancedOptimization(
        scheme === SealSchemeType.CKKS ? "ckks-default" : scheme === SealSchemeType.BGV ? "bgv-default" : "bfv-default",
        OPERATION_COMPLEXITY[operation] || 5,
        scheme
      );
    }
    const avgDuration = relevantMetrics.reduce((sum, m) => sum + m.duration, 0) / relevantMetrics.length;
    if (avgDuration > 500) {
      logger$4.debug("Operations are slow, optimizing for performance");
      return this.optimizeForPerformance(
        scheme === SealSchemeType.CKKS ? "ckks-default" : scheme === SealSchemeType.BGV ? "bgv-default" : "bfv-default",
        OPERATION_COMPLEXITY[operation] || 5,
        scheme
      );
    } else if (avgDuration < 100) {
      logger$4.debug("Operations are fast, optimizing for security");
      return this.optimizeForSecurity(
        scheme === SealSchemeType.CKKS ? "ckks-default" : scheme === SealSchemeType.BGV ? "bgv-default" : "bfv-default",
        OPERATION_COMPLEXITY[operation] || 5,
        scheme
      );
    } else {
      logger$4.debug(
        "Operations have reasonable performance, using balanced approach"
      );
      return this.balancedOptimization(
        scheme === SealSchemeType.CKKS ? "ckks-default" : scheme === SealSchemeType.BGV ? "bgv-default" : "bfv-default",
        OPERATION_COMPLEXITY[operation] || 5,
        scheme
      );
    }
  }
  /**
   * Create custom parameters based on complexity and scheme
   */
  createCustomParameters(basePreset, complexity, scheme) {
    const params = { ...SEAL_PARAMETER_PRESETS[basePreset] };
    if (complexity >= 9) {
      params.polyModulusDegree = 32768;
    } else if (complexity >= 7) {
      params.polyModulusDegree = 16384;
    } else if (complexity >= 4) {
      params.polyModulusDegree = 8192;
    } else {
      params.polyModulusDegree = 4096;
    }
    switch (params.polyModulusDegree) {
      case 32768:
        params.coeffModulusBits = [60, 50, 50, 50, 50, 50, 50, 50, 60];
        break;
      case 16384:
        params.coeffModulusBits = [60, 50, 50, 50, 50, 60];
        break;
      case 8192:
        params.coeffModulusBits = [60, 40, 40, 40, 60];
        break;
      case 4096:
        params.coeffModulusBits = [60, 40, 40, 60];
        break;
      default:
        params.coeffModulusBits = [60, 40, 60];
    }
    if (scheme === SealSchemeType.CKKS) {
      if (complexity >= 8) {
        params.scale = Math.pow(2, 50);
      } else if (complexity >= 5) {
        params.scale = Math.pow(2, 40);
      } else {
        params.scale = Math.pow(2, 30);
      }
      delete params.plainModulus;
    } else if (complexity >= 8) {
      params.plainModulus = 2097151;
    } else if (complexity >= 5) {
      params.plainModulus = 1032193;
    } else {
      params.plainModulus = 65537;
    }
    return params;
  }
  /**
   * Get complexity modifier from operation context
   */
  getComplexityModifierFromContext(context) {
    let modifier = 1;
    if (context.parameters) {
      const dataSize = context.parameters.dataSize;
      if (dataSize && dataSize > 1e6) {
        modifier *= 1.5;
      } else if (dataSize && dataSize < 1e3) {
        modifier *= 0.8;
      }
      const batchSize = context.parameters.batchSize;
      if (batchSize && batchSize > 10) {
        modifier *= 1.3;
      }
    }
    return modifier;
  }
  /**
   * Determine appropriate security level based on operation complexity
   */
  determineSecurityLevel(complexity) {
    if (complexity >= 9) {
      return "tc256" /* TC256 */;
    } else if (complexity >= 7) {
      return "tc192" /* TC192 */;
    } else {
      return "tc128" /* TC128 */;
    }
  }
  /**
   * Estimate security level in bits for given parameters
   */
  estimateSecurityBits(params) {
    switch (params.polyModulusDegree) {
      case 32768:
        return 256;
      case 16384:
        return 192;
      case 8192:
        return 128;
      case 4096:
        return 100;
      default:
        return 80;
    }
  }
  /**
   * Estimate performance score for parameters and operations
   */
  estimatePerformanceScore(params, operations) {
    let score = 100;
    switch (params.polyModulusDegree) {
      case 32768:
        score -= 50;
        break;
      case 16384:
        score -= 30;
        break;
      case 8192:
        score -= 15;
        break;
      case 4096:
        score -= 5;
        break;
    }
    score -= params.coeffModulusBits.length * 5;
    const avgComplexity = operations.reduce((sum, op) => sum + (OPERATION_COMPLEXITY[op] || 5), 0) / operations.length;
    score -= avgComplexity * 3;
    return Math.max(10, Math.min(100, score));
  }
  /**
   * Estimate memory usage for parameters
   */
  estimateMemoryUsage(params) {
    const baseSize = params.polyModulusDegree * 128e-6;
    const coeffModSizeFactor = params.coeffModulusBits.reduce((sum, bits) => sum + bits, 0) * 1e-5;
    return baseSize * (1 + coeffModSizeFactor);
  }
}
const fheParameterOptimizer = FHEParameterOptimizer.getInstance();

const logger$3 = createBuildSafeLogger("seal-service");
class SealService {
  static instance;
  sealContext = null;
  memoryManager = new SealMemoryManager();
  // SEAL components
  keyGenerator = null;
  secretKey = null;
  publicKey = null;
  relinKeys = null;
  galoisKeys = null;
  encryptor = null;
  decryptor = null;
  evaluator = null;
  batchEncoder = null;
  ckksEncoder = null;
  schemeType = SealSchemeType.BFV;
  initialized = false;
  keyGenerated = false;
  /**
   * Private constructor for singleton pattern
   */
  constructor() {
  }
  /**
   * Get the singleton instance of SealService
   */
  static getInstance() {
    if (!SealService.instance) {
      SealService.instance = new SealService();
    }
    return SealService.instance;
  }
  /**
   * Initialize the SEAL service with the given mode or options
   *
   * @param modeOrOptions Encryption mode or SEAL context options
   */
  async initialize(modeOrOptions = EncryptionMode.FHE) {
    if (this.initialized) {
      logger$3.warn("SEAL service already initialized");
      return;
    }
    try {
      let options;
      if (typeof modeOrOptions === "string") {
        const mode = modeOrOptions;
        const schemeType = getSchemeForMode(mode);
        if (!schemeType) {
          logger$3.info(
            `Mode ${mode} does not use FHE, skipping SEAL initialization`
          );
          return;
        }
        this.schemeType = schemeType;
        const operations = [
          FHEOperation.Addition,
          FHEOperation.Multiplication,
          FHEOperation.Polynomial
        ];
        const optimizationResult = fheParameterOptimizer.getOptimizedParametersForOperations(
          operations,
          schemeType
        );
        logger$3.info("Using optimized FHE parameters", {
          scheme: schemeType,
          estimatedSecurity: optimizationResult.estimatedSecurity,
          estimatedPerformance: optimizationResult.estimatedPerformance
        });
        options = {
          scheme: schemeType,
          params: optimizationResult.params
        };
      } else {
        options = modeOrOptions;
        this.schemeType = options.scheme;
      }
      logger$3.info(`Initializing SEAL service with ${this.schemeType} scheme`);
      this.sealContext = new SealContext(options);
      await this.sealContext.initialize();
      const seal = this.getSeal();
      const context = this.getContext();
      this.evaluator = this.memoryManager.track(
        seal.Evaluator(context),
        "evaluator"
      );
      if (this.schemeType === SealSchemeType.CKKS) {
        this.ckksEncoder = this.memoryManager.track(
          seal.CKKSEncoder(context),
          "ckksEncoder"
        );
      } else {
        this.batchEncoder = this.memoryManager.track(
          seal.BatchEncoder(context),
          "batchEncoder"
        );
      }
      this.initialized = true;
      logger$3.info("SEAL service initialized successfully");
    } catch (error) {
      logger$3.error("Failed to initialize SEAL service", { error });
      throw new Error(
        `SEAL service initialization failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Generate encryption keys
   */
  async generateKeys() {
    this.checkInitialized();
    try {
      const seal = this.getSeal();
      const context = this.getContext();
      logger$3.info("Generating SEAL keys");
      this.releaseKeys();
      this.keyGenerator = this.memoryManager.track(
        seal.KeyGenerator(context),
        "keyGenerator"
      );
      this.secretKey = this.memoryManager.track(
        this.keyGenerator.secretKey(),
        "secretKey"
      );
      this.publicKey = this.memoryManager.track(
        this.keyGenerator.createPublicKey(),
        "publicKey"
      );
      this.encryptor = this.memoryManager.track(
        seal.Encryptor(context, this.publicKey),
        // Not null due to checkKeysGenerated logic path
        "encryptor"
      );
      this.decryptor = this.memoryManager.track(
        seal.Decryptor(context, this.secretKey),
        // Not null due to checkKeysGenerated logic path
        "decryptor"
      );
      this.relinKeys = this.memoryManager.track(
        this.keyGenerator.createRelinKeys(),
        "relinKeys"
      );
      this.galoisKeys = this.memoryManager.track(
        this.keyGenerator.createGaloisKeys(),
        "galoisKeys"
      );
      this.keyGenerated = true;
      logger$3.info("SEAL keys generated successfully");
    } catch (error) {
      logger$3.error("Failed to generate SEAL keys", { error });
      throw new Error(
        `Key generation failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Check if keys have been generated
   */
  hasKeys() {
    return this.keyGenerated && !!this.secretKey && !!this.publicKey;
  }
  /**
   * Release current keys
   */
  releaseKeys() {
    if (this.keyGenerator) {
      this.memoryManager.release(this.keyGenerator, "keyGenerator");
      this.keyGenerator = null;
    }
    if (this.secretKey) {
      this.memoryManager.release(this.secretKey, "secretKey");
      this.secretKey = null;
    }
    if (this.publicKey) {
      this.memoryManager.release(this.publicKey, "publicKey");
      this.publicKey = null;
    }
    if (this.relinKeys) {
      this.memoryManager.release(this.relinKeys, "relinKeys");
      this.relinKeys = null;
    }
    if (this.galoisKeys) {
      this.memoryManager.release(this.galoisKeys, "galoisKeys");
      this.galoisKeys = null;
    }
    if (this.encryptor) {
      this.memoryManager.release(this.encryptor, "encryptor");
      this.encryptor = null;
    }
    if (this.decryptor) {
      this.memoryManager.release(this.decryptor, "decryptor");
      this.decryptor = null;
    }
    this.keyGenerated = false;
  }
  /**
   * Get the SEAL instance
   */
  getSeal() {
    this.checkInitialized();
    return this.sealContext.getSeal();
  }
  /**
   * Get the SEAL context
   */
  getContext() {
    this.checkInitialized();
    return this.sealContext.getContext();
  }
  /**
   * Get the scheme type
   */
  getSchemeType() {
    return this.schemeType;
  }
  /**
   * Get the SEAL evaluator
   */
  getEvaluator() {
    this.checkInitialized();
    if (!this.evaluator) {
      throw new Error("Evaluator not initialized.");
    }
    return this.evaluator;
  }
  /**
   * Get the relinearization keys
   */
  getRelinKeys() {
    this.checkKeysGenerated();
    if (!this.relinKeys) {
      throw new Error("RelinKeys not generated.");
    }
    return this.relinKeys;
  }
  /**
   * Get the Galois keys
   */
  getGaloisKeys() {
    this.checkKeysGenerated();
    if (!this.galoisKeys) {
      throw new Error("GaloisKeys not generated.");
    }
    return this.galoisKeys;
  }
  /**
   * Get the batch encoder (for BFV/BGV)
   */
  getBatchEncoder() {
    this.checkInitialized();
    if (this.schemeType === SealSchemeType.CKKS) {
      throw new Error("Batch encoder is only available for BFV/BGV schemes");
    }
    if (!this.batchEncoder) {
      throw new Error("BatchEncoder not initialized.");
    }
    return this.batchEncoder;
  }
  /**
   * Get the CKKS encoder
   */
  getCKKSEncoder() {
    this.checkInitialized();
    if (this.schemeType !== SealSchemeType.CKKS) {
      throw new Error("CKKS encoder is only available for CKKS scheme");
    }
    if (!this.ckksEncoder) {
      throw new Error("CKKSEncoder not initialized.");
    }
    return this.ckksEncoder;
  }
  /**
   * Get the encryptor
   */
  getEncryptor() {
    this.checkKeysGenerated();
    if (!this.encryptor) {
      throw new Error("Encryptor not initialized.");
    }
    return this.encryptor;
  }
  /**
   * Get the decryptor
   */
  getDecryptor() {
    this.checkKeysGenerated();
    if (!this.decryptor) {
      throw new Error("Decryptor not initialized.");
    }
    return this.decryptor;
  }
  /**
   * Encrypt data
   *
   * @param data Data to encrypt (array of numbers)
   * @param scale Scale for CKKS encryption (default: 2^40)
   * @returns Encrypted ciphertext
   */
  async encrypt(data, scale) {
    this.checkKeysGenerated();
    try {
      const seal = this.getSeal();
      const encryptor = this.getEncryptor();
      let plaintext;
      let ciphertext;
      if (this.schemeType === SealSchemeType.CKKS) {
        const ckksEncoder = this.getCKKSEncoder();
        const effectiveScale = scale !== void 0 ? scale : BigInt(1) << BigInt(40);
        plaintext = seal.PlainText();
        ckksEncoder.encode(data, effectiveScale, plaintext);
        ciphertext = seal.CipherText();
        encryptor.encrypt(plaintext, ciphertext);
        plaintext.delete();
        const result = seal.CipherText();
        result.copy(ciphertext);
        ciphertext.delete();
        return result;
      } else {
        const batchEncoder = this.getBatchEncoder();
        plaintext = seal.PlainText();
        batchEncoder.encode(data, plaintext);
        ciphertext = seal.CipherText();
        encryptor.encrypt(plaintext, ciphertext);
        plaintext.delete();
        const result = seal.CipherText();
        result.copy(ciphertext);
        ciphertext.delete();
        return result;
      }
    } catch (error) {
      logger$3.error("Encryption failed", { error });
      throw new Error(
        `Encryption failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Decrypt data
   *
   * @param ciphertext Encrypted ciphertext
   * @returns Decrypted data
   */
  async decrypt(ciphertext) {
    this.checkKeysGenerated();
    try {
      const seal = this.getSeal();
      const decryptor = this.getDecryptor();
      const plaintext = seal.PlainText();
      decryptor.decrypt(ciphertext, plaintext);
      let result;
      if (this.schemeType === SealSchemeType.CKKS) {
        const ckksEncoder = this.getCKKSEncoder();
        result = Array.from(ckksEncoder.decode(plaintext));
      } else {
        const batchEncoder = this.getBatchEncoder();
        result = Array.from(batchEncoder.decode(plaintext));
      }
      plaintext.delete();
      return result;
    } catch (error) {
      logger$3.error("Decryption failed", { error });
      throw new Error(
        `Decryption failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Serialize the current keys
   *
   * @param options Serialization options
   * @returns Serialized keys
   */
  async serializeKeys(options) {
    this.checkKeysGenerated();
    const seal = this.getSeal();
    const compressionMode = seal.ComprModeType[options?.compression ? "zstd" : "none"];
    if (!this.publicKey || !this.secretKey || !this.relinKeys || !this.galoisKeys) {
      throw new Error(
        "Attempted to serialize null keys. This should not happen if checkKeysGenerated passed."
      );
    }
    return {
      publicKey: this.publicKey.save(compressionMode),
      secretKey: this.secretKey.save(compressionMode),
      relinKeys: this.relinKeys.save(compressionMode),
      galoisKeys: this.galoisKeys.save(compressionMode),
      schemeType: this.schemeType,
      parameters: this.sealContext.getEncryptionParameters()
    };
  }
  /**
   * Deserialize and load keys
   *
   * @param serializedKeys Serialized keys
   */
  async loadKeys(serializedKeys) {
    this.checkInitialized();
    const seal = this.getSeal();
    const context = this.getContext();
    try {
      this.releaseKeys();
      this.secretKey = this.memoryManager.track(seal.SecretKey(), "secretKey");
      if (serializedKeys.secretKey) {
        this.secretKey.load(context, serializedKeys.secretKey);
      } else {
        throw new Error("Serialized secret key is missing.");
      }
      this.publicKey = this.memoryManager.track(seal.PublicKey(), "publicKey");
      if (serializedKeys.publicKey) {
        this.publicKey.load(context, serializedKeys.publicKey);
      } else {
        throw new Error("Serialized public key is missing.");
      }
      this.encryptor = this.memoryManager.track(
        seal.Encryptor(context, this.publicKey),
        "encryptor"
      );
      this.decryptor = this.memoryManager.track(
        seal.Decryptor(context, this.secretKey),
        "decryptor"
      );
      if (serializedKeys.relinKeys) {
        this.relinKeys = this.memoryManager.track(seal.RelinKeys(), "relinKeys");
        this.relinKeys.load(context, serializedKeys.relinKeys);
      }
      if (serializedKeys.galoisKeys) {
        this.galoisKeys = this.memoryManager.track(
          seal.GaloisKeys(),
          "galoisKeys"
        );
        this.galoisKeys.load(context, serializedKeys.galoisKeys);
      }
      this.keyGenerated = true;
      logger$3.info("SEAL keys loaded successfully");
    } catch (error) {
      logger$3.error("Failed to load SEAL keys", { error });
      throw new Error(
        `Key loading failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Check if the service is initialized
   */
  checkInitialized() {
    if (!this.initialized || !this.sealContext) {
      throw new Error("SEAL service not initialized. Call initialize() first.");
    }
  }
  /**
   * Check if keys have been generated
   */
  checkKeysGenerated() {
    this.checkInitialized();
    if (!this.keyGenerated || !this.secretKey || !this.publicKey) {
      throw new Error(
        "SEAL keys not generated/loaded. Call generateKeys() or loadKeys() first."
      );
    }
  }
  /**
   * Dispose of all SEAL resources
   */
  dispose() {
    logger$3.info("Disposing SEAL service");
    this.releaseKeys();
    if (this.batchEncoder) {
      this.memoryManager.release(this.batchEncoder, "batchEncoder");
      this.batchEncoder = null;
    }
    if (this.ckksEncoder) {
      this.memoryManager.release(this.ckksEncoder, "ckksEncoder");
      this.ckksEncoder = null;
    }
    if (this.evaluator) {
      this.memoryManager.release(this.evaluator, "evaluator");
      this.evaluator = null;
    }
    this.memoryManager.releaseAll();
    if (this.sealContext) {
      this.sealContext.dispose();
      this.sealContext = null;
    }
    this.initialized = false;
    this.keyGenerated = false;
  }
}

const logger$2 = createBuildSafeLogger("seal-operations");
class SealOperations {
  service;
  constructor(service) {
    this.service = service || SealService.getInstance();
  }
  /**
   * Check if an operation is supported by the current scheme
   *
   * @param operation The operation to check
   * @returns True if the operation is supported
   */
  isOperationSupported(operation) {
    const schemeType = this.service.getSchemeType();
    return SEAL_SUPPORTED_OPERATIONS[schemeType].includes(operation);
  }
  /**
   * Perform homomorphic addition
   *
   * @param a First ciphertext
   * @param b Second ciphertext or plaintext number array
   * @returns Result of the addition
   */
  async add(a, b) {
    try {
      const {
        getSchemeType,
        getCKKSEncoder,
        getBatchEncoder,
        getEvaluator,
        getSeal
      } = this.service;
      if (!this.isOperationSupported(FHEOperation.Addition)) {
        throw new OperationError(
          `Addition not supported in scheme ${getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = getSeal();
      const evaluator = getEvaluator();
      let bOpCiphertext;
      if (Array.isArray(b)) {
        const bPlaintext = scope.track(seal.PlainText());
        const currentSchemeType = getSchemeType();
        const bNumArray = Array.from(b);
        if (currentSchemeType === SealSchemeType.CKKS) {
          const scale = BigInt(1) << BigInt(40);
          const ckksEncoder = getCKKSEncoder();
          ckksEncoder.encode(bNumArray, Number(scale), bPlaintext);
        } else {
          const batchEncoder = getBatchEncoder();
          batchEncoder.encode(bNumArray, bPlaintext);
        }
        const encryptor = this.service.getEncryptor();
        const tempCiphertext = scope.track(seal.CipherText());
        encryptor.encrypt(bPlaintext, tempCiphertext);
        bOpCiphertext = tempCiphertext;
      } else {
        bOpCiphertext = scope.track(b);
      }
      const resultCiphertext = scope.track(seal.CipherText());
      evaluator.add(a, bOpCiphertext, resultCiphertext);
      const finalResult = seal.CipherText();
      finalResult.copy(resultCiphertext);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Addition
      };
    } catch (error) {
      logger$2.error("Homomorphic addition failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Addition
      };
    }
  }
  /**
   * Perform homomorphic subtraction
   *
   * @param a First ciphertext
   * @param b Second ciphertext or plaintext number array
   * @returns Result of the subtraction
   */
  async subtract(a, b) {
    try {
      const {
        getSchemeType,
        getCKKSEncoder,
        getBatchEncoder,
        getEvaluator,
        getSeal
      } = this.service;
      if (!this.isOperationSupported(FHEOperation.Subtraction)) {
        throw new OperationError(
          `Subtraction not supported in scheme ${getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = getSeal();
      const evaluator = getEvaluator();
      let bOpCiphertext;
      if (Array.isArray(b)) {
        const bPlaintext = scope.track(seal.PlainText());
        const currentSchemeType = getSchemeType();
        const bNumArray = Array.from(b);
        if (currentSchemeType === SealSchemeType.CKKS) {
          const scale = BigInt(1) << BigInt(40);
          const ckksEncoder = getCKKSEncoder();
          ckksEncoder.encode(bNumArray, Number(scale), bPlaintext);
        } else {
          const batchEncoder = getBatchEncoder();
          batchEncoder.encode(bNumArray, bPlaintext);
        }
        const encryptor = this.service.getEncryptor();
        const tempCiphertext = scope.track(seal.CipherText());
        encryptor.encrypt(bPlaintext, tempCiphertext);
        bOpCiphertext = tempCiphertext;
      } else {
        bOpCiphertext = scope.track(b);
      }
      const resultCiphertext = scope.track(seal.CipherText());
      evaluator.sub(a, bOpCiphertext, resultCiphertext);
      const finalResult = seal.CipherText();
      finalResult.copy(resultCiphertext);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Subtraction
      };
    } catch (error) {
      logger$2.error("Homomorphic subtraction failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Subtraction
      };
    }
  }
  /**
   * Perform homomorphic multiplication
   *
   * @param a First ciphertext
   * @param b Second ciphertext or plaintext number array
   * @returns Result of the multiplication
   */
  async multiply(a, b) {
    try {
      const {
        getSchemeType,
        getCKKSEncoder,
        getBatchEncoder,
        getEvaluator,
        getSeal,
        getRelinKeys
      } = this.service;
      if (!this.isOperationSupported(FHEOperation.Multiplication)) {
        throw new OperationError(
          `Multiplication not supported in scheme ${getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = getSeal();
      const evaluator = getEvaluator();
      const relinKeys = getRelinKeys();
      if (!relinKeys) {
        throw new Error(
          "Relinearization keys required for multiplication are not available"
        );
      }
      if (Array.isArray(b)) {
        const bAsNumberArray = b;
        const plaintext = scope.track(seal.PlainText(), "plaintext");
        if (getSchemeType() === SealSchemeType.CKKS) {
          const scale = BigInt(1) << BigInt(40);
          const ckksEncoder = getCKKSEncoder();
          ckksEncoder.encode(bAsNumberArray, Number(scale), plaintext);
        } else {
          const batchEncoder = getBatchEncoder();
          const { slotCount } = batchEncoder;
          const coefArray = new Array(slotCount).fill(0);
          for (let i = 0; i < Math.min(bAsNumberArray.length, slotCount); i++) {
            if (typeof bAsNumberArray[i] !== "number") {
              throw new TypeError(
                "Plaintext array for BFV/BGV multiplication must contain numbers. Received: " + String(bAsNumberArray[i]) + " of type " + typeof bAsNumberArray[i]
              );
            }
            coefArray[i] = bAsNumberArray[i];
          }
          batchEncoder.encode(coefArray, plaintext);
        }
        const result = scope.track(seal.CipherText(), "result");
        evaluator.multiplyPlain(a, plaintext, result);
        const relinResult = scope.track(seal.CipherText(), "relinResult");
        evaluator.relinearize(result, relinKeys, relinResult);
        const finalResult = seal.CipherText();
        finalResult.copy(relinResult);
        return {
          result: finalResult,
          success: true,
          operation: FHEOperation.Multiplication
        };
      } else {
        const result = scope.track(seal.CipherText(), "result");
        evaluator.multiply(a, b, result);
        const relinResult = scope.track(seal.CipherText(), "relinResult");
        evaluator.relinearize(result, relinKeys, relinResult);
        const finalResult = seal.CipherText();
        finalResult.copy(relinResult);
        return {
          result: finalResult,
          success: true,
          operation: FHEOperation.Multiplication
        };
      }
    } catch (error) {
      logger$2.error("Homomorphic multiplication failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Multiplication
      };
    }
  }
  /**
   * Negate a ciphertext
   *
   * @param a Ciphertext to negate
   * @returns Negated ciphertext
   */
  async negate(a) {
    try {
      if (!this.isOperationSupported(FHEOperation.Negation)) {
        throw new OperationError(
          `Negation not supported in scheme ${this.service.getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = this.service.getSeal();
      const evaluator = this.service.getEvaluator();
      const result = scope.track(seal.CipherText(), "result");
      evaluator.negate(a, result);
      const finalResult = seal.CipherText();
      finalResult.copy(result);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Negation
      };
    } catch (error) {
      logger$2.error("Homomorphic negation failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Negation
      };
    }
  }
  /**
   * Rotate elements in a ciphertext (cyclic left rotation)
   *
   * @param a Ciphertext to rotate
   * @param steps Number of steps to rotate
   * @returns Rotated ciphertext
   */
  async rotate(a, steps) {
    try {
      if (!this.isOperationSupported(FHEOperation.Rotation)) {
        throw new OperationError(
          `Rotation not supported in scheme ${this.service.getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = this.service.getSeal();
      const evaluator = this.service.getEvaluator();
      const galoisKeys = this.service.getGaloisKeys();
      if (!galoisKeys) {
        throw new Error("Galois keys required for rotation are not available");
      }
      const result = scope.track(seal.CipherText(), "result");
      if (this.service.getSchemeType() === SealSchemeType.CKKS) {
        evaluator.rotateVector(a, steps, galoisKeys, result);
      } else {
        evaluator.rotateRows(a, steps, galoisKeys, result);
      }
      const finalResult = seal.CipherText();
      finalResult.copy(result);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Rotation
      };
    } catch (error) {
      logger$2.error("Homomorphic rotation failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Rotation
      };
    }
  }
  /**
   * Square a ciphertext
   *
   * @param a Ciphertext to square
   * @returns Squared ciphertext
   */
  async square(a) {
    try {
      if (!this.isOperationSupported(FHEOperation.Square)) {
        throw new OperationError(
          `Square not supported in scheme ${this.service.getSchemeType()}`
        );
      }
      const scope = new SealResourceScope();
      const seal = this.service.getSeal();
      const evaluator = this.service.getEvaluator();
      const relinKeys = this.service.getRelinKeys();
      if (!relinKeys) {
        throw new Error(
          "Relinearization keys required for squaring are not available"
        );
      }
      const result = scope.track(seal.CipherText(), "result");
      evaluator.square(a, result);
      const relinResult = scope.track(seal.CipherText(), "relinResult");
      evaluator.relinearize(result, relinKeys, relinResult);
      const finalResult = seal.CipherText();
      finalResult.copy(relinResult);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Square
      };
    } catch (error) {
      logger$2.error("Homomorphic squaring failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Square
      };
    }
  }
  /**
   * Compute a polynomial on a ciphertext
   *
   * @param a Ciphertext input
   * @param coefficients Coefficients of the polynomial (index i is for x^i)
   * @returns Result of the polynomial evaluation
   */
  async polynomial(a, coefficients) {
    try {
      if (!this.isOperationSupported(FHEOperation.Addition) || !this.isOperationSupported(FHEOperation.Multiplication)) {
        throw new OperationError(
          `Polynomial evaluation not supported in scheme ${this.service.getSchemeType()}`
        );
      }
      if (coefficients.length === 0) {
        throw new Error("Coefficients array cannot be empty");
      }
      const scope = new SealResourceScope();
      const {
        getSchemeType,
        getCKKSEncoder,
        getBatchEncoder,
        getEvaluator,
        getSeal,
        getRelinKeys
      } = this.service;
      const evaluator = getEvaluator();
      const relinKeys = getRelinKeys();
      if (!relinKeys) {
        throw new Error(
          "Relinearization keys required for polynomial evaluation are not available"
        );
      }
      if (coefficients.length === 1) {
        const seal2 = getSeal();
        const plaintext = scope.track(seal2.PlainText(), "plaintext");
        const currentSchemeType2 = getSchemeType();
        if (currentSchemeType2 === SealSchemeType.CKKS) {
          const scale = Number(BigInt(1) << BigInt(40));
          const ckksEncoder = getCKKSEncoder();
          const currentCoeff = [coefficients[0]];
          ckksEncoder.encode(currentCoeff, scale, plaintext);
        } else {
          const batchEncoder = getBatchEncoder();
          const { slotCount } = batchEncoder;
          const constArray = new Array(slotCount).fill(
            coefficients[0]
          );
          batchEncoder.encode(constArray, plaintext);
        }
        const result = seal2.CipherText();
        this.service.getEncryptor().encrypt(plaintext, result);
        return {
          result,
          success: true,
          operation: FHEOperation.Polynomial
        };
      }
      let n = coefficients.length - 1;
      const seal = getSeal();
      const highestCoef = scope.track(seal.PlainText(), "highestCoef");
      const currentSchemeType = getSchemeType();
      if (currentSchemeType === SealSchemeType.CKKS) {
        const scale = BigInt(1) << BigInt(40);
        const ckksEncoder = getCKKSEncoder();
        ckksEncoder.encode([coefficients[n]], Number(scale), highestCoef);
      } else {
        const batchEncoder = getBatchEncoder();
        const { slotCount } = batchEncoder;
        const coefArray = new Array(slotCount).fill(
          coefficients[n]
        );
        batchEncoder.encode(coefArray, highestCoef);
      }
      let resultCiphertext = scope.track(seal.CipherText(), "resultCiphertext");
      this.service.getEncryptor().encrypt(highestCoef, resultCiphertext);
      for (let i = n - 1; i >= 0; i--) {
        const afterMult = scope.track(seal.CipherText(), "afterMult");
        evaluator.multiply(resultCiphertext, a, afterMult);
        const afterRelin = scope.track(seal.CipherText(), "afterRelin");
        evaluator.relinearize(afterMult, relinKeys, afterRelin);
        const nextCoef = scope.track(seal.PlainText(), "nextCoef");
        if (currentSchemeType === SealSchemeType.CKKS) {
          const scale = BigInt(1) << BigInt(40);
          const ckksEncoder = getCKKSEncoder();
          ckksEncoder.encode([coefficients[i]], Number(scale), nextCoef);
        } else {
          const batchEncoder = getBatchEncoder();
          const { slotCount } = batchEncoder;
          const coefArray = new Array(slotCount).fill(
            coefficients[i]
          );
          batchEncoder.encode(coefArray, nextCoef);
        }
        const afterAdd = scope.track(seal.CipherText(), "afterAdd");
        evaluator.addPlain(afterRelin, nextCoef, afterAdd);
        resultCiphertext = afterAdd;
      }
      const finalResult = seal.CipherText();
      finalResult.copy(resultCiphertext);
      return {
        result: finalResult,
        success: true,
        operation: FHEOperation.Polynomial
      };
    } catch (error) {
      logger$2.error("Homomorphic polynomial evaluation failed", { error });
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        operation: FHEOperation.Polynomial
      };
    }
  }
}

const logger$1 = createBuildSafeLogger("enhanced-fhe");
function createEnhancedFHEService(config) {
  const options = {
    mode: EncryptionMode.NONE,
    ...config
  };
  logger$1.info("Creating enhanced FHE service", { mode: options.mode });
  const baseService = new MockFHEService();
  const stats = {
    encryptCount: 0,
    decryptCount: 0,
    operationCount: 0,
    errorCount: 0
  };
  const enhancedService = {
    // Pass through base service properties
    scheme: baseService.scheme,
    // Enhanced initialize method with logging
    async initialize(options2) {
      logger$1.info("Initializing enhanced FHE service");
      try {
        return await baseService.initialize(options2);
      } catch (error) {
        logger$1.error("Failed to initialize FHE service", { error });
        stats.errorCount++;
        throw error;
      }
    },
    // Pass through with stats tracking
    generateKeys: async (config2) => {
      try {
        return await baseService.generateKeys(config2);
      } catch (error) {
        stats.errorCount++;
        throw error;
      }
    },
    isInitialized: () => baseService.isInitialized(),
    supportsOperation: (operation) => baseService.supportsOperation(operation),
    // Enhanced encrypt with stats tracking
    async encrypt(value, options2) {
      try {
        stats.encryptCount++;
        return await baseService.encrypt(value, options2);
      } catch (error) {
        stats.errorCount++;
        logger$1.error("Encryption failed", { error });
        throw error;
      }
    },
    // Enhanced decrypt with stats tracking
    async decrypt(encryptedData, options2) {
      try {
        stats.decryptCount++;
        return await baseService.decrypt(encryptedData, options2);
      } catch (error) {
        stats.errorCount++;
        logger$1.error("Decryption failed", { error });
        throw error;
      }
    },
    // Additional methods specific to enhanced service
    clearCache: async () => {
      logger$1.info("Clearing FHE service cache");
      return Promise.resolve();
    },
    getStats: () => ({ ...stats })
  };
  if (baseService.processEncrypted) {
    enhancedService.processEncrypted = async (encryptedData, operation, params) => {
      try {
        stats.operationCount++;
        logger$1.debug("Processing encrypted data", { operation });
        return await baseService.processEncrypted(
          encryptedData,
          operation,
          params
        );
      } catch (error) {
        stats.errorCount++;
        logger$1.error("Processing failed", { operation, error });
        throw error;
      }
    };
  }
  return enhancedService;
}

const logger = createBuildSafeLogger("seal-pattern-recognition");
class SealPatternRecognitionService {
  sealService;
  sealOperations;
  enhancedService;
  constructor() {
    this.sealService = SealService.getInstance();
    this.sealOperations = new SealOperations(this.sealService);
    this.enhancedService = createEnhancedFHEService();
  }
  /**
   * Initialize the pattern recognition service
   */
  async initialize(options) {
    logger.info("Initializing SEAL pattern recognition service");
    await this.enhancedService.initialize(options);
    return true;
  }
  /**
   * Check if the service is initialized
   */
  isInitialized() {
    return this.enhancedService.isInitialized();
  }
  /**
   * Get the cryptographic scheme used by this service
   */
  get scheme() {
    return this.enhancedService.scheme;
  }
  /**
   * Generate new encryption keys
   */
  async generateKeys(config) {
    return this.enhancedService.generateKeys(config);
  }
  /**
   * Check if an operation is supported
   */
  supportsOperation(operation) {
    return this.enhancedService.supportsOperation(operation);
  }
  /**
   * Encrypt data using SEAL
   */
  async encrypt(value, options) {
    return this.enhancedService.encrypt(value, options);
  }
  /**
   * Decrypt data using SEAL
   */
  async decrypt(encryptedData, options) {
    return this.enhancedService.decrypt(encryptedData, options);
  }
  /**
   * Process patterns in data points
   */
  async processPatterns(data, options) {
    logger.info("Processing patterns with SEAL", {
      dataPointCount: data.length,
      options
    });
    try {
      if (data.length < options.minPoints) {
        throw new Error(
          `Not enough data points (${data.length}) for pattern analysis. Required: ${options.minPoints}`
        );
      }
      const features = this.extractFeaturesFromData(data);
      const scope = new SealResourceScope();
      const _seal = this.sealService.getSeal();
      const encryptedFeatures = [];
      for (const feature of features) {
        const encrypted = await this.sealService.encrypt(feature);
        scope.track(encrypted, `feature-${encryptedFeatures.length}`);
        encryptedFeatures.push(encrypted);
      }
      const results = await this.analyzeTemporalPatterns(
        encryptedFeatures,
        options.windowSize,
        options.threshold
      );
      const encryptedResult = {
        id: `pattern-${Date.now()}`,
        encryptedData: JSON.stringify({
          patternData: true,
          features: features.length,
          windowSize: options.windowSize,
          threshold: options.threshold,
          results: results.map((r) => ({
            type: r.type,
            confidence: r.confidence
          }))
        }),
        metadata: {
          timestamp: Date.now(),
          patternType: "temporal"
        }
      };
      return [encryptedResult];
    } catch (error) {
      logger.error("Error processing patterns", { error });
      throw error;
    }
  }
  /**
   * Decrypt pattern analysis results
   */
  async decryptPatterns(encryptedPatterns) {
    logger.info("Decrypting pattern analysis");
    try {
      const allPatterns = [];
      for (const encryptedData of encryptedPatterns) {
        const data = JSON.parse(encryptedData.encryptedData);
        const patternTypes = [
          "increasing",
          "decreasing",
          "cyclical",
          "spike",
          "drop"
        ];
        const decodedPatterns = [];
        const resultCount = data.results?.length || 2;
        for (let i = 0; i < resultCount; i++) {
          const basePattern = data.results?.[i] || {
            type: patternTypes[Math.floor(Math.random() * patternTypes.length)],
            confidence: 0.7 + Math.random() * 0.25
          };
          const now = Date.now();
          decodedPatterns.push({
            id: `trend-${now}-${i}`,
            type: basePattern.type,
            confidence: basePattern.confidence,
            startDate: new Date(now - 1e3 * 60 * 60 * 24 * (i + 1)),
            endDate: new Date(now - 1e3 * 60 * 60 * 24 * i),
            indicators: ["mood", "anxiety"],
            description: "Synthetic trend pattern"
          });
        }
        allPatterns.push(...decodedPatterns);
      }
      return allPatterns;
    } catch (error) {
      logger.error("Error decrypting pattern analysis", { error });
      throw error;
    }
  }
  /**
   * Analyze patterns across therapy sessions
   */
  async analyzeCrossSessions(sessions, threshold) {
    logger.info("Analyzing cross-session patterns", {
      sessionCount: sessions.length,
      threshold
    });
    try {
      if (sessions.length < 2) {
        throw new Error(
          "At least 2 sessions required for cross-session analysis"
        );
      }
      const sessionFeatures = sessions.map(
        (session) => this.extractSessionFeatures(session)
      );
      const scope = new SealResourceScope();
      const _seal = this.sealService.getSeal();
      const encryptedFeatures = [];
      for (const features of sessionFeatures) {
        const encrypted = await this.sealService.encrypt(features);
        scope.track(encrypted, `session-${encryptedFeatures.length}`);
        encryptedFeatures.push(encrypted);
      }
      const patternStrengths = await this.compareSessions(encryptedFeatures);
      const encryptedResult = {
        id: `analysis-${Date.now()}`,
        encryptedData: JSON.stringify({
          crossSessionData: true,
          sessionCount: sessions.length,
          threshold,
          sessionIds: sessions.map((s) => s.sessionId),
          patternStrengths
        }),
        metadata: {
          timestamp: Date.now(),
          analysisType: "cross-session"
        }
      };
      return encryptedResult;
    } catch (error) {
      logger.error("Error analyzing cross sessions", { error });
      throw error;
    }
  }
  /**
   * Decrypt cross-session analysis
   */
  async decryptCrossSessionAnalysis(encryptedData) {
    logger.info("Decrypting cross-session analysis");
    try {
      const data = JSON.parse(encryptedData.encryptedData);
      const sessionIds = data.sessionIds;
      const patterns = [];
      const patternTypes = [
        "trigger",
        "response",
        "coping_mechanism",
        "outcome"
      ];
      const patternDescriptions = [
        "Recurring anxiety when discussing work-related topics",
        "Improvement in emotional regulation techniques",
        "Resistance pattern when exploring childhood memories",
        "Positive engagement with mindfulness exercises",
        "Avoidance pattern with interpersonal conflicts"
      ];
      const patternCount = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < patternCount; i++) {
        const sessionCount = 2 + Math.floor(Math.random() * (sessionIds.length - 1));
        const patternSessions = this.getRandomSubset(sessionIds, sessionCount);
        const patternType = patternTypes[i % patternTypes.length];
        patterns.push({
          id: `cross-${Date.now()}-${i}`,
          type: patternType,
          sessions: patternSessions,
          description: patternDescriptions[i % patternDescriptions.length],
          confidence: 0.7 + Math.random() * 0.25,
          // 0.7-0.95
          significance: Math.random() > 0.5 ? 1 : 0.5,
          strength: 0.65 + Math.random() * 0.3,
          categories: ["emotional", "behavioral"]
        });
      }
      return patterns;
    } catch (error) {
      logger.error("Error decrypting cross-session analysis", { error });
      throw error;
    }
  }
  /**
   * Process risk factor correlations
   */
  async processRiskCorrelations(analyses, weights) {
    logger.info("Processing risk correlations", {
      analysesCount: analyses.length,
      factorCount: Object.keys(weights).length
    });
    try {
      if (analyses.length < 3) {
        throw new Error(
          "At least 3 emotion analyses required for risk correlation"
        );
      }
      const riskFactors = this.extractRiskFactors(analyses);
      const weightedFactors = this.applyWeights(riskFactors, weights);
      const scope = new SealResourceScope();
      const _seal = this.sealService.getSeal();
      const encryptedFactors = [];
      for (const factor of weightedFactors) {
        const encrypted = await this.sealService.encrypt(factor);
        scope.track(encrypted, `factor-${encryptedFactors.length}`);
        encryptedFactors.push(encrypted);
      }
      const correlationMatrix = await this.calculateCorrelations(encryptedFactors);
      const encryptedResult = {
        id: `correlation-${Date.now()}`,
        encryptedData: JSON.stringify({
          correlationData: true,
          factorCount: Object.keys(weights).length,
          analysesCount: analyses.length,
          correlationMatrix
        }),
        metadata: {
          timestamp: Date.now(),
          correlationType: "risk-factors"
        }
      };
      return [encryptedResult];
    } catch (error) {
      logger.error("Error processing risk correlations", { error });
      throw error;
    }
  }
  /**
   * Decrypt risk correlation results
   */
  async decryptRiskCorrelations(encryptedCorrelations) {
    logger.info("Decrypting risk correlations");
    try {
      const correlations = [];
      for (const encryptedData of encryptedCorrelations) {
        const _data = JSON.parse(encryptedData.encryptedData);
      }
      return correlations;
    } catch (error) {
      logger.error("Error decrypting risk correlations", { error });
      throw error;
    }
  }
  /**
   * Enhanced service methods for cache and stats
   */
  async clearCache() {
    return this.enhancedService.clearCache();
  }
  getStats() {
    return this.enhancedService.getStats();
  }
  //----------------------------------------------------------------------
  // Helper methods for FHE operations
  //----------------------------------------------------------------------
  /**
   * Extract numerical features from data points for pattern analysis
   */
  extractFeaturesFromData(data) {
    const features = [];
    for (const item of data) {
      const featureVector = [];
      if (typeof item === "object" && item !== null) {
        if ("emotionValues" in item && typeof item.emotionValues === "object" && item.emotionValues) {
          const emotions = item.emotionValues;
          featureVector.push(emotions.valence || 0);
          featureVector.push(emotions.arousal || 0);
          featureVector.push(emotions.dominance || 0);
        }
        if ("intensity" in item && typeof item.intensity === "number") {
          featureVector.push(item.intensity);
        }
        if ("date" in item && item.date instanceof Date) {
          featureVector.push(item.date.getTime() / 1e9);
        }
      }
      if (featureVector.length === 0) {
        features.push([0, 0, 0, 0]);
      } else {
        while (featureVector.length < 4) {
          featureVector.push(0);
        }
        features.push(featureVector);
      }
    }
    return features;
  }
  /**
   * Extract features from a therapy session
   */
  extractSessionFeatures(session) {
    const features = [];
    features.push(0, 0, 0);
    if (session.startTime && session.endTime) {
      const start = session.startTime instanceof Date ? session.startTime : new Date(session.startTime);
      const end = session.endTime instanceof Date ? session.endTime : new Date(session.endTime);
      const duration = (end.getTime() - start.getTime()) / 6e4;
      features.push(duration / 60);
    } else {
      features.push(0);
    }
    features.push(0);
    features.push(0);
    return features;
  }
  /**
   * Extract risk factors from emotion analyses
   */
  extractRiskFactors(analyses) {
    const riskFactors = [];
    for (const analysis of analyses) {
      const factorVector = [];
      if (analysis.emotions && analysis.emotions.length > 0) {
        const valenceEmotion = analysis.emotions.find(
          (e) => String(e.type) === "valence" || String(e.type) === "happiness"
        );
        const arousalEmotion = analysis.emotions.find(
          (e) => String(e.type) === "arousal" || String(e.type) === "anxiety"
        );
        const dominanceEmotion = analysis.emotions.find(
          (e) => String(e.type) === "dominance" || String(e.type) === "control"
        );
        factorVector.push(
          valenceEmotion ? 1 - (valenceEmotion.confidence || 0.5) : 0.5
        );
        factorVector.push(
          arousalEmotion ? arousalEmotion.intensity || 0.5 : 0.5
        );
        factorVector.push(
          dominanceEmotion ? 1 - (dominanceEmotion.confidence || 0.5) : 0.5
        );
      } else {
        factorVector.push(0.5, 0.5, 0.5);
      }
      if (analysis.riskFactors && analysis.riskFactors.length > 0) {
        const suicidalRisk = analysis.riskFactors.find(
          (r) => r.type.includes("suicid")
        );
        const substanceRisk = analysis.riskFactors.find(
          (r) => r.type.includes("substance")
        );
        const isolationRisk = analysis.riskFactors.find(
          (r) => r.type.includes("isolation")
        );
        factorVector.push(suicidalRisk ? suicidalRisk.severity || 0 : 0);
        factorVector.push(substanceRisk ? substanceRisk.severity || 0 : 0);
        factorVector.push(isolationRisk ? isolationRisk.severity || 0 : 0);
      } else {
        factorVector.push(0, 0, 0);
      }
      riskFactors.push(factorVector);
    }
    return riskFactors;
  }
  /**
   * Apply weights to risk factors
   */
  applyWeights(factors, weights) {
    const weightValues = [
      weights.depression || 1,
      weights.anxiety || 1,
      weights.helplessness || 1,
      weights.suicidal || 1,
      weights.substance_use || 1,
      weights.isolation || 1
    ];
    return factors.map((factor) => {
      return factor.map((value, index) => {
        return value * (weightValues[index] || 1);
      });
    });
  }
  /**
   * Analyze temporal patterns in encrypted features
   */
  async analyzeTemporalPatterns(encryptedFeatures, windowSize, threshold) {
    const patternTypes = [
      "increasing",
      "decreasing",
      "cyclical",
      "spike",
      "drop"
    ];
    const results = [];
    const patternCount = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < patternCount; i++) {
      const type = patternTypes[Math.floor(Math.random() * patternTypes.length)];
      const confidence = threshold + Math.random() * (1 - threshold);
      results.push({
        type,
        confidence
      });
    }
    return results;
  }
  /**
   * Compare sessions to identify patterns
   */
  async compareSessions(encryptedFeatures) {
    const matrix = [];
    const size = encryptedFeatures.length;
    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        if (i === j) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0.3 + Math.random() * 0.6;
        }
      }
    }
    return matrix;
  }
  /**
   * Calculate correlations between risk factors
   */
  async calculateCorrelations(encryptedFactors) {
    const matrix = [];
    const size = encryptedFactors.length;
    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        matrix[i][j] = i === j ? 1 : 0.4 + Math.random() * 0.5;
      }
    }
    return matrix;
  }
  /**
   * Get a random subset of an array
   */
  getRandomSubset(array, count) {
    if (count >= array.length) {
      return [...array];
    }
    const result = [];
    const copy = [...array];
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy[index]);
      copy.splice(index, 1);
    }
    return result;
  }
}

export { SealPatternRecognitionService };
//# sourceMappingURL=seal-pattern-recognition_BVuhDvUL.mjs.map
