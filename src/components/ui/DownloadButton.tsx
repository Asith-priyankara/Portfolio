import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  icon = true 
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg",
    secondary: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
  };

  return (
    <motion.a
      href={href}
      download
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <Download className="w-4 h-4" />}
      {children}
    </motion.a>
  );
};
