import { motion } from "framer-motion";

export const ProfileImage = () => {
  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
          <motion.img
            src="/images/my-photo.JPG"
            alt="Profile"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20" />
      </div>
    </motion.div>
  );
};
