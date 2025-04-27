import { useEffect, useState } from 'react';
import { Score as ScoreType } from '../../types';
import { getChartColor } from '../../utils.ts';

const radius = 50;
const circumference = 2 * Math.PI * radius;

export const Score = ({ score }: { score: ScoreType }) => {
  const { correctPoints, totalPoints, successRate } = score;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(successRate), 300);
    return () => clearTimeout(timeout);
  }, [successRate]);

  return (
    <div className="score">
      <div className="pie-chart">
        <svg viewBox="0 0 120 120">
          <circle
            className="bg"
            cx="60"
            cy="60"
            r={radius}
            style={{
              stroke: successRate === 0 ? 'black' : '#e5e7eb'
            }}
          />
          <circle
            className="fg"
            cx="60"
            cy="60"
            r={radius}
            style={{
              stroke: getChartColor(progress),
              strokeDasharray: circumference,
              strokeDashoffset: circumference - (circumference * progress) / 100
            }}
          />
        </svg>
        <span>
          {progress}%
        </span>
      </div>
      <h1>
        Quiz finished
      </h1>
      <div>Your score: {correctPoints} of {totalPoints}</div>
    </div>
  );
};
