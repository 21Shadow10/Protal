import React, { Component } from 'react';
import './Home.css' ;
import protal from './protal.jpg' ;

class Home extends Component {
    render(){
        return <div className="container">
            <h1>Home</h1>
            <img src={protal} alt="Protal"></img>
            <h3>Protal-Talent Hunt Organisation</h3>
        </div>
    }
}

export default Home ;