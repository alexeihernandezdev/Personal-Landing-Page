import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "next/navigation": r("./test/mocks/next-navigation.ts"),
      "next/image": r("./test/mocks/next-image.tsx"),
      "@/": r("./"),
      "@components/": r("./components/"),
      "@data/": r("./data/"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    include: ["__tests__/**/*.test.{ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/.next/**",
      "**/e2e/**",
      "**/dist/**",
    ],
    css: false,
    server: {
      deps: {
        inline: ["next-intl", "next"],
      },
    },
  },
});
