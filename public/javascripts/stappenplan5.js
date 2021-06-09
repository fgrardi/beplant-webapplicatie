let tokencheck = localStorage.getItem("token");

//token check bij window load
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
});

//klik event to home
let btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    window.location.assign("home.html");
});

//klik event kruisje
let escape = document.querySelector(".cross");
    escape.addEventListener("click", ()=>{
    window.location.assign("home.html");
});