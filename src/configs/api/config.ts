// Vite environment variables must start with "VITE_" to be accessible in the front-end.
const apiUrl = import.meta.env.VITE_GITHUB_API_URL;

export const config = {
  github_api: apiUrl || "https://api.github.com/",
};
