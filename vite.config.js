import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ command }) => ({
  plugins: [
    svelte(),
    // Only use singlefile plugin during build (not development)
    command === 'build' && viteSingleFile({
      removeViteModuleLoader: true  // Removes Vite's module loader for cleaner output
    })
  ],
  build: {
    minify: true,  // Minifies the output (smaller file size)
    cssCodeSplit: false,  // Keeps CSS in the same file
    assetsInlineLimit: 100000000  // Inlines all assets
  }
}));