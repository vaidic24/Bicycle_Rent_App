import { declineRequestConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false 
}

export default (state = initState, action) => {
    switch(action.type){
        case declineRequestConstants.ACCEPT_REQUEST_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case declineRequestConstants.ACCEPT_REQUEST_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case declineRequestConstants.ACCEPT_REQUEST_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


