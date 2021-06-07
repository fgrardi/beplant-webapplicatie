let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
});

let btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    window.location.replace("home.html");
});