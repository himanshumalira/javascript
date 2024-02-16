//  In javascript, a string is a sequence of characters enclosed within either single quotes(''), double quotes("") and backticks(``).

//  Strings are the one of Primitive datatypes in javascript, used to represent the textual data.

// const name = "Himanshu"
// const age = 23

// console.log(name + age + "value")
// console.log(`My name is ${name} and my age is ${age}`)


//  Access the keys and protypes of a string
// const gameName = new String('wcc3')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('c'))


// Making a substring ( give the start number and end number of pre-defined string)
// const newString = gameName.substring(0, 2) 
// console.log(newString) (The last value of key[2] does not add to substring)
// const anotherString = gameName.slice(0, 2)
// const anotherString = gameName.slice(-1, 2)
// console.log(anotherString)(we are give the both positive and negative value in slice method)



//  Trim ( Remove all extra spaces of the string)
// const name = "    himanshu   "
// console.log(name)
// console.log(name.trim())


// Replace ( Replace the characters)
// const url = "https://himanshumalira.com/himanshu%20malira"
// console.log(url.replace('%20', '-'))


// Include ( search if  the charater or word is available or not)
// const name = "Himanshu"
// console.log(name.includes('s'))


// split ( saperate any variable data on the basis of given instuction)
// console.log(url.split('/'));