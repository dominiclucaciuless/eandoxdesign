import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../../atoms/Button/Button';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme'; // Import the custom theme

// Import icons using Vite's ?react syntax
import HeartIcon from '../../assets/icons/heart.svg?react';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg?react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
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
    designVariant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'secondary-warning', 'secondary-table'],
    },
    size: { table: { disable: true } },
    leftSection: { table: { disable: true } },
    rightSection: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// Base render function (optional, can often just use args directly)
const BaseButtonStory: React.FC<React.ComponentProps<typeof Button>> = (args) => (
    <Button {...args} />
);

// --- Primary Button Stories (Using designVariant="primary") ---

export const PrimaryDefault: Story = {
  args: {
    designVariant: 'primary',
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
      ...PrimaryDefault.args,
      children: 'Primary Disabled',
      disabled: true,
    },
};


// --- Secondary Button Stories (Using designVariant="secondary") ---

export const SecondaryDefault: Story = {
  args: {
    designVariant: 'secondary',
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
  // Remove pseudo state parameter as it seems unreliable here
  // parameters: { pseudo: { hover: true } },
};

export const SecondaryDisabled: Story = {
  args: {
    ...SecondaryDefault.args,
    children: 'Secondary Disabled',
    disabled: true,
  },
};

// --- Secondary Warning Button Story (Using designVariant="secondary-warning") ---

export const SecondaryWarningDefault: Story = {
    args: {
      designVariant: 'secondary-warning',
      children: 'Warning Button',
      disabled: false,
      leftSection: <HeartIcon width={16} height={16} />,
    },
  };

// --- Secondary Table Button Story (Using designVariant="secondary-table") ---

export const SecondaryTableDefault: Story = {
    args: {
      designVariant: 'secondary-table',
      children: 'Table Action',
      disabled: false,
      rightSection: <ArrowRightIcon width={12} height={12} />,
    },
 };