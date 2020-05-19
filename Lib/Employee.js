class Employee {
    constructor(name, title, id, email) {
        this.name = name
        this.title = title
        this.id = id
        this.getName = () => {
            return this.name
        }
        this.getId = () => {
            return this.id
        }
        this.getEmail = () => {
            return this.email
        }
        this.getRole = () => {
            return 'Employee'
        }
    }
}

module.exports = Employee