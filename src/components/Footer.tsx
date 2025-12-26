import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/bunnybunnyy", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammad-umar-b62810255/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:hanifumar169@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/50 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-2xl font-bold font-mono group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary">&lt;</span>
            <span className="text-foreground group-hover:text-primary transition-colors">Muhammad Umar</span>
            <span className="text-primary">/&gt;</span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright and scroll to top */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built<Heart className="h-4 w-4 text-primary fill-primary" /> by Muhammad Umar
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-40 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
