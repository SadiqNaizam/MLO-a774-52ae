import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface InteractiveLinksProps {
  keepMeSignedIn: boolean;
  onKeepMeSignedInChange: (checked: boolean) => void;
  onForgotPassword: () => void;
  className?: string;
}

const InteractiveLinks: React.FC<InteractiveLinksProps> = ({
  keepMeSignedIn,
  onKeepMeSignedInChange,
  onForgotPassword,
  className
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="keep-me-signed-in"
          checked={keepMeSignedIn}
          onCheckedChange={(checked) => {
            // Shadcn checkbox onCheckedChange can return boolean or 'indeterminate'
            if (typeof checked === 'boolean') {
              onKeepMeSignedInChange(checked);
            }
          }}
          className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          aria-label="Keep me signed in"
        />
        <Label
          htmlFor="keep-me-signed-in"
          className="text-sm font-medium text-foreground select-none cursor-pointer"
        >
          Keep me signed in
        </Label>
      </div>
      <Button
        variant="link"
        className="p-0 h-auto text-sm text-primary hover:text-primary/90 font-medium"
        onClick={onForgotPassword}
        type="button"
      >
        Forgot password?
      </Button>
    </div>
  );
};

export default InteractiveLinks;
