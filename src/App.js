import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
//import Footer from "./components/footer/Footer"
import Home from './components/home/Home';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/academics"/>
        <Route path="/skills"/>
      </Routes>

    </Router>
  );
}

export default App;
