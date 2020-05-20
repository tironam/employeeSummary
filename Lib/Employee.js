class Employee {
    constructor(name, title, id, email) {
        this.name = name
        this.title = title
        this.id = id
        this.email = email
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