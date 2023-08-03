
import { acceptReturnRequestConstants} from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const returnRequestAccepted = (requestIdObj) => {

    console.log(requestIdObj);
    console.log("Hi from returnRequestAccepted");
 
    return async (dispatch) => {

        try {

            dispatch({ type: acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/acceptReturnRequest', {
                ...requestIdObj
            });
            // path , payload 
 
            if (res.status === 200) {
                const { message } = res.data;

                dispatch({
                    type: acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_SUCCESS,
                    payload: {
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}

