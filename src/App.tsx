import { ChangeEvent, useEffect, useState } from 'react';
import { AnsweredQuestion } from './types.ts';
import type { Question } from './types.ts';
import questions from '../data/mockData.json';
import { Option } from './components/Option';
import { CodePreview } from './components/CodePreview';
import { Footer } from './components/Footer';
import { Disclaimer } from './components/Disclaimer';
import { Logo } from './components/Logo';
import { Timer } from './components/Timer';
import { Progress } from './components/Progress';
import { Results } from './components/Results';
import { TerminalPreview } from './components/TerminalPreview';

const quiz = questions as Question[];

export const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [blur, setBlur] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (finishQuiz) {
      console.log(answeredQuestions);
    }
  }, [finishQuiz, answeredQuestions]);

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAnswerId = e.target.value;

    if (!quiz[questionIndex].isMultipleChoice) {
      setSelectedAnswers([selectedAnswerId]);
    } else {
      if (selectedAnswers.includes(selectedAnswerId)) {
        setSelectedAnswers(selectedAnswers.filter((answerId) => answerId !== selectedAnswerId));
      } else {
        setSelectedAnswers([...selectedAnswers, selectedAnswerId]);
      }
    }
  };

  const handleNext = () => {
    const newAnsweredQuestion = { questionId: quiz[questionIndex].id, selectedAnswers } as AnsweredQuestion;
    setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswers([]);

    if (questionIndex === quiz.length - 1) {
      setFinishQuiz(true);
    }
  };

  const handleFinish = () => {
    setFinishQuiz(true);
  }

  const handleReset = () => {
    setBlur(true);

    setTimeout(() => {
      if (confirm('Are you sure you want to reset the quiz? Your progress will be lost.')) {
        setQuestionIndex(0);
        setAnsweredQuestions([]);
        setSelectedAnswers([]);
        setStartQuiz(false);
        setFinishQuiz(false);
      }

      setBlur(false);
    }, 0);
  };

  return (
    <>
      {startQuiz ? (
        <>
          <header>
            <Logo handleReset={handleReset}/>
            <Progress progress={questionIndex} total={quiz.length}/>
            {!finishQuiz && <Timer handleFinish={handleFinish}/>}
          </header>
          <main className={`${blur ? 'blur' : ''}`}>
            {finishQuiz ? (
              <Results answeredQuestions={answeredQuestions} questions={quiz}/>
            ) : (
              <>
                <div className="quiz">
                  <h2 dangerouslySetInnerHTML={{ __html: quiz[questionIndex].text }}></h2>
                  {quiz[questionIndex].code &&
                      <CodePreview code={quiz[questionIndex].code}/>
                  }
                  {quiz[questionIndex].output &&
                      <TerminalPreview output={quiz[questionIndex].output}/>
                  }
                  <div className="tags">
                    {quiz[questionIndex].tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {quiz[questionIndex].answers.map((answer) => (
                    <Option
                      answer={answer}
                      key={answer.id}
                      selectAnswer={handleAnswer}
                      checked={selectedAnswers.includes(answer.id)}
                      type={quiz[questionIndex].isMultipleChoice ? 'checkbox' : 'radio'}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={selectedAnswers.length === 0}
                >
                  {questionIndex === quiz.length - 1 ? 'Finish' : 'Next'}
                </button>
              </>
            )}
          </main>
          <Footer/>
        </>
      ) : (
        <Disclaimer startQuiz={() => setStartQuiz(true)}/>
      )}

    </>
  )
}
