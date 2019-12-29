import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios'
 
//redux think is applied here. it helps to return action and a dispatch function

// // const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })
export const signup = (user, ownProps) => {
    return async dispatch => {
            try {   
                const res = await axios.post(`http://localhost:5000/signup`, {
                email: user.EmailAddress,
                password: user.EnterPassword
            })
            dispatch({ type: AUTH_USER, payload: res.data.token })
            localStorage.setItem('token', res.data.token)
            ownProps.history.push(`/welcome`);
            
            }
     catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
        console.log(e)
    }
}
}
export const signin = (user, ownProps) => {
    return async dispatch => {
            try {   
                const res = await axios.post(`http://localhost:5000/signin`, {
                email: user.EmailAddress,
                password: user.EnterPassword
            })
            dispatch({ type: AUTH_USER, payload: res.data.token })
            localStorage.setItem('token', res.data.token)
            ownProps.history.push(`/welcome`);
            }
     catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid Login details' })
        console.log(e)
    }
}
}

export const signout = () => {
    localStorage.removeItem('token')

    return{
        type: AUTH_USER,
        payload:''
    }
}