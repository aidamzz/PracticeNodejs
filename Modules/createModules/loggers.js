const { error } = require('console')
const fs = require('fs')
const loggedMessage = (message) => {
    fs.appendFile('app.log', message + '\n', (error)=>{
        if(error){
            console.error('Error writing to log file', error)
        } else {
            console.log('Message logged: ', message)
        }
        
    })
}

// loggedMessage('This is the logged message from logger.js')
module.exports = loggedMessage

module.exports.config = {
    logFileName: 'app.log',
    logDirectory: './'
}