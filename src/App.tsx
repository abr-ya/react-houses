import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./components/Common.styled";
import PrivateRoute from "./components/PrivateRoute";
import { Home, About, Error404, Offers, SignIn, SignUp, Profile } from "./pages";
import Navbar from "components/Navbar/Navbar";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offers" element={<Offers />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Navbar />
    </Router>
    <ToastContainer />
  </>
);

export default App;
