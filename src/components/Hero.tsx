import { Github, Linkedin, Mail, Sparkles, FileText, ExternalLink } from "lucide-react";
import { StarfieldBackground } from "./aceternity/StarfieldBackground";
import { BlurFade } from "./aceternity/BlurFade";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ─── Floating Code Terminal Component ─────────────────────────────────────────

interface CodeToken {
  text: string;
  color: string;
}

type CodeLine = CodeToken[];

// VS Code Dark+ theme colors
const SYN = {
  keyword: "#569CD6",
  type: "#4EC9B0",
  func: "#DCDCAA",
  string: "#CE9178",
  number: "#B5CEA8",
  comment: "#6A9955",
  plain: "#D4D4D4",
  param: "#9CDCFE",
  op: "#D4D4D4",
  decorator: "#DCDCAA",
  module: "#4EC9B0",
};

const codeLines: CodeLine[] = [
  [{ text: "class ", color: SYN.keyword }, { text: "ArnavBhardwaj", color: SYN.type }, { text: ":", color: SYN.plain }],
  [{ text: "    role ", color: SYN.plain }, { text: "= ", color: SYN.op }, { text: "\"AI & Full-Stack Developer\"", color: SYN.string }],
  [{ text: "    cgpa ", color: SYN.plain }, { text: "= ", color: SYN.op }, { text: "9.81", color: SYN.number }, { text: "  ", color: SYN.plain }, { text: "# Rank 1", color: SYN.comment }],
  [{ text: "    dsa  ", color: SYN.plain }, { text: "= ", color: SYN.op }, { text: "\"900+ problems solved\"", color: SYN.string }],
  [{ text: "", color: SYN.plain }],
  [{ text: "    skills ", color: SYN.plain }, { text: "= ", color: SYN.op }, { text: "[", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"C++\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"Python\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"JavaScript\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"TypeScript\"", color: SYN.string }, { text: ",", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"React.js\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"Next.js\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"Node.js\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"Express.js\"", color: SYN.string }, { text: ",", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"FastAPI\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"MongoDB\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"SQL\"", color: SYN.string }, { text: ",", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"Machine Learning\"", color: SYN.string }, { text: ", ", color: SYN.plain }, { text: "\"Deep Learning\"", color: SYN.string }, { text: ",", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"Generative AI\"", color: SYN.string }],
  [{ text: "    ]", color: SYN.plain }],
  [{ text: "", color: SYN.plain }],
  [{ text: "    def ", color: SYN.keyword }, { text: "build", color: SYN.func }, { text: "(", color: SYN.plain }, { text: "self", color: SYN.param }, { text: ", ", color: SYN.plain }, { text: "idea", color: SYN.param }, { text: "):", color: SYN.plain }],
  [{ text: "        ", color: SYN.plain }, { text: "\"\"\"Ship it.\"\"\"", color: SYN.string }],
  [{ text: "        return ", color: SYN.keyword }, { text: "self", color: SYN.param }, { text: ".deploy(idea)", color: SYN.plain }],
];

const floatingTags = [
  { label: "React", color: "#61DAFB", top: "5%", left: "-14%", delay: 0 },
  { label: "Python", color: "#3776AB", top: "25%", left: "-18%", delay: 0.8 },
  { label: "TypeScript", color: "#3178C6", top: "70%", left: "-12%", delay: 1.6 },
  { label: "Docker", color: "#2496ED", top: "88%", left: "10%", delay: 2.4 },
  { label: "MongoDB", color: "#47A248", top: "10%", right: "-12%", delay: 0.4 },
  { label: "FastAPI", color: "#009688", top: "50%", right: "-16%", delay: 1.2 },
  { label: "Node.js", color: "#339933", top: "85%", right: "-10%", delay: 2 },
];

const FloatingCodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let lineIndex = 0;
    const intervalId = setInterval(() => {
      lineIndex++;
      if (lineIndex >= codeLines.length) {
        setVisibleLines(codeLines.length);
        clearInterval(intervalId);
      } else {
        setVisibleLines(lineIndex);
      }
    }, 400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      {/* ── Floating Tech Tags ── */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          className="absolute hidden lg:flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide select-none pointer-events-none"
          style={{
            top: tag.top,
            left: tag.left,
            right: (tag as any).right,
            border: `1px solid ${tag.color}55`,
            color: tag.color,
            background: `${tag.color}10`,
            backdropFilter: "blur(8px)",
            zIndex: 0,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: tag.delay,
          }}
        >
          {tag.label}
        </motion.div>
      ))}

      {/* ── Terminal Window ── */}
      <motion.div
        className="relative z-10 w-[340px] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[520px] rounded-xl overflow-hidden"
        style={{
          background: "rgba(13,17,23,0.95)",
          border: "1px solid rgba(0,212,255,0.25)",
          boxShadow:
            "0 0 40px rgba(0,212,255,0.12), 0 20px 60px rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ── Title Bar ── */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,34,42,1) 0%, rgba(22,26,34,1) 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* macOS dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {/* Tab */}
          <div
            className="ml-3 flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#cccccc",
            }}
          >
            <span style={{ color: "#3776AB" }}>🐍</span>
            <span>arnav.py</span>
          </div>
        </div>

        {/* ── Code Area ── */}
        <div
          className="px-4 py-3 font-mono text-[12px] sm:text-[13px] leading-[1.7] overflow-hidden"
          style={{ minHeight: "320px" }}
        >
          {codeLines.slice(0, visibleLines).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              {/* Line number */}
              <span
                className="inline-block w-8 text-right mr-4 select-none flex-shrink-0"
                style={{ color: "#555d6e" }}
              >
                {idx + 1}
              </span>
              {/* Code tokens */}
              <span className="whitespace-pre">
                {line.map((token, ti) => (
                  <span key={ti} style={{ color: token.color }}>
                    {token.text}
                  </span>
                ))}
                {/* Blinking cursor on the last visible line */}
                {idx === visibleLines - 1 && (
                  <motion.span
                    style={{ color: "#aeafad" }}
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      times: [0, 0.5, 0.5, 1],
                      ease: "linear",
                    }}
                  >
                    │
                  </motion.span>
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Status Bar ── */}
        <div
          className="flex items-center justify-between px-4 py-1.5 text-[11px] font-medium select-none"
          style={{
            background: "rgba(0,122,204,0.85)",
            color: "#ffffff",
          }}
        >
          <div className="flex items-center gap-3">
            <span>Python</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Ln {Math.max(visibleLines, 1)}, Col 1</span>
            <span>Spaces: 4</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Role Switcher Component ──────────────────────────────────────────────────
const roles = [
  { text: "AI Engineer", gradient: "from-amber-400 via-orange-500 to-amber-500" },
  { text: "Full-Stack Developer", gradient: "from-orange-400 via-amber-500 to-orange-500" },
  { text: "DSA Enthusiast", gradient: "from-amber-500 via-orange-400 to-amber-400" },
  { text: "Ex-Intern @DRDO", gradient: "from-orange-500 via-amber-400 to-orange-400" },
];

const RoleSwitcher = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[42px] sm:h-[48px] md:h-[56px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${roles[currentRole].gradient} bg-clip-text text-transparent`}
        >
          {roles[currentRole].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// ─── Stat Badge Component ─────────────────────────────────────────────────────
const StatBadge = ({
  value,
  label,
  href,
  delay,
}: {
  value: string;
  label: string;
  href?: string;
  delay: number;
}) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "backOut" }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md cursor-default group transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(0,184,255,0.08), rgba(100,255,218,0.04))",
        border: "1px solid rgba(0,212,255,0.2)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <span className="text-[#00D9B8] font-bold text-sm sm:text-base">{value}</span>
      <span className="text-gray-400 text-xs sm:text-sm font-medium">{label}</span>
      {href && <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#00D4FF] transition-colors" />}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

// ─── Main Hero Component ──────────────────────────────────────────────────────
export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <StarfieldBackground density={0.3} speed={0.0002} />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,184,255,0.06) 0%, rgba(100,255,218,0.03) 30%, transparent 70%)",
        }}
      />

      {/* Gradient mesh blobs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(48,105,223,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content — Split Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-24 pb-8">
          {/* ─── Left Column: Text Content ─── */}
          <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6">
            {/* Status badge */}
            <BlurFade delay={0.1} direction="up">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                style={{
                  background: "linear-gradient(135deg, rgba(100,255,218,0.08), rgba(0,184,255,0.05))",
                  border: "1px solid rgba(100,255,218,0.25)",
                }}
                animate={{ boxShadow: ["0 0 15px rgba(100,255,218,0.1)", "0 0 25px rgba(100,255,218,0.2)", "0 0 15px rgba(100,255,218,0.1)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]" />
                </span>
                <span className="text-[#64FFDA]/90">Open to Opportunities</span>
              </motion.div>
            </BlurFade>

            {/* Name */}
            <BlurFade delay={0.2} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#3069df] via-[#00B8FF] to-[#00D4FF] bg-clip-text text-transparent">
                    Arnav
                  </span>
                </span>
                <br className="hidden sm:block" />{" "}
                <span className="text-white">Bhardwaj</span>
              </h1>
            </BlurFade>

            {/* Role switcher */}
            <BlurFade delay={0.35} direction="up">
              <RoleSwitcher />
            </BlurFade>

            {/* Tagline */}
            <BlurFade delay={0.45} direction="up">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about{" "}
                <span className="text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  machine learning
                </span>
                ,{" "}
                <span className="text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  deep learning
                </span>
                ,{" "}
                <span className="text-[#00B8FF] font-bold bg-[#00B8FF]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  full-stack development
                </span>
                {" "}&{" "}
                <span className="text-[#64FFDA] font-bold bg-[#64FFDA]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  DSA
                </span>
                . Currently pursuing B.Tech in CSE with a strong focus on{" "}
                <span className="text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  AI
                </span>
                {" "}&{" "}
                <span className="text-[#00B8FF] font-bold bg-[#00B8FF]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-sm sm:text-base">
                  software development
                </span>
              </p>
            </BlurFade>

            {/* Stat Badges */}
            <BlurFade delay={0.55} direction="up">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <StatBadge value="900+" label="DSA Problems" delay={0.6} />
                <StatBadge
                  value="1850+"
                  label="LC Rating"
                  href="https://leetcode.com/u/ArnavBhardwaj/"
                  delay={0.7}
                />
                <StatBadge value="9.81" label="CGPA · Rank 1" delay={0.8} />
              </div>
            </BlurFade>

            {/* CTA Buttons */}
            <BlurFade delay={0.65} direction="up">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group px-7 py-3.5 rounded-xl font-bold text-black overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 border border-orange-300/60 shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60"
                >
                  <Mail className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                  <Sparkles className="w-4 h-4 relative z-10" />
                </motion.button>

                <motion.a
                  href="https://drive.google.com/file/d/1opaG6GfxDMqRbg_JZPnAr5Tg-4MFttSR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-7 py-3.5 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,184,255,0.1), rgba(100,255,218,0.05))",
                    border: "1px solid rgba(0,212,255,0.35)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <FileText className="w-4 h-4 text-[#00D4FF] group-hover:text-white transition-colors" />
                  <span>View Resume</span>
                </motion.a>
              </div>
            </BlurFade>

            {/* Social Links — always visible */}
            <div className="flex gap-3 justify-center lg:justify-start pt-1 lg:ml-28">
              {[
                { href: "https://github.com/Arnav-Bhardwaj1", icon: Github },
                { href: "https://linkedin.com/in/-arnavbhardwaj", icon: Linkedin },
                { href: "mailto:arnavbhardwaj111@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="relative p-[1px] rounded-xl group overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {/* Spinning gradient — acts as the animated border */}
                  <motion.div
                    className="absolute inset-[-50%] z-0"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, transparent 100%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Inner content — permanent border + dark fill */}
                  <div
                    className="relative z-10 p-3 rounded-[10px] backdrop-blur-md transition-all duration-300"
                    style={{
                      background: "rgba(10,14,20,0.95)",
                      border: "1px solid rgba(0,212,255,0.35)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Floating Code Terminal ─── */}
          <BlurFade delay={0.3} direction="right">
            <div className="flex-shrink-0 relative">
              <FloatingCodeTerminal />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center gap-1"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-5 h-8 rounded-full border border-[#00D4FF]/30 flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
