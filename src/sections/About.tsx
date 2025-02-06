import { motion } from 'framer-motion';
import { Code2, LucideDatabase, Server, GraduationCap, Calendar, Building2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              className="heading text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm a passionate software engineer with expertise in building scalable web applications
              and distributed systems. With a focus on clean code and optimal performance,
              I transform complex problems into elegant solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Frontend",
                  description: "Creating responsive and intuitive user interfaces"
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Backend",
                  description: "Building robust and scalable server architectures"
                },
                {
                  icon: <LucideDatabase className="w-8 h-8" />,
                  title: "Database",
                  description: "Efficient and secure Data management with modern tools"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {item.icon}
                  <h3 className="heading text-xl mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h2
              className="heading text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  degree: "Bachelor of Technology",
                  school: "AKTU",
                  period: "2021 - 2025",
                  description: "Specialized in Information Technology",
                },
                {
                  degree: "Intermediate(PCM)",
                  school: "RLB",
                  period: "2020 - 2021",
                  description: ""
                }
              ].map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    <h3 className="heading text-xl">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>{edu.school}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}