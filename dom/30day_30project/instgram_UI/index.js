Array=[
    {
        dp : "https://images.unsplash.com/photo-1694698414374-69870f14c533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1784296868264-23398694802c?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
    },
    {
        dp:"https://images.unsplash.com/photo-1782177259851-9ba8f16e86d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1784284553152-42d2e3974c8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1784294424586-caec9c562d91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1784294424586-caec9c562d91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1783869514787-576c95a19573?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let bot = document.querySelector('.bottom ');
let storyoverlay = document.querySelector('.story-overlay');
let sum = ' ';
Array.forEach((detail,index) => {
    sum += `  
    
    <img  id="${index}" src=" ${detail.dp}  " alt="">
   
    `  
    console.log(detail.target)
    bot.innerHTML = sum;
});
let img = document.querySelectorAll(".bottom img");  
let culter = ' ';
img.forEach((element) => {
   
element.addEventListener('click',(detail)=>{
    storyoverlay.style.display = "block";
    culter = `
      <img src=" ${Array[detail.target.id].story}" alt="">
    `
    console.log(detail.target)
    // console.log(Array[detail.target.id].story)
    storyoverlay.innerHTML=culter;
}) 
});
storyoverlay.addEventListener("click", () => {
    storyoverlay.style.display = "none";
});
