

console.log('js is loading')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')
let grow = 0;
let show =document. createElement ('h1')
let num = 50 + Math.floor(Math.random()*50);
console.log(num)
// console.log(num);

// let a = setInterval(() => {
//     grow ++
//     console.log(grow)
// }, 1000);
// setTimeout(() => {
//     clearInterval(a);
// }, 100000);
btn.addEventListener('click',()=>{

    btn.style.pointerEvents='none'
 let a = setInterval(() => {
    grow ++
    h1.innerHTML = grow+"%";
    
    console.log(grow)
    inner.style.width = grow+"%";
    ;
},
// 100
num
//  num
);
setTimeout(() => {
    clearInterval(a);
    h2.innerHTML = "You successfully <b>downloaded</b> a song";
    // main.append(show)
    // show.style.z-index = '9'
}, 
num*100
// 10000
);
})
