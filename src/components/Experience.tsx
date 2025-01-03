import { motion } from "framer-motion";
import ExperienceCard from "./experience/ExperienceCard";

const experiences = [
  {
    title: "Inter Software Engineer",
    company: "DFN Technology Pvt Ltd",
    period: "2023 Dec - 2024 June",
    description: [
      "Built RESTful APIs using Node.js and Express",
      "Developed responsive front-end using React",
      "Managed MySQL databases and implemented data migration",
    ],
    technologies: ["Angular", "Java", "Springboot", "Oracle"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
