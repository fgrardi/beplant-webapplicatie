let tokencheck = localStorage.getItem("token");

//token check bij window load
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
});

//klik event naar stap 5
let btn5 = document.querySelector(".btn");
btn5.addEventListener("click", () =>{
    window.location.assign("stappenplan-5.html");

    //fetch put to step 5
    fetch("/steps/stappenplan", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        }     
    }).then(response =>{
        console.log("done4");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log("ok");  
            console.log(json);
        }
        if(json.status === "Error"){
            console.log("error");
        }
    });
});

//klik event kruisje
let escape = document.querySelector(".cross");
    escape.addEventListener("click", ()=>{
    window.location.assign("home.html");
});