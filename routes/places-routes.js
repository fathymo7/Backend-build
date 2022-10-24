const express = require("express");

const placesControllers = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/", placesControllers.updatePlace);

router.delete("/", placesControllers.deletePlace);

module.exports = router;
