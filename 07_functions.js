//  Functions => In javascript, functions are blocks of reusable code that can be defined and then called to perform a specific task.
//  In functions we give the parameters into the bracket() then defined the code in curly breces{} 
// when we called a function we give the argument in bracket instead of parameter 

function myName(){
    console.log("H");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}
// myName  ( This is the refrence of the function)
// myName() ( calling the function )

function addTwoNum (num1, num2){
    console.log(num1 + num2);
}

// addTwoNum(5, 6) ( this method do not return or store any value this is the simple console of data)


function addTwoNum (num1, num2){
    let num = num1+num2 
    return num
    return (num1 + num2);
    // console.log("Himanshu")( After return statement nothing is execute the code stop default after the return statement )
}
const result = addTwoNum(5, 6)
// console.log(result);
// console.log("Number: ", num); ( this method returns or store any value)

function loggedInUser (username){
    return `my name is ${username}`
}

// const username = loggedInUser("Himanshu")
// console.log(username);

const username = loggedInUser()
// console.log(username); ( if we are not passing any argument then we got undefined )


function calculateCartPrice (...number){
    return number
}

// console.log(calculateCartPrice(200, 400, 500)); ( Here we will use the rest operator [...] to add all argument in an array)



//  Passing an Object into the function 

const user = {
    name: "Himanshu",
    age: 23
}

function handleObject (anyObject){
    // console.log(`my name is ${anyObject.name} and my age is ${anyObject.age}`);
    return `my name is ${anyObject.name}`
}

// handleObject(user)
// console.log(handleObject(user));


// passing an array into the function 

const myArr = [100, 200, 331]

function array (myAr){
    // console.log(`${myAr[1]}`);
}
// array(myArr)



//  Functions into the functions 

function one() {
    const username = "Himanshu"

    function two(){
        const age = 23
        // console.log(`my name is ${username} and my age is ${age}`);
    }
    // two()
}
// one()



//  Closure => when a nested function (Child Function) access any variable of a parent function is called Closure



//  Function Hoisting

// addOne(5) => you can execute any function before declearation, but the function is not stored in any variable
// addOne(5)
function addOne (num){
    return num +1
}

// addTwo(5) => you can not execute function before declearation, because the function is stored in a variable
const addTwo = function (num){
    return nuum +1
}
// addTwo(5)


