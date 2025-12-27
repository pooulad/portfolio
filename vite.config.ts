/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Poulad/Portfolio",
        short_name: "Poulad",
        description: "Portfolio website of Poulad, built with React",
        theme_color: "#7CB342",
        background_color: "#AED581",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
            src: "/screenshots/homepage-wide.png",
            sizes: "1024x768",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "/screenshots/homepage-mobile.png",
            sizes: "375x667",
            type: "image/png",
            form_factor: "narrow"
          }
        ],
      },
      workbox: {
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              expiration: {
                maxEntries: 10,
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "script" || request.destination === "style",
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              expiration: { maxEntries: 50 },
            },
          }
        ]
      }
    })
  ],
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
