import React from  "react";
import "./index.css"
import {Route,Routes} from "react-router-dom"
import Home from "../src/Routes/Home"
import Service from "../src/Routes/Service"
import Datascience from "../src/Routes/Datascience"
import Techno from "../src/Routes/Techno"
import About from "../src/Routes/About"
import Blog from "../src/Routes/Blog"
import Contact from "../src/Routes/Contact"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/datascience" element={<Datascience/>} />
    <Route path="/techno" element={<Techno/>} />
    <Route path="/aboutus" element={<About/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
      </>
  );
}

export default App;
