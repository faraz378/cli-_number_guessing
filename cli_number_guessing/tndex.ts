#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number                                - DONE

// 2) User input for guessing number                                        - DONE

// 3) Computer user input with computer generated number and show result    - DONE

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);

if(answers.userGuessdNumber === randomNumber ) {
    console.log("congtratulation! you guessed right number.");
}else {
    console.log("you guessed wrong number");
}








