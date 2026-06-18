let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
console.log('js is oaded')
let button =  document.querySelector("button");
let like = document.querySelector('i');
let a = 0;
button.addEventListener("click",function(detail){
    console.log('you clicked')
    if ( a === 1){

    
    h3.innerHTML = "fruiends";
    h3.style.color = ' green';
    a=0;
    }
    else{
        h3.textContent = ' strange'
         h3.style.color = ' red';
         a=1;
    }
})
like.addEventListener("dblclick",function(){
    console.log("you bclicked")
    
    like.style.opacity = "0.7";
     setTimeout(function () {
        like.style.transition = "none"; // fade out band
        like.style.opacity = "0";       // turant gayab
    }, 1000);
})
    