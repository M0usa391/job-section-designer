
import { useEffect, useState } from "react";
import { getPrayerTimes, getDailyDua, getCurrentActivity } from "../utils/prayerTimes";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import DailyPrayer from "../components/DailyPrayer";
import DateDisplay from "../components/DateDisplay";
import DailyDua from "../components/DailyDua";
import CurrentActivity from "../components/CurrentActivity";
import Navigation from "../components/Navigation";

const Index = () => {
  const prayerData = getPrayerTimes();
  const dua = getDailyDua();
  const currentActivity = getCurrentActivity();
  const [progressValue, setProgressValue] = useState(45);

  // Generate stars for the background
  const [stars, setStars] = useState<{ top: string; left: string; size: string; delay: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 0.25 + 0.1}px`,
        delay: `${Math.random() * 5}s`
      });
    }
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars = [];
    for (let i = 0; i < 3; i++) {
      newShootingStars.push({
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10 + i * 5}s`
      });
    }
    setShootingStars(newShootingStars);

    // Update progress for demo
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        // Ensure value stays within 0-100
        const newValue = prev + 0.1;
        return newValue > 100 ? 0 : newValue;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-night-sky">
      {/* Stars background */}
      <div className="stars-container">
        {stars.map((star, i) => (
          <div 
            key={i}
            className="star animate-pulse-light"
            style={{ 
              top: star.top, 
              left: star.left, 
              width: star.size, 
              height: star.size,
              animationDelay: star.delay 
            }}
          />
        ))}
        
        {shootingStars.map((star, i) => (
          <div 
            key={i}
            className="shooting-star animate-shooting-star"
            style={{ 
              top: star.top, 
              left: star.left, 
              animationDelay: star.delay 
            }}
          />
        ))}
      </div>

      <Header />

      <main className="pt-2 pb-32">
        <CountdownTimer targetTime={prayerData.remainingTime} label="بقي على الفجر" />
        
        <div className="w-full px-8 my-4">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressValue}%` }}></div>
          </div>
        </div>
        
        <div className="flex justify-between items-center w-full px-8 text-sm mb-4">
          <div className="text-white">
            <p>الفجر 5:53</p>
          </div>
          <div className="text-white">
            <p>العشاء 8:29</p>
          </div>
        </div>
        
        <DailyPrayer 
          prayerTimes={prayerData.prayerTimes}
          midnight={prayerData.midnight}
          lastThird={prayerData.lastThird}
        />
        
        <DateDisplay date={prayerData.date} />
        
        <DailyDua dua={dua} />
        
        <CurrentActivity activity={currentActivity} />
      </main>

      <Navigation />
    </div>
  );
};

export default Index;
