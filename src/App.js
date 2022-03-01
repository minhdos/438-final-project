import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
//import Link from '@mui/material/Link';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { AppBar } from '@mui/material';

export default function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/resources" element={<Resources />}/>
      <Route path="/statistics" element={<Statistics />}/>
      <Route path="/:home" element={<Home />}/>
      <Route path="/CommunityMentalHealth" element={<CommunityMentalHealth/>}/>
    </Routes>
  </BrowserRouter>;
}


function Home() {
  return (
    <div className="App">
      <header className="header">
      {/* creating nav links */}
      <div className="navBar">
        <Link to="/statistics" underline="none">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </header>

{/* creating buttons */}
    <div className='community'>

      <Link to="/CommunityMentalHealth">
        <Button variant="contained" >Mental Health</Button>
      </Link>
      <Button variant="contained">Sex Education</Button>
    </div>

    <footer className='footer'>
      <span className='quote'>You're doing your best and that's all you need to do</span>
    </footer>
    </div>
  );
}


function CommunityMentalHealth () {
  return (
    <div className='App'>
      a bunch of buttons :D
    </div>
  );
}

function Statistics() {
  return(
    <div className="App">
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </div>
  );

}

function Resources() {
  return (
    <div className="App">
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>

      <div className='resources'>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button components="a" href='https://www.google.com'>
            <ListItemText primary="Link 1"/>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button divider>
            <ListItemText primary="Spam" />
          </ListItem>
          <ListItem button divider>
          <Divider light />
            <ListItemText primary="Spam" />
          </ListItem>
          <ListItem button divider>
          <Divider light />
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    </div>
  );

}
