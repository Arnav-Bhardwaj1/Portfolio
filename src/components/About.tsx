import { GraduationCap, Trophy, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Perfect Academic Record",
      description: "10.0 GPA in 3rd Semester, Overall CGPA: 9.76",
    },
    {
      icon: Code,
      title: "Competitive Programming",
      description: "500+ DSA problems solved | 1650+ LeetCode Contest Rating",
    },
    {
      icon: Trophy,
      title: "Hackathon Achievement",
      description: "Top 10 Finalist at TECHNOV8 Hackathon (192 teams)",
    },
    {
      icon: Users,
      title: "Leadership Experience",
      description: "Core Team Member @TechCom, Organized HackwithMAIT 5.0",
    },
  ];

  const skills = [
    "C++", "Python", "C", "Java", "JavaScript", "Data Structures & Algorithms",
    "Flutter App Development", "HTML", "CSS", "React.js", "Node.js", "Express.js",
    "SQL", "MongoDB", "Machine Learning", "Public Speaking", "Team Collaboration"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a strong foundation in machine learning 
            and full-stack development, dedicated to creating impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm currently pursuing my Bachelor of Technology in Computer Science Engineering 
                at Maharaja Agrasen Institute of Technology, Delhi, where I've maintained an 
                exceptional academic record with a 9.76 CGPA and secured a perfect 10.0 GPA in my 3rd semester.
              </p>
              <p>
                As a Machine Learning Intern at DRDO (Defence Research & Development Organisation), 
                I worked on RAG pipelines using FAISS and Hugging Face Transformers, and developed 
                interactive weather analysis systems for Indian Air Force airbases to enhance operational planning.
              </p>
              <p>
                Beyond academics, I'm actively involved in the tech community as a Core Team Member 
                at TechCom, where I helped organize HackwithMAIT 5.0 with 450+ participants. I'm also 
                a member of IOSD MAIT since October 2023.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Highlights</h3>
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};