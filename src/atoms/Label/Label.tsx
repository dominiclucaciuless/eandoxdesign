import React from 'react';
import { Input, Text, Tooltip, Flex, Box } from '@mantine/core';
// Import the SVG as a React component using svgr
import InfoCircleIcon from '../../assets/icons/info-circle.svg?react';

export interface LabelProps {
  /** The main text content of the label */
  label: React.ReactNode;
  /** Marks the label as optional */
  optional?: boolean;
  /** Marks the label as required */
  required?: boolean;
  /** Adds an info icon with a tooltip */
  withHelp?: boolean;
  /** Content for the info tooltip */
  tooltipContent?: React.ReactNode;
  /** Props passed down to the underlying Mantine Input.Label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Input.Label>;
  /** htmlFOr attribute */
  htmlFor?: string;
}

export function Label({
  label,
  optional,
  required,
  withHelp,
  tooltipContent = 'More information',
  labelProps,
  htmlFor,
}: LabelProps) {
  // Ensure only one of optional or required is true
  if (optional && required) {
    console.warn('Label component received both optional and required props. Only one should be true.');
    // Prioritize required if both are true, or adjust logic as needed
    optional = false;
  }

  // Restore original return statement
  return (
    <Flex align="center" gap="xs">
      <Input.Label {...labelProps} htmlFor={htmlFor}>
        {required && (
          <Text span mr={1}>
            *
          </Text>
        )}
        {label}
      </Input.Label>
      {withHelp && (
        <Tooltip label={tooltipContent} withArrow position="top-start">
          <Box component="span" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <InfoCircleIcon width={16} height={16} />
          </Box>
        </Tooltip>
      )}
      {optional && (
        <Text span c="dimmed" inherit>
           (optional)
        </Text>
      )}
    </Flex>
  );
}

export default Label; 