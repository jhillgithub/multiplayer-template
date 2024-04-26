import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import io, { Socket } from "socket.io-client";

export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const [me, setMe] = useState("");
  const [roomId, setRoomId] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);
  const [participants, setParticipants] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    socketRef.current = io("http://localhost:3000");

    socketRef.current.on("connect", () => {
      const id = socketRef.current?.id || "";
      setMe(id);
      setIsConnected(true);
    });

    const updateParticipants = (currentParticipants: string[]) => {
      setParticipants([...currentParticipants]);
    };
    const roomCreated = ({ roomId: newRoomId }: { roomId: string }) => {
      setRoomId(newRoomId);
      navigate(`/room/${newRoomId}`);
    };

    socketRef.current.on("room-created", roomCreated);
    socketRef.current.on("updateParticipants", updateParticipants);

    return () => {
      socketRef.current?.off("room-created", roomCreated);
      socketRef.current?.off("updateParticipants", updateParticipants);
      socketRef.current?.disconnect();
    };
  }, []);

  const createRoom = useCallback(() => {
    if (!isConnected) return;
    socketRef.current?.emit("createRoom");
  }, [isConnected]);

  const joinRoom = useCallback(
    (joinId: string) => {
      if (!isConnected) return;
      socketRef.current?.emit("joinRoom", { roomId: joinId });
    },
    [isConnected]
  );

  return { me, participants, createRoom, joinRoom, roomId };
};
