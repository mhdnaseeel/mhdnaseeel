const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Muhammed Naseel. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
