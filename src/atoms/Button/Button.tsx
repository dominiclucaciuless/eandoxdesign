import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps, MantineTheme, CSSProperties, MantineProvider } from '@mantine/core';
import { theme } from '../../theme'; // Import full theme for colors/fonts

// Define custom variants
type DesignVariant = 'primary' | 'secondary' | 'secondary-warning' | 'secondary-table';

// Extend Mantine's props, omit standard variant/color, add our custom variant
export interface ButtonProps extends Omit<MantineButtonProps, 'variant' | 'color'> {
  designVariant?: DesignVariant;
}

// --- Button Shadow Definitions (Copied from theme.ts for direct use) --- //
const primaryDefaultShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.3), inset 0px -4px 2px -2px rgba(0, 0, 0, 1)';
const primaryHoverShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 8px 8px 0px rgba(0, 0, 0, 0.05)';
const secondaryDefaultShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05)';
const secondaryHoverShadow = primaryHoverShadow;
const secondaryWarningShadow = secondaryDefaultShadow;


export const Button: React.FC<ButtonProps> = ({ designVariant = 'primary', children, ...rest }) => {

  // Define styles function inline, referencing theme and props
  const buttonStyles = (currentTheme: MantineTheme, props: MantineButtonProps & { variant?: string }) => {
    const isDisabled = props.disabled;
    // Note: We use designVariant from closure, not props.variant from Mantine

    // Base root styles applied to all variants
    const baseRootStyles: CSSProperties = {
        boxSizing: 'border-box',
        fontFamily: currentTheme.fontFamily || 'Inter, sans-serif',
        fontSize: currentTheme.fontSizes.sm,
        lineHeight: currentTheme.lineHeights.sm,
        fontWeight: 500,
        borderRadius: '4px',
        height: 'auto',
        border: '1px solid transparent',
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        boxShadow: isDisabled ? 'none' : undefined,
        gap: '4px', // Apply gap to space sections and inner label
    };

    let variantStyles: Partial<Record<"root" | "label" | "section" | "inner", CSSProperties>> = {};

    // --- Primary --- //
    if (designVariant === 'primary') {
       const defaultStyles = {
           padding: '6px 12px',
           backgroundColor: currentTheme.colors.btnPrimaryBgDefault[5],
           color: currentTheme.colors.btnPrimaryTextDefault[5],
           borderColor: currentTheme.colors.btnPrimaryBorderDefault[5],
           boxShadow: primaryDefaultShadow,
       };
       const hoverStyles = {
           padding: defaultStyles.padding,
           backgroundColor: currentTheme.colors.btnPrimaryBgHover[5],
           color: defaultStyles.color,
           borderColor: defaultStyles.borderColor,
           boxShadow: primaryHoverShadow,
       };
       const disabledStyles = {
           padding: '6px 12px',
           backgroundColor: currentTheme.colors.btnPrimaryBgDisabled[5],
           color: currentTheme.colors.btnPrimaryTextDisabled[5],
           borderColor: currentTheme.colors.btnPrimaryBorderDisabled[5],
           boxShadow: 'none',
       };

       variantStyles = {
            root: {
                ...(isDisabled ? disabledStyles : defaultStyles),
                '&:hover:not([data-disabled])': hoverStyles,
            },
             section: {
                 color: isDisabled ? currentTheme.colors.btnIconPrimaryDisabled[5] : currentTheme.colors.btnIconPrimaryDefault[5],
             }
        };
    }
    // --- Secondary --- //
    else if (designVariant === 'secondary') {
        const defaultBg = currentTheme.colors.btnSecondaryBgDefault[5];
        const defaultText = currentTheme.colors.btnSecondaryTextDefault[5];
        const defaultBorder = currentTheme.colors.btnSecondaryBorderDefault[5];
        const defaultIcon = currentTheme.colors.btnIconSecondaryDefault[5];
        const defaultShadow = secondaryDefaultShadow;

        const disabledBg = currentTheme.colors.btnSecondaryBgDisabled[5];
        const disabledText = currentTheme.colors.btnSecondaryTextDisabled[5];
        const disabledBorder = currentTheme.colors.btnSecondaryBorderDisabled[5];
        const disabledIcon = currentTheme.colors.btnIconSecondaryDisabled[5];

        const defaultOutlineStyles = {
            padding: '6px 12px',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: defaultBg,
            color: defaultText,
            borderColor: defaultBorder,
            boxShadow: defaultShadow,
        };
         const hoverOutlineStyles = {
            backgroundColor: currentTheme.colors.btnSecondaryBgHover[5],
            borderColor: currentTheme.colors.btnSecondaryBorderHover[5],
            boxShadow: secondaryHoverShadow,
            padding: defaultOutlineStyles.padding,
            borderWidth: defaultOutlineStyles.borderWidth,
            borderStyle: defaultOutlineStyles.borderStyle,
            color: defaultOutlineStyles.color,
         };
        const disabledOutlineStyles = {
            padding: '6px 12px',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: disabledBg,
            color: disabledText,
            borderColor: disabledBorder,
            boxShadow: 'none',
        };

         variantStyles = {
             root: {
                 ...(isDisabled ? disabledOutlineStyles : defaultOutlineStyles),
                 '&:hover:not([data-disabled])': hoverOutlineStyles,
             },
             section: {
                 color: isDisabled ? disabledIcon : defaultIcon,
             }
         };
    }
    // --- Secondary Warning --- //
    else if (designVariant === 'secondary-warning') {
        const defaultBg = currentTheme.colors.btnSecondaryWarningBgDefault[5];
        const defaultText = currentTheme.colors.btnSecondaryWarningTextDefault[7];
        const defaultBorder = currentTheme.colors.btnSecondaryWarningBorderDefault[5];
        const defaultIcon = currentTheme.colors.btnIconSecondaryWarningDefault[7];
        const defaultShadow = secondaryWarningShadow;

        const disabledBg = currentTheme.colors.btnSecondaryBgDisabled[5];
        const disabledText = currentTheme.colors.btnSecondaryTextDisabled[5];
        const disabledBorder = currentTheme.colors.btnSecondaryBorderDisabled[5];
        const disabledIcon = currentTheme.colors.btnIconSecondaryDisabled[5];

        const defaultOutlineStyles = {
            padding: '6px 12px',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: defaultBg,
            color: defaultText,
            borderColor: defaultBorder,
            boxShadow: defaultShadow,
        };
        // No specific hover defined for warning in Figma
         const hoverOutlineStyles = { ...defaultOutlineStyles };
        const disabledOutlineStyles = {
            padding: '6px 12px',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: disabledBg,
            color: disabledText,
            borderColor: disabledBorder,
            boxShadow: 'none',
        };
         variantStyles = {
             root: {
                 ...(isDisabled ? disabledOutlineStyles : defaultOutlineStyles),
                 '&:hover:not([data-disabled])': hoverOutlineStyles,
             },
             section: {
                 color: isDisabled ? disabledIcon : defaultIcon,
             }
         };
    }
    // --- Secondary Table --- //
    else if (designVariant === 'secondary-table') {
        const disabledBg = currentTheme.colors.btnSecondaryBgDisabled[5];
        const disabledText = currentTheme.colors.btnSecondaryTextDisabled[5];
        const disabledBorder = currentTheme.colors.btnSecondaryBorderDisabled[5];
        const disabledIcon = currentTheme.colors.btnIconSecondaryDisabled[5];

         const defaultSubtleStyles = {
            fontSize: currentTheme.fontSizes.xs,
            lineHeight: '1.66',
            padding: '4px 8px',
            border: '1px solid',
            backgroundColor: currentTheme.colors.btnSecondaryTableBgDefault[5],
            color: currentTheme.colors.btnSecondaryTableTextDefault[5],
            borderColor: currentTheme.colors.btnSecondaryTableBorderDefault[5],
            boxShadow: secondaryDefaultShadow,
         };
         const hoverSubtleStyles = {
            backgroundColor: currentTheme.colors.gray?.[0] ?? '#F8F9FA',
            fontSize: defaultSubtleStyles.fontSize,
            lineHeight: defaultSubtleStyles.lineHeight,
            padding: defaultSubtleStyles.padding,
            border: defaultSubtleStyles.border,
            color: defaultSubtleStyles.color,
            borderColor: defaultSubtleStyles.borderColor,
            boxShadow: defaultSubtleStyles.boxShadow,
         };
         const disabledSubtleStyles = {
            fontSize: currentTheme.fontSizes.xs,
            lineHeight: '1.66',
            padding: '4px 8px',
            border: '1px solid',
            backgroundColor: disabledBg,
            color: disabledText,
            borderColor: disabledBorder,
            boxShadow: 'none',
         };

         variantStyles = {
             root: {
                ...(isDisabled ? disabledSubtleStyles : defaultSubtleStyles),
                '&:hover:not([data-disabled])': hoverSubtleStyles,
             },
             section: {
                 color: isDisabled ? disabledIcon : currentTheme.colors.btnIconSecondaryTableDefault[5],
             }
         };
    }

    // Combine base styles with variant-specific styles
    return {
      root: { ...baseRootStyles, ...variantStyles.root },
      label: { ...variantStyles.label },
      section: { ...variantStyles.section },
    };
  };

  // Use MantineProvider internally IF we need theme context
  // Or assume it's provided higher up the tree
  return (
      <MantineButton
        {...rest} // Pass other Mantine props through
        styles={buttonStyles} // Apply our dynamic styles
        // Mantine variant prop isn't needed as we control everything via styles
      >
        {children}
      </MantineButton>
  );
}; 