import { QuizResults } from '../../types';
import { Question } from '../Question';
import { Option } from '../Option';

export const Results = ({ quizResults }: { quizResults: QuizResults }) => {
  return (
    <>
      {quizResults.map(({selectedAnswers, isCorrect, ...question}) => {
        return (
          <div className={`question ${isCorrect ? 'correct' : 'incorrect'}`}>
            <Question question={question} quizFinished={true} />
            {question.answers.map((answer) => (
              <Option
                answer={answer}
                key={answer.id}
                checked={selectedAnswers.includes(answer.id)}
                type={question.isMultipleChoice ? 'checkbox' : 'radio'}
                disabled
              />
            ))}
          </div>
        );
      })}
    </>
  );
};
