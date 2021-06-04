let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
    else{
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
    }
});

let diy = document.querySelector(".stap3a");
diy.addEventListener("click", ()=>{
    console.log("jup");
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

            document.querySelector(".diy").classList.remove("hidden");
            document.querySelector(".buy").classList.add("hidden");
        }
        if(json.status === "Error"){
            console.log("error");
        }
    });
});

let buy = document.querySelector(".stap3b");
buy.addEventListener("click", ()=>{
    console.log("jup");
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

            document.querySelector(".buy").classList.remove("hidden");
            document.querySelector(".diy").classList.add("hidden");
        }
        if(json.status === "Error"){
            console.log("error");
        }
    });
});

let plant = document.querySelector(".diyplant");
let pot = document.querySelector(".diypot");
let bak = document.querySelector(".diybak");

let diyplant = document.querySelector(".diymat");
diyplant.addEventListener("click", () =>{
    plant.classList.remove("hidden");

    console.log(pot.classList);

    if(pot.classList.contains("hidden") || bak.classList.contains("hidden")){
        pot.classList.add("hidden");
        bak.classList.add("hidden");
    }
});

let diypot = document.querySelector(".diyhouder");
diypot.addEventListener("click", () =>{
    pot.classList.remove("hidden");

    if(plant.classList.contains("hidden") || bak.classList.contains("hidden")){
        plant.classList.add("hidden");
        bak.classList.add("hidden");
    }
    
});

let diybak = document.querySelector(".diybakken");
diybak.addEventListener("click", () =>{
    bak.classList.remove("hidden");

    if(plant.classList.contains("hidden") || pot.classList.contains("hidden")){
        plant.classList.add("hidden");
        pot.classList.add("hidden");
    }
    
});


let mat = document.querySelector(".buyplant");
let houder = document.querySelector(".buypot");
let bakken = document.querySelector(".buybak");

let buyplant = document.querySelector(".buymat");
buyplant.addEventListener("click", () =>{
    mat.classList.remove("hidden");

    if(houder.classList.contains("hidden") || bakken.classList.contains("hidden")){
        houder.classList.add("hidden");
        bakken.classList.add("hidden");
    }
});

let buypot = document.querySelector(".buyhouder");
buypot.addEventListener("click", () =>{
    houder.classList.remove("hidden");

    if(mat.classList.contains("hidden") || bakken.classList.contains("hidden")){
        mat.classList.add("hidden");
        bakken.classList.add("hidden");
    }
    
});

let buybak = document.querySelector(".buybakken");
buybak.addEventListener("click", () =>{
    bakken.classList.remove("hidden");

    if(mat.classList.contains("hidden") || houder.classList.contains("hidden")){
        mat.classList.add("hidden");
        houder.classList.add("hidden");
    }
});

let btndiy = document.querySelector(".btndiy");
    btndiy.addEventListener("click", () =>{
        window.location.replace("stappenplan-4.html");
    });

let btnbuy = document.querySelector(".btnbuy");
    btnbuy.addEventListener("click", () =>{
        window.location.replace("stappenplan-4.html");
    });