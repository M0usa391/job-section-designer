
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateDisplayProps {
  date: string;
}

const DateDisplay = ({ date }: DateDisplayProps) => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 animate-fade-up">
      <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
        <ChevronLeft className="w-5 h-5 text-white/80" />
      </button>
      
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white text-shadow">{date}</h2>
      </div>
      
      <button className="w-10 h-10 rounded-full flex items-center justify-center glass-card">
        <ChevronRight className="w-5 h-5 text-white/80" />
      </button>
    </div>
  );
};

export default DateDisplay;
