
import { acceptRequestConstants} from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const requestAccepted = (requestIdObj) => {
 
    console.log(requestIdObj);
 
    return async (dispatch) => {

        try {

            dispatch({ type: acceptRequestConstants.ACCEPT_REQUEST_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/acceptRequest', {
                ...requestIdObj
            });
            // path , payload 
 
            if (res.status === 200) {
                const { message } = res.data;
                // post craeted successfully 

                // localStorage.setItem( 'token' , token );
                // localStorage.setItem( 'user' , JSON.stringify(user) );

                dispatch({
                    type: acceptRequestConstants.ACCEPT_REQUEST_SUCCESS,
                    payload: {
                        // token,
                        // user 
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: acceptRequestConstants.ACCEPT_REQUEST_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}

