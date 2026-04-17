const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/[0.04]">
            <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Muhammed Naseel
                </p>
                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
