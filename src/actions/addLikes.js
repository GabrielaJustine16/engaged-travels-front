export const incrementLikes = () => {
    return {
      type: "ADD_LIK",
      
      
    }
  }
  export const updateInput = num => {
    return {
      type: "UPDATE_INPUT",
      
    }
  }

  export default function addLikes(likes) {
    return (dispatch) => {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ likes }),
      };
  
      fetch('http://localhost:3000/post', options)
        .then((r) => r.json())
        .then((post) => {
          dispatch({ type: 'UPDATE_TRIP', payload: likes });
        });
    };
  }

  // export const likes = (credentials, history) => {
  //   return dispatch => {
  //     return fetch("http://localhost:3001/api/v1/login", {
  //       credentials: "include",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(credentials)
  //     })
  //       .then(r => r.json())
  //       .then(response => {
  //         if (response.error) {
  //           alert(response.error)
  //         } else {
  //           dispatch(setCurrentUser(response.data))
  //           dispatch(getMyTrips())
  //           dispatch(resetLoginForm())
  //           history.push('/')
  //         }
  //       })
  //       .catch(console.log)
  //   }
  // }

  