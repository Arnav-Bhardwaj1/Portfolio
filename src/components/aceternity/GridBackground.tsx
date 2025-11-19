"use client";
import { cn } from "@/lib/utils";

export const GridBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#01030A] via-[#071022] to-[#02050F] [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]",
        className
      )}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(0,150,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.08)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -inset-10 opacity-85"></div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(0,184,255,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(123,97,255,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(100,255,218,0.12),transparent_45%)] blur-[120px] opacity-65"></div>
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        {children}
      </div>
    </div>
  );
};


