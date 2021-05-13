import React from 'react';
import Contact from '../Contact/Contact' ;
import Home from '../Home/Home' ;
import About from '../About/About' ;
import Nav from '../Nav/Nav' ;
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
