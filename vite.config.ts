import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const setPathName = (dir: string) => {
  return new URL(dir, import.meta.url).pathname;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/temperature-converter/",
  resolve: {
    alias: {
      "@": setPathName("./src"),
    },
  },
});
