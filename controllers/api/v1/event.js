const Event = require('../../../models/Event');
const Workshop = require("../../../models/Workshop");
const mongoose = require("mongoose");

//Get all events
function getAll(req, res){
  console.log("get request goes through");

    Event.find({"datum":{$gte: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any events"
        })
      }
      if (!err){
         res.json({
           status: "success",
           message: "GET all events",
           data: doc
        })
      }     
    })
}

//Get all workshops 
function getWorkshops(req, res){
console.log("get request workshop goes through");

    Workshop.find({"datum":{$gte: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any workshops"
        })
      }
      if (!err){
         res.json({
           status: "success",
           message: "GET all workshops",
           data: doc
        })
      }     
    })
  }

  //Get all details from specific events => herbekijken hoe dit doen. (voor invullen pagina met info vanuit click => in js met fetch maar wat bij nieuwe events die op de pagina terecht komen?)
  // function getId(req, res) {
  //   res.json({
  //     "status": "success",
  //     "message": "GET all events by id"
  //   }) 
  // }

  //Get afgelopen events
  function getDone(req, res){
    console.log("get request done goes through");

    Event.find({"date":{$lt: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any done events"
        })
      }
      if (!err){
         res.json({
           status: "success",
           message: "GET all done events",
           data: doc
        })
      }     
    })
  }

  //Get afgelopen workshops
  function getDonework(req, res){
    console.log("get request donework goes through");

    Workshop.find({"date":{$lt: Date.now()}}, (err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not find any done workshops"
        })
      }
      if (!err){
         res.json({
           status: "success",
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
    
    console.log(event);

    event.save((err, doc) =>{
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

    console.log(workshop);

    workshop.save((err, doc) =>{
      if(err){
        res.json({
          status: "Error",
          message: "Could not post a new workshop"
        })
      }

      if(!err){
        res.json({
        status: "success",
        message: "POST new workshop",
        data:{
          event: doc
        }
        })
      }
    })
  }

module.exports.getAll = getAll;
module.exports.getWorkshops = getWorkshops;
// module.exports.getId = getId;
module.exports.getDone = getDone;
module.exports.getDonework = getDonework;
module.exports.postevent = postevent;
module.exports.postworkshop = postworkshop;