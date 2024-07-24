import { Logo } from '../Logo';

export const Disclaimer = ({ startQuiz }: { startQuiz: () => void }) => {
  return (
    <article>
      <div className="disclaimer">
        <Logo/>
        <p>
          This is a quiz to test your knowledge about Go. The questions have been created by{' '}
          <a href="https://github.com/KiteShi" target="_blank" rel="noopener noreferrer">
            Kateryna Azarenko
          </a> inspired by Jon Bodner's book,{' '}
          <a href="https://www.oreilly.com/library/view/learning-go/9781492077206/" target="_blank"
             rel="noopener noreferrer">
            <em>Learning Go</em>
          </a>.
        </p>
        <p>
          The quiz consists of 20 questions and takes 25 minutes to complete. If you start over, you might receive a
          different set of questions. Your progress will be saved in your browser's local storage, allowing you to
          continue later. By starting the quiz, you agree to this.
        </p>
        <p>
          While the design is <i>heavily inspired</i> by{' '}
          <a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
            go.dev
          </a>
          , this quiz is not affiliated with the Go creators, go.dev, or any official Go organizations.
        </p>
        <p>
          Have fun!
        </p>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    </article>
  );
};
