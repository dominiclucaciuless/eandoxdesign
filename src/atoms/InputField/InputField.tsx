import React from 'react';
import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps,
    MantineTheme,
    CSSProperties,
    MantineSize,
    useMantineTheme,
} from '@mantine/core';
import { theme } from '../../theme'; // Import full theme for colors/fonts

// Define custom status
type InputStatus = 'default' | 'error' | 'success';
type InputSize = 'small' | 'medium'; // Map to MantineSize sm, md

// Extend Mantine's props, omit standard styles/classNames, add our custom status
export interface InputFieldProps extends Omit<MantineTextInputProps, 'styles' | 'classNames' | 'size' | 'error'> {
  status?: InputStatus;
  inputSize?: InputSize;
  // We use Mantine's disabled prop directly
  // Add back error prop if needed for accessibility/form libraries, but status controls visuals
  error?: React.ReactNode; // Keep error for accessibility, but status drives style
}

// --- Helper Functions (Copied from story) --- //
// Define possible internal states for styling control
type InternalInputState = 'default' | 'hover' | 'focus' | 'error' | 'success' | 'disabled';

const getBorderColor = (theme: MantineTheme, state: InternalInputState) => {
    switch (state) {
      case 'error': return theme.colors.inputBorderError[6];
      case 'success': return theme.colors.inputBorderSuccess[6];
      case 'focus': return theme.colors.inputBorderHover[6]; // Use hover color for focus border
      case 'hover': return theme.colors.inputBorderHover[6];
      case 'disabled': return theme.colors.inputBorderDefault[6]; // Use default border for disabled
      default: return theme.colors.inputBorderDefault[6];
    }
};

const getBackgroundColor = (theme: MantineTheme, state: InternalInputState) => {
    switch (state) {
      case 'error': return theme.colors.inputBgError[0];
      case 'success': return theme.colors.inputBgSuccess[0];
      case 'hover': return theme.colors.inputBgHover[0];
      case 'disabled': return theme.colors.inputBgDisabled[0];
      default: return theme.colors.inputBgDefault[0];
    }
};

 const getIconColor = (theme: MantineTheme, state: InternalInputState) => {
    switch (state) {
        case 'error': return theme.colors.inputIconError[6];
        case 'success': return theme.colors.inputIconSuccess[6];
        case 'focus': return theme.colors.inputIconHover[6]; // Use hover color for focus icon
        case 'hover': return theme.colors.inputIconHover[6];
        case 'disabled': return theme.colors.inputIconDisabled[6];
        default: return theme.colors.inputIconDefault[6];
    }
 };

 // Map our size prop to Mantine's size prop
const sizeMap: Record<InputSize, MantineSize> = {
  small: 'sm',
  medium: 'md',
};


export const InputField: React.FC<InputFieldProps> = ({ status = 'default', inputSize = 'medium', children, disabled, ...rest }) => {
    // Get theme for styling function
    const currentTheme = useMantineTheme(); 

    // Define styles function inline
    const inputStyles = (theme: MantineTheme, props: MantineTextInputProps): Record<string, any> => {
        // Determine internal state based on props and status
        let activeState: InternalInputState = 'default';
        if (props.disabled) activeState = 'disabled';
        else if (status === 'error') activeState = 'error'; // Prioritize error status
        else if (status === 'success') activeState = 'success';
        // Note: hover/focus are handled by CSS pseudo-classes below

        const finalSize = sizeMap[inputSize];

        return {
            input: {
                fontSize: theme.fontSizes[finalSize],
                minHeight: finalSize === 'sm' ? '34px' : '36px',
                height: finalSize === 'sm' ? '34px' : '36px',
                lineHeight: theme.lineHeights[finalSize],
                borderColor: getBorderColor(theme, activeState),
                backgroundColor: getBackgroundColor(theme, activeState),
                borderRadius: '4px',
                color: activeState === 'disabled' ? theme.colors.inputTextDisabled[6] : theme.colors.inputTextFilled[6],
                '&::placeholder': { color: theme.colors.inputTextPlaceholder[6] },

                // Hover state (only if not disabled)
                '&:hover:not([data-disabled])': {
                    borderColor: getBorderColor(theme, 'hover'),
                    backgroundColor: getBackgroundColor(theme, 'hover'),
                 },

                // Focus state (only if not disabled)
                 '&:focus:not([data-disabled]), &:focus-within:not([data-disabled])': {
                    outline: `2px solid ${theme.colors.inputBorderFocusRing[6]}`, 
                    outlineOffset: '1px',
                    borderColor: getBorderColor(theme, 'focus'), 
                 },

                // Explicit disabled state styles
                 '&[data-disabled]': {
                    backgroundColor: getBackgroundColor(theme, 'disabled'),
                    borderColor: getBorderColor(theme, 'disabled'),
                    color: theme.colors.inputTextDisabled[6],
                    opacity: 1,
                    cursor: 'not-allowed',
                    '&::placeholder': { color: theme.colors.inputTextPlaceholder[6] },
                 }
            },
            section: {
                 // Use props.disabled passed to styles func to determine initial icon color
                 // Hover/Focus colors will need CSS overrides if possible, or state management
                 color: getIconColor(theme, props.disabled ? 'disabled' : status === 'error' ? 'error' : status === 'success' ? 'success' : 'default') ,

                 // Override icon color on hover/focus of the *input* (tricky with CSS alone)
                 // This might require more complex :has selectors or component state
                 // For now, we only set the base color based on status/disabled
            }
        };
    };

  return (
      <MantineTextInput
        {...rest} // Pass other Mantine props through
        size={sizeMap[inputSize]} // Map size
        disabled={disabled} // Pass disabled prop
        styles={inputStyles} // Apply our dynamic styles
        // Pass error prop for accessibility, even though status controls style
        error={status === 'error' ? rest.error || true : undefined}
      >
        {children}
      </MantineTextInput>
  );
}; 