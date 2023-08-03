
import { requestBicycleConstants } from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const bicycleRequested = (bicycleInfro) => {

    console.log(bicycleInfro);

    return async (dispatch) => {

        try {

            dispatch({ type: requestBicycleConstants.REQUEST_BICYCLE_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/createRequest', {
                ...bicycleInfro
            });
            // path , payload 
 
            if (res.status === 200) {
                const { message } = res.data;
                // post craeted successfully 

                // localStorage.setItem( 'token' , token );
                // localStorage.setItem( 'user' , JSON.stringify(user) );

                dispatch({
                    type: requestBicycleConstants.REQUEST_BICYCLE_SUCCESS,
                    payload: {
                        // token,
                        // user 
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: requestBicycleConstants.REQUEST_BICYCLE_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}
