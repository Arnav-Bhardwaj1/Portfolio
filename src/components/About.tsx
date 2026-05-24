import { GraduationCap, Trophy, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "./aceternity/GridBackground";
import { InfiniteMovingCards } from "./aceternity/InfiniteMovingCards";
import { ConcentricCircles } from "./aceternity/ConcentricCircles";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Perfect Academic Record - Rank 1",
      description: "10.0 GPA in 3rd & 5th Semesters | Overall CGPA: 9.81 | Rank 1 across all branches",
    },
    {
      icon: Code,
      title: "DSA (Data Structures and Algorithms)",
      description: "Solved 1100+ DSA problems across platforms; achieved Knight (1850+) rating on LeetCode",
    },
    {
      icon: Trophy,
      title: "Hackathon Achievements",
      description: "9th Rank at Hack Energy 2.0 (400+ teams) & Top 10 at Technov8 and Logic Rush",
    },
    {
      icon: Users,
      title: "Leadership & Internship Experience",
      description: "ML Intern @DRDO & Full Stack Developer @Cogzin | Core Team @TechCom | Organized HackwithMAIT 5.0",
    },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "C", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "MongoDB", "REST APIs"]
    },
    {
      title: "Core CS Subjects",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networking", "Operating Systems"]
    },
    {
      title: "Machine Learning and Gen AI",
      skills: ["Machine Learning", "Deep Learning", "Generative AI (RAG, LLM Agents, Agentic AI)"]
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
      {/* Clean Background */}
      <div className="absolute inset-0 bg-[#0d151d] z-0" />
      <div className="absolute inset-0 z-0">
        <ConcentricCircles />
      </div>
      <GridBackground className="absolute inset-0 opacity-20 z-0" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">Me</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            AI Engineer & Software Developer focused on building scalable products, intelligent systems, <br /> and impactful solutions that create real-world value.
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
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I’m an AI Engineer & Software Developer focused on building scalable, intelligent systems. I value consistency, continuous learning, and disciplined execution, reflected in my 9.81 GPA, solving 1100+ DSA problems, and achieving the Knight rating on LeetCode.
              </p>
              <p>
                Recently, I worked as a Machine Learning Intern at DRDO, where I developed a production-grade RAG pipeline for defense analytics. I also interned as a Full-Stack Developer at Cogzin Technologies, contributing to an AI-enabled venture capital platform connecting investors and founders.
              </p>
              <p>
                My experience spans Software Development, Machine Learning, Deep Learning, Generative AI, RAG systems, Agentic AI, and workflow automation.
              </p>
              <p>
                Beyond engineering, I actively participate in hackathons and technical communities. I enjoy building AI-powered products, exploring new technologies, and solving real-world problems through software.
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
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Key Highlights</h3>
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
          <div className="text-center mb-10 relative">
            {/* Subtle glow backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[80px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-4xl md:text-5xl font-bold relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                Technical Skills
              </span>
              {/* Decorative animated underline */}
              <motion.div
                className="h-[3px] mt-2 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>

          </div>

          {/* Infinite Moving Skills Cards */}
          <div className="mb-12 relative z-20">
            <InfiniteMovingCards
              items={[
                {
                  quote: "Building scalable web applications with React.js, Next.js, TypeScript, and Node.js. Experienced in full-stack development with MongoDB, Express.js, and FastAPI.",
                  name: "Full-Stack Development",
                  title: "React • Next.js • TypeScript • Node • Express • FastAPI • MongoDB"
                },
                {
                  quote: "Developing intelligent systems using Machine Learning, Deep Learning, and Generative AI. Specialized in RAG pipelines, Transformers, and building AI-powered solutions.",
                  name: "AI & Machine Learning",
                  title: "ML • DL • Gen AI • RAG • Hugging Face"
                },
                {
                  quote: "Strong foundation in Data Structures and Algorithms with 1100+ problems solved. Achieved 1850+ rating on LeetCode with expertise in optimization techniques.",
                  name: "Problem Solving",
                  title: "DSA • Algorithms • Competitive Programming"
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
              speed="normal"
              pauseOnHover={true}
              className="[--animation-duration:40s]"
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
                className={`glass-effect rounded-2xl text-center hover-lift p-1.5 ${index === 0 || index === 1 ? 'pt-[52px]' : 'pt-4'}`}
              >
                <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-4 flex flex-col gap-3">
                  <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">{category.title}</h4>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-xs bg-black/30 border border-white/20 text-gray-100 hover:bg-orange-500/20 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};