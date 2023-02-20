import Header from "./components/Header/Header";
import Backlog from "./pages/Backlog/Backlog";
import Board from "./pages/Board/Board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
