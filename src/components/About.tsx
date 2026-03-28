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
      description: "Solved 900+ DSA problems across platforms; achieved Knight (1850+) rating on LeetCode",
    },
    {
      icon: Trophy,
      title: "Hackathon Achievement",
      description: "Top 10 Finalist at TECHNOV8 Hackathon (192 teams)",
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
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm currently pursuing my Bachelor of Technology in Computer Science Engineering
                at Maharaja Agrasen Institute of Technology, Delhi, where I've maintained an
                exceptional academic record with a 9.81 CGPA, secured a perfect 10.0 GPA twice (in 3rd and 5th semesters),
                and hold Rank 1 across all branches.
              </p>
              <p>
                I've completed internships at DRDO (Defence Research & Development Organisation) as a Machine Learning Intern,
                working on RAG pipelines using FAISS and Hugging Face Transformers, and developing
                interactive weather analysis systems for 41 Indian Air Force airbases. Most recently, I worked as a
                Full Stack Developer Intern at Cogzin Technologies, building AI-enabled investor-founder matchmaking
                platforms with Pinecone vector search and OpenAI integration.
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
                  quote: "Strong foundation in Data Structures and Algorithms with 900+ problems solved. Achieved 1850+ rating on LeetCode with expertise in optimization techniques.",
                  name: "Problem Solving",
                  title: "DSA • Algorithms • Competitive Programming"
                },
                {
                  quote: "Mastering multiple programming languages including C++, Python, Java, JavaScript, and TypeScript. Building efficient and optimized solutions across different platforms.",
                  name: "Programming Languages",
                  title: "C++ • Python • Java • JavaScript • TypeScript"
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