import { useState, useEffect } from 'react';

interface TimerProps {
  handleFinish: () => void;
  quizFinished: boolean;
}

export const Timer = ({ handleFinish, quizFinished }: TimerProps) => {
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    if (seconds === 0) {
      handleFinish();
    }

    const interval = setInterval(() => {
      if(seconds > 0 ) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, handleFinish]);

  const formattedTime = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

 return (
   <div className={`timer ${seconds < 120 ? 'expiring' : ''}`}>
     {!quizFinished && formattedTime}
   </div>
 )
};
