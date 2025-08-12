import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Vite configuration for library packages (without React Router)
 * This configuration includes:
 * - TypeScript path mapping
 * - Basic build setup for libraries
 */
export const libraryConfig = defineConfig({
  plugins: [tsconfigPaths()],
});

export default libraryConfig;
