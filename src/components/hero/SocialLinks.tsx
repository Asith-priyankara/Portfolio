import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/Asith-priyankara",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/asith-priyankara-813446265/",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:priyankarawma@gmail.com", label: "Email" },
];

export const SocialLinks = () => {
  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50 flex space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {socialLinks.map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};
