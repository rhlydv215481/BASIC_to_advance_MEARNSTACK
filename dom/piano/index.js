// [] kab use krata hai tab muja vo value chaheya  
// . tab kab muja pata hai ki ye he aana walla hai 

let box = document.querySelectorAll('.box');
let blackbox = document.querySelectorAll('.blackbox')
let span = document.querySelector('span')
// var aud = new Audio ('https://www.musicca.com/files/audio/tools/piano/28.mp3');
// console.log(aud.src);
arr = [
  {
        c : new Audio ('https://www.musicca.com/files/audio/tools/piano/28.mp3'),
        d: new Audio ('https://www.musicca.com/files/audio/tools/piano/29.mp3'),
        e: new Audio ('https://www.musicca.com/files/audio/tools/piano/30.mp3'),
        f: new Audio ('https://www.musicca.com/files/audio/tools/piano/31.mp3'),
        g : new Audio ('https://www.musicca.com/files/audio/tools/piano/32.mp3'),
        a: new Audio ('https://www.musicca.com/files/audio/tools/piano/33.mp3'),
        b : new Audio ('https://www.musicca.com/files/audio/tools/piano/34.mp3'),
        h: new Audio ('https://www.musicca.com/files/audio/tools/piano/35.mp3'),
        
        i:new Audio ('https://www.musicca.com/files/audio/tools/piano/36.mp3'),
        j:new Audio ('https://www.musicca.com/files/audio/tools/piano/37.mp3'),
        k:new Audio ('https://www.musicca.com/files/audio/tools/piano/38.mp3'),
        l:new Audio ('https://www.musicca.com/files/audio/tools/piano/39.mp3'),
        m:new Audio ('https://www.musicca.com/files/audio/tools/piano/40.mp3'),
        n:new Audio ('https://www.musicca.com/files/audio/tools/piano/41.mp3'),
        o:new Audio ('https://www.musicca.com/files/audio/tools/piano/42.mp3'),
        p:new Audio ('https://www.musicca.com/files/audio/tools/piano/43.mp3'),
        q:new Audio ('https://www.musicca.com/files/audio/tools/piano/44.mp3'),
        v:new Audio ('https://www.musicca.com/files/audio/tools/piano/45.mp3'),
        w:new Audio ('https://www.musicca.com/files/audio/tools/piano/46.mp3'),
        r:new Audio ('https://www.musicca.com/files/audio/tools/piano/47.mp3'),
        0:new Audio ('https://www.musicca.com/files/audio/tools/piano/48.mp3'),
        1:new Audio ('https://www.musicca.com/files/audio/tools/piano/42.mp3'),
        2:new Audio ('https://www.musicca.com/files/audio/tools/piano/49.mp3'),
        3:new Audio ('https://www.musicca.com/files/audio/tools/piano/50.mp3'),
        4:new Audio ('https://www.musicca.com/files/audio/tools/piano/51.mp3'),
        5:new Audio ('https://www.musicca.com/files/audio/tools/piano/52.mp3'),
        6:new Audio ('https://www.musicca.com/files/audio/tools/piano/53.mp3'),
        7:new Audio ('https://www.musicca.com/files/audio/tools/piano/54.mp3'),
        8:new Audio ('https://www.musicca.com/files/audio/tools/piano/55.mp3'),
        9:new Audio ('https://www.musicca.com/files/audio/tools/piano/56.mp3'),
        
    }
]
arr.forEach((det) => {
  
    window.addEventListener('keydown',(detail)=>{
        // key mean tu a likha tho console mai a aarahai ok 
          let key = detail.key.toLowerCase();
          //   ye audio ki likn milla rahai ttps://www.musicca.com/files/audio/tools/piano/28.mp3
        //   console.log(det.c)
        //    [key] tu c likhaga tho ke c ka audio lagara d karega tho d ka  key mean  use m=na kya likha ussa vo value ka audio
        //   console.log(det[key])
         if (!det[key]) return; // entre apace tho return null karea error nhi dega 
        // console.log(det[key]);
        det[key].currentTime = 0;// turana chalega 
        det[key].play();// play horaha 
    })
  
});
