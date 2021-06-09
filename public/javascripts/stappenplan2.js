let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.assign("login.html");
    }
});

let diy = document.querySelector(".stap3a");
diy.addEventListener("click", ()=>{
    console.log("jup");
    fetch("/steps/stap3", {
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

            document.querySelector(".stap2").innerHTML = "Stap 3";
            // document.querySelector(".bkgdiy").classList.add("btn--dark");
            document.querySelector(".bkgdiy").style.backgroundColor = "#304E37";
            document.querySelector(".bkgdiy img").setAttribute("src", "./assets/tang-light.png");
            document.querySelector(".bkgbuy").style.backgroundColor = "#F5F5F5";
            document.querySelector(".bkgbuy img").setAttribute("src", "./assets/spatel.png");
        }
        if(json.status === "Error"){
            console.log("error");
        }
    });
});

let buy = document.querySelector(".stap3b");
buy.addEventListener("click", ()=>{
    console.log("jup");
    fetch("/steps/stap3", {
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

            document.querySelector(".stap2").innerHTML = "Stap 3";
            document.querySelector(".bkgdiy").style.backgroundColor = "#F5F5F5";
            document.querySelector(".bkgdiy img").setAttribute("src", "./assets/tang-dark.png");
            document.querySelector(".bkgbuy").style.backgroundColor = "#304E37";
            document.querySelector(".bkgbuy img").setAttribute("src", "./assets/spatel-light.png");
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
    diyplant.classList.add("btn--red");
    diypot.classList.remove("btn--red");
    diybak.classList.remove("btn--red");

    // console.log(pot.classList);

    if(pot.classList.contains("hidden") || bak.classList.contains("hidden")){
        pot.classList.add("hidden");
        bak.classList.add("hidden");
    }
});

let diypot = document.querySelector(".diyhouder");
diypot.addEventListener("click", () =>{
    pot.classList.remove("hidden");
    diyplant.classList.remove("btn--red");
    diypot.classList.add("btn--red");
    diybak.classList.remove("btn--red");

    if(plant.classList.contains("hidden") || bak.classList.contains("hidden")){
        plant.classList.add("hidden");
        bak.classList.add("hidden");
    }
    
});

let diybak = document.querySelector(".diybakken");
diybak.addEventListener("click", () =>{
    bak.classList.remove("hidden");
    diyplant.classList.remove("btn--red");
    diypot.classList.remove("btn--red");
    diybak.classList.add("btn--red");

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
    buyplant.classList.add("btn--red");
    buypot.classList.remove("btn--red");
    buybak.classList.remove("btn--red");

    if(houder.classList.contains("hidden") || bakken.classList.contains("hidden")){
        houder.classList.add("hidden");
        bakken.classList.add("hidden");
    }
});

let buypot = document.querySelector(".buyhouder");
buypot.addEventListener("click", () =>{
    houder.classList.remove("hidden");
    buyplant.classList.remove("btn--red");
    buypot.classList.add("btn--red");
    buybak.classList.remove("btn--red");

    if(mat.classList.contains("hidden") || bakken.classList.contains("hidden")){
        mat.classList.add("hidden");
        bakken.classList.add("hidden");
    }
    
});

let buybak = document.querySelector(".buybakken");
buybak.addEventListener("click", () =>{
    bakken.classList.remove("hidden");
    buyplant.classList.remove("btn--red");
    buypot.classList.remove("btn--red");
    buybak.classList.add("btn--red");

    if(mat.classList.contains("hidden") || houder.classList.contains("hidden")){
        mat.classList.add("hidden");
        houder.classList.add("hidden");
    }
});

let btndiy = document.querySelector(".btndiy");
    btndiy.addEventListener("click", () =>{
        window.location.assign("stappenplan-4.html");
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
                // console.log(json);
            }
            if(json.status === "Error"){
                console.log("error");
            }
        });
    });

let btnbuy = document.querySelector(".btnbuy");
    btnbuy.addEventListener("click", () =>{
        window.location.assign("stappenplan-4.html");
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
                // console.log(json);
            }
            if(json.status === "Error"){
                console.log("error");
            }
        });
    });

let escape = document.querySelector(".cross");
    escape.addEventListener("click", ()=>{
    window.location.assign("home.html");
}); 