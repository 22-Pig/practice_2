var url = 'http://127.0.0.1:8080/';

var flushStatus = 0;

var mot_pin = 0;
var flush_pin = 1;

function setup() {
    pinMode(flush_pin, OUTPUT);
    pinMode(mot_pin, OUTPUT);
}

function loop() {
    sendData();
    delay(5000);
}

function produce() {
    var data = [
        { build: "A", floor: "01", sex: "m", type: "flush", id: "flush_101", value: flushStatus, option: "" },
        { build: "A", floor: "01", sex: "m", type: "mot", id: "mot_101", value: read_mot(), option: "" },
    ];
    return JSON.stringify(data);
}

function sendData() {
    RealHTTPClient.post(url + 'report', { "data": produce() }, function (status, data) {
        var result = JSON.parse(data);
        if (data) {
            for (var i in result) {
                if (result[i].id == "flush_101") {
                    if (result[i].flushStatus == 0) {
                        customWrite(flush_pin, 0);
                        flushStatus = 0;
                        Serial.println('喷头关');
                        linkage();
                    }
                    else if (result[i].flushStatus == 1) {
                        customWrite(flush_pin, 1);
                        flushStatus = 1;
                        Serial.println('喷头开');
                        linkage();
                    }
                }
            }
        }
    });
}

// 读mot数据
function read_mot() {
    var motStatus = digitalRead(mot_pin);
    if (motStatus == 1023) {
        motStatus = 1;
    } else {
        motStatus = 0;
    }
    Serial.println('motStatus:' + motStatus);
    return motStatus;
}

function linkage() {
    var motStatus = digitalRead(mot_pin);
    if (motStatus == 1023) {
        motStatus = 1;
        customWrite(flush_pin, 1);
        flushStatus = 1;
        Serial.println('喷头开');
    } else {
        motStatus = 0;
        customWrite(flush_pin, 0);
        flushStatus = 0;
        Serial.println('喷头关');
    }
}