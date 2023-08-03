
import { declineReturnRequestConstants} from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const returnRequestDeclined = (requestIdObj) => {

    console.log(requestIdObj);

    return async (dispatch) => { 

        try {

            dispatch({ type: declineReturnRequestConstants.DECLINE_RETURN_REQUEST_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/declineReturnRequest', {
                ...requestIdObj
            });
            // path , payload 
 
            if (res.status === 200) {
                const { message } = res.data;
                
                dispatch({
                    type: declineReturnRequestConstants.DECLINE_RETURN_REQUEST_SUCCESS,
                    payload: {
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: declineReturnRequestConstants.DECLINE_RETURN_REQUEST_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        } 
        catch (error) {
            console.log(error);
        }

    }

}

