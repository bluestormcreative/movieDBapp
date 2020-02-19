import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';

import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
