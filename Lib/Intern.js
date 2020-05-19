const Employee = require('/Employee')

class Inter extends Employee {
    constructor (name, id, title, school) {
        super (name, id, title)
        this.school = school
    }
    this.getSchool = () => {
        return this.school
    }
}