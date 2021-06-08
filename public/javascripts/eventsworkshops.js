let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
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

                    let events = 
                    `<div class="event">
                    <div>
                    <img src="./assets/carrot-green.png" alt="wortel">
                    <img src="./assets/mushroom-green.png" alt="champignons">
                    </div>
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${month}</span></p>
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
                        let index = [... eventsdetail.childNodes].indexOf(e.target.parentElement.parentElement) -19; // /3 -1 -3
                        // console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            // console.log(eventData);
                            localStorage.setItem("eventID", JSON.stringify(eventData[index]._id));
                            window.location.assign("event_detail.html");
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

                    let workshops = 
                    `<div class="event">
                    <div>
                    <img src="./assets/carrot-green.png" alt="wortel">
                    <img src="./assets/mushroom-green.png" alt="champignons">
                    </div>
                    <div class="event--date">
                        <p class="event--date--number">${date[2]} <br><span class="event--date--month">${month}</span></p>
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
                        let index = [... workshopdetail.childNodes].indexOf(e.target.parentElement.parentElement)-3;
                        // console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            // console.log(workshopData);
                            localStorage.setItem("workshopID", JSON.stringify(workshopData[index]._id));
                            window.location.assign("workshop_detail.html");
                            // console.log(workshopData);
                        }
                    });
                });
            }
        })

        fetch("/events/allinschrijvingen", {
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
                // console.log(json);
                document.querySelector(".inschrijvingen").innerHTML = json.data.inschrijvingen;
            }
            if(json.status === "Error"){
                console.log(error);
            }
        })

        fetch("/events/allevents", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("done4");
            return response.json();
        }).then(json =>{
            if(json.status === "Success"){
                // console.log(json);
                document.querySelector(".eventcount").innerHTML = json.data;
            }
            if(json.status === "Error"){
                console.log(error);
            }
        })

        fetch("/events/allworkshops", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }
        }).then(response =>{
            console.log("done4");
            return response.json();
        }).then(json =>{
            if(json.status === "Success"){
                // console.log(json);
                document.querySelector(".workshopcount").innerHTML = json.data;
            }
            if(json.status === "Error"){
                console.log(error);
            }
        })

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
