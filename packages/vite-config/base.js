import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Base Vite configuration for React Router applications
 * This configuration includes:
 * - TailwindCSS support
 * - React Router development support
 * - TypeScript path mapping
 */
export const baseConfig = defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

export default baseConfig;
