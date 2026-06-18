let i = document.querySelector('i');
// console.log(i)
let img = document.querySelector('.card');
img.addEventListener("dblclick",()=>{
    console.log('you dbl')
    
    i.style.opacity = '0.7';
    i.style.transform = "translate(-50%, -50%) scale(3) rotate(0deg)";
     setTimeout(() => {
         i.style.transform = "translate(-50%, -400%) " ;
     }, 2500);
    setTimeout(() => {
    i.style.opacity = '0';
        i.style.transform = "translate(-50%, -50%)  rotate(-60deg)";
}, 4200);
})
