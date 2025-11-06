"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-0 h-[169%] w-[138%] lg:w-[84%] opacity-0 blur-[106px] max-w-[138%] lg:max-w-[84%]",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 20%, ${fill}15 40%, transparent 70%)`,
        }}
      />
    </div>
  );
};


