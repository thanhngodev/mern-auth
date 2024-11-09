export const IS_DEVELOPMENT = import.meta.env.MODE === "development";
export const BACKEND_URL = "http://localhost:8080";
export const BACKEND_SUFFIX_URL = "/api/auth";

export const DEVELOPMENT_URL = `${BACKEND_URL}${BACKEND_SUFFIX_URL}`;

export const API_URL = IS_DEVELOPMENT ? DEVELOPMENT_URL : BACKEND_SUFFIX_URL;