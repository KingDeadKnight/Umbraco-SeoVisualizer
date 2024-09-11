import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/seo-visualizer.ts", // your web component source file
            formats: ["es"],
        },
        outDir: "../wwwroot/App_Plugins/SeoVisualizer", // all compiled files will be placed here
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/], // ignore the Umbraco Backoffice package in the build
        },
    },
});