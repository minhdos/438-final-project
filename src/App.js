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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>

      <div className='health-groups'>
        <Button variant="contained" >Anxiety</Button>
        <Button variant="contained">Depression</Button>
        <Button variant="contained" >Eating Disorder</Button>
        <Button variant="contained">PTSD</Button>
    </div>

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

      <div className='info-cards'>
        <Box  sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
        },
      }}>
          <Paper elevation={4}>This is a test</Paper>
          <Paper elevation={4}>This is a test</Paper>
          <Paper elevation={4}>This is a test</Paper>
          <Paper elevation={4}>This is a test</Paper>
        </Box>
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

    <div className='all-resources'>
        <div className='mental-health-resources'>
        <span>Mental Health Resources for Asian Americans</span>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <a href='https://aahiinfo.org/aahi-resources/' target="_blank" rel="noreferrer">Asian American Health Intiative</a>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <a href='https://www.imreadymovement.org/' target="_blank" rel="noreferrer">Asian American +Pacific
              Islander Women Lead(AAPI)</a>
            </ListItem>
            <ListItem button >
              <a href='https://aapaonline.org/' target="_blank" rel="noreferrer">Asian American Psychological Association AAPA</a>
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <a href='https://acrs.org/' target="_blank" rel="noreferrer">Asian American Counseling and Referral Service (ACRS)</a>
            </ListItem>
            <ListItem button divider>
            <Divider light />
              <a href='http://asianprideproject.org/' target="_blank" rel="noreferrer">Asian Pride Project</a>
            </ListItem>
            <ListItem button divider>
            <Divider light />
              <a href='https://www.asianmhc.org/' target="_blank" rel="noreferrer">Asian Mental Health Collective</a>
            </ListItem>
          </List>
        </div>

        <div className='sexed-resources'>
        <span>Mental Health Resources for Asian Americans</span>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <a href='https://aahiinfo.org/aahi-resources/' target="_blank" rel="noreferrer">Asian American Health Intiative</a>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <a href='https://www.imreadymovement.org/' target="_blank" rel="noreferrer">Asian American +Pacific
              Islander Women Lead(AAPI)</a>
            </ListItem>
            <ListItem button >
              <a href='https://aapaonline.org/' target="_blank" rel="noreferrer">Asian American Psychological Association AAPA</a>
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <a href='https://acrs.org/' target="_blank" rel="noreferrer">Asian American Counseling and Referral Service (ACRS)</a>
            </ListItem>
            <ListItem button divider>
            <Divider light />
              <a href='http://asianprideproject.org/' target="_blank" rel="noreferrer">Asian Pride Project</a>
            </ListItem>
            <ListItem button divider>
            <Divider light />
              <a href='https://www.asianmhc.org/' target="_blank" rel="noreferrer">Asian Mental Health Collective</a>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );

}
