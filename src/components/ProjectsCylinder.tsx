import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category?: string;
  technologies?: string[];
}

interface ProjectsCylinderProps {
  projects: Project[];
  height?: number;
}

export const ProjectsCylinder: React.FC<ProjectsCylinderProps> = ({ projects, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const rotationRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animate = () => {
      rotationRef.current += 0.3; // Slower, smoother rotation
      if (rotationRef.current >= 360) {
        rotationRef.current = 0;
      }
      
      if (containerRef.current) {
        const cylinder = containerRef.current.querySelector('.cylinder-3d') as HTMLElement;
        if (cylinder) {
          cylinder.style.transform = `rotateY(${rotationRef.current}deg)`;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  const projectColors = [
    { color: '#00B8FF', glow: '#00B8FF80' },
    { color: '#00D4FF', glow: '#00D4FF80' },
    { color: '#64FFDA', glow: '#64FFDA80' },
    { color: '#00D9B8', glow: '#00D9B880' },
  ];

  const numProjects = Math.min(projects.length, 4);

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-[#0A1929]/50 to-black/50 backdrop-blur-sm" />
      
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
        <div
          className="cylinder-3d relative"
          style={{
            width: '320px',
            height: '320px',
            transformStyle: "preserve-3d",
            transition: 'transform 0.05s linear',
          }}
        >
          {projects.slice(0, numProjects).map((project, index) => {
            const angle = (index * 360) / numProjects;
            const radius = 140;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const z = Math.sin(angleRad) * radius;
            const projectColor = projectColors[index % projectColors.length];

            // Better text truncation - split into multiple lines if needed
            const truncateText = (text: string, maxLength: number) => {
              if (text.length <= maxLength) return text;
              const words = text.split(' ');
              let result = '';
              let currentLine = '';
              
              for (const word of words) {
                if ((currentLine + word).length <= maxLength) {
                  currentLine += (currentLine ? ' ' : '') + word;
                } else {
                  if (currentLine) result += currentLine + '\n';
                  currentLine = word;
                  if (result.split('\n').length >= 2) break; // Max 2 lines
                }
              }
              if (currentLine && result.split('\n').length < 2) {
                result += (result ? ' ' : '') + currentLine;
              }
              return result || text.substring(0, maxLength) + '...';
            };

            const displayTitle = truncateText(project.title, 30);

            return (
              <div
                key={index}
                className="absolute rounded-xl border-2 backdrop-blur-md flex flex-col items-center justify-center p-5 cursor-pointer group"
                style={{
                  width: '200px',
                  height: '140px',
                  backgroundColor: `${projectColor.color}20`,
                  borderColor: projectColor.color,
                  boxShadow: `0 0 40px ${projectColor.glow}, 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                  transform: `translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                  transformStyle: "preserve-3d",
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.8s ${index * 0.15}s ease-out`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `translateX(${x}px) translateZ(${z + 30}px) rotateY(${angle}deg) scale(1.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg) scale(1)`;
                }}
              >
                {/* Front face text */}
                <div 
                  className="text-center w-full"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <h3 
                    className="text-base font-bold mb-2 text-white leading-tight"
                    style={{ 
                      textShadow: `0 0 12px ${projectColor.color}, 0 2px 4px rgba(0, 0, 0, 0.5)`,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {displayTitle}
                  </h3>
                  {project.category && (
                    <p className="text-xs text-gray-300 mt-1 font-medium opacity-90">
                      {project.category.length > 25 
                        ? project.category.substring(0, 25) + '...' 
                        : project.category}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <motion.div
          className="w-24 h-24 rounded-full border-2 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 217, 184, 0.15)',
            borderColor: '#00D9B8',
            boxShadow: '0 0 50px rgba(0, 217, 184, 0.6), inset 0 0 20px rgba(0, 217, 184, 0.2)',
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-[#00D9B8] text-sm font-bold">Projects</div>
        </motion.div>
      </div>

      {isVisible && [...Array(12)].map((_, i) => {
        const left = 10 + (i % 4) * 25 + Math.random() * 5;
        const top = 10 + Math.floor(i / 4) * 30 + Math.random() * 5;
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: `rgba(0, 217, 184, ${0.5 + Math.random() * 0.3})`,
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: `0 0 8px rgba(0, 217, 184, 0.8)`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

