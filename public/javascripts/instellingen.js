let tokencheck = localStorage.getItem("token");

//token check bij window load
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
});

//eventlistener to toggle menu overlay
let menu = document.querySelector(".menu");
let navigation = document.querySelector(".navigation");
menu.addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("hidden");
    if(document.querySelector(".nav").classList.contains("hidden")){
        menu.setAttribute("src", "./assets/menu-icon.png");
        navigation.style.backgroundColor = "transparent";
        // navigation.style.top = "30px";
        navigation.style.position = "relative";
        navigation.style.height = "auto";
        // document.querySelector(".nav__flex").style.marginTop = "-10px";
        // navigation.style.marginTop = "-20px";
        // document.querySelector(".nav__flex").style.marginBottom = "80px";
    }
    else{
        menu.setAttribute("src", "./assets/cross-icon.png");
        navigation.style.backgroundColor = "#CAD3BD";
        navigation.style.position = "fixed";
        navigation.style.height = "100%";
        navigation.style.top = "0px";
        navigation.style.overflowX = "hidden";
        navigation.style.zIndex = "5";
        navigation.style.width = "315px";
        // document.querySelector(".nav__flex").style.marginTop = "32px";
        navigation.style.marginTop = "32px";
    }
    
});

//klikevent pijl
let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", ()=>{
    window.location.assign("home.html");
})

//klikevent logout
let logout = document.querySelector(".logout");
logout.addEventListener("click", ()=>{
    localStorage.removeItem("token");
});