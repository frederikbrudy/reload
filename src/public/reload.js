/**
 * Created by Frederik Brudy (fbrudy.net)
 */
'use strict';

import io from 'socket.io-client';

(function reload() {
    let socket = io();
    window.addEventListener('load', function () {
        socket.on('connect', function(){
            // console.log(socket.id);
        });
        socket.on('reconnect', (attemptCount) =>{
            console.log(`reconnected after ${attemptCount} attempts`);
            window.location.reload();
        });
        socket.on('reload', (payload) => {
            console.log(`reloading because of reload command`, payload);
            window.location.reload();
        });
    });
})();