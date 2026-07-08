import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { path: "/", label: "Home", hash: "" },
  { path: "/", label: "About", hash: "#about" },
  { path: "/projects", label: "Projects", hash: "" },
  { path: "/experience", label: "Experience", hash: "" },
  { path: "/blog", label: "Blog", hash: "" },
  { path: "/", label: "Contact", hash: "#contact" },
  { path: "/", label: "FAQs", hash: "#faqs" },
  { path: "/certificates", label: "Certificates", hash: "" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const scrollToSection = (e, link) => {
    if (link.hash && location.pathname === link.path) {
      e.preventDefault();
      const id = link.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path + link.hash}
                onClick={(e) => scrollToSection(e, link)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path && !link.hash
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted dark:text-text-dark-muted hover:text-text dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/public/resume.pdf"
              download
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-text-muted dark:text-text-dark-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted dark:text-text-dark-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-text-muted dark:text-text-dark-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <HiMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-60 bg-surface dark:bg-surface-dark md:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-text-muted dark:text-text-dark-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 px-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path + link.hash}
                  onClick={(e) => {
                    setMobileOpen(false);
                    scrollToSection(e, link);
                  }}
                  className={`w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path && !link.hash
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted dark:text-text-dark-muted hover:text-text dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="w-full text-center px-4 py-3 rounded-lg text-base font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
