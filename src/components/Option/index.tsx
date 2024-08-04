import { ChangeEvent } from 'react';
import type { Answer } from '../../types.ts';
import { CodePreview } from '../CodePreview';

interface AnswerProps {
  answer: Answer;
  selectAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled: boolean;
  type: 'checkbox' | 'radio';
}

export const Option = ({ answer, selectAnswer, checked, disabled, type }: AnswerProps) => (
  <label className={`option ${checked ? 'checked' : ''}`}>
    <input
      type={type}
      name={`answer-${answer.id}`}
      value={answer.id}
      onChange={selectAnswer}
      checked={checked}
      disabled={disabled}
    />
    {type === 'checkbox' ? <span className="checkmark"/> : <span className="radio"/>}
    <div className="answer">
        {answer.isCode ?
          <CodePreview code={answer.text} previewType="code" type="answer"/> :
          <div className="answer-text" dangerouslySetInnerHTML={{ __html:answer.text }}/>
        }
      </div>
  </label>
);
