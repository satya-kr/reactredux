import React from 'react';
import { render } from '@testing-library/react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import { ServiceTeam } from './components/ServiceTeam';
// import HomeContainer from './container/HomeContainer';


function App() {

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/team" component={ServiceTeam}  />
      </Switch>
    </div>
  );
}

export default App;
