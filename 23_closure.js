//  Lexical Scoping => When we define a function inside a function then the child function access the variable declared in parent function but the parent function did not access the variable declared in child function


// function User () {
//     let mayBe = "may be"
//     function child (){
//         console.log(mayBe)
//     } 
//     child()
// }
// User()


//  Closure =>
//   When you define a function inside a function and return a child function inside the parent function then when we execute the parent function then the return value is not a child function rather the whole lexical scop (whole function include parent and child) will be executed.


// function Closure (){
//     const name = "Closure"
//     function child (){
//                 console.log(name)   
//     }
//     return child;
//     }

//     const myFunc = Closure()
//     myFunc()


//  Example need html file
// function clickme (color){
//     return function(){
//         ducument.body.style.backgroundColor = `${color}`;
//     }
// }

// document.getElementById("orange").onclick = clickme("orange");
// document.getElementById("green").onclick = clickme("green");
