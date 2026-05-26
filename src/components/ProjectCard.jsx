import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa'; 
import { useContext } from 'react';
import { ThemeContext } from '../App';

function ProjectCard({ project, onClick, isCompact = false }) {
    const { theme } = useContext(ThemeContext);

    const {
        title,
        shortDescription,
        tags,
        gradient,
        github,
    } = project;

    // Truncate description for compact cards (much shorter)
    const displayDescription = isCompact && shortDescription.length > 120
        ? shortDescription.substring(0, 120) + '...'
        : shortDescription;
    
    // Animated gradient header (replaces broken image)
    const Header = () => (
  <div
    className={`relative h-40 overflow-hidden rounded-2xl mb-6 bg-gradient-to-br ${gradient} border border-white/10`}
  >
    <div className="absolute inset-0 opacity-40">
      <div className="absolute top-[-20px] left-[10%] w-40 h-40 rounded-full bg-white/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-30px] right-[10%] w-32 h-32 rounded-full bg-white/5 blur-3xl" />
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
  </div>
);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: isCompact ? -3 : -8 }}
            className="group relative h-full cursor-pointer"
            onClick={onClick}
        >
            {/* Card wrapper container */}
            <div className={`h-full rounded-3xl backdrop-blur-md transition-all duration-500 relative overflow-hidden ${
                isCompact 
                    ? 'p-5 border' 
                    : 'p-8 border-2'
            } ${
                theme === "dark" 
                    ? isCompact
                        ? "bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/30 hover:bg-slate-900/60"
                        : "bg-slate-900/50 border-indigo-500/15 hover:border-indigo-400/40 hover:bg-slate-900/80"
                    : isCompact
                        ? "bg-white/60 border-slate-200 hover:border-indigo-300 hover:bg-white/80"
                        : "bg-white/80 border-slate-200 hover:border-indigo-400/30 hover:bg-white"
            }`}>
                {/* Glowing gradient background overlay */}
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        theme === "dark"
                            ? "bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"
                            : "bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"
                    }`}
                />

                {/* Decorative background shapes */}
                {!isCompact && (
                    <motion.div
                        className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 ${
                            theme === "dark" ? "bg-indigo-450" : "bg-indigo-200"
                        }`}
                        animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )}

                <div className="relative z-10 flex flex-col h-full">
                    <Header />
                    {/* Title */}
                    <motion.h3
                        className={`font-black tracking-tight ${
                            isCompact 
                                ? 'text-lg md:text-xl mb-2' 
                                : 'text-2xl md:text-3xl mb-4'
                        } ${
                            theme === "dark" ? "text-indigo-200" : "text-slate-800"
                        }`}
                        whileHover={{ scale: isCompact ? 1.01 : 1.02 }}
                    >
                        {title}
                    </motion.h3>

                    {/* Short Description */}
                    <p className={`leading-relaxed flex-grow font-light ${
                        isCompact 
                            ? 'mb-3 text-xs md:text-sm line-clamp-2 opacity-80' 
                            : 'mb-6 opacity-90 text-sm md:text-base'
                    } ${
                        theme === "dark" ? "text-slate-300" : "text-slate-655"
                    }`}>
                        {displayDescription}
                    </p>

                    {/* Skill Tags */}
                    <div className={`flex flex-wrap gap-1.5 ${isCompact ? 'mb-4' : 'gap-2 mb-6'}`}>
                        {tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: isCompact ? 1.05 : 1.1 }}
                                className={`rounded-xl font-bold transition-all ${
                                    isCompact 
                                        ? 'px-2.5 py-1 text-xs' 
                                        : 'px-3 py-1.5 text-xs md:text-sm'
                                } ${
                                    theme === "dark"
                                        ? "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
                                        : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                }`}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* Card Actions Footer links */}
                    <div className={`flex gap-4 items-center border-t border-opacity-10 border-slate-500 ${
                        isCompact ? 'pt-3' : 'pt-4'
                    }`}>

                        <div className="flex-grow" />
                        {github && (
                            <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.15, rotate: isCompact ? 180 : 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`p-2 rounded-xl transition-all ${
                                    theme === "dark" 
                                        ? "text-indigo-300 hover:bg-indigo-500/15" 
                                        : "text-slate-600 hover:bg-indigo-50"
                                }`}
                                aria-label="View GitHub repository"
                            >
                                <FaGithub size={isCompact ? 18 : 22} />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Sweeping shimmer glow on card hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: theme === "dark"
                            ? `linear-gradient(135deg, transparent 0%, rgba(129, 140, 248, ${isCompact ? '0.04' : '0.08'}) 50%, transparent 100%)`
                            : `linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, ${isCompact ? '0.06' : '0.12'}) 50%, transparent 100%)`
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: isCompact ? 2.5 : 2,
                        repeat: Infinity,
                        repeatDelay: isCompact ? 1.5 : 1,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    );
}

export default ProjectCard;