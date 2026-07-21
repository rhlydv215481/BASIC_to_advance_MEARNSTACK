let form = document.querySelector("form");
let p = document.querySelector("p");
let password = document.querySelector("#password")
let gmail = document.querySelector('#gmail')
let btn = document.querySelector('button');
let small = document.querySelectorAll("small")
btn.addEventListener("click",(event)=>{
    event.preventDefault();
   const passwordRegex = /^.{8,}$/;
;

    const regex = /^([\w]*[\w.]*(?!\.)@gmail\.com)$/;
let ans = regex.test(gmail.value);

    btn.addEventListener("click", (event) => {
    event.preventDefault();

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    const small = input.nextElementSibling;

    if (input.value.trim() === "") {
        small.innerText = `${input.id} is empty`;
        return;
    } 
});
// Step 2: Gmail check
    if (!regex.test(gmail.value)) {
        console.log("Invalid Gmail");
        return;
    }

    // Step 3: Password check
    else if  (!passwordRegex.test(password.value)) {
        console.log("Invalid Password");
        return;
    }
    else{
        // Step 4: Sab sahi hai
     p.innerText = " Form Submitted Successfully ";    }

    
}
);

})


 
 
// console.log(ans)
    // form.reset()
