"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1({ context }) {
    var _a;
    // Get the user's IP address using Vercel's Edge helpers
    const { ip } = context;
    // Get geolocation data
    const geo = (_a = context.geo) !== null && _a !== void 0 ? _a : {
        city: undefined,
        country: undefined,
        region: undefined,
    };
    // Return data to be available in Astro.locals
    return {
        vercel: {
            edge: context,
            ip,
            geo,
        },
        // Add any other data you want available in Astro.locals
        timestamp: new Date().toISOString(),
    };
}
//# sourceMappingURL=middleware.js.map