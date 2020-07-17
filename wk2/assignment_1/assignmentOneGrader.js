// # Server Side Languages Wk2 Assignment 1 – JavaScript
// • Umholtz, Tommy
// • Full Sail University
// • Web Design and Development, Bachelors of Science – Online

const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Grader {
    static graderInfo() {

        rl.question("Type your name here: ", (name) => {

            rl.question("Type an assignment name: ", (assignment) => {

                rl.question("Enter the grade number for that assignment: ", (grade) => {

                    if (+grade <= 100 && +grade > 90) {
                        console.log("Hello " + name + "\nYour letter grade for " + assignment + " assignment is as follows: A\nAssignment details:\nYou have met most or all of the assignment's requirements.");
                    } else if (+grade < 90 && +grade >= 80) {
                        console.log("Hello " + name + "\nYour letter grade for " + assignment + " assignment is as follows: B\nAssignment details:\nYou have met most of the assignment's requirements.");
                    } else if (+grade < 80 && +grade >= 70) {
                        console.log("Hello " + name + "\nYour letter grade for " + assignment + " assignment is as follows: C\nAssignment details:\nYou have met many of the assignment's requirements.");
                    } else if (+grade < 70 && +grade >= 60) {
                        console.log("Hello " + name + "\nYour letter grade for " + assignment + " assignment is as follows: D\nAssignment details:\nYou have met some of the assignment's requirements.");
                    } else if (+grade < 60 && +grade >= 0) {
                        console.log("Hello " + name + "\nYour letter grade for " + assignment + " assignment is as follows: F\nAssignment details:\nYou have met few or none of the assignment's requirements.");
                    } else {
                        console.log("You did not entered a grade number between 0 ant 100.");
                    }
                    rl.close()
                })
            })
        })

    }
}
const grader = Grader.graderInfo();
console.log(grader);