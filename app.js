const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
//// step 1 setting up socket.io
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
////
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', (socket) => {
    socket.on('send-location', (data) => {
        io.emit('receive-location', {id: socket.id, ...data}); // Broadcast the location data to all connected clients, !!make sure that all this "send-location", recieve-location spelling are consistent and ocrrect ask they are recieve on the sevrer side.
    });
    console.log("connected");

    socket.on('disconnect', (data) => {
        io.emit("user-disconnected", socket.id);
    })
}); //step6

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
