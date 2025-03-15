
import { PrayerTime } from "../utils/prayerTimes";

interface PrayerTimeCardProps {
  prayer: PrayerTime;
  isActive?: boolean;
}

const PrayerTimeCard = ({ prayer, isActive = false }: PrayerTimeCardProps) => {
  return (
    <div 
      className={`flex flex-col items-center px-5 ${
        isActive ? "scale-110 opacity-100" : "opacity-80"
      } transition-all duration-300 animate-fade-in`}
    >
      <div className="w-10 h-10 mb-2 flex items-center justify-center text-islamicCyan">
        {prayer.icon === "🌙" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1.5C6.75 1.5 3.75 4.5 3.75 8.25C3.75 12 6.75 15 10.5 15C12.75 15 14.5783 13.8458 15.7042 12.0833" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 22.5H13.5C18 22.5 20.25 20.25 20.25 15.75V12.75" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.5 8.25C22.5 4.5 19.5 1.5 15.75 1.5C19.5 1.5 22.5 4.5 22.5 8.25Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : prayer.icon === "☀️" && prayer.name === "Fajr" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : prayer.icon === "🌅" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8.25V12M12 17.25C8.25 17.25 5.25 14.25 5.25 10.5H18.75C18.75 14.25 15.75 17.25 12 17.25Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M5.25 12H3M7.227 7.227L5.636 5.636" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : prayer.icon === "☀️" && prayer.name === "Dhuhr" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : prayer.icon === "🌤️" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 13.5H2.25M4.5 7.5L3.375 6.375M14.25 3.75V2.25M20.25 13.5H18.75M18 7.5L19.125 6.375M7.5 12.75C7.5 10.125 9.375 8.25 12 8.25C14.625 8.25 16.5 10.125 16.5 12.75C16.5 13.875 16.125 15 15.375 15.75C15 16.125 14.625 17.25 15 18C6.375 18 5.625 18 5.625 18C6 17.25 5.625 16.125 5.25 15.75C4.5 15 3.75 13.875 3.75 12.75" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15.75V18.75" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 20.25H9" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : prayer.icon === "🌆" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 13.5H2.25" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.75 21H20.25" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.625 13.5H3.75C3.75 13.5 3.75 16.5 3.75 17.25C3.75 18 4.5 18 4.5 18H6C6 18 5.25 17.25 5.25 15.75C5.25 14.25 5.625 13.5 5.625 13.5Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.625 13.5C5.625 13.5 6.75 15.75 6.75 17.25C6.75 18.75 6 18.75 6 18.75H9C9 18.75 8.25 18.75 8.25 17.25C8.25 15.75 9.375 13.5 9.375 13.5H5.625Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.625 13.5C14.625 13.5 15.75 15.75 15.75 17.25C15.75 18.75 15 18.75 15 18.75H18C18 18.75 17.25 18.75 17.25 17.25C17.25 15.75 18.375 13.5 18.375 13.5H14.625Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.375 13.5C9.375 13.5 10.5 11.625 12 11.625C13.5 11.625 14.625 13.5 14.625 13.5" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.375 13.5H20.25C20.25 13.5 20.25 16.5 20.25 17.25C20.25 18 19.5 18 19.5 18H18C18 18 18.75 17.25 18.75 15.75C18.75 14.25 18.375 13.5 18.375 13.5Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="#4ECDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      
      <h3 className="text-sm text-islamicCyan font-medium text-center">
        {prayer.nameArabic}
      </h3>
      
      <p className="text-xl text-white font-semibold mt-1 text-shadow">
        {prayer.time}
      </p>
    </div>
  );
};

export default PrayerTimeCard;
