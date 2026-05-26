import { motion, AnimatePresence } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { X, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

function ProjectModal({ project, isOpen, onClose }) {
    const { theme } = useContext(ThemeContext);

    if (!project) return null;

    const {
        title,
        fullDescription,
        tags,
        features = [],
        challenges = [],
        solutions = [],
        gradient,

        github
    } = project;

    const Header = () => (
      <div className={`relative w-full h-48 rounded-xl mb-4 overflow-hidden bg-gradient-to-r ${gradient} bg-opacity-30`}>
        {/* Subtle rotating orb */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl" />
        </motion.div>
        {/* Gentle pulse */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    );

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: "spring", duration: 0.5, bounce: 0.15 }
        },
        exit: { 
            opacity: 0, 
            scale: 0.95, 
            y: 20,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Window */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`
                            relative w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl overflow-y-auto z-10 border
                            ${theme === 'dark' 
                                ? 'bg-[#08080c] md:bg-slate-900/95 md:border-indigo-500/20' 
                                : 'bg-white md:bg-white/95 md:border-slate-200'
                            }
                        `}
                    >
                        {/* Shading Corner Overlay */}
                        <div className={`
                            absolute top-0 right-0 w-64 h-64 rounded-bl-full pointer-events-none opacity-5
                            ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-500 via-transparent to-transparent' : 'bg-gradient-to-br from-indigo-100 via-transparent to-transparent'}
                        `} />

                        {/* Top Action Buttons (Fixed layout style) */}
                        <div className="sticky top-0 z-20 flex justify-end gap-3 p-4 backdrop-blur-md border-b border-opacity-10 border-slate-500 bg-transparent">
                            {github && (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className={`
                                        p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center border
                                        ${theme === 'dark'
                                            ? 'bg-slate-900/80 hover:bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                                            : 'bg-slate-50 hover:bg-indigo-50 text-indigo-700 border-indigo-100'
                                        }
                                    `}
                                    aria-label="View Code"
                                >
                                    <FaGithub size={20} />
                                </motion.a>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className={`
                                    p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center border
                                    ${theme === 'dark'
                                        ? 'bg-slate-900/80 hover:bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                                        : 'bg-slate-50 hover:bg-indigo-50 text-indigo-700 border-indigo-100'
                                    }
                                `}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </motion.button>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-10 space-y-8">
          <Header />
                            {/* Title & Headline Header */}
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight ${
                                        theme === 'dark' ? 'text-indigo-200' : 'text-slate-805'
                                    }`}
                                >
                                    {title}
                                </motion.h2>

                                {/* Tags Badge flow */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`
                                                px-3 py-1.5 rounded-xl text-xs font-bold
                                                ${theme === 'dark' 
                                                    ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/10' 
                                                    : 'bg-indigo-50 text-indigo-755 border border-indigo-100'
                                                }
                                            `}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Full Description */}
                                <p className={`text-base md:text-lg leading-relaxed font-light ${
                                    theme === 'dark' ? 'text-slate-300' : 'text-slate-655'
                                }`}>
                                    {fullDescription}
                                </p>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 items-center pt-2">
                                
                                {github && (
                                    <motion.a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            px-6 py-3.5 rounded-xl font-bold text-sm md:text-base flex items-center gap-2.5 transition-all border-2
                                            ${theme === 'dark'
                                                ? 'border-indigo-400/20 text-indigo-300 hover:bg-indigo-500/10'
                                                : 'border-indigo-600/20 text-indigo-600 hover:bg-indigo-50'
                                            }
                                        `}
                                    >
                                        <FaGithub size={18} />
                                        <span>View Source Code</span>
                                    </motion.a>
                                )}
                            </div>

                            {/* Features Section */}
                            {features.length > 0 && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Sparkles size={20} className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                                        <h3 className={`text-xl font-bold ${
                                            theme === 'dark' ? 'text-indigo-200' : 'text-slate-805'
                                        }`}>
                                            Key Features & Capabilities
                                        </h3>
                                    </div>
                                    <div className={`
                                        h-px origin-left w-48 mb-4
                                        ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-500/20 via-indigo-500/5 to-transparent' : 'bg-gradient-to-r from-indigo-200 via-indigo-100 to-transparent'}
                                    `} />
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={18} className="text-indigo-400 mt-1 flex-shrink-0" />
                                                <span className={`text-sm leading-relaxed ${
                                                    theme === 'dark' ? 'text-slate-350' : 'text-slate-655'
                                                }`}>
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Architecture Challenges & Technical Solutions section */}
                            {challenges.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-500/10 pt-8">
                                    {/* Left: Engineering Challenges */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <AlertCircle size={20} className="text-purple-400 flex-shrink-0" />
                                            <h3 className={`text-xl font-bold ${
                                                theme === 'dark' ? 'text-indigo-200' : 'text-slate-805'
                                            }`}>
                                                Technical Challenges
                                            </h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {challenges.map((chal, i) => (
                                                <li key={i} className={`p-4 rounded-2xl border text-sm leading-relaxed ${
                                                    theme === 'dark' 
                                                        ? 'bg-slate-950/40 border-purple-500/10 text-slate-350' 
                                                        : 'bg-purple-50/30 border-purple-100 text-slate-655'
                                                }`}>
                                                    <span className="font-semibold text-purple-400 block mb-1">Challenge {i+1}</span>
                                                    {chal}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right: Technical Solutions */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <CheckCircle2 size={20} className="text-indigo-400 flex-shrink-0" />
                                            <h3 className={`text-xl font-bold ${
                                                theme === 'dark' ? 'text-indigo-200' : 'text-slate-805'
                                            }`}>
                                                Engineering Solutions
                                            </h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {solutions.map((sol, i) => (
                                                <li key={i} className={`p-4 rounded-2xl border text-sm leading-relaxed ${
                                                    theme === 'dark' 
                                                        ? 'bg-slate-950/40 border-indigo-500/10 text-slate-350' 
                                                        : 'bg-indigo-50/30 border-indigo-100 text-slate-655'
                                                }`}>
                                                    <span className="font-semibold text-indigo-400 block mb-1">Solution {i+1}</span>
                                                    {sol}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default ProjectModal;