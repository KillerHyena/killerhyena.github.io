const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Sending simulated real-time data every second
    setInterval(() => {
        const data = {
            timestamp: new Date(),
            value: Math.floor(Math.random() * 100)
        };
        socket.emit('newData', data);
    }, 1000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
