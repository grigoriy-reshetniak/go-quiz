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
import { addIds } from './utils.ts';

const quiz = addIds(questions as Omit<QuestionType, 'id'>[]);

export const Quiz = () => {
  const [quizStarted, startQuiz] = useState(false);
  const [quizFinished, finishQuiz] = useState(false);
  const [blur, setBlur] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const quizResults: QuizResults = useMemo(() => {
    if (!quizFinished) {
      return [];
    }

    let correctPoints = 0, totalPoints = 0;

    const checkedQuestions = answeredQuestions.map((answeredQuestion) => {
      const question = quiz.find((question) => question.id === answeredQuestion.questionId);
      const correctAnswers = question?.answers.filter((answer) => answer.isCorrect).map((answer) => answer.id);
      const isCorrect = answeredQuestion.selectedAnswers.every((selectedAnswer) => correctAnswers?.includes(selectedAnswer));

      if (isCorrect) {
        correctPoints += question?.points ?? 0;
      }

      totalPoints += question?.points ?? 0;

      return {
          isCorrect,
          selectedAnswers: answeredQuestion.selectedAnswers,
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
  }, [quizFinished, answeredQuestions]);

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
            <Progress progress={questionIndex} total={quiz.length}/>
            <Timer handleFinish={handleFinish} quizFinished={quizFinished}/>
          </header>
          <main className={`${blur ? 'blur' : ''}`}>
            {quizFinished ? <Results quizResults={quizResults}/> : (
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
