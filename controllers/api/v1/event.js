const Event = require('../../../models/Event');
const Workshop = require("../../../models/Workshop");

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
    res.json({
      "status": "success",
      "message": "POST new event"
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