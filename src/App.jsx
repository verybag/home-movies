import React from 'react';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrolltotop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/home-movies/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
