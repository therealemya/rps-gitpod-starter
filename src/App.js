import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginContainer/Login";
import SignUp from "./components/SignupContainer/Signup";
import Donation from "./components/DonationContainer/Donation";
import Game from "./components/GameContainer/Game";
import PlayerStats from "./components/PlayerStatsContainer/PlayerStats";
import playerstats from "./components/PlayerStatsContainer/PlayerStats";
import welcome from "./components/WelcomeContainer/Welcome";
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>House Of E Starter</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/game"}>Game</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/donation"}>Donation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/playerstats"}>PlayerStats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/welcome"}>Welcome</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/donation" component={Donation} />
            <Route path="/game" component={Game} />
            <Route path="/playerstats" component={playerstats} />
            <Route path="/welcome" component={welcome} />


          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;