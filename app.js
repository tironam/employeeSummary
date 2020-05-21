const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const { prompt } = require('inquirer')
const { promisify } = require('util')
const { appendFile, writeFile } = require('fs')

const appendFileSync = promisify(appendFile)
const writeFileSync = promisify(writeFile)

// Creates the header and upper part of body for the HTML and the file itself
writeFileSync('./output/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<nav class="navbar navbar-dark bg-danger">
  <span class="navbar-brand mb-0 h1">Your Team</span>
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
            message: 'Pick employee role. To finish, select "Done"',
            choices: ['Manager', 'Engineer', 'Intern', 'Done']
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
                case 'Done':
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
            message: 'Name:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Manager, Engineer, or Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Office Number:"
        }
    ])
        .then(({ name, title, id, email, officeNumber }) => {
            let manager = new Manager(name, title, id, email, officeNumber)
            newManager(manager)
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
            name: 'title',
            message: 'Manager, Engineer, or Intern?'
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
        .then(({ name, title, id, email, github }) => {
            let engineer = new Engineer(name, title, id, email, github)
            newEngineer(engineer)
        })
        .catch(err => console.log(err))
}

//Questions for Intern
let intQs = () => {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern\'s Name:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Manager, Engineer, or Intern?'
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
        .then(({ name, title,  id, email, school }) => {
            let intern = new Intern(name, title, id, email, school)
            newIntern(intern)
        })
        .catch(err => console.log(err))
}


// Adds answers to html that gets appended to html file        
let newManager = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header"><span><i class="fas fa-mug-hot"></i></span> ${answers.title}</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p className="card-text"><span><i class="fas fa-id-card"></i></span> ${answers.id}</p>
                <p class="card-text"><span><i class="fas fa-envelope"></i></span> ${answers.email}</p>
                <p class="card-text"><span><i class="fas fa-building"></i></span> Office #: ${answers.officeNumber}</p>
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
let newEngineer = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header"><span><i class="fas fa-keyboard"></i></span> ${answers.title}</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p className="card-text"><span><i class="fas fa-id-card"></i></span> ${answers.id}</p>
                <p class="card-text"><span><i class="fas fa-envelope"></i></span> ${answers.email}</p>
                <p class="card-text"><span><i class="fab fa-github"></i></span>  ${answers.github}</p>
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
let newIntern = (answers) => {
    appendFileSync('./output/index.html', `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"><span><i class="fas fa-pencil-alt"></i></span> ${answers.title}</div>
            <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <p className="card-text"><span><i class="fas fa-id-card"></i></span> ${answers.id}</p>
                <p class="card-text"><span><i class="fas fa-envelope"></i></span> ${answers.email}</p>
                <p class="card-text"><span><i class="fas fa-university"></i></span> ${answers.school}</p>
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
        <script src="https://kit.fontawesome.com/a0c937976a.js" crossorigin="anonymous"></script>
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
        console.log('http://localhost:3000')
    })
} 