import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  integrations: [react()]
});