let tokencheck = localStorage.getItem("token");
let data = JSON.parse(localStorage.getItem("eventID"));

//token check bij window load
window.addEventListener("load", function(){
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
        let titel = document.querySelector(".titel");

        if(data == undefined || data == null || data == " "){
            this.window.location.assign("home.html");
        }

        //get event data by id to fill in titel inschrijvenevent.html
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
                // console.log(json);
                let name = json.data.titel;
                // console.log(name);
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
let firstname = document.querySelector(".firstname");
let lastname = document.querySelector(".lastname");
let email = document.querySelector(".email");
let error = "<p class='invalid'>Niet al de velden zijn correct ingevuld, gelieve deze te vervolledigen</p>"

//eventlistener to register for event
inschrijving.addEventListener("click", () =>{
    //errormessages
    if(firstname.value == ""){
        firstname.insertAdjacentHTML("beforebegin", error);
        //class error toevoegen
        firstname.classList.add("error"); 
    }
    else if(lastname.value == ""){
        document.querySelector(".invalid").remove();
        firstname.insertAdjacentHTML("beforebegin", error);
        firstname.classList.remove("error");
        lastname.classList.add("error");
    }
    else if(email.value == ""){
        document.querySelector(".invalid").remove();
        firstname.insertAdjacentHTML("beforebegin", error);
        lastname.classList.remove("error");
        email.classList.add("error");
    }
    else{    
        //put request for inschrijvenevent update Event 
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
                // console.log(json);
                let message = `<h1>Je bent ingeschreven voor dit event</h1>`
                document.querySelector(".ingeschreven").innerHTML = message;

                firstname.classList.add("hidden");
                lastname.classList.add("hidden");
                email.classList.add("hidden");
                inschrijving.classList.add("hidden");
            }
            if(json.status === "Error"){
                console.log("error");
            }
        })

        //put request for inschrijvenevent update User
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
                // console.log(json);
            }
            if(json.status === "Error"){
                console.log("error");
            }
        })
    }
    localStorage.removeItem("eventID");
});

//klikevent pijl
let arrow= document.querySelector(".arrow");
arrow.addEventListener("click", () =>{
    window.location.assign("events-workshops.html");
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
        document.querySelector('.background--white--fixed').classList.remove("hidden");
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
        document.querySelector('.background--white--fixed').classList.add("hidden");
    }    
});