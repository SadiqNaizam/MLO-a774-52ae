import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button'; // Import ButtonProps

interface LoginWithCompanyButtonProps extends ButtonProps { // Extend ButtonProps
  isLoading?: boolean;
}

const LoginWithCompanyButton: React.FC<LoginWithCompanyButtonProps> = ({
  onClick,
  disabled,
  isLoading,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <Button
      type={type}
      variant="outline" // Use outline as base for border
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "w-full bg-muted hover:bg-muted/90 text-muted-foreground border-input",
        // `variant="outline"` provides `border border-input bg-background ...`
        // We override bg and text, but keep border-input from outline.
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="animate-pulse">Logging In...</span> 
      ) : (
        'Login with company'
      )}
    </Button>
  );
};

export default LoginWithCompanyButton;
