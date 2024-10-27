import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Volunteer from "./pages/Volunteer";
// import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services#services" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
