import React, { useEffect, useRef, useState } from 'react';

// Enhanced Skills Sphere Component with improved styling
export function SkillsVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skills = [
    { name: 'React.js', color: '#61dafb', delay: 0, glow: '#61dafb80' },
    { name: 'Next.js', color: '#ffffff', delay: 0.1, glow: '#ffffff80' },
    { name: 'TypeScript', color: '#3178c6', delay: 0.15, glow: '#3178c680' },
    { name: 'RAG Agent', color: '#9c27b0', delay: 0.2, glow: '#9c27b080' },
    { name: 'ML', color: '#ff6b6b', delay: 0.4, glow: '#ff6b6b80' },
    { name: 'Node.js', color: '#68a063', delay: 0.6, glow: '#68a06380' },
    { name: 'DSA', color: '#00599c', delay: 0.8, glow: '#00599c80' },
    { name: 'Flutter', color: '#02569b', delay: 1.0, glow: '#02569b80' },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-purple-900/50 rounded-xl overflow-hidden relative group border border-slate-700/30 backdrop-blur-sm"
    >
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: `0 0 6px rgba(59, 130, 246, 0.6)`,
            }}
          />
        ))}
      </div>

      {/* Enhanced central sphere */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className={`w-28 h-28 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/40 rounded-full border-2 border-blue-400/60 transition-all duration-1000 ${
            isVisible ? 'animate-spin-slow scale-100' : 'scale-0'
          }`}
          style={{
            animationDelay: '0.5s',
            boxShadow: `
              0 0 50px rgba(59, 130, 246, 0.5),
              inset 0 0 30px rgba(147, 51, 234, 0.3),
              0 0 100px rgba(59, 130, 246, 0.2)
            `,
            background: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4), transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.3), transparent 50%),
              linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))
            `,
          }}
        >
          {/* Multiple rotating rings */}
          <div className="absolute inset-3 border border-cyan-400/40 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
          <div className="absolute inset-6 border border-purple-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-9 border border-pink-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '10s' }} />
        </div>
      </div>

      {/* Enhanced floating skill badges */}
      {skills.map((skill, index) => {
        const angle = (index * 360 / skills.length) * (Math.PI / 180);
        const radius = 130;
        const x = Math.cos(angle) * radius;
        // Move top and bottom badges closer to center to touch connection lines
        const isTopOrBottom = index === 1 || index === 2 || index === 4 || index === 5; // DSA, Flutter, ML, RAG Agent
        const y = isTopOrBottom ? Math.sin(angle) * 111 : Math.sin(angle) * radius;

        return (
          <div
            key={skill.name}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animationDelay: `${skill.delay}s`,
            }}
          >
            <div
              className={`w-28 px-3 py-1.5 rounded-full text-sm font-semibold text-white border-2 backdrop-blur-md transition-all duration-300 cursor-pointer group/skill flex items-center justify-center ${
                hoveredSkill === skill.name ? 'scale-125 z-10' : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: `${skill.color}30`,
                borderColor: skill.color,
                boxShadow: `
                  0 0 25px ${skill.glow},
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                background: `
                  linear-gradient(135deg, ${skill.color}40, ${skill.color}20),
                  radial-gradient(circle at top left, rgba(255, 255, 255, 0.1), transparent 50%)
                `,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-2">
                <span className="drop-shadow-md">{skill.name}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Enhanced connection lines */}
      {isVisible && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {skills.map((skill, index) => {
            const angle = (index * 360 / skills.length) * (Math.PI / 180);
            const lineRadius = 90;
            const x = Math.cos(angle) * lineRadius;
            const y = Math.sin(angle) * lineRadius;
            
            return (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke={skill.color}
                strokeWidth="2"
                opacity="0.4"
                className="animate-pulse"
                style={{ 
                  animationDelay: `${skill.delay}s`,
                  filter: `drop-shadow(0 0 4px ${skill.color})`,
                }}
              />
            );
          })}
        </svg>
      )}
    </div>
  );
}

// Enhanced Code Blocks Component with improved styling
export function CodeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = ['Project Core', 'Innovation', 'Development', 'Solutions'];

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
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const codeBlocks = [
    { text: 'Finova', color: '#61dafb', delay: 0, position: 'top-left', glow: '#61dafb80', type: 'Finance App' },
    { text: 'FarmSphere', color: '#3776ab', delay: 0.3, position: 'top-right', glow: '#3776ab80', type: 'AI Project' },
    { text: 'TaskFlow', color: '#ff6b6b', delay: 0.6, position: 'bottom-left', glow: '#ff6b6b80', type: 'Web App' },
    { text: 'AstroGuard', color: '#68a063', delay: 0.9, position: 'bottom-right', glow: '#68a06380', type: 'Mobile Dev' },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left': return 'top-6 left-6';
      case 'top-right': return 'top-6 right-6';
      case 'bottom-left': return 'bottom-6 left-6';
      case 'bottom-right': return 'bottom-6 right-6';
      default: return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 bg-gradient-to-br from-slate-900/50 via-green-900/30 to-blue-900/50 rounded-xl overflow-hidden relative group border border-slate-700/30 backdrop-blur-sm"
    >
      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced floating code blocks */}
      {codeBlocks.map((block, index) => (
        <div
          key={block.text}
          className={`absolute ${getPositionClasses(block.position)} transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ animationDelay: `${block.delay}s` }}
        >
          <div
            className={`px-5 py-3 rounded-xl font-mono text-sm font-bold text-white border-2 backdrop-blur-md transition-all duration-300 cursor-pointer group/block ${
              activeBlock === block.text ? 'scale-125 z-10 rotate-2' : 'hover:scale-110 hover:rotate-1'
            }`}
            style={{
              backgroundColor: `${block.color}25`,
              borderColor: block.color,
              boxShadow: `
                0 0 30px ${block.glow},
                0 8px 32px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              background: `
                linear-gradient(135deg, ${block.color}30, ${block.color}15),
                radial-gradient(circle at top left, rgba(255, 255, 255, 0.1), transparent 50%)
              `,
            }}
            onMouseEnter={() => setActiveBlock(block.text)}
            onMouseLeave={() => setActiveBlock(null)}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="drop-shadow-md font-semibold">{block.text}</span>
            </div>
          </div>
        </div>
      ))}

       {/* Enhanced central terminal - Project Hub with rotating text */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <div 
           className={`w-32 h-32 bg-gradient-to-br from-slate-900/80 to-black/90 rounded-xl border-2 border-green-400/60 transition-all duration-1000 ${
             isVisible ? 'scale-100' : 'scale-0'
           }`}
           style={{
             animationDelay: '1.2s',
             boxShadow: `
               0 0 40px rgba(34, 197, 94, 0.5),
               inset 0 0 20px rgba(34, 197, 94, 0.2),
               0 0 80px rgba(34, 197, 94, 0.3)
             `,
           }}
         >
           <div className="w-full h-full flex flex-col items-center justify-center">
             {/* Rotating text */}
             <div className="text-green-400 text-xs font-mono mb-2 text-center">
               <div className="transition-all duration-500 ease-in-out">
                 {rotatingTexts[currentText]}
               </div>
             </div>
             
             {/* Terminal dots */}
             <div className="flex gap-1">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px #22c55e' }} />
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s', boxShadow: '0 0 8px #22c55e' }} />
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 8px #22c55e' }} />
             </div>
           </div>
         </div>
       </div>

      {/* Enhanced floating syntax elements */}
      {isVisible && (
        <>
          <div className="absolute top-6 left-[47.5%] transform -translate-x-1/2 text-green-400/70 font-mono text-lg animate-float drop-shadow-lg" style={{ textShadow: '0 0 10px #22c55e', animationDelay: '0s' }}>
            {'{ }'}
          </div>
          <div className="absolute bottom-3 left-[47.5%] transform -translate-x-1/2 text-blue-400/70 font-mono text-lg animate-float drop-shadow-lg" style={{textShadow: '0 0 10px #3b82f6', animationDelay: '0s' }}>
            {'< />'}
          </div>
          
          {/* Floating globe elements between projects */}
          <div className="absolute top-[45.8%] left-14 transform -translate-y-1/2 text-cyan-400/60 text-3xl animate-float drop-shadow-lg" style={{textShadow: '0 0 8px #06b6d4', animationDelay: '0s' }}>
            🌐
          </div>
          <div className="absolute top-[45.8%] right-16 transform -translate-y-1/2 text-cyan-400/60 text-3xl animate-float drop-shadow-lg" style={{textShadow: '0 0 8px #06b6d4', animationDelay: '0s' }}>
            🌐
          </div>
        </>
      )}
    </div>
  );
}

// Enhanced Data Visualization Component with improved styling
export function ExperienceVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dataPoints = [
    { height: 60, color: '#3b82f6', label: 'ML', delay: 0 },
    { height: 80, color: '#06b6d4', label: 'Web Dev', delay: 0.2 },
    { height: 70, color: '#8b5cf6', label: 'Mobile', delay: 0.4 },
    { height: 90, color: '#10b981', label: 'DSA', delay: 0.6 },
    { height: 50, color: '#f59e0b', label: 'Gen AI', delay: 0.8 },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-48 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-pink-900/50 rounded-xl overflow-hidden relative group border border-slate-700/30 backdrop-blur-sm"
    >
      {/* Enhanced floating data points with mouse interaction */}
      {[...Array(20)].map((_, i) => {
        const baseX = 15 + Math.random() * 70;
        const baseY = 15 + Math.random() * 70;
        const mouseInfluence = 0.3;
        
        return (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              left: `${baseX + mousePosition.x * mouseInfluence}%`,
              top: `${baseY + mousePosition.y * mouseInfluence}%`,
              backgroundColor: i % 3 === 0 ? '#3b82f680' : i % 3 === 1 ? '#06b6d480' : '#8b5cf680',
              animationDelay: `${0.5 + Math.random() * 0.5}s`,
              boxShadow: `0 0 15px ${i % 3 === 0 ? '#3b82f680' : i % 3 === 1 ? '#06b6d480' : '#8b5cf680'}`,
            }}
          />
        );
      })}

      {/* Skill circles instead of bars */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-start gap-3 md:gap-8">
        {dataPoints.map((point, index) => (
          <div key={point.label} className="flex flex-col items-center">
            {/* Circular skill indicator */}
            <div
              className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-2 transition-all duration-1000 cursor-pointer hover:scale-110`}
              style={{
                backgroundColor: `${point.color}20`,
                borderColor: point.color,
                animationDelay: `${point.delay}s`,
                boxShadow: `0 0 25px ${point.color}40`,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div 
                  className="w-5 h-5 md:w-8 md:h-8 rounded-full"
                  style={{ backgroundColor: point.color }}
                />
              </div>
            </div>
            
            {/* Clean label */}
            <div
              className={`mt-2 md:mt-3 text-[10px] md:text-sm font-medium text-gray-300 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${point.delay + 0.1}s` }}
            >
              {point.label}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
    </div>
  );
}