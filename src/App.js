// import logo from './logo.svg';
// import './App.css';
import './index.css';

import NavbarComponent from './navbarComponent';
import PostDetailComponent from './PostDetailsComponent';
import Login from './LoginComponent';
import HomeComponent from './home';
import Error404 from './Error404';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatePost from './CreatePost';
import FooterComponent from './footerComponent';
// import TutorialComponent from './tutorials';
import { React } from 'react';
// import { useState } from 'react';
// import { ThemeContext } from '.';
// import Button  from 'react-bootstrap/Button';
// import ReduxTutorials from './reduxTutorials';
import Register from './RegisterComponent';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';



axios.defaults.baseURL = "https://emmi-softwaretrack.online/api/";
axios.defaults.headers.post['Accept'] ="application/json";
axios.defaults.headers.post['Content-Type'] ="application/json";
axios.defaults.headers.post['Access-Control-Allow-Origin'] ="*";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
            
      <Router>
        <header>
          < NavbarComponent />         
        </header>
      <Switch>

          <Route exact path="/">
          
            < HomeComponent />
          </Route>
      
          <Route exact path="/create">
            <PrivateRoute>
            < CreatePost />
            </PrivateRoute>
            
          </Route>
                          
          <Route exact path="/posts/:id">
            < PostDetailComponent />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route path="*">
              <Error404/>
          </Route>

      </Switch>
      < FooterComponent />
      </Router>
      </div>
    
  );
}

export default App;
