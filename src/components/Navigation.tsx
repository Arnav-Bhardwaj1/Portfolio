import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-gradient-to-r from-slate-900/98 via-blue-950/98 to-slate-900/98 backdrop-blur-xl border-b border-blue-400/40 shadow-2xl shadow-blue-500/20" 
        : "bg-gradient-to-r from-slate-900/80 via-blue-950/80 to-slate-900/80 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 hover:from-blue-300 hover:via-blue-500 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105"
          >
            Arnav Bhardwaj
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-gray-200 hover:text-blue-400 transition-all duration-300 font-medium relative group text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-200 hover:text-blue-400 hover:bg-blue-500/20 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-blue-400/30 bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-slate-900/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="text-gray-200 hover:text-blue-400 transition-all duration-300 text-left font-medium py-2 text-base"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm" 
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};