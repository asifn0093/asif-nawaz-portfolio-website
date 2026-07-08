import { motion } from "framer-motion";

export default function SkillIcon({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark hover:shadow-md hover:border-primary/30 transition-all group"
    >
      <div
        className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      <span className="text-xs font-medium text-text dark:text-text-dark text-center">
        {name}
      </span>
    </motion.div>
  );
}
