var express = require('express');
var router = express.Router();
const stepController = require("../../../controllers/api/v1/step");

router.get("/", stepController.getSteps);
router.post("/stappenplan", stepController.poststep);
router.put("/stappenplan", stepController.putstep);

module.exports = router;