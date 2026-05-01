const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/[0.04]">
            <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600 text-sm">
                    © {new Date().getFullYear()} Muhammed Naseel
                </p>
                <div className="flex gap-6 text-sm text-zinc-600">
                    <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-zinc-400 transition-colors">Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
