"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const AnimatedGradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            text.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(text);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={textRef}
      className={cn(
        "inline-block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift",
        className
      )}
      style={{
        animation: "gradient-shift 3s ease infinite",
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  );
};


