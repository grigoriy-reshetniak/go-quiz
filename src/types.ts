export type Question = {
  id: string,
  text: string,
  code?: string,
  output?: string,
  answers: Answer[],
  points: number,
  tags: string[],
  isMultipleChoice: boolean,
};

export type Answer = CodeAnswer | TextAnswer | OutputAnswer;

export type CodeAnswer = {
  id: string,
  text: null,
  code: string,
  output: null,
  isCorrect: boolean,
}

export type TextAnswer = {
  id: string,
  text: string,
  code: null,
  output: null,
  isCorrect: boolean,
}

export type OutputAnswer = {
  id: string,
  text: null,
  code: null,
  output: string,
  isCorrect: boolean,
}

export type AnsweredQuestion = {
  questionId: string,
  selectedAnswers: string[],
  isCorrect: boolean;
};

export type QuizResults = {
  score: Score,
  checkedQuestions: (Question & Omit<AnsweredQuestion, "questionId">)[]
};

export type Score = {
  correct: number,
  total: number,
  successRate: number,
}

export type Quiz = Question[];
