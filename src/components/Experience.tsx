import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Front-End Developer",
    company: "Techexa Digital Services",
    location: "NASTP, Rawalpindi",
    period: "2025 - Present",
    description: "Building scalable web applications using modern technologies. Specializing in React, Node.js, and cloud infrastructure.",
    achievements: [
      "Developed 5+ web applications",
      "Improved client satisfaction by 95%",
      "Reduced load times by 60%",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "Freelancing",
    location: "Rawalpindi, Pakistan",
    period: "2023 - 2025",
    description: "Created responsive and interactive user interfaces. Collaborated with design teams to implement pixel-perfect designs.",
    achievements: [
      "Built 6+ responsive websites",
      "Increased user engagement by 40%",
      "Optimized performance metrics",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Web Developer Intern",
    company: "Startup Hub",
    location: "Remote",
    period: "2023 - 2023",
    description: "Learned industry best practices and contributed to real-world projects. Gained experience in agile development methodologies.",
    achievements: [
      "Completed 10+ projects",
      "Learned modern frameworks",
      "Contributed to team projects",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Git"],
  },
  {
    title: "UI/UX Designer & Graphic Designer",
    company: "Techexa Digital",
    location: "NASTP Rawalpindi",
    period: "2023 - 2025",
    description: "Designed intuitive user interfaces and engaging user experiences for digital products. Created wireframes, prototypes, and visual designs that improved user engagement and satisfaction.",
    achievements: [
      "Designed 15+ modern user interfaces for web and mobile apps",
      "Improved user engagement by 45% through UX enhancements",
      "Created design systems and component libraries for consistent branding",
      "Conducted user research and usability testing for 8+ projects",
    ],
    tech: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
  {
    title: "Graphic Designing",
    company: "English Shoes",
    location: "Saddar Rawalpindi",
    period: "2023 - present",
    description: "Mastered design principles and created compelling visual content. Contributed to branding projects and digital campaigns for various clients.",
    achievements: [
      "Designed 50+ marketing materials",
      "Improved brand consistency across platforms",
      "Reduced design turnaround time by 35%",
    ],
    tech: ["Adobe Photoshop", "Illustrator", "Figma", "Canva"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6"
          >
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="font-mono text-primary text-sm">Work Experience</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career progression and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                  
                  {/* Content card */}
                  <div className={`flex-1 ml-10 md:ml-0 md:max-w-[calc(50%-1.5rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 "
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Code2 className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-mono text-primary">{exp.period}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-secondary/50 border border-border/50 text-xs font-mono text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

