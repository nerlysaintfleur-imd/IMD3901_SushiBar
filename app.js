const express = require('express');
const app     = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);
const playerIds = [];
let player1 = 0;
let player2 = 0;

const LISTEN_PORT   = 8080;

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder



//routes
app.get('/player1', function(req,res) {
    res.sendFile(__dirname + '/public/player1.html');
});

socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');
    playerIds.push(socket.id);

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
        //delete a socket when it is disconnected
        var i;
        for (i = 0; i < playerIds.length; i++) {
            if (socket.id == playerIds[i] ){
                playerIds.pop(socket.id);
            }
        }
    });
    socket.on('createNPC', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });
        //relocate Avocado
        socketIO.sockets.emit('newCustomer', data);


    });
    socket.on('moveAvacado', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });
        //relocate Avocado
        socketIO.sockets.emit('relocateAvocado', data);


    });

    socket.on('moveCucumber', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });

        //relocate Cucumber
        socketIO.sockets.emit('relocateCucumber', data);

    });

    socket.on('moveSeaweed', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });

        //relocate Seaweed
        socketIO.sockets.emit('relocateSeaweed', data);

    });


    socket.on('moveSalmon', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });

        //relocate Salmon
        socketIO.sockets.emit('relocateSalmon', data);

    });

    socket.on('moveRice', function(data) {
        //EMPTY WRONG SOCKET IDS FROM ARRAY
        socket.on('socketName', function(data) {
            var i;
            for (i = 0; i < playerIds.length; i++) {
                if (data.menuId == playerIds[i] ){
                    playerIds.pop(data.menuId);
                }
            }
            console.log(playerIds);
        });

        //relocate Rice
        socketIO.sockets.emit('relocateRice', data);

    });














});

server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);
