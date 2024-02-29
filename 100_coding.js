// Qus 01 =>  Chase on the Number Line

// A painter discovered that one of his painting has been stolen. He immediately informs the police of the theft.

// It is known that the policeman and thief move on the number line.

// You are given that:

// The initial location of the policeman on the number line is X and his speed is 2 units per second. The initial location of the thief on the number line is Y and his speed is 1 unit per second.

// Find the minimum time (in seconds) in which the policeman can catch the thief. Note that, the policeman catches the thief as soon as their locations become equal and the thief will try to evade the policeman for as long as possible.


// function catchThief(x,y){
//     const relativeSpeed = 2 -1
//     const distance = Math.abs(x - y)
//     const time = distance/ relativeSpeed;
//     return time

// }
// console.log(catchThief(5, 10));





// Qus 02 =>   Climbing Stairs

// You are an adventurer and you have come across a tall staircase with n steps to reach the top. You decide to take on the challenge and start climbing the stairs. You quickly realize that there are two ways to climb each step: either take 1 step at a time, or take 2 steps at once.

// Can you figure out how many different ways you can climb to the top?


// function climbStairs(n){
//     if (n === 1) return 1;
//     if(n === 2) return 2;
//     let first = 1;
//     let second = 2;
//     for (let i = 3; i <= n; i++) {
//         let third = first + second
//         first = second 
//         second = third
        
//     } 
//     return second
// }
// console.log(climbStairs(10));



// Qus 03 =>   Jack's Prime Number Dilemma

// Once upon a time, there was a young programmer named Jack. Jack had a passion for coding and always looked for new challenges. One day, his teacher gave him the assignment to write a JavaScript program to find out whether a given number was a prime number or not. Jack knew that a prime number is a number that is divisible only by one and itself.

// He started by creating an empty JavaScript function and then wrote a program that would check if the given number is divisible by any other number except one and itself.

// Help Jack complete this work given by his teacher.


// function isPrime (n){

// if (n == 1) {
//     return false;
// }if(n == 2){
//     return true;
// }if (n == 3){
//     return true
// }
//  if (n%2 == 0){
//     return  false;
// }if (n%3 == 0){
// return false;
// } else {
//     return true
// }
// } 
// console.log(isPrime(99));


// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(31));



//  Qus 04 =>  Treasure Quest

// You have been tasked with helping a group of adventurers on a quest to retrieve a treasure. In order to reach the treasure, the adventurers must cross a treacherous mountain pass. They have to carry all their supplies with them, including food and water. They have a list of all the supplies they need to bring, along with the weight of each item in arr array.
// Your task is to help the adventurers calculate the total weight of all their supplies. They have asked you to write a JavaScript program that will take an array of integers representing the weight of each item, and return the sum of all the weights using recursion.



// let arr = new Array().concat(" ") 

// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([4, 5, 6])); 




// Qus 05 =>   Sorting Fruits for Royal Chef
// Once upon a time, there was a kingdom that celebrated a grand festival every year. During the festival, people used to bring different kinds of fruits and present them to the king.

// To organize these fruits, a local merchant came up with an idea to create an array and store the fruits in it. Each element of the array would represent a fruit, and its value would be the number of times that fruit had been brought to the festival.

// As the festival came to an end, the king ordered his royal chef to prepare a grand feast for the kingdom, using the fruits in the array. However, the chef had a unique requirement. He wanted to use the fruits in decreasing order of their frequency, and in case two or more fruits had the same frequency, he wanted to use the one that appeared first in the array.

// let array = ["apple", "banana", "apple", "banana", "banana", "apple"]
// function sortedArray(arr){
// const value = [...new Set(array)]
// return value
// }

// console.log(sortedArray( array));




// Qus 06 => forEach ka use krke kisi array me hello word add kro
// let arr = [1, 2, 3, 4, 5]
// 

// arr.forEach(function(arr){
//     console.log(arr + "hello")
// })



//  Qus 07 => Array k sare number print kro or unhe chhord do jo ki 2 se bade h 

// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function(arr){
//            if (arr <= 2) {
//             console.log(arr);
//            }
// })




//  Qus 08 => saare elements jo ki array me h unka sum kro

// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach(function(arr){
//         console.log(sum = sum + arr);
// })



//  Qus 09 => array k saare element add kro or agar unme koi string nikal jaye to use skip kro

// let arr = [1, 2, 3, "4", 5,]
// let sum = 0
// arr.forEach(function(arr){
//     if(typeof arr == "number"){
//             console.log(sum = sum + arr);
//     }
// })



// Qus 10 => Write a js function to check whether an `input` is an array or not.

// [Whenever we create an array it is always given a blueprint or an instance which is Array]


//  let array = [1,2,3,4,5,6,7,8]
// function isArray() {
//     console.log(Array.isArray(array));
// }
// isArray()

// function isArray(){
//     console.log(array instanceof Array);
// }
// isArray()


// Qus 11 => Write a js function to clone an array.

// let array = [1,2,3,[4,5],6]

// function cloneArray(){
//     let cloned = [...array]
//     return console.log(cloned, array);
// }
// cloneArray()



//  Qus 12 =>  Write the js function to get the first element of an array. passing a parameter 'n' will return the first 'n' element of the array.

// function firstElement(inp, get = 1){
//         let cloned = []
//         for (let i = 0; i< get; i++) {
//                cloned.push(inp[i])
//         }
//         return cloned
// }

// console.log(firstElement([1, 2, 3], 2));



//  Qus 13 => Write a simple js function to join all elements of the following array into a string .
//  let color = ["red", "green", "blue"]

//  function joinArray(){
//         return color.join("+/,")

// }

// console.log(joinArray())


// Qus 14 => Possible ways to create an object.

// 1- Object literal => let a = {}

// 2- By using Object.create Mathod => let obj = Object.create(null)

// 3- by new keyword => 
//  function obj (){
//                   this.name = "himanshu"

//                     }
//                   const object = new Object()
//                   console.log(object);

// 4- By class constructor => 
//                      class Constructor{
//                               constructor(){
//                                   }
//                               a = 12
//                                   }
//                     const result = new Constructor()




// Qus 15 => What is higher order function?
//            hoc functions, contains a function as a parameter or return a function .
//  Function k andar function hote h

// function hoc (inp){
//     return function(inp2){
//         return inp + inp2
//     }
// }

// console.log(hoc(10)(50));



//  Qus 16 => What is map ?
//  Jab apko array k har member par koi operation perform krna ho or har member par perform krne k baad usey ek naye array me dalna h tab ham map ka use krte h.
//  it is compulsory to return its function's defination 
//  you will store its return value is a variable 

//  [1, 2, 3, 4] x 2 array 
//  [2, 4,6,8]  new array

// let array = [1, 2, 3, 4];
// let newArray = array.map(function(val){
//     return val * 2
// })
// console.log(newArray);


// Qus 17 => Ek array se ek naya array bnao jisme agar word ki length 5 h to p tag me daalo nhi to span tag me daalo.

// let array = ["apple", "banana", "seb", "kivi"]

// const newArray = array.map(function(val){
//             if (val.length >= 5){
//                 return `<p>${val}</p>`
//             }else {
//                 return `<span>${val}</span>`
//             }
// })

// console.log(newArray);



// Qus 18 => Ek array of object h jisme kaafi data h usse ek array bnao jisme sirf name ho

// let array = [{
//     name: "himanshu",
//     age: 23
// }, {
//     name: "kivi",
//     age: 24
// }, {
//     name: "apple",
//     age: 25
// }]

// const result = array.map(function (val){
//             return val.name
// })
// console.log(result);



//  Qus 19 => Why are we making IIFE ??
//  To create Private variables.

// Qus 20 => How do you protect these variable??
//  var a = 12;

//  (function() {
//      var a = 12;
//      console.log(a);
//     })();
//     console.log(a);


// Qus 21 => How to access and change the value of a variable which is declared in the private variables .

// let change = (function (){
//     let a = 12;
//     return {
//         getter: function (){
//             console.log(a);
//         },
//         setter: function (val){
//             a = val;
//         }
//     }
// })();
// change.setter(580)
// change.getter();



// Qus 22 => Print numbers from 1 - 10.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }


// Qus 23 => Print the odd numbers less then 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 2!= 0) {
//         console.log(i);
//     }
// }



// Qus 24 => Print the multiplication table of 7.

// for (let i = 1; i <= 10; i++){
//     console.log(`${i} * 7 = ${i*7}`);
// }


//  Qus 25 => Print all the multiplication table with numbers of 1 to 10.


// for (let i = 1; i <= 10; i++){
//     for (j = 1; j<= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



// Qus 26 => Calculate the sum of numbers from 1 to 10.


// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
    
// }
// console.log(sum);



// Qus 27 => Calculate 10! .
// let factorial = 1
// for (let i = 1; i <= 10; i++) {
//         factorial = factorial * i
// }

// console.log(factorial);

//  Qus 28 => Calculate the sum of even numbers greater than 10 and less than 30


// let sum = 0;
// for(let i = 11; i <= 30; i++) {
//     if(i % 2 == 0){
//         sum = sum + i
//         console.log(i);
//     }
//     console.log(sum);
// }



//  Qus 29 => Create a function that will convert from celsius to fahrenheit.
//   function convert (celsius) {
//     return `The value of F is ${celsius * 1.8 + 32}`
//   }
//   console.log(convert(39));



// Qus 30 => calculate the sum of numbers in array of numbers.

// let array = [1, 2, 3, 4, 5, 5]
// let sum = 0
// array.forEach(function(val){
//     sum = sum + val
// })
// console.log(sum);