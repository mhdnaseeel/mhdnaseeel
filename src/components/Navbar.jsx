import { useState, useEffect } from 'react';
import { Briefcase, FolderCode, Mail, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'My path', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'What I build', href: '#projects', icon: <FolderCode className="w-4 h-4" /> },
    { name: "Let's talk", href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav className={`transition-all duration-500 ${
        scrolled 
          ? 'bg-[#131c31]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-white/[0.08]' 
          : 'bg-transparent border-transparent'
        } border rounded-full px-2`}
      >
        <div className="flex items-center h-12 gap-1 px-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-slate-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08]"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
