"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json();
        console.error("Contact API failed:", body);
        throw new Error(body.error || "Failed to send message. Please email me directly instead.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 8 seconds
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please email me directly instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-6 sm:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Status Alerts */}
        {status === "success" && (
          <motion.div
            className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-250/20 dark:border-emerald-800/10 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-semibold text-sm">Thank you, Dinesh has received your message!</p>
              <p className="text-xs text-emerald-600/80 dark:text-emerald-450/80 mt-0.5">I will get back to you to discuss details as soon as possible.</p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            className="flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border border-rose-250/20 dark:border-rose-800/10 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AlertCircle className="text-rose-500 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-semibold text-sm">Failed to send message</p>
              <p className="text-xs text-rose-600/80 dark:text-rose-450/80 mt-0.5">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Input Name */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-200 dark:border-slate-800 rounded-xl bg-gray-50/50 dark:bg-slate-950/50 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition disabled:opacity-60"
            placeholder="Dinesh Kumar"
          />
        </div>

        {/* Input Email */}
        <div>
          <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-200 dark:border-slate-800 rounded-xl bg-gray-50/50 dark:bg-slate-950/50 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition disabled:opacity-60"
            placeholder="example@yourdomain.com"
          />
        </div>

        {/* Input Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-2">
            Message
          </label>
          <textarea
            id="form-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 dark:border-slate-800 rounded-xl bg-gray-50/50 dark:bg-slate-950/50 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none disabled:opacity-60"
            placeholder="Hi Dinesh, I would love to collaborate on a new project..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full relative flex items-center justify-center gap-2 bg-primary dark:bg-primary/90 text-white font-semibold py-3.5 rounded-xl hover:bg-primary/95 transition duration-300 disabled:opacity-50 select-none overflow-hidden shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 cursor-pointer active:scale-[0.98]"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span>Transmitting message...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
}
