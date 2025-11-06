"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      setCanvasSize({ width: rect.width, height: rect.height });
    };

    updateCanvasSize();
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(canvas.parentElement!);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || canvasSize.width === 0 || canvasSize.height === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    let animationId: number;
    let startTime: number | null = null;

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, colorFrom);
    gradient.addColorStop(1, colorTo);

    const draw = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000 - delay;

      if (elapsed < 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = borderWidth;
      ctx.lineCap = "round";

      const offset = (elapsed * (1000 / duration)) % (canvas.width + canvas.height + size);

      const drawBorder = (x: number, y: number, width: number, height: number) => {
        ctx.beginPath();
        const gradientOffset = offset;

        // Top
        if (gradientOffset < width + size) {
          ctx.moveTo(Math.max(x, gradientOffset - size), y);
          ctx.lineTo(Math.min(x + width, gradientOffset), y);
        }

        // Right
        if (gradientOffset > width && gradientOffset < width + height + size) {
          const rightOffset = gradientOffset - width;
          ctx.moveTo(x + width, Math.max(y, rightOffset - size));
          ctx.lineTo(x + width, Math.min(y + height, rightOffset));
        }

        // Bottom
        if (gradientOffset > width + height && gradientOffset < width * 2 + height + size) {
          const bottomOffset = canvas.width + canvas.height - gradientOffset;
          ctx.moveTo(Math.min(x + width, bottomOffset + size), y + height);
          ctx.lineTo(Math.max(x, bottomOffset), y + height);
        }

        // Left
        if (gradientOffset > width * 2 + height) {
          const leftOffset = canvas.width + canvas.height + canvas.width - gradientOffset;
          ctx.moveTo(x, Math.min(y + height, leftOffset + size));
          ctx.lineTo(x, Math.max(y, leftOffset));
        }
      };

      drawBorder(0, 0, canvas.width, canvas.height);
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationId);
  }, [canvasSize, size, duration, colorFrom, colorTo, borderWidth, delay]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
};


