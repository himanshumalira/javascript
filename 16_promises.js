// Do an async task
// DB calls, cryptography, Network [related work]


// const promiseOne = new Promise( function (resolve, reject){
//     setTimeout(() => {
//         console.log("Async task is completed")
//         resolve()
//     }, 2000)
// })

//  Consume promise  
// then() => directly relation with resolve
// return value of defination(promiseOne)
//  If you had run then(), first you called resolve in defination
// promiseOne.then(
//     ()=> {
//         console.log("Promise consumed");
//     }
// )

// // Second method to create new promise
// new Promise(
//     function (resolve, reject){
//         setTimeout(() => {
//             console.log("Async two task is completed")
//             resolve()
//         }, 2000)
//     }
// ).then(
//     ()=> {
//         console.log("Promise 2 consumed");
//     }
// )

// // create third promise
// // if we pass any value in resolve then we get return that value in then method 

// const promiseThree = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Himanshu", email: "himanshu2gmail.com"})
//     }, 1000);
// })

// promiseThree.then((user)=> {
//     console.log(user);
// })



//  Create forth promise with error 
// Using of reject 

// const promiseForth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      let error = true;
//    //   let error = false;
//      if (!error) {
//         resolve({username: "Himanshu"})
//      }else {
//         reject('ERROR: Something went wrong')
//      }   
//     }, 1000);
// })

// promiseForth.then((user)=>{
//    console.log(user);
//    return user.username
// }).then((username)=>{
//    console.log(username);
// }).catch((error)=>{
//    console.log(error);
// }).finally(()=>console.log("The promise is either resolve or rejected"))



//  Create promise Five
// const promiseFive = new Promise((resolve, reject)=>{
//    setTimeout(() => {
//            let error = true;
//             // let error = false;
//            if (!error) {
//               resolve({username: "Himanshu", password: 112})
//            }else {
//               reject('ERROR: Something went wrong')
//            }   
//           }, 1000);
// })

// async function consumePromise() {
//    try {
//       const response = await promiseFive
//       console.log(response);
//    } catch (error) {
//       console.log(error);
//    }
// }
// consumePromise()




//  Fetch method

// async function getAllUsers(){
//   try {
//     const response = await fetch ("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//    console.log("E: ", error);
//   }
// }
// getAllUsers()


// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//    return response.json()
// }).then((data)=> {
//    console.log(data);
// }).catch((error)=>{
//    console.log(error);
// })