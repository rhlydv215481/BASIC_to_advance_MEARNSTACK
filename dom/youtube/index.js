

// var h1 = document.querySelector('h1');
// h1.innerHTML="hello hell";
// h1.style.fontSize="5.3rem";
// var a = document.querySelector('a');
// a.setAttribute('href','https://www.google.com/');
// // console.log(a.getAttribute('herf'));
// console.log(a.getAttribute('href'));
// var hello = document.createElement('h1')
// hello = 'hii kaisa ho yrr';
// document.querySelector('div').appendChild(hello)
// document.querySelector('h1');
// h1.style.background = 'black';
//  var h2 = document.querySelector('h2');
//  var buttn = document.querySelector('button');
// buttn.addEventListener('click',function(){
//     h2.innerHTML='rahul';
// })
// console.log('js is loading')



// var h1 = document.querySelector('h1');

// var buttn = document.querySelector('button');
//  buttn.addEventListener('click',function(){
//     h1.style.color = 'red';
//  });

// var h1 = document.querySelector('h1');
// var button = document.querySelector('button');
// let dec = document.querySelector('#dec')
// let a=0;
// button.addEventListener('click',function(){
//     a=a+1
//  h1.textContent = a;
// })
// dec.addEventListener('click',function(){
//     a=a-1;
//     h1.textContent = a;
// // })
// let text = document.querySelector("H1");
// let but = document.querySelector('button');
// let a = 0;
// but.addEventListener('click',function(){
//     a=a+1;
//     if(a == 1){
//         text.textContent = 'bye';
//         console.log(a)
       
//     }
//     else{
//         text.textContent = ' hello'
//         a=0;
//     }
// })
// h1.innerHTML = 'rahul';
// document.body.append(h1)
// 
// let div = document.querySelector('div');
// let h1 = document.createElement('h1');
// h1.textContent = ' slloni';
// // h1.style.color='white';
// div.append(h1)
// console.log("loading js")
// var p = document.createElement('p');
// let div = document.querySelector('div');
// p.textContent='I am learning DOM';
// div.append(p)
// let h1 = document.createElement('h1');
// let sexcound = document.createElement('h1');
// let third = document.createElement('h1')
// h1.textContent="rahul";
// sexcound.textContent="yadav";
// third.textContent="hello";
// div.append(h1,sexcound,third)
// let div = document.querySelector('div');

// let text = document.createElement ('h1');
// text.textContent = "yadav";

// div.prepend(text)
// let div = document.querySelector('div');

// let text = document.createElement('h1');
// text.textContent = "yadav";

// div.prepend(text);

// let inp = document.querySelector('input');
// inp.addEventListener('input',function(detail){
//     // console.log(detail.data);
// console.log(detail.target.value);
// })
// console.log('is loading')
// let select = document.querySelector('select');
// let h3 = document.querySelector('h3')

// select.addEventListener('change',function(detail){
//     // console.log(detail.target.value)
//     h3.textContent =`${detail.target.value} your devices selected `
// });
let h1 = document.querySelector('h1');
window.addEventListener('keydown',function(detail){
    // console.log(detail.key);
    // detail.key.trim
    if( detail.key === " "){
    h1.textContent = 'spc'     
    }else{ 

        h1.textContent = detail.key
    }
})

