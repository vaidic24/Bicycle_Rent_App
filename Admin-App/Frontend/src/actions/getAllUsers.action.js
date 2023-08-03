import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allUserConstants } from "./constants";

export const getAllUsers = () => { 
    
    return async (dispatch) => {

        dispatch ({
            type : allUserConstants.ALL_USER_REQUEST
        });

        const res = await axios.get('/getUser');
        // console.log("RES OF All Bicycles : " + res.data);
        
        if (res.status === 200) {
            
            dispatch ({
                type : allUserConstants.ALL_USER_SUCCESS,
                payload : { allUsers : res.data }
            });
        }
        else {
            dispatch ({
                type : allUserConstants.ALL_USER_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 