import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "webapp", label: "Web Apps" },
  { key: "dashboard", label: "Dashboard" },
  { key: "portfolio", label: "Portfolio" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          My Work
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted max-w-2xl">
          A showcase of my recent work across e-commerce, web applications, dashboards, and portfolio sites.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat.key
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-800 text-text-muted dark:text-text-dark-muted hover:text-text dark:hover:text-text-dark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-text-muted dark:text-text-dark-muted">
          No projects found in this category.
        </p>
      )}
    </div>
  );
}
