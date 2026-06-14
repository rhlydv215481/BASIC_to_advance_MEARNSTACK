var main = document.querySelector(".main");
var btn = document.querySelector("button");
// var left = 
var arr = [ "If you are born poor, it's not your fault. But if you die poor, it's your fault.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "The pain of discipline is far less than the pain of regret.",
  "Don't watch the clock; do what it does—keep going.",
  "Your future is created by what you do today, not tomorrow.",
  "Winners focus on winning, losers focus on winners.",
  "Small daily improvements lead to massive long-term results.",
  "The harder you work in silence, the louder your success will speak.",
  "Dreams don't work unless you do.",
  "Comfort is the enemy of growth."]
    // console.log(arr[1])
btn.addEventListener('click',()=>{
    var x = Math.random()*80;//ye dekh
    var y = Math.random()*80;
    var sc = Math.random()*3;
    var r = Math.random()*360;
    var c1 = Math.random()*256;
    var c2 = Math.random()*256;
    var c3 = Math.random()*256;
    // console.log(x)
//    h1.style.left = x +"%";
  var num =  Math.floor(Math.random()*arr.length)
  console.log(arr[num])
    var h1= document.createElement('h1');
    h1.style.position = 'absolute';
    console.log()
    h1.innerHTML=arr[num]// yer
    h1.style.color='white'
    main.append(h1)
     h1.style.left =x+"%";
     h1.style.top = y + "%";
    h1.style.scale = sc ;
    h1.style.rotate = r + "deg";
    h1.style.color = `rgb(${c1},${c2},${c3})`












    // var div = document.createElement("div");
    // var x = Math.random()*100;
    // var y = Math.random()*100;
    // var r = Math.random()*360;
    // var c1 = Math.random()*256;
    // var c2 = Math.random()*256;
    // var c3 = Math.random()*256;
    
    // div.style.height="7rem"
    //  div.style.width="7rem"
    //  div.style.position = "absolute"
    //  div.style.left =x+"%";
    //  div.style.top = y +"%";
    //  div.style.rotate = r +"deg";
    //  div.style.backgroundColor=`rgb(${c1} ${c2} ${c3})`;
    // main.appendChild(div)
    // console.log(div)

})