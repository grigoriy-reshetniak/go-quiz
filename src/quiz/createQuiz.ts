import { QuestionT } from '../types.ts';

export const createQuiz = (): QuestionT[] => {
  return [
    {
      id: '1',
      questionText: 'What is the output of the following code?',
      isMultipleChoice: false,
      points: 1,
      answersAmount: 3,
      answers: [
        {
          id: '1',
          answerText: '1',
          isCorrect: true
        },
        {
          id: '2',
          answerText: '2',
          isCorrect: false
        },
        {
          id: '3',
          answerText: '3',
          isCorrect: false
        },
        {
          id: '4',
          answerText: '4',
          isCorrect: false
        }
      ],
    }
  ];
};
