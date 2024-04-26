import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoomContextProvider } from "./context/RoomContext.tsx";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { Room } from "./pages/Room.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
