import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  // ✅ Backend (Node) override
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node, // enables process, Buffer, etc.
      sourceType: "module",
    },
    rules: {
      // optional, but keeps things clean
      "no-undef": "off",
    },
  },

  // ✅ Frontend (React/Vite)
  {
    files: ["src/**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
