var tops = document.querySelector('.top');
let h1 = document.querySelectorAll('h1')
const abc = 'ABCDEFGHIJKLMNOPQURSTWVXZabcdefghijklmnopquerstwvxyz'.split('')
h1.forEach((item) =>{
    const text  = item.innerText

    
    // }, 30);
    item.addEventListener('mouseenter',(det,index)=>{
        // console.log('hello')
        let change = setInterval(() => {
        let sta = text.split('').map(()=>{
            return  abc [Math.floor(Math.random() * abc.length)]
        }).join('')
        console.log(sta)
        // tops.style.width='90%';
    
    item.innerText = sta;
}, 90);
setTimeout(() => {
    clearInterval(change)
    item.innerText = text
}, 1000);

})
})

