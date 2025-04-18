import { createTheme, MantineColorsTuple, ButtonProps, CSSProperties, MantineTheme } from '@mantine/core';

// Define custom color tuples based on Figma values
// Note: These are simple tuples; a full palette generation might be better long-term.
const inputBorderDefault: MantineColorsTuple = [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB'];
const inputBorderHover: MantineColorsTuple = [ '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF'];
const inputBorderFocusRing: MantineColorsTuple = [ '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF'];
const inputBorderError: MantineColorsTuple = [ '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B'];
const inputBorderSuccess: MantineColorsTuple = [ '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#1BB360', '#1BB360', '#1BB360', '#1BB360', '#1BB360'];

const inputBgDefault: MantineColorsTuple = [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
const inputBgHover: MantineColorsTuple = [ '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF'];
const inputBgError: MantineColorsTuple = [ '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE'];
const inputBgSuccess: MantineColorsTuple = [ '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2'];
const inputBgDisabled: MantineColorsTuple = [ '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8'];

const inputTextPlaceholder: MantineColorsTuple = [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1'];
const inputTextFilled: MantineColorsTuple = [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#222222', '#222222', '#222222', '#222222', '#222222'];
const inputTextDisabled: MantineColorsTuple = [ '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#767676', '#767676', '#767676', '#767676', '#767676'];

const inputIconDefault: MantineColorsTuple = [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#222222', '#222222', '#222222', '#222222', '#222222'];
const inputIconHover: MantineColorsTuple = [ '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#2380FF', '#2380FF', '#2380FF', '#2380FF', '#2380FF'];
const inputIconError: MantineColorsTuple = [ '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800'];
const inputIconSuccess: MantineColorsTuple = [ '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#E7FFF2', '#038D41', '#038D41', '#038D41', '#038D41', '#038D41'];
const inputIconDisabled: MantineColorsTuple = [ '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB'];

// --- Button Colors ---
// Primary Button
const btnPrimaryBgDefault: MantineColorsTuple = ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'];
const btnPrimaryBgHover: MantineColorsTuple = ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'];
const btnPrimaryBgDisabled: MantineColorsTuple = ['#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676'];
const btnPrimaryTextDefault: MantineColorsTuple = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
const btnPrimaryTextDisabled: MantineColorsTuple = ['#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB'];
const btnPrimaryBorderDefault: MantineColorsTuple = ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000']; // Assumed from hover bg, needs check
const btnPrimaryBorderDisabled: MantineColorsTuple = ['#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676'];

// Secondary Button
const btnSecondaryBgDefault: MantineColorsTuple = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
const btnSecondaryBgHover: MantineColorsTuple = ['#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF', '#F2F8FF'];
const btnSecondaryBgDisabled: MantineColorsTuple = ['#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8'];
const btnSecondaryTextDefault: MantineColorsTuple = ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'];
const btnSecondaryTextDisabled: MantineColorsTuple = ['#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1'];
const btnSecondaryBorderDefault: MantineColorsTuple = ['#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB'];
const btnSecondaryBorderHover: MantineColorsTuple = ['#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF', '#78B1FF'];
const btnSecondaryBorderDisabled: MantineColorsTuple = ['#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8'];

// Secondary Warning Button (only default state provided)
const btnSecondaryWarningBgDefault: MantineColorsTuple = ['#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE'];
const btnSecondaryWarningTextDefault: MantineColorsTuple = ['#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800'];
const btnSecondaryWarningBorderDefault: MantineColorsTuple = ['#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B', '#FF6B6B'];

// Secondary Table Button (only default state provided)
const btnSecondaryTableBgDefault: MantineColorsTuple = ['#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9', '#F7F7F9'];
const btnSecondaryTableTextDefault: MantineColorsTuple = ['#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676'];
const btnSecondaryTableBorderDefault: MantineColorsTuple = ['#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB']; // Same as secondary default border

// Icon Colors (assuming shared colors, might need refinement)
const btnIconPrimaryDefault: MantineColorsTuple = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']; // Same as primary text
const btnIconPrimaryDisabled: MantineColorsTuple = ['#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB', '#CBCBCB']; // Same as primary disabled text
const btnIconSecondaryDefault: MantineColorsTuple = ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222']; // Same as secondary text
const btnIconSecondaryHover: MantineColorsTuple = ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222']; // Same as secondary text (hover bg changes, not icon color)
const btnIconSecondaryDisabled: MantineColorsTuple = ['#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1', '#A1A1A1']; // Same as secondary disabled text
const btnIconSecondaryWarningDefault: MantineColorsTuple = ['#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800', '#CE0800']; // Same as secondary warning text
const btnIconSecondaryTableDefault: MantineColorsTuple = ['#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676', '#767676']; // Same as secondary table text

// Add Warning Red color for Button
const warningRed: MantineColorsTuple = ['#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FFDEDE', '#FF6B6B', '#FF6B6B', '#CE0800', '#CE0800', '#CE0800'];

// --- Button Shadow Definitions --- //
const primaryDefaultShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.3), inset 0px -4px 2px -2px rgba(0, 0, 0, 1)';
const primaryHoverShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 8px 8px 0px rgba(0, 0, 0, 0.05)';
const secondaryDefaultShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05)';
const secondaryHoverShadow = primaryHoverShadow;
const secondaryWarningShadow = secondaryDefaultShadow;

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    // Add custom colors if needed, but for now, we rely on Mantine's default gray/dark
    // For label text: Mantine's default dark colors should suffice (#222222 is close to theme.black or theme.colors.dark[7])
    // For optional text: Mantine's gray colors (e.g., theme.colors.gray[6] for #A1A1A1)

    // Custom colors for InputField based on Figma
    inputBorderDefault,
    inputBorderHover,
    inputBorderFocusRing,
    inputBorderError,
    inputBorderSuccess,
    inputBgDefault,
    inputBgHover,
    inputBgError,
    inputBgSuccess,
    inputBgDisabled,
    inputTextPlaceholder,
    inputTextFilled,
    inputTextDisabled,
    inputIconDefault,
    inputIconHover,
    inputIconError,
    inputIconSuccess,
    inputIconDisabled,

    // Button Colors
    btnPrimaryBgDefault,
    btnPrimaryBgHover,
    btnPrimaryBgDisabled,
    btnPrimaryTextDefault,
    btnPrimaryTextDisabled,
    btnPrimaryBorderDefault,
    btnPrimaryBorderDisabled,
    btnSecondaryBgDefault,
    btnSecondaryBgHover,
    btnSecondaryBgDisabled,
    btnSecondaryTextDefault,
    btnSecondaryTextDisabled,
    btnSecondaryBorderDefault,
    btnSecondaryBorderHover,
    btnSecondaryBorderDisabled,
    btnSecondaryWarningBgDefault,
    btnSecondaryWarningTextDefault,
    btnSecondaryWarningBorderDefault,
    btnSecondaryTableBgDefault,
    btnSecondaryTableTextDefault,
    btnSecondaryTableBorderDefault,
    btnIconPrimaryDefault,
    btnIconPrimaryDisabled,
    btnIconSecondaryDefault,
    btnIconSecondaryHover,
    btnIconSecondaryDisabled,
    btnIconSecondaryWarningDefault,
    btnIconSecondaryTableDefault,

    // Add warningRed color
    warningRed,
  },
  components: {
    Button: {
      // Define base styles common to all variants
      defaultProps: {
        // Could set default variant here if desired
      },
      styles: (theme: MantineTheme, props: ButtonProps & { variant?: string }, ctx: { variant: string }) => {
        const isDisabled = props.disabled;
        const variant = props.variant;
        const color = props.color;

        const baseRootStyles: CSSProperties = {
            boxSizing: 'border-box',
            fontFamily: theme.fontFamily || 'Inter, sans-serif',
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.lineHeights.sm,
            fontWeight: 500,
            borderRadius: '4px',
            height: 'auto',
            border: '1px solid transparent',
            transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            boxShadow: isDisabled ? 'none' : undefined,
            gap: '4px',
        };

        let variantStyles: Partial<Record<"root" | "label" | "section" | "inner", CSSProperties>> = {};

        // --- FILLED (Primary) --- //
        if (variant === 'filled') {
           const defaultStyles = {
               padding: '6px 12px',
               backgroundColor: theme.colors.btnPrimaryBgDefault[5],
               color: theme.colors.btnPrimaryTextDefault[5],
               borderColor: theme.colors.btnPrimaryBorderDefault[5],
               boxShadow: primaryDefaultShadow,
           };
           const hoverStyles = {
               backgroundColor: theme.colors.btnPrimaryBgHover[5],
               boxShadow: primaryHoverShadow,
               color: defaultStyles.color,
               borderColor: defaultStyles.borderColor,
               padding: defaultStyles.padding,
           };
           const disabledStyles = {
               padding: '6px 12px',
               backgroundColor: theme.colors.btnPrimaryBgDisabled[5],
               color: theme.colors.btnPrimaryTextDisabled[5],
               borderColor: theme.colors.btnPrimaryBorderDisabled[5],
               boxShadow: 'none',
           };

           variantStyles = {
                root: {
                    ...(isDisabled ? disabledStyles : defaultStyles),
                    '&:hover:not([data-disabled])': hoverStyles,
                },
                 section: {
                     color: isDisabled ? theme.colors.btnIconPrimaryDisabled[5] : theme.colors.btnIconPrimaryDefault[5],
                 }
            };
        }
        // --- OUTLINE (Secondary & Secondary-Warning) --- //
        else if (variant === 'outline') {
            const isWarning = color === 'warningRed';
            const defaultBg = isWarning ? theme.colors.btnSecondaryWarningBgDefault[5] : theme.colors.btnSecondaryBgDefault[5];
            const defaultText = isWarning ? theme.colors.btnSecondaryWarningTextDefault[7] : theme.colors.btnSecondaryTextDefault[5];
            const defaultBorder = isWarning ? theme.colors.btnSecondaryWarningBorderDefault[5] : theme.colors.btnSecondaryBorderDefault[5];
            const defaultIcon = isWarning ? theme.colors.btnIconSecondaryWarningDefault[7] : theme.colors.btnIconSecondaryDefault[5];
            const defaultShadow = isWarning ? secondaryWarningShadow : secondaryDefaultShadow;

            // Using btnSecondaryDisabled colors as fallback for warning disabled
            const disabledBg = theme.colors.btnSecondaryBgDisabled[5];
            const disabledText = theme.colors.btnSecondaryTextDisabled[5];
            const disabledBorder = theme.colors.btnSecondaryBorderDisabled[5];
            const disabledIcon = theme.colors.btnIconSecondaryDisabled[5];

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
                backgroundColor: !isWarning ? theme.colors.btnSecondaryBgHover[5] : defaultBg,
                borderColor: !isWarning ? theme.colors.btnSecondaryBorderHover[5] : defaultBorder,
                boxShadow: !isWarning ? secondaryHoverShadow : defaultShadow,
                // Inherit other properties & ensure correct padding
                padding: '6px 12px', // Restore padding
                borderWidth: defaultOutlineStyles.borderWidth,
                borderStyle: defaultOutlineStyles.borderStyle,
                color: defaultOutlineStyles.color,
             };
            const disabledOutlineStyles = {
                padding: '6px 12px', // Restore padding
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
        // --- SUBTLE (Secondary-Table) --- //
        else if (variant === 'subtle') {
            // Using btnSecondaryDisabled colors as fallback for table disabled
            const disabledBg = theme.colors.btnSecondaryBgDisabled[5];
            const disabledText = theme.colors.btnSecondaryTextDisabled[5];
            const disabledBorder = theme.colors.btnSecondaryBorderDisabled[5]; // Subtle usually has no border, but we need grey text
            const disabledIcon = theme.colors.btnIconSecondaryDisabled[5];

             const defaultSubtleStyles = {
                fontSize: theme.fontSizes.xs,
                lineHeight: '1.66',
                padding: '4px 8px', // Correct padding
                border: '1px solid',
                backgroundColor: theme.colors.btnSecondaryTableBgDefault[5],
                color: theme.colors.btnSecondaryTableTextDefault[5],
                borderColor: theme.colors.btnSecondaryTableBorderDefault[5],
                boxShadow: secondaryDefaultShadow,
             };
             const hoverSubtleStyles = {
                backgroundColor: theme.colors.gray?.[0] ?? '#F8F9FA',
                // Inherit others & ensure correct padding
                fontSize: defaultSubtleStyles.fontSize,
                lineHeight: defaultSubtleStyles.lineHeight,
                padding: '4px 8px', // Restore padding
                border: defaultSubtleStyles.border,
                color: defaultSubtleStyles.color,
                borderColor: defaultSubtleStyles.borderColor,
                boxShadow: defaultSubtleStyles.boxShadow,
             };
             const disabledSubtleStyles = {
                fontSize: theme.fontSizes.xs,
                lineHeight: '1.66',
                padding: '4px 8px', // Restore padding
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
                     color: isDisabled ? disabledIcon : theme.colors.btnIconSecondaryTableDefault[5],
                 }
             };
        }

        // Combine base styles with variant-specific styles
        return {
          root: { ...baseRootStyles, ...variantStyles.root },
          label: { ...variantStyles.label },
          section: { ...variantStyles.section },
        };
      },
    },
  },
  // Define font sizes for small and medium variants
  fontSizes: {
    xs: '0.6875rem', // 11px (Mantine default)
    sm: '0.875rem',  // 14px (Our 'small')
    md: '1rem',      // 16px (Our 'medium')
    lg: '1.125rem',  // 18px (Mantine default)
    xl: '1.375rem',  // 22px (Mantine default)
  },
  // Define line heights matching the requested sizes
  lineHeights: {
    xs: '1.55',
    sm: '1.57', // Approx 22px / 14px
    md: '1.5',  // 24px / 16px
    lg: '1.55',
    xl: '1.55',
  },
}); 