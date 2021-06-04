let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.replace("login.html");
    }
    else{
        let data = JSON.parse(localStorage.getItem("eventID"));
        let datum = document.querySelector(".datum");
        let tijd = document.querySelector(".tijd");
        let titel = document.querySelector(".titel");
        let locatie = document.querySelector(".locatie");
        let deelnemers = document.querySelector(".deelnemers");
        let maxdeelnemers = document.querySelector(".deelnemers-max");
        let organisator = document.querySelector(".organisator");
        let beschrijving = document.querySelector(".beschrijving");

        if(data == undefined || data == null || data == " "){
            this.window.location.replace("home.html");
        }

        console.log("before fetch");

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
                
                locatie.innerHTML = json.data.locatie;
                maxdeelnemers.innerHTML = json.data.deelnemers;
                organisator.innerHTML = json.data.organisator;
                beschrijving.innerHTML = json.data.beschrijving;
                deelnemers.innerHTML = json.data.inschrijvingen;
        
                let date = json.data.datum.split("T")[0];
                date = date.split("-");
                    if(!date[0]){date[0] = " ";}
                    if(!date[1]){date[1] = " ";}
                    if(!date[2]){date[2] = " ";}
                datum.innerHTML = date[2] + " " + date[1] + " " + date[0];

                let time = json.data.datum.split("T")[1];
                time = time.split(".")[0];
                time = time.split(":");
                tijd.innerHTML = time[0] + ":" + time[1];
            }
        })
    }
});

let submit = document.querySelector(".button--submit");
submit.addEventListener("click", () =>{
    window.location.replace("inschrijvenevent.html");
});