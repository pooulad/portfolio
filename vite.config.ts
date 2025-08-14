/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.pdf", "**/*.worker.js"],
  // vitest options
  test: {
    globals: true,
    coverage: {
      provider: "v8",
    },
    environment: "jsdom",
  },
  // server:{
  //   host:"0.0.0.0"
  // }
});
