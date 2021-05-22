let signup = document.querySelector(".button--submit").addEventListener("click", function(){ //button nog selector aanpassen
    let firstname = document.querySelector(".firstname").value;
    let lastname = document.querySelector(".lastname").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let emailrestriction = email.indexOf("@");

    if(emailrestriction === -1){
        console.log("Incorrect email");
    }
    else{
        fetch("http://localhost:3000/users/mail", {
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
                fetch("http://localhost:3000/users/signup", {
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
                        window.location.replace("home.html");
                    }
                })
            }
        })       
    }
});