// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your project",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose of your project",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license applicable to this project",
        choices: ["MIT", "BSD2", "BSD3",  "None"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "description",
        message: "Please type your name",
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
