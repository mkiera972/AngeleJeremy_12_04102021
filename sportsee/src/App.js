import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header/>
        </Router>
      </div>
      
    );
  }
}

export default App;
