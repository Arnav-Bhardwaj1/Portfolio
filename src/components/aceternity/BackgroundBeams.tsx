"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 h-full w-full bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute left-1/2 top-0 -z-10 h-full w-full translate-x-[-50%] overflow-hidden">
        <div className="absolute left-1/2 top-0 z-0 h-full w-[500px] translate-x-[-50%] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[80px]"></div>
        <div className="absolute left-1/2 top-0 z-0 h-full w-[300px] translate-x-[-50%] bg-gradient-to-b from-blue-500/20 to-transparent blur-[60px]"></div>
      </div>
    </div>
  );
};


