const inquirer = require('inquirer');
const { parseNIK } = require('./utils');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'nik',
        message: "Masukkan nomor NIK:",
    },
  ])
  .then((answers) => {
    console.log(parseNIK(answers.nik));
  })
  .catch((error) => {
    console.error("WOW ADA ERROR: ", error);
  });