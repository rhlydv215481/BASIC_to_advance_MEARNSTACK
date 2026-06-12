// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// console.log('js is oaded')
// let button =  document.querySelector("button");
// let like = document.querySelector('i');
// let a = 0;
// button.addEventListener("click",function(detail){
//     console.log('you clicked')
//     if ( a === 1){

    
//     h3.innerHTML = "fruiends";
//     h3.style.color = ' green';
//     a=0;
//     }
//     else{
//         h3.textContent = ' strange'
//          h3.style.color = ' red';
//          a=1;
//     }
// })
// like.addEventListener("dblclick",function(){
//     console.log("you bclicked")
    
//     like.style.opacity = "0.7";
//      setTimeout(function () {
//         like.style.transition = "none"; // fade out band
//         like.style.opacity = "0";       // turant gayab
//     }, 1000);
// })
// secound  project
// let img = document.querySelector('img')
// let ent = document.querySelectorAll('.elemt'); 

// ent.addEventListener("mousemove",function(detail){
//     img.style.opacity = '1';
//     // console.log(detail)
//     img.style.left = detail.x+'px'
// img.style.top = detail.y+'px'
// })
// ent.addEventListener("mouseleave",function(){
//     img.style.opacity = '0';
// })
//  secoun project parth 2
let imgs = document.querySelectorAll('img');
let elems = document.querySelectorAll('.elemt');

elems.forEach(function(el, index) {

    el.addEventListener("mousemove", function(e) {
        let img = imgs[index];   // har box ka apna image

        img.style.opacity = "1";
       
        img.style.left = e.clientX + "px";
        img.style.top = e.clientY + "px";
    });

    el.addEventListener("mouseleave", function() {
        let img = imgs[index];
        img.style.opacity = "0";
    });

});