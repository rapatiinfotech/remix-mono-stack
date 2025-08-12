import { defineConfig, mergeConfig } from "vitest/config";
import { baseConfig } from "./base.js";

/**
 * Vitest configuration that extends the base Vite config
 * This configuration includes:
 * - All base Vite plugins and settings
 * - Vitest-specific test configuration
 * - DOM environment for React testing
 */
export const vitestConfig = defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/build/**"
    ],
  },
});

/**
 * Merged configuration for applications that need both Vite and Vitest
 */
export const mergedConfig = mergeConfig(baseConfig, vitestConfig);

export default mergedConfig;
