import { ChangeEvent } from 'react';
import type { Answer } from '../../types.ts';

interface AnswerProps {
  answer: Answer;
  selectAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
  checked: boolean;
}

export const Option = ({ answer, isSelected, selectAnswer, checked }: AnswerProps) => {
  return (
    <label className={`answer ${isSelected ? 'selected' : ''}`}>
      <input
        type="checkbox"
        name="answer"
        value={answer.id}
        onChange={selectAnswer}
        checked={checked}
      />
      <span className="checkmark"/>
      {answer.answerText && <span>{answer.answerText}</span>}
      {answer.answerCode && <code>{answer.answerCode}</code>}
    </label>
  );
}