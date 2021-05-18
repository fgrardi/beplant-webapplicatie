window.addEventListener("load", function(){
    let tokencheck = localStorage.getItem("token");
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
    else{

        let newevent = document.querySelector(".button--submit").addEventListener("click", () => {
            let titel = document.querySelector(".titel").value;
            let locatie = document.querySelector(".locatie").value;
            let date = document.querySelector(".datum").value;
            let tijd = document.querySelector(".tijd").value;
            let organisator = document.querySelector(".organisator").value;
            let deelnemers = document.querySelector(".deelnemers").value;
            let beschrijving = document.querySelector(".beschrijving").value;
            console.log(date, tijd);
            let isodate = new Date(date +" "+ tijd);
            console.log(isodate);
            let datum = isodate.toJSON();
            console.log(datum);

            fetch("http://localhost:3000/events/newevent", {
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
                if(json.status === "success"){
                    document.querySelector(".eventmaken").innerHTML = `<h1>Nieuw event aangemaakt</h1>`
                }
            })

        });

    }
});