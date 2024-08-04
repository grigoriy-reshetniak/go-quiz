import { v4 as uuidv4 } from 'uuid';
import { Question, Answer } from '../types';

export const addIds = (rawData: Omit<Question, 'id'>[]): Question[] =>
  rawData.map((question: Omit<Question, 'id'>) => ({
    ...question,
    id: uuidv4(),
    answers: question.answers.map((answer: Omit<Answer, 'id'>) => ({
      ...answer,
      id: uuidv4()
    }))
  }));
