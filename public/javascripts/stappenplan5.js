let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.assign("login.html");
    }
});

let btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    window.location.assign("home.html");
});

let escape = document.querySelector(".cross");
    escape.addEventListener("click", ()=>{
    window.location.assign("home.html");
});