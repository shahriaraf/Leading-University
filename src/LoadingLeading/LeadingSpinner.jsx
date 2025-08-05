import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

const LeadingSpinner = () => {
  const coreRef = useRef(null);
  const orbitRef = useRef(null);
  const particlesRef = useRef([]);
  const energyRingRef = useRef(null);
  const containerRef = useRef(null);
  const waveRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate quantum particles
    const particleArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      angle: (i * 30) * Math.PI / 180,
      radius: 40 + Math.random() * 20,
      speed: 0.8 + Math.random() * 0.4,
      size: 2 + Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4,
    }));
    setParticles(particleArray);
  }, []);

  useGSAP(() => {
    // Core quantum field pulsation
    gsap.to(coreRef.current, {
      scale: 1.3,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Core glow intensity
    gsap.to(coreRef.current, {
      filter: "brightness(1.5) saturate(1.8)",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Orbital rings rotation
    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    // Energy ring expansion
    gsap.to(energyRingRef.current, {
      scale: 2.5,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: "power2.out",
    });

    // Quantum wave distortion
    gsap.to(waveRef.current, {
      scaleX: 1.5,
      scaleY: 0.3,
      rotation: 180,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Container dimensional shift
    gsap.to(containerRef.current, {
      rotateX: 5,
      rotateY: 10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate individual particles
    particles.forEach((particle, i) => {
      if (particlesRef.current[i]) {
        gsap.to(particlesRef.current[i], {
          rotation: 360 * particle.speed,
          duration: 4 / particle.speed,
          repeat: -1,
          ease: "none",
        });

        gsap.to(particlesRef.current[i], {
          scale: 1.5,
          opacity: particle.opacity * 0.3,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: i * 0.1,
        });
      }
    });

  }, [particles]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black overflow-hidden relative">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-cyan-400/20 animate-pulse" style={{animationDelay: `${i * 0.01}s`}}></div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative" style={{ perspective: "1000px" }}>
        {/* Quantum wave distortion */}
        <div
          ref={waveRef}
          className="absolute inset-0 w-32 h-32 rounded-full border-2 border-cyan-400/30 -translate-x-16 -translate-y-16"
          style={{
            background: "conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
            filter: "blur(1px)",
          }}
        ></div>

        {/* Energy expansion rings */}
        <div
          ref={energyRingRef}
          className="absolute inset-0 w-20 h-20 rounded-full border border-violet-400/60 -translate-x-10 -translate-y-10"
          style={{
            background: "radial-gradient(circle, transparent 60%, rgba(139, 92, 246, 0.1) 80%, transparent)",
            filter: "blur(0.5px)",
          }}
        ></div>

        {/* Orbital system */}
        <div ref={orbitRef} className="relative w-32 h-32">
          {/* Multiple orbital rings */}
          <div className="absolute inset-4 border border-emerald-400/40 rounded-full animate-spin" style={{animationDuration: "8s"}}></div>
          <div className="absolute inset-6 border border-orange-400/40 rounded-full animate-spin" style={{animationDuration: "6s", animationDirection: "reverse"}}></div>
          <div className="absolute inset-8 border border-pink-400/40 rounded-full animate-spin" style={{animationDuration: "10s"}}></div>

          {/* Quantum particles */}
          {particles.map((particle, i) => (
            <div
              key={particle.id}
              ref={el => particlesRef.current[i] = el}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsl(${180 + i * 30}, 70%, 60%)`,
                left: `${50 + particle.radius * Math.cos(particle.angle)}%`,
                top: `${50 + particle.radius * Math.sin(particle.angle)}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: `0 0 ${particle.size * 3}px hsl(${180 + i * 30}, 70%, 60%)`,
                filter: "brightness(1.5)",
              }}
            ></div>
          ))}
        </div>

        {/* Quantum core */}
        <div
          ref={coreRef}
          className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-6 -translate-y-6 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{
            background: "radial-gradient(circle at 30% 30%, #00f5ff, #8a2be2, #ff1493, #00f5ff)",
            boxShadow: `
              0 0 20px rgba(0, 245, 255, 0.8),
              0 0 40px rgba(138, 43, 226, 0.6),
              0 0 60px rgba(255, 20, 147, 0.4),
              inset 0 0 20px rgba(255, 255, 255, 0.3)
            `,
            animation: "quantum-shift 2s infinite alternate",
          }}
        >
          <span className="text-xs font-mono tracking-wider" style={{
            textShadow: "0 0 10px rgba(255,255,255,0.8)",
            filter: "drop-shadow(0 0 5px rgba(0,245,255,0.8))"
          }}>
            LU
          </span>
        </div>

        {/* Holographic text */}
        <div className="absolute top-full mt-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-cyan-400 text-sm font-mono tracking-[0.3em] opacity-80 relative">
            <span className="relative z-10">QUANTUM LOADING</span>
            <div className="absolute inset-0 text-cyan-300 animate-ping opacity-30">QUANTUM LOADING</div>
          </div>
          <div className="text-violet-400 text-xs font-mono mt-2 opacity-60">
            <span className="inline-block animate-pulse">▓</span>
            <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>▓</span>
            <span className="inline-block animate-pulse" style={{animationDelay: '0.4s'}}>▓</span>
            <span className="inline-block animate-pulse" style={{animationDelay: '0.6s'}}>▓</span>
            <span className="inline-block animate-pulse" style={{animationDelay: '0.8s'}}>▓</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes quantum-shift {
          0% { filter: hue-rotate(0deg) brightness(1) saturate(1); }
          25% { filter: hue-rotate(90deg) brightness(1.2) saturate(2); }
          50% { filter: hue-rotate(180deg) brightness(0.8) saturate(1.5); }
          75% { filter: hue-rotate(270deg) brightness(1.3) saturate(1.8); }
          100% { filter: hue-rotate(360deg) brightness(1) saturate(1); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default LeadingSpinner;