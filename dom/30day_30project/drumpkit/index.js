console.log("hello");
let dru = document.querySelector('.dumpname')
let dump = [
    {
   d: new Audio("./song/deump.wav"),
     b: new Audio('./song/boom.wav'),   
     c:new Audio("./song/clap.wav"),
     h:new Audio('./song/hihat.wav'),
     k:new Audio("./song/kick.wav"),
     r:new Audio("./song/ride.wav"),
     t:new Audio("./song/tink.wav"),
     o:new Audio("./song/openhat.wav"),
    }
]
// let dumps = document.querySelector('#border');

dump.forEach((dets,index) => {

window.addEventListener('keydown',(det)=>{
    // console.log(det.key);
       let key = det.key.toLowerCase(); // key board mai kons key press kar sahai ho vo store horahai  
    // console.log(dets)
    if(dets[key] ) {   //Check karo ki dets object ke andar key naam ki value exist karti hai ya nahi.
        
        dets[key].currentTime = 0;// turana chalega 
        dets[key].play(); // ye play horahai 
            }
            else{

                console.log("plz clicked blew mention")
            }    


    })


    // console.log(dets.d)
dru.addEventListener('click',(details)=>{
//   console.log(details.target.className[0]); // clas name 
 let store =details.target.className[0].toLowerCase();
 console.log(store)
dets[store].play()
    // console.log("youclicked")
})

});