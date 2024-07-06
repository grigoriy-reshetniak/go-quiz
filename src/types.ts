export type QuestionT = {
    id: string,
    questionText: string,
    isMultipleChoice: boolean,
    answers: AnswerT[],
    points: number,
    answersAmount: number,
};

export type AnswerT = {
    id: string,
    answerText: string,
    isCorrect: boolean,
};
