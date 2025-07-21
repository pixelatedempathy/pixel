import * as React from 'react';

// This is a dependency-free placeholder to allow the server to run.
const Popover = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const PopoverTrigger = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const PopoverContent = React.forwardRef<HTMLDivElement, { children?: React.ReactNode }>(({ children }, ref) => (
  <div ref={ref}>{children}</div>
));
PopoverContent.displayName = 'PopoverContent';

export { Popover, PopoverTrigger, PopoverContent };
