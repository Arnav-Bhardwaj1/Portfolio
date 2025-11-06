"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedShinyText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 rounded-lg",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 z-0 h-full w-full rounded-lg bg-[linear-gradient(to_right,transparent,white,transparent)] bg-[length:200%_100%,100%_2px] bg-[position:50%_0%,50%_100%] bg-no-repeat opacity-0 blur-[2px] transition-opacity duration-500",
          "group-hover:opacity-100"
        )}
      />
      <motion.span
        initial={{ backgroundPosition: "200% 0%" }}
        animate={{ backgroundPosition: "-200% 0%" }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
        className={cn(
          "relative z-10 bg-clip-text text-transparent bg-[linear-gradient(to_right,hsl(var(--foreground)),hsl(var(--foreground))_50%,white_50%,white)] bg-[length:200%_100%]"
        )}
      >
        {text}
      </motion.span>
    </div>
  );
};


