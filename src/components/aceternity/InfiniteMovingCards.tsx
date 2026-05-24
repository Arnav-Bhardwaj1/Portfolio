"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const animationRef = useRef<number>();
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (!start && scrollerRef.current && containerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Duplicate items twice to ensure enough scroll space for seamless wrapping
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, [start]);

  const getSpeedValue = () => {
    if (speed === "fast") return 1.5;
    if (speed === "normal") return 0.8;
    return 0.4;
  };

  const exactScrollLeftRef = useRef(0);

  useEffect(() => {
    if (!start || !containerRef.current || !scrollerRef.current) return;
    
    const container = containerRef.current;
    exactScrollLeftRef.current = container.scrollLeft;
    
    const animate = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        const moveAmount = getSpeedValue();
        if (direction === "left") {
          exactScrollLeftRef.current += moveAmount;
        } else {
          exactScrollLeftRef.current -= moveAmount;
        }
        container.scrollLeft = exactScrollLeftRef.current;
      } else {
        // Sync exact pos with user drag
        exactScrollLeftRef.current = container.scrollLeft;
      }

      // Infinite wrap logic
      const singleSetWidth = container.scrollWidth / 3;
      
      if (exactScrollLeftRef.current >= singleSetWidth * 2) {
        exactScrollLeftRef.current -= singleSetWidth;
        container.scrollLeft = exactScrollLeftRef.current;
      } else if (exactScrollLeftRef.current <= 0) {
        exactScrollLeftRef.current += singleSetWidth;
        container.scrollLeft = exactScrollLeftRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [start, direction, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isHoveredRef.current = true;
    }
  };
  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-x-auto cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .scroller::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] glass-effect hover-lift border border-white/10"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-base leading-[1.7] text-gray-200 font-medium">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center border-t border-white/10 pt-4">
                <span className="flex flex-col gap-1">
                  <span className="text-base md:text-lg leading-[1.6] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-medium">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

