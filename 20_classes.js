// class User {
//     constructor (username, email, password){
//         this.username = username
//         this.email = email 
//         this.password = password

//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const jerry = new User("Himanshu", "himanshu@gmail.com", 123456)
// console.log(jerry.encryptPassword());
// console.log(jerry.changeUsername());


//  Behind the scene

// function User(username, email, password){
//     this.username = username
//     this.email = email 
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const jerry = new User ("Himanshu", "himanshu@gmail.com", 123456)

// console.log(jerry.changeUsername());




//  Inheritancce

// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`username is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }
//     addCourse(){
//         console.log(`A new course is added by ${this.username}`);
//     }

// }

// const main = new Teacher("Himanshu", "main@gmail.com", 123456)
// const uper = new User("Himanshu")
// console.log(main.addCourse());
// console.log(uper.logMe());
//         main.logMe()
// console.log(main instanceof User); // true
// console.log(uper instanceof Teacher); // False
// console.log(main instanceof Teacher);  // True




//  Static Props

// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`username is ${this.username}`);
//     }
//    static createId(){
//         return `123`
//     }
// }

// const himanshu = new User("Himanshu")
// console.log(himanshu.createId()); 
// we have no access of create id because of static keyword 