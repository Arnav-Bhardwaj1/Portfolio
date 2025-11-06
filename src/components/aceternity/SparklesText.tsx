"use client";
import React from "react";
import { SparklesCore } from "./SparklesCore";
import { cn } from "@/lib/utils";

export const SparklesText = ({
  text,
  className,
  sparklesCount = 20,
}: {
  text: string;
  className?: string;
  sparklesCount?: number;
}) => {
  return (
    <div className={cn("font-bold text-4xl md:text-5xl lg:text-6xl relative z-20", className)}>
      <div className="relative w-full">
        <h1 className="text-white relative z-10">{text}</h1>
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={sparklesCount}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};


