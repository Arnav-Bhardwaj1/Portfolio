import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    // Close menu first, then scroll after animation completes
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
        ? "glass-effect bg-[#050c18]/90 backdrop-blur-3xl border-b border-[#00B8FF]/30 shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
        : "bg-black/30 backdrop-blur-xl border-b border-white/10"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 hover:from-amber-300 hover:via-orange-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Arnav Bhardwaj
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-gray-200 hover:text-white transition-all duration-300 font-medium relative group text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500/10 hover:bg-orange-500/20 font-bold px-5 py-3 rounded-full border border-orange-500/50 hover:border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" style={{ color: "#f97316" }} />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Get In Touch</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-200 hover:text-white hover:bg-white/10 p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-24 left-1/2 w-[280px] border border-white/10 bg-[#050f1d] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <div key={item.label} className="w-full">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="w-full text-gray-200 hover:text-white transition-all duration-300 text-center font-medium py-3 px-4 rounded-xl hover:bg-white/5 active:bg-white/10"
                  >
                    {item.label}
                  </motion.button>
                  {index !== navItems.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" 
                    />
                  )}
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Button
                  size="sm"
                  className="w-full bg-orange-500/10 hover:bg-orange-500/20 font-bold py-6 rounded-full border border-orange-500/50 hover:border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all duration-300 text-base"
                  onClick={() => scrollToSection('contact')}
                >
                  <Sparkles className="w-4 h-4 mr-2" style={{ color: "#f97316" }} />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Get In Touch</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
