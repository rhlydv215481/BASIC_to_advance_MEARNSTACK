var  employees = [
  {
    name: "Rahul Sharma",
    img: "https://plus.unsplash.com/premium_photo-1781821619453-c489abc25f83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "React Developer",
    description: "Experienced frontend developer specializing in React.",
    experience: "3 Years"
  },
  {
    name: "Priya Patel",
    img: "https://images.unsplash.com/photo-1627117204847-ec306fe712bb?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "UI/UX Designer",
    description: "Creative designer focused on user-friendly interfaces.",
    experience: "4 Years"
  },
  {
    name: "Amit Kumar",
    img: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Node.js Developer",
    description: "Backend developer with expertise in APIs and databases.",
    experience: "5 Years"
  },
  {
    name: "Neha Singh",
    img: "https://images.unsplash.com/photo-1575818184258-1ceb64f40ff8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Digital Marketing",
    description: "Specialist in SEO, social media, and online campaigns.",
    experience: "2 Years"
  },
  {
    name: "Vikram Joshi",
    img: "https://images.unsplash.com/photo-1630173250799-2813d34ed14b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Full Stack Developer",
    description: "Works on both frontend and backend technologies.",
    experience: "6 Years"
  },
  {
    name: "Rahul Sharma",
    img: "https://plus.unsplash.com/premium_photo-1781821619453-c489abc25f83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "React Developer",
    description: "Experienced frontend developer specializing in React.",
    experience: "3 Years"
  },
  {
    name: "Priya Patel",
    img: "https://images.unsplash.com/photo-1627117204847-ec306fe712bb?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "UI/UX Designer",
    description: "Creative designer focused on user-friendly interfaces.",
    experience: "4 Years"
  },
  {
    name: "Amit Kumar fvfrgeh",
    img: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Node.js Developer",
    description: "Backend developer with expertise in APIs and databases.",
    experience: "5 Years"
  },
  {
    name: "Neha Singh",
    img: "https://images.unsplash.com/photo-1575818184258-1ceb64f40ff8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Digital Marketing",
    description: "Specialist in SEO, social media, and online campaigns.",
    experience: "2 Years"
  },
  {
    name: "Vikram Joshi",
    img: "https://images.unsplash.com/photo-1630173250799-2813d34ed14b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Full Stack Developer",
    description: "Works on both frontend and backend technologies.",
    experience: "6 Years"
  }
  
];
let main = document.querySelector('main');
// let main = document.querySelectorAll('main')
//  jsonplaceholder
function show(){
    var info = " ";
    employees.forEach((detail,index) => {
        
    
    info += ` 
        <div class="card">
            <div class="top">
          <img ${index} src=${detail.img} alt="">   
          <div class="top2">
              <h2>${detail.name}</h2> 
            </div>
          
            </div>
            <div class="infor">
        <p>skill: ${detail.skill},</p>
        <p>description: "${detail.description}"</p>
    </p>
    <p>experience: ${detail.experience}
    </p>       
 </div>
             
        </div>`
// console.log(employees[0].img)
});    
        main.innerHTML = info;
}
show ();