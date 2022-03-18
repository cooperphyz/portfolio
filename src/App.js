import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/about"/>
        <Route path="/projects"/>
        <Route path="/education"/>
        <Route path="/skills"/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
