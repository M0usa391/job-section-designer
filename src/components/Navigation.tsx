
import { 
  Settings, 
  Calendar, 
  BookOpen, 
  Home,
} from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-t from-islamicBlue-900 to-transparent pt-6 pb-8 animate-fade-up delay-300">
      <div className="flex justify-around items-center px-6 gap-2">
        <NavItem icon={<Settings className="w-6 h-6" />} label="الإعدادات" />
        <NavItem icon={<Calendar className="w-6 h-6" />} label="المناسبات" />
        <NavItem icon={<Home className="w-6 h-6" />} label="الأذكار" active />
        <NavItem icon={<BookOpen className="w-6 h-6" />} label="القرآن" />
        <NavItem icon={<Home className="w-6 h-6" />} label="القبلة" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => {
  return (
    <button className="flex flex-col items-center justify-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
        active ? "bg-islamicCyan/20" : "glass-card"
      }`}>
        <div className={`${active ? "text-islamicCyan" : "text-white/70"}`}>
          {icon}
        </div>
      </div>
      <span className={`text-xs ${active ? "text-islamicCyan" : "text-white/70"} font-medium`}>
        {label}
      </span>
    </button>
  );
};

export default Navigation;
