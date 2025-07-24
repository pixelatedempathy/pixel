;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75eb0181-05ba-4ef8-805f-540fc7bc2081",e._sentryDebugIdIdentifier="sentry-dbid-75eb0181-05ba-4ef8-805f-540fc7bc2081")}catch(e){}}();import './security_erb0xnhc.mjs';
import { s as supabase } from './supabase_aq0zWoUx.mjs';
import './astro/server_jchCCyc7.mjs';

async function signInWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      throw error;
    }
    const user = data.user ? mapToAuthUser(data.user) : null;
    return { user, session: data.session };
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}
async function signInWithOAuth(provider, redirectTo) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: redirectTo ? { redirectTo } : {}
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error signing in with OAuth:", error);
    throw error;
  }
}
async function signUp(email, password, metadata) {
  try {
    const signUpData = metadata ? { email, password, options: { data: metadata } } : { email, password };
    const { data, error } = await supabase.auth.signUp(signUpData);
    if (error) {
      throw error;
    }
    const user = data.user ? mapToAuthUser(data.user) : null;
    return { user, session: data.session };
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}
async function getCurrentUser() {
  try {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      return null;
    }
    return mapToAuthUser(data.user);
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
async function resetPassword(email, redirectTo) {
  try {
    const authCallbackUrl = redirectTo ? `${new URL("/auth-callback", new URL(redirectTo).origin).toString()}` : `${new URL("/auth-callback", new URL(window.location.origin).origin).toString()}`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: authCallbackUrl
    });
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
}
async function updatePassword(password) {
  try {
    const { error } = await supabase.auth.updateUser({
      password
    });
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
}
function mapToAuthUser(user) {
  if (!user) {
    return null;
  }
  return {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.["fullName"] || "",
    image: user.user_metadata?.["avatarUrl"] || "",
    role: user.app_metadata?.["role"] || "guest",
    fullName: user.user_metadata?.["fullName"] || "",
    roles: user.app_metadata?.["roles"] || [],
    emailVerified: !!user.email_confirmed_at,
    createdAt: user.created_at,
    lastSignIn: user.last_sign_in_at,
    avatarUrl: user.user_metadata?.["avatarUrl"] || "",
    metadata: user.user_metadata || {}
  };
}
async function updateProfile(userId, profile) {
  try {
    const updates = {
      data: {}
    };
    if (profile.fullName) {
      updates.data["fullName"] = profile.fullName;
    }
    if (profile.avatarUrl) {
      updates.data["avatarUrl"] = profile.avatarUrl;
    }
    if (profile.metadata && Object.keys(profile.metadata).length > 0) {
      updates.data = {
        ...updates.data,
        ...profile.metadata
      };
    }
    const { error } = await supabase.auth.admin.updateUserById(userId, {
      user_metadata: updates.data
    });
    if (error) {
      throw error;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { error };
  }
}
async function verifyOtp(params) {
  try {
    if (params.type === "sms") {
      if (!params.phone) {
        throw new Error("Phone is required for SMS verification");
      }
      const { data, error } = await supabase.auth.verifyOtp({
        phone: params.phone,
        token: params.token,
        type: "sms"
      });
      if (error) {
        throw error;
      }
      return {
        success: true,
        user: data?.user ? mapToAuthUser(data.user) : null,
        session: data?.session || null
      };
    } else {
      if (!params.email) {
        throw new Error("Email is required for email verification");
      }
      const { data, error } = await supabase.auth.verifyOtp({
        email: params.email,
        token: params.token,
        type: params.type || "recovery"
      });
      if (error) {
        throw error;
      }
      return {
        success: true,
        user: data?.user ? mapToAuthUser(data.user) : null,
        session: data?.session || null
      };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { success: false, error };
  }
}

export { updateProfile as a, signUp as b, signInWithOAuth as c, signInWithEmail as d, getCurrentUser as g, resetPassword as r, signOut as s, updatePassword as u, verifyOtp as v };
