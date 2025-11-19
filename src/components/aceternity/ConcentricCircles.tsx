"use client";
import React from "react";

interface ConcentricCirclesProps {
  className?: string;
}

export const ConcentricCircles: React.FC<ConcentricCirclesProps> = ({ className = "" }) => {
  const arcs = [
    { scale: 0.5, opacity: 0.08, offset: 0 },
    { scale: 0.6, opacity: 0.12, offset: 8 },
    { scale: 0.7, opacity: 0.15, offset: 16 },
    { scale: 0.8, opacity: 0.1, offset: 24 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Left side arcs - opening bracket ( */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full">
        {arcs.map((arc, i) => (
          <div
            key={`left-${i}`}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `${arc.offset}px`,
              width: `${100 * arc.scale}%`,
              height: `${80 * arc.scale}%`,
              borderLeft: `2px solid rgba(6, 182, 212, ${arc.opacity})`,
              borderRadius: '100% 0 0 100%',
              background: `radial-gradient(ellipse at left, rgba(6, 182, 212, ${arc.opacity * 0.3}) 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>

      {/* Right side arcs - closing bracket ) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full">
        {arcs.map((arc, i) => (
          <div
            key={`right-${i}`}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              right: `${arc.offset}px`,
              width: `${100 * arc.scale}%`,
              height: `${80 * arc.scale}%`,
              borderRight: `2px solid rgba(6, 182, 212, ${arc.opacity})`,
              borderRadius: '0 100% 100% 0',
              background: `radial-gradient(ellipse at right, rgba(6, 182, 212, ${arc.opacity * 0.3}) 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConcentricCircles;

