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
} from "react-router-dom";
import { AppBar } from '@mui/material';

// setting pages up
export default function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/resources" element={<Resources />}/>
      <Route path="/statistics" element={<Statistics />}/>
      <Route path="/:home" element={<Home />}/>
      <Route path="/CommunityMentalHealth" element={<CommunityMentalHealth/>}/>
      <Route path="/communityPost" element={<communityPost/>}/>
    </Routes>
  </BrowserRouter>;
}

// this is the home page for all
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

//goes to the mental health community section
function CommunityMentalHealth () {
  return (
    <div className='App'>
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>

      <div className='health-groups'>
       <Link to="/communityPost">
          <Button variant="contained" >Anxiety</Button>
        </Link>
        <Button variant="contained">Depression</Button>
        <Button variant="contained" >Eating Disorder</Button>
        <Button variant="contained">PTSD</Button>
    </div>

    </div>
  );
}

// goes into a page that has a bunch of community posts
function communityPost() {
  return (
    <div className='App'>
      <div className="navBar">
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Communities</Link>
        <Link to="/resources">Resources</Link>
      </div>

      a bunch of posts :)
    </div>
  );
}

// this provides stats surrounding asian americans
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
            m: 3,
            width: 200,
            height: 200,
        },
      }}>
          <Paper elevation={4}>Major depressive episodes increased from 10 percent-13.6
            percent in AAPI youth ages 12-17,
            8.9 percent to 10.1 percent in young adults 18-25,
            and 3.2 percent to 5 percent in the 26-49 age range between 2015 and 2018.</Paper>
          <Paper elevation={4}>Asian-American women fear stigma for themselves,
            but more so for their families</Paper>
          <Paper elevation={4}>Asian-American women witness depression in their families,
            but have learned from their Asian cultures to maintain silence on the subject</Paper>
          <Paper elevation={4}>AAPIs adults are the racial group least likely to seek mental health services
            - 3 times less likely than their white counterparts</Paper>
          <Paper elevation={4}>Conflicting cultural values are impacting Asian-American
            women's sense of control over their life decisions</Paper>
          <Paper elevation={4}>Of AAPI adults with a mental illness,
            73.1 percent did not receive treatment compared to 56.7 percent of the overall population</Paper>
        </Box>
      </div>

    </div>
  );

}

// provides a bunch of mental health and sex ed resources for asian
// amerians
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
        <span>Sex Education Resources for Asian Americans</span>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <a href='https://www.asianamfeminism.org/' target="_blank" rel="noreferrer">Asian American Feminist Collective</a>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <a href='https://open.spotify.com/show/2jIHZbDsOQaW0HGeiu7Ulr' target="_blank" rel="noreferrer">Six Minute Sex Ed Podcast</a>
            </ListItem>
            <ListItem button >
              <a href='https://www.instagram.com/nicole_thesexprofessor/?hl=en' target="_blank" rel="noreferrer">Nicole McNichols PH.D</a>
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
              <a href='https://weareaptn.org/resource/what-they-dont-tell-you-in-sex-ed-a-resource-for-transgender-
              and-gender-diverse-communities-on-sexual-and-reproductive-health/' target="_blank"
              rel="noreferrer">Asia Pacific Transgender Network</a>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );

}
