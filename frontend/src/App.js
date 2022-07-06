import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SideTopic from "./SideTopic";
import Discussions from "./Discussions";
import Comments from "./Comments";
import Login from "./Login";
import {CookiesProvider} from "react-cookie";

function App() {

  
  return (
    <CookiesProvider>
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
          <Route  path="/comments/:name" element={<Comments />}> 
          </Route>
          <Route  path="/login" element={<Login />}> 
          </Route>
          
        </Routes>
      </div>
    </div>
    </Router>
    </CookiesProvider>
  );
}

export default App;
