const express = require("express");
const infoCtrl = require("../controller/infoCtrl");
const router = express.Router();

router.get("/infos", infoCtrl.info);
router.get("/getMot", infoCtrl.getMot);

router.post("/toggle", infoCtrl.toggle);

router.get("/getLed", infoCtrl.getLed);
module.exports = router;