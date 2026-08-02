// promise hota hai vo phle pending hoa hai fir resloves ya rejected hota hai ussa fufflied bolata hai 
// promise mean vo data lata hai tab tak pending hota hai aagay tho vo reslove succesfull hogaya hoga yareject matlab error
let prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("rahul");
    }, 6000);
});

prm.then(function (result) {
    console.log(result);
});
// console.log(prm);
//  agara reslove hoga tho .then () use hoga 
// agara reject hoga tho .cath() aur callback function karega

//  api cal karta hai ok 

fetch('https://randomuser.me/api/')
// console.log(fetch)
//  ek line mai bhi likh sakta hai  .then( (raw)=> raw.json)
.then((raw)=>{
 return raw.json();
})
.then((readabledata)=>{
    console.log(readabledata.results[0].email);
    console.log(readabledata.results[0].name.first)
})
.catch(()=>{
console.log("error")
})
// fectch se kisi bhi url par jha sakta haifech ka data reabale nhi hota hai ussa json banna ka readerable karta hai issa ka baad jho data millata hai vo readable hota hai 
// dekh simple ais ayaad kar le 
// fetch 2 din mai aata hai data phale din raw aata hai fir dusrae fit readable hota hai 
// logic  dekh apna return kyu karta hai issa leya karta hai dekh fectch se data aara hai ok apna ko nhi pata kab aaga ok apna apna .then (raw)  chala ok { raw data aagaya ussa raw.json banna gatya tab return kar  kyu ki apna ko pata nhi hai ki kab aaya ga th issa leya reyuen karta hai kyu ki raw,json hoajaga ussa kabaad chalan apna ko pata nhi hai kab aaya issa leya pana return likhata haia ok 

// }

//  slove question