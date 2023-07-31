// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Carolina",
        message: "Project 3",
    },
    {
        type: "input",
        name: "website template",
        message: "Creation of a template for offering services",
    },
    {
        type: "list",
        name: "license",
        message: "License applicable for this project",
        choices: ["MIT"],
    },
    {
        type: "input",
        name: "dependencies",
        message: "Apollo, Chakra",
    },
    {
        type: "input",
        name: "mncncncncncncncn",
        message: "Carol V",
    }
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("creating proffesional README.md file...");
        writeToFile("README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();



// to open in the teminal, type node index js and start answering the question