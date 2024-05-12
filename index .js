#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        massage: "please guess a number",
    },
]);
if (answer.userGuessednumber === randomNumber) {
    console.log("congratulation you guessed a right number.");
}
else {
    console.log("you guessed a wrong number.");
}
