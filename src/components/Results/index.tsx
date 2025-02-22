import { QuizResults } from '../../types';
import { Question } from '../Question';
import { Option } from '../Option';
import { Score } from '../Score';

export const Results = ({ quizResults }: { quizResults: QuizResults }) => {
  const { score, checkedQuestions } = quizResults;

  return (
    <>
      <Score score={score} />
      {checkedQuestions.map(({ selectedAnswers, isCorrect, ...question }) => (
        <div className={`question ${isCorrect ? 'correct' : 'incorrect'}`} key={question.id} id={question.id}>
          <Question question={question} quizFinished={true}/>
          {question.answers.map((answer) => {
              return (
                <Option
                  answer={answer}
                  key={answer.id}
                  checked={selectedAnswers.includes(answer.id)}
                  type={question.isMultipleChoice ? 'checkbox' : 'radio'}
                  disabled
                />
              )
            }
          )}
        </div>
      ))}
    </>
  );
};
