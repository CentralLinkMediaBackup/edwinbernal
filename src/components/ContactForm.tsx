import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "personal" as "personal" | "business"
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "", type: "personal" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="glass-card p-8 max-w-2xl mx-auto"
    >
      <h3 className="font-display text-2xl font-bold mb-6 text-center">
        Send a <span className="text-gradient-blue">Message</span>
      </h3>

      {/* Inquiry Type */}
      <div className="mb-6">
        <Label className="text-foreground mb-3 block">Inquiry Type</Label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: "personal" }))}
            className={`flex-1 py-3 px-4 rounded-xl border transition-all ${
              formData.type === "personal"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            Personal
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: "business" }))}
            className={`flex-1 py-3 px-4 rounded-xl border transition-all ${
              formData.type === "business"
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border text-muted-foreground hover:border-secondary/50"
            }`}
          >
            Business / Entrepreneur
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="name" className="text-foreground mb-2 block">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your name"
            required
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground mb-2 block">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
            required
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="subject" className="text-foreground mb-2 block">Subject</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          placeholder="What is this regarding?"
          required
          className="bg-background/50 border-border focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="text-foreground mb-2 block">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Your message..."
          rows={5}
          required
          className="bg-background/50 border-border focus:border-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading || isSuccess}
        className="w-full bg-gradient-to-r from-primary to-electric-glow text-primary-foreground hover:opacity-90 py-6"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            Sent!
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        {formData.type === "personal" 
          ? "Personal inquiries → EdwinBernal2026@gmail.com"
          : "Business inquiries → e.bernal@centrallinkmedia.com"
        }
      </p>
    </motion.form>
  );
};

export default ContactForm;
