"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const BlurFade = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: BlurFadeProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};


