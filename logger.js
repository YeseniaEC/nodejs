const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {
        // call event
        this.emit('message', message);
    }
}

module.exports = Logger;