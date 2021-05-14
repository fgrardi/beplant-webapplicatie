const Event = require('../../../models/Event');
const Workshop = require("../../../models/Workshop");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Get all events & workshops
function getAll(req, res){
  res.json({
    "status": "success",
    "message": "GET all events & workshops"
  })
}

  //Get all details from specific events
  function getId(req, res) {
    res.json({
      "status": "success",
      "message": "GET all events by id"
    }) 
  }
  
  //post new events
  function postevent(req, res) {
    let event = new Event();
    
    event.onderwerp = req.body.onderwerp;
    event.locatie = req.body.locatie;
    event.date = req.body.date;
    event.organisator = req.body.organisator; 
    event.deelnemers = req.body.deelnemers;
    event.beschrijving = req.body.beschrijving;

    console.log(event);

    event.save((err, doc) =>{
      
      let token = jwt.sign({
        uid: doc._id
      }, "Gardensecret");

      if(err){
        res.json({
          status: "Error",
          message: "Could not post a new event"
        })
      }

      if(!err){
        res.json({
        status: "success",
        message: "POST new event",
        data:{
          token: token,
          event: doc
        }
        })
      }
    })
    
  }
  
  //post new workshops
  function postworkshop(req, res) {
    res.json({
      "status": "success",
      "message": "POST new workshop"
    })
  }

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.postevent = postevent;
module.exports.postworkshop = postworkshop;