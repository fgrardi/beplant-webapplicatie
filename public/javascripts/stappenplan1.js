//token check bij window load
let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
});

//klik event for updating steps
let choice = document.querySelector(".stap1");
choice.addEventListener("click", ()=>{
    // console.log("jup");

    //fetch put update step to 1
    fetch("/steps/stappenplan", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        }    
    }).then(response =>{
        // console.log("done4");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            // console.log("ok");  
            // console.log(json);
            window.location.assign("stappenplan-2.html");

            //fetch put update step to 2
            fetch("/steps/stappenplan", {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${tokencheck}`
                }   
            }).then(response =>{
                // console.log("done5");
                return response.json();
            }).then(json =>{
                if(json.status === "Success"){
                    // console.log("ok");  
                    // console.log(json);
                }
                if(json.status === "Error"){
                    console.log("error");
                }
            });
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

//klik event dropdown menu
let ruimte = document.querySelector(".ruimte");
ruimte.addEventListener("change", () =>{
    // console.log(ruimte);

    //remove or place content
    if(ruimte.value == "balkon"){
        document.querySelector(`.balkon`).classList.remove("hidden");
        document.querySelector(".terras").classList.add("hidden");
        document.querySelector(".gevel").classList.add("hidden");
        document.querySelector(".tuin").classList.add("hidden");
    }
    if(ruimte.value == "terras"){
        document.querySelector(`.balkon`).classList.add("hidden");
        document.querySelector(".terras").classList.remove("hidden");
        document.querySelector(".gevel").classList.add("hidden");
        document.querySelector(".tuin").classList.add("hidden");
    }
    if(ruimte.value == "gevel"){
        document.querySelector(`.balkon`).classList.add("hidden");
        document.querySelector(".terras").classList.add("hidden");
        document.querySelector(".gevel").classList.remove("hidden");
        document.querySelector(".tuin").classList.add("hidden");
    }
    if(ruimte.value == "tuin"){
        document.querySelector(`.balkon`).classList.add("hidden");
        document.querySelector(".terras").classList.add("hidden");
        document.querySelector(".gevel").classList.add("hidden");
        document.querySelector(".tuin").classList.remove("hidden");
    }
})