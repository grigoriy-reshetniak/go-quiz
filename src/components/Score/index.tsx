import { Score as ScoreType } from '../../types';

export const Score = ({ score }: { score: ScoreType }) => {
  const { correct, total, successRate } = score;

  return (
    <div className="score">
      <div className="diagram">
        <span>
          {successRate}%
        </span>
      </div>
      <div>Your score: {correct} of of {total}</div>
    </div>
  );
};
