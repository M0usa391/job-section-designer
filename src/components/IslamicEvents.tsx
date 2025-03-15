
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
    <div className="container-fluid py-3 animate__animated animate__fadeInUp">
      <div className="card btn-glass p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button 
            className="btn btn-glass rounded-circle p-1"
            onClick={prevEvent}
          >
            <i className="bi bi-chevron-right text-white-50 fs-5"></i>
          </button>
          
          <div className="d-flex align-items-center">
            <i className="bi bi-calendar-event text-purple-300 fs-5 me-1"></i>
            <span className="fs-5 text-purple-300 fw-medium">المناسبات الإسلامية</span>
          </div>
          
          <button 
            className="btn btn-glass rounded-circle p-1"
            onClick={nextEvent}
          >
            <i className="bi bi-chevron-left text-white-50 fs-5"></i>
          </button>
        </div>
        
        <div className="text-center">
          <h3 className="fs-5 fw-bold text-white mb-1">{currentEvent.name}</h3>
          <p className="small text-white-50 mb-2">{currentEvent.description}</p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <div className="badge bg-purple-500 bg-opacity-25 px-3 py-2">
              <p className="small text-purple-300 mb-0">{currentEvent.date}</p>
            </div>
            <div className="badge bg-purple-500 bg-opacity-10 px-3 py-2">
              <p className="small text-purple-300 mb-0">{currentEvent.gregorian}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicEvents;
