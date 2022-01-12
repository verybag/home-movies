import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
