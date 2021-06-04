let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
    else{
        fetch("/steps/stappenplan", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokencheck}`
            }   
        }).then(response =>{
            console.log("done4");
            return response.json();
        }).then(json =>{
            if(json.status === "Success"){
                console.log("ok");  
                console.log(json);
            }
            if(json.status === "Error"){
                console.log("error");
            }
        });
    }
});

let btn5 = document.querySelector(".btn");
btn5.addEventListener("click", () =>{
    alert("let's go");
    window.location.replace("stappenplan-5.html");
});