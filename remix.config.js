import { defineConfig } from "@remix-run/dev";

export default defineConfig({
  ignoredRouteFiles: ["**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverModuleFormat: "esm",
});