import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          Credentials
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Certificates &amp; <span className="text-primary">Achievements</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted max-w-2xl">
          Professional certifications and coursework that showcase my skills and dedication to continuous learning.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-surface dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">&#127891;</span>
              </div>
              <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-text-muted dark:text-text-dark-muted mb-3">
                {cert.issuer}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-text-muted dark:text-text-dark-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={`/certificates/${encodeURIComponent(cert.file)}`}
              download
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <HiDownload size={16} />
              Download PDF
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
