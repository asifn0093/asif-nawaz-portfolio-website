import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="mt-3 text-lg text-text-muted dark:text-text-dark-muted max-w-2xl mx-auto">
          A selection of recent projects I&apos;ve built with modern web technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          View All Projects
          <HiArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
