import { ReactNode, createContext, useContext } from "react";
import { useSocket } from "../hooks/useSocket";

type RoomContextType = {
  me: string;
  createRoom: (roomId?: string) => void;
  joinRoom: (roomId: string) => void;
  participants: string[];
};

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const useRoomContext = () => {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error(
      "useRoomContext must be used inside of a RoomContextProvider"
    );
  }
  return context;
};

export const RoomContextProvider = ({ children }: { children: ReactNode }) => {
  const { me, participants, createRoom, joinRoom } = useSocket();

  return (
    <RoomContext.Provider value={{ me, participants, createRoom, joinRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
