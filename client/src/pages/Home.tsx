import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";

export const Home = () => {
  const [joinRoomId, setJoinRoomId] = useState("");
  const navigate = useNavigate();
  const { createRoom, joinRoom } = useRoomContext();

  const handleCreateRoom = () => {
    createRoom();
  };

  const handleJoinRoom = () => {
    if (joinRoomId) {
      joinRoom(joinRoomId);
      navigate(`/room/${joinRoomId}`);
    }
  };

  return (
    <div className="grid place-content-center">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-3xl">Home</h1>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleCreateRoom}
        >
          Create Room
        </button>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Room ID"
          value={joinRoomId}
          onChange={(e) => setJoinRoomId(e.target.value)}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleJoinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};
