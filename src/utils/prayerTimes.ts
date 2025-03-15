
// This file contains utilities for fetching and handling prayer times

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
  // Calculate time between two time strings
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

/**
 * Fetch prayer times from the API
 * We're using the Aladhan API (https://aladhan.com/prayer-times-api)
 */
export async function fetchPrayerTimes(city: string = 'Tripoli', country: string = 'Libya'): Promise<any> {
  try {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity/${year}-${month}-${day}?city=${city}&country=${country}&method=5`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch prayer times');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    return null;
  }
}

/**
 * Format prayer times from API response to our format
 */
export function formatPrayerTimes(apiResponse: any): PrayerTime[] {
  if (!apiResponse || !apiResponse.data || !apiResponse.data.timings) {
    return getMockPrayerTimes().prayerTimes;
  }
  
  const timings = apiResponse.data.timings;
  
  return [
    { name: "Fajr", nameArabic: "فجر", time: timings.Fajr, icon: "☀️" },
    { name: "Sunrise", nameArabic: "شروق", time: timings.Sunrise, icon: "🌅" },
    { name: "Dhuhr", nameArabic: "ظهر", time: timings.Dhuhr, icon: "☀️" },
    { name: "Asr", nameArabic: "عصر", time: timings.Asr, icon: "🌤️" },
    { name: "Maghrib", nameArabic: "مغرب", time: timings.Maghrib, icon: "🌆" },
    { name: "Isha", nameArabic: "عشاء", time: timings.Isha, icon: "🌙" }
  ];
}

/**
 * Get the next prayer and time remaining
 */
export function getNextPrayer(prayerTimes: PrayerTime[]): { name: string, remainingTime: string } {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeInMinutes = currentHours * 60 + currentMinutes;
  
  // Convert prayer times to minutes for comparison
  const prayerTimesInMinutes = prayerTimes.map(prayer => {
    const [hours, minutes] = prayer.time.split(':').map(part => parseInt(part));
    return {
      name: prayer.nameArabic,
      timeInMinutes: hours * 60 + minutes
    };
  });
  
  // Find the next prayer
  let nextPrayer = prayerTimesInMinutes[0];
  
  for (const prayer of prayerTimesInMinutes) {
    if (prayer.timeInMinutes > currentTimeInMinutes) {
      nextPrayer = prayer;
      break;
    }
  }
  
  // Calculate time remaining
  let remainingMinutes = nextPrayer.timeInMinutes - currentTimeInMinutes;
  
  // If it's negative, we've passed all prayers today, so the next one is tomorrow's Fajr
  if (remainingMinutes < 0) {
    remainingMinutes += 24 * 60; // Add a day
  }
  
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;
  const seconds = now.getSeconds();
  
  return {
    name: nextPrayer.name,
    remainingTime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${(60 - seconds).toString().padStart(2, '0')}`
  };
}

// Backup mock data in case API fails
export const getMockPrayerTimes = (): PrayerDay => {
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

// Mock data for daily dua
export const getDailyDua = (): string => {
  const duas = [
    "اللَّهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنْ الرَّاشِدِينَ",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "اللّهُـمَّ لك أسْـلَمْتُ وَبِكَ آمَنْـتُ، وَعَلَـيْكَ تَوَكَّلْـتُ، وَإِلَـيْكَ أَنَبْـتُ، وَبِكَ خاصَمْتُ",
    "اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره",
    "اللهم إني أسألك العفو والعافية في الدنيا والآخرة"
  ];
  
  const randomIndex = Math.floor(Math.random() * duas.length);
  return duas[randomIndex];
};

export const getCurrentActivity = (): string => {
  const activities = [
    "الان: اذكار النوم - قيام الليل - صلاة الوتر",
    "الان: اذكار الصباح - صلاة الضحى",
    "الان: قراءة القرآن - اذكار المساء",
    "الان: صلاة التهجد - الاستغفار"
  ];
  
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 10) {
    return activities[1]; // صباحا
  } else if (hour >= 10 && hour < 16) {
    return activities[2]; // ظهرا
  } else if (hour >= 16 && hour < 22) {
    return activities[2]; // مساءا
  } else {
    return activities[0]; // ليلا
  }
};
