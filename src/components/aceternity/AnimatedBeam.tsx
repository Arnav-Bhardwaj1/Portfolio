"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedBeam = ({
  className,
  duration = 3,
  delay = 0,
  reverse = false,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        initial={{ x: reverse ? "100%" : "-100%" }}
        animate={{ x: reverse ? "-100%" : "100%" }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />
    </div>
  );
};


