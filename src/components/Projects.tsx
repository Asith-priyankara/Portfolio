import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Change Detection Using SAR Video",
    description:
      "Developed algorithms for change detection in SAR videos, optimized for GPU execution to achieve real-time performance. These algorithms run in parallel on GPUs for high efficiency.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Digital Traffic Ticket Management System",
    description:
      "A digital platform for traffic police officers to issue fines to drivers. Drivers can pay their fines online, and police administrators can view and manage fine records seamlessly.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Online Food Ordering System",
    description:
      "A platform where restaurants can register and list their products. Customers can browse the menu and place orders. The system focuses on connecting restaurants with customers",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Online Doctor Appointment System",
    description:
      "A system that allows patients to register, book appointments with doctors, and manage their health services. Admins can view, approve, or decline pending appointments.",
    image: "images/image.png",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6 ">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex space-x-4 justify-between">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
