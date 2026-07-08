import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiUser, HiDocumentText, HiCheck, HiExclamation } from "react-icons/hi";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(data.message || "Failed to send.");
      }
    } catch {
      setError("Failed to send. Try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
          Name
        </label>
        <div className="relative">
          <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-dark-muted" size={16} />
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
          Email
        </label>
        <div className="relative">
          <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-dark-muted" size={16} />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
          Message
        </label>
        <div className="relative">
          <HiDocumentText className="absolute left-3 top-3 text-text-muted dark:text-text-dark-muted" size={16} />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
          <HiExclamation size={16} />
          <span>{error}</span>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : sent ? (
          <span className="flex items-center gap-2">
            <HiCheck size={18} />
            Message Sent!
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
}
