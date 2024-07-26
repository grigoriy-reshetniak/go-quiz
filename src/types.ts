export type Question = {
    id: string,
    text: string,
    code?: string,
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
