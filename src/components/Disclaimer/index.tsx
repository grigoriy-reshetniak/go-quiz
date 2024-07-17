import { Logo } from '../Logo';

export const Disclaimer = ({ startQuiz }: { startQuiz: () => void }) => {
  return (
    <div className="disclaimer">
      <Logo />
      <p>Here's a quiz to test your knowledge about Go. While its design is <i>heavily inspired</i> by{' '}
        <a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
          go.dev
        </a>
        , it's not affiliated with it or with the Go creators or any official Go organizations.
      </p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};
