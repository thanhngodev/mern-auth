export const IS_DEVELOPMENT = import.meta.env.MODE === "development";
export const BACKEND_URL = "http://localhost:8080";
export const BACKEND_SUFFIX_URL = "/api/auth";

export const DEVELOPMENT_URL = `${BACKEND_URL}${BACKEND_SUFFIX_URL}`;

export const API_URL = IS_DEVELOPMENT ? DEVELOPMENT_URL : BACKEND_SUFFIX_URL;

export const API_URL_ROUTE = {
  SIGN_UP: `${API_URL}/sign-up`,
  SIGN_IN: `${API_URL}/sign-in`,
  SIGN_OUT: `${API_URL}/sign-out`,
  VERIFY_EMAIL: `${API_URL}/verify-email`,
  CHECK_AUTH: `${API_URL}/check-auth`,
  FORGOT_PASSWORD: `${API_URL}/forgot-password`,
  RESET_PASSWORD: `${API_URL}/reset-password`,
};
