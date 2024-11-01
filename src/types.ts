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

export type Answer = {
    id: string,
    text: string,
    isCode: boolean,
    isCorrect: boolean,
};

export type AnsweredQuestion = {
    questionId: string,
    selectedAnswers: string[],
};

export type QuizResults = (Question & {
    isCorrect: boolean,
    selectedAnswers: string[],
})[];

export type Quiz = Question[];
