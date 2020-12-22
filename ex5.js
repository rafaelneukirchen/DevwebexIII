var events = require('events');
var eventEmitter = new events.EventEmitter();

var numberGenerator = function () {
    console.log(Math.floor(Math.random() * 11));
}

var date = function () {
    data = new Date();
    let date = data.getDate();
    console.log(date);
}

eventEmitter.on('generate', numberGenerator);
eventEmitter.on('day', date);

eventEmitter.emit('generate');
eventEmitter.emit('day');