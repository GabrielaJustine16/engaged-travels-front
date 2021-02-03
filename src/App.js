import React from 'react';
import './App.css';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"

import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
/*import { render } from '@testing-library/react';*/

class App extends React.Component {
//save user
  componentDidMount() {
    this.props.getCurrentUser()


  }

  render() {
    return (
      this.props.currentUser ? <Logout/> : <Login/>
    
  );
 }

}
//deconstruct it. i cn do this bc i know the incomeing argument is an object, state,coming from redux
//i know the property is called current user
const mapStateToProps = ({ currentUser })  => {
  return {
    currentUser
  }
}

export default connect( mapStateToProps, { getCurrentUser })(App);
