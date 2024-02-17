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