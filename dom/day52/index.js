let section = document.querySelector('section');
section.addEventListener('mousemove',(det)=>{
    document.body.style.setProperty("--x",det.clientX+'px')
    
    document.body.style.setProperty("--y",det.clientY+'px')
})