import { useEffect, useState } from 'react';
import { Score as ScoreType } from '../../types';
import { getChartColor } from '../../utils.ts';

const radius = 50;
const circumference = 2 * Math.PI * radius;

export const Score = ({ score }: { score: ScoreType }) => {
  const { correctPoints, totalPoints, successRate, totalQuestions, correctAnswers } = score;
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
              stroke: successRate === 0 ? 'black' : '#e5e7eb',
              filter: successRate === 100 ? 'drop-shadow(0 0 6px #22c55e)' : ''
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
      <div>
        <h1>
          Quiz finished
        </h1>
        <span>Your score:</span>
        <ul>
          <li>{correctAnswers} of {totalQuestions} questions answered</li>
          <li>{correctPoints} of {totalPoints} points earned</li>
        </ul>
      </div>
      <img
        /* eslint-disable-next-line max-len */
        src="https://camo.githubusercontent.com/a72f086b878c2e74b90d5dbd3360e7a4aa132a219a662f4d83b7c243298fea4d/68747470733a2f2f7261772e6769746875622e636f6d2f676f6c616e672d73616d706c65732f676f706865722d766563746f722f6d61737465722f676f706865722e706e67"
        alt="Gopher by Takuya Ueda"
        title="Gopher by Takuya Ueda"
      />
    </div>
  );
};
