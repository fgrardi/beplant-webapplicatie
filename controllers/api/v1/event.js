const Event = require('../../../models/Event');
const Workshop = require("../../../models/Workshop");
// const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const User = require("../../../models/Users");
const atob = require("atob");

//find all inschrijvingen per user
function getinschrijving(req, res){
    let token = req.headers.authorization;
    let user = getUser(token);
    // console.log(user);
    let o = new ObjectId(user.uid);
    // console.log(o);

    User.findOne({"_id": o}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any inschrijvingen for this user"
        })
      }
      if (!err){
        res.json({
          status: "Success",
          message: "GET all inschrijvingen user",
          data: doc
        })
      }     
    });
}

//Get all events
function getAll(req, res){
  // console.log("get request goes through");

    Event.find({"datum":{$gte: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any events"
        })
      }
      if (!err){
         res.json({
           status: "Success",
           message: "GET all events",
           data: doc
        })
      }     
    }).sort({"datum": 1});
}

//Get all workshops 
function getWorkshops(req, res){
// console.log("get request workshop goes through");

    Workshop.find({"datum":{$gte: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any workshops"
        })
      }
      if (!err){
         res.json({
           status: "Success",
           message: "GET all workshops",
           data: doc
        })
      }     
    }).sort({"datum": 1});
  }

//get all events count
function geteventcount(req, res){
  Event.countDocuments({"datum":{$gte: Date.now()}}, (err, doc) =>{
    if(err){
      res.json({
        status: "Error",
        message: "Could not find any events to count"
      })
    }
    if (!err){
       res.json({
         status: "Success",
         message: "GET all events count",
         data: doc
      })
    }     
  });
}

//get all workshops count
function getworkshopcount(req, res){
  Workshop.countDocuments({"datum":{$gte: Date.now()}}, (err, doc) =>{
    if(err){
      res.json({
        status: "Error",
        message: "Could not find any workshops to count"
      })
    }
    if (!err){
       res.json({
         status: "Success",
         message: "GET all workshops count",
         data: doc
      })
    }     
  })
}

  //Get all details from specific events => herbekijken hoe dit doen. (voor invullen pagina met info vanuit click => in js met fetch maar wat bij nieuwe events die op de pagina terecht komen?)
  function getId(req, res) {
    let id  = req.params.id.split("=")[1];
    let o_id = new ObjectId(id);
    // let token = req.headers.authorization;
    Event.findOne({"_id": o_id}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any specific events"
        })
      }
      if(!err){
        res.json({
          status: "Success",
          message: `GET all events by ${id}`,
          data: doc
        }) 
      }
    })
  }

  //Get workshops by ID
  function getWorkbyId(req, res) {
    let id  = req.params.id.split("=")[1];
    let o_id = new ObjectId(id);
    // let token = req.headers.authorization;
    Workshop.findOne({"_id": o_id}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any specific workshops"
        })
      }
      if(!err){
        res.json({
          status: "Success",
          message: `GET all workshops by ${id}`,
          data: doc
        }) 
      }
    })
  }
  //Get afgelopen events
  function getDone(req, res){
    // console.log("get request done goes through");

    Event.find({"date":{$lt: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any done events"
        })
      }
      if (!err){
         res.json({
           status: "Success",
           message: "GET all done events",
           data: doc
        })
      }     
    })
  }

  //Get afgelopen workshops
  function getDonework(req, res){
    // console.log("get request donework goes through");

    Workshop.find({"date":{$lt: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any done workshops"
        })
      }
      if (!err){
         res.json({
           status: "Success",
           message: "GET all done workshops",
           data: doc
        })
      }     
    })
  }
  
  //post new events
  function postevent(req, res) {
    let event = new Event();
    
    // event.onderwerp = req.body.onderwerp;
    event.locatie = req.body.locatie;
    event.datum = req.body.datum;
    event.organisator = req.body.organisator; 
    event.deelnemers = req.body.deelnemers;
    event.beschrijving = req.body.beschrijving;
    event.titel = req.body.titel;
    event.inschrijvingen = 0;
    
    // console.log(event);

    event.save((err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not post a new event"
        })
      }

      if(!err){
        res.json({
        status: "Success",
        message: "POST new event",
        data:{
          event: doc
        }
        })
      }
    })
  }
  
  //post new workshops
  function postworkshop(req, res) {
    let workshop = new Workshop();
    
    workshop.titel = req.body.titel;
    workshop.locatie = req.body.locatie;
    workshop.datum = req.body.datum;
    workshop.organisator = req.body.organisator; 
    workshop.deelnemers = req.body.deelnemers;
    workshop.beschrijving = req.body.beschrijving;
    workshop.video = req.body.video;
    workshop.inschrijvingen = 0;

    // console.log(workshop);

    workshop.save((err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not post a new workshop"
        })
      }

      if(!err){
        res.json({
        status: "Success",
        message: "POST new workshop",
        data:{
          event: doc
        }
        })
      }
    })
  }

//update inschrijvingen events
  function putevent(req,res){
    // let token = req.headers.authorization;
    // console.log(token);
    // let event = getEvent(token);
    // console.log(event.uid);
    // console.log(req.params.id);
    // let eventid = req.params.id;
    let id  = req.params.id.split("=")[1];
    // console.log(id);
    let o_id = new ObjectId(id);
    // console.log(o_id);

  Event.findOne({"_id": o_id},{"inschrijvingen": 1}, (err, doc) => {
    if(err){
      res.json({
          status: "Error",
          message: "Could not increase inschrijvingen"
      })
      console.log(err);
    }
    if(!err){
      console.log(doc);

      Event.updateOne({"_id":doc._id}, {$inc: {"inschrijvingen": 1}}, (err, doc) =>{
        if(err){
            res.json({
                status: "Error",
                message: "Could not increase with 1 inschrijving"
            })
            console.log(err);
        }
        if(!err){
            res.json({
                status: "Success",
                message: "Updated inschrijvingen"
            })
        }
      });
    }
  });
}

//update inschrijvingen workshops
function putworkshop(req, res){
// let token = req.headers.authorization;
    // console.log(token);
    // let event = getEvent(token);
    // console.log(event.uid);
    // console.log(req.params.id);
    // let eventid = req.params.id;
    let id  = req.params.id.split("=")[1];
    // console.log(id);
    let o_id = new ObjectId(id);
    // console.log(o_id);

  Workshop.findOne({"_id": o_id},{"inschrijvingen": 1}, (err, doc) => {
    if(err){
      res.json({
          status: "Error",
          message: "Could not increase inschrijvingen"
      })
      console.log(err);
    }
    if(!err){
      console.log(doc);

      Workshop.updateOne({"_id":doc._id}, {$inc: {"inschrijvingen": 1}}, (err, doc) =>{
        if(err){
            res.json({
                status: "Error",
                message: "Could not increase with 1 inschrijving"
            })
            console.log(err);
        }
        if(!err){
            res.json({
                status: "Success",
                message: "Updated inschrijvingen"
            })
        }
      });
    }
  });
}

//update inschrijvingen per user
function putUser(req, res){
  let token = req.headers.authorization;
  let user = getUser(token);
  // console.log(user);
  // console.log(user.uid);
    // let id  = req.params.id.split("=")[1];
    // console.log(id);
    let o = new ObjectId(user.uid);
    // console.log(o);
  User.findOne({"_id": o},{"inschrijvingen": 1}, (err, doc) => {
    if(err){
      res.json({
          status: "Error",
          message: "Could not increase inschrijvingen"
      })
      console.log(err);
    }
    if(!err){
      console.log(doc + " doc");

      User.updateOne({"_id":doc._id}, {$inc: {"inschrijvingen": 1}}, (err, doc) =>{
        if(err){
            res.json({
                status: "Error",
                message: "Could not increase with 1 inschrijving"
            })
            console.log(err);
        }
        if(!err){
            res.json({
                status: "Success",
                message: "Updated inschrijvingen"
            })
        }
      });
    }
  });
}

//getting user from token
function getUser(token){
  const tokenParts = token.split('.');
  const encodedPayload = tokenParts[1];
  const rawPayload = atob(encodedPayload);// atob zet versleutelde data om te zetten naar leesbare tekst
  const user = JSON.parse(rawPayload); // user uit token halen zonder dat je code nodig hebt.
  return user;
}

module.exports.getAll = getAll;
module.exports.getinschrijving = getinschrijving;
module.exports.getWorkshops = getWorkshops;
module.exports.geteventcount = geteventcount;
module.exports.getworkshopcount = getworkshopcount;
module.exports.getId = getId;
module.exports.getWorkbyId = getWorkbyId;
module.exports.getDone = getDone;
module.exports.getDonework = getDonework;
module.exports.postevent = postevent;
module.exports.postworkshop = postworkshop;
module.exports.putevent = putevent;
module.exports.putworkshop = putworkshop;
module.exports.putUser = putUser;