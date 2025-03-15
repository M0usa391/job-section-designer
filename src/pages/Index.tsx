
import { useEffect, useState } from "react";
import { fetchPrayerTimes, formatPrayerTimes, getNextPrayer, getMockPrayerTimes, getDailyDua, getCurrentActivity } from "../utils/prayerTimes";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import DailyPrayer from "../components/DailyPrayer";
import DateDisplay from "../components/DateDisplay";
import DailyDua from "../components/DailyDua";
import CurrentActivity from "../components/CurrentActivity";
import RandomVerse from "../components/RandomVerse";
import IslamicEvents from "../components/IslamicEvents";
import Navigation from "../components/Navigation";
import { PrayerTime } from "../utils/prayerTimes";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [nextPrayer, setNextPrayer] = useState({ name: "الفجر", remainingTime: "00:00:00" });
  const [progressValue, setProgressValue] = useState(45);
  const [city, setCity] = useState("طرابلس");
  const dua = getDailyDua();
  const currentActivity = getCurrentActivity();

  // Generate stars for the background
  const [stars, setStars] = useState<{ top: string; left: string; size: string; delay: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ top: string; left: string; delay: string }[]>([]);

  // Fetch prayer times from API
  useEffect(() => {
    const loadPrayerTimes = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPrayerTimes();
        if (response && response.data) {
          const formattedTimes = formatPrayerTimes(response);
          setPrayerTimes(formattedTimes);
          
          const next = getNextPrayer(formattedTimes);
          setNextPrayer(next);
        } else {
          // Use mock data if API fails
          setPrayerTimes(getMockPrayerTimes().prayerTimes);
        }
      } catch (error) {
        console.error("Error loading prayer times:", error);
        // Fallback to mock data
        setPrayerTimes(getMockPrayerTimes().prayerTimes);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrayerTimes();
    
    // Update prayer times every hour
    const interval = setInterval(loadPrayerTimes, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);

  // Update next prayer countdown
  useEffect(() => {
    if (prayerTimes.length === 0) return;
    
    const interval = setInterval(() => {
      const next = getNextPrayer(prayerTimes);
      setNextPrayer(next);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [prayerTimes]);

  // Generate stars and shooting stars for night mode
  useEffect(() => {
    if (!isDarkMode) return;
    
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
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-night-sky' : 'bg-day-sky'}`}>
      {/* Stars background (only in dark mode) */}
      {isDarkMode && (
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
      )}

      <Header />

      <main className="pt-2 pb-32">
        {isLoading ? (
          <div className="w-full flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-islamicCyan border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <CountdownTimer targetTime={nextPrayer.remainingTime} label={`بقي على ${nextPrayer.name}`} />
            
            <div className="w-full px-8 my-4">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressValue}%` }}></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center w-full px-8 text-sm mb-4">
              <div className="text-white">
                <p>{prayerTimes[0]?.nameArabic} {prayerTimes[0]?.time}</p>
              </div>
              <div className="text-white">
                <p>{prayerTimes[5]?.nameArabic} {prayerTimes[5]?.time}</p>
              </div>
            </div>
            
            <DailyPrayer 
              prayerTimes={prayerTimes}
              midnight="12:33"
              lastThird="2:19"
            />
            
            <DateDisplay date={`السبت 15 رمضان • ${new Date().toLocaleDateString('ar-LY')}`} />
            
            <RandomVerse />
            
            <IslamicEvents />
            
            <DailyDua dua={dua} />
            
            <CurrentActivity activity={currentActivity} />
          </>
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default Index;
