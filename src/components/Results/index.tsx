import { AnsweredQuestion, Question } from '../../types';
import { CodePreview } from '../CodePreview';
import { Option } from '../Option';

interface ResultsProps {
  answeredQuestions: AnsweredQuestion[];
  questions: Question[];
}

export const Results = ({ answeredQuestions, questions }: ResultsProps) => {
  return (
    <div className="quiz">
      {answeredQuestions.map((answeredQuestion) => {
        const question = questions.find((question) => question.id === answeredQuestion.questionId);
        const correctAnswers = question?.answers.filter((answer) => answer.isCorrect).map((answer) => answer.id);
        const isCorrect = answeredQuestion.selectedAnswers.every((selectedAnswer) => correctAnswers?.includes(selectedAnswer));
        return (
          <div key={answeredQuestion.questionId} className={`question ${isCorrect ? 'correct' : 'incorrect'}`}>
            <h3>{question?.text}</h3>
            {question?.questionCode &&
                <CodePreview code={question.questionCode}/>
            }
            {question?.answers.map((answer) => (
              <Option
                answer={answer}
                key={answer.id}
                isCorrect={correctAnswers?.includes(answer.id)}
                checked={answeredQuestion.selectedAnswers.includes(answer.id)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
