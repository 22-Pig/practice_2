const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAI4Fenw68roQWA7iQ2xx2C',
    accessKeySecret: 'Cg7eel6QzvLQdr4Nnsvmsr7ngxOyLM',
    endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
    apiVersion: '2018-01-20'
});

module.exports = {
    client: client
}