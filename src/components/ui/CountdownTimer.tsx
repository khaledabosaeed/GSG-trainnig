import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialDays = 3,
  initialHours = 23,
  initialMinutes = 19,
  initialSeconds = 56
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-6">
      <div className="text-center">
        <p className="text-xs font-medium mb-1">Days</p>
        <p className="text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</p>
      </div>
      <span className="text-3xl font-bold text-[#DB4444]">:</span>
      <div className="text-center">
        <p className="text-xs font-medium mb-1">Hours</p>
        <p className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
      </div>
      <span className="text-3xl font-bold text-[#DB4444]">:</span>
      <div className="text-center">
        <p className="text-xs font-medium mb-1">Minutes</p>
        <p className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
      </div>
      <span className="text-3xl font-bold text-[#DB4444]">:</span>
      <div className="text-center">
        <p className="text-xs font-medium mb-1">Seconds</p>
        <p className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
      </div>
    </div>
  );
};
