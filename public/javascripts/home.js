let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
        //primus live feature /get frontend
        // alert("hello beautiful!");
        fetch("/events", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("done1");
            return response.json();
        }).then(json =>{
            
            // eventf(json);
            if(json.status === "Success"){
                // console.log(json.data);

                json.data.forEach(function(e){
                    // console.log(e.datum);
                    let date = splitdate(e.datum);
                    let time = splittime(e.datum);
                    console.log("ok");

                    let titel = e.titel;

                    //max 5lett April - Sept
                    let month;
                    switch(date[1]){
                        case "01":
                        // console.log("Jan");
                            month = "Jan"
                        break;
                        case "02":
                            month = "Feb";
                        break;
                        case "03":
                            month = "Maart";
                        break;
                        case "04":
                            month = "April";
                        break;
                        case "05":
                            month = "Mei";
                        break;
                        case "06":
                            month = "Juni";
                        break;
                        case "07":
                            month = "Juli";
                        break;
                        case "08":
                            month = "Aug";
                        break;
                        case "09":
                            month = "Sept";
                        break;
                        case "10":
                            month = "Okt";
                        break;
                        case "11":
                            month = "Nov";
                        break;
                        case "12":
                            month = "Dec";
                        break;
                    }

                    let events =`<div class="event">
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${month}</span></p>
                    </div>
                    <div class="event--image">
                    <img src="./assets/carrot-mushroom@3x.png" alt="wortel">
                    </div>                    
                    <div class="event--info">
                        <h3 class="event--info--title">${titel}</h3>
                        <p class="event--info--text">Evenement</p>
                        <p class="event--info--time">${time[0] + ":" + time[1]}</p>
                    </div>
                    </div>`;

                    document.querySelector(".events").innerHTML += events;
                }); 
                    // console.log(json);
                    let eventData = json.data;
                    // console.log(eventData);
                    let eventsdetail = document.querySelector(".events");
                    eventsdetail.addEventListener("click", (e)=>{
                        let index = [... eventsdetail.childNodes].indexOf(e.target.parentElement.parentElement) -3; // /3 -1
                        // console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            // console.log(eventData);
                            // console.log(eventData[index]);
                            // console.log(eventData[1]._id);
                            localStorage.setItem("eventID", JSON.stringify(eventData[index]._id));
                            window.location.assign("event_detail.html");
                            // console.log(ev);
                        }
                    });
            }
        })

        fetch("/events/workshop", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("done2");
            return response.json();
        }).then(json =>{
            // workshopf(json);

            if(json.status === "Success"){
                // console.log(json.data);

                json.data.forEach(function(e){
                    // console.log(e.datum);
                    let date = splitdate(e.datum);
                    let time = splittime(e.datum);
                    let titel = e.titel;

                    //max 5lett April - Sept
                    let month;
                    switch(date[1]){
                        case "01":
                        // console.log("Jan");
                            month = "Jan"
                        break;
                        case "02":
                            month = "Feb";
                        break;
                        case "03":
                            month = "Maart";
                        break;
                        case "04":
                            month = "April";
                        break;
                        case "05":
                            month = "Mei";
                        break;
                        case "06":
                            month = "Juni";
                        break;
                        case "07":
                            month = "Juli";
                        break;
                        case "08":
                            month = "Aug";
                        break;
                        case "09":
                            month = "Sept";
                        break;
                        case "10":
                            month = "Okt";
                        break;
                        case "11":
                            month ="Nov";
                        break;
                        case "12":
                            month = "Dec";
                        break;
                    }

                    let workshops = `<div class="event">
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${month}</span></p>
                    </div>
                    <div class="event--image">
                    <img src="./assets/carrot-mushroom@3x.png" alt="wortel">
                    </div>
                    <div class="event--info">
                        <h3 class="event--info--title">${titel}</h3>
                        <p class="event--info--text">Workshop</p>
                        <p class="event--info--time">${time[0] + ":" + time[1]}</p>
                    </div>
                    </div>`;

                    document.querySelector(".workshops").innerHTML += workshops;

                   
                    let workshopData = json.data;
                    let workshopdetail = document.querySelector(".workshops");
                    workshopdetail.addEventListener("click", (e)=>{
                        let index = [... workshopdetail.childNodes].indexOf(e.target.parentElement.parentElement)-3; //-3
                        // console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            // console.log(workshopData);
                            // console.log(workshopData[index]);
                            // console.log(workshopData[1]._id);
                            localStorage.setItem("workshopID", JSON.stringify(workshopData[index]._id));
                            window.location.assign("workshop_detail.html");
                            // console.log(workshopData);
                        }
                    });
                });
            }
        })
        
        fetch("/steps", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("done3");
            return response.json();
        }).then(json =>{
            if(json.status === "Success"){
                let progress = document.querySelector("#vooruitgang");
                // console.log(json.user.uid);
                // console.log("hello");
                let i= 0;

                json.data.forEach( function(e){
                    let id = (json.data[i]._id);
                    let step = json.data[i].step;
                    // console.log(step);
                    if(id === json.user.uid){
                        progress.setAttribute("value", step);
                        // console.log(progress);
                        let stappenplan = document.querySelector(".stappenplan");
                        stappenplan.addEventListener("click", () =>{
                            if(step === 1 || step === 2 || step === 4){
                              window.location.assign(`stappenplan-${step}.html`);  
                            }
                            else if(step === 3){
                                window.location.assign(`stappenplan-2.html`);
                            }
                            else if(step === 0){
                                window.location.assign(`stappenplan-1.html`);
                            }
                            else{
                                window.location.assign(`stappenplan-5.html`);
                            }
                            
                        })
                    }
                i++;
                })
                    
            }
            if(json.status === "Error"){
                console.log(error);
            }
        });

    }
});

function splitdate(date){
    let datum = date.split("T")[0];
    // console.log(datum);
    datum = datum.split("-");
    if(!datum[0]){datum[0] = " ";}
    if(!datum[1]){datum[1] = " ";}
    if(!datum[2]){datum[2] = " ";}
    // console.log(" 0 " + datum[0]);
    // console.log( " 1 " + datum[1]);
    // console.log( " 2 " + datum[2]);

    return datum;
}

function splittime(date){
    let tim = date.split("T")[1];
    let time = tim.split(".")[0];
    // console.log(time);
    time = time.split(":");
    if(!time[0]){time[0] = " ";}
    if(!time[1]){time[1] = " ";}
    if(!time[2]){time[2] = " ";}
    // console.log(" 0 " + time[0]);
    // console.log( " 1 " + time[1]);
    // console.log( " 2 " + time[2]);

    return time;
}

let reset = document.querySelector(".reset");
reset.addEventListener("click", () =>{
    // console.log("klik ok");
    fetch("/steps/reset", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`,
            "Access-Control-Allow-Origin": "*"
        }     
    }).then(response =>{
        console.log("done4");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log("ok");  
            // console.log(json);
            window.location.assign("stappenplan-1.html");
        }
    });
});


let eventsworkshops = document.querySelector(".eventsworkshops");
eventsworkshops.addEventListener("click", () => {
    window.location.assign("events-workshops.html");
});

let menu = document.querySelector(".menu");
let navigation = document.querySelector(".navigation");
menu.addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("hidden");
    if(document.querySelector(".nav").classList.contains("hidden")){
        menu.setAttribute("src", "./assets/menu-icon.png");
        navigation.style.backgroundColor = "transparent";
        // navigation.style.top = "30px";
        navigation.style.position = "relative";
        navigation.style.height = "auto";
        // document.querySelector(".nav__flex").style.marginTop = "-10px";
        // navigation.style.marginTop = "-20px";
        // document.querySelector(".nav__flex").style.marginBottom = "80px";
    }
    else{
        menu.setAttribute("src", "./assets/cross-icon.png");
        navigation.style.backgroundColor = "#CAD3BD";
        navigation.style.position = "fixed";
        navigation.style.height = "100%";
        navigation.style.top = "0px";
        navigation.style.overflowX = "hidden";
        navigation.style.zIndex = "5";
        navigation.style.width = "315px";
        // document.querySelector(".nav__flex").style.marginTop = "32px";
        navigation.style.marginTop = "32px";
    }
    
})