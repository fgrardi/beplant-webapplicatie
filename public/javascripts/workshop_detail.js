let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
        let data = JSON.parse(localStorage.getItem("workshopID"));
        let datum = document.querySelector(".datum");
        let tijd = document.querySelector(".tijd");
        let titel = document.querySelector(".titel");
        let locatie = document.querySelector(".locatie");
        let deelnemers = document.querySelector(".deelnemers");
        let maxdeelnemers = document.querySelector(".deelnemers-max");
        let organisator = document.querySelector(".organisator");
        let beschrijving = document.querySelector(".beschrijving");
        let video = document.querySelector(".video");

        if(data == undefined || data == null || data == " "){
            this.window.location.assign("home.html");
        }

        console.log("before fetch");

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

                titel.innerHTML = json.data.titel;              
                locatie.innerHTML = json.data.locatie;
                maxdeelnemers.innerHTML = json.data.deelnemers;
                organisator.innerHTML = json.data.organisator;
                beschrijving.innerHTML = json.data.beschrijving;
                deelnemers.innerHTML = json.data.inschrijvingen;
        

                if(deelnemers.innerHTML === maxdeelnemers.innerHTML){
                    submit.innerHTML = "Inschrijvingen zijn volzet";
                }
                else{
                    submit.innerHTML = "Deelnemen aan event";
                }
                
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

                console.log(json.data.video);
                let vid = json.data.video;

                if(vid === "online"){
                    video.innerHTML = "online";
                }
                if(vid === "offline"){
                    video.innerHTML = "Volledig offline";
                }
                if(vid === "livevideo"){
                    video.innerHTML = "Live video";
                }
                if(vid === "aftermovie"){
                    video.innerHTML = "After movie";
                }
            }
        })

        
    }
});

let submit = document.querySelector(".button--submit");
submit.addEventListener("click", () =>{
    if(submit.innerHTML === "Inschrijvingen zijn volzet"){
        submit.classList.add("btn--red");

    }
    else{
        window.location.assign("inschrijvenworkshop.html");
    }
});

let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", ()=>{
    window.location.assign("events-workshops.html");
})