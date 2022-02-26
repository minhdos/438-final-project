import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/resources" element={<div>Hello WOrld!</div>}/>
      <Route path="/statistics" element={<div>Hello WOrld!</div>}/>
      <Route path="/:home" element={<App />}/>
    </Routes>
  </BrowserRouter>;
}


function App() {
  return (
    <div className="App">
      <header className="header">
      {/* creating nav links */}
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <div className='name'>
      </div>
    </header>

{/* creating buttons */}
    <div className='community'>
      <Button variant="contained">Mental Health</Button>
      <Button variant="contained">Sex Education</Button>
    </div>


    <footer className='footer'>
      <span className='quote'>You're doing your best and that's all you need to do</span>
    </footer>
    </div>
  );
}

