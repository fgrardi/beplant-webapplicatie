//klik event for login 
let login = document.querySelector(".submitBtn").addEventListener("click", function(){ 
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let em = document.querySelector(".email");
    let pass = document.querySelector(".password");
    let errorem = "<p class='invalid'>Het opgegeven e-mailadres is incorrect, gelieve opnieuw te proberen</p>";
    let errorpass = "<p class='invalid'>Het opgegeven wachtwoord is incorrect, gelieve opnieuw te proberen</p>";

    let err = document.querySelector(".form");

    //errormessages
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
        //fetch post user login (check if user exists)
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
                
                //set token in localstorage
                let token = json.data.token;
                localStorage.setItem("token", token);
                window.location.assign("home.html");
            }
        })
    }
    
});

//klikevent to signup
let signup = document.querySelector(".signup").addEventListener("click", function(){ 
    console.log("to signup");
})

//klikevent to start.html
let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    window.location.assign("start.html");
});