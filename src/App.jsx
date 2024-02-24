import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}
