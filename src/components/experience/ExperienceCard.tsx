import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-purple-100 dark:bg-gray-700 rounded-lg">
          <Briefcase className="w-6 h-6 text-purple-600 dark:text-gray-300" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold dark:text-white">{experience.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
        </div>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{experience.period}</span>
      </div>
      
      <ul className="ml-4 mb-4 space-y-2">
        {experience.description.map((item, i) => (
          <motion.li
            key={i}
            className="text-gray-600 dark:text-gray-300 list-disc ml-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-purple-50 dark:bg-transparent dark:border text-purple-700 dark:text-purple-100 rounded-full text-smpx-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;