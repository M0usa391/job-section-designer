
import { Share2, HelpCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center animate-fade-in">
      <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
        <HelpCircle className="w-5 h-5 text-white/80" />
      </button>
      
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold text-white mb-1 text-shadow">سبها</h1>
      </div>
      
      <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
        <Share2 className="w-5 h-5 text-white/80" />
      </button>
    </header>
  );
};

export default Header;
