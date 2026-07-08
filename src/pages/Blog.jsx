import { motion } from "framer-motion";
import { blogPosts } from "../data/blog";
import { HiCalendar, HiClock } from "react-icons/hi";

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          Blog
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Latest <span className="text-primary">Articles</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted max-w-2xl">
          Thoughts on web development, e-commerce, Shopify, and digital marketing.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-text dark:text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted dark:text-text-dark-muted line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-text-muted dark:text-text-dark-muted">
                <span className="flex items-center gap-1">
                  <HiCalendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <HiClock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
