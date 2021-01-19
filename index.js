const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function questions() {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is you project title?',
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'Add a link to your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a short description/overview of your project:',
      },
      {
        type: 'input',
        name: 'installation',
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
        name: 'usageGif',
        message: 'Relative path to a gif demonstrating the function of your site.',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Who are the contributors?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What tests have you installed?',
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
        name: 'email',
        message: 'Enter your email address',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
  ]);
}

// function to initialize program
async function init() {
  try {
    const answers = await questions();
    const readMe = generateMarkdown(answers);

    await writeFileAsync("NewREADME.md", readMe);
    console.log('Your README.md has been created!');
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();