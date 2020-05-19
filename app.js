const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { promisify } = require('util')
const Manager = require('./Lib/Manager')
const Engineer = require('./Lib/Engineer')
const Intern = require('./Lib/Intern')

const writeFileSync = promisify(writeFile)

const top = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
`

writeFileSync('index.html', top)
    .then(() => {
        prompt([
            type: 'input',
            name: ''
        ])
    })