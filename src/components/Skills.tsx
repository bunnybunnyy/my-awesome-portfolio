import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "Figma", level: 90 },
  { name: "UI/UX", level: 90},
  { name: "Git", level: 85 }

];

const technologies = [
  "React.js", "Tailwind CSS", "Figma", "Node.Js", "Redux", 
  "MongoDB","mySql", "Express", "Git", "Bootstrap", "UI/UX", "REST APIs","Cursor","Photoshop & Illustrator",
  "WebRtc","Socket.io","Visual studio"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">
            &lt;skills&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Core Expertise</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-card border border-border font-mono text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
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
