import { bicycleConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        case bicycleConstants.BICYCLE_CREATE_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case bicycleConstants.BICYCLE_CREATE_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case bicycleConstants.BICYCLE_CREATE_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


