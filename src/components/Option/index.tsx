import { ChangeEvent } from 'react';
import type { Answer } from '../../types.ts';

interface AnswerProps {
  answer: Answer;
  selectAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  isCorrect?: boolean;
  type: 'checkbox' | 'radio';
}

export const Option = ({ answer, selectAnswer, checked, isCorrect, type }: AnswerProps) => {
  console.log(answer.text);
  console.log(checked);
  const answerClass = `answer ${checked ? 'checked' : ''}`;

  return (
    <label className={answerClass}>
      <input
        type={type}
        name="answer"
        value={answer.id}
        onChange={selectAnswer}
        checked={checked}
        disabled={isCorrect !== undefined}
      />
      {type === 'checkbox' ? <span className="checkmark"/> : <span className="radio"/>}
      <span className="answer-text">
        {answer.isCode ? <code dangerouslySetInnerHTML={{ __html: answer.text }}></code> : answer.text}
      </span>
    </label>
  );
}