
import { Clock, BookOpen, Moon } from "lucide-react";
import { useState, useEffect } from "react";

interface CurrentActivityProps {
  activity: string;
}

const ACTIVITIES = [
  { icon: <Clock className="text-amber-300 w-5 h-5" />, text: "الآن: أذكار النوم - قيام الليل - صلاة الوتر" },
  { icon: <BookOpen className="text-amber-300 w-5 h-5" />, text: "الآن: قراءة سورة الكهف - أذكار يوم الجمعة" },
  { icon: <Moon className="text-amber-300 w-5 h-5" />, text: "الآن: قيام الليل - تهجد - استغفار" }
];

const CurrentActivity = ({ activity }: CurrentActivityProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ACTIVITIES.length);
    }, 10000); // تغيير النشاط كل 10 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  const currentActivity = ACTIVITIES[currentIndex];

  return (
    <div className="w-full px-6 pt-4 animate-fade-up delay-200">
      <div className="w-full rounded-xl glass-card py-3 px-4 flex items-center gap-3">
        {currentActivity.icon}
        <p className="text-right text-white text-sm font-medium">
          {currentActivity.text}
        </p>
      </div>
    </div>
  );
};

export default CurrentActivity;
