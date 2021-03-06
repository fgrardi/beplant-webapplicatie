var express = require('express');
var router = express.Router();
const eventController = require("../../../controllers/api/v1/event");

router.get("/", eventController.getAll);
router.get("/allinschrijvingen", eventController.getinschrijving);
router.get("/workshop", eventController.getWorkshops);
router.get("/allevents", eventController.geteventcount);
router.get("/allworkshops", eventController.getworkshopcount);
router.get("/:id", eventController.getId);
router.get("/workshop/:id", eventController.getWorkbyId);
router.get("/afgelopen-events", eventController.getDone);
router.get("/afgelopen-workshops", eventController.getDonework);
router.post("/newevent", eventController.postevent);
router.post("/newworkshop", eventController.postworkshop);
router.put("/eventinschrijven/:id", eventController.putevent);
router.put("/workshopinschrijven/:id", eventController.putworkshop);
router.put("/inschrijvingen", eventController.putUser);

module.exports = router;
