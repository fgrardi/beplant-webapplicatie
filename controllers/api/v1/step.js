const User = require("../../../models/Users");
const ObjectId = require("mongodb").ObjectId;
const atob = require("atob");

function getSteps(req, res){
    let token = req.headers.authorization;
    let user = getUser(token);
    // console.log(user);
    User.find({}, {"step": 1}, (err, doc) =>{
        if(err){
            res.json({
                status: "Error",
                message: "Could not find step 0"
            })
        }

        if(!err){
            res.json({
                status: "Success",
                message: "Getting all steps",
                data: doc,
                user: user
            })
        }
    })
}

function putstep(req, res){
    // let step;
    let token = req.headers.authorization;
    let user = getUser(token);
    console.log(user.uid);
    // console.log(req.params.id);
    // let reqId = req.params.id.split("=")[1];
    // console.log(reqId);
    User.findOne({"_id": user.uid}, {"step": 1}, (err, doc) => { //, "step": 0
        if(err){
            res.json({
                status: "Error",
                message: "Could not update step 0"
            })
            console.log(err);
        }

        if(!err){
            console.log(doc);

            User.updateOne({"_id":doc._id}, {$inc: {"step": 1}}, (err, doc) =>{
                if(err){
                    res.json({
                        status: "Error",
                        message: "Could not increase step"
                    })
                    console.log(err);
                }
                if(!err){
                    res.json({
                        status: "Success",
                        message: "Updated step"
                    })
                }
            });
         
        }    
    });
}

function putreset(req, res){
    // let step;
    let token = req.headers.authorization;
    let user = getUser(token);
    // console.log(user.uid);
    // let reqId = req.params.id.split("=")[1];
    // console.log(req.params.id);
    // let reqId = user.uid.split("=")[1];
    // console.log(reqId);
    let o = new ObjectId(user.uid);
    console.log(o);
    User.findOne({"_id": o}, {"step": 1}, (err, doc) => { //, "step": 0
        if(err){
            res.json({
                status: "Error",
                message: "Could not update step 0"
            })
            console.log(err);
        }

        if(!err){
            console.log(doc);
            User.updateOne({"_id":doc._id}, {"step": 0}, (err, doc) =>{
                if(err){
                    res.json({
                        status: "Error",
                        message: "Could not increase step"
                    })
                    console.log(err);
                }
                if(!err){
                    res.json({
                        status: "Success",
                        message: "Updated step",
                        data: doc
                    })
                }
            });
         
        }    
    });
}

function getUser(token){
    const tokenParts = token.split('.');
    const encodedPayload = tokenParts[1];
    const rawPayload = atob(encodedPayload);// atob zet versleutelde data om te zetten naar leesbare tekst
    const user = JSON.parse(rawPayload); // user uit token halen zonder dat je code nodig hebt.
    return user;
}
module.exports.getSteps = getSteps;
module.exports.putreset = putreset;
module.exports.putstep = putstep;