import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Login from './Login/Login'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/createAccount" component={Login} />
      </Router>
    </div>
  );
}