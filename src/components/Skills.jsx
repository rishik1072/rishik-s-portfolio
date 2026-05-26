import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Code2, Wrench, Server, Shield } from 'lucide-react';

function Skills() {
    const { theme } = useContext(ThemeContext);
    
    const skillCategories = [
        {
            title: 'Programming',
            icon: Code2,
            skills: ['C', 'C++', 'Python', 'TypeScript', 'Java']
        },
        {
            title: 'Development',
            icon: Server,
            skills: ['HTML', 'CSS', 'Flask', 'MongoDB', 'Firebase']
        },
        {
            title: 'Tools',
            icon: Wrench,
            skills: ['Docker', 'Git', 'Linux']
        },
        {
            title: 'Core Concepts',
            icon: Shield,
            skills: ['REST APIs', 'Networking', 'Secure Authentication', 'OWASP Top 10', 'System Security']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const categoryVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
            }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <section
            id="skills"
            className="py-20 px-6 relative overflow-hidden bg-transparent"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
                            theme === "dark" ? "text-indigo-200" : "text-slate-800"
                        }`}
                    >
                        Skills
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1.5 mx-auto rounded-full ${
                            theme === "dark" ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"
                        }`}
                    />
                </motion.div>

                {/* 2x2 Grid Layout for modern bento spacing */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={categoryVariants}
                            whileHover={{ 
                                y: -6,
                                transition: { duration: 0.3 }
                            }}
                            className="group/category relative"
                        >
                            {/* Glassmorphic Category Card */}
                            <div className={`
                                relative p-6 rounded-3xl backdrop-blur-md border
                                transition-all duration-500 overflow-hidden h-full
                                ${theme === "dark" 
                                    ? "bg-slate-900/40 border-indigo-500/10 hover:bg-slate-900/60 hover:border-indigo-400/30" 
                                    : "bg-white/40 border-indigo-100 hover:bg-white/60 hover:border-indigo-300"
                                }
                                shadow-[0_4px_30px_rgba(0,0,0,0.03)]
                                hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)]
                            `}>
                                {/* Glowing gradient background on card hover */}
                                <motion.div
                                    className={`absolute inset-0 opacity-0 group-hover/category:opacity-100 transition-opacity duration-750 pointer-events-none ${
                                        theme === "dark"
                                            ? "bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"
                                            : "bg-gradient-to-br from-indigo-100/30 via-transparent to-purple-100/30"
                                    }`}
                                />

                                <div className="relative z-10">
                                    {/* Header Layout */}
                                    <motion.div 
                                        className="flex items-center gap-3.5 mb-5"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + categoryIndex * 0.05 }}
                                    >
                                        {/* Accent Category Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 180, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className={`
                                                p-2.5 rounded-2xl border flex-shrink-0
                                                ${theme === "dark"
                                                    ? "bg-indigo-500/10 border-indigo-400/20 text-indigo-300"
                                                    : "bg-indigo-50 border-indigo-200 text-indigo-650"
                                                }
                                            `}
                                        >
                                            <category.icon size={22} strokeWidth={2} />
                                        </motion.div>

                                        {/* Title & Count Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`
                                                text-lg md:text-xl font-bold leading-tight
                                                ${theme === "dark" ? "text-indigo-200" : "text-slate-800"}
                                            `}>
                                                {category.title}
                                            </h3>
                                        </div>

                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                type: "spring",
                                                stiffness: 200,
                                                delay: 0.25 + categoryIndex * 0.05
                                            }}
                                            className={`
                                                px-3 py-1 rounded-xl text-xs font-bold flex-shrink-0
                                                ${theme === "dark"
                                                    ? "bg-indigo-500/10 text-indigo-300"
                                                    : "bg-indigo-50 text-indigo-650"
                                                }
                                            `}
                                        >
                                            {category.skills.length} skills
                                        </motion.span>
                                    </motion.div>

                                    {/* Horizontal Divider */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 0.3 + categoryIndex * 0.05,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className={`
                                            h-px mb-5 origin-left
                                            ${theme === "dark" 
                                                ? "bg-gradient-to-r from-indigo-500/20 via-indigo-500/5 to-transparent" 
                                                : "bg-gradient-to-r from-indigo-200 via-indigo-100 to-transparent"
                                            }
                                        `}
                                    />

                                    {/* Skills Pill Badges */}
                                    <motion.div
                                        variants={containerVariants}
                                        className="flex flex-wrap gap-2.5"
                                    >
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                variants={skillItemVariants}
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    y: -2,
                                                    transition: { 
                                                        type: "spring", 
                                                        stiffness: 400, 
                                                        damping: 10 
                                                    }
                                                }}
                                                className="group/skill relative"
                                            >
                                                <div className={`
                                                    relative px-4 py-2 rounded-xl border 
                                                    transition-all duration-350 cursor-default font-semibold text-xs md:text-sm
                                                    ${theme === "dark" 
                                                        ? "bg-slate-900/80 border-indigo-500/10 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-400/30" 
                                                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700"
                                                    }
                                                `}>
                                                    <span className="relative z-10">
                                                        {skill}
                                                    </span>

                                                    {/* Pulse Dot indicator on hover */}
                                                    <motion.div
                                                        className={`
                                                            absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full 
                                                            opacity-0 group-hover/skill:opacity-100
                                                            ${theme === "dark" ? "bg-indigo-400" : "bg-indigo-650"}
                                                        `}
                                                        animate={{
                                                            scale: [1, 1.5, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;