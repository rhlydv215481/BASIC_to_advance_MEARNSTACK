let array = [ ];
let form = document.querySelector('form');
let card = document.querySelector('.allcard');
form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    console.log(dets)
// console.log('hello');
let obj = {
    username: document.querySelector('#username').value,
    age: document.querySelector("#age").value,
    gmail: document.querySelector("#Gmail").value,
    imglink: document.querySelector("#imglink").value,
}
array.push(obj)
let sum = '';
array.forEach((detail) => {
sum += `

        <div class="card">     
 <img src="${detail.imglink}" alt="">
            <div class="information">
               
                <h1> Name: ${detail.username}</h1>
                <h1>  Age : ${detail.age}</h1>
                <h1>gmail : ${detail.gmail}</h1>
                
            
            </div>
            
        </div>
            `
            card.innerHTML = sum;
});
form.reset()
// console.log(array)
})
