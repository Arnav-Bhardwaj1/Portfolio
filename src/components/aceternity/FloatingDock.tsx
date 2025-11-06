"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const FloatingDock = ({
  items,
  className,
  heroSectionId = "hero",
}: {
  items: DockItem[];
  className?: string;
  heroSectionId?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = document.getElementById(heroSectionId);
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show dock when hero section is in view
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px", // Hide when scrolled past top 100px of hero
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [heroSectionId]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={dockRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={cn("fixed bottom-8 left-1/2 -translate-x-1/2 z-50", className)}
        >
          <motion.div
            className="glass-effect rounded-full px-4 py-3 flex items-center gap-2 shadow-2xl"
          >
        {items.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 cursor-pointer group"
              >
                {item.icon}
              </a>
            ) : (
              <button
                onClick={item.onClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 cursor-pointer group"
              >
                {item.icon}
              </button>
            )}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute bottom-full left-1/2 mb-2 px-3 py-1.5 glass-effect rounded-lg whitespace-nowrap text-sm"
                >
                  {item.title}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

