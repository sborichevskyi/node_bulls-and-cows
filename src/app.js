'use strict';
import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput';
import { getBullsAndCows } from './modules/getBullsAndCows';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainNumber = generateRandomNumber();

function askGuess() {
  rl.question('The number is ready, can you guess? ', (input) => {
    if (checkIsValidUserInput(input)) {
      const result = getBullsAndCows(+input, mainNumber);

      if (result.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congrats! You have won!');
        rl.close();
      } else {
        askGuess();
      }
    } else {
      askGuess();
    }
  });
}

askGuess();
