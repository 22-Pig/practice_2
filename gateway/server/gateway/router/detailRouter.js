// 拦截请求，分发任务
const express = require("express");
const detailCtrl = require("../controller/detailCtrl");
const router = express.Router();

router.post("/report", detailCtrl.report);

// router.get("/getLed", detailCtrl.getLed);
// router.get("/getFan", detailCtrl.getFan);
// router.get("/getMot", detailCtrl.getMot);
// router.get("/getWindow", detailCtrl.getWindow);
// router.get("/getDoor", detailCtrl.getDoor);
// router.get("/getSprinkler", detailCtrl.getSprinkler);
router.get('/temp/:id', detailCtrl.getTemp);
router.get('/humd/:id', detailCtrl.getHumd);
router.get('/smoke/:id', detailCtrl.getSmoke);
router.get('/NH3/:id', detailCtrl.getNH3);
router.get('/H2S/:id', detailCtrl.getH2S);




/* router.post("/toggleLed_101", detailCtrl.toggleLed_101);
router.post("/toggleLed_102", detailCtrl.toggleLed_102);
router.post("/toggleLed_001", detailCtrl.toggleLed_001);
router.post("/toggleLed_002", detailCtrl.toggleLed_002);

router.post("/toggleFAN_101", detailCtrl.toggleFAN_101);
router.post("/toggleFAN_001", detailCtrl.toggleFAN_001);

router.post("/toggleWINDOW_101", detailCtrl.toggleWINDOW_101);
router.post("/toggleWINDOW_001", detailCtrl.toggleWINDOW_001);

router.post("/toggleDOOR_101", detailCtrl.toggleDOOR_101);
router.post("/toggleDOOR_102", detailCtrl.toggleDOOR_102);
router.post("/toggleDOOR_001", detailCtrl.toggleDOOR_001);
router.post("/toggleDOOR_002", detailCtrl.toggleDOOR_002);

router.post("/toggleSPRINKLER_101", detailCtrl.toggleSPRINKLER_101);
router.post("/toggleSPRINKLER_102", detailCtrl.toggleSPRINKLER_102);
router.post("/toggleSPRINKLER_103", detailCtrl.toggleSPRINKLER_103);
router.post("/toggleSPRINKLER_104", detailCtrl.toggleSPRINKLER_104);
router.post("/toggleSPRINKLER_001", detailCtrl.toggleSPRINKLER_001);
router.post("/toggleSPRINKLER_002", detailCtrl.toggleSPRINKLER_002); */

module.exports = router;