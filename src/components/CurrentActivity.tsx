
import { useState, useEffect } from "react";

interface CurrentActivityProps {
  activity: string;
}

const ACTIVITIES = [
  { icon: <i className="bi bi-clock text-warning fs-5"></i>, text: "الآن: أذكار النوم - قيام الليل - صلاة الوتر" },
  { icon: <i className="bi bi-book text-warning fs-5"></i>, text: "الآن: قراءة سورة الكهف - أذكار يوم الجمعة" },
  { icon: <i className="bi bi-moon-stars text-warning fs-5"></i>, text: "الآن: قيام الليل - تهجد - استغفار" }
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
    <div className="container-fluid px-3 pt-3 animate__animated animate__fadeInUp animate__delay-2s">
      <div className="card btn-glass py-2 px-3">
        <div className="d-flex align-items-center gap-2">
          {currentActivity.icon}
          <p className="text-end text-white fs-6 fw-medium mb-0">
            {currentActivity.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentActivity;
