import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"


const NavBar = ({ currentUser }) => {
    return (
        <div className="navBar">
          { currentUser ? <strong>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}</strong>: ""}  
          { currentUser ? <Logout/> : <Login/> }  
        </div>


    )
}

const mapStateToProps = ({ currentUser })  => {
    return {
      currentUser
    }
  }

export  default connect( mapStateToProps)(NavBar)