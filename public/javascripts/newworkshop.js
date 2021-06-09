//token check bij window load
window.addEventListener("load", function(){
    let tokencheck = localStorage.getItem("token");
    if(!tokencheck){
        window.location.assign("login.html");
    }
    else{
        //klikevent for creating new workshop
        let newworkshop = document.querySelector(".button--submit").addEventListener("click", () => {
            let titel = document.querySelector(".titel").value;
            let locatie = document.querySelector(".locatie").value;
            let date = document.querySelector(".datum").value;
            let tijd = document.querySelector(".tijd").value;
            let organisator = document.querySelector(".organisator").value;
            let deelnemers = document.querySelector(".deelnemers").value;
            let beschrijving = document.querySelector(".beschrijving").value;
            let video = document.querySelector(".soortworkshop").value;

            console.log(date, tijd);
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
            let vid = document.querySelector(".soortworkshop");
            let error = "<p class='invalid'>Niet al de velden zijn correct ingevuld, gelieve deze te vervolledigen</p>";

            //errormessages
            if(titel == ""){
                onderwerp.insertAdjacentHTML("beforebegin", error);
                onderwerp.classList.add("error");
            }
            else if(locatie == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                onderwerp.classList.remove("error");
                location.classList.add("error");
            }
            else if(date == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                location.classList.remove("error");
                dat.classList.add("error");
            }
            else if(tijd == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                dat.classList.remove("error");
                tim.classList.add("error");
            }
            else if(organisator == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                tim.classList.remove("error");
                org.classList.add("error");
            }
            else if(deelnemers == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                org.classList.remove("error");
                deel.classList.add("error");
            }
            else if(video == ""){
                document.querySelector(".invalid").remove();
                onderwerp.insertAdjacentHTML("beforebegin", error);
                deel.classList.remove("error");
                vid.classList.add("error");
            }
            else{
                //fetch post new workshop in database
                fetch("/events/newworkshop", {
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
                    "beschrijving": beschrijving,
                    "video": video
                })
            }).then(response => {
                console.log("ok");
                return response.json();                
            }).then(json => {
                if(json.status === "Success"){
                    document.querySelector(".workshopmaken").innerHTML = `<h1>Nieuwe workshop aangemaakt</h1>`
                }
            })
            }
        });

    }
});