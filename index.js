const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function askQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
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
      name: "title",
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
  return `# ${answers.title}
  ## Project description
  ${answers.description}
  ## Table of contents
  ### Use
  ${answers.use}
  ### Technologies used
  ${answers.technologies}
  ### Installation
  ${answers.commandInstall}
  ### Contributing
  ${answers.contribute}
  ### License
  ${answers.license}
### Dependencies
${answers.dependencies}
### Tests
${answers.tests}
### How to Use Repo
${answers.repo}
### How to Contribute
${answers.contribute}
  ### Creator information
  GitHub username: ${answers.username}\n
  Email: ${answers.email}\n
  Github repository: ${answers.urlAddress}
  `;
}

async function init() {
  try {
    const answers = await askQuestions();

    const readme = generateReadme(answers);

    await writeFileAsync("README2.md", readme);

    console.log("Successfully wrote to README2.md");
  } catch (err) {
    console.log(err);
  }
}

init();
