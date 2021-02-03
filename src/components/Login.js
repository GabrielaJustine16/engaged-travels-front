//putting form in redux so we need to add state. to do that we need a reducer first then an action to get to ut
import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

const Login = ({ loginFormData,updateLoginForm,login }) => {

    const handleInputChange = event => {
        const { name,value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/>
            <input type="submit" value="Log In"/>
        </form>

    )
}

//argument to this component 
const mapStateToProps = state => {
    return {
       loginFormData: state.loginForm
    }
}
export  default connect(mapStateToProps,{ updateLoginForm,login  })(Login)
//mapstatetoprops in this component lets me get the states from the store as props. we get props passed int a functional component as an argument and object and can call it whatever. we can also destruvutr it
//