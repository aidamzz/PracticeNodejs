const logger = require('./loggers')
const {config} = require('./loggers')
logger('This is message from main.js')
console.log('Log file name: ' ,config.logFileName)