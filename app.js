const express = require('express');
const app     = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);

const LISTEN_PORT   = 8080;

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder



//routes
app.get('/player1', function(req,res) {
    res.sendFile(__dirname + '/public/player1.html');
});

app.get('/player2', function(req,res) {
    res.sendFile(__dirname + '/public/player2.html');
});

socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');



    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });


    socket.on('moveClickP2', function(data) {
        console.log('move event heard');
        socketIO.sockets.emit('moveP2', {x:1, y:1, z:1});
    });

    socket.on('moveClickP1', function(data) {
        console.log('move event heard');
        socketIO.sockets.emit('moveP1', {x:1, y:1, z:1});
    });


});

server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);