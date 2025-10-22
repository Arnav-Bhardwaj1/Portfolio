import React, { Suspense } from 'react';

// Simple fallback component - no 3D for now to avoid errors
export function OptimizedThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Enhanced CSS-only background effects */}
      <div className="w-full h-full">
        {/* Floating particles using CSS */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Floating geometric shapes using CSS */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border border-blue-400/30 animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Central breathing element */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/20 rounded-full animate-pulse"
          style={{
            width: '100px',
            height: '100px',
            animationDuration: '4s',
          }}
        />
      </div>
    </div>
  );
}