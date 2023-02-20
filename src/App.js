import "./App.css";
import Header from "./components/Header/Header";
import Backlog from "./pages/Backlog/Backlog";
import Board from "./pages/Board/Board";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
