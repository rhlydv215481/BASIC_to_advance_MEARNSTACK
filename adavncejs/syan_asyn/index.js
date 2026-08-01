console.log("hello")
// call back mean
// Jab ek function ko kisi dusre function ke argument (parameter) ke roop me pass kiya jata hai aur baad me us function ko call kiya jata hai, usse callback function kehte hain.
function hello (){
    console.log("hello")
}
function by(val){
    val();// refrence ko call kiya 
}
by(hello); // by(hello()) abhi executed hjayaga  by(hello); // function pass hua, execute nahi hua
// hello() ➜ Function ko abhi call karo.
// hello ➜ Function ko pass karo (callback ban sakta hai).
// 



// promise kya hai 
// aap promise bannata ho jho ki 2 sattea mai se 1 stae ai jha sakta hai vo ya tho reslove hoga ya tho reacjected hoga ab wo kya hoga ye tho waqt bataya par hame donno ka leya likhan padata hai 

// Promise ek object hai jo future me kisi asynchronous operation ka result represent karta hai.
// new Promise() → Promise create karta hai.
// resolve() → Success.
// reject() → Failure.
// .then() → Success ka result.
// .catch() → Error.
// .finally() → Hamesha chalega.

// asyanchorase and syancharoasch apporach 
//  js line by line chala hai ok run 
//  synchorach 1line chala 2 chala 3 mai time lagaega tho rukha hai abhi tak nhi chala fir 3 chaega ru huva tho 4 bhi run huva ok
// asynchoras issa mai 1 chal 2 chal 3 mai time lagega tho vo rukha line 4 chala gaya 3 ko by pass kar ka tab 3 run ka leya ready hoga tab chalega 
// time lega ko ussa bg chaleyaga bakki konsa chelag hoga vo chelga 