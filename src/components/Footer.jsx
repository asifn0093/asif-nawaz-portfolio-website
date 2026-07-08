import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/asifn0093" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/asifn0093" },
  { icon: HiMail, label: "Email", href: "mailto:asifn0093@gmail.com" },
];

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Certificates", path: "/certificates" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "FAQs", path: "/faqs" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-surface-alt dark:bg-surface-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary">
              Asif Nawaz
            </Link>
            <p className="mt-2 text-sm text-text-muted dark:text-text-dark-muted max-w-xs">
              Frontend React Developer building modern web applications with clean code and great user experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text dark:text-text-dark uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-muted dark:text-text-dark-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text dark:text-text-dark uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                Download Resume
              </a>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-text-muted dark:text-text-dark-muted hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-text-muted dark:text-text-dark-muted">
            &copy; {year} Asif Nawaz. All rights reserved. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
