
import { postClickedConstants } from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const postClicked = (infro) => {

    console.log(infro);

    return async (dispatch) => {

        try {

            dispatch({ type: postClickedConstants.POST_CLICKED_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/postClicked', {
                ...infro
            });
            // path , payload 

 
            if (res.status === 200) {
                const { message } = res.data;
                // post craeted successfully 

                // localStorage.setItem( 'token' , token );
                // localStorage.setItem( 'user' , JSON.stringify(user) );

                dispatch({
                    type: postClickedConstants.POST_CLICKED_SUCCESS,
                    payload: {
                        // token,
                        // user 
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: postClickedConstants.POST_CLICKED_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}
