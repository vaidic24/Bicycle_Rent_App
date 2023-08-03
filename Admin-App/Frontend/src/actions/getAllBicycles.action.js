import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allBicycleConstants } from "./constants";

export const getAllBicycles = () => { 

    return async (dispatch) => {
        
        dispatch ({
            type : allBicycleConstants.ALL_BICYCLE_REQUEST
        });

        const res = await axios.get('/getBicycle');
        console.log("RES OF All Bicycles : " + res.data);
        
        
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
                type : allBicycleConstants.ALL_BICYCLE_SUCCESS,
                payload : { allBicycles : res.data }
            });
        }
        else {
            dispatch ({
                type : allBicycleConstants.ALL_BICYCLE_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 