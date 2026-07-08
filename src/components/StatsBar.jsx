import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "7+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Technologies", value: "15+" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-primary/5 dark:bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-text-muted dark:text-text-dark-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
