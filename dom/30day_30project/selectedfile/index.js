let file = document.querySelector('#namefile');
let btn = document.querySelector('button');
let filename = document.querySelector('.filename')
btn.addEventListener('click',()=>{

    console.log('hello')
     file.click();// ye file par click hoojarahai click() function se

})

file.addEventListener('change',(detail)=>{
    //  kaisa chacked karna phale deatil likahan tuja sab info millaga  fir 
    console.log(detail.target.files[0].name)
 btn.textContent = detail.target.files[0].name;

})