import { useState, useEffect } from 'react';

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
        className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ease-in-out shadow-lg overflow-hidden border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 ${
          darkMode 
            ? 'bg-[#1e2337] border-[#2a314d] shadow-indigo-900/20' 
            : 'bg-[#51bbed] border-[#61c5f4] shadow-sky-400/20'
        }`}
        aria-label="Toggle theme"
      >
        {/* Sky Elements Background */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {/* Dark Mode Stars */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              darkMode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></div>
            <div className="absolute top-5 left-6 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)] animate-[pulse_3s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-7 left-2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_3px_rgba(255,255,255,0.8)] animate-[pulse_2.5s_ease-in-out_infinite_1s]"></div>
            <div className="absolute top-3 left-10 w-1 h-1 bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)] animate-[pulse_1.5s_ease-in-out_infinite_0.2s]"></div>
          </div>

          {/* Light Mode Clouds */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              darkMode ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Main Cloud Layer */}
            <div className="absolute bottom-[-4px] right-1 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute bottom-[-8px] right-4 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-[-2px] right-8 w-5 h-5 bg-white rounded-full"></div>
            <div className="absolute bottom-[-6px] right-[-2px] w-5 h-5 bg-white rounded-full"></div>
            
            {/* Background Cloud Layer (slightly translucent) */}
            <div className="absolute top-1 right-2 w-6 h-6 bg-white/40 rounded-full blur-[1px]"></div>
            <div className="absolute top-2 right-6 w-5 h-5 bg-white/40 rounded-full blur-[1px]"></div>
          </div>
        </div>

        {/* Toggle Thumb */}
        <div 
          className={`relative z-10 w-8 h-8 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] flex items-center justify-center overflow-hidden ${
            darkMode 
              ? 'translate-x-10 bg-[#c2cdd1] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),0_0_10px_rgba(255,255,255,0.3)]' 
              : 'translate-x-0 bg-[#ffdf5d] shadow-[inset_-2px_-2px_4px_rgba(217,119,6,0.3),0_0_15px_rgba(255,223,93,0.6)]'
          }`}
        >
          {/* Moon Craters */}
          <div 
            className={`absolute inset-0 transition-opacity duration-300 ${
              darkMode ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-[#9fb1b8] rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"></div>
            <div className="absolute top-3.5 left-4 w-2.5 h-2.5 bg-[#9fb1b8] rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"></div>
            <div className="absolute top-5 left-1.5 w-1.5 h-1.5 bg-[#9fb1b8] rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
