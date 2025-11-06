import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

interface ProjectInfo {
  title: string;
  category: string;
  technologies: string[];
}

interface ProjectsCylinderProps {
  projects: ProjectInfo[];
  height?: number;
}

// Function to draw tech icon/pattern based on project category
const drawTechPattern = (ctx: CanvasRenderingContext2D, width: number, height: number, category: string, index: number) => {
  const centerX = width / 2;
  const centerY = height / 4;
  const size = 80;
  
  ctx.save();
  
  // Create glowing tech icon background
  const iconGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size);
  
  if (category.includes('AI') || category.includes('ML')) {
    // Brain/Neural network pattern - neon magenta
    iconGradient.addColorStop(0, 'rgba(255, 0, 255, 0.8)'); // neon magenta
    iconGradient.addColorStop(0.5, 'rgba(255, 0, 204, 0.6)');
    iconGradient.addColorStop(1, 'rgba(255, 0, 153, 0.2)');
    
    // Draw neural network nodes with neon glow
    ctx.shadowColor = '#ff00ff';
    ctx.shadowBlur = 15;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * 30;
      const y = centerY + Math.sin(angle) * 30;
      
      ctx.fillStyle = '#ff00ff';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw connections with neon glow
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  } else if (category.includes('3D')) {
    // 3D cube/globe pattern - neon cyan
    iconGradient.addColorStop(0, 'rgba(0, 245, 255, 0.8)');
    iconGradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.6)');
    iconGradient.addColorStop(1, 'rgba(0, 184, 255, 0.2)');
    
    // Draw 3D cube with neon glow
    ctx.strokeStyle = '#00f5ff';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#00f5ff';
    ctx.shadowBlur = 12;
    const cubeSize = 40;
    const offset = 15;
    
    // Front face
    ctx.strokeRect(centerX - cubeSize/2, centerY - cubeSize/2, cubeSize, cubeSize);
    // Back face
    ctx.strokeRect(centerX - cubeSize/2 + offset, centerY - cubeSize/2 + offset, cubeSize, cubeSize);
    // Connect corners
    ctx.beginPath();
    ctx.moveTo(centerX - cubeSize/2, centerY - cubeSize/2);
    ctx.lineTo(centerX - cubeSize/2 + offset, centerY - cubeSize/2 + offset);
    ctx.moveTo(centerX + cubeSize/2, centerY - cubeSize/2);
    ctx.lineTo(centerX + cubeSize/2 + offset, centerY - cubeSize/2 + offset);
    ctx.moveTo(centerX - cubeSize/2, centerY + cubeSize/2);
    ctx.lineTo(centerX - cubeSize/2 + offset, centerY + cubeSize/2 + offset);
    ctx.moveTo(centerX + cubeSize/2, centerY + cubeSize/2);
    ctx.lineTo(centerX + cubeSize/2 + offset, centerY + cubeSize/2 + offset);
    ctx.stroke();
    ctx.shadowBlur = 0;
  } else {
    // Code/development pattern - neon green
    iconGradient.addColorStop(0, 'rgba(0, 255, 65, 0.8)'); // neon green
    iconGradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.6)');
    iconGradient.addColorStop(1, 'rgba(57, 255, 160, 0.2)');
    
    // Draw code brackets with neon glow
    ctx.strokeStyle = '#00ff41';
    ctx.lineWidth = 5;
    ctx.shadowColor = '#00ff41';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    // Left bracket
    ctx.moveTo(centerX - 30, centerY - 20);
    ctx.lineTo(centerX - 35, centerY - 20);
    ctx.lineTo(centerX - 35, centerY + 20);
    ctx.lineTo(centerX - 30, centerY + 20);
    // Right bracket
    ctx.moveTo(centerX + 30, centerY - 20);
    ctx.lineTo(centerX + 35, centerY - 20);
    ctx.lineTo(centerX + 35, centerY + 20);
    ctx.lineTo(centerX + 30, centerY + 20);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  
  ctx.fillStyle = iconGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
};

// Function to create a canvas texture for each project
const createProjectTexture = (project: ProjectInfo, index: number, total: number): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  // Set canvas size
  const width = 512;
  const height = 512;
  canvas.width = width;
  canvas.height = height;
  
  // Refined neon backgrounds with sophisticated gradients
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  const neonColors = [
    ['#0a1929', '#133b5c', '#1e5a8a', '#00d4ff'], // deep blue to neon cyan
    ['#2d1b3d', '#5a2a5f', '#8b3d88', '#ff00ff'], // deep purple to neon magenta
    ['#0d2818', '#1a4d2e', '#2d7a4f', '#00ff88'], // deep green to neon lime
    ['#3d1f0d', '#6b3a1a', '#a8552a', '#ff8800'], // deep orange to neon yellow
  ];
  const colorIndex = index % neonColors.length;
  gradient.addColorStop(0, neonColors[colorIndex][0]);
  gradient.addColorStop(0.33, neonColors[colorIndex][1]);
  gradient.addColorStop(0.66, neonColors[colorIndex][2]);
  gradient.addColorStop(1, neonColors[colorIndex][3]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Refined radial glow - elegant and radiant
  const neonGlow1 = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 1.2);
  neonGlow1.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.6)`);
  neonGlow1.addColorStop(0.3, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.4)`);
  neonGlow1.addColorStop(0.6, `rgba(${colorIndex === 0 ? '0, 184, 255' : colorIndex === 1 ? '255, 0, 153' : colorIndex === 2 ? '57, 255, 160' : '255, 170, 0'}, 0.25)`);
  neonGlow1.addColorStop(1, 'transparent');
  ctx.fillStyle = neonGlow1;
  ctx.fillRect(0, 0, width, height);
  
  // Subtle linear overlay for depth
  const neonGlow2 = ctx.createLinearGradient(0, 0, width, height);
  neonGlow2.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  neonGlow2.addColorStop(0.5, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.2)`);
  neonGlow2.addColorStop(1, `rgba(${colorIndex === 0 ? '0, 184, 255' : colorIndex === 1 ? '255, 0, 153' : colorIndex === 2 ? '57, 255, 160' : '255, 170, 0'}, 0.3)`);
  ctx.fillStyle = neonGlow2;
  ctx.fillRect(0, 0, width, height);
  
  // Elegant edge glow - refined brightness
  const edgeGlow = ctx.createLinearGradient(0, 0, width, 0);
  edgeGlow.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.6)`);
  edgeGlow.addColorStop(0.2, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  edgeGlow.addColorStop(0.5, 'transparent');
  edgeGlow.addColorStop(0.8, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  edgeGlow.addColorStop(1, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.6)`);
  ctx.fillStyle = edgeGlow;
  ctx.fillRect(0, 0, width, height);
  
  // Subtle grid pattern overlay - refined
  ctx.strokeStyle = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.1)`;
  ctx.lineWidth = 0.5;
  for (let i = 0; i < width; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0; i < height; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }
  
  // Draw tech pattern/icon at top
  drawTechPattern(ctx, width, height, project.category, index);
  
  // Intense neon color glow effect behind content - pure color radiance
  const glowGradient = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, 350);
  glowGradient.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 245, 255' : colorIndex === 1 ? '255, 0, 255' : colorIndex === 2 ? '0, 255, 65' : '255, 102, 0'}, 0.7)`);
  glowGradient.addColorStop(0.2, `rgba(${colorIndex === 0 ? '0, 245, 255' : colorIndex === 1 ? '255, 0, 255' : colorIndex === 2 ? '0, 255, 65' : '255, 102, 0'}, 0.5)`);
  glowGradient.addColorStop(0.4, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.4)`);
  glowGradient.addColorStop(0.6, `rgba(${colorIndex === 0 ? '0, 245, 255' : colorIndex === 1 ? '255, 0, 255' : colorIndex === 2 ? '0, 255, 65' : '255, 102, 0'}, 0.25)`);
  glowGradient.addColorStop(0.8, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.15)`);
  glowGradient.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGradient;
  ctx.fillRect(0, 0, width, height);
  
  // Additional pure neon color glow layer
  const neonColorGlow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
  neonColorGlow.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 245, 255' : colorIndex === 1 ? '255, 0, 255' : colorIndex === 2 ? '0, 255, 65' : '255, 102, 0'}, 0.5)`);
  neonColorGlow.addColorStop(0.5, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  neonColorGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = neonColorGlow;
  ctx.fillRect(0, 0, width, height);
  
  // Title with intense glow effect
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 25;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap title text if too long
  const words = project.title.split(' ');
  const lines: string[] = [];
  let currentLine = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > width - 60) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  
  // Draw title lines with refined glow and elegant typography
  const lineHeight = 38;
  const startY = height / 2 - (lines.length - 1) * lineHeight / 2 - 25;
  lines.forEach((line, i) => {
    const textY = startY + i * lineHeight;
    
    // Subtle dark background with neon glow
    const bgGradient = ctx.createLinearGradient(width / 2 - 160, textY - 22, width / 2 + 160, textY + 22);
    bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    bgGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.85)');
    bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
    
    // Neon glow effect for background
    ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.4)`;
    ctx.shadowBlur = 25;
    ctx.fillStyle = bgGradient;
    ctx.fillRect(width / 2 - 160, textY - 20, 320, 40);
    ctx.shadowBlur = 0;
    
    // Elegant text with refined glow
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Inter, sans-serif';
    ctx.fillText(line, width / 2, textY);
    
    // Additional layer for depth
    ctx.shadowBlur = 12;
    const textGradient = ctx.createLinearGradient(width / 2 - 120, textY, width / 2 + 120, textY);
    textGradient.addColorStop(0, '#ffffff');
    textGradient.addColorStop(0.5, `rgba(${colorIndex === 0 ? '200, 255, 255' : colorIndex === 1 ? '255, 200, 255' : colorIndex === 2 ? '200, 255, 200' : '255, 255, 200'}, 0.95)`);
    textGradient.addColorStop(1, '#ffffff');
    ctx.fillStyle = textGradient;
    ctx.fillText(line, width / 2, textY);
    ctx.shadowBlur = 0;
  });
  
  // Reset shadow for other elements
  ctx.shadowBlur = 0;
  
  // Elegant category badge with refined neon glow
  const badgeX = width / 2 - 115;
  const badgeY = height / 2 + 45;
  const badgeW = 230;
  const badgeH = 38;
  const radius = 15;
  
  // Badge outer neon glow
  ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.5)`;
  ctx.shadowBlur = 30;
  
  // Outer glow layer
  const badgeGlowGradient = ctx.createLinearGradient(badgeX - 8, badgeY - 8, badgeX + badgeW + 8, badgeY + badgeH + 8);
  badgeGlowGradient.addColorStop(0, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  badgeGlowGradient.addColorStop(0.5, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.4)`);
  badgeGlowGradient.addColorStop(1, `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`);
  ctx.fillStyle = badgeGlowGradient;
  
  ctx.beginPath();
  ctx.moveTo(badgeX - 6 + radius, badgeY - 6);
  ctx.lineTo(badgeX + badgeW + 6 - radius, badgeY - 6);
  ctx.quadraticCurveTo(badgeX + badgeW + 6, badgeY - 6, badgeX + badgeW + 6, badgeY - 6 + radius);
  ctx.lineTo(badgeX + badgeW + 6, badgeY + badgeH + 6 - radius);
  ctx.quadraticCurveTo(badgeX + badgeW + 6, badgeY + badgeH + 6, badgeX + badgeW + 6 - radius, badgeY + badgeH + 6);
  ctx.lineTo(badgeX - 6 + radius, badgeY + badgeH + 6);
  ctx.quadraticCurveTo(badgeX - 6, badgeY + badgeH + 6, badgeX - 6, badgeY + badgeH + 6 - radius);
  ctx.lineTo(badgeX - 6, badgeY - 6 + radius);
  ctx.quadraticCurveTo(badgeX - 6, badgeY - 6, badgeX - 6 + radius, badgeY - 6);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  
  // Badge background with elegant gradient
  ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`;
  ctx.shadowBlur = 20;
  const badgeGradient = ctx.createLinearGradient(badgeX, badgeY, badgeX, badgeY + badgeH);
  badgeGradient.addColorStop(0, 'rgba(0, 0, 0, 0.75)');
  badgeGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.9)');
  badgeGradient.addColorStop(1, 'rgba(0, 0, 0, 0.75)');
  ctx.fillStyle = badgeGradient;
  
  ctx.beginPath();
  ctx.moveTo(badgeX + radius, badgeY);
  ctx.lineTo(badgeX + badgeW - radius, badgeY);
  ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + radius);
  ctx.lineTo(badgeX + badgeW, badgeY + badgeH - radius);
  ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - radius, badgeY + badgeH);
  ctx.lineTo(badgeX + radius, badgeY + badgeH);
  ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - radius);
  ctx.lineTo(badgeX, badgeY + radius);
  ctx.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  
  // Refined badge border with neon glow
  ctx.strokeStyle = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.5)`;
  ctx.lineWidth = 1.5;
  ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.6)`;
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;
  
  // Category text with elegant glow
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px Inter, sans-serif';
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 15;
  ctx.fillText(project.category, width / 2, badgeY + badgeH / 2 + 6);
  ctx.shadowBlur = 0;
  
  // Tech stack with icons (represented as dots/patterns)
  const techToShow = project.technologies.slice(0, 4);
  ctx.font = '13px "JetBrains Mono", monospace';
  
  techToShow.forEach((tech, i) => {
    const x = width / 2;
    const y = height / 2 + 95 + i * 30;
    
    // Elegant glowing background behind tech item
    ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.25)`;
    ctx.shadowBlur = 18;
    const techBgGradient = ctx.createLinearGradient(x - 105, y - 12, x + 105, y + 18);
    techBgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.6)');
    techBgGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
    techBgGradient.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = techBgGradient;
    ctx.fillRect(x - 105, y - 12, 210, 28);
    ctx.shadowBlur = 0;
    
    // Tech indicator dot with neon glow
    ctx.shadowColor = `rgba(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.8)`;
    ctx.shadowBlur = 12;
    ctx.fillStyle = `rgb(${colorIndex === 0 ? '0, 212, 255' : colorIndex === 1 ? '255, 0, 204' : colorIndex === 2 ? '0, 255, 136' : '255, 136, 0'})`;
    ctx.beginPath();
    ctx.arc(x - 82, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    
    // Refined tech text with elegant glow
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 12;
    const techGradient = ctx.createLinearGradient(x - 75, y, x + 75, y);
    techGradient.addColorStop(0, '#ffffff');
    techGradient.addColorStop(0.5, `rgba(${colorIndex === 0 ? '200, 255, 255' : colorIndex === 1 ? '255, 200, 255' : colorIndex === 2 ? '200, 255, 200' : '255, 255, 200'}, 0.9)`);
    techGradient.addColorStop(1, '#ffffff');
    ctx.fillStyle = techGradient;
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText(tech, x, y + 6);
    ctx.shadowBlur = 0;
  });
  
  // Add corner accent glow
  const cornerGradient = ctx.createRadialGradient(width, 0, 0, width, 0, 100);
  cornerGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
  cornerGradient.addColorStop(1, 'transparent');
  ctx.fillStyle = cornerGradient;
  ctx.fillRect(width - 100, 0, 100, 100);
  
  return canvas;
};


const CylinderMesh: React.FC<{ projects: ProjectInfo[] }> = ({ projects }) => {
  const cylinderRef = useRef<THREE.Mesh>(null);
  const textureRef = useRef<THREE.CanvasTexture | null>(null);
  
  // Create combined texture for all projects
  const combinedTexture = useMemo(() => {
    if (typeof window === 'undefined') return null;
    
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      const texWidth = 512;
      const totalWidth = texWidth * projects.length;
      canvas.width = totalWidth;
      canvas.height = 512;
      
      projects.forEach((project, index) => {
        const projectCanvas = createProjectTexture(project, index, projects.length);
        ctx.drawImage(projectCanvas, index * texWidth, 0);
      });
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.needsUpdate = true;
      // Increase texture brightness
      texture.colorSpace = THREE.SRGBColorSpace;
      textureRef.current = texture;
      return texture;
    } catch (error) {
      console.error('Error creating texture:', error);
      return null;
    }
  }, [projects]);

  // Cleanup texture on unmount
  useEffect(() => {
    return () => {
      if (textureRef.current) {
        textureRef.current.dispose();
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += delta * 0.3;
    }
  });

  if (!combinedTexture) {
    return null;
  }

  return (
    <group rotation={[0, 1.4, 0.5]}>
      {/* Main cylinder with texture - refined emissive */}
      <mesh ref={cylinderRef}>
        <cylinderGeometry args={[1.2, 1.2, 2.5, 60, 60, true]} />
        <meshStandardMaterial 
          map={combinedTexture} 
          side={THREE.DoubleSide}
          roughness={0.08}
          metalness={0.4}
          emissive={0x333355}
          emissiveIntensity={0.8}
          toneMapped={true}
        />
      </mesh>
      
      {/* Refined outer glow halo */}
      <mesh>
        <cylinderGeometry args={[1.32, 1.32, 2.72, 60, 60, true]} />
        <meshStandardMaterial 
          transparent
          opacity={0.5}
          side={THREE.BackSide}
          emissive={0xffffff}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      
      {/* Subtle rim glow */}
      <mesh>
        <cylinderGeometry args={[1.22, 1.22, 2.55, 60, 60, true]} />
        <meshStandardMaterial 
          transparent
          opacity={0.3}
          side={THREE.BackSide}
          emissive={0x8888aa}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const FallbackCylinder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-muted-foreground">Loading 3D visualization...</div>
  </div>
);

export const ProjectsCylinder: React.FC<ProjectsCylinderProps> = ({ projects, height = 500 }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!projects || projects.length === 0 || !isClient) {
    if (!isClient) {
      return (
        <div style={{ width: '100%', height: `${height}px` }} className="relative flex items-center justify-center">
          <div className="text-muted-foreground">Loading 3D visualization...</div>
        </div>
      );
    }
    return null;
  }

  return (
    <div style={{ width: '100%', height: `${height}px` }} className="relative bg-black">
      <Suspense fallback={<FallbackCylinder />}>
        <Canvas 
          flat
          camera={{ fov: 40, position: [0, 0, 5] }}
          gl={{ antialias: true, alpha: false }}
        >
        {/* Balanced lighting */}
        <ambientLight intensity={0.8} />
        {/* Subtle edge lights */}
        <pointLight position={[5, 0, 0]} intensity={1.5} color={0xff3366} distance={10} decay={2} />
        <pointLight position={[-5, 0, 0]} intensity={1.5} color={0x3366ff} distance={10} decay={2} />
        <pointLight position={[0, 2, 0]} intensity={1} color={0xffff00} distance={8} decay={2} />
        <pointLight position={[0, -2, 0]} intensity={1} color={0xffff00} distance={8} decay={2} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        
        <CylinderMesh projects={projects} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          autoRotate={false}
          minDistance={3}
          maxDistance={8}
        />
        
        {/* Refined bloom post-processing */}
        <EffectComposer>
          <Bloom
            intensity={2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
};
