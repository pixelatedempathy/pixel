import * as React from 'react';

// This is a dependency-free placeholder to allow the server to run.
export interface SwitchProps {
  label?: string;
  showLabel?: boolean;
  labelPosition?: 'left' | 'right';
  [key: string]: any;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, ...props }, ref) => (
    <button ref={ref} {...props} type="button">
      {label}
    </button>
  )
);
Switch.displayName = 'Switch';

export { Switch };
