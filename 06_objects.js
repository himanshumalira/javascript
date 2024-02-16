//  Objects => In javascript, objects are one of the fundamental data types and they are used to store collections of key-value pairs.

// Objects Singleton => object.create-------------
 const object = new Object()
object.name = "Himanshu"
object.age = 23
// console.log(object);







//  Objects Literals => constructor -----------------

const mySym = Symbol("key1")
const user = {
    name: "Himanshu",
    "full name": "Himanshu Pathak",
   [ mySym]: "key1",
    age: 23,
    location: "Muzaffarnagar",
    email: "himanshumalira@gmail.com",
    isLoggedIn: false
}

// console.log(user.email);
// console.log(user["age"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.age = 24 ( To change the objects value)
// console.log(user);
// Object.freeze(user) ( This property i sused to freze the object it means after applying this property you should never change the object value)

// user.email = "bhardwaj@gmail.com"
// console.log(user);


user.greeting = function(){
    console.log("Hello Sir");
}
user.greetingTwo = function(){
    console.log(`Hello Sir ${this["full name"]}`);
}

// console.log(user.greetingTwo());


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} ( merge two or more objects but in this method objects merge into the object)


// const obj3 = Object.assign({}, obj1, obj2)( merge two or more objects this method merge the objects and create a new object ) 


// const obj3 = {...obj1, ...obj2} (Spered method )
// console.log(obj3);


// Object.keys(user) [ access all the keys and return the store of data into the Array formate]
// console.log(Object.keys(user)); ( Data return in Array formate)


//  hasOwnProperty => Method 
// console.log(user.hasOwnProperty('age')); ( is property available or not )



//  De-structure 

const course = {
    name: "JS in Hindi",
    price: 999,
    Instructor: "Himanshu"
}

const {Instructor} = course
const {Instructor: Teacher} = course
// console.log(Instructor);
// console.log(Teacher);