#! /usr/bin/env node
import inquirer from "inquirer";

const add = (a: number, b:number) => {
    console.log(`Addition of ${a} and ${b} is ${+a + +b}`); // use of unary operator
}

const subtract = (a: number, b:number) => {
    console.log(`Subtraction of ${b} from ${a} gives ${a - b}`);
}

const multiply = (a: number, b:number) => {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
}

const divide = (a: number, b:number) => {
    console.log(`Division of ${a} by ${b} is ${a / b}`);
}

function main() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'num1',
            message: 'Enter the first number: ',
            validate: (value) => {                              // for making sure the input is not a NaN
              const isValid = !isNaN(value);
              return isValid || "Please enter a valid number.";
            }
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number: ',
            validate: (value) => {                              // for making sure the input is not a NaN
              const isValid = !isNaN(value);
              return isValid || "Please enter a valid number.";
            }
        },
        {
            type: 'list',
            name: 'operation',
            choices: ['+', '-', '*', '/'],
            message: 'Enter your operation: '
        }
    ])
    .then((answers) => {
        const { num1, num2, operation } = answers
        if (operation == '+') {
            add(num1, num2)
        } else if (operation == '-') {
            subtract(num1, num2)
        } else if (operation == '*') {
            multiply(num1, num2)
        } else {
            divide(num1, num2)
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
          } else {
            console.error("Error during user input:", error.message);
          }
})}

main()
