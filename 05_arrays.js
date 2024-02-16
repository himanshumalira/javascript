//  Arrays => Always written in squire brackets[]
//  In JS an array is a data structure used to store a collection of elements. 
//  Arrays can hold value of any datatype including Numbers, Strings,Objects, and even other array
//  Array in JS are zero indexed, meaning the first element is accessed with an index of 0, second with an index of 1 and so on



const myArr = [1, 2, 3 , 4]
const myHeros = ["karan", "Arjun", "Ashwathama", "Duryodhan", "Bheem"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]); (Access the first index)


// Array Methods

myArr.push(5)
// console.log(myArr); ( Add an element in the end of an array)

myArr.pop()
// console.log(myArr); ( Remove the last element of an array)

myArr.unshift(8)
// console.log(myArr);( Add en element in the beggining of an array)

myArr.shift()
// console.log(myArr);( Remove the first element of an array)

// console.log(myArr.includes(3)); ( Search the element is avalaible or not )
// console.log(myArr.indexOf(2)); ( Find the index of an element)


// join method
// const newArr = myArr.join()
// ( Convert the Array into String Formate)
// console.log(myArr);
// console.log(newArr);


// Slice or Splice method

//  Orignal array
// console.log("A", myArr);

// Using slice method between the range of 1 to 3 and the result of the method is given output index[1] to index[2] , the last one is not included in the output
//  Slice method did not make changes in Orignal array
// const mya1 = myArr.slice(1, 3)
// console.log(mya1);
// console.log("B", myArr);


// Using Splice method between the range of 1 to 3 and the result of the method is given output index[1] to index[3], in this method all range is included in output
//  Splice method make changes in Orignal Array 
//  we got a new array, the splice part is remove from the Array
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log(myArr);



const myheros2 = ["hritik", "akshay", "Sunny"]

//  myHeros.push(myheros2)( This method push the new array inside previous array as an element)
// Push the new within existing array 
// console.log(myHeros);

const allHeros = myHeros.concat(myheros2)
// console.log(allHeros); (Concat method merge two or more array and returns the new array without modifying existing array)
// dont push the array within existing array
// push the array and create a new array without modifying existing array



//  Spred operator 
const allHeros2 = [...myHeros, ...myheros2]
// console.log(allHeros2);( spered two or more arrays and create a new array)


// flat method
const arrr = [1, 2, 3, 4, [2, 5, 9, [5, 7, 8]]]

const realArr = arrr.flat(Infinity)
// console.log(realArr); ( Return a new array with all sub-arrays concatinate with it)