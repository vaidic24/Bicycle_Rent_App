import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allRequestConstants } from "./constants";

export const getAllRequests = () => { 

    return async (dispatch) => {

        dispatch ({
            type : allRequestConstants.ALL_REQUEST_REQUEST
        });

        const res = await axios.get('/getRequest');
        console.log("RES OF All REQUESTS : " + res.data.requests);
        
        
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
                type : allRequestConstants.ALL_REQUEST_SUCCESS,
                payload : { allRequests : res.data }
            });
        } 
        else {
            dispatch ({
                type : allRequestConstants.ALL_REQUEST_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 