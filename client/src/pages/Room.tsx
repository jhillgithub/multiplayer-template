import { useParams } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";

export const Room = () => {
  const { roomId } = useParams();
  const { socket, participants } = useRoomContext();

  return (
    <div className="flex flex-col gap-2">
      <h1>Room: {roomId}</h1>
      <h2>Me: {socket?.id}</h2>
      <h2>Participants:</h2>
      <ul className="flex flex-col gap-2">
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  );
};
