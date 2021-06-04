let tokencheck = localStorage.getItem("token");
let data = JSON.parse(localStorage.getItem("eventID"));
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.replace("login.html");
    }
    else{
        let titel = document.querySelector(".titel");

        if(data == undefined || data == null || data == " "){
            this.window.location.replace("home.html");
        }

        fetch(`/events/id=${data}`, {
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
                console.log(name);
                if(name === "planten"){
                    titel.innerHTML = "Delen/ruilen van zaden en planten";
                }
                if(name === "kennis"){
                    titel.innerHTML = "Delen van kennis";
                }
                if(name === "oogst"){
                    titel.innerHTML = "Delen/ruilen oogst";
                }
            }
        })
    }
});

let inschrijving = document.querySelector(".button--submit");
inschrijving.addEventListener("click", () =>{
    fetch(`/events/eventinschrijven/id=${data}`, {
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
            let message = `<h1>Je bent ingeschreven voor dit event</h1>`
            document.querySelector(".ingeschreven").innerHTML = message;

        }
        if(json.status === "Error"){
            console.log("error");
        }
    })
    localStorage.removeItem("eventID");
})

