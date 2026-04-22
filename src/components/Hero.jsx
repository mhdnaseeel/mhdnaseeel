import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TinyMovingDot from './TinyMovingDot';

const roles = ['Software Engineer', 'Backend Developer', 'Fullstack Developer', 'Problem Solver'];

// Floating tech symbols scattered around the hero
const floatingSymbols = [
    { char: '✦', x: '8%', y: '15%', delay: 0, size: '14px', opacity: 0.15 },
    { char: '+', x: '85%', y: '12%', delay: 0.5, size: '18px', opacity: 0.12 },
    { char: '·', x: '92%', y: '45%', delay: 1, size: '24px', opacity: 0.15 },
    { char: '0', x: '5%', y: '70%', delay: 1.5, size: '12px', opacity: 0.08 },
    { char: '1', x: '12%', y: '80%', delay: 2, size: '12px', opacity: 0.08 },
    { char: '✦', x: '90%', y: '75%', delay: 0.8, size: '12px', opacity: 0.12 },
    { char: '+', x: '15%', y: '40%', delay: 1.2, size: '14px', opacity: 0.1 },
    { char: '·', x: '80%', y: '30%', delay: 0.3, size: '20px', opacity: 0.1 },
    { char: '{ }', x: '75%', y: '85%', delay: 1.8, size: '13px', opacity: 0.08 },
    { char: '//', x: '20%', y: '25%', delay: 0.7, size: '13px', opacity: 0.07 },
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Typing animation effect
    useEffect(() => {
        const currentFullText = roles[currentRole];
        let timeout;

        if (!isDeleting && displayText === currentFullText) {
            // Pause at full text, then start deleting
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            // Move to next role
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(currentFullText.substring(0, displayText.length - 1));
            }, 40);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
            }, 80);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    // Blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dot-pattern">
            <TinyMovingDot />

            {/* Ambient background blurs */}
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none animate-hero-glow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none animate-hero-glow-reverse"></div>

            {/* Floating tech symbols */}
            {floatingSymbols.map((sym, i) => (
                <motion.span
                    key={i}
                    className="absolute pointer-events-none font-mono select-none text-slate-400"
                    style={{ left: sym.x, top: sym.y, fontSize: sym.size, opacity: 0 }}
                    animate={{
                        opacity: [0, sym.opacity, sym.opacity, 0],
                        y: [0, -8, 8, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: sym.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    {sym.char}
                </motion.span>
            ))}

            {/* Main hero content - two-column on desktop */}
            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left: Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex-shrink-0"
                >
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-ring">
                            <div className="hero-avatar-inner">
                                <img
                                    src="/assets/profile.jpg"
                                    alt="Muhammed Naseel"
                                    className="hero-avatar-img"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text content */}
                <div className="text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 text-base sm:text-lg mb-4"
                    >
                        Hi, I'm <span className="text-primary font-semibold">@mhdnaseel</span>,
                    </motion.p>

                    {/* Main heading with typing animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hero-heading"
                    >
                        <span className="text-gradient">{displayText}</span>
                        <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.1s' }}>|</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl leading-relaxed"
                    >
                        who builds <span className="text-white font-medium">cloud-native</span> enterprise{' '}
                        <span className="text-white font-medium">solutions</span> with{' '}
                        <span className="text-white font-medium">Java</span>,{' '}
                        <span className="text-white font-medium">Spring Boot</span> &{' '}
                        <span className="text-white font-medium">Microservices</span>
                    </motion.p>

                    {/* Floating pill tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap gap-2.5 justify-center md:justify-start mt-8"
                    >
                        <span className="hero-pill">
                            Java & Spring Boot
                        </span>
                        <span className="hero-pill">
                            Full Stack Developer
                        </span>
                        <span className="hero-pill hero-pill-accent">
                            <Github className="w-3.5 h-3.5" />
                            mhdnaseeel
                        </span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-3 justify-center md:justify-start mt-8"
                    >
                        <a href="#experience" className="hero-btn-primary">
                            My path
                        </a>
                        <a href="#projects" className="hero-btn-secondary">
                            What I build
                        </a>
                        <a href="#contact" className="hero-btn-secondary">
                            Let's talk
                        </a>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex gap-3 justify-center md:justify-start mt-6"
                    >
                        <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer"
                            className="hero-social-icon">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://linkedin.com/in/mhdnaseel" target="_blank" rel="noopener noreferrer"
                            className="hero-social-icon">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="mailto:mhdnaseel521@gmail.com"
                            className="hero-social-icon">
                            <Mail className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
