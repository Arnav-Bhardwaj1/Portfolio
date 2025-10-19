import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      company: "DRDO (Defence Research & Development Organisation)",
      position: "Machine Learning Intern",
      duration: "May 2025 - Aug 2025",
      location: "Delhi, India",
      type: "Internship",
      description: [
        "Designed and implemented a RAG pipeline using FAISS, Hugging Face Transformers, and OpenAI to query and summarize unstructured data on Air Force weapons for analytical presentation",
        "Engineered an interactive weather analysis and prediction system for Indian Air Force airbases using Tkinter and geospatial mapping",
        "Assessed mission route feasibility and enhanced operational planning for defense operations"
      ],
      technologies: ["Python", "FAISS", "Hugging Face", "OpenAI", "RAG", "Tkinter", "Geospatial Mapping"]
    },
    {
      company: "TECHNOV8 Hackathon",
      position: "Top 10 Finalist",
      duration: "2025",
      location: "Remote",
      type: "Achievement",
      description: [
        "Ranked Top 10 out of 192 teams in the FinTech Innovation track",
        "Developed an AI-powered personal finance management solution",
        "Competed against top teams in building innovative financial technology solutions",
        "Demonstrated expertise in full-stack development and AI integration"
      ],
      technologies: ["FinTech", "AI", "Full-Stack", "Innovation", "Team Collaboration"]
    },
    {
      company: "TechCom",
      position: "Core Team Member",
      duration: "August 2024 - Present",
      location: "Delhi, India",
      type: "Leadership",
      description: [
        
        "Leading technical initiatives and organizing coding events",
        "Building community engagement and fostering tech culture",
        "Mentoring junior students in programming and development",
        "Coordinating workshops on emerging technologies"
      ],
      technologies: ["Leadership", "Event Management", "Technical Mentoring", "Community Building"]
    },
    {
      company: "IOSD MAIT (International Organisation of Software Developers)",
      position: "Member",
      duration: "October 2023 - Present",
      location: "Delhi, India",
      type: "Organization",
      description: [
        "Active participant in technical discussions and coding competitions",
        "Contributing to open-source projects and collaborative development",
        "Attending workshops on software development and new technologies",
        "Networking with industry professionals and senior developers"
      ],
      technologies: ["Open Source", "Collaboration", "Software Development", "Networking"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-primary/10 text-primary border-primary/20";
      case "Leadership": return "bg-accent/10 text-accent border-accent/20";
      case "Organization": return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      case "Achievement": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through internships, leadership roles, and community contributions 
            that have shaped my technical expertise and professional growth.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elegant hover-lift">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};