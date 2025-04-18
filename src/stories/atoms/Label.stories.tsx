import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from '../../atoms/Label/Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The main text content of the label',
    },
    optional: {
      control: 'boolean',
      description: 'Marks the label as optional',
    },
    required: {
      control: 'boolean',
      description: 'Marks the label as required',
    },
    withHelp: {
      control: 'boolean',
      description: 'Adds an info icon with a tooltip',
    },
    tooltipContent: {
      control: 'text',
      description: 'Content for the info tooltip',
      if: { arg: 'withHelp' }, // Only show this control if withHelp is true
    },
    htmlFor: {
      control: 'text',
      description: 'The id of the element the label is associated with',
    },
    labelProps: {
      control: false, // Don't show control for complex object props by default
      description: 'Props passed down to the underlying Mantine Input.Label',
    },
  },
  args: { // Default args for all stories
    label: 'Username',
    optional: false,
    required: false,
    withHelp: false,
    tooltipContent: 'Enter your unique username.',
    htmlFor: 'username-input',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    // Uses default args
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Optional: Story = {
  args: {
    optional: true,
  },
};

export const WithHelp: Story = {
  args: {
    withHelp: true,
  },
};

export const RequiredWithHelp: Story = {
  args: {
    required: true,
    withHelp: true,
    tooltipContent: 'This field is mandatory.',
  },
};

export const OptionalWithHelp: Story = {
  args: {
    optional: true,
    withHelp: true,
    tooltipContent: 'Providing this helps us personalize your experience.',
  },
}; 