//klik event to login
let login = document.querySelector(".login");
login.addEventListener("click", () =>{
    window.location.assign("login.html");
});

//klik event to signup
let signup = document.querySelector(".signup");
signup.addEventListener("click", () =>{
    window.location.assign("signup.html");
});

//klik event naar landingspagina
let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    alert("loading screen here")
    // window.location.assign("index.html");
});