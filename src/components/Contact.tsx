import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              Contact Information
            </h3>
            {[
              {
                Icon: Mail,
                text: "priyankarawma@gmail.com",
                href: "mailto:priyankarawma@gmail.com",
              },
              {
                Icon: Github,
                text: "GitHub/Asith Priyankara",
                href: "https://github.com/Asith-priyankara",
              },
              {
                Icon: Linkedin,
                text: "LinkedIn/Asith Priyankara",
                href: "https://www.linkedin.com/in/asith-priyankara-813446265/",
              },
            ].map(({ Icon, text, href }) => (
              <motion.a
                key={text}
                href={href}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                whileHover={{ x: 10 }}
              >
                <Icon size={24} />
                <span>{text}</span>
              </motion.a>
            ))}
          </motion.div>

          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className={`w-full text-white px-6 py-3 rounded-lg font-medium transition-colors ${
                  isSending
                    ? "bg-gray-500"
                    : "bg-purple-600 hover:bg-purple-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-blue-500 dark:hover:from-purple-500 dark:hover:to-blue-400"
                }`}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
