import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

const Logout = ({ logout }) => {
    return (
        <form onSubmit={logout}>
            <input type="submit" value="Log Out"/>
        </form>

    )
}

export  default connect(null,{ logout })(Logout)
//mapstatetoprops in this component lets me get the states from the store as props. we get props passed int a functional component as an argument and object and can call it whatever. we can also destruvutr it
// i still need action (creator), another cse statement in currebt user reducer
//2 action creactor