var express = require('express');
var router = express.Router();
const stepController = require("../../../controllers/api/v1/step");

router.get("/", stepController.getSteps);
router.put("/stappenplan", stepController.putstep);
router.put("/reset", stepController.putreset);
router.put("/stap3", stepController.putstep3);

module.exports = router;