var express = require('express');
var router = express.Router();

//Get all events & workshops
router.get('/', function(req, res) {
  res.json({
    "status": "success",
    "message": "GET all events & workshops"
  })
});
//Get all details from specific events
router.get('/:id', function(req, res) {
  res.json({
    "status": "success",
    "message": "GET all events by id"
  })
});

//post new events
router.post('/newevent', function(req, res) {
  res.json({
    "status": "success",
    "message": "POST new event"
  })
});

//post new workshops
router.post('/newworkshop', function(req, res) {
  res.json({
    "status": "success",
    "message": "POST new workshop"
  })
});

module.exports = router;
