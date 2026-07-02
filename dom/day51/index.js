 reels = [ 
  // {
  //   videoLink: "https://www.pexels.com/download/video/11160798/",
  //   likeCount: 15420,
  //   caption: "Sunset vibes 🌅",
  //   userProfile: "https://images.unsplash.com/photo-1782320143528-4a1f614c6e3d?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   shareCount: 520,
  //   commentCount: 210,
  //   isFollowed: true,
  //   isliked:false,
  //   username: "rahul_01"
  //  comment:[] ,
  // },
  {
    videoLink: "https://www.pexels.com/download/video/31964889/",
    likeCount: 8765,
     shareCount: 1250,
    isliked:false,
    comment:[] ,
     caption: "Travel memories ✈️",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    commentCount: 95,
    isFollowed: false,
    username: "travel_girl",
    iscomment: false,
  },
  {
    videoLink: "https://www.pexels.com/download/video/31223583/",
    isliked:false,
    likeCount: 22450,
    caption: "Gym motivation 💪",
    userProfile: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 980,
    commentCount: 450,
    isFollowed: true,
    username: "fit_life",
    iscomment: false,
  comment:[] ,
  },
  // {
    //   videoLink: "https://www.pexels.com/download/video/12107199/",
    // comment:[] ,
  //   likeCount: 6400,
  //   caption: "Coffee time ☕",
  //   isliked:false,
  //   userProfile: "https://images.unsplash.com/photo-1777492200923-44a43f26c000?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   shareCount: 180,
  //   commentCount: 60,
  //   isFollowed: false,
  //   username: "coffee_lover"
  // },
  // {
  //   videoLink: "https://www.pexels.com/download/video/17630240/",
  //   likeCount: 19300,
  //   isliked:false,
  //   caption: "Nature is beautiful 🌿",
  //   userProfile: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   shareCount: 740,
  // comment:[] ,
  //   commentCount: 310,
  //   isFollowed: true,
  //   username: "nature_clicks"
  // },
  // {
  //   videoLink: "https://www.pexels.com/download/video/29938388/",
  //   likeCount: 12890,
  // comment:[] ,
  //   caption: "Weekend fun 😎",
  //   userProfile: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   isliked:false,
  //   shareCount: 430,
  //   commentCount: 140,
  //   isFollowed: false,
  //   username: "weekend_vibes"
  // },
  // {
  //   videoLink: "https://www.pexels.com/download/video/33192052/",
  //   likeCount: 31000,
  //   caption: "Dance challenge 🔥",
  //   userProfile: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   shareCount: 1250,
  //   isliked:false,
  //   commentCount: 680,
  // comment:[] ,
  //   isFollowed: true,
  //   username: "dance_king"
  // },
  // {
  //   videoLink: "https://www.pexels.com/download/video/36437810/",
  //   likeCount: 7200,
  //   caption: "Happy moments ❤️",
  //   userProfile: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   isliked:true,
  //   shareCount: 150,
  // iscomment: true,
  //   comment:[] ,
  //   commentCount: 75,
  //   isFollowed: false,
  //   username: "happy_soul"
  // }
];
let allreel = document.querySelector('.allreel')

// ye first hai ok 144 line par 
function showdata(){
  var sum = ' ';
reels.forEach((detail,indexnum) => {
sum += `<div class="reel">
<video 
    src="${detail.videoLink}"
    muted
    loop
    autoplay
    >
</video>
     <div
id="${indexnum}"
class="comment"
>
    <h3>hello this is comment </h3>
    <div class="text"> 
     <input type="text" > <button>post</button>    
    </div>
   
    </div>                  

<div class="right">
   <div id="${indexnum}" class="like">
    ${
      detail.isliked
      ? '<i class="ri-heart-fill"></i>'
      : '<i class="ri-heart-2-line"></i>'
    }
    <h3>${detail.likeCount}</h3>
</div>
               <div id="${indexnum}" class=" comm">
               <i class="ri-chat-3-line"><h3>${detail.commentCount}</h3></i>
               </div>

                <i class="ri-share-forward-line"><h3>${detail.shareCount}</h3></i>
                <i class="ri-more-2-fill"></i>
            </div>
                <div class="bottom">
                <div class="top">
                    <h4> 
                    <img src="${detail.userProfile}" alt="">
                </h4>      
                <h4> ${detail.username}</h4>
                <button id=${indexnum}>${detail.isFollowed?'Unfollow':'Follow'}</button>
                </div>
                <div class="down">
                     <h2>${detail.caption}</h2>
                </div>
                <!-- <h2>Less perfection, more authenticity. 🖤</h2> -->
            </div>
            
            </div>`
            allreel.innerHTML = sum;
     
})

}
showdata();
let comm = document.querySelector('.comm')

// showdata();
// ye idar khatam horahai first
// nextconcept hai closest().
// closest function hai ussa called karna hota hai 
allreel.addEventListener("click", (det) => {
  console.log('clicked')
 

 if (det.target.closest(".comm")) {
// “jis reel ke andar click hua hai, us reel ke andar wala comment box nikaal do”
    let currentComment = det.target
        .closest(".reel")
        .querySelector(".comment");

  if (currentComment.style.opacity === "1") {
        currentComment.style.opacity = "0";
        currentComment.style.bottom = "-50%";
    } else {
        currentComment.style.opacity = "1";
        currentComment.style.bottom = "0px";
    }

  }
  // dekh jaia reel[0].likecount++ se like increse huva waisa he hai 0 ka dhura hai tho ye milla [det.target.closest(".like").id 
  // console.log(reels[det.target.closest(".like").id].likeCount++)
 if (det.target.closest(".like")){
    if( reels[det.target.closest(".like").id].isliked ===  false){
   console.log(det.target.closest(".like").id);
  
 reels[det.target.closest(".like").id].likeCount++;
  reels[det.target.closest(".like").id].isliked = true
  }
  else{
reels[det.target.closest(".like").id].likeCount--;
  reels[det.target.closest(".like").id].isliked = false
  }
    showdata();
}





if(reels[det.target.id].isFollowed ===  true){
    reels[det.target.id].isFollowed = false;
  }
  else if (reels[det.target.id].isFollowed === false){
    reels[det.target.id].isFollowed = true
    }
    showdata();
// ------------------
   
// !reel.isFollowed !not konsa value hai ussa ulta kar deta hai true ko flase or flase ko true
// reels[det.target.id].isFollowed = !reels[det.target.id].isFollowed;
//  showdata();

// comment section
// console.log(det.target.className)
// console.log(det.target.closest('.comm'))

 })

 

// Maan lo HTML hai:
// <div class="reel">
//     <video></video>
//     <div class="like" id="0">
//         <i class="ri-heart-2-line"></i>
//         <h3>8765</h3>
//     </div>
// </div>
// Ab agar click hua:
// <i> pe
// ya <h3> pe
// To closest('.like') kya karega?
// Ye upar chadhta rahega jab tak .like nahi mil jata.
// <i>
//  ↑
// <div class="like" id="0">   ✅ Mil gaya
// Aur agar <h3> pe click hua:
// <h3>
//  ↑
// <div class="like" id="0">   ✅ Mil gaya
// Isliye professionals parentElement ki jagah aksar closest() use karte hain.



