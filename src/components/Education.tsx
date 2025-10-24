import { GraduationCap, Trophy, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const education = {
    institution: "Maharaja Agrasen Institute Of Technology",
    degree: "Bachelor of Technology - BTech, Computer Science Engineering",
    duration: "Sept 2023 - Aug 2027",
    location: "New Delhi, India",
    cgpa: "9.76",
    perfectGPA: "Perfect 10.0 GPA in 3rd Semester",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networking",
      "Operating Systems"
    ]
  };

  const certifications = [
    {
      title: "Generative AI Professional - Oracle Cloud (OCI)",
      issuer: "Oracle",
      category: "Gen AI and RAG",
    },
    {
      title: "AI Essentials Certification",
      issuer: "Google",
      category: "AI/ML",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft",
      category: "AI/ML",
    },
    {
      title: "Cloud Skills Challenge on Azure Fundamentals and Cloud Computing",
      issuer: "Microsoft Learn Student Ambassador",
      category: "Cloud",
    },
    {
      title: "Developing Soft Skills and Personality",
      issuer: "IIT Kanpur (NPTEL Elite+Gold)",
      category: "Professional",
    },
    {
      title: "1st Rank in Central Delhi District - VVM",
      issuer: "Vidyarthi Vigyan Manthan",
      category: "Achievement",
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Top 10 Finalist - TECHNOV8 Hackathon",
      description: "Ranked Top 10 out of 192 teams",
      detail: "FinTech Innovation track - Built AI-powered finance manager"
    },
    {
      icon: Award,
      title: "Perfect Academic Performance",
      description: "10.0 GPA in 3rd Semester",
      detail: "Current CGPA: 9.76 | CBSE: 10th - 97.8%, 12th - 95.2%"
    },
    {
      icon: BookOpen,
      title: "1st Rank in Central Delhi District",
      description: "Vidyarthi Vigyan Manthan (VVM)",
      detail: "Secured top position in science competition"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-primary/10 text-primary border-primary/20";
      case "Gen AI and RAG": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Cloud": return "bg-accent/10 text-accent border-accent/20";
      case "Professional": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Achievement": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey, certifications, and achievements that demonstrate 
            my commitment to continuous learning and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="card-elegant hover-lift">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <p className="text-muted-foreground">{education.institution}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{education.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">{education.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current CGPA</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">
                    {education.cgpa}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">3rd Semester</span>
                  <Badge className="bg-accent/10 text-accent border-accent/20 font-bold">
                    {education.perfectGPA}
                  </Badge>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Key Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-elegant hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-primary mb-1">{achievement.description}</p>
                      <p className="text-sm text-muted-foreground">{achievement.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-elegant hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};