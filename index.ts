#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "entersecondNumber", type: "number", name: "secondNumber" },
  {
    message: "select one one the operator to perform function",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator")
}