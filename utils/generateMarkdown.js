// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
<a href="${answers.prjectLink}">Click here to see it in action.</a>

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Description 
*Overview of this project.* 
* ${answers.description}

## Installation
*Steps required to install project and get the development environment established.*
* ${answers.installation}

## Usage
*Instructions and examples for use:* 
* ${answers.usage}
<img src="${answers.image}">

## License 
* ${answers.license}

## Contributions
* ${answers.contributions}

## Test
* ${answers.test}

## Questions?
<img src="${answers.ghimage}" alt="GitHub profile image">
* If you have any questions please reach out to me here: 
* GitHub: ${answers.github} 
* Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
