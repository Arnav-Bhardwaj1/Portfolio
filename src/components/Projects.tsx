import React from "react";
import { ExternalLink, Github, Code, Database, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "./aceternity/GridBackground";
import { BlurFade } from "./aceternity/BlurFade";
import { ConcentricCircles } from "./aceternity/ConcentricCircles";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "CogniFlow — Workflow Automation Platform",
      description: "A powerful workflow automation platform to orchestrate background tasks via a visual node editor. Features an AI generator that instantly converts natural language into executable workflows.",
      category: "Full-Stack & SaaS",
      technologies: ["Next.js", "Prisma", "Inngest", "tRPC", "Better Auth", "Razorpay"],
      features: [
        "Engineered a workflow automation platform with a node-based visual editor",
        "Integrated multi-trigger support for webhooks, Google Forms, and Razorpay",
        "Orchestrated event-driven background tasks and AI nodes using Inngest",
        "Implemented secure authentication, paywalls, and usage-based billing",
        "Built an AI Workflow Generator to convert natural language into canvas drafts",
        "Architected a fully type-safe backend using tRPC, Prisma, and Neon Postgres"
      ],
      icon: Code,
      imageUrl: "/cogniflow.png",
      demoLink: "https://thecogniflow.in",
      githubLink: "https://github.com/Arnav-Bhardwaj1/CogniFlow"
    },
    {
      title: "Perceptron — B2B AI Support Platform",
      description: "An enterprise-grade AI support platform featuring an embeddable chat and voice widget. Empowers teams with a real-time operator dashboard and secure RAG-powered workflows for seamless interactions.",
      category: "Full-Stack & AI",
      technologies: ["Next.js", "Convex", "Clerk", "OpenAI", "VAPI", "Turborepo"],
      features: [
        "Built a multi-tenant AI support platform with an embeddable chat widget",
        "Engineered persistent sessions supporting voice calls and intelligent escalation",
        "Developed a real-time operator dashboard for triage and custom response monitoring",
        "Implemented a cross-origin iframe widget with secure postMessage origin validation",
        "Orchestrated RAG-powered workflows with real-time data sync using Convex",
        "Integrated Sentry, Clerk authentication, and webhook-driven usage-based billing"
      ],
      icon: Brain,
      imageUrl: "/perceptron.png",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/Perceptron"
    },
    {
      title: "FarmSphere — Multi-Agent AI Farming Platform",
      description: "An intelligent farming platform powered by EfficientNet ML models and Agentic AI orchestration. Delivers real-time crop diagnostics, farming insights, and personalized guidance via a voice-enabled app.",
      category: "Full-Stack, AI and ML",
      technologies: ["Flutter", "Generative AI", "SQLite", "REST APIs", "Riverpod", "Voice I/O"],
      features: [
        "Built an ML-powered crop health monitoring system using EfficientNet",
        "Implemented transfer learning for image-based disease detection and diagnostics",
        "Developed an Agentic AI system with specialized agents for Weather and Crop Health",
        "Orchestrated multi-agent workflows using LLMs for context-aware decision-making",
        "Engineered local caching and location-based insights using Riverpod",
        "Integrated multilingual voice support and a personalized AI Advisory Assistant"
      ],
      icon: Brain,
      imageUrl: "/fa.png",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/FarmSphere"
    },

    {
      title: "AstroGuard: Earth's Sentinel",
      description: "Interactive asteroid impact visualization tool that simulates asteroid impacts and tests deflection strategies using real NASA data. Features 3D trajectory visualization, impact calculations, and educational planetary defense insights.",
      category: "Full-Stack & 3D",
      technologies: ["Python", "Flask", "React", "TypeScript", "Three.js", "Leaflet", "Tailwind CSS", "NASA API"],
      features: [
        "Integrated live NASA Sentry API data to track real-time near-Earth asteroid trajectories",
        "Engineered immersive 3D orbital visualizations using Three.js for planetary defense modeling",
        "Simulated impact physics to calculate kinetic energy, crater dimensions, and tsunami risks",
        "Implemented orbital mechanics algorithms to simulate kinetic impactor deflection missions",
        "Built a responsive dashboard with geospatial impact mapping using Leaflet and Tailwind CSS",
        "Designed a scalable Flask backend to process datasets and serve real-time physics calculations",
      ],
      icon: Globe,
      imageUrl: "/astro.png",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/AstroGuard"
    }
  ];

  // Updated with higher opacity (25% to 30%) and solid borders for readability
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack Development": return "bg-primary/30 text-primary border-primary/40 backdrop-blur-md";
      case "Full-Stack & AI": return "bg-blue-500/30 text-blue-300 border-blue-500/40 backdrop-blur-md";
      case "Full-Stack, AI and ML": return "bg-orange-600/30 text-orange-300 border-orange-500/40 backdrop-blur-md";
      case "Full-Stack & ML": return "bg-green-500/30 text-green-300 border-green-500/40 backdrop-blur-md";
      case "Full-Stack & 3D": return "bg-purple-400/40 text-purple-900 border-purple-500/50 backdrop-blur-md font-bold";
      case "Full-Stack & SaaS": return "bg-cyan-500/30 text-cyan-300 border-cyan-500/40 backdrop-blur-md";
      default: return "bg-muted/30 text-muted-foreground border-muted/40 backdrop-blur-md";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLastItem = index === projects.length - 1;
            const isOddCount = projects.length % 2 !== 0;

            return (
              <BlurFade
                key={index}
                delay={index * 0.1}
                direction="up"
                className={isOddCount && isLastItem ? "md:col-span-2 flex justify-center" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`h-full w-full ${isOddCount && isLastItem ? "md:max-w-3xl" : ""}`}
                >
                  <Card className="glass-effect hover-lift h-full flex flex-col border-white/20 border-2 overflow-hidden group">
                    <div className="relative w-full h-56 overflow-hidden">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d151d] via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(project.category)} px-3 py-1 font-medium`}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-md border border-white/10">
                            <project.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl text-white drop-shadow-md">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <p className={`text-sm md:text-base text-muted-foreground leading-relaxed ${isOddCount && isLastItem ? "" : "line-clamp-4"}`}>
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-3 text-white/90">Key Features:</h4>
                        <ul className={`space-y-2 ${isOddCount && isLastItem ? "md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0" : ""}`}>
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/10 text-white/90 text-xs border-white/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        {project.demoLink && project.demoLink !== "#" && (
                          <Button
                            className="flex-1 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-black font-bold border border-orange-300/60 shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60 transition-all duration-300"
                            asChild
                          >
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span className="text-sm">Live Demo</span>
                            </a>
                          </Button>
                        )}
                        {project.githubLink && project.githubLink !== "private" && (
                          <Button
                            className="flex-1 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-600 text-white font-semibold border border-gray-600/50 hover:border-gray-500 shadow-lg shadow-gray-900/50 transition-all duration-300"
                            asChild
                          >
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              <span className="text-sm">Code</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};