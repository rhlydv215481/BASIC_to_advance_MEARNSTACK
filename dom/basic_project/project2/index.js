let imgs = document.querySelectorAll('img');
let elems = document.querySelectorAll('.elemt');

elems.forEach(function(el, index) {

    el.addEventListener("mousemove", function(e) {
        let img = imgs[index];   // har box ka apna image

        img.style.opacity = "1";
       
        img.style.left = e.clientX + "px";
        img.style.top = e.clientY + "px";
    });

    el.addEventListener("mouseleave", function() {
        let img = imgs[index];
        img.style.opacity = "0";
    });

});