import * as React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "../../lib/utils";

interface EnhancedButtonProps extends ButtonProps {
  glowEffect?: boolean;
  rippleEffect?: boolean;
  pulseEffect?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, glowEffect = false, rippleEffect = false, pulseEffect = false, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "relative overflow-hidden text-white dark:text-white", // Ensure text is always visible
          variant === "outline" && "text-primary dark:text-primary", // Special case for outline buttons
          glowEffect && "hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]",
          pulseEffect && "pulse-animation",
          className
        )}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };