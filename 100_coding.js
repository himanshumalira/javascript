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