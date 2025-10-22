import React, { useEffect, useRef, useState } from 'react';

// Enhanced Skills Sphere Component
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
    { name: 'React', color: '#61dafb', delay: 0, icon: '⚛️' },
    { name: 'Python', color: '#3776ab', delay: 0.2, icon: '🐍' },
    { name: 'ML', color: '#ff6b6b', delay: 0.4, icon: '🤖' },
    { name: 'Node.js', color: '#68a063', delay: 0.6, icon: '🟢' },
    { name: 'C++', color: '#00599c', delay: 0.8, icon: '⚡' },
    { name: 'Flutter', color: '#02569b', delay: 1.0, icon: '📱' },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg overflow-hidden relative group"
    >
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Central sphere with enhanced effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className={`w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full border-2 border-blue-400/50 transition-all duration-1000 ${
            isVisible ? 'animate-spin-slow scale-100' : 'scale-0'
          }`}
          style={{
            animationDelay: '0.5s',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(147, 51, 234, 0.2)',
          }}
        >
          {/* Inner rotating ring */}
          <div className="absolute inset-2 border border-cyan-400/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
        </div>
      </div>

      {/* Enhanced floating skill badges */}
      {skills.map((skill, index) => {
        const angle = (index * 60) * (Math.PI / 180);
        const radius = 70;
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
              className={`px-4 py-2 rounded-full text-sm font-medium text-white border backdrop-blur-sm transition-all duration-300 cursor-pointer group/skill ${
                hoveredSkill === skill.name ? 'scale-125 z-10' : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: `${skill.color}50`,
                borderColor: skill.color,
                boxShadow: `0 0 20px ${skill.color}60`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Connection lines */}
      {isVisible && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {skills.map((skill, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const radius = 70;
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
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${skill.delay}s` }}
              />
            );
          })}
        </svg>
      )}

      {/* Center label with enhanced styling */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-300 text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-600/30">
          Interactive Skills Sphere
        </p>
      </div>
    </div>
  );
}

// Enhanced Code Blocks Component
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
    { text: '<React/>', color: '#61dafb', delay: 0, position: 'top-left', icon: '⚛️' },
    { text: 'Python', color: '#3776ab', delay: 0.3, position: 'top-right', icon: '🐍' },
    { text: 'ML', color: '#ff6b6b', delay: 0.6, position: 'bottom-left', icon: '🤖' },
    { text: 'Node.js', color: '#68a063', delay: 0.9, position: 'bottom-right', icon: '🟢' },
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
      className="w-full h-64 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden relative group"
    >
      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
        {/* Moving grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            className={`px-4 py-3 rounded-lg font-mono text-sm font-bold text-white border backdrop-blur-sm transition-all duration-300 cursor-pointer group/block ${
              activeBlock === block.text ? 'scale-125 z-10 rotate-2' : 'hover:scale-110 hover:rotate-1'
            }`}
            style={{
              backgroundColor: `${block.color}30`,
              borderColor: block.color,
              boxShadow: `0 0 25px ${block.color}40`,
            }}
            onMouseEnter={() => setActiveBlock(block.text)}
            onMouseLeave={() => setActiveBlock(null)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{block.icon}</span>
              <span>{block.text}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced central terminal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className={`w-20 h-20 bg-black/60 rounded-lg border-2 border-green-400/50 transition-all duration-1000 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            animationDelay: '1.2s',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), inset 0 0 15px rgba(34, 197, 94, 0.2)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating syntax elements */}
      {isVisible && (
        <>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-green-400/60 font-mono text-xs animate-float">
            {'{ }'}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-400/60 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
            {'< />'}
          </div>
        </>
      )}

      {/* Center label with enhanced styling */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-300 text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-600/30">
          Floating Code Blocks
        </p>
      </div>
    </div>
  );
}

// Enhanced Data Visualization Component
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
    { height: 60, color: '#3b82f6', label: 'ML', delay: 0, icon: '🤖' },
    { height: 80, color: '#06b6d4', label: 'Web Dev', delay: 0.2, icon: '🌐' },
    { height: 70, color: '#8b5cf6', label: 'Mobile', delay: 0.4, icon: '📱' },
    { height: 90, color: '#10b981', label: 'DSA', delay: 0.6, icon: '⚡' },
    { height: 50, color: '#f59e0b', label: 'AI', delay: 0.8, icon: '🧠' },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-lg overflow-hidden relative group"
    >
      {/* Enhanced animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />
        {/* Additional wave layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Enhanced chart container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-end gap-3 h-32">
        {dataPoints.map((point, index) => (
          <div key={point.label} className="flex flex-col items-center group/bar">
            {/* Enhanced bar */}
            <div
              className={`w-10 rounded-t-lg transition-all duration-1000 cursor-pointer ${
                hoveredBar === point.label ? 'scale-110' : 'hover:scale-105'
              }`}
              style={{
                height: `${point.height}px`,
                backgroundColor: point.color,
                animationDelay: `${point.delay}s`,
                boxShadow: `0 0 20px ${point.color}50`,
                transformOrigin: 'bottom',
                transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
              }}
              onMouseEnter={() => setHoveredBar(point.label)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {/* Bar gradient overlay */}
              <div 
                className="w-full h-full rounded-t-lg bg-gradient-to-t from-transparent to-white/20"
                style={{ animationDelay: `${point.delay + 0.1}s` }}
              />
            </div>
            
            {/* Enhanced label with icon */}
            <div
              className={`mt-2 text-xs font-medium text-gray-300 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${point.delay + 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm">{point.icon}</span>
                <span>{point.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced floating data points */}
      {[...Array(12)].map((_, i) => (
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
            boxShadow: `0 0 15px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'}60`,
          }}
        />
      ))}

      {/* Animated connection lines */}
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
                strokeWidth="1"
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
            );
          })}
        </svg>
      )}

      {/* Center label with enhanced styling */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-300 text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-600/30">
          Data Visualization
        </p>
      </div>
    </div>
  );
}