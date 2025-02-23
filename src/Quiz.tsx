import { ChangeEvent, useState, useMemo } from 'react';
import { AnsweredQuestion, QuizResults } from './types.ts';
import type { Question as QuestionType } from './types.ts';
import questions from '../data/mockData.json';
import { Question } from './components/Question';
import { Footer } from './components/Footer';
import { Option } from './components/Option';
import { Disclaimer } from './components/Disclaimer';
import { Logo } from './components/Logo';
import { Timer } from './components/Timer';
import { Progress } from './components/Progress';
import { Results } from './components/Results';
import { addIds, getTotalPoints } from './utils.ts';

const quiz = addIds(questions as Omit<QuestionType, 'id'>[]);
const totalPoints = getTotalPoints(quiz);

export const Quiz = () => {
  const [quizStarted, startQuiz] = useState(false);
  const [quizFinished, finishQuiz] = useState(false);
  const [blur, setBlur] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [correctPoints, setCorrectPoints] = useState(0);

  const quizResults: QuizResults | null = useMemo(() => {
    if (!quizFinished) {
      return null;
    }

    const checkedQuestions = quiz.map((question, index) => {
      if (answeredQuestions[index]) {
        return {
          isCorrect: answeredQuestions[index].isCorrect,
          selectedAnswers: answeredQuestions[index].selectedAnswers,
          ...question
        }
      }

      return {
          isCorrect: false,
          selectedAnswers: [],
          ...question
      };
    })

    return {
      score: {
        correct: correctPoints,
        total: totalPoints,
        successRate: Math.round((correctPoints / totalPoints) * 100)
      },
      checkedQuestions
    }
  }, [quizFinished, answeredQuestions, correctPoints]);

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
    const currentQuestion = quiz[questionIndex];
    const correctAnswers = currentQuestion.answers.filter((answer) => answer.isCorrect).map((answer) => answer.id);
    const isCorrect = selectedAnswers.every((selectedAnswer) => correctAnswers.includes(selectedAnswer))

    if (isCorrect) {
      setCorrectPoints(() => correctPoints + currentQuestion.points);
    }

    const newAnsweredQuestion: AnsweredQuestion = { questionId: currentQuestion.id, selectedAnswers, isCorrect };

    setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswers([]);

    if (questionIndex === quiz.length - 1) {
      finishQuiz(true);
    }
  };

  const handleFinish = () => {
    finishQuiz(true);
  }

  const handleReset = () => {
    setBlur(true);

    setTimeout(() => {
      if (confirm('Are you sure you want to reset the quiz? Your progress will be lost.')) {
        setQuestionIndex(0);
        setAnsweredQuestions([]);
        setSelectedAnswers([]);
        startQuiz(false);
        finishQuiz(false);
      }

      setBlur(false);
    }, 0);
  };

  return (
    <>
      {quizStarted ? (
        <>
          <header>
            <Logo handleReset={handleReset}/>
            <Progress progress={questionIndex} total={quiz.length} results={quizResults} />
            <Timer handleFinish={handleFinish} quizFinished={quizFinished}/>
          </header>
          <main className={`${blur ? 'blur' : ''}`}>
            {quizResults ? <Results quizResults={quizResults}/> : (
              <>
                <div className="question">
                  <Question question={quiz[questionIndex]} quizFinished={false}/>
                  {quiz[questionIndex].answers.map((answer) => (
                    <Option
                      answer={answer}
                      key={answer.id}
                      selectAnswer={handleAnswer}
                      checked={selectedAnswers.includes(answer.id)}
                      type={quiz[questionIndex].isMultipleChoice ? 'checkbox' : 'radio'}
                      disabled={false}
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
        <Disclaimer startQuiz={() => startQuiz(true)}/>
      )}
    </>
  );
};
