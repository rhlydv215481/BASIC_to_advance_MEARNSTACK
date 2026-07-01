
 var home = document.querySelector("#home");
home.style.color = "red";
let arr = [
    {
        name:"party",
        img : "https://images.unsplash.com/photo-1770135005669-0094609c733e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"beach",
        img:"https://plus.unsplash.com/premium_photo-1780484996685-25145f17d071?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"young mother",
        img:"https://images.unsplash.com/photo-1777838186814-eb17423386ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"pakistani",
        img:"https://images.unsplash.com/photo-1506901437675-cde80ff9c746?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "korean",
        img: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
let showimg = document.querySelector(".container")
var card = " "
arr.forEach((detail) => {
card= card +   `<div class="box">
        <img class="cursor-pointer" src="${detail.img}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;   
    showimg.innerHTML = card;

});
console.log("hello")
function handlesearchbar(detail) {
    var search = ' ';
    arr.forEach((detail) => {
        console.log(detail.name)
    });
    // console.log(`${}`)

    
}
handlesearchbar();