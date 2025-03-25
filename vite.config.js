import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
    base: "/front_5th_chapter1-1/",
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});
