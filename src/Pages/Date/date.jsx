import React, {useState, useEffect} from 'react';


const Date = () => {
    const [currentDate, setCurrentDate] =useState(new Date());

useEffect(()=>{
    const timer = setInterval(()=>{
        setCurrentDate(new Date());
    })
    return () => clearInterval(timer);
}, []);

const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
  return (
    <div className="date-time">
        <h2>{date}</h2>
        <h3>{time}</h3>
      
    </div>
  );
};

export default Date;