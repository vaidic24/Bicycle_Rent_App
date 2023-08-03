
import { postConstants } from "./constants"
import axios from "../helpers/axios"; // as its a default export so can write this as axios

export const postM = (post) => {

    console.log(post);

    return async (dispatch) => {

        try {

            dispatch({ type: postConstants.POST_REGISTER_REQUEST });

            // here we are going to make API CALLS 
            const res = await axios.post('/createPost', {
                ...post
            });
            // path , payload 

 
            if (res.status === 200) {
                const { message } = res.data;
                // post craeted successfully 

                // localStorage.setItem( 'token' , token );
                // localStorage.setItem( 'user' , JSON.stringify(user) );

                dispatch({
                    type: postConstants.POST_REGISTER_SUCCESS,
                    payload: {
                        // token,
                        // user 
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: postConstants.POST_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            // Z1 --> in order to change the tken expiry thing you can do using this 
            // try catch   place it every where and    depending on the error.response.status   --> you can check this if 500 or something you can directly logout the user 
            // but here you have to place this try catch evrywhere 
            // solving this issue --> we will use axios to solve 
            // (problem --> user is logged in and token is expired ? )
            // (toekn will exist in the localstrorage ) but when you will send the request for something in the backend  --> the backend will say   token is expired and will send an error status 500
            console.log(error);
        }

    }

}
