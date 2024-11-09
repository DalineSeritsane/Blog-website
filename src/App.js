import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./Navbar/Navbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
          <Route path="/about" element={ <About />} ></Route>
          <Route path="/contact" element={ <Contact />} ></Route>
          <Route path="/write" element={ <Write />} ></Route>
          <Route path="/setting" element={user ? <Setting /> : <Register/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
      </Routes>
    </Router>
  );
}

export default App;
