import { QuizResults } from '../../types';
import { Question } from '../Question';
import { Option } from '../Option';

export const Results = ({ quizResults }: { quizResults: QuizResults }) => {
  return (
    <>
      {quizResults.map(({ selectedAnswers, isCorrect, ...question }) => (
        <div className={`question ${isCorrect ? 'correct' : 'incorrect'}`} key={question.id}>
          <Question question={question} quizFinished={true}/>
          {question.answers.map((answer) => {
              console.log('answer.id', answer.id);
              console.log('answer.text', answer.text);
              console.log('selectedAnswers', selectedAnswers);
              console.log('Senpai, notice me!');
              console.log(selectedAnswers.includes(answer.id));
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
