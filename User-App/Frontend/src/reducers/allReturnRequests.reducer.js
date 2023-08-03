import { allReturnRequestConstants } from "../actions/constants"
 
const initState = { 
    error: null,
    allReturnRequests: [],
    loading: false  
} 
  
export default (state = initState, action) => {
    switch(action.type){
        case allReturnRequestConstants.ALL_RETURN_REQUEST_REQUEST: 
            state = {
                ...state,
                loading : true
            }
            break;

        case allReturnRequestConstants.ALL_RETURN_REQUEST_SUCCESS:
            state = {
                ...state,
                allReturnRequests: action.payload.allReturnRequests,
                loading : false
            }
            break;

        case allReturnRequestConstants.ALL_RETURN_REQUEST_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


