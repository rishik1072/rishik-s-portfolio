import { motion, AnimatePresence } from 'motion/react';
import { ThemeContext } from './../App';
import { useContext, useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Home', 'Experience', 'Projects', 'About', 'Skills', 'Achievements', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-[#08080c]/95 backdrop-blur-xl shadow-lg shadow-indigo-500/10 border-b border-indigo-500/10' 
            : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-indigo-500/5 border-b border-indigo-500/5'
          : theme === 'dark'
            ? 'bg-[#08080c]/80 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            onClick={(e) => handleNavClick(e, 'Home')}
          >
            <motion.div
              className={`text-2xl font-black tracking-widest ${
                theme === 'dark'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'
              }`}
            >
              RG
            </motion.div>
            <motion.div
              className={`absolute -bottom-1 left-0 h-0.5 ${
                theme === 'dark' ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
              }`}
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -2 }}
                onClick={(e) => handleNavClick(e, item)}
                className="relative group"
              >
                <span className={`text-base font-semibold transition-colors duration-200 ${
                  theme === 'dark' ? 'text-indigo-200 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'
                }`}>
                  {item}
                </span>
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20' 
                  : 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-indigo-500/10 text-indigo-300' 
                  : 'bg-indigo-500/10 text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-indigo-500/10 text-indigo-300' 
                  : 'bg-indigo-500/10 text-indigo-600'
              }`}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-indigo-500/10"
          >
            <div className={`flex flex-col space-y-2 py-4 px-4 ${
              theme === 'dark' ? 'bg-[#08080c]/98' : 'bg-white/98'
            }`}>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-base font-semibold px-4 py-3 rounded-xl transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-indigo-200 hover:bg-indigo-500/10 hover:text-indigo-400'
                      : 'text-slate-600 hover:bg-indigo-500/10 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;