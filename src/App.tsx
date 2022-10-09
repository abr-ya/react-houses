import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./components/Common.styled";
import PrivateRoute from "./components/PrivateRoute";
import {
  Home,
  About,
  Error404,
  Offers,
  SignIn,
  SignUp,
  Profile,
  ForgotPassword,
  Category,
  AddHouse,
  House,
  Contact,
} from "./pages";
import Navbar from "components/Navbar/Navbar";
import Test from "pages/Test";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="offers" element={<Offers />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="add" element={<AddHouse />} />
        <Route path="/category/:category/:id" element={<House />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Navbar />
    </Router>
    <ToastContainer />
  </>
);

export default App;
