import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  site: 'https://bemayr.github.io',
  base: '/in-loving-memory-of-nutrias',
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      livePreview: false,
      components: {
        page: 'components/storyblok/Page',
        hero: 'components/storyblok/Hero',
        text_section: 'components/storyblok/TextSection',
        features_section: 'components/storyblok/FeaturesSection',
        feature_item: 'components/storyblok/FeatureItem',
      },
      apiOptions: {
        region: 'eu',
      },
    }),
  ],
});
