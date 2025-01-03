import { motion } from "framer-motion";
import { ProfileImage } from "./hero/ProfileImage";
import { SocialLinks } from "./hero/SocialLinks";
import { ScrollIndicator } from "./hero/ScrollIndicator";
import { TechStack } from "./hero/TechStack";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900 dark:via-gray-900 dark:to-blue-900 transition-colors duration-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Software Engineer
            </motion.h2>

            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Asith Priyankara
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Specialized in creating modern web applications with React, Spring
              Boot, and cloud technologies. Let's build something amazing
              together.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium shadow-lg shadow-purple-200 dark:shadow-purple-900/20 hover:shadow-xl hover:scale-105 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button> */}
            </motion.div>

            <SocialLinks />
          </motion.div>

          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative z-10">
              <ProfileImage />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-700 dark:to-blue-700 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          </motion.div>
        </div>

        <motion.div className="mt-12">
          <div className="mt-48">
            <TechStack />
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
