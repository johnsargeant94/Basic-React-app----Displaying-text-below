import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
