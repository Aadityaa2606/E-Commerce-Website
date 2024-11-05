import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = endDate.getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call to set the state right away

    return () => clearInterval(timerInterval); // Clean up the interval on component unmount
  }, [endDate]);

  return (
    <div className="flex gap-4 text-center items-end">
      <div>
        <div className="text-xs font-medium text-start">Days</div>
        <div className="text-4xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
      </div>
      <span className="text-3xl font-bold text-red-500 pb-[2px]">:</span>
      <div>
        <div className="text-xs font-medium text-start">Hours</div>
        <div className="text-4xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
      </div>
      <span className="text-3xl font-bold text-red-500 pb-[2px]">:</span>
      <div>
        <div className="text-xs font-medium text-start">Minutes</div>
        <div className="text-4xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
      </div>
      <span className="text-3xl font-bold text-red-500 pb-[2px]">:</span>
      <div>
        <div className="text-xs font-medium text-start">Seconds</div>
        <div className="text-4xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};
