import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { roomHandler } from './room';

const port = 3000;
const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('user is connected', socket.id);

  roomHandler({ socket, io });
});

server.listen(port, () => {
  console.log(`Listening to the server on port: ${port}`);
});
