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
            },
            body: JSON.stringify({step: 1})      
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

let diy = document.querySelector(".stap3a");
diy.addEventListener("click", ()=>{
    console.log("jup");
    fetch("/steps/stappenplan", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        },
        body: JSON.stringify({step: 2})      
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
});

let buy = document.querySelector(".stap3b");
buy.addEventListener("click", ()=>{
    console.log("jup");
    fetch("/steps/stappenplan", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${tokencheck}`
        },
        body: JSON.stringify({step: 2})      
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
});