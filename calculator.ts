#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.red("\n\t\t'Welcome to Yousuf's Calculator'\n"))

console.log(chalk.blueBright("(For BMI enter first number as weight in Kg and second number as height in meters)"))


let answer = await inquirer.prompt([
    {name:"first_number",type:"number",message:chalk.blue("Enter First number")},
    {name:"second_number", type:"number",message:chalk.yellow("Enter Second number")},
    {name:"Operators", type:"list",message:chalk.green("Enter a Operator"),choices:["Addition","Subtraction","Multiplication","Divison","Modulas","BMI","Exponentiation"]},
]);
switch (answer.Operators) {
    case "Addition":
        answer==answer.first_number + answer.second_number
        console.log(chalk.red(`Your addition is${answer}`));
        break;
    case "Subtraction":
        answer=answer.first_number - answer.second_number
        console.log(chalk.red(`Your subtraction is ${answer}`));
        break;
    case "Multiplication":
        answer=answer.first_number * answer.second_number
        console.log(chalk.red(`Your multiplication is ${answer}`));
        break;
    case "Divison":
        answer=answer.first_number / answer.second_number
        console.log(chalk.red(`Your divison is ${answer}`));
        break;
    case "Modulas":
        answer=answer.first_number % answer.second_number
        console.log(chalk.red(`Your modulas is ${answer}`));
        break;
    case "Exponentiation":
        answer=answer.first_number**answer.second_number
        console.log(chalk.red(`Your exponentiation is ${answer}`));
        break;
    case "BMI":
        answer=answer.first_number/(answer.second_number * answer.second_number);//First num is weight and second num is height
       if(answer < 18.5){
        console.log(chalk.red(`${answer} You are UnderWeight!`));}
        else if(answer > 18.5 && answer < 25){
            console.log(chalk.red(`${answer} You are Normal!`));
        }
        else{console.log(chalk.red(`${answer} You are OverWeight!`));}
        break;
    default:
        break;
}