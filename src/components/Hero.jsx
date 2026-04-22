import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import TinyMovingDot from './TinyMovingDot';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dot-pattern">
            <TinyMovingDot />
            {/* Ambient background blurs - pulsing ambient blobs */}
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none animate-hero-glow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none animate-hero-glow-reverse"></div>

            <div className="max-w-3xl mx-auto px-6 py-20 text-center relative z-10">
                {/* Profile Photo - Large Circle with Glow Ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex justify-center mb-8"
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

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-400 text-lg mb-3"
                >
                    Hi, I'm <span className="text-primary font-semibold">@mhdnaseel</span>,
                </motion.p>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight"
                >
                    <span className="text-gradient">Software Engineer</span>
                    <br />
                    who builds <span className="text-white">cloud-native</span>
                    <br />
                    enterprise <span className="text-primary">solutions</span>
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-3 justify-center mt-10"
                >
                    <span className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-300 text-sm font-medium">
                        Java & Spring Boot
                    </span>
                    <span className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-300 text-sm font-medium">
                        Cloud Architecture
                    </span>
                    <span className="px-5 py-2.5 rounded-full border border-primary/30 bg-primary/[0.08] text-primary text-sm font-medium flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        mhdnaseeel
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4 justify-center mt-8"
                >
                    <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/mhdnaseel" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:mhdnaseel521@gmail.com" 
                       className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
