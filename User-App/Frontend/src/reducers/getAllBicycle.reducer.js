import { allBicycleConstants } from "../actions/constants"
 
const initState = {
    error: null,
    allBicycles: [],
    loading: false 
}

export default (state = initState, action) => {
    switch(action.type){
        case allBicycleConstants.ALL_BICYCLE_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case allBicycleConstants.ALL_BICYCLE_SUCCESS:
            state = {
                ...state,
                allBicycles: action.payload.allBicycles,
                loading : false
            }
            break;

        case allBicycleConstants.ALL_BICYCLE_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


