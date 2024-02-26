//  If we called a function inside a function then we need .call mathod to execute a function inside a function

// function setUserName(username){
//     this.usernam = username
// }

// function createUser(username, email, password){
//     //  To access username we need to refrence of this keyword inside the function to br execute
// setUserName.call(this, username)

// this.email = email
// this.password = password
// }
// const result = new createUser("himanshu", "himansh@gmail", 123)
// console.log(result);