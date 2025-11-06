import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, FileText, Target, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedThreeScene } from "./OptimizedThreeScene";
import { BackgroundBeams } from "./aceternity/BackgroundBeams";
import { Meteors } from "./aceternity/Meteors";
import { GridBackground } from "./aceternity/GridBackground";
import { TextGenerateEffect } from "./aceternity/TextGenerateEffect";
import { SparklesText } from "./aceternity/SparklesText";
import { Spotlight } from "./aceternity/Spotlight";
import { Particles } from "./aceternity/Particles";
import { AnimatedGradientText } from "./aceternity/AnimatedGradientText";
import { BlurFade } from "./aceternity/BlurFade";
import { MagicButton } from "./aceternity/MagicButton";
import { ShimmerButton } from "./aceternity/ShimmerButton";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-24">
      {/* Enhanced Modern Background with Beautiful Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 via-purple-950/30 to-slate-950" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-full blur-3xl"
        />
      </div>
      
      {/* 3D Interactive Background - Reduced opacity */}
      <div className="absolute inset-0 opacity-30">
        <OptimizedThreeScene />
      </div>
      
      {/* Subtle Grid Background */}
      <GridBackground className="absolute inset-0 opacity-20" />
      
      {/* Subtle Background Beams */}
      <BackgroundBeams className="absolute inset-0 opacity-15" />
      
      {/* Reduced Meteor Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} className="top-0" />
      </div>

      {/* Subtle Interactive Particles */}
      <Particles 
        className="opacity-20"
        quantity={50}
        ease={60}
        color="#6366f1"
      />
      
      {/* Elegant Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Subtle Glowing Orbs for Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-50 w-full flex-1 flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto w-full">
              {/* Name with Sparkles Effect */}
              <BlurFade delay={0.1} direction="up">
                <div className="mb-6">
                  <div className="relative">
                    <SparklesText 
                      text="Arnav Bhardwaj"
                      className="text-6xl md:text-7xl lg:text-8xl mb-4"
                      sparklesCount={30}
                    />
                    {/* Gradient Glow Overlay */}
                    <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-2xl opacity-50 -z-10">
                      Arnav Bhardwaj
                    </div>
                  </div>
                </div>
              </BlurFade>
              
              {/* Subtitle with TextGenerateEffect and Creative Effects */}
              <BlurFade delay={0.2} direction="up">
                <div className="space-y-3 mb-6">
                  <div className="text-xl md:text-2xl lg:text-3xl">
                    <TextGenerateEffect 
                      words="ML Intern @DRDO | AI & Full-Stack Web Developer"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 font-bold"
                      filter={false}
                      duration={0.4}
                    />
                  </div>
                  <div className="text-base md:text-lg lg:text-xl">
                    <TextGenerateEffect 
                      words="CSE Pre-Final Year | Core Team Member @TechCom | Top 10 Finalist @TECHNOV8"
                      className="text-gray-300"
                      filter={false}
                      duration={0.3}
                    />
                  </div>
                </div>
              </BlurFade>
              
              {/* Achievement Cards with Creative Animations */}
              <BlurFade delay={0.4} direction="up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 max-w-4xl mx-auto">
              {/* DSA Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect rounded-2xl p-6 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-3"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                      <Target className="w-7 h-7 text-blue-400" />
                    </div>
                  </motion.div>
                  <AnimatedGradientText className="text-3xl font-bold mb-2">500+</AnimatedGradientText>
                  <p className="text-gray-300 text-sm font-medium">DSA Problems</p>
                </div>
              </motion.div>

              {/* LeetCode Card */}
              <motion.a
                href="https://leetcode.com/u/ArnavBhardwaj/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="glass-effect rounded-2xl p-6 group relative overflow-hidden block"
              >
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-3"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
                      <Award className="w-7 h-7 text-purple-400" />
                    </div>
                  </motion.div>
                  <AnimatedGradientText className="text-3xl font-bold mb-2">1650+</AnimatedGradientText>
                  <p className="text-gray-300 text-sm font-medium">LeetCode Rating</p>
                </div>
              </motion.a>

              {/* CGPA Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect rounded-2xl p-6 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-3"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 group-hover:from-pink-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                      <BookOpen className="w-7 h-7 text-pink-400" />
                    </div>
                  </motion.div>
                  <AnimatedGradientText className="text-3xl font-bold mb-2">9.76</AnimatedGradientText>
                  <p className="text-gray-300 text-sm font-medium">CGPA</p>
                </div>
              </motion.div>
            </div>
              </BlurFade>

              {/* Description with Enhanced Styling */}
              <BlurFade delay={0.5} direction="up">
                <div className="mb-6 max-w-5xl mx-auto">
                  <div className="glass-effect rounded-2xl px-8 py-6 backdrop-blur-xl">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center font-medium">
                    Passionate about{" "}
                    <span className="text-purple-400 font-bold bg-purple-400/10 px-3 py-1 rounded-lg font-mono">
                      machine learning
                    </span>
                    ,{" "}
                    <span className="text-blue-400 font-bold bg-blue-400/10 px-3 py-1 rounded-lg font-mono">
                      full-stack web development
                    </span>
                    {" "}and{" "}
                    <span className="text-pink-400 font-bold bg-pink-400/10 px-3 py-1 rounded-lg font-mono">
                      DSA
                    </span>
                    . Currently pursuing B.Tech in Computer Science and Engineering with a strong focus on{" "}
                    <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg font-mono">
                      AI
                    </span>
                    {" "}and{" "}
                    <span className="text-cyan-400 font-bold bg-cyan-400/10 px-3 py-1 rounded-lg font-mono">
                      software development
                    </span>
                    </p>
                  </div>
                </div>
              </BlurFade>
              
              {/* CTA Buttons with Creative Styling */}
              <BlurFade delay={0.6} direction="up">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6">
                  <MagicButton
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold px-8 py-6 rounded-full"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                    <Sparkles className="w-5 h-5 ml-2" />
                  </MagicButton>
                  <motion.button
                    onClick={() => scrollToSection('projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative font-bold px-8 py-6 rounded-full text-white transition-all duration-300 flex items-center justify-center overflow-hidden group backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))',
                      border: '2px solid rgba(139, 92, 246, 0.4)',
                      boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/25 group-hover:via-blue-500/25 group-hover:to-cyan-500/25 transition-all duration-300" />
                    <Github className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">View Projects</span>
                    <Code className="w-5 h-5 ml-2 relative z-10" />
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
                      }}
                    />
                  </motion.button>
                  <motion.a
                    href="https://qrr.to/ebb73269"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect border-2 border-pink-400/50 text-pink-300 hover:bg-pink-500/20 hover:text-white hover:border-pink-400 font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Resume
                  </motion.a>
                </div>
              </BlurFade>
              
              {/* Social Links with Glass Effect */}
              <div className="flex justify-center gap-4 md:gap-6 mb-4">
                <a 
                  href="https://github.com/Arnav-Bhardwaj1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover-lift group transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/in/-arnavbhardwaj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover-lift group transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a 
                  href="mailto:arnavbhardwaj111@gmail.com"
                  className="glass-effect p-4 rounded-full hover-lift group transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
              
              {/* Scroll Indicator with Creative Animation */}
              <BlurFade delay={0.7} direction="up">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <AnimatedGradientText className="text-xs font-medium">
                    Scroll to explore
                  </AnimatedGradientText>
                </motion.div>
              </BlurFade>
        </div>
      </div>
    </section>
  );
};
