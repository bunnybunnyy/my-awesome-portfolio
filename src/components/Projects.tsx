import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Code Editor (Quick code)",
    description: "A real-time code editor enabling live collaboration, instant updates, syntax highlighting, and seamless team workflows.",
    tech: ["React.js", "Node.js", "Express", "WebRtc", "Socket.io"],
    github: "https://github.com/bunnybunnyy/Quick-Code",
    live: "https://quickcodefy.netlify.app/",
    featured: true,
  },
  {
    title: "Web Spark Builder",
    description: "WebSparkBuilder is a website builder platform that enables users to create, customize, and publish websites using ready-made templates and an intuitive drag-and-drop interface.",
    tech: ["React.js", "Laravel", "PHP", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com",
    live: "https://websparkbuilders.com/",
    featured: true,
  },
  {
    title: "Solar System",
    description: "An interactive solar calculator allowing users to choose solar panels, quantity, providers, and accessories to determine prices and plan their solar system efficiently.",
    tech: ["React.js", "API Integration", "Tailwind CSS", "Django", "MySQL"],
    github: "https://github.com/bunnybunnyy/Solar-System.git",
    live: "https://solarsystemcalc.vercel.app/",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "My Portfolio",
    description: "A modern portfolio platform designed to highlight projects, skills, and achievements in a clean, professional layout.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/bunnybunnyy/my-awesome-portfolio",
    live: "https://muhammad-umar-developer.vercel.app/",
    featured: true,
  },
  {
    title: "Physiotherapist Website",
    description: "A comprehensive physiotherapy service providing tailored treatment plans, session monitoring, and patient care management.",
    tech: ["React", "WebSocket"],
    github: "https://github.com/bunnybunnyy/Physiotherapist.git",
  },
  {
    title: "Washing Machine Repair",
    description: "Expert washing machine repair and maintenance services, ensuring efficient and long-lasting appliance performance.",
    tech: ["React.js", "APIs"],
    github: "https://github.com/bunnybunnyy/automatic.git",
    live: "https://friendstraders.netlify.app/",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-mono text-primary text-sm">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Enhanced Featured projects */}
        <div className="grid gap-8 mb-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 blur-2xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Folder className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-3xl text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-xl hover:bg-primary/10 hover:text-primary" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                      </a>
                    </Button>
                  </motion.div>
                  {project.live && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-12 h-12 rounded-xl hover:bg-primary/10 hover:text-primary" 
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-2">Other Noteworthy Projects</h3>
          <p className="text-muted-foreground">Additional projects and experiments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Folder className="h-8 w-8 text-primary" />
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-lg bg-secondary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
