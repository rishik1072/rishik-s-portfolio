import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import profileImage from "../assets/profile.jpeg";

function AboutMe() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="about"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated soft purple/indigo background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10 ${
						theme === "dark" ? "bg-[#818cf8]" : "bg-[#c7d2fe]"
					}`}
				/>
                <motion.div
					animate={{
						scale: [1, 1.3, 1],
						rotate: [0, -90, 0],
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 ${
						theme === "dark" ? "bg-[#c084fc]" : "bg-[#f3e8ff]"
					}`}
				/>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                        className="w-full lg:w-5/12 flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative group"
                        >
                            {/* Ambient border blur overlay */}
                            <motion.div
                                className={`absolute -inset-4 rounded-3xl opacity-40 blur-xl ${
                                    theme === "dark" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-gradient-to-r from-indigo-300 to-purple-300"
                                }`}
                                animate={{
                                    opacity: [0.25, 0.5, 0.25],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            
                            {/* Image Frame */}
                            <div className={`relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 ${
                                theme === "dark"
                                    ? "border-indigo-500/20 bg-slate-900/50"
                                    : "border-slate-200 bg-white"
                            }`}>
                                <motion.img
                                    src={profileImage}
                                    alt="Rishik Gorakala Profile"
                                    className="w-full h-full object-cover rounded-3xl"
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                                
                                {/* Overlay glow on hover */}
                                <motion.div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                        theme === "dark"
                                            ? "bg-gradient-to-t from-indigo-500/15 to-transparent"
                                            : "bg-gradient-to-t from-indigo-500/10 to-transparent"
                                    }`}
                                />
                            </div>

                            {/* Floating decorative frame overlays */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={`absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 opacity-40 ${
                                    theme === "dark" ? "border-indigo-400/30" : "border-indigo-500/30"
                                }`}
                            />
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-4 opacity-30 ${
                                    theme === "dark" ? "border-purple-400/20" : "border-purple-500/25"
                                }`}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Copy Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50, delay: 0.2 }}
                        className="w-full lg:w-7/12"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-left mb-10"
                        >
                            <motion.h2
                                className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
                                    theme === "dark"
                                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200"
                                      : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-850 to-purple-850"
                                }`}
                            >
                                About Me
                            </motion.h2>
                            
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "6rem" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className={`h-1.5 rounded-full mb-8 ${
                                    theme === "dark" ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"
                                }`}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`space-y-6 text-lg leading-relaxed ${
                                theme === "dark" ? "text-slate-300" : "text-slate-700"
                            }`}
                        >
                            <p className="text-xl md:text-2xl font-normal text-indigo-400/90 dark:text-indigo-300/95 leading-relaxed">
                                Computer Science undergraduate specializing in Cybersecurity and Software Engineering with hands‑on experience in secure application development, blockchain systems, malware analysis environments, and full‑stack development.
                            </p>
                            
                            <p className="text-base md:text-lg opacity-90 leading-relaxed font-light">
                                Passionate about building modern applications, secure systems, and scalable user‑focused solutions while continuously improving development and problem‑solving skills.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;