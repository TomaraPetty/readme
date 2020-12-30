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
        name: 'contributions',
        message: 'Who are the contributors?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test?',
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

// inquirer.prompt(questions).then(answers => {
//   generateMarkdown();
// })
// .catch(error => {
//   if(error.isTtyError) {
//     console.log("Something went wrong.");
//   }
// });

// // function to write README file
// function writeToFile('README.md', data) {
//   let README = document.createElement('README');
//   README.src = src; 
// }



// function to initialize program
async function init() {
  try {
    const answers = await questions();
    const readMe = generateMarkdown(answers);

    await writeFileAsync("README.md", readMe);
    console.log('You won!');
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
// writeFileAsync();