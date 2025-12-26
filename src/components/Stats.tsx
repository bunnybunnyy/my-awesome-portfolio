import { motion } from "framer-motion";
import { Code, Users, Award, Coffee, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered projects",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: "3+",
    label: "Years Experience",
    description: "In software development",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Coffee,
    value: "1000+",
    label: "Cups of Coffee",
    description: "Fueling innovation daily",
    color: "from-green-500 to-emerald-500",
  },
];

const achievements = [
  {
    title: "Performance Optimization",
    description: "Reduced page load times by 60%",
    icon: TrendingUp,
  },
  {
    title: "User Satisfaction",
    description: "Achieved 95% client satisfaction rate",
    icon: Award,
  },
  {
    title: "Code Quality",
    description: "Maintained 90%+ code coverage",
    icon: Code,
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            By The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quantifying impact through measurable achievements
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 blur-xl" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-primary" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-5xl font-extrabold mb-2"
                >
                  <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </motion.div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

