import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about"/>
        <Route path="/projects"/>
        <Route path="/academics"/>
        <Route path="/skills"/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
