const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
      name: "url",
      message: "What is the url to your project?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "repo",
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

function generateReadme(answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
}

async function init() {
  try {
    const answers = await askQuestions();

    const html = generateReadme(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
