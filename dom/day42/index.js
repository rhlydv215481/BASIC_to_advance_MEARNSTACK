console.log('js is loadng rahul');
// let box = document.querySelector('#box')
// let but = document.querySelector('button')
// but.addEventListener("click",function(){
//     console.log("you clicked")
//    var c =  Math.random()*256
//    var c2 = Math.random()*256
//      var c3 = Math.random()*256
//    box.style.backgroundColor =`rgb(${c} ${c2} ${c3})`;
// //    console.log(Math.floor(num))
// })
let arr =[

    {
        team: 'csk',
        tropy:'5',
        captain:'ms.dhoni',
        primary:"yellow",
        secoundary:"blue",
    },
    {
        team:"mi",
        // team: 'csk',
        tropy:'5',
        captain:'rohit sharama',
        primary:"blue",
        secoundary:"gold",
    },
    {
    team: 'gt',
        tropy:'1',
        captain:'shumban gill',
        primary:"navyblue",
        secoundary:" red",
    
    },
    {
            team: 'puj',
        tropy:'1',
        captain:'ajinka rhana',
        primary:"purple",
        secoundary:"gold",
    },
    {
                team: 'sh',
        tropy:'0',
        captain:'dhavin',
        primary:"orange",
        secoundary:"black",
    }
]
console.log(arr);
// let h2 =document.querySelector('h2')
 let h1 =document.querySelector('h1')
 let body = document.querySelector('body')
 let but = document.querySelector('button');
 but.addEventListener('click',function(){
     let number = Math.floor(Math.random() * arr.length)
//   h1.textContent = arr[number].team;
    h1.textContent = arr[number].team + " - " + arr[number].tropy;
  h1.style.background = arr[number].secoundary;
   body.style.background = arr[number].primary;
//    h1.textContent = arr[number].trophy;
})














// let h1 =document.querySelector('h1')
// let but = document.querySelector('button');
// but.addEventListener('click',function(){
//     // h1.textContent = (arr[0].team)
//     var num = Math.floor(Math.random()*arr.length)
//     console.log(arr[num]);
//     // h1.textContent=arr[num].team
// })
// console.log(arr[0].team)
