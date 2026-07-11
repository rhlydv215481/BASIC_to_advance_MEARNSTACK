// let prompt = require('prompt-sync')()
// let age = prompt('pl enter your age ')
// console.log(age);
// array -> ek se jayada member lakha ussa array bolata hai ya group of elemet jho different aur same datatype 
//  like [1,2,3,4,5,] ye numbet data type or [rahul,1,true]
let arr = [1,2,3,4,5] 
console.log(arr[4]);
console.log(arr[0]);
// how we create array in js or whatare arry 
console.log(`array is a group of collecting that is same or different data typw is called array `);
console.log(' array 2 type se created hota hai ye normal ek constured array ')
let arr1 = [ 'we are ','created ', 'Array','here'];
console.log(arr1[1]);
let arr2type = new Array(3,8);
console.log(arr2type)
// Array banane ke liye new Array() zaruri nahi hai, lekin agar constructor method use karna hai toh new Array() likhna padega.
// ///////// understan how to acces elemet in array 
console.log('for example created array and get 3 elemted value ')
let a=new Array(6);
// a[0] = 4;
// a[1] = 6;
// a[2] = 8;
// a[3] = 9;
// a[4] = 0;

let values = [4,6,8,9,0];
for(let i=0;i<=values.length;i++){
    a[i] = values[i];
}
console.log(a)
// function of array 
//  array => functio pop.push,shift,unshiftindexof,some ,map array destruction,filter,reduce,spread operater,slice,join,reverse ,sort,tostring
let array =[`rahul `,7,8,`yadav` , `last ye `]
console.log(array);
console.log(array.push(6));
console.log(array);
console.log(array.pop());
console.log(array);
array.shift();
console.log(array);
 array.unshift('yadaaa');
 console.log(array);
console.log(array.indexOf(`yadav`));
// indexOf('yadav') ka matlab:
// “yadav line me number kaunsa hai?”
/////////////////////////////////////////////////////////////////
// Array Destructuring = simple words me
// Array ke andar ki values ko seedha variable me daal dena
let array1 = [10,20,30];
let [e,b,c] = array1;
console.log(array1);
// filter 
// array.filter() JavaScript me array se sirf wahi values nikalta hai jo condition true karein.
// Simple language me

// filter() naya array banata hai

// Purana array change nahi hota

// Har element par condition check hoti hai
var ar=[1,2,3,4,5,6];
let even = ar.filter(function (n){
    return n%2 === 0 
})
console.log(even)
// filter() array ke har element ko ek-ek karke function me bhejta hai, isliye n single number hota hai
// n % 2 === 0 true hua toh value new array me aati hai, isliye result [2,4,6]
// 20 se jayada number ko print ker
var ar = [10, 25, 30, 45, 60];
var bade= ar.filter(function(n){
    return n > 20
})
console.log(bade)
// 👉 3 se zyada letters wale names filter karo
// let names = ["ram", "rahul", "om", "sunny", "ajay"];
// var lett = names.filter(function (n){
//     return lett.length(0) >lett.length(4)
// })
// console.log(lett);
//  tara friends ka array banna ussa se kissa log ka naam a se start ho vo loga ko new array banna ok 
var arra = ['anish','javed','fatima','tousif','shail','om',]
var fried = arra.filter(function (n){
      return n[0] === 'a';
})
console.log(fried);
// console.log(arra[0][0])
// console.log(arra.indexOf['anish']);
// console.log(arra.length)
// ///////////////////////////////////////////
// youtube wallla array 
// created,acces,modify
var arrr = [1,2,3,4,5,6,7];
console.log(arr[0]);
console.log(arrr.indexOf(3));
console.log('modify'); arrr[3]=18;
console.log(arrr);
// splie 
// foreach aara ek val par jhayaga one by one  
var arrr = [6,7,8,9,11,234];
console.log( arrr.forEach(function (val){
    if(val > 100) console.log(val ) ;
}))
// console.log(ar)
// map  /foreacch/reduce,filter ye sab value accept function kar ta hai 
// map tab he use karna hai jab aapako  naya array bannna hai aurpichale array ka data ka basic par 
// array dekhata he maan mai blank array bann leya karo 
// jab bhi aapko koi ase mai dikha jaaye jaha par ek array se naya array banega and wo  naya array kuch values korakhega tab map lagega 
var arrr = [  'rahul',8,87,'yadav',98];
var faltu=arrr.map(function (val) {
     if (typeof val === 'string'){
     return 'hello '
        
}
return val
})
console.log(faltu)
// map()
// above exmple issa mai string aaya tho ussa hello maichange kar deya 
// Sab elements ke paas jaata hai
// Naya array banata hai aur value change  karta hai

// ✅ filter()

// Sab elements ke paas jaata hai
// Naya array banata hai aur sirf selected values rakhta hai
var arrr = [  'rahul',8,87,'yadav',98];
console.log('filter use huvahai aur bus strting return horhai ')
var faltu=arrr.filter(function (val) {
     if (typeof val === 'string'){
     return val
        
}
})
console.log(faltu)
console.log(' ye destructing hai  ') 
var arrr = [1,2,3,4,5,6,]
// muja 1 aur 6 chaheya  a ,b 
var [i, , , , ,f] = arrr;
console.log(i,f)
//  question 
// created a arrya of 3 fruit and print 2 fruit 
var fruit = ['mango','graph','amarutha'];
console.log (fruit[1]);
// add mango at enfd and [pineapple at begging ]
console.log(fruit.unshift('pineapple'))
console.log(fruit.push('mango'));
console.log(fruit.push('banana'))
// replace banna wirth kiwi in above
console.log(fruit[5] = 'kiwi');
console.log(fruit)
// inster red and blue at inserted array 
var colour = ['yello','pink','brown','black','red'];
// colour.splice(1,0,'red','blue');
colour.splice(1,3)
console.log(colour)
var colour = ['yello','pink','brown','black','red'];
var ne = colour.slice(1,3)
console.log(ne)
//  for loop 
var arrr = [1,2,3,4];
for(i=0;i<=3;i++){
    console.log(arrr[i]);
}
// slice()

// Original array ko change nahi karta

// Sirf copy nikal ke deta hai

// End index include nahi hota
// 🔪 splice()

// Original array ko change karta hai

// Remove / add dono kar sakta hai

// Format: splice(start, deleteCount, items...)

// let arr = ['a','b','c','d','e'];

// let removed = arr.splice(1, 2);

// console.log(removed); // ['b','c']
// console.log(arr);     // ['a','d','e']
// 8. Use a `for` loop to print all elements of an array.
var person = ['rahul','yadav','javed','prince','fatima'];
// console.log(person)
for(let  i=0;i<=person.length-1;i++){
 console.log(person[i])
}