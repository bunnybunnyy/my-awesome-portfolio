import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Your Gmail address
  const yourEmail = 'hanifumar169@gmail.com'; // Replace with your actual Gmail

  // Encode the subject and body for URL
  const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
  const body = encodeURIComponent(
    `New Contact Form Submission:\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Message: ${formData.message}\n\n` +
    `---\n` +
    `This message was sent from your portfolio contact form.`
  );

  // Create mailto link
  const mailtoUrl = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

  // Open email client
  window.location.href = mailtoUrl;

  // Show toast notification
  toast({
    title: "Opening email client...",
    description: "Please send the email to complete your message.",
  });

  // Reset form
  setFormData({ name: "", email: "", message: "" });
};

  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">
            &lt;contact&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:alex@example.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    alex@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-sm text-primary mt-2 font-mono">— Peter Drucker</p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
