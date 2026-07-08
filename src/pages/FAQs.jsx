import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { faqs } from "../data/faqs";

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-surface dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-sm font-medium text-text dark:text-text-dark pr-4">
          {faq.question}
        </span>
        <HiChevronDown
          size={18}
          className={`shrink-0 text-text-muted dark:text-text-dark-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm text-text-muted dark:text-text-dark-muted leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          FAQs
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted">
          Quick answers to common questions about my services and process.
        </p>
      </motion.div>

      <div className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onClick={() => toggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}
