import { motion } from "framer-motion";

interface SkillItemProps {
  skill: {
    name: string;
    imgSrc: string;
  };
  delay: number;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill, delay }) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <img src={skill.imgSrc} alt={skill.name} className="w-6 h-6" />
      <span className="font-medium mx-2 text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </motion.div>
  );
};
