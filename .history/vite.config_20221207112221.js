import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "./src/layouts"),
      },
      {
        find: "@pages/Cart",
        replacement: path.resolve(__dirname, "./src/pages/Cart/Cart"),
      },
      // { find: "@views", replacement: path.resolve(__dirname, "./src/views") },
      // { find: "@mixins", replacement: path.resolve(__dirname, "./src/mixins") },
      // { find: "@svg", replacement: path.resolve(__dirname, "./src/svg") },
      // { find: "@models", replacement: path.resolve(__dirname, "./src/models") },
      // {
      //   find: "@components",
      //   replacement: path.resolve(__dirname, "./src/components"),
      // },
    ],
  },
  plugins: [react()],
});
