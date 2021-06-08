let signup = document.querySelector(".button--submit").addEventListener("click", function(){ //button nog selector aanpassen
    let firstname = document.querySelector(".firstname").value;
    let lastname = document.querySelector(".lastname").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let emailrestriction = email.indexOf("@");

    let first = document.querySelector(".firstname");
    let last = document.querySelector(".lastname");
    let em = document.querySelector(".email");
    let pass = document.querySelector(".password");
    let errorname = "<p class='invalid'>Niet alle velden zijn correct ingevuld, gelieve deze te vervolledigen</p>";
    let erroremail = "<p class='invalid'>Het opgegeven e-mailadres kunnen we niet aanvaarden, gelieve opnieuw te proberen</p>";
    let errorem = "<p class='invalid'>Het opgegeven e-mailadres is incorrect, gelieve opnieuw te proberen</p>";
    let errorpass = "<p class='invalid'>Het opgegeven wachtwoord is incorrect, gelieve opnieuw te proberen</p>";

    if(firstname == ""){
        first.insertAdjacentHTML("beforebegin", errorname);
        first.classList.add("error");
    }
    else if(lastname == ""){
        document.querySelector(".invalid").remove();
        first.insertAdjacentHTML("beforebegin", errorname);
        first.classList.remove("error");
        last.classList.add("error");
    }
    else if(email == ""){
        document.querySelector(".invalid").remove();
        first.insertAdjacentHTML("beforebegin", errorem);
        last.classList.remove("error");
        em.classList.add("error");
    }
    else if(emailrestriction === -1){
        // console.log("Incorrect email");
        document.querySelector(".invalid").remove();
        first.insertAdjacentHTML("beforebegin", erroremail);
        em.classList.remove("error");
        em.classList.add("error");
    }
    else if(password == ""){
        document.querySelector(".invalid").remove();
        first.insertAdjacentHTML("beforebegin", errorpass);
        em.classList.remove("error");
        pass.classList.add("error");
    }    
    else{
        fetch("/users/mail", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            if(json.status === "Error"){
                alert("email alreadt exists!")
            }
            else{
                fetch("/users/signup", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "firstname": firstname,
                        "lastname": lastname,
                        "email": email,
                        "password": password
                    })
                }).then(result => {
                    return result.json();                    
                }).then(answer => {
                    if(answer.status === "Success"){
                        console.log("Signup complete!");
        
                        let token = answer.data.token;
                        localStorage.setItem("token", token);
                        window.location.assign("home.html");
                    }
                })
            }
        })       
    }
});

let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    window.location.assign("start.html");
});