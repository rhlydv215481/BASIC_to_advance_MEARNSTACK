let H1 = document.querySelector('h1');
let H2 = document.querySelector('h2');
console.dir(H1);
console.dir(H2);
H1.innerHTML = "manupulating ";
// ye bus content ko change karega
H2.outerHTML = "<h3> hello yadavs</h3>"
// ye  selector ko remove kar deta hai issa leya elmet ko remove kar deya
let but = document.querySelector('button');
but.addEventListener('click',function(){
    console.log('tunna click kiya hai ');
    but.innerText=" you press the button";
    but.style.backgroundColor="yellow";
    but.style.padding="8px";
    H1.innerHTML=" i am Rahul";
    H1.style.color="red";
    H1.style.fontSize='60px';
})

var h4 = document.querySelector('h4');
var inc = document.querySelector('#inc');
a=0;

 inc.addEventListener('click',function(){
    a++;
    h4.innerHTML = a;
});
var dec = document.querySelector("#dec");
 dec.addEventListener('click',function(){
    // console.log('you click')ṭ
    a--;
    h4.innerText = a;
});
var h3 =document.querySelector('#pra');
h3.addEventListener('click',function(){
    h3.innerText='you just clicked the h1';
    h3.style.color ='red';
});
