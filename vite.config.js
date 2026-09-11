import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set `base` to your repo name if deploying to https://<user>.github.io/<repo>/
// If this is a <user>.github.io root repo, keep base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
