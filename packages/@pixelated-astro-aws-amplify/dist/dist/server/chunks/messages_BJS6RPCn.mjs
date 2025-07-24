;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d6cca678-37c4-4a4f-90ba-8ec5d1075b41",e._sentryDebugIdIdentifier="sentry-dbid-d6cca678-37c4-4a4f-90ba-8ec5d1075b41")}catch(e){}}();import { c as createAuditLog } from './audit_CMoAMAaW.mjs';
import { s as supabase, a as supabaseAdmin } from './supabase_BZNarnLa.mjs';
import './astro/server_Ck5BzePu.mjs';

async function getConversations(userId) {
  const { data, error } = await supabase.from("conversations").select("*").eq("user_id", userId).order("last_message_at", { ascending: false });
  if (error) {
    console.error("Error fetching conversations:", error);
    throw new Error("Failed to fetch conversations");
  }
  return data || [];
}
async function getConversation(id, userId) {
  const { data, error } = await supabase.from("conversations").select("*").eq("id", id).eq("user_id", userId).single();
  if (error && error?.code !== "PGRST116") {
    console.error("Error fetching conversation:", error);
    throw new Error("Failed to fetch conversation");
  }
  return data;
}
async function createConversation(conversation, request) {
  const { data, error } = await supabase.from("conversations").insert(conversation).select().single();
  if (error) {
    console.error("Error creating conversation:", error);
    throw new Error("Failed to create conversation");
  }
  await createAuditLog({
    userId: conversation.user_id,
    action: "conversation_created",
    resource: "conversations",
    metadata: {
      conversationId: data?.id,
      title: conversation.title,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  });
  return data;
}
async function updateConversation(id, userId, updates, request) {
  const { data, error } = await supabase.from("conversations").update(updates).eq("id", id).eq("user_id", userId).select().single();
  if (error) {
    console.error("Error updating conversation:", error);
    throw new Error("Failed to update conversation");
  }
  await createAuditLog({
    userId,
    action: "conversation_updated",
    resource: "conversations",
    metadata: {
      conversationId: id,
      updates,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  });
  return data;
}
async function deleteConversation(id, userId, request) {
  const { error } = await supabase.from("conversations").delete().eq("id", id).eq("user_id", userId);
  if (error) {
    console.error("Error deleting conversation:", error);
    throw new Error("Failed to delete conversation");
  }
  await createAuditLog({
    userId,
    action: "conversation_deleted",
    resource: "conversations",
    metadata: {
      conversationId: id,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  });
}
async function adminGetAllConversations() {
  const { data, error } = await supabaseAdmin.from("conversations").select("*").order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching all conversations:", error);
    throw new Error("Failed to fetch all conversations");
  }
  return data || [];
}

const conversationsDb = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  adminGetAllConversations,
  createConversation,
  deleteConversation,
  getConversation,
  getConversations,
  updateConversation
}, Symbol.toStringTag, { value: 'Module' }));

async function getMessages(conversationId, userId, limit = 50, offset = 0) {
  const { data: conversation, error: conversationError } = await supabase.from("conversations").select("id").eq("id", conversationId).eq("user_id", userId).single();
  if (conversationError || !conversation) {
    console.error("Error verifying conversation access:", conversationError);
    throw new Error("Unauthorized access to conversation");
  }
  const { data, error } = await supabase.from("messages").select("*").eq("conversation_id", conversationId).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
  if (error) {
    console.error("Error fetching messages:", error);
    throw new Error("Failed to fetch messages");
  }
  return data || [];
}
async function createMessage(message, userId, request) {
  const { data: conversation, error: conversationError } = await supabase.from("conversations").select("id, user_id").eq("id", message.conversation_id).eq("user_id", userId).single();
  if (conversationError || !conversation) {
    console.error("Error verifying conversation access:", conversationError);
    throw new Error("Unauthorized access to conversation");
  }
  const { data, error } = await supabase.from("messages").insert(message).select().single();
  if (error) {
    console.error("Error creating message:", error);
    throw new Error("Failed to create message");
  }
  await updateConversation(message.conversation_id, userId, {
    last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  await createAuditLog({
    userId,
    action: "message_created",
    resource: "messages",
    metadata: {
      messageId: data.id,
      conversationId: message.conversation_id,
      role: message.role,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  });
  return data;
}
async function updateMessage(id, conversationId, userId, updates, request) {
  const { data: conversation, error: conversationError } = await supabase.from("conversations").select("id").eq("id", conversationId).eq("user_id", userId).single();
  if (conversationError || !conversation) {
    console.error("Error verifying conversation access:", conversationError);
    throw new Error("Unauthorized access to conversation");
  }
  const { data, error } = await supabase.from("messages").update(updates).eq("id", id).eq("conversation_id", conversationId).select().single();
  if (error) {
    console.error("Error updating message:", error);
    throw new Error("Failed to update message");
  }
  await createAuditLog({
    userId,
    action: "message_updated",
    resource: "messages",
    metadata: {
      messageId: id,
      conversationId,
      updates,
      ipAddress: request?.headers.get("x-forwarded-for"),
      userAgent: request?.headers.get("user-agent")
    }
  });
  return data;
}
async function flagMessage(id, conversationId, userId, reason, request) {
  const updates = {
    is_flagged: true,
    metadata: {
      flagged_at: (/* @__PURE__ */ new Date()).toISOString(),
      flagged_by: userId,
      reason
    }
  };
  return updateMessage(id, conversationId, userId, updates, request);
}
async function adminGetFlaggedMessages() {
  const { data, error } = await supabaseAdmin.from("messages").select("*, conversations(title, user_id)").eq("is_flagged", true).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching flagged messages:", error);
    throw new Error("Failed to fetch flagged messages");
  }
  return data || [];
}

const messagesDb = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  adminGetFlaggedMessages,
  createMessage,
  flagMessage,
  getMessages,
  updateMessage
}, Symbol.toStringTag, { value: 'Module' }));

export { adminGetFlaggedMessages as a, conversationsDb as c, messagesDb as m };
