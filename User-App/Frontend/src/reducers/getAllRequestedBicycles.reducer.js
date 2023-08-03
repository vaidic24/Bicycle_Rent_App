import { allRequestedBicycleConstants } from "../actions/constants"
 
const initState = {
    error: null,
    allRequestedBicycles: [],
    loading: false 
}

export default (state = initState, action) => {
    switch(action.type){
        case allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_SUCCESS:
            state = {
                ...state,
                allRequestedBicycles: action.payload.allRequestedBicycles,
                loading : false
            }
            break;

        case allRequestedBicycleConstants.ALL_REQUESTED_BICYCLE_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


