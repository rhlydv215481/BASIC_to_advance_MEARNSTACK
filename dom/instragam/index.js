arr = [
    {
        dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1524504542391-127872011665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTN8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://unsplash.com/photos/a-woman-taking-a-picture-with-a-camera-aNuJbBM0omM"
    
    },
    {
        dp:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://unsplash.com/photos/woman-sanding-wood-with-power-tool-in-workshop-7kfbZixwOZ8",
        story:"https://images.unsplash.com/photo-1754747100293-142e06a69adf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1666664090915-cc2196fcf2fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        dp: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
    },
]
var cullter = " "
let full = document.querySelector(".full");
var story = document.querySelector("#storyies")
arr.forEach( (ele,idx) => {
    cullter +=  ` <div class="story">
               <img  id="${idx}" src=" ${ele.dp}" alt="">
            </div>`
});
document.querySelector('#storyies').innerHTML = cullter;
story.addEventListener('click',(detail)=>{
    // console.log(arr[detail.target.id].story)
    full.style.display = 'block'
   full.style.backgroundImage = `url(${arr[detail.target.id].story})`
    setTimeout(() => {
        arr.forEach( (ele,idx) => {
    cullter +=  ` <div class="story">
               <img  id="${idx}" src=" ${ele.dp}" alt="">
            </div>`
});

    }, 2000);
}
);
