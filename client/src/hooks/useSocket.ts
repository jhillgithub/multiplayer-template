import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import io, { Socket } from "socket.io-client";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [roomId, setRoomId] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);
  const [participants, setParticipants] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
    console.log({ newSocket });

    newSocket.on("connect", () => {
      setIsConnected(true);
    });

    const updateParticipants = (currentParticipants: string[]) => {
      setParticipants([...currentParticipants]);
    };
    const roomCreated = ({ roomId: newRoomId }: { roomId: string }) => {
      console.log("Room created");
      setRoomId(newRoomId);
      navigate(`/room/${newRoomId}`);
    };

    newSocket.on("room-created", roomCreated);
    newSocket.on("updateParticipants", updateParticipants);

    return () => {
      newSocket.off("room-created", roomCreated);
      newSocket.off("updateParticipants", updateParticipants);
      newSocket.disconnect();
    };
  }, []);

  const createRoom = useCallback(() => {
    if (!isConnected || !socket?.id) return;

    console.log("before return Emitting createRoom event");
    console.log("socket ", socket?.id, socket?.connected);
    socket?.emit("createRoom");
    console.log("After Emitting createRoom event");
  }, [isConnected, socket?.id]);

  const joinRoom = useCallback(
    (joinId: string) => {
      if (!isConnected || !socket?.id) return;
      socket.emit("joinRoom", { roomId: joinId });
    },
    [isConnected, socket?.id]
  );

  return { socket, participants, createRoom, joinRoom, roomId };
};