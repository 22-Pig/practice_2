const infoDao = require("../dao/infoDao");
var sql = '';
var typeValue = [];

module.exports = {
    info: (req, resp) => {
        infoDao.infoDB(function (err, data) {
            if (err) {
                return;
            }
            else {
                if (data) {
                    resp.send(data);
                } else {
                }
            }
        });
    },
    getMot: (req, resp) => {
        var type = "mot";
        getTypeValue(type);
        for (var j = 0; j < typeValue.length; j++) {
            id = typeValue[j].id;
            value = typeValue[j].value;
            if (id == "mot_101") {
                var motstatus_101 = value;
            }
            if (id == "mot_102") {
                var motstatus_102 = value;
            }
        }
        const data = {
            motstatus_101: motstatus_101,
            motstatus_102: motstatus_102
        }
        resp.send(data);
    },
    toggle: function (req, resp) {
        var toggleId = req.body.id;
        var status = req.body.status;
        // console.log(toggleId);
        // console.log(status);
        updateValue(status, toggleId);
        resp.send({
            success: true,
            data: {
                id: toggleId,
                value: status
            }
        });
    },
    getLed: async (req, resp) => {
        var type = "led";
        await getTypeValue(type);
        for (var j = 0; j < typeValue.length; j++) {
            id = typeValue[j].id;
            value = typeValue[j].value;
            console.log(id);
            if (id == "led_101") {
                var ledstatus_101 = value;
            }
            if (id == "led_102") {
                var ledstatus_102 = value;
            }
            if (id == "led_001") {
                var ledstatus_001 = value;
            }
            if (id == "led_002") {
                var ledstatus_002 = value;
            }
        }
        const data = {
            ledstatus_101: ledstatus_101,
            ledstatus_102: ledstatus_102,
            ledstatus_001: ledstatus_001,
            ledstatus_002: ledstatus_002,
        }
        console.log(data);
        resp.send(data);
    },
}

function getTypeValue(type) {
    return new Promise(resolve => {
        sql = 'SELECT * FROM alipt WHERE type = \'' + type + '\'';
        infoDao.operateDB(sql, [], function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            else {
                if (data) {
                    data = JSON.stringify(data);
                    data = JSON.parse(data);
                    typeValue.length = 0;
                    for (var i = 0; i < data.length; i++) {
                        typeValue.push(data[i])
                    }
                    resolve('success');
                    // console.log(typeValue);
                }
            }
        });
    })
}

function updateValue(value, id) {
    sql = 'UPDATE alipt SET value = ' + value + ' WHERE id = \'' + id + '\'';
    infoDao.operateDB(sql, [], function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
    });
}