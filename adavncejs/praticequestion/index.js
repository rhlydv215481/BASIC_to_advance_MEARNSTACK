// let url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=b92e5793Beaebcbded1fcf3a2f5b4bc3"
const city = "Daman";
// console.log(api)


function getwatherinfo (city){
  let apikey =``;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
  .then((raw) => {
    console.log(raw)
   return raw.json(raw)
  }).then((readable) => {
    console.log(readable );
  });
}
getwatherinfo('daman');
// async function getwather(city) {
//   
//   let raw =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//   let real = await raw.json();
//   console.log(real)
//   }
//   getwather('daman')
4+9+8+39+160+6+17+11