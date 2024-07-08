import { ChangeEvent, useState } from 'react';
import { AnsweredQuestion } from './types.ts';
import { Option } from './components/Option.tsx';
import type { Question } from './types.ts';
import questions from '../data/mockData.json';

const quiz = questions as Question[];

export const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAnswerId = e.target.value;

    if (selectedAnswers.includes(selectedAnswerId)) {
      setSelectedAnswers(selectedAnswers.filter((answerId) => answerId !== selectedAnswerId));
    } else {
      if (quiz[questionIndex].answers.length === 2) {
        setSelectedAnswers([selectedAnswerId]);
      } else {
        setSelectedAnswers([...selectedAnswers, selectedAnswerId]);
      }
    }
  };

  const handleAnswer = () => {
    const newAnsweredQuestion = { questionId: quiz[questionIndex].id, selectedAnswers } as AnsweredQuestion;
    setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswers([]);
  };

  const handleFinish = () => {
    console.log(answeredQuestions);
  }

  return (
    <>
      <div>
        <h2>{quiz[questionIndex].questionText}</h2>
        {quiz[questionIndex].answers.map((answer) => (
          <Option
            answer={answer}
            key={answer.id}
            selectAnswer={handleAnswerChange}
            isSelected={selectedAnswers.includes(answer.id)}
            checked={selectedAnswers.includes(answer.id)}
          />
        ))}
      </div>
      <div className="controls">
        {questionIndex === quiz.length - 1 ? (
          <button
            onClick={handleFinish}
            disabled={selectedAnswers.length === 0}
          >
            Finish
          </button>
        ) : (
          <button
            onClick={handleAnswer}
            disabled={selectedAnswers.length === 0}
          >
            Next
          </button>
        )}
      </div>
    </>
  )
}
