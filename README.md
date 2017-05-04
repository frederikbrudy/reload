# reload
NodeJs module to automatically reload and refresh all your connected browser instances when your code changes

# Installation
## Install using npm
```npm install kopfnuss/reload```

## Alternative git method

1. Clone repository
```git clone https://github.com/kopfnuss/reload.git local_modules/reload```

2. Install dependencies

```
cd local_modules/reload
npm install
```


# Usage
Include the following line in your html site (only dev sites, not recommended for production sites)

```
<script src="reload/reload-bundle.js"></script>
```

In your express app initalize like this: 
```
const server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('socket client connected', client.id);
});

//pass a socket.io object as third parameter
const r = reload(app, express, io, null);

//if you don't use socket.io in your express app, pass null as third parameter and your http server as fourth.
const r = reload(app, express, null, http);

//later, if you want to manually reload call
r.reload();
```
