import { Answer, TextAnswer, CodeAnswer, OutputAnswer, Quiz, LocalStorage } from './types.ts';

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

export const saveToLocalStorage = <T extends keyof LocalStorage>(key: T, value: LocalStorage[T]): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = <T extends keyof LocalStorage>(key: T): LocalStorage[T] | null => {
  const data = localStorage.getItem(key);

  return data ? (JSON.parse(data) as LocalStorage[T]) : null;
};
