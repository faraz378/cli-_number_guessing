#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) Computer will generate a random number                                - DONE
// 2) User input for guessing number                                        - DONE
// 3) Computer user input with computer generated number and show result    - DONE
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessdNumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
