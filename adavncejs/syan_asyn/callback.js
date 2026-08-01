// video name day59 ok  shariyan coaing school website chort 2
// ye function hai  turant nhi chelga koi kaam compelted hoga tab chalega 
// mean ye function tuurant nhi chala ok ye tabhala tab aapa 2sec hogaya ussa ka baad chala 
//  callback function chalega tab koi kaam hjaya ok ussa call back bolata hai 
// setTimeout(() => {
// console.log("hello ")    
// }, 2000);
// dekh mai ek function banna abcd ok 
// function abcd(fn){
//  fnc(); // ab edar mai ek funtion accepted kar rahu 
// };
// // edar call kiya abcd aur mai accepted ek function kar rahu tho call pass bhi karuga 
// abcd( function() {
// console.log("hello");
// })
// // out put aayaga hello 
// // secound part 
// function abc(val){
//     // fn();
// }
// abc(function (val){

// }) //abc call horahai aur ussa mai funtion pass kar rahai 
// // function efgh()

// // callback function ko  pass kiya huva function  


// //  konsa function chalaya tho ussa opposite value pass karna hai ok
// function abcdesfgh(fn1){

//     fn1(function(fn3){
//         fn3(function (){
//             console.log("hello ye call back function");
//             // Jidar function call ho raha hai (fn1(), fn2(), fn3()), uske opposite (argument me) function pass karna hai.
//         })
//     })
// }
// abcdesfgh( 
//     function (fn2){
//         fn2(function (fn4){
//             fn4();
//         })
//     }
// )

function greeet(fn){
    console.log("hello");
    
    fn();
}
greeet(function (){
    console.log("welcome sunny");
})

// 3. Callback Chain (3 Levels)

// Ek function ke andar callback execute hoga.

// Us callback ke andar dusra callback.

// Uske andar teesra callback.

// Final output order:
function step(fn){
    console.log("step1")
    fn( function (fn3){
        console.log(`step3`);
        fn3();
    });
}
step(function (fn2){
    console.log('step 2')
    fn2(function (){
        console.log('done')
    })
})
// 4. Multiple Callbacks

// Ek function ko 2 callbacks pass karo.

// Pehla callback execute ho.

// Uske complete hone ke baad hi doosra callback execute ho.

// Output:

// Start
// First Callback
// Second Callback
// End
function phale(cb1,cb2){
console.log("start")
cb1();
cb2();
console.log("end")
}
phale(function (){
    console.log("first call back 1")
},function (){
    console.log("ye ecound call back ")
})
// 5. Conditional Callback

// Ek function checkMarks(marks, passCallback, failCallback).

// 35 ya usse upar → passCallback
// Niche → failCallback

// Function ke andar if sirf callback decide kare
function checkmark(passCallback,failCallback){
    // let marks = Number(prompt("Enter your marks:"));
    let marks= 70;
    if(marks >= 35){
        passCallback();
    }
    else{
        failCallback();
    }
}
checkmark(function (){
    console.log("you pass ")
},function (){
    console.log("you fail")
})
// 10. Mini Project (Sabse Hard)

// Ek Food Order System banao.
function ordering (fn1){
    console.log("orderpast");
//   let orderplace = prompt("ente your order"); 
//   console.log(orderplace)
    fn1(function (fn3){
        console.log(`food ready`);
        fn3(function(fn5){
            console.log("deliverly")
            fn5();
        })
    })
}
ordering(function (fn2){
    console.log('chesf star cooking');
    fn2(function(fn4){
        console.log(`deliverly boy picked`)
        fn4(function(){
            console.log("custormer gave rating")
        })
    })
})
// day60 ka question 1 ka answer 
// function Afterdelay(time,callback){
//  setTimeout(() => {
//     callback();
//  }, time);
// }
// Afterdelay(3000,function(){
//     console.log("Callback executed")
// })
function downloadfile(filename,cb){
    setTimeout(() => {
        cb({name:filename,size:"20kb"}) // call back ko call kar rahu 
    }, 2000);
}
function scanFile(file,callback){
setTimeout(() => {
callback("safe")
}, 1000);
}
downloadfile("shariyancoading",function(detail){
    console.log(detail)
    setTimeout(() => {
        scanFile(detail,function (result){
            console.log(result)
        });
    //   console.log(detail)
    }, 1000);
});
