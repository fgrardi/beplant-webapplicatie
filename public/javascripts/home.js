let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
    else{
        //primus live feature /get frontend
        // alert("hello beautiful!");
        fetch("http://localhost:3000/events", {
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
                console.log(json.data);

                json.data.forEach(function(e){
                    console.log(e.datum);
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
                        let index = [... eventsdetail.childNodes].indexOf(e.target.parentElement.parentElement) -3; // /3 -1
                        console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            console.log(eventData);
                            console.log(eventData[index]);
                            console.log(eventData[1]._id);
                            localStorage.setItem("eventID", JSON.stringify(eventData[index]._id));
                            window.location.replace("event_detail.html");
                            console.log(ev);
                        }
                    });
            }
        })

        fetch("http://localhost:3000/events/workshop", {
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
                console.log(json.data);

                json.data.forEach(function(e){
                    console.log(e.datum);
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
                        console.log(index);
                        if(index < 0){index = null}
                        if(index != null){
                            console.log(workshopData);
                            console.log(workshopData[index]);
                            console.log(workshopData[1]._id);
                            localStorage.setItem("workshopID", JSON.stringify(workshopData[index]._id));
                            window.location.replace("workshop_detail.html");
                            console.log(workshopData);
                        }
                    });
                });
            }
        })
        
        fetch("http://localhost:3000/steps/", {
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
                    }   
                i++;
                })
                    
            }
        });

    }
});

function splitdate(date){
    let datum = date.split("T")[0];
    console.log(datum);
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
    console.log("klik ok");
    fetch("/steps/reset", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        },
        body: JSON.stringify({step: 0})      
    }).then(response =>{
        console.log("done4");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log("ok");  
            // console.log(json);
            window.location.replace("stappenplan-1.html");
        }
    });
});

