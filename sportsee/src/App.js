import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home';


class App extends React.Component {
  render() {
    return (
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      
    );
  }
}

export default App;
