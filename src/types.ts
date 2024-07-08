export type Question = {
    id: string,
    questionText: string,
    questionCode?: string,
    answers: Answer[],
    points: number,
    tags: string[],
};

export type Answer = TextAnswer | CodeAnswer;

type BaseAnswer = {
    id: string,
};

type TextAnswer = BaseAnswer & {
    answerText: string,
    answerCode: never,
};

type CodeAnswer = BaseAnswer & {
    answerText: never,
    answerCode: string,
};

export type AnsweredQuestion = {
    questionId: string,
    selectedAnswers: string[],
};
