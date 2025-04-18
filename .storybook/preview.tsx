import type { Preview, Decorator } from '@storybook/react'
import { MantineProvider } from '@mantine/core'
import { theme } from '../src/theme' // Restore theme import
import '@mantine/core/styles.css'
import '@fontsource/inter/400.css'; // Regular weight
import '@fontsource/inter/500.css'; // Medium weight
import '@fontsource/inter/700.css'; // Bold weight (if needed, adjust as necessary)
import React from 'react'

// Restore Mantine Decorator
const MantineDecorator: Decorator = (Story) => (
  <MantineProvider theme={theme}> 
    <Story />
  </MantineProvider>
)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [MantineDecorator], // Restore decorator
};

export default preview;