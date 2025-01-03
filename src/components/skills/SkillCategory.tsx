import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { SkillItem } from "./SkillItem";

interface Skill {
  name: string;
  imgSrc: string;
}

interface SkillCategoryProps {
  category: {
    title: string;
    icon: LucideIcon;
    skills: Skill[];
  };
  index: number;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  index,
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 bg-purple-100 dark:bg-gray-700 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600 dark:text-gray-300" />
        </div>
        <h3 className="text-xl font-semibold ml-3 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            delay={index * 0.1 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};
