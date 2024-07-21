import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const DateT = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Interval should be set to 1000 milliseconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formattedDate = format(currentDate, "d'th' MMMM yyyy");;
  const time = currentDate.toLocaleTimeString();

  return (
    <div className="date-time">
      <h2>{formattedDate}</h2>
      <h3>{time}</h3>
    </div>
  );
};

export default DateT;
