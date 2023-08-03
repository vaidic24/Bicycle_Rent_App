// import axiosInstance from "../helpers/axios";
import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { authConstants, userConstants } from "./constants"


export const login = (user) => { // this is a function which takes an argument user  and returns a function   which again takes an argument  dispatch --> so we can dispatch an action 
    
    console.log(user);

    // dispatch( { type : authConstants.LOGIN_REQUEST } ) ;

    return async (dispatch) => {

        dispatch( { type : authConstants.LOGIN_REQUEST } ) ;

        // here we are going to make API CALLS 
        const res = await axios.post('/signin' , {
            ...user
        });
        // path , payload 

        
        if (res.status === 200) {
            const { token , user } = res.data;

            localStorage.setItem( 'token' , token );
            localStorage.setItem( 'user' , JSON.stringify(user) );

            dispatch({
                type : authConstants.LOGIN_SUCCESS,
                payload : {
                    token,
                    user 
                }
            })
        }
        else {
            dispatch({
                type : authConstants.LOGIN_FAILURE,
                payload : { error : res.data.error }
            })
        }


        // // dispatch an action 
        // // takes an object --> 1st type  2nd Payload 
        // dispatch( { 
        //     type : authConstants.LOGIN_REQUEST,
        //     payload : {
        //         ...user
        //     }
        // } )
    }

}



export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));

            dispatch({
                type : authConstants.LOGIN_SUCCESS,
                payload : {
                    token,
                    user 
                }
            })

        }
        else {

            dispatch({
                type : authConstants.LOGIN_FAILURE,
                payload : { error : 'Failed to login in  ' }
            })

        }

        // if (token) {
        //     dispatch({
        //         payload : {
        //             token
        //         }
        //     });
        // }
        // else {
        //     dispatch({
        //         payload : {
        //             authenticate : false,
        //             message : 'User needs to login'
        //         }
        //     });
        // }
    }
}


export const signoutcall = () => {
    return async dispatch => {

        dispatch( { type : authConstants.LOGOUT_REQUEST } );

        const res = await axios.post('/signout');
        // but we need to send toekn also from here 

        if (res.status === 200) {

            localStorage.clear();

            dispatch({
                type : authConstants.LOGOUT_SUCCESS
            });
        }
        else {
            
            dispatch( { 
                type : authConstants.LOGOUT_FAILURE,
                payload : {error : res.data.error}
            } );


        }


    }
}