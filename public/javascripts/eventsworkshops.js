let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    
    if(!tokencheck){
        window.location.replace("login.html");
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

                    let events = `<div><div><img src="" alt=""></div>
                    <div><p>${date[2] + " " + date[1]}</p></div>
                    <div><h3>${titel}</h3>
                    <p>Evenement</p>
                    <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    </div></div>`;

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
                            window.location.replace("event_detail.html");
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

                    let workshops = `<div><div><img src="" alt=""></div>
                    <div><p>${date[2] + " " + date[1]}</p></div>
                    <div><h3>${titel}</h3>
                    <p>Workshop</p>
                    <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    </div></div>`;

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
                            window.location.replace("workshop_detail.html");
                            // console.log(workshopData);
                        }
                    });
                });
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
