
import { userConstants } from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios


export const signup = (user) => { // this is a function which takes an argument user  and returns a function   which again takes an argument  dispatch --> so we can dispatch an action 
     
    console.log(user);

    // dispatch( { type : authConstants.LOGIN_REQUEST } ) ;

    return async (dispatch) => {

        dispatch( { type : userConstants.USER_REGISTER_REQUEST } ) ;

        // here we are going to make API CALLS 
        const res = await axios.post('/signup' , {
            ...user
        });
        // path , payload 

        
        if (res.status === 200) {
            // const { token , user } = res.data;
            const { message } = res.data;

            dispatch({
                type : userConstants.USER_REGISTER_SUCCESS,
                payload : {
                    message
                }
            })
        }
        else {
            dispatch({
                type : userConstants.USER_REGISTER_FAILURE,
                payload : { error : res.data.error }
            })
        }

    }

}
