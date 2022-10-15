import {
  defineConfig
} from 'astro/config';

import tailwind from "@astrojs/tailwind";
import solid from '@astrojs/solid-js'



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solid()],
  base: '/code_playground',
  vite: {
    base: '/code_playground',
  }
});