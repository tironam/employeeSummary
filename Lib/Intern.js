const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, title, id, school) {
        super (name, title, id, email)
        this.school = school
        this.getSchool = () => {
            return school
    }
    this.getRole = () => {
        return 'Intern'
    }
    }
    
}

module.exports = Intern