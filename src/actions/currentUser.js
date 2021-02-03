
//synchronus action creators = plain java obj
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//asynchronus action creaters= use dispacth, that returns a functionthat then returns a promise
export const login = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
//dispact current user
        })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)  
                } else {
                  dispatch(setCurrentUser(user))  
                }
            })
            .catch(console.log)

    }
}