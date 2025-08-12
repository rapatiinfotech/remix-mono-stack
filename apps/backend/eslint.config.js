import { config } from "@remixmonostack/eslint-config/base"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    ignores: [
      "build/**", 
      ".react-router/**", 
      "node_modules/**",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs"
    ],
  },
]
