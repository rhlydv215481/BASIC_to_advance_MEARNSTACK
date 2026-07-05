let section = document.querySelector('section')

arr = ['playing','sleeping','food','ydav','rgdt']


function showdata (){
    
   
    let sum = ` `

sum  += `

        <h1>Todo</h1>
                <div class="text">
                    <input focus  type="text" placeholder="enter your task">  <button id = "btn">enter</button>
                </div>
                <div class="task">  
            `;
            arr.forEach((detail) => {
                
            
         sum += `   
           <li>
                    <p > ${detail}</p>
                    <div class="icon">
                       <i class="ri-checkbox-fill"></i>
                    <i class="ri-delete-bin-fill"></i>  
                    </div>  
                </li>    
            
            `
            });
            
              section.innerHTML = sum;

           
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// button.addEventListener('click',()=>{
//     console.log('you click')
//     user=input.value;
//     console.log(user)
//    arr.push(user)
   
//    showdata();
// })
}
showdata();
 section.addEventListener("click",(deta)=>{
    console.log('you cicke')
    let user;
    let input = document.querySelector('input');
    if(deta.target.closest('#btn')){
        user=input.value;
        console.log(user)
        arr.push(user)
        
        showdata();

    }
    if(deta.target.closest('.ri-checkbox-fill')){
        let p  = deta.target.closest('li').querySelector('p')
        
      p.style.textDecoration = 'line-through';
        //  p.style.textDecoration = 'line-through';
    }
    if(deta.target.closest('.ri-delete-bin-fill')){
        let store = deta.target.closest('li').remove();
        
    }
})

// section.addEventListener("click", (deta) => {

//     if (deta.target.closest('#btn')) {

//         let input = document.querySelector('input'); 
//         let user = input.value.trim();
//         // console.log(user);
//         if (user !== "") {
//             arr.push(user);
//             showdata();
//         }

//         input.value = ""; // 🔥 IMPORTANT FIX
//     }
    
// });