import { allMyBicycleConstants } from "../actions/constants"
 
const initState = {
    error: null,
    allMyBicycles: [],
    loading: false 
}

export default (state = initState, action) => {
    switch(action.type){
        case allMyBicycleConstants.ALL_MY_BICYCLE_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case allMyBicycleConstants.ALL_MY_BICYCLE_SUCCESS:
            state = {
                ...state,
                allMyBicycles: action.payload.allMyBicycles,
                loading : false
            }
            break;

        case allMyBicycleConstants.ALL_MY_BICYCLE_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


