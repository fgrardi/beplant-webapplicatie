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
                    console.log("ok");

                    let titel = e.titel;

                    // let events = `<div>
                    //<div>
                    //  <img src="" alt="">
                    //</div>
                    // <div>
                    //  <p>${date[2] + " " + date[1]}</p>
                    //</div>
                    //<div>
                    //  <h3>${titel}</h3>
                    //  <p>Evenement</p>
                    //  <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    //</div>
                    //</div>`;

                    //max 5lett April - Sept

                    // switch{
                    //     case: 
                    // }

                    let events =`<div>
                    <div>
                    <img src="./assets/carrot-green.png" alt="wortel">
                    <img src="./assets/mushroom-green.png" alt="champignons">
                    </div>
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${date[1]}</span></p>
                    </div>
                    <div class="event--info">
                        <h3 class="event--info--title">${titel}</h3>
                        <p class="event--info--text">Evenement</p>
                        <p class="event--info--time">${date[2] + " " + date[1] + " " + date[0]}</p>
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
                    let titel = e.titel;

                    // let workshops = `<div>
                    // <div>
                    //     <img src="" alt="">
                    // </div>
                    // <div>
                    //     <p>${date[2] + " " + date[1]}</p>
                    // </div>
                    // <div>
                    //     <h3>${titel}</h3>
                    //     <p>Workshop</p>
                    //     <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    // </div>
                    // </div>`;

                    let workshops = `<div>
                    <div>
                    <img src="./assets/carrot-green.png" alt="wortel">
                    <img src="./assets/mushroom-green.png" alt="champignons">
                    </div>
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${date[1]}</span></p>
                    </div>
                    <div class="event--info">
                        <h3 class="event--info--title">${titel}</h3>
                        <p class="event--info--text">Workshop</p>
                        <p class="event--info--time">${date[2] + " " + date[1] + " " + date[0]}</p>
                    </div>
                    </div>`;

                    document.querySelector(".workshops").innerHTML += workshops;

                   
                    let workshopData = json.data;
                    let workshopdetail = document.querySelector(".workshops");
                    workshopdetail.addEventListener("click", (e)=>{
                        let index = [... workshopdetail.childNodes].indexOf(e.target.parentElement.parentElement)-5; //-3
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