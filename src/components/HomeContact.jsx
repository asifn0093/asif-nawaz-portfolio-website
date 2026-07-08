import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const contactInfo = [
  { icon: HiMail, label: "Email", value: "asifn0093@gmail.com", href: "mailto:asifn0093@gmail.com" },
  { icon: HiLocationMarker, label: "Location", value: "Sahiwal, Lahore" },
  { icon: HiPhone, label: "WhatsApp", value: "+92 335 3397964", href: "https://wa.me/923353397964" },
];

export default function HomeContact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark">
          Let's Work <span className="text-primary">Together</span>
        </h2>
        <p className="mt-4 text-lg text-text-muted dark:text-text-dark-muted max-w-xl mx-auto">
          Have a project in mind? Reach out and let's discuss how I can help bring your ideas to life.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {contactInfo.map((info) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <info.icon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-text dark:text-text-dark">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-text-muted dark:text-text-dark-muted hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-text-muted dark:text-text-dark-muted">
                    {info.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
