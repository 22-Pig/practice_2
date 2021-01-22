// 拦截请求，分发任务
const express = require("express");
const reportCtrl = require("../controller/reportCtrl");
const router = express.Router();

router.post("/A/01/reportLed", reportCtrl.reportLed);

router.post("/A/01/reportFan", reportCtrl.reportFan);

router.post("/A/01/reportMot", reportCtrl.reportMot);

router.post("/A/01/reportDoor", reportCtrl.reportDoor);

router.post("/A/01/reportWindow", reportCtrl.reportWindow);

router.put('/A/01/reportTemp/:tempId/:temp/', reportCtrl.reportTemp);

router.put('/A/01/reportHumd/:humdId/:humd/', reportCtrl.reportHumd);

router.put('/A/01/reportSmoke/:smokeId/:smoke/', reportCtrl.reportSmoke);

module.exports = router;