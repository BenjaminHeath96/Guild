const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: '*' } });
const cors = require('cors');

const chatHistory = [

]

// Format: {ID: username}
const clientIDs = {};

// For parsing application/json
app.use(express.json());

// Allow cross-origin requests
app.use(cors());

io.on('connection', (client) => {
    console.log('a user connected');

    client.on('login', function (username) {
        console.log('login', username)
        clientIDs[client.id] = username;

        io.to(client.id).emit('chatHistory', chatHistory)
    })

    client.on('chatHistory', () => {
        console.log('chatHistory')
        const username = clientIDs[client.id]

        io.to(client.id).emit('chatHistory', chatHistory)
    })

    client.on('newMessage', (message) => {
        chatHistory.push(message)
        io.emit('chatHistory', chatHistory)
    })



});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
