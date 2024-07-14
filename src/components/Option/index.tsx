import { ChangeEvent } from 'react';
import type { Answer } from '../../types.ts';

interface AnswerProps {
  answer: Answer;
  selectAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
  checked: boolean;
}

export const Option = ({ answer, isSelected, selectAnswer, checked }: AnswerProps) => {
  const answerClass = `answer ${isSelected ? 'selected' : ''}`;

  return (
    <label className={answerClass}>
      <input
        type="checkbox"
        name="answer"
        value={answer.id}
        onChange={selectAnswer}
        checked={checked}
      />
      <span className="checkmark"/>
      <span className="answer-text">
        {answer.isCode ? <code>{answer.answerText}</code> : answer.answerText}
      </span>
    </label>
  );
}