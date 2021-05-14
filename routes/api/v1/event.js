var express = require('express');
var router = express.Router();
const eventController = require("../../../controllers/api/v1/event");

router.get("/", eventController.getAll);
router.get("/workshop", eventController.getWorkshops);
// router.get("/:id", eventController.getId);
router.get("/afgelopen-events", eventController.getDone);
router.post("/newevent", eventController.postevent);
router.post("/newworkshop", eventController.postworkshop);

module.exports = router;
