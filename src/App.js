import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Post from "./Post";
import Contact from "./Contact";
import Nav from "./Nav";
import "./App.css";


function App(){

    return(
        <Router>
            <main>
                <Nav />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </main>
        </Router>
  )
}
   

export default App;