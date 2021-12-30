import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPost from "./components/Posts/AddPost";
import Post from "./components/Posts/Post";
import UpdatePost from "./components/Posts/UpdatePost";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/addPost" element={<AddPost/>} />
            <Route exact path="/post/:id" element={<Post/>} />
            <Route exact path="/updatePost/:id" element={<UpdatePost/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
