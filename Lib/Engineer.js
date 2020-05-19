const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.gitHub = github
        this.getGithub = () => {
            return this.github
        }
        this.getRole = () => {
            return 'Engineer'
        }
    }
    
}

module.exports = Engineer