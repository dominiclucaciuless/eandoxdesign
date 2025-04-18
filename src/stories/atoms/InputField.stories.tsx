import type { Meta, StoryObj } from '@storybook/react';
import React, { useId } from 'react';
import { TextInput, MantineSize, Stack, MantineTheme, useMantineTheme, TextInputProps } from '@mantine/core';
import { Label, LabelProps } from '../../atoms/Label/Label'; // Keep Label
import ProfileCircleIcon from '../../assets/icons/profile-circle.svg?react';
import EyeIcon from '../../assets/icons/eye.svg?react';

// Define possible states for styling control
type InputState = 'default' | 'hover' | 'focus' | 'error' | 'success' | 'disabled';
type InputSize = 'small' | 'medium'; // Map to MantineSize sm, md

// Args for the story controls
interface StoryArgs extends Omit<TextInputProps, 'size' | 'leftSection' | 'rightSection' | 'styles' | 'classNames'> {
    labelText: LabelProps['label'];
    required: LabelProps['required'];
    optional: LabelProps['optional'];
    withHelp: LabelProps['withHelp'];
    showLeftIcon: boolean; // Use boolean for control
    showRightIcon: boolean; // Use boolean for control
    displayState: InputState; // Control the visual state via styles
    inputSize: InputSize;
}

// Helper function to get theme colors (similar logic as before)
const getBorderColor = (theme: MantineTheme, state: InputState) => {
    switch (state) {
      case 'error': return theme.colors.inputBorderError[6];
      case 'success': return theme.colors.inputBorderSuccess[6];
      case 'focus': return theme.colors.inputBorderHover[6];
      case 'hover': return theme.colors.inputBorderHover[6];
      case 'disabled': return theme.colors.inputBorderDefault[6];
      default: return theme.colors.inputBorderDefault[6];
    }
};

const getBackgroundColor = (theme: MantineTheme, state: InputState, filled: boolean) => {
    switch (state) {
      case 'error': return theme.colors.inputBgError[0];
      case 'success': return theme.colors.inputBgSuccess[0];
      case 'hover': return theme.colors.inputBgHover[0];
      case 'disabled': return theme.colors.inputBgDisabled[0];
      default: return theme.colors.inputBgDefault[0];
    }
};

 const getIconColor = (theme: MantineTheme, state: InputState) => {
    switch (state) {
        case 'error': return theme.colors.inputIconError[6];
        case 'success': return theme.colors.inputIconSuccess[6];
        case 'focus':
        case 'hover': return theme.colors.inputIconHover[6];
        case 'disabled': return theme.colors.inputIconDisabled[6];
        default: return theme.colors.inputIconDefault[6];
    }
 }

// Map our size prop to Mantine's size prop
const sizeMap: Record<InputSize, MantineSize> = {
  small: 'sm',
  medium: 'md',
};

const meta: Meta<StoryArgs> = {
  title: 'Atoms/TextInput (Styled)', // UPDATED title
  // component: InputField, // REMOVED direct component link
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
    // --- TextInput Args ---
    displayState: {
        control: 'select',
        options: ['default', 'hover', 'focus', 'error', 'success', 'disabled'],
        description: 'Simulated state for styling',
        table: { category: 'TextInput' },
    },
    inputSize: {
        control: 'radio',
        options: ['small', 'medium'], // Ensure options is an array
        description: 'Size (\'sm\'/\'md\')', // Ensure description is a string value
        table: { category: 'TextInput' },
    },
    showLeftIcon: { control: 'boolean', table: { category: 'TextInput' } },
    showRightIcon: { control: 'boolean', table: { category: 'TextInput' } },
    placeholder: { control: 'text', table: { category: 'TextInput' } },
    disabled: { control: 'boolean', table: { category: 'TextInput' } }, // Use standard disabled prop
    error: { control: 'text', table: { category: 'TextInput' } }, // Use standard error prop (can be boolean or text)
    value: { control: 'text', table: { category: 'TextInput' } },
  },
  args: { // Default args for controls
    labelText: 'Input Label',
    required: false,
    optional: false,
    withHelp: false,
    displayState: 'default',
    inputSize: 'medium',
    showLeftIcon: false,
    showRightIcon: false,
    placeholder: 'Placeholder',
    disabled: false,
  },
  render: (args: StoryArgs) => {
    const id = useId();
    const theme = useMantineTheme();
    const { labelText, required, optional, withHelp, displayState, inputSize, showLeftIcon, showRightIcon, ...inputProps } = args;

    // Simplified activeState logic (as done before)
    let activeState: InputState = 'default';
    if (inputProps.disabled) activeState = 'disabled';
    else if (!!inputProps.error) activeState = 'error';
    else if (displayState === 'success') activeState = 'success';
    else if (displayState === 'focus') activeState = 'focus';
    else if (displayState === 'hover') activeState = 'hover';

    const finalSize = sizeMap[inputSize];

    const inputStyles = (theme: MantineTheme): Record<string, any> => ({
        label: { marginBottom: '6px' },
        input: {
            fontSize: theme.fontSizes[finalSize],
            minHeight: finalSize === 'sm' ? '34px' : '36px',
            height: finalSize === 'sm' ? '34px' : '36px',
            lineHeight: theme.lineHeights[finalSize],
            borderColor: getBorderColor(theme, activeState),
            backgroundColor: getBackgroundColor(theme, activeState, !!inputProps.value),
            borderRadius: '4px',
            color: activeState === 'disabled' ? theme.colors.inputTextDisabled[6] : theme.colors.inputTextFilled[6],
            '&::placeholder': { color: theme.colors.inputTextPlaceholder[6] },
            '&:focus, &:focus-within': {
                 outline: `2px solid ${theme.colors.inputBorderFocusRing[6]}`, 
                 outlineOffset: '1px',
                 borderColor: theme.colors.inputBorderHover[6], 
             },
             '&:disabled': { // Ensure disabled styles from theme match Figma
                 backgroundColor: theme.colors.inputBgDisabled[0],
                 borderColor: theme.colors.inputBorderDefault[6],
                 color: theme.colors.inputTextDisabled[6],
                 opacity: 1,
                 cursor: 'not-allowed',
                 '&::placeholder': { color: theme.colors.inputTextPlaceholder[6] },
             }
        },
        section: {
            color: getIconColor(theme, activeState),
             // Style the wrapper section if needed, but icon size set directly below
             // SVG itself will inherit color
        }
    });

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
            <TextInput
                id={id}
                size={finalSize}
                leftSection={leftIconNode}
                rightSection={rightIconNode}
                leftSectionWidth={leftIconNode ? 32 : undefined}
                rightSectionWidth={rightIconNode ? 32 : undefined}
                styles={inputStyles}
                {...inputProps}
            />
        </Stack>
    );
  },
};

export default meta;
// Adjust Story type if needed, or keep as StoryObj<typeof meta>
type Story = StoryObj<typeof meta>;

// Base story controlled by Args panel
export const Default: Story = {
  args: {
    labelText: 'Styled TextInput',
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
        error: 'This field has an error', // Use Mantine's error prop
        placeholder: 'Error State',
        value: 'Invalid value',
        withHelp: true,
    },
};

export const StateSuccess: Story = {
    name: 'State: Success',
    args: {
        labelText: 'Success Input',
        displayState: 'success', // Use displayState for custom success
        placeholder: 'Success State',
        value: 'Valid value'
    },
};

export const StateDisabled: Story = {
    name: 'State: Disabled',
    args: {
        labelText: 'Disabled Input',
        disabled: true, // Use Mantine's disabled prop
        placeholder: 'Disabled Input',
        value: 'Cannot edit'
    },
};

// --- Icon Stories --- 
export const WithLeftIcon: Story = {
    name: 'Icons: Left',
    args: {
        labelText: 'Left Icon Input',
        showLeftIcon: true, // Ensure this is true
        placeholder: 'With Left Icon',
    },
};

export const WithRightIcon: Story = {
    name: 'Icons: Right',
    args: {
        labelText: 'Right Icon Input',
        showRightIcon: true, // Ensure this is true
        placeholder: 'With Right Icon',
        optional: true,
    },
};

export const WithBothIcons: Story = {
    name: 'Icons: Both',
    args: {
        labelText: 'Both Icons Input',
        showLeftIcon: true, // Ensure this is true
        showRightIcon: true, // Ensure this is true
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
        error: 'Error message here',
        showLeftIcon: true, // Ensure this is true
        showRightIcon: true, // Ensure this is true
        placeholder: 'Small Error w/ Icons',
        value: 'Incorrect entry',
        withHelp: true,
    },
};

