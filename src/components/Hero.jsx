import { motion } from 'motion/react';
import { ThemeContext } from '../App';
import { useContext, useMemo } from 'react';
import ReactGA from 'react-ga4';
import { FileText, Github, Linkedin, ArrowRight } from 'lucide-react';

function Hero() {
  const { theme } = useContext(ThemeContext);

  // GA resume download event
  const handleResume = () => {
    if (ReactGA.isInitialized) {
      ReactGA.event({
        category: 'Resume',
        action: 'Download',
        label: 'Resume PDF',
      });
    }
    window.open(
      'https://drive.google.com/file/d/1vi-h4YVgKLM-dCXvciuYdApywoVwvzjw/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleProjectsScroll = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Split name into characters for elegant staggered reveal
  const nameLetters = useMemo(() => 'Gorakala Rishik'.split(''), []);

  return (
    <section
      id="home"
      className={`min-h-[100dvh] flex items-center justify-center px-6 py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#08080c]' : 'bg-[#fafafa]'
      }`}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 60, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.12] ${
            theme === 'dark' ? 'bg-[#818cf8]' : 'bg-[#c7d2fe]'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.12] ${
            theme === 'dark' ? 'bg-[#c084fc]' : 'bg-[#f3e8ff]'
          }`}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10 max-w-5xl mx-auto"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-base md:text-lg mb-6 font-semibold tracking-widest ${
            theme === 'dark' ? 'text-indigo-300/80' : 'text-indigo-600/80'
          } uppercase`}
        >
          Hello! I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block group/name mb-6 cursor-default"
        >
          <span
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight ${
              theme === 'dark'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-300 to-purple-300'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-800'
            }`}
          >
            {nameLetters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.03, duration: 0.3 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          {/* Hover underline */}
          <motion.div
            className={`absolute -bottom-2 left-1/2 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            }`}
            initial={{ width: 0, x: 0 }}
            whileHover={{ width: '100%', x: '-50%', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}}
            style={{ transformOrigin: 'center' }}
          />
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`text-xl md:text-2xl font-extrabold tracking-wide mb-6 ${
            theme === 'dark' ? 'text-indigo-200' : 'text-indigo-900'
          }`}
        >
          Computer Science Undergraduate — Cybersecurity & Software Engineering
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`text-lg md:text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Computer Science undergraduate with hands-on experience in secure application development, blockchain systems, malware analysis environments, and full-stack development.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className={`h-0.5 w-32 mx-auto rounded-full mb-12 ${
            theme === 'dark' ? 'bg-indigo-500/30' : 'bg-indigo-500/20'
          }`}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          {/* Primary View Projects */}
          <motion.button
            onClick={handleProjectsScroll}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`group px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden flex items-center gap-2.5 shadow-lg ${
              theme === 'dark' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-indigo-500/25' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-600/35'
            }`}
          >
            <span>View Projects</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Secondary Resume */}
          <motion.button
            onClick={handleResume}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`group px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 flex items-center gap-2.5 border-2 ${
              theme === 'dark'
                ? 'border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400'
                : 'border-indigo-600/30 text-indigo-600 hover:bg-indigo-600/5 hover:border-indigo-600'
            }`}
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </motion.button>

          {/* Social Icons */}
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/rishik1072"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'border-slate-800 text-indigo-300 bg-slate-900/40 hover:border-indigo-400 hover:text-white' : 'border-slate-200 text-indigo-600 bg-slate-50 hover:border-indigo-600 hover:text-indigo-800'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rishik-gorakala-4b6b78289/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'border-slate-800 text-indigo-300 bg-slate-900/40 hover:border-indigo-400 hover:text-white' : 'border-slate-200 text-indigo-600 bg-slate-50 hover:border-indigo-600 hover:text-indigo-800'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;