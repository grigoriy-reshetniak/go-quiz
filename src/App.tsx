import { createQuiz } from './quiz/createQuiz.ts';
import { Question } from './components/Question.tsx';

const quiz = createQuiz();

export const App = () => {

  return (
    <>
      <h1>Take a Go quiz</h1>
      {quiz.map((question) => (
        <Question question={question} key={question.id}/>
      ))}
    </>
  )
}
