
import { PrayerTime } from "../utils/prayerTimes";
import PrayerTimeCard from "./PrayerTimeCard";

interface DailyPrayerProps {
  prayerTimes: PrayerTime[];
  midnight: string;
  lastThird: string;
}

const DailyPrayer = ({ prayerTimes, midnight, lastThird }: DailyPrayerProps) => {
  return (
    <div className="w-full px-2 animate-fade-up delay-100">
      <div className="w-full overflow-x-auto scrollbar-none pb-4">
        <div className="flex justify-between min-w-max px-2">
          {prayerTimes.map((prayer, index) => (
            <PrayerTimeCard 
              key={prayer.name} 
              prayer={prayer}
              isActive={index === 0} // Highlight Fajr for demo
            />
          ))}
        </div>
      </div>
      
      <div className="w-full px-6 mt-2 flex justify-between items-center text-white/80">
        <div className="text-center">
          <p className="text-sm opacity-90">الثلث الآخير</p>
          <p className="text-lg font-semibold">{lastThird}</p>
        </div>
        
        <div className="h-6 border-r border-white/20"></div>
        
        <div className="text-center">
          <p className="text-sm opacity-90">نصف الليل</p>
          <p className="text-lg font-semibold">{midnight}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyPrayer;
