import { useState, useEffect } from 'react';
import { saveToLocalStorage } from '../../utils.ts';

interface TimerProps {
  handleFinish: () => void;
  quizFinished: boolean;
}

export const Timer = ({ handleFinish, quizFinished }: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(() => {
    const savedTimer = localStorage.getItem("timer");

    return savedTimer ? +savedTimer : 600;
  });

  useEffect(() => {
    if (seconds === 0) {
      handleFinish();
    }

    const interval = setInterval(() => setSeconds(prevSeconds => {
      const updatedTime = prevSeconds - 1;

      if (updatedTime % 10 === 0) {
        saveToLocalStorage('timer', updatedTime);
      }

      return updatedTime;
    }), 1000);

    return () => clearInterval(interval);
  }, [seconds, handleFinish]);

  const formattedTime = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

  return (
    <>
      {quizFinished ? (
        <h1>
          Quiz finished
        </h1>
      ) : (
        <div className={`timer ${seconds < 120 ? 'expiring' : ''}`}>
          {formattedTime}
        </div>
      )}
    </>
  )
};
