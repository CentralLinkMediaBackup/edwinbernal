import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-paper-dim rounded-none px-0 py-3 text-paper placeholder:text-paper/30 focus:outline-none focus:border-b-2 focus:border-cobalt transition-colors font-body";

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
    <form onSubmit={handleSubmit}>
      <h3 className="font-display font-light text-3xl tracking-tight mb-8">
        Send a <span className="font-display-italic text-cobalt-soft">Message</span>
      </h3>

      {/* Inquiry Type */}
      <div className="mb-8">
        <p className="eyebrow text-paper/50 mb-4">Inquiry Type</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: "personal" }))}
            className={`px-6 py-2.5 rounded-full border text-sm transition-all duration-300 ${
              formData.type === "personal"
                ? "border-cobalt bg-cobalt text-paper"
                : "border-paper-dim text-paper/60 hover:border-paper/60 hover:text-paper"
            }`}
          >
            Personal
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: "business" }))}
            className={`px-6 py-2.5 rounded-full border text-sm transition-all duration-300 ${
              formData.type === "business"
                ? "border-cobalt bg-cobalt text-paper"
                : "border-paper-dim text-paper/60 hover:border-paper/60 hover:text-paper"
            }`}
          >
            Business / Entrepreneur
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
        <div>
          <label htmlFor="name" className="eyebrow text-paper/50 block mb-1">Name</label>
          <input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your name"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow text-paper/50 block mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="eyebrow text-paper/50 block mb-1">Subject</label>
        <input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          placeholder="What is this regarding?"
          required
          className={fieldClass}
        />
      </div>

      <div className="mb-10">
        <label htmlFor="message" className="eyebrow text-paper/50 block mb-1">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Your message..."
          rows={4}
          required
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="btn-editorial-paper w-full md:w-auto px-10 py-4 disabled:opacity-60 disabled:pointer-events-none"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="h-4 w-4" />
            Sent!
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      <p className="eyebrow text-paper/40 mt-6">
        {formData.type === "personal"
          ? "Personal inquiries → EdwinBernal2026@gmail.com"
          : "Business inquiries → e.bernal@centrallinkmedia.com"
        }
      </p>
    </form>
  );
};

export default ContactForm;
