let tokencheck = localStorage.getItem("token");
let data = JSON.parse(localStorage.getItem("workshopID"));

window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.replace("login.html");
    }
    else{
        let titel = document.querySelector(".titel");

        if(data == undefined || data == null || data == ""){
            this.window.location.replace("home.html");
        }

        fetch(`/events/workshop/id=${data}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("ok");
            return response.json();
        }).then(json =>{
            if(json.status === "Success"){
                console.log(json);
                let name = json.data.titel;
                titel.innerHTML = name;
            }
            if(json.status === "Error"){
                console.log(error);
            }
        })
    }
});

let inschrijving = document.querySelector(".button--submit");
inschrijving.addEventListener("click", () =>{
    fetch(`/events/workshopinschrijven/id=${data}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        }
    }).then(response =>{
        console.log("done1");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log(json);
            let message = `<h1>Je bent ingeschreven voor deze workshop</h1>`
            document.querySelector(".ingeschreven").innerHTML = message;

        }
        if(json.status === "Error"){
            console.log("error");
        }
    })
    fetch(`/events/inschrijvingen`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        }
    }).then(response =>{
        console.log("done2");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log(json);
        }
        if(json.status === "Error"){
            console.log("error");
        }
    })
    
    localStorage.removeItem("workshopID");
})

