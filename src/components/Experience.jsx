import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: 'Blockchain Intern',
      company: 'SRM University AP',
      period: 'Jun 2025 – Aug 2025',
      location: 'Andhra Pradesh, India',
      type: 'Internship',
      description: [
        'Researched and designed secure, decentralized identity verification systems and smart contract logic.',
        'Worked on blockchain-anchored credential schemas and privacy-preserving decentralized authentication flows.',
        'Collaborated with university researchers to prototype zero-knowledge and self-sovereign identity models.'
      ]
    },
    {
      title: 'Cyber Security Trainee',
      company: 'HackerRank',
      period: 'May 2024 – Jul 2024',
      location: 'Remote',
      type: 'Trainee',
      description: [
        'Performed vulnerability assessments, threat modeling, and defensive network audits.',
        'Analyzed network packets, identified potential attack signatures, and simulated penetration testing using Wireshark and Nmap.',
        'Secured application systems by configuring protection firewalls and practicing secure network topology design.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 relative overflow-hidden bg-transparent`}
    >
      {/* Soft background indigo blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-[#818cf8]' : 'bg-[#c7d2fe]'
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
                theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
              }`}
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1.5 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            }`}
          />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Connection Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`absolute left-0 md:left-1/2 top-0 w-0.5 -translate-x-1/2 hidden md:block ${
               theme === 'dark' ? 'bg-indigo-400/30' : 'bg-indigo-300/30'
             }`}
          />

          {/* Experience List Mapping */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Dot (Middle on Desktop, Left on Mobile) */}
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className={`w-6 h-6 rounded-full border-4 flex items-center justify-center ${
                        theme === 'dark'
                          ? 'bg-slate-900 border-indigo-400'
                          : 'bg-white border-indigo-650'
                      }`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className={`w-2.5 h-2.5 rounded-full ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Left spacer for timeline alignment on desktop */}
                  <div className={`w-full md:w-1/2 flex pl-8 md:pl-0 ${isEven ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'}`}>
                    <motion.article
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`w-full p-6 md:p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${
                         theme === 'dark'
                           ? 'bg-slate-900/60 border-white/10 hover:border-white/20'
                           : 'bg-white border-slate-200 hover:border-indigo-300'
                       }`}
                    >
                      {/* Meta Info Header */}
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                          <h3 className={`text-2xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-800'
                          }`}>
                            {exp.title}
                          </h3>
                          <span className={`text-sm font-bold px-3 py-1 rounded-xl whitespace-nowrap self-start sm:self-center ${
                            theme === 'dark' ? 'bg-indigo-500/10 text-indigo-300' : 'bg-indigo-50 text-indigo-700'
                          }`}>
                            {exp.period}
                          </span>
                        </div>
                        <h4 className={`text-lg font-semibold mb-3 ${
                           theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                         }`}>
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap gap-4 text-sm opacity-80">
                          <div className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                            <MapPin size={15} className="text-indigo-400" />
                            <span>{exp.location}</span>
                          </div>
                          <div className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                            <Briefcase size={15} className="text-indigo-400" />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-3 border-t pt-4 border-slate-700/20">
                        {exp.description.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            className="flex items-start gap-2.5 group"
                          >
                            <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-125 ${
                              theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                            }`} />
                            <span className={`text-sm leading-relaxed ${
                               theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                             }`}>
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.article>
                  </div>

                  {/* Empty right spacer for dynamic side-switching on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;