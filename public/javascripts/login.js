let login = document.querySelector(".submitBtn").addEventListener("click", function(){ 
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

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
            window.location.replace("home.html");
        }
    })
});

let signup = document.querySelector(".signup").addEventListener("click", function(){ 
    console.log("to signup");
})

let back = document.querySelector(".back");
back.addEventListener("click", () =>{
    // alert("loading screen here")
    window.location.replace("start.html");
});