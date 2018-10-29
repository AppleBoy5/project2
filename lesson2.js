/*
A program that accepts insurance policy data, including a policy number, customer last name, customer first name, birth
 date, premium due date (month, day, and year), and number of at-fault driver accidents in the last three years.
 Calculate customer age and set monthly insurance premium using the following criteria:

Base price = $100

Age >15 && < 30 = + $20

Age >= 30 && < 45 +10

Age >=60 +30

Each at-fault accident = + 50

Use proper recursion looping and input validation/sanitization.
 */
/*author Zack Paulson*/
'use strict';
const PROMPT= require("readline-sync");

/*above is section 1*/
const currentYear= 2018;
let age=0;
let basePrice=100;

let LOT;
LOT = {
    policyNum: 0,
    firstName: '',
    lastName: '',
    birthYear: 0,
    age: 0,
    numOfAccidents: 0,
    agePrice: 0
};

function main() {
    setFirstName();
    setLastName();
    setBirthDate();
    setAge();
    priceForAge();
    numOfAccidents();
    setPolicyNum();
    printResults();

}

main();

function setPolicyNum(){
    LOT.policyNum = Number(PROMPT. question('Please Enter a Policy Number '))
}

function setFirstName(){
   LOT.firstName = PROMPT.question('Please Enter Your First Name ')
}

function setLastName(){
    LOT.lastName = PROMPT.question('Please Enter Your Last Name ')
}
function numOfAccidents(){
    LOT.accidents= Number(PROMPT.question('Please Enter The Number Of Accidents You Have Been In '))
}
function setBirthDate(){
    LOT.birthYear = Number(PROMPT. question('Please Enter Your Birth Date, ex: 1888 '))
}

function priceForAge() {
    if (age > 15 && age <= 30) {
        LOT.agePrice= 20;
    }

    else if (age > 30 && age <= 45) {
        LOT.agePrice= 10;
    }


    if (age >= 60) {
         LOT.agePrice = 30;
    }
}
function setAge() {
         age = currentYear - LOT.birthYear;

}
function printResults() {
    let x = basePrice + (LOT.accidents*50)+ LOT.agePrice;
    console.log("\nHello "+ LOT.firstName+ " "+LOT.lastName +" your estimated monthly insurance premium is " +x+" and your policy number is "+LOT.policyNum )
}

