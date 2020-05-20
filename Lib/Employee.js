class Employee {
    constructor(name, title, id) {
        this.name = name
        this.title = title
        this.id = 100
        this.getName = () => {
            return name
        }
        this.getId = () => {
            return id
        }
        this.getEmail = () => {
            return email
        }
        this.getRole = () => {
            return 'Employee'
        }
    }
}

module.exports = Employee