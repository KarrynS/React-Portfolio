import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/";
import Contact from "./pages/Contact/index";

function App() {
  return (
    <Router> 
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} /> 
        <Footer />
      </>
    </Router>
  );
}

export default App;
