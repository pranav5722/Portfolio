import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["C/C++", "JavaScript", "Python", "SQL", "HTML/CSS"]
  },
  {
    category: "Developer Tools/Libraries",
    items: ["Node.js", "React", "Tailwind", "MongoDB", "Android Studio"]
  },
  {
    category: "Core Fundamentals",
    items: ["Data Structures", "Version Control", "OOPS", "DBMS", "Operating System"]
  } 
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-4xl lg:text-5xl mb-2">Technical Skills</h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Expertise across the full stack development spectrum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="relative p-5 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="heading text-xl mb-4 text-center">{category.category}</h3>
              <div className="grid gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="group relative p-2 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                  >
                    <span className="font-medium text-sm tracking-wide">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
