import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
