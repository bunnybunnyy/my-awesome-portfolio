import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Cloud, 
  Search, 
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks. Responsive, fast, and scalable solutions tailored to your needs.",
    features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native performance and exceptional user experiences.",
    features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Touch Interactions"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. From wireframes to pixel-perfect implementations.",
    features: ["Figma Design", "User Research", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies to keep your applications running smoothly.",
    features: ["AWS Services", "CI/CD Pipelines", "Server Management", "Database Optimization"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Transform your brand with stunning visual designs that capture attention and communicate your message effectively.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Optimize your applications for speed and efficiency. Every millisecond counts.",
    features: ["Code Optimization", "Bundle Size Reduction", "Caching Strategies", "Load Time Analysis"],
    color: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
            <span className="font-mono text-primary text-sm">What I Offer</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 blur-xl" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300`}
                >
                  <service.icon className="h-8 w-8 text-primary" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

