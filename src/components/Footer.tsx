import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold font-mono">
            <span className="text-primary">&lt;</span>
            AC
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary" /> by Alex Chen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
