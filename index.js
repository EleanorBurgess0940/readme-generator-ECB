const inquirer = require("inquirer");

function askQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "hobby",
      message: "What is the url to your project?",
    },
    {
      type: "input",
      name: "food",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "github",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "hobby",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "food",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "github",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
}

askQuestions();
