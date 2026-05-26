import React, { createContext, useState, useEffect, useRef, useMemo } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import EduAchievements from './components/EduAchievements.jsx';
import Contact from './components/Contact.jsx';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import { Analytics } from '@vercel/analytics/react';

export const ThemeContext = createContext();

function App() {
  console.log('App component rendered');
  const particlesContainerRef = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    console.log('Theme updated:', theme);
    document.documentElement.classList.toggle('dark', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const particlesOptions = useMemo(() => {
    console.log('particlesOptions computed');
    return {
      background: {
        color: theme === 'dark' ? '#08080c' : '#fafafa',
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 70,
          density: { enable: true, value_area: 800 },
        },
        color: { value: theme === 'dark' ? '#a5b4fc' : '#4f46e5' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.2, max: 0.5 },
          random: true,
          anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
        },
        size: {
          value: { min: 1.5, max: 2.5 },
          random: true,
          anim: { enable: true, speed: 1.5, size_min: 0.5, sync: false },
        },
        links: {
          enable: true,
          distance: 170,
          color: theme === 'dark' ? '#818cf8' : '#6366f1',
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,           // quiet, modern, and calming
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ['bubble', 'grab'],   // interactive micro-connection on hover
          },
          onClick: {
            enable: false,
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.22,
              color: theme === 'dark' ? '#818cf8' : '#6366f1',
            },
          },
          bubble: {
            distance: 100,
            size: 4,
            opacity: 0.7,
            duration: 2,
            color: theme === 'dark' ? '#a78bfa' : '#8b5cf6'
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    console.log('Particles useEffect started');
    const initParticles = async () => {
      if (!particlesContainerRef.current) {
        console.log('Particles container ref not found');
        return;
      }
      console.log('Initializing tsParticles...');
      try {
        await loadSlim(tsParticles);
        console.log('loadSlim completed');
        const container = await tsParticles.load({
          id: 'tsparticles',
          element: particlesContainerRef.current,
          options: particlesOptions,
        });
        console.log('tsParticles loaded:', container ? 'Container created' : 'No container');
      } catch (error) {
        console.error('tsParticles failed to load:', error);
      }
    };

    initParticles();

    return () => {
      console.log('Cleaning up tsParticles');
      const container = tsParticles.dom().find((c) => c.id === 'tsparticles');
      if (container) {
        container.destroy();
      }
    };
  }, [particlesOptions]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      <div
        id="tsparticles"
        ref={particlesContainerRef}
        className="absolute inset-0 w-full h-full particles-canvas"
        style={{ minHeight: '100vh', zIndex: -10 }}
      />
      <Analytics />
      <AnalyticsTracker />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <AboutMe />
        <Skills />
        <EduAchievements />
        <Contact />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;