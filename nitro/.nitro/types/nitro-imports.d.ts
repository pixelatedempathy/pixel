declare global {
  const LogLevel: typeof import('../../../src/utils/logger')['LogLevel']
  const LogLevels: typeof import('../../../src/utils/logger')['LogLevels']
  const RateLimiter: typeof import('../../../src/utils/rate-limiter')['RateLimiter']
  const ServiceWorkerManager: typeof import('../../../src/utils/serviceWorkerRegistration')['ServiceWorkerManager']
  const VERSION_COLOR: typeof import('../../../src/utils/data')['VERSION_COLOR']
  const accessibilityMatchers: typeof import('../../../src/utils/accessibilityTestUtils')['accessibilityMatchers']
  const addFocusVisiblePolyfill: typeof import('../../../src/utils/accessibilityPolyfills')['addFocusVisiblePolyfill']
  const addIssue: typeof import('../../../src/utils/compatibility-testing')['addIssue']
  const announceAlert: typeof import('../../../src/utils/liveRegion')['announceAlert']
  const announceProgress: typeof import('../../../src/utils/liveRegion')['announceProgress']
  const announceStatus: typeof import('../../../src/utils/liveRegion')['announceStatus']
  const appendCorsHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendCorsHeaders']
  const appendCorsPreflightHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendCorsPreflightHeaders']
  const appendHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendHeader']
  const appendHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendHeaders']
  const appendResponseHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendResponseHeader']
  const appendResponseHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['appendResponseHeaders']
  const assertMethod: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['assertMethod']
  const basicAuth: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['basicAuth']
  const buildSearchIndex: typeof import('../../../src/utils/search-indexer')['buildSearchIndex']
  const cachedEventHandler: typeof import('nitro/runtime/internal/cache')['cachedEventHandler']
  const cachedFunction: typeof import('nitro/runtime/internal/cache')['cachedFunction']
  const calculateAspectRatio: typeof import('../../../src/utils/image-utils')['calculateAspectRatio']
  const calculateHeightFromWidth: typeof import('../../../src/utils/image-utils')['calculateHeightFromWidth']
  const calculateWidthFromHeight: typeof import('../../../src/utils/image-utils')['calculateWidthFromHeight']
  const checkAccessibility: typeof import('../../../src/utils/accessibilityPolyfills')['checkAccessibility']
  const checkAccessibilityViolations: typeof import('../../../src/utils/accessibilityTestUtils')['checkAccessibilityViolations']
  const checkColorContrast: typeof import('../../../src/utils/accessibilityTestUtils')['checkColorContrast']
  const checkFileExistsInDir: typeof import('../../../src/utils/common')['checkFileExistsInDir']
  const checkHeadingHierarchy: typeof import('../../../src/utils/accessibilityTestUtils')['checkHeadingHierarchy']
  const checkScreenReaderIssues: typeof import('../../../src/utils/accessibilityTestUtils')['checkScreenReaderIssues']
  const clearResponseHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['clearResponseHeaders']
  const clearSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['clearSession']
  const createApp: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['createApp']
  const createError: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['createError']
  const createEventStream: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['createEventStream']
  const createLogger: typeof import('../../../src/utils/logger')['createLogger']
  const createRouter: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['createRouter']
  const createSearchIndexFile: typeof import('../../../src/utils/search-indexer')['createSearchIndexFile']
  const debounce: typeof import('../../../src/utils/debounce')['debounce']
  const defaultContentType: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defaultContentType']
  const defaultImageConfig: typeof import('../../../src/utils/image-utils')['defaultImageConfig']
  const defineCachedEventHandler: typeof import('nitro/runtime/internal/cache')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('nitro/runtime/internal/cache')['defineCachedFunction']
  const defineEventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineEventHandler']
  const defineHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineHandler']
  const defineLazyEventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineLazyEventHandler']
  const defineMiddleware: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineMiddleware']
  const defineNitroErrorHandler: typeof import('nitro/runtime/internal/error/utils')['defineNitroErrorHandler']
  const defineNitroPlugin: typeof import('nitro/runtime/internal/plugin')['defineNitroPlugin']
  const defineNodeHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineNodeHandler']
  const defineNodeListener: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineNodeListener']
  const defineNodeMiddleware: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineNodeMiddleware']
  const definePlugin: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['definePlugin']
  const defineRenderHandler: typeof import('nitro/runtime/internal/renderer')['defineRenderHandler']
  const defineRouteMeta: typeof import('nitro/runtime/internal/meta')['defineRouteMeta']
  const defineTask: typeof import('nitro/runtime/internal/task')['defineTask']
  const defineValidatedHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineValidatedHandler']
  const defineWebSocket: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineWebSocket']
  const defineWebSocketHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['defineWebSocketHandler']
  const deleteCookie: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['deleteCookie']
  const detectBrowser: typeof import('../../../src/utils/browserTesting')['detectBrowser']
  const displayIssues: typeof import('../../../src/utils/compatibility-testing')['displayIssues']
  const dynamicEventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['dynamicEventHandler']
  const enhanceViolations: typeof import('../../../src/utils/accessibilityTestUtils')['enhanceViolations']
  const ensureTrailingSlash: typeof import('../../../src/utils/common')['ensureTrailingSlash']
  const eventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['eventHandler']
  const extractIconsStartingWithI: typeof import('../../../src/utils/common')['extractIconsStartingWithI']
  const extractId: typeof import('../../../src/utils/data')['extractId']
  const extractPackageName: typeof import('../../../src/utils/data')['extractPackageName']
  const extractVersionNum: typeof import('../../../src/utils/data')['extractVersionNum']
  const fetchWithEvent: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['fetchWithEvent']
  const filterDraftPosts: typeof import('../../../src/utils/post')['filterDraftPosts']
  const filterDrafts: typeof import('../../../src/utils/post')['filterDrafts']
  const filterViolationsByImpact: typeof import('../../../src/utils/accessibilityTestUtils')['filterViolationsByImpact']
  const formatDate: typeof import('../../../src/utils/formatDate')['formatDate']
  const formatViolationsForReport: typeof import('../../../src/utils/accessibilityTestUtils')['formatViolationsForReport']
  const fromNodeHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['fromNodeHandler']
  const fromNodeMiddleware: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['fromNodeMiddleware']
  const fromWebHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['fromWebHandler']
  const generateSizes: typeof import('../../../src/utils/image-utils')['generateSizes']
  const generateSrcSet: typeof import('../../../src/utils/image-utils')['generateSrcSet']
  const generateToc: typeof import('../../../src/utils/toc')['generateToc']
  const getBodyStream: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getBodyStream']
  const getBrowserLanguage: typeof import('../../../src/utils/request')['getBrowserLanguage']
  const getCardData: typeof import('../../../src/utils/data')['getCardData']
  const getClientIP: typeof import('../../../src/utils/serverUtils')['getClientIP']
  const getCookie: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getCookie']
  const getCurrentFormattedTime: typeof import('../../../src/utils/datetime')['getCurrentFormattedTime']
  const getFilteredPosts: typeof import('../../../src/utils/post')['getFilteredPosts']
  const getHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getHeader']
  const getHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getHeaders']
  const getLoadingStrategy: typeof import('../../../src/utils/image-utils')['getLoadingStrategy']
  const getMethod: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getMethod']
  const getNavBarGroups: typeof import('../../../src/utils/common')['getNavBarGroups']
  const getOptimalFormat: typeof import('../../../src/utils/image-utils')['getOptimalFormat']
  const getPosts: typeof import('../../../src/utils/post')['getPosts']
  const getProxyRequestHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getProxyRequestHeaders']
  const getQuery: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getQuery']
  const getRelativeTime: typeof import('../../../src/utils/date')['getRelativeTime']
  const getRequestFingerprint: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestFingerprint']
  const getRequestHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestHeader']
  const getRequestHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestHeaders']
  const getRequestHost: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestHost']
  const getRequestIP: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestIP']
  const getRequestPath: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestPath']
  const getRequestProtocol: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestProtocol']
  const getRequestURL: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestURL']
  const getRequestWebStream: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRequestWebStream']
  const getResponseHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getResponseHeader']
  const getResponseHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getResponseHeaders']
  const getResponseStatus: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getResponseStatus']
  const getResponseStatusText: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getResponseStatusText']
  const getRouteRules: typeof import('nitro/runtime/internal/route-rules')['getRouteRules']
  const getRouterParam: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRouterParam']
  const getRouterParams: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getRouterParams']
  const getSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getSession']
  const getSortedPosts: typeof import('../../../src/utils/post')['getSortedPosts']
  const getUrl: typeof import('../../../src/utils/common')['getUrl']
  const getUserLanguages: typeof import('../../../src/utils/request')['getUserLanguages']
  const getValidatedQuery: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getValidatedQuery']
  const getValidatedRouterParams: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['getValidatedRouterParams']
  const getYear: typeof import('../../../src/utils/datetime')['getYear']
  const handleCacheHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['handleCacheHeaders']
  const handleCors: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['handleCors']
  const highlight: typeof import('../../../src/utils/syntax-highlighter')['highlight']
  const highlightSync: typeof import('../../../src/utils/syntax-highlighter')['highlightSync']
  const html: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['html']
  const initializeOptimizations: typeof import('../../../src/utils/performance-optimization')['initializeOptimizations']
  const isAccessibleToScreenReaders: typeof import('../../../src/utils/accessibilityTestUtils')['isAccessibleToScreenReaders']
  const isAllowedDomain: typeof import('../../../src/utils/image-utils')['isAllowedDomain']
  const isCorsOriginAllowed: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['isCorsOriginAllowed']
  const isDiffMonth: typeof import('../../../src/utils/datetime')['isDiffMonth']
  const isError: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['isError']
  const isEvent: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['isEvent']
  const isMethod: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['isMethod']
  const isPreflightRequest: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['isPreflightRequest']
  const isSSR: typeof import('../../../src/utils/serverUtils')['isSSR']
  const isSameYear: typeof import('../../../src/utils/datetime')['isSameYear']
  const isValidDate: typeof import('../../../src/utils/datetime')['isValidDate']
  const iterable: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['iterable']
  const lazyEventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['lazyEventHandler']
  const listTemplates: typeof import('../../../src/utils/template')['listTemplates']
  const log: typeof import('../../../src/utils/liveRegion')['log']
  const logger: typeof import('../../../src/utils/logger')['logger']
  const matchLogo: typeof import('../../../src/utils/data')['matchLogo']
  const mockEvent: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['mockEvent']
  const nitroPlugin: typeof import('nitro/runtime/internal/plugin')['nitroPlugin']
  const noContent: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['noContent']
  const onError: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['onError']
  const onRequest: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['onRequest']
  const onResponse: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['onResponse']
  const optimizeCLS: typeof import('../../../src/utils/performance-optimization')['optimizeCLS']
  const optimizeFID: typeof import('../../../src/utils/performance-optimization')['optimizeFID']
  const optimizeLCP: typeof import('../../../src/utils/performance-optimization')['optimizeLCP']
  const parseAspectRatio: typeof import('../../../src/utils/image-utils')['parseAspectRatio']
  const parseCookies: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['parseCookies']
  const parseUserAgent: typeof import('../../../src/utils/user-agent')['parseUserAgent']
  const prefersDarkMode: typeof import('../../../src/utils/request')['prefersDarkMode']
  const preventCLS: typeof import('../../../src/utils/image-utils')['preventCLS']
  const previewTemplate: typeof import('../../../src/utils/template')['previewTemplate']
  const processContent: typeof import('../../../src/utils/search-indexer')['processContent']
  const processVersion: typeof import('../../../src/utils/data')['processVersion']
  const proxy: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['proxy']
  const proxyRequest: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['proxyRequest']
  const readBody: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readBody']
  const readFormData: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readFormData']
  const readFormDataBody: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readFormDataBody']
  const readMultipartFormData: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readMultipartFormData']
  const readRawBody: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readRawBody']
  const readValidatedBody: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['readValidatedBody']
  const redirect: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['redirect']
  const removeIssue: typeof import('../../../src/utils/compatibility-testing')['removeIssue']
  const removeResponseHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['removeResponseHeader']
  const reportWebVitals: typeof import('../../../src/utils/performance-optimization')['reportWebVitals']
  const requireBasicAuth: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['requireBasicAuth']
  const runBrowserCompatibilityTests: typeof import('../../../src/utils/browserTesting')['runBrowserCompatibilityTests']
  const runTask: typeof import('nitro/runtime/internal/task')['runTask']
  const safelyGetHeader: typeof import('../../../src/utils/serverUtils')['safelyGetHeader']
  const safelyGetHeaders: typeof import('../../../src/utils/serverUtils')['safelyGetHeaders']
  const sanitizeStatusCode: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sanitizeStatusCode']
  const sanitizeStatusMessage: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sanitizeStatusMessage']
  const sealSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sealSession']
  const sendIterable: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendIterable']
  const sendNoContent: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendNoContent']
  const sendProxy: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendProxy']
  const sendRedirect: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendRedirect']
  const sendStream: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendStream']
  const sendWebResponse: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['sendWebResponse']
  const serve: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['serve']
  const serveStatic: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['serveStatic']
  const serviceWorkerManager: typeof import('../../../src/utils/serviceWorkerRegistration')['serviceWorkerManager']
  const setCookie: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setCookie']
  const setHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setHeader']
  const setHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setHeaders']
  const setLogLevel: typeof import('../../../src/utils/logger')['setLogLevel']
  const setResponseHeader: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setResponseHeader']
  const setResponseHeaders: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setResponseHeaders']
  const setResponseStatus: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['setResponseStatus']
  const setTheme: typeof import('../../../src/utils/syntax-highlighter')['setTheme']
  const setupContainment: typeof import('../../../src/utils/performance-optimization')['setupContainment']
  const slug: typeof import('../../../src/utils/common')['slug']
  const sortByDate: typeof import('../../../src/utils/post')['sortByDate']
  const sortPosts: typeof import('../../../src/utils/post')['sortPosts']
  const syntaxHighlighter: typeof import('../../../src/utils/syntax-highlighter')['default']
  const testAriaLiveAnnouncements: typeof import('../../../src/utils/browserTesting')['testAriaLiveAnnouncements']
  const testFocusManagement: typeof import('../../../src/utils/browserTesting')['testFocusManagement']
  const toEventHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['toEventHandler']
  const toNodeHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['toNodeHandler']
  const toNodeListener: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['toNodeListener']
  const toResponse: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['toResponse']
  const toWebHandler: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['toWebHandler']
  const toggleFadeEffect: typeof import('../../../src/utils/animation')['toggleFadeEffect']
  const unescapeHTML: typeof import('../../../src/utils/common')['unescapeHTML']
  const unsealSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['unsealSession']
  const updateSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['updateSession']
  const useBase: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['useBase']
  const useNitroApp: typeof import('nitro/runtime/internal/app')['useNitroApp']
  const useRequest: typeof import('nitro/runtime/internal/context')['useRequest']
  const useRuntimeConfig: typeof import('nitro/runtime/internal/config')['useRuntimeConfig']
  const useSession: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['useSession']
  const useStorage: typeof import('nitro/runtime/internal/storage')['useStorage']
  const validateId: typeof import('../../../src/utils/data')['validateId']
  const validateNavBarLayout: typeof import('../../../src/utils/common')['validateNavBarLayout']
  const verifyAuthToken: typeof import('../../../src/utils/auth')['verifyAuthToken']
  const withBase: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['withBase']
  const writeEarlyHints: typeof import('../../node_modules/.pnpm/h3-nightly@2.0.0-20250704-131528-60b8654_crossws@0.4.1_srvx@0.8.2_/node_modules/h3-nightly')['writeEarlyHints']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { EnhancedViolation } from '../../../src/utils/accessibilityTestUtils'
  import('../../../src/utils/accessibilityTestUtils')
  // @ts-ignore
  export type { BrowserInfo } from '../../../src/utils/browserTesting'
  import('../../../src/utils/browserTesting')
  // @ts-ignore
  export type { NavBarGroup } from '../../../src/utils/common'
  import('../../../src/utils/common')
  // @ts-ignore
  export type { HighlightEntry, HighlightData, ExampleCardData } from '../../../src/utils/data'
  import('../../../src/utils/data')
  // @ts-ignore
  export type { LogLevel, LogOptions } from '../../../src/utils/logger'
  import('../../../src/utils/logger')
  // @ts-ignore
  export type { PostData, PostCollectionType, PostCollectionEntry } from '../../../src/utils/post'
  import('../../../src/utils/post')
  // @ts-ignore
  export type { RateLimiter } from '../../../src/utils/rate-limiter'
  import('../../../src/utils/rate-limiter')
  // @ts-ignore
  export type { IndexableContent } from '../../../src/utils/search-indexer'
  import('../../../src/utils/search-indexer')
  // @ts-ignore
  export type { ServiceWorkerManager } from '../../../src/utils/serviceWorkerRegistration'
  import('../../../src/utils/serviceWorkerRegistration')
  // @ts-ignore
  export type { MarkdownHeading, TocHeading } from '../../../src/utils/toc'
  import('../../../src/utils/toc')
  // @ts-ignore
  export type { NavBarLayout } from '../../../src/utils/types'
  import('../../../src/utils/types')
}
export { useNitroApp } from 'nitro/runtime/internal/app';
export { useRuntimeConfig } from 'nitro/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitro/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitro/runtime/internal/cache';
export { useStorage } from 'nitro/runtime/internal/storage';
export { defineRenderHandler } from 'nitro/runtime/internal/renderer';
export { defineRouteMeta } from 'nitro/runtime/internal/meta';
export { getRouteRules } from 'nitro/runtime/internal/route-rules';
export { useRequest } from 'nitro/runtime/internal/context';
export { defineTask, runTask } from 'nitro/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitro/runtime/internal/error/utils';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, basicAuth, clearResponseHeaders, clearSession, createApp, createError, createEventStream, createRouter, defaultContentType, defineEventHandler, defineHandler, defineLazyEventHandler, defineMiddleware, defineNodeHandler, defineNodeListener, defineNodeMiddleware, definePlugin, defineValidatedHandler, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeHandler, fromNodeMiddleware, fromWebHandler, getBodyStream, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, html, isCorsOriginAllowed, isError, isEvent, isMethod, isPreflightRequest, iterable, lazyEventHandler, mockEvent, noContent, onError, onRequest, onResponse, parseCookies, proxy, proxyRequest, readBody, readFormData, readFormDataBody, readMultipartFormData, readRawBody, readValidatedBody, redirect, removeResponseHeader, requireBasicAuth, sanitizeStatusCode, sanitizeStatusMessage, sealSession, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serve, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, toEventHandler, toNodeHandler, toNodeListener, toResponse, toWebHandler, unsealSession, updateSession, useBase, useSession, withBase, writeEarlyHints } from 'h3';
export { addFocusVisiblePolyfill, checkAccessibility } from '/root/pixel/src/utils/accessibilityPolyfills';
export { enhanceViolations, filterViolationsByImpact, formatViolationsForReport, checkAccessibilityViolations, isAccessibleToScreenReaders, checkColorContrast, checkScreenReaderIssues, checkHeadingHierarchy, accessibilityMatchers } from '/root/pixel/src/utils/accessibilityTestUtils';
export { toggleFadeEffect } from '/root/pixel/src/utils/animation';
export { verifyAuthToken } from '/root/pixel/src/utils/auth';
export { detectBrowser, testAriaLiveAnnouncements, testFocusManagement, runBrowserCompatibilityTests } from '/root/pixel/src/utils/browserTesting';
export { slug, extractIconsStartingWithI, getUrl, ensureTrailingSlash, getNavBarGroups, checkFileExistsInDir, unescapeHTML, validateNavBarLayout } from '/root/pixel/src/utils/common';
export { addIssue, removeIssue, displayIssues } from '/root/pixel/src/utils/compatibility-testing';
export { VERSION_COLOR, matchLogo, extractPackageName, extractVersionNum, processVersion, extractId, validateId, getCardData } from '/root/pixel/src/utils/data';
export { getRelativeTime } from '/root/pixel/src/utils/date';
export { getYear, isSameYear, getCurrentFormattedTime, isDiffMonth, isValidDate } from '/root/pixel/src/utils/datetime';
export { debounce } from '/root/pixel/src/utils/debounce';
export { formatDate } from '/root/pixel/src/utils/formatDate';
export { calculateAspectRatio, calculateHeightFromWidth, calculateWidthFromHeight, parseAspectRatio, generateSrcSet, generateSizes, defaultImageConfig, isAllowedDomain, getOptimalFormat, preventCLS, getLoadingStrategy } from '/root/pixel/src/utils/image-utils';
export { announceStatus, announceAlert, log, announceProgress } from '/root/pixel/src/utils/liveRegion';
export { LogLevel, createLogger, logger, setLogLevel, LogLevels } from '/root/pixel/src/utils/logger';
export { reportWebVitals, optimizeLCP, optimizeFID, optimizeCLS, setupContainment, initializeOptimizations } from '/root/pixel/src/utils/performance-optimization';
export { filterDrafts, sortByDate, getPosts, sortPosts, filterDraftPosts, getFilteredPosts, getSortedPosts } from '/root/pixel/src/utils/post';
export { RateLimiter } from '/root/pixel/src/utils/rate-limiter';
export { getBrowserLanguage, prefersDarkMode, getUserLanguages } from '/root/pixel/src/utils/request';
export { buildSearchIndex, processContent, createSearchIndexFile } from '/root/pixel/src/utils/search-indexer';
export { safelyGetHeader, safelyGetHeaders, isSSR, getClientIP } from '/root/pixel/src/utils/serverUtils';
export { ServiceWorkerManager, serviceWorkerManager } from '/root/pixel/src/utils/serviceWorkerRegistration';
export { default as syntaxHighlighter, highlight, highlightSync, setTheme } from '/root/pixel/src/utils/syntax-highlighter';
export { previewTemplate, listTemplates } from '/root/pixel/src/utils/template';
export { generateToc } from '/root/pixel/src/utils/toc';
export { parseUserAgent } from '/root/pixel/src/utils/user-agent';