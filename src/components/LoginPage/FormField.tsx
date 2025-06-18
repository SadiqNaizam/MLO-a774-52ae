import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, X } from 'lucide-react';

interface FormFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'> {
  id: string;
  label: string;
  inputType?: 'text' | 'email' | 'password';
  value: string;
  onValueChange: (value: string) => void;
  onClear?: () => void;
  showPasswordToggle?: boolean;
  isError?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  inputType = 'text' as const,
  value,
  onValueChange,
  placeholder,
  onClear,
  showPasswordToggle,
  isError,
  className,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const togglePasswordVisibility = React.useCallback(() => {
    setIsPasswordVisible(prev => !prev);
  }, []);

  const currentType = inputType === 'password' && isPasswordVisible ? 'text' : inputType;

  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative">
        <Input
          type={currentType}
          id={id}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={cn(
            "pr-10", // padding for icon
            isError && "border-destructive focus-visible:ring-destructive"
          )}
          {...props}
        />
        {inputType === 'password' && showPasswordToggle && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent text-muted-foreground"
            onClick={togglePasswordVisibility}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        )}
        {onClear && value && inputType !== 'password' && (
           <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent text-muted-foreground"
            onClick={onClear}
            aria-label="Clear input"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormField;
