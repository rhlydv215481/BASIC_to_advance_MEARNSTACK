//  this keyword ek special keyword hai jho change hota rahaia hai  ussa par kya hai like 
//     global mai this ki value window hai 
//     this ki value global/function/metod/event handeler/class  
//global
console.log("ye global ka ander this ki value ")
console.log(this)
//function
function abcd (){
    console.log("ye  function ka ander this ki value ")
    console.log(this)
}
abcd( );
// method mean ek aisa function jho obj ka anader ho ussa method bolata hai ya buildin function
 let obj = {
    name : "rahul "     ,
    say : function greet(){
        console.log("ye  method ka ander this ki value ",this)
    }
 }
 obj.say();
//  event handlerner
document.querySelector("h1").addEventListener("click", function (detail){
    console.log(this.style.color = "red")
    this.style.position = "absolute";
    this.style.top = "50%";
    this.style.left = "50%";
})
//  ARRAOW FUNCTION HAMESHA APNA VALUE PARENT SE LETA HAI 
