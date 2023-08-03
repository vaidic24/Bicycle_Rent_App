import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allMyBicycleConstants } from "./constants";

export const getMyBicycles = () => { 

    return async (dispatch) => {

        dispatch ({
            type : allMyBicycleConstants.ALL_MY_BICYCLE_REQUEST
        });

        const res = await axios.get('/myBicycles');
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
                type : allMyBicycleConstants.ALL_MY_BICYCLE_SUCCESS,
                payload : { allMyBicycles : res.data }
            });
        }
        else {
            dispatch ({
                type : allMyBicycleConstants.ALL_MY_BICYCLE_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 