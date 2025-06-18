import React from 'react';
import BackgroundSection from '../components/layout/BackgroundSection';
import LoginForm from '../components/LoginPage/LoginForm';

/**
 * IndexPage serves as the main login page for the application.
 * It arranges the BackgroundSection (decorative left panel, visible on larger screens)
 * and the LoginForm (authentication form) in a responsive layout.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-stretch bg-background">
      {/* 
        BackgroundSection:
        - Displays branding and abstract graphics.
        - Is hidden on screens smaller than 'lg' (as per its own Tailwind classes: 'hidden lg:flex').
        - Has 'flex-1' within its own definition, allowing it to take available space on 'lg' screens.
      */}
      <BackgroundSection />

      {/* 
        Main content area for the LoginForm:
        - Takes up the remaining flexible space ('flex-1').
        - On small screens (when BackgroundSection is hidden), this area will occupy the full width.
        - Centers the LoginForm vertically and horizontally using flexbox properties.
        - Padding is applied for spacing around the LoginForm.
      */}
      <main className="flex flex-1 flex-col justify-center items-center p-4 sm:p-6 md:p-8">
        {/* 
          LoginForm:
          - Contains all input fields, buttons, and links for user authentication.
          - Has a fixed width (w-[400px]) and styling defined within its own component.
        */}
        <LoginForm />
      </main>
    </div>
  );
};

export default IndexPage;
