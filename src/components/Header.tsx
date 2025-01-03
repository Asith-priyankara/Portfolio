import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadButton } from "./ui/DownloadButton";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>
          <nav className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={1000}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </nav>
          <div className="flex items-center space-x-12">
            <ThemeToggle />

            <DownloadButton
              href="https://drive.google.com/uc?id=1WJU5O0Ap57GDFEsTFzg19JeffbRsWiIQ&export=download"
              variant="secondary"
              icon
            >
              Download CV
            </DownloadButton>

            {/* {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:your.email@example.com" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))} */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
