import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Shield, Layers } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Bridging the gap between design and development seamlessly",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed without compromising user experience",
    },
     {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating technical concepts clearly",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Implementing robust security practices to protect user data",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Expertise across frontend, backend, and infrastructure layers",
  },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">
            &lt;about&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning Ideas Into{" "}
            <span className="text-gradient">Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 3 years of experience in software development, I specialize in 
            building full-stack applications that are both beautiful and functional. 
            I'm passionate about creating seamless user experiences and writing code 
            that makes a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
