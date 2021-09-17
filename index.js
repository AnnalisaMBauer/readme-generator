// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const fs = require("fs");

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
      name: "installation",
      message: "How do we install your dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage for this project?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What is the license for this project?",
      choices: ["MIT", "Artistic", "Apache", "CC0", "WTFPL", "none"],
    },
    {
      type: "input",
      name: "contributing",
      message: "How can other people contribute?",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests did we preform in this project?",
    },
    {
      type: "input",
      name: "contact",
      message:
        "What is a good email address that you can be contacted at regarding this project?",
    },
  ])
  .then((questions) => {
    const mdPageContent = generateMD(questions);

    fs.writeFile("readme.md", mdPageContent, (err) =>
      err
        ? console.log(err)
        : console.log("Success! Your README.md file has been generated!")
    );
  });
