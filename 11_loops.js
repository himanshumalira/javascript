//  For Loop

// for (let i = 0; i < 10; i++) {
//      const value = i
//     console.log(value);
    
// }


for (let i = 0; i < 10; i++) {
     const value = i
     if (i == 5) {
        // console.log(" 5 is here ");
     }
    // console.log(value);
    }



for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
   for (let j = 0; j < 10; j++) {
    // console.log(`inner loop ${j} and outer ${i}`);
    
   }
}


let myArr = ["*", "**", "***", "****"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
    }


    // break statement ( Break the loop)

    for (let i = 1; i <= 20; i++) {
       if (i == 5) {
        // console.log(" 5 is detected");
        break;
       }
        // console.log(i);
        
    }


//  Continue statement ( Skip the point )
    for (let i = 1; i <= 20; i++) {
       if (i == 5) {
        // console.log(" 5 is detected");
        continue;
       }
        // console.log(i);
        }



         //  while loop
        let value = 0
         while (value <= 5) {
            // console.log(value);
            value = value+1
         }

         let arr = [1, 2, 3, 4, 5]
         let arr1 = 0
         while (arr1 < arr.length) {
            // console.log(` value is ${arr[arr1]}`);
            arr1 = arr1+1
         }


        //  Do While Loop
         let num = 20
        do {
            // console.log(`value is ${num}`);
            num++
        } while (num <= 10);



      //  For Of Loop

      let arrFor = [1, 2, 3, 4, 5]
      for (const num of arrFor) {
         // console.log(num);
      }

      const greeting = "Himanshu"
      for (const greet of greeting) {
         // console.log(greet);
      }


      //  maps 
      
      const map = new Map()
      map.set('In', "India")
      map.set('Fr', "france")
      map.set('AUS', "Australia")
      // console.log(map);
      for (const [key, value] of map) {
         // console.log(key, value);
      }


      // For in loops
      const myObj = {
         js: "JavaScript",
         rs: "ruby",
         py: "python"
      }

      for (const key in myObj) {
         // console.log(`${key} shortcut for ${myObj[key]}`);
            
         }

         const programming = ["js", "py", "rb", "css"]
         for (const key in programming) {
           
               // console.log(`${key} for ${programming[key]}`);
            }
         


      //  For each loop

      const myNum = [1, 2, 3, 4, 5]

      // myNum.forEach((item) => {
      //    console.log(item);
      // })

      // function print (item){
      //    console.log(item);
      // }
      // myNum.forEach(print)
      // myNum.forEach((item, index, arr)=> {
      //    console.log(item, index, arr);
      // })

      const coding = [
         {
            lang: "javascript",
            file: "js"
         },
         {
            lang: "python",
            file: "py"
         },
         {
            lang: "ruby",
            file: "rb"
         },
      ]

      coding.forEach((code)=> {
         console.log(code.lang, code.file);
      })