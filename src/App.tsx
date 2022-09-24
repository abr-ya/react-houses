import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/Common.styled";
import { Home, About, Error404, Offers, SignIn, SignUp } from "./pages";
import Navbar from "components/Navbar/Navbar";

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="offers" element={<Offers />} />
      <Route path="profile" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Navbar />
  </Router>
);

export default App;
