import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "SmatBridge",
    position: "Web Development Intern",
    period: "July'2024 - Sep'2024",
    description: "Worked on a full stack web-based project (Freelancing Application) using React.js for designing frontend integrating with Mongo Database.",
    highlights: [
      "Frontend design with React",
      "MongoDb Integration"
    ]
  },
  {
    company: "IBM",
    position: "Data Science and ML Intern",
    period: "Aug'2023 - Sep'2023",
    description: "Worked on a data visualization model with Python as part of project using python libraries",
    highlights: [
      "Built analytical model",
      "Used libraries of python like Pandas, NumPy and Matplotlib"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-4xl lg:text-5xl mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A journey through my professional career
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                  <div>
                    <h3 className="heading text-xl mb-2">{exp.position}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}