import React from 'react'
import { logout } from "../actions/currentUser.js"

import { connect } from 'react-redux'

const Logout = ({ logout }) => {
    return (
        <form onSubmit={logout}>
            <input type="submit" value="Log Out"/>
        </form>

    )
}

export  default connect(null,{ logout })(Logout)
