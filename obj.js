console.log("hello object ...");
// creating tuna dekh leya above eample  /accestion/deleting and nested obj
let a = {
    names :"rahul",
    age:18,
    study : 'vnsgu '
};
b={
    names: 'javed',
    age : 98,
    study : 'gujarat universtiy'
};
// accesing 
console.log(a.names ,b.names);
// deleting
delete a.names;
console.log(a)
// nested obj 
let aa = {
    names:'rahul',
    age : 18,
    socilamedia : {
        instagram : "indian_123",
        fackbook : 'ibgys_123'
    },
} ;
console.log(aa.socilamedia.instagram)
// Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
    names :'rahul',
    age : 19,
    city : 'varanasi ',
}
console.log(person)
// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout( function(){
    console.log('time out');
},2000)