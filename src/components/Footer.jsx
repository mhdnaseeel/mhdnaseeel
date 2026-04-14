const Footer = () => {
    return (
        <footer className="py-12 bg-slate-950 border-t border-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-bold text-slate-100 tracking-tight">
                        mhd<span className="text-primary">naseel</span>
                    </span>
                    <p className="text-slate-500 text-sm">
                        Built with React, Tailwind & Vite.
                    </p>
                </div>
                
                <div className="text-slate-400 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Muhammed Naseel. All rights reserved.
                </div>
                
                <div className="flex gap-6">
                    <a href="#hero" className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">Home</a>
                    <a href="#projects" className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">Work</a>
                    <a href="#contact" className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
