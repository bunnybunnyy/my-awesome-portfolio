import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";

const skills = [
  { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", level: 70, color: "from-green-500 to-emerald-500" },
  { name: "Express", level: 70, color: "from-gray-500 to-gray-600" },
  { name: "MongoDB", level: 65, color: "from-green-600 to-green-700" },
  { name: "Figma", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "UI/UX", level: 90, color: "from-pink-500 to-rose-500" },
  { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
];

const technologies = [
  "React.js", "Tailwind CSS", "Figma", "Node.Js", "Redux", 
  "MongoDB", "mySql", "Express", "Git", "Bootstrap", "UI/UX", "REST APIs", "Cursor", 
  "Photoshop & Illustrator", "WebRtc", "Socket.io", "Visual studio", "TypeScript",
  "JavaScript", "HTML5", "CSS3", "PostgreSQL", "Docker", "AWS"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent" />
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
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-mono text-primary text-sm">Skills & Technologies</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Core Expertise</h3>
            </div>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="relative h-3 rounded-full bg-secondary/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Technology tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Technologies & Tools</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group px-4 py-2.5 rounded-xl bg-card border border-border/50 font-mono text-sm hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
