import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-12 text-center">
                <div className="w-full max-w-3xl space-y-6 flex flex-col items-center">
                    <div className="space-y-2">
                        <h2 className="text-primary font-mono text-lg tracking-wide">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
                            Muhammed Naseel
                            <span className="block text-slate-400 text-3xl md:text-5xl mt-2 font-mono">
                                {"<SoftwareEngineer />"}
                            </span>
                        </h1>
                        <p className="text-primary text-xl font-medium pt-2">Java & Spring Boot Specialist</p>
                    </div>

                    <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                        Results-driven Java Developer with 2+ years of experience in building cloud-based
                        enterprise solutions using Spring Boot, AWS, and Python.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-primary hover:text-primary hover:bg-slate-800/50 transition-all"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 pt-6 justify-center">
                        <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/mhdnaseel" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:mhdnaseel521@gmail.com" className="text-slate-500 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
