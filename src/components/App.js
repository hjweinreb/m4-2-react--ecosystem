import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import About from './About';
import Home from './Home';
import ItemDetails from './ItemDetails';


function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">Homepage
        <Home />
        </Route>
        <Route path="/about">About
          <About />
        </Route>
        <Route path='/items/:itemId'>Items
        <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
