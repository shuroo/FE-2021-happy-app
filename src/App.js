import HomePage from './pages/HomePage';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// using ES6 modules
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import SolutionsPage from './pages/Solutions';
// import MoodChartPage from './pages/MoodChartPage'
import PlaySongActivity from './pages/PlaySongActivity'
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import LoginPage from './components/LoginComponent';
import SignUp from './pages/SignUp';
import Utils from './utils/Utils';
import ActiveUserContext from './utils/ActiveUserContext';
import MoodChartsPage from './pages/MoodChartsPage';

function App() {

    // Your Parse initialization configuration goes here
    Utils.parseInit();

    const [activeUser, setActiveUser] = useState();

    function logout() {
        Parse.User.logOut();
        setActiveUser();
    }

    return ( <
        ActiveUserContext.Provider value = { activeUser } >
        <
        HashRouter >
        <
        Switch >
        <
        Route exact path = "/signup"
        activeUser = { activeUser } > < SignUp / >
        <
        /Route>    <
        Route exact path = "/graphs"
        activeUser = { activeUser } >
        <
        MoodChartsPage / > < /Route>  

        <
        Route exact path = "/solutions"
        activeUser = { activeUser } > < SolutionsPage / > < /Route> 

        <
        Route exact path = "/" >
        <
        HomePage / >
        <
        /Route>

        <
        /Switch > </HashRouter > < /ActiveUserContext.Provider>
    );
};
export default App;