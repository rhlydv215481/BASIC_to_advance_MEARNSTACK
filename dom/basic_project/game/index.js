let count = 0 ;
let box = document.querySelector('.box');
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let box1 = document.querySelector('.box1');
console.log(box) 
let button = document.querySelector('button');
// console.log(button);
// 2077
let start;
let stop=0;
box.addEventListener("click", (det) => {
    count++;
    det.stopPropagation();   // event ko box1 tak jane se roka mean parent tak event nhi jayaga 
    //     Is concept ka naam kya hai?
    // Event Bubbling
    // Simple language me:
    // child pe click karo → event parent tak upar chala jata hai
    console.log(`you clicked change colour and position  box ${count}`);
});
box1.addEventListener('click',()=>{ 
    console.log('clicked  out side of box ')
    
    stop= stop+1
    console.log(`game over ${stop}`)
    
})
let  buttonclicked = 0 ;
function restart() {
    // det.stopPropagation(); 
    start = setInterval(() => {
        let r = Math.floor(Math.random()*256)
        let g= Math.floor(Math.random()*256)
        let b= Math.floor(Math.random()*256)
        let x = Math.floor(Math.random()*80)
        let y = Math.floor(Math.random()*80)
        // console.log('you cli')
        // console.log(`rgb(${r},${g},${b})`)
        box.style.backgroundColor = `rgb(${r},${g},${b})` ;
        box.style.left=`${x}%`
        box.style.top = `${y}%`
        if(stop === 1){
            h1.style.opacity = '1';
            console.log("interval stop check")
            clearInterval(start);
              h2.style.opacity = '1';
              h2.innerText = 'resart'
        }
    }, 1000);
}

button.addEventListener('click',(det)=>{
    det.stopPropagation(); 
      buttonclicked++
      if( buttonclicked === 2){
        clearInterval(start);
        h2.innerText = " plz click start button to play game" 
        h2.style.opacity = '1';

          buttonclicked=0;
        } 
      else{
     clearInterval(start)
     count = 0;
     h2.style.opacity = '0';
         restart();
         console.log(buttonclicked)
         console.log('you cicked the button')
    }
}
)
h2.addEventListener("click",()=>{
    h1.style.opacity = '0';
    h2.style.opacity = '0';
     restart();
})

// Pattern 1: Random integer ka formula
// Har baar ye hi formula hota hai:
// Math.floor(Math.random() * (max + 1))
// Agar 0 se 255 chahiye:
// Math.floor(Math.random() * 256)