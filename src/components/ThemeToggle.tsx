import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-6 xl:right-12 z-[60]">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl shadow-lg transition-all hover:scale-110 border ${
          darkMode
            ? 'bg-[#0c0c0f]/90 shadow-black/30 text-zinc-500 hover:text-zinc-200 border-white/[0.06] hover:border-white/[0.1]'
            : 'bg-white/90 shadow-black/5 text-slate-600 hover:text-slate-800 border-slate-200 hover:border-slate-300'
        }`}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
