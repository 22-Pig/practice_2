const express = require("express");
const screenCtrl = require("../controller/screenCtrl");
const router = express.Router();

router.get("/getInfos", screenCtrl.getInfos);

router.post("/getStatus", screenCtrl.getStatus);

router.post("/toggle", screenCtrl.toggle);

module.exports = router;