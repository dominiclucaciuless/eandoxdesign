import type { Meta, StoryObj } from '@storybook/react';
import React, { useId } from 'react';
import { Stack } from '@mantine/core';
// Import the NEW InputField component and its props
import { InputField, InputFieldProps } from '../../atoms/InputField/InputField';
import { Label, LabelProps } from '../../atoms/Label/Label';
import ProfileCircleIcon from '../../assets/icons/profile-circle.svg?react';
import EyeIcon from '../../assets/icons/eye.svg?react';

// Combine Story args with InputFieldProps and LabelProps
interface StoryArgs extends Omit<InputFieldProps, 'leftSection' | 'rightSection' | 'size'> { // Omit props controlled by booleans/custom props
    labelText: LabelProps['label'];
    required: LabelProps['required'];
    optional: LabelProps['optional'];
    withHelp: LabelProps['withHelp'];
    showLeftIcon: boolean;
    showRightIcon: boolean;
    // `status` prop is already part of InputFieldProps
    // `inputSize` prop is already part of InputFieldProps
    // `disabled` prop is already part of InputFieldProps
    // `error` text is part of InputFieldProps
}

const meta: Meta<StoryArgs> = {
  title: 'Atoms/InputField', // Updated title
  component: InputField, // Use the new InputField component
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // --- Label Args ---
    labelText: { control: 'text', table: { category: 'Label' } },
    required: { control: 'boolean', table: { category: 'Label' } },
    optional: { control: 'boolean', table: { category: 'Label' } },
    withHelp: { control: 'boolean', table: { category: 'Label' } },
    // --- InputField Args ---
    status: {
        control: 'select',
        options: ['default', 'error', 'success'],
        description: 'Visual status indicator',
        table: { category: 'InputField' },
    },
    inputSize: {
        control: 'radio',
        options: ['small', 'medium'],
        description: 'Component size',
        table: { category: 'InputField' },
    },
    showLeftIcon: { control: 'boolean', table: { category: 'InputField' } },
    showRightIcon: { control: 'boolean', table: { category: 'InputField' } },
    placeholder: { control: 'text', table: { category: 'InputField' } },
    disabled: { control: 'boolean', table: { category: 'InputField' } },
    error: { control: 'text', description: 'Error message for accessibility (status=\'error\' controls style)', table: { category: 'InputField' } },
    value: { control: 'text', table: { category: 'InputField' } },
  },
  args: { // Default args for controls
    labelText: 'Input Label',
    required: false,
    optional: false,
    withHelp: false,
    status: 'default', // Default status
    inputSize: 'medium',
    showLeftIcon: false,
    showRightIcon: false,
    placeholder: 'Placeholder',
    disabled: false,
    error: undefined, // Default error message
  },
  render: (args: StoryArgs) => {
    const id = useId();
    const {
        labelText,
        required,
        optional,
        withHelp,
        showLeftIcon,
        showRightIcon,
        // Extract props for Label and InputField
        ...inputFieldProps // Rest are InputField props
    } = args;

    // Define icon nodes WITH explicit style for size
    const iconStyle = { width: '16px', height: '16px', display: 'block' };
    const leftIconNode = showLeftIcon ? <ProfileCircleIcon style={iconStyle} /> : undefined;
    const rightIconNode = showRightIcon ? <EyeIcon style={iconStyle} /> : undefined;

    return (
        <Stack gap="xs" style={{ minWidth: '250px' }}>
            <Label
                htmlFor={id}
                label={labelText}
                required={required}
                optional={optional}
                withHelp={withHelp}
            />
            {/* Render the new InputField component */}
            <InputField
                id={id}
                leftSection={leftIconNode}
                rightSection={rightIconNode}
                leftSectionWidth={leftIconNode ? 32 : undefined}
                rightSectionWidth={rightIconNode ? 32 : undefined}
                {...inputFieldProps} // Pass the rest of the props
            />
        </Stack>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story controlled by Args panel
export const Default: Story = {
  args: {
    labelText: 'InputField Label', // Updated name
    placeholder: 'Enter text...',
  },
};

// --- Update other stories to use new args ---

export const Small: Story = {
    name: "Size: Small",
    args: {
        labelText: 'Small Input',
        inputSize: 'small',
        placeholder: 'Small Input',
    },
};

export const Medium: Story = {
    name: "Size: Medium",
    args: {
        labelText: 'Medium Input',
        inputSize: 'medium',
        placeholder: 'Medium Input',
    },
};

export const StateError: Story = {
    name: 'State: Error',
    args: {
        labelText: 'Error Input',
        status: 'error', // Use status prop
        error: 'This field has an error', // Keep error text for accessibility
        placeholder: 'Error State',
        value: 'Invalid value',
        withHelp: true,
    },
};

export const StateSuccess: Story = {
    name: 'State: Success',
    args: {
        labelText: 'Success Input',
        status: 'success', // Use status prop
        placeholder: 'Success State',
        value: 'Valid value'
    },
};

export const StateDisabled: Story = {
    name: 'State: Disabled',
    args: {
        labelText: 'Disabled Input',
        disabled: true,
        placeholder: 'Disabled Input',
        value: 'Cannot edit'
    },
};

// --- Icon Stories --- 
export const WithLeftIcon: Story = {
    name: 'Icons: Left',
    args: {
        labelText: 'Left Icon Input',
        showLeftIcon: true,
        placeholder: 'With Left Icon',
    },
};

export const WithRightIcon: Story = {
    name: 'Icons: Right',
    args: {
        labelText: 'Right Icon Input',
        showRightIcon: true,
        placeholder: 'With Right Icon',
        optional: true,
    },
};

export const WithBothIcons: Story = {
    name: 'Icons: Both',
    args: {
        labelText: 'Both Icons Input',
        showLeftIcon: true,
        showRightIcon: true,
        placeholder: 'With Both Icons',
        required: true,
    },
};

// --- Combined States --- 
export const SmallWithErrorAndIcons: Story = {
    name: 'Combined: Small, Error, Icons',
    args: {
        labelText: 'Small Error',
        inputSize: 'small',
        status: 'error', // Use status prop
        error: 'Error message here',
        showLeftIcon: true,
        showRightIcon: true,
        placeholder: 'Small Error w/ Icons',
        value: 'Incorrect entry',
        withHelp: true,
    },
};

