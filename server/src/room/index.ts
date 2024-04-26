import { Server, Socket } from 'socket.io';
import { v4 as uuidV4 } from 'uuid';

type RoomHandlerProps = {
  socket: Socket;
  io: Server;
};

export const roomHandler = ({ socket, io }: RoomHandlerProps) => {
  const getRoomParticipants = async (roomId: string) => {
    const sockets = await io.in(roomId).fetchSockets();
    const currentParticipants = [];
    for (let socket of sockets) {
      currentParticipants.push(socket.id);
    }
    return currentParticipants;
  };

  const createRoom = async () => {
    const roomId = uuidV4();
    socket.emit('room-created', { roomId });
    joinRoom({ roomId });
  };

  const joinRoom = async ({ roomId }: { roomId: string }) => {
    socket.join(roomId);
    const participants = await getRoomParticipants(roomId);
    io.to(roomId).emit('updateParticipants', participants);
  };

  socket.on('disconnect', async () => {});

  socket.on('disconnecting', async () => {
    for (const room of socket.rooms) {
      if (room !== socket.id) {
        const participants = await getRoomParticipants(room);
        const updatedParticipants = participants.filter((p) => p !== socket.id);
        socket.to(room).emit('updateParticipants', updatedParticipants);
      }
    }
  });

  socket.on('createRoom', createRoom);
  socket.on('joinRoom', joinRoom);
};
