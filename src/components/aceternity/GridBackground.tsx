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
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -inset-10 opacity-60"></div>
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        {children}
      </div>
    </div>
  );
};


