import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [counts, setCounts] = useState<string[]>(["0", "0", "0"]);
  
  const glowRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const updateGlowPosition = () => {
      // Smooth interpolation using lerp function
      const lerp = (start: number, end: number, factor: number) => {
        return start * (1 - factor) + end * factor;
      };
      
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      
      setMousePosition({
        x: currentX,
        y: currentY
      });
      
      requestAnimationFrame(updateGlowPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Infinite scroll effect for services with pause on hover
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 2.5;
    let animationId: number;

    const scroll = () => {
      // Only scroll if not hovered
      if (!isHovered) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Counter animation effect
  useEffect(() => {
    const targetValues = [150, 50, 4];
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts = targetValues.map((target) => {
        const currentValue = Math.floor(target * easeOutQuart);
        
        if (target === 150 && currentValue === 150) return "150+";
        if (target === 50 && currentValue === 50) return "50+";
        return currentValue.toString();
      });
      
      setCounts(newCounts);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after page loads
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Smoother Cursor Glow Effect - Dark Blue */}
      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-50 mix-blend-screen transition-transform duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(215, 215, 26, 0.25) 0%, rgba(252, 235, 7, 0.12) 40%, transparent 75%)',
          borderRadius: '100%',
          filter: 'blur(65px)',
          opacity: 0.7,
          willChange: 'transform',
        }}
      />
      
      {/* Inner Dark Blue Glow */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(210, 223, 30, 0.4) 0%, rgba(28, 177, 55, 0.2) 60%, transparent 90%)',
          borderRadius: '100%',
          filter: 'blur(25px)',
          opacity: 0.8,
          willChange: 'transform',
        }}
      />
      
      {/* Small Center Spot */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(9, 59, 121, 0.6) 20%, rgba(9, 59, 121, 0.3) 90%, transparent 80%)',
          borderRadius: '90%',
          filter: 'blur(10px)',
          opacity: 2.0,
        }}
      />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
        {/* Modern animated gradient mesh background */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(at 0% 0%, rgba(79, 209, 197, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%)
              `,
            }}
          />
        </div>

       
        
        <div className="container relative z-10 px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Modern status badge with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full bg-card/50 backdrop-blur-md border border-primary/20 shadow-lg"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(79,209,197,0.8)]"
              />
              <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </motion.div>

            {/* Enhanced main heading with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-8xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block">Hi, I'm</span>
              <motion.span
                className="text-gradient block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Muhammad Umar
              </motion.span>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Full-stack developer crafting{" "}
              <span className="text-foreground font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                elegant digital experiences
              </span>{" "}
              with clean code and modern design
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
            >
              <Button 
                variant="hero" 
                size="xl" 
                asChild
                className="group relative overflow-hidden"
              >
                <a href="#projects" className="relative z-10">
                  View My Work
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                asChild
                className="group relative overflow-hidden backdrop-blur-sm"
              >
                <a href="#contact" className="relative z-10">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Enhanced social links with glassmorphism */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center gap-5"
            >
              {[
                { href: "https://github.com/bunnybunnyy", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/muhammadumar16/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:hanifumar169@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-muted-foreground group cursor-pointer"
            >
              <span className="text-xs font-mono tracking-wider uppercase">scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              >
                <ArrowDown className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;