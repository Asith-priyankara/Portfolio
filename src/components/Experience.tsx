import { motion } from "framer-motion";
import ExperienceCard from "./experience/ExperienceCard";

const experiences = [
  {
    title: "Inter Software Engineer",
    company: "DFN Technology Pvt Ltd",
    period: "2023 Dec - 2024 June",
    description: [

"Developed front-end components using Angular and conducted unit testing with Jasmine.",
"Built back-end services using Java and Spring Framework, ensuring system performance and scalability.",
"Managed database operations with Oracle Database, optimizing data access and storage.",
"Contributed to the implementation of new features, enhancing functionality and user experience.",
"Resolved critical bugs, improving system stability and maintainability."
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
