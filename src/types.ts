export type Question = {
    id: string,
    text: string,
    questionCode?: string,
    answers: Answer[],
    points: number,
    tags: string[],
};

export type Answer = {
    id: string,
    answerText: string,
    isCode: boolean,
    isCorrect: boolean,
};

export type AnsweredQuestion = {
    questionId: string,
    selectedAnswers: string[],
};
