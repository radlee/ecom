import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HerbalLifePage = () => (
  <div>
    <h1>Herbal Life Page</h1>
  </div>
);
 
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/herbal-life" component={ HerbalLifePage } />
      </Switch>
    </div>
  );
}

export default App;
