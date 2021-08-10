import HomePage from './pages/HomePage';
import RateMoodPage from './pages/RateMoodPage'
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// using ES6 modules
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import SolutionsPage from './pages/Solutions';
// import MoodChartPage from './pages/MoodChartPage'
import PlaySongActivity from './pages/PlaySongActivity'
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import LoginPage from './pages/LoginPage';
import PrevLogin from './pages/PrevLogin';
// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'IE6u59r2UOS1JwKu5Wr5o7dbiVQMzxsIqUnx9xl1';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '9eKPlczqhsvxqyTKqKKu4qkTaNSAuSNV3pP6vmls';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


function App() {

    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        HomePage / >
        <
        /Route> <Route exact path = "/login
        " >  <
        PrevLogin / > < /Route>  <
        Route exact path = "/solutions" >
        <
        SolutionsPage / > < /Route>

        <
        /Switch>  < /
        Router >

    );
}

export default App;