import { ExternalLink, Github, Code, Database, Brain, Globe, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeVisualization } from "./ThreeVisualizations";

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
      demoLink: "#",
      githubLink: "https://github.com/Arnav-Bhardwaj1/TaskFlow"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack Development": return "bg-primary/10 text-primary border-primary/20";
      case "Full-Stack & AI": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Full-Stack, AI and ML": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Full-Stack & ML": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Full-Stack & 3D": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my technical projects spanning full-stack development, machine learning, 
            mobile applications, and open-source contributions.
          </p>
          
          {/* 3D Code Visualization */}
          <div className="max-w-2xl mx-auto">
            <CodeVisualization />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-elegant hover-lift flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="mt-auto flex gap-2">
                  {project.demoLink && project.demoLink !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
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
                      variant="outline" 
                      className="flex-1"
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
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      <Github className="w-3 h-3 mr-1" />
                      Private
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};