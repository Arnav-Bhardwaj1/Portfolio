import { Mail, Phone, Github, Linkedin, Send, Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BorderBeam } from "./aceternity/BorderBeam";
import { GridBackground } from "./aceternity/GridBackground";
import { MagicButton } from "./aceternity/MagicButton";
import { ConcentricCircles } from "./aceternity/ConcentricCircles";
import { motion } from "framer-motion";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arnavbhardwaj111@gmail.com",
      href: "mailto:arnavbhardwaj111@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8287648717",
      href: "tel:+918287648717"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/-arnavbhardwaj"
    },
    {
      iconUrl: "/leetcode.svg",
      label: "LeetCode",
      href: "https://leetcode.com/u/ArnavBhardwaj/"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Arnav-Bhardwaj1"
    }
  ];


  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-[#0d151d]" />
      <ConcentricCircles />
      <GridBackground className="absolute inset-0 opacity-20" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for a passionate developer, have an exciting project in mind, 
              or want to collaborate on machine learning research, I'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-effect hover-lift relative overflow-hidden">
                    <BorderBeam 
                      size={150}
                      duration={10}
                      colorFrom="#3b82f6"
                      colorTo="#8b5cf6"
                      delay={index * 0.3}
                    />
                    <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{contact.label}</p>
                        {contact.href === "#" ? (
                          <p className="text-muted-foreground">{contact.value}</p>
                        ) : (
                          <a 
                            href={contact.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">My Accounts</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg glass-effect hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer hover:bg-primary/5 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      {social.iconUrl ? (
                        <img src={social.iconUrl} alt={social.label} className="w-4 h-4 object-contain" />
                      ) : (
                        <social.icon className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-semibold text-sm">{social.label}</p>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-2 border-cyan-500/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
              <BorderBeam 
                size={250}
                duration={12}
                colorFrom="#3b82f6"
                colorTo="#ec4899"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              </CardHeader>
            <CardContent>
              <form 
                action="https://formspree.io/f/myznoqkr" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required 
                      className="bg-slate-950/80 border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="bg-slate-950/80 border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="What's this about?" 
                    required 
                    className="bg-slate-950/80 border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Please tell me about your project or opportunity..."
                    rows={6}
                    required 
                    className="bg-slate-950/80 border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/50"
                  />
                </div>
                
                <MagicButton 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 text-white font-bold border border-cyan-400/50 hover:border-cyan-300 shadow-md shadow-cyan-500/15 hover:shadow-cyan-400/25 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </MagicButton>
              </form>
            </CardContent>
          </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="glass-effect max-w-2xl mx-auto relative overflow-hidden">
            <BorderBeam size={300} duration={15} colorFrom="#8b5cf6" colorTo="#ec4899" />
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently open to internship opportunities, research collaborations, 
                and exciting projects in AI/ML and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:arnavbhardwaj111@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://linkedin.com/in/-arnavbhardwaj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};