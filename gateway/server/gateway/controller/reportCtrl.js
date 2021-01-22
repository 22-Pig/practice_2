/* const detailDao = require("../dao/detailDao");
const led = require("../service/led");
const fan = require("../service/fan");
const mot = require("../service/mot");
const callTemp = require("../service/temp");
const callHumd = require("../service/humd");
const callSmoke = require("../service/smoke"); */

/* var ledstatus = null;
var fanstatus = null;
var motstatus = null;
var doorstatus = null;
var windowstatus = null; */
module.exports = {
    reportLed: function (req, resp) {
        var ledMessage = req.body.data;
        ledMessage = JSON.parse(ledMessage);
        var ledId = ledMessage.id;
        var ledStatus = ledMessage.value;
        console.log('ledId:' + ledId + ' ' + 'ledStatus:' + ledStatus);
        var data = {
            ledId: ledId,
            success: true,
            ledStatus: ledStatus
        }
        resp.send(data);
    },
    reportMot: function (req, resp) {
        var motMessage = req.body.data;
        motMessage = JSON.parse(motMessage);
        var motId = motMessage.id;
        var motStatus = motMessage.value;
        console.log('motId:' + motId + ' ' + 'motStatus:' + motStatus);
        var data = {
            motId: motId,
            success: true,
            motStatus: motStatus
        }
        resp.send(data);
    },
    reportFan: function (req, resp) {
        var fanMessage = req.body.data;
        fanMessage = JSON.parse(fanMessage);
        var fanId = fanMessage.id;
        var fanStatus = fanMessage.value;
        console.log('fanId:' + fanId + ' ' + 'fanStatus:' + fanStatus);
        var data = {
            fanId: fanId,
            success: true,
            fanStatus: fanStatus
        }
        resp.send(data);
    },
    reportDoor: function (req, resp) {
        var doorMessage = req.body.data;
        doorMessage = JSON.parse(doorMessage);
        var doorId = doorMessage.id;
        var doorStatus = doorMessage.value;
        var data = {
            doorId: doorId,
            success: true,
            motStatus: doorStatus
        }
        resp.send(data);
        console.log('doorId:' + doorId + ' ' + 'doorStatus:' + doorStatus);
    },
    reportWindow: function (req, resp) {
        var windowMessage = req.body.data;
        windowMessage = JSON.parse(windowMessage);
        var windowId = windowMessage.id;
        var windowStatus = windowMessage.value;
        var data = {
            windowId: windowId,
            success: true,
            motStatus: windowStatus
        }
        resp.send(data);
        console.log('windowId:' + windowId + ' ' + 'windowStatus:' + windowStatus);
    },
    reportTemp: function (req, resp) {
        const tempId = req.params["tempId"];
        const temp = req.params["temp"];
        console.log('tempId:' + tempId + ' ' + 'temp:' + temp);
        var data = {
            tempId: tempId,
            success: true,
            // temp: temp
        }
        resp.send(data);
    },
    reportHumd: function (req, resp) {
        const humdId = req.params["humdId"];
        const humd = req.params["humd"];
        console.log('humdId:' + humdId + ' ' + 'humd:' + humd);
        var data = {
            humdId: humdId,
            success: true,
            // humd: humd
        }
        resp.send(data);
    },
    reportSmoke: function (req, resp) {
        const smokeId = req.params["smokeId"];
        const smoke = req.params["smoke"];
        console.log('smokeId:' + smokeId + ' ' + 'smoke:' + smoke);
        var data = {
            smokeId: smokeId,
            success: true,
            // smoke: smoke
        }
        resp.send(data);
    },
}