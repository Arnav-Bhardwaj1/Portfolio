"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    // Check if the last 4 words are "Top", "10", "Finalist", "@TECHNOV8"
    const lastFourWords = wordsArray.slice(-4);
    const isTop10Phrase = lastFourWords.length === 4 && 
      lastFourWords[0] === "Top" && 
      lastFourWords[1] === "10" && 
      lastFourWords[2] === "Finalist" && 
      lastFourWords[3] === "@TECHNOV8";
    
    const regularWords = isTop10Phrase ? wordsArray.slice(0, -4) : wordsArray;
    const top10Words = isTop10Phrase ? wordsArray.slice(-4) : [];
    
    return (
      <motion.div ref={scope}>
        {regularWords.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
        {isTop10Phrase && (
          <span className="whitespace-nowrap inline-block">
            {top10Words.map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className="opacity-0"
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </span>
        )}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
