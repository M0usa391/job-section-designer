
// This is a simplified model for prayer times
export interface PrayerTime {
  name: string;
  nameArabic: string;
  time: string;
  icon: React.ReactNode;
}

export interface PrayerDay {
  date: string;
  hijriDate: string;
  gregorianDate: string;
  day: string;
  prayerTimes: PrayerTime[];
  nextPrayer: string;
  remainingTime: string;
  midnight: string;
  lastThird: string;
}

export function calculateTimeBetween(startTime: string, endTime: string): string {
  // Simple implementation for demo purposes
  // In a real app, we would use a proper date/time library
  const start = new Date(`2000/01/01 ${startTime}`);
  const end = new Date(`2000/01/01 ${endTime}`);
  
  // If end is earlier than start, add a day to end
  if (end < start) {
    end.setDate(end.getDate() + 1);
  }
  
  const diff = end.getTime() - start.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Mock data for demonstration
export const getPrayerTimes = (): PrayerDay => {
  return {
    date: "السبت 15 رمضان • 15 مارس",
    hijriDate: "15 رمضان",
    gregorianDate: "15 مارس",
    day: "السبت",
    prayerTimes: [
      { name: "Fajr", nameArabic: "فجر", time: "5:53", icon: "☀️" },
      { name: "Sunrise", nameArabic: "شروق", time: "7:11", icon: "🌅" },
      { name: "Dhuhr", nameArabic: "ظهر", time: "1:15", icon: "☀️" },
      { name: "Asr", nameArabic: "عصر", time: "4:36", icon: "🌤️" },
      { name: "Maghrib", nameArabic: "مغرب", time: "7:14", icon: "🌆" },
      { name: "Isha", nameArabic: "عشاء", time: "8:29", icon: "🌙" }
    ],
    nextPrayer: "الفجر",
    remainingTime: "02:08:39",
    midnight: "12:33",
    lastThird: "2:19"
  };
};

export const getDailyDua = (): string => {
  return "اللَّهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنْ الرَّاشِدِينَ";
};

export const getCurrentActivity = (): string => {
  return "الان: اذكار النوم - قيام الليل - صلاة الوتر";
};
