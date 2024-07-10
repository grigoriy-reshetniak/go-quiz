import { AnsweredQuestion } from './types.ts';

export const getQuestions = async () => {
    const response = await fetch('coming soon');
    return response.json();
};
export const postAnswers = async (answers: AnsweredQuestion) => {
    const response = await fetch('coming soon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
    });
    return response.json();
};