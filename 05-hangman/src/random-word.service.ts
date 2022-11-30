import * as randomWord from 'random-words';

export const getRandomWord = () => {
    const func = randomWord as any as Function;
    return func();
};
