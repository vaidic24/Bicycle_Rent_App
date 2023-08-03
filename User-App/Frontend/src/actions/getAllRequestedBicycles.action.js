import axios from "../helpers/axios"; // as its a default export so can write this as axios
import { allRequestedBicycleConstants } from "./constants";

export const getAllRequestedBicycles = () => { 

    return async (dispatch) => {

        dispatch ({
            type : allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_REQUEST
        });

        const res = await axios.get('/getRequestedBicycle');
        // console.log("RES OF All Bicycles : " + res.data);
        
        if (res.status === 200) {
            
            dispatch ({
                type : allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_SUCCESS,
                payload : { allRequestedBicycles : res.data }
            });
        }
        else {
            dispatch ({
                type : allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
} 

