import { GraduationCap, Trophy, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "./aceternity/BorderBeam";
import { GridBackground } from "./aceternity/GridBackground";
import { InfiniteMovingCards } from "./aceternity/InfiniteMovingCards";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Perfect Academic Record",
      description: "10.0 GPA in 3rd Semester, Overall CGPA: 9.76",
    },
    {
      icon: Code,
      title: "DSA (Data Structures and Algorithms)",
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "C", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Core CS Subjects",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networking", "Operating Systems"]
    },
    {
      title: "Machine Learning and Gen AI",
      skills: ["Machine Learning", "RAG Agent (Retrieval-Augmented Generation)"]
    },
    {
      title: "Databases & Mobile",
      skills: ["SQL", "MongoDB", "Flutter App Development"]
    },
    {
      title: "Soft Skills",
      skills: ["Public Speaking", "Team Collaboration", "Communication Skills"]
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <GridBackground className="absolute inset-0 opacity-10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Me</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            A passionate computer science student with a strong foundation in full-stack development, machine learning and DSA, dedicated to creating impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
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
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Key Highlights</h3>
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-effect hover-lift relative overflow-hidden">
                    <BorderBeam 
                      size={150}
                      duration={12}
                      colorFrom="#3b82f6"
                      colorTo="#8b5cf6"
                      delay={index * 0.4}
                    />
                    <CardContent className="p-6">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Technical Skills</h3>
          
          {/* Infinite Moving Skills Cards */}
          <div className="mb-12">
            <InfiniteMovingCards
              items={[
                {
                  quote: "Building scalable web applications with React.js, Node.js, and modern JavaScript frameworks. Experienced in full-stack development with MongoDB and Express.js.",
                  name: "Full-Stack Development",
                  title: "React • Node • Express • MongoDB"
                },
                {
                  quote: "Developing intelligent systems using Machine Learning and Generative AI. Specialized in RAG pipelines, Transformers, and building AI-powered solutions.",
                  name: "AI & Machine Learning",
                  title: "ML • Gen AI • RAG • Hugging Face"
                },
                {
                  quote: "Strong foundation in Data Structures and Algorithms with 500+ problems solved. Achieved 1650+ rating on LeetCode with expertise in optimization techniques.",
                  name: "Problem Solving",
                  title: "DSA • Algorithms • Competitive Programming"
                },
                {
                  quote: "Mastering multiple programming languages including C++, Python, Java, and JavaScript. Building efficient and optimized solutions across different platforms.",
                  name: "Programming Languages",
                  title: "C++ • Python • Java • JavaScript"
                },
                {
                  quote: "Creating cross-platform mobile applications with Flutter. Designing intuitive user interfaces and seamless user experiences for iOS and Android.",
                  name: "Mobile Development",
                  title: "Flutter • Dart • Mobile UI/UX"
                },
                {
                  quote: "Working with various database systems including SQL and NoSQL databases. Experienced in database design, optimization, and data management.",
                  name: "Database Management",
                  title: "SQL • MongoDB • Database Design"
                },
                {
                  quote: "Deep understanding of core Computer Science concepts including Operating Systems, Computer Networks, and Software Engineering principles.",
                  name: "Core CS Fundamentals",
                  title: "OS • Networks • Software Engineering"
                },
                {
                  quote: "Collaborating effectively in teams, leading technical initiatives, and organizing large-scale tech events. Strong communication and leadership skills.",
                  name: "Leadership & Teamwork",
                  title: "Team Collaboration • Event Organization"
                }
              ]}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="[--animation-duration:80s]"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-effect rounded-xl text-center hover-lift ${index === 0 || index === 1 ? 'pt-[50px] pb-4 px-4' : 'p-4'}`}
              >
                <h4 className="font-semibold text-primary mb-3">{category.title}</h4>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};