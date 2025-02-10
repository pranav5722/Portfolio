import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import art from "../assets/art.jpg";
import files from "../assets/files.png";
import creditcard from "../assets/cc.jpg";
import freelance from "../assets/freelance.jpg";
import cookease from "../assets/lucknow-food-guide.jpg";
import typepace from "../assets/typing.jpg";

const projects = [
  {
    title: "Art Gallery",
    description: "Plateform to upload, view and share our Art Work or Images",
    image: art,
    tags: ["React", "Node.js", "TypeScript", "Tailwind"],
    liveUrl: "https://art-gallery-kappa-ten.vercel.app/",
    githubUrl: "https://github.com/pranav5722/ArtGallery"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Analysis of transactions done by various visulization libraries of Python",
    image: creditcard,
    tags: ["Python", "Matplotlib", "Seaborn", "NumPy"],
    liveUrl: "#",
    githubUrl: "https://github.com/pranav5722/CreditCardFraudDetection"
  },
  {
    title: "Freelance Plateform",
    description: "Plateform for Freelancers and client to come and collaborate together for their requirements.",
    image: freelance,
    tags: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/pranav5722/FreeFlow"
  },
  {
    title: "CookEase:Quick Recipe Finder",
    description: "Frontend project to find recipe using API with search and filter functionality",
    image: cookease,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://pranav5722.github.io/CookEase/",
    githubUrl: "https://github.com/pranav5722/CookEase"
  },
  {
    title: "TypePace:Measure Typing Speed",
    description: "Frontend web based project to measure Typing Speed",
    image: typepace,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://pranav5722.github.io/TypePace/",
    githubUrl: "https://github.com/pranav5722/TypePace"
  },
  {
    title: "FileEase:File Management App",
    description: "App built to manage Files and Folders with cloud integration",
    image: files,
    tags: ["React Native", "JavaScript", "Android"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900 ">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-4xl lg:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        <div className="flex overflow-x-scroll overflow-hidden space-x-6 p-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="min-w-[320px] md:min-w-[400px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full dark:text-black hover:bg-accent transition-colors duration-200"
                    aria-label="Live Demo"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full dark:text-black hover:bg-accent transition-colors duration-200"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
