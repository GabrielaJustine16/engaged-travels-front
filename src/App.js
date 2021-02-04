import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import MyTrips from './components/MyTrips.js'
import Signup from './components/Signup.js'


import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js';
/*import { render } from '@testing-library/react';*/

class App extends React.Component {
//save user
  componentDidMount() {
    this.props.getCurrentUser()

 
  }

  render() {
    const { loggedIn, trips } = this.props

    return ( 
      
      <div className="App"> 
        <NavBar/>
          <Route exact path='/' render={()=> loggedIn ? <MyTrips/> : <Home/>}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/my-trips' component={MyTrips}/>
      </div>
      
    
  );
 }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    trips: state.myTrips
  })
}
//deconstruct it. i cn do this bc i know the incomeing argument is an object, state,coming from redux
//i know the property is called current user


export default (connect(mapStateToProps, { getCurrentUser })(App));