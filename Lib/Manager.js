const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, title, id, email, officeNumber) {
        super (name, title, id, email)
        this.officeNumber = officeNumber
        this.getOffice = () => {
            return officeNumber
        }
        this.getRole = () => {
            return 'Manager'
    }
    }
}

module.exports = Manager