import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages/Cart": path.resolve(__dirname, "./src/pages/Cart"),
    },
  },
  plugins: [react()],
});
