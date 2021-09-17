// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){
return 
  }
  return `![${license}](https://img.shields.io/badge/badge-${license}-blue);`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   if (license === "none") {
     return;
   }
   return "[License](#license)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "none") {
      return;
    }
    return `## License

    This project is under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
const generateMD = (questions) =>
  `# ${questions.title} ${renderLicenseBadge(questions.license)}

## Description
${questions.description}

## Table of Contents

* [Technology](#technology)
* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseLink(questions.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Images](#images)
* [Contact](#contact)

## Technology
${questions.technology}

## Installation
${questions.installation}

## Usage
${questions.usage}

${renderLicenseSection(questions.license)}

## Contributing
${questions.contributing}

## Tests
${questions.tests}

## Images

## Contact
Please contact me at ${questions.contact} with any questions or concerns.`;


module.exports = generateMD;
