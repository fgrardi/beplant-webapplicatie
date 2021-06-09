let login = document.querySelector(".submitBtn").addEventListener("click", function(){ 
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let em = document.querySelector(".email");
    let pass = document.querySelector(".password");
    let errorem = "<p class='invalid'>Het opgegeven e-mailadres is incorrect, gelieve opnieuw te proberen</p>";
    let errorpass = "<p class='invalid'>Het opgegeven wachtwoord is incorrect, gelieve opnieuw te proberen</p>";

    let err = document.querySelector(".form");

    if(email == ""){
        if(document.querySelector(".invalid")){
            em.classList.add("error");
        }
        else{
            em.insertAdjacentHTML("beforebegin", errorem); 
            em.classList.add("error");  
        }
    }
    else if(password == ""){
        document.querySelector(".invalid").remove();
        em.insertAdjacentHTML("beforebegin", errorpass);
        em.classList.remove("error");
        pass.classList.add("error");
    }
    else{
            fetch("/users/login", {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            if(json.status === "Success"){
                console.log("Login complete!");
                
                let token = json.data.token;
                localStorage.setItem("token", token);
                window.location.assign("home.html");
            }
        })
    }
    
});

let signup = document.querySelector(".signup").addEventListener("click", function(){ 
    console.log("to signup");
})

let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    // alert("loading screen here")
    window.location.assign("start.html");
});