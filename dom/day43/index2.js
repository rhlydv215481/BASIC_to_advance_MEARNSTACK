

var main = document.querySelector(".main");
var btn = document.querySelector("button");
var div = document.createElement("div");
btn.addEventListener('click',()=>{
 
    // var div = document.createElement("div");
    var x = Math.random()*100;
    var y = Math.random()*100;
    var r = Math.random()*360;
    var c1 = Math.random()*256;
    var c2 = Math.random()*256;
    var c3 = Math.random()*256;
    
    div.style.height="7rem"
     div.style.width="7rem"
     div.style.position = "absolute"
     div.style.left =x+"%";
     div.style.top = y +"%";
     div.style.rotate = r +"deg";
     div.style.backgroundColor=`rgb(${c1} ${c2} ${c3})`;
    main.appendChild(div)
    console.log(div)
}
)