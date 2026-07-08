import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import SkillIcon from "./SkillIcon";
import { skillCategories } from "../data/skills";
import myself from "../Images/myself.jpeg";

export default function HomeAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={myself}
                alt="Asif Nawaz"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 -right-2 inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary text-white shadow-lg">
              Frontend Developer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
            Passionate About Building{" "}
            <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
            I'm a Frontend Developer with expertise in building responsive, modern web applications,
            e-commerce platforms, and interactive tools. I specialize in crafting clean,
            performant user experiences with HTML, CSS, JavaScript, and React.
          </p>
          <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
            My approach combines technical excellence with a deep understanding of
            business goals, ensuring every project delivers measurable results.
            Whether it's a custom web application, an e-commerce store, or a
            interactive tool, I bring creativity and precision to every project.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Learn More <HiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-text dark:text-text-dark mb-8 text-center"
        >
          Skills &amp; Expertise
        </motion.h3>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-10">
            <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4">
              {category.title}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <SkillIcon key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
