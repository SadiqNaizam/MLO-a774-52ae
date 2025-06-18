import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundSectionProps {
  className?: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative hidden lg:flex flex-1 bg-muted overflow-hidden", // Base styles: relative for positioning children, hidden on small screens, flex layout, takes available space, light gray background, hides overflowing shapes
        className
      )}
    >
      {/* ASCENDION Logo */}
      <div className="absolute top-8 left-8 z-10"> {/* Positioned top-left, above shapes */}
        <h1 className="text-lg font-bold text-foreground tracking-wider">
          ASCENDION
        </h1>
      </div>

      {/* Abstract Shapes Container */}
      {/* This div contains the decorative shapes and is placed behind the logo (z-0) */}
      <div
        className="absolute inset-0 z-0" 
      >
        {/* Main Blue Abstract Shape */}
        {/* This creates a large, rotated ellipse, positioned to create a sweeping curve effect */}
        {/* The majority of the shape is off-screen, with only a curve visible */}
        <div
          className="absolute bg-primary" // Uses the primary color for the shape
          style={{
            width: '150%',        // Makes the shape wider than its container
            height: '150%',       // Makes the shape taller than its container
            borderRadius: '100%', // Ensures the div is elliptical/circular
            left: '-60%',         // Positions the shape significantly to the left, largely off-screen
            bottom: '-90%',        // Positions the shape significantly downwards, largely off-screen
            transform: 'rotate(-15deg)', // Rotates the shape to create a dynamic, sweeping curve
          }}
        />
        {/* Additional abstract shapes could be added here if more complexity is desired. */}
        {/* For example, another semi-transparent shape with a different transform or color. */}
        {/* Based on the provided image, one dominant blue curve is the primary feature. */}
      </div>
    </div>
  );
};

export default BackgroundSection;
