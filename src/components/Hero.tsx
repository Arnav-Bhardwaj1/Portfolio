import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Brain, Award, Target, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900" />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/70 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/15 to-slate-800/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/10 to-gray-800/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-700/12 to-slate-700/8 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-gradient-to-r from-slate-700/8 to-gray-800/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 relative z-10 pt-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Floating Tech Icons - Symmetric Layout */}
          {/* Top Row */}
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="p-3 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <Code className="w-10 h-10 text-blue-400/60" />
            </div>
          </div>
          <div className="absolute top-20 right-10 animate-bounce">
            <div className="p-3 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <Brain className="w-10 h-10 text-blue-300/60" />
            </div>
          </div>
          
          {/* Middle Row */}
          <div className="absolute top-1/2 left-10 animate-bounce">
            <div className="p-3 rounded-full bg-cyan-500/10 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-cyan-400/60" />
            </div>
          </div>
          <div className="absolute top-1/2 right-10 animate-bounce">
            <div className="p-3 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <Target className="w-8 h-8 text-purple-400/60" />
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="absolute bottom-20 left-10 animate-bounce">
            <div className="p-3 rounded-full bg-cyan-500/10 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-cyan-400/60" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce">
            <div className="p-3 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <Award className="w-8 h-8 text-blue-400/60" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-5">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 animate-pulse">
                Arnav
              </span>{" "}
              <span className="text-white drop-shadow-2xl">
                Bhardwaj
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 blur-sm opacity-40">
                Arnav Bhardwaj
              </div>
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-semibold">
                ML Intern @DRDO | AI & Full-Stack Web Developer
              </p>
                <p className="text-base md:text-lg text-gray-300 font-medium">
                  CSE Pre-Final Year | Core Team Member @TechCom | Top 10 Finalist @TECHNOV8
                </p>
            </div>
          </div>
          
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 max-w-3xl mx-auto">
            {/* DSA Card */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">500+</h3>
              <p className="text-gray-300 text-xs font-medium">DSA Problems</p>
            </div>

            {/* LeetCode Card */}
            <a 
              href="https://leetcode.com/u/ArnavBhardwaj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">1650+</h3>
              <p className="text-gray-300 text-xs font-medium">LeetCode Rating</p>
            </a>

            {/* CGPA Card */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">9.76</h3>
              <p className="text-gray-300 text-xs font-medium">CGPA</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-5 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <p className="text-base text-gray-300 leading-relaxed text-center">
                Passionate about <span className="text-blue-400 font-semibold">machine learning, </span>
                <span className="text-cyan-400 font-bold text-lg"> full-stack web development</span>, and 
                <span className="text-gray-400 font-semibold"> competitive programming</span>. 
                Currently pursuing B.Tech in Computer Science and Engineering with a strong focus on AI and software development.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-5">
            <Button 
              size="md" 
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="md" 
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
              <Code className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://github.com/Arnav-Bhardwaj1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/-arnavbhardwaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="mailto:arnavbhardwaj111@gmail.com"
              className="group p-3 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-1">
              <ArrowDown className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};