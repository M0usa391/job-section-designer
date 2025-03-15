
import { Share2, HelpCircle, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // عند التحميل، نتحقق مما إذا كان المستخدم يفضل الوضع الليلي أو النهاري
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    
    // تطبيق الوضع الليلي/النهاري على عنصر html
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center animate-fade-in">
      <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
        <HelpCircle className="w-5 h-5 text-white/80" />
      </button>
      
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold text-white mb-1 text-shadow">سبها</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          className="w-10 h-10 rounded-full flex items-center justify-center glass-card"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-white/80" />
          ) : (
            <Moon className="w-5 h-5 text-white/80" />
          )}
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
          <Share2 className="w-5 h-5 text-white/80" />
        </button>
      </div>
    </header>
  );
};

export default Header;
