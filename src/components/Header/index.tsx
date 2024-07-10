import { useState, useEffect } from 'react';
import logo from '../../../assets/images/go-logo-white.svg'

interface HeaderProps {
  handleReset: () => void;
  handleFinish: () => void;
}

export const Header = ({ handleReset, handleFinish }: HeaderProps) => {
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
    <header>
      <div
        className="logo"
        onClick={handleReset}
      >
        <img src={logo} alt={"Golang logo"}/>
        <span>QUIZ</span>
      </div>
      <div className={`timer ${seconds < 120 ? 'expiring' : ''}`}>
        {formattedTime}
      </div>
    </header>
  );
}