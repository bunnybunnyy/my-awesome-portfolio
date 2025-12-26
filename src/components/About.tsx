import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Shield, Layers, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Bridging the gap between design and development seamlessly",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed without compromising user experience",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Implementing robust security practices to protect user data",
      gradient: "from-red-500/20 to-rose-500/20",
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "Expertise across frontend, backend, and infrastructure layers",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-mono text-primary text-sm">About Me</span>
          </motion.div>
          
          <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold mb-8 leading-tight">
            Turning Ideas Into{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Reality
            </span>
          </h2>
          
          <p className="text-lx md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With over <span className="text-foreground font-semibold">3 years</span> of experience in software development, I specialize in 
            building full-stack applications that are both <span className="text-primary font-medium">beautiful</span> and <span className="text-primary font-medium">functional</span>. 
            I'm passionate about creating seamless user experiences and writing code 
            that makes a difference.
          </p>
        </motion.div>

        {/* Enhanced grid with modern cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 blur-xl" />
              
              <div className="relative z-10">
                {/* Enhanced icon container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-lg"
                >
                  <item.icon className="h-8 w-8 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
