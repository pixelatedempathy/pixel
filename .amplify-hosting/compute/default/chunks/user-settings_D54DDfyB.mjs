;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="861c03f3-db43-4c06-b0b9-747a5fcc0b9d",e._sentryDebugIdIdentifier="sentry-dbid-861c03f3-db43-4c06-b0b9-747a5fcc0b9d")}catch(e){}}();import { l as logAuditEvent } from './audit_BtMut9h8.mjs';
import { s as supabase } from './supabase_pbWOGD7E.mjs';
import './astro/server_DBAAVvAL.mjs';

async function getUserSettings(userId) {
  const { data, error } = await supabase.from("user_settings").select("*").eq("user_id", userId).single();
  if (error && error?.code !== "PGRST116") {
    console.error("Error fetching user settings:", error);
    throw new Error("Failed to fetch user settings");
  }
  return data;
}
async function createUserSettings(settings, request) {
  const { data, error } = await supabase.from("user_settings").insert(settings).select().single();
  if (error) {
    console.error("Error creating user settings:", error);
    throw new Error("Failed to create user settings");
  }
  await logAuditEvent(
    "user_settings_created",
    settings.user_id,
    "user_settings",
    data?.id,
    {
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  );
  return data;
}
async function updateUserSettings(userId, updates, request) {
  const { data, error } = await supabase.from("user_settings").update({
    ...updates,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  }).eq("user_id", userId).select().single();
  if (error) {
    console.error("Error updating user settings:", error);
    throw new Error("Failed to update user settings");
  }
  await logAuditEvent(
    "user_settings_updated",
    userId,
    "user_settings",
    data?.id,
    {
      updates,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  );
  return data;
}
async function getOrCreateUserSettings(userId, request) {
  const settings = await getUserSettings(userId);
  if (settings) {
    return settings;
  }
  const defaultSettings = {
    user_id: userId,
    theme: "system",
    notifications_enabled: true,
    email_notifications: true,
    language: "en",
    preferences: {
      showWelcomeScreen: true,
      autoSave: true,
      fontSize: "medium"
    }
  };
  return createUserSettings(defaultSettings, request);
}
async function updateTheme(userId, theme, request) {
  return updateUserSettings(userId, { theme }, request);
}
async function updateLanguage(userId, language, request) {
  return updateUserSettings(userId, { language }, request);
}
async function toggleNotifications(userId, enabled, request) {
  return updateUserSettings(userId, { notifications_enabled: enabled }, request);
}
async function toggleEmailNotifications(userId, enabled, request) {
  return updateUserSettings(userId, { email_notifications: enabled }, request);
}

const userSettingsDb = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createUserSettings,
  getOrCreateUserSettings,
  getUserSettings,
  toggleEmailNotifications,
  toggleNotifications,
  updateLanguage,
  updateTheme,
  updateUserSettings
}, Symbol.toStringTag, { value: 'Module' }));

export { updateUserSettings as a, getOrCreateUserSettings as g, userSettingsDb as u };
