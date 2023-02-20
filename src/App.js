import Header from "./components/Header/Header";
import Backlog from "./pages/Backlog/Backlog";
import Board from "./pages/Board/Board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/backlog" element={<Backlog />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}

export default App;
