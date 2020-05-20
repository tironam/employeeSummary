const { prompt } = require('inquirer')
const { writeFile, readFile, appendFile } = require('fs')
const { promisify } = require('util')
const Manager = require('./Lib/Manager')
const Engineer = require('./Lib/Engineer')
const Intern = require('./Lib/Intern')

const writeFileSync = promisify(writeFile)
const readFileSync = promisify(readFile)
const appendFileSync = promisify(appendFile)

let team = []

const manager = () => {
    prompt ([
    {
        type: 'input',
    name: 'name',
    message: 'Enter Manager\'s name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Manager\'s ID: '
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Office Number'
    }
    ])
} 

// const top = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
// `

// writeFileSync('index.html', top)
//     .then(() => {
//         prompt([
//             type: 'input',
//             name: ''
//         ])
//     })

console.log(manager)