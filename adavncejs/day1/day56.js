// imp concepts
// global ->window 


console.log("hello");
class Student {
    constructor(name,age,course) {
        this.name = name ;
        this.age = age ;
        this.course = course ;
    }
    showInfo(){
       console.log( `my name is ${this.name} . i am ${this.age} year old .i study ${this.course}`)
    };
}
const s1 = new Student("Sunny", 20, "BCA");
s1.showInfo();
class Car {
    constructor(brand,model){
       this.brand = brand;
        this.model = model; 
    }
    start (){
        console.log(`${this.brand} ${this.model} is starting`)
    }
}
let c1 = new Car("BMW","X5 ")
c1.start();
//
class employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;

    }
    work(){

    }
    getsalary(){

    }
};
let emp1 = new employee("rahul",12000);

//  password anager 
class Passwordmanager {
constructor() {
        this.passwords = [];
    }
   addPassword(pass) {
        this.passwords.push(pass);
    }
}
class Password{
    constructor(website,email,password){
        this.website = website;
        this.email = email;
        this.password = password;
    }
    Category(cat) {
       let opt =  ["social","banking","tvseries","educationtexh"];
        if(opt.includes(cat)){
            this.category = cat;
        }
        else{

            console.log("invalied")
        }
    }
    showinfo(){
        
        console.log("Website:", this.website);
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        console.log("Category:", this.category);
    
    }
    changepassword(password){
        this.password =password;
    }
}
let person = new Password("instagam","sunny@1234.gmail.com","12rahu",);
person.Category("Social");

let person2 = new Password("youtube","rahul123","oooeue");
person2.Category("tvseries");
console.log(person)
person2.showinfo();
person.showinfo();
person.changepassword("jjjjj");

class student {
    constructor (name,age,marks,course){
        
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.course = course;
    }
    showinfo(){
        console.log("name",this.name)
        console.log("age",this.age);
    console.log("marks",this.marks);
    console.log("course",this.course)
    }
    
    upadetmarks(update,old){
        this.marks = old; 
        this.marks=update;
    }
    updatecourse (update){
        this.course=update;
    }
    ispass(){
        if(this.marks >= 35){
            console.log("passed")
        }
        else{
            console.log("fail");
            
        }
    }
}
let stu4 = new student("rahul",210,70,"bca");
let stu3 = new student("rahul",210,70,"bca");
let stu2 = new student("rahul",210,70,"bca");
let stu1 = new student("rahul",210,70,"bca");


console.log(stu1)
stu1.ispass();
stu2.upadetmarks(56);
stu2.updatecourse("mca");
//create 5 user email and password and has logging method 
class User  {
    constructor (email,name) {
        this.email = email;
        this.name = name;
    }
    login(){
        console.log("it is logging")
    }
}
let first1 = new User("rahjs@qw234","tdhueksl")
let first2 = new User("rahjs@qw234","hmdbdtbl");
let first = new User("nghjs@qw234","tdhueksl");
// discount 
class product{
 constructor(product,price){
    this.product = product;
    this.price = price;
}
 discount(){
   return this.price -  this.price * 10/100
 }
}
let item = new product("cap",2000)
console.log(item.discount());////  dekh () use karega tab he aayaga nhi tho ye sab simple print hojayaga kyu ki ye function hi tuja call karna padata hai ok

class car {
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    driver(){
        return this.brand +" - " + this.speed ;
     
    }
}
let car2 = new car("bmw",200); console.log(car2.driver());
let car3 = new car("mersadies",180);console.log(car3.driver())

//  create 2 method  one arrow and one normal functio

var objs = {
    oldfunction : function (){
        
        console.log(this)
        return `ye old es5 way to right fuction in obj `
    },
    // ye modern ka leya ye use hota hai moder syntax 
    normal(){
        console.log(this)
        return "ye normal function in obj "
    },
    // dekh obj mai key : value  use hota hai issa leya aisa likena hota hai sayarrow hogaya key and function value 
    sayarrowname : ()=>{
        // ye khuda ka this nhi leta ya apna parent ka lta hai ok ab 
        // ye obj ka leya obj kidar created hora hai window issa leya window le rahai hai 
        console.log(this)
        return `ye arrow function`
    }
}
console.log(objs.normal());
console.log(objs.sayarrowname());
console.log(objs.oldfunction());

class Laptop {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    start() {
        return `Laptop is started`;
    }
    increase(){
        this.price = this.price + 10/100 * this.price; 
    }
}

let laptop1 = new Laptop('Dell', 70000);

console.log(laptop1.start());
laptop1.increase();
console.log(laptop1.price);

class Employees {
    constructor (name,salary){
        this.name=name;
        this.salary = salary;
    }
    show(){
      console.log("the name of employee is - ",this.name);
       console.log("the salary  of employee is - ", this.salary);
    }

}
let mp1 =  new Employees("4rahul",70000);
let wmps2  =  new Employees("sunnny",987654);
let emp3  =  new Employees("fatima",87654);
mp1.show();
// console.log(Employees.show ye nhi chalefga kyu ki class ko bularahai magar data obj mai hai )
// object.method(); ✅
// Class.method();  ❌ (except static)

// Jab function return karta hai   
// show() {
//     return this.name;
// }
//  tab conle use karna  console.log(mp1.show()); ✅
// Jab function ke andar console.log() hai
// show() {
//     console.log(this.name);
// }
// mp1.show(); ✅
class Bankac {
constructor(totalamount,nikalamout,deposite){
this.totalamount=totalamount;
this.nikalamout = nikalamout;
this.deposite = deposite;
// this.transationhistory = transationhistory;
}
withdrawamout (drawl){
   return  drawl = this.totalamount + this.nikalamout;
}
depositeamt(kitandeopsite){
    return kitandeopsite = this.totalamount - this.deposite;
}
transationhistory(){
    console.log( `deposite kitan amount `,this.depositeamt())
    console.log(`withdrawl amount`,this.withdrawamout())
}

}
let bank1 = new Bankac(40000,2000,5000);
// bank1.withdrawamout();
// bank1.depositeamt();
// bank1.transationhistory();
bank1
//  library management  mini version 
//  class Library{
//  constructor (){
//     []
//  }
//  addbook(title,autor,copies){
//     this.title=title;
//     this.autor = autor;
//     this.copies = copies;
//  }
//  }
