import { motion } from "framer-motion";
const technologies = [
  { name: "Angular", image: "/images/Angular.svg" },
  { name: "React", image: "/images/React.png" },
  { name: "Next.js", image: "/images/Nextjs.svg" },
  { name: "Spring Boot", image: "/images/Spring.svg" },
  { name: "Node.js", image: "/images/Nodejs.svg" },
  { name: "MySQL", image: "/images/MySQL.svg" },
  { name: "Oracle", image: "/images/Oracle.svg" },
  { name: "PostgreSQL", image: "/images/PostgresSQL.svg" },
  { name: "Git", image: "/images/Git.svg" },
];

export const TechStack = () => {
  return (
    <motion.div
      className="mt-8 flex flex-wrap justify-center gap-3 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="w-16 h-16 flex justify-center items-center rounded-full shadow-lg backdrop-blur-sm bg-opacity-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="object-contain w-10 h-10"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
