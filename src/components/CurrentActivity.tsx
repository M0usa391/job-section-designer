
import { Clock } from "lucide-react";

interface CurrentActivityProps {
  activity: string;
}

const CurrentActivity = ({ activity }: CurrentActivityProps) => {
  return (
    <div className="w-full px-6 pt-4 animate-fade-up delay-200">
      <div className="w-full rounded-xl glass-card py-3 px-4 flex items-center">
        <Clock className="text-amber-300 w-5 h-5 ml-2" />
        <p className="text-right text-white text-sm font-medium">
          {activity}
        </p>
      </div>
    </div>
  );
};

export default CurrentActivity;
