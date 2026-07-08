import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-text hover:bg-primary hover:text-white transition-colors"
            aria-label="View live project"
          >
            <HiExternalLink size={20} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-text hover:bg-primary hover:text-white transition-colors"
            aria-label="View source code"
          >
            <HiCode size={20} />
          </a>
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {project.category.replace("-", " ")}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-text dark:text-text-dark">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted dark:text-text-dark-muted line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-text-muted dark:text-text-dark-muted rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
