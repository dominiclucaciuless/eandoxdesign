import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    // "@storybook/addon-onboarding",
    // "@chromatic-com/storybook",
    // "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  /* Commenting out viteFinal again to isolate Storybook's default Vite config
  async viteFinal(config) {
    // Merge custom configuration into the final Vite config
    return mergeConfig(config, {
      plugins: [
        // @ts-expect-error Broken types -- Keeping this for now as it might relate to the original issue
        react(),
        // @ts-expect-error Broken types -- Keeping this for now as it might relate to the original issue
        svgr()
      ],
    });
  },
  */
};
export default config;