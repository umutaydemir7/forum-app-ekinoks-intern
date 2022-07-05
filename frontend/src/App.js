import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SideTopic from "./SideTopic";
import Discussions from "./Discussions";

function App() {

  
  return (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes >
          <Route  extact path="/" element={<Home />}> 
          </Route>
          <Route  path="/sidetopic/:name" element={<SideTopic />}> 
          </Route>
          <Route  path="/discussions/:name" element={<Discussions />}> 
          </Route>
          
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
