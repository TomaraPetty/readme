// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

`# ${answers.projectTitle}
<a href="${answers.prjectLink}">Click here to see it in action.</a>

## Description 
*Overview of this project.* 
${answers.description}

## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
*Steps required to install project and get the development environment established.*
${answers.installation}
* ${answers.instBullet}
* ${answers.instBullet}

## Usage
*Instructions and examples for use:* 
* ${answers.usage}
<img src="${answers.image}">

## Questions?
* <img src="${answers.ghimage}" alt="GitHub profile image">
* If you have any questions please reach out to me here: 
* GitHub: ${answers.github} 
* Email: ${answers.email}
`;