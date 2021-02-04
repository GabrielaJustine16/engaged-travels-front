import { resetLoginForm } from "./loginForm.js"
import { getMyTrips } from "./myTrips.js"
import { resetSignupForm } from "./signupForm.js"

//synchronus action creators = plain java obj
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => { 
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


//asynchronus action creaters= use dispacth, that returns a functionthat then returns a promise
export const login = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
//dispact current user
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)  
                } else {
                  dispatch(setCurrentUser(response.data))
                  dispatch(getMyTrips())
                  dispatch(resetLoginForm())
                }
            })
            .catch(console.log)

    }
}

export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyTrips())
            dispatch(resetSignupForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }
  



export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout',{
            credentials: "include",
            method: "DELETE"
        })

    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
//dispact current user
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)  
                } else {
                  dispatch(setCurrentUser(response.data))  
                  dispatch (getMyTrips())
                  dispatch(resetSignupForm())
                }
            })
            .catch(console.log)

    }
}