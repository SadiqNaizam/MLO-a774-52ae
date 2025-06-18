import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button'; // Import ButtonProps
import { ArrowRight } from 'lucide-react';

interface SignInButtonProps extends ButtonProps { // Extend ButtonProps for full compatibility
  isLoading?: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  onClick,
  disabled,
  isLoading,
  className,
  type = 'button', // Default to 'button' if not specified, can be overridden to 'submit'
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "w-full bg-foreground hover:bg-foreground/90 text-background",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="animate-pulse">Signing In...</span>
      ) : (
        <>
          Sign In
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
};

export default SignInButton;
