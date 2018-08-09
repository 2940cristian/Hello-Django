import React, { Component } from 'react';
import './App.css';
import Login from "./Components/Login/Login"
import {Route, Switch} from "react-router-dom"
import Notes from "./Components/Notes/Notes"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/notes" component={Notes}/>

      </Switch>
      </div>
    );
  }
}

export default App;
