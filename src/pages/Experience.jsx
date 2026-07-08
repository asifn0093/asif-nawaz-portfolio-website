import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Professional <span className="text-primary">Timeline</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted">
          My journey in tech, from junior developer to senior frontend specialist.
        </p>
      </motion.div>

      <div className="mt-12 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary border-2 border-surface dark:border-surface-dark -translate-x-1/2 z-10" />
              <div className="flex-1 ml-8 md:ml-0">
                <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark hover:shadow-md transition-shadow">
                  <span className="text-xs font-medium text-primary">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-text dark:text-text-dark">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-text-dark-muted">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm text-text-muted dark:text-text-dark-muted">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-text-muted dark:text-text-dark-muted flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
