import { ChangeEvent } from 'react';
import type { Answer } from '../../types.ts';

interface AnswerProps {
  answer: Answer;
  selectAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  isCorrect?: boolean;
}

export const Option = ({ answer, selectAnswer, checked, isCorrect }: AnswerProps) => {
  const answerClass = `answer ${checked ? 'checked' : ''}`;

  return (
    <label className={answerClass}>
      <input
        type="checkbox"
        name="answer"
        value={answer.id}
        onChange={selectAnswer}
        checked={checked}
        disabled={isCorrect !== undefined}
      />
      <span className="checkmark"/>
      <span className="answer-text">
        {answer.isCode ? <code>{answer.answerText}</code> : answer.answerText}
      </span>
    </label>
  );
}