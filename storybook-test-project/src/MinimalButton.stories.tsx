import type { Meta, StoryObj } from '@storybook/react';
import MinimalButton from './MinimalButton';

const meta: Meta<typeof MinimalButton> = {
  title: 'MinimalButton',
  component: MinimalButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click Me',
  },
}; 