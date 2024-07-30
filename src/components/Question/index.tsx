import { CodePreview } from '../CodePreview';
import { Question as QuestionType } from '../../types.ts';

interface QuestionProps {
  question: QuestionType;
  quizFinished: boolean;
}

export const Question = ({ question, quizFinished }: QuestionProps) => {
  return (
    <>
      <div className="question-container">
        <h2 dangerouslySetInnerHTML={{ __html: question.text }}/>
        {quizFinished && <span className="tag">Points: {question.points}</span>}
      </div>
      {question.code &&
          <CodePreview code={question.code} type="code"/>
      }
      {question.output &&
          <CodePreview code={question.output} type="terminal"/>
      }
      <div className="tags">
        {question.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </>
  );
};
