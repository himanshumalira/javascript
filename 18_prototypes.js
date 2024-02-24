//  Everything is object in javascript. You can access all object properties with dot notation 
//  You can also run a function as object 
//  end of the day the prototype of an object is null 
//  This keyword is also related to prototype


/* Here is what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified argument and this is bond to the newly created object. If no explicit return value is specified from the constructor, javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it does not return a non primitive value, the newly create object is returned.

*/ 



//  Understanding of object function 

// function multiplyBy5(num){
//     return num*5
// }
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);




//  Understanding of New keyword =>

// function createUser (username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
// this.score++
// }
// createUser.prototype.printMe = function (){
//     console.log(`my score is ${this.score}`);
// }

// const oggy = new createUser("oggy", 25)

// const jack = new createUser("jack", 100)

// oggy.printMe()



// let myHeros = ["thor", "spiderman"]
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`);
//     }
// }

// Object.prototype.himanshu = function(){
//     console.log('Himanshu is present in all obj');
// }

// Array.prototype.heyHimanshu = function(){
//     console.log("Himanshu says hello");
// }

// When we create any mathod by using Object then all objects, arrays etc can access the created mathod
// heroPower.himanshu()
// myHeros.himanshu()

//  When we created a mathod by using Array then we can access the mathod only in arrays 
// myHeros.heyHimanshu()
// heroPower.heyHimanshu()



//  Inheritance 
// const user = {
//     name: "Himanshu",
//     email: "himanshu@google.com"
// }
// const teacher = {
//     makeVideo: true
// }
// const teachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment: " Java assgn",
//     fullTime: true,
//     __proto__: teachingSupport
// }

// teacher.__proto__ = user

// //  Modern syntax
// Object.setPrototypeOf(teachingSupport, teacher)



// //  Create a mathod to remove all extra speces from the string
// let User = "Himanshu     "

// String.prototype.trueLength = function(){
//     console.log(this);
    
//     console.log(`True length is ${this.trim().length}`);
// }
// User.trueLength()
// "bhardwaj".trueLength()
// "jacksparrow      ".trueLength()