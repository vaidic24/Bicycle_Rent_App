import { allRequestConstants } from "../actions/constants"
 
const initState = { 
    error: null,
    allRequests: [],
    loading: false  
} 
  
export default (state = initState, action) => {
    switch(action.type){
        case allRequestConstants.ALL_REQUEST_REQUEST: 
            state = {
                ...state,
                loading : true
            }
            break;

        case allRequestConstants.ALL_REQUEST_SUCCESS:
            state = {
                ...state,
                allRequests: action.payload.allRequests,
                loading : false
            }
            break;

        case allRequestConstants.ALL_REQUEST_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


