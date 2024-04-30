import express from "express"
import { Server } from "socket.io"

import cors from 'cors'
import http from 'http'

const PORT = 300
// creating an server usgin express
const app = express()

// creting server usign http
const server = http.createServer(app);

// creating socket server

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
})

// event in simple nodejs
io.on('connection', (socket) => {
    console.log("user connected");

    // recevinf username from client
    socket.on('snd_username', (username) => {
        socket.username = username
    })
    // console.log('username in socket', socket.username);
    // msg commming from client
    socket.on('new-msg', (msg) => {
        let userMsg = {
            username: socket.username,
            msg: msg
        }
        socket.broadcast.emit('broadcast-msg', userMsg);
    });




    socket.on('disconnect', () => {
        console.log("Connection is disconnted")
    })
})





server.listen(3000, () => {
    console.log("app is running on 3000");
})