const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is you project title?',
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a short description/overview of your project:',
      },
      {
        type: 'input',
        name: 'instalation',
        message: 'What are the steps and instalation instructions to get the development environment running?',
      },
      {
        type: 'list',
        name: 'license',
        choices: [ "BSD", new inquirer.Separator(), "MIT", new inquirer.Separator(), "GPL" ],
        message: 'Choose a license:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
      },
      {
        type: 'input',
        name: 'ghimage',
        message: 'Enter the web address of your GitHub profile photo:',
      }, 
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
  ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = async () => {
  console.log('hi');
}

// function call to initialize program
init();
