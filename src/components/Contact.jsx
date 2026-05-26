import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { useContext, useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { ThemeContext } from '../App';
import { Github, Linkedin, FileText, Send, Check, Mail } from 'lucide-react';

// Simple input sanitization function
const sanitizeInput = (input) => {
  return input.replace(/[<>&"']/g, '').trim();
};

// Email format validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const { theme = 'light' } = useContext(ThemeContext);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.name.length > 100) newErrors.name = 'Name must be under 100 characters';
    if (formData.email.length > 100) newErrors.email = 'Email must be under 100 characters';
    if (formData.message.length > 1000) newErrors.message = 'Message must be under 1000 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setToast({ type: 'error', message: 'Message sent locally! (Configuration error for live service)' });
      console.log("Form submitted locally:", formData);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setIsLoading(true);
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          setIsLoading(false);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
          setToast({ type: 'success', message: 'Message sent successfully!' });
          if (ReactGA.isInitialized) {
            ReactGA.event({
              category: 'Contact Form',
              action: 'Submit',
              label: sanitizedData.email,
            });
          }
        },
        (err) => {
          setIsLoading(false);
          setToast({ type: 'error', message: 'Could not send message. Try again later.' });
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1vi-h4YVgKLM-dCXvciuYdApywoVwvzjw/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 relative overflow-hidden bg-transparent`}
    >
      {/* Soft background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-[#818cf8]" : "bg-[#c7d2fe]"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1.5 mx-auto rounded-full ${
              theme === "dark" ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"
            }`}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Contact details card columns */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className={`text-3xl font-bold mb-5 ${
                theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'
              }`}>
                Let's Connect
              </h3>
              <p className={`text-lg mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-655'
              } opacity-90 font-light`}>
                I am actively seeking software engineering and development opportunities. Have a question, want to discuss a project, or review my credentials? Feel free to drop a message or reach out via social profiles!
              </p>

              {/* Cards List */}
              <div className="space-y-4">
                {/* Email Display Card */}
                <motion.a
                  href="mailto:rishikgorakala05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${theme === 'dark' ? 'bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/20 text-indigo-300' : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-indigo-700'}`}
                >
                  <Mail size={24} />
                  <div>
                    <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'}`}>Email</h4>
                    <span className={`text-xs opacity-75 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>rishikgorakala05@gmail.com</span>
                  </div>
                </motion.a>
                

                {/* Social Profiles & Resume Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* GitHub card link */}
                  <motion.a
                    href="https://github.com/rishik1072"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${
                      theme === 'dark'
                        ? 'bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/20 text-indigo-300'
                        : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-indigo-700'
                    }`}
                  >
                    <Github size={24} />
                    <div>
                      <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'}`}>GitHub</h4>
                      <span className={`text-xs opacity-75 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>View Repositories</span>
                    </div>
                  </motion.a>

                  {/* LinkedIn card link */}
                  <motion.a
                    href="https://www.linkedin.com/in/rishik-gorakala-4b6b78289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${
                      theme === 'dark'
                        ? 'bg-slate-900/40 border-indigo-500/10 hover:border-indigo-400/20 text-indigo-300'
                        : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-indigo-700'
                    }`}
                  >
                    <Linkedin size={24} />
                    <div>
                      <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'}`}>LinkedIn</h4>
                      <span className={`text-xs opacity-75 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Let's Connect</span>
                    </div>
                  </motion.a>
                </div>

                {/* Resume download CTA card */}
                <motion.div
                  onClick={handleResumeClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-indigo-950/20 to-slate-900/40 border-indigo-500/25 hover:border-indigo-400'
                      : 'bg-gradient-to-r from-indigo-50 to-slate-50 border-indigo-200 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        theme === 'dark' ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        <FileText size={22} />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-800'}`}>Resume / CV</h4>
                        <p className={`text-xs opacity-75 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Download resume PDF</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Elegant copy footprint footer */}
            <div className={`pt-8 border-t border-slate-700/10 mt-8 text-xs font-semibold tracking-wider ${
              theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
            }`}>
              © 2026 Rishik Gorakala. All rights reserved.
            </div>
          </motion.div>

          {/* RIGHT: High-fidelity Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden ${
              theme === 'dark' ? 'bg-slate-900/25 border-indigo-500/10' : 'bg-white border-slate-200'
            }`}
          >
            <div className="space-y-6">
              {[
                { label: 'Name', type: 'text', id: 'name' },
                { label: 'Email', type: 'email', id: 'email' },
                { label: 'Message', type: 'textarea', id: 'message' }
              ].map((field, idx) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative"
                >
                  <label
                    htmlFor={field.id}
                    className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      theme === 'dark' ? 'text-indigo-300' : 'text-slate-650'
                    }`}
                  >
                    {field.label}
                  </label>
                  {field.type !== 'textarea' ? (
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark'
                          ? errors[field.id]
                            ? 'border-red-500 bg-slate-950/50 text-indigo-200 focus:ring-red-500/30'
                            : 'border-indigo-500/20 bg-slate-950/40 text-indigo-200 focus:border-indigo-400 focus:ring-indigo-400/20'
                          : errors[field.id]
                          ? 'border-red-500 bg-slate-50 text-slate-800 focus:ring-red-500/30'
                          : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-400 focus:ring-indigo-400/20'
                      }`}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      aria-invalid={!!errors[field.id]}
                      aria-describedby={`${field.id}-error`}
                    />
                  ) : (
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        theme === 'dark'
                          ? errors[field.id]
                            ? 'border-red-500 bg-slate-950/50 text-indigo-200 focus:ring-red-500/30'
                            : 'border-indigo-500/20 bg-slate-950/40 text-indigo-200 focus:border-indigo-400 focus:ring-indigo-400/20'
                          : errors[field.id]
                          ? 'border-red-500 bg-slate-50 text-slate-800 focus:ring-red-500/30'
                          : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-400 focus:ring-indigo-400/20'
                      }`}
                      placeholder={`Enter your message...`}
                      aria-invalid={!!errors[field.id]}
                      aria-describedby={`${field.id}-error`}
                    />
                  )}
                  
                  <AnimatePresence>
                    {errors[field.id] && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        id={`${field.id}-error`}
                        className="text-red-550 text-xs mt-2 flex items-center"
                      >
                        <svg className="w-3.5 h-3.5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors[field.id]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className={`w-full px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2.5 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/20'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-600/20'
                } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                aria-label="Send message"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 flex-shrink-0 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast popup notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className={`fixed bottom-8 right-8 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md z-50 flex items-center space-x-3 border ${
              toast.type === 'success'
                ? theme === 'dark'
                  ? 'bg-indigo-950/80 border-indigo-400/35 text-indigo-200'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-850'
                : 'bg-red-500/90 border-red-400 text-white'
            }`}
            role="alert"
          >
            {toast.type === 'success' ? (
              <Check size={20} className="flex-shrink-0" />
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="font-semibold">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;