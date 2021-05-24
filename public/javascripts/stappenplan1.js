let tokencheck = localStorage.getItem("token");
window.addEventListener("load", function(){
    if(!tokencheck){
        alert("wrong page");
        window.location.replace("login.html");
    }
});

let choice = document.querySelector(".stap1");
choice.addEventListener("click", ()=>{
    console.log("jup");
    fetch("/steps/stappenplan", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        },
        body: JSON.stringify({step: 0})      
    }).then(response =>{
        console.log("done4");
        return response.json();
    }).then(json =>{
        if(json.status === "Success"){
            console.log("ok");  
            console.log(json);
            window.location.replace("stappenplan-2.html");
        }
        if(json.status === "Error"){
            console.log("error");
        }
    });
});