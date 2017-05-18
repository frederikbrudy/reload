/**
 * Created by Frederik Brudy (fbrudy.net)
 */
'use strict';

import io from 'socket.io-client';

window.reload = window.reload
    || window.CL
    || {
        afterReconnent: true,
        host: location.hostname+':3000'
    };

(function reload() {
    let socket = io(window.reload.host);
    window.addEventListener('load', function () {
        socket.on('connect', function(){
            // console.log(socket.id);
        });
        socket.on('reconnect', (attemptCount) =>{
            if(window.reload.afterReconnent) {
                console.log(`reconnected after ${attemptCount} attempts`);
                window.location.reload();
            }
        });
        socket.on('reload', (payload) => {
            console.log(`reloading because of reload command`, payload);
            window.location.reload();
        });
    });
})();