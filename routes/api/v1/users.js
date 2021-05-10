var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", (req, res) => {
  res.json({
      "status": "success",
      "user": "Sarah"
  })
});

router.get("/signup", (req, res) => {
  res.json({
      "status": "success",
      "user": "Fien"
  });
});


module.exports = router;
