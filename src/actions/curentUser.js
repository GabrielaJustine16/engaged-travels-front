
//synchronus action creators = plain java obj
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//asynchronus action creaters= use dispacth, that returns a functionthat then returns a promise
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({usrname: "Justine16", password: "password" })

        })

    }
}