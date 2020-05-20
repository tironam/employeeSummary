const { prompt } = require('inquirer')
const { writeFile, readFile, appendFile } = require('fs')
const { promisify } = require('util')
const Manager = require('./Lib/Manager')
const Engineer = require('./Lib/Engineer')
const Intern = require('./Lib/Intern')

const writeFileSync = promisify(writeFile)
const readFileSync = promisify(readFile)
const appendFileSync = promisify(appendFile)

const top = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
`

let team = []

const manager = () => {
    prompt ([
        {
            type: 'input',
        name: 'name',
        message: 'Enter Manager\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager\'s ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email Address: '
        }
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Office Number: '
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            let manager1 = new Manager(name, id, email, officeNumber)
            console.log(manager1)
            team.push(manager1)
            writeManager(manager1)
        })
        .catch(err => console.log(err))
} 

const writeManager = (answers) => {
    appendFileSync('/output/index.html', top)
        .then(() => {
            
        })
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