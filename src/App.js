import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./Navbar/Navbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PostDetail from './post/PostDetail';
import CreatePost from './post/CreatePost';
import Post from './post/Post';
import Posts from "./posts/Posts";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />}></Route> 
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/write" element={ <Write />} />
          <Route path="/setting" element={user ? <Setting /> : <Register/>} ></Route>
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/single" element={ <Single />} />
          <Route path="/create-post" element={ <CreatePost />} />
          <Route path="/post" element={ <Post />} />
      </Routes>
    </Router>
  );
}

export default App;
