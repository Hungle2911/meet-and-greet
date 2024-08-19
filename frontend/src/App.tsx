import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import CreateRoomPage from "./routes/CreateRoomPage";
import JoinPage from "./routes/JoinPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </>
  );
}

export default App;
