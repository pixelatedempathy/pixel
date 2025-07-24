;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3964914e-86d4-47c7-970e-115feb542bc3",e._sentryDebugIdIdentifier="sentry-dbid-3964914e-86d4-47c7-970e-115feb542bc3")}catch(e){}}();import { useState, useRef, useCallback, useEffect } from 'react';
import './astro/server_t-wqd6mp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';

class EmotionDataCache {
  cache = /* @__PURE__ */ new Map();
  maxEntries = 20;
  // Maximum number of cache entries
  maxMemory = 10 * 1024 * 1024;
  // Max cache size (10MB)
  currentMemory = 0;
  ttl = 5 * 60 * 1e3;
  // Default TTL: 5 minutes
  cleanupInterval = null;
  constructor() {
    this.cleanupInterval = setInterval(() => this.cleanup(), 60 * 1e3);
  }
  // Calculate approximate size of emotion data in bytes
  calculateSize(data) {
    const bytesPerEntry = 4 * 8 + (data[0]?.emotion ? 20 : 0) + 16;
    return data.length * bytesPerEntry;
  }
  // Get data from cache
  get(key) {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }
    const now = Date.now();
    if (now - entry.timestamp > this.ttl) {
      this.delete(key);
      return null;
    }
    entry.lastAccessed = now;
    entry.priority += 1;
    return entry.data;
  }
  // Set data in cache
  set(key, data, priority = 1) {
    const size = this.calculateSize(data);
    if (size > this.maxMemory * 0.5) {
      console.warn(`Data too large for cache: ${size} bytes`);
      return;
    }
    if (this.currentMemory + size > this.maxMemory) {
      this.evict(size);
    }
    if (this.cache.size >= this.maxEntries) {
      this.evictLeastValuable();
    }
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      size,
      lastAccessed: Date.now(),
      priority
    });
    this.currentMemory += size;
  }
  // Delete a specific entry
  delete(key) {
    const entry = this.cache.get(key);
    if (entry) {
      this.currentMemory -= entry.size;
      this.cache.delete(key);
    }
  }
  // Clear all entries
  clear() {
    this.cache.clear();
    this.currentMemory = 0;
  }
  // Clean up expired entries
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.delete(key);
      }
    }
  }
  // Evict entries to make room for new data
  evict(requiredSpace) {
    const entries = Array.from(this.cache.entries()).sort((a, b) => {
      const priorityDiff = a[1].priority - b[1].priority;
      if (priorityDiff !== 0) {
        return priorityDiff;
      }
      return a[1].lastAccessed - b[1].lastAccessed;
    });
    let freedSpace = 0;
    for (const [key, entry] of entries) {
      this.delete(key);
      freedSpace += entry.size;
      if (freedSpace >= requiredSpace) {
        break;
      }
    }
  }
  // Remove the least valuable entry based on priority and access time
  evictLeastValuable() {
    let leastValuableKey = null;
    let lowestValue = Infinity;
    for (const [key, entry] of this.cache.entries()) {
      const recencyFactor = Math.max(
        1,
        (Date.now() - entry.lastAccessed) / 1e3
      );
      const value = entry.priority / recencyFactor;
      if (value < lowestValue) {
        lowestValue = value;
        leastValuableKey = key;
      }
    }
    if (leastValuableKey) {
      this.delete(leastValuableKey);
    }
  }
  // Clean up when the object is garbage collected
  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
  // Set custom TTL for specific client data
  setTTL(clientId, ttl) {
    this.ttl = ttl;
  }
  // Get cache statistics for monitoring
  getStats() {
    return {
      entries: this.cache.size,
      memoryUsed: this.currentMemory,
      memoryLimit: this.maxMemory
    };
  }
}
const emotionCache = new EmotionDataCache();
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    emotionCache.destroy();
  });
}
function useMultidimensionalEmotions(clientId, timeRange = "week", dataPoints = 100) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCached, setIsCached] = useState(false);
  const abortControllerRef = useRef(null);
  const isMountedRef = useRef(true);
  const getTimeRangeInMs = (range) => {
    const timeRanges = {
      day: 24 * 60 * 60 * 1e3,
      week: 7 * 24 * 60 * 60 * 1e3,
      month: 30 * 24 * 60 * 60 * 1e3,
      year: 365 * 24 * 60 * 60 * 1e3
    };
    return timeRanges[range];
  };
  const fetchEmotionData = useCallback(
    async (ignoreCache = false) => {
      if (!clientId) {
        setError(new Error("Client ID is required"));
        setIsLoading(false);
        return;
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      setError(null);
      setIsCached(false);
      const cacheKey = `emotions_${clientId}_${timeRange}_${dataPoints}`;
      if (!ignoreCache) {
        const cachedData = emotionCache.get(cacheKey);
        if (cachedData) {
          setData(cachedData);
          setIsLoading(false);
          setIsCached(true);
          return;
        }
      }
      try {
        const lowResKey = `emotions_${clientId}_${timeRange}_${Math.floor(dataPoints / 4)}`;
        const lowResData = emotionCache.get(lowResKey);
        if (lowResData && !ignoreCache) {
          setData(lowResData);
          setIsCached(true);
        }
        const startDate = new Date(Date.now() - getTimeRangeInMs(timeRange));
        const endDate = /* @__PURE__ */ new Date();
        const params = new URLSearchParams({
          clientId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          limit: dataPoints.toString()
        });
        const response = await fetch(`/api/emotions/dimensional?${params}`, {
          signal: abortControllerRef.current.signal,
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error(`Error fetching emotion data: ${response.statusText}`);
        }
        const result = await response.json();
        const emotionData = result.data.map((item) => ({
          timestamp: item.timestamp,
          valence: item.dimensions.valence,
          arousal: item.dimensions.arousal,
          dominance: item.dimensions.dominance,
          emotion: item.mappedEmotion
        }));
        emotionData.sort((a, b) => a.timestamp - b.timestamp);
        if (isMountedRef.current) {
          setData(emotionData);
          setIsCached(false);
          let priority = 1;
          switch (timeRange) {
            case "day":
              priority = 4;
              break;
            case "week":
              priority = 3;
              break;
            case "month":
              priority = 2;
              break;
            case "year":
              priority = 1;
              break;
          }
          emotionCache.set(cacheKey, emotionData, priority);
          if (dataPoints > 20) {
            const sampledData = sampleData(
              emotionData,
              Math.floor(dataPoints / 4)
            );
            emotionCache.set(lowResKey, sampledData, priority - 1);
          }
        }
      } catch (err) {
        if (isMountedRef.current && !(err instanceof DOMException && err.name === "AbortError")) {
          console.error("Error fetching emotion data:", err);
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsCached(false);
        }
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    },
    [clientId, timeRange, dataPoints]
  );
  useEffect(() => {
    isMountedRef.current = true;
    switch (timeRange) {
      case "day":
        emotionCache.setTTL(clientId, 2 * 60 * 1e3);
        break;
      case "week":
        emotionCache.setTTL(clientId, 5 * 60 * 1e3);
        break;
      case "month":
        emotionCache.setTTL(clientId, 15 * 60 * 1e3);
        break;
      case "year":
        emotionCache.setTTL(clientId, 60 * 60 * 1e3);
        break;
    }
    fetchEmotionData();
    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchEmotionData, timeRange, clientId]);
  const refresh = useCallback(() => {
    fetchEmotionData(true);
  }, [fetchEmotionData]);
  return { data, isLoading, error, refresh, isCached };
}
function sampleData(data, targetCount) {
  if (data.length <= targetCount) {
    return data;
  }
  const result = [];
  const stride = data.length / targetCount;
  for (let i = 0; i < targetCount; i++) {
    const index = Math.min(Math.floor(i * stride), data.length - 1);
    result.push(data[index]);
  }
  return result;
}

const MultidimensionalEmotionChart = ({
  emotionData = [],
  isLoading = false
}) => {
  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mockData = [
    { id: "1", timestamp: /* @__PURE__ */ new Date("2024-01-01"), valence: 0.3, arousal: 0.2, dominance: 0.1, emotion: "Content" },
    { id: "2", timestamp: /* @__PURE__ */ new Date("2024-01-02"), valence: -0.2, arousal: 0.5, dominance: -0.1, emotion: "Anxious" },
    { id: "3", timestamp: /* @__PURE__ */ new Date("2024-01-03"), valence: 0.7, arousal: 0.6, dominance: 0.4, emotion: "Excited" },
    { id: "4", timestamp: /* @__PURE__ */ new Date("2024-01-04"), valence: -0.4, arousal: -0.3, dominance: -0.2, emotion: "Sad" },
    { id: "5", timestamp: /* @__PURE__ */ new Date("2024-01-05"), valence: 0.1, arousal: -0.1, dominance: 0.2, emotion: "Calm" },
    { id: "6", timestamp: /* @__PURE__ */ new Date("2024-01-06"), valence: 0.5, arousal: 0.3, dominance: 0.3, emotion: "Happy" },
    { id: "7", timestamp: /* @__PURE__ */ new Date("2024-01-07"), valence: -0.1, arousal: 0.7, dominance: 0.1, emotion: "Stressed" },
    { id: "8", timestamp: /* @__PURE__ */ new Date("2024-01-08"), valence: 0.8, arousal: 0.4, dominance: 0.6, emotion: "Confident" }
  ];
  const data = emotionData.length > 0 ? emotionData : mockData;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, rect.width, rect.height);
    if (isLoading) {
      ctx.fillStyle = "#666";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Loading emotion data...", rect.width / 2, rect.height / 2);
      return;
    }
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const scale = Math.min(rect.width, rect.height) * 0.3;
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const project3D = (x, y, z) => {
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      return {
        x: centerX + x1 * scale,
        y: centerY - y1 * scale,
        z: z2
      };
    };
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 2;
    const xStart = project3D(-1, 0, 0);
    const xEnd = project3D(1, 0, 0);
    ctx.beginPath();
    ctx.moveTo(xStart.x, xStart.y);
    ctx.lineTo(xEnd.x, xEnd.y);
    ctx.stroke();
    const yStart = project3D(0, -1, 0);
    const yEnd = project3D(0, 1, 0);
    ctx.beginPath();
    ctx.moveTo(yStart.x, yStart.y);
    ctx.lineTo(yEnd.x, yEnd.y);
    ctx.stroke();
    const zStart = project3D(0, 0, -1);
    const zEnd = project3D(0, 0, 1);
    ctx.beginPath();
    ctx.moveTo(zStart.x, zStart.y);
    ctx.lineTo(zEnd.x, zEnd.y);
    ctx.stroke();
    ctx.fillStyle = "#444";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Valence (+)", xEnd.x + 20, xEnd.y);
    ctx.fillText("Arousal (+)", yEnd.x, yEnd.y - 10);
    ctx.fillText("Dominance (+)", zEnd.x + 15, zEnd.y + 5);
    data.forEach((point, index) => {
      const projected = project3D(point.valence, point.arousal, point.dominance);
      const intensity = (index + 1) / data.length;
      const hue = 240 - intensity * 120;
      ctx.fillStyle = `hsl(${hue}, 70%, ${50 + intensity * 30}%)`;
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, 6, 0, 2 * Math.PI);
      ctx.fill();
      if (point.emotion) {
        ctx.fillStyle = "#333";
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(point.emotion, projected.x, projected.y - 10);
      }
    });
    if (data.length > 1) {
      ctx.strokeStyle = "rgba(100, 100, 100, 0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      const firstPoint = data[0];
      if (firstPoint) {
        const projectedFirst = project3D(firstPoint.valence, firstPoint.arousal, firstPoint.dominance);
        ctx.moveTo(projectedFirst.x, projectedFirst.y);
        for (let i = 1; i < data.length; i++) {
          const currentPoint = data[i];
          if (currentPoint) {
            const point = project3D(currentPoint.valence, currentPoint.arousal, currentPoint.dominance);
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }
    }
  }, [data, rotation, isLoading]);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotation((prev) => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative", children: [
    /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "w-full h-full cursor-move",
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-2", children: "3D Emotion Space" }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs space-y-1", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Valence:" }),
          " Pleasure/Displeasure"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Arousal:" }),
          " Activation/Deactivation"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Dominance:" }),
          " Control/Submission"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-xs mt-2 text-gray-600", children: "Click and drag to rotate" })
    ] }),
    data.length === 0 && !isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-gray-500 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-lg mb-2", children: "No emotion data available" }),
      /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Start a therapy session to see emotion patterns" })
    ] }) })
  ] });
};

export { MultidimensionalEmotionChart as M, useMultidimensionalEmotions as u };
