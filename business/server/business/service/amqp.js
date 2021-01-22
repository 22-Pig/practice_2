// const ws = require('./ws');
const container = require('rhea');
const crypto = require('crypto');

//建立连接。
var dt = new Date();
var connection = container.connect({
    //接入域名，请参见AMQP客户端接入说明文档。
    'host': '1669068617504211.iot-amqp.cn-shanghai.aliyuncs.com',
    'port': 5671,
    'transport': 'tls',
    'reconnect': true,
    'idle_time_out': 60000,
    //userName组装方法，请参见AMQP客户端接入说明文档。其中的iotInstanceId，购买的实例请填写实例ID，公共实例请填空字符串""。
    'username': '40-A3-CC-87-8B-79|authMode=aksign,signMethod=hmacsha1,timestamp=' + dt.getTime() +
        ',authId=LTAI4Fenw68roQWA7iQ2xx2C,iotInstanceId=,consumerGroupId=DEFAULT_GROUP|',
    //计算签名，password组装方法，请参见AMQP客户端接入说明文档。
    'password': hmacSha1(
        'Cg7eel6QzvLQdr4Nnsvmsr7ngxOyLM',
        'authId=LTAI4Fenw68roQWA7iQ2xx2C&timestamp='
        + dt.getTime()),
});

//创建Receiver连接。
var receiver = connection.open_receiver();

//接收云端推送消息的回调函数。
/* container.on('message', function (context) {
    var msg = context.message;
    var messageId = msg.message_id;
    var topic = msg.application_properties.topic;
    var obj = Buffer.from(msg.body.content);
    var content = Buffer.from(msg.body.content).toString();

    // console.log(topic);
    console.log(content);
    if (topic === '/a1bBAM1kAGT/WarningLight_man/thing/event/property/post') {
        const resp = JSON.parse(content);
        // ws.send2All(Number(resp.items.LightStatus.value));
        // devDao.receiveUpdate(Number(resp.items.LightStatus.value));
        // led.status = resp.items.LightStatus.value;
    }
    //发送ACK，注意不要在回调函数有耗时逻辑。
    context.delivery.accept();
}); */

//计算password签名。
function hmacSha1(key, context) {
    return Buffer.from(crypto.createHmac('sha1', key).update(context).digest())
        .toString('base64');
}


module.exports = {
    container: container
}