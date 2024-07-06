import { useState, ChangeEvent } from 'react';
import { QuestionT } from '../types.ts';
import { Answer } from './Answer.tsx';

export const Question = ({ question }: { question: QuestionT }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAnswerId = e.target.value;

    if (selectedAnswers.includes(selectedAnswerId)) {
      setSelectedAnswers(selectedAnswers.filter((answerId) => answerId !== selectedAnswerId));
    } else {
      setSelectedAnswers([...selectedAnswers, selectedAnswerId]);
    }
  }

  return (
    <div>
      <h2>{question.questionText}</h2>
      {question.answers.map((answer) => (
        <Answer
          answer={answer}
          inputType={question.answers.length > 2 ? 'checkbox' : 'radio'}
          key={answer.id}
          selectAnswer={handleAnswerChange}
          isSelected={selectedAnswers.includes(answer.id)}
        />
      ))}
    </div>
  );
}