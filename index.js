/**
 * Created by Frederik Brudy (fbrudy.net)
 */
'use strict';
const path = require('path');


exports = module.exports = function reload(expressApp, express, io=null, http=null){
    expressApp.use('/reload', express.static(path.join(__dirname, 'public')));
    let socketIo;

    if(io === null){
        const http = require('http').Server(expressApp);
        socketIo = require('socket.io')(http);
        socketIo.on('connection', (client) => {
            console.log('socket client connected', client.id);
        });
    }
    else{
        socketIo = io;
    }

    return {
        reload: function (reason) {
            if(!reason)
                reason = 'files changed';
            this.sendMessage('reload', {reason})
        },
        sendMessage: function (command, data) {
            console.log('sending', command, data);
            socketIo.sockets.emit(command, data);
        }
    }
};