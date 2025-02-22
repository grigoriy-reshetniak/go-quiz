import { JSX, useMemo } from 'react';
import { QuizResults } from '../../types.ts';

interface ProgressProps {
  progress: number;
  total: number;
  results: QuizResults | null;
}

export const Progress = ({ progress, total, results }: ProgressProps) => {
  const inProgressCircles = useMemo(() => {
    const circles: JSX.Element[] = [];

    for (let i = 0; i < total; i++) {
      circles.push(
        <div
          key={i}
          className={`circle ${i < progress ? 'completed' : 'uncompleted'} ${i === progress ? 'current' : ''}`}
        >
          {i + 1}
        </div>
      );
    }

    return circles;
  }, [progress, total]);

  const completedCircles = useMemo(() =>
    results?.checkedQuestions.map((question, index) => (
        <a href={`#${question.id}`} key={question.id}>
          <div
            className={`circle ${question.isCorrect ? 'correct' : 'incorrect'}`}
          >
            {index + 1}
          </div>
        </a>
      )
    ), [results]);

  return (
    <div className="progress-bar">
      <div className={`line ${progress === total ? 'results' : ''}`}></div>
      <div className="circles-container">
        {progress === total ? completedCircles : inProgressCircles}
      </div>
    </div>
  );
};
