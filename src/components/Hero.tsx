import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, FileText, Workflow, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "./aceternity/GridBackground";
import { NeonGridBackground } from "./aceternity/NeonGridBackground";
import { StarfieldBackground } from "./aceternity/StarfieldBackground";
import { TextGenerateEffect } from "./aceternity/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
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
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-28 md:pt-24 pb-12">
      {/* Neon Grid Background */}
      <NeonGridBackground />
      <StarfieldBackground density={0.5} speed={0.0003} />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-50 w-full flex-1 flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto w-full">
              {/* Name with Clean Premium Effect */}
              <BlurFade delay={0.1} direction="up">
                <div className="mb-3">
                  <div className="relative">
                    {/* Single Subtle Glow Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white blur-2xl opacity-30">
                        Arnav Bhardwaj
                      </h1>
      </div>

                    {/* Main Text with Simple Letter Animation */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl mb-2 font-bold relative z-10">
                      <span className="inline-block">
                        {"Arnav Bhardwaj".split("").map((char, index) => (
                          <motion.span
                            key={index}
                            className="inline-block text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.1 + index * 0.03,
                              ease: "easeOut",
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -3,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
              </span>
                    </h1>
                  </div>
              </div>
              </BlurFade>
            
              {/* Subtitle with TypewriterEffect */}
              <BlurFade delay={0.2} direction="up">
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center justify-center">
                    <TypewriterEffectSmooth
                      words={[
                        { text: "Ex-ML", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "Intern", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "@DRDO", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "|", className: "text-[#00D4FF]" },
                        { text: "AI", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "&", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "Full-Stack", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                        { text: "Developer", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA]" },
                      ]}
                      className="text-xl md:text-2xl lg:text-3xl font-bold"
                      cursorClassName="bg-[#00D4FF]"
                    />
                  </div>
                  <div className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-3">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5 max-w-4xl mx-auto mt-6">
            {/* DSA Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect rounded-lg px-3 py-3 sm:px-4 sm:py-4 group relative overflow-hidden scale-95"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#00B8FF]/20 to-[#00D4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-1.5"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#00B8FF]/15 to-[#00D4FF]/15 group-hover:from-[#00B8FF]/35 group-hover:to-[#00D4FF]/35 transition-all duration-300">
                      <Workflow className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                  </motion.div>
                  <div className="text-lg md:text-xl font-bold mb-0.5 text-[#00D9B8]">700+</div>
                  <p className="text-gray-300 text-[0.7rem] md:text-xs font-medium">DSA Problems</p>
                </div>
              </motion.div>

            {/* LeetCode Card */}
              <motion.a
              href="https://leetcode.com/u/ArnavBhardwaj/" 
              target="_blank" 
              rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="glass-effect rounded-lg px-3 py-3 sm:px-4 sm:py-4 group relative overflow-hidden block scale-95"
              >
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#64FFDA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-1.5"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#00D4FF]/15 to-[#64FFDA]/15 group-hover:from-[#00D4FF]/35 group-hover:to-[#64FFDA]/35 transition-all duration-300">
                      <img
                        src="/leetcode.svg"
                        alt="LeetCode"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </motion.div>
                  <div className="text-lg md:text-xl font-bold mb-0.5 text-[#00D9B8]">1700+</div>
                  <p className="text-gray-300 text-[0.7rem] md:text-xs font-medium">LeetCode Rating</p>
                </div>
              </motion.a>

            {/* CGPA Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect rounded-lg px-3 py-3 sm:px-4 sm:py-4 group relative overflow-hidden scale-95"
              >
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/20 to-[#00B8FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center mb-1.5"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#64FFDA]/15 to-[#00B8FF]/15 group-hover:from-[#64FFDA]/35 group-hover:to-[#00B8FF]/35 transition-all duration-300">
                      <GraduationCap className="w-5 h-5 text-[#64FFDA]" />
                    </div>
                  </motion.div>
                  <div className="text-lg md:text-xl font-bold mb-0.5 text-[#00D9B8]">9.76</div>
                  <p className="text-gray-300 text-[0.7rem] md:text-xs font-medium">CGPA</p>
                </div>
              </motion.div>
            </div>
              </BlurFade>

              {/* Description with Enhanced Styling */}
              <BlurFade delay={0.5} direction="up">
                <div className="mb-5 max-w-5xl mx-auto">
                  <div className="glass-effect rounded-xl px-6 py-5 backdrop-blur-xl">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center font-medium">
                    Passionate about{" "}
                    <span className="text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-3 py-1 rounded-lg font-mono">
                      machine learning
                    </span>
                    ,{" "}
                    <span className="text-[#00B8FF] font-bold bg-[#00B8FF]/10 px-3 py-1 rounded-lg font-mono">
                      full-stack web development
                    </span>
                    {" "}and{" "}
                    <span className="text-[#64FFDA] font-bold bg-[#64FFDA]/10 px-3 py-1 rounded-lg font-mono">
                      DSA
                    </span>
                    . Currently pursuing B.Tech in Computer Science and Engineering with a strong focus on{" "}
                    <span className="text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-3 py-1 rounded-lg font-mono">
                      AI
                    </span>
                    {" "}and{" "}
                    <span className="text-[#00B8FF] font-bold bg-[#00B8FF]/10 px-3 py-1 rounded-lg font-mono">
                      software development
                    </span>
              </p>
            </div>
          </div>
              </BlurFade>
          
              {/* CTA Buttons with Creative Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-5"
              >
                  <MagicButton
              onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-[#00B8FF] via-[#00D4FF] to-[#64FFDA] text-black font-bold px-7 py-4 rounded-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
              <Sparkles className="w-5 h-5 ml-2" />
                  </MagicButton>
                  <motion.button
              onClick={() => scrollToSection('projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative font-bold px-7 py-4 rounded-full text-white transition-all duration-300 flex items-center justify-center overflow-hidden group backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 184, 255, 0.15), rgba(0, 212, 255, 0.15), rgba(100, 255, 218, 0.15))',
                      border: '2px solid rgba(0, 212, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00B8FF]/0 via-[#00D4FF]/0 to-[#64FFDA]/0 group-hover:from-[#00B8FF]/25 group-hover:via-[#00D4FF]/25 group-hover:to-[#64FFDA]/25 transition-all duration-300" />
                    <Github className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">View Projects</span>
                    <Code className="w-5 h-5 ml-2 relative z-10" />
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 184, 255, 0.2)',
                      }}
                    />
                  </motion.button>
                  <motion.a
                    href="https://qrr.to/ebb73269"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect border-2 border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF]/20 hover:text-white hover:border-[#00D4FF] font-bold px-7 py-4 rounded-full shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 flex items-center justify-center"
                  >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
                  </motion.a>
                </motion.div>
          
              {/* Social Links with Glass Effect */}
              <div className="flex justify-center gap-4 md:gap-5 mb-4">
            <a 
              href="https://github.com/Arnav-Bhardwaj1" 
              target="_blank" 
              rel="noopener noreferrer"
                  className="glass-effect p-3.5 rounded-full hover-lift group transition-all duration-300"
            >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-[#00D4FF] transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/-arnavbhardwaj" 
              target="_blank" 
              rel="noopener noreferrer"
                  className="glass-effect p-3.5 rounded-full hover-lift group transition-all duration-300"
            >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#00D4FF] transition-colors" />
            </a>
            <a 
              href="mailto:arnavbhardwaj111@gmail.com"
                  className="glass-effect p-3.5 rounded-full hover-lift group transition-all duration-300"
            >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-[#64FFDA] transition-colors" />
            </a>
          </div>
          
              {/* Scroll Indicator with Creative Animation */}
              <BlurFade delay={0.7} direction="up">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5 text-[#00D4FF]" />
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
