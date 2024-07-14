export type Question = {
    id: string,
    questionText: string,
    questionCode?: string,
    answers: Answer[],
    points: number,
    tags: string[],
};

export type Answer = {
    id: string,
    answerText: string,
    isCode: boolean,
};

export type AnsweredQuestion = {
    questionId: string,
    selectedAnswers: string[],
};
