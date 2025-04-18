import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, MantineProvider } from '@mantine/core';
import { theme } from '../../theme'; // Import the custom theme

// Import icons using Vite's ?react syntax
import HeartIcon from '../../assets/icons/heart.svg?react';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg?react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button (Styled)',
  component: Button,
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
        control: { type: 'select' },
        options: ['filled', 'outline', 'subtle'], // Reflect variants we styled
    },
    color: {
        control: { type: 'select' },
        options: ['dark', 'gray', 'warningRed'], // Reflect colors used
    },
    size: { table: { disable: true } }, // Keep disabled as we only styled specific sizes implicitly
    leftSection: { table: { disable: true } },
    rightSection: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base render function (optional, can often just use args directly)
const BaseButtonStory: React.FC<React.ComponentProps<typeof Button>> = (args) => (
    <Button {...args} />
);

// --- Primary Button Stories (Using variant="filled") ---

export const PrimaryDefault: Story = {
  args: {
    variant: 'filled',
    children: 'Primary Button',
    disabled: false,
    leftSection: <HeartIcon width={16} height={16} />,
    rightSection: <HeartIcon width={16} height={16} />,
  },
  // render: BaseButtonStory, // Can omit render if args are enough
};

export const PrimaryHover: Story = {
  args: {
    ...PrimaryDefault.args,
    children: 'Primary Hover',
  },
  parameters: { pseudo: { hover: true } },
};

export const PrimaryDisabled: Story = {
    args: {
      variant: 'filled',
      children: 'Primary Disabled',
      disabled: true,
      leftSection: <HeartIcon width={16} height={16} />,
      rightSection: <HeartIcon width={16} height={16} />,
    },
};


// --- Secondary Button Stories (Using variant="outline") ---

export const SecondaryDefault: Story = {
  args: {
    variant: 'outline',
    children: 'Secondary Button',
    disabled: false,
    leftSection: <HeartIcon width={16} height={16} />,
    rightSection: <HeartIcon width={16} height={16} />,
  },
};

export const SecondaryHover: Story = {
  args: {
    ...SecondaryDefault.args,
    children: 'Secondary Hover',
  },
  parameters: { pseudo: { hover: true } },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'outline',
    children: 'Secondary Disabled',
    disabled: true,
    leftSection: <HeartIcon width={16} height={16} />,
    rightSection: <HeartIcon width={16} height={16} />,
  },
};

// --- Secondary Warning Button Story (Using variant="outline" color="warningRed") ---

export const SecondaryWarningDefault: Story = {
    args: {
      variant: 'outline',
      color: 'warningRed',
      children: 'Warning Button',
      disabled: false,
      leftSection: <HeartIcon width={16} height={16} />,
    },
  };

// --- Secondary Table Button Story (Using variant="subtle") ---

export const SecondaryTableDefault: Story = {
    args: {
      variant: 'subtle',
      children: 'Table Action',
      disabled: false,
      rightSection: <ArrowRightIcon width={12} height={12} />,
    },
 };