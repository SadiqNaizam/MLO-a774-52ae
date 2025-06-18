import React from 'react';
import { cn } from '@/lib/utils';
import FormField from './FormField';
import SignInButton from './SignInButton';
import LoginWithCompanyButton from './LoginWithCompanyButton';
import InteractiveLinks from './InteractiveLinks';
import { Button } from '@/components/ui/button';

const LoginForm: React.FC<{ className?: string }> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('michaelscott@ascendion.com');
  const [password, setPassword] = React.useState<string>('••••••••••');
  const [keepMeSignedIn, setKeepMeSignedIn] = React.useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);
  const [isLoggingInWithCompany, setIsLoggingInWithCompany] = React.useState<boolean>(false);

  const handleSignInSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign In Submitted:', { email, password, keepMeSignedIn });
    setIsSigningIn(true);
    // Simulate API call
    setTimeout(() => setIsSigningIn(false), 1500);
  }, [email, password, keepMeSignedIn]);

  const handleLoginWithCompany = React.useCallback(() => {
    console.log('Login with company clicked');
    setIsLoggingInWithCompany(true);
    // Simulate API call
    setTimeout(() => setIsLoggingInWithCompany(false), 1500);
  }, []);

  const handleForgotPassword = React.useCallback(() => {
    console.log('Forgot password clicked');
  }, []);
  
  const handleTroubleSigningIn = React.useCallback(() => {
    console.log('Trouble signing in clicked');
  }, []);

  return (
    <div className={cn(
      "w-[400px] bg-card p-6 rounded-md shadow-sm flex flex-col gap-6",
      className
    )}>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Get Started</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sign In to Your Account
        </p>
      </div>

      <form onSubmit={handleSignInSubmit} className="flex flex-col gap-4">
        <FormField
          id="email"
          label="Username or Email *"
          inputType="email"
          value={email}
          onValueChange={setEmail}
          placeholder="you@example.com"
          onClear={email ? () => setEmail('') : undefined}
          autoComplete="email"
        />
        <FormField
          id="password"
          label="Password *"
          inputType="password"
          value={password}
          onValueChange={setPassword}
          placeholder="Enter your password"
          showPasswordToggle
          autoComplete="current-password"
        />
        
        <InteractiveLinks
          keepMeSignedIn={keepMeSignedIn}
          onKeepMeSignedInChange={setKeepMeSignedIn}
          onForgotPassword={handleForgotPassword}
        />
        
        <SignInButton
          type="submit"
          isLoading={isSigningIn}
          disabled={isSigningIn}
        />
      </form>

      <div className="relative flex py-1 items-center">
        <div className="flex-grow border-t border-border"></div>
        <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase">or</span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      <LoginWithCompanyButton
        onClick={handleLoginWithCompany}
        isLoading={isLoggingInWithCompany}
        disabled={isLoggingInWithCompany}
      />

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Still have trouble signing in? </span>
        <Button
            variant="link"
            className="p-0 h-auto text-sm text-primary hover:text-primary/90 font-medium"
            onClick={handleTroubleSigningIn}
          >
            Click Here
          </Button>
      </div>
    </div>
  );
};

export default LoginForm;
