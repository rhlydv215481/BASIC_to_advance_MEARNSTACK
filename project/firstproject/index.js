// document.body.addEventListener("dblclick", function () {
//     alert("addEventListener");
// });
document.body.addEventListener("dblclick", () => {
    console.log("DOUBLE CLICK");
});
function opencard (){
let elem = document.querySelectorAll(".elem");
let fullelemt = document.querySelectorAll(".fullelemt");
let button = document.querySelectorAll(".button")
elem.forEach((detail,index) => {
    // console.log(detail,index)
    // console.log(detail,index);
   detail.addEventListener("click",()=>{
    //    console.log(detail)
    console.log(fullelemt[index])
     fullelemt[index].style.display="block"
    
    //    console.log(fullelemt[detail.id]);
    //  fullelemt.addEventListener
    });
    })
        // button.addEventListener("click",(event)=>{
        //     console.log("hey")
        //     console.log(event)
        //     console.log(index)
        // })
 button.forEach((detail,index)=>{
    // console.log(detail)
    detail.addEventListener("click",()=>{
            fullelemt[index].style.display="none"
            // console.log(button[index])
                  })
})
}
opencard ();
let currenttodo = JSON.parse(localStorage.getItem("currenttodo")) || []; // ye use hota hai data o local se nikalna ka leya use horahai ok
//  local storage mai sve karrahu ok 
function todosavelocalsorage() {

let todoform = document.querySelector("form");
let input = document.querySelectorAll("input")
todoform.addEventListener("submit",(event)=>{
    event.preventDefault();       
       input.forEach((item) => {
    if (item.value.trim() === "") {
        console.log("Please enter value");
    }
    
});  
//  ye data obj mai jharahai 
currenttodo.push( {
        task: input[0].value,
    detail: input[1].value,
    imp: input[2].checked
            }
             
        ) 
        localStorage.setItem("currenttodo", JSON.stringify(currenttodo));
        showdata(); // ye call horahai showdata issa ka wajasha mai binna page ko reload kiya bhi dekh sakata hu 
         deleted();
        todoform.reset();  
        
    })   
}
todosavelocalsorage();
// data show karna hai alltask par ussa ka code hai 
function showdata () {
   let alltask = document.querySelector(".alltask")
let sum = " ";

currenttodo.forEach((detail) => {
    sum += `
    <div class="task">
    <h1>${detail.task}</h1>
     ${detail.imp ? "<h3>Imp</h3>" : ""}
    <button> compeleted</button>
    </div>
    <div class="detailtab">
    <h3>${detail.detail}</h3>   
   </div> 
    `

    });
 alltask.innerHTML = sum; 
 button();
 showdetailtab();
 deleted();
}
showdata ();
// showdetailtab();
function showdetailtab (){ 
 let task = document.querySelectorAll(".task");
    let detailtab = document.querySelectorAll(".detailtab");
   task.forEach((detail, index) => {
    console.log("hello")
    detail.addEventListener("click", () => {

        if (detailtab[index].style.display === "block") {
            detailtab[index].style.display = "none";
        } else {
            detailtab[index].style.display = "block";
        }

    });

});
}
//  ye button ka hai 
function button(){
    let buttons = document.querySelectorAll(".task button");

    let task = document.querySelectorAll(".task");
buttons.forEach((button,index) => {
    button.addEventListener("click", (event) => {

        event.stopPropagation(); // 👈 Yahin
        console.log(task[index])
      if (task[index].querySelector("h1").style.textDecoration === "line-through") {
        task[index].querySelector("h1").style.color = "red"
    task[index].querySelector("h1").style.textDecoration = "none";
} else {
    task[index].querySelector("h1").style.color = "green"
    task[index].querySelector("h1").style.textDecoration = "line-through";
}
        //  task[index].classList.toggle("completed");
        console.log("Button clicked");
        // Completed ka code
    });
});
}

function deleted() {
   let task = document.querySelectorAll(".task");

  task.forEach((detail, index) => {
        detail.addEventListener("dblclick", () => {

            // Array se item delete
            currenttodo.splice(index, 1);

            // LocalStorage update
            localStorage.setItem("currenttodo", JSON.stringify(currenttodo));

            // UI refresh
            showdata();
        });

   });
}
//    console.log(task) 

// deleted();