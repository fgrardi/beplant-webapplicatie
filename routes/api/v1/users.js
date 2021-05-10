var express = require('express');
var router = express.Router();
const authenticateController = require("../../../controllers/api/v1/authenticate");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", authenticateController.login);
router.get("/signup", authenticateController.signup);

router.post("/signup", (req, res, next) => {
  //signup
  //username uit request halen
  //password uit request halen
  //email uit request halen
  //bcrypt encrypt
  //databank
});

module.exports = router;
