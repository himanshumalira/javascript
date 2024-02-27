class User {
    constructor (email, password){
        this.email = email
        this.password = password
    }

    // It is compolsory to define get and set both methods togather
    // When you define any variable in get and set then constructor did not set those value, the value is set by setter and get by getter
    // It is important to remember that the variable name of constructor did not same as the variable to get and set by setter and getter
    get password(){
       return this._password.toUpperCase() 
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const himanshu = new User("himanshu", "bharw")

console.log(himanshu.password);