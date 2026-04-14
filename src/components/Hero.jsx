import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Animated Background Highlights */}
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-12 text-center">
                <div className="w-full max-w-4xl space-y-8 flex flex-col items-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-primary animate-bounce">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for new opportunities
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-[1.1] tracking-tight">
                            Java Full Stack <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-float inline-block">
                                Developer
                            </span>
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl font-mono text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            {"<"} <b>Spring Boot</b>  &bull; <b>Microservices</b> &bull; <b>React.js</b> {"/>"}
                        </h2>
                    </div>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        I specialize in architecting high-performance microservices, implementing robust security frameworks, 
                        and optimizing cloud infrastructure for modern enterprise applications.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2 group"
                        >
                            View Portfolio
                            <ArrowRight className="w-5 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 glass text-slate-200 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 border-slate-700"
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-8 pt-10 justify-center">
                        {[
                            { icon: Github, href: "https://github.com/mhdnaseeel", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/mhdnaseel", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:mhdnaseel521@gmail.com", label: "Email" }
                        ].map((social, i) => (
                            <a 
                                key={i}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-slate-500 hover:text-primary transition-all hover:scale-125 transform duration-300 group relative"
                                aria-label={social.label}
                            >
                                <social.icon className="w-7 h-7" />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

