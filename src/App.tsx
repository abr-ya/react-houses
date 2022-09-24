import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/Common.styled";
import { Home, About, Error404 } from "./pages";

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default App;
