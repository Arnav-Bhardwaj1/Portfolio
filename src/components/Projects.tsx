import { ExternalLink, Github, Code, Database, Brain, Globe, CheckSquare } from "lucide-react";
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
      title: "FarmSphere - AI Driven Smart Farming Web Application",
      description: "Built an ML Crop Health Scanner for instant leaf disease diagnosis and remediation steps. Integrated an AI chatbot for personalized farming advice, real-time weather alerts, and market price aggregation. Features computer vision for crop analysis and intelligent recommendations.",
      category: "Full-Stack, AI and ML",
      technologies: ["React", "Node.js", "TensorFlow.js", "Computer Vision", "AI/ML", "Weather API"],
      features: [
        "ML-powered crop disease detection",
        "AI chatbot for farming guidance",
        "Real-time weather alerts",
        "Computer vision crop analysis"
      ],
      icon: Brain,
      imageUrl: "/fa.png",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/FarmSphere"
    },
    {
      title: "Finova - AI-Powered Personal Finance Manager",
      description: "Developed a full-stack expense management platform with real-time features. Improved data consistency & reliability across dynamic reports. Integrated AI-powered chatbot for personalized financial insights and budget planning.",
      category: "Full-Stack & AI",
      technologies: ["JavaScript", "MongoDB", "Express.js", "React.js", "Node.js", "AI Integration"],
      features: [
        "AI-powered financial insights & budget recommendations",
        "Real-time expense tracking with smart categorization",
        "Interactive charts & comprehensive financial reports",
        "Document upload & automated expense extraction",
        "Secure multi-user authentication system",
        "Advanced filtering & search capabilities"
      ],
      icon: Database,
      imageUrl: "/finova.jpg",
      demoLink: "https://finance1manager.netlify.app/",
      githubLink: "https://github.com/Arnav-Bhardwaj1/FinanceManager"
    },
    {
      title: "AstroGuard: Earth's Sentinel",
      description: "Interactive asteroid impact visualization tool that simulates asteroid impacts and tests deflection strategies using real NASA data. Features 3D trajectory visualization, impact calculations, and educational planetary defense insights.",
      category: "Full-Stack & 3D",
      technologies: ["Python", "Flask", "React", "TypeScript", "Three.js", "Leaflet", "Tailwind CSS", "NASA API"],
      features: [
        "Real NASA Sentry API asteroid data integration",
        "3D trajectory visualization with Three.js",
        "Impact simulation: energy, crater size, tsunami risk",
        "Deflection testing with orbital mechanics"
      ],
      icon: Globe,
      imageUrl: "/astro.png",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/AstroGuard"
    },
    {
      title: "TaskFlow - Task Management Web App",
      description: "TaskFlow helps users organize work with secure sign-in, task creation/editing, powerful filtering and sorting, and priority & deadline tracking. Built with React on the frontend and Node/Express + MongoDB on the backend, it includes analytics to surface actionable insights and supports real-time UI updates for instant feedback.",
      category: "Full-Stack Development",
      technologies: ["React 18", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Framer Motion", "React Query"],
      features: [
        "JWT-based secure authentication system",
        "Advanced task filtering by status, priority & tags",
        "Real-time dashboard with analytics & insights",
        "Priority levels (Urgent, High, Medium, Low)",
        "Due date tracking with deadline alerts",
        "Custom tag system for task organization"
      ],
      icon: CheckSquare,
      imageUrl: "/taskflow.jpg",
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/TaskFlow"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack Development": return "bg-primary/10 text-primary border-primary/20";
      case "Full-Stack & AI": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Full-Stack, AI and ML": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Full-Stack & ML": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Full-Stack & 3D": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical projects spanning full-stack development, machine learning, 
            mobile applications, and open-source contributions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <BlurFade key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="glass-effect hover-lift h-full flex flex-col border-white/20 border-2 overflow-hidden group">
                  {/* Cover Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                          <project.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
            
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="font-semibold text-base mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-sm">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      {project.demoLink && project.demoLink !== "#" && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white font-semibold border border-gray-600/50 hover:border-gray-500 shadow-lg shadow-gray-900/50 hover:shadow-gray-900/70 transition-all duration-300"
                          asChild
                        >
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && project.githubLink !== "private" && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-600 text-white font-semibold border border-gray-600/50 hover:border-gray-500 shadow-lg shadow-gray-900/50 hover:shadow-gray-900/70 transition-all duration-300"
                          asChild
                        >
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.githubLink === "private" && (
                        <Button size="sm" className="flex-1 bg-gray-700/30 text-gray-400 font-semibold border border-gray-600/30 cursor-not-allowed" disabled>
                          <Github className="w-3 h-3 mr-1" />
                          Private
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};