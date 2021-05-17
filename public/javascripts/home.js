window.addEventListener("load", function(){
    let tokencheck = localStorage.getItem("token");
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
            if(json.status === "success"){
                console.log(json.data);
                
                json.data.forEach(function(e){
                    let date = splitdate(e.date);
                    console.log("ok");
                    // console.log(date.toUTCString());
                    // let datum = date.split("T");
                    // let dat = date.split("-");

                    // console.log(date);
                    // console.log(datum);

                    let titel = e.titel;

                    let events = `<div><img src="" alt=""></div>
                    <div><p>${date[2] + " " + date[1]}</p></div>
                    <div><h3>${titel}</h3>
                    <p>Evenement</p>
                    <p>${date[2] + " " + date[1]}</p>
                    </div></div>`;

                    document.querySelector(".events").innerHTML += events;
                });
            }
        })

    }
});

function splitdate(date){
    let datum = date.split("T")[0];
    datum = datum.split("-");
    if(!datum[0]){datum[0] = " ";}
    if(!datum[1]){datum[1] = " ";}
    if(!datum[2]){datum[2] = " ";}
    console.log(" 0 " + datum[0]);
    console.log( " 1 " + datum[1]);
    console.log( " 2 " + datum[2]);

    return datum;
}
