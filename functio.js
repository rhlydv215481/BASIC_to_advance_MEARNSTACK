console.log("hello");
// bakki ka sab ura gaya tho mai  classic function se startkar rta hu pk  ye loop sab gayab hogaya hai tabhi 
function abd(){
    console.log('ye classic function hai ')
}
abd();
// nested function
function abcd(){
    function ghid(){

        console.log('ye nested function hai ')
    }
     ghid()
}
// mai ye function ko he bhularahau ok 
abcd()
// more type of function 
// declaration/default function

function simple(){
    console.log('hiii default');
} 
simple();
// expresiion/variable function
let varable =function  (){
console.log(`ye variable funcyion`)
}
// arrow function
let arrow = ()=>{
    console.log(" ye arrow function")
}
// ye parameter and argument
let para = function (naam){     // ye parameter 
console.log(naam)
}
para('ye arument ');
// return kidar se involked kiya udar se wapish bheja de 
function re_turn (v1,v2){
    return v1+v2;
}
console.log(re_turn(6,8));
console.log('//////////////////////////////////////////');
function sub (a,b){
 console.log( a+b )
}
console.log (sub(6,9)); 

function add (a,b){
 return a+b
}
add(9,9);
// LeetCode me return use karte hain
// kyunki function jahan CALL hua hota hai,
// wahi value wapas bhejta hai
// aur LeetCode us value ko ANSWER maan ke check karta hai
//  type of function 
////////////////////////////////
// anonymous function- jisska koi naam na ho ussa ye bol ta hai vo function parent function leta hai ok  
// function(){
// }
// higher order function 
// -jho function return kare ya function ko accept kare prameter mai ussa higher order function bolata hai 
function higherorder(){
return function (){
    console.log('ye higher order function hai ')
}

// console.log(`hello`)
}
higherorder() ();
//  parameter mai function leya 
function higherord(hello){
    hello(6,8);
}
higherord(function(a,b){
    console.log('ye parameter mai function calll kar rahu ok '); // ye call back function bhi hai  function variable ki tara use hosakta hai 

    return a+b;
})
// first class fuction ek concept hai  ye bola ta hai ki function  ussa langaguage mai
// hai ye fclassfunction  tho function ko variable jaisa treated kae sakta hai mean var a= 12 ;a=function() 
var annosam =function(){
    console.log('annomias function')
}
console.log(annosam);
// Pure function woh hota hai jo same input pe hamesha same output de, aur bahar ki duniya ko touch na kare.
// examp  dekh mai a ko 12 deya auranswer 14 aaaya fir duara baar bhi du magar value same aaya like kitana baar bhi same value deyya tho answer bhi samhe aaya issa pure function bolata hai aur kissi bhaara ka value ko vhange na kare ussa purea function bolata hai  
// example 
// impure function dusara value par output value depend rahai like x 10 aur input 5 hai hai firx= 20 kar input 5 hai tho output same  raha   tho value nhi change hojaya
var x=18;
function pure(a){
    return (12+a)
}
console.log(pure(5))
// ok smjh gaya like same out put se same imput aaya aur koi dusare variable se kuch lenn denna nhi hai 
// impure function dusara value par output value depend rahai like x 10 aur input 5 hai hai firx= 20 kar input 5 hai tho output same nhi raha   tho value change hojaya  
// same input  not eq to same out ok 
var x = 17;
function impure (val){
    let a = x+val
    return Math.random()+a
}
console.log(impure(6));
// issa mai input same hai x ok aur out puta same nhi hi aur ye x ka change huva tho bhi same nhi aaya mean input same ouput nhot same aur outside var ka change huva tho out put bhi change hoga 
// ye closere  => ek function jho return function but return function ka koi varibale  use karega 
// example
function abcd(){
    let a=10 ;
    return function cde(b){
        return 10 +b
    }
    
}
abcd();
// cde(7);
//  basic question 
// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayhello(){
    console.log(`hello javascript`);
}
// 2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a,b){
    return a+b
}
console.log(7,7);
// Use rest parameters to make a function that adds unlimited numbers.
// function rest(...1,2,3){
//     return a+b;
// }
// Create an IIFE that prints `"I run instantly!"`
(function () {
  console.log("I run instantly!");
})();
// Make a nested function where the inner one prints a variable from the outer one.
// let nes = 'outer wariable'
function outer( ){
   let  vai = "rahul"
   function inner( ){
    console.log(vai);
   }
   console.log(inner())
}
console.log(outer())