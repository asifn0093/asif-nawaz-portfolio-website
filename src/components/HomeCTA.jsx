import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HomeCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark p-10 sm:p-16 shadow-sm"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Let&apos;s Work <span className="text-primary">Together</span>
        </h2>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted max-w-xl mx-auto">
          Have a project in mind or just want to say hello? I&apos;d love to hear
          from you. Let&apos;s build something great.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Start a Conversation
          <HiArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
