import React, { Component } from 'react';
import Navigation from './Navigation'
import Overview from './Overview'
import Articles from './Articles'
import './Styles.css'

class App extends Component{
  render(){
    return <div id="page-container">
      <Navigation/>
      <Overview/>
      <Articles/>
    </div>
    
  }
}

export default App;
