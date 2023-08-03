import { requestBicycleConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false
}
 
export default (state = initState, action) => {
    switch(action.type){
        case requestBicycleConstants.REQUEST_BICYCLE_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case requestBicycleConstants.REQUEST_BICYCLE_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case requestBicycleConstants.REQUEST_BICYCLE_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}