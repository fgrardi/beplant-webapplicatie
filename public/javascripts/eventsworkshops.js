window.addEventListener("load", function(){
    let tokencheck = localStorage.getItem("token");
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
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
            if(json.status === "Success"){
                console.log(json.data);
                
                json.data.forEach(function(e){
                    console.log(e.datum);
                    let date = splitdate(e.datum);
                    console.log("ok");

                    let titel = e.titel;

                    let events = `<div><img src="" alt=""></div>
                    <div><p>${date[2] + " " + date[1]}</p></div>
                    <div><h3>${titel}</h3>
                    <p>Evenement</p>
                    <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    </div></div>`;

                    document.querySelector(".events").innerHTML += events;
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
            if(json.status === "Success"){
                console.log(json.data);
                
                json.data.forEach(function(e){
                    console.log(e.datum);
                    let date = splitdate(e.datum);
                    let titel = e.titel;

                    let workshops = `<div><img src="" alt=""></div>
                    <div><p>${date[2] + " " + date[1]}</p></div>
                    <div><h3>${titel}</h3>
                    <p>Workshop</p>
                    <p>${date[2] + " " + date[1] + " " + date[0]}</p>
                    </div></div>`;

                    document.querySelector(".workshops").innerHTML += workshops;
                });
            }
        })

    }
});

function splitdate(date){
    let datum = date.split("T")[0];
    console.log(datum);
    datum = datum.split("-");
    if(!datum[0]){datum[0] = " ";}
    if(!datum[1]){datum[1] = " ";}
    if(!datum[2]){datum[2] = " ";}
    console.log(" 0 " + datum[0]);
    console.log( " 1 " + datum[1]);
    console.log( " 2 " + datum[2]);

    return datum;
}
