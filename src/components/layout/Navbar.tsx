import { useState, useEffect } from 'react';
import { Briefcase, FolderCode, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'My path', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'What I build', href: '#projects', icon: <FolderCode className="w-4 h-4" /> },
    { name: "Let's talk", href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0c0c0f]/85 backdrop-blur-2xl shadow-lg shadow-black/30 border-white/[0.06]' 
          : 'bg-transparent border-transparent'
        } border rounded-full px-2`}
      >
        <div className="flex items-center h-12 gap-1 px-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06]"
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
          

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
