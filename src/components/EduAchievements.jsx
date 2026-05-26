import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { GraduationCap, Trophy, Award, Target, CheckCircle2 } from 'lucide-react';

function EduAchievements() {
  const { theme } = useContext(ThemeContext);

  const achievements = [
    {
      title: '3rd Place',
      subtitle: 'NULL POINT CTF Competition',
      desc: 'Competed with local teams in a fast-paced Capture The Flag cybersecurity competition, excelling in cryptography and web security challenges.',
      icon: Trophy,
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: '4th Place',
      subtitle: 'AP Quantum Valley Hackathon',
      desc: 'Collaborated on quantum-inspired system architectures and algorithm design to address optimization problems under strict constraints.',
      icon: Award,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Active Participant',
      subtitle: 'Cybersecurity Hackathons & CTFs',
      desc: 'Regularly participate in security drills, networking benchmarks, and hackathons focusing on secure code creation and systems protection.',
      icon: Target,
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  // Circle gauge math for CGPA (7.2 / 10 is 72%)
  const percentage = 72;
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section
      id="achievements"
      className="py-24 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/3 left-10 w-80 h-80 rounded-full blur-3xl opacity-[0.08] ${
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
          className="text-center mb-16"
        >
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
              theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'
            }`}
          >
            Education & Achievements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1.5 mx-auto rounded-full`}
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to-r, #818cf8, #c084fc)'
                : 'linear-gradient(to-r, #6366f1, #8b5cf6)'
            }}
          />
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Education (Lg Card) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className={`
              flex-grow p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)]
              ${theme === 'dark' 
                ? 'bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/20' 
                : 'bg-white border-slate-200 hover:border-indigo-300'
              }
            `}>
              
              {/* Highlight Gradient glow */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div>
                {/* Cap Icon badge */}
                <div className={`p-3 rounded-2xl border w-fit mb-6 ${
                  theme === 'dark' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                }`}>
                  <GraduationCap size={32} />
                </div>

                <h3 className={`text-sm font-semibold tracking-widest uppercase mb-2 ${
                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  Education Overview
                </h3>

                <h4 className={`text-2xl md:text-3xl font-black mb-3 ${
                  theme === 'dark' ? 'text-indigo-100' : 'text-slate-800'
                }`}>
                  SRM University AP
                </h4>

                <p className={`text-base md:text-lg mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-350' : 'text-slate-650'
                }`}>
                  B.Tech in Computer Science and Engineering
                </p>

                {/* Info Badges */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-650'}`}>
                      Focus on secure coding & scalable architectures
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-655'}`}>
                      Decentralized systems and smart contract logic
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA visual ring gauge - extremely premium */}
              <div className={`p-6 rounded-2xl border flex items-center gap-6 ${
                theme === 'dark' ? 'bg-slate-950/60 border-slate-850' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="relative flex-shrink-0" style={{ width: '120px', height: '120px' }}>
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      className={theme === 'dark' ? 'stroke-slate-800' : 'stroke-slate-200'}
                      strokeWidth={strokeWidth}
                      fill="transparent"
                    />
                    {/* Progress ring */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="url(#indigoPurpleGradient)"
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                    {/* Gradient definition for circle */}
                    <defs>
                      <linearGradient id="indigoPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <span className={`text-2xl font-black ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-850'}`}>
                      7.2
                    </span>
                    <span className={`text-[0.65rem] uppercase tracking-wider font-bold opacity-60 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      CGPA
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-850'}`}>
                    Academic Performance
                  </h5>
                  <p className={`text-xs leading-relaxed opacity-75 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Consistent undergraduate performance combining computer science core standards with practical system design applications.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {achievements.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden flex items-start gap-5 shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/20'
                      : 'bg-white border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  {/* Left highlight strip */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${item.color}`} />

                  {/* Icon Wrapper */}
                  <div className={`p-3 rounded-2xl border flex-shrink-0 ${
                    theme === 'dark' ? 'bg-indigo-500/5 border-indigo-500/10 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                  }`}>
                    <item.icon size={24} className="flex-shrink-0" />
                  </div>

                  {/* Content details */}
                  <div>
                    <h4 className={`text-sm font-bold tracking-widest uppercase mb-1 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-650'
                    }`}>
                      {item.title}
                    </h4>
                    <h5 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-indigo-150' : 'text-slate-805'
                    }`}>
                      {item.subtitle}
                    </h5>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default EduAchievements;
