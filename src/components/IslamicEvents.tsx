
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// قائمة المناسبات الإسلامية لعام 2024
const ISLAMIC_EVENTS = [
  { date: "1 رمضان", gregorian: "11 مارس", name: "بداية شهر رمضان", description: "شهر الصيام والعبادة" },
  { date: "17 رمضان", gregorian: "27 مارس", name: "غزوة بدر", description: "ذكرى معركة بدر الكبرى" },
  { date: "21 رمضان", gregorian: "31 مارس", name: "فتح مكة", description: "ذكرى فتح مكة المكرمة" },
  { date: "27 رمضان", gregorian: "6 أبريل", name: "ليلة القدر", description: "ليلة القدر خير من ألف شهر" },
  { date: "1 شوال", gregorian: "10 أبريل", name: "عيد الفطر", description: "عيد الفطر المبارك" },
  { date: "10 ذو الحجة", gregorian: "17 يونيو", name: "عيد الأضحى", description: "عيد الأضحى المبارك" },
  { date: "1 محرم", gregorian: "7 يوليو", name: "رأس السنة الهجرية", description: "بداية السنة الهجرية الجديدة" },
  { date: "12 ربيع الأول", gregorian: "16 سبتمبر", name: "المولد النبوي", description: "ذكرى مولد النبي محمد" },
];

const IslamicEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ISLAMIC_EVENTS.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ISLAMIC_EVENTS.length) % ISLAMIC_EVENTS.length);
  };

  const currentEvent = ISLAMIC_EVENTS[currentIndex];

  return (
    <div className="w-full px-6 py-3 animate-fade-up">
      <div className="w-full rounded-xl glass-card py-4 px-4">
        <div className="flex justify-between items-center mb-3">
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center glass-card"
            onClick={prevEvent}
          >
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>
          
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-violet-300 mr-1" />
            <span className="text-lg text-violet-300 font-medium">المناسبات الإسلامية</span>
          </div>
          
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center glass-card"
            onClick={nextEvent}
          >
            <ChevronLeft className="w-5 h-5 text-white/80" />
          </button>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-1">{currentEvent.name}</h3>
          <p className="text-sm text-white/80 mb-2">{currentEvent.description}</p>
          <div className="flex justify-center items-center gap-3 mt-3">
            <div className="bg-violet-500/20 px-3 py-1 rounded-full">
              <p className="text-sm text-violet-300">{currentEvent.date}</p>
            </div>
            <div className="bg-violet-500/10 px-3 py-1 rounded-full">
              <p className="text-sm text-violet-300">{currentEvent.gregorian}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicEvents;
