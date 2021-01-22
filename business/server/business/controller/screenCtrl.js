const screenDao = require("../dao/screenDao");
const openapi = require("../service/openapi");
const amqp = require("../service/amqp");

var method = '';
var topicArr = [];
var screenArr = [];
var sql = '';

module.exports = {
    getInfos: async (req, resp) => {
        topicArr = await generateTopic();
        // console.log(topicArr);
        screenArr = await getAllValue();
        // console.log(screenArr);
        amqp.container.on('message', function (context) {
            var msg = context.message;
            var messageId = msg.message_id;
            var topic = msg.application_properties.topic;
            var obj = Buffer.from(msg.body.content);
            var content = Buffer.from(msg.body.content).toString();
            const resp = JSON.parse(content);
            for (let i of screenArr) {
                if (resp.deviceName == i.DeviceName) {
                    // console.log(resp.deviceName);
                    // console.log(resp.items);
                    try {
                        if (i.type == 'sprinkler' || i.type == 'flush' || i.type == 'window') {
                            var value = Number(resp.items.WorkSwitch.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'led') {
                            var value = Number(resp.items.LightSwitch.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'mot') {
                            var value = Number(resp.items.MotionAlarmState.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'door') {
                            var value = Number(resp.items.Lock_control.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'fan') {
                            var value = Number(resp.items.PowerSwitch.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'Temp') {
                            var value = Number(resp.items.CurrentTemperature.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'H2S') {
                            var value = Number(resp.items.SO2.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'NH3') {
                            var value = Number(resp.items.NH3.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'Smoke') {
                            var value = Number(resp.items.CO2Value.value);
                            updateValue(value, i.DeviceName);
                        }
                        if (i.type == 'Humd') {
                            var value = Number(resp.items.CurrentHumidity.value);
                            updateValue(value, i.DeviceName);
                        }
                    } catch (error) {
                        // console.log(error);
                    }
                }
            }
            //发送ACK，注意不要在回调函数有耗时逻辑。
            context.delivery.accept();
        });
        const respData = await getValue();
        console.log(respData);
        // resp.send({ success: true });
        resp.send({
            success: true,
            data: {
                data: respData
            }
        });
    },
    getStatus: async function (req, resp) {
        var getId = req.body.id;
        // console.log(getId);

        method = 'QueryDevicePropertyStatus';
        var params = {
            "RegionId": "cn-shanghai",
            "ProductKey": "a1bBAM1kAGT",
            "DeviceName": "warininglight_A_1_m1"
        }
        const result = await callOpenAPI(method, params);
        var status = JSON.parse(result).Data.List.PropertyStatusInfo[0].Value;
        // console.log(status);
        resp.send({
            success: true,
            data: {
                id: getId,
                value: status
            }
        });
    },
    toggle: async function (req, resp) {
        var toggleId = req.body.id;
        var status = req.body.status;

        method = 'SetDeviceProperty';
        const items = {
            LightSwitch: status
        };
        var params = {
            "RegionId": "cn-shanghai",
            "Items": JSON.stringify(items),
            "ProductKey": "a1bBAM1kAGT",
            "DeviceName": "warininglight_A_1_m1"
        }
        await callOpenAPI(method, params);
        resp.send({
            success: true,
            data: {
                id: toggleId,
                value: status
            }
        });
    },
}

function callOpenAPI(method, params) {
    return new Promise(resolve => {
        console.log('method ' + method);
        var requestOption = {
            method: 'POST'
        };

        openapi.client.request(method, params, requestOption).then((result) => {
            // console.log(JSON.stringify(result));
            resolve(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        })

    })
}

function generateTopic() {
    return new Promise(resolve => {
        screenDao.searchTopicDB(function (err, data) {
            if (err) {
                return;
            }
            else {
                if (data) {
                    data = JSON.stringify(data);
                    dbInfo = JSON.parse(data);
                    var arr = [];
                    for (let i of dbInfo) {
                        topic = '/' + i.ProductKey + '/' + i.DeviceName + '/thing/event/property/post';
                        arr.push(topic);
                    };
                    // console.log(topicArr);
                    resolve(arr);
                }
            }
        });
    })
}

function updateValue(value, DeviceName) {
    return new Promise(resolve => {
        sql = 'UPDATE screen SET value = ' + value + ' WHERE DeviceName = \'' + DeviceName + '\'';
        screenDao.updateValueDB(sql, function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            else {
                if (data) {
                    // console.log(data);
                    resolve('success');
                }
            }
        });
    })
}

function getAllValue() {
    return new Promise(resolve => {
        screenDao.getAllValueDB(function (err, data) {
            if (err) {
                return;
            }
            else {
                if (data) {
                    data = JSON.parse(JSON.stringify(data));
                    var arr = [];
                    arr = data;
                    resolve(arr);
                }
            }
        });
    })
}

function getValue() {
    return new Promise(resolve => {
        screenDao.getValueDB(function (err, data) {
            if (err) {
                return;
            }
            else {
                if (data) {
                    data = JSON.parse(JSON.stringify(data));
                    /* var arr = [];
                    arr = data; */
                    resolve(data);
                }
            }
        });
    })
}