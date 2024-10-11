import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        dir: "src/test",
        globals: true,
        environment: "jsdom",
    }
})