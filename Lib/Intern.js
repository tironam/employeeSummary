const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, title, school) {
        super (name, id, title)
        this.school = school
        this.getSchool = () => {
            return this.school
    }
    this.getRole = () => {
        return 'Intern'
    }
    }
    
}

module.exports = Intern