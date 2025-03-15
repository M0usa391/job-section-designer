
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetTime: string;
  label: string;
}

const CountdownTimer = ({ targetTime, label }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(targetTime);

  useEffect(() => {
    // In a real app, we would calculate the actual time remaining
    // This is just for the demo
    const timer = setInterval(() => {
      // Simulate countdown
      const timeParts = timeLeft.split(":");
      let hours = parseInt(timeParts[0]);
      let minutes = parseInt(timeParts[1]);
      let seconds = parseInt(timeParts[2]);

      seconds--;
      
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
          }
        }
      }
      
      const newTimeLeft = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center animate-fade-up">
      <p className="mb-4 text-lg text-white/90 text-shadow">{label}</p>
      <h2 className="text-7xl font-semibold tracking-wider text-white mb-6 text-shadow">
        {timeLeft}
      </h2>
    </div>
  );
};

export default CountdownTimer;
