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
    { name: 'React', color: '#61dafb', delay: 0, icon: '⚛️', glow: '#61dafb80' },
    { name: 'Python', color: '#3776ab', delay: 0.2, icon: '🐍', glow: '#3776ab80' },
    { name: 'ML', color: '#ff6b6b', delay: 0.4, icon: '🤖', glow: '#ff6b6b80' },
    { name: 'Node.js', color: '#68a063', delay: 0.6, icon: '🟢', glow: '#68a06380' },
    { name: 'DSA', color: '#00599c', delay: 0.8, icon: '⚡', glow: '#00599c80' },
    { name: 'Flutter', color: '#02569b', delay: 1.0, icon: '📱', glow: '#02569b80' },
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
        const angle = (index * 60) * (Math.PI / 180);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

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
              className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white border-2 backdrop-blur-md transition-all duration-300 cursor-pointer group/skill ${
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
                <span className="text-lg drop-shadow-lg">{skill.icon}</span>
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
            const angle = (index * 60) * (Math.PI / 180);
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
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

  const codeBlocks = [
    { text: '<React/>', color: '#61dafb', delay: 0, position: 'top-left', icon: '⚛️', glow: '#61dafb80' },
    { text: 'Python', color: '#3776ab', delay: 0.3, position: 'top-right', icon: '🐍', glow: '#3776ab80' },
    { text: 'ML', color: '#ff6b6b', delay: 0.6, position: 'bottom-left', icon: '🤖', glow: '#ff6b6b80' },
    { text: 'Node.js', color: '#68a063', delay: 0.9, position: 'bottom-right', icon: '🟢', glow: '#68a06380' },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left': return 'top-6 left-6';
      case 'top-right': return 'top-6 right-6';
      case 'bottom-left': return 'bottom-6 left-6';
      case 'bottom-right': return 'bottom-6 right-6';
      default: return 'top-1/2 left-1/2';
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
            <div className="flex items-center gap-2">
              <span className="text-lg drop-shadow-lg">{block.icon}</span>
              <span className="drop-shadow-md">{block.text}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced central terminal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className={`w-24 h-24 bg-gradient-to-br from-slate-900/80 to-black/90 rounded-xl border-2 border-green-400/60 transition-all duration-1000 ${
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
          <div className="w-full h-full flex items-center justify-center">
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
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-green-400/70 font-mono text-lg animate-float drop-shadow-lg" style={{ textShadow: '0 0 10px #22c55e' }}>
            {'{ }'}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-400/70 font-mono text-lg animate-float drop-shadow-lg" style={{ animationDelay: '1s', textShadow: '0 0 10px #3b82f6' }}>
            {'< />'}
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
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

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

  const dataPoints = [
    { height: 60, color: '#3b82f6', label: 'ML', delay: 0, icon: '🤖', glow: '#3b82f680' },
    { height: 80, color: '#06b6d4', label: 'Web Dev', delay: 0.2, icon: '🌐', glow: '#06b6d480' },
    { height: 70, color: '#8b5cf6', label: 'Mobile', delay: 0.4, icon: '📱', glow: '#8b5cf680' },
    { height: 90, color: '#10b981', label: 'DSA', delay: 0.6, icon: '⚡', glow: '#10b98180' },
    { height: 50, color: '#f59e0b', label: 'AI', delay: 0.8, icon: '🧠', glow: '#f59e0b80' },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-pink-900/50 rounded-xl overflow-hidden relative group border border-slate-700/30 backdrop-blur-sm"
    >
      {/* Enhanced animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced chart container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-end gap-4 h-32">
        {dataPoints.map((point, index) => (
          <div key={point.label} className="flex flex-col items-center group/bar">
            {/* Enhanced bar */}
            <div
              className={`w-12 rounded-t-xl transition-all duration-1000 cursor-pointer ${
                hoveredBar === point.label ? 'scale-110' : 'hover:scale-105'
              }`}
              style={{
                height: `${point.height}px`,
                backgroundColor: point.color,
                animationDelay: `${point.delay}s`,
                boxShadow: `
                  0 0 25px ${point.glow},
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                background: `
                  linear-gradient(to top, ${point.color}, ${point.color}cc),
                  radial-gradient(circle at top, rgba(255, 255, 255, 0.2), transparent 50%)
                `,
                transformOrigin: 'bottom',
                transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
              }}
              onMouseEnter={() => setHoveredBar(point.label)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {/* Enhanced bar gradient overlay */}
              <div 
                className="w-full h-full rounded-t-xl bg-gradient-to-t from-transparent via-white/10 to-white/20"
                style={{ animationDelay: `${point.delay + 0.1}s` }}
              />
            </div>
            
            {/* Enhanced label with icon */}
            <div
              className={`mt-3 text-xs font-semibold text-gray-200 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${point.delay + 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg drop-shadow-lg">{point.icon}</span>
                <span className="drop-shadow-md">{point.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced floating data points */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            backgroundColor: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6',
            animationDelay: `${0.5 + Math.random() * 0.5}s`,
            boxShadow: `0 0 15px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'}80`,
          }}
        />
      ))}

      {/* Enhanced connection lines */}
      {isVisible && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {dataPoints.map((point, index) => {
            const x = 50 + (index - 2) * 8; // Approximate bar positions
            return (
              <line
                key={index}
                x1={`${x}%`}
                y1="20%"
                x2={`${x}%`}
                y2="80%"
                stroke={point.color}
                strokeWidth="2"
                opacity="0.3"
                className="animate-pulse"
                style={{ 
                  animationDelay: `${point.delay}s`,
                  filter: `drop-shadow(0 0 4px ${point.color})`,
                }}
              />
            );
          })}
        </svg>
      )}
    </div>
  );
}