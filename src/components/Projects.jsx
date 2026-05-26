import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeContext } from '../App';
import { projectsData as projects } from "../data/projectsData";
import { FaGithub, FaTimes } from 'react-icons/fa';

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Soft background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-[#818cf8]' : 'bg-[#c7d2fe]'
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
              theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'
            }`}
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1.5 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            }`}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-[1.02] ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-indigo-500/20 hover:border-indigo-400/30'
                  : 'bg-white/70 border-slate-200 hover:border-indigo-300'
              }`}
            >
              {/* Featured ribbon */}
              {project.featured && (
                <div className={`absolute -top-2 -right-2 px-3 py-0.5 text-xs font-semibold rounded-full text-white ${
                  theme === 'dark' ? 'bg-indigo-500' : 'bg-indigo-600'
                }`}>Featured</div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'
              }`}>{project.title}</h3>
              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>{project.shortDescription}</p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tech, i) => (
                  <span key={i} className={`px-2 py-0.5 text-xs rounded bg-gradient-to-r ${project.gradient} text-white`}>{tech}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded hover:bg-indigo-500/10 transition-colors ${
                    theme === 'dark' ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-500'
                  }`}
                >
                  <FaGithub size={16} /> GitHub
                </a>
                
                <button
                  onClick={() => setSelected(project)}
                  className={`ml-auto p-2 rounded hover:bg-indigo-500/10 transition-colors ${
                    theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
                  }`}
                  aria-label="More details"
                >
                  ⓘ
                </button>
              </div>
            </motion.article>
          ))}
        </div>
<div className="text-center mt-8">
  <a href="https://github.com/repos" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors">
    More Projects
  </a>
</div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              className={`relative max-w-xl w-full p-6 rounded-2xl backdrop-blur-lg border ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-indigo-500/30 text-white'
                  : 'bg-white/95 border-slate-200 text-slate-800'
              }`}
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button onClick={closeModal} className="absolute top-3 right-3 p-1 rounded hover:bg-indigo-500/10 transition-colors" aria-label="Close">
                <FaTimes size={20} className="text-gray-400" />
              </button>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="mb-4">{selected.fullDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tags.map((t, i) => (
                  <span key={i} className={`px-2 py-0.5 text-xs rounded bg-gradient-to-r ${selected.gradient} text-white`}>{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20"
                >
                  <FaGithub size={16} /> GitHub
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;