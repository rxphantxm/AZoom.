// For Popup Login page==========================================================================
document.getElementById("btnToLogin").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
    document.body.style.overflow = "hidden";
});



let closeBTNclick = document.querySelectorAll('.close');

[...closeBTNclick].forEach((close)=>{
  close.addEventListener( 'click', function() {
    document.querySelector(".popup").style.display ="none";
    document.body.style.overflow = "scroll";
  });
});




//To flip between Sign Up and Login==========================================================================
let flips = document.querySelectorAll('.toFlip');

[...flips].forEach((flip)=>{
  flip.addEventListener( 'click', function() {
    document.querySelector(".card").classList.toggle('is-flipped');
  });
});











//For login Validation==========================================================================
function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ( username == "jdoe123" && password == "123")
    {
        alert ("Login successfully");
        updateUsername (username);
        document.querySelector(".popup").style.display ="none";
        document.body.style.overflow = "scroll";
        location.reload();
    }
    
    else if ( username== "admin" && password == "321")
    {
        alert ("Login successfully as Administrator");
        updateUsername (username);
        document.querySelector(".popup").style.display ="none";
        document.body.style.overflow = "scroll";
        window.location.assign("admin.html");
    }
    
    else{
        alert ("Wrong credentials!!");
    }
}




//Update Stored Username==========================================================================
function updateUsername (username)
{
    localStorage.setItem('userName', username);
}




function logout ()
{
  updateUsername("Guest");
  location.reload();
}






//To update the displayed username everytime page is reloaded
document.addEventListener("DOMContentLoaded", function displayStoredUsername() {

  let usernameDisplays = document.querySelectorAll(".userName_Display");
  [...usernameDisplays].forEach((usernameDisp)=>{
    usernameDisp.innerHTML = localStorage.getItem("userName");
  })
  

  if (localStorage.getItem("userName") == "Guest") {
    let loggedinBTN = document.querySelectorAll(".userLoggedinBTN");
    [...loggedinBTN].forEach((btn => {
      btn.style.display = "none";
    }))
  }


  else {
    document.querySelector("#btnToLogin").style.display = "none";

    let loggedinBTN = document.querySelectorAll(".userLoggedinBTN");
    [...loggedinBTN].forEach((btn => {
      btn.style.display = "show";
    }))
  }


})

