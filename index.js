// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMD = (questions) =>
  `# ${questions.title}

## Description
${questions.description}

## Technology
${questions.technology}

## Table of Contents
${questions.contents}

## Installation
${questions.installation}

## Usage
${questions.usage}

## License
${questions.license}

## Contribution
${questions.contribution}

## Tests
${questions.tests}`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project.",
    },
    {
      type: "input",
      name: "technology",
      message: "What are the technologies in your project?",
    },
    {
      type: "input",
      name: "contents",
      message: "Provide a list of table of contents.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do we install your dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage for this code?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What is the license for this project?",
      choices: ["MIT", "Artistic", "Apache", "CC0", "WTFPL"],
    },
    {
      type: "input",
      name: "contribution",
      message: "How can other people contribute?",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests did we preform in this project?",
    },
  ])
  .then((questions) => {
    const mdPageContent = generateMD(questions);

    fs.writeFile("readme.md", mdPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme.md!")
    );
  });


