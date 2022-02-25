import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="header">
      <div className="links">
        <span className="title">Statistics</span>
        <span className="title">Communities</span>
        <span className="title">Resources</span>
      </div>
      <div className='name'>
      </div>
    </header>

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

export default App;
