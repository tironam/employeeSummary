const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, title, id, email, github) {
        super (name, title, id, email)
        this.github = github
        this.getGithub = () => {
            return github
        }
        this.getRole = () => {
            return 'Engineer'
        }
    }
    
}

module.exports = Engineer