console.log("helllo world");
// let i = 0;
let prompt = require("prompt-sync")()
// let i = Number(prompt("enter your nmber"))
// for( let j=1;j<=i;j++){
//     console.log(j);
// }
// let arr =[10, 20, 30, 40, 50]
// // console.log(arr.length);

// for(var i=0;i <=arr.length-1;i++ ){
//     console.log(arr[i])
//     // console.log(arr); 
//     if (arr[i] === 50){
//         for(var j = 0;j<=arr.length-1;j++){
//             console.log(arr[j]);
//         }
//     }
// }

// let arr = [10,20,30,40,50];
// for(let i=0;i<=arr.length-1;i++){
//       if (i % 2 === 0) {
//         console.log(arr[i]);
//     }
   
// }

let arr = [10, 20, 30, 40, 50];
let b=0;
arr.forEach((a) => {
    b =b+a
   console.log(`    value is${b} `); 
});
