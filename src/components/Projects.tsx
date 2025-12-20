import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CloudSync Dashboard",
    description: "A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and team collaboration features.",
    tech: ["React", "TypeScript", "GraphQL", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description: "Command-line tool for automating development workflows, including project scaffolding and CI/CD integration.",
    tech: ["Node.js", "TypeScript", "Shell"],
    github: "https://github.com",
    live: null,
    featured: true,
  },
  {
    title: "Artisan Marketplace",
    description: "E-commerce platform connecting artisans with customers, featuring secure payments and real-time inventory.",
    tech: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "API Rate Limiter",
    description: "Redis-based rate limiting middleware for Express applications",
    tech: ["Node.js", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Markdown Editor",
    description: "Real-time collaborative markdown editor with live preview",
    tech: ["React", "WebSocket"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Minimal weather app with location-based forecasts",
    tech: ["React", "OpenWeather API"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">
            &lt;projects&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Folder className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold">Other Noteworthy Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
