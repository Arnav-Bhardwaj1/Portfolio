import { Mail, Phone, Github, Linkedin, Send, Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Arnav-Bhardwaj1"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/-arnavbhardwaj"
    },
    {
      icon: Award,
      label: "LeetCode",
      href: "https://leetcode.com/u/ArnavBhardwaj/"
    }
  ];


  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

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
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-4">
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
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer hover:bg-primary/5 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <social.icon className="w-4 h-4 text-primary" />
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
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formspree.io/f/myznoqkr" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required 
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
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full glow-effect">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-elegant max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};