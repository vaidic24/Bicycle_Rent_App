import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allReturnRequestConstants } from "./constants";

export const getAllReturnRequests = () => { 

    return async (dispatch) => {

        dispatch ({
            type : allReturnRequestConstants.ALL_RETURN_REQUEST_REQUEST
        });

        const res = await axios.get('/getReturnRequest');
        console.log("RES OF All RETURN REQUESTS : " + res.data.returnRequests);
        
        
        if (res.status === 200) {
            
            // this did not work 
            // const { postList } = res.data;
            // console.log("POSTLIST " + postList);

            // dispatch ({
            //     type : allPostsConstants.ALL_POSTS_SUCCESS,
            //     payload : { allPosts : postList }
            // });

            // but this worked 
            // dont know why 
            dispatch ({
                type : allReturnRequestConstants.ALL_RETURN_REQUEST_SUCCESS,
                payload : { allReturnRequests : res.data }
            });
        } 
        else {
            dispatch ({
                type : allReturnRequestConstants.ALL_RETURN_REQUEST_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 