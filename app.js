const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const { prompt } = require('inquirer')
const { promisify } = require('util')
const { appendFile, writeFile } = require('fs')

const appendFileSync = promisify(appendFile)
const writeFileSync = promisify(writeFile)

//define empty array
let team = []

// Creates the header and upper part of body for the HTML and the file itself
writeFileSync('./output/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<nav class="navbar navbar-dark bg-danger">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>
<div class="container">
<div class="row">
    `, err => {
    if (err) {
        console.log(err)
    }
})

// Allows you to choose which role you're going to write about
let chooseRole = () => {
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose the role of the employee:',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish Roster']
        }
    ])
        .then(({ role }) => {
            switch (role) {
                case 'Manager':
                    manQs()
                    break
                case 'Engineer':
                    engQs()
                    break
                case 'Intern':
                    intQs()
                    break
                case 'Finish Roster':
                    stopQs()
                    break
            }
        })
}

chooseRole()

// Questions for the manager
let manQs = () => {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager\'s email:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number:"
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            let newManager = new Manager(name, id, email, officeNumber)
            console.log(newManager)
            // Pushes manager answers into the team array
            team.push(newManager)
            createManager(newManager)
        })
        .catch(err => console.log(err))
}

// Questions for Engineer
let engQs = () => {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer\'s Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer\'s Email:'
        },
        {
            type: 'input',
            name: 'github',
            message: "Github username:"
        }
    ])
        .then(({ name, id, email, github }) => {
            let newEngineer = new Engineer(name, id, email, github)
            console.log(newEngineer)
            // pushes answers from engineer to the team array
            team.push(newEngineer)
            createEngineer(newEngineer)
        })
        .catch(err => console.log(err))
}

//Questions for Intern
let intQs = () => {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Inter\'ns Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern\'s ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern\'s Email:'
        },
        {
            type: 'input',
            name: 'school',
            message: "School:"
        }
    ])
        .then(({ name, id, email, school }) => {
            let newIntern = new Intern(name, id, email, school)
            console.log(newIntern)
            team.push(newIntern)
            createIntern(newIntern)
        })
        .catch(err => console.log(err))
}


// Adds answers to html that gets appended to html file        
let createManager = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p class="card-text">Email: ${answers.email}</p>
                <p class="card-text">Office Number: ${answers.officeNumber}</p>
        </div>
    </div>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
    chooseRole()
}

// Adds answers to html that gets appended to html file
let createEngineer = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p class="card-text">Email: ${answers.email}</p>
                <p class="card-text">GitHub Username: ${answers.github}</p>
        </div>
    </div>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
    chooseRole()
}

//Adds answers to html that gets appended to html file
let createIntern = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p class="card-text">Email: ${answers.email}</p>
                <p class="card-text">School: ${answers.school}</p>
        </div>
    </div>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
    chooseRole()
}

let stopQs = () => {
    appendFileSync('./output/index.html', `
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                crossorigin="anonymous"></script>
    </body>
    </html>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
} 