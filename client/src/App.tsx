import { Home } from "./pages/Home.tsx";
import { Room } from "./pages/Room.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoomContextProvider } from "./context/RoomContext.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoomContextProvider>
          <div className="container mx-auto w-screen h-screen mt-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room/:roomId" element={<Room />} />
            </Routes>
          </div>
        </RoomContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
