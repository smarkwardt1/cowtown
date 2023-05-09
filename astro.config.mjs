import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
});