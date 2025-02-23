import {v4 as uuidv4} from 'uuid';
import { Question, Answer, TextAnswer, CodeAnswer, OutputAnswer, Quiz } from './types.ts';

export const addIds = (rawData: Omit<Question, 'id'>[]): Question[] =>
    rawData.map((question: Omit<Question, 'id'>) => ({
        ...question,
        id: uuidv4(),
        answers: question.answers.map((answer: Omit<Answer, 'id'>) => ({
            ...answer,
            id: uuidv4()
        })) as Answer[]
    }));

export function isTextAnswer(answer: Answer): answer is TextAnswer {
    return answer.text !== null && answer.code === null && answer.output === null;
}

export function isCodeAnswer(answer: Answer): answer is CodeAnswer {
    return answer.text === null && answer.code !== null && answer.output === null;
}

export function isOutputAnswer(answer: Answer): answer is OutputAnswer {
    return answer.text === null && answer.code === null && answer.output !== null;
}

export function getTotalPoints(quiz: Quiz): number {
  return quiz.reduce(
    (acc, question) => acc + question.points,
    0,
  );
}
