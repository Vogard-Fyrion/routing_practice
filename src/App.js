import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ColorfulHello from './components/ColorfulHello';
import Hello from './components/Hello';

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:word/:color1/:color2">
          <ColorfulHello/>
        </Route>
        <Route path="/:word">
          <Hello/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
