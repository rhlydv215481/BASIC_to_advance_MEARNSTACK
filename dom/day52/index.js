let tops = document.querySelector('.top');
let h1 = document.querySelectorAll('h1')
let h2 = document.querySelector('h2')
let section = document.querySelector('section')

section.addEventListener('mousemove',(det)=>{
    document.body.style.setProperty("--x",det.clientX+'px')
    
    document.body.style.setProperty("--y",det.clientY+'px')
})
console.log('hello')
let abc = 'ABCDEFGHIJKLMNOPQURSTYXZabcdefghijklmonpquerstyx';
h1.forEach((det) => {
     let text = det.innerText
det.addEventListener('mouseenter',()=>{
    // console.log(text.split(''));
    // console.log('hello')
    let repeated = setInterval(() => {
        
        
        let str = text.split('').map(()=>{
            return  abc[Math.floor(Math.random() * abc.length)]
        }).join('')
        det.innerText = str;
    }, 90);
    setTimeout(() => {
        clearInterval(repeated)
        det.style.color = 'rgb(74, 207, 103)'
        // det.style.opacity='0.4'
       det.innerText= text
    }, 2000);
    // det.style.opacity='0'
    //   console.log(str)
    });
})
