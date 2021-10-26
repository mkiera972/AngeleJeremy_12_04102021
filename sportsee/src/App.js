import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import {routes} from './routes/routes';


class App extends React.Component {
  render() {
    return (
        <Router>
          <Header/>
          <Switch>
            {routes.map((route, index) => {
                if (route.path !== '*') {
                  if (route.path === '/') {
                    return (
                      <Route key={index} exact path={route.path} >
                        <Redirect to="/dashboard/12" />
                      </Route>
                    )
                  } else {
                    return (
                      <Route key={index} exact path={route.path} render= {({ match }) => (
                        ( 
                          <Dashboard id={match.params.id}/> 
                        )
                      )}/>
                    )
                  }
                } else {
                  return <Route path="*" component={Dashboard}/>
                }
              })}
          </Switch>
        </Router>
      
    );
  }
}

export default App;
