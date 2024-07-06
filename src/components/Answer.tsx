import { ChangeEvent } from 'react';
import type { AnswerT } from '../types.ts';

interface AnswerProps {
  answer: AnswerT;
  inputType: string;
  selectAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

export const Answer = ({ answer, inputType, isSelected, selectAnswer }: AnswerProps) => {
  return (
    <label className={`answer ${isSelected ? 'selected' : ''}`}>
      <input type={inputType} id={`answer-${answer.id}`} name="answer" value={answer.id} onChange={selectAnswer} />
      <span>{answer.answerText}</span>
    </label>
  );
}