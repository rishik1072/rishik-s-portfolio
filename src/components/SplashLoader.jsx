import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Register CSSPlugin
gsap.registerPlugin(CSSPlugin);

const SplashLoader = ({ onAnimationComplete }) => {
  const containerRef = useRef(null);
  const monogramRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const monogram = monogramRef.current;
    const text = textRef.current;
    const glow = glowRef.current;
    
    if (!container || !monogram || !text) return;

    // Reset initial styles
    gsap.set(monogram, { opacity: 0, y: 30, scale: 0.95 });
    gsap.set(text, { opacity: 0, y: 15 });
    gsap.set(glow, { opacity: 0, scale: 0.8 });

    // Main Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Smooth fade out container
        gsap.to(container, {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsMounted(false);
            if (onAnimationComplete) onAnimationComplete();
          }
        });
      },
    });

    // Animate monogram (RG) and glow
    tl.to(glow, {
      opacity: 0.6,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    })
    .to(monogram, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power4.out'
    }, '-=1.0')
    // Animate subtext (Initializing Portfolio...)
    .to(text, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power3.out'
    }, '-=0.5')
    // Hold for a moment to feel premium and calm
    .to({}, { duration: 0.8 });

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08080c',
        zIndex: 100000,
        opacity: 1,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Ambient background glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Brand Centered */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1
          ref={monogramRef}
          style={{
            fontSize: '5.5rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            margin: 0,
            background: 'linear-gradient(135deg, #e0e7ff 0%, #818cf8 50%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 30px rgba(99, 102, 241, 0.25)',
          }}
        >
          RG
        </h1>
        
        <p
          ref={textRef}
          style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(165, 180, 252, 0.6)',
            marginTop: '1.5rem',
            animation: 'pulseText 2s ease-in-out infinite',
          }}
        >
          Initializing Portfolio...
        </p>
      </div>

      <style>{`
        @keyframes pulseText {
          0%, 100% {
            opacity: 0.5;
            letter-spacing: 0.3em;
          }
          50% {
            opacity: 0.85;
            letter-spacing: 0.33em;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashLoader;