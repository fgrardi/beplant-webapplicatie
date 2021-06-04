let login = document.querySelector(".login");
login.addEventListener("click", () =>{
    window.location.replace("login.html");
});

let signup = document.querySelector(".signup");
signup.addEventListener("click", () =>{
    window.location.replace("signup.html");
});

let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    alert("loading screen here")
    // window.location.replace("back.html");
});