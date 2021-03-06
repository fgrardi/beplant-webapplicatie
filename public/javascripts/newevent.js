//token check bij window load
window.addEventListener("load", function(){
    let tokencheck = localStorage.getItem("token");
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
        //klikevent for creating new event
        let newevent = document.querySelector(".button--submit").addEventListener("click", () => {
            let titel = document.querySelector(".titel").value;
            let locatie = document.querySelector(".locatie").value;
            let date = document.querySelector(".datum").value;
            let tijd = document.querySelector(".tijd").value;
            let organisator = document.querySelector(".organisator").value;
            let deelnemers = document.querySelector(".deelnemers").value;
            let beschrijving = document.querySelector(".beschrijving").value;
            // console.log(date, tijd);
            let isodate = new Date(date +" "+ tijd);
            // console.log(isodate);
            let datum = isodate.toJSON();
            // console.log(datum);

            let onderwerp = document.querySelector(".titel");
            let location = document.querySelector(".locatie");
            let dat = document.querySelector(".datum");
            let tim = document.querySelector(".tijd");
            let org = document.querySelector(".organisator");
            let deel = document.querySelector(".deelnemers");
            let error = "<p class='invalid'>Niet al de velden zijn correct ingevuld, gelieve deze te vervolledigen</p>";
            let mes = document.querySelector(".dropdown");

            //errormessages
            if(titel == ""){
                mes.insertAdjacentHTML("beforebegin", error);
                onderwerp.classList.add("error");
            }
            else if(locatie == ""){
                document.querySelector(".invalid").remove();
                mes.insertAdjacentHTML("beforebegin", error);
                onderwerp.classList.remove("error");
                location.classList.add("error");
            }
            else if(date == ""){
                document.querySelector(".invalid").remove();
                mes.insertAdjacentHTML("beforebegin", error);
                location.classList.remove("error");
                dat.classList.add("error");
            }
            else if(tijd == ""){
                document.querySelector(".invalid").remove();
                mes.insertAdjacentHTML("beforebegin", error);
                dat.classList.remove("error");
                tim.classList.add("error");
            }
            else if(organisator == ""){
                document.querySelector(".invalid").remove();
                mes.insertAdjacentHTML("beforebegin", error);
                tim.classList.remove("error");
                org.classList.add("error");
            }
            else if(deelnemers == ""){
                document.querySelector(".invalid").remove();
                mes.insertAdjacentHTML("beforebegin", error);
                org.classList.remove("error");
                deel.classList.add("error");
            }
            else{
                //fetch post new event in database
                fetch("/events/newevent", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokencheck}`
                },
                body: JSON.stringify({
                    "titel": titel,
                    "locatie": locatie,
                    "datum": datum,
                    "organisator": organisator,
                    "deelnemers": deelnemers,
                    "beschrijving": beschrijving
                })
            }).then(response => {
                console.log("ok");
                return response.json();                
            }).then(json => {
                if(json.status === "Success"){
                    document.querySelector(".eventmaken").innerHTML = `<h1>Nieuw event aangemaakt</h1>`
                }
            })
            }

        });

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
        navigation.style.position = "relative";
        navigation.style.height = "auto";
        menu.classList.remove("cross");
        document.querySelector('body').removeAttribute("style");
        document.querySelector('.home-body').classList.remove("hidden");
        document.querySelector('.background--white--absolute').classList.remove("hidden");
    }
    else{
        menu.setAttribute("src", "./assets/cross-icon.png");
        navigation.style.backgroundColor = "#F5F5F5";
        navigation.style.position = "fixed";
        navigation.style.height = "100%";
        navigation.style.top = "0px";
        navigation.style.overflowX = "hidden";
        navigation.style.zIndex = "5";        
        navigation.style.width = "315px";
        navigation.style.marginTop = "32px";       
        menu.classList.add("cross");
        document.querySelector('body').style.backgroundColor = "#F5F5F5";
        document.querySelector('.home-body').classList.add("hidden");
        document.querySelector('.background--white--absolute').classList.add("hidden");
    }
    
});

//klik event op pijltje
let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", ()=>{
    window.location.assign("events-workshops.html");
})