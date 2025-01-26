import { motion } from "framer-motion";
import { Database, Globe, Server, Code } from "lucide-react";
import { SkillCategory } from "./skills/SkillCategory";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", imgSrc: "/images/Java.svg" },
      { name: "Python", imgSrc: "/images/Python.svg" },
      { name: "C++", imgSrc: "/images/Cpp.svg" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Angular", imgSrc: "/images/Angular.svg" },
      { name: "React", imgSrc: "/images/react.svg" },
      { name: "Next.js", imgSrc: "/images/Nextjs.svg" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Spring Boot", imgSrc: "/images/Spring.svg" },
      { name: "Node.js", imgSrc: "/images/nodejs.svg" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "Oracle", imgSrc: "/images/Oracle.svg" },
      { name: "PostgreSQL", imgSrc: "/images/PostgresSQL.svg" },
      { name: "MySQL", imgSrc: "/images/MySQL.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
