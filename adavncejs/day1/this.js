// "this ki value = jis object ne function ko call kiya
// Normal Function
// this = Caller Object

// Arrow Function
// this = Outer Scope
console.log("hello")
// global -> window
console.log(this)
// function -> window dega
function abcd(){
    console.log(this)
}
abcd();
// es5 inside obj is -> obj dega
var obj =  {
    name :"rahul",
    age :20,
     abc() {
        return this;
        // console.log(this);
    }
}
console.log(obj.abc())
//es6 inside obj -> window 
//  
// " arrow  khud ka this nahi hai, main apne bahar wale scope ka this use karunga.
// tho obj ka use karega ab obj kidar created huva hai window mai tho output window aayaga arrow function mai ok
var obj =  {
    name :"rahul",
    age :20,
     show : ()=> { //arrow function
        return this;
        // console.log(this);
    }
}
console.log(obj.show());
// es5 ka nder es5 ka nder obj -> windo
// es6 fun inside es5 func insde obj -> obj 