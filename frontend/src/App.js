import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SideTopic from "./SideTopic";
import Discussions from "./Discussions";
import Comments from "./Comments";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import ApproveRequests from "./ApproveRequests";


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
          <Route  path="/comments/:name" element={<Comments />}> 
          </Route>
          <Route  path="/login" element={<Login />}> 
          </Route>
          <Route  path="/signup" element={<Signup />}> 
          </Route>
          <Route  path="/profile/:name" element={<Profile />}> 
          </Route>
          <Route  path="/requests" element={<ApproveRequests/>}> 
          </Route>
          
        </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
