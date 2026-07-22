
let array =  JSON.parse(localStorage.getItem("users")) || [];;
let input = document.querySelectorAll("input");
let small = document.querySelectorAll("small")
let btn = document.querySelector("button");

console.log(input)
console.log("hello")
// console.log(usernameRegex);
console.log(small)
btn.addEventListener("click", (event) => {
    let isValid = true;
    // event.preventDefault(); 
    input.forEach((ele,index) => {
        console.log(ele.id);
// console.log(ele.value);
console.log(ele.value)
        // console.log(ele.id)
        if(ele.value.trim() === ""){
            // console.log(small)
                 small[index].innerText = `plz entre value ${ele.id}`;
                 small[index].style.color = ' red'
               isValid = false;
                //  form.reset();
        }
        else{
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// console.log(usernameRegex);
if( ele.id === 'username') {
  
    // console.log("noy")
    // console.log(ele.value) // ye value leya 
  if(!usernameRegex.test(ele.value)){
    isValid = false;
       small[index].innerText = `plz entre corrected username` // small[index] iss pata chal rahai ki 0 elemt walla mai karna hai 
    small[index].style.color = ' red'
    }
}
else if (ele.id  === 'gmail' ){ // id gmail hai 
    if(!gmailRegex.test(ele.value)) {//gmail ka value patten same nhi hai tho {
        isValid = false;
        small[index].style.color = ' red'
    small[index].innerText ='plz entre valied gmail and it should be and gmail.com'    
} 
}
else if (ele.id === 'password'){
    if(!passwordRegex.test(ele.value)){
        isValid = false;
  small[index].style.color = ' red'
        small[index].innerText ='plz entre valied password 1 small letter  1 capital letter  1 number  1 special character  8 characters'
    }
}

        }
        
     
     });
    if (isValid === true) {
        let user = {
            username : ` ${input[0].value}`,
            gmail: `${input[1].value}`,
            password : `${input[2].value}`,
            mobile : `${input[3].value}`
        }
        array.push(user)
        // JSON.stringify() ka sirf ek hi kaam hai:
// JavaScript Object ya Array ko String me convert karna.
        localStorage.setItem("users",JSON.stringify(user)); // localStorage.setItem() → browser ke local storage me data save karta hai magar Browser direct object save nahi kar sakta, isliye: apna JSON.stringify(user)
// object ko string me convert karta hai:  JSON.stringify(user)
        // wwalla dekhna ok 
        // console.log(array);
        small[4].innerText = `for submitted succesfully `
        small[4].style.color = ' green'
        isValid = false;
    }
    // console.log("hello");
});
