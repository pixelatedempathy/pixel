;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="52f86a3c-7198-4f49-88d5-89d7ad065d47",e._sentryDebugIdIdentifier="sentry-dbid-52f86a3c-7198-4f49-88d5-89d7ad065d47")}catch(e){}}();import { useState, useCallback, useEffect } from 'react';
import { g as getCurrentUser, a as updateProfile, s as signOut, r as resetPassword, v as verifyOtp, b as signUp, c as signInWithOAuth, d as signInWithEmail } from './auth.service_BglT77qK.mjs';
import './astro/server_t-wqd6mp.mjs';

const AuthErrorCode = {
  AUTH_FAILED: "AUTH_FAILED",
  SIGNUP_FAILED: "SIGNUP_FAILED",
  OAUTH_FAILED: "OAUTH_FAILED",
  SIGNOUT_FAILED: "SIGNOUT_FAILED",
  RESET_FAILED: "RESET_FAILED",
  OTP_FAILED: "OTP_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  NO_USER: "NO_USER",
  INVALID_USER: "INVALID_USER",
  INVALID_TOKEN: "INVALID_TOKEN",
  NETWORK_ERROR: "NETWORK_ERROR"
};
function isAuthError(error) {
  return error instanceof Error && "code" in error;
}
function isAuthUser(user) {
  return typeof user === "object" && user !== null && "id" in user && typeof user.id === "string";
}
function isAuthResult(result) {
  return typeof result === "object" && result !== null && "success" in result && typeof result.success === "boolean";
}
function createAuthError(message, code, details) {
  const error = new Error(message);
  error.name = "AuthError";
  if (code) error.code = code;
  return error;
}

const roleMap = {
  admin: "admin",
  staff: "admin",
  // Map staff to admin UserRole
  therapist: "therapist",
  user: "client",
  // Map user to client UserRole
  guest: "guest"
};
function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasRole = useCallback(
    (role) => {
      if (!user?.roles?.length) {
        return false;
      }
      const checkRole = (r) => {
        const mappedRole = r in roleMap ? roleMap[r] : r;
        return user.roles.includes(mappedRole);
      };
      return Array.isArray(role) ? role.some(checkRole) : checkRole(role);
    },
    [user]
  );
  useEffect(() => {
    let mounted = true;
    const loadUser = async () => {
      try {
        setLoading(true);
        const currentUser = await getCurrentUser();
        if (!mounted) {
          return;
        }
        if (isAuthUser(currentUser)) {
          setUser(currentUser);
        } else {
          throw createAuthError(
            "Invalid user data received",
            AuthErrorCode.INVALID_USER
          );
        }
      } catch (err) {
        if (!mounted) {
          return;
        }
        console.error("Error loading user:", err);
        setUser(null);
        setError(
          isAuthError(err) ? err : createAuthError(
            "Failed to load user",
            AuthErrorCode.NETWORK_ERROR
          )
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    loadUser();
    return () => {
      mounted = false;
    };
  }, []);
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithEmail(email, password);
      if (!isAuthResult(result) || !result.success || !result.user) {
        throw createAuthError(
          result.error || "Authentication failed",
          AuthErrorCode.AUTH_FAILED
        );
      }
      setUser(result.user);
      return result;
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "Authentication failed",
        AuthErrorCode.AUTH_FAILED
      );
      setError(authError);
      return { success: false, error: authError.message };
    } finally {
      setLoading(false);
    }
  };
  const signUp$1 = async (email, password, fullName) => {
    try {
      setLoading(true);
      setError(null);
      const result = await signUp(email, password, { fullName });
      if (!isAuthResult(result) || !result.success || !result.user) {
        throw createAuthError(
          result.error || "Registration failed",
          AuthErrorCode.SIGNUP_FAILED
        );
      }
      setUser(result.user);
      return result;
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "Registration failed",
        AuthErrorCode.SIGNUP_FAILED
      );
      setError(authError);
      return { success: false, error: authError.message };
    } finally {
      setLoading(false);
    }
  };
  const signInWithOAuth$1 = async (provider, redirectTo) => {
    try {
      setLoading(true);
      setError(null);
      await signInWithOAuth(provider, redirectTo);
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "OAuth sign in failed",
        AuthErrorCode.OAUTH_FAILED
      );
      setError(authError);
      throw authError;
    } finally {
      setLoading(false);
    }
  };
  const signOut$1 = async () => {
    try {
      setLoading(true);
      setError(null);
      await signOut();
      setUser(null);
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "Sign out failed",
        AuthErrorCode.SIGNOUT_FAILED
      );
      setError(authError);
      throw authError;
    } finally {
      setLoading(false);
    }
  };
  const resetPassword$1 = async (email, redirectTo) => {
    try {
      setError(null);
      return await resetPassword(email, redirectTo);
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "Password reset failed",
        AuthErrorCode.RESET_FAILED
      );
      setError(authError);
      throw authError;
    }
  };
  const verifyOtp$1 = async (params) => {
    try {
      setError(null);
      const response = await verifyOtp(params);
      if (!isAuthResult(response) || !response.success) {
        throw createAuthError(
          response.error || "OTP verification failed",
          AuthErrorCode.OTP_FAILED
        );
      }
      if (response.user) {
        setUser(response.user);
      }
      return response;
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "OTP verification failed",
        AuthErrorCode.OTP_FAILED
      );
      setError(authError);
      return { success: false, error: authError.message };
    }
  };
  const updateProfile$1 = async (profile) => {
    if (!user?.id) {
      throw createAuthError(
        "No authenticated user",
        AuthErrorCode.NO_USER
      );
    }
    try {
      setError(null);
      const result = await updateProfile(user.id, profile);
      if (result.error) {
        throw isAuthError(result.error) ? result.error : createAuthError(
          "Profile update failed",
          AuthErrorCode.UPDATE_FAILED
        );
      }
      setUser((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          fullName: profile.fullName ?? prev.fullName,
          ...profile.avatarUrl && { avatarUrl: profile.avatarUrl },
          metadata: {
            ...prev.metadata,
            ...profile.metadata
          }
        };
      });
    } catch (err) {
      const authError = isAuthError(err) ? err : createAuthError(
        err instanceof Error ? err.message : "Profile update failed",
        AuthErrorCode.UPDATE_FAILED
      );
      setError(authError);
      throw authError;
    }
  };
  return {
    user,
    isLoading: loading,
    isAuthenticated: !!user,
    hasRole,
    error,
    signIn,
    signInWithOAuth: signInWithOAuth$1,
    signUp: signUp$1,
    verifyOtp: verifyOtp$1,
    resetPassword: resetPassword$1,
    signOut: signOut$1,
    updateProfile: updateProfile$1
  };
}

export { useAuth as u };
