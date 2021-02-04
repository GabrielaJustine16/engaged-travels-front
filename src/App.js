import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar.js'
/*import { render } from '@testing-library/react';*/

class App extends React.Component {
//save user
  componentDidMount() {
    this.props.getCurrentUser()

 
  }

  render() {
    return ( 
      <div className="App">
        <NavBar/>
        <MainContainer/>
      </div>
    
  );
 }

}
//deconstruct it. i cn do this bc i know the incomeing argument is an object, state,coming from redux
//i know the property is called current user


export default connect( null, { getCurrentUser })(App);
